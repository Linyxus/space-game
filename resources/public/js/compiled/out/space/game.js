// Compiled by ClojureScript 1.9.908 {}
goog.provide('space.game');
goog.require('cljs.core');
goog.require('space.drawer');
goog.require('space.calc');
cljs.core.enable_console_print_BANG_.call(null);
space.game.prev_timestamp = cljs.core.atom.call(null,(-1));
space.game.animators = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
space.game.temp_animators = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
space.game.craft_status = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
space.game.planets = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
space.game.simple_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"planets","planets",1711765443),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),0.5,new cljs.core.Keyword(null,"y","y",-1757859776),0.5,new cljs.core.Keyword(null,"r","r",-471384190),0.05,new cljs.core.Keyword(null,"m","m",1632677161),(10),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255),(1)], null)], null)], null),new cljs.core.Keyword(null,"craft","craft",1934366316),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),0.1,new cljs.core.Keyword(null,"y","y",-1757859776),0.1,new cljs.core.Keyword(null,"m","m",1632677161),(10),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.01,0.01], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.01,-0.01], null)], null)], null)], null);
space.game.coord_orig__GT_frame = null;
space.game.coord_frame__GT_orig = null;
space.game.coord_orig_COLON_frame = null;
/**
 * Returns a random color in a array.
 */
space.game.random_color = (function space$game$random_color(){
return cljs.core.concat.call(null,cljs.core.take.call(null,(3),cljs.core.repeatedly.call(null,cljs.core.partial.call(null,cljs.core.rand_int,(256)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
});
/**
 * Returns a random color in a array with 3 values.
 */
space.game.random_color_3 = (function space$game$random_color_3(){
return cljs.core.take.call(null,(3),cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_int.call(null,(256));
})));
});
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
var vec__41178 = space.game.coord_fun.call(null,height,width);
var o_f = cljs.core.nth.call(null,vec__41178,(0),null);
var o__GT_f = cljs.core.nth.call(null,vec__41178,(1),null);
var f__GT_o = cljs.core.nth.call(null,vec__41178,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_f,((function (vec__41178,o_f,o__GT_f,f__GT_o){
return (function space$game$coord_fun_$_orig__GT_frame(x,y){
return cljs.core.reverse.call(null,o__GT_f.call(null,y,x));
});})(vec__41178,o_f,o__GT_f,f__GT_o))
,((function (vec__41178,o_f,o__GT_f,f__GT_o){
return (function space$game$coord_fun_$_frame__GT_orig(x,y){
return cljs.core.reverse.call(null,f__GT_o.call(null,y,x));
});})(vec__41178,o_f,o__GT_f,f__GT_o))
], null);
}
});
/**
 * Initialize the coordinate system.
 */
space.game.init_coord_BANG_ = (function space$game$init_coord_BANG_(width,height){
var vec__41181 = space.game.coord_fun.call(null,width,height);
var o_f = cljs.core.nth.call(null,vec__41181,(0),null);
var o__GT_f = cljs.core.nth.call(null,vec__41181,(1),null);
var f__GT_o = cljs.core.nth.call(null,vec__41181,(2),null);
space.game.coord_orig_COLON_frame = o_f;

space.game.coord_orig__GT_frame = o__GT_f;

return space.game.coord_frame__GT_orig = f__GT_o;
});
space.game.init_coord_BANG_.call(null,(100),(100));
/**
 * Returns a vector of transformed coordinate values and size values.
 *   First two values are coordinate values, and the rest is size values,
 *   e.g. radius, length.
 */
space.game.normal_arg_wrapper = (function space$game$normal_arg_wrapper(var_args){
var args__31332__auto__ = [];
var len__31325__auto___41191 = arguments.length;
var i__31326__auto___41192 = (0);
while(true){
if((i__31326__auto___41192 < len__31325__auto___41191)){
args__31332__auto__.push((arguments[i__31326__auto___41192]));

var G__41193 = (i__31326__auto___41192 + (1));
i__31326__auto___41192 = G__41193;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((2) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((2)),(0),null)):null);
return space.game.normal_arg_wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31333__auto__);
});

space.game.normal_arg_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,values){
var vec__41188 = space.game.coord_frame__GT_orig.call(null,x,y);
var xx = cljs.core.nth.call(null,vec__41188,(0),null);
var yy = cljs.core.nth.call(null,vec__41188,(1),null);
var vvalues = cljs.core.map.call(null,((function (vec__41188,xx,yy){
return (function (p1__41184_SHARP_){
return (space.game.coord_orig_COLON_frame * p1__41184_SHARP_);
});})(vec__41188,xx,yy))
,values);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xx,yy], null),vvalues);
});

