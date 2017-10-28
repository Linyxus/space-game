// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33659 = arguments.length;
switch (G__33659) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33660 = (function (f,blockable,meta33661){
this.f = f;
this.blockable = blockable;
this.meta33661 = meta33661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33662,meta33661__$1){
var self__ = this;
var _33662__$1 = this;
return (new cljs.core.async.t_cljs$core$async33660(self__.f,self__.blockable,meta33661__$1));
});

cljs.core.async.t_cljs$core$async33660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33662){
var self__ = this;
var _33662__$1 = this;
return self__.meta33661;
});

cljs.core.async.t_cljs$core$async33660.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33661","meta33661",-203546688,null)], null);
});

cljs.core.async.t_cljs$core$async33660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33660";

cljs.core.async.t_cljs$core$async33660.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async33660");
});

cljs.core.async.__GT_t_cljs$core$async33660 = (function cljs$core$async$__GT_t_cljs$core$async33660(f__$1,blockable__$1,meta33661){
return (new cljs.core.async.t_cljs$core$async33660(f__$1,blockable__$1,meta33661));
});

}

return (new cljs.core.async.t_cljs$core$async33660(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33666 = arguments.length;
switch (G__33666) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33669 = arguments.length;
switch (G__33669) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33672 = arguments.length;
switch (G__33672) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33674 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33674);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33674,ret){
return (function (){
return fn1.call(null,val_33674);
});})(val_33674,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33676 = arguments.length;
switch (G__33676) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31091__auto___33678 = n;
var x_33679 = (0);
while(true){
if((x_33679 < n__31091__auto___33678)){
(a[x_33679] = (0));

var G__33680 = (x_33679 + (1));
x_33679 = G__33680;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33681 = (i + (1));
i = G__33681;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33682 = (function (flag,meta33683){
this.flag = flag;
this.meta33683 = meta33683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33684,meta33683__$1){
var self__ = this;
var _33684__$1 = this;
return (new cljs.core.async.t_cljs$core$async33682(self__.flag,meta33683__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33684){
var self__ = this;
var _33684__$1 = this;
return self__.meta33683;
});})(flag))
;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33682.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33683","meta33683",1392601863,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33682";

cljs.core.async.t_cljs$core$async33682.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async33682");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33682 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33682(flag__$1,meta33683){
return (new cljs.core.async.t_cljs$core$async33682(flag__$1,meta33683));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33682(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33685 = (function (flag,cb,meta33686){
this.flag = flag;
this.cb = cb;
this.meta33686 = meta33686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33687,meta33686__$1){
var self__ = this;
var _33687__$1 = this;
return (new cljs.core.async.t_cljs$core$async33685(self__.flag,self__.cb,meta33686__$1));
});

cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33687){
var self__ = this;
var _33687__$1 = this;
return self__.meta33686;
});

cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33686","meta33686",-1314865502,null)], null);
});

cljs.core.async.t_cljs$core$async33685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33685";

cljs.core.async.t_cljs$core$async33685.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async33685");
});

cljs.core.async.__GT_t_cljs$core$async33685 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33685(flag__$1,cb__$1,meta33686){
return (new cljs.core.async.t_cljs$core$async33685(flag__$1,cb__$1,meta33686));
});

}

