// Compiled by ClojureScript 1.9.908 {}
goog.provide('space.calc');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
space.calc.PI = Math.PI;
/**
 * Calculates the arccosin of the number.
 */
space.calc.arccos = (function space$calc$arccos(x){
return Math.acos(x);
});
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
return space.calc.sqrt.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__37970_SHARP_,p2__37971_SHARP_){
return space.calc.square.call(null,(p1__37970_SHARP_ - p2__37971_SHARP_));
}),p1,p2)));
});
/**
 * Returns the dot product of the two vectors.
 */
space.calc.vecdot = (function space$calc$vecdot(v1,v2){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,v1,v2));
});
/**
 * Returns the sum of given vectors.
 */
space.calc.vec_PLUS_ = (function space$calc$vec_PLUS_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___37973 = arguments.length;
var i__31326__auto___37974 = (0);
while(true){
if((i__31326__auto___37974 < len__31325__auto___37973)){
args__31332__auto__.push((arguments[i__31326__auto___37974]));

var G__37975 = (i__31326__auto___37974 + (1));
i__31326__auto___37974 = G__37975;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return space.calc.vec_PLUS_.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

space.calc.vec_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_),vs);
});

space.calc.vec_PLUS_.cljs$lang$maxFixedArity = (0);

space.calc.vec_PLUS_.cljs$lang$applyTo = (function (seq37972){
return space.calc.vec_PLUS_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37972));
});

/**
 * Returns vector / num.
 */
space.calc.vecdiv = (function space$calc$vecdiv(v,n){
return cljs.core.map.call(null,cljs.core._SLASH_,v,cljs.core.repeat.call(null,n));
});
/**
 * Returns the mode of the vector.
 */
space.calc.vecmode = (function space$calc$vecmode(v){
return space.calc.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),v);
});
/**
 * Returns num * vector.
 */
space.calc.vec_STAR_ = (function space$calc$vec_STAR_(n,v){
return cljs.core.map.call(null,cljs.core._STAR_,v,cljs.core.repeat.call(null,n));
});
/**
 * Returns -vec.
 */
space.calc.vec_ = (function space$calc$vec_(v){
return cljs.core.map.call(null,cljs.core._,v);
});
/**
 * Returns the cosine of the angle of two vectors.
 */
space.calc.cos_of = (function space$calc$cos_of(v1,v2){
return (space.calc.vecdot.call(null,v1,v2) / (space.calc.vecmode.call(null,v1) * space.calc.vecmode.call(null,v2)));
});
/**
 * Returns the angle of the two vectors.
 */
space.calc.angle_of = (function space$calc$angle_of(v1,v2){
return space.calc.arccos.call(null,space.calc.cos_of.call(null,v1,v2));
});
/**
 * Returns the clockwice rotation degree from x-axis of the vector.
 */
space.calc.rotation_by_vector = (function space$calc$rotation_by_vector(v){
var angle = space.calc.angle_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),v);
var vec__37976 = v;
var x = cljs.core.nth.call(null,vec__37976,(0),null);
var y = cljs.core.nth.call(null,vec__37976,(1),null);
if((y < (0))){
return (- angle);
} else {
return angle;
}
});
space.calc.rotation_by_vector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.1], null));

//# sourceMappingURL=calc.js.map?rel=1509258013702
