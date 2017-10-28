(ns space.game
  (:require [space.drawer :as drawer]))

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


(def prev-timestamp (atom -1))
(def animators (atom []))
(def coord-orig->frame nil)
(def coord-frame->orig nil)
(def coord-orig:frame nil)

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

(defn values-frame->orig
  "Transforms from frame to original. The first two params are x and y, the rest will
  be processed by multipying the ratio."
  [x y & values]
  (let [[xx yy] (coord-frame->orig x y)
        vvalues (map #(* coord-orig:frame %) values)]
    (concat [xx yy] vvalues)))

(defn planet-waves-animator
  "Return an animator of planet waves with given params."
  [x y min-r max-r duration color]
  (fn [dr itv]
       (let [t (mod dr duration)
             stage (/ t duration)
             r (+ min-r (* stage (- max-r min-r)))
             alpha (- 0.5 (* stage 0.5))]
         [{:type :circle
           :args [x y r]
           :rotation nil
           :color (drawer/rgba (first color) (second color) (last color) alpha)}])))

(defn planet-animator
  "Returns an animator of a planet with given params."
  [x y r color]
  (fn [_ _]
    [{:type :circle
      :args [x y r]
      :rotation nil
      :color (apply drawer/rgba color)}]))

(defn partition-animator
  "Returns an animator displaying a moving partition."
  [x y r color end-x end-y duration]
  (fn [dr _]
    (let [stage (/ dr duration)
          delta-x (- end-x x)
          delta-y (- end-y y)
          now-x (+ x (* delta-x stage))
          now-y (+ y (* delta-y stage))]
      [{:type :circle
        :args [now-x now-y r]
        :rotation nil
        :color (drawer/rgba (first color) (second color) (last color) stage)}])))

(defn- add-animator
  "Adds an animator to the animators list."
  [animator]
  (let [item {:animator animator, :initial (drawer/now)}]
    (swap! animators #(conj % item))))

(defn add-animators
  "Adds several animators to the animators list."
  [& ani]
  (doall (map add-animator ani)))

(defn create-planet
  "Creates and add a planet."
  [x y r color]
  (add-animators (planet-animator x y r color)
                 (planet-waves-animator x y
                                        r (* r 2)
                                        2500
                                        (take 3 color))))

(create-planet 0.5 0.5 0.1 [0 255 255 1])

(defn render-each
  "Returns render data of each animator."
  [{:keys [animator initial]} timestamp]
  (let [duration (- timestamp initial)
        interval (- timestamp prev-timestamp)
        data (animator duration interval)]
    (map #(assoc % :args (apply values-frame->orig (:args %))) data)))

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
  (when (= prev-timestamp -1)
    (set! prev-timestamp timestamp))
  (let [res (map render-each @animators (repeat timestamp))
        ret (reduce concat res)]
    (set! prev-timestamp timestamp)
    (swap! animators (partial filter-animators res))
    ret))

(defn random-color
  "Returns a random color in a array."
  []
  (concat (take 3 (repeatedly (partial rand-int 256))) [1]))

(defn onclick-handler
  "Handles the on click event"
  [x y]
  (let [[fx fy] (coord-orig->frame x y)]
    (create-planet fx fy (* 0.1 (rand)) (random-color))))