space.game.normal_arg_wrapper.cljs$lang$maxFixedArity = (2);

space.game.normal_arg_wrapper.cljs$lang$applyTo = (function (seq41185){
var G__41186 = cljs.core.first.call(null,seq41185);
var seq41185__$1 = cljs.core.next.call(null,seq41185);
var G__41187 = cljs.core.first.call(null,seq41185__$1);
var seq41185__$2 = cljs.core.next.call(null,seq41185__$1);
return space.game.normal_arg_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__41186,G__41187,seq41185__$2);
});

/**
 * Returns a vector of transformed points for shape data.
 */
space.game.shape_arg_wrapper = (function space$game$shape_arg_wrapper(var_args){
var args__31332__auto__ = [];
var len__31325__auto___41196 = arguments.length;
var i__31326__auto___41197 = (0);
while(true){
if((i__31326__auto___41197 < len__31325__auto___41196)){
args__31332__auto__.push((arguments[i__31326__auto___41197]));

var G__41198 = (i__31326__auto___41197 + (1));
i__31326__auto___41197 = G__41198;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return space.game.shape_arg_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

space.game.shape_arg_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (points){
return cljs.core.map.call(null,(function (p1__41194_SHARP_){
return cljs.core.apply.call(null,space.game.coord_frame__GT_orig,p1__41194_SHARP_);
}),points);
});

space.game.shape_arg_wrapper.cljs$lang$maxFixedArity = (0);

space.game.shape_arg_wrapper.cljs$lang$applyTo = (function (seq41195){
return space.game.shape_arg_wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41195));
});

/**
 * Returns a map of transformed rotation data.
 */
space.game.rotation_wrapper = (function space$game$rotation_wrapper(rotation){
var map__41199 = rotation;
var map__41199__$1 = ((((!((map__41199 == null)))?((((map__41199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41199):map__41199);
var cx = cljs.core.get.call(null,map__41199__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.call(null,map__41199__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var vec__41200 = space.game.coord_frame__GT_orig.call(null,cx,cy);
var cxx = cljs.core.nth.call(null,vec__41200,(0),null);
var cyy = cljs.core.nth.call(null,vec__41200,(1),null);
return cljs.core.assoc.call(null,rotation,new cljs.core.Keyword(null,"cx","cx",1272694324),cxx,new cljs.core.Keyword(null,"cy","cy",755331060),cyy);
});
/**
 * Returns the shape render data with x and y transformed because of rotation.
 */
space.game.rotating_shape_data_wrapper = (function space$game$rotating_shape_data_wrapper(data){
var points = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(data);
var map__41204 = data;
var map__41204__$1 = ((((!((map__41204 == null)))?((((map__41204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41204):map__41204);
var map__41205 = cljs.core.get.call(null,map__41204__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var map__41205__$1 = ((((!((map__41205 == null)))?((((map__41205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41205):map__41205);
var cx = cljs.core.get.call(null,map__41205__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.call(null,map__41205__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var new_points = cljs.core.map.call(null,((function (points,map__41204,map__41204__$1,map__41205,map__41205__$1,cx,cy){
return (function (p__41208){
var vec__41209 = p__41208;
var x = cljs.core.nth.call(null,vec__41209,(0),null);
var y = cljs.core.nth.call(null,vec__41209,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - cx),(y - cy)], null);
});})(points,map__41204,map__41204__$1,map__41205,map__41205__$1,cx,cy))
,points);
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"args","args",1315556576),new_points);
});
/**
 * Adds an animator to the animators list.
 */
space.game.add_animator = (function space$game$add_animator(animator){
var item = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animator","animator",1114151318),animator,new cljs.core.Keyword(null,"initial","initial",1854648214),space.drawer.now.call(null)], null);
return cljs.core.swap_BANG_.call(null,space.game.animators,((function (item){
return (function (p1__41212_SHARP_){
return cljs.core.conj.call(null,p1__41212_SHARP_,item);
});})(item))
);
});
/**
 * Adds several animators to the animators list.
 */
space.game.add_animators = (function space$game$add_animators(var_args){
var args__31332__auto__ = [];
var len__31325__auto___41214 = arguments.length;
var i__31326__auto___41215 = (0);
while(true){
if((i__31326__auto___41215 < len__31325__auto___41214)){
args__31332__auto__.push((arguments[i__31326__auto___41215]));

var G__41216 = (i__31326__auto___41215 + (1));
i__31326__auto___41215 = G__41216;
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

space.game.add_animators.cljs$lang$applyTo = (function (seq41213){
return space.game.add_animators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41213));
});

/**
 * Adds an animator to temp-animators.
 */
space.game.add_temp_animator = (function space$game$add_temp_animator(animator){
var item = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animator","animator",1114151318),animator,new cljs.core.Keyword(null,"initial","initial",1854648214),space.drawer.now.call(null)], null);
return cljs.core.swap_BANG_.call(null,space.game.temp_animators,((function (item){
return (function (p1__41217_SHARP_){
return cljs.core.conj.call(null,p1__41217_SHARP_,item);
});})(item))
);
});
space.game.add_temp_animators = (function space$game$add_temp_animators(anis){
return cljs.core.doall.call(null,cljs.core.map.call(null,space.game.add_temp_animator,anis));
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"args","args",1315556576),space.game.normal_arg_wrapper.call(null,x,y,r),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"color","color",1011675173),space.drawer.rgba.call(null,cljs.core.first.call(null,color),cljs.core.second.call(null,color),cljs.core.last.call(null,color),alpha)], null)], null);
});
});
/**
 * Returns an animator of a planet with given params.
 */
space.game.planet_animator = (function space$game$planet_animator(x,y,r,color){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"args","args",1315556576),space.game.normal_arg_wrapper.call(null,x,y,r),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.apply.call(null,space.drawer.rgba,color)], null)], null);
});
});
/**
 * Returns an animator displaying a moving partition.
 */
space.game.partition_animator = (function space$game$partition_animator(x,y,r,color,end_x,end_y,duration){
return (function (dr,_){
if((dr > duration)){
return null;
} else {
var stage = (dr / duration);
var delta_x = (end_x - x);
var delta_y = (end_y - y);
var now_x = (x + (delta_x * stage));
var now_y = (y + (delta_y * stage));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"args","args",1315556576),space.game.normal_arg_wrapper.call(null,now_x,now_y,r),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.apply.call(null,space.drawer.rgba,cljs.core.concat.call(null,color,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) - stage)], null)))], null)], null);
}
});
});
/**
 * Returns a lazy seq of partition animators with given params.
 *   Source-x source-y and source-r determine the start point of partitions (in a cube).
 *   Min-r determines the miniest size of the partition, max can be 1.5 times.
 *   Min-len determines the nearest move offset of partitions, max can be 1.5 * min-len.
 *   Min-duration determines the shortest duration of the partitions, max 1.5 times.
 *   Num is the quantity to generate.
 */
