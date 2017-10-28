// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30048__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30048__auto__){
return or__30048__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30048__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36847_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36847_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36848 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36849 = null;
var count__36850 = (0);
var i__36851 = (0);
while(true){
if((i__36851 < count__36850)){
var n = cljs.core._nth.call(null,chunk__36849,i__36851);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36852 = seq__36848;
var G__36853 = chunk__36849;
var G__36854 = count__36850;
var G__36855 = (i__36851 + (1));
seq__36848 = G__36852;
chunk__36849 = G__36853;
count__36850 = G__36854;
i__36851 = G__36855;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__36848);
if(temp__5278__auto__){
var seq__36848__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36848__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__36848__$1);
var G__36856 = cljs.core.chunk_rest.call(null,seq__36848__$1);
var G__36857 = c__30979__auto__;
var G__36858 = cljs.core.count.call(null,c__30979__auto__);
var G__36859 = (0);
seq__36848 = G__36856;
chunk__36849 = G__36857;
count__36850 = G__36858;
i__36851 = G__36859;
continue;
} else {
var n = cljs.core.first.call(null,seq__36848__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36860 = cljs.core.next.call(null,seq__36848__$1);
var G__36861 = null;
var G__36862 = (0);
var G__36863 = (0);
seq__36848 = G__36860;
chunk__36849 = G__36861;
count__36850 = G__36862;
i__36851 = G__36863;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36873_36881 = cljs.core.seq.call(null,deps);
var chunk__36874_36882 = null;
var count__36875_36883 = (0);
var i__36876_36884 = (0);
while(true){
if((i__36876_36884 < count__36875_36883)){
var dep_36885 = cljs.core._nth.call(null,chunk__36874_36882,i__36876_36884);
topo_sort_helper_STAR_.call(null,dep_36885,(depth + (1)),state);

var G__36886 = seq__36873_36881;
var G__36887 = chunk__36874_36882;
var G__36888 = count__36875_36883;
var G__36889 = (i__36876_36884 + (1));
seq__36873_36881 = G__36886;
chunk__36874_36882 = G__36887;
count__36875_36883 = G__36888;
i__36876_36884 = G__36889;
continue;
} else {
var temp__5278__auto___36890 = cljs.core.seq.call(null,seq__36873_36881);
if(temp__5278__auto___36890){
var seq__36873_36891__$1 = temp__5278__auto___36890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36873_36891__$1)){
var c__30979__auto___36892 = cljs.core.chunk_first.call(null,seq__36873_36891__$1);
var G__36893 = cljs.core.chunk_rest.call(null,seq__36873_36891__$1);
var G__36894 = c__30979__auto___36892;
var G__36895 = cljs.core.count.call(null,c__30979__auto___36892);
var G__36896 = (0);
seq__36873_36881 = G__36893;
chunk__36874_36882 = G__36894;
count__36875_36883 = G__36895;
i__36876_36884 = G__36896;
continue;
} else {
var dep_36897 = cljs.core.first.call(null,seq__36873_36891__$1);
topo_sort_helper_STAR_.call(null,dep_36897,(depth + (1)),state);

var G__36898 = cljs.core.next.call(null,seq__36873_36891__$1);
var G__36899 = null;
var G__36900 = (0);
var G__36901 = (0);
seq__36873_36881 = G__36898;
chunk__36874_36882 = G__36899;
count__36875_36883 = G__36900;
i__36876_36884 = G__36901;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36877){
var vec__36878 = p__36877;
var seq__36879 = cljs.core.seq.call(null,vec__36878);
var first__36880 = cljs.core.first.call(null,seq__36879);
var seq__36879__$1 = cljs.core.next.call(null,seq__36879);
var x = first__36880;
var xs = seq__36879__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36878,seq__36879,first__36880,seq__36879__$1,x,xs,get_deps__$1){
return (function (p1__36864_SHARP_){
return clojure.set.difference.call(null,p1__36864_SHARP_,x);
});})(vec__36878,seq__36879,first__36880,seq__36879__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36902 = cljs.core.seq.call(null,provides);
var chunk__36903 = null;
var count__36904 = (0);
var i__36905 = (0);
while(true){
if((i__36905 < count__36904)){
var prov = cljs.core._nth.call(null,chunk__36903,i__36905);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36906_36914 = cljs.core.seq.call(null,requires);
var chunk__36907_36915 = null;
var count__36908_36916 = (0);
var i__36909_36917 = (0);
while(true){
if((i__36909_36917 < count__36908_36916)){
var req_36918 = cljs.core._nth.call(null,chunk__36907_36915,i__36909_36917);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36918,prov);

var G__36919 = seq__36906_36914;
var G__36920 = chunk__36907_36915;
var G__36921 = count__36908_36916;
var G__36922 = (i__36909_36917 + (1));
seq__36906_36914 = G__36919;
chunk__36907_36915 = G__36920;
count__36908_36916 = G__36921;
i__36909_36917 = G__36922;
continue;
} else {
var temp__5278__auto___36923 = cljs.core.seq.call(null,seq__36906_36914);
if(temp__5278__auto___36923){
var seq__36906_36924__$1 = temp__5278__auto___36923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36906_36924__$1)){
var c__30979__auto___36925 = cljs.core.chunk_first.call(null,seq__36906_36924__$1);
var G__36926 = cljs.core.chunk_rest.call(null,seq__36906_36924__$1);
var G__36927 = c__30979__auto___36925;
var G__36928 = cljs.core.count.call(null,c__30979__auto___36925);
var G__36929 = (0);
seq__36906_36914 = G__36926;
chunk__36907_36915 = G__36927;
count__36908_36916 = G__36928;
i__36909_36917 = G__36929;
continue;
} else {
var req_36930 = cljs.core.first.call(null,seq__36906_36924__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36930,prov);

var G__36931 = cljs.core.next.call(null,seq__36906_36924__$1);
var G__36932 = null;
var G__36933 = (0);
var G__36934 = (0);
seq__36906_36914 = G__36931;
chunk__36907_36915 = G__36932;
count__36908_36916 = G__36933;
i__36909_36917 = G__36934;
continue;
}
} else {
}
}
break;
}

var G__36935 = seq__36902;
var G__36936 = chunk__36903;
var G__36937 = count__36904;
var G__36938 = (i__36905 + (1));
seq__36902 = G__36935;
chunk__36903 = G__36936;
count__36904 = G__36937;
i__36905 = G__36938;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__36902);
if(temp__5278__auto__){
var seq__36902__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36902__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__36902__$1);
var G__36939 = cljs.core.chunk_rest.call(null,seq__36902__$1);
var G__36940 = c__30979__auto__;
var G__36941 = cljs.core.count.call(null,c__30979__auto__);
var G__36942 = (0);
seq__36902 = G__36939;
chunk__36903 = G__36940;
count__36904 = G__36941;
i__36905 = G__36942;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36902__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36910_36943 = cljs.core.seq.call(null,requires);
var chunk__36911_36944 = null;
var count__36912_36945 = (0);
var i__36913_36946 = (0);
while(true){
if((i__36913_36946 < count__36912_36945)){
var req_36947 = cljs.core._nth.call(null,chunk__36911_36944,i__36913_36946);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36947,prov);

var G__36948 = seq__36910_36943;
var G__36949 = chunk__36911_36944;
var G__36950 = count__36912_36945;
var G__36951 = (i__36913_36946 + (1));
seq__36910_36943 = G__36948;
chunk__36911_36944 = G__36949;
count__36912_36945 = G__36950;
i__36913_36946 = G__36951;
continue;
} else {
var temp__5278__auto___36952__$1 = cljs.core.seq.call(null,seq__36910_36943);
if(temp__5278__auto___36952__$1){
var seq__36910_36953__$1 = temp__5278__auto___36952__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36910_36953__$1)){
var c__30979__auto___36954 = cljs.core.chunk_first.call(null,seq__36910_36953__$1);
var G__36955 = cljs.core.chunk_rest.call(null,seq__36910_36953__$1);
var G__36956 = c__30979__auto___36954;
var G__36957 = cljs.core.count.call(null,c__30979__auto___36954);
var G__36958 = (0);
seq__36910_36943 = G__36955;
chunk__36911_36944 = G__36956;
count__36912_36945 = G__36957;
i__36913_36946 = G__36958;
continue;
} else {
var req_36959 = cljs.core.first.call(null,seq__36910_36953__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36959,prov);

var G__36960 = cljs.core.next.call(null,seq__36910_36953__$1);
var G__36961 = null;
var G__36962 = (0);
var G__36963 = (0);
seq__36910_36943 = G__36960;
chunk__36911_36944 = G__36961;
count__36912_36945 = G__36962;
i__36913_36946 = G__36963;
continue;
}
} else {
}
}
break;
}

