(ns space.game
  (:require [space.drawer :as drawer]
            [space.calc :as calc]))

(enable-console-print!)

;; example render data format (in map):
;; {
;; :type :circle
;; :args [0 0 10]
;; :rotation {:angle 3.141592 :cx 10 :cy 10}
;; :color "#123456"
;; }

;; An animator must returns a seq of render datas to be displayed.
;; The meaning of an animator is more than some animation executors,
;; it can perform game data update and calculation as well.
;; It can even yields no rendering datas.

(defn hello [x y]
  (println "You've clicked " x " " y))

(def prev-timestamp (atom -1))
(def animators (atom []))
(def craft-status (atom []))
(def planets (atom []))
(def mouse-region (atom [{:x 0.1,
                          :y 0.1,
                          :w 0.15,
                          :h 0.05
                          :handler hello}]))

(def simple-map {:planets [{:x 0.5, :y 0.5, :r 0.05, :m 10, :color [0 255 255 1]}]
                 :craft [{:x 0.5, :y 0.3, :m 10,
                          :v [0.15 0], :a [0 0],
                          :a-value 0,
                          :a-angle 0}]})

(def coord-orig->frame nil)
(def coord-frame->orig nil)
(def coord-orig:frame nil)
(def coord-orig-w nil)
(def coord-orig-h nil)

(defn random-color
  "Returns a random color in a array."
  []
  (concat (take 3 (repeatedly (partial rand-int 256))) [1]))

