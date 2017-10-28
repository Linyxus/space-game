// Compiled by ClojureScript 1.9.908 {}
goog.provide('space.core');
goog.require('cljs.core');
goog.require('space.drawer');
goog.require('space.game');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello! Here is space.");
if(typeof space.core.app_state !== 'undefined'){
} else {
space.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
space.core.canvas_dom = document.getElementById("layer");
space.core.canvas_info = (function space$core$canvas_info(dom){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),dom.width,new cljs.core.Keyword(null,"height","height",1025178622),dom.height,new cljs.core.Keyword(null,"ctx","ctx",-493610118),dom.getContext("2d")], null);
});
space.core.init_canvas_BANG_ = (function space$core$init_canvas_BANG_(){
space.core.canvas_dom.width = document.body.clientWidth;

return space.core.canvas_dom.height = document.body.clientHeight;
});
space.core.init_canvas_BANG_.call(null);
space.core.cvs_info = space.core.canvas_info.call(null,space.core.canvas_dom);
space.core.ctxt = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(space.core.cvs_info);
space.game.init_coord_BANG_.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(space.core.cvs_info),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(space.core.cvs_info));
setInterval((function (){
space.drawer.clear_canvas.call(null,space.core.cvs_info);

return space.drawer.render_data.call(null,space.core.ctxt,space.game.render.call(null,space.drawer.now.call(null)),space.drawer.std_revealer);
}),(10));
/**
 * Handles the click event.
 */
space.core.handle_click = (function space$core$handle_click(e){
var x = (e.pageX - space.core.canvas_dom.offsetLeft);
var y = (e.pageY - space.core.canvas_dom.offsetTop);
return space.game.onclick_handler.call(null,x,y);
});
space.core.canvas_dom.addEventListener("click",space.core.handle_click);
space.core.on_js_reload = (function space$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1509181386637
