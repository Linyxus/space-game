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
                   (drawer/clear-canvas cvs-info)
                   (drawer/render-data ctxt
                                      (game/render (drawer/now))
                                      drawer/std-revealer)) 10)

(defn handle-click
  "Handles the click event."
  [e]
  (let [x (- (.-pageX e) (.-offsetLeft canvas-dom))
        y (- (.-pageY e) (.-offsetTop canvas-dom))]
    (game/onclick-handler x y)))

(.addEventListener canvas-dom "click" handle-click)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