var G__36964 = cljs.core.next.call(null,seq__36902__$1);
var G__36965 = null;
var G__36966 = (0);
var G__36967 = (0);
seq__36902 = G__36964;
chunk__36903 = G__36965;
count__36904 = G__36966;
i__36905 = G__36967;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36968_36972 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36969_36973 = null;
var count__36970_36974 = (0);
var i__36971_36975 = (0);
while(true){
if((i__36971_36975 < count__36970_36974)){
var ns_36976 = cljs.core._nth.call(null,chunk__36969_36973,i__36971_36975);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36976);

var G__36977 = seq__36968_36972;
var G__36978 = chunk__36969_36973;
var G__36979 = count__36970_36974;
var G__36980 = (i__36971_36975 + (1));
seq__36968_36972 = G__36977;
chunk__36969_36973 = G__36978;
count__36970_36974 = G__36979;
i__36971_36975 = G__36980;
continue;
} else {
var temp__5278__auto___36981 = cljs.core.seq.call(null,seq__36968_36972);
if(temp__5278__auto___36981){
var seq__36968_36982__$1 = temp__5278__auto___36981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36968_36982__$1)){
var c__30979__auto___36983 = cljs.core.chunk_first.call(null,seq__36968_36982__$1);
var G__36984 = cljs.core.chunk_rest.call(null,seq__36968_36982__$1);
var G__36985 = c__30979__auto___36983;
var G__36986 = cljs.core.count.call(null,c__30979__auto___36983);
var G__36987 = (0);
seq__36968_36972 = G__36984;
chunk__36969_36973 = G__36985;
count__36970_36974 = G__36986;
i__36971_36975 = G__36987;
continue;
} else {
var ns_36988 = cljs.core.first.call(null,seq__36968_36982__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36988);

var G__36989 = cljs.core.next.call(null,seq__36968_36982__$1);
var G__36990 = null;
var G__36991 = (0);
var G__36992 = (0);
seq__36968_36972 = G__36989;
chunk__36969_36973 = G__36990;
count__36970_36974 = G__36991;
i__36971_36975 = G__36992;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30048__auto__ = goog.require__;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36993__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36994__i = 0, G__36994__a = new Array(arguments.length -  0);
while (G__36994__i < G__36994__a.length) {G__36994__a[G__36994__i] = arguments[G__36994__i + 0]; ++G__36994__i;}
  args = new cljs.core.IndexedSeq(G__36994__a,0,null);
} 
return G__36993__delegate.call(this,args);};
G__36993.cljs$lang$maxFixedArity = 0;
G__36993.cljs$lang$applyTo = (function (arglist__36995){
var args = cljs.core.seq(arglist__36995);
return G__36993__delegate(args);
});
G__36993.cljs$core$IFn$_invoke$arity$variadic = G__36993__delegate;
return G__36993;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36996_SHARP_,p2__36997_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36996_SHARP_)].join('')),p2__36997_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36998_SHARP_,p2__36999_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36998_SHARP_)].join(''),p2__36999_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37000 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37000.addCallback(((function (G__37000){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37000))
);

G__37000.addErrback(((function (G__37000){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37000))
);

return G__37000;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37001 = cljs.core._EQ_;
var expr__37002 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37001.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37002))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37001,expr__37002){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37001,expr__37002))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37001,expr__37002){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37004){if((e37004 instanceof Error)){
var e = e37004;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37004;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37001,expr__37002))
} else {
if(cljs.core.truth_(pred__37001.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37002))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37001.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37002))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37001.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37002))){
return ((function (pred__37001,expr__37002){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37005){if((e37005 instanceof Error)){
var e = e37005;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37005;

}
}})());
});
;})(pred__37001,expr__37002))
} else {
return ((function (pred__37001,expr__37002){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37001,expr__37002))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37006,callback){
var map__37007 = p__37006;
var map__37007__$1 = ((((!((map__37007 == null)))?((((map__37007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37007):map__37007);
var file_msg = map__37007__$1;
var request_url = cljs.core.get.call(null,map__37007__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37007,map__37007__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37007,map__37007__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto__){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto__){
return (function (state_37031){
var state_val_37032 = (state_37031[(1)]);
if((state_val_37032 === (7))){
var inst_37027 = (state_37031[(2)]);
var state_37031__$1 = state_37031;
var statearr_37033_37050 = state_37031__$1;
(statearr_37033_37050[(2)] = inst_37027);

(statearr_37033_37050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37032 === (1))){
var state_37031__$1 = state_37031;
var statearr_37034_37051 = state_37031__$1;
(statearr_37034_37051[(2)] = null);

(statearr_37034_37051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37032 === (4))){
var inst_37011 = (state_37031[(7)]);
var inst_37011__$1 = (state_37031[(2)]);
var state_37031__$1 = (function (){var statearr_37035 = state_37031;
(statearr_37035[(7)] = inst_37011__$1);

return statearr_37035;
})();
if(cljs.core.truth_(inst_37011__$1)){
var statearr_37036_37052 = state_37031__$1;
(statearr_37036_37052[(1)] = (5));

} else {
var statearr_37037_37053 = state_37031__$1;
(statearr_37037_37053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37032 === (6))){
var state_37031__$1 = state_37031;
var statearr_37038_37054 = state_37031__$1;
(statearr_37038_37054[(2)] = null);

(statearr_37038_37054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37032 === (3))){
var inst_37029 = (state_37031[(2)]);
var state_37031__$1 = state_37031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37031__$1,inst_37029);
} else {
if((state_val_37032 === (2))){
var state_37031__$1 = state_37031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37031__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37032 === (11))){
var inst_37023 = (state_37031[(2)]);
var state_37031__$1 = (function (){var statearr_37039 = state_37031;
(statearr_37039[(8)] = inst_37023);

return statearr_37039;
})();
var statearr_37040_37055 = state_37031__$1;
(statearr_37040_37055[(2)] = null);

(statearr_37040_37055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37032 === (9))){
var inst_37017 = (state_37031[(9)]);
var inst_37015 = (state_37031[(10)]);
var inst_37019 = inst_37017.call(null,inst_37015);
var state_37031__$1 = state_37031;
var statearr_37041_37056 = state_37031__$1;
(statearr_37041_37056[(2)] = inst_37019);

(statearr_37041_37056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37032 === (5))){
var inst_37011 = (state_37031[(7)]);
var inst_37013 = figwheel.client.file_reloading.blocking_load.call(null,inst_37011);
var state_37031__$1 = state_37031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37031__$1,(8),inst_37013);
} else {
if((state_val_37032 === (10))){
var inst_37015 = (state_37031[(10)]);
var inst_37021 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37015);
var state_37031__$1 = state_37031;
var statearr_37042_37057 = state_37031__$1;
(statearr_37042_37057[(2)] = inst_37021);

(statearr_37042_37057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37032 === (8))){
var inst_37011 = (state_37031[(7)]);
var inst_37017 = (state_37031[(9)]);
var inst_37015 = (state_37031[(2)]);
var inst_37016 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37017__$1 = cljs.core.get.call(null,inst_37016,inst_37011);
var state_37031__$1 = (function (){var statearr_37043 = state_37031;
(statearr_37043[(9)] = inst_37017__$1);

(statearr_37043[(10)] = inst_37015);

return statearr_37043;
})();
if(cljs.core.truth_(inst_37017__$1)){
var statearr_37044_37058 = state_37031__$1;
(statearr_37044_37058[(1)] = (9));

} else {
var statearr_37045_37059 = state_37031__$1;
(statearr_37045_37059[(1)] = (10));

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
});})(c__33599__auto__))
;
return ((function (switch__33509__auto__,c__33599__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33510__auto__ = null;
var figwheel$client$file_reloading$state_machine__33510__auto____0 = (function (){
var statearr_37046 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37046[(0)] = figwheel$client$file_reloading$state_machine__33510__auto__);

(statearr_37046[(1)] = (1));

return statearr_37046;
});
var figwheel$client$file_reloading$state_machine__33510__auto____1 = (function (state_37031){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_37031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e37047){if((e37047 instanceof Object)){
var ex__33513__auto__ = e37047;
var statearr_37048_37060 = state_37031;
(statearr_37048_37060[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37061 = state_37031;
state_37031 = G__37061;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33510__auto__ = function(state_37031){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33510__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33510__auto____1.call(this,state_37031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33510__auto____0;
figwheel$client$file_reloading$state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33510__auto____1;
return figwheel$client$file_reloading$state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto__))
})();
var state__33601__auto__ = (function (){var statearr_37049 = f__33600__auto__.call(null);
(statearr_37049[(6)] = c__33599__auto__);

return statearr_37049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto__))
);

return c__33599__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37062,callback){
var map__37063 = p__37062;
var map__37063__$1 = ((((!((map__37063 == null)))?((((map__37063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37063):map__37063);
var file_msg = map__37063__$1;
var namespace = cljs.core.get.call(null,map__37063__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37063,map__37063__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37063,map__37063__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37065){
var map__37066 = p__37065;
var map__37066__$1 = ((((!((map__37066 == null)))?((((map__37066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37066):map__37066);
var file_msg = map__37066__$1;
var namespace = cljs.core.get.call(null,map__37066__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37068){
var map__37069 = p__37068;
var map__37069__$1 = ((((!((map__37069 == null)))?((((map__37069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37069):map__37069);
var file_msg = map__37069__$1;
var namespace = cljs.core.get.call(null,map__37069__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30036__auto__){
var or__30048__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37071,callback){
var map__37072 = p__37071;
var map__37072__$1 = ((((!((map__37072 == null)))?((((map__37072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37072):map__37072);
var file_msg = map__37072__$1;
var request_url = cljs.core.get.call(null,map__37072__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37072__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33599__auto___37122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto___37122,out){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto___37122,out){
return (function (state_37107){
var state_val_37108 = (state_37107[(1)]);
if((state_val_37108 === (1))){
var inst_37081 = cljs.core.seq.call(null,files);
var inst_37082 = cljs.core.first.call(null,inst_37081);
var inst_37083 = cljs.core.next.call(null,inst_37081);
var inst_37084 = files;
var state_37107__$1 = (function (){var statearr_37109 = state_37107;
(statearr_37109[(7)] = inst_37083);

(statearr_37109[(8)] = inst_37082);

(statearr_37109[(9)] = inst_37084);

return statearr_37109;
})();
var statearr_37110_37123 = state_37107__$1;
(statearr_37110_37123[(2)] = null);

(statearr_37110_37123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37108 === (2))){
var inst_37090 = (state_37107[(10)]);
var inst_37084 = (state_37107[(9)]);
var inst_37089 = cljs.core.seq.call(null,inst_37084);
var inst_37090__$1 = cljs.core.first.call(null,inst_37089);
var inst_37091 = cljs.core.next.call(null,inst_37089);
var inst_37092 = (inst_37090__$1 == null);
var inst_37093 = cljs.core.not.call(null,inst_37092);
var state_37107__$1 = (function (){var statearr_37111 = state_37107;
(statearr_37111[(10)] = inst_37090__$1);

(statearr_37111[(11)] = inst_37091);

return statearr_37111;
})();
if(inst_37093){
var statearr_37112_37124 = state_37107__$1;
(statearr_37112_37124[(1)] = (4));

} else {
var statearr_37113_37125 = state_37107__$1;
(statearr_37113_37125[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37108 === (3))){
var inst_37105 = (state_37107[(2)]);
var state_37107__$1 = state_37107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37107__$1,inst_37105);
} else {
if((state_val_37108 === (4))){
var inst_37090 = (state_37107[(10)]);
var inst_37095 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37090);
var state_37107__$1 = state_37107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37107__$1,(7),inst_37095);
} else {
if((state_val_37108 === (5))){
var inst_37101 = cljs.core.async.close_BANG_.call(null,out);
var state_37107__$1 = state_37107;
var statearr_37114_37126 = state_37107__$1;
(statearr_37114_37126[(2)] = inst_37101);

(statearr_37114_37126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37108 === (6))){
var inst_37103 = (state_37107[(2)]);
var state_37107__$1 = state_37107;
var statearr_37115_37127 = state_37107__$1;
(statearr_37115_37127[(2)] = inst_37103);

(statearr_37115_37127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37108 === (7))){
var inst_37091 = (state_37107[(11)]);
var inst_37097 = (state_37107[(2)]);
var inst_37098 = cljs.core.async.put_BANG_.call(null,out,inst_37097);
var inst_37084 = inst_37091;
var state_37107__$1 = (function (){var statearr_37116 = state_37107;
(statearr_37116[(12)] = inst_37098);

(statearr_37116[(9)] = inst_37084);

return statearr_37116;
})();
var statearr_37117_37128 = state_37107__$1;
(statearr_37117_37128[(2)] = null);

(statearr_37117_37128[(1)] = (2));


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
});})(c__33599__auto___37122,out))
;
return ((function (switch__33509__auto__,c__33599__auto___37122,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto____0 = (function (){
var statearr_37118 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37118[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto__);

(statearr_37118[(1)] = (1));

return statearr_37118;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto____1 = (function (state_37107){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_37107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e37119){if((e37119 instanceof Object)){
var ex__33513__auto__ = e37119;
var statearr_37120_37129 = state_37107;
(statearr_37120_37129[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37130 = state_37107;
state_37107 = G__37130;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto__ = function(state_37107){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto____1.call(this,state_37107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto___37122,out))
})();
var state__33601__auto__ = (function (){var statearr_37121 = f__33600__auto__.call(null);
(statearr_37121[(6)] = c__33599__auto___37122);

return statearr_37121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto___37122,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37131,opts){
var map__37132 = p__37131;
var map__37132__$1 = ((((!((map__37132 == null)))?((((map__37132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37132):map__37132);
var eval_body = cljs.core.get.call(null,map__37132__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37132__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30036__auto__ = eval_body;
if(cljs.core.truth_(and__30036__auto__)){
return typeof eval_body === 'string';
} else {
return and__30036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37134){var e = e37134;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37135_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37135_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37136){
var vec__37137 = p__37136;
var k = cljs.core.nth.call(null,vec__37137,(0),null);
var v = cljs.core.nth.call(null,vec__37137,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37140){
var vec__37141 = p__37140;
var k = cljs.core.nth.call(null,vec__37141,(0),null);
var v = cljs.core.nth.call(null,vec__37141,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37147,p__37148){
var map__37149 = p__37147;
var map__37149__$1 = ((((!((map__37149 == null)))?((((map__37149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37149):map__37149);
var opts = map__37149__$1;
var before_jsload = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37150 = p__37148;
var map__37150__$1 = ((((!((map__37150 == null)))?((((map__37150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37150):map__37150);
var msg = map__37150__$1;
var files = cljs.core.get.call(null,map__37150__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37150__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37150__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33600__auto__ = (function (){var switch__33509__auto__ = ((function (c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37304){
var state_val_37305 = (state_37304[(1)]);
if((state_val_37305 === (7))){
var inst_37165 = (state_37304[(7)]);
var inst_37166 = (state_37304[(8)]);
var inst_37164 = (state_37304[(9)]);
var inst_37167 = (state_37304[(10)]);
var inst_37172 = cljs.core._nth.call(null,inst_37165,inst_37167);
var inst_37173 = figwheel.client.file_reloading.eval_body.call(null,inst_37172,opts);
var inst_37174 = (inst_37167 + (1));
var tmp37306 = inst_37165;
var tmp37307 = inst_37166;
var tmp37308 = inst_37164;
var inst_37164__$1 = tmp37308;
var inst_37165__$1 = tmp37306;
var inst_37166__$1 = tmp37307;
var inst_37167__$1 = inst_37174;
var state_37304__$1 = (function (){var statearr_37309 = state_37304;
(statearr_37309[(7)] = inst_37165__$1);

(statearr_37309[(11)] = inst_37173);

(statearr_37309[(8)] = inst_37166__$1);

(statearr_37309[(9)] = inst_37164__$1);

(statearr_37309[(10)] = inst_37167__$1);

return statearr_37309;
})();
var statearr_37310_37393 = state_37304__$1;
(statearr_37310_37393[(2)] = null);

(statearr_37310_37393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (20))){
var inst_37207 = (state_37304[(12)]);
var inst_37215 = figwheel.client.file_reloading.sort_files.call(null,inst_37207);
var state_37304__$1 = state_37304;
var statearr_37311_37394 = state_37304__$1;
(statearr_37311_37394[(2)] = inst_37215);

(statearr_37311_37394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (27))){
var state_37304__$1 = state_37304;
var statearr_37312_37395 = state_37304__$1;
(statearr_37312_37395[(2)] = null);

(statearr_37312_37395[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (1))){
var inst_37156 = (state_37304[(13)]);
var inst_37153 = before_jsload.call(null,files);
var inst_37154 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37155 = (function (){return ((function (inst_37156,inst_37153,inst_37154,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37144_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37144_SHARP_);
});
;})(inst_37156,inst_37153,inst_37154,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37156__$1 = cljs.core.filter.call(null,inst_37155,files);
var inst_37157 = cljs.core.not_empty.call(null,inst_37156__$1);
var state_37304__$1 = (function (){var statearr_37313 = state_37304;
(statearr_37313[(13)] = inst_37156__$1);

(statearr_37313[(14)] = inst_37153);

(statearr_37313[(15)] = inst_37154);

return statearr_37313;
})();
if(cljs.core.truth_(inst_37157)){
var statearr_37314_37396 = state_37304__$1;
(statearr_37314_37396[(1)] = (2));

} else {
var statearr_37315_37397 = state_37304__$1;
(statearr_37315_37397[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (24))){
var state_37304__$1 = state_37304;
var statearr_37316_37398 = state_37304__$1;
(statearr_37316_37398[(2)] = null);

(statearr_37316_37398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (39))){
var inst_37257 = (state_37304[(16)]);
var state_37304__$1 = state_37304;
var statearr_37317_37399 = state_37304__$1;
(statearr_37317_37399[(2)] = inst_37257);

(statearr_37317_37399[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (46))){
var inst_37299 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
var statearr_37318_37400 = state_37304__$1;
(statearr_37318_37400[(2)] = inst_37299);

(statearr_37318_37400[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (4))){
var inst_37201 = (state_37304[(2)]);
var inst_37202 = cljs.core.List.EMPTY;
var inst_37203 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37202);
var inst_37204 = (function (){return ((function (inst_37201,inst_37202,inst_37203,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37145_SHARP_){
var and__30036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37145_SHARP_);
if(cljs.core.truth_(and__30036__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37145_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37145_SHARP_)));
} else {
return and__30036__auto__;
}
});
;})(inst_37201,inst_37202,inst_37203,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37205 = cljs.core.filter.call(null,inst_37204,files);
var inst_37206 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37207 = cljs.core.concat.call(null,inst_37205,inst_37206);
var state_37304__$1 = (function (){var statearr_37319 = state_37304;
(statearr_37319[(12)] = inst_37207);

(statearr_37319[(17)] = inst_37203);

(statearr_37319[(18)] = inst_37201);

return statearr_37319;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37320_37401 = state_37304__$1;
(statearr_37320_37401[(1)] = (16));

} else {
var statearr_37321_37402 = state_37304__$1;
(statearr_37321_37402[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (15))){
var inst_37191 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
var statearr_37322_37403 = state_37304__$1;
(statearr_37322_37403[(2)] = inst_37191);

(statearr_37322_37403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (21))){
var inst_37217 = (state_37304[(19)]);
var inst_37217__$1 = (state_37304[(2)]);
var inst_37218 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37217__$1);
var state_37304__$1 = (function (){var statearr_37323 = state_37304;
(statearr_37323[(19)] = inst_37217__$1);

return statearr_37323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37304__$1,(22),inst_37218);
} else {
if((state_val_37305 === (31))){
var inst_37302 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37304__$1,inst_37302);
} else {
if((state_val_37305 === (32))){
var inst_37257 = (state_37304[(16)]);
var inst_37262 = inst_37257.cljs$lang$protocol_mask$partition0$;
var inst_37263 = (inst_37262 & (64));
var inst_37264 = inst_37257.cljs$core$ISeq$;
var inst_37265 = (cljs.core.PROTOCOL_SENTINEL === inst_37264);
var inst_37266 = (inst_37263) || (inst_37265);
var state_37304__$1 = state_37304;
if(cljs.core.truth_(inst_37266)){
var statearr_37324_37404 = state_37304__$1;
(statearr_37324_37404[(1)] = (35));

} else {
var statearr_37325_37405 = state_37304__$1;
(statearr_37325_37405[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (40))){
var inst_37279 = (state_37304[(20)]);
var inst_37278 = (state_37304[(2)]);
var inst_37279__$1 = cljs.core.get.call(null,inst_37278,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37280 = cljs.core.get.call(null,inst_37278,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37281 = cljs.core.not_empty.call(null,inst_37279__$1);
var state_37304__$1 = (function (){var statearr_37326 = state_37304;
(statearr_37326[(20)] = inst_37279__$1);

(statearr_37326[(21)] = inst_37280);

return statearr_37326;
})();
if(cljs.core.truth_(inst_37281)){
var statearr_37327_37406 = state_37304__$1;
(statearr_37327_37406[(1)] = (41));

} else {
var statearr_37328_37407 = state_37304__$1;
(statearr_37328_37407[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (33))){
var state_37304__$1 = state_37304;
var statearr_37329_37408 = state_37304__$1;
(statearr_37329_37408[(2)] = false);

(statearr_37329_37408[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (13))){
var inst_37177 = (state_37304[(22)]);
var inst_37181 = cljs.core.chunk_first.call(null,inst_37177);
var inst_37182 = cljs.core.chunk_rest.call(null,inst_37177);
var inst_37183 = cljs.core.count.call(null,inst_37181);
var inst_37164 = inst_37182;
var inst_37165 = inst_37181;
var inst_37166 = inst_37183;
var inst_37167 = (0);
var state_37304__$1 = (function (){var statearr_37330 = state_37304;
(statearr_37330[(7)] = inst_37165);

(statearr_37330[(8)] = inst_37166);

(statearr_37330[(9)] = inst_37164);

(statearr_37330[(10)] = inst_37167);

return statearr_37330;
})();
var statearr_37331_37409 = state_37304__$1;
(statearr_37331_37409[(2)] = null);

(statearr_37331_37409[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (22))){
var inst_37217 = (state_37304[(19)]);
var inst_37221 = (state_37304[(23)]);
var inst_37220 = (state_37304[(24)]);
var inst_37225 = (state_37304[(25)]);
var inst_37220__$1 = (state_37304[(2)]);
var inst_37221__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37220__$1);
var inst_37222 = (function (){var all_files = inst_37217;
var res_SINGLEQUOTE_ = inst_37220__$1;
var res = inst_37221__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37217,inst_37221,inst_37220,inst_37225,inst_37220__$1,inst_37221__$1,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37146_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37146_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37217,inst_37221,inst_37220,inst_37225,inst_37220__$1,inst_37221__$1,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37223 = cljs.core.filter.call(null,inst_37222,inst_37220__$1);
var inst_37224 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37225__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37224);
var inst_37226 = cljs.core.not_empty.call(null,inst_37225__$1);
var state_37304__$1 = (function (){var statearr_37332 = state_37304;
(statearr_37332[(26)] = inst_37223);

(statearr_37332[(23)] = inst_37221__$1);

(statearr_37332[(24)] = inst_37220__$1);

(statearr_37332[(25)] = inst_37225__$1);

return statearr_37332;
})();
if(cljs.core.truth_(inst_37226)){
var statearr_37333_37410 = state_37304__$1;
(statearr_37333_37410[(1)] = (23));

} else {
var statearr_37334_37411 = state_37304__$1;
(statearr_37334_37411[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (36))){
var state_37304__$1 = state_37304;
var statearr_37335_37412 = state_37304__$1;
(statearr_37335_37412[(2)] = false);

(statearr_37335_37412[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (41))){
var inst_37279 = (state_37304[(20)]);
var inst_37283 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37284 = cljs.core.map.call(null,inst_37283,inst_37279);
var inst_37285 = cljs.core.pr_str.call(null,inst_37284);
var inst_37286 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37285)].join('');
var inst_37287 = figwheel.client.utils.log.call(null,inst_37286);
var state_37304__$1 = state_37304;
var statearr_37336_37413 = state_37304__$1;
(statearr_37336_37413[(2)] = inst_37287);

(statearr_37336_37413[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (43))){
var inst_37280 = (state_37304[(21)]);
var inst_37290 = (state_37304[(2)]);
var inst_37291 = cljs.core.not_empty.call(null,inst_37280);
var state_37304__$1 = (function (){var statearr_37337 = state_37304;
(statearr_37337[(27)] = inst_37290);

return statearr_37337;
})();
if(cljs.core.truth_(inst_37291)){
var statearr_37338_37414 = state_37304__$1;
(statearr_37338_37414[(1)] = (44));

} else {
var statearr_37339_37415 = state_37304__$1;
(statearr_37339_37415[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (29))){
var inst_37217 = (state_37304[(19)]);
var inst_37223 = (state_37304[(26)]);
var inst_37221 = (state_37304[(23)]);
var inst_37220 = (state_37304[(24)]);
var inst_37225 = (state_37304[(25)]);
var inst_37257 = (state_37304[(16)]);
var inst_37253 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37256 = (function (){var all_files = inst_37217;
var res_SINGLEQUOTE_ = inst_37220;
var res = inst_37221;
var files_not_loaded = inst_37223;
var dependencies_that_loaded = inst_37225;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37223,inst_37221,inst_37220,inst_37225,inst_37257,inst_37253,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37255){
var map__37340 = p__37255;
var map__37340__$1 = ((((!((map__37340 == null)))?((((map__37340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37340):map__37340);
var namespace = cljs.core.get.call(null,map__37340__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37223,inst_37221,inst_37220,inst_37225,inst_37257,inst_37253,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37257__$1 = cljs.core.group_by.call(null,inst_37256,inst_37223);
var inst_37259 = (inst_37257__$1 == null);
var inst_37260 = cljs.core.not.call(null,inst_37259);
var state_37304__$1 = (function (){var statearr_37342 = state_37304;
(statearr_37342[(16)] = inst_37257__$1);

(statearr_37342[(28)] = inst_37253);

return statearr_37342;
})();
if(inst_37260){
var statearr_37343_37416 = state_37304__$1;
(statearr_37343_37416[(1)] = (32));

} else {
var statearr_37344_37417 = state_37304__$1;
(statearr_37344_37417[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (44))){
var inst_37280 = (state_37304[(21)]);
var inst_37293 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37280);
var inst_37294 = cljs.core.pr_str.call(null,inst_37293);
var inst_37295 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37294)].join('');
var inst_37296 = figwheel.client.utils.log.call(null,inst_37295);
var state_37304__$1 = state_37304;
var statearr_37345_37418 = state_37304__$1;
(statearr_37345_37418[(2)] = inst_37296);

(statearr_37345_37418[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (6))){
var inst_37198 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
var statearr_37346_37419 = state_37304__$1;
(statearr_37346_37419[(2)] = inst_37198);

(statearr_37346_37419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (28))){
var inst_37223 = (state_37304[(26)]);
var inst_37250 = (state_37304[(2)]);
var inst_37251 = cljs.core.not_empty.call(null,inst_37223);
var state_37304__$1 = (function (){var statearr_37347 = state_37304;
(statearr_37347[(29)] = inst_37250);

return statearr_37347;
})();
if(cljs.core.truth_(inst_37251)){
var statearr_37348_37420 = state_37304__$1;
(statearr_37348_37420[(1)] = (29));

} else {
var statearr_37349_37421 = state_37304__$1;
(statearr_37349_37421[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (25))){
var inst_37221 = (state_37304[(23)]);
var inst_37237 = (state_37304[(2)]);
var inst_37238 = cljs.core.not_empty.call(null,inst_37221);
var state_37304__$1 = (function (){var statearr_37350 = state_37304;
(statearr_37350[(30)] = inst_37237);

return statearr_37350;
})();
if(cljs.core.truth_(inst_37238)){
var statearr_37351_37422 = state_37304__$1;
(statearr_37351_37422[(1)] = (26));

} else {
var statearr_37352_37423 = state_37304__$1;
(statearr_37352_37423[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (34))){
var inst_37273 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
if(cljs.core.truth_(inst_37273)){
var statearr_37353_37424 = state_37304__$1;
(statearr_37353_37424[(1)] = (38));

} else {
var statearr_37354_37425 = state_37304__$1;
(statearr_37354_37425[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (17))){
var state_37304__$1 = state_37304;
var statearr_37355_37426 = state_37304__$1;
(statearr_37355_37426[(2)] = recompile_dependents);

(statearr_37355_37426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (3))){
var state_37304__$1 = state_37304;
var statearr_37356_37427 = state_37304__$1;
(statearr_37356_37427[(2)] = null);

(statearr_37356_37427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (12))){
var inst_37194 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
var statearr_37357_37428 = state_37304__$1;
(statearr_37357_37428[(2)] = inst_37194);

(statearr_37357_37428[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (2))){
var inst_37156 = (state_37304[(13)]);
var inst_37163 = cljs.core.seq.call(null,inst_37156);
var inst_37164 = inst_37163;
var inst_37165 = null;
var inst_37166 = (0);
var inst_37167 = (0);
var state_37304__$1 = (function (){var statearr_37358 = state_37304;
(statearr_37358[(7)] = inst_37165);

(statearr_37358[(8)] = inst_37166);

(statearr_37358[(9)] = inst_37164);

(statearr_37358[(10)] = inst_37167);

return statearr_37358;
})();
var statearr_37359_37429 = state_37304__$1;
(statearr_37359_37429[(2)] = null);

(statearr_37359_37429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (23))){
var inst_37217 = (state_37304[(19)]);
var inst_37223 = (state_37304[(26)]);
var inst_37221 = (state_37304[(23)]);
var inst_37220 = (state_37304[(24)]);
var inst_37225 = (state_37304[(25)]);
var inst_37228 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37230 = (function (){var all_files = inst_37217;
var res_SINGLEQUOTE_ = inst_37220;
var res = inst_37221;
var files_not_loaded = inst_37223;
var dependencies_that_loaded = inst_37225;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37223,inst_37221,inst_37220,inst_37225,inst_37228,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37229){
var map__37360 = p__37229;
var map__37360__$1 = ((((!((map__37360 == null)))?((((map__37360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37360):map__37360);
var request_url = cljs.core.get.call(null,map__37360__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37223,inst_37221,inst_37220,inst_37225,inst_37228,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37231 = cljs.core.reverse.call(null,inst_37225);
var inst_37232 = cljs.core.map.call(null,inst_37230,inst_37231);
var inst_37233 = cljs.core.pr_str.call(null,inst_37232);
var inst_37234 = figwheel.client.utils.log.call(null,inst_37233);
var state_37304__$1 = (function (){var statearr_37362 = state_37304;
(statearr_37362[(31)] = inst_37228);

return statearr_37362;
})();
var statearr_37363_37430 = state_37304__$1;
(statearr_37363_37430[(2)] = inst_37234);

(statearr_37363_37430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (35))){
var state_37304__$1 = state_37304;
var statearr_37364_37431 = state_37304__$1;
(statearr_37364_37431[(2)] = true);

(statearr_37364_37431[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (19))){
var inst_37207 = (state_37304[(12)]);
var inst_37213 = figwheel.client.file_reloading.expand_files.call(null,inst_37207);
var state_37304__$1 = state_37304;
var statearr_37365_37432 = state_37304__$1;
(statearr_37365_37432[(2)] = inst_37213);

(statearr_37365_37432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (11))){
var state_37304__$1 = state_37304;
var statearr_37366_37433 = state_37304__$1;
(statearr_37366_37433[(2)] = null);

(statearr_37366_37433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (9))){
var inst_37196 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
var statearr_37367_37434 = state_37304__$1;
(statearr_37367_37434[(2)] = inst_37196);

(statearr_37367_37434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (5))){
var inst_37166 = (state_37304[(8)]);
var inst_37167 = (state_37304[(10)]);
var inst_37169 = (inst_37167 < inst_37166);
var inst_37170 = inst_37169;
var state_37304__$1 = state_37304;
if(cljs.core.truth_(inst_37170)){
var statearr_37368_37435 = state_37304__$1;
(statearr_37368_37435[(1)] = (7));

} else {
var statearr_37369_37436 = state_37304__$1;
(statearr_37369_37436[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (14))){
var inst_37177 = (state_37304[(22)]);
var inst_37186 = cljs.core.first.call(null,inst_37177);
var inst_37187 = figwheel.client.file_reloading.eval_body.call(null,inst_37186,opts);
var inst_37188 = cljs.core.next.call(null,inst_37177);
var inst_37164 = inst_37188;
var inst_37165 = null;
var inst_37166 = (0);
var inst_37167 = (0);
var state_37304__$1 = (function (){var statearr_37370 = state_37304;
(statearr_37370[(7)] = inst_37165);

(statearr_37370[(32)] = inst_37187);

(statearr_37370[(8)] = inst_37166);

(statearr_37370[(9)] = inst_37164);

(statearr_37370[(10)] = inst_37167);

return statearr_37370;
})();
var statearr_37371_37437 = state_37304__$1;
(statearr_37371_37437[(2)] = null);

(statearr_37371_37437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (45))){
var state_37304__$1 = state_37304;
var statearr_37372_37438 = state_37304__$1;
(statearr_37372_37438[(2)] = null);

(statearr_37372_37438[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (26))){
var inst_37217 = (state_37304[(19)]);
var inst_37223 = (state_37304[(26)]);
var inst_37221 = (state_37304[(23)]);
var inst_37220 = (state_37304[(24)]);
var inst_37225 = (state_37304[(25)]);
var inst_37240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37242 = (function (){var all_files = inst_37217;
var res_SINGLEQUOTE_ = inst_37220;
var res = inst_37221;
var files_not_loaded = inst_37223;
var dependencies_that_loaded = inst_37225;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37223,inst_37221,inst_37220,inst_37225,inst_37240,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37241){
var map__37373 = p__37241;
var map__37373__$1 = ((((!((map__37373 == null)))?((((map__37373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37373):map__37373);
var namespace = cljs.core.get.call(null,map__37373__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37373__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37223,inst_37221,inst_37220,inst_37225,inst_37240,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37243 = cljs.core.map.call(null,inst_37242,inst_37221);
var inst_37244 = cljs.core.pr_str.call(null,inst_37243);
var inst_37245 = figwheel.client.utils.log.call(null,inst_37244);
var inst_37246 = (function (){var all_files = inst_37217;
var res_SINGLEQUOTE_ = inst_37220;
var res = inst_37221;
var files_not_loaded = inst_37223;
var dependencies_that_loaded = inst_37225;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37223,inst_37221,inst_37220,inst_37225,inst_37240,inst_37242,inst_37243,inst_37244,inst_37245,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37223,inst_37221,inst_37220,inst_37225,inst_37240,inst_37242,inst_37243,inst_37244,inst_37245,state_val_37305,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37247 = setTimeout(inst_37246,(10));
var state_37304__$1 = (function (){var statearr_37375 = state_37304;
(statearr_37375[(33)] = inst_37245);

(statearr_37375[(34)] = inst_37240);

return statearr_37375;
})();
var statearr_37376_37439 = state_37304__$1;
(statearr_37376_37439[(2)] = inst_37247);

(statearr_37376_37439[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (16))){
var state_37304__$1 = state_37304;
var statearr_37377_37440 = state_37304__$1;
(statearr_37377_37440[(2)] = reload_dependents);

(statearr_37377_37440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (38))){
var inst_37257 = (state_37304[(16)]);
var inst_37275 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37257);
var state_37304__$1 = state_37304;
var statearr_37378_37441 = state_37304__$1;
(statearr_37378_37441[(2)] = inst_37275);

(statearr_37378_37441[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (30))){
var state_37304__$1 = state_37304;
var statearr_37379_37442 = state_37304__$1;
(statearr_37379_37442[(2)] = null);

(statearr_37379_37442[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (10))){
var inst_37177 = (state_37304[(22)]);
var inst_37179 = cljs.core.chunked_seq_QMARK_.call(null,inst_37177);
var state_37304__$1 = state_37304;
if(inst_37179){
var statearr_37380_37443 = state_37304__$1;
(statearr_37380_37443[(1)] = (13));

} else {
var statearr_37381_37444 = state_37304__$1;
(statearr_37381_37444[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (18))){
var inst_37211 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
if(cljs.core.truth_(inst_37211)){
var statearr_37382_37445 = state_37304__$1;
(statearr_37382_37445[(1)] = (19));

} else {
var statearr_37383_37446 = state_37304__$1;
(statearr_37383_37446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (42))){
var state_37304__$1 = state_37304;
var statearr_37384_37447 = state_37304__$1;
(statearr_37384_37447[(2)] = null);

(statearr_37384_37447[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (37))){
var inst_37270 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
var statearr_37385_37448 = state_37304__$1;
(statearr_37385_37448[(2)] = inst_37270);

(statearr_37385_37448[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (8))){
var inst_37177 = (state_37304[(22)]);
var inst_37164 = (state_37304[(9)]);
var inst_37177__$1 = cljs.core.seq.call(null,inst_37164);
var state_37304__$1 = (function (){var statearr_37386 = state_37304;
(statearr_37386[(22)] = inst_37177__$1);

return statearr_37386;
})();
if(inst_37177__$1){
var statearr_37387_37449 = state_37304__$1;
(statearr_37387_37449[(1)] = (10));

} else {
var statearr_37388_37450 = state_37304__$1;
(statearr_37388_37450[(1)] = (11));

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
}
});})(c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33509__auto__,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto____0 = (function (){
var statearr_37389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37389[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto__);

(statearr_37389[(1)] = (1));

return statearr_37389;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto____1 = (function (state_37304){
while(true){
var ret_value__33511__auto__ = (function (){try{while(true){
var result__33512__auto__ = switch__33509__auto__.call(null,state_37304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33512__auto__;
}
break;
}
}catch (e37390){if((e37390 instanceof Object)){
var ex__33513__auto__ = e37390;
var statearr_37391_37451 = state_37304;
(statearr_37391_37451[(5)] = ex__33513__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37452 = state_37304;
state_37304 = G__37452;
continue;
} else {
return ret_value__33511__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto__ = function(state_37304){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto____1.call(this,state_37304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33510__auto__;
})()
;})(switch__33509__auto__,c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33601__auto__ = (function (){var statearr_37392 = f__33600__auto__.call(null);
(statearr_37392[(6)] = c__33599__auto__);

return statearr_37392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33601__auto__);
});})(c__33599__auto__,map__37149,map__37149__$1,opts,before_jsload,on_jsload,reload_dependents,map__37150,map__37150__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33599__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37455,link){
var map__37456 = p__37455;
var map__37456__$1 = ((((!((map__37456 == null)))?((((map__37456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37456):map__37456);
var file = cljs.core.get.call(null,map__37456__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__37456,map__37456__$1,file){
return (function (p1__37453_SHARP_,p2__37454_SHARP_){
if(cljs.core._EQ_.call(null,p1__37453_SHARP_,p2__37454_SHARP_)){
return p1__37453_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__37456,map__37456__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37459){
var map__37460 = p__37459;
var map__37460__$1 = ((((!((map__37460 == null)))?((((map__37460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37460):map__37460);
var match_length = cljs.core.get.call(null,map__37460__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37460__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37458_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37458_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37462_SHARP_,p2__37463_SHARP_){
return cljs.core.assoc.call(null,p1__37462_SHARP_,cljs.core.get.call(null,p2__37463_SHARP_,key),p2__37463_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37464 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37464);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37464);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37465,p__37466){
var map__37467 = p__37465;
var map__37467__$1 = ((((!((map__37467 == null)))?((((map__37467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37467):map__37467);
var on_cssload = cljs.core.get.call(null,map__37467__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37468 = p__37466;
var map__37468__$1 = ((((!((map__37468 == null)))?((((map__37468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37468):map__37468);
var files_msg = map__37468__$1;
var files = cljs.core.get.call(null,map__37468__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1509168663182
