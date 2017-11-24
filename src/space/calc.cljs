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

(defn floor
  "A wrapper of Math.floor"
  [x]
  (.floor js/Math x))

(defn rotation-by-vector
  "Returns the clockwice rotation degree from x-axis of the vector."
  [v]
  (let [angle (angle-of [1 0] v)
        [x y] v]
    (if (< y 0)
      (- angle)
      angle)))

(defn vec-by-length
  "Returns a new vector of given length having the same direction with given."
  [v len]
  (vec* len (vecdiv v (vecmode v))))

;; Compute data format:
;; {:objects [{:x 0.1, :y 0.1, :v 1.0, :a 0.5}],
;;  :forcefields [(fn [x y] [1.0 1.0])]}

(defn gravity-forcefield
  "Returns a function that can be used as a forcefield of gravity."
  [x y m]
  (fn [ox oy]
    (let [d (distance [x y] [ox oy])
          f (/ (* m 0.001) (square d))
          a (vec-by-length (vec+ [x y] (vec- [ox oy])) f)]
      a)))

(defn next-state-each
  "Returns the next state for each object."
  [craft forcefields dt]
  (let [{:keys [x y v a]} craft
        force-a (map #(% x y) forcefields)
        sum-a (apply vec+ force-a)
        sum-a (vec+ sum-a a)
        dv (vec* dt sum-a)
        ddv (vecdiv dv 2)
        v-bar (vec+ v ddv)
        dx (vec* dt v-bar)
        [xx yy] (vec+ [x y] dx)
        vv (vec+ v dv)]
    (assoc craft :x xx :y yy :v vv)))

;; (def test-state
;;   {:objects [{:x 0.13, :y 0.25, :v [0 0], :a [0.3 2.1]}
;;              {:x 0.12, :y 0.25, :v [1 0], :a [0.3 2.1]}
;;              {:x 0.1, :y 0.32, :v [0 0], :a [0.3 2.1]}]
;;    :forcefields [(gravity-forcefield 0.1 0.2 5.0)
;;                  (gravity-forcefield 0.3 0.1 2.3)]})

(defn next-state
  "Returns the next state by given data."
  [data dt]
  (let [{:keys [objects forcefields]} data]
    {:objects (map next-state-each objects
                   (repeat forcefields)
                   (repeat dt))
     :forcefields forcefields}))

(defn next-state-period
  "Returns the next state after a period using given interval."
  [data duration dt]
  (let [t (floor (/ duration dt))
        r (- duration (* t dt))
        state1 (or (last (take t (iterate #(next-state % dt) data)))
                  data)
        state2 (next-state state1 dt)]
    (:objects state2)))

