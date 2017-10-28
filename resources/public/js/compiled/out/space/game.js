// Compiled by ClojureScript 1.9.908 {}
goog.provide('space.game');
goog.require('cljs.core');
goog.require('space.drawer');
cljs.core.enable_console_print_BANG_.call(null);
space.game.prev_timestamp = cljs.core.atom.call(null,(-1));
space.game.animators = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
space.game.coord_orig__GT_frame = null;
space.game.coord_frame__GT_orig = null;
space.game.coord_orig_COLON_frame = null;
/**
 * Returns the coordinate system converters.
 */
space.game.coord_fun = (function space$game$coord_fun(width,height){
if((width >= height)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,(function space$game$coord_fun_$_orig__GT_frame(x,y){
var offset = ((width - height) / (2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - offset) / height),(y / height)], null);
}),(function space$game$coord_fun_$_frame__GT_orig(x,y){
var offset = ((width - height) / (2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(offset + (x * height)),(y * height)], null);
})], null);
} else {
var vec__42546 = space.game.coord_fun.call(null,height,width);
var o_f = cljs.core.nth.call(null,vec__42546,(0),null);
var o__GT_f = cljs.core.nth.call(null,vec__42546,(1),null);
var f__GT_o = cljs.core.nth.call(null,vec__42546,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_f,((function (vec__42546,o_f,o__GT_f,f__GT_o){
return (function space$game$coord_fun_$_orig__GT_frame(x,y){
return cljs.core.reverse.call(null,o__GT_f.call(null,y,x));
});})(vec__42546,o_f,o__GT_f,f__GT_o))
,((function (vec__42546,o_f,o__GT_f,f__GT_o){
return (function space$game$coord_fun_$_frame__GT_orig(x,y){
return cljs.core.reverse.call(null,f__GT_o.call(null,y,x));
});})(vec__42546,o_f,o__GT_f,f__GT_o))
], null);
}
});
/**
 * Initialize the coordinate system.
 */
space.game.init_coord_BANG_ = (function space$game$init_coord_BANG_(width,height){
var vec__42549 = space.game.coord_fun.call(null,width,height);
var o_f = cljs.core.nth.call(null,vec__42549,(0),null);
var o__GT_f = cljs.core.nth.call(null,vec__42549,(1),null);
var f__GT_o = cljs.core.nth.call(null,vec__42549,(2),null);
space.game.coord_orig_COLON_frame = o_f;

space.game.coord_orig__GT_frame = o__GT_f;

return space.game.coord_frame__GT_orig = f__GT_o;
});
space.game.init_coord_BANG_.call(null,(100),(100));
/**
 * Transforms from frame to original. The first two params are x and y, the rest will
 *   be processed by multipying the ratio.
 */
space.game.values_frame__GT_orig = (function space$game$values_frame__GT_orig(var_args){
var args__31332__auto__ = [];
var len__31325__auto___42559 = arguments.length;
var i__31326__auto___42560 = (0);
while(true){
if((i__31326__auto___42560 < len__31325__auto___42559)){
args__31332__auto__.push((arguments[i__31326__auto___42560]));

var G__42561 = (i__31326__auto___42560 + (1));
i__31326__auto___42560 = G__42561;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((2) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((2)),(0),null)):null);
return space.game.values_frame__GT_orig.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31333__auto__);
});

space.game.values_frame__GT_orig.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,values){
var vec__42556 = space.game.coord_frame__GT_orig.call(null,x,y);
var xx = cljs.core.nth.call(null,vec__42556,(0),null);
var yy = cljs.core.nth.call(null,vec__42556,(1),null);
var vvalues = cljs.core.map.call(null,((function (vec__42556,xx,yy){
return (function (p1__42552_SHARP_){
return (space.game.coord_orig_COLON_frame * p1__42552_SHARP_);
});})(vec__42556,xx,yy))
,values);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xx,yy], null),vvalues);
});

space.game.values_frame__GT_orig.cljs$lang$maxFixedArity = (2);

space.game.values_frame__GT_orig.cljs$lang$applyTo = (function (seq42553){
var G__42554 = cljs.core.first.call(null,seq42553);
var seq42553__$1 = cljs.core.next.call(null,seq42553);
var G__42555 = cljs.core.first.call(null,seq42553__$1);
var seq42553__$2 = cljs.core.next.call(null,seq42553__$1);
return space.game.values_frame__GT_orig.cljs$core$IFn$_invoke$arity$variadic(G__42554,G__42555,seq42553__$2);
});

/**
 * Return an animator of planet waves with given params.
 */
space.game.planet_waves_animator = (function space$game$planet_waves_animator(x,y,min_r,max_r,duration,color){
return (function (dr,itv){
var t = cljs.core.mod.call(null,dr,duration);
var stage = (t / duration);
var r = (min_r + (stage * (max_r - min_r)));
var alpha = (0.5 - (stage * 0.5));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"color","color",1011675173),space.drawer.rgba.call(null,cljs.core.first.call(null,color),cljs.core.second.call(null,color),cljs.core.last.call(null,color),alpha)], null)], null);
});
});
/**
 * Returns an animator of a planet with given params.
 */
space.game.planet_animator = (function space$game$planet_animator(x,y,r,color){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,r], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.apply.call(null,space.drawer.rgba,color)], null)], null);
});
});
/**
 * Returns an animator displaying a moving partition.
 */