return (new cljs.core.async.t_cljs$core$async33685(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33688_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33688_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33689_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33689_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30048__auto__ = wport;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33690 = (i + (1));
i = G__33690;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30048__auto__ = ret;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__30036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30036__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___33696 = arguments.length;
var i__31326__auto___33697 = (0);
while(true){
if((i__31326__auto___33697 < len__31325__auto___33696)){
args__31332__auto__.push((arguments[i__31326__auto___33697]));

var G__33698 = (i__31326__auto___33697 + (1));
i__31326__auto___33697 = G__33698;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33693){
var map__33694 = p__33693;
var map__33694__$1 = ((((!((map__33694 == null)))?((((map__33694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33694):map__33694);
var opts = map__33694__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33691){
var G__33692 = cljs.core.first.call(null,seq33691);
var seq33691__$1 = cljs.core.next.call(null,seq33691);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33692,seq33691__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33700 = arguments.length;
switch (G__33700) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33599__auto___33746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___33746){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___33746){
return (function (state_33724){
var state_val_33725 = (state_33724[(1)]);
if((state_val_33725 === (7))){
var inst_33720 = (state_33724[(2)]);
var state_33724__$1 = state_33724;
var statearr_33726_33747 = state_33724__$1;
(statearr_33726_33747[(2)] = inst_33720);

(statearr_33726_33747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33725 === (1))){
var state_33724__$1 = state_33724;
var statearr_33727_33748 = state_33724__$1;
(statearr_33727_33748[(2)] = null);

(statearr_33727_33748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33725 === (4))){
var inst_33703 = (state_33724[(7)]);
var inst_33703__$1 = (state_33724[(2)]);
var inst_33704 = (inst_33703__$1 == null);
var state_33724__$1 = (function (){var statearr_33728 = state_33724;
(statearr_33728[(7)] = inst_33703__$1);

return statearr_33728;
})();
if(cljs.core.truth_(inst_33704)){
var statearr_33729_33749 = state_33724__$1;
(statearr_33729_33749[(1)] = (5));

} else {
var statearr_33730_33750 = state_33724__$1;
(statearr_33730_33750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33725 === (13))){
var state_33724__$1 = state_33724;
var statearr_33731_33751 = state_33724__$1;
(statearr_33731_33751[(2)] = null);

(statearr_33731_33751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33725 === (6))){
var inst_33703 = (state_33724[(7)]);
var state_33724__$1 = state_33724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33724__$1,(11),to,inst_33703);
} else {
if((state_val_33725 === (3))){
var inst_33722 = (state_33724[(2)]);
var state_33724__$1 = state_33724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33724__$1,inst_33722);
} else {
if((state_val_33725 === (12))){
var state_33724__$1 = state_33724;
var statearr_33732_33752 = state_33724__$1;
(statearr_33732_33752[(2)] = null);

(statearr_33732_33752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33725 === (2))){
var state_33724__$1 = state_33724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33724__$1,(4),from);
} else {
if((state_val_33725 === (11))){
var inst_33713 = (state_33724[(2)]);
var state_33724__$1 = state_33724;
if(cljs.core.truth_(inst_33713)){
var statearr_33733_33753 = state_33724__$1;
(statearr_33733_33753[(1)] = (12));

} else {
var statearr_33734_33754 = state_33724__$1;
(statearr_33734_33754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33725 === (9))){
var state_33724__$1 = state_33724;
var statearr_33735_33755 = state_33724__$1;
(statearr_33735_33755[(2)] = null);

(statearr_33735_33755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33725 === (5))){
var state_33724__$1 = state_33724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33736_33756 = state_33724__$1;
(statearr_33736_33756[(1)] = (8));

} else {
var statearr_33737_33757 = state_33724__$1;
(statearr_33737_33757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33725 === (14))){
var inst_33718 = (state_33724[(2)]);
var state_33724__$1 = state_33724;
var statearr_33738_33758 = state_33724__$1;
(statearr_33738_33758[(2)] = inst_33718);

(statearr_33738_33758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33725 === (10))){
var inst_33710 = (state_33724[(2)]);
var state_33724__$1 = state_33724;
var statearr_33739_33759 = state_33724__$1;
(statearr_33739_33759[(2)] = inst_33710);

(statearr_33739_33759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33725 === (8))){
var inst_33707 = cljs.core.async.close_BANG_.call(null,to);
var state_33724__$1 = state_33724;
var statearr_33740_33760 = state_33724__$1;
(statearr_33740_33760[(2)] = inst_33707);

(statearr_33740_33760[(1)] = (10));


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
});})(c__33599__auto___33746))
;
return ((function (switch__33509__auto__,c__33599__auto___33746){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_33741 = [null,null,null,null,null,null,null,null];
(statearr_33741[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_33741[(1)] = (1));

return statearr_33741;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_33724){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_33724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e33742){if((e33742 instanceof Object)){
var ex__33513__auto__ = e33742;
var statearr_33743_33761 = state_33724;
(statearr_33743_33761[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33762 = state_33724;
state_33724 = G__33762;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_33724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_33724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___33746))
})();
var state__33601__auto__ = (function (){var statearr_33744 = f__33600__auto__.call(null);
(statearr_33744[(6)] = c__33599__auto___33746);

return statearr_33744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___33746))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33763){
var vec__33764 = p__33763;
var v = cljs.core.nth.call(null,vec__33764,(0),null);
var p = cljs.core.nth.call(null,vec__33764,(1),null);
var job = vec__33764;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33599__auto___33935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___33935,res,vec__33764,v,p,job,jobs,results){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___33935,res,vec__33764,v,p,job,jobs,results){
return (function (state_33771){
var state_val_33772 = (state_33771[(1)]);
if((state_val_33772 === (1))){
var state_33771__$1 = state_33771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33771__$1,(2),res,v);
} else {
if((state_val_33772 === (2))){
var inst_33768 = (state_33771[(2)]);
var inst_33769 = cljs.core.async.close_BANG_.call(null,res);
var state_33771__$1 = (function (){var statearr_33773 = state_33771;
(statearr_33773[(7)] = inst_33768);

return statearr_33773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33771__$1,inst_33769);
} else {
return null;
}
}
});})(c__33599__auto___33935,res,vec__33764,v,p,job,jobs,results))
;
return ((function (switch__33509__auto__,c__33599__auto___33935,res,vec__33764,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0 = (function (){
var statearr_33774 = [null,null,null,null,null,null,null,null];
(statearr_33774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__);

(statearr_33774[(1)] = (1));

return statearr_33774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1 = (function (state_33771){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_33771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e33775){if((e33775 instanceof Object)){
var ex__33513__auto__ = e33775;
var statearr_33776_33936 = state_33771;
(statearr_33776_33936[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33937 = state_33771;
state_33771 = G__33937;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__ = function(state_33771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1.call(this,state_33771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___33935,res,vec__33764,v,p,job,jobs,results))
})();
var state__33601__auto__ = (function (){var statearr_33777 = f__33600__auto__.call(null);
(statearr_33777[(6)] = c__33599__auto___33935);

return statearr_33777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___33935,res,vec__33764,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33778){
var vec__33779 = p__33778;
var v = cljs.core.nth.call(null,vec__33779,(0),null);
var p = cljs.core.nth.call(null,vec__33779,(1),null);
var job = vec__33779;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31091__auto___33938 = n;
var __33939 = (0);
while(true){
if((__33939 < n__31091__auto___33938)){
var G__33782_33940 = type;
var G__33782_33941__$1 = (((G__33782_33940 instanceof cljs.core.Keyword))?G__33782_33940.fqn:null);
switch (G__33782_33941__$1) {
case "compute":
var c__33599__auto___33943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33939,c__33599__auto___33943,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (__33939,c__33599__auto___33943,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async){
return (function (state_33795){
var state_val_33796 = (state_33795[(1)]);
if((state_val_33796 === (1))){
var state_33795__$1 = state_33795;
var statearr_33797_33944 = state_33795__$1;
(statearr_33797_33944[(2)] = null);

(statearr_33797_33944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (2))){
var state_33795__$1 = state_33795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33795__$1,(4),jobs);
} else {
if((state_val_33796 === (3))){
var inst_33793 = (state_33795[(2)]);
var state_33795__$1 = state_33795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33795__$1,inst_33793);
} else {
if((state_val_33796 === (4))){
var inst_33785 = (state_33795[(2)]);
var inst_33786 = process.call(null,inst_33785);
var state_33795__$1 = state_33795;
if(cljs.core.truth_(inst_33786)){
var statearr_33798_33945 = state_33795__$1;
(statearr_33798_33945[(1)] = (5));

} else {
var statearr_33799_33946 = state_33795__$1;
(statearr_33799_33946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (5))){
var state_33795__$1 = state_33795;
var statearr_33800_33947 = state_33795__$1;
(statearr_33800_33947[(2)] = null);

(statearr_33800_33947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (6))){
var state_33795__$1 = state_33795;
var statearr_33801_33948 = state_33795__$1;
(statearr_33801_33948[(2)] = null);

(statearr_33801_33948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (7))){
var inst_33791 = (state_33795[(2)]);
var state_33795__$1 = state_33795;
var statearr_33802_33949 = state_33795__$1;
(statearr_33802_33949[(2)] = inst_33791);

(statearr_33802_33949[(1)] = (3));


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
});})(__33939,c__33599__auto___33943,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async))
;
return ((function (__33939,switch__33509__auto__,c__33599__auto___33943,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0 = (function (){
var statearr_33803 = [null,null,null,null,null,null,null];
(statearr_33803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__);

(statearr_33803[(1)] = (1));

return statearr_33803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1 = (function (state_33795){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_33795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e33804){if((e33804 instanceof Object)){
var ex__33513__auto__ = e33804;
var statearr_33805_33950 = state_33795;
(statearr_33805_33950[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33951 = state_33795;
state_33795 = G__33951;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__ = function(state_33795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1.call(this,state_33795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__;
})()
;})(__33939,switch__33509__auto__,c__33599__auto___33943,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async))
})();
var state__33601__auto__ = (function (){var statearr_33806 = f__33600__auto__.call(null);
(statearr_33806[(6)] = c__33599__auto___33943);

return statearr_33806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(__33939,c__33599__auto___33943,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async))
);


break;
case "async":
var c__33599__auto___33952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33939,c__33599__auto___33952,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (__33939,c__33599__auto___33952,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async){
return (function (state_33819){
var state_val_33820 = (state_33819[(1)]);
if((state_val_33820 === (1))){
var state_33819__$1 = state_33819;
var statearr_33821_33953 = state_33819__$1;
(statearr_33821_33953[(2)] = null);

(statearr_33821_33953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (2))){
var state_33819__$1 = state_33819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33819__$1,(4),jobs);
} else {
if((state_val_33820 === (3))){
var inst_33817 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33819__$1,inst_33817);
} else {
if((state_val_33820 === (4))){
var inst_33809 = (state_33819[(2)]);
var inst_33810 = async.call(null,inst_33809);
var state_33819__$1 = state_33819;
if(cljs.core.truth_(inst_33810)){
var statearr_33822_33954 = state_33819__$1;
(statearr_33822_33954[(1)] = (5));

} else {
var statearr_33823_33955 = state_33819__$1;
(statearr_33823_33955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (5))){
var state_33819__$1 = state_33819;
var statearr_33824_33956 = state_33819__$1;
(statearr_33824_33956[(2)] = null);

(statearr_33824_33956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (6))){
var state_33819__$1 = state_33819;
var statearr_33825_33957 = state_33819__$1;
(statearr_33825_33957[(2)] = null);

(statearr_33825_33957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (7))){
var inst_33815 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33826_33958 = state_33819__$1;
(statearr_33826_33958[(2)] = inst_33815);

(statearr_33826_33958[(1)] = (3));


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
});})(__33939,c__33599__auto___33952,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async))
;
return ((function (__33939,switch__33509__auto__,c__33599__auto___33952,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0 = (function (){
var statearr_33827 = [null,null,null,null,null,null,null];
(statearr_33827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__);

(statearr_33827[(1)] = (1));

return statearr_33827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1 = (function (state_33819){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_33819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e33828){if((e33828 instanceof Object)){
var ex__33513__auto__ = e33828;
var statearr_33829_33959 = state_33819;
(statearr_33829_33959[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33960 = state_33819;
state_33819 = G__33960;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__ = function(state_33819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1.call(this,state_33819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__;
})()
;})(__33939,switch__33509__auto__,c__33599__auto___33952,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async))
})();
var state__33601__auto__ = (function (){var statearr_33830 = f__33600__auto__.call(null);
(statearr_33830[(6)] = c__33599__auto___33952);

return statearr_33830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(__33939,c__33599__auto___33952,G__33782_33940,G__33782_33941__$1,n__31091__auto___33938,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33782_33941__$1)].join('')));

}

var G__33961 = (__33939 + (1));
__33939 = G__33961;
continue;
} else {
}
break;
}

var c__33599__auto___33962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___33962,jobs,results,process,async){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___33962,jobs,results,process,async){
return (function (state_33852){
var state_val_33853 = (state_33852[(1)]);
if((state_val_33853 === (1))){
var state_33852__$1 = state_33852;
var statearr_33854_33963 = state_33852__$1;
(statearr_33854_33963[(2)] = null);

(statearr_33854_33963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (2))){
var state_33852__$1 = state_33852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33852__$1,(4),from);
} else {
if((state_val_33853 === (3))){
var inst_33850 = (state_33852[(2)]);
var state_33852__$1 = state_33852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33852__$1,inst_33850);
} else {
if((state_val_33853 === (4))){
var inst_33833 = (state_33852[(7)]);
var inst_33833__$1 = (state_33852[(2)]);
var inst_33834 = (inst_33833__$1 == null);
var state_33852__$1 = (function (){var statearr_33855 = state_33852;
(statearr_33855[(7)] = inst_33833__$1);

return statearr_33855;
})();
if(cljs.core.truth_(inst_33834)){
var statearr_33856_33964 = state_33852__$1;
(statearr_33856_33964[(1)] = (5));

} else {
var statearr_33857_33965 = state_33852__$1;
(statearr_33857_33965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (5))){
var inst_33836 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33852__$1 = state_33852;
var statearr_33858_33966 = state_33852__$1;
(statearr_33858_33966[(2)] = inst_33836);

(statearr_33858_33966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (6))){
var inst_33838 = (state_33852[(8)]);
var inst_33833 = (state_33852[(7)]);
var inst_33838__$1 = cljs.core.async.chan.call(null,(1));
var inst_33839 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33840 = [inst_33833,inst_33838__$1];
var inst_33841 = (new cljs.core.PersistentVector(null,2,(5),inst_33839,inst_33840,null));
var state_33852__$1 = (function (){var statearr_33859 = state_33852;
(statearr_33859[(8)] = inst_33838__$1);

return statearr_33859;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33852__$1,(8),jobs,inst_33841);
} else {
if((state_val_33853 === (7))){
var inst_33848 = (state_33852[(2)]);
var state_33852__$1 = state_33852;
var statearr_33860_33967 = state_33852__$1;
(statearr_33860_33967[(2)] = inst_33848);

(statearr_33860_33967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33853 === (8))){
var inst_33838 = (state_33852[(8)]);
var inst_33843 = (state_33852[(2)]);
var state_33852__$1 = (function (){var statearr_33861 = state_33852;
(statearr_33861[(9)] = inst_33843);

return statearr_33861;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33852__$1,(9),results,inst_33838);
} else {
if((state_val_33853 === (9))){
var inst_33845 = (state_33852[(2)]);
var state_33852__$1 = (function (){var statearr_33862 = state_33852;
(statearr_33862[(10)] = inst_33845);

return statearr_33862;
})();
var statearr_33863_33968 = state_33852__$1;
(statearr_33863_33968[(2)] = null);

(statearr_33863_33968[(1)] = (2));


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
});})(c__33599__auto___33962,jobs,results,process,async))
;
return ((function (switch__33509__auto__,c__33599__auto___33962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0 = (function (){
var statearr_33864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__);

(statearr_33864[(1)] = (1));

return statearr_33864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1 = (function (state_33852){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_33852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e33865){if((e33865 instanceof Object)){
var ex__33513__auto__ = e33865;
var statearr_33866_33969 = state_33852;
(statearr_33866_33969[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33970 = state_33852;
state_33852 = G__33970;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__ = function(state_33852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1.call(this,state_33852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___33962,jobs,results,process,async))
})();
var state__33601__auto__ = (function (){var statearr_33867 = f__33600__auto__.call(null);
(statearr_33867[(6)] = c__33599__auto___33962);

return statearr_33867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___33962,jobs,results,process,async))
);


var c__33599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto__,jobs,results,process,async){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto__,jobs,results,process,async){
return (function (state_33905){
var state_val_33906 = (state_33905[(1)]);
if((state_val_33906 === (7))){
var inst_33901 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33907_33971 = state_33905__$1;
(statearr_33907_33971[(2)] = inst_33901);

(statearr_33907_33971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (20))){
var state_33905__$1 = state_33905;
var statearr_33908_33972 = state_33905__$1;
(statearr_33908_33972[(2)] = null);

(statearr_33908_33972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (1))){
var state_33905__$1 = state_33905;
var statearr_33909_33973 = state_33905__$1;
(statearr_33909_33973[(2)] = null);

(statearr_33909_33973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (4))){
var inst_33870 = (state_33905[(7)]);
var inst_33870__$1 = (state_33905[(2)]);
var inst_33871 = (inst_33870__$1 == null);
var state_33905__$1 = (function (){var statearr_33910 = state_33905;
(statearr_33910[(7)] = inst_33870__$1);

return statearr_33910;
})();
if(cljs.core.truth_(inst_33871)){
var statearr_33911_33974 = state_33905__$1;
(statearr_33911_33974[(1)] = (5));

} else {
var statearr_33912_33975 = state_33905__$1;
(statearr_33912_33975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (15))){
var inst_33883 = (state_33905[(8)]);
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33905__$1,(18),to,inst_33883);
} else {
if((state_val_33906 === (21))){
var inst_33896 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33913_33976 = state_33905__$1;
(statearr_33913_33976[(2)] = inst_33896);

(statearr_33913_33976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (13))){
var inst_33898 = (state_33905[(2)]);
var state_33905__$1 = (function (){var statearr_33914 = state_33905;
(statearr_33914[(9)] = inst_33898);

return statearr_33914;
})();
var statearr_33915_33977 = state_33905__$1;
(statearr_33915_33977[(2)] = null);

(statearr_33915_33977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (6))){
var inst_33870 = (state_33905[(7)]);
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33905__$1,(11),inst_33870);
} else {
if((state_val_33906 === (17))){
var inst_33891 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33891)){
var statearr_33916_33978 = state_33905__$1;
(statearr_33916_33978[(1)] = (19));

} else {
var statearr_33917_33979 = state_33905__$1;
(statearr_33917_33979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (3))){
var inst_33903 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33905__$1,inst_33903);
} else {
if((state_val_33906 === (12))){
var inst_33880 = (state_33905[(10)]);
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33905__$1,(14),inst_33880);
} else {
if((state_val_33906 === (2))){
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33905__$1,(4),results);
} else {
if((state_val_33906 === (19))){
var state_33905__$1 = state_33905;
var statearr_33918_33980 = state_33905__$1;
(statearr_33918_33980[(2)] = null);

(statearr_33918_33980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (11))){
var inst_33880 = (state_33905[(2)]);
var state_33905__$1 = (function (){var statearr_33919 = state_33905;
(statearr_33919[(10)] = inst_33880);

return statearr_33919;
})();
var statearr_33920_33981 = state_33905__$1;
(statearr_33920_33981[(2)] = null);

(statearr_33920_33981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (9))){
var state_33905__$1 = state_33905;
var statearr_33921_33982 = state_33905__$1;
(statearr_33921_33982[(2)] = null);

(statearr_33921_33982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (5))){
var state_33905__$1 = state_33905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33922_33983 = state_33905__$1;
(statearr_33922_33983[(1)] = (8));

} else {
var statearr_33923_33984 = state_33905__$1;
(statearr_33923_33984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (14))){
var inst_33883 = (state_33905[(8)]);
var inst_33885 = (state_33905[(11)]);
var inst_33883__$1 = (state_33905[(2)]);
var inst_33884 = (inst_33883__$1 == null);
var inst_33885__$1 = cljs.core.not.call(null,inst_33884);
var state_33905__$1 = (function (){var statearr_33924 = state_33905;
(statearr_33924[(8)] = inst_33883__$1);

(statearr_33924[(11)] = inst_33885__$1);

return statearr_33924;
})();
if(inst_33885__$1){
var statearr_33925_33985 = state_33905__$1;
(statearr_33925_33985[(1)] = (15));

} else {
var statearr_33926_33986 = state_33905__$1;
(statearr_33926_33986[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (16))){
var inst_33885 = (state_33905[(11)]);
var state_33905__$1 = state_33905;
var statearr_33927_33987 = state_33905__$1;
(statearr_33927_33987[(2)] = inst_33885);

(statearr_33927_33987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (10))){
var inst_33877 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33928_33988 = state_33905__$1;
(statearr_33928_33988[(2)] = inst_33877);

(statearr_33928_33988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (18))){
var inst_33888 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33929_33989 = state_33905__$1;
(statearr_33929_33989[(2)] = inst_33888);

(statearr_33929_33989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (8))){
var inst_33874 = cljs.core.async.close_BANG_.call(null,to);
var state_33905__$1 = state_33905;
var statearr_33930_33990 = state_33905__$1;
(statearr_33930_33990[(2)] = inst_33874);

(statearr_33930_33990[(1)] = (10));


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
}
}
}
}
});})(c__33599__auto__,jobs,results,process,async))
;
return ((function (switch__33509__auto__,c__33599__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0 = (function (){
var statearr_33931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__);

(statearr_33931[(1)] = (1));

return statearr_33931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1 = (function (state_33905){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_33905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e33932){if((e33932 instanceof Object)){
var ex__33513__auto__ = e33932;
var statearr_33933_33991 = state_33905;
(statearr_33933_33991[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33992 = state_33905;
state_33905 = G__33992;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__ = function(state_33905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1.call(this,state_33905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33510__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto__,jobs,results,process,async))
})();
var state__33601__auto__ = (function (){var statearr_33934 = f__33600__auto__.call(null);
(statearr_33934[(6)] = c__33599__auto__);

return statearr_33934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto__,jobs,results,process,async))
);

return c__33599__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33994 = arguments.length;
switch (G__33994) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33997 = arguments.length;
switch (G__33997) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34000 = arguments.length;
switch (G__34000) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33599__auto___34049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___34049,tc,fc){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___34049,tc,fc){
return (function (state_34026){
var state_val_34027 = (state_34026[(1)]);
if((state_val_34027 === (7))){
var inst_34022 = (state_34026[(2)]);
var state_34026__$1 = state_34026;
var statearr_34028_34050 = state_34026__$1;
(statearr_34028_34050[(2)] = inst_34022);

(statearr_34028_34050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (1))){
var state_34026__$1 = state_34026;
var statearr_34029_34051 = state_34026__$1;
(statearr_34029_34051[(2)] = null);

(statearr_34029_34051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (4))){
var inst_34003 = (state_34026[(7)]);
var inst_34003__$1 = (state_34026[(2)]);
var inst_34004 = (inst_34003__$1 == null);
var state_34026__$1 = (function (){var statearr_34030 = state_34026;
(statearr_34030[(7)] = inst_34003__$1);

return statearr_34030;
})();
if(cljs.core.truth_(inst_34004)){
var statearr_34031_34052 = state_34026__$1;
(statearr_34031_34052[(1)] = (5));

} else {
var statearr_34032_34053 = state_34026__$1;
(statearr_34032_34053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (13))){
var state_34026__$1 = state_34026;
var statearr_34033_34054 = state_34026__$1;
(statearr_34033_34054[(2)] = null);

(statearr_34033_34054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (6))){
var inst_34003 = (state_34026[(7)]);
var inst_34009 = p.call(null,inst_34003);
var state_34026__$1 = state_34026;
if(cljs.core.truth_(inst_34009)){
var statearr_34034_34055 = state_34026__$1;
(statearr_34034_34055[(1)] = (9));

} else {
var statearr_34035_34056 = state_34026__$1;
(statearr_34035_34056[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (3))){
var inst_34024 = (state_34026[(2)]);
var state_34026__$1 = state_34026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34026__$1,inst_34024);
} else {
if((state_val_34027 === (12))){
var state_34026__$1 = state_34026;
var statearr_34036_34057 = state_34026__$1;
(statearr_34036_34057[(2)] = null);

(statearr_34036_34057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (2))){
var state_34026__$1 = state_34026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34026__$1,(4),ch);
} else {
if((state_val_34027 === (11))){
var inst_34003 = (state_34026[(7)]);
var inst_34013 = (state_34026[(2)]);
var state_34026__$1 = state_34026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34026__$1,(8),inst_34013,inst_34003);
} else {
if((state_val_34027 === (9))){
var state_34026__$1 = state_34026;
var statearr_34037_34058 = state_34026__$1;
(statearr_34037_34058[(2)] = tc);

(statearr_34037_34058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (5))){
var inst_34006 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34007 = cljs.core.async.close_BANG_.call(null,fc);
var state_34026__$1 = (function (){var statearr_34038 = state_34026;
(statearr_34038[(8)] = inst_34006);

return statearr_34038;
})();
var statearr_34039_34059 = state_34026__$1;
(statearr_34039_34059[(2)] = inst_34007);

(statearr_34039_34059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (14))){
var inst_34020 = (state_34026[(2)]);
var state_34026__$1 = state_34026;
var statearr_34040_34060 = state_34026__$1;
(statearr_34040_34060[(2)] = inst_34020);

(statearr_34040_34060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (10))){
var state_34026__$1 = state_34026;
var statearr_34041_34061 = state_34026__$1;
(statearr_34041_34061[(2)] = fc);

(statearr_34041_34061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34027 === (8))){
var inst_34015 = (state_34026[(2)]);
var state_34026__$1 = state_34026;
if(cljs.core.truth_(inst_34015)){
var statearr_34042_34062 = state_34026__$1;
(statearr_34042_34062[(1)] = (12));

} else {
var statearr_34043_34063 = state_34026__$1;
(statearr_34043_34063[(1)] = (13));

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
});})(c__33599__auto___34049,tc,fc))
;
return ((function (switch__33509__auto__,c__33599__auto___34049,tc,fc){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_34044 = [null,null,null,null,null,null,null,null,null];
(statearr_34044[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_34044[(1)] = (1));

return statearr_34044;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_34026){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_34026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e34045){if((e34045 instanceof Object)){
var ex__33513__auto__ = e34045;
var statearr_34046_34064 = state_34026;
(statearr_34046_34064[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34065 = state_34026;
state_34026 = G__34065;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_34026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_34026);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___34049,tc,fc))
})();
var state__33601__auto__ = (function (){var statearr_34047 = f__33600__auto__.call(null);
(statearr_34047[(6)] = c__33599__auto___34049);

return statearr_34047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___34049,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto__){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto__){
return (function (state_34086){
var state_val_34087 = (state_34086[(1)]);
if((state_val_34087 === (7))){
var inst_34082 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34088_34106 = state_34086__$1;
(statearr_34088_34106[(2)] = inst_34082);

(statearr_34088_34106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (1))){
var inst_34066 = init;
var state_34086__$1 = (function (){var statearr_34089 = state_34086;
(statearr_34089[(7)] = inst_34066);

return statearr_34089;
})();
var statearr_34090_34107 = state_34086__$1;
(statearr_34090_34107[(2)] = null);

(statearr_34090_34107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (4))){
var inst_34069 = (state_34086[(8)]);
var inst_34069__$1 = (state_34086[(2)]);
var inst_34070 = (inst_34069__$1 == null);
var state_34086__$1 = (function (){var statearr_34091 = state_34086;
(statearr_34091[(8)] = inst_34069__$1);

return statearr_34091;
})();
if(cljs.core.truth_(inst_34070)){
var statearr_34092_34108 = state_34086__$1;
(statearr_34092_34108[(1)] = (5));

} else {
var statearr_34093_34109 = state_34086__$1;
(statearr_34093_34109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (6))){
var inst_34066 = (state_34086[(7)]);
var inst_34069 = (state_34086[(8)]);
var inst_34073 = (state_34086[(9)]);
var inst_34073__$1 = f.call(null,inst_34066,inst_34069);
var inst_34074 = cljs.core.reduced_QMARK_.call(null,inst_34073__$1);
var state_34086__$1 = (function (){var statearr_34094 = state_34086;
(statearr_34094[(9)] = inst_34073__$1);

return statearr_34094;
})();
if(inst_34074){
var statearr_34095_34110 = state_34086__$1;
(statearr_34095_34110[(1)] = (8));

} else {
var statearr_34096_34111 = state_34086__$1;
(statearr_34096_34111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (3))){
var inst_34084 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34086__$1,inst_34084);
} else {
if((state_val_34087 === (2))){
var state_34086__$1 = state_34086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34086__$1,(4),ch);
} else {
if((state_val_34087 === (9))){
var inst_34073 = (state_34086[(9)]);
var inst_34066 = inst_34073;
var state_34086__$1 = (function (){var statearr_34097 = state_34086;
(statearr_34097[(7)] = inst_34066);

return statearr_34097;
})();
var statearr_34098_34112 = state_34086__$1;
(statearr_34098_34112[(2)] = null);

(statearr_34098_34112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (5))){
var inst_34066 = (state_34086[(7)]);
var state_34086__$1 = state_34086;
var statearr_34099_34113 = state_34086__$1;
(statearr_34099_34113[(2)] = inst_34066);

(statearr_34099_34113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (10))){
var inst_34080 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34100_34114 = state_34086__$1;
(statearr_34100_34114[(2)] = inst_34080);

(statearr_34100_34114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (8))){
var inst_34073 = (state_34086[(9)]);
var inst_34076 = cljs.core.deref.call(null,inst_34073);
var state_34086__$1 = state_34086;
var statearr_34101_34115 = state_34086__$1;
(statearr_34101_34115[(2)] = inst_34076);

(statearr_34101_34115[(1)] = (10));


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
});})(c__33599__auto__))
;
return ((function (switch__33509__auto__,c__33599__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33510__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33510__auto____0 = (function (){
var statearr_34102 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34102[(0)] = cljs$core$async$reduce_$_state_machine__33510__auto__);

(statearr_34102[(1)] = (1));

return statearr_34102;
});
var cljs$core$async$reduce_$_state_machine__33510__auto____1 = (function (state_34086){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_34086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e34103){if((e34103 instanceof Object)){
var ex__33513__auto__ = e34103;
var statearr_34104_34116 = state_34086;
(statearr_34104_34116[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34117 = state_34086;
state_34086 = G__34117;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33510__auto__ = function(state_34086){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33510__auto____1.call(this,state_34086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33510__auto____0;
cljs$core$async$reduce_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33510__auto____1;
return cljs$core$async$reduce_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto__))
})();
var state__33601__auto__ = (function (){var statearr_34105 = f__33600__auto__.call(null);
(statearr_34105[(6)] = c__33599__auto__);

return statearr_34105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto__))
);

return c__33599__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto__,f__$1){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto__,f__$1){
return (function (state_34123){
var state_val_34124 = (state_34123[(1)]);
if((state_val_34124 === (1))){
var inst_34118 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34123__$1 = state_34123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34123__$1,(2),inst_34118);
} else {
if((state_val_34124 === (2))){
var inst_34120 = (state_34123[(2)]);
var inst_34121 = f__$1.call(null,inst_34120);
var state_34123__$1 = state_34123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34123__$1,inst_34121);
} else {
return null;
}
}
});})(c__33599__auto__,f__$1))
;
return ((function (switch__33509__auto__,c__33599__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33510__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33510__auto____0 = (function (){
var statearr_34125 = [null,null,null,null,null,null,null];
(statearr_34125[(0)] = cljs$core$async$transduce_$_state_machine__33510__auto__);

(statearr_34125[(1)] = (1));

return statearr_34125;
});
var cljs$core$async$transduce_$_state_machine__33510__auto____1 = (function (state_34123){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_34123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e34126){if((e34126 instanceof Object)){
var ex__33513__auto__ = e34126;
var statearr_34127_34129 = state_34123;
(statearr_34127_34129[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34130 = state_34123;
state_34123 = G__34130;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33510__auto__ = function(state_34123){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33510__auto____1.call(this,state_34123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33510__auto____0;
cljs$core$async$transduce_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33510__auto____1;
return cljs$core$async$transduce_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto__,f__$1))
})();
var state__33601__auto__ = (function (){var statearr_34128 = f__33600__auto__.call(null);
(statearr_34128[(6)] = c__33599__auto__);

return statearr_34128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto__,f__$1))
);

return c__33599__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34132 = arguments.length;
switch (G__34132) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto__){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto__){
return (function (state_34157){
var state_val_34158 = (state_34157[(1)]);
if((state_val_34158 === (7))){
var inst_34139 = (state_34157[(2)]);
var state_34157__$1 = state_34157;
var statearr_34159_34180 = state_34157__$1;
(statearr_34159_34180[(2)] = inst_34139);

(statearr_34159_34180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (1))){
var inst_34133 = cljs.core.seq.call(null,coll);
var inst_34134 = inst_34133;
var state_34157__$1 = (function (){var statearr_34160 = state_34157;
(statearr_34160[(7)] = inst_34134);

return statearr_34160;
})();
var statearr_34161_34181 = state_34157__$1;
(statearr_34161_34181[(2)] = null);

(statearr_34161_34181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (4))){
var inst_34134 = (state_34157[(7)]);
var inst_34137 = cljs.core.first.call(null,inst_34134);
var state_34157__$1 = state_34157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34157__$1,(7),ch,inst_34137);
} else {
if((state_val_34158 === (13))){
var inst_34151 = (state_34157[(2)]);
var state_34157__$1 = state_34157;
var statearr_34162_34182 = state_34157__$1;
(statearr_34162_34182[(2)] = inst_34151);

(statearr_34162_34182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (6))){
var inst_34142 = (state_34157[(2)]);
var state_34157__$1 = state_34157;
if(cljs.core.truth_(inst_34142)){
var statearr_34163_34183 = state_34157__$1;
(statearr_34163_34183[(1)] = (8));

} else {
var statearr_34164_34184 = state_34157__$1;
(statearr_34164_34184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (3))){
var inst_34155 = (state_34157[(2)]);
var state_34157__$1 = state_34157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34157__$1,inst_34155);
} else {
if((state_val_34158 === (12))){
var state_34157__$1 = state_34157;
var statearr_34165_34185 = state_34157__$1;
(statearr_34165_34185[(2)] = null);

(statearr_34165_34185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (2))){
var inst_34134 = (state_34157[(7)]);
var state_34157__$1 = state_34157;
if(cljs.core.truth_(inst_34134)){
var statearr_34166_34186 = state_34157__$1;
(statearr_34166_34186[(1)] = (4));

} else {
var statearr_34167_34187 = state_34157__$1;
(statearr_34167_34187[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (11))){
var inst_34148 = cljs.core.async.close_BANG_.call(null,ch);
var state_34157__$1 = state_34157;
var statearr_34168_34188 = state_34157__$1;
(statearr_34168_34188[(2)] = inst_34148);

(statearr_34168_34188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (9))){
var state_34157__$1 = state_34157;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34169_34189 = state_34157__$1;
(statearr_34169_34189[(1)] = (11));

} else {
var statearr_34170_34190 = state_34157__$1;
(statearr_34170_34190[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (5))){
var inst_34134 = (state_34157[(7)]);
var state_34157__$1 = state_34157;
var statearr_34171_34191 = state_34157__$1;
(statearr_34171_34191[(2)] = inst_34134);

(statearr_34171_34191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (10))){
var inst_34153 = (state_34157[(2)]);
var state_34157__$1 = state_34157;
var statearr_34172_34192 = state_34157__$1;
(statearr_34172_34192[(2)] = inst_34153);

(statearr_34172_34192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (8))){
var inst_34134 = (state_34157[(7)]);
var inst_34144 = cljs.core.next.call(null,inst_34134);
var inst_34134__$1 = inst_34144;
var state_34157__$1 = (function (){var statearr_34173 = state_34157;
(statearr_34173[(7)] = inst_34134__$1);

return statearr_34173;
})();
var statearr_34174_34193 = state_34157__$1;
(statearr_34174_34193[(2)] = null);

(statearr_34174_34193[(1)] = (2));


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
});})(c__33599__auto__))
;
return ((function (switch__33509__auto__,c__33599__auto__){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_34175 = [null,null,null,null,null,null,null,null];
(statearr_34175[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_34175[(1)] = (1));

return statearr_34175;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_34157){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_34157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e34176){if((e34176 instanceof Object)){
var ex__33513__auto__ = e34176;
var statearr_34177_34194 = state_34157;
(statearr_34177_34194[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34195 = state_34157;
state_34157 = G__34195;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_34157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_34157);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto__))
})();
var state__33601__auto__ = (function (){var statearr_34178 = f__33600__auto__.call(null);
(statearr_34178[(6)] = c__33599__auto__);

return statearr_34178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto__))
);

return c__33599__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30781__auto__ = (((_ == null))?null:_);
var m__30782__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,_);
} else {
var m__30782__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30782__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m);
} else {
var m__30782__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34196 = (function (ch,cs,meta34197){
this.ch = ch;
this.cs = cs;
this.meta34197 = meta34197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34198,meta34197__$1){
var self__ = this;
var _34198__$1 = this;
return (new cljs.core.async.t_cljs$core$async34196(self__.ch,self__.cs,meta34197__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34198){
var self__ = this;
var _34198__$1 = this;
return self__.meta34197;
});})(cs))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34196.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34197","meta34197",-811825149,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34196";

cljs.core.async.t_cljs$core$async34196.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34196");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34196 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34196(ch__$1,cs__$1,meta34197){
return (new cljs.core.async.t_cljs$core$async34196(ch__$1,cs__$1,meta34197));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34196(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33599__auto___34418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___34418,cs,m,dchan,dctr,done){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___34418,cs,m,dchan,dctr,done){
return (function (state_34333){
var state_val_34334 = (state_34333[(1)]);
if((state_val_34334 === (7))){
var inst_34329 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34335_34419 = state_34333__$1;
(statearr_34335_34419[(2)] = inst_34329);

(statearr_34335_34419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (20))){
var inst_34232 = (state_34333[(7)]);
var inst_34244 = cljs.core.first.call(null,inst_34232);
var inst_34245 = cljs.core.nth.call(null,inst_34244,(0),null);
var inst_34246 = cljs.core.nth.call(null,inst_34244,(1),null);
var state_34333__$1 = (function (){var statearr_34336 = state_34333;
(statearr_34336[(8)] = inst_34245);

return statearr_34336;
})();
if(cljs.core.truth_(inst_34246)){
var statearr_34337_34420 = state_34333__$1;
(statearr_34337_34420[(1)] = (22));

} else {
var statearr_34338_34421 = state_34333__$1;
(statearr_34338_34421[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (27))){
var inst_34274 = (state_34333[(9)]);
var inst_34281 = (state_34333[(10)]);
var inst_34201 = (state_34333[(11)]);
var inst_34276 = (state_34333[(12)]);
var inst_34281__$1 = cljs.core._nth.call(null,inst_34274,inst_34276);
var inst_34282 = cljs.core.async.put_BANG_.call(null,inst_34281__$1,inst_34201,done);
var state_34333__$1 = (function (){var statearr_34339 = state_34333;
(statearr_34339[(10)] = inst_34281__$1);

return statearr_34339;
})();
if(cljs.core.truth_(inst_34282)){
var statearr_34340_34422 = state_34333__$1;
(statearr_34340_34422[(1)] = (30));

} else {
var statearr_34341_34423 = state_34333__$1;
(statearr_34341_34423[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (1))){
var state_34333__$1 = state_34333;
var statearr_34342_34424 = state_34333__$1;
(statearr_34342_34424[(2)] = null);

(statearr_34342_34424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (24))){
var inst_34232 = (state_34333[(7)]);
var inst_34251 = (state_34333[(2)]);
var inst_34252 = cljs.core.next.call(null,inst_34232);
var inst_34210 = inst_34252;
var inst_34211 = null;
var inst_34212 = (0);
var inst_34213 = (0);
var state_34333__$1 = (function (){var statearr_34343 = state_34333;
(statearr_34343[(13)] = inst_34210);

(statearr_34343[(14)] = inst_34211);

(statearr_34343[(15)] = inst_34213);

(statearr_34343[(16)] = inst_34251);

(statearr_34343[(17)] = inst_34212);

return statearr_34343;
})();
var statearr_34344_34425 = state_34333__$1;
(statearr_34344_34425[(2)] = null);

(statearr_34344_34425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (39))){
var state_34333__$1 = state_34333;
var statearr_34348_34426 = state_34333__$1;
(statearr_34348_34426[(2)] = null);

(statearr_34348_34426[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (4))){
var inst_34201 = (state_34333[(11)]);
var inst_34201__$1 = (state_34333[(2)]);
var inst_34202 = (inst_34201__$1 == null);
var state_34333__$1 = (function (){var statearr_34349 = state_34333;
(statearr_34349[(11)] = inst_34201__$1);

return statearr_34349;
})();
if(cljs.core.truth_(inst_34202)){
var statearr_34350_34427 = state_34333__$1;
(statearr_34350_34427[(1)] = (5));

} else {
var statearr_34351_34428 = state_34333__$1;
(statearr_34351_34428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (15))){
var inst_34210 = (state_34333[(13)]);
var inst_34211 = (state_34333[(14)]);
var inst_34213 = (state_34333[(15)]);
var inst_34212 = (state_34333[(17)]);
var inst_34228 = (state_34333[(2)]);
var inst_34229 = (inst_34213 + (1));
var tmp34345 = inst_34210;
var tmp34346 = inst_34211;
var tmp34347 = inst_34212;
var inst_34210__$1 = tmp34345;
var inst_34211__$1 = tmp34346;
var inst_34212__$1 = tmp34347;
var inst_34213__$1 = inst_34229;
var state_34333__$1 = (function (){var statearr_34352 = state_34333;
(statearr_34352[(13)] = inst_34210__$1);

(statearr_34352[(14)] = inst_34211__$1);

(statearr_34352[(15)] = inst_34213__$1);

(statearr_34352[(17)] = inst_34212__$1);

(statearr_34352[(18)] = inst_34228);

return statearr_34352;
})();
var statearr_34353_34429 = state_34333__$1;
(statearr_34353_34429[(2)] = null);

(statearr_34353_34429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (21))){
var inst_34255 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34357_34430 = state_34333__$1;
(statearr_34357_34430[(2)] = inst_34255);

(statearr_34357_34430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (31))){
var inst_34281 = (state_34333[(10)]);
var inst_34285 = done.call(null,null);
var inst_34286 = cljs.core.async.untap_STAR_.call(null,m,inst_34281);
var state_34333__$1 = (function (){var statearr_34358 = state_34333;
(statearr_34358[(19)] = inst_34285);

return statearr_34358;
})();
var statearr_34359_34431 = state_34333__$1;
(statearr_34359_34431[(2)] = inst_34286);

(statearr_34359_34431[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (32))){
var inst_34274 = (state_34333[(9)]);
var inst_34275 = (state_34333[(20)]);
var inst_34273 = (state_34333[(21)]);
var inst_34276 = (state_34333[(12)]);
var inst_34288 = (state_34333[(2)]);
var inst_34289 = (inst_34276 + (1));
var tmp34354 = inst_34274;
var tmp34355 = inst_34275;
var tmp34356 = inst_34273;
var inst_34273__$1 = tmp34356;
var inst_34274__$1 = tmp34354;
var inst_34275__$1 = tmp34355;
var inst_34276__$1 = inst_34289;
var state_34333__$1 = (function (){var statearr_34360 = state_34333;
(statearr_34360[(9)] = inst_34274__$1);

(statearr_34360[(20)] = inst_34275__$1);

(statearr_34360[(21)] = inst_34273__$1);

(statearr_34360[(12)] = inst_34276__$1);

(statearr_34360[(22)] = inst_34288);

return statearr_34360;
})();
var statearr_34361_34432 = state_34333__$1;
(statearr_34361_34432[(2)] = null);

(statearr_34361_34432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (40))){
var inst_34301 = (state_34333[(23)]);
var inst_34305 = done.call(null,null);
var inst_34306 = cljs.core.async.untap_STAR_.call(null,m,inst_34301);
var state_34333__$1 = (function (){var statearr_34362 = state_34333;
(statearr_34362[(24)] = inst_34305);

return statearr_34362;
})();
var statearr_34363_34433 = state_34333__$1;
(statearr_34363_34433[(2)] = inst_34306);

(statearr_34363_34433[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (33))){
var inst_34292 = (state_34333[(25)]);
var inst_34294 = cljs.core.chunked_seq_QMARK_.call(null,inst_34292);
var state_34333__$1 = state_34333;
if(inst_34294){
var statearr_34364_34434 = state_34333__$1;
(statearr_34364_34434[(1)] = (36));

} else {
var statearr_34365_34435 = state_34333__$1;
(statearr_34365_34435[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (13))){
var inst_34222 = (state_34333[(26)]);
var inst_34225 = cljs.core.async.close_BANG_.call(null,inst_34222);
var state_34333__$1 = state_34333;
var statearr_34366_34436 = state_34333__$1;
(statearr_34366_34436[(2)] = inst_34225);

(statearr_34366_34436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (22))){
var inst_34245 = (state_34333[(8)]);
var inst_34248 = cljs.core.async.close_BANG_.call(null,inst_34245);
var state_34333__$1 = state_34333;
var statearr_34367_34437 = state_34333__$1;
(statearr_34367_34437[(2)] = inst_34248);

(statearr_34367_34437[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (36))){
var inst_34292 = (state_34333[(25)]);
var inst_34296 = cljs.core.chunk_first.call(null,inst_34292);
var inst_34297 = cljs.core.chunk_rest.call(null,inst_34292);
var inst_34298 = cljs.core.count.call(null,inst_34296);
var inst_34273 = inst_34297;
var inst_34274 = inst_34296;
var inst_34275 = inst_34298;
var inst_34276 = (0);
var state_34333__$1 = (function (){var statearr_34368 = state_34333;
(statearr_34368[(9)] = inst_34274);

(statearr_34368[(20)] = inst_34275);

(statearr_34368[(21)] = inst_34273);

(statearr_34368[(12)] = inst_34276);

return statearr_34368;
})();
var statearr_34369_34438 = state_34333__$1;
(statearr_34369_34438[(2)] = null);

(statearr_34369_34438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (41))){
var inst_34292 = (state_34333[(25)]);
var inst_34308 = (state_34333[(2)]);
var inst_34309 = cljs.core.next.call(null,inst_34292);
var inst_34273 = inst_34309;
var inst_34274 = null;
var inst_34275 = (0);
var inst_34276 = (0);
var state_34333__$1 = (function (){var statearr_34370 = state_34333;
(statearr_34370[(9)] = inst_34274);

(statearr_34370[(20)] = inst_34275);

(statearr_34370[(27)] = inst_34308);

(statearr_34370[(21)] = inst_34273);

(statearr_34370[(12)] = inst_34276);

return statearr_34370;
})();
var statearr_34371_34439 = state_34333__$1;
(statearr_34371_34439[(2)] = null);

(statearr_34371_34439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (43))){
var state_34333__$1 = state_34333;
var statearr_34372_34440 = state_34333__$1;
(statearr_34372_34440[(2)] = null);

(statearr_34372_34440[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (29))){
var inst_34317 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34373_34441 = state_34333__$1;
(statearr_34373_34441[(2)] = inst_34317);

(statearr_34373_34441[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (44))){
var inst_34326 = (state_34333[(2)]);
var state_34333__$1 = (function (){var statearr_34374 = state_34333;
(statearr_34374[(28)] = inst_34326);

return statearr_34374;
})();
var statearr_34375_34442 = state_34333__$1;
(statearr_34375_34442[(2)] = null);

(statearr_34375_34442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (6))){
var inst_34265 = (state_34333[(29)]);
var inst_34264 = cljs.core.deref.call(null,cs);
var inst_34265__$1 = cljs.core.keys.call(null,inst_34264);
var inst_34266 = cljs.core.count.call(null,inst_34265__$1);
var inst_34267 = cljs.core.reset_BANG_.call(null,dctr,inst_34266);
var inst_34272 = cljs.core.seq.call(null,inst_34265__$1);
var inst_34273 = inst_34272;
var inst_34274 = null;
var inst_34275 = (0);
var inst_34276 = (0);
var state_34333__$1 = (function (){var statearr_34376 = state_34333;
(statearr_34376[(9)] = inst_34274);

(statearr_34376[(20)] = inst_34275);

(statearr_34376[(21)] = inst_34273);

(statearr_34376[(29)] = inst_34265__$1);

(statearr_34376[(30)] = inst_34267);

(statearr_34376[(12)] = inst_34276);

return statearr_34376;
})();
var statearr_34377_34443 = state_34333__$1;
(statearr_34377_34443[(2)] = null);

(statearr_34377_34443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (28))){
var inst_34292 = (state_34333[(25)]);
var inst_34273 = (state_34333[(21)]);
var inst_34292__$1 = cljs.core.seq.call(null,inst_34273);
var state_34333__$1 = (function (){var statearr_34378 = state_34333;
(statearr_34378[(25)] = inst_34292__$1);

return statearr_34378;
})();
if(inst_34292__$1){
var statearr_34379_34444 = state_34333__$1;
(statearr_34379_34444[(1)] = (33));

} else {
var statearr_34380_34445 = state_34333__$1;
(statearr_34380_34445[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (25))){
var inst_34275 = (state_34333[(20)]);
var inst_34276 = (state_34333[(12)]);
var inst_34278 = (inst_34276 < inst_34275);
var inst_34279 = inst_34278;
var state_34333__$1 = state_34333;
if(cljs.core.truth_(inst_34279)){
var statearr_34381_34446 = state_34333__$1;
(statearr_34381_34446[(1)] = (27));

} else {
var statearr_34382_34447 = state_34333__$1;
(statearr_34382_34447[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (34))){
var state_34333__$1 = state_34333;
var statearr_34383_34448 = state_34333__$1;
(statearr_34383_34448[(2)] = null);

(statearr_34383_34448[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (17))){
var state_34333__$1 = state_34333;
var statearr_34384_34449 = state_34333__$1;
(statearr_34384_34449[(2)] = null);

(statearr_34384_34449[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (3))){
var inst_34331 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34333__$1,inst_34331);
} else {
if((state_val_34334 === (12))){
var inst_34260 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34385_34450 = state_34333__$1;
(statearr_34385_34450[(2)] = inst_34260);

(statearr_34385_34450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (2))){
var state_34333__$1 = state_34333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34333__$1,(4),ch);
} else {
if((state_val_34334 === (23))){
var state_34333__$1 = state_34333;
var statearr_34386_34451 = state_34333__$1;
(statearr_34386_34451[(2)] = null);

(statearr_34386_34451[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (35))){
var inst_34315 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34387_34452 = state_34333__$1;
(statearr_34387_34452[(2)] = inst_34315);

(statearr_34387_34452[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (19))){
var inst_34232 = (state_34333[(7)]);
var inst_34236 = cljs.core.chunk_first.call(null,inst_34232);
var inst_34237 = cljs.core.chunk_rest.call(null,inst_34232);
var inst_34238 = cljs.core.count.call(null,inst_34236);
var inst_34210 = inst_34237;
var inst_34211 = inst_34236;
var inst_34212 = inst_34238;
var inst_34213 = (0);
var state_34333__$1 = (function (){var statearr_34388 = state_34333;
(statearr_34388[(13)] = inst_34210);

(statearr_34388[(14)] = inst_34211);

(statearr_34388[(15)] = inst_34213);

(statearr_34388[(17)] = inst_34212);

return statearr_34388;
})();
var statearr_34389_34453 = state_34333__$1;
(statearr_34389_34453[(2)] = null);

(statearr_34389_34453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (11))){
var inst_34210 = (state_34333[(13)]);
var inst_34232 = (state_34333[(7)]);
var inst_34232__$1 = cljs.core.seq.call(null,inst_34210);
var state_34333__$1 = (function (){var statearr_34390 = state_34333;
(statearr_34390[(7)] = inst_34232__$1);

return statearr_34390;
})();
if(inst_34232__$1){
var statearr_34391_34454 = state_34333__$1;
(statearr_34391_34454[(1)] = (16));

} else {
var statearr_34392_34455 = state_34333__$1;
(statearr_34392_34455[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (9))){
var inst_34262 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34393_34456 = state_34333__$1;
(statearr_34393_34456[(2)] = inst_34262);

(statearr_34393_34456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (5))){
var inst_34208 = cljs.core.deref.call(null,cs);
var inst_34209 = cljs.core.seq.call(null,inst_34208);
var inst_34210 = inst_34209;
var inst_34211 = null;
var inst_34212 = (0);
var inst_34213 = (0);
var state_34333__$1 = (function (){var statearr_34394 = state_34333;
(statearr_34394[(13)] = inst_34210);

(statearr_34394[(14)] = inst_34211);

(statearr_34394[(15)] = inst_34213);

(statearr_34394[(17)] = inst_34212);

return statearr_34394;
})();
var statearr_34395_34457 = state_34333__$1;
(statearr_34395_34457[(2)] = null);

(statearr_34395_34457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (14))){
var state_34333__$1 = state_34333;
var statearr_34396_34458 = state_34333__$1;
(statearr_34396_34458[(2)] = null);

(statearr_34396_34458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (45))){
var inst_34323 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34397_34459 = state_34333__$1;
(statearr_34397_34459[(2)] = inst_34323);

(statearr_34397_34459[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (26))){
var inst_34265 = (state_34333[(29)]);
var inst_34319 = (state_34333[(2)]);
var inst_34320 = cljs.core.seq.call(null,inst_34265);
var state_34333__$1 = (function (){var statearr_34398 = state_34333;
(statearr_34398[(31)] = inst_34319);

return statearr_34398;
})();
if(inst_34320){
var statearr_34399_34460 = state_34333__$1;
(statearr_34399_34460[(1)] = (42));

} else {
var statearr_34400_34461 = state_34333__$1;
(statearr_34400_34461[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (16))){
var inst_34232 = (state_34333[(7)]);
var inst_34234 = cljs.core.chunked_seq_QMARK_.call(null,inst_34232);
var state_34333__$1 = state_34333;
if(inst_34234){
var statearr_34401_34462 = state_34333__$1;
(statearr_34401_34462[(1)] = (19));

} else {
var statearr_34402_34463 = state_34333__$1;
(statearr_34402_34463[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (38))){
var inst_34312 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34403_34464 = state_34333__$1;
(statearr_34403_34464[(2)] = inst_34312);

(statearr_34403_34464[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (30))){
var state_34333__$1 = state_34333;
var statearr_34404_34465 = state_34333__$1;
(statearr_34404_34465[(2)] = null);

(statearr_34404_34465[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (10))){
var inst_34211 = (state_34333[(14)]);
var inst_34213 = (state_34333[(15)]);
var inst_34221 = cljs.core._nth.call(null,inst_34211,inst_34213);
var inst_34222 = cljs.core.nth.call(null,inst_34221,(0),null);
var inst_34223 = cljs.core.nth.call(null,inst_34221,(1),null);
var state_34333__$1 = (function (){var statearr_34405 = state_34333;
(statearr_34405[(26)] = inst_34222);

return statearr_34405;
})();
if(cljs.core.truth_(inst_34223)){
var statearr_34406_34466 = state_34333__$1;
(statearr_34406_34466[(1)] = (13));

} else {
var statearr_34407_34467 = state_34333__$1;
(statearr_34407_34467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (18))){
var inst_34258 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34408_34468 = state_34333__$1;
(statearr_34408_34468[(2)] = inst_34258);

(statearr_34408_34468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (42))){
var state_34333__$1 = state_34333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34333__$1,(45),dchan);
} else {
if((state_val_34334 === (37))){
var inst_34292 = (state_34333[(25)]);
var inst_34301 = (state_34333[(23)]);
var inst_34201 = (state_34333[(11)]);
var inst_34301__$1 = cljs.core.first.call(null,inst_34292);
var inst_34302 = cljs.core.async.put_BANG_.call(null,inst_34301__$1,inst_34201,done);
var state_34333__$1 = (function (){var statearr_34409 = state_34333;
(statearr_34409[(23)] = inst_34301__$1);

return statearr_34409;
})();
if(cljs.core.truth_(inst_34302)){
var statearr_34410_34469 = state_34333__$1;
(statearr_34410_34469[(1)] = (39));

} else {
var statearr_34411_34470 = state_34333__$1;
(statearr_34411_34470[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (8))){
var inst_34213 = (state_34333[(15)]);
var inst_34212 = (state_34333[(17)]);
var inst_34215 = (inst_34213 < inst_34212);
var inst_34216 = inst_34215;
var state_34333__$1 = state_34333;
if(cljs.core.truth_(inst_34216)){
var statearr_34412_34471 = state_34333__$1;
(statearr_34412_34471[(1)] = (10));

} else {
var statearr_34413_34472 = state_34333__$1;
(statearr_34413_34472[(1)] = (11));

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
});})(c__33599__auto___34418,cs,m,dchan,dctr,done))
;
return ((function (switch__33509__auto__,c__33599__auto___34418,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33510__auto__ = null;
var cljs$core$async$mult_$_state_machine__33510__auto____0 = (function (){
var statearr_34414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34414[(0)] = cljs$core$async$mult_$_state_machine__33510__auto__);

(statearr_34414[(1)] = (1));

return statearr_34414;
});
var cljs$core$async$mult_$_state_machine__33510__auto____1 = (function (state_34333){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_34333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e34415){if((e34415 instanceof Object)){
var ex__33513__auto__ = e34415;
var statearr_34416_34473 = state_34333;
(statearr_34416_34473[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34474 = state_34333;
state_34333 = G__34474;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33510__auto__ = function(state_34333){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33510__auto____1.call(this,state_34333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33510__auto____0;
cljs$core$async$mult_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33510__auto____1;
return cljs$core$async$mult_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___34418,cs,m,dchan,dctr,done))
})();
var state__33601__auto__ = (function (){var statearr_34417 = f__33600__auto__.call(null);
(statearr_34417[(6)] = c__33599__auto___34418);

return statearr_34417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___34418,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34476 = arguments.length;
switch (G__34476) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m);
} else {
var m__30782__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,state_map);
} else {
var m__30782__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,mode);
} else {
var m__30782__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___34488 = arguments.length;
var i__31326__auto___34489 = (0);
while(true){
if((i__31326__auto___34489 < len__31325__auto___34488)){
args__31332__auto__.push((arguments[i__31326__auto___34489]));

var G__34490 = (i__31326__auto___34489 + (1));
i__31326__auto___34489 = G__34490;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((3) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31333__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34482){
var map__34483 = p__34482;
var map__34483__$1 = ((((!((map__34483 == null)))?((((map__34483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34483):map__34483);
var opts = map__34483__$1;
var statearr_34485_34491 = state;
(statearr_34485_34491[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__34483,map__34483__$1,opts){
return (function (val){
var statearr_34486_34492 = state;
(statearr_34486_34492[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34483,map__34483__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_34487_34493 = state;
(statearr_34487_34493[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34478){
var G__34479 = cljs.core.first.call(null,seq34478);
var seq34478__$1 = cljs.core.next.call(null,seq34478);
var G__34480 = cljs.core.first.call(null,seq34478__$1);
var seq34478__$2 = cljs.core.next.call(null,seq34478__$1);
var G__34481 = cljs.core.first.call(null,seq34478__$2);
var seq34478__$3 = cljs.core.next.call(null,seq34478__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34479,G__34480,G__34481,seq34478__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34494 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34495){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34495 = meta34495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34496,meta34495__$1){
var self__ = this;
var _34496__$1 = this;
return (new cljs.core.async.t_cljs$core$async34494(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34495__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34496){
var self__ = this;
var _34496__$1 = this;
return self__.meta34495;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34494.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34494.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34494.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34494.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34494.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34494.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34494.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34494.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34495","meta34495",1553728778,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34494";

cljs.core.async.t_cljs$core$async34494.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34494");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34494 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34494(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34495){
return (new cljs.core.async.t_cljs$core$async34494(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34495));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34494(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33599__auto___34658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___34658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___34658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34598){
var state_val_34599 = (state_34598[(1)]);
if((state_val_34599 === (7))){
var inst_34513 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
var statearr_34600_34659 = state_34598__$1;
(statearr_34600_34659[(2)] = inst_34513);

(statearr_34600_34659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (20))){
var inst_34525 = (state_34598[(7)]);
var state_34598__$1 = state_34598;
var statearr_34601_34660 = state_34598__$1;
(statearr_34601_34660[(2)] = inst_34525);

(statearr_34601_34660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (27))){
var state_34598__$1 = state_34598;
var statearr_34602_34661 = state_34598__$1;
(statearr_34602_34661[(2)] = null);

(statearr_34602_34661[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (1))){
var inst_34500 = (state_34598[(8)]);
var inst_34500__$1 = calc_state.call(null);
var inst_34502 = (inst_34500__$1 == null);
var inst_34503 = cljs.core.not.call(null,inst_34502);
var state_34598__$1 = (function (){var statearr_34603 = state_34598;
(statearr_34603[(8)] = inst_34500__$1);

return statearr_34603;
})();
if(inst_34503){
var statearr_34604_34662 = state_34598__$1;
(statearr_34604_34662[(1)] = (2));

} else {
var statearr_34605_34663 = state_34598__$1;
(statearr_34605_34663[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (24))){
var inst_34558 = (state_34598[(9)]);
var inst_34572 = (state_34598[(10)]);
var inst_34549 = (state_34598[(11)]);
var inst_34572__$1 = inst_34549.call(null,inst_34558);
var state_34598__$1 = (function (){var statearr_34606 = state_34598;
(statearr_34606[(10)] = inst_34572__$1);

return statearr_34606;
})();
if(cljs.core.truth_(inst_34572__$1)){
var statearr_34607_34664 = state_34598__$1;
(statearr_34607_34664[(1)] = (29));

} else {
var statearr_34608_34665 = state_34598__$1;
(statearr_34608_34665[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (4))){
var inst_34516 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
if(cljs.core.truth_(inst_34516)){
var statearr_34609_34666 = state_34598__$1;
(statearr_34609_34666[(1)] = (8));

} else {
var statearr_34610_34667 = state_34598__$1;
(statearr_34610_34667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (15))){
var inst_34543 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
if(cljs.core.truth_(inst_34543)){
var statearr_34611_34668 = state_34598__$1;
(statearr_34611_34668[(1)] = (19));

} else {
var statearr_34612_34669 = state_34598__$1;
(statearr_34612_34669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (21))){
var inst_34548 = (state_34598[(12)]);
var inst_34548__$1 = (state_34598[(2)]);
var inst_34549 = cljs.core.get.call(null,inst_34548__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34550 = cljs.core.get.call(null,inst_34548__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34551 = cljs.core.get.call(null,inst_34548__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34598__$1 = (function (){var statearr_34613 = state_34598;
(statearr_34613[(13)] = inst_34550);

(statearr_34613[(11)] = inst_34549);

(statearr_34613[(12)] = inst_34548__$1);

return statearr_34613;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34598__$1,(22),inst_34551);
} else {
if((state_val_34599 === (31))){
var inst_34580 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
if(cljs.core.truth_(inst_34580)){
var statearr_34614_34670 = state_34598__$1;
(statearr_34614_34670[(1)] = (32));

} else {
var statearr_34615_34671 = state_34598__$1;
(statearr_34615_34671[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (32))){
var inst_34557 = (state_34598[(14)]);
var state_34598__$1 = state_34598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34598__$1,(35),out,inst_34557);
} else {
if((state_val_34599 === (33))){
var inst_34548 = (state_34598[(12)]);
var inst_34525 = inst_34548;
var state_34598__$1 = (function (){var statearr_34616 = state_34598;
(statearr_34616[(7)] = inst_34525);

return statearr_34616;
})();
var statearr_34617_34672 = state_34598__$1;
(statearr_34617_34672[(2)] = null);

(statearr_34617_34672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (13))){
var inst_34525 = (state_34598[(7)]);
var inst_34532 = inst_34525.cljs$lang$protocol_mask$partition0$;
var inst_34533 = (inst_34532 & (64));
var inst_34534 = inst_34525.cljs$core$ISeq$;
var inst_34535 = (cljs.core.PROTOCOL_SENTINEL === inst_34534);
var inst_34536 = (inst_34533) || (inst_34535);
var state_34598__$1 = state_34598;
if(cljs.core.truth_(inst_34536)){
var statearr_34618_34673 = state_34598__$1;
(statearr_34618_34673[(1)] = (16));

} else {
var statearr_34619_34674 = state_34598__$1;
(statearr_34619_34674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (22))){
var inst_34558 = (state_34598[(9)]);
var inst_34557 = (state_34598[(14)]);
var inst_34556 = (state_34598[(2)]);
var inst_34557__$1 = cljs.core.nth.call(null,inst_34556,(0),null);
var inst_34558__$1 = cljs.core.nth.call(null,inst_34556,(1),null);
var inst_34559 = (inst_34557__$1 == null);
var inst_34560 = cljs.core._EQ_.call(null,inst_34558__$1,change);
var inst_34561 = (inst_34559) || (inst_34560);
var state_34598__$1 = (function (){var statearr_34620 = state_34598;
(statearr_34620[(9)] = inst_34558__$1);

(statearr_34620[(14)] = inst_34557__$1);

return statearr_34620;
})();
if(cljs.core.truth_(inst_34561)){
var statearr_34621_34675 = state_34598__$1;
(statearr_34621_34675[(1)] = (23));

} else {
var statearr_34622_34676 = state_34598__$1;
(statearr_34622_34676[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (36))){
var inst_34548 = (state_34598[(12)]);
var inst_34525 = inst_34548;
var state_34598__$1 = (function (){var statearr_34623 = state_34598;
(statearr_34623[(7)] = inst_34525);

return statearr_34623;
})();
var statearr_34624_34677 = state_34598__$1;
(statearr_34624_34677[(2)] = null);

(statearr_34624_34677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (29))){
var inst_34572 = (state_34598[(10)]);
var state_34598__$1 = state_34598;
var statearr_34625_34678 = state_34598__$1;
(statearr_34625_34678[(2)] = inst_34572);

(statearr_34625_34678[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (6))){
var state_34598__$1 = state_34598;
var statearr_34626_34679 = state_34598__$1;
(statearr_34626_34679[(2)] = false);

(statearr_34626_34679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (28))){
var inst_34568 = (state_34598[(2)]);
var inst_34569 = calc_state.call(null);
var inst_34525 = inst_34569;
var state_34598__$1 = (function (){var statearr_34627 = state_34598;
(statearr_34627[(7)] = inst_34525);

(statearr_34627[(15)] = inst_34568);

return statearr_34627;
})();
var statearr_34628_34680 = state_34598__$1;
(statearr_34628_34680[(2)] = null);

(statearr_34628_34680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (25))){
var inst_34594 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
var statearr_34629_34681 = state_34598__$1;
(statearr_34629_34681[(2)] = inst_34594);

(statearr_34629_34681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (34))){
var inst_34592 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
var statearr_34630_34682 = state_34598__$1;
(statearr_34630_34682[(2)] = inst_34592);

(statearr_34630_34682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (17))){
var state_34598__$1 = state_34598;
var statearr_34631_34683 = state_34598__$1;
(statearr_34631_34683[(2)] = false);

(statearr_34631_34683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (3))){
var state_34598__$1 = state_34598;
var statearr_34632_34684 = state_34598__$1;
(statearr_34632_34684[(2)] = false);

(statearr_34632_34684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (12))){
var inst_34596 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34598__$1,inst_34596);
} else {
if((state_val_34599 === (2))){
var inst_34500 = (state_34598[(8)]);
var inst_34505 = inst_34500.cljs$lang$protocol_mask$partition0$;
var inst_34506 = (inst_34505 & (64));
var inst_34507 = inst_34500.cljs$core$ISeq$;
var inst_34508 = (cljs.core.PROTOCOL_SENTINEL === inst_34507);
var inst_34509 = (inst_34506) || (inst_34508);
var state_34598__$1 = state_34598;
if(cljs.core.truth_(inst_34509)){
var statearr_34633_34685 = state_34598__$1;
(statearr_34633_34685[(1)] = (5));

} else {
var statearr_34634_34686 = state_34598__$1;
(statearr_34634_34686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (23))){
var inst_34557 = (state_34598[(14)]);
var inst_34563 = (inst_34557 == null);
var state_34598__$1 = state_34598;
if(cljs.core.truth_(inst_34563)){
var statearr_34635_34687 = state_34598__$1;
(statearr_34635_34687[(1)] = (26));

} else {
var statearr_34636_34688 = state_34598__$1;
(statearr_34636_34688[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (35))){
var inst_34583 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
if(cljs.core.truth_(inst_34583)){
var statearr_34637_34689 = state_34598__$1;
(statearr_34637_34689[(1)] = (36));

} else {
var statearr_34638_34690 = state_34598__$1;
(statearr_34638_34690[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (19))){
var inst_34525 = (state_34598[(7)]);
var inst_34545 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34525);
var state_34598__$1 = state_34598;
var statearr_34639_34691 = state_34598__$1;
(statearr_34639_34691[(2)] = inst_34545);

(statearr_34639_34691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (11))){
var inst_34525 = (state_34598[(7)]);
var inst_34529 = (inst_34525 == null);
var inst_34530 = cljs.core.not.call(null,inst_34529);
var state_34598__$1 = state_34598;
if(inst_34530){
var statearr_34640_34692 = state_34598__$1;
(statearr_34640_34692[(1)] = (13));

} else {
var statearr_34641_34693 = state_34598__$1;
(statearr_34641_34693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (9))){
var inst_34500 = (state_34598[(8)]);
var state_34598__$1 = state_34598;
var statearr_34642_34694 = state_34598__$1;
(statearr_34642_34694[(2)] = inst_34500);

(statearr_34642_34694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (5))){
var state_34598__$1 = state_34598;
var statearr_34643_34695 = state_34598__$1;
(statearr_34643_34695[(2)] = true);

(statearr_34643_34695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (14))){
var state_34598__$1 = state_34598;
var statearr_34644_34696 = state_34598__$1;
(statearr_34644_34696[(2)] = false);

(statearr_34644_34696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (26))){
var inst_34558 = (state_34598[(9)]);
var inst_34565 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34558);
var state_34598__$1 = state_34598;
var statearr_34645_34697 = state_34598__$1;
(statearr_34645_34697[(2)] = inst_34565);

(statearr_34645_34697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (16))){
var state_34598__$1 = state_34598;
var statearr_34646_34698 = state_34598__$1;
(statearr_34646_34698[(2)] = true);

(statearr_34646_34698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (38))){
var inst_34588 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
var statearr_34647_34699 = state_34598__$1;
(statearr_34647_34699[(2)] = inst_34588);

(statearr_34647_34699[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (30))){
var inst_34558 = (state_34598[(9)]);
var inst_34550 = (state_34598[(13)]);
var inst_34549 = (state_34598[(11)]);
var inst_34575 = cljs.core.empty_QMARK_.call(null,inst_34549);
var inst_34576 = inst_34550.call(null,inst_34558);
var inst_34577 = cljs.core.not.call(null,inst_34576);
var inst_34578 = (inst_34575) && (inst_34577);
var state_34598__$1 = state_34598;
var statearr_34648_34700 = state_34598__$1;
(statearr_34648_34700[(2)] = inst_34578);

(statearr_34648_34700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (10))){
var inst_34500 = (state_34598[(8)]);
var inst_34521 = (state_34598[(2)]);
var inst_34522 = cljs.core.get.call(null,inst_34521,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34523 = cljs.core.get.call(null,inst_34521,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34524 = cljs.core.get.call(null,inst_34521,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34525 = inst_34500;
var state_34598__$1 = (function (){var statearr_34649 = state_34598;
(statearr_34649[(16)] = inst_34524);

(statearr_34649[(7)] = inst_34525);

(statearr_34649[(17)] = inst_34523);

(statearr_34649[(18)] = inst_34522);

return statearr_34649;
})();
var statearr_34650_34701 = state_34598__$1;
(statearr_34650_34701[(2)] = null);

(statearr_34650_34701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (18))){
var inst_34540 = (state_34598[(2)]);
var state_34598__$1 = state_34598;
var statearr_34651_34702 = state_34598__$1;
(statearr_34651_34702[(2)] = inst_34540);

(statearr_34651_34702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (37))){
var state_34598__$1 = state_34598;
var statearr_34652_34703 = state_34598__$1;
(statearr_34652_34703[(2)] = null);

(statearr_34652_34703[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34599 === (8))){
var inst_34500 = (state_34598[(8)]);
var inst_34518 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34500);
var state_34598__$1 = state_34598;
var statearr_34653_34704 = state_34598__$1;
(statearr_34653_34704[(2)] = inst_34518);

(statearr_34653_34704[(1)] = (10));


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
});})(c__33599__auto___34658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33509__auto__,c__33599__auto___34658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33510__auto__ = null;
var cljs$core$async$mix_$_state_machine__33510__auto____0 = (function (){
var statearr_34654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34654[(0)] = cljs$core$async$mix_$_state_machine__33510__auto__);

(statearr_34654[(1)] = (1));

return statearr_34654;
});
var cljs$core$async$mix_$_state_machine__33510__auto____1 = (function (state_34598){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_34598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e34655){if((e34655 instanceof Object)){
var ex__33513__auto__ = e34655;
var statearr_34656_34705 = state_34598;
(statearr_34656_34705[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34706 = state_34598;
state_34598 = G__34706;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33510__auto__ = function(state_34598){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33510__auto____1.call(this,state_34598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33510__auto____0;
cljs$core$async$mix_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33510__auto____1;
return cljs$core$async$mix_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___34658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33601__auto__ = (function (){var statearr_34657 = f__33600__auto__.call(null);
(statearr_34657[(6)] = c__33599__auto___34658);

return statearr_34657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___34658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30782__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34708 = arguments.length;
switch (G__34708) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34712 = arguments.length;
switch (G__34712) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30048__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30048__auto__,mults){
return (function (p1__34710_SHARP_){
if(cljs.core.truth_(p1__34710_SHARP_.call(null,topic))){
return p1__34710_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34710_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30048__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34713 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34714){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34714 = meta34714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34715,meta34714__$1){
var self__ = this;
var _34715__$1 = this;
return (new cljs.core.async.t_cljs$core$async34713(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34714__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34715){
var self__ = this;
var _34715__$1 = this;
return self__.meta34714;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34713.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34714","meta34714",83683884,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34713";

cljs.core.async.t_cljs$core$async34713.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34713");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34713 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34714){
return (new cljs.core.async.t_cljs$core$async34713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34714));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34713(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33599__auto___34833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___34833,mults,ensure_mult,p){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___34833,mults,ensure_mult,p){
return (function (state_34787){
var state_val_34788 = (state_34787[(1)]);
if((state_val_34788 === (7))){
var inst_34783 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34789_34834 = state_34787__$1;
(statearr_34789_34834[(2)] = inst_34783);

(statearr_34789_34834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (20))){
var state_34787__$1 = state_34787;
var statearr_34790_34835 = state_34787__$1;
(statearr_34790_34835[(2)] = null);

(statearr_34790_34835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (1))){
var state_34787__$1 = state_34787;
var statearr_34791_34836 = state_34787__$1;
(statearr_34791_34836[(2)] = null);

(statearr_34791_34836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (24))){
var inst_34766 = (state_34787[(7)]);
var inst_34775 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34766);
var state_34787__$1 = state_34787;
var statearr_34792_34837 = state_34787__$1;
(statearr_34792_34837[(2)] = inst_34775);

(statearr_34792_34837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (4))){
var inst_34718 = (state_34787[(8)]);
var inst_34718__$1 = (state_34787[(2)]);
var inst_34719 = (inst_34718__$1 == null);
var state_34787__$1 = (function (){var statearr_34793 = state_34787;
(statearr_34793[(8)] = inst_34718__$1);

return statearr_34793;
})();
if(cljs.core.truth_(inst_34719)){
var statearr_34794_34838 = state_34787__$1;
(statearr_34794_34838[(1)] = (5));

} else {
var statearr_34795_34839 = state_34787__$1;
(statearr_34795_34839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (15))){
var inst_34760 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34796_34840 = state_34787__$1;
(statearr_34796_34840[(2)] = inst_34760);

(statearr_34796_34840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (21))){
var inst_34780 = (state_34787[(2)]);
var state_34787__$1 = (function (){var statearr_34797 = state_34787;
(statearr_34797[(9)] = inst_34780);

return statearr_34797;
})();
var statearr_34798_34841 = state_34787__$1;
(statearr_34798_34841[(2)] = null);

(statearr_34798_34841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (13))){
var inst_34742 = (state_34787[(10)]);
var inst_34744 = cljs.core.chunked_seq_QMARK_.call(null,inst_34742);
var state_34787__$1 = state_34787;
if(inst_34744){
var statearr_34799_34842 = state_34787__$1;
(statearr_34799_34842[(1)] = (16));

} else {
var statearr_34800_34843 = state_34787__$1;
(statearr_34800_34843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (22))){
var inst_34772 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
if(cljs.core.truth_(inst_34772)){
var statearr_34801_34844 = state_34787__$1;
(statearr_34801_34844[(1)] = (23));

} else {
var statearr_34802_34845 = state_34787__$1;
(statearr_34802_34845[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (6))){
var inst_34768 = (state_34787[(11)]);
var inst_34718 = (state_34787[(8)]);
var inst_34766 = (state_34787[(7)]);
var inst_34766__$1 = topic_fn.call(null,inst_34718);
var inst_34767 = cljs.core.deref.call(null,mults);
var inst_34768__$1 = cljs.core.get.call(null,inst_34767,inst_34766__$1);
var state_34787__$1 = (function (){var statearr_34803 = state_34787;
(statearr_34803[(11)] = inst_34768__$1);

(statearr_34803[(7)] = inst_34766__$1);

return statearr_34803;
})();
if(cljs.core.truth_(inst_34768__$1)){
var statearr_34804_34846 = state_34787__$1;
(statearr_34804_34846[(1)] = (19));

} else {
var statearr_34805_34847 = state_34787__$1;
(statearr_34805_34847[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (25))){
var inst_34777 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34806_34848 = state_34787__$1;
(statearr_34806_34848[(2)] = inst_34777);

(statearr_34806_34848[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (17))){
var inst_34742 = (state_34787[(10)]);
var inst_34751 = cljs.core.first.call(null,inst_34742);
var inst_34752 = cljs.core.async.muxch_STAR_.call(null,inst_34751);
var inst_34753 = cljs.core.async.close_BANG_.call(null,inst_34752);
var inst_34754 = cljs.core.next.call(null,inst_34742);
var inst_34728 = inst_34754;
var inst_34729 = null;
var inst_34730 = (0);
var inst_34731 = (0);
var state_34787__$1 = (function (){var statearr_34807 = state_34787;
(statearr_34807[(12)] = inst_34730);

(statearr_34807[(13)] = inst_34728);

(statearr_34807[(14)] = inst_34731);

(statearr_34807[(15)] = inst_34753);

(statearr_34807[(16)] = inst_34729);

return statearr_34807;
})();
var statearr_34808_34849 = state_34787__$1;
(statearr_34808_34849[(2)] = null);

(statearr_34808_34849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (3))){
var inst_34785 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34787__$1,inst_34785);
} else {
if((state_val_34788 === (12))){
var inst_34762 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34809_34850 = state_34787__$1;
(statearr_34809_34850[(2)] = inst_34762);

(statearr_34809_34850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (2))){
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34787__$1,(4),ch);
} else {
if((state_val_34788 === (23))){
var state_34787__$1 = state_34787;
var statearr_34810_34851 = state_34787__$1;
(statearr_34810_34851[(2)] = null);

(statearr_34810_34851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (19))){
var inst_34768 = (state_34787[(11)]);
var inst_34718 = (state_34787[(8)]);
var inst_34770 = cljs.core.async.muxch_STAR_.call(null,inst_34768);
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34787__$1,(22),inst_34770,inst_34718);
} else {
if((state_val_34788 === (11))){
var inst_34728 = (state_34787[(13)]);
var inst_34742 = (state_34787[(10)]);
var inst_34742__$1 = cljs.core.seq.call(null,inst_34728);
var state_34787__$1 = (function (){var statearr_34811 = state_34787;
(statearr_34811[(10)] = inst_34742__$1);

return statearr_34811;
})();
if(inst_34742__$1){
var statearr_34812_34852 = state_34787__$1;
(statearr_34812_34852[(1)] = (13));

} else {
var statearr_34813_34853 = state_34787__$1;
(statearr_34813_34853[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (9))){
var inst_34764 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34814_34854 = state_34787__$1;
(statearr_34814_34854[(2)] = inst_34764);

(statearr_34814_34854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (5))){
var inst_34725 = cljs.core.deref.call(null,mults);
var inst_34726 = cljs.core.vals.call(null,inst_34725);
var inst_34727 = cljs.core.seq.call(null,inst_34726);
var inst_34728 = inst_34727;
var inst_34729 = null;
var inst_34730 = (0);
var inst_34731 = (0);
var state_34787__$1 = (function (){var statearr_34815 = state_34787;
(statearr_34815[(12)] = inst_34730);

(statearr_34815[(13)] = inst_34728);

(statearr_34815[(14)] = inst_34731);

(statearr_34815[(16)] = inst_34729);

return statearr_34815;
})();
var statearr_34816_34855 = state_34787__$1;
(statearr_34816_34855[(2)] = null);

(statearr_34816_34855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (14))){
var state_34787__$1 = state_34787;
var statearr_34820_34856 = state_34787__$1;
(statearr_34820_34856[(2)] = null);

(statearr_34820_34856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (16))){
var inst_34742 = (state_34787[(10)]);
var inst_34746 = cljs.core.chunk_first.call(null,inst_34742);
var inst_34747 = cljs.core.chunk_rest.call(null,inst_34742);
var inst_34748 = cljs.core.count.call(null,inst_34746);
var inst_34728 = inst_34747;
var inst_34729 = inst_34746;
var inst_34730 = inst_34748;
var inst_34731 = (0);
var state_34787__$1 = (function (){var statearr_34821 = state_34787;
(statearr_34821[(12)] = inst_34730);

(statearr_34821[(13)] = inst_34728);

(statearr_34821[(14)] = inst_34731);

(statearr_34821[(16)] = inst_34729);

return statearr_34821;
})();
var statearr_34822_34857 = state_34787__$1;
(statearr_34822_34857[(2)] = null);

(statearr_34822_34857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (10))){
var inst_34730 = (state_34787[(12)]);
var inst_34728 = (state_34787[(13)]);
var inst_34731 = (state_34787[(14)]);
var inst_34729 = (state_34787[(16)]);
var inst_34736 = cljs.core._nth.call(null,inst_34729,inst_34731);
var inst_34737 = cljs.core.async.muxch_STAR_.call(null,inst_34736);
var inst_34738 = cljs.core.async.close_BANG_.call(null,inst_34737);
var inst_34739 = (inst_34731 + (1));
var tmp34817 = inst_34730;
var tmp34818 = inst_34728;
var tmp34819 = inst_34729;
var inst_34728__$1 = tmp34818;
var inst_34729__$1 = tmp34819;
var inst_34730__$1 = tmp34817;
var inst_34731__$1 = inst_34739;
var state_34787__$1 = (function (){var statearr_34823 = state_34787;
(statearr_34823[(12)] = inst_34730__$1);

(statearr_34823[(13)] = inst_34728__$1);

(statearr_34823[(17)] = inst_34738);

(statearr_34823[(14)] = inst_34731__$1);

(statearr_34823[(16)] = inst_34729__$1);

return statearr_34823;
})();
var statearr_34824_34858 = state_34787__$1;
(statearr_34824_34858[(2)] = null);

(statearr_34824_34858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (18))){
var inst_34757 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34825_34859 = state_34787__$1;
(statearr_34825_34859[(2)] = inst_34757);

(statearr_34825_34859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (8))){
var inst_34730 = (state_34787[(12)]);
var inst_34731 = (state_34787[(14)]);
var inst_34733 = (inst_34731 < inst_34730);
var inst_34734 = inst_34733;
var state_34787__$1 = state_34787;
if(cljs.core.truth_(inst_34734)){
var statearr_34826_34860 = state_34787__$1;
(statearr_34826_34860[(1)] = (10));

} else {
var statearr_34827_34861 = state_34787__$1;
(statearr_34827_34861[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__33599__auto___34833,mults,ensure_mult,p))
;
return ((function (switch__33509__auto__,c__33599__auto___34833,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_34828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34828[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_34828[(1)] = (1));

return statearr_34828;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_34787){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_34787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e34829){if((e34829 instanceof Object)){
var ex__33513__auto__ = e34829;
var statearr_34830_34862 = state_34787;
(statearr_34830_34862[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34863 = state_34787;
state_34787 = G__34863;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_34787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_34787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___34833,mults,ensure_mult,p))
})();
var state__33601__auto__ = (function (){var statearr_34831 = f__33600__auto__.call(null);
(statearr_34831[(6)] = c__33599__auto___34833);

return statearr_34831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___34833,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34865 = arguments.length;
switch (G__34865) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34868 = arguments.length;
switch (G__34868) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34871 = arguments.length;
switch (G__34871) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33599__auto___34938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___34938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___34938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34910){
var state_val_34911 = (state_34910[(1)]);
if((state_val_34911 === (7))){
var state_34910__$1 = state_34910;
var statearr_34912_34939 = state_34910__$1;
(statearr_34912_34939[(2)] = null);

(statearr_34912_34939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (1))){
var state_34910__$1 = state_34910;
var statearr_34913_34940 = state_34910__$1;
(statearr_34913_34940[(2)] = null);

(statearr_34913_34940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (4))){
var inst_34874 = (state_34910[(7)]);
var inst_34876 = (inst_34874 < cnt);
var state_34910__$1 = state_34910;
if(cljs.core.truth_(inst_34876)){
var statearr_34914_34941 = state_34910__$1;
(statearr_34914_34941[(1)] = (6));

} else {
var statearr_34915_34942 = state_34910__$1;
(statearr_34915_34942[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (15))){
var inst_34906 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34916_34943 = state_34910__$1;
(statearr_34916_34943[(2)] = inst_34906);

(statearr_34916_34943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (13))){
var inst_34899 = cljs.core.async.close_BANG_.call(null,out);
var state_34910__$1 = state_34910;
var statearr_34917_34944 = state_34910__$1;
(statearr_34917_34944[(2)] = inst_34899);

(statearr_34917_34944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (6))){
var state_34910__$1 = state_34910;
var statearr_34918_34945 = state_34910__$1;
(statearr_34918_34945[(2)] = null);

(statearr_34918_34945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (3))){
var inst_34908 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34910__$1,inst_34908);
} else {
if((state_val_34911 === (12))){
var inst_34896 = (state_34910[(8)]);
var inst_34896__$1 = (state_34910[(2)]);
var inst_34897 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34896__$1);
var state_34910__$1 = (function (){var statearr_34919 = state_34910;
(statearr_34919[(8)] = inst_34896__$1);

return statearr_34919;
})();
if(cljs.core.truth_(inst_34897)){
var statearr_34920_34946 = state_34910__$1;
(statearr_34920_34946[(1)] = (13));

} else {
var statearr_34921_34947 = state_34910__$1;
(statearr_34921_34947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (2))){
var inst_34873 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34874 = (0);
var state_34910__$1 = (function (){var statearr_34922 = state_34910;
(statearr_34922[(9)] = inst_34873);

(statearr_34922[(7)] = inst_34874);

return statearr_34922;
})();
var statearr_34923_34948 = state_34910__$1;
(statearr_34923_34948[(2)] = null);

(statearr_34923_34948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (11))){
var inst_34874 = (state_34910[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34910,(10),Object,null,(9));
var inst_34883 = chs__$1.call(null,inst_34874);
var inst_34884 = done.call(null,inst_34874);
var inst_34885 = cljs.core.async.take_BANG_.call(null,inst_34883,inst_34884);
var state_34910__$1 = state_34910;
var statearr_34924_34949 = state_34910__$1;
(statearr_34924_34949[(2)] = inst_34885);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34910__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (9))){
var inst_34874 = (state_34910[(7)]);
var inst_34887 = (state_34910[(2)]);
var inst_34888 = (inst_34874 + (1));
var inst_34874__$1 = inst_34888;
var state_34910__$1 = (function (){var statearr_34925 = state_34910;
(statearr_34925[(7)] = inst_34874__$1);

(statearr_34925[(10)] = inst_34887);

return statearr_34925;
})();
var statearr_34926_34950 = state_34910__$1;
(statearr_34926_34950[(2)] = null);

(statearr_34926_34950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (5))){
var inst_34894 = (state_34910[(2)]);
var state_34910__$1 = (function (){var statearr_34927 = state_34910;
(statearr_34927[(11)] = inst_34894);

return statearr_34927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34910__$1,(12),dchan);
} else {
if((state_val_34911 === (14))){
var inst_34896 = (state_34910[(8)]);
var inst_34901 = cljs.core.apply.call(null,f,inst_34896);
var state_34910__$1 = state_34910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34910__$1,(16),out,inst_34901);
} else {
if((state_val_34911 === (16))){
var inst_34903 = (state_34910[(2)]);
var state_34910__$1 = (function (){var statearr_34928 = state_34910;
(statearr_34928[(12)] = inst_34903);

return statearr_34928;
})();
var statearr_34929_34951 = state_34910__$1;
(statearr_34929_34951[(2)] = null);

(statearr_34929_34951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (10))){
var inst_34878 = (state_34910[(2)]);
var inst_34879 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34910__$1 = (function (){var statearr_34930 = state_34910;
(statearr_34930[(13)] = inst_34878);

return statearr_34930;
})();
var statearr_34931_34952 = state_34910__$1;
(statearr_34931_34952[(2)] = inst_34879);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34910__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (8))){
var inst_34892 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34932_34953 = state_34910__$1;
(statearr_34932_34953[(2)] = inst_34892);

(statearr_34932_34953[(1)] = (5));


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
});})(c__33599__auto___34938,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33509__auto__,c__33599__auto___34938,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_34933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34933[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_34933[(1)] = (1));

return statearr_34933;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_34910){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_34910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e34934){if((e34934 instanceof Object)){
var ex__33513__auto__ = e34934;
var statearr_34935_34954 = state_34910;
(statearr_34935_34954[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34955 = state_34910;
state_34910 = G__34955;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_34910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_34910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___34938,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33601__auto__ = (function (){var statearr_34936 = f__33600__auto__.call(null);
(statearr_34936[(6)] = c__33599__auto___34938);

return statearr_34936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___34938,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34958 = arguments.length;
switch (G__34958) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33599__auto___35012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___35012,out){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___35012,out){
return (function (state_34990){
var state_val_34991 = (state_34990[(1)]);
if((state_val_34991 === (7))){
var inst_34969 = (state_34990[(7)]);
var inst_34970 = (state_34990[(8)]);
var inst_34969__$1 = (state_34990[(2)]);
var inst_34970__$1 = cljs.core.nth.call(null,inst_34969__$1,(0),null);
var inst_34971 = cljs.core.nth.call(null,inst_34969__$1,(1),null);
var inst_34972 = (inst_34970__$1 == null);
var state_34990__$1 = (function (){var statearr_34992 = state_34990;
(statearr_34992[(9)] = inst_34971);

(statearr_34992[(7)] = inst_34969__$1);

(statearr_34992[(8)] = inst_34970__$1);

return statearr_34992;
})();
if(cljs.core.truth_(inst_34972)){
var statearr_34993_35013 = state_34990__$1;
(statearr_34993_35013[(1)] = (8));

} else {
var statearr_34994_35014 = state_34990__$1;
(statearr_34994_35014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (1))){
var inst_34959 = cljs.core.vec.call(null,chs);
var inst_34960 = inst_34959;
var state_34990__$1 = (function (){var statearr_34995 = state_34990;
(statearr_34995[(10)] = inst_34960);

return statearr_34995;
})();
var statearr_34996_35015 = state_34990__$1;
(statearr_34996_35015[(2)] = null);

(statearr_34996_35015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (4))){
var inst_34960 = (state_34990[(10)]);
var state_34990__$1 = state_34990;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34990__$1,(7),inst_34960);
} else {
if((state_val_34991 === (6))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34997_35016 = state_34990__$1;
(statearr_34997_35016[(2)] = inst_34986);

(statearr_34997_35016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (3))){
var inst_34988 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34990__$1,inst_34988);
} else {
if((state_val_34991 === (2))){
var inst_34960 = (state_34990[(10)]);
var inst_34962 = cljs.core.count.call(null,inst_34960);
var inst_34963 = (inst_34962 > (0));
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34963)){
var statearr_34999_35017 = state_34990__$1;
(statearr_34999_35017[(1)] = (4));

} else {
var statearr_35000_35018 = state_34990__$1;
(statearr_35000_35018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (11))){
var inst_34960 = (state_34990[(10)]);
var inst_34979 = (state_34990[(2)]);
var tmp34998 = inst_34960;
var inst_34960__$1 = tmp34998;
var state_34990__$1 = (function (){var statearr_35001 = state_34990;
(statearr_35001[(10)] = inst_34960__$1);

(statearr_35001[(11)] = inst_34979);

return statearr_35001;
})();
var statearr_35002_35019 = state_34990__$1;
(statearr_35002_35019[(2)] = null);

(statearr_35002_35019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (9))){
var inst_34970 = (state_34990[(8)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34990__$1,(11),out,inst_34970);
} else {
if((state_val_34991 === (5))){
var inst_34984 = cljs.core.async.close_BANG_.call(null,out);
var state_34990__$1 = state_34990;
var statearr_35003_35020 = state_34990__$1;
(statearr_35003_35020[(2)] = inst_34984);

(statearr_35003_35020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (10))){
var inst_34982 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35004_35021 = state_34990__$1;
(statearr_35004_35021[(2)] = inst_34982);

(statearr_35004_35021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (8))){
var inst_34971 = (state_34990[(9)]);
var inst_34969 = (state_34990[(7)]);
var inst_34960 = (state_34990[(10)]);
var inst_34970 = (state_34990[(8)]);
var inst_34974 = (function (){var cs = inst_34960;
var vec__34965 = inst_34969;
var v = inst_34970;
var c = inst_34971;
return ((function (cs,vec__34965,v,c,inst_34971,inst_34969,inst_34960,inst_34970,state_val_34991,c__33599__auto___35012,out){
return (function (p1__34956_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34956_SHARP_);
});
;})(cs,vec__34965,v,c,inst_34971,inst_34969,inst_34960,inst_34970,state_val_34991,c__33599__auto___35012,out))
})();
var inst_34975 = cljs.core.filterv.call(null,inst_34974,inst_34960);
var inst_34960__$1 = inst_34975;
var state_34990__$1 = (function (){var statearr_35005 = state_34990;
(statearr_35005[(10)] = inst_34960__$1);

return statearr_35005;
})();
var statearr_35006_35022 = state_34990__$1;
(statearr_35006_35022[(2)] = null);

(statearr_35006_35022[(1)] = (2));


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
});})(c__33599__auto___35012,out))
;
return ((function (switch__33509__auto__,c__33599__auto___35012,out){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_35007 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35007[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_35007[(1)] = (1));

return statearr_35007;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_34990){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_34990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e35008){if((e35008 instanceof Object)){
var ex__33513__auto__ = e35008;
var statearr_35009_35023 = state_34990;
(statearr_35009_35023[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35024 = state_34990;
state_34990 = G__35024;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_34990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_34990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___35012,out))
})();
var state__33601__auto__ = (function (){var statearr_35010 = f__33600__auto__.call(null);
(statearr_35010[(6)] = c__33599__auto___35012);

return statearr_35010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___35012,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35026 = arguments.length;
switch (G__35026) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33599__auto___35071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___35071,out){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___35071,out){
return (function (state_35050){
var state_val_35051 = (state_35050[(1)]);
if((state_val_35051 === (7))){
var inst_35032 = (state_35050[(7)]);
var inst_35032__$1 = (state_35050[(2)]);
var inst_35033 = (inst_35032__$1 == null);
var inst_35034 = cljs.core.not.call(null,inst_35033);
var state_35050__$1 = (function (){var statearr_35052 = state_35050;
(statearr_35052[(7)] = inst_35032__$1);

return statearr_35052;
})();
if(inst_35034){
var statearr_35053_35072 = state_35050__$1;
(statearr_35053_35072[(1)] = (8));

} else {
var statearr_35054_35073 = state_35050__$1;
(statearr_35054_35073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (1))){
var inst_35027 = (0);
var state_35050__$1 = (function (){var statearr_35055 = state_35050;
(statearr_35055[(8)] = inst_35027);

return statearr_35055;
})();
var statearr_35056_35074 = state_35050__$1;
(statearr_35056_35074[(2)] = null);

(statearr_35056_35074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (4))){
var state_35050__$1 = state_35050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35050__$1,(7),ch);
} else {
if((state_val_35051 === (6))){
var inst_35045 = (state_35050[(2)]);
var state_35050__$1 = state_35050;
var statearr_35057_35075 = state_35050__$1;
(statearr_35057_35075[(2)] = inst_35045);

(statearr_35057_35075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (3))){
var inst_35047 = (state_35050[(2)]);
var inst_35048 = cljs.core.async.close_BANG_.call(null,out);
var state_35050__$1 = (function (){var statearr_35058 = state_35050;
(statearr_35058[(9)] = inst_35047);

return statearr_35058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35050__$1,inst_35048);
} else {
if((state_val_35051 === (2))){
var inst_35027 = (state_35050[(8)]);
var inst_35029 = (inst_35027 < n);
var state_35050__$1 = state_35050;
if(cljs.core.truth_(inst_35029)){
var statearr_35059_35076 = state_35050__$1;
(statearr_35059_35076[(1)] = (4));

} else {
var statearr_35060_35077 = state_35050__$1;
(statearr_35060_35077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (11))){
var inst_35027 = (state_35050[(8)]);
var inst_35037 = (state_35050[(2)]);
var inst_35038 = (inst_35027 + (1));
var inst_35027__$1 = inst_35038;
var state_35050__$1 = (function (){var statearr_35061 = state_35050;
(statearr_35061[(10)] = inst_35037);

(statearr_35061[(8)] = inst_35027__$1);

return statearr_35061;
})();
var statearr_35062_35078 = state_35050__$1;
(statearr_35062_35078[(2)] = null);

(statearr_35062_35078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (9))){
var state_35050__$1 = state_35050;
var statearr_35063_35079 = state_35050__$1;
(statearr_35063_35079[(2)] = null);

(statearr_35063_35079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (5))){
var state_35050__$1 = state_35050;
var statearr_35064_35080 = state_35050__$1;
(statearr_35064_35080[(2)] = null);

(statearr_35064_35080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (10))){
var inst_35042 = (state_35050[(2)]);
var state_35050__$1 = state_35050;
var statearr_35065_35081 = state_35050__$1;
(statearr_35065_35081[(2)] = inst_35042);

(statearr_35065_35081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (8))){
var inst_35032 = (state_35050[(7)]);
var state_35050__$1 = state_35050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35050__$1,(11),out,inst_35032);
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
});})(c__33599__auto___35071,out))
;
return ((function (switch__33509__auto__,c__33599__auto___35071,out){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_35066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35066[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_35066[(1)] = (1));

return statearr_35066;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_35050){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_35050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e35067){if((e35067 instanceof Object)){
var ex__33513__auto__ = e35067;
var statearr_35068_35082 = state_35050;
(statearr_35068_35082[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35083 = state_35050;
state_35050 = G__35083;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_35050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_35050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___35071,out))
})();
var state__33601__auto__ = (function (){var statearr_35069 = f__33600__auto__.call(null);
(statearr_35069[(6)] = c__33599__auto___35071);

return statearr_35069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___35071,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35085 = (function (f,ch,meta35086){
this.f = f;
this.ch = ch;
this.meta35086 = meta35086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35087,meta35086__$1){
var self__ = this;
var _35087__$1 = this;
return (new cljs.core.async.t_cljs$core$async35085(self__.f,self__.ch,meta35086__$1));
});

cljs.core.async.t_cljs$core$async35085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35087){
var self__ = this;
var _35087__$1 = this;
return self__.meta35086;
});

cljs.core.async.t_cljs$core$async35085.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35085.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35085.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35085.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35088 = (function (f,ch,meta35086,_,fn1,meta35089){
this.f = f;
this.ch = ch;
this.meta35086 = meta35086;
this._ = _;
this.fn1 = fn1;
this.meta35089 = meta35089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35090,meta35089__$1){
var self__ = this;
var _35090__$1 = this;
return (new cljs.core.async.t_cljs$core$async35088(self__.f,self__.ch,self__.meta35086,self__._,self__.fn1,meta35089__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35090){
var self__ = this;
var _35090__$1 = this;
return self__.meta35089;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35084_SHARP_){
return f1.call(null,(((p1__35084_SHARP_ == null))?null:self__.f.call(null,p1__35084_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35088.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35086","meta35086",1843676583,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35085","cljs.core.async/t_cljs$core$async35085",1665647790,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35089","meta35089",-1316284527,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35088";

cljs.core.async.t_cljs$core$async35088.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35088");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35088 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35088(f__$1,ch__$1,meta35086__$1,___$2,fn1__$1,meta35089){
return (new cljs.core.async.t_cljs$core$async35088(f__$1,ch__$1,meta35086__$1,___$2,fn1__$1,meta35089));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35088(self__.f,self__.ch,self__.meta35086,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30036__auto__ = ret;
if(cljs.core.truth_(and__30036__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35085.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35086","meta35086",1843676583,null)], null);
});

cljs.core.async.t_cljs$core$async35085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35085";

cljs.core.async.t_cljs$core$async35085.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35085");
});

cljs.core.async.__GT_t_cljs$core$async35085 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35085(f__$1,ch__$1,meta35086){
return (new cljs.core.async.t_cljs$core$async35085(f__$1,ch__$1,meta35086));
});

}

return (new cljs.core.async.t_cljs$core$async35085(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35091 = (function (f,ch,meta35092){
this.f = f;
this.ch = ch;
this.meta35092 = meta35092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35093,meta35092__$1){
var self__ = this;
var _35093__$1 = this;
return (new cljs.core.async.t_cljs$core$async35091(self__.f,self__.ch,meta35092__$1));
});

cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35093){
var self__ = this;
var _35093__$1 = this;
return self__.meta35092;
});

cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35092","meta35092",13987105,null)], null);
});

cljs.core.async.t_cljs$core$async35091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35091";

cljs.core.async.t_cljs$core$async35091.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35091");
});

cljs.core.async.__GT_t_cljs$core$async35091 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35091(f__$1,ch__$1,meta35092){
return (new cljs.core.async.t_cljs$core$async35091(f__$1,ch__$1,meta35092));
});

}

return (new cljs.core.async.t_cljs$core$async35091(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35094 = (function (p,ch,meta35095){
this.p = p;
this.ch = ch;
this.meta35095 = meta35095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35096,meta35095__$1){
var self__ = this;
var _35096__$1 = this;
return (new cljs.core.async.t_cljs$core$async35094(self__.p,self__.ch,meta35095__$1));
});

cljs.core.async.t_cljs$core$async35094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35096){
var self__ = this;
var _35096__$1 = this;
return self__.meta35095;
});

cljs.core.async.t_cljs$core$async35094.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35094.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35094.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35094.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35094.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35094.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35094.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35095","meta35095",-274573775,null)], null);
});

cljs.core.async.t_cljs$core$async35094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35094";

cljs.core.async.t_cljs$core$async35094.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35094");
});

cljs.core.async.__GT_t_cljs$core$async35094 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35094(p__$1,ch__$1,meta35095){
return (new cljs.core.async.t_cljs$core$async35094(p__$1,ch__$1,meta35095));
});

}

return (new cljs.core.async.t_cljs$core$async35094(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35098 = arguments.length;
switch (G__35098) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33599__auto___35138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___35138,out){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___35138,out){
return (function (state_35119){
var state_val_35120 = (state_35119[(1)]);
if((state_val_35120 === (7))){
var inst_35115 = (state_35119[(2)]);
var state_35119__$1 = state_35119;
var statearr_35121_35139 = state_35119__$1;
(statearr_35121_35139[(2)] = inst_35115);

(statearr_35121_35139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (1))){
var state_35119__$1 = state_35119;
var statearr_35122_35140 = state_35119__$1;
(statearr_35122_35140[(2)] = null);

(statearr_35122_35140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (4))){
var inst_35101 = (state_35119[(7)]);
var inst_35101__$1 = (state_35119[(2)]);
var inst_35102 = (inst_35101__$1 == null);
var state_35119__$1 = (function (){var statearr_35123 = state_35119;
(statearr_35123[(7)] = inst_35101__$1);

return statearr_35123;
})();
if(cljs.core.truth_(inst_35102)){
var statearr_35124_35141 = state_35119__$1;
(statearr_35124_35141[(1)] = (5));

} else {
var statearr_35125_35142 = state_35119__$1;
(statearr_35125_35142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (6))){
var inst_35101 = (state_35119[(7)]);
var inst_35106 = p.call(null,inst_35101);
var state_35119__$1 = state_35119;
if(cljs.core.truth_(inst_35106)){
var statearr_35126_35143 = state_35119__$1;
(statearr_35126_35143[(1)] = (8));

} else {
var statearr_35127_35144 = state_35119__$1;
(statearr_35127_35144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (3))){
var inst_35117 = (state_35119[(2)]);
var state_35119__$1 = state_35119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35119__$1,inst_35117);
} else {
if((state_val_35120 === (2))){
var state_35119__$1 = state_35119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35119__$1,(4),ch);
} else {
if((state_val_35120 === (11))){
var inst_35109 = (state_35119[(2)]);
var state_35119__$1 = state_35119;
var statearr_35128_35145 = state_35119__$1;
(statearr_35128_35145[(2)] = inst_35109);

(statearr_35128_35145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (9))){
var state_35119__$1 = state_35119;
var statearr_35129_35146 = state_35119__$1;
(statearr_35129_35146[(2)] = null);

(statearr_35129_35146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (5))){
var inst_35104 = cljs.core.async.close_BANG_.call(null,out);
var state_35119__$1 = state_35119;
var statearr_35130_35147 = state_35119__$1;
(statearr_35130_35147[(2)] = inst_35104);

(statearr_35130_35147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (10))){
var inst_35112 = (state_35119[(2)]);
var state_35119__$1 = (function (){var statearr_35131 = state_35119;
(statearr_35131[(8)] = inst_35112);

return statearr_35131;
})();
var statearr_35132_35148 = state_35119__$1;
(statearr_35132_35148[(2)] = null);

(statearr_35132_35148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (8))){
var inst_35101 = (state_35119[(7)]);
var state_35119__$1 = state_35119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35119__$1,(11),out,inst_35101);
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
});})(c__33599__auto___35138,out))
;
return ((function (switch__33509__auto__,c__33599__auto___35138,out){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_35133 = [null,null,null,null,null,null,null,null,null];
(statearr_35133[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_35133[(1)] = (1));

return statearr_35133;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_35119){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_35119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e35134){if((e35134 instanceof Object)){
var ex__33513__auto__ = e35134;
var statearr_35135_35149 = state_35119;
(statearr_35135_35149[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35150 = state_35119;
state_35119 = G__35150;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_35119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_35119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___35138,out))
})();
var state__33601__auto__ = (function (){var statearr_35136 = f__33600__auto__.call(null);
(statearr_35136[(6)] = c__33599__auto___35138);

return statearr_35136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___35138,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35152 = arguments.length;
switch (G__35152) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto__){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto__){
return (function (state_35215){
var state_val_35216 = (state_35215[(1)]);
if((state_val_35216 === (7))){
var inst_35211 = (state_35215[(2)]);
var state_35215__$1 = state_35215;
var statearr_35217_35255 = state_35215__$1;
(statearr_35217_35255[(2)] = inst_35211);

(statearr_35217_35255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (20))){
var inst_35181 = (state_35215[(7)]);
var inst_35192 = (state_35215[(2)]);
var inst_35193 = cljs.core.next.call(null,inst_35181);
var inst_35167 = inst_35193;
var inst_35168 = null;
var inst_35169 = (0);
var inst_35170 = (0);
var state_35215__$1 = (function (){var statearr_35218 = state_35215;
(statearr_35218[(8)] = inst_35167);

(statearr_35218[(9)] = inst_35170);

(statearr_35218[(10)] = inst_35168);

(statearr_35218[(11)] = inst_35192);

(statearr_35218[(12)] = inst_35169);

return statearr_35218;
})();
var statearr_35219_35256 = state_35215__$1;
(statearr_35219_35256[(2)] = null);

(statearr_35219_35256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (1))){
var state_35215__$1 = state_35215;
var statearr_35220_35257 = state_35215__$1;
(statearr_35220_35257[(2)] = null);

(statearr_35220_35257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (4))){
var inst_35156 = (state_35215[(13)]);
var inst_35156__$1 = (state_35215[(2)]);
var inst_35157 = (inst_35156__$1 == null);
var state_35215__$1 = (function (){var statearr_35221 = state_35215;
(statearr_35221[(13)] = inst_35156__$1);

return statearr_35221;
})();
if(cljs.core.truth_(inst_35157)){
var statearr_35222_35258 = state_35215__$1;
(statearr_35222_35258[(1)] = (5));

} else {
var statearr_35223_35259 = state_35215__$1;
(statearr_35223_35259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (15))){
var state_35215__$1 = state_35215;
var statearr_35227_35260 = state_35215__$1;
(statearr_35227_35260[(2)] = null);

(statearr_35227_35260[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (21))){
var state_35215__$1 = state_35215;
var statearr_35228_35261 = state_35215__$1;
(statearr_35228_35261[(2)] = null);

(statearr_35228_35261[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (13))){
var inst_35167 = (state_35215[(8)]);
var inst_35170 = (state_35215[(9)]);
var inst_35168 = (state_35215[(10)]);
var inst_35169 = (state_35215[(12)]);
var inst_35177 = (state_35215[(2)]);
var inst_35178 = (inst_35170 + (1));
var tmp35224 = inst_35167;
var tmp35225 = inst_35168;
var tmp35226 = inst_35169;
var inst_35167__$1 = tmp35224;
var inst_35168__$1 = tmp35225;
var inst_35169__$1 = tmp35226;
var inst_35170__$1 = inst_35178;
var state_35215__$1 = (function (){var statearr_35229 = state_35215;
(statearr_35229[(14)] = inst_35177);

(statearr_35229[(8)] = inst_35167__$1);

(statearr_35229[(9)] = inst_35170__$1);

(statearr_35229[(10)] = inst_35168__$1);

(statearr_35229[(12)] = inst_35169__$1);

return statearr_35229;
})();
var statearr_35230_35262 = state_35215__$1;
(statearr_35230_35262[(2)] = null);

(statearr_35230_35262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (22))){
var state_35215__$1 = state_35215;
var statearr_35231_35263 = state_35215__$1;
(statearr_35231_35263[(2)] = null);

(statearr_35231_35263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (6))){
var inst_35156 = (state_35215[(13)]);
var inst_35165 = f.call(null,inst_35156);
var inst_35166 = cljs.core.seq.call(null,inst_35165);
var inst_35167 = inst_35166;
var inst_35168 = null;
var inst_35169 = (0);
var inst_35170 = (0);
var state_35215__$1 = (function (){var statearr_35232 = state_35215;
(statearr_35232[(8)] = inst_35167);

(statearr_35232[(9)] = inst_35170);

(statearr_35232[(10)] = inst_35168);

(statearr_35232[(12)] = inst_35169);

return statearr_35232;
})();
var statearr_35233_35264 = state_35215__$1;
(statearr_35233_35264[(2)] = null);

(statearr_35233_35264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (17))){
var inst_35181 = (state_35215[(7)]);
var inst_35185 = cljs.core.chunk_first.call(null,inst_35181);
var inst_35186 = cljs.core.chunk_rest.call(null,inst_35181);
var inst_35187 = cljs.core.count.call(null,inst_35185);
var inst_35167 = inst_35186;
var inst_35168 = inst_35185;
var inst_35169 = inst_35187;
var inst_35170 = (0);
var state_35215__$1 = (function (){var statearr_35234 = state_35215;
(statearr_35234[(8)] = inst_35167);

(statearr_35234[(9)] = inst_35170);

(statearr_35234[(10)] = inst_35168);

(statearr_35234[(12)] = inst_35169);

return statearr_35234;
})();
var statearr_35235_35265 = state_35215__$1;
(statearr_35235_35265[(2)] = null);

(statearr_35235_35265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (3))){
var inst_35213 = (state_35215[(2)]);
var state_35215__$1 = state_35215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35215__$1,inst_35213);
} else {
if((state_val_35216 === (12))){
var inst_35201 = (state_35215[(2)]);
var state_35215__$1 = state_35215;
var statearr_35236_35266 = state_35215__$1;
(statearr_35236_35266[(2)] = inst_35201);

(statearr_35236_35266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (2))){
var state_35215__$1 = state_35215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35215__$1,(4),in$);
} else {
if((state_val_35216 === (23))){
var inst_35209 = (state_35215[(2)]);
var state_35215__$1 = state_35215;
var statearr_35237_35267 = state_35215__$1;
(statearr_35237_35267[(2)] = inst_35209);

(statearr_35237_35267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (19))){
var inst_35196 = (state_35215[(2)]);
var state_35215__$1 = state_35215;
var statearr_35238_35268 = state_35215__$1;
(statearr_35238_35268[(2)] = inst_35196);

(statearr_35238_35268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (11))){
var inst_35167 = (state_35215[(8)]);
var inst_35181 = (state_35215[(7)]);
var inst_35181__$1 = cljs.core.seq.call(null,inst_35167);
var state_35215__$1 = (function (){var statearr_35239 = state_35215;
(statearr_35239[(7)] = inst_35181__$1);

return statearr_35239;
})();
if(inst_35181__$1){
var statearr_35240_35269 = state_35215__$1;
(statearr_35240_35269[(1)] = (14));

} else {
var statearr_35241_35270 = state_35215__$1;
(statearr_35241_35270[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (9))){
var inst_35203 = (state_35215[(2)]);
var inst_35204 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35215__$1 = (function (){var statearr_35242 = state_35215;
(statearr_35242[(15)] = inst_35203);

return statearr_35242;
})();
if(cljs.core.truth_(inst_35204)){
var statearr_35243_35271 = state_35215__$1;
(statearr_35243_35271[(1)] = (21));

} else {
var statearr_35244_35272 = state_35215__$1;
(statearr_35244_35272[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (5))){
var inst_35159 = cljs.core.async.close_BANG_.call(null,out);
var state_35215__$1 = state_35215;
var statearr_35245_35273 = state_35215__$1;
(statearr_35245_35273[(2)] = inst_35159);

(statearr_35245_35273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (14))){
var inst_35181 = (state_35215[(7)]);
var inst_35183 = cljs.core.chunked_seq_QMARK_.call(null,inst_35181);
var state_35215__$1 = state_35215;
if(inst_35183){
var statearr_35246_35274 = state_35215__$1;
(statearr_35246_35274[(1)] = (17));

} else {
var statearr_35247_35275 = state_35215__$1;
(statearr_35247_35275[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (16))){
var inst_35199 = (state_35215[(2)]);
var state_35215__$1 = state_35215;
var statearr_35248_35276 = state_35215__$1;
(statearr_35248_35276[(2)] = inst_35199);

(statearr_35248_35276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (10))){
var inst_35170 = (state_35215[(9)]);
var inst_35168 = (state_35215[(10)]);
var inst_35175 = cljs.core._nth.call(null,inst_35168,inst_35170);
var state_35215__$1 = state_35215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35215__$1,(13),out,inst_35175);
} else {
if((state_val_35216 === (18))){
var inst_35181 = (state_35215[(7)]);
var inst_35190 = cljs.core.first.call(null,inst_35181);
var state_35215__$1 = state_35215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35215__$1,(20),out,inst_35190);
} else {
if((state_val_35216 === (8))){
var inst_35170 = (state_35215[(9)]);
var inst_35169 = (state_35215[(12)]);
var inst_35172 = (inst_35170 < inst_35169);
var inst_35173 = inst_35172;
var state_35215__$1 = state_35215;
if(cljs.core.truth_(inst_35173)){
var statearr_35249_35277 = state_35215__$1;
(statearr_35249_35277[(1)] = (10));

} else {
var statearr_35250_35278 = state_35215__$1;
(statearr_35250_35278[(1)] = (11));

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
}
}
}
}
}
}
});})(c__33599__auto__))
;
return ((function (switch__33509__auto__,c__33599__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33510__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33510__auto____0 = (function (){
var statearr_35251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35251[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33510__auto__);

(statearr_35251[(1)] = (1));

return statearr_35251;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33510__auto____1 = (function (state_35215){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_35215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e35252){if((e35252 instanceof Object)){
var ex__33513__auto__ = e35252;
var statearr_35253_35279 = state_35215;
(statearr_35253_35279[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35280 = state_35215;
state_35215 = G__35280;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33510__auto__ = function(state_35215){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33510__auto____1.call(this,state_35215);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33510__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33510__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto__))
})();
var state__33601__auto__ = (function (){var statearr_35254 = f__33600__auto__.call(null);
(statearr_35254[(6)] = c__33599__auto__);

return statearr_35254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto__))
);

return c__33599__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35282 = arguments.length;
switch (G__35282) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35285 = arguments.length;
switch (G__35285) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35288 = arguments.length;
switch (G__35288) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33599__auto___35335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___35335,out){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___35335,out){
return (function (state_35312){
var state_val_35313 = (state_35312[(1)]);
if((state_val_35313 === (7))){
var inst_35307 = (state_35312[(2)]);
var state_35312__$1 = state_35312;
var statearr_35314_35336 = state_35312__$1;
(statearr_35314_35336[(2)] = inst_35307);

(statearr_35314_35336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (1))){
var inst_35289 = null;
var state_35312__$1 = (function (){var statearr_35315 = state_35312;
(statearr_35315[(7)] = inst_35289);

return statearr_35315;
})();
var statearr_35316_35337 = state_35312__$1;
(statearr_35316_35337[(2)] = null);

(statearr_35316_35337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (4))){
var inst_35292 = (state_35312[(8)]);
var inst_35292__$1 = (state_35312[(2)]);
var inst_35293 = (inst_35292__$1 == null);
var inst_35294 = cljs.core.not.call(null,inst_35293);
var state_35312__$1 = (function (){var statearr_35317 = state_35312;
(statearr_35317[(8)] = inst_35292__$1);

return statearr_35317;
})();
if(inst_35294){
var statearr_35318_35338 = state_35312__$1;
(statearr_35318_35338[(1)] = (5));

} else {
var statearr_35319_35339 = state_35312__$1;
(statearr_35319_35339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (6))){
var state_35312__$1 = state_35312;
var statearr_35320_35340 = state_35312__$1;
(statearr_35320_35340[(2)] = null);

(statearr_35320_35340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (3))){
var inst_35309 = (state_35312[(2)]);
var inst_35310 = cljs.core.async.close_BANG_.call(null,out);
var state_35312__$1 = (function (){var statearr_35321 = state_35312;
(statearr_35321[(9)] = inst_35309);

return statearr_35321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35312__$1,inst_35310);
} else {
if((state_val_35313 === (2))){
var state_35312__$1 = state_35312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35312__$1,(4),ch);
} else {
if((state_val_35313 === (11))){
var inst_35292 = (state_35312[(8)]);
var inst_35301 = (state_35312[(2)]);
var inst_35289 = inst_35292;
var state_35312__$1 = (function (){var statearr_35322 = state_35312;
(statearr_35322[(7)] = inst_35289);

(statearr_35322[(10)] = inst_35301);

return statearr_35322;
})();
var statearr_35323_35341 = state_35312__$1;
(statearr_35323_35341[(2)] = null);

(statearr_35323_35341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (9))){
var inst_35292 = (state_35312[(8)]);
var state_35312__$1 = state_35312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35312__$1,(11),out,inst_35292);
} else {
if((state_val_35313 === (5))){
var inst_35289 = (state_35312[(7)]);
var inst_35292 = (state_35312[(8)]);
var inst_35296 = cljs.core._EQ_.call(null,inst_35292,inst_35289);
var state_35312__$1 = state_35312;
if(inst_35296){
var statearr_35325_35342 = state_35312__$1;
(statearr_35325_35342[(1)] = (8));

} else {
var statearr_35326_35343 = state_35312__$1;
(statearr_35326_35343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (10))){
var inst_35304 = (state_35312[(2)]);
var state_35312__$1 = state_35312;
var statearr_35327_35344 = state_35312__$1;
(statearr_35327_35344[(2)] = inst_35304);

(statearr_35327_35344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35313 === (8))){
var inst_35289 = (state_35312[(7)]);
var tmp35324 = inst_35289;
var inst_35289__$1 = tmp35324;
var state_35312__$1 = (function (){var statearr_35328 = state_35312;
(statearr_35328[(7)] = inst_35289__$1);

return statearr_35328;
})();
var statearr_35329_35345 = state_35312__$1;
(statearr_35329_35345[(2)] = null);

(statearr_35329_35345[(1)] = (2));


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
});})(c__33599__auto___35335,out))
;
return ((function (switch__33509__auto__,c__33599__auto___35335,out){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_35330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35330[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_35330[(1)] = (1));

return statearr_35330;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_35312){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_35312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e35331){if((e35331 instanceof Object)){
var ex__33513__auto__ = e35331;
var statearr_35332_35346 = state_35312;
(statearr_35332_35346[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35347 = state_35312;
state_35312 = G__35347;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_35312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_35312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___35335,out))
})();
var state__33601__auto__ = (function (){var statearr_35333 = f__33600__auto__.call(null);
(statearr_35333[(6)] = c__33599__auto___35335);

return statearr_35333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___35335,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35349 = arguments.length;
switch (G__35349) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33599__auto___35415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___35415,out){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___35415,out){
return (function (state_35387){
var state_val_35388 = (state_35387[(1)]);
if((state_val_35388 === (7))){
var inst_35383 = (state_35387[(2)]);
var state_35387__$1 = state_35387;
var statearr_35389_35416 = state_35387__$1;
(statearr_35389_35416[(2)] = inst_35383);

(statearr_35389_35416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35388 === (1))){
var inst_35350 = (new Array(n));
var inst_35351 = inst_35350;
var inst_35352 = (0);
var state_35387__$1 = (function (){var statearr_35390 = state_35387;
(statearr_35390[(7)] = inst_35352);

(statearr_35390[(8)] = inst_35351);

return statearr_35390;
})();
var statearr_35391_35417 = state_35387__$1;
(statearr_35391_35417[(2)] = null);

(statearr_35391_35417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35388 === (4))){
var inst_35355 = (state_35387[(9)]);
var inst_35355__$1 = (state_35387[(2)]);
var inst_35356 = (inst_35355__$1 == null);
var inst_35357 = cljs.core.not.call(null,inst_35356);
var state_35387__$1 = (function (){var statearr_35392 = state_35387;
(statearr_35392[(9)] = inst_35355__$1);

return statearr_35392;
})();
if(inst_35357){
var statearr_35393_35418 = state_35387__$1;
(statearr_35393_35418[(1)] = (5));

} else {
var statearr_35394_35419 = state_35387__$1;
(statearr_35394_35419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35388 === (15))){
var inst_35377 = (state_35387[(2)]);
var state_35387__$1 = state_35387;
var statearr_35395_35420 = state_35387__$1;
(statearr_35395_35420[(2)] = inst_35377);

(statearr_35395_35420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35388 === (13))){
var state_35387__$1 = state_35387;
var statearr_35396_35421 = state_35387__$1;
(statearr_35396_35421[(2)] = null);

(statearr_35396_35421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35388 === (6))){
var inst_35352 = (state_35387[(7)]);
var inst_35373 = (inst_35352 > (0));
var state_35387__$1 = state_35387;
if(cljs.core.truth_(inst_35373)){
var statearr_35397_35422 = state_35387__$1;
(statearr_35397_35422[(1)] = (12));

} else {
var statearr_35398_35423 = state_35387__$1;
(statearr_35398_35423[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35388 === (3))){
var inst_35385 = (state_35387[(2)]);
var state_35387__$1 = state_35387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35387__$1,inst_35385);
} else {
if((state_val_35388 === (12))){
var inst_35351 = (state_35387[(8)]);
var inst_35375 = cljs.core.vec.call(null,inst_35351);
var state_35387__$1 = state_35387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35387__$1,(15),out,inst_35375);
} else {
if((state_val_35388 === (2))){
var state_35387__$1 = state_35387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35387__$1,(4),ch);
} else {
if((state_val_35388 === (11))){
var inst_35367 = (state_35387[(2)]);
var inst_35368 = (new Array(n));
var inst_35351 = inst_35368;
var inst_35352 = (0);
var state_35387__$1 = (function (){var statearr_35399 = state_35387;
(statearr_35399[(7)] = inst_35352);

(statearr_35399[(10)] = inst_35367);

(statearr_35399[(8)] = inst_35351);

return statearr_35399;
})();
var statearr_35400_35424 = state_35387__$1;
(statearr_35400_35424[(2)] = null);

(statearr_35400_35424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35388 === (9))){
var inst_35351 = (state_35387[(8)]);
var inst_35365 = cljs.core.vec.call(null,inst_35351);
var state_35387__$1 = state_35387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35387__$1,(11),out,inst_35365);
} else {
if((state_val_35388 === (5))){
var inst_35352 = (state_35387[(7)]);
var inst_35355 = (state_35387[(9)]);
var inst_35360 = (state_35387[(11)]);
var inst_35351 = (state_35387[(8)]);
var inst_35359 = (inst_35351[inst_35352] = inst_35355);
var inst_35360__$1 = (inst_35352 + (1));
var inst_35361 = (inst_35360__$1 < n);
var state_35387__$1 = (function (){var statearr_35401 = state_35387;
(statearr_35401[(11)] = inst_35360__$1);

(statearr_35401[(12)] = inst_35359);

return statearr_35401;
})();
if(cljs.core.truth_(inst_35361)){
var statearr_35402_35425 = state_35387__$1;
(statearr_35402_35425[(1)] = (8));

} else {
var statearr_35403_35426 = state_35387__$1;
(statearr_35403_35426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35388 === (14))){
var inst_35380 = (state_35387[(2)]);
var inst_35381 = cljs.core.async.close_BANG_.call(null,out);
var state_35387__$1 = (function (){var statearr_35405 = state_35387;
(statearr_35405[(13)] = inst_35380);

return statearr_35405;
})();
var statearr_35406_35427 = state_35387__$1;
(statearr_35406_35427[(2)] = inst_35381);

(statearr_35406_35427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35388 === (10))){
var inst_35371 = (state_35387[(2)]);
var state_35387__$1 = state_35387;
var statearr_35407_35428 = state_35387__$1;
(statearr_35407_35428[(2)] = inst_35371);

(statearr_35407_35428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35388 === (8))){
var inst_35360 = (state_35387[(11)]);
var inst_35351 = (state_35387[(8)]);
var tmp35404 = inst_35351;
var inst_35351__$1 = tmp35404;
var inst_35352 = inst_35360;
var state_35387__$1 = (function (){var statearr_35408 = state_35387;
(statearr_35408[(7)] = inst_35352);

(statearr_35408[(8)] = inst_35351__$1);

return statearr_35408;
})();
var statearr_35409_35429 = state_35387__$1;
(statearr_35409_35429[(2)] = null);

(statearr_35409_35429[(1)] = (2));


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
});})(c__33599__auto___35415,out))
;
return ((function (switch__33509__auto__,c__33599__auto___35415,out){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_35410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35410[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_35410[(1)] = (1));

return statearr_35410;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_35387){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_35387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e35411){if((e35411 instanceof Object)){
var ex__33513__auto__ = e35411;
var statearr_35412_35430 = state_35387;
(statearr_35412_35430[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35431 = state_35387;
state_35387 = G__35431;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_35387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_35387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___35415,out))
})();
var state__33601__auto__ = (function (){var statearr_35413 = f__33600__auto__.call(null);
(statearr_35413[(6)] = c__33599__auto___35415);

return statearr_35413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___35415,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35433 = arguments.length;
switch (G__35433) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33599__auto___35503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___35503,out){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___35503,out){
return (function (state_35475){
var state_val_35476 = (state_35475[(1)]);
if((state_val_35476 === (7))){
var inst_35471 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35477_35504 = state_35475__$1;
(statearr_35477_35504[(2)] = inst_35471);

(statearr_35477_35504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (1))){
var inst_35434 = [];
var inst_35435 = inst_35434;
var inst_35436 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35475__$1 = (function (){var statearr_35478 = state_35475;
(statearr_35478[(7)] = inst_35436);

(statearr_35478[(8)] = inst_35435);

return statearr_35478;
})();
var statearr_35479_35505 = state_35475__$1;
(statearr_35479_35505[(2)] = null);

(statearr_35479_35505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (4))){
var inst_35439 = (state_35475[(9)]);
var inst_35439__$1 = (state_35475[(2)]);
var inst_35440 = (inst_35439__$1 == null);
var inst_35441 = cljs.core.not.call(null,inst_35440);
var state_35475__$1 = (function (){var statearr_35480 = state_35475;
(statearr_35480[(9)] = inst_35439__$1);

return statearr_35480;
})();
if(inst_35441){
var statearr_35481_35506 = state_35475__$1;
(statearr_35481_35506[(1)] = (5));

} else {
var statearr_35482_35507 = state_35475__$1;
(statearr_35482_35507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (15))){
var inst_35465 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35483_35508 = state_35475__$1;
(statearr_35483_35508[(2)] = inst_35465);

(statearr_35483_35508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (13))){
var state_35475__$1 = state_35475;
var statearr_35484_35509 = state_35475__$1;
(statearr_35484_35509[(2)] = null);

(statearr_35484_35509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (6))){
var inst_35435 = (state_35475[(8)]);
var inst_35460 = inst_35435.length;
var inst_35461 = (inst_35460 > (0));
var state_35475__$1 = state_35475;
if(cljs.core.truth_(inst_35461)){
var statearr_35485_35510 = state_35475__$1;
(statearr_35485_35510[(1)] = (12));

} else {
var statearr_35486_35511 = state_35475__$1;
(statearr_35486_35511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (3))){
var inst_35473 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35475__$1,inst_35473);
} else {
if((state_val_35476 === (12))){
var inst_35435 = (state_35475[(8)]);
var inst_35463 = cljs.core.vec.call(null,inst_35435);
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35475__$1,(15),out,inst_35463);
} else {
if((state_val_35476 === (2))){
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35475__$1,(4),ch);
} else {
if((state_val_35476 === (11))){
var inst_35439 = (state_35475[(9)]);
var inst_35443 = (state_35475[(10)]);
var inst_35453 = (state_35475[(2)]);
var inst_35454 = [];
var inst_35455 = inst_35454.push(inst_35439);
var inst_35435 = inst_35454;
var inst_35436 = inst_35443;
var state_35475__$1 = (function (){var statearr_35487 = state_35475;
(statearr_35487[(7)] = inst_35436);

(statearr_35487[(11)] = inst_35455);

(statearr_35487[(8)] = inst_35435);

(statearr_35487[(12)] = inst_35453);

return statearr_35487;
})();
var statearr_35488_35512 = state_35475__$1;
(statearr_35488_35512[(2)] = null);

(statearr_35488_35512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (9))){
var inst_35435 = (state_35475[(8)]);
var inst_35451 = cljs.core.vec.call(null,inst_35435);
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35475__$1,(11),out,inst_35451);
} else {
if((state_val_35476 === (5))){
var inst_35436 = (state_35475[(7)]);
var inst_35439 = (state_35475[(9)]);
var inst_35443 = (state_35475[(10)]);
var inst_35443__$1 = f.call(null,inst_35439);
var inst_35444 = cljs.core._EQ_.call(null,inst_35443__$1,inst_35436);
var inst_35445 = cljs.core.keyword_identical_QMARK_.call(null,inst_35436,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35446 = (inst_35444) || (inst_35445);
var state_35475__$1 = (function (){var statearr_35489 = state_35475;
(statearr_35489[(10)] = inst_35443__$1);

return statearr_35489;
})();
if(cljs.core.truth_(inst_35446)){
var statearr_35490_35513 = state_35475__$1;
(statearr_35490_35513[(1)] = (8));

} else {
var statearr_35491_35514 = state_35475__$1;
(statearr_35491_35514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (14))){
var inst_35468 = (state_35475[(2)]);
var inst_35469 = cljs.core.async.close_BANG_.call(null,out);
var state_35475__$1 = (function (){var statearr_35493 = state_35475;
(statearr_35493[(13)] = inst_35468);

return statearr_35493;
})();
var statearr_35494_35515 = state_35475__$1;
(statearr_35494_35515[(2)] = inst_35469);

(statearr_35494_35515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (10))){
var inst_35458 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35495_35516 = state_35475__$1;
(statearr_35495_35516[(2)] = inst_35458);

(statearr_35495_35516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (8))){
var inst_35439 = (state_35475[(9)]);
var inst_35435 = (state_35475[(8)]);
var inst_35443 = (state_35475[(10)]);
var inst_35448 = inst_35435.push(inst_35439);
var tmp35492 = inst_35435;
var inst_35435__$1 = tmp35492;
var inst_35436 = inst_35443;
var state_35475__$1 = (function (){var statearr_35496 = state_35475;
(statearr_35496[(7)] = inst_35436);

(statearr_35496[(8)] = inst_35435__$1);

(statearr_35496[(14)] = inst_35448);

return statearr_35496;
})();
var statearr_35497_35517 = state_35475__$1;
(statearr_35497_35517[(2)] = null);

(statearr_35497_35517[(1)] = (2));


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
});})(c__33599__auto___35503,out))
;
return ((function (switch__33509__auto__,c__33599__auto___35503,out){
return (function() {
var cljs$core$async$state_machine__33510__auto__ = null;
var cljs$core$async$state_machine__33510__auto____0 = (function (){
var statearr_35498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35498[(0)] = cljs$core$async$state_machine__33510__auto__);

(statearr_35498[(1)] = (1));

return statearr_35498;
});
var cljs$core$async$state_machine__33510__auto____1 = (function (state_35475){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_35475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e35499){if((e35499 instanceof Object)){
var ex__33513__auto__ = e35499;
var statearr_35500_35518 = state_35475;
(statearr_35500_35518[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35519 = state_35475;
state_35475 = G__35519;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
cljs$core$async$state_machine__33510__auto__ = function(state_35475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33510__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33510__auto____1.call(this,state_35475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33510__auto____0;
cljs$core$async$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33510__auto____1;
return cljs$core$async$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___35503,out))
})();
var state__33601__auto__ = (function (){var statearr_35501 = f__33600__auto__.call(null);
(statearr_35501[(6)] = c__33599__auto___35503);

return statearr_35501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___35503,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509168661095