space.game.partitions_generator = (function space$game$partitions_generator(source_x,source_y,source_r,min_r,min_len,min_duration,num){
var start_offsets = cljs.core.take.call(null,num,cljs.core.repeatedly.call(null,(function (){
var x__31002__auto__ = ((1) - cljs.core.rand.call(null,(2)));
return cljs.core._conj.call(null,(function (){var x__31002__auto____$1 = ((1) - cljs.core.rand.call(null,(2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31002__auto____$1);
})(),x__31002__auto__);
})));
var start_offsets__$1 = cljs.core.map.call(null,space.calc.vec_STAR_,cljs.core.repeat.call(null,source_r),start_offsets);
var start_points = cljs.core.map.call(null,space.calc.vec_PLUS_,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_x,source_y], null)),start_offsets__$1);
var lengths = cljs.core.map.call(null,space.calc.vec_STAR_,cljs.core.repeatedly.call(null,((function (start_offsets,start_offsets__$1,start_points){
return (function (){
return ((1) + cljs.core.rand.call(null,0.5));
});})(start_offsets,start_offsets__$1,start_points))
),cljs.core.repeat.call(null,num,min_len));
var end_points = cljs.core.map.call(null,space.calc.vec_PLUS_,start_points,lengths);
var rs = cljs.core.map.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,num,min_r),cljs.core.repeatedly.call(null,((function (start_offsets,start_offsets__$1,start_points,lengths,end_points){
return (function (){
return ((1) + cljs.core.rand.call(null,0.5));
});})(start_offsets,start_offsets__$1,start_points,lengths,end_points))
));
var durations = cljs.core.map.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,num,min_duration),cljs.core.repeatedly.call(null,((function (start_offsets,start_offsets__$1,start_points,lengths,end_points,rs){
return (function (){
return ((1) + cljs.core.rand.call(null,0.5));
});})(start_offsets,start_offsets__$1,start_points,lengths,end_points,rs))
));
var colors = cljs.core.repeatedly.call(null,space.game.random_color_3);
return cljs.core.map.call(null,space.game.partition_animator,cljs.core.map.call(null,cljs.core.first,start_points),cljs.core.map.call(null,cljs.core.last,start_points),rs,colors,cljs.core.map.call(null,cljs.core.first,end_points),cljs.core.map.call(null,cljs.core.last,end_points),durations);
});
/**
 * Returns a animator of the scaft getting data from given provider,
 *   performs update using given updater.
 */