space.game.partition_animator = (function space$game$partition_animator(x,y,r,color,end_x,end_y,duration){
return (function (dr,_){
var stage = (dr / duration);
var delta_x = (end_x - x);
var delta_y = (end_y - y);
var now_x = (x + (delta_x * stage));
var now_y = (y + (delta_y * stage));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [now_x,now_y,r], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"color","color",1011675173),space.drawer.rgba.call(null,cljs.core.first.call(null,color),cljs.core.second.call(null,color),cljs.core.last.call(null,color),stage)], null)], null);
});
});
/**
 * Adds an animator to the animators list.
 */
space.game.add_animator = (function space$game$add_animator(animator){
var item = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animator","animator",1114151318),animator,new cljs.core.Keyword(null,"initial","initial",1854648214),space.drawer.now.call(null)], null);
return cljs.core.swap_BANG_.call(null,space.game.animators,((function (item){
return (function (p1__42562_SHARP_){
return cljs.core.conj.call(null,p1__42562_SHARP_,item);
});})(item))
);
});
/**
 * Adds several animators to the animators list.
 */
space.game.add_animators = (function space$game$add_animators(var_args){
var args__31332__auto__ = [];
var len__31325__auto___42564 = arguments.length;
var i__31326__auto___42565 = (0);
while(true){
if((i__31326__auto___42565 < len__31325__auto___42564)){
args__31332__auto__.push((arguments[i__31326__auto___42565]));

var G__42566 = (i__31326__auto___42565 + (1));
i__31326__auto___42565 = G__42566;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return space.game.add_animators.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

space.game.add_animators.cljs$core$IFn$_invoke$arity$variadic = (function (ani){
return cljs.core.doall.call(null,cljs.core.map.call(null,space.game.add_animator,ani));
});

space.game.add_animators.cljs$lang$maxFixedArity = (0);

space.game.add_animators.cljs$lang$applyTo = (function (seq42563){
return space.game.add_animators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42563));
});

/**
 * Creates and add a planet.
 */
space.game.create_planet = (function space$game$create_planet(x,y,r,color){
return space.game.add_animators.call(null,space.game.planet_animator.call(null,x,y,r,color),space.game.planet_waves_animator.call(null,x,y,r,(r * (2)),(2500),cljs.core.take.call(null,(3),color)));
});
space.game.create_planet.call(null,0.5,0.5,0.1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255),(1)], null));
/**
 * Returns render data of each animator.
 */
space.game.render_each = (function space$game$render_each(p__42568,timestamp){
var map__42569 = p__42568;
var map__42569__$1 = ((((!((map__42569 == null)))?((((map__42569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42569):map__42569);
var animator = cljs.core.get.call(null,map__42569__$1,new cljs.core.Keyword(null,"animator","animator",1114151318));
var initial = cljs.core.get.call(null,map__42569__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var duration = (timestamp - initial);
var interval = (timestamp - space.game.prev_timestamp);
var data = animator.call(null,duration,interval);
return cljs.core.map.call(null,((function (duration,interval,data,map__42569,map__42569__$1,animator,initial){
return (function (p1__42567_SHARP_){
return cljs.core.assoc.call(null,p1__42567_SHARP_,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.apply.call(null,space.game.values_frame__GT_orig,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(p1__42567_SHARP_)));
});})(duration,interval,data,map__42569,map__42569__$1,animator,initial))
,data);
});
/**
 * Filters the animators. This function will remove the animators returning nil,
 *   with the results given. Returns a lazy seq.
 */
space.game.filter_animators = (function space$game$filter_animators(res,ani){
var pairs = cljs.core.map.call(null,cljs.core.list,res,ani);
var pairs__$1 = cljs.core.filter.call(null,((function (pairs){
return (function (p1__42571_SHARP_){
return !((cljs.core.first.call(null,p1__42571_SHARP_) == null));
});})(pairs))
,pairs);
return cljs.core.map.call(null,((function (pairs,pairs__$1){
return (function (p1__42572_SHARP_){
return cljs.core.last.call(null,p1__42572_SHARP_);
});})(pairs,pairs__$1))
,pairs__$1);
});
/**
 * Updates current state and return render data for rendering.
 */
space.game.render = (function space$game$render(timestamp){
if(cljs.core._EQ_.call(null,space.game.prev_timestamp,(-1))){
space.game.prev_timestamp = timestamp;
} else {
}

var res = cljs.core.map.call(null,space.game.render_each,cljs.core.deref.call(null,space.game.animators),cljs.core.repeat.call(null,timestamp));
var ret = cljs.core.reduce.call(null,cljs.core.concat,res);
space.game.prev_timestamp = timestamp;

cljs.core.swap_BANG_.call(null,space.game.animators,cljs.core.partial.call(null,space.game.filter_animators,res));

return ret;
});
/**
 * Returns a random color in a array.
 */
space.game.random_color = (function space$game$random_color(){
return cljs.core.concat.call(null,cljs.core.take.call(null,(3),cljs.core.repeatedly.call(null,cljs.core.partial.call(null,cljs.core.rand_int,(256)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
});
/**
 * Handles the on click event
 */
space.game.onclick_handler = (function space$game$onclick_handler(x,y){
var vec__42573 = space.game.coord_orig__GT_frame.call(null,x,y);
var fx = cljs.core.nth.call(null,vec__42573,(0),null);
var fy = cljs.core.nth.call(null,vec__42573,(1),null);
return space.game.create_planet.call(null,fx,fy,(0.1 * cljs.core.rand.call(null)),space.game.random_color.call(null));
});

//# sourceMappingURL=game.js.map?rel=1509181386597