(defn random-color-3
  "Returns a random color in a array with 3 values."
  []
  (take 3 (repeatedly #(rand-int 256))))

(defn coord-fun
  "Returns the coordinate system converters."
  [width height]
  (if (>= width height)
    [height
     (fn orig->frame
       [x y]
       (let [offset (/ (- width height) 2)]
         [(/ (- x offset) height) (/ y height)]))
     (fn frame->orig
       [x y]
       (let [offset (/ (- width height) 2)]
         [(+ offset (* x height)) (* y height)]))]
    (let [[o-f o->f f->o] (coord-fun height width)]
      [o-f
       (fn orig->frame
         [x y]
         (reverse (o->f y x)))
       (fn frame->orig
         [x y]
         (reverse (f->o y x)))])))

(defn init-coord!
  "Initialize the coordinate system."
  [width height]
  (set! coord-orig-w width)
  (set! coord-orig-h height)
  (let [[o-f o->f f->o] (coord-fun width height)]
    (set! coord-orig:frame o-f)
    (set! coord-orig->frame o->f)
    (set! coord-frame->orig f->o)))

(init-coord! 500 200) ; debug time: temporary usage

(defn normal-arg-wrapper
  "Returns a vector of transformed coordinate values and size values.
  First two values are coordinate values, and the rest is size values,
  e.g. radius, length."
  [x y & values]
  (let [[xx yy] (coord-frame->orig x y)
        vvalues (map #(* coord-orig:frame %) values)]
    (concat [xx yy] vvalues)))

(defn shape-arg-wrapper
  "Returns a vector of transformed points for shape data."
  [& points]
  (map #(apply coord-frame->orig %) points))

(defn rotation-wrapper
  "Returns a map of transformed rotation data."
  [rotation]
  (let [{:keys [cx cy]} rotation
        [cxx cyy] (coord-frame->orig cx cy)]
    (assoc rotation :cx cxx :cy cyy)))

(defn rotating-shape-data-wrapper
  "Returns the shape render data with x and y transformed because of rotation."
  [data]
  (let [points (:args data)
        {{:keys [cx cy]} :rotation} data
        new-points (map (fn [[x y]] [(- x cx) (- y cy)]) points)]
    (assoc data :args new-points)))

(defn- add-animator
  "Adds an animator to the animators list."
  [animator]
  (let [item {:animator animator, :initial (drawer/now)}]
    (swap! animators #(conj % item))))

(defn add-animators
  "Adds several animators to the animators list."
  [& ani]
  (doall (map add-animator ani)))

(defn gen-animator
  [ani]
  "Returns a map of paired animator and timestamp."
  {:animator ani,
   :initial (drawer/now)})

(defn gen-animators
  [anis]
  "Returns a lazy seq of maps pairing animators with timestamp."
  (map gen-animator anis))

(defn planet-waves-animator
  "Return an animator of planet waves with given params."
  [x y min-r max-r duration color]
  (fn [dr itv]
       (let [t (mod dr duration)
             stage (/ t duration)
             r (+ min-r (* stage (- max-r min-r)))
             alpha (- 0.5 (* stage 0.5))]
         {:data [{:type :circle
                         :args (normal-arg-wrapper x y r)
                         :rotation nil
                  :color (drawer/rgba (first color) (second color) (last color) alpha)}]
          :ani [:self]})))

(defn planet-animator
  "Returns an animator of a planet with given params."
  [x y r color]
  (fn [_ _]
    {:data [{:type :circle
             :args (normal-arg-wrapper x y r)
             :rotation nil
             :color (apply drawer/rgba color)}]
     :ani [:self]}))

(defn create-planet
  "Creates and add a planet."
  [x y r color]
  [(planet-animator x y r color)
   (planet-waves-animator x y
                          r (* r 2)
                          2500
                          (take 3 color))])

(defn partition-animator
  "Returns an animator displaying a moving partition."
  [x y r color end-x end-y duration]
  (fn [dr _]
    (if (> dr duration)
      {:data []
       :ani []}
      (let [stage (/ dr duration)
           delta-x (- end-x x)
           delta-y (- end-y y)
           now-x (+ x (* delta-x stage))
           now-y (+ y (* delta-y stage))]
       {:data [{:type :circle
                :args (normal-arg-wrapper now-x now-y r)
                :rotation nil
                :color (apply drawer/rgba (concat color [(- 1 stage)]))}]
        :ani [:self]}))))

(defn partitions-generator
  "Returns a lazy seq of partition animators with given params.
  Source-x source-y and source-r determine the start point of partitions (in a cube).
  Min-r determines the miniest size of the partition, max can be 1.5 times.
  Min-len determines the nearest move offset of partitions, max can be 1.5 * min-len.
  Min-duration determines the shortest duration of the partitions, max 1.5 times.
  Num is the quantity to generate."
  [source-x source-y source-r min-r min-len min-duration num]
  (let [start-offsets (take
                       num
                       (repeatedly #(list (- 1 (rand 2)) (- 1 (rand 2)))))
        start-offsets (map calc/vec* (repeat source-r) start-offsets)
        start-points (map calc/vec+ (repeat [source-x source-y]) start-offsets)
        lengths (map calc/vec* (repeatedly #(+ 1 (rand 0.5))) (repeat num min-len))
        end-points (map calc/vec+ start-points lengths)
        rs (map * (repeat num min-r) (repeatedly #(+ 1 (rand 0.5))))
        durations (map * (repeat num min-duration) (repeatedly #(+ 1 (rand 0.5))))
        ;;colors (repeat [255 255 0])
        colors (repeatedly random-color-3)]
    (map partition-animator
         (map first start-points)
         (map last start-points)
         rs
         colors
         (map first end-points)
         (map last end-points)
         durations)))

(defn craft-animator
  "Returns a animator of the scaft getting data from given provider,
  performs update using given updater."
  [provider updater]
  (fn [duration interval]
    (updater interval)
    (let [data (provider)
          {:keys [x y v a a-value a-angle]} data
          ship [(rotating-shape-data-wrapper
                 {:type :shape,
                  :args (shape-arg-wrapper [(- x 0.02) (- y 0.03)]
                                           [x (- y 0.03)]
                                           [(+ x 0.01) (- y 0.02)]
                                           [(+ x 0.08) (- y 0.01)]
                                           [(+ x 0.08) (+ y 0.01)]
                                           [(+ x 0.01) (+ y 0.02)]
                                           [x (+ y 0.03)]
                                           [(- x 0.02) (+ y 0.03)]),
                  :rotation (rotation-wrapper {:angle (* a-angle calc/PI),
                                               :cx x,
                                               :cy y}),
                  :color "#1a237e"})
                {:type :circle,
                 :args (normal-arg-wrapper x y 0.01)
                 :rotation nil
                 :color "white"}]
          num (if (> (rand) 0.80) 1 0)
          partitions (partitions-generator x y 0.01 0.0025
                                           (calc/vec- (calc/vec* 5 a))
                                           800
                                           num)]
      {:data ship
       :ani (concat (gen-animators partitions) [:self])})))

(defn button-animator
  "Returns a button animator rendering a button at given pos."
  [text x y w h color]
  (fn [_ _]
    {:data [{:type :rect,
             :args (normal-arg-wrapper x y w h)
             :rotation nil
             :color (apply drawer/rgba color)}
            {:type :text,
             :args (concat [text] (normal-arg-wrapper (+ x (/ w 2))
                                                      (+ y (/ h 2) 0.01)))}]
     :ani [:self]}))

(defn default-button-animator
  "Returns a default button animator."
  [text x y]
  (button-animator text x y 0.15 0.05 [199 211 232 1]))

;;(create-planet 0.5 0.5 0.1 [0 255 255 1])

(defn generate-forcefields
  "Returns a lazy seq of force fields generated by the map."
  [planets]
  (map (fn [{:keys [x y m]}]
         (calc/gravity-forcefield x y m))
       planets))

(defn new-acc
  "Returns the craft status of new acc."
  [cs]
  (let [{:keys [a-value a-angle]} cs
        a (calc/vec-by-length [1 0] a-value)
        a (calc/rotated-vec a (* a-angle calc/PI))]
    (assoc cs :a a)))

(defn normal-updater
  "The data updater agent for the craft animator."
  [interval]
  (swap! craft-status #(map new-acc % (repeat 0)))
  (swap! craft-status #(calc/next-state-period
                        {:objects %
                         :forcefields (generate-forcefields @planets)}
                        (/ interval 1000)
                        0.01)))

(defn text-animator
  "Returns a simple text label animator."
  [provider x y]
  (fn [_ _]
    {:data [{:type :text,
             :args (concat [(provider)] (normal-arg-wrapper x y))}]
     :ani [:self]}))

(defn current-info
  "Returns the current info string."
  []
  (let [craft (first @craft-status)]
    (str "Acc value: " (:a-value craft)
         ", Acc angle: " (:a-angle craft) "pi")))

(def info-label
  (text-animator current-info 0.5 0.05))

(defn startup-animator
  "Returns a startup animator with the map data given."
  [data]
  (fn [_ _]
    (set! animators (atom []))
    (swap! craft-status #(:craft data))
    (swap! planets #(:planets data))
    (let [planets (:planets data)
          pa (for [{:keys [x y r color]} planets] (create-planet x y r color))
          pa (reduce concat pa)
          craft-ani (craft-animator #(first @craft-status) normal-updater)]
      {:data []
       :ani (gen-animators (concat pa [craft-ani info-label]))})))

(defn startup-by-map!
  "Clears up the animators and add a startup animator to animators."
  [data]
  (set! animators (atom []))
  (let [animator (startup-animator data)]
    (add-animator animator)))

(startup-by-map! simple-map)

(defn render-each
  "Returns render data of each animator."
  [{:keys [animator initial]} timestamp]
  (let [duration (- timestamp initial)
        interval (- timestamp @prev-timestamp)
        data (animator duration interval)
        new-anis (map #(if (= % :self) {:animator animator, :initial initial} %) (:ani data))]
    (assoc data :ani new-anis)))

(defn render
  "Updates current state and return render data for rendering."
  [timestamp]
  (when (= @prev-timestamp -1)
    (swap! prev-timestamp (fn [_] timestamp)))
  (let [res (map render-each @animators (repeat timestamp))
        datas (map :data res)
        datas (reduce concat datas)
        anis (map :ani res)
        anis (reduce concat anis)]
    (swap! prev-timestamp (fn [_] timestamp))
    (swap! animators (fn [_] anis))
    datas))

(defn in-region?
  "Checks if the point is inside the region."
  [[mx my] {:keys [x y w h]}]
  (and (<= (- mx x) w) (<= (- my y) h)))

(defn onclick-handler
  "Handles the on click event"
  [x y]
  (let [[fx fy] (coord-orig->frame x y)]
    (swap! planets #(conj % {:x fx, :y fy, :m 3.0}))
    (add-animator (fn [_ _] {:data [],
                             :ani (gen-animators
                                   (create-planet
                                    fx fy (* 0.1 (rand)) (random-color)))}))
    (doall (map (fn [re]
                   (when (in-region? [fx fy] re)
                     ((:handler re) fx fy))) @mouse-region))))

(def da 0.01)
(def da-angle 0.05)

(defn craft-modifier
  [k mod]
  (fn [cs]
    (assoc cs k (mod (k cs)))))

(defn keydown-handler
  "Handles the keydown event."
  [k]
  (condp = k
    :up (swap! craft-status #(map (craft-modifier :a-value
                                                  (fn [x] (+ x da)))
                                  %))
    :down (swap! craft-status #(map (craft-modifier :a-value
                                                    (fn [x]
                                                      (if (> x 0)
                                                        (- x da)
                                                        0)))
                                    %))
    :left (swap! craft-status #(map (craft-modifier :a-angle
                                                    (fn [x]
                                                      (mod (- x -2 da-angle)
                                                           2)))
                                    %))
    :right (swap! craft-status #(map (craft-modifier
                                        :a-angle
                                        (fn [x]
                                          (mod (+ x da-angle) 2)))
                                     %))
    (println k)))
