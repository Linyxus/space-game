// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38271){
var map__38272 = p__38271;
var map__38272__$1 = ((((!((map__38272 == null)))?((((map__38272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38272):map__38272);
var m = map__38272__$1;
var n = cljs.core.get.call(null,map__38272__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38274_38296 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38275_38297 = null;
var count__38276_38298 = (0);
var i__38277_38299 = (0);
while(true){
if((i__38277_38299 < count__38276_38298)){
var f_38300 = cljs.core._nth.call(null,chunk__38275_38297,i__38277_38299);
cljs.core.println.call(null,"  ",f_38300);

var G__38301 = seq__38274_38296;
var G__38302 = chunk__38275_38297;
var G__38303 = count__38276_38298;
var G__38304 = (i__38277_38299 + (1));
seq__38274_38296 = G__38301;
chunk__38275_38297 = G__38302;
count__38276_38298 = G__38303;
i__38277_38299 = G__38304;
continue;
} else {
var temp__5278__auto___38305 = cljs.core.seq.call(null,seq__38274_38296);
if(temp__5278__auto___38305){
var seq__38274_38306__$1 = temp__5278__auto___38305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38274_38306__$1)){
var c__30979__auto___38307 = cljs.core.chunk_first.call(null,seq__38274_38306__$1);
var G__38308 = cljs.core.chunk_rest.call(null,seq__38274_38306__$1);
var G__38309 = c__30979__auto___38307;
var G__38310 = cljs.core.count.call(null,c__30979__auto___38307);
var G__38311 = (0);
seq__38274_38296 = G__38308;
chunk__38275_38297 = G__38309;
count__38276_38298 = G__38310;
i__38277_38299 = G__38311;
continue;
} else {
var f_38312 = cljs.core.first.call(null,seq__38274_38306__$1);
cljs.core.println.call(null,"  ",f_38312);

var G__38313 = cljs.core.next.call(null,seq__38274_38306__$1);
var G__38314 = null;
var G__38315 = (0);
var G__38316 = (0);
seq__38274_38296 = G__38313;
chunk__38275_38297 = G__38314;
count__38276_38298 = G__38315;
i__38277_38299 = G__38316;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38317 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30048__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38317);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38317)))?cljs.core.second.call(null,arglists_38317):arglists_38317));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38278_38318 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38279_38319 = null;
var count__38280_38320 = (0);
var i__38281_38321 = (0);
while(true){
if((i__38281_38321 < count__38280_38320)){
var vec__38282_38322 = cljs.core._nth.call(null,chunk__38279_38319,i__38281_38321);
var name_38323 = cljs.core.nth.call(null,vec__38282_38322,(0),null);
var map__38285_38324 = cljs.core.nth.call(null,vec__38282_38322,(1),null);
var map__38285_38325__$1 = ((((!((map__38285_38324 == null)))?((((map__38285_38324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38285_38324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38285_38324):map__38285_38324);
var doc_38326 = cljs.core.get.call(null,map__38285_38325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38327 = cljs.core.get.call(null,map__38285_38325__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38323);

cljs.core.println.call(null," ",arglists_38327);

if(cljs.core.truth_(doc_38326)){
cljs.core.println.call(null," ",doc_38326);
} else {
}

var G__38328 = seq__38278_38318;
var G__38329 = chunk__38279_38319;
var G__38330 = count__38280_38320;
var G__38331 = (i__38281_38321 + (1));
seq__38278_38318 = G__38328;
chunk__38279_38319 = G__38329;
count__38280_38320 = G__38330;
i__38281_38321 = G__38331;
continue;
} else {
var temp__5278__auto___38332 = cljs.core.seq.call(null,seq__38278_38318);
if(temp__5278__auto___38332){
var seq__38278_38333__$1 = temp__5278__auto___38332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38278_38333__$1)){
var c__30979__auto___38334 = cljs.core.chunk_first.call(null,seq__38278_38333__$1);
var G__38335 = cljs.core.chunk_rest.call(null,seq__38278_38333__$1);
var G__38336 = c__30979__auto___38334;
var G__38337 = cljs.core.count.call(null,c__30979__auto___38334);
var G__38338 = (0);
seq__38278_38318 = G__38335;
chunk__38279_38319 = G__38336;
count__38280_38320 = G__38337;
i__38281_38321 = G__38338;
continue;
} else {
var vec__38287_38339 = cljs.core.first.call(null,seq__38278_38333__$1);
var name_38340 = cljs.core.nth.call(null,vec__38287_38339,(0),null);
var map__38290_38341 = cljs.core.nth.call(null,vec__38287_38339,(1),null);
var map__38290_38342__$1 = ((((!((map__38290_38341 == null)))?((((map__38290_38341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38290_38341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38290_38341):map__38290_38341);
var doc_38343 = cljs.core.get.call(null,map__38290_38342__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38344 = cljs.core.get.call(null,map__38290_38342__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38340);

cljs.core.println.call(null," ",arglists_38344);

if(cljs.core.truth_(doc_38343)){
cljs.core.println.call(null," ",doc_38343);
} else {
}

var G__38345 = cljs.core.next.call(null,seq__38278_38333__$1);
var G__38346 = null;
var G__38347 = (0);
var G__38348 = (0);
seq__38278_38318 = G__38345;
chunk__38279_38319 = G__38346;
count__38280_38320 = G__38347;
i__38281_38321 = G__38348;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__38292 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38293 = null;
var count__38294 = (0);
var i__38295 = (0);
while(true){
if((i__38295 < count__38294)){
var role = cljs.core._nth.call(null,chunk__38293,i__38295);
var temp__5278__auto___38349__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38349__$1)){
var spec_38350 = temp__5278__auto___38349__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38350));
} else {
}

var G__38351 = seq__38292;
var G__38352 = chunk__38293;
var G__38353 = count__38294;
var G__38354 = (i__38295 + (1));
seq__38292 = G__38351;
chunk__38293 = G__38352;
count__38294 = G__38353;
i__38295 = G__38354;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__38292);
if(temp__5278__auto____$1){
var seq__38292__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38292__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__38292__$1);
var G__38355 = cljs.core.chunk_rest.call(null,seq__38292__$1);
var G__38356 = c__30979__auto__;
var G__38357 = cljs.core.count.call(null,c__30979__auto__);
var G__38358 = (0);
seq__38292 = G__38355;
chunk__38293 = G__38356;
count__38294 = G__38357;
i__38295 = G__38358;
continue;
} else {
var role = cljs.core.first.call(null,seq__38292__$1);
var temp__5278__auto___38359__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38359__$2)){
var spec_38360 = temp__5278__auto___38359__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38360));
} else {
}

var G__38361 = cljs.core.next.call(null,seq__38292__$1);
var G__38362 = null;
var G__38363 = (0);
var G__38364 = (0);
seq__38292 = G__38361;
chunk__38293 = G__38362;
count__38294 = G__38363;
i__38295 = G__38364;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1509168664445
