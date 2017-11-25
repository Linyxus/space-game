(ns space.core
  (:require [space.drawer :as drawer]
            [space.game :as game]))

(enable-console-print!)

(println "Hello! Here is space.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(def canvas-dom (.getElementById js/document "layer"))

(defn canvas-info [dom]
  {:width (.-width dom)
   :height (.-height dom)
   :ctx (.getContext dom "2d")})

(defn- init-canvas! []
  (set! (.-width canvas-dom) (.-clientWidth (.-body js/document)))
  (set! (.-height canvas-dom) (.-clientHeight (.-body js/document))))

(init-canvas!)
(def cvs-info (canvas-info canvas-dom))
(def ctxt (:ctx cvs-info))

(game/init-coord! (:width cvs-info) (:height cvs-info))

(js/setInterval #(do
                   (drawer/reset-canvas cvs-info)
                   (drawer/render-data ctxt
                                       (game/render (drawer/now))
                                       drawer/std-revealer)) 17)

;;(drawer/coloring ctxt "#1a237e")
;;(drawer/set-font ctxt "1em serif")
;;(drawer/center-text ctxt "Hello World" 500 500)
;;(drawer/draw-circle ctxt 100 100 10)
;;(drawer/rotating ctxt 0.7853 100 100)
;;(drawer/draw-shape ctxt [-30 -20] [30 -20] [30 20] [-30 20])
;;(drawer/reset-transforms)
;;(drawer/draw-shape ctxt [80 80] [120 80] [120 120] [80 120])

(def key-map
  {87 :up, 119 :up, 65 :left, 68 :right,
   83 :down, 97 :left, 100 :right, 115 :down})

(defn key-of
  "Returns the key of the given event."
  [e]
  (key-map (.-keyCode e)))

(defn handle-click
  "Handles the click event."
  [e]
  (let [x (- (.-pageX e) (.-offsetLeft canvas-dom))
        y (- (.-pageY e) (.-offsetTop canvas-dom))]
    (game/onclick-handler x y)))

(defn handle-keydown
  "Handles the keydown event."
  [e]
  (game/keydown-handler (key-of e)))

(.addEventListener canvas-dom "click" handle-click)
(.addEventListener js/document "keydown" handle-keydown)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
