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

(defn vec-div
  "Returns the dividing product of the vector."
  [v num]
  (map #(/ % num) v))

(defn vec-plus [v1 v2]
  (map + v1 v2))

(defn next-state
  "Returns the next state after the interval."
  [state interval]
  (let [{{:keys [m v pos]} :craft} state
        {planets :planets} state
        forces (map :force planets)
        product-forces (map apply forces (repeat [m pos]))
        delta-v (reduce #(map + %1 %2) (map #(vec-div % m) product-forces))]
    ;; to be cotinued...
    ))
