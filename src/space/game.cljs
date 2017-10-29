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
;; it can perform game data update and calculation as well,
;; even add other animator is recommended.
;; Because animators actually consist of some main role animations,
;; and many one-time effects produced is in temp-animators, will be cleared once
;; returning nil.

(def prev-timestamp (atom -1))
(def animators (atom []))
(def temp-animators (atom []))
(def craft-status (atom {}))
(def planets (atom []))

(def simple-map {:planets [{:x 0.5, :y 0.5, :r 0.05, :m 10, :color [0 255 255 1]}]
                 :craft [{:x 0.4, :y 0.6, :m 10,
                          :v [0.15 0], :a [-0.04 -0.015]}]})

(def coord-orig->frame nil)
(def coord-frame->orig nil)
(def coord-orig:frame nil)

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
  (let [[o-f o->f f->o] (coord-fun width height)]
    (set! coord-orig:frame o-f)
    (set! coord-orig->frame o->f)
    (set! coord-frame->orig f->o)))

(init-coord! 100 100) ; debug time: temporary usage

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

(defn add-temp-animator
  "Adds an animator to temp-animators."
  [animator]
  (let [item {:animator animator, :initial (drawer/now)}]
    (swap! temp-animators #(conj % item))))

(defn add-temp-animators
  [anis]
  (doall (map add-temp-animator anis)))

(defn planet-waves-animator
  "Return an animator of planet waves with given params."
  [x y min-r max-r duration color]
  (fn [dr itv]
       (let [t (mod dr duration)
             stage (/ t duration)
             r (+ min-r (* stage (- max-r min-r)))
             alpha (- 0.5 (* stage 0.5))]
         [{:type :circle
           :args (normal-arg-wrapper x y r)
           :rotation nil
           :color (drawer/rgba (first color) (second color) (last color) alpha)}])))

(defn planet-animator
  "Returns an animator of a planet with given params."
  [x y r color]
  (fn [_ _]
    [{:type :circle
      :args (normal-arg-wrapper x y r)
      :rotation nil
      :color (apply drawer/rgba color)}]))

(defn partition-animator
  "Returns an animator displaying a moving partition."
  [x y r color end-x end-y duration]
  (fn [dr _]
    (if (> dr duration)
      nil
      (let [stage (/ dr duration)
           delta-x (- end-x x)
           delta-y (- end-y y)
           now-x (+ x (* delta-x stage))
           now-y (+ y (* delta-y stage))]
       [{:type :circle
         :args (normal-arg-wrapper now-x now-y r)
         :rotation nil
         :color (apply drawer/rgba (concat color [(- 1 stage)]))}]))))

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
          {:keys [x y v a]} data
          v-angle (calc/rotation-by-vector v)
          a-angle (calc/rotation-by-vector a)
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
                  :rotation (rotation-wrapper {:angle v-angle, :cx x, :cy y}),
                  :color "#1a237e"})
                {:type :circle,
                 :args (normal-arg-wrapper x y 0.01)
                 :rotation nil
                 :color "white"}]
          num (if (> (rand) 0.80) 1 0)
          partitions (partitions-generator x y 0.01 0.0025
                                           (calc/vec- (calc/vec* 1 v))
                                           800
                                           num)]
      (add-temp-animators partitions)
      ship)))

(defn create-planet
  "Creates and add a planet."
  [x y r color]
  (add-animators (planet-animator x y r color)
                 (planet-waves-animator x y
                                        r (* r 2)
                                        2500
                                        (take 3 color))))

;;(create-planet 0.5 0.5 0.1 [0 255 255 1])

(defn normal-update-each
  "Returns the updated status of given craft data."
  [interval data]
  (let [{:keys [x y v a]} data
        sec (/ interval 1000)
        vv (calc/vec+ v (calc/vec* sec a))
        [dx dy] (calc/vec* sec vv)
        [xx yy] (calc/vec+ [dx dy] [x y])]
    (assoc data :v vv :x xx :y yy)))

(defn normal-updater
  "The data updater agent for the craft animator."
  [interval]
  (swap! craft-status (fn [data] (map (partial normal-update-each interval) data))))

(defn initialize-by-map!
  "Initializes with map data given."
  [data]
  (swap! craft-status #(:craft data))
  (set! animators (atom []))
  (let [planets (:planets data)]
    (doseq [{:keys [x y r color]} planets]
      (create-planet x y r color)))
  (let [craft (craft-animator #(first (deref craft-status)) normal-updater)]
    (add-animator craft)))

(initialize-by-map! simple-map)

(defn render-each
  "Returns render data of each animator."
  [{:keys [animator initial]} timestamp]
  (let [duration (- timestamp initial)
        interval (- timestamp @prev-timestamp)
        data (animator duration interval)]
    data))

(defn filter-animators
  "Filters the animators. This function will remove the animators returning nil,
  with the results given. Returns a lazy seq."
  [res ani]
  (let [pairs (map list res ani)
        pairs (filter #(-> (first %) nil? not) pairs)]
    (map #(last %) pairs)))

(defn render
  "Updates current state and return render data for rendering."
  [timestamp]
  (when (= @prev-timestamp -1)
    (swap! prev-timestamp (fn [_] timestamp)))
  (let [res (map render-each @animators (repeat timestamp))
        ret (reduce concat res)
        tmp-res (map render-each @temp-animators (repeat timestamp))
        tmp-ret (reduce concat tmp-res)]
    (swap! prev-timestamp (fn [_] timestamp))
    (swap! temp-animators (partial filter-animators tmp-res))
    (concat ret tmp-ret)))

(defn onclick-handler
  "Handles the on click event"
  [x y]
  (let [[fx fy] (coord-orig->frame x y)]
    (create-planet fx fy (* 0.1 (rand)) (random-color))))
