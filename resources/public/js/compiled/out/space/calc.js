// Compiled by ClojureScript 1.9.908 {}
goog.provide('space.calc');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Calculates the sqrt of the number.
 */
space.calc.sqrt = (function space$calc$sqrt(x){
return Math.sqrt(x);
});
/**
 * Calculates the square of the number.
 */
space.calc.square = (function space$calc$square(x){
return (x * x);
});
/**
 * Returns the distance of two given points.
 */
space.calc.distance = (function space$calc$distance(p1,p2){
return space.calc.sqrt.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__39048_SHARP_,p2__39049_SHARP_){
return space.calc.square.call(null,(p1__39048_SHARP_ - p2__39049_SHARP_));
}),p1,p2)));
});
/**
 * Returns the dividing product of the vector.
 */
space.calc.vec_div = (function space$calc$vec_div(v,num){
return cljs.core.map.call(null,(function (p1__39050_SHARP_){
return (p1__39050_SHARP_ / num);
}),v);
});
space.calc.vec_plus = (function space$calc$vec_plus(v1,v2){
return cljs.core.map.call(null,cljs.core._PLUS_,v1,v2);
});
/**
 * Returns the next state after the interval.
 */
space.calc.next_state = (function space$calc$next_state(state,interval){
var map__39054 = state;
var map__39054__$1 = ((((!((map__39054 == null)))?((((map__39054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39054):map__39054);
var map__39055 = cljs.core.get.call(null,map__39054__$1,new cljs.core.Keyword(null,"craft","craft",1934366316));
var map__39055__$1 = ((((!((map__39055 == null)))?((((map__39055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39055):map__39055);
var m = cljs.core.get.call(null,map__39055__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var v = cljs.core.get.call(null,map__39055__$1,new cljs.core.Keyword(null,"v","v",21465059));
var pos = cljs.core.get.call(null,map__39055__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var map__39056 = state;
var map__39056__$1 = ((((!((map__39056 == null)))?((((map__39056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39056):map__39056);
var planets = cljs.core.get.call(null,map__39056__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var forces = cljs.core.map.call(null,new cljs.core.Keyword(null,"force","force",781957286),planets);
var product_forces = cljs.core.map.call(null,cljs.core.apply,forces,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,pos], null)));
var delta_v = cljs.core.reduce.call(null,((function (map__39054,map__39054__$1,map__39055,map__39055__$1,m,v,pos,map__39056,map__39056__$1,planets,forces,product_forces){
return (function (p1__39051_SHARP_,p2__39052_SHARP_){
return cljs.core.map.call(null,cljs.core._PLUS_,p1__39051_SHARP_,p2__39052_SHARP_);
});})(map__39054,map__39054__$1,map__39055,map__39055__$1,m,v,pos,map__39056,map__39056__$1,planets,forces,product_forces))
,cljs.core.map.call(null,((function (map__39054,map__39054__$1,map__39055,map__39055__$1,m,v,pos,map__39056,map__39056__$1,planets,forces,product_forces){
return (function (p1__39053_SHARP_){
return space.calc.vec_div.call(null,p1__39053_SHARP_,m);
});})(map__39054,map__39054__$1,map__39055,map__39055__$1,m,v,pos,map__39056,map__39056__$1,planets,forces,product_forces))
,product_forces));
return null;
});

//# sourceMappingURL=calc.js.map?rel=1509168664944
