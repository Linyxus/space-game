(ns space.calc)

(enable-console-print!)

;; Status data format:
;; craft:
;; {:m 1, :v [1 1], :pos [x y]}
;; planet:
;; {:force (fn [m [x y]] (list 10 10), ; receives the position and mass of the craft,
;;                                 ; returns the force.
;;  :pos [x y]}
;; main:
;; {:craft craft-data, :planets [planet1, planet2]}

(def PI (.-PI js/Math))

(defn arccos
  "Calculates the arccosin of the number."
  [x]
  (.acos js/Math x))

(defn sqrt
  "Calculates the sqrt of the number."
  [x]
  (.sqrt js/Math x))

(defn square
  "Calculates the square of the number."
  [x]
  (* x x))

(defn distance
  "Returns the distance of two given points."
  [p1 p2]
  (sqrt (reduce + (map #(square (- %1 %2)) p1 p2))))

(defn vecdot
  "Returns the dot product of the two vectors."
  [v1 v2]
  (reduce + (map * v1 v2)))

(defn vec+
  "Returns the sum of given vectors."
  [& vs]
  (apply (partial map +) vs))

(defn vecdiv
  "Returns vector / num."
  [v n]
  (map / v (repeat n)))

(defn vecmode
  "Returns the mode of the vector."
  [v]
  (distance [0 0] v))

(defn vec*
  "Returns num * vector."
  [n v]
  (map * v (repeat n)))

(defn vec-
  "Returns -vec."
  [v]
  (map - v))

(defn cos-of
  "Returns the cosine of the angle of two vectors."
  [v1 v2]
  (/ (vecdot v1 v2) (* (vecmode v1) (vecmode v2))))

(defn angle-of
  "Returns the angle of the two vectors."
  [v1 v2]
  (arccos (cos-of v1 v2)))

(defn rotation-by-vector
  "Returns the clockwice rotation degree from x-axis of the vector."
  [v]
  (let [angle (angle-of [1 0] v)
        [x y] v]
    (if (< y 0)
      (- angle)
      angle)))

(rotation-by-vector [0.1 0.1])