space.game.craft_animator = (function space$game$craft_animator(provider,updater){
return (function (duration,interval){
updater.call(null,interval);

var data = provider.call(null);
var map__41218 = data;
var map__41218__$1 = ((((!((map__41218 == null)))?((((map__41218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41218):map__41218);
var x = cljs.core.get.call(null,map__41218__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__41218__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var v = cljs.core.get.call(null,map__41218__$1,new cljs.core.Keyword(null,"v","v",21465059));
var a = cljs.core.get.call(null,map__41218__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var v_angle = space.calc.rotation_by_vector.call(null,v);
var a_angle = space.calc.rotation_by_vector.call(null,a);
var ship = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [space.game.rotating_shape_data_wrapper.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"args","args",1315556576),space.game.shape_arg_wrapper.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - 0.02),(y - 0.03)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - 0.03)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 0.01),(y - 0.02)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 0.08),(y - 0.01)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 0.08),(y + 0.01)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 0.01),(y + 0.02)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + 0.03)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - 0.02),(y + 0.03)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),space.game.rotation_wrapper.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"angle","angle",1622094254),v_angle,new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y], null)),new cljs.core.Keyword(null,"color","color",1011675173),"#1a237e"], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"args","args",1315556576),space.game.normal_arg_wrapper.call(null,x,y,0.005),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
var num = (((cljs.core.rand.call(null) > 0.8))?(1):(0));
var partitions = space.game.partitions_generator.call(null,x,y,0.002,0.002,space.calc.vec_.call(null,space.calc.vec_STAR_.call(null,(2),v)),(1000),num);
space.game.add_temp_animators.call(null,partitions);

return ship;
});
});
/**
 * Creates and add a planet.
 */
space.game.create_planet = (function space$game$create_planet(x,y,r,color){
return space.game.add_animators.call(null,space.game.planet_animator.call(null,x,y,r,color),space.game.planet_waves_animator.call(null,x,y,r,(r * (2)),(2500),cljs.core.take.call(null,(3),color)));
});
/**
 * Initializes with map data given.
 */
