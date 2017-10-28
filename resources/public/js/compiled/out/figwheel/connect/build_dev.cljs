(ns figwheel.connect.build-dev (:require [space.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/space.core.on-js-reload (apply js/space.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'space.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

