// Compiled by ClojureScript 1.9.908 {}
goog.provide('space.drawer');
goog.require('cljs.core');
space.drawer.pi = Math.PI;
/**
 * Return current timestamp. (ms) 
 */
space.drawer.now = (function space$drawer$now(){
return (new Date()).getTime();
});
/**
 * Transforms deg angle to rad angle.
 */
space.drawer.deg__GT_rad = (function space$drawer$deg__GT_rad(angle){
return (angle * (space.drawer.pi / (180)));
});
/**
 * Clears the canvas.
 */
space.drawer.clear_canvas = (function space$drawer$clear_canvas(p__32149){
var map__32150 = p__32149;
var map__32150__$1 = ((((!((map__32150 == null)))?((((map__32150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32150):map__32150);
var width = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ctx = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
return ctx.clearRect((0),(0),width,height);
});
/**
 * Clears all transformations.
 */
space.drawer.reset_transforms = (function space$drawer$reset_transforms(ctx){
return ctx.transform((1),(0),(0),(1),(0),(0));
});
/**
 * Clears the canvas and reset transformations.
 */
space.drawer.reset_canvas = (function space$drawer$reset_canvas(info){
space.drawer.clear_canvas.call(null,info);

return space.drawer.reset_transforms.call(null,info);
});
/**
 * Transforms the values into rgba string.
 */
space.drawer.rgba = (function space$drawer$rgba(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32153 = arguments.length;
var i__31326__auto___32154 = (0);
while(true){
if((i__31326__auto___32154 < len__31325__auto___32153)){
args__31332__auto__.push((arguments[i__31326__auto___32154]));

var G__32155 = (i__31326__auto___32154 + (1));
i__31326__auto___32154 = G__32155;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return space.drawer.rgba.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

space.drawer.rgba.cljs$core$IFn$_invoke$arity$variadic = (function (values){
var csv = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",values));
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(csv),")"].join('');
});

space.drawer.rgba.cljs$lang$maxFixedArity = (0);

space.drawer.rgba.cljs$lang$applyTo = (function (seq32152){
return space.drawer.rgba.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32152));
});

/**
 * Changes the brush color of the canvas.
 */
space.drawer.coloring = (function space$drawer$coloring(ctx,color){
return (ctx["fillStyle"] = color);
});
/**
 * Resets canvas and fill background.
 */
space.drawer.prepare_background = (function space$drawer$prepare_background(info,color){
space.drawer.reset_canvas.call(null,info);

var map__32156 = info;
var map__32156__$1 = ((((!((map__32156 == null)))?((((map__32156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32156):map__32156);
var width = cljs.core.get.call(null,map__32156__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__32156__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ctx = cljs.core.get.call(null,map__32156__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
space.drawer.coloring.call(null,ctx,color);

return ctx.fillRect((0),(0),width,height);
});
/**
 * The wrapper of HTML Canvas API fillRect.
 */
space.drawer.fill_rect = (function space$drawer$fill_rect(ctx,x,y,w,h){
return ctx.fillRect(x,y,w,h);
});
/**
 * Draws a circle on the canvas.
 */
space.drawer.draw_circle = (function space$drawer$draw_circle(ctx,x,y,r){
ctx.beginPath();

ctx.arc(x,y,r,(0),((2) * Math.PI));

ctx.closePath();

return ctx.fill();
});
/**
 * Sets the rotation of the canvas, with the center point.
 */
space.drawer.rotating = (function space$drawer$rotating(ctx,angle,cx,cy){
ctx.translate(cx,cy);

return ctx.rotate(angle);
});
/**
 * Draws a triangle with given prints.
 */
space.drawer.draw_shape = (function space$drawer$draw_shape(var_args){
var args__31332__auto__ = [];
var len__31325__auto___32164 = arguments.length;
var i__31326__auto___32165 = (0);
while(true){
if((i__31326__auto___32165 < len__31325__auto___32164)){
args__31332__auto__.push((arguments[i__31326__auto___32165]));

var G__32166 = (i__31326__auto___32165 + (1));
i__31326__auto___32165 = G__32166;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return space.drawer.draw_shape.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

space.drawer.draw_shape.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,points){
ctx.beginPath();

ctx.moveTo(cljs.core.first.call(null,cljs.core.first.call(null,points)),cljs.core.second.call(null,cljs.core.first.call(null,points)));

var seq__32160_32167 = cljs.core.seq.call(null,cljs.core.rest.call(null,points));
var chunk__32161_32168 = null;
var count__32162_32169 = (0);
var i__32163_32170 = (0);
while(true){
if((i__32163_32170 < count__32162_32169)){
var point_32171 = cljs.core._nth.call(null,chunk__32161_32168,i__32163_32170);
ctx.lineTo(cljs.core.first.call(null,point_32171),cljs.core.second.call(null,point_32171));

var G__32172 = seq__32160_32167;
var G__32173 = chunk__32161_32168;
var G__32174 = count__32162_32169;
var G__32175 = (i__32163_32170 + (1));
seq__32160_32167 = G__32172;
chunk__32161_32168 = G__32173;
count__32162_32169 = G__32174;
i__32163_32170 = G__32175;
continue;
} else {
var temp__5278__auto___32176 = cljs.core.seq.call(null,seq__32160_32167);
if(temp__5278__auto___32176){
var seq__32160_32177__$1 = temp__5278__auto___32176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32160_32177__$1)){
var c__30979__auto___32178 = cljs.core.chunk_first.call(null,seq__32160_32177__$1);
var G__32179 = cljs.core.chunk_rest.call(null,seq__32160_32177__$1);
var G__32180 = c__30979__auto___32178;
var G__32181 = cljs.core.count.call(null,c__30979__auto___32178);
var G__32182 = (0);
seq__32160_32167 = G__32179;
chunk__32161_32168 = G__32180;
count__32162_32169 = G__32181;
i__32163_32170 = G__32182;
continue;
} else {
var point_32183 = cljs.core.first.call(null,seq__32160_32177__$1);
ctx.lineTo(cljs.core.first.call(null,point_32183),cljs.core.second.call(null,point_32183));

var G__32184 = cljs.core.next.call(null,seq__32160_32177__$1);
var G__32185 = null;
var G__32186 = (0);
var G__32187 = (0);
seq__32160_32167 = G__32184;
chunk__32161_32168 = G__32185;
count__32162_32169 = G__32186;
i__32163_32170 = G__32187;
continue;
}
} else {
}
}
break;
}

ctx.closePath();

return ctx.fill();
});

space.drawer.draw_shape.cljs$lang$maxFixedArity = (1);

space.drawer.draw_shape.cljs$lang$applyTo = (function (seq32158){
var G__32159 = cljs.core.first.call(null,seq32158);
var seq32158__$1 = cljs.core.next.call(null,seq32158);
return space.drawer.draw_shape.cljs$core$IFn$_invoke$arity$variadic(G__32159,seq32158__$1);
});

space.drawer.std_revealer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rect","rect",-108902628),space.drawer.fill_rect,new cljs.core.Keyword(null,"circle","circle",1903212362),space.drawer.draw_circle,new cljs.core.Keyword(null,"shape","shape",1190694006),space.drawer.draw_shape], null);
/**
 * Renders objects on the canvas according to the data and revealer given.
 */
space.drawer.render_data = (function space$drawer$render_data(ctx,data,revealer){
var seq__32188 = cljs.core.seq.call(null,data);
var chunk__32189 = null;
var count__32190 = (0);
var i__32191 = (0);
while(true){
if((i__32191 < count__32190)){
var rec = cljs.core._nth.call(null,chunk__32189,i__32191);
space.drawer.reset_transforms.call(null,ctx);

var map__32192_32204 = rec;
var map__32192_32205__$1 = ((((!((map__32192_32204 == null)))?((((map__32192_32204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32192_32204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32192_32204):map__32192_32204);
var rotation_32206 = cljs.core.get.call(null,map__32192_32205__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var map__32193_32207 = rotation_32206;
var map__32193_32208__$1 = ((((!((map__32193_32207 == null)))?((((map__32193_32207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32193_32207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32193_32207):map__32193_32207);
var angle_32209 = cljs.core.get.call(null,map__32193_32208__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var cx_32210 = cljs.core.get.call(null,map__32193_32208__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy_32211 = cljs.core.get.call(null,map__32193_32208__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
if(cljs.core.truth_((function (){var and__30036__auto__ = angle_32209;
if(cljs.core.truth_(and__30036__auto__)){
var and__30036__auto____$1 = cx_32210;
if(cljs.core.truth_(and__30036__auto____$1)){
return cy_32211;
} else {
return and__30036__auto____$1;
}
} else {
return and__30036__auto__;
}
})())){
space.drawer.rotating.call(null,ctx,angle_32209,cx_32210,cy_32211);
} else {
}

var map__32196_32212 = rec;
var map__32196_32213__$1 = ((((!((map__32196_32212 == null)))?((((map__32196_32212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32196_32212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32196_32212):map__32196_32212);
var color_32214 = cljs.core.get.call(null,map__32196_32213__$1,new cljs.core.Keyword(null,"color","color",1011675173));
if(cljs.core.truth_(color_32214)){
space.drawer.coloring.call(null,ctx,color_32214);
} else {
}

cljs.core.apply.call(null,revealer.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rec)),cljs.core.conj.call(null,cljs.core.apply.call(null,cljs.core.list,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(rec)),ctx));

var G__32215 = seq__32188;
var G__32216 = chunk__32189;
var G__32217 = count__32190;
var G__32218 = (i__32191 + (1));
seq__32188 = G__32215;
chunk__32189 = G__32216;
count__32190 = G__32217;
i__32191 = G__32218;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__32188);
if(temp__5278__auto__){
var seq__32188__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32188__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__32188__$1);
var G__32219 = cljs.core.chunk_rest.call(null,seq__32188__$1);
var G__32220 = c__30979__auto__;
var G__32221 = cljs.core.count.call(null,c__30979__auto__);
var G__32222 = (0);
seq__32188 = G__32219;
chunk__32189 = G__32220;
count__32190 = G__32221;
i__32191 = G__32222;
continue;
} else {
var rec = cljs.core.first.call(null,seq__32188__$1);
space.drawer.reset_transforms.call(null,ctx);

var map__32198_32223 = rec;
var map__32198_32224__$1 = ((((!((map__32198_32223 == null)))?((((map__32198_32223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32198_32223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32198_32223):map__32198_32223);
var rotation_32225 = cljs.core.get.call(null,map__32198_32224__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var map__32199_32226 = rotation_32225;
var map__32199_32227__$1 = ((((!((map__32199_32226 == null)))?((((map__32199_32226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32199_32226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32199_32226):map__32199_32226);
var angle_32228 = cljs.core.get.call(null,map__32199_32227__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var cx_32229 = cljs.core.get.call(null,map__32199_32227__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy_32230 = cljs.core.get.call(null,map__32199_32227__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
if(cljs.core.truth_((function (){var and__30036__auto__ = angle_32228;
if(cljs.core.truth_(and__30036__auto__)){
var and__30036__auto____$1 = cx_32229;
if(cljs.core.truth_(and__30036__auto____$1)){
return cy_32230;
} else {
return and__30036__auto____$1;
}
} else {
return and__30036__auto__;
}
})())){
space.drawer.rotating.call(null,ctx,angle_32228,cx_32229,cy_32230);
} else {
}

var map__32202_32231 = rec;
var map__32202_32232__$1 = ((((!((map__32202_32231 == null)))?((((map__32202_32231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32202_32231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32202_32231):map__32202_32231);
var color_32233 = cljs.core.get.call(null,map__32202_32232__$1,new cljs.core.Keyword(null,"color","color",1011675173));
if(cljs.core.truth_(color_32233)){
space.drawer.coloring.call(null,ctx,color_32233);
} else {
}

cljs.core.apply.call(null,revealer.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rec)),cljs.core.conj.call(null,cljs.core.apply.call(null,cljs.core.list,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(rec)),ctx));

var G__32234 = cljs.core.next.call(null,seq__32188__$1);
var G__32235 = null;
var G__32236 = (0);
var G__32237 = (0);
seq__32188 = G__32234;
chunk__32189 = G__32235;
count__32190 = G__32236;
i__32191 = G__32237;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=drawer.js.map?rel=1509168659660
