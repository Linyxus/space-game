(ns space.drawer)

(def pi (.-PI js/Math))

(defn now
  "Return current timestamp. (ms) "
  []
  (.getTime (js/Date.)))

(defn deg->rad
  "Transforms deg angle to rad angle."
  [angle]
  (* angle (/ pi 180)))

(defn clear-canvas
  "Clears the canvas."
  [{:keys [width height ctx]}]
  (.clearRect ctx 0 0 width height))

(defn reset-transforms
  "Clears all transformations."
  [ctx]
  (.transform ctx 1 0 0 1 0 0))

(defn reset-canvas
  "Clears the canvas and reset transformations."
  [info]
  (clear-canvas info)
  (reset-transforms info))

(defn rgba
  "Transforms the values into rgba string."
  [& values]
  (let [csv (apply str (interpose "," values))]
    (str "rgba(" csv ")")))

(defn coloring
  "Changes the brush color of the canvas."
  [ctx color]
  (aset ctx "fillStyle" color))

(defn prepare-background
  "Resets canvas and fill background."
  [info color]
  (reset-canvas info)
  (let [{:keys [width height ctx]} info]
    (coloring ctx color)
    ;(color ctx color)
    (.fillRect ctx 0 0 width height)))

(defn fill-rect
  "The wrapper of HTML Canvas API fillRect."
  [ctx x y w h]
  (.fillRect ctx x y w h))

(defn draw-circle
  "Draws a circle on the canvas."
  [ctx x y r]
  (.beginPath ctx)
  (.arc ctx x y r 0 (* 2 (.-PI js/Math)))
  (.closePath ctx)
  (.fill ctx))

(defn rotating
  "Sets the rotation of the canvas, with the center point."
  [ctx angle cx cy]
  (.translate ctx cx cy)
  (.rotate ctx angle))

(defn draw-shape
  "Draws a triangle with given prints."
  [ctx & points]
  (.beginPath ctx)
  (.moveTo ctx (-> points first first) (-> points first second))
  (doseq [point (rest points)]
    (.lineTo ctx (first point) (second point)))
  (.closePath ctx)
  (.fill ctx))

(def std-revealer {:rect fill-rect,
                   :circle draw-circle
                   :shape draw-shape})

;; example data format (in map):
;; {
;; :type :circle
;; :args [0 0 10]
;; :rotation {:angle 3.141592 :cx 10 :cy 10}
;; :color "#123456"
;; }

(defn render-data
  "Renders objects on the canvas according to the data and revealer given."
  [ctx data revealer]
  (doseq [rec data]
    (reset-transforms ctx)
    (let [{rotation :rotation} rec
          {:keys [angle cx cy]} rotation]
      (when (and angle cx cy)
        (rotating ctx angle cx cy)))
    (let [{:keys [color]} rec]
      (when color
        (coloring ctx color)))
    (apply (revealer (:type rec)) (conj (apply list (:args rec)) ctx))))
