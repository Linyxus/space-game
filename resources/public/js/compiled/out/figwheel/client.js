// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38559){if((e38559 instanceof Error)){
var e = e38559;
return "Error: Unable to stringify";
} else {
throw e38559;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38562 = arguments.length;
switch (G__38562) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38560_SHARP_){
if(typeof p1__38560_SHARP_ === 'string'){
return p1__38560_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38560_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31332__auto__ = [];
var len__31325__auto___38565 = arguments.length;
var i__31326__auto___38566 = (0);
while(true){
if((i__31326__auto___38566 < len__31325__auto___38565)){
args__31332__auto__.push((arguments[i__31326__auto___38566]));

var G__38567 = (i__31326__auto___38566 + (1));
i__31326__auto___38566 = G__38567;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38564){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38564));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31332__auto__ = [];
var len__31325__auto___38569 = arguments.length;
var i__31326__auto___38570 = (0);
while(true){
if((i__31326__auto___38570 < len__31325__auto___38569)){
args__31332__auto__.push((arguments[i__31326__auto___38570]));

var G__38571 = (i__31326__auto___38570 + (1));
i__31326__auto___38570 = G__38571;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38568){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38568));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38572){
var map__38573 = p__38572;
var map__38573__$1 = ((((!((map__38573 == null)))?((((map__38573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38573):map__38573);
var message = cljs.core.get.call(null,map__38573__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30048__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33599__auto___38652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___38652,ch){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___38652,ch){
return (function (state_38624){
var state_val_38625 = (state_38624[(1)]);
if((state_val_38625 === (7))){
var inst_38620 = (state_38624[(2)]);
var state_38624__$1 = state_38624;
var statearr_38626_38653 = state_38624__$1;
(statearr_38626_38653[(2)] = inst_38620);

(statearr_38626_38653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (1))){
var state_38624__$1 = state_38624;
var statearr_38627_38654 = state_38624__$1;
(statearr_38627_38654[(2)] = null);

(statearr_38627_38654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (4))){
var inst_38577 = (state_38624[(7)]);
var inst_38577__$1 = (state_38624[(2)]);
var state_38624__$1 = (function (){var statearr_38628 = state_38624;
(statearr_38628[(7)] = inst_38577__$1);

return statearr_38628;
})();
if(cljs.core.truth_(inst_38577__$1)){
var statearr_38629_38655 = state_38624__$1;
(statearr_38629_38655[(1)] = (5));

} else {
var statearr_38630_38656 = state_38624__$1;
(statearr_38630_38656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (15))){
var inst_38584 = (state_38624[(8)]);
var inst_38599 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38584);
var inst_38600 = cljs.core.first.call(null,inst_38599);
var inst_38601 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38600);
var inst_38602 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38601)].join('');
var inst_38603 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38602);
var state_38624__$1 = state_38624;
var statearr_38631_38657 = state_38624__$1;
(statearr_38631_38657[(2)] = inst_38603);

(statearr_38631_38657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (13))){
var inst_38608 = (state_38624[(2)]);
var state_38624__$1 = state_38624;
var statearr_38632_38658 = state_38624__$1;
(statearr_38632_38658[(2)] = inst_38608);

(statearr_38632_38658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (6))){
var state_38624__$1 = state_38624;
var statearr_38633_38659 = state_38624__$1;
(statearr_38633_38659[(2)] = null);

(statearr_38633_38659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (17))){
var inst_38606 = (state_38624[(2)]);
var state_38624__$1 = state_38624;
var statearr_38634_38660 = state_38624__$1;
(statearr_38634_38660[(2)] = inst_38606);

(statearr_38634_38660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (3))){
var inst_38622 = (state_38624[(2)]);
var state_38624__$1 = state_38624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38624__$1,inst_38622);
} else {
if((state_val_38625 === (12))){
var inst_38583 = (state_38624[(9)]);
var inst_38597 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38583,opts);
var state_38624__$1 = state_38624;
if(cljs.core.truth_(inst_38597)){
var statearr_38635_38661 = state_38624__$1;
(statearr_38635_38661[(1)] = (15));

} else {
var statearr_38636_38662 = state_38624__$1;
(statearr_38636_38662[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (2))){
var state_38624__$1 = state_38624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38624__$1,(4),ch);
} else {
if((state_val_38625 === (11))){
var inst_38584 = (state_38624[(8)]);
var inst_38589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38590 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38584);
var inst_38591 = cljs.core.async.timeout.call(null,(1000));
var inst_38592 = [inst_38590,inst_38591];
var inst_38593 = (new cljs.core.PersistentVector(null,2,(5),inst_38589,inst_38592,null));
var state_38624__$1 = state_38624;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38624__$1,(14),inst_38593);
} else {
if((state_val_38625 === (9))){
var inst_38584 = (state_38624[(8)]);
var inst_38610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38611 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38584);
var inst_38612 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38611);
var inst_38613 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38612)].join('');
var inst_38614 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38613);
var state_38624__$1 = (function (){var statearr_38637 = state_38624;
(statearr_38637[(10)] = inst_38610);

return statearr_38637;
})();
var statearr_38638_38663 = state_38624__$1;
(statearr_38638_38663[(2)] = inst_38614);

(statearr_38638_38663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (5))){
var inst_38577 = (state_38624[(7)]);
var inst_38579 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38580 = (new cljs.core.PersistentArrayMap(null,2,inst_38579,null));
var inst_38581 = (new cljs.core.PersistentHashSet(null,inst_38580,null));
var inst_38582 = figwheel.client.focus_msgs.call(null,inst_38581,inst_38577);
var inst_38583 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38582);
var inst_38584 = cljs.core.first.call(null,inst_38582);
var inst_38585 = figwheel.client.autoload_QMARK_.call(null);
var state_38624__$1 = (function (){var statearr_38639 = state_38624;
(statearr_38639[(8)] = inst_38584);

(statearr_38639[(9)] = inst_38583);

return statearr_38639;
})();
if(cljs.core.truth_(inst_38585)){
var statearr_38640_38664 = state_38624__$1;
(statearr_38640_38664[(1)] = (8));

} else {
var statearr_38641_38665 = state_38624__$1;
(statearr_38641_38665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (14))){
var inst_38595 = (state_38624[(2)]);
var state_38624__$1 = state_38624;
var statearr_38642_38666 = state_38624__$1;
(statearr_38642_38666[(2)] = inst_38595);

(statearr_38642_38666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (16))){
var state_38624__$1 = state_38624;
var statearr_38643_38667 = state_38624__$1;
(statearr_38643_38667[(2)] = null);

(statearr_38643_38667[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (10))){
var inst_38616 = (state_38624[(2)]);
var state_38624__$1 = (function (){var statearr_38644 = state_38624;
(statearr_38644[(11)] = inst_38616);

return statearr_38644;
})();
var statearr_38645_38668 = state_38624__$1;
(statearr_38645_38668[(2)] = null);

(statearr_38645_38668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38625 === (8))){
var inst_38583 = (state_38624[(9)]);
var inst_38587 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38583,opts);
var state_38624__$1 = state_38624;
if(cljs.core.truth_(inst_38587)){
var statearr_38646_38669 = state_38624__$1;
(statearr_38646_38669[(1)] = (11));

} else {
var statearr_38647_38670 = state_38624__$1;
(statearr_38647_38670[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33599__auto___38652,ch))
;
return ((function (switch__33509__auto__,c__33599__auto___38652,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33510__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33510__auto____0 = (function (){
var statearr_38648 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38648[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33510__auto__);

(statearr_38648[(1)] = (1));

return statearr_38648;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33510__auto____1 = (function (state_38624){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_38624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e38649){if((e38649 instanceof Object)){
var ex__33513__auto__ = e38649;
var statearr_38650_38671 = state_38624;
(statearr_38650_38671[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38672 = state_38624;
state_38624 = G__38672;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33510__auto__ = function(state_38624){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33510__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33510__auto____1.call(this,state_38624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33510__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33510__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___38652,ch))
})();
var state__33601__auto__ = (function (){var statearr_38651 = f__33600__auto__.call(null);
(statearr_38651[(6)] = c__33599__auto___38652);

return statearr_38651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___38652,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38673_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38673_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38675 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38675){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38674){if((e38674 instanceof Error)){
var e = e38674;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38675], null));
} else {
var e = e38674;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38675))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38676){
var map__38677 = p__38676;
var map__38677__$1 = ((((!((map__38677 == null)))?((((map__38677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38677):map__38677);
var opts = map__38677__$1;
var build_id = cljs.core.get.call(null,map__38677__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38677,map__38677__$1,opts,build_id){
return (function (p__38679){
var vec__38680 = p__38679;
var seq__38681 = cljs.core.seq.call(null,vec__38680);
var first__38682 = cljs.core.first.call(null,seq__38681);
var seq__38681__$1 = cljs.core.next.call(null,seq__38681);
var map__38683 = first__38682;
var map__38683__$1 = ((((!((map__38683 == null)))?((((map__38683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38683):map__38683);
var msg = map__38683__$1;
var msg_name = cljs.core.get.call(null,map__38683__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38681__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38680,seq__38681,first__38682,seq__38681__$1,map__38683,map__38683__$1,msg,msg_name,_,map__38677,map__38677__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38680,seq__38681,first__38682,seq__38681__$1,map__38683,map__38683__$1,msg,msg_name,_,map__38677,map__38677__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38677,map__38677__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38685){
var vec__38686 = p__38685;
var seq__38687 = cljs.core.seq.call(null,vec__38686);
var first__38688 = cljs.core.first.call(null,seq__38687);
var seq__38687__$1 = cljs.core.next.call(null,seq__38687);
var map__38689 = first__38688;
var map__38689__$1 = ((((!((map__38689 == null)))?((((map__38689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38689):map__38689);
var msg = map__38689__$1;
var msg_name = cljs.core.get.call(null,map__38689__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38687__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38691){
var map__38692 = p__38691;
var map__38692__$1 = ((((!((map__38692 == null)))?((((map__38692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38692):map__38692);
var on_compile_warning = cljs.core.get.call(null,map__38692__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38692__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38692,map__38692__$1,on_compile_warning,on_compile_fail){
return (function (p__38694){
var vec__38695 = p__38694;
var seq__38696 = cljs.core.seq.call(null,vec__38695);
var first__38697 = cljs.core.first.call(null,seq__38696);
var seq__38696__$1 = cljs.core.next.call(null,seq__38696);
var map__38698 = first__38697;
var map__38698__$1 = ((((!((map__38698 == null)))?((((map__38698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38698):map__38698);
var msg = map__38698__$1;
var msg_name = cljs.core.get.call(null,map__38698__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38696__$1;
var pred__38700 = cljs.core._EQ_;
var expr__38701 = msg_name;
if(cljs.core.truth_(pred__38700.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38701))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38700.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38701))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38692,map__38692__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto__,msg_hist,msg_names,msg){
return (function (state_38790){
var state_val_38791 = (state_38790[(1)]);
if((state_val_38791 === (7))){
var inst_38710 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38710)){
var statearr_38792_38839 = state_38790__$1;
(statearr_38792_38839[(1)] = (8));

} else {
var statearr_38793_38840 = state_38790__$1;
(statearr_38793_38840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (20))){
var inst_38784 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38794_38841 = state_38790__$1;
(statearr_38794_38841[(2)] = inst_38784);

(statearr_38794_38841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (27))){
var inst_38780 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38795_38842 = state_38790__$1;
(statearr_38795_38842[(2)] = inst_38780);

(statearr_38795_38842[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (1))){
var inst_38703 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38703)){
var statearr_38796_38843 = state_38790__$1;
(statearr_38796_38843[(1)] = (2));

} else {
var statearr_38797_38844 = state_38790__$1;
(statearr_38797_38844[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (24))){
var inst_38782 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38798_38845 = state_38790__$1;
(statearr_38798_38845[(2)] = inst_38782);

(statearr_38798_38845[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (4))){
var inst_38788 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38790__$1,inst_38788);
} else {
if((state_val_38791 === (15))){
var inst_38786 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38799_38846 = state_38790__$1;
(statearr_38799_38846[(2)] = inst_38786);

(statearr_38799_38846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (21))){
var inst_38739 = (state_38790[(2)]);
var inst_38740 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38741 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38740);
var state_38790__$1 = (function (){var statearr_38800 = state_38790;
(statearr_38800[(7)] = inst_38739);

return statearr_38800;
})();
var statearr_38801_38847 = state_38790__$1;
(statearr_38801_38847[(2)] = inst_38741);

(statearr_38801_38847[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (31))){
var inst_38769 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38769)){
var statearr_38802_38848 = state_38790__$1;
(statearr_38802_38848[(1)] = (34));

} else {
var statearr_38803_38849 = state_38790__$1;
(statearr_38803_38849[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (32))){
var inst_38778 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38804_38850 = state_38790__$1;
(statearr_38804_38850[(2)] = inst_38778);

(statearr_38804_38850[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (33))){
var inst_38765 = (state_38790[(2)]);
var inst_38766 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38767 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38766);
var state_38790__$1 = (function (){var statearr_38805 = state_38790;
(statearr_38805[(8)] = inst_38765);

return statearr_38805;
})();
var statearr_38806_38851 = state_38790__$1;
(statearr_38806_38851[(2)] = inst_38767);

(statearr_38806_38851[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (13))){
var inst_38724 = figwheel.client.heads_up.clear.call(null);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38790__$1,(16),inst_38724);
} else {
if((state_val_38791 === (22))){
var inst_38745 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38746 = figwheel.client.heads_up.append_warning_message.call(null,inst_38745);
var state_38790__$1 = state_38790;
var statearr_38807_38852 = state_38790__$1;
(statearr_38807_38852[(2)] = inst_38746);

(statearr_38807_38852[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (36))){
var inst_38776 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38808_38853 = state_38790__$1;
(statearr_38808_38853[(2)] = inst_38776);

(statearr_38808_38853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (29))){
var inst_38756 = (state_38790[(2)]);
var inst_38757 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38758 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38757);
var state_38790__$1 = (function (){var statearr_38809 = state_38790;
(statearr_38809[(9)] = inst_38756);

return statearr_38809;
})();
var statearr_38810_38854 = state_38790__$1;
(statearr_38810_38854[(2)] = inst_38758);

(statearr_38810_38854[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (6))){
var inst_38705 = (state_38790[(10)]);
var state_38790__$1 = state_38790;
var statearr_38811_38855 = state_38790__$1;
(statearr_38811_38855[(2)] = inst_38705);

(statearr_38811_38855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (28))){
var inst_38752 = (state_38790[(2)]);
var inst_38753 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38754 = figwheel.client.heads_up.display_warning.call(null,inst_38753);
var state_38790__$1 = (function (){var statearr_38812 = state_38790;
(statearr_38812[(11)] = inst_38752);

return statearr_38812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38790__$1,(29),inst_38754);
} else {
if((state_val_38791 === (25))){
var inst_38750 = figwheel.client.heads_up.clear.call(null);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38790__$1,(28),inst_38750);
} else {
if((state_val_38791 === (34))){
var inst_38771 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38790__$1,(37),inst_38771);
} else {
if((state_val_38791 === (17))){
var inst_38730 = (state_38790[(2)]);
var inst_38731 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38732 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38731);
var state_38790__$1 = (function (){var statearr_38813 = state_38790;
(statearr_38813[(12)] = inst_38730);

return statearr_38813;
})();
var statearr_38814_38856 = state_38790__$1;
(statearr_38814_38856[(2)] = inst_38732);

(statearr_38814_38856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (3))){
var inst_38722 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38722)){
var statearr_38815_38857 = state_38790__$1;
(statearr_38815_38857[(1)] = (13));

} else {
var statearr_38816_38858 = state_38790__$1;
(statearr_38816_38858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (12))){
var inst_38718 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38817_38859 = state_38790__$1;
(statearr_38817_38859[(2)] = inst_38718);

(statearr_38817_38859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (2))){
var inst_38705 = (state_38790[(10)]);
var inst_38705__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38790__$1 = (function (){var statearr_38818 = state_38790;
(statearr_38818[(10)] = inst_38705__$1);

return statearr_38818;
})();
if(cljs.core.truth_(inst_38705__$1)){
var statearr_38819_38860 = state_38790__$1;
(statearr_38819_38860[(1)] = (5));

} else {
var statearr_38820_38861 = state_38790__$1;
(statearr_38820_38861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (23))){
var inst_38748 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38748)){
var statearr_38821_38862 = state_38790__$1;
(statearr_38821_38862[(1)] = (25));

} else {
var statearr_38822_38863 = state_38790__$1;
(statearr_38822_38863[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (35))){
var state_38790__$1 = state_38790;
var statearr_38823_38864 = state_38790__$1;
(statearr_38823_38864[(2)] = null);

(statearr_38823_38864[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (19))){
var inst_38743 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38743)){
var statearr_38824_38865 = state_38790__$1;
(statearr_38824_38865[(1)] = (22));

} else {
var statearr_38825_38866 = state_38790__$1;
(statearr_38825_38866[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (11))){
var inst_38714 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38826_38867 = state_38790__$1;
(statearr_38826_38867[(2)] = inst_38714);

(statearr_38826_38867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (9))){
var inst_38716 = figwheel.client.heads_up.clear.call(null);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38790__$1,(12),inst_38716);
} else {
if((state_val_38791 === (5))){
var inst_38707 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38790__$1 = state_38790;
var statearr_38827_38868 = state_38790__$1;
(statearr_38827_38868[(2)] = inst_38707);

(statearr_38827_38868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (14))){
var inst_38734 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38734)){
var statearr_38828_38869 = state_38790__$1;
(statearr_38828_38869[(1)] = (18));

} else {
var statearr_38829_38870 = state_38790__$1;
(statearr_38829_38870[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (26))){
var inst_38760 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38760)){
var statearr_38830_38871 = state_38790__$1;
(statearr_38830_38871[(1)] = (30));

} else {
var statearr_38831_38872 = state_38790__$1;
(statearr_38831_38872[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (16))){
var inst_38726 = (state_38790[(2)]);
var inst_38727 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38728 = figwheel.client.heads_up.display_exception.call(null,inst_38727);
var state_38790__$1 = (function (){var statearr_38832 = state_38790;
(statearr_38832[(13)] = inst_38726);

return statearr_38832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38790__$1,(17),inst_38728);
} else {
if((state_val_38791 === (30))){
var inst_38762 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38763 = figwheel.client.heads_up.display_warning.call(null,inst_38762);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38790__$1,(33),inst_38763);
} else {
if((state_val_38791 === (10))){
var inst_38720 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38833_38873 = state_38790__$1;
(statearr_38833_38873[(2)] = inst_38720);

(statearr_38833_38873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (18))){
var inst_38736 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38737 = figwheel.client.heads_up.display_exception.call(null,inst_38736);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38790__$1,(21),inst_38737);
} else {
if((state_val_38791 === (37))){
var inst_38773 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38834_38874 = state_38790__$1;
(statearr_38834_38874[(2)] = inst_38773);

(statearr_38834_38874[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (8))){
var inst_38712 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38790__$1,(11),inst_38712);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33599__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33509__auto__,c__33599__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto____0 = (function (){
var statearr_38835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38835[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto__);

(statearr_38835[(1)] = (1));

return statearr_38835;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto____1 = (function (state_38790){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_38790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e38836){if((e38836 instanceof Object)){
var ex__33513__auto__ = e38836;
var statearr_38837_38875 = state_38790;
(statearr_38837_38875[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38876 = state_38790;
state_38790 = G__38876;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto__ = function(state_38790){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto____1.call(this,state_38790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto__,msg_hist,msg_names,msg))
})();
var state__33601__auto__ = (function (){var statearr_38838 = f__33600__auto__.call(null);
(statearr_38838[(6)] = c__33599__auto__);

return statearr_38838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto__,msg_hist,msg_names,msg))
);

return c__33599__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33599__auto___38905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___38905,ch){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___38905,ch){
return (function (state_38891){
var state_val_38892 = (state_38891[(1)]);
if((state_val_38892 === (1))){
var state_38891__$1 = state_38891;
var statearr_38893_38906 = state_38891__$1;
(statearr_38893_38906[(2)] = null);

(statearr_38893_38906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (2))){
var state_38891__$1 = state_38891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38891__$1,(4),ch);
} else {
if((state_val_38892 === (3))){
var inst_38889 = (state_38891[(2)]);
var state_38891__$1 = state_38891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38891__$1,inst_38889);
} else {
if((state_val_38892 === (4))){
var inst_38879 = (state_38891[(7)]);
var inst_38879__$1 = (state_38891[(2)]);
var state_38891__$1 = (function (){var statearr_38894 = state_38891;
(statearr_38894[(7)] = inst_38879__$1);

return statearr_38894;
})();
if(cljs.core.truth_(inst_38879__$1)){
var statearr_38895_38907 = state_38891__$1;
(statearr_38895_38907[(1)] = (5));

} else {
var statearr_38896_38908 = state_38891__$1;
(statearr_38896_38908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (5))){
var inst_38879 = (state_38891[(7)]);
var inst_38881 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38879);
var state_38891__$1 = state_38891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38891__$1,(8),inst_38881);
} else {
if((state_val_38892 === (6))){
var state_38891__$1 = state_38891;
var statearr_38897_38909 = state_38891__$1;
(statearr_38897_38909[(2)] = null);

(statearr_38897_38909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (7))){
var inst_38887 = (state_38891[(2)]);
var state_38891__$1 = state_38891;
var statearr_38898_38910 = state_38891__$1;
(statearr_38898_38910[(2)] = inst_38887);

(statearr_38898_38910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38892 === (8))){
var inst_38883 = (state_38891[(2)]);
var state_38891__$1 = (function (){var statearr_38899 = state_38891;
(statearr_38899[(8)] = inst_38883);

return statearr_38899;
})();
var statearr_38900_38911 = state_38891__$1;
(statearr_38900_38911[(2)] = null);

(statearr_38900_38911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33599__auto___38905,ch))
;
return ((function (switch__33509__auto__,c__33599__auto___38905,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33510__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33510__auto____0 = (function (){
var statearr_38901 = [null,null,null,null,null,null,null,null,null];
(statearr_38901[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33510__auto__);

(statearr_38901[(1)] = (1));

return statearr_38901;
});
var figwheel$client$heads_up_plugin_$_state_machine__33510__auto____1 = (function (state_38891){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_38891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e38902){if((e38902 instanceof Object)){
var ex__33513__auto__ = e38902;
var statearr_38903_38912 = state_38891;
(statearr_38903_38912[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38913 = state_38891;
state_38891 = G__38913;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33510__auto__ = function(state_38891){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33510__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33510__auto____1.call(this,state_38891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33510__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33510__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___38905,ch))
})();
var state__33601__auto__ = (function (){var statearr_38904 = f__33600__auto__.call(null);
(statearr_38904[(6)] = c__33599__auto___38905);

return statearr_38904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___38905,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto__){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto__){
return (function (state_38919){
var state_val_38920 = (state_38919[(1)]);
if((state_val_38920 === (1))){
var inst_38914 = cljs.core.async.timeout.call(null,(3000));
var state_38919__$1 = state_38919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38919__$1,(2),inst_38914);
} else {
if((state_val_38920 === (2))){
var inst_38916 = (state_38919[(2)]);
var inst_38917 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38919__$1 = (function (){var statearr_38921 = state_38919;
(statearr_38921[(7)] = inst_38916);

return statearr_38921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38919__$1,inst_38917);
} else {
return null;
}
}
});})(c__33599__auto__))
;
return ((function (switch__33509__auto__,c__33599__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33510__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33510__auto____0 = (function (){
var statearr_38922 = [null,null,null,null,null,null,null,null];
(statearr_38922[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33510__auto__);

(statearr_38922[(1)] = (1));

return statearr_38922;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33510__auto____1 = (function (state_38919){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_38919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e38923){if((e38923 instanceof Object)){
var ex__33513__auto__ = e38923;
var statearr_38924_38926 = state_38919;
(statearr_38924_38926[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38927 = state_38919;
state_38919 = G__38927;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33510__auto__ = function(state_38919){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33510__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33510__auto____1.call(this,state_38919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33510__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33510__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto__))
})();
var state__33601__auto__ = (function (){var statearr_38925 = f__33600__auto__.call(null);
(statearr_38925[(6)] = c__33599__auto__);

return statearr_38925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto__))
);

return c__33599__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto__,figwheel_version,temp__5278__auto__){
return (function (state_38934){
var state_val_38935 = (state_38934[(1)]);
if((state_val_38935 === (1))){
var inst_38928 = cljs.core.async.timeout.call(null,(2000));
var state_38934__$1 = state_38934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38934__$1,(2),inst_38928);
} else {
if((state_val_38935 === (2))){
var inst_38930 = (state_38934[(2)]);
var inst_38931 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38932 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38931);
var state_38934__$1 = (function (){var statearr_38936 = state_38934;
(statearr_38936[(7)] = inst_38930);

return statearr_38936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38934__$1,inst_38932);
} else {
return null;
}
}
});})(c__33599__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__33509__auto__,c__33599__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto____0 = (function (){
var statearr_38937 = [null,null,null,null,null,null,null,null];
(statearr_38937[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto__);

(statearr_38937[(1)] = (1));

return statearr_38937;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto____1 = (function (state_38934){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_38934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e38938){if((e38938 instanceof Object)){
var ex__33513__auto__ = e38938;
var statearr_38939_38941 = state_38934;
(statearr_38939_38941[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38942 = state_38934;
state_38934 = G__38942;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto__ = function(state_38934){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto____1.call(this,state_38934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33601__auto__ = (function (){var statearr_38940 = f__33600__auto__.call(null);
(statearr_38940[(6)] = c__33599__auto__);

return statearr_38940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto__,figwheel_version,temp__5278__auto__))
);

return c__33599__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38943){
var map__38944 = p__38943;
var map__38944__$1 = ((((!((map__38944 == null)))?((((map__38944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38944):map__38944);
var file = cljs.core.get.call(null,map__38944__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38944__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38944__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38946 = "";
var G__38946__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38946),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38946);
var G__38946__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38946__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38946__$1);
if(cljs.core.truth_((function (){var and__30036__auto__ = line;
if(cljs.core.truth_(and__30036__auto__)){
return column;
} else {
return and__30036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38946__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38946__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38947){
var map__38948 = p__38947;
var map__38948__$1 = ((((!((map__38948 == null)))?((((map__38948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38948):map__38948);
var ed = map__38948__$1;
var formatted_exception = cljs.core.get.call(null,map__38948__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38948__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38948__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38950_38954 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38951_38955 = null;
var count__38952_38956 = (0);
var i__38953_38957 = (0);
while(true){
if((i__38953_38957 < count__38952_38956)){
var msg_38958 = cljs.core._nth.call(null,chunk__38951_38955,i__38953_38957);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38958);

var G__38959 = seq__38950_38954;
var G__38960 = chunk__38951_38955;
var G__38961 = count__38952_38956;
var G__38962 = (i__38953_38957 + (1));
seq__38950_38954 = G__38959;
chunk__38951_38955 = G__38960;
count__38952_38956 = G__38961;
i__38953_38957 = G__38962;
continue;
} else {
var temp__5278__auto___38963 = cljs.core.seq.call(null,seq__38950_38954);
if(temp__5278__auto___38963){
var seq__38950_38964__$1 = temp__5278__auto___38963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38950_38964__$1)){
var c__30979__auto___38965 = cljs.core.chunk_first.call(null,seq__38950_38964__$1);
var G__38966 = cljs.core.chunk_rest.call(null,seq__38950_38964__$1);
var G__38967 = c__30979__auto___38965;
var G__38968 = cljs.core.count.call(null,c__30979__auto___38965);
var G__38969 = (0);
seq__38950_38954 = G__38966;
chunk__38951_38955 = G__38967;
count__38952_38956 = G__38968;
i__38953_38957 = G__38969;
continue;
} else {
var msg_38970 = cljs.core.first.call(null,seq__38950_38964__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38970);

var G__38971 = cljs.core.next.call(null,seq__38950_38964__$1);
var G__38972 = null;
var G__38973 = (0);
var G__38974 = (0);
seq__38950_38954 = G__38971;
chunk__38951_38955 = G__38972;
count__38952_38956 = G__38973;
i__38953_38957 = G__38974;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38975){
var map__38976 = p__38975;
var map__38976__$1 = ((((!((map__38976 == null)))?((((map__38976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38976):map__38976);
var w = map__38976__$1;
var message = cljs.core.get.call(null,map__38976__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38978 = cljs.core.seq.call(null,plugins);
var chunk__38979 = null;
var count__38980 = (0);
var i__38981 = (0);
while(true){
if((i__38981 < count__38980)){
var vec__38982 = cljs.core._nth.call(null,chunk__38979,i__38981);
var k = cljs.core.nth.call(null,vec__38982,(0),null);
var plugin = cljs.core.nth.call(null,vec__38982,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38988 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38978,chunk__38979,count__38980,i__38981,pl_38988,vec__38982,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38988.call(null,msg_hist);
});})(seq__38978,chunk__38979,count__38980,i__38981,pl_38988,vec__38982,k,plugin))
);
} else {
}

var G__38989 = seq__38978;
var G__38990 = chunk__38979;
var G__38991 = count__38980;
var G__38992 = (i__38981 + (1));
seq__38978 = G__38989;
chunk__38979 = G__38990;
count__38980 = G__38991;
i__38981 = G__38992;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__38978);
if(temp__5278__auto__){
var seq__38978__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38978__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__38978__$1);
var G__38993 = cljs.core.chunk_rest.call(null,seq__38978__$1);
var G__38994 = c__30979__auto__;
var G__38995 = cljs.core.count.call(null,c__30979__auto__);
var G__38996 = (0);
seq__38978 = G__38993;
chunk__38979 = G__38994;
count__38980 = G__38995;
i__38981 = G__38996;
continue;
} else {
var vec__38985 = cljs.core.first.call(null,seq__38978__$1);
var k = cljs.core.nth.call(null,vec__38985,(0),null);
var plugin = cljs.core.nth.call(null,vec__38985,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38997 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38978,chunk__38979,count__38980,i__38981,pl_38997,vec__38985,k,plugin,seq__38978__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38997.call(null,msg_hist);
});})(seq__38978,chunk__38979,count__38980,i__38981,pl_38997,vec__38985,k,plugin,seq__38978__$1,temp__5278__auto__))
);
} else {
}

var G__38998 = cljs.core.next.call(null,seq__38978__$1);
var G__38999 = null;
var G__39000 = (0);
var G__39001 = (0);
seq__38978 = G__38998;
chunk__38979 = G__38999;
count__38980 = G__39000;
i__38981 = G__39001;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39003 = arguments.length;
switch (G__39003) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39004_39009 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39005_39010 = null;
var count__39006_39011 = (0);
var i__39007_39012 = (0);
while(true){
if((i__39007_39012 < count__39006_39011)){
var msg_39013 = cljs.core._nth.call(null,chunk__39005_39010,i__39007_39012);
figwheel.client.socket.handle_incoming_message.call(null,msg_39013);

var G__39014 = seq__39004_39009;
var G__39015 = chunk__39005_39010;
var G__39016 = count__39006_39011;
var G__39017 = (i__39007_39012 + (1));
seq__39004_39009 = G__39014;
chunk__39005_39010 = G__39015;
count__39006_39011 = G__39016;
i__39007_39012 = G__39017;
continue;
} else {
var temp__5278__auto___39018 = cljs.core.seq.call(null,seq__39004_39009);
if(temp__5278__auto___39018){
var seq__39004_39019__$1 = temp__5278__auto___39018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39004_39019__$1)){
var c__30979__auto___39020 = cljs.core.chunk_first.call(null,seq__39004_39019__$1);
var G__39021 = cljs.core.chunk_rest.call(null,seq__39004_39019__$1);
var G__39022 = c__30979__auto___39020;
var G__39023 = cljs.core.count.call(null,c__30979__auto___39020);
var G__39024 = (0);
seq__39004_39009 = G__39021;
chunk__39005_39010 = G__39022;
count__39006_39011 = G__39023;
i__39007_39012 = G__39024;
continue;
} else {
var msg_39025 = cljs.core.first.call(null,seq__39004_39019__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39025);

var G__39026 = cljs.core.next.call(null,seq__39004_39019__$1);
var G__39027 = null;
var G__39028 = (0);
var G__39029 = (0);
seq__39004_39009 = G__39026;
chunk__39005_39010 = G__39027;
count__39006_39011 = G__39028;
i__39007_39012 = G__39029;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39034 = arguments.length;
var i__31326__auto___39035 = (0);
while(true){
if((i__31326__auto___39035 < len__31325__auto___39034)){
args__31332__auto__.push((arguments[i__31326__auto___39035]));

var G__39036 = (i__31326__auto___39035 + (1));
i__31326__auto___39035 = G__39036;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39031){
var map__39032 = p__39031;
var map__39032__$1 = ((((!((map__39032 == null)))?((((map__39032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39032):map__39032);
var opts = map__39032__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39030){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39030));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39037){if((e39037 instanceof Error)){
var e = e39037;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39037;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39038){
var map__39039 = p__39038;
var map__39039__$1 = ((((!((map__39039 == null)))?((((map__39039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39039):map__39039);
var msg_name = cljs.core.get.call(null,map__39039__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509168664891
