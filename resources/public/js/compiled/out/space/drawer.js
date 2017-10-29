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
space.drawer.clear_canvas = (function space$drawer$clear_canvas(p__35542){
var map__35543 = p__35542;
var map__35543__$1 = ((((!((map__35543 == null)))?((((map__35543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35543):map__35543);
var width = cljs.core.get.call(null,map__35543__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__35543__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ctx = cljs.core.get.call(null,map__35543__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
return ctx.clearRect((0),(0),width,height);
});
/**
 * Clears all transformations.
 */
space.drawer.reset_transforms = (function space$drawer$reset_transforms(ctx){
return ctx.setTransform((1),(0),(0),(1),(0),(0));
});
/**
 * Clears the canvas and reset transformations.
 */
space.drawer.reset_canvas = (function space$drawer$reset_canvas(info){
space.drawer.reset_transforms.call(null,new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(info));

return space.drawer.clear_canvas.call(null,info);
});
/**
 * Transforms the values into rgba string.
 */
space.drawer.rgba = (function space$drawer$rgba(var_args){
var args__31332__auto__ = [];
var len__31325__auto___35546 = arguments.length;
var i__31326__auto___35547 = (0);
while(true){
if((i__31326__auto___35547 < len__31325__auto___35546)){
args__31332__auto__.push((arguments[i__31326__auto___35547]));

var G__35548 = (i__31326__auto___35547 + (1));
i__31326__auto___35547 = G__35548;
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

space.drawer.rgba.cljs$lang$applyTo = (function (seq35545){
return space.drawer.rgba.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35545));
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

var map__35549 = info;
var map__35549__$1 = ((((!((map__35549 == null)))?((((map__35549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35549):map__35549);
var width = cljs.core.get.call(null,map__35549__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__35549__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ctx = cljs.core.get.call(null,map__35549__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
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
var len__31325__auto___35557 = arguments.length;
var i__31326__auto___35558 = (0);
while(true){
if((i__31326__auto___35558 < len__31325__auto___35557)){
args__31332__auto__.push((arguments[i__31326__auto___35558]));

var G__35559 = (i__31326__auto___35558 + (1));
i__31326__auto___35558 = G__35559;
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

var seq__35553_35560 = cljs.core.seq.call(null,cljs.core.rest.call(null,points));
var chunk__35554_35561 = null;
var count__35555_35562 = (0);
var i__35556_35563 = (0);
while(true){
if((i__35556_35563 < count__35555_35562)){
var point_35564 = cljs.core._nth.call(null,chunk__35554_35561,i__35556_35563);
ctx.lineTo(cljs.core.first.call(null,point_35564),cljs.core.second.call(null,point_35564));

var G__35565 = seq__35553_35560;
var G__35566 = chunk__35554_35561;
var G__35567 = count__35555_35562;
var G__35568 = (i__35556_35563 + (1));
seq__35553_35560 = G__35565;
chunk__35554_35561 = G__35566;
count__35555_35562 = G__35567;
i__35556_35563 = G__35568;
continue;
} else {
var temp__5278__auto___35569 = cljs.core.seq.call(null,seq__35553_35560);
if(temp__5278__auto___35569){
var seq__35553_35570__$1 = temp__5278__auto___35569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35553_35570__$1)){
var c__30979__auto___35571 = cljs.core.chunk_first.call(null,seq__35553_35570__$1);
var G__35572 = cljs.core.chunk_rest.call(null,seq__35553_35570__$1);
var G__35573 = c__30979__auto___35571;
var G__35574 = cljs.core.count.call(null,c__30979__auto___35571);
var G__35575 = (0);
seq__35553_35560 = G__35572;
chunk__35554_35561 = G__35573;
count__35555_35562 = G__35574;
i__35556_35563 = G__35575;
continue;
} else {
var point_35576 = cljs.core.first.call(null,seq__35553_35570__$1);
ctx.lineTo(cljs.core.first.call(null,point_35576),cljs.core.second.call(null,point_35576));

var G__35577 = cljs.core.next.call(null,seq__35553_35570__$1);
var G__35578 = null;
var G__35579 = (0);
var G__35580 = (0);
seq__35553_35560 = G__35577;
chunk__35554_35561 = G__35578;
count__35555_35562 = G__35579;
i__35556_35563 = G__35580;
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

space.drawer.draw_shape.cljs$lang$applyTo = (function (seq35551){
var G__35552 = cljs.core.first.call(null,seq35551);
var seq35551__$1 = cljs.core.next.call(null,seq35551);
return space.drawer.draw_shape.cljs$core$IFn$_invoke$arity$variadic(G__35552,seq35551__$1);
});

space.drawer.std_revealer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rect","rect",-108902628),space.drawer.fill_rect,new cljs.core.Keyword(null,"circle","circle",1903212362),space.drawer.draw_circle,new cljs.core.Keyword(null,"shape","shape",1190694006),space.drawer.draw_shape], null);
/**
 * Renders objects on the canvas according to the data and revealer given.
 */
space.drawer.render_data = (function space$drawer$render_data(ctx,data,revealer){
var seq__35581 = cljs.core.seq.call(null,data);
var chunk__35582 = null;
var count__35583 = (0);
var i__35584 = (0);
while(true){
if((i__35584 < count__35583)){
var rec = cljs.core._nth.call(null,chunk__35582,i__35584);
space.drawer.reset_transforms.call(null,ctx);

var map__35585_35597 = rec;
var map__35585_35598__$1 = ((((!((map__35585_35597 == null)))?((((map__35585_35597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35585_35597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35585_35597):map__35585_35597);
var rotation_35599 = cljs.core.get.call(null,map__35585_35598__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var map__35586_35600 = rotation_35599;
var map__35586_35601__$1 = ((((!((map__35586_35600 == null)))?((((map__35586_35600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35586_35600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35586_35600):map__35586_35600);
var angle_35602 = cljs.core.get.call(null,map__35586_35601__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var cx_35603 = cljs.core.get.call(null,map__35586_35601__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy_35604 = cljs.core.get.call(null,map__35586_35601__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
if(cljs.core.truth_((function (){var and__30036__auto__ = angle_35602;
if(cljs.core.truth_(and__30036__auto__)){
var and__30036__auto____$1 = cx_35603;
if(cljs.core.truth_(and__30036__auto____$1)){
return cy_35604;
} else {
return and__30036__auto____$1;
}
} else {
return and__30036__auto__;
}
})())){
space.drawer.rotating.call(null,ctx,angle_35602,cx_35603,cy_35604);
} else {
}

var map__35589_35605 = rec;
var map__35589_35606__$1 = ((((!((map__35589_35605 == null)))?((((map__35589_35605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35589_35605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35589_35605):map__35589_35605);
var color_35607 = cljs.core.get.call(null,map__35589_35606__$1,new cljs.core.Keyword(null,"color","color",1011675173));
if(cljs.core.truth_(color_35607)){
space.drawer.coloring.call(null,ctx,color_35607);
} else {
}

cljs.core.apply.call(null,revealer.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rec)),cljs.core.conj.call(null,cljs.core.apply.call(null,cljs.core.list,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(rec)),ctx));

var G__35608 = seq__35581;
var G__35609 = chunk__35582;
var G__35610 = count__35583;
var G__35611 = (i__35584 + (1));
seq__35581 = G__35608;
chunk__35582 = G__35609;
count__35583 = G__35610;
i__35584 = G__35611;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__35581);
if(temp__5278__auto__){
var seq__35581__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35581__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__35581__$1);
var G__35612 = cljs.core.chunk_rest.call(null,seq__35581__$1);
var G__35613 = c__30979__auto__;
var G__35614 = cljs.core.count.call(null,c__30979__auto__);
var G__35615 = (0);
seq__35581 = G__35612;
chunk__35582 = G__35613;
count__35583 = G__35614;
i__35584 = G__35615;
continue;
} else {
var rec = cljs.core.first.call(null,seq__35581__$1);
space.drawer.reset_transforms.call(null,ctx);

var map__35591_35616 = rec;
var map__35591_35617__$1 = ((((!((map__35591_35616 == null)))?((((map__35591_35616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35591_35616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35591_35616):map__35591_35616);
var rotation_35618 = cljs.core.get.call(null,map__35591_35617__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var map__35592_35619 = rotation_35618;
var map__35592_35620__$1 = ((((!((map__35592_35619 == null)))?((((map__35592_35619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35592_35619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35592_35619):map__35592_35619);
var angle_35621 = cljs.core.get.call(null,map__35592_35620__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var cx_35622 = cljs.core.get.call(null,map__35592_35620__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy_35623 = cljs.core.get.call(null,map__35592_35620__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
if(cljs.core.truth_((function (){var and__30036__auto__ = angle_35621;
if(cljs.core.truth_(and__30036__auto__)){
var and__30036__auto____$1 = cx_35622;
if(cljs.core.truth_(and__30036__auto____$1)){
return cy_35623;
} else {
return and__30036__auto____$1;
}
} else {
return and__30036__auto__;
}
})())){
space.drawer.rotating.call(null,ctx,angle_35621,cx_35622,cy_35623);
} else {
}

var map__35595_35624 = rec;
var map__35595_35625__$1 = ((((!((map__35595_35624 == null)))?((((map__35595_35624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35595_35624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35595_35624):map__35595_35624);
var color_35626 = cljs.core.get.call(null,map__35595_35625__$1,new cljs.core.Keyword(null,"color","color",1011675173));
if(cljs.core.truth_(color_35626)){
space.drawer.coloring.call(null,ctx,color_35626);
} else {
}

cljs.core.apply.call(null,revealer.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rec)),cljs.core.conj.call(null,cljs.core.apply.call(null,cljs.core.list,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(rec)),ctx));

var G__35627 = cljs.core.next.call(null,seq__35581__$1);
var G__35628 = null;
var G__35629 = (0);
var G__35630 = (0);
seq__35581 = G__35627;
chunk__35582 = G__35628;
count__35583 = G__35629;
i__35584 = G__35630;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=drawer.js.map?rel=1509252262414
