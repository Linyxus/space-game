// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30781__auto__ = (((value == null))?null:value);
var m__30782__auto__ = (devtools.format._header[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,value);
} else {
var m__30782__auto____$1 = (devtools.format._header["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30781__auto__ = (((value == null))?null:value);
var m__30782__auto__ = (devtools.format._has_body[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,value);
} else {
var m__30782__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30781__auto__ = (((value == null))?null:value);
var m__30782__auto__ = (devtools.format._body[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,value);
} else {
var m__30782__auto____$1 = (devtools.format._body["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39112 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39112["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39113 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39113["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39114 = temp__5276__auto____$2;
return (o39114["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39115 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39115["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39116 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39116["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39117 = temp__5276__auto____$2;
return (o39117["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39118 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39118["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39119 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39119["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39120 = temp__5276__auto____$2;
return (o39120["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39121 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39121["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39122 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39122["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39123 = temp__5276__auto____$2;
return (o39123["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39124 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39124["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39125 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39125["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39126 = temp__5276__auto____$2;
return (o39126["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39127 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39127["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39128 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39128["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39129 = temp__5276__auto____$2;
return (o39129["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39130 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39130["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39131 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39131["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39132 = temp__5276__auto____$2;
return (o39132["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39134 = arguments.length;
var i__31326__auto___39135 = (0);
while(true){
if((i__31326__auto___39135 < len__31325__auto___39134)){
args__31332__auto__.push((arguments[i__31326__auto___39135]));

var G__39136 = (i__31326__auto___39135 + (1));
i__31326__auto___39135 = G__39136;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39133){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39133));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39138 = arguments.length;
var i__31326__auto___39139 = (0);
while(true){
if((i__31326__auto___39139 < len__31325__auto___39138)){
args__31332__auto__.push((arguments[i__31326__auto___39139]));

var G__39140 = (i__31326__auto___39139 + (1));
i__31326__auto___39139 = G__39140;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39137){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39137));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39142 = arguments.length;
var i__31326__auto___39143 = (0);
while(true){
if((i__31326__auto___39143 < len__31325__auto___39142)){
args__31332__auto__.push((arguments[i__31326__auto___39143]));

var G__39144 = (i__31326__auto___39143 + (1));
i__31326__auto___39143 = G__39144;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39141){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39141));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39146 = arguments.length;
var i__31326__auto___39147 = (0);
while(true){
if((i__31326__auto___39147 < len__31325__auto___39146)){
args__31332__auto__.push((arguments[i__31326__auto___39147]));

var G__39148 = (i__31326__auto___39147 + (1));
i__31326__auto___39147 = G__39148;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39145){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39145));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39150 = arguments.length;
var i__31326__auto___39151 = (0);
while(true){
if((i__31326__auto___39151 < len__31325__auto___39150)){
args__31332__auto__.push((arguments[i__31326__auto___39151]));

var G__39152 = (i__31326__auto___39151 + (1));
i__31326__auto___39151 = G__39152;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39149){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39149));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39154 = arguments.length;
var i__31326__auto___39155 = (0);
while(true){
if((i__31326__auto___39155 < len__31325__auto___39154)){
args__31332__auto__.push((arguments[i__31326__auto___39155]));

var G__39156 = (i__31326__auto___39155 + (1));
i__31326__auto___39155 = G__39156;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39153){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39153));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39158 = arguments.length;
var i__31326__auto___39159 = (0);
while(true){
if((i__31326__auto___39159 < len__31325__auto___39158)){
args__31332__auto__.push((arguments[i__31326__auto___39159]));

var G__39160 = (i__31326__auto___39159 + (1));
i__31326__auto___39159 = G__39160;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39157){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39157));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39168 = arguments.length;
var i__31326__auto___39169 = (0);
while(true){
if((i__31326__auto___39169 < len__31325__auto___39168)){
args__31332__auto__.push((arguments[i__31326__auto___39169]));

var G__39170 = (i__31326__auto___39169 + (1));
i__31326__auto___39169 = G__39170;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39164){
var vec__39165 = p__39164;
var state_override = cljs.core.nth.call(null,vec__39165,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39165,state_override){
return (function (p1__39161_SHARP_){
return cljs.core.merge.call(null,p1__39161_SHARP_,state_override);
});})(vec__39165,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39162){
var G__39163 = cljs.core.first.call(null,seq39162);
var seq39162__$1 = cljs.core.next.call(null,seq39162);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39163,seq39162__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39172 = arguments.length;
var i__31326__auto___39173 = (0);
while(true){
if((i__31326__auto___39173 < len__31325__auto___39172)){
args__31332__auto__.push((arguments[i__31326__auto___39173]));

var G__39174 = (i__31326__auto___39173 + (1));
i__31326__auto___39173 = G__39174;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39171){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39171));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39177 = arguments.length;
var i__31326__auto___39178 = (0);
while(true){
if((i__31326__auto___39178 < len__31325__auto___39177)){
args__31332__auto__.push((arguments[i__31326__auto___39178]));

var G__39179 = (i__31326__auto___39178 + (1));
i__31326__auto___39178 = G__39179;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39175){
var G__39176 = cljs.core.first.call(null,seq39175);
var seq39175__$1 = cljs.core.next.call(null,seq39175);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39176,seq39175__$1);
});


//# sourceMappingURL=format.js.map?rel=1509168665104