space.game.initialize_by_map_BANG_ = (function space$game$initialize_by_map_BANG_(data){
cljs.core.swap_BANG_.call(null,space.game.craft_status,(function (){
return new cljs.core.Keyword(null,"craft","craft",1934366316).cljs$core$IFn$_invoke$arity$1(data);
}));

space.game.animators = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);

var planets_41228 = new cljs.core.Keyword(null,"planets","planets",1711765443).cljs$core$IFn$_invoke$arity$1(data);
var seq__41220_41229 = cljs.core.seq.call(null,planets_41228);
var chunk__41221_41230 = null;
var count__41222_41231 = (0);
var i__41223_41232 = (0);
while(true){
if((i__41223_41232 < count__41222_41231)){
var map__41224_41233 = cljs.core._nth.call(null,chunk__41221_41230,i__41223_41232);
var map__41224_41234__$1 = ((((!((map__41224_41233 == null)))?((((map__41224_41233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41224_41233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41224_41233):map__41224_41233);
var x_41235 = cljs.core.get.call(null,map__41224_41234__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_41236 = cljs.core.get.call(null,map__41224_41234__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r_41237 = cljs.core.get.call(null,map__41224_41234__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color_41238 = cljs.core.get.call(null,map__41224_41234__$1,new cljs.core.Keyword(null,"color","color",1011675173));
space.game.create_planet.call(null,x_41235,y_41236,r_41237,color_41238);

var G__41239 = seq__41220_41229;
var G__41240 = chunk__41221_41230;
var G__41241 = count__41222_41231;
var G__41242 = (i__41223_41232 + (1));
seq__41220_41229 = G__41239;
chunk__41221_41230 = G__41240;
count__41222_41231 = G__41241;
i__41223_41232 = G__41242;
continue;
} else {
var temp__5278__auto___41243 = cljs.core.seq.call(null,seq__41220_41229);
if(temp__5278__auto___41243){
var seq__41220_41244__$1 = temp__5278__auto___41243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41220_41244__$1)){
var c__30979__auto___41245 = cljs.core.chunk_first.call(null,seq__41220_41244__$1);
var G__41246 = cljs.core.chunk_rest.call(null,seq__41220_41244__$1);
var G__41247 = c__30979__auto___41245;
var G__41248 = cljs.core.count.call(null,c__30979__auto___41245);
var G__41249 = (0);
seq__41220_41229 = G__41246;
chunk__41221_41230 = G__41247;
count__41222_41231 = G__41248;
i__41223_41232 = G__41249;
continue;
} else {
var map__41226_41250 = cljs.core.first.call(null,seq__41220_41244__$1);
var map__41226_41251__$1 = ((((!((map__41226_41250 == null)))?((((map__41226_41250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41226_41250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41226_41250):map__41226_41250);
var x_41252 = cljs.core.get.call(null,map__41226_41251__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_41253 = cljs.core.get.call(null,map__41226_41251__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r_41254 = cljs.core.get.call(null,map__41226_41251__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color_41255 = cljs.core.get.call(null,map__41226_41251__$1,new cljs.core.Keyword(null,"color","color",1011675173));
space.game.create_planet.call(null,x_41252,y_41253,r_41254,color_41255);

var G__41256 = cljs.core.next.call(null,seq__41220_41244__$1);
var G__41257 = null;
var G__41258 = (0);
var G__41259 = (0);
seq__41220_41229 = G__41256;
chunk__41221_41230 = G__41257;
count__41222_41231 = G__41258;
i__41223_41232 = G__41259;
continue;
}
} else {
}
}
break;
}

var craft = space.game.craft_animator.call(null,(function (){
return cljs.core.first.call(null,cljs.core.deref.call(null,space.game.craft_status));
}),(function() { 
var G__41260__delegate = function (x){
return null;
};
var G__41260 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__41261__i = 0, G__41261__a = new Array(arguments.length -  0);
while (G__41261__i < G__41261__a.length) {G__41261__a[G__41261__i] = arguments[G__41261__i + 0]; ++G__41261__i;}
  x = new cljs.core.IndexedSeq(G__41261__a,0,null);
} 
return G__41260__delegate.call(this,x);};
G__41260.cljs$lang$maxFixedArity = 0;
G__41260.cljs$lang$applyTo = (function (arglist__41262){
var x = cljs.core.seq(arglist__41262);
return G__41260__delegate(x);
});
G__41260.cljs$core$IFn$_invoke$arity$variadic = G__41260__delegate;
return G__41260;
})()
);
return space.game.add_animator.call(null,craft);
});
space.game.initialize_by_map_BANG_.call(null,space.game.simple_map);
/**
 * Returns render data of each animator.
 */
space.game.render_each = (function space$game$render_each(p__41263,timestamp){
var map__41264 = p__41263;
var map__41264__$1 = ((((!((map__41264 == null)))?((((map__41264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41264):map__41264);
var animator = cljs.core.get.call(null,map__41264__$1,new cljs.core.Keyword(null,"animator","animator",1114151318));
var initial = cljs.core.get.call(null,map__41264__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var duration = (timestamp - initial);
var interval = (timestamp - space.game.prev_timestamp);
var data = animator.call(null,duration,interval);
return data;
});
/**
 * Filters the animators. This function will remove the animators returning nil,
 *   with the results given. Returns a lazy seq.
 */
space.game.filter_animators = (function space$game$filter_animators(res,ani){
var pairs = cljs.core.map.call(null,cljs.core.list,res,ani);
var pairs__$1 = cljs.core.filter.call(null,((function (pairs){
return (function (p1__41266_SHARP_){
return !((cljs.core.first.call(null,p1__41266_SHARP_) == null));
});})(pairs))
,pairs);
return cljs.core.map.call(null,((function (pairs,pairs__$1){
return (function (p1__41267_SHARP_){
return cljs.core.last.call(null,p1__41267_SHARP_);
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
var tmp_res = cljs.core.map.call(null,space.game.render_each,cljs.core.deref.call(null,space.game.temp_animators),cljs.core.repeat.call(null,timestamp));
var tmp_ret = cljs.core.reduce.call(null,cljs.core.concat,tmp_res);
space.game.prev_timestamp = timestamp;

cljs.core.swap_BANG_.call(null,space.game.temp_animators,cljs.core.partial.call(null,space.game.filter_animators,tmp_res));

return cljs.core.concat.call(null,ret,tmp_ret);
});
/**
 * Handles the on click event
 */
space.game.onclick_handler = (function space$game$onclick_handler(x,y){
var vec__41268 = space.game.coord_orig__GT_frame.call(null,x,y);
var fx = cljs.core.nth.call(null,vec__41268,(0),null);
var fy = cljs.core.nth.call(null,vec__41268,(1),null);
return space.game.create_planet.call(null,fx,fy,(0.1 * cljs.core.rand.call(null)),space.game.random_color.call(null));
});

//# sourceMappingURL=game.js.map?rel=1509259053444
