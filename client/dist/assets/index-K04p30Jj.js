(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var bh={exports:{}},Yo={};var Jx;function MM(){if(Jx)return Yo;Jx=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=t,Yo.jsx=i,Yo.jsxs=i,Yo}var $x;function SM(){return $x||($x=1,bh.exports=MM()),bh.exports}var Z=SM(),Eh={exports:{}},oe={};var tg;function bM(){if(tg)return oe;tg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function g(P,at,yt){this.props=P,this.context=at,this.refs=S,this.updater=yt||b}g.prototype.isReactComponent={},g.prototype.setState=function(P,at){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,at,"setState")},g.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function O(){}O.prototype=g.prototype;function w(P,at,yt){this.props=P,this.context=at,this.refs=S,this.updater=yt||b}var z=w.prototype=new O;z.constructor=w,A(z,g.prototype),z.isPureReactComponent=!0;var G=Array.isArray;function N(){}var B={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function D(P,at,yt){var Tt=yt.ref;return{$$typeof:r,type:P,key:at,ref:Tt!==void 0?Tt:null,props:yt}}function C(P,at){return D(P.type,at,P.props)}function X(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function nt(P){var at={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(yt){return at[yt]})}var lt=/\/+/g;function pt(P,at){return typeof P=="object"&&P!==null&&P.key!=null?nt(""+P.key):at.toString(36)}function ct(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(N,N):(P.status="pending",P.then(function(at){P.status==="pending"&&(P.status="fulfilled",P.value=at)},function(at){P.status==="pending"&&(P.status="rejected",P.reason=at)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,at,yt,Tt,Pt){var st=typeof P;(st==="undefined"||st==="boolean")&&(P=null);var ft=!1;if(P===null)ft=!0;else switch(st){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(P.$$typeof){case r:case t:ft=!0;break;case _:return ft=P._init,F(ft(P._payload),at,yt,Tt,Pt)}}if(ft)return Pt=Pt(P),ft=Tt===""?"."+pt(P,0):Tt,G(Pt)?(yt="",ft!=null&&(yt=ft.replace(lt,"$&/")+"/"),F(Pt,at,yt,"",function(kt){return kt})):Pt!=null&&(X(Pt)&&(Pt=C(Pt,yt+(Pt.key==null||P&&P.key===Pt.key?"":(""+Pt.key).replace(lt,"$&/")+"/")+ft)),at.push(Pt)),1;ft=0;var wt=Tt===""?".":Tt+":";if(G(P))for(var Ht=0;Ht<P.length;Ht++)Tt=P[Ht],st=wt+pt(Tt,Ht),ft+=F(Tt,at,yt,st,Pt);else if(Ht=M(P),typeof Ht=="function")for(P=Ht.call(P),Ht=0;!(Tt=P.next()).done;)Tt=Tt.value,st=wt+pt(Tt,Ht++),ft+=F(Tt,at,yt,st,Pt);else if(st==="object"){if(typeof P.then=="function")return F(ct(P),at,yt,Tt,Pt);throw at=String(P),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ft}function U(P,at,yt){if(P==null)return P;var Tt=[],Pt=0;return F(P,Tt,"","",function(st){return at.call(yt,st,Pt++)}),Tt}function W(P){if(P._status===-1){var at=P._result;at=at(),at.then(function(yt){(P._status===0||P._status===-1)&&(P._status=1,P._result=yt)},function(yt){(P._status===0||P._status===-1)&&(P._status=2,P._result=yt)}),P._status===-1&&(P._status=0,P._result=at)}if(P._status===1)return P._result.default;throw P._result}var dt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},vt={map:U,forEach:function(P,at,yt){U(P,function(){at.apply(this,arguments)},yt)},count:function(P){var at=0;return U(P,function(){at++}),at},toArray:function(P){return U(P,function(at){return at})||[]},only:function(P){if(!X(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return oe.Activity=x,oe.Children=vt,oe.Component=g,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=w,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,oe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},oe.cache=function(P){return function(){return P.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(P,at,yt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Tt=A({},P.props),Pt=P.key;if(at!=null)for(st in at.key!==void 0&&(Pt=""+at.key),at)!K.call(at,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&at.ref===void 0||(Tt[st]=at[st]);var st=arguments.length-2;if(st===1)Tt.children=yt;else if(1<st){for(var ft=Array(st),wt=0;wt<st;wt++)ft[wt]=arguments[wt+2];Tt.children=ft}return D(P.type,Pt,Tt)},oe.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},oe.createElement=function(P,at,yt){var Tt,Pt={},st=null;if(at!=null)for(Tt in at.key!==void 0&&(st=""+at.key),at)K.call(at,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Pt[Tt]=at[Tt]);var ft=arguments.length-2;if(ft===1)Pt.children=yt;else if(1<ft){for(var wt=Array(ft),Ht=0;Ht<ft;Ht++)wt[Ht]=arguments[Ht+2];Pt.children=wt}if(P&&P.defaultProps)for(Tt in ft=P.defaultProps,ft)Pt[Tt]===void 0&&(Pt[Tt]=ft[Tt]);return D(P,st,Pt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(P){return{$$typeof:d,render:P}},oe.isValidElement=X,oe.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:W}},oe.memo=function(P,at){return{$$typeof:p,type:P,compare:at===void 0?null:at}},oe.startTransition=function(P){var at=B.T,yt={};B.T=yt;try{var Tt=P(),Pt=B.S;Pt!==null&&Pt(yt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(N,dt)}catch(st){dt(st)}finally{at!==null&&yt.types!==null&&(at.types=yt.types),B.T=at}},oe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},oe.use=function(P){return B.H.use(P)},oe.useActionState=function(P,at,yt){return B.H.useActionState(P,at,yt)},oe.useCallback=function(P,at){return B.H.useCallback(P,at)},oe.useContext=function(P){return B.H.useContext(P)},oe.useDebugValue=function(){},oe.useDeferredValue=function(P,at){return B.H.useDeferredValue(P,at)},oe.useEffect=function(P,at){return B.H.useEffect(P,at)},oe.useEffectEvent=function(P){return B.H.useEffectEvent(P)},oe.useId=function(){return B.H.useId()},oe.useImperativeHandle=function(P,at,yt){return B.H.useImperativeHandle(P,at,yt)},oe.useInsertionEffect=function(P,at){return B.H.useInsertionEffect(P,at)},oe.useLayoutEffect=function(P,at){return B.H.useLayoutEffect(P,at)},oe.useMemo=function(P,at){return B.H.useMemo(P,at)},oe.useOptimistic=function(P,at){return B.H.useOptimistic(P,at)},oe.useReducer=function(P,at,yt){return B.H.useReducer(P,at,yt)},oe.useRef=function(P){return B.H.useRef(P)},oe.useState=function(P){return B.H.useState(P)},oe.useSyncExternalStore=function(P,at,yt){return B.H.useSyncExternalStore(P,at,yt)},oe.useTransition=function(){return B.H.useTransition()},oe.version="19.2.6",oe}var eg;function ip(){return eg||(eg=1,Eh.exports=bM()),Eh.exports}var be=ip(),Th={exports:{}},qo={},Ah={exports:{}},Rh={};var ng;function EM(){return ng||(ng=1,(function(r){function t(F,U){var W=F.length;F.push(U);t:for(;0<W;){var dt=W-1>>>1,vt=F[dt];if(0<l(vt,U))F[dt]=U,F[W]=vt,W=dt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var U=F[0],W=F.pop();if(W!==U){F[0]=W;t:for(var dt=0,vt=F.length,P=vt>>>1;dt<P;){var at=2*(dt+1)-1,yt=F[at],Tt=at+1,Pt=F[Tt];if(0>l(yt,W))Tt<vt&&0>l(Pt,yt)?(F[dt]=Pt,F[Tt]=W,dt=Tt):(F[dt]=yt,F[at]=W,dt=at);else if(Tt<vt&&0>l(Pt,W))F[dt]=Pt,F[Tt]=W,dt=Tt;else break t}}return U}function l(F,U){var W=F.sortIndex-U.sortIndex;return W!==0?W:F.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,y=3,M=!1,b=!1,A=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function z(F){for(var U=i(p);U!==null;){if(U.callback===null)s(p);else if(U.startTime<=F)s(p),U.sortIndex=U.expirationTime,t(m,U);else break;U=i(p)}}function G(F){if(A=!1,z(F),!b)if(i(m)!==null)b=!0,N||(N=!0,nt());else{var U=i(p);U!==null&&ct(G,U.startTime-F)}}var N=!1,B=-1,K=5,D=-1;function C(){return S?!0:!(r.unstable_now()-D<K)}function X(){if(S=!1,N){var F=r.unstable_now();D=F;var U=!0;try{t:{b=!1,A&&(A=!1,O(B),B=-1),M=!0;var W=y;try{e:{for(z(F),x=i(m);x!==null&&!(x.expirationTime>F&&C());){var dt=x.callback;if(typeof dt=="function"){x.callback=null,y=x.priorityLevel;var vt=dt(x.expirationTime<=F);if(F=r.unstable_now(),typeof vt=="function"){x.callback=vt,z(F),U=!0;break e}x===i(m)&&s(m),z(F)}else s(m);x=i(m)}if(x!==null)U=!0;else{var P=i(p);P!==null&&ct(G,P.startTime-F),U=!1}}break t}finally{x=null,y=W,M=!1}U=void 0}}finally{U?nt():N=!1}}}var nt;if(typeof w=="function")nt=function(){w(X)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,pt=lt.port2;lt.port1.onmessage=X,nt=function(){pt.postMessage(null)}}else nt=function(){g(X,0)};function ct(F,U){B=g(function(){F(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(F){switch(y){case 1:case 2:case 3:var U=3;break;default:U=y}var W=y;y=U;try{return F()}finally{y=W}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(F,U){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=y;y=F;try{return U()}finally{y=W}},r.unstable_scheduleCallback=function(F,U,W){var dt=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?dt+W:dt):W=dt,F){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=W+vt,F={id:_++,callback:U,priorityLevel:F,startTime:W,expirationTime:vt,sortIndex:-1},W>dt?(F.sortIndex=W,t(p,F),i(m)===null&&F===i(p)&&(A?(O(B),B=-1):A=!0,ct(G,W-dt))):(F.sortIndex=vt,t(m,F),b||M||(b=!0,N||(N=!0,nt()))),F},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(F){var U=y;return function(){var W=y;y=U;try{return F.apply(this,arguments)}finally{y=W}}}})(Rh)),Rh}var ig;function TM(){return ig||(ig=1,Ah.exports=EM()),Ah.exports}var Ch={exports:{}},On={};var ag;function AM(){if(ag)return On;ag=1;var r=ip();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},On.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.6",On}var sg;function RM(){if(sg)return Ch.exports;sg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ch.exports=AM(),Ch.exports}var rg;function CM(){if(rg)return qo;rg=1;var r=TM(),t=ip(),i=RM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,o=f;break}if(T===o){v=!0,o=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,o=u;break}if(T===o){v=!0,o=f,a=u;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),w=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case g:return"Profiler";case S:return"StrictMode";case G:return"Suspense";case N:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case w:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var ct=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},dt=[],vt=-1;function P(e){return{current:e}}function at(e){0>vt||(e.current=dt[vt],dt[vt]=null,vt--)}function yt(e,n){vt++,dt[vt]=e.current,e.current=n}var Tt=P(null),Pt=P(null),st=P(null),ft=P(null);function wt(e,n){switch(yt(st,n),yt(Pt,e),yt(Tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Mx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Mx(n),e=Sx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(Tt),yt(Tt,e)}function Ht(){at(Tt),at(Pt),at(st)}function kt(e){e.memoizedState!==null&&yt(ft,e);var n=Tt.current,a=Sx(n,e.type);n!==a&&(yt(Pt,e),yt(Tt,a))}function ce(e){Pt.current===e&&(at(Tt),at(Pt)),ft.current===e&&(at(ft),Vo._currentValue=W)}var on,de;function Ce(e){if(on===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);on=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+on+e+de}var H=!1;function pe(e,n){if(!e||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var it=ot}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ot){it=ot}e.call(gt.prototype)}}else{try{throw Error()}catch(ot){it=ot}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&it&&typeof ot.stack=="string")return[ot.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var I=v.split(`
`),tt=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===tt.length)for(o=I.length-1,u=tt.length-1;1<=o&&0<=u&&I[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==tt[u]){var ht=`
`+I[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ce(a):""}function ge(e,n){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce("Lazy");case 13:return e.child!==n&&n!==null?Ce("Suspense Fallback"):Ce("Suspense");case 19:return Ce("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return Ce("Activity");default:return""}}function ze(e){try{var n="",a=null;do n+=ge(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Gt=Object.prototype.hasOwnProperty,Ye=r.unstable_scheduleCallback,jt=r.unstable_cancelCallback,se=r.unstable_shouldYield,L=r.unstable_requestPaint,E=r.unstable_now,$=r.unstable_getCurrentPriorityLevel,xt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,Qt=r.log,Wt=r.unstable_setDisableYieldValue,St=null,Et=null;function qt(e){if(typeof Qt=="function"&&Wt(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(St,e)}catch{}}var Vt=Math.clz32?Math.clz32:V,Ot=Math.log,ie=Math.LN2;function V(e){return e>>>=0,e===0?32:31-(Ot(e)/ie|0)|0}var Dt=256,Rt=262144,Ct=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=bt(o):(v&=T,v!==0?u=bt(v):a||(a=T&~e,a!==0&&(u=bt(a))))):(T=o&~f,T!==0?u=bt(T):v!==0?u=bt(v):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),e}function we(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qn(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-Vt(a),gt=1<<ht;T[ht]=0,I[ht]=-1;var it=tt[ht];if(it!==null)for(tt[ht]=null,ht=0;ht<it.length;ht++){var ot=it[ht];ot!==null&&(ot.lane&=-536870913)}a&=~gt}o!==0&&hl(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function hl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Vt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function $r(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Vt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function to(e,n){var a=n&-n;return a=(a&42)!==0?1:Mi(a),(a&(e.suspendedLanes|n))!==0?0:a}function Mi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function eo(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:Wx(e.type))}function no(e,n){var a=U.p;try{return U.p=e,n()}finally{U.p=a}}var Jn=Math.random().toString(36).slice(2),un="__reactFiber$"+Jn,xn="__reactProps$"+Jn,Wi="__reactContainer$"+Jn,Xs="__reactEvents$"+Jn,xu="__reactListeners$"+Jn,gu="__reactHandles$"+Jn,dl="__reactResources$"+Jn,us="__reactMarker$"+Jn;function io(e){delete e[un],delete e[xn],delete e[Xs],delete e[xu],delete e[gu]}function Ta(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Wi]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=wx(e);e!==null;){if(a=e[un])return a;e=wx(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[un]||e[Wi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function rt(e){var n=e[dl];return n||(n=e[dl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(e){e[us]=!0}var j=new Set,At={};function Ut(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(At[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ee={};function Zt(e){return Gt.call(ee,e)?!0:Gt.call($t,e)?!1:Ft.test(e)?ee[e]=!0:($t[e]=!0,!1)}function ue(e,n,a){if(Zt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Re(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function De(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){if(!e._valueTracker){var n=Pe(e)?"checked":"value";e._valueTracker=Jt(e,n,""+e[n])}}function Te(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Pe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Aa=/[\n"\\]/g;function Ze(e){return e.replace(Aa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Yi(e,n,a,o,u,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ee(n)):e.value!==""+Ee(n)&&(e.value=""+Ee(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?En(e,v,Ee(n)):a!=null?En(e,v,Ee(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ee(T):e.removeAttribute("name")}function Ke(e,n,a,o,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(e);return}a=a!=null?""+Ee(a):"",n=n!=null?""+Ee(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),qe(e)}function En(e,n,a){n==="number"&&bn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ee(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Tn(e,n,a){if(n!=null&&(n=""+Ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ee(a):""}function Cn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ee(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),qe(e)}function Ni(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _p(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||qi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function vp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&_p(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&_p(e,f,n[f])}function _u(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(e){return _v.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var vu=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Ws=null;function yp(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Yi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ze(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(s(90));Yi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Te(o)}break t;case"textarea":Tn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gn(e,!!a.multiple,n,!1)}}}var Mu=!1;function Mp(e,n,a){if(Mu)return e(n,a);Mu=!0;try{var o=e(n);return o}finally{if(Mu=!1,(ks!==null||Ws!==null)&&(ec(),ks&&(n=ks,e=Ws,Ws=ks=null,yp(n),e)))for(n=0;n<e.length;n++)yp(e[n])}}function ao(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Zi)try{var so={};Object.defineProperty(so,"passive",{get:function(){Su=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Su=!1}var Ra=null,bu=null,ml=null;function Sp(){if(ml)return ml;var e,n=bu,a=n.length,o,u="value"in Ra?Ra.value:Ra.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return ml=u.slice(e,1<o?1-o:void 0)}function xl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function bp(){return!1}function Vn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?gl:bp,this.isPropagationStopped=bp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Vn(fs),ro=x({},fs,{view:0,detail:0}),vv=Vn(ro),Eu,Tu,oo,vl=x({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Eu=e.screenX-oo.screenX,Tu=e.screenY-oo.screenY):Tu=Eu=0,oo=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:Tu}}),Ep=Vn(vl),yv=x({},vl,{dataTransfer:0}),Mv=Vn(yv),Sv=x({},ro,{relatedTarget:0}),Au=Vn(Sv),bv=x({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=Vn(bv),Tv=x({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Av=Vn(Tv),Rv=x({},fs,{data:0}),Tp=Vn(Rv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Dv[e])?!!n[e]:!1}function Ru(){return Uv}var Lv=x({},ro,{key:function(e){if(e.key){var n=Cv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nv=Vn(Lv),Ov=x({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=Vn(Ov),Pv=x({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),zv=Vn(Pv),Bv=x({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=Vn(Bv),Iv=x({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=Vn(Iv),Gv=x({},fs,{newState:0,oldState:0}),Vv=Vn(Gv),Xv=[9,13,27,32],Cu=Zi&&"CompositionEvent"in window,lo=null;Zi&&"documentMode"in document&&(lo=document.documentMode);var kv=Zi&&"TextEvent"in window&&!lo,Rp=Zi&&(!Cu||lo&&8<lo&&11>=lo),Cp=" ",wp=!1;function Dp(e,n){switch(e){case"keyup":return Xv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Wv(e,n){switch(e){case"compositionend":return Up(n);case"keypress":return n.which!==32?null:(wp=!0,Cp);case"textInput":return e=n.data,e===Cp&&wp?null:e;default:return null}}function Yv(e,n){if(Ys)return e==="compositionend"||!Cu&&Dp(e,n)?(e=Sp(),ml=bu=Ra=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rp&&n.locale!=="ko"?null:n.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!qv[e.type]:n==="textarea"}function Np(e,n,a,o){ks?Ws?Ws.push(o):Ws=[o]:ks=o,n=lc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var co=null,uo=null;function jv(e){mx(e,0)}function yl(e){var n=Y(e);if(Te(n))return e}function Op(e,n){if(e==="change")return n}var Pp=!1;if(Zi){var wu;if(Zi){var Du="oninput"in document;if(!Du){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Du=typeof zp.oninput=="function"}wu=Du}else wu=!1;Pp=wu&&(!document.documentMode||9<document.documentMode)}function Bp(){co&&(co.detachEvent("onpropertychange",Fp),uo=co=null)}function Fp(e){if(e.propertyName==="value"&&yl(uo)){var n=[];Np(n,uo,e,yu(e)),Mp(jv,n)}}function Zv(e,n,a){e==="focusin"?(Bp(),co=n,uo=a,co.attachEvent("onpropertychange",Fp)):e==="focusout"&&Bp()}function Kv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(uo)}function Qv(e,n){if(e==="click")return yl(n)}function Jv(e,n){if(e==="input"||e==="change")return yl(n)}function $v(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:$v;function fo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Gt.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hp(e,n){var a=Ip(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ip(a)}}function Gp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=bn(e.document)}return n}function Uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ty=Zi&&"documentMode"in document&&11>=document.documentMode,qs=null,Lu=null,ho=null,Nu=!1;function Xp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||qs==null||qs!==bn(o)||(o=qs,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=lc(Lu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=qs)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var js={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Ou={},kp={};Zi&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function ds(e){if(Ou[e])return Ou[e];if(!js[e])return e;var n=js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return Ou[e]=n[a];return e}var Wp=ds("animationend"),Yp=ds("animationiteration"),qp=ds("animationstart"),ey=ds("transitionrun"),ny=ds("transitionstart"),iy=ds("transitioncancel"),jp=ds("transitionend"),Zp=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Si(e,n){Zp.set(e,n),Ut(n,[e])}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Zs=0,zu=0;function Sl(){for(var e=Zs,n=zu=Zs=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Kp(a,u,f)}}function bl(e,n,a,o){fi[Zs++]=e,fi[Zs++]=n,fi[Zs++]=a,fi[Zs++]=o,zu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Bu(e,n,a,o){return bl(e,n,a,o),El(e)}function ps(e,n){return bl(e,null,null,n),El(e)}function Kp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Vt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function El(e){if(50<Po)throw Po=0,qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ks={};function ay(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new ay(e,n,a,o)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Tl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Fu(e)&&(v=1);else if(typeof e=="string")v=cM(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ti(31,a,n,u),e.elementType=D,e.lanes=f,e;case A:return ms(a.children,u,f,n);case S:v=8,u|=24;break;case g:return e=ti(12,a,n,u|2),e.elementType=g,e.lanes=f,e;case G:return e=ti(13,a,n,u),e.elementType=G,e.lanes=f,e;case N:return e=ti(19,a,n,u),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:v=10;break t;case O:v=9;break t;case z:v=11;break t;case B:v=14;break t;case K:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ms(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Iu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function Jp(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Hu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var $p=new WeakMap;function hi(e,n){if(typeof e=="object"&&e!==null){var a=$p.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ze(n)},$p.set(e,n),n)}return{value:e,source:n,stack:ze(n)}}var Qs=[],Js=0,Al=null,po=0,di=[],pi=0,Ca=null,Oi=1,Pi="";function Qi(e,n){Qs[Js++]=po,Qs[Js++]=Al,Al=e,po=n}function tm(e,n,a){di[pi++]=Oi,di[pi++]=Pi,di[pi++]=Ca,Ca=e;var o=Oi;e=Pi;var u=32-Vt(o)-1;o&=~(1<<u),a+=1;var f=32-Vt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Oi=1<<32-Vt(n)+u|a<<u|o,Pi=f+e}else Oi=1<<f|a<<u|o,Pi=e}function Gu(e){e.return!==null&&(Qi(e,1),tm(e,1,0))}function Vu(e){for(;e===Al;)Al=Qs[--Js],Qs[Js]=null,po=Qs[--Js],Qs[Js]=null;for(;e===Ca;)Ca=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null,Oi=di[--pi],di[pi]=null}function em(e,n){di[pi++]=Oi,di[pi++]=Pi,di[pi++]=Ca,Oi=n.id,Pi=n.overflow,Ca=e}var wn=null,Qe=null,Ae=!1,wa=null,mi=!1,Xu=Error(s(519));function Da(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(hi(n,e)),Xu}function nm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[xn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Bo.length;a++)ve(Bo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Ke(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||vx(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Da(e,!0)}function im(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:wn=wn.return}}function $s(e){if(e!==wn)return!1;if(!Ae)return im(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lh(e.type,e.memoizedProps)),a=!a),a&&Qe&&Da(e),im(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=Cx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=Cx(e)}else n===27?(n=Qe,ka(e.type)?(e=dh,dh=null,Qe=e):Qe=n):Qe=wn?gi(e.stateNode.nextSibling):null;return!0}function xs(){Qe=wn=null,Ae=!1}function ku(){var e=wa;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),wa=null),e}function mo(e){wa===null?wa=[e]:wa.push(e)}var Wu=P(null),gs=null,Ji=null;function Ua(e,n,a){yt(Wu,n._currentValue),n._currentValue=a}function $i(e){e._currentValue=Wu.current,at(Wu)}function Yu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Yu(f.return,a,e),o||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Yu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function tr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=u.type;$n(u.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(u===ft.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}u=u.return}e!==null&&qu(n,e,a,o),n.flags|=262144}function Rl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){gs=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return am(gs,e)}function Cl(e,n){return gs===null&&_s(e),am(e,n)}function am(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(s(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var sy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ry=r.unstable_scheduleCallback,oy=r.unstable_NormalPriority,fn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new sy,data:new Map,refCount:0}}function xo(e){e.refCount--,e.refCount===0&&ry(oy,function(){e.controller.abort()})}var go=null,Zu=0,er=0,nr=null;function ly(e,n){if(go===null){var a=go=[];Zu=0,er=$f(),nr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(sm,sm),n}function sm(){if(--Zu===0&&go!==null){nr!==null&&(nr.status="fulfilled");var e=go;go=null,er=0,nr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function cy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var rm=F.S;F.S=function(e,n){X0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ly(e,n),rm!==null&&rm(e,n)};var vs=P(null);function Ku(){var e=vs.current;return e!==null?e:je.pooledCache}function wl(e,n){n===null?yt(vs,vs.current):yt(vs,n.pool)}function om(){var e=Ku();return e===null?null:{parent:fn._currentValue,pool:e}}var ir=Error(s(460)),Qu=Error(s(474)),Dl=Error(s(542)),Ul={then:function(){}};function lm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fm(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fm(e),e}throw Ms=n,ir}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ms=a,ir):a}}var Ms=null;function um(){if(Ms===null)throw Error(s(459));var e=Ms;return Ms=null,e}function fm(e){if(e===ir||e===Dl)throw Error(s(483))}var ar=null,_o=0;function Ll(e){var n=_o;return _o+=1,ar===null&&(ar=[]),cm(ar,e,n)}function vo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Nl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function hm(e){function n(q,k){if(e){var J=q.deletions;J===null?(q.deletions=[k],q.flags|=16):J.push(k)}}function a(q,k){if(!e)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=Ki(q,k),q.index=0,q.sibling=null,q}function f(q,k,J){return q.index=J,e?(J=q.alternate,J!==null?(J=J.index,J<k?(q.flags|=67108866,k):J):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function v(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,k,J,mt){return k===null||k.tag!==6?(k=Iu(J,q.mode,mt),k.return=q,k):(k=u(k,J),k.return=q,k)}function I(q,k,J,mt){var Kt=J.type;return Kt===A?ht(q,k,J.props.children,mt,J.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===K&&ys(Kt)===k.type)?(k=u(k,J.props),vo(k,J),k.return=q,k):(k=Tl(J.type,J.key,J.props,null,q.mode,mt),vo(k,J),k.return=q,k)}function tt(q,k,J,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Hu(J,q.mode,mt),k.return=q,k):(k=u(k,J.children||[]),k.return=q,k)}function ht(q,k,J,mt,Kt){return k===null||k.tag!==7?(k=ms(J,q.mode,mt,Kt),k.return=q,k):(k=u(k,J),k.return=q,k)}function gt(q,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Iu(""+k,q.mode,J),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=Tl(k.type,k.key,k.props,null,q.mode,J),vo(J,k),J.return=q,J;case b:return k=Hu(k,q.mode,J),k.return=q,k;case K:return k=ys(k),gt(q,k,J)}if(ct(k)||nt(k))return k=ms(k,q.mode,J,null),k.return=q,k;if(typeof k.then=="function")return gt(q,Ll(k),J);if(k.$$typeof===w)return gt(q,Cl(q,k),J);Nl(q,k)}return null}function it(q,k,J,mt){var Kt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Kt!==null?null:T(q,k,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Kt?I(q,k,J,mt):null;case b:return J.key===Kt?tt(q,k,J,mt):null;case K:return J=ys(J),it(q,k,J,mt)}if(ct(J)||nt(J))return Kt!==null?null:ht(q,k,J,mt,null);if(typeof J.then=="function")return it(q,k,Ll(J),mt);if(J.$$typeof===w)return it(q,k,Cl(q,J),mt);Nl(q,J)}return null}function ot(q,k,J,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get(J)||null,T(k,q,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return q=q.get(mt.key===null?J:mt.key)||null,I(k,q,mt,Kt);case b:return q=q.get(mt.key===null?J:mt.key)||null,tt(k,q,mt,Kt);case K:return mt=ys(mt),ot(q,k,J,mt,Kt)}if(ct(mt)||nt(mt))return q=q.get(J)||null,ht(k,q,mt,Kt,null);if(typeof mt.then=="function")return ot(q,k,J,Ll(mt),Kt);if(mt.$$typeof===w)return ot(q,k,J,Cl(k,mt),Kt);Nl(k,mt)}return null}function It(q,k,J,mt){for(var Kt=null,Ue=null,Xt=k,fe=k=0,Se=null;Xt!==null&&fe<J.length;fe++){Xt.index>fe?(Se=Xt,Xt=null):Se=Xt.sibling;var Le=it(q,Xt,J[fe],mt);if(Le===null){Xt===null&&(Xt=Se);break}e&&Xt&&Le.alternate===null&&n(q,Xt),k=f(Le,k,fe),Ue===null?Kt=Le:Ue.sibling=Le,Ue=Le,Xt=Se}if(fe===J.length)return a(q,Xt),Ae&&Qi(q,fe),Kt;if(Xt===null){for(;fe<J.length;fe++)Xt=gt(q,J[fe],mt),Xt!==null&&(k=f(Xt,k,fe),Ue===null?Kt=Xt:Ue.sibling=Xt,Ue=Xt);return Ae&&Qi(q,fe),Kt}for(Xt=o(Xt);fe<J.length;fe++)Se=ot(Xt,q,fe,J[fe],mt),Se!==null&&(e&&Se.alternate!==null&&Xt.delete(Se.key===null?fe:Se.key),k=f(Se,k,fe),Ue===null?Kt=Se:Ue.sibling=Se,Ue=Se);return e&&Xt.forEach(function(Za){return n(q,Za)}),Ae&&Qi(q,fe),Kt}function te(q,k,J,mt){if(J==null)throw Error(s(151));for(var Kt=null,Ue=null,Xt=k,fe=k=0,Se=null,Le=J.next();Xt!==null&&!Le.done;fe++,Le=J.next()){Xt.index>fe?(Se=Xt,Xt=null):Se=Xt.sibling;var Za=it(q,Xt,Le.value,mt);if(Za===null){Xt===null&&(Xt=Se);break}e&&Xt&&Za.alternate===null&&n(q,Xt),k=f(Za,k,fe),Ue===null?Kt=Za:Ue.sibling=Za,Ue=Za,Xt=Se}if(Le.done)return a(q,Xt),Ae&&Qi(q,fe),Kt;if(Xt===null){for(;!Le.done;fe++,Le=J.next())Le=gt(q,Le.value,mt),Le!==null&&(k=f(Le,k,fe),Ue===null?Kt=Le:Ue.sibling=Le,Ue=Le);return Ae&&Qi(q,fe),Kt}for(Xt=o(Xt);!Le.done;fe++,Le=J.next())Le=ot(Xt,q,fe,Le.value,mt),Le!==null&&(e&&Le.alternate!==null&&Xt.delete(Le.key===null?fe:Le.key),k=f(Le,k,fe),Ue===null?Kt=Le:Ue.sibling=Le,Ue=Le);return e&&Xt.forEach(function(yM){return n(q,yM)}),Ae&&Qi(q,fe),Kt}function Ve(q,k,J,mt){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Kt=J.key;k!==null;){if(k.key===Kt){if(Kt=J.type,Kt===A){if(k.tag===7){a(q,k.sibling),mt=u(k,J.props.children),mt.return=q,q=mt;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===K&&ys(Kt)===k.type){a(q,k.sibling),mt=u(k,J.props),vo(mt,J),mt.return=q,q=mt;break t}a(q,k);break}else n(q,k);k=k.sibling}J.type===A?(mt=ms(J.props.children,q.mode,mt,J.key),mt.return=q,q=mt):(mt=Tl(J.type,J.key,J.props,null,q.mode,mt),vo(mt,J),mt.return=q,q=mt)}return v(q);case b:t:{for(Kt=J.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(q,k.sibling),mt=u(k,J.children||[]),mt.return=q,q=mt;break t}else{a(q,k);break}else n(q,k);k=k.sibling}mt=Hu(J,q.mode,mt),mt.return=q,q=mt}return v(q);case K:return J=ys(J),Ve(q,k,J,mt)}if(ct(J))return It(q,k,J,mt);if(nt(J)){if(Kt=nt(J),typeof Kt!="function")throw Error(s(150));return J=Kt.call(J),te(q,k,J,mt)}if(typeof J.then=="function")return Ve(q,k,Ll(J),mt);if(J.$$typeof===w)return Ve(q,k,Cl(q,J),mt);Nl(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(q,k.sibling),mt=u(k,J),mt.return=q,q=mt):(a(q,k),mt=Iu(J,q.mode,mt),mt.return=q,q=mt),v(q)):a(q,k)}return function(q,k,J,mt){try{_o=0;var Kt=Ve(q,k,J,mt);return ar=null,Kt}catch(Xt){if(Xt===ir||Xt===Dl)throw Xt;var Ue=ti(29,Xt,null,q.mode);return Ue.lanes=mt,Ue.return=q,Ue}}}var Ss=hm(!0),dm=hm(!1),La=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(e),Kp(e,null,a),n}return bl(e,o,n,a),El(e)}function yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$r(e,a)}}function tf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ef=!1;function Mo(){if(ef){var e=nr;if(e!==null)throw e}}function So(e,n,a,o){ef=!1;var u=e.updateQueue;La=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,tt=I.next;I.next=null,v===null?f=tt:v.next=tt,v=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==v&&(T===null?ht.firstBaseUpdate=tt:T.next=tt,ht.lastBaseUpdate=I))}if(f!==null){var gt=u.baseState;v=0,ht=tt=I=null,T=f;do{var it=T.lane&-536870913,ot=it!==T.lane;if(ot?(Me&it)===it:(o&it)===it){it!==0&&it===er&&(ef=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var It=e,te=T;it=n;var Ve=a;switch(te.tag){case 1:if(It=te.payload,typeof It=="function"){gt=It.call(Ve,gt,it);break t}gt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=te.payload,it=typeof It=="function"?It.call(Ve,gt,it):It,it==null)break t;gt=x({},gt,it);break t;case 2:La=!0}}it=T.callback,it!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[it]:ot.push(it))}else ot={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(tt=ht=ot,I=gt):ht=ht.next=ot,v|=it;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ht===null&&(I=gt),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=gt}}function pm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function mm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)pm(a[e],n)}var sr=P(null),Ol=P(0);function xm(e,n){e=la,yt(Ol,e),yt(sr,n),la=e|n.baseLanes}function nf(){yt(Ol,la),yt(sr,sr.current)}function af(){la=Ol.current,at(sr),at(Ol)}var ei=P(null),xi=null;function Pa(e){var n=e.alternate;yt(ln,ln.current&1),yt(ei,e),xi===null&&(n===null||sr.current!==null||n.memoizedState!==null)&&(xi=e)}function sf(e){yt(ln,ln.current),yt(ei,e),xi===null&&(xi=e)}function gm(e){e.tag===22?(yt(ln,ln.current),yt(ei,e),xi===null&&(xi=e)):za()}function za(){yt(ln,ln.current),yt(ei,ei.current)}function ni(e){at(ei),xi===e&&(xi=null),at(ln)}var ln=P(0);function Pl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fh(a)||hh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,le=null,He=null,hn=null,zl=!1,rr=!1,bs=!1,Bl=0,bo=0,or=null,uy=0;function an(){throw Error(s(321))}function rf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function of(e,n,a,o,u,f){return ta=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?t0:Sf,bs=!1,f=a(o,u),bs=!1,rr&&(f=vm(n,a,o,u)),_m(e),f}function _m(e){F.H=Ao;var n=He!==null&&He.next!==null;if(ta=0,hn=He=le=null,zl=!1,bo=0,or=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&Rl(e)&&(dn=!0))}function vm(e,n,a,o){le=e;var u=0;do{if(rr&&(or=null),bo=0,rr=!1,25<=u)throw Error(s(301));if(u+=1,hn=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=e0,f=n(a,o)}while(rr);return f}function fy(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Eo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(le.flags|=1024),n}function lf(){var e=Bl!==0;return Bl=0,e}function cf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uf(e){if(zl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}zl=!1}ta=0,hn=He=le=null,rr=!1,bo=Bl=0,or=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?le.memoizedState=hn=e:hn=hn.next=e,hn}function cn(){if(He===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=hn===null?le.memoizedState:hn.next;if(n!==null)hn=n,He=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},hn===null?le.memoizedState=hn=e:hn=hn.next=e}return hn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var n=bo;return bo+=1,or===null&&(or=[]),e=cm(or,e,n),n=le,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?t0:Sf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===w)return Dn(e)}throw Error(s(438,String(e)))}function ff(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function ea(e,n){return typeof n=="function"?n(e):n}function Hl(e){var n=cn();return hf(n,He,e)}function hf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=v=null,I=null,tt=n,ht=!1;do{var gt=tt.lane&-536870913;if(gt!==tt.lane?(Me&gt)===gt:(ta&gt)===gt){var it=tt.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),gt===er&&(ht=!0);else if((ta&it)===it){tt=tt.next,it===er&&(ht=!0);continue}else gt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=gt,v=f):I=I.next=gt,le.lanes|=it,Ia|=it;gt=tt.action,bs&&a(f,gt),f=tt.hasEagerState?tt.eagerState:a(f,gt)}else it={lane:gt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=it,v=f):I=I.next=it,le.lanes|=gt,Ia|=gt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?v=f:I.next=T,!$n(f,e.memoizedState)&&(dn=!0,ht&&(a=nr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function df(e){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);$n(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function ym(e,n,a){var o=le,u=cn(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!$n((He||u).memoizedState,a);if(v&&(u.memoizedState=a,dn=!0),u=u.queue,xf(bm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,lr(9,{destroy:void 0},Sm.bind(null,o,u,a,n),null),je===null)throw Error(s(349));f||(ta&127)!==0||Mm(o,n,a)}return a}function Mm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Fl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Sm(e,n,a,o){n.value=a,n.getSnapshot=o,Em(n)&&Tm(e)}function bm(e,n,a){return a(function(){Em(n)&&Tm(e)})}function Em(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Tm(e){var n=ps(e,2);n!==null&&qn(n,e,2)}function pf(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),bs){qt(!0);try{a()}finally{qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},n}function Am(e,n,a,o){return e.baseState=a,hf(e,He,typeof o=="function"?o:ea)}function hy(e,n,a,o,u){if(Xl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Rm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=F.T,v={};F.T=v;try{var T=a(u,o),I=F.S;I!==null&&I(v,T),Cm(e,n,T)}catch(tt){mf(e,n,tt)}finally{f!==null&&v.types!==null&&(f.types=v.types),F.T=f}}else try{f=a(u,o),Cm(e,n,f)}catch(tt){mf(e,n,tt)}}function Cm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){wm(e,n,o)},function(o){return mf(e,n,o)}):wm(e,n,a)}function wm(e,n,a){n.status="fulfilled",n.value=a,Dm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Rm(e,a)))}function mf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Dm(n),n=n.next;while(n!==o)}e.action=null}function Dm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Um(e,n){return n}function Lm(e,n){if(Ae){var a=je.formState;if(a!==null){t:{var o=le;if(Ae){if(Qe){e:{for(var u=Qe,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=gi(u.nextSibling),o=u.data==="F!";break t}}Da(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Um,lastRenderedState:n},a.queue=o,a=Qm.bind(null,le,o),o.dispatch=a,o=pf(!1),f=Mf.bind(null,le,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=hy.bind(null,le,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Nm(e){var n=cn();return Om(n,He,e)}function Om(e,n,a){if(n=hf(e,n,Um)[0],e=Hl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(v){throw v===ir?Dl:v}else o=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,lr(9,{destroy:void 0},dy.bind(null,u,a),null)),[o,f,e]}function dy(e,n){e.action=n}function Pm(e){var n=cn(),a=He;if(a!==null)return Om(n,a,e);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function lr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Fl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function zm(){return cn().memoizedState}function Gl(e,n,a,o){var u=In();le.flags|=e,u.memoizedState=lr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(e,n,a,o){var u=cn();o=o===void 0?null:o;var f=u.memoizedState.inst;He!==null&&o!==null&&rf(o,He.memoizedState.deps)?u.memoizedState=lr(n,f,a,o):(le.flags|=e,u.memoizedState=lr(1|n,f,a,o))}function Bm(e,n){Gl(8390656,8,e,n)}function xf(e,n){Vl(2048,8,e,n)}function py(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Fl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Fm(e){var n=cn().memoizedState;return py({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Im(e,n){return Vl(4,2,e,n)}function Hm(e,n){return Vl(4,4,e,n)}function Gm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vm(e,n,a){a=a!=null?a.concat([e]):null,Vl(4,4,Gm.bind(null,n,e),a)}function gf(){}function Xm(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function km(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rf(n,o[1]))return o[0];if(o=e(),bs){qt(!0);try{e()}finally{qt(!1)}}return a.memoizedState=[o,n],o}function _f(e,n,a){return a===void 0||(ta&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=W0(),le.lanes|=e,Ia|=e,a)}function Wm(e,n,a,o){return $n(a,n)?a:sr.current!==null?(e=_f(e,a,o),$n(e,n)||(dn=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(Me&261930)===0?(dn=!0,e.memoizedState=a):(e=W0(),le.lanes|=e,Ia|=e,n)}function Ym(e,n,a,o,u){var f=U.p;U.p=f!==0&&8>f?f:8;var v=F.T,T={};F.T=T,Mf(e,!1,n,a);try{var I=u(),tt=F.S;if(tt!==null&&tt(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=cy(I,o);To(e,n,ht,si(e))}else To(e,n,o,si(e))}catch(gt){To(e,n,{then:function(){},status:"rejected",reason:gt},si())}finally{U.p=f,v!==null&&T.types!==null&&(v.types=T.types),F.T=v}}function my(){}function vf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=qm(e).queue;Ym(e,u,n,W,a===null?my:function(){return jm(e),a(o)})}function qm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function jm(e){var n=qm(e);n.next===null&&(n=e.alternate.memoizedState),To(e,n.next.queue,{},si())}function yf(){return Dn(Vo)}function Zm(){return cn().memoizedState}function Km(){return cn().memoizedState}function xy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Na(a);var o=Oa(n,e,a);o!==null&&(qn(o,n,a),yo(o,n,a)),n={cache:ju()},e.payload=n;return}n=n.return}}function gy(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(e)?Jm(n,a):(a=Bu(e,n,a,o),a!==null&&(qn(a,e,o),$m(a,n,o)))}function Qm(e,n,a){var o=si();To(e,n,a,o)}function To(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(e))Jm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,$n(T,v))return bl(e,n,u,0),je===null&&Sl(),!1}catch{}if(a=Bu(e,n,u,o),a!==null)return qn(a,e,o),$m(a,n,o),!0}return!1}function Mf(e,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xl(e)){if(n)throw Error(s(479))}else n=Bu(e,a,o,2),n!==null&&qn(n,e,2)}function Xl(e){var n=e.alternate;return e===le||n!==null&&n===le}function Jm(e,n){rr=zl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function $m(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$r(e,a)}}var Ao={readContext:Dn,use:Il,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Ao.useEffectEvent=an;var t0={readContext:Dn,use:Il,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:Bm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Gl(4194308,4,Gm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Gl(4194308,4,e,n)},useInsertionEffect:function(e,n){Gl(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(bs){qt(!0);try{e()}finally{qt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(bs){qt(!0);try{a(n)}finally{qt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=gy.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=pf(e);var n=e.queue,a=Qm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,n){var a=In();return _f(a,e,n)},useTransition:function(){var e=pf(!1);return e=Ym.bind(null,le,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=In();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(Me&127)!==0||Mm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Bm(bm.bind(null,o,f,e),[e]),o.flags|=2048,lr(9,{destroy:void 0},Sm.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=je.identifierPrefix;if(Ae){var a=Pi,o=Oi;a=(o&~(1<<32-Vt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=uy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:yf,useFormState:Lm,useActionState:Lm,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:ff,useCacheRefresh:function(){return In().memoizedState=xy.bind(null,le)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Dn,use:Il,useCallback:Xm,useContext:Dn,useEffect:xf,useImperativeHandle:Vm,useInsertionEffect:Im,useLayoutEffect:Hm,useMemo:km,useReducer:Hl,useRef:zm,useState:function(){return Hl(ea)},useDebugValue:gf,useDeferredValue:function(e,n){var a=cn();return Wm(a,He.memoizedState,e,n)},useTransition:function(){var e=Hl(ea)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:ym,useId:Zm,useHostTransitionStatus:yf,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var a=cn();return Am(a,He,e,n)},useMemoCache:ff,useCacheRefresh:Km};Sf.useEffectEvent=Fm;var e0={readContext:Dn,use:Il,useCallback:Xm,useContext:Dn,useEffect:xf,useImperativeHandle:Vm,useInsertionEffect:Im,useLayoutEffect:Hm,useMemo:km,useReducer:df,useRef:zm,useState:function(){return df(ea)},useDebugValue:gf,useDeferredValue:function(e,n){var a=cn();return He===null?_f(a,e,n):Wm(a,He.memoizedState,e,n)},useTransition:function(){var e=df(ea)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:ym,useId:Zm,useHostTransitionStatus:yf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,n){var a=cn();return He!==null?Am(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:Km};e0.useEffectEvent=Fm;function bf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Na(o);u.payload=n,a!=null&&(u.callback=a),n=Oa(e,u,o),n!==null&&(qn(n,e,o),yo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Na(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Oa(e,u,o),n!==null&&(qn(n,e,o),yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Na(a);o.tag=2,n!=null&&(o.callback=n),n=Oa(e,o,a),n!==null&&(qn(n,e,a),yo(n,e,a))}};function n0(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,f):!0}function i0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ef.enqueueReplaceState(n,n.state,null)}function Es(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function a0(e){Ml(e)}function s0(e){console.error(e)}function r0(e){Ml(e)}function kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function o0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(e,n)},a}function l0(e){return e=Na(e),e.tag=3,e}function c0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){o0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){o0(n,a,o),typeof u!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function _y(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&tr(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?nc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(e,o,u)),!1}throw Error(s(435,a.tag))}return Kf(e,o,u),nc(),!1}if(Ae)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Xu&&(e=Error(s(422),{cause:o}),mo(hi(e,a)))):(o!==Xu&&(n=Error(s(423),{cause:o}),mo(hi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=hi(o,a),u=Tf(e.stateNode,o,u),tf(e,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:o});if(f=hi(f,a),Oo===null?Oo=[f]:Oo.push(f),sn!==4&&(sn=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Tf(a.stateNode,o,e),tf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ha===null||!Ha.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=l0(u),c0(u,e,a,o),tf(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(s(461)),dn=!1;function Un(e,n,a,o){n.child=e===null?dm(n,null,a,o):Ss(n,e.child,a,o)}function u0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return _s(n),o=of(e,n,a,v,f,u),T=lf(),e!==null&&!dn?(cf(e,n,u),na(e,n,u)):(Ae&&T&&Gu(n),n.flags|=1,Un(e,n,o,u),n.child)}function f0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,h0(e,n,f,o,u)):(e=Tl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Of(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(v,o)&&e.ref===n.ref)return na(e,n,u)}return n.flags|=1,e=Ki(f,o),e.ref=n.ref,e.return=n,n.child=e}function h0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(fo(f,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=f,Of(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,na(e,n,u)}return Rf(e,n,a,o,u)}function d0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return p0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(n,f!==null?f.cachePool:null),f!==null?xm(n,f):nf(),gm(n);else return o=n.lanes=536870912,p0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(wl(n,f.cachePool),xm(n,f),za(),n.memoizedState=null):(e!==null&&wl(n,null),nf(),za());return Un(e,n,u,a),n.child}function Ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function p0(e,n,a,o,u){var f=Ku();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&wl(n,null),nf(),gm(n),e!==null&&tr(e,n,o,!0),n.childLanes=u,null}function Wl(e,n){return n=ql({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function m0(e,n,a){return Ss(n,e.child,null,a),e=Wl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function vy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=Wl(n,o),n.lanes=536870912,Ro(null,e);if(sf(n),(e=Qe)?(e=Rx(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Jp(e),a.return=n,n.child=a,wn=n,Qe=null)):e=null,e===null)throw Da(n);return n.lanes=536870912,null}return Wl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=m0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||tr(e,n,a,!1),u=(a&e.childLanes)!==0,dn||u){if(o=je,o!==null&&(v=to(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ps(e,v),qn(o,e,v),Af;nc(),n=m0(e,n,a)}else e=f.treeContext,Qe=gi(v.nextSibling),wn=n,Ae=!0,wa=null,mi=!1,e!==null&&em(n,e),n=Wl(n,o),n.flags|=4096;return n}return e=Ki(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Rf(e,n,a,o,u){return _s(n),a=of(e,n,a,o,void 0,u),o=lf(),e!==null&&!dn?(cf(e,n,u),na(e,n,u)):(Ae&&o&&Gu(n),n.flags|=1,Un(e,n,a,u),n.child)}function x0(e,n,a,o,u,f){return _s(n),n.updateQueue=null,a=vm(n,o,a,u),_m(e),o=lf(),e!==null&&!dn?(cf(e,n,f),na(e,n,f)):(Ae&&o&&Gu(n),n.flags|=1,Un(e,n,a,f),n.child)}function g0(e,n,a,o,u){if(_s(n),n.stateNode===null){var f=Ks,v=a.contextType;typeof v=="object"&&v!==null&&(f=Dn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ju(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Dn(v):Ks,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(bf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Ef.enqueueReplaceState(f,f.state,null),So(n,o,f,u),Mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=Es(a,T);f.props=I;var tt=f.context,ht=a.contextType;v=Ks,typeof ht=="object"&&ht!==null&&(v=Dn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==v)&&i0(n,f,o,v),La=!1;var it=n.memoizedState;f.state=it,So(n,o,f,u),Mo(),tt=n.memoizedState,T||it!==tt||La?(typeof gt=="function"&&(bf(n,a,gt,o),tt=n.memoizedState),(I=La||n0(n,a,I,o,it,tt,v))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=v,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,$u(e,n),v=n.memoizedProps,ht=Es(a,v),f.props=ht,gt=n.pendingProps,it=f.context,tt=a.contextType,I=Ks,typeof tt=="object"&&tt!==null&&(I=Dn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==gt||it!==I)&&i0(n,f,o,I),La=!1,it=n.memoizedState,f.state=it,So(n,o,f,u),Mo();var ot=n.memoizedState;v!==gt||it!==ot||La||e!==null&&e.dependencies!==null&&Rl(e.dependencies)?(typeof T=="function"&&(bf(n,a,T,o),ot=n.memoizedState),(ht=La||n0(n,a,ht,o,it,ot,I)||e!==null&&e.dependencies!==null&&Rl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=I,o=ht):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Yl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ss(n,e.child,null,u),n.child=Ss(n,null,a,u)):Un(e,n,a,u),n.memoizedState=f.state,e=n.child):e=na(e,n,u),e}function _0(e,n,a,o){return xs(),n.flags|=256,Un(e,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:om()}}function Df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function v0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Pa(n):za(),(e=Qe)?(e=Rx(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Jp(e),a.return=n,n.child=a,wn=n,Qe=null)):e=null,e===null)throw Da(n);return hh(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(za(),u=n.mode,T=ql({mode:"hidden",children:T},u),o=ms(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=wf(a),o.childLanes=Df(e,v,a),n.memoizedState=Cf,Ro(null,o)):(Pa(n),Uf(n,T))}var I=e.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(Pa(n),n.flags&=-257,n=Lf(e,n,a)):n.memoizedState!==null?(za(),n.child=e.child,n.flags|=128,n=null):(za(),T=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),T=ms(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,Ss(n,e.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Df(e,v,a),n.memoizedState=Cf,n=Ro(null,o));else if(Pa(n),hh(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var tt=v.dgst;v=tt,o=Error(s(419)),o.stack="",o.digest=v,mo({value:o,source:null,stack:null}),n=Lf(e,n,a)}else if(dn||tr(e,n,a,!1),v=(a&e.childLanes)!==0,dn||v){if(v=je,v!==null&&(o=to(v,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,ps(e,o),qn(v,e,o),Af;fh(T)||nc(),n=Lf(e,n,a)}else fh(T)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Qe=gi(T.nextSibling),wn=n,Ae=!0,wa=null,mi=!1,e!==null&&em(n,e),n=Uf(n,o.children),n.flags|=4096);return n}return u?(za(),T=o.fallback,u=n.mode,I=e.child,tt=I.sibling,o=Ki(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,tt!==null?T=Ki(tt,T):(T=ms(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,Ro(null,o),o=n.child,T=e.child.memoizedState,T===null?T=wf(a):(u=T.cachePool,u!==null?(I=fn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=om(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=Df(e,v,a),n.memoizedState=Cf,Ro(e.child,o)):(Pa(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Uf(e,n){return n=ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ql(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Lf(e,n,a){return Ss(n,e.child,null,a),e=Uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function y0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Yu(e.return,n,a)}function Nf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function M0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=ln.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,yt(ln,v),Un(e,n,o,a),o=Ae?po:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&y0(e,a,n);else if(e.tag===19)y0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Pl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Pl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nf(n,!0,a,null,f,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(tr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rl(e)))}function yy(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Ua(n,fn,e.memoizedState.cache),xs();break;case 27:case 5:kt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?v0(e,n,a):(Pa(n),e=na(e,n,a),e!==null?e.sibling:null);Pa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(tr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return M0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(ln,ln.current),o)break;return null;case 22:return n.lanes=0,d0(e,n,a,n.pendingProps);case 24:Ua(n,fn,e.memoizedState.cache)}return na(e,n,a)}function S0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Of(e,a)&&(n.flags&128)===0)return dn=!1,yy(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Ae&&(n.flags&1048576)!==0&&tm(n,po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")Fu(e)?(o=Es(e,o),n.tag=1,n=g0(null,n,e,o,a)):(n.tag=0,n=Rf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===z){n.tag=11,n=u0(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=f0(null,n,e,o,a);break t}}throw n=pt(e)||e,Error(s(306,n,""))}}return n;case 0:return Rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Es(o,n.pendingProps),g0(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,$u(e,n),So(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ua(n,fn,o),o!==f.cache&&qu(n,[fn],a,!0),Mo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=_0(e,n,o,a);break t}else if(o!==u){u=hi(Error(s(424)),n),mo(u),n=_0(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=gi(e.firstChild),wn=n,Ae=!0,wa=null,mi=!0,a=dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),o===u){n=na(e,n,a);break t}Un(e,n,o,a)}n=n.child}return n;case 26:return Yl(e,n),e===null?(a=Nx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=cc(st.current).createElement(a),o[un]=n,o[xn]=e,Ln(o,a,e),et(o),n.stateNode=o):n.memoizedState=Nx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&Ae&&(o=n.stateNode=Dx(n.type,n.pendingProps,st.current),wn=n,mi=!0,u=Qe,ka(n.type)?(dh=u,Qe=gi(o.firstChild)):Qe=u),Un(e,n,n.pendingProps.children,a),Yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Qe)&&(o=Ky(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,wn=n,Qe=gi(o.firstChild),mi=!1,u=!0):u=!1),u||Da(n)),kt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,lh(u,f)?o=null:v!==null&&lh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=of(e,n,fy,null,null,a),Vo._currentValue=u),Yl(e,n),Un(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Qe)&&(a=Qy(a,n.pendingProps,mi),a!==null?(n.stateNode=a,wn=n,Qe=null,e=!0):e=!1),e||Da(n)),null;case 13:return v0(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ss(n,null,o,a):Un(e,n,o,a),n.child;case 11:return u0(e,n,n.type,n.pendingProps,a);case 7:return Un(e,n,n.pendingProps,a),n.child;case 8:return Un(e,n,n.pendingProps.children,a),n.child;case 12:return Un(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),Un(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,_s(n),u=Dn(u),o=o(u),n.flags|=1,Un(e,n,o,a),n.child;case 14:return f0(e,n,n.type,n.pendingProps,a);case 15:return h0(e,n,n.type,n.pendingProps,a);case 19:return M0(e,n,a);case 31:return vy(e,n,a);case 22:return d0(e,n,a,n.pendingProps);case 24:return _s(n),o=Dn(fn),e===null?(u=Ku(),u===null&&(u=je,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ju(n),Ua(n,fn,u)):((e.lanes&a)!==0&&($u(e,n),So(n,null,null,a),Mo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,fn,o)):(o=f.cache,Ua(n,fn,o),o!==u.cache&&qu(n,[fn],a,!0))),Un(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(e){e.flags|=4}function Pf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Z0())e.flags|=8192;else throw Ms=Ul,Qu}else e.flags&=-16777217}function b0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fx(n))if(Z0())e.flags|=8192;else throw Ms=Ul,Qu}function jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,hr|=n)}function Co(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function My(e,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(fn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($s(n)?ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ku())),Je(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ia(n),f!==null?(Je(n),b0(n,f)):(Je(n),Pf(n,u,null,o,a))):f?f!==e.memoizedState?(ia(n),Je(n),b0(n,f)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ia(n),Je(n),Pf(n,u,e,o,a)),null;case 27:if(ce(n),a=st.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}e=Tt.current,$s(n)?nm(n):(e=Dx(u,o,a),n.stateNode=e,ia(n))}return Je(n),null;case 5:if(ce(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}if(f=Tt.current,$s(n))nm(n);else{var v=cc(st.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[un]=n,f[xn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Ln(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ia(n)}}return Je(n),Pf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=st.current,$s(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=wn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||vx(e.nodeValue,a)),e||Da(n,!0)}else e=cc(e).createTextNode(o),e[un]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=$s(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=$s(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),jl(n,n.updateQueue),Je(n),null);case 4:return Ht(),e===null&&ih(n.stateNode.containerInfo),Je(n),null;case 10:return $i(n.type),Je(n),null;case 19:if(at(ln),o=n.memoizedState,o===null)return Je(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Co(o,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Pl(e),f!==null){for(n.flags|=128,Co(o,!1),e=f.updateQueue,n.updateQueue=e,jl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Qp(a,e),a=a.sibling;return yt(ln,ln.current&1|2),Ae&&Qi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>$l&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304)}else{if(!u)if(e=Pl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,jl(n,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ae)return Je(n),null}else 2*E()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=ln.current,yt(ln,u?a&1|2:a&1),Ae&&Qi(n,o.treeForkCount),e):(Je(n),null);case 22:case 23:return ni(n),af(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&jl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&at(vs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(fn),Je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Sy(e,n){switch(Vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $i(fn),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(ln),null;case 4:return Ht(),null;case 10:return $i(n.type),null;case 22:case 23:return ni(n),af(),e!==null&&at(vs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $i(fn),null;case 25:return null;default:return null}}function E0(e,n){switch(Vu(n),n.tag){case 3:$i(fn),Ht();break;case 26:case 27:case 5:ce(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:at(ln);break;case 10:$i(n.type);break;case 22:case 23:ni(n),af(),e!==null&&at(vs);break;case 24:$i(fn)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(T){Fe(n,n.return,T)}}function Ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var I=a,tt=T;try{tt()}catch(ht){Fe(u,I,ht)}}}o=o.next}while(o!==f)}}catch(ht){Fe(n,n.return,ht)}}function T0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{mm(n,a)}catch(o){Fe(e,e.return,o)}}}function A0(e,n,a){a.props=Es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function Do(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function R0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function zf(e,n,a){try{var o=e.stateNode;ky(o,e.type,a,n),o[xn]=n}catch(u){Fe(e,e.return,u)}}function C0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function Bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||C0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ff(e,n,a),e=e.sibling;e!==null;)Ff(e,n,a),e=e.sibling}function Zl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zl(e,n,a),e=e.sibling;e!==null;)Zl(e,n,a),e=e.sibling}function w0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,o,a),n[un]=e,n[xn]=a}catch(f){Fe(e,e.return,f)}}var aa=!1,pn=!1,If=!1,D0=typeof WeakSet=="function"?WeakSet:Set,An=null;function by(e,n){if(e=e.containerInfo,rh=xc,e=Vp(e),Uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,I=-1,tt=0,ht=0,gt=e,it=null;e:for(;;){for(var ot;gt!==a||u!==0&&gt.nodeType!==3||(T=v+u),gt!==f||o!==0&&gt.nodeType!==3||(I=v+o),gt.nodeType===3&&(v+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)it=gt,gt=ot;for(;;){if(gt===e)break e;if(it===a&&++tt===u&&(T=v),it===f&&++ht===o&&(I=v),(ot=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=ot}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(oh={focusedElem:e,selectionRange:a},xc=!1,An=n;An!==null;)if(n=An,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,An=e;else for(;An!==null;){switch(n=An,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var It=Es(a.type,u);e=o.getSnapshotBeforeUpdate(It,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Fe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)uh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,An=e;break}An=n.return}}function U0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),o&4&&wo(5,a);break;case 1:if(ra(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Fe(a,a.return,v)}else{var u=Es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Fe(a,a.return,v)}}o&64&&T0(a),o&512&&Do(a,a.return);break;case 3:if(ra(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mm(e,n)}catch(v){Fe(a,a.return,v)}}break;case 27:n===null&&o&4&&w0(a);case 26:case 5:ra(e,a),n===null&&o&4&&R0(a),o&512&&Do(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),o&4&&O0(e,a);break;case 13:ra(e,a),o&4&&P0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ly.bind(null,a),Jy(e,a))));break;case 22:if(o=a.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||pn,u=aa;var f=pn;aa=o,(pn=n)&&!f?oa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),aa=u,pn=f}break;case 30:break;default:ra(e,a)}}function L0(e){var n=e.alternate;n!==null&&(e.alternate=null,L0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&io(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Xn=!1;function sa(e,n,a){for(a=a.child;a!==null;)N0(e,n,a),a=a.sibling}function N0(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:pn||zi(a,n),sa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||zi(a,n);var o=$e,u=Xn;ka(a.type)&&($e=a.stateNode,Xn=!1),sa(e,n,a),Io(a.stateNode),$e=o,Xn=u;break;case 5:pn||zi(a,n);case 6:if(o=$e,u=Xn,$e=null,sa(e,n,a),$e=o,Xn=u,$e!==null)if(Xn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:$e!==null&&(Xn?(e=$e,Tx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):Tx($e,a.stateNode));break;case 4:o=$e,u=Xn,$e=a.stateNode.containerInfo,Xn=!0,sa(e,n,a),$e=o,Xn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),pn||Ba(4,a,n),sa(e,n,a);break;case 1:pn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&A0(a,n,o)),sa(e,n,a);break;case 21:sa(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,sa(e,n,a),pn=o;break;default:sa(e,n,a)}}function O0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){Fe(n,n.return,a)}}}function P0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){Fe(n,n.return,a)}}function Ey(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new D0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new D0),n;default:throw Error(s(435,e.tag))}}function Kl(e,n){var a=Ey(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ny.bind(null,e,o);o.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(ka(T.type)){$e=T.stateNode,Xn=!1;break t}break;case 5:$e=T.stateNode,Xn=!1;break t;case 3:case 4:$e=T.stateNode.containerInfo,Xn=!0;break t}T=T.return}if($e===null)throw Error(s(160));N0(f,v,u),$e=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)z0(n,e),n=n.sibling}var bi=null;function z0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Wn(e),o&4&&(Ba(3,e,e.return),wo(3,e),Ba(5,e,e.return));break;case 1:kn(n,e),Wn(e),o&512&&(pn||a===null||zi(a,a.return)),o&64&&aa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(kn(n,e),Wn(e),o&512&&(pn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[us]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Ln(f,o,a),f[un]=e,et(f),o=f;break t;case"link":var v=zx("link","href",u).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;case"meta":if(v=zx("meta","content",u).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[un]=e,et(f),o=f}e.stateNode=o}else Bx(u,e.type,e.stateNode);else e.stateNode=Px(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Bx(u,e.type,e.stateNode):Px(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&zf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Wn(e),o&512&&(pn||a===null||zi(a,a.return)),a!==null&&o&4&&zf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Wn(e),o&512&&(pn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{Ni(u,"")}catch(It){Fe(e,e.return,It)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,zf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(kn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(It){Fe(e,e.return,It)}}break;case 3:if(hc=null,u=bi,bi=uc(n.containerInfo),kn(n,e),bi=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(It){Fe(e,e.return,It)}If&&(If=!1,B0(e));break;case 4:o=bi,bi=uc(e.stateNode.containerInfo),kn(n,e),Wn(e),bi=o;break;case 12:kn(n,e),Wn(e);break;case 31:kn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 13:kn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=aa,ht=pn;if(aa=tt||u,pn=ht||I,kn(n,e),pn=ht,aa=tt,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||aa||pn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=I.stateNode;var gt=I.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(It){Fe(I,I.return,It)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(It){Fe(I,I.return,It)}}}else if(n.tag===18){if(a===null){I=n;try{var ot=I.stateNode;u?Ax(ot,!0):Ax(I.stateNode,!1)}catch(It){Fe(I,I.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(e,a))));break;case 19:kn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 30:break;case 21:break;default:kn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(C0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Bf(e);Zl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ni(v,""),a.flags&=-33);var T=Bf(e);Zl(e,T,v);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=Bf(e);Ff(e,tt,I);break;default:throw Error(s(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function B0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;B0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)U0(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ts(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&A0(n,n.return,a),Ts(n);break;case 27:Io(n.stateNode);case 26:case 5:zi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function oa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),wo(4,f);break;case 1:if(oa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Fe(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)pm(I[u],T)}catch(tt){Fe(o,o.return,tt)}}a&&v&64&&T0(f),Do(f,f.return);break;case 27:w0(f);case 26:case 5:oa(u,f,a),a&&o===null&&v&4&&R0(f),Do(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&v&4&&O0(u,f);break;case 13:oa(u,f,a),a&&v&4&&P0(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),Do(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function Hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&xo(a))}function Gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xo(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)F0(e,n,a,o),n=n.sibling}function F0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),u&2048&&wo(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xo(e)));break;case 12:if(u&2048){Ei(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Fe(n,n.return,I)}}else Ei(e,n,a,o);break;case 31:Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,o):Uo(e,n):f._visibility&2?Ei(e,n,a,o):(f._visibility|=2,cr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(v,n);break;case 24:Ei(e,n,a,o),u&2048&&Gf(n.alternate,n);break;default:Ei(e,n,a,o)}}function cr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,I=o,tt=v.flags;switch(v.tag){case 0:case 11:case 15:cr(f,v,T,I,u),wo(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?cr(f,v,T,I,u):Uo(f,v):(ht._visibility|=2,cr(f,v,T,I,u)),u&&tt&2048&&Hf(v.alternate,v);break;case 24:cr(f,v,T,I,u),u&&tt&2048&&Gf(v.alternate,v);break;default:cr(f,v,T,I,u)}n=n.sibling}}function Uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Uo(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Uo(a,o),u&2048&&Gf(o.alternate,o);break;default:Uo(a,o)}n=n.sibling}}var Lo=8192;function ur(e,n,a){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)I0(e,n,a),e=e.sibling}function I0(e,n,a){switch(e.tag){case 26:ur(e,n,a),e.flags&Lo&&e.memoizedState!==null&&uM(a,bi,e.memoizedState,e.memoizedProps);break;case 5:ur(e,n,a);break;case 3:case 4:var o=bi;bi=uc(e.stateNode.containerInfo),ur(e,n,a),bi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,ur(e,n,a),Lo=o):ur(e,n,a));break;default:ur(e,n,a)}}function H0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];An=o,V0(o,e)}H0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)G0(e),e=e.sibling}function G0(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ql(e)):No(e);break;default:No(e)}}function Ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];An=o,V0(o,e)}H0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}e=e.sibling}}function V0(e,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,An=o;else t:for(a=e;An!==null;){o=An;var u=o.sibling,f=o.return;if(L0(o),o===a){An=null;break t}if(u!==null){u.return=f,An=u;break t}An=f}}}var Ty={getCacheForType:function(e){var n=Dn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Dn(fn).controller.signal}},Ay=typeof WeakMap=="function"?WeakMap:Map,Oe=0,je=null,_e=null,Me=0,Be=0,ii=null,Fa=!1,fr=!1,Vf=!1,la=0,sn=0,Ia=0,As=0,Xf=0,ai=0,hr=0,Oo=null,Yn=null,kf=!1,Jl=0,X0=0,$l=1/0,tc=null,Ha=null,_n=0,Ga=null,dr=null,ca=0,Wf=0,Yf=null,k0=null,Po=0,qf=null;function si(){return(Oe&2)!==0&&Me!==0?Me&-Me:F.T!==null?$f():eo()}function W0(){if(ai===0)if((Me&536870912)===0||Ae){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function qn(e,n,a){(e===je&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(pr(e,0),Va(e,Me,ai,!1)),Nn(e,a),((Oe&2)===0||e!==je)&&(e===je&&((Oe&2)===0&&(As|=a),sn===4&&Va(e,Me,ai,!1)),Bi(e))}function Y0(e,n,a){if((Oe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=o?wy(e,n):Zf(e,n,!0),f=o;do{if(u===0){fr&&!o&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ry(a)){u=Zf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=e;u=Oo;var I=T.current.memoizedState.isDehydrated;if(I&&(pr(T,v).flags|=256),v=Zf(T,v,!1),v!==2){if(Vf&&!I){T.errorRecoveryDisabledLanes|=f,As|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){pr(e,0),Va(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Va(o,n,ai,!Fa);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Jl+300-E(),10<u)){if(Va(o,n,ai,!Fa),_t(o,0,!0)!==0)break t;ca=n,o.timeoutHandle=bx(q0.bind(null,o,a,Yn,tc,kf,n,ai,As,hr,Fa,f,"Throttled",-0,0),u);break t}q0(o,a,Yn,tc,kf,n,ai,As,hr,Fa,f,null,-0,0)}}break}while(!0);Bi(e)}function q0(e,n,a,o,u,f,v,T,I,tt,ht,gt,it,ot){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},I0(n,f,gt);var It=(f&62914560)===f?Jl-E():(f&4194048)===f?X0-E():0;if(It=fM(gt,It),It!==null){ca=f,e.cancelPendingCommit=It(ex.bind(null,e,n,f,a,o,u,v,T,I,ht,gt,null,it,ot)),Va(e,f,v,!tt);return}}ex(e,n,f,a,o,u,v,T,I)}function Ry(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,o){n&=~Xf,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Vt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&hl(e,a,n)}function ec(){return(Oe&6)===0?(zo(0),!1):!0}function jf(){if(_e!==null){if(Be===0)var e=_e.return;else e=_e,Ji=gs=null,uf(e),ar=null,_o=0,e=_e;for(;e!==null;)E0(e.alternate,e),e=e.return;_e=null}}function pr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,qy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,jf(),je=e,_e=a=Ki(e.current,null),Me=n,Be=0,ii=null,Fa=!1,fr=Bt(e,n),Vf=!1,hr=ai=Xf=As=Ia=sn=0,Yn=Oo=null,kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Vt(o),f=1<<u;n|=e[u],o&=~f}return la=n,Sl(),a}function j0(e,n){le=null,F.H=Ao,n===ir||n===Dl?(n=um(),Be=3):n===Qu?(n=um(),Be=4):Be=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,_e===null&&(sn=1,kl(e,hi(n,e.current)))}function Z0(){var e=ei.current;return e===null?!0:(Me&4194048)===Me?xi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===xi:!1}function K0(){var e=F.H;return F.H=Ao,e===null?Ao:e}function Q0(){var e=F.A;return F.A=Ty,e}function nc(){sn=4,Fa||(Me&4194048)!==Me&&ei.current!==null||(fr=!0),(Ia&134217727)===0&&(As&134217727)===0||je===null||Va(je,Me,ai,!1)}function Zf(e,n,a){var o=Oe;Oe|=2;var u=K0(),f=Q0();(je!==e||Me!==n)&&(tc=null,pr(e,n)),n=!1;var v=sn;t:do try{if(Be!==0&&_e!==null){var T=_e,I=ii;switch(Be){case 8:jf(),v=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var tt=Be;if(Be=0,ii=null,mr(e,T,I,tt),a&&fr){v=0;break t}break;default:tt=Be,Be=0,ii=null,mr(e,T,I,tt)}}Cy(),v=sn;break}catch(ht){j0(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Ji=gs=null,Oe=o,F.H=u,F.A=f,_e===null&&(je=null,Me=0,Sl()),v}function Cy(){for(;_e!==null;)J0(_e)}function wy(e,n){var a=Oe;Oe|=2;var o=K0(),u=Q0();je!==e||Me!==n?(tc=null,$l=E()+500,pr(e,n)):fr=Bt(e,n);t:do try{if(Be!==0&&_e!==null){n=_e;var f=ii;e:switch(Be){case 1:Be=0,ii=null,mr(e,n,f,1);break;case 2:case 9:if(lm(f)){Be=0,ii=null,$0(n);break}n=function(){Be!==2&&Be!==9||je!==e||(Be=7),Bi(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:lm(f)?(Be=0,ii=null,$0(n)):(Be=0,ii=null,mr(e,n,f,7));break;case 5:var v=null;switch(_e.tag){case 26:v=_e.memoizedState;case 5:case 27:var T=_e;if(v?Fx(v):T.stateNode.complete){Be=0,ii=null;var I=T.sibling;if(I!==null)_e=I;else{var tt=T.return;tt!==null?(_e=tt,ic(tt)):_e=null}break e}}Be=0,ii=null,mr(e,n,f,5);break;case 6:Be=0,ii=null,mr(e,n,f,6);break;case 8:jf(),sn=6;break t;default:throw Error(s(462))}}Dy();break}catch(ht){j0(e,ht)}while(!0);return Ji=gs=null,F.H=o,F.A=u,Oe=a,_e!==null?0:(je=null,Me=0,Sl(),sn)}function Dy(){for(;_e!==null&&!se();)J0(_e)}function J0(e){var n=S0(e.alternate,e,la);e.memoizedProps=e.pendingProps,n===null?ic(e):_e=n}function $0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=x0(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=x0(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:uf(n);default:E0(a,n),n=_e=Qp(n,la),n=S0(a,n,la)}e.memoizedProps=e.pendingProps,n===null?ic(e):_e=n}function mr(e,n,a,o){Ji=gs=null,uf(n),ar=null,_o=0;var u=n.return;try{if(_y(e,u,n,a,Me)){sn=1,kl(e,hi(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;sn=1,kl(e,hi(a,e.current)),_e=null;return}n.flags&32768?(Ae||o===1?e=!0:fr||(Me&536870912)!==0?e=!1:(Fa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),tx(n,e)):ic(n)}function ic(e){var n=e;do{if((n.flags&32768)!==0){tx(n,Fa);return}e=n.return;var a=My(n.alternate,n,la);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);sn===0&&(sn=5)}function tx(e,n){do{var a=Sy(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);sn=6,_e=null}function ex(e,n,a,o,u,f,v,T,I){e.cancelPendingCommit=null;do ac();while(_n!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=zu,Qn(e,a,f,v,T,I),e===je&&(_e=je=null,Me=0),dr=n,Ga=e,ca=a,Wf=f,Yf=u,k0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Oy(ut,function(){return rx(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=U.p,U.p=2,v=Oe,Oe|=4;try{by(e,n,a)}finally{Oe=v,U.p=u,F.T=o}}_n=1,nx(),ix(),ax()}}function nx(){if(_n===1){_n=0;var e=Ga,n=dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=U.p;U.p=2;var u=Oe;Oe|=4;try{z0(n,e);var f=oh,v=Vp(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&Gp(T.ownerDocument.documentElement,T)){if(I!==null&&Uu(T)){var tt=I.start,ht=I.end;if(ht===void 0&&(ht=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ht,T.value.length);else{var gt=T.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var ot=it.getSelection(),It=T.textContent.length,te=Math.min(I.start,It),Ve=I.end===void 0?te:Math.min(I.end,It);!ot.extend&&te>Ve&&(v=Ve,Ve=te,te=v);var q=Hp(T,te),k=Hp(T,Ve);if(q&&k&&(ot.rangeCount!==1||ot.anchorNode!==q.node||ot.anchorOffset!==q.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var J=gt.createRange();J.setStart(q.node,q.offset),ot.removeAllRanges(),te>Ve?(ot.addRange(J),ot.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ot.addRange(J))}}}}for(gt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var mt=gt[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}xc=!!rh,oh=rh=null}finally{Oe=u,U.p=o,F.T=a}}e.current=n,_n=2}}function ix(){if(_n===2){_n=0;var e=Ga,n=dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=U.p;U.p=2;var u=Oe;Oe|=4;try{U0(e,n.alternate,n)}finally{Oe=u,U.p=o,F.T=a}}_n=3}}function ax(){if(_n===4||_n===3){_n=0,L();var e=Ga,n=dr,a=ca,o=k0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,dr=Ga=null,sx(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ha=null),cs(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=U.p,U.p=2,F.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var T=o[v];f(T.value,{componentStack:T.stack})}}finally{F.T=n,U.p=u}}(ca&3)!==0&&ac(),Bi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===qf?Po++:(Po=0,qf=e):Po=0,zo(0)}}function sx(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,xo(n)))}function ac(){return nx(),ix(),ax(),rx()}function rx(){if(_n!==5)return!1;var e=Ga,n=Wf;Wf=0;var a=cs(ca),o=F.T,u=U.p;try{U.p=32>a?32:a,F.T=null,a=Yf,Yf=null;var f=Ga,v=ca;if(_n=0,dr=Ga=null,ca=0,(Oe&6)!==0)throw Error(s(331));var T=Oe;if(Oe|=4,G0(f.current),F0(f,f.current,v,a),Oe=T,zo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(St,f)}catch{}return!0}finally{U.p=u,F.T=o,sx(e,n)}}function ox(e,n,a){n=hi(a,n),n=Tf(e.stateNode,n,2),e=Oa(e,n,2),e!==null&&(Nn(e,2),Bi(e))}function Fe(e,n,a){if(e.tag===3)ox(e,e,a);else for(;n!==null;){if(n.tag===3){ox(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ha===null||!Ha.has(o))){e=hi(a,e),a=l0(2),o=Oa(n,a,2),o!==null&&(c0(a,o,n,e),Nn(o,2),Bi(o));break}}n=n.return}}function Kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ay;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),e=Uy.bind(null,e,n,a),n.then(e,e))}function Uy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Me&a)===a&&(sn===4||sn===3&&(Me&62914560)===Me&&300>E()-Jl?(Oe&2)===0&&pr(e,0):Xf|=a,hr===Me&&(hr=0)),Bi(e)}function lx(e,n){n===0&&(n=Ie()),e=ps(e,n),e!==null&&(Nn(e,n),Bi(e))}function Ly(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),lx(e,a)}function Ny(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),lx(e,a)}function Oy(e,n){return Ye(e,n)}var sc=null,xr=null,Qf=!1,rc=!1,Jf=!1,Xa=0;function Bi(e){e!==xr&&e.next===null&&(xr===null?sc=xr=e:xr=xr.next=e),rc=!0,Qf||(Qf=!0,zy())}function zo(e,n){if(!Jf&&rc){Jf=!0;do for(var a=!1,o=sc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Vt(42|e)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,hx(o,f))}else f=Me,f=_t(o,o===je?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Bt(o,f)||(a=!0,hx(o,f));o=o.next}while(a);Jf=!1}}function Py(){cx()}function cx(){rc=Qf=!1;var e=0;Xa!==0&&Yy()&&(e=Xa);for(var n=E(),a=null,o=sc;o!==null;){var u=o.next,f=ux(o,n);f===0?(o.next=null,a===null?sc=u:a.next=u,u===null&&(xr=a)):(a=o,(e!==0||(f&3)!==0)&&(rc=!0)),o=u}_n!==0&&_n!==5||zo(e),Xa!==0&&(Xa=0)}function ux(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Vt(f),T=1<<v,I=u[v];I===-1?((T&a)===0||(T&o)!==0)&&(u[v]=ae(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=je,a=Me,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&jt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&jt(o),cs(a)){case 2:case 8:a=Mt;break;case 32:a=ut;break;case 268435456:a=Lt;break;default:a=ut}return o=fx.bind(null,e),a=Ye(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&jt(o),e.callbackPriority=2,e.callbackNode=null,2}function fx(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ac()&&e.callbackNode!==a)return null;var o=Me;return o=_t(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Y0(e,o,n),ux(e,E()),e.callbackNode!=null&&e.callbackNode===a?fx.bind(null,e):null)}function hx(e,n){if(ac())return null;Y0(e,n,!0)}function zy(){jy(function(){(Oe&6)!==0?Ye(xt,Py):cx()})}function $f(){if(Xa===0){var e=er;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Xa=e}return Xa}function dx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pl(""+e)}function px(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function By(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=dx((u[xn]||null).action),v=o.submitter;v&&(n=(n=v[xn]||null)?dx(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new _l("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var I=v?px(u,v):new FormData(u);vf(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=v?px(u,v):new FormData(u),vf(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var th=0;th<Pu.length;th++){var eh=Pu[th],Fy=eh.toLowerCase(),Iy=eh[0].toUpperCase()+eh.slice(1);Si(Fy,"on"+Iy)}Si(Wp,"onAnimationEnd"),Si(Yp,"onAnimationIteration"),Si(qp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(ey,"onTransitionRun"),Si(ny,"onTransitionStart"),Si(iy,"onTransitionCancel"),Si(jp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function mx(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var T=o[v],I=T.instance,tt=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(ht){Ml(ht)}u.currentTarget=null,f=I}else for(v=0;v<o.length;v++){if(T=o[v],I=T.instance,tt=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(ht){Ml(ht)}u.currentTarget=null,f=I}}}}function ve(e,n){var a=n[Xs];a===void 0&&(a=n[Xs]=new Set);var o=e+"__bubble";a.has(o)||(xx(n,e,2,!1),a.add(o))}function nh(e,n,a){var o=0;n&&(o|=4),xx(a,e,o,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function ih(e){if(!e[oc]){e[oc]=!0,j.forEach(function(a){a!=="selectionchange"&&(Hy.has(a)||nh(a,!1,e),nh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[oc]||(n[oc]=!0,nh("selectionchange",!1,n))}}function xx(e,n,a,o){switch(Wx(n)){case 2:var u=pM;break;case 8:u=mM;break;default:u=_h}a=u.bind(null,n,a,e),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ah(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=o.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=Ta(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){o=f=v;continue t}T=T.parentNode}}o=o.return}Mp(function(){var tt=f,ht=yu(a),gt=[];t:{var it=Zp.get(e);if(it!==void 0){var ot=_l,It=e;switch(e){case"keypress":if(xl(a)===0)break t;case"keydown":case"keyup":ot=Nv;break;case"focusin":It="focus",ot=Au;break;case"focusout":It="blur",ot=Au;break;case"beforeblur":case"afterblur":ot=Au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=zv;break;case Wp:case Yp:case qp:ot=Ev;break;case jp:ot=Fv;break;case"scroll":case"scrollend":ot=vv;break;case"wheel":ot=Hv;break;case"copy":case"cut":case"paste":ot=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Ap;break;case"toggle":case"beforetoggle":ot=Vv}var te=(n&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),q=te?it!==null?it+"Capture":null:it;te=[];for(var k=tt,J;k!==null;){var mt=k;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||q===null||(mt=ao(k,q),mt!=null&&te.push(Fo(k,mt,J))),Ve)break;k=k.return}0<te.length&&(it=new ot(it,It,null,a,ht),gt.push({event:it,listeners:te}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",it&&a!==vu&&(It=a.relatedTarget||a.fromElement)&&(Ta(It)||It[Wi]))break t;if((ot||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,ot?(It=a.relatedTarget||a.toElement,ot=tt,It=It?Ta(It):null,It!==null&&(Ve=c(It),te=It.tag,It!==Ve||te!==5&&te!==27&&te!==6)&&(It=null)):(ot=null,It=tt),ot!==It)){if(te=Ep,mt="onMouseLeave",q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Ap,mt="onPointerLeave",q="onPointerEnter",k="pointer"),Ve=ot==null?it:Y(ot),J=It==null?it:Y(It),it=new te(mt,k+"leave",ot,a,ht),it.target=Ve,it.relatedTarget=J,mt=null,Ta(ht)===tt&&(te=new te(q,k+"enter",It,a,ht),te.target=J,te.relatedTarget=Ve,mt=te),Ve=mt,ot&&It)e:{for(te=Gy,q=ot,k=It,J=0,mt=q;mt;mt=te(mt))J++;mt=0;for(var Kt=k;Kt;Kt=te(Kt))mt++;for(;0<J-mt;)q=te(q),J--;for(;0<mt-J;)k=te(k),mt--;for(;J--;){if(q===k||k!==null&&q===k.alternate){te=q;break e}q=te(q),k=te(k)}te=null}else te=null;ot!==null&&gx(gt,it,ot,te,!1),It!==null&&Ve!==null&&gx(gt,Ve,It,te,!0)}}t:{if(it=tt?Y(tt):window,ot=it.nodeName&&it.nodeName.toLowerCase(),ot==="select"||ot==="input"&&it.type==="file")var Ue=Op;else if(Lp(it))if(Pp)Ue=Jv;else{Ue=Kv;var Xt=Zv}else ot=it.nodeName,!ot||ot.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&_u(tt.elementType)&&(Ue=Op):Ue=Qv;if(Ue&&(Ue=Ue(e,tt))){Np(gt,Ue,a,ht);break t}Xt&&Xt(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&En(it,"number",it.value)}switch(Xt=tt?Y(tt):window,e){case"focusin":(Lp(Xt)||Xt.contentEditable==="true")&&(qs=Xt,Lu=tt,ho=null);break;case"focusout":ho=Lu=qs=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Xp(gt,a,ht);break;case"selectionchange":if(ty)break;case"keydown":case"keyup":Xp(gt,a,ht)}var fe;if(Cu)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Ys?Dp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Rp&&a.locale!=="ko"&&(Ys||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ys&&(fe=Sp()):(Ra=ht,bu="value"in Ra?Ra.value:Ra.textContent,Ys=!0)),Xt=lc(tt,Se),0<Xt.length&&(Se=new Tp(Se,e,null,a,ht),gt.push({event:Se,listeners:Xt}),fe?Se.data=fe:(fe=Up(a),fe!==null&&(Se.data=fe)))),(fe=kv?Wv(e,a):Yv(e,a))&&(Se=lc(tt,"onBeforeInput"),0<Se.length&&(Xt=new Tp("onBeforeInput","beforeinput",null,a,ht),gt.push({event:Xt,listeners:Se}),Xt.data=fe)),By(gt,e,tt,a,ht)}mx(gt,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function lc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ao(e,a),u!=null&&o.unshift(Fo(e,u,f)),u=ao(e,n),u!=null&&o.push(Fo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Gy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gx(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var T=a,I=T.alternate,tt=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||tt===null||(I=tt,u?(tt=ao(a,f),tt!=null&&v.unshift(Fo(a,tt,I))):u||(tt=ao(a,f),tt!=null&&v.push(Fo(a,tt,I)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Vy=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function _x(e){return(typeof e=="string"?e:""+e).replace(Vy,`
`).replace(Xy,"")}function vx(e,n){return n=_x(n),_x(e)===n}function Ge(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ni(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ni(e,""+o);break;case"className":Re(e,"class",o);break;case"tabIndex":Re(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Re(e,a,o);break;case"style":vp(e,o,f);break;case"data":if(n!=="object"){Re(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=pl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=pl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=pl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),ue(e,"popover",o);break;case"xlinkActuate":De(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":De(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":De(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":De(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":De(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":De(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":De(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":De(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":De(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ue(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gv.get(a)||a,ue(e,a,o))}}function sh(e,n,a,o,u,f){switch(a){case"style":vp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ni(e,o):(typeof o=="number"||typeof o=="bigint")&&Ni(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!At.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ue(e,a,o)}}}function Ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,f,v,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=v=u=null,I=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":v=ht;break;case"checked":I=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ge(e,n,o,ht,a,null)}}Ke(e,f,T,I,tt,v,u,!1);return;case"select":ve("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:Ge(e,n,u,T,a,null)}n=f,a=v,e.multiple=!!o,n!=null?gn(e,!!o,n,!1):a!=null&&gn(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ge(e,n,v,T,a,null)}Cn(e,o,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null)&&(I==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,I,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Bo.length;o++)ve(Bo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,tt,o,a,null)}return;default:if(_u(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&sh(e,n,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ge(e,n,T,o,a,null))}function ky(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,I=null,tt=null,ht=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=gt;default:o.hasOwnProperty(ot)||Ge(e,n,ot,null,o,gt)}}for(var it in o){var ot=o[it];if(gt=a[it],o.hasOwnProperty(it)&&(ot!=null||gt!=null))switch(it){case"type":f=ot;break;case"name":u=ot;break;case"checked":tt=ot;break;case"defaultChecked":ht=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==gt&&Ge(e,n,it,ot,o,gt)}}Yi(e,v,T,I,tt,ht,f,u);return;case"select":ot=v=T=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ot=I;default:o.hasOwnProperty(f)||Ge(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==I&&Ge(e,n,u,f,o,I)}n=T,a=v,o=ot,it!=null?gn(e,!!a,it,!1):!!o!=!!a&&(n!=null?gn(e,!!a,n,!0):gn(e,!!a,a?[]:"",!1));return;case"textarea":ot=it=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(e,n,T,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":it=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ge(e,n,v,u,o,f)}Tn(e,it,ot);return;case"option":for(var It in a)it=a[It],a.hasOwnProperty(It)&&it!=null&&!o.hasOwnProperty(It)&&(It==="selected"?e.selected=!1:Ge(e,n,It,null,o,it));for(I in o)it=o[I],ot=a[I],o.hasOwnProperty(I)&&it!==ot&&(it!=null||ot!=null)&&(I==="selected"?e.selected=it&&typeof it!="function"&&typeof it!="symbol":Ge(e,n,I,it,o,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)it=a[te],a.hasOwnProperty(te)&&it!=null&&!o.hasOwnProperty(te)&&Ge(e,n,te,null,o,it);for(tt in o)if(it=o[tt],ot=a[tt],o.hasOwnProperty(tt)&&it!==ot&&(it!=null||ot!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Ge(e,n,tt,it,o,ot)}return;default:if(_u(n)){for(var Ve in a)it=a[Ve],a.hasOwnProperty(Ve)&&it!==void 0&&!o.hasOwnProperty(Ve)&&sh(e,n,Ve,void 0,o,it);for(ht in o)it=o[ht],ot=a[ht],!o.hasOwnProperty(ht)||it===ot||it===void 0&&ot===void 0||sh(e,n,ht,it,o,ot);return}}for(var q in a)it=a[q],a.hasOwnProperty(q)&&it!=null&&!o.hasOwnProperty(q)&&Ge(e,n,q,null,o,it);for(gt in o)it=o[gt],ot=a[gt],!o.hasOwnProperty(gt)||it===ot||it==null&&ot==null||Ge(e,n,gt,it,o,ot)}function yx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&yx(v)){for(v=0,T=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],tt=I.startTime;if(tt>T)break;var ht=I.transferSize,gt=I.initiatorType;ht&&yx(gt)&&(I=I.responseEnd,v+=ht*(I<T?1:(T-tt)/(I-tt)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rh=null,oh=null;function cc(e){return e.nodeType===9?e:e.ownerDocument}function Mx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function lh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ch=null;function Yy(){var e=window.event;return e&&e.type==="popstate"?e===ch?!1:(ch=e,!0):(ch=null,!1)}var bx=typeof setTimeout=="function"?setTimeout:void 0,qy=typeof clearTimeout=="function"?clearTimeout:void 0,Ex=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ex<"u"?function(e){return Ex.resolve(null).then(e).catch(Zy)}:bx;function Zy(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function Tx(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Io(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Io(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[us]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Io(e.ownerDocument.body);a=u}while(a);yr(n)}function Ax(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function uh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uh(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ky(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[us])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function Qy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function Rx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function fh(e){return e.data==="$?"||e.data==="$~"}function hh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var dh=null;function Cx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function wx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Dx(e,n,a){switch(n=cc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Io(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);io(e)}var _i=new Map,Ux=new Set;function uc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=U.d;U.d={f:$y,r:tM,D:eM,C:nM,L:iM,m:aM,X:rM,S:sM,M:oM};function $y(){var e=ua.f(),n=ec();return e||n}function tM(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?jm(n):ua.r(e)}var gr=typeof document>"u"?null:document;function Lx(e,n,a){var o=gr;if(o&&typeof n=="string"&&n){var u=Ze(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ux.has(u)||(Ux.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ln(n,"link",e),et(n),o.head.appendChild(n)))}}function eM(e){ua.D(e),Lx("dns-prefetch",e,null)}function nM(e,n){ua.C(e,n),Lx("preconnect",e,n)}function iM(e,n,a){ua.L(e,n,a);var o=gr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ze(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ze(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ze(a.imageSizes)+'"]')):u+='[href="'+Ze(e)+'"]';var f=u;switch(n){case"style":f=_r(e);break;case"script":f=vr(e)}_i.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ho(f))||n==="script"&&o.querySelector(Go(f))||(n=o.createElement("link"),Ln(n,"link",e),et(n),o.head.appendChild(n)))}}function aM(e,n){ua.m(e,n);var a=gr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ze(o)+'"][href="'+Ze(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vr(e)}if(!_i.has(f)&&(e=x({rel:"modulepreload",href:e},n),_i.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}o=a.createElement("link"),Ln(o,"link",e),et(o),a.head.appendChild(o)}}}function sM(e,n,a){ua.S(e,n,a);var o=gr;if(o&&e){var u=rt(o).hoistableStyles,f=_r(e);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(Ho(f)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(f))&&ph(e,a);var I=v=o.createElement("link");et(I),Ln(I,"link",e),I._p=new Promise(function(tt,ht){I.onload=tt,I.onerror=ht}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,fc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function rM(e,n){ua.X(e,n);var a=gr;if(a&&e){var o=rt(a).hoistableScripts,u=vr(e),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(e=x({src:e,async:!0},n),(n=_i.get(u))&&mh(e,n),f=a.createElement("script"),et(f),Ln(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function oM(e,n){ua.M(e,n);var a=gr;if(a&&e){var o=rt(a).hoistableScripts,u=vr(e),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&mh(e,n),f=a.createElement("script"),et(f),Ln(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Nx(e,n,a,o){var u=(u=st.current)?uc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=rt(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var f=rt(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Ho(e)))&&!f._p&&(v.instance=f,v.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),f||lM(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=rt(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function _r(e){return'href="'+Ze(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function Ox(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function lM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ln(n,"link",a),et(n),e.head.appendChild(n))}function vr(e){return'[src="'+Ze(e)+'"]'}function Go(e){return"script[async]"+e}function Px(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ze(a.href)+'"]');if(o)return n.instance=o,et(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),et(o),Ln(o,"style",u),fc(o,a.precedence,e),n.instance=o;case"stylesheet":u=_r(a.href);var f=e.querySelector(Ho(u));if(f)return n.state.loading|=4,n.instance=f,et(f),f;o=Ox(a),(u=_i.get(u))&&ph(o,u),f=(e.ownerDocument||e).createElement("link"),et(f);var v=f;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Ln(f,"link",o),n.state.loading|=4,fc(f,a.precedence,e),n.instance=f;case"script":return f=vr(a.src),(u=e.querySelector(Go(f)))?(n.instance=u,et(u),u):(o=a,(u=_i.get(f))&&(o=x({},a),mh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),et(u),Ln(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,e));return n.instance}function fc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var hc=null;function zx(e,n,a){if(hc===null){var o=new Map,u=hc=new Map;u.set(a,o)}else u=hc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[us]||f[un]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=o.get(v);T?T.push(f):o.set(v,[f])}}return o}function Bx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function cM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function uM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(o.href),f=n.querySelector(Ho(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=dc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,et(f);return}f=n.ownerDocument||n,o=Ox(o),(u=_i.get(u))&&ph(o,u),f=f.createElement("link"),et(f);var v=f;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Ln(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=dc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var xh=0;function fM(e,n){return e.stylesheets&&e.count===0&&mc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&xh===0&&(xh=62500*Wy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>xh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pc=null;function mc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pc=new Map,n.forEach(hM,e),pc=null,dc.call(e))}function hM(e,n){if(!(n.state.loading&4)){var a=pc.get(e);if(a)var o=a.get(null);else{a=new Map,pc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Vo={$$typeof:w,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function dM(e,n,a,o,u,f,v,T,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Ix(e,n,a,o,u,f,v,T,I,tt,ht,gt){return e=new dM(e,n,a,v,I,tt,ht,gt,T),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ju(f),e}function Hx(e){return e?(e=Ks,e):Ks}function Gx(e,n,a,o,u,f){u=Hx(u),o.context===null?o.context=u:o.pendingContext=u,o=Na(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Oa(e,o,n),a!==null&&(qn(a,e,n),yo(a,e,n))}function Vx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gh(e,n){Vx(e,n),(e=e.alternate)&&Vx(e,n)}function Xx(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&qn(n,e,67108864),gh(e,67108864)}}function kx(e){if(e.tag===13||e.tag===31){var n=si();n=Mi(n);var a=ps(e,n);a!==null&&qn(a,e,n),gh(e,n)}}var xc=!0;function pM(e,n,a,o){var u=F.T;F.T=null;var f=U.p;try{U.p=2,_h(e,n,a,o)}finally{U.p=f,F.T=u}}function mM(e,n,a,o){var u=F.T;F.T=null;var f=U.p;try{U.p=8,_h(e,n,a,o)}finally{U.p=f,F.T=u}}function _h(e,n,a,o){if(xc){var u=vh(o);if(u===null)ah(e,n,o,gc,a),Yx(e,o);else if(gM(u,e,n,a,o))o.stopPropagation();else if(Yx(e,o),n&4&&-1<xM.indexOf(e)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=bt(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-Vt(v);T.entanglements[1]|=I,v&=~I}Bi(f),(Oe&6)===0&&($l=E()+500,zo(0))}}break;case 31:case 13:T=ps(f,2),T!==null&&qn(T,f,2),ec(),gh(f,2)}if(f=vh(o),f===null&&ah(e,n,o,gc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ah(e,n,o,null,a)}}function vh(e){return e=yu(e),yh(e)}var gc=null;function yh(e){if(gc=null,e=Ta(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gc=e,null}function Wx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case xt:return 2;case Mt:return 8;case ut:case Yt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Mh=!1,Wa=null,Ya=null,qa=null,Xo=new Map,ko=new Map,ja=[],xM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yx(e,n){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Wo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Xx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function gM(e,n,a,o,u){switch(n){case"focusin":return Wa=Wo(Wa,e,n,a,o,u),!0;case"dragenter":return Ya=Wo(Ya,e,n,a,o,u),!0;case"mouseover":return qa=Wo(qa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Xo.set(f,Wo(Xo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,ko.set(f,Wo(ko.get(f)||null,e,n,a,o,u)),!0}return!1}function qx(e){var n=Ta(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,no(e.priority,function(){kx(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,no(e.priority,function(){kx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=vh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return n=R(a),n!==null&&Xx(n),e.blockedOn=a,!1;n.shift()}return!0}function jx(e,n,a){_c(e)&&a.delete(n)}function _M(){Mh=!1,Wa!==null&&_c(Wa)&&(Wa=null),Ya!==null&&_c(Ya)&&(Ya=null),qa!==null&&_c(qa)&&(qa=null),Xo.forEach(jx),ko.forEach(jx)}function vc(e,n){e.blockedOn===n&&(e.blockedOn=null,Mh||(Mh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_M)))}var yc=null;function Zx(e){yc!==e&&(yc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(yh(o||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,vf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(e){function n(I){return vc(I,e)}Wa!==null&&vc(Wa,e),Ya!==null&&vc(Ya,e),qa!==null&&vc(qa,e),Xo.forEach(n),ko.forEach(n);for(var a=0;a<ja.length;a++){var o=ja[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)qx(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[xn]||null;if(typeof f=="function")v||Zx(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[xn]||null)T=v.formAction;else if(yh(u)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Zx(a)}}}function Kx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sh(e){this._internalRoot=e}Mc.prototype.render=Sh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();Gx(a,o,e,n,null,null)},Mc.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gx(e.current,2,null,e,null,null),ec(),n[Wi]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=eo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,e),a===0&&qx(e)}};var Qx=t.version;if(Qx!=="19.2.6")throw Error(s(527,Qx,"19.2.6"));U.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var vM={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{St=Sc.inject(vM),Et=Sc}catch{}}return qo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=a0,f=s0,v=r0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Ix(e,1,!1,null,null,a,o,null,u,f,v,Kx),e[Wi]=n.current,ih(e),new Sh(n)},qo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=a0,v=s0,T=r0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Ix(e,1,!0,n,a??null,o,u,I,f,v,T,Kx),n.context=Hx(null),a=n.current,o=si(),o=Mi(o),u=Na(o),u.callback=null,Oa(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Bi(n),e[Wi]=n.current,ih(e),new Mc(n)},qo.version="19.2.6",qo}var og;function wM(){if(og)return Th.exports;og=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Th.exports=CM(),Th.exports}var DM=wM();const ap="181",Vr={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},UM=0,lg=1,LM=2,w_=1,D_=2,ga=3,ba=0,Kn=1,_a=2,Ma=0,Xr=1,cg=2,ug=3,fg=4,NM=5,Ns=100,OM=101,PM=102,zM=103,BM=104,FM=200,IM=201,HM=202,GM=203,fd=204,hd=205,VM=206,XM=207,kM=208,WM=209,YM=210,qM=211,jM=212,ZM=213,KM=214,dd=0,pd=1,md=2,Wr=3,xd=4,gd=5,_d=6,vd=7,U_=0,QM=1,JM=2,os=0,$M=1,tS=2,eS=3,nS=4,iS=5,aS=6,sS=7,L_=300,Yr=301,qr=302,yd=303,Md=304,uu=306,Sd=1e3,va=1001,bd=1002,ui=1003,rS=1004,bc=1005,yi=1006,wh=1007,zs=1008,Vi=1009,N_=1010,O_=1011,ol=1012,sp=1013,Bs=1014,ya=1015,Kr=1016,rp=1017,op=1018,ll=1020,P_=35902,z_=35899,B_=1021,F_=1022,Di=1023,cl=1026,ul=1027,I_=1028,lp=1029,cp=1030,up=1031,fp=1033,Jc=33776,$c=33777,tu=33778,eu=33779,Ed=35840,Td=35841,Ad=35842,Rd=35843,Cd=36196,wd=37492,Dd=37496,Ud=37808,Ld=37809,Nd=37810,Od=37811,Pd=37812,zd=37813,Bd=37814,Fd=37815,Id=37816,Hd=37817,Gd=37818,Vd=37819,Xd=37820,kd=37821,Wd=36492,Yd=36494,qd=36495,jd=36283,Zd=36284,Kd=36285,Qd=36286,oS=3200,lS=3201,H_=0,cS=1,as="",li="srgb",jr="srgb-linear",iu="linear",Xe="srgb",Mr=7680,hg=519,uS=512,fS=513,hS=514,G_=515,dS=516,pS=517,mS=518,xS=519,Jd=35044,dg="300 es",Hi=2e3,au=2001;function V_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gS(){const r=su("canvas");return r.style.display="block",r}const pg={};function ru(...r){const t="THREE."+r.shift();console.log(t,...r)}function re(...r){const t="THREE."+r.shift();console.warn(t,...r)}function nn(...r){const t="THREE."+r.shift();console.error(t,...r)}function fl(...r){const t=r.join(" ");t in pg||(pg[t]=!0,re(...r))}function _S(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rl=Math.PI/180,$d=180/Math.PI;function ls(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function ye(r,t,i){return Math.max(t,Math.min(i,r))}function vS(r,t){return(r%t+t)%t}function Dh(r,t,i){return(1-i)*r+i*t}function Ii(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const yS={DEG2RAD:rl};class ne{constructor(t=0,i=0){ne.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],y=c[h+0],M=c[h+1],b=c[h+2],A=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(d>=1){t[i+0]=y,t[i+1]=M,t[i+2]=b,t[i+3]=A;return}if(x!==A||m!==y||p!==M||_!==b){let S=m*y+p*M+_*b+x*A;S<0&&(y=-y,M=-M,b=-b,A=-A,S=-S);let g=1-d;if(S<.9995){const O=Math.acos(S),w=Math.sin(O);g=Math.sin(g*O)/w,d=Math.sin(d*O)/w,m=m*g+y*d,p=p*g+M*d,_=_*g+b*d,x=x*g+A*d}else{m=m*g+y*d,p=p*g+M*d,_=_*g+b*d,x=x*g+A*d;const O=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=O,p*=O,_*=O,x*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[h],y=c[h+1],M=c[h+2],b=c[h+3];return t[i]=d*b+_*x+m*M-p*y,t[i+1]=m*b+_*y+p*x-d*M,t[i+2]=p*b+_*M+d*y-m*x,t[i+3]=_*b-d*x-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),y=m(s/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=y*_*x+p*M*b,this._y=p*M*x-y*_*b,this._z=p*_*b+y*M*x,this._w=p*_*x-y*M*b;break;case"YXZ":this._x=y*_*x+p*M*b,this._y=p*M*x-y*_*b,this._z=p*_*b-y*M*x,this._w=p*_*x+y*M*b;break;case"ZXY":this._x=y*_*x-p*M*b,this._y=p*M*x+y*_*b,this._z=p*_*b+y*M*x,this._w=p*_*x-y*M*b;break;case"ZYX":this._x=y*_*x-p*M*b,this._y=p*M*x+y*_*b,this._z=p*_*b-y*M*x,this._w=p*_*x+y*M*b;break;case"YZX":this._x=y*_*x+p*M*b,this._y=p*M*x+y*_*b,this._z=p*_*b-y*M*x,this._w=p*_*x-y*M*b;break;case"XZY":this._x=y*_*x-p*M*b,this._y=p*M*x-y*_*b,this._z=p*_*b+y*M*x,this._w=p*_*x+y*M*b;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],y=s+d+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(mg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(mg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Uh.copy(this).projectOnVector(t),this.sub(Uh)}reflect(t){return this.sub(Uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uh=new Q,mg=new Fs;class he{constructor(t,i,s,l,c,h,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],y=s[2],M=s[5],b=s[8],A=l[0],S=l[3],g=l[6],O=l[1],w=l[4],z=l[7],G=l[2],N=l[5],B=l[8];return c[0]=h*A+d*O+m*G,c[3]=h*S+d*w+m*N,c[6]=h*g+d*z+m*B,c[1]=p*A+_*O+x*G,c[4]=p*S+_*w+x*N,c[7]=p*g+_*z+x*B,c[2]=y*A+M*O+b*G,c[5]=y*S+M*w+b*N,c[8]=y*g+M*z+b*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*h-d*p,y=d*m-_*c,M=p*c-h*m,b=i*x+s*y+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=x*A,t[1]=(l*p-_*s)*A,t[2]=(d*s-l*h)*A,t[3]=y*A,t[4]=(_*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=M*A,t[7]=(s*m-p*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Lh.makeScale(t,i)),this}rotate(t){return this.premultiply(Lh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Lh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lh=new he,xg=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gg=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MS(){const r={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xe&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=kr(l.r),l.g=kr(l.g),l.b=kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?iu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return fl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return fl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[jr]:{primaries:t,whitePoint:s,transfer:iu,toXYZ:xg,fromXYZ:gg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:s,transfer:Xe,toXYZ:xg,fromXYZ:gg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const Ne=MS();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Sr;class SS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Sr===void 0&&(Sr=su("canvas")),Sr.width=t.width,Sr.height=t.height;const l=Sr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Sr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=su("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Sa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bS=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Nh(l[h].image)):c.push(Nh(l[h]))}else c=Nh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?SS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let ES=0;const Oh=new Q;class Bn extends Hs{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=va,l=va,c=yi,h=zs,d=Di,m=Vi,p=Bn.DEFAULT_ANISOTROPY,_=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=ls(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==L_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sd:t.x=t.x-Math.floor(t.x);break;case va:t.x=t.x<0?0:1;break;case bd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sd:t.y=t.y-Math.floor(t.y);break;case va:t.y=t.y<0?0:1;break;case bd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=L_;Bn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],y=m[1],M=m[5],b=m[9],A=m[2],S=m[6],g=m[10];if(Math.abs(_-y)<.01&&Math.abs(x-A)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+A)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,z=(M+1)/2,G=(g+1)/2,N=(_+y)/4,B=(x+A)/4,K=(b+S)/4;return w>z&&w>G?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=N/s,c=B/s):z>G?z<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(z),s=N/l,c=K/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=B/c,l=K/c),this.set(s,l,c,i),this}let O=Math.sqrt((S-b)*(S-b)+(x-A)*(x-A)+(y-_)*(y-_));return Math.abs(O)<.001&&(O=1),this.x=(S-b)/O,this.y=(x-A)/O,this.z=(y-_)/O,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TS extends Hs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Bn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends TS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class X_ extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ui,this.minFilter=ui,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class AS extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ui,this.minFilter=ui,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ti):Ti.fromBufferAttribute(c,h),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ec.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ec.copy(s.boundingBox)),Ec.applyMatrix4(t.matrixWorld),this.union(Ec)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Tc.subVectors(this.max,jo),br.subVectors(t.a,jo),Er.subVectors(t.b,jo),Tr.subVectors(t.c,jo),Ka.subVectors(Er,br),Qa.subVectors(Tr,Er),Rs.subVectors(br,Tr);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Rs.z,Rs.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Rs.z,0,-Rs.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Rs.y,Rs.x,0];return!Ph(i,br,Er,Tr,Tc)||(i=[1,0,0,0,1,0,0,0,1],!Ph(i,br,Er,Tr,Tc))?!1:(Ac.crossVectors(Ka,Qa),i=[Ac.x,Ac.y,Ac.z],Ph(i,br,Er,Tr,Tc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ti=new Q,Ec=new Qr,br=new Q,Er=new Q,Tr=new Q,Ka=new Q,Qa=new Q,Rs=new Q,jo=new Q,Tc=new Q,Ac=new Q,Cs=new Q;function Ph(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Cs.fromArray(r,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),_=s.dot(Cs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const RS=new Qr,Zo=new Q,zh=new Q;class fu{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):RS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(zh)),this.expandByPoint(Zo.copy(t.center).sub(zh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ha=new Q,Bh=new Q,Rc=new Q,Ja=new Q,Fh=new Q,Cc=new Q,Ih=new Q;class hu{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ha)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ha.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Bh.copy(t).add(i).multiplyScalar(.5),Rc.copy(i).sub(t).normalize(),Ja.copy(this.origin).sub(Bh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Rc),d=Ja.dot(this.direction),m=-Ja.dot(Rc),p=Ja.lengthSq(),_=Math.abs(1-h*h);let x,y,M,b;if(_>0)if(x=h*m-d,y=h*d-m,b=c*_,x>=0)if(y>=-b)if(y<=b){const A=1/_;x*=A,y*=A,M=x*(x+h*y+2*d)+y*(h*x+y+2*m)+p}else y=c,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*m)+p;else y=-c,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*m)+p;else y<=-b?(x=Math.max(0,-(-h*c+d)),y=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+y*(y+2*m)+p):y<=b?(x=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(x=Math.max(0,-(h*c+d)),y=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+y*(y+2*m)+p);else y=h>0?-c:c,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Bh).addScaledVector(Rc,y),M}intersectSphere(t,i){ha.subVectors(t.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),_>=0?(c=(t.min.y-y.y)*_,h=(t.max.y-y.y)*_):(c=(t.max.y-y.y)*_,h=(t.min.y-y.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-y.z)*x,m=(t.max.z-y.z)*x):(d=(t.max.z-y.z)*x,m=(t.min.z-y.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ha)!==null}intersectTriangle(t,i,s,l,c){Fh.subVectors(i,t),Cc.subVectors(s,t),Ih.crossVectors(Fh,Cc);let h=this.direction.dot(Ih),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ja.subVectors(this.origin,t);const m=d*this.direction.dot(Cc.crossVectors(Ja,Cc));if(m<0)return null;const p=d*this.direction.dot(Fh.cross(Ja));if(p<0||m+p>h)return null;const _=-d*Ja.dot(Ih);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,c,h,d,m,p,_,x,y,M,b,A,S){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,x,y,M,b,A,S)}set(t,i,s,l,c,h,d,m,p,_,x,y,M,b,A,S){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=x,g[14]=y,g[3]=M,g[7]=b,g[11]=A,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Ar.setFromMatrixColumn(t,0).length(),c=1/Ar.setFromMatrixColumn(t,1).length(),h=1/Ar.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const y=h*_,M=h*x,b=d*_,A=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=M+b*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*_,M=m*x,b=p*_,A=p*x;i[0]=y+A*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=M*d-b,i[6]=A+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*_,M=m*x,b=p*_,A=p*x;i[0]=y-A*d,i[4]=-h*x,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*_,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*_,M=h*x,b=d*_,A=d*x;i[0]=m*_,i[4]=b*p-M,i[8]=y*p+A,i[1]=m*x,i[5]=A*p+y,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,b=d*m,A=d*p;i[0]=m*_,i[4]=A-y*x,i[8]=b*x+M,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*x+b,i[10]=y-A*x}else if(t.order==="XZY"){const y=h*m,M=h*p,b=d*m,A=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=y*x+A,i[5]=h*_,i[9]=M*x-b,i[2]=b*x-M,i[6]=d*_,i[10]=A*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CS,t,wS)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),$a.crossVectors(s,ri),$a.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),$a.crossVectors(s,ri)),$a.normalize(),wc.crossVectors(ri,$a),l[0]=$a.x,l[4]=wc.x,l[8]=ri.x,l[1]=$a.y,l[5]=wc.y,l[9]=ri.y,l[2]=$a.z,l[6]=wc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],y=s[9],M=s[13],b=s[2],A=s[6],S=s[10],g=s[14],O=s[3],w=s[7],z=s[11],G=s[15],N=l[0],B=l[4],K=l[8],D=l[12],C=l[1],X=l[5],nt=l[9],lt=l[13],pt=l[2],ct=l[6],F=l[10],U=l[14],W=l[3],dt=l[7],vt=l[11],P=l[15];return c[0]=h*N+d*C+m*pt+p*W,c[4]=h*B+d*X+m*ct+p*dt,c[8]=h*K+d*nt+m*F+p*vt,c[12]=h*D+d*lt+m*U+p*P,c[1]=_*N+x*C+y*pt+M*W,c[5]=_*B+x*X+y*ct+M*dt,c[9]=_*K+x*nt+y*F+M*vt,c[13]=_*D+x*lt+y*U+M*P,c[2]=b*N+A*C+S*pt+g*W,c[6]=b*B+A*X+S*ct+g*dt,c[10]=b*K+A*nt+S*F+g*vt,c[14]=b*D+A*lt+S*U+g*P,c[3]=O*N+w*C+z*pt+G*W,c[7]=O*B+w*X+z*ct+G*dt,c[11]=O*K+w*nt+z*F+G*vt,c[15]=O*D+w*lt+z*U+G*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],y=t[10],M=t[14],b=t[3],A=t[7],S=t[11],g=t[15];return b*(+c*m*x-l*p*x-c*d*y+s*p*y+l*d*M-s*m*M)+A*(+i*m*M-i*p*y+c*h*y-l*h*M+l*p*_-c*m*_)+S*(+i*p*x-i*d*M-c*h*x+s*h*M+c*d*_-s*p*_)+g*(-l*d*_-i*m*x+i*d*y+l*h*x-s*h*y+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],y=t[10],M=t[11],b=t[12],A=t[13],S=t[14],g=t[15],O=x*S*p-A*y*p+A*m*M-d*S*M-x*m*g+d*y*g,w=b*y*p-_*S*p-b*m*M+h*S*M+_*m*g-h*y*g,z=_*A*p-b*x*p+b*d*M-h*A*M-_*d*g+h*x*g,G=b*x*m-_*A*m-b*d*y+h*A*y+_*d*S-h*x*S,N=i*O+s*w+l*z+c*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=O*B,t[1]=(A*y*c-x*S*c-A*l*M+s*S*M+x*l*g-s*y*g)*B,t[2]=(d*S*c-A*m*c+A*l*p-s*S*p-d*l*g+s*m*g)*B,t[3]=(x*m*c-d*y*c-x*l*p+s*y*p+d*l*M-s*m*M)*B,t[4]=w*B,t[5]=(_*S*c-b*y*c+b*l*M-i*S*M-_*l*g+i*y*g)*B,t[6]=(b*m*c-h*S*c-b*l*p+i*S*p+h*l*g-i*m*g)*B,t[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*M+i*m*M)*B,t[8]=z*B,t[9]=(b*x*c-_*A*c-b*s*M+i*A*M+_*s*g-i*x*g)*B,t[10]=(h*A*c-b*d*c+b*s*p-i*A*p-h*s*g+i*d*g)*B,t[11]=(_*d*c-h*x*c-_*s*p+i*x*p+h*s*M-i*d*M)*B,t[12]=G*B,t[13]=(_*A*l-b*x*l+b*s*y-i*A*y-_*s*S+i*x*S)*B,t[14]=(b*d*l-h*A*l-b*s*m+i*A*m+h*s*S-i*d*S)*B,t[15]=(h*x*l-_*d*l+_*s*m-i*x*m-h*s*y+i*d*y)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,x=d+d,y=c*p,M=c*_,b=c*x,A=h*_,S=h*x,g=d*x,O=m*p,w=m*_,z=m*x,G=s.x,N=s.y,B=s.z;return l[0]=(1-(A+g))*G,l[1]=(M+z)*G,l[2]=(b-w)*G,l[3]=0,l[4]=(M-z)*N,l[5]=(1-(y+g))*N,l[6]=(S+O)*N,l[7]=0,l[8]=(b+w)*B,l[9]=(S-O)*B,l[10]=(1-(y+A))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Ar.set(l[0],l[1],l[2]).length();const h=Ar.set(l[4],l[5],l[6]).length(),d=Ar.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ai.copy(this);const p=1/c,_=1/h,x=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=x,Ai.elements[9]*=x,Ai.elements[10]*=x,i.setFromRotationMatrix(Ai),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Hi,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),y=(i+t)/(i-t),M=(s+l)/(s-l);let b,A;if(m)b=c/(h-c),A=h*c/(h-c);else if(d===Hi)b=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===au)b=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Hi,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),y=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,A;if(m)b=1/(h-c),A=h/(h-c);else if(d===Hi)b=-2/(h-c),A=-(h+c)/(h-c);else if(d===au)b=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Ar=new Q,Ai=new tn,CS=new Q(0,0,0),wS=new Q(1,1,1),$a=new Q,wc=new Q,ri=new Q,_g=new tn,vg=new Fs;class Xi{constructor(t=0,i=0,s=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return _g.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_g,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return vg.setFromEuler(this),this.setFromQuaternion(vg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class dp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let DS=0;const yg=new Q,Rr=new Fs,da=new tn,Dc=new Q,Ko=new Q,US=new Q,LS=new Fs,Mg=new Q(1,0,0),Sg=new Q(0,1,0),bg=new Q(0,0,1),Eg={type:"added"},NS={type:"removed"},Cr={type:"childadded",child:null},Hh={type:"childremoved",child:null};class yn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new Q,i=new Xi,s=new Fs,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new he}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(Mg,t)}rotateY(t){return this.rotateOnAxis(Sg,t)}rotateZ(t){return this.rotateOnAxis(bg,t)}translateOnAxis(t,i){return yg.copy(t).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Mg,t)}translateY(t){return this.translateOnAxis(Sg,t)}translateZ(t){return this.translateOnAxis(bg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Dc.copy(t):Dc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Ko,Dc,this.up):da.lookAt(Dc,Ko,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(da),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(nn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eg),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(NS),Hh.child=t,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eg),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,US),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,LS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),x=h(t.shapes),y=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}yn.DEFAULT_UP=new Q(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new Q,pa=new Q,Gh=new Q,ma=new Q,wr=new Q,Dr=new Q,Tg=new Q,Vh=new Q,Xh=new Q,kh=new Q,Wh=new rn,Yh=new rn,qh=new rn;class ci{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ri.subVectors(l,i),pa.subVectors(s,i),Gh.subVectors(t,i);const h=Ri.dot(Ri),d=Ri.dot(pa),m=Ri.dot(Gh),p=pa.dot(pa),_=pa.dot(Gh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const y=1/x,M=(p*m-d*_)*y,b=(h*_-d*m)*y;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(h,ma.y),m.addScaledVector(d,ma.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Wh.setScalar(0),Yh.setScalar(0),qh.setScalar(0),Wh.fromBufferAttribute(t,i),Yh.fromBufferAttribute(t,s),qh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Wh,c.x),h.addScaledVector(Yh,c.y),h.addScaledVector(qh,c.z),h}static isFrontFacing(t,i,s,l){return Ri.subVectors(s,i),pa.subVectors(t,i),Ri.cross(pa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ri.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ci.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;wr.subVectors(l,s),Dr.subVectors(c,s),Vh.subVectors(t,s);const m=wr.dot(Vh),p=Dr.dot(Vh);if(m<=0&&p<=0)return i.copy(s);Xh.subVectors(t,l);const _=wr.dot(Xh),x=Dr.dot(Xh);if(_>=0&&x<=_)return i.copy(l);const y=m*x-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(wr,h);kh.subVectors(t,c);const M=wr.dot(kh),b=Dr.dot(kh);if(b>=0&&M<=b)return i.copy(c);const A=M*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Dr,d);const S=_*b-M*x;if(S<=0&&x-_>=0&&M-b>=0)return Tg.subVectors(c,l),d=(x-_)/(x-_+(M-b)),i.copy(l).addScaledVector(Tg,d);const g=1/(S+A+y);return h=A*g,d=y*g,i.copy(s).addScaledVector(wr,h).addScaledVector(Dr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const k_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function jh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class xe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ne.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ne.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ne.workingColorSpace){if(t=vS(t,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=jh(h,c,t+1/3),this.g=jh(h,c,t),this.b=jh(h,c,t-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(t,i=li){function s(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:re("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const s=k_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Ne.workingToColorSpace(zn.copy(this),t),Math.round(ye(zn.r*255,0,255))*65536+Math.round(ye(zn.g*255,0,255))*256+Math.round(ye(zn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ne.workingColorSpace){Ne.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ne.workingColorSpace){return Ne.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=li){Ne.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,l=zn.b;return t!==li?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+i,ts.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ts),t.getHSL(Uc);const s=Dh(ts.h,Uc.h,i),l=Dh(ts.s,Uc.s,i),c=Dh(ts.l,Uc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new xe;xe.NAMES=k_;let OS=0;class Gs extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Xr,this.side=ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==ba&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==fd&&(s.blendSrc=this.blendSrc),this.blendDst!==hd&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class W_ extends Gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=U_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mn=new Q,Lc=new ne;let PS=0;class Ui{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Jd,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(t),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ii(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ke(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ii(i,this.array)),i}setX(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ii(i,this.array)),i}setY(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ii(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ii(i,this.array)),i}setW(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jd&&(t.usage=this.usage),t}}class Y_ extends Ui{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class q_ extends Ui{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Gi extends Ui{constructor(t,i,s){super(new Float32Array(t),i,s)}}let zS=0;const vi=new tn,Zh=new yn,Ur=new Q,oi=new Qr,Qo=new Qr,Rn=new Q;class Li extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(V_(t)?q_:Y_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,s){return vi.makeTranslation(t,i,s),this.applyMatrix4(vi),this}scale(t,i,s){return vi.makeScale(t,i,s),this.applyMatrix4(vi),this}lookAt(t){return Zh.lookAt(t),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Gi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(oi.min,Qo.min),oi.expandByPoint(Rn),Rn.addVectors(oi.max,Qo.max),oi.expandByPoint(Rn)):(oi.expandByPoint(Qo.min),oi.expandByPoint(Qo.max))}oi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Rn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Rn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Rn.fromBufferAttribute(d,p),m&&(Ur.fromBufferAttribute(t,p),Rn.add(Ur)),l=Math.max(l,s.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<s.count;K++)d[K]=new Q,m[K]=new Q;const p=new Q,_=new Q,x=new Q,y=new ne,M=new ne,b=new ne,A=new Q,S=new Q;function g(K,D,C){p.fromBufferAttribute(s,K),_.fromBufferAttribute(s,D),x.fromBufferAttribute(s,C),y.fromBufferAttribute(c,K),M.fromBufferAttribute(c,D),b.fromBufferAttribute(c,C),_.sub(p),x.sub(p),M.sub(y),b.sub(y);const X=1/(M.x*b.y-b.x*M.y);isFinite(X)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(X),S.copy(x).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(X),d[K].add(A),d[D].add(A),d[C].add(A),m[K].add(S),m[D].add(S),m[C].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let K=0,D=O.length;K<D;++K){const C=O[K],X=C.start,nt=C.count;for(let lt=X,pt=X+nt;lt<pt;lt+=3)g(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const w=new Q,z=new Q,G=new Q,N=new Q;function B(K){G.fromBufferAttribute(l,K),N.copy(G);const D=d[K];w.copy(D),w.sub(G.multiplyScalar(G.dot(D))).normalize(),z.crossVectors(N,D);const X=z.dot(m[K])<0?-1:1;h.setXYZW(K,w.x,w.y,w.z,X)}for(let K=0,D=O.length;K<D;++K){const C=O[K],X=C.start,nt=C.count;for(let lt=X,pt=X+nt;lt<pt;lt+=3)B(t.getX(lt+0)),B(t.getX(lt+1)),B(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new Q,c=new Q,h=new Q,d=new Q,m=new Q,p=new Q,_=new Q,x=new Q;if(t)for(let y=0,M=t.count;y<M;y+=3){const b=t.getX(y+0),A=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Rn.fromBufferAttribute(t,i),Rn.normalize(),t.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,y=new p.constructor(m.length*_);let M=0,b=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*_;for(let g=0;g<_;g++)y[b++]=p[M++]}return new Ui(y,_,x)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const y=p[_],M=t(y,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,y=p.length;x<y;x++){const M=p[x];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let y=0,M=x.length;y<M;y++)_.push(x[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ag=new tn,ws=new hu,Nc=new fu,Rg=new Q,Oc=new Q,Pc=new Q,zc=new Q,Kh=new Q,Bc=new Q,Cg=new Q,Fc=new Q;class ki extends yn{constructor(t=new Li,i=new W_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Kh.fromBufferAttribute(x,t),h?Bc.addScaledVector(Kh,_):Bc.addScaledVector(Kh.sub(i),_))}i.add(Bc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Nc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Nc,Rg)===null||ws.origin.distanceToSquared(Rg)>(t.far-t.near)**2))&&(Ag.copy(c).invert(),ws.copy(t.ray).applyMatrix4(Ag),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=y.length;b<A;b++){const S=y[b],g=h[S.materialIndex],O=Math.max(S.start,M.start),w=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let z=O,G=w;z<G;z+=3){const N=d.getX(z),B=d.getX(z+1),K=d.getX(z+2);l=Ic(this,g,t,s,p,_,x,N,B,K),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=b,g=A;S<g;S+=3){const O=d.getX(S),w=d.getX(S+1),z=d.getX(S+2);l=Ic(this,h,t,s,p,_,x,O,w,z),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=y.length;b<A;b++){const S=y[b],g=h[S.materialIndex],O=Math.max(S.start,M.start),w=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let z=O,G=w;z<G;z+=3){const N=z,B=z+1,K=z+2;l=Ic(this,g,t,s,p,_,x,N,B,K),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=b,g=A;S<g;S+=3){const O=S,w=S+1,z=S+2;l=Ic(this,h,t,s,p,_,x,O,w,z),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function BS(r,t,i,s,l,c,h,d){let m;if(t.side===Kn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ba,d),m===null)return null;Fc.copy(d),Fc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:r}}function Ic(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Oc),r.getVertexPosition(m,Pc),r.getVertexPosition(p,zc);const _=BS(r,t,i,s,Oc,Pc,zc,Cg);if(_){const x=new Q;ci.getBarycoord(Cg,Oc,Pc,zc,x),l&&(_.uv=ci.getInterpolatedAttribute(l,d,m,p,x,new ne)),c&&(_.uv1=ci.getInterpolatedAttribute(c,d,m,p,x,new ne)),h&&(_.normal=ci.getInterpolatedAttribute(h,d,m,p,x,new Q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new Q,materialIndex:0};ci.getNormal(Oc,Pc,zc,y.normal),_.face=y,_.barycoord=x}return _}class Vs extends Li{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],x=[];let y=0,M=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Gi(p,3)),this.setAttribute("normal",new Gi(_,3)),this.setAttribute("uv",new Gi(x,2));function b(A,S,g,O,w,z,G,N,B,K,D){const C=z/B,X=G/K,nt=z/2,lt=G/2,pt=N/2,ct=B+1,F=K+1;let U=0,W=0;const dt=new Q;for(let vt=0;vt<F;vt++){const P=vt*X-lt;for(let at=0;at<ct;at++){const yt=at*C-nt;dt[A]=yt*O,dt[S]=P*w,dt[g]=pt,p.push(dt.x,dt.y,dt.z),dt[A]=0,dt[S]=0,dt[g]=N>0?1:-1,_.push(dt.x,dt.y,dt.z),x.push(at/B),x.push(1-vt/K),U+=1}}for(let vt=0;vt<K;vt++)for(let P=0;P<B;P++){const at=y+P+ct*vt,yt=y+P+ct*(vt+1),Tt=y+(P+1)+ct*(vt+1),Pt=y+(P+1)+ct*vt;m.push(at,yt,Pt),m.push(yt,Tt,Pt),W+=6}d.addGroup(M,W,D),M+=W,y+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=Zr(r[i]);for(const l in s)t[l]=s[l]}return t}function FS(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function j_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const IS={clone:Zr,merge:Gn};var HS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ea extends Gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HS,this.fragmentShader=GS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zr(t.uniforms),this.uniformsGroups=FS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Z_ extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new Q,wg=new ne,Dg=new ne;class wi extends Z_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$d*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $d*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,i){return this.getViewBounds(t,wg,Dg),i.subVectors(Dg,wg)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Lr=-90,Nr=1;class VS extends yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(Lr,Nr,t,i);l.layers=this.layers,this.add(l);const c=new wi(Lr,Nr,t,i);c.layers=this.layers,this.add(c);const h=new wi(Lr,Nr,t,i);h.layers=this.layers,this.add(h);const d=new wi(Lr,Nr,t,i);d.layers=this.layers,this.add(d);const m=new wi(Lr,Nr,t,i);m.layers=this.layers,this.add(m);const p=new wi(Lr,Nr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===au)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(x,y,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class K_ extends Bn{constructor(t=[],i=Yr,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class XS extends Is{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new K_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vs(5,5,5),c=new Ea({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ma});c.uniforms.tEquirect.value=i;const h=new ki(l,c),d=i.minFilter;return i.minFilter===zs&&(i.minFilter=yi),new VS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class al extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kS={type:"move"};class Qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,s),g=this._getHandJoint(p,A);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=_.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&y>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kS)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new al;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class WS extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class YS{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Jd,this.updateRanges=[],this.version=0,this.uuid=ls()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new Q;class ou{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.applyMatrix4(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.applyNormalMatrix(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.transformDirection(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ii(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ke(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ii(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ii(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ii(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ii(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){ru("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ui(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ou(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ru("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Q_ extends Gs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Or;const Jo=new Q,Pr=new Q,zr=new Q,Br=new ne,$o=new ne,J_=new tn,Hc=new Q,tl=new Q,Gc=new Q,Ug=new ne,Jh=new ne,Lg=new ne;class qS extends yn{constructor(t=new Q_){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new Li;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new YS(i,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new ou(s,3,0,!1)),Or.setAttribute("uv",new ou(s,2,3,!1))}this.geometry=Or,this.material=t,this.center=new ne(.5,.5),this.count=1}raycast(t,i){t.camera===null&&nn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pr.setFromMatrixScale(this.matrixWorld),J_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pr.multiplyScalar(-zr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;Vc(Hc.set(-.5,-.5,0),zr,h,Pr,l,c),Vc(tl.set(.5,-.5,0),zr,h,Pr,l,c),Vc(Gc.set(.5,.5,0),zr,h,Pr,l,c),Ug.set(0,0),Jh.set(1,0),Lg.set(1,1);let d=t.ray.intersectTriangle(Hc,tl,Gc,!1,Jo);if(d===null&&(Vc(tl.set(-.5,.5,0),zr,h,Pr,l,c),Jh.set(0,1),d=t.ray.intersectTriangle(Hc,Gc,tl,!1,Jo),d===null))return;const m=t.ray.origin.distanceTo(Jo);m<t.near||m>t.far||i.push({distance:m,point:Jo.clone(),uv:ci.getInterpolation(Jo,Hc,tl,Gc,Ug,Jh,Lg,new ne),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vc(r,t,i,s,l,c){Br.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?($o.x=c*Br.x-l*Br.y,$o.y=l*Br.x+c*Br.y):$o.copy(Br),r.copy(t),r.x+=$o.x,r.y+=$o.y,r.applyMatrix4(J_)}class jS extends Bn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=ui,_=ui,x,y){super(null,h,d,m,p,_,l,c,x,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $h=new Q,ZS=new Q,KS=new he;class is{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=$h.subVectors(s,i).cross(ZS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta($h),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||KS.getNormalMatrix(t),l=this.coplanarPoint($h).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new fu,QS=new ne(.5,.5),Xc=new Q;class pp{constructor(t=new is,i=new is,s=new is,l=new is,c=new is,h=new is){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Hi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],x=c[5],y=c[6],M=c[7],b=c[8],A=c[9],S=c[10],g=c[11],O=c[12],w=c[13],z=c[14],G=c[15];if(l[0].setComponents(p-h,M-_,g-b,G-O).normalize(),l[1].setComponents(p+h,M+_,g+b,G+O).normalize(),l[2].setComponents(p+d,M+x,g+A,G+w).normalize(),l[3].setComponents(p-d,M-x,g-A,G-w).normalize(),s)l[4].setComponents(m,y,S,z).normalize(),l[5].setComponents(p-m,M-y,g-S,G-z).normalize();else if(l[4].setComponents(p-m,M-y,g-S,G-z).normalize(),i===Hi)l[5].setComponents(p+m,M+y,g+S,G+z).normalize();else if(i===au)l[5].setComponents(m,y,S,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=QS.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Xc.x=l.normal.x>0?t.max.x:t.min.x,Xc.y=l.normal.y>0?t.max.y:t.min.y,Xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $_ extends Gs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lu=new Q,cu=new Q,Ng=new tn,el=new hu,kc=new fu,td=new Q,Og=new Q;class JS extends yn{constructor(t=new Li,i=new $_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)lu.fromBufferAttribute(i,l-1),cu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=lu.distanceTo(cu);t.setAttribute("lineDistance",new Gi(s,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;Ng.copy(l).invert(),el.copy(t.ray).applyMatrix4(Ng);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,y=s.attributes.position;if(_!==null){const M=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let A=M,S=b-1;A<S;A+=p){const g=_.getX(A),O=_.getX(A+1),w=Wc(this,t,el,m,g,O,A);w&&i.push(w)}if(this.isLineLoop){const A=_.getX(b-1),S=_.getX(M),g=Wc(this,t,el,m,A,S,b-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),b=Math.min(y.count,h.start+h.count);for(let A=M,S=b-1;A<S;A+=p){const g=Wc(this,t,el,m,A,A+1,A);g&&i.push(g)}if(this.isLineLoop){const A=Wc(this,t,el,m,b-1,M,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Wc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(lu.fromBufferAttribute(d,l),cu.fromBufferAttribute(d,c),i.distanceSqToSegment(lu,cu,td,Og)>s)return;td.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(td);if(!(p<t.near||p>t.far))return{distance:p,point:Og.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const Pg=new Q,zg=new Q;class $S extends JS{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Pg.fromBufferAttribute(i,l),zg.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Pg.distanceTo(zg);t.setAttribute("lineDistance",new Gi(s,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tb extends Bn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tv extends Bn{constructor(t,i,s=Bs,l,c,h,d=ui,m=ui,p,_=cl,x=1){if(_!==cl&&_!==ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:x};super(y,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ev extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const Yc=new Q,qc=new Q,ed=new Q,jc=new ci;class eb extends Li{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(rl*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],_=["a","b","c"],x=new Array(3),y={},M=[];for(let b=0;b<m;b+=3){h?(p[0]=h.getX(b),p[1]=h.getX(b+1),p[2]=h.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:A,b:S,c:g}=jc;if(A.fromBufferAttribute(d,p[0]),S.fromBufferAttribute(d,p[1]),g.fromBufferAttribute(d,p[2]),jc.getNormal(ed),x[0]=`${Math.round(A.x*l)},${Math.round(A.y*l)},${Math.round(A.z*l)}`,x[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,x[2]=`${Math.round(g.x*l)},${Math.round(g.y*l)},${Math.round(g.z*l)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let O=0;O<3;O++){const w=(O+1)%3,z=x[O],G=x[w],N=jc[_[O]],B=jc[_[w]],K=`${z}_${G}`,D=`${G}_${z}`;D in y&&y[D]?(ed.dot(y[D].normal)<=c&&(M.push(N.x,N.y,N.z),M.push(B.x,B.y,B.z)),y[D]=null):K in y||(y[K]={index0:p[O],index1:p[w],normal:ed.clone()})}}for(const b in y)if(y[b]){const{index0:A,index1:S}=y[b];Yc.fromBufferAttribute(d,A),qc.fromBufferAttribute(d,S),M.push(Yc.x,Yc.y,Yc.z),M.push(qc.x,qc.y,qc.z)}this.setAttribute("position",new Gi(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class du extends Li{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=t/d,y=i/m,M=[],b=[],A=[],S=[];for(let g=0;g<_;g++){const O=g*y-h;for(let w=0;w<p;w++){const z=w*x-c;b.push(z,-O,0),A.push(0,0,1),S.push(w/d),S.push(1-g/m)}}for(let g=0;g<m;g++)for(let O=0;O<d;O++){const w=O+p*g,z=O+p*(g+1),G=O+1+p*(g+1),N=O+1+p*g;M.push(w,z,N),M.push(z,G,N)}this.setIndex(M),this.setAttribute("position",new Gi(b,3)),this.setAttribute("normal",new Gi(A,3)),this.setAttribute("uv",new Gi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.width,t.height,t.widthSegments,t.heightSegments)}}class nb extends Gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=H_,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ib extends Gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ab extends Gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nv extends yn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class sb extends nv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const nd=new tn,Bg=new Q,Fg=new Q;class rb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pp,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Bg.setFromMatrixPosition(t.matrixWorld),i.position.copy(Bg),Fg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Fg),i.updateMatrixWorld(),nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(nd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mp extends Z_{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ob extends rb{constructor(){super(new mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ig extends nv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new ob}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lb extends wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Hg=new tn;class cb{constructor(t,i,s=0,l=1/0){this.ray=new hu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):nn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Hg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hg),this}intersectObject(t,i=!0,s=[]){return tp(t,this,s,i),s.sort(Gg),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)tp(t[l],this,s,i);return s.sort(Gg),s}}function Gg(r,t){return r.distance-t.distance}function tp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)tp(c[h],t,i,!0)}}class Vg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ye(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ub extends Hs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Xg(r,t,i,s){const l=fb(s);switch(i){case B_:return r*t;case I_:return r*t/l.components*l.byteLength;case lp:return r*t/l.components*l.byteLength;case cp:return r*t*2/l.components*l.byteLength;case up:return r*t*2/l.components*l.byteLength;case F_:return r*t*3/l.components*l.byteLength;case Di:return r*t*4/l.components*l.byteLength;case fp:return r*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Td:case Rd:return Math.max(r,16)*Math.max(t,8)/4;case Ed:case Ad:return Math.max(r,8)*Math.max(t,8)/2;case Cd:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Wd:case Yd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case jd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Kd:case Qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fb(r){switch(r){case Vi:case N_:return{byteLength:1,components:1};case ol:case O_:case Kr:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case Bs:case sp:case ya:return{byteLength:4,components:1};case P_:case z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);function iv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function hb(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<x.length;M++){const b=x[y],A=x[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++y,x[y]=A)}x.length=y+1;for(let M=0,b=x.length;M<b;M++){const A=x[M];r.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ab=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",kb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,r1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,V1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ME=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:db,alphahash_pars_fragment:pb,alphamap_fragment:mb,alphamap_pars_fragment:xb,alphatest_fragment:gb,alphatest_pars_fragment:_b,aomap_fragment:vb,aomap_pars_fragment:yb,batching_pars_vertex:Mb,batching_vertex:Sb,begin_vertex:bb,beginnormal_vertex:Eb,bsdfs:Tb,iridescence_fragment:Ab,bumpmap_pars_fragment:Rb,clipping_planes_fragment:Cb,clipping_planes_pars_fragment:wb,clipping_planes_pars_vertex:Db,clipping_planes_vertex:Ub,color_fragment:Lb,color_pars_fragment:Nb,color_pars_vertex:Ob,color_vertex:Pb,common:zb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:Fb,displacementmap_pars_vertex:Ib,displacementmap_vertex:Hb,emissivemap_fragment:Gb,emissivemap_pars_fragment:Vb,colorspace_fragment:Xb,colorspace_pars_fragment:kb,envmap_fragment:Wb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:qb,envmap_pars_vertex:jb,envmap_physical_pars_fragment:s1,envmap_vertex:Zb,fog_vertex:Kb,fog_pars_vertex:Qb,fog_fragment:Jb,fog_pars_fragment:$b,gradientmap_pars_fragment:t1,lightmap_pars_fragment:e1,lights_lambert_fragment:n1,lights_lambert_pars_fragment:i1,lights_pars_begin:a1,lights_toon_fragment:r1,lights_toon_pars_fragment:o1,lights_phong_fragment:l1,lights_phong_pars_fragment:c1,lights_physical_fragment:u1,lights_physical_pars_fragment:f1,lights_fragment_begin:h1,lights_fragment_maps:d1,lights_fragment_end:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:x1,logdepthbuf_pars_vertex:g1,logdepthbuf_vertex:_1,map_fragment:v1,map_pars_fragment:y1,map_particle_fragment:M1,map_particle_pars_fragment:S1,metalnessmap_fragment:b1,metalnessmap_pars_fragment:E1,morphinstance_vertex:T1,morphcolor_vertex:A1,morphnormal_vertex:R1,morphtarget_pars_vertex:C1,morphtarget_vertex:w1,normal_fragment_begin:D1,normal_fragment_maps:U1,normal_pars_fragment:L1,normal_pars_vertex:N1,normal_vertex:O1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:z1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:I1,opaque_fragment:H1,packing:G1,premultiplied_alpha_fragment:V1,project_vertex:X1,dithering_fragment:k1,dithering_pars_fragment:W1,roughnessmap_fragment:Y1,roughnessmap_pars_fragment:q1,shadowmap_pars_fragment:j1,shadowmap_pars_vertex:Z1,shadowmap_vertex:K1,shadowmask_pars_fragment:Q1,skinbase_vertex:J1,skinning_pars_vertex:$1,skinning_vertex:tE,skinnormal_vertex:eE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:aE,tonemapping_pars_fragment:sE,transmission_fragment:rE,transmission_pars_fragment:oE,uv_pars_fragment:lE,uv_pars_vertex:cE,uv_vertex:uE,worldpos_vertex:fE,background_vert:hE,background_frag:dE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:xE,cube_frag:gE,depth_vert:_E,depth_frag:vE,distanceRGBA_vert:yE,distanceRGBA_frag:ME,equirect_vert:SE,equirect_frag:bE,linedashed_vert:EE,linedashed_frag:TE,meshbasic_vert:AE,meshbasic_frag:RE,meshlambert_vert:CE,meshlambert_frag:wE,meshmatcap_vert:DE,meshmatcap_frag:UE,meshnormal_vert:LE,meshnormal_frag:NE,meshphong_vert:OE,meshphong_frag:PE,meshphysical_vert:zE,meshphysical_frag:BE,meshtoon_vert:FE,meshtoon_frag:IE,points_vert:HE,points_frag:GE,shadow_vert:VE,shadow_frag:XE,sprite_vert:kE,sprite_frag:WE},Nt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Fi={basic:{uniforms:Gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Gn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Gn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Gn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Gn([Nt.points,Nt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Gn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Gn([Nt.common,Nt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Gn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Gn([Nt.sprite,Nt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Gn([Nt.common,Nt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Gn([Nt.lights,Nt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Fi.physical={uniforms:Gn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Zc={r:0,b:0,g:0},Us=new Xi,YE=new tn;function qE(r,t,i,s,l,c,h){const d=new xe(0);let m=c===!0?0:1,p,_,x=null,y=0,M=null;function b(w){let z=w.isScene===!0?w.background:null;return z&&z.isTexture&&(z=(w.backgroundBlurriness>0?i:t).get(z)),z}function A(w){let z=!1;const G=b(w);G===null?g(d,m):G&&G.isColor&&(g(G,1),z=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,h):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||z)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(w,z){const G=b(z);G&&(G.isCubeTexture||G.mapping===uu)?(_===void 0&&(_=new ki(new Vs(1,1,1),new Ea({name:"BackgroundCubeMaterial",uniforms:Zr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(N,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Us.copy(z.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(Us)),_.material.toneMapped=Ne.getTransfer(G.colorSpace)!==Xe,(x!==G||y!==G.version||M!==r.toneMapping)&&(_.material.needsUpdate=!0,x=G,y=G.version,M=r.toneMapping),_.layers.enableAll(),w.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new ki(new du(2,2),new Ea({name:"BackgroundMaterial",uniforms:Zr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(G.colorSpace)!==Xe,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(x!==G||y!==G.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,x=G,y=G.version,M=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function g(w,z){w.getRGB(Zc,j_(r)),s.buffers.color.setClear(Zc.r,Zc.g,Zc.b,z,h)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,z=1){d.set(w),m=z,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,g(d,m)},render:A,addToRenderList:S,dispose:O}}function jE(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(C,X,nt,lt,pt){let ct=!1;const F=x(lt,nt,X);c!==F&&(c=F,p(c.object)),ct=M(C,lt,nt,pt),ct&&b(C,lt,nt,pt),pt!==null&&t.update(pt,r.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,z(C,X,nt,lt),pt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function x(C,X,nt){const lt=nt.wireframe===!0;let pt=s[C.id];pt===void 0&&(pt={},s[C.id]=pt);let ct=pt[X.id];ct===void 0&&(ct={},pt[X.id]=ct);let F=ct[lt];return F===void 0&&(F=y(m()),ct[lt]=F),F}function y(C){const X=[],nt=[],lt=[];for(let pt=0;pt<i;pt++)X[pt]=0,nt[pt]=0,lt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:nt,attributeDivisors:lt,object:C,attributes:{},index:null}}function M(C,X,nt,lt){const pt=c.attributes,ct=X.attributes;let F=0;const U=nt.getAttributes();for(const W in U)if(U[W].location>=0){const vt=pt[W];let P=ct[W];if(P===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),vt===void 0||vt.attribute!==P||P&&vt.data!==P.data)return!0;F++}return c.attributesNum!==F||c.index!==lt}function b(C,X,nt,lt){const pt={},ct=X.attributes;let F=0;const U=nt.getAttributes();for(const W in U)if(U[W].location>=0){let vt=ct[W];vt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor));const P={};P.attribute=vt,vt&&vt.data&&(P.data=vt.data),pt[W]=P,F++}c.attributes=pt,c.attributesNum=F,c.index=lt}function A(){const C=c.newAttributes;for(let X=0,nt=C.length;X<nt;X++)C[X]=0}function S(C){g(C,0)}function g(C,X){const nt=c.newAttributes,lt=c.enabledAttributes,pt=c.attributeDivisors;nt[C]=1,lt[C]===0&&(r.enableVertexAttribArray(C),lt[C]=1),pt[C]!==X&&(r.vertexAttribDivisor(C,X),pt[C]=X)}function O(){const C=c.newAttributes,X=c.enabledAttributes;for(let nt=0,lt=X.length;nt<lt;nt++)X[nt]!==C[nt]&&(r.disableVertexAttribArray(nt),X[nt]=0)}function w(C,X,nt,lt,pt,ct,F){F===!0?r.vertexAttribIPointer(C,X,nt,pt,ct):r.vertexAttribPointer(C,X,nt,lt,pt,ct)}function z(C,X,nt,lt){A();const pt=lt.attributes,ct=nt.getAttributes(),F=X.defaultAttributeValues;for(const U in ct){const W=ct[U];if(W.location>=0){let dt=pt[U];if(dt===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(dt=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(dt=C.instanceColor)),dt!==void 0){const vt=dt.normalized,P=dt.itemSize,at=t.get(dt);if(at===void 0)continue;const yt=at.buffer,Tt=at.type,Pt=at.bytesPerElement,st=Tt===r.INT||Tt===r.UNSIGNED_INT||dt.gpuType===sp;if(dt.isInterleavedBufferAttribute){const ft=dt.data,wt=ft.stride,Ht=dt.offset;if(ft.isInstancedInterleavedBuffer){for(let kt=0;kt<W.locationSize;kt++)g(W.location+kt,ft.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let kt=0;kt<W.locationSize;kt++)S(W.location+kt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let kt=0;kt<W.locationSize;kt++)w(W.location+kt,P/W.locationSize,Tt,vt,wt*Pt,(Ht+P/W.locationSize*kt)*Pt,st)}else{if(dt.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)g(W.location+ft,dt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ft=0;ft<W.locationSize;ft++)S(W.location+ft);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let ft=0;ft<W.locationSize;ft++)w(W.location+ft,P/W.locationSize,Tt,vt,P*Pt,P/W.locationSize*ft*Pt,st)}}else if(F!==void 0){const vt=F[U];if(vt!==void 0)switch(vt.length){case 2:r.vertexAttrib2fv(W.location,vt);break;case 3:r.vertexAttrib3fv(W.location,vt);break;case 4:r.vertexAttrib4fv(W.location,vt);break;default:r.vertexAttrib1fv(W.location,vt)}}}}O()}function G(){K();for(const C in s){const X=s[C];for(const nt in X){const lt=X[nt];for(const pt in lt)_(lt[pt].object),delete lt[pt];delete X[nt]}delete s[C]}}function N(C){if(s[C.id]===void 0)return;const X=s[C.id];for(const nt in X){const lt=X[nt];for(const pt in lt)_(lt[pt].object),delete lt[pt];delete X[nt]}delete s[C.id]}function B(C){for(const X in s){const nt=s[X];if(nt[C.id]===void 0)continue;const lt=nt[C.id];for(const pt in lt)_(lt[pt].object),delete lt[pt];delete nt[C.id]}}function K(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:S,disableUnusedAttributes:O}}function ZE(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let M=0;for(let b=0;b<x;b++)M+=_[b];i.update(M,s,1)}function m(p,_,x,y){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],_[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,y,0,x);let b=0;for(let A=0;A<x;A++)b+=_[A]*y[A];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function KE(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Di&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const K=B===Kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Vi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ya&&!K)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(re("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),z=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:O,maxVaryings:w,maxFragmentUniforms:z,vertexTextures:G,maxSamples:N}}function QE(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new is,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||s!==0||l;return l=y,s=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){i=_(x,y,0)},this.setState=function(x,y,M){const b=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,g=r.get(x);if(!l||b===null||b.length===0||c&&!S)c?_(null):p();else{const O=c?0:s,w=O*4;let z=g.clippingState||null;m.value=z,z=_(b,y,w,M);for(let G=0;G!==w;++G)z[G]=i[G];g.clippingState=z,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,y,M,b){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=m.value,b!==!0||S===null){const g=M+A*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(S===null||S.length<g)&&(S=new Float32Array(g));for(let w=0,z=M;w!==A;++w,z+=4)h.copy(x[w]).applyMatrix4(O,d),h.normal.toArray(S,z),S[z+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function JE(r){let t=new WeakMap;function i(h,d){return d===yd?h.mapping=Yr:d===Md&&(h.mapping=qr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===yd||d===Md)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new XS(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const ss=4,kg=[.125,.215,.35,.446,.526,.582],Os=20,$E=256,nl=new mp,Wg=new xe;let id=null,ad=0,sd=0,rd=!1;const t3=new Q;class Yg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=t3}=c;id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(id,ad,sd),this._renderer.xr.enabled=rd,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Yr||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Kr,format:Di,colorSpace:jr,depthBuffer:!1},l=qg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e3(c)),this._blurMaterial=i3(c,t,i),this._ggxMaterial=n3(c,t,i)}return l}_compileMaterial(t){const i=new ki(new Li,t);this._renderer.compile(i,nl)}_sceneToCubeUV(t,i,s,l,c){const m=new wi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,M=x.toneMapping;x.getClearColor(Wg),x.toneMapping=os,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ki(new Vs,new W_({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let g=!1;const O=t.background;O?O.isColor&&(S.color.copy(O),t.background=null,g=!0):(S.color.copy(Wg),g=!0);for(let w=0;w<6;w++){const z=w%3;z===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[w],c.y,c.z)):z===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[w]));const G=this._cubeSize;Fr(l,z*G,w>2?G:0,G,G),x.setRenderTarget(l),g&&x.render(A,m),x.render(t,m)}x.toneMapping=M,x.autoClear=y,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Yr||t.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jg());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Fr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,nl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),y=.05+p*.95,M=x*y,{_lodMax:b}=this,A=this._sizeLods[s],S=3*A*(s>b-ss?s-b+ss:0),g=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Fr(c,S,g,3*A,2*A),l.setRenderTarget(c),l.render(d,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Fr(t,S,g,3*A,2*A),l.setRenderTarget(t),l.render(d,nl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const y=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Os-1),A=c/b,S=isFinite(c)?1+Math.floor(_*A):Os;S>Os&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Os}`);const g=[];let O=0;for(let B=0;B<Os;++B){const K=B/A,D=Math.exp(-K*K/2);g.push(D),B===0?O+=D:B<S&&(O+=2*D)}for(let B=0;B<g.length;B++)g[B]=g[B]/O;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:w}=this;y.dTheta.value=b,y.mipInt.value=w-s;const z=this._sizeLods[l],G=3*z*(l>w-ss?l-w+ss:0),N=4*(this._cubeSize-z);Fr(i,G,N,3*z,2*z),m.setRenderTarget(i),m.render(x,nl)}}function e3(r){const t=[],i=[],s=[];let l=r;const c=r-ss+1+kg.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-ss?m=kg[h-r+ss-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,y=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,b=6,A=3,S=2,g=1,O=new Float32Array(A*b*M),w=new Float32Array(S*b*M),z=new Float32Array(g*b*M);for(let N=0;N<M;N++){const B=N%3*2/3-1,K=N>2?0:-1,D=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];O.set(D,A*b*N),w.set(y,S*b*N);const C=[N,N,N,N,N,N];z.set(C,g*b*N)}const G=new Li;G.setAttribute("position",new Ui(O,A)),G.setAttribute("uv",new Ui(w,S)),G.setAttribute("faceIndex",new Ui(z,g)),s.push(new ki(G,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function qg(r,t,i){const s=new Is(r,t,i);return s.texture.mapping=uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function n3(r,t,i){return new Ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$E,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function i3(r,t,i){const s=new Float32Array(Os),l=new Q(0,1,0);return new Ea({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function jg(){return new Ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Zg(){return new Ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function a3(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===yd||m===Md,_=m===Yr||m===qr;if(p||_){let x=t.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new Yg(r)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Yg(r)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function s3(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&fl("WebGLRenderer: "+s+" extension not supported."),l}}}function r3(r,t,i,s){const l={},c=new WeakMap;function h(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete l[y.id];const M=c.get(y);M&&(t.remove(M),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const M in y)t.update(y[M],r.ARRAY_BUFFER)}function p(x){const y=[],M=x.index,b=x.attributes.position;let A=0;if(M!==null){const O=M.array;A=M.version;for(let w=0,z=O.length;w<z;w+=3){const G=O[w+0],N=O[w+1],B=O[w+2];y.push(G,N,N,B,B,G)}}else if(b!==void 0){const O=b.array;A=b.version;for(let w=0,z=O.length/3-1;w<z;w+=3){const G=w+0,N=w+1,B=w+2;y.push(G,N,N,B,B,G)}}else return;const S=new(V_(y)?q_:Y_)(y,1);S.version=A;const g=c.get(x);g&&t.remove(g),c.set(x,S)}function _(x){const y=c.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function o3(r,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,M){r.drawElements(s,M,c,y*h),i.update(M,s,1)}function p(y,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,y*h,b),i.update(M,s,b))}function _(y,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,y,0,b);let S=0;for(let g=0;g<b;g++)S+=M[g];i.update(S,s,1)}function x(y,M,b,A){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<y.length;g++)p(y[g]/h,M[g],A[g]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,y,0,A,0,b);let g=0;for(let O=0;O<b;O++)g+=M[O]*A[O];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function l3(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:nn("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function c3(r,t,i){const s=new WeakMap,l=new rn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==x){let C=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let z=0;b===!0&&(z=1),A===!0&&(z=2),S===!0&&(z=3);let G=d.attributes.position.count*z,N=1;G>t.maxTextureSize&&(N=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const B=new Float32Array(G*N*4*x),K=new X_(B,G,N,x);K.type=ya,K.needsUpdate=!0;const D=z*4;for(let X=0;X<x;X++){const nt=g[X],lt=O[X],pt=w[X],ct=G*N*4*X;for(let F=0;F<nt.count;F++){const U=F*D;b===!0&&(l.fromBufferAttribute(nt,F),B[ct+U+0]=l.x,B[ct+U+1]=l.y,B[ct+U+2]=l.z,B[ct+U+3]=0),A===!0&&(l.fromBufferAttribute(lt,F),B[ct+U+4]=l.x,B[ct+U+5]=l.y,B[ct+U+6]=l.z,B[ct+U+7]=0),S===!0&&(l.fromBufferAttribute(pt,F),B[ct+U+8]=l.x,B[ct+U+9]=l.y,B[ct+U+10]=l.z,B[ct+U+11]=pt.itemSize===4?l.w:1)}}y={count:x,texture:K,size:new ne(G,N)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function u3(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const av=new Bn,Kg=new tv(1,1),sv=new X_,rv=new AS,ov=new K_,Qg=[],Jg=[],$g=new Float32Array(16),t_=new Float32Array(9),e_=new Float32Array(4);function Jr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Qg[l];if(c===void 0&&(c=new Float32Array(l),Qg[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function Mn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Sn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function mu(r,t){let i=Jg[t];i===void 0&&(i=new Int32Array(t),Jg[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function f3(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function h3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2fv(this.addr,t),Sn(i,t)}}function d3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Mn(i,t))return;r.uniform3fv(this.addr,t),Sn(i,t)}}function p3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4fv(this.addr,t),Sn(i,t)}}function m3(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(Mn(i,s))return;e_.set(s),r.uniformMatrix2fv(this.addr,!1,e_),Sn(i,s)}}function x3(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(Mn(i,s))return;t_.set(s),r.uniformMatrix3fv(this.addr,!1,t_),Sn(i,s)}}function g3(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(Mn(i,s))return;$g.set(s),r.uniformMatrix4fv(this.addr,!1,$g),Sn(i,s)}}function _3(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function v3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2iv(this.addr,t),Sn(i,t)}}function y3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Mn(i,t))return;r.uniform3iv(this.addr,t),Sn(i,t)}}function M3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4iv(this.addr,t),Sn(i,t)}}function S3(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function b3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2uiv(this.addr,t),Sn(i,t)}}function E3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Mn(i,t))return;r.uniform3uiv(this.addr,t),Sn(i,t)}}function T3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4uiv(this.addr,t),Sn(i,t)}}function A3(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Kg.compareFunction=G_,c=Kg):c=av,i.setTexture2D(t||c,l)}function R3(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||rv,l)}function C3(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ov,l)}function w3(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||sv,l)}function D3(r){switch(r){case 5126:return f3;case 35664:return h3;case 35665:return d3;case 35666:return p3;case 35674:return m3;case 35675:return x3;case 35676:return g3;case 5124:case 35670:return _3;case 35667:case 35671:return v3;case 35668:case 35672:return y3;case 35669:case 35673:return M3;case 5125:return S3;case 36294:return b3;case 36295:return E3;case 36296:return T3;case 35678:case 36198:case 36298:case 36306:case 35682:return A3;case 35679:case 36299:case 36307:return R3;case 35680:case 36300:case 36308:case 36293:return C3;case 36289:case 36303:case 36311:case 36292:return w3}}function U3(r,t){r.uniform1fv(this.addr,t)}function L3(r,t){const i=Jr(t,this.size,2);r.uniform2fv(this.addr,i)}function N3(r,t){const i=Jr(t,this.size,3);r.uniform3fv(this.addr,i)}function O3(r,t){const i=Jr(t,this.size,4);r.uniform4fv(this.addr,i)}function P3(r,t){const i=Jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function z3(r,t){const i=Jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function B3(r,t){const i=Jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function F3(r,t){r.uniform1iv(this.addr,t)}function I3(r,t){r.uniform2iv(this.addr,t)}function H3(r,t){r.uniform3iv(this.addr,t)}function G3(r,t){r.uniform4iv(this.addr,t)}function V3(r,t){r.uniform1uiv(this.addr,t)}function X3(r,t){r.uniform2uiv(this.addr,t)}function k3(r,t){r.uniform3uiv(this.addr,t)}function W3(r,t){r.uniform4uiv(this.addr,t)}function Y3(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||av,c[h])}function q3(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||rv,c[h])}function j3(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ov,c[h])}function Z3(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||sv,c[h])}function K3(r){switch(r){case 5126:return U3;case 35664:return L3;case 35665:return N3;case 35666:return O3;case 35674:return P3;case 35675:return z3;case 35676:return B3;case 5124:case 35670:return F3;case 35667:case 35671:return I3;case 35668:case 35672:return H3;case 35669:case 35673:return G3;case 5125:return V3;case 36294:return X3;case 36295:return k3;case 36296:return W3;case 35678:case 36198:case 36298:case 36306:case 35682:return Y3;case 35679:case 36299:case 36307:return q3;case 35680:case 36300:case 36308:case 36293:return j3;case 36289:case 36303:case 36311:case 36292:return Z3}}class Q3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=D3(i.type)}}class J3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=K3(i.type)}}class $3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const od=/(\w+)(\])?(\[|\.)?/g;function n_(r,t){r.seq.push(t),r.map[t.id]=t}function tT(r,t,i){const s=r.name,l=s.length;for(od.lastIndex=0;;){const c=od.exec(s),h=od.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){n_(i,p===void 0?new Q3(d,r,t):new J3(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new $3(d),n_(i,x)),i=x}}}class nu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);tT(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function i_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const eT=37297;let nT=0;function iT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const a_=new he;function aT(r){Ne._getMatrix(a_,Ne.workingColorSpace,r);const t=`mat3( ${a_.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(r)){case iu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function s_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+iT(r.getShaderSource(t),d)}else return c}function sT(r,t){const i=aT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function rT(r,t){let i;switch(t){case $M:i="Linear";break;case tS:i="Reinhard";break;case eS:i="Cineon";break;case nS:i="ACESFilmic";break;case aS:i="AgX";break;case sS:i="Neutral";break;case iS:i="Custom";break;default:re("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new Q;function oT(){Ne.getLuminanceCoefficients(Kc);const r=Kc.x.toFixed(4),t=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function cT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function uT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function sl(r){return r!==""}function r_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function o_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(fT,dT)}const hT=new Map;function dT(r,t){let i=me[t];if(i===void 0){const s=hT.get(t);if(s!==void 0)i=me[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ep(i)}const pT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(r){return r.replace(pT,mT)}function mT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function c_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xT(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===w_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===D_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ga&&(t="SHADOWMAP_TYPE_VSM"),t}function gT(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Yr:case qr:t="ENVMAP_TYPE_CUBE";break;case uu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _T(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===qr&&(t="ENVMAP_MODE_REFRACTION"),t}function vT(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case U_:t="ENVMAP_BLENDING_MULTIPLY";break;case QM:t="ENVMAP_BLENDING_MIX";break;case JM:t="ENVMAP_BLENDING_ADD";break}return t}function yT(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function MT(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=xT(i),p=gT(i),_=_T(i),x=vT(i),y=yT(i),M=lT(i),b=cT(c),A=l.createProgram();let S,g,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(sl).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(sl).join(`
`),g.length>0&&(g+=`
`)):(S=[c_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),g=[c_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==os?"#define TONE_MAPPING":"",i.toneMapping!==os?me.tonemapping_pars_fragment:"",i.toneMapping!==os?rT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,sT("linearToOutputTexel",i.outputColorSpace),oT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),h=ep(h),h=r_(h,i),h=o_(h,i),d=ep(d),d=r_(d,i),d=o_(d,i),h=l_(h),d=l_(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=O+S+h,z=O+g+d,G=i_(l,l.VERTEX_SHADER,w),N=i_(l,l.FRAGMENT_SHADER,z);l.attachShader(A,G),l.attachShader(A,N),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(X){if(r.debug.checkShaderErrors){const nt=l.getProgramInfoLog(A)||"",lt=l.getShaderInfoLog(G)||"",pt=l.getShaderInfoLog(N)||"",ct=nt.trim(),F=lt.trim(),U=pt.trim();let W=!0,dt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,G,N);else{const vt=s_(l,G,"vertex"),P=s_(l,N,"fragment");nn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ct+`
`+vt+`
`+P)}else ct!==""?re("WebGLProgram: Program Info Log:",ct):(F===""||U==="")&&(dt=!1);dt&&(X.diagnostics={runnable:W,programLog:ct,vertexShader:{log:F,prefix:S},fragmentShader:{log:U,prefix:g}})}l.deleteShader(G),l.deleteShader(N),K=new nu(l,A),D=uT(l,A)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,eT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=N,this}let ST=0;class bT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new ET(t),i.set(t,s)),s}}class ET{constructor(t){this.id=ST++,this.code=t,this.usedTimes=0}}function TT(r,t,i,s,l,c,h){const d=new dp,m=new bT,p=new Set,_=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,C,X,nt,lt){const pt=nt.fog,ct=lt.geometry,F=D.isMeshStandardMaterial?nt.environment:null,U=(D.isMeshStandardMaterial?i:t).get(D.envMap||F),W=U&&U.mapping===uu?U.image.height:null,dt=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&re("WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const vt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,P=vt!==void 0?vt.length:0;let at=0;ct.morphAttributes.position!==void 0&&(at=1),ct.morphAttributes.normal!==void 0&&(at=2),ct.morphAttributes.color!==void 0&&(at=3);let yt,Tt,Pt,st;if(dt){const we=Fi[dt];yt=we.vertexShader,Tt=we.fragmentShader}else yt=D.vertexShader,Tt=D.fragmentShader,m.update(D),Pt=m.getVertexShaderID(D),st=m.getFragmentShaderID(D);const ft=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Ht=lt.isInstancedMesh===!0,kt=lt.isBatchedMesh===!0,ce=!!D.map,on=!!D.matcap,de=!!U,Ce=!!D.aoMap,H=!!D.lightMap,pe=!!D.bumpMap,ge=!!D.normalMap,ze=!!D.displacementMap,Gt=!!D.emissiveMap,Ye=!!D.metalnessMap,jt=!!D.roughnessMap,se=D.anisotropy>0,L=D.clearcoat>0,E=D.dispersion>0,$=D.iridescence>0,xt=D.sheen>0,Mt=D.transmission>0,ut=se&&!!D.anisotropyMap,Yt=L&&!!D.clearcoatMap,Lt=L&&!!D.clearcoatNormalMap,Qt=L&&!!D.clearcoatRoughnessMap,Wt=$&&!!D.iridescenceMap,St=$&&!!D.iridescenceThicknessMap,Et=xt&&!!D.sheenColorMap,qt=xt&&!!D.sheenRoughnessMap,Vt=!!D.specularMap,Ot=!!D.specularColorMap,ie=!!D.specularIntensityMap,V=Mt&&!!D.transmissionMap,Dt=Mt&&!!D.thicknessMap,Rt=!!D.gradientMap,Ct=!!D.alphaMap,bt=D.alphaTest>0,_t=!!D.alphaHash,Bt=!!D.extensions;let ae=os;D.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Ie={shaderID:dt,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Tt,defines:D.defines,customVertexShaderID:Pt,customFragmentShaderID:st,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:kt,batchingColor:kt&&lt._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&lt.instanceColor!==null,instancingMorph:Ht&&lt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:jr,alphaToCoverage:!!D.alphaToCoverage,map:ce,matcap:on,envMap:de,envMapMode:de&&U.mapping,envMapCubeUVHeight:W,aoMap:Ce,lightMap:H,bumpMap:pe,normalMap:ge,displacementMap:y&&ze,emissiveMap:Gt,normalMapObjectSpace:ge&&D.normalMapType===cS,normalMapTangentSpace:ge&&D.normalMapType===H_,metalnessMap:Ye,roughnessMap:jt,anisotropy:se,anisotropyMap:ut,clearcoat:L,clearcoatMap:Yt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Qt,dispersion:E,iridescence:$,iridescenceMap:Wt,iridescenceThicknessMap:St,sheen:xt,sheenColorMap:Et,sheenRoughnessMap:qt,specularMap:Vt,specularColorMap:Ot,specularIntensityMap:ie,transmission:Mt,transmissionMap:V,thicknessMap:Dt,gradientMap:Rt,opaque:D.transparent===!1&&D.blending===Xr&&D.alphaToCoverage===!1,alphaMap:Ct,alphaTest:bt,alphaHash:_t,combine:D.combine,mapUv:ce&&A(D.map.channel),aoMapUv:Ce&&A(D.aoMap.channel),lightMapUv:H&&A(D.lightMap.channel),bumpMapUv:pe&&A(D.bumpMap.channel),normalMapUv:ge&&A(D.normalMap.channel),displacementMapUv:ze&&A(D.displacementMap.channel),emissiveMapUv:Gt&&A(D.emissiveMap.channel),metalnessMapUv:Ye&&A(D.metalnessMap.channel),roughnessMapUv:jt&&A(D.roughnessMap.channel),anisotropyMapUv:ut&&A(D.anisotropyMap.channel),clearcoatMapUv:Yt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&A(D.sheenRoughnessMap.channel),specularMapUv:Vt&&A(D.specularMap.channel),specularColorMapUv:Ot&&A(D.specularColorMap.channel),specularIntensityMapUv:ie&&A(D.specularIntensityMap.channel),transmissionMapUv:V&&A(D.transmissionMap.channel),thicknessMapUv:Dt&&A(D.thicknessMap.channel),alphaMapUv:Ct&&A(D.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(ge||se),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ct.attributes.uv&&(ce||Ct),fog:!!pt,useFog:D.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:wt,skinning:lt.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:ce&&D.map.isVideoTexture===!0&&Ne.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:Gt&&D.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===_a,flipSided:D.side===Kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Bt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&D.extensions.multiDraw===!0||kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function g(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const X in D.defines)C.push(X),C.push(D.defines[X]);return D.isRawShaderMaterial===!1&&(O(C,D),w(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function w(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function z(D){const C=b[D.type];let X;if(C){const nt=Fi[C];X=IS.clone(nt.uniforms)}else X=D.uniforms;return X}function G(D,C){let X;for(let nt=0,lt=_.length;nt<lt;nt++){const pt=_[nt];if(pt.cacheKey===C){X=pt,++X.usedTimes;break}}return X===void 0&&(X=new MT(r,C,D,c),_.push(X)),X}function N(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function B(D){m.remove(D)}function K(){m.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:z,acquireProgram:G,releaseProgram:N,releaseShaderCache:B,programs:_,dispose:K}}function AT(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function RT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function u_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function f_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(x,y,M,b,A,S){let g=r[t];return g===void 0?(g={id:x.id,object:x,geometry:y,material:M,groupOrder:b,renderOrder:x.renderOrder,z:A,group:S},r[t]=g):(g.id=x.id,g.object=x,g.geometry=y,g.material=M,g.groupOrder=b,g.renderOrder=x.renderOrder,g.z=A,g.group=S),t++,g}function d(x,y,M,b,A,S){const g=h(x,y,M,b,A,S);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(x,y,M,b,A,S){const g=h(x,y,M,b,A,S);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,y){i.length>1&&i.sort(x||RT),s.length>1&&s.sort(y||u_),l.length>1&&l.sort(y||u_)}function _(){for(let x=t,y=r.length;x<y;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function CT(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new f_,r.set(s,[h])):l>=c.length?(h=new f_,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function wT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new xe};break;case"SpotLight":i={position:new Q,direction:new Q,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function DT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let UT=0;function LT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function NT(r){const t=new wT,i=DT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,c=new tn,h=new tn;function d(p){let _=0,x=0,y=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,b=0,A=0,S=0,g=0,O=0,w=0,z=0,G=0,N=0,B=0;p.sort(LT);for(let D=0,C=p.length;D<C;D++){const X=p[D],nt=X.color,lt=X.intensity,pt=X.distance,ct=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)_+=nt.r*lt,x+=nt.g*lt,y+=nt.b*lt;else if(X.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(X.sh.coefficients[F],lt);B++}else if(X.isDirectionalLight){const F=t.get(X);if(F.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const U=X.shadow,W=i.get(X);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=ct,s.directionalShadowMatrix[M]=X.shadow.matrix,O++}s.directional[M]=F,M++}else if(X.isSpotLight){const F=t.get(X);F.position.setFromMatrixPosition(X.matrixWorld),F.color.copy(nt).multiplyScalar(lt),F.distance=pt,F.coneCos=Math.cos(X.angle),F.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),F.decay=X.decay,s.spot[A]=F;const U=X.shadow;if(X.map&&(s.spotLightMap[G]=X.map,G++,U.updateMatrices(X),X.castShadow&&N++),s.spotLightMatrix[A]=U.matrix,X.castShadow){const W=i.get(X);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,s.spotShadow[A]=W,s.spotShadowMap[A]=ct,z++}A++}else if(X.isRectAreaLight){const F=t.get(X);F.color.copy(nt).multiplyScalar(lt),F.halfWidth.set(X.width*.5,0,0),F.halfHeight.set(0,X.height*.5,0),s.rectArea[S]=F,S++}else if(X.isPointLight){const F=t.get(X);if(F.color.copy(X.color).multiplyScalar(X.intensity),F.distance=X.distance,F.decay=X.decay,X.castShadow){const U=X.shadow,W=i.get(X);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,W.shadowCameraNear=U.camera.near,W.shadowCameraFar=U.camera.far,s.pointShadow[b]=W,s.pointShadowMap[b]=ct,s.pointShadowMatrix[b]=X.shadow.matrix,w++}s.point[b]=F,b++}else if(X.isHemisphereLight){const F=t.get(X);F.skyColor.copy(X.color).multiplyScalar(lt),F.groundColor.copy(X.groundColor).multiplyScalar(lt),s.hemi[g]=F,g++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=y;const K=s.hash;(K.directionalLength!==M||K.pointLength!==b||K.spotLength!==A||K.rectAreaLength!==S||K.hemiLength!==g||K.numDirectionalShadows!==O||K.numPointShadows!==w||K.numSpotShadows!==z||K.numSpotMaps!==G||K.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=S,s.point.length=b,s.hemi.length=g,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=z+G-N,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=B,K.directionalLength=M,K.pointLength=b,K.spotLength=A,K.rectAreaLength=S,K.hemiLength=g,K.numDirectionalShadows=O,K.numPointShadows=w,K.numSpotShadows=z,K.numSpotMaps=G,K.numLightProbes=B,s.version=UT++)}function m(p,_){let x=0,y=0,M=0,b=0,A=0;const S=_.matrixWorldInverse;for(let g=0,O=p.length;g<O;g++){const w=p[g];if(w.isDirectionalLight){const z=s.directional[x];z.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(S),x++}else if(w.isSpotLight){const z=s.spot[M];z.position.setFromMatrixPosition(w.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(S),M++}else if(w.isRectAreaLight){const z=s.rectArea[b];z.position.setFromMatrixPosition(w.matrixWorld),z.position.applyMatrix4(S),h.identity(),c.copy(w.matrixWorld),c.premultiply(S),h.extractRotation(c),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),b++}else if(w.isPointLight){const z=s.point[y];z.position.setFromMatrixPosition(w.matrixWorld),z.position.applyMatrix4(S),y++}else if(w.isHemisphereLight){const z=s.hemi[A];z.direction.setFromMatrixPosition(w.matrixWorld),z.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:s}}function h_(r){const t=new NT(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function OT(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new h_(r),t.set(l,[d])):c>=h.length?(d=new h_(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const PT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BT(r,t,i){let s=new pp;const l=new ne,c=new ne,h=new rn,d=new ib({depthPacking:lS}),m=new ab,p={},_=i.maxTextureSize,x={[ba]:Kn,[Kn]:ba,[_a]:_a},y=new Ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:PT,fragmentShader:zT}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new Li;b.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ki(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w_;let g=this.type;this.render=function(N,B,K){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),nt=r.state;nt.setBlending(Ma),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const lt=g!==ga&&this.type===ga,pt=g===ga&&this.type!==ga;for(let ct=0,F=N.length;ct<F;ct++){const U=N[ct],W=U.shadow;if(W===void 0){re("WebGLShadowMap:",U,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const dt=W.getFrameExtents();if(l.multiply(dt),c.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/dt.x),l.x=c.x*dt.x,W.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/dt.y),l.y=c.y*dt.y,W.mapSize.y=c.y)),W.map===null||lt===!0||pt===!0){const P=this.type!==ga?{minFilter:ui,magFilter:ui}:{};W.map!==null&&W.map.dispose(),W.map=new Is(l.x,l.y,P),W.map.texture.name=U.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const vt=W.getViewportCount();for(let P=0;P<vt;P++){const at=W.getViewport(P);h.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),nt.viewport(h),W.updateMatrices(U,P),s=W.getFrustum(),z(B,K,W.camera,U,this.type)}W.isPointLightShadow!==!0&&this.type===ga&&O(W,K),W.needsUpdate=!1}g=this.type,S.needsUpdate=!1,r.setRenderTarget(D,C,X)};function O(N,B){const K=t.update(A);y.defines.VSM_SAMPLES!==N.blurSamples&&(y.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Is(l.x,l.y)),y.uniforms.shadow_pass.value=N.map.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(B,null,K,y,A,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(B,null,K,M,A,null)}function w(N,B,K,D){let C=null;const X=K.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(X!==void 0)C=X;else if(C=K.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const nt=C.uuid,lt=B.uuid;let pt=p[nt];pt===void 0&&(pt={},p[nt]=pt);let ct=pt[lt];ct===void 0&&(ct=C.clone(),pt[lt]=ct,B.addEventListener("dispose",G)),C=ct}if(C.visible=B.visible,C.wireframe=B.wireframe,D===ga?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:x[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const nt=r.properties.get(C);nt.light=K}return C}function z(N,B,K,D,C){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===ga)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,N.matrixWorld);const lt=t.update(N),pt=N.material;if(Array.isArray(pt)){const ct=lt.groups;for(let F=0,U=ct.length;F<U;F++){const W=ct[F],dt=pt[W.materialIndex];if(dt&&dt.visible){const vt=w(N,dt,D,C);N.onBeforeShadow(r,N,B,K,lt,vt,W),r.renderBufferDirect(K,null,lt,vt,N,W),N.onAfterShadow(r,N,B,K,lt,vt,W)}}}else if(pt.visible){const ct=w(N,pt,D,C);N.onBeforeShadow(r,N,B,K,lt,ct,null),r.renderBufferDirect(K,null,lt,ct,N,null),N.onAfterShadow(r,N,B,K,lt,ct,null)}}const nt=N.children;for(let lt=0,pt=nt.length;lt<pt;lt++)z(nt[lt],B,K,D,C)}function G(N){N.target.removeEventListener("dispose",G);for(const K in p){const D=p[K],C=N.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const FT={[dd]:pd,[md]:_d,[xd]:vd,[Wr]:gd,[pd]:dd,[_d]:md,[vd]:xd,[gd]:Wr};function IT(r,t){function i(){let V=!1;const Dt=new rn;let Rt=null;const Ct=new rn(0,0,0,0);return{setMask:function(bt){Rt!==bt&&!V&&(r.colorMask(bt,bt,bt,bt),Rt=bt)},setLocked:function(bt){V=bt},setClear:function(bt,_t,Bt,ae,Ie){Ie===!0&&(bt*=ae,_t*=ae,Bt*=ae),Dt.set(bt,_t,Bt,ae),Ct.equals(Dt)===!1&&(r.clearColor(bt,_t,Bt,ae),Ct.copy(Dt))},reset:function(){V=!1,Rt=null,Ct.set(-1,0,0,0)}}}function s(){let V=!1,Dt=!1,Rt=null,Ct=null,bt=null;return{setReversed:function(_t){if(Dt!==_t){const Bt=t.get("EXT_clip_control");_t?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Dt=_t;const ae=bt;bt=null,this.setClear(ae)}},getReversed:function(){return Dt},setTest:function(_t){_t?ft(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(_t){Rt!==_t&&!V&&(r.depthMask(_t),Rt=_t)},setFunc:function(_t){if(Dt&&(_t=FT[_t]),Ct!==_t){switch(_t){case dd:r.depthFunc(r.NEVER);break;case pd:r.depthFunc(r.ALWAYS);break;case md:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case xd:r.depthFunc(r.EQUAL);break;case gd:r.depthFunc(r.GEQUAL);break;case _d:r.depthFunc(r.GREATER);break;case vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ct=_t}},setLocked:function(_t){V=_t},setClear:function(_t){bt!==_t&&(Dt&&(_t=1-_t),r.clearDepth(_t),bt=_t)},reset:function(){V=!1,Rt=null,Ct=null,bt=null,Dt=!1}}}function l(){let V=!1,Dt=null,Rt=null,Ct=null,bt=null,_t=null,Bt=null,ae=null,Ie=null;return{setTest:function(we){V||(we?ft(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(we){Dt!==we&&!V&&(r.stencilMask(we),Dt=we)},setFunc:function(we,Nn,Qn){(Rt!==we||Ct!==Nn||bt!==Qn)&&(r.stencilFunc(we,Nn,Qn),Rt=we,Ct=Nn,bt=Qn)},setOp:function(we,Nn,Qn){(_t!==we||Bt!==Nn||ae!==Qn)&&(r.stencilOp(we,Nn,Qn),_t=we,Bt=Nn,ae=Qn)},setLocked:function(we){V=we},setClear:function(we){Ie!==we&&(r.clearStencil(we),Ie=we)},reset:function(){V=!1,Dt=null,Rt=null,Ct=null,bt=null,_t=null,Bt=null,ae=null,Ie=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},y=new WeakMap,M=[],b=null,A=!1,S=null,g=null,O=null,w=null,z=null,G=null,N=null,B=new xe(0,0,0),K=0,D=!1,C=null,X=null,nt=null,lt=null,pt=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,U=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=U>=1):W.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=U>=2);let dt=null,vt={};const P=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),yt=new rn().fromArray(P),Tt=new rn().fromArray(at);function Pt(V,Dt,Rt,Ct){const bt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(V,_t),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<Rt;Bt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Dt,0,r.RGBA,1,1,Ct,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Dt+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return _t}const st={};st[r.TEXTURE_2D]=Pt(r.TEXTURE_2D,r.TEXTURE_2D,1),st[r.TEXTURE_CUBE_MAP]=Pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[r.TEXTURE_2D_ARRAY]=Pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),st[r.TEXTURE_3D]=Pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(r.DEPTH_TEST),h.setFunc(Wr),pe(!1),ge(lg),ft(r.CULL_FACE),Ce(Ma);function ft(V){_[V]!==!0&&(r.enable(V),_[V]=!0)}function wt(V){_[V]!==!1&&(r.disable(V),_[V]=!1)}function Ht(V,Dt){return x[V]!==Dt?(r.bindFramebuffer(V,Dt),x[V]=Dt,V===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Dt),V===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Dt),!0):!1}function kt(V,Dt){let Rt=M,Ct=!1;if(V){Rt=y.get(Dt),Rt===void 0&&(Rt=[],y.set(Dt,Rt));const bt=V.textures;if(Rt.length!==bt.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Bt=bt.length;_t<Bt;_t++)Rt[_t]=r.COLOR_ATTACHMENT0+_t;Rt.length=bt.length,Ct=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,Ct=!0);Ct&&r.drawBuffers(Rt)}function ce(V){return b!==V?(r.useProgram(V),b=V,!0):!1}const on={[Ns]:r.FUNC_ADD,[OM]:r.FUNC_SUBTRACT,[PM]:r.FUNC_REVERSE_SUBTRACT};on[zM]=r.MIN,on[BM]=r.MAX;const de={[FM]:r.ZERO,[IM]:r.ONE,[HM]:r.SRC_COLOR,[fd]:r.SRC_ALPHA,[YM]:r.SRC_ALPHA_SATURATE,[kM]:r.DST_COLOR,[VM]:r.DST_ALPHA,[GM]:r.ONE_MINUS_SRC_COLOR,[hd]:r.ONE_MINUS_SRC_ALPHA,[WM]:r.ONE_MINUS_DST_COLOR,[XM]:r.ONE_MINUS_DST_ALPHA,[qM]:r.CONSTANT_COLOR,[jM]:r.ONE_MINUS_CONSTANT_COLOR,[ZM]:r.CONSTANT_ALPHA,[KM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ce(V,Dt,Rt,Ct,bt,_t,Bt,ae,Ie,we){if(V===Ma){A===!0&&(wt(r.BLEND),A=!1);return}if(A===!1&&(ft(r.BLEND),A=!0),V!==NM){if(V!==S||we!==D){if((g!==Ns||z!==Ns)&&(r.blendEquation(r.FUNC_ADD),g=Ns,z=Ns),we)switch(V){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cg:r.blendFunc(r.ONE,r.ONE);break;case ug:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:nn("WebGLState: Invalid blending: ",V);break}else switch(V){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ug:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fg:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",V);break}O=null,w=null,G=null,N=null,B.set(0,0,0),K=0,S=V,D=we}return}bt=bt||Dt,_t=_t||Rt,Bt=Bt||Ct,(Dt!==g||bt!==z)&&(r.blendEquationSeparate(on[Dt],on[bt]),g=Dt,z=bt),(Rt!==O||Ct!==w||_t!==G||Bt!==N)&&(r.blendFuncSeparate(de[Rt],de[Ct],de[_t],de[Bt]),O=Rt,w=Ct,G=_t,N=Bt),(ae.equals(B)===!1||Ie!==K)&&(r.blendColor(ae.r,ae.g,ae.b,Ie),B.copy(ae),K=Ie),S=V,D=!1}function H(V,Dt){V.side===_a?wt(r.CULL_FACE):ft(r.CULL_FACE);let Rt=V.side===Kn;Dt&&(Rt=!Rt),pe(Rt),V.blending===Xr&&V.transparent===!1?Ce(Ma):Ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ct=V.stencilWrite;d.setTest(Ct),Ct&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function pe(V){C!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),C=V)}function ge(V){V!==UM?(ft(r.CULL_FACE),V!==X&&(V===lg?r.cullFace(r.BACK):V===LM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),X=V}function ze(V){V!==nt&&(F&&r.lineWidth(V),nt=V)}function Gt(V,Dt,Rt){V?(ft(r.POLYGON_OFFSET_FILL),(lt!==Dt||pt!==Rt)&&(r.polygonOffset(Dt,Rt),lt=Dt,pt=Rt)):wt(r.POLYGON_OFFSET_FILL)}function Ye(V){V?ft(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function jt(V){V===void 0&&(V=r.TEXTURE0+ct-1),dt!==V&&(r.activeTexture(V),dt=V)}function se(V,Dt,Rt){Rt===void 0&&(dt===null?Rt=r.TEXTURE0+ct-1:Rt=dt);let Ct=vt[Rt];Ct===void 0&&(Ct={type:void 0,texture:void 0},vt[Rt]=Ct),(Ct.type!==V||Ct.texture!==Dt)&&(dt!==Rt&&(r.activeTexture(Rt),dt=Rt),r.bindTexture(V,Dt||st[V]),Ct.type=V,Ct.texture=Dt)}function L(){const V=vt[dt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function xt(){try{r.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Mt(){try{r.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Yt(){try{r.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Lt(){try{r.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Qt(){try{r.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Wt(){try{r.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function St(){try{r.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Et(V){yt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),yt.copy(V))}function qt(V){Tt.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Tt.copy(V))}function Vt(V,Dt){let Rt=p.get(Dt);Rt===void 0&&(Rt=new WeakMap,p.set(Dt,Rt));let Ct=Rt.get(V);Ct===void 0&&(Ct=r.getUniformBlockIndex(Dt,V.name),Rt.set(V,Ct))}function Ot(V,Dt){const Ct=p.get(Dt).get(V);m.get(Dt)!==Ct&&(r.uniformBlockBinding(Dt,Ct,V.__bindingPointIndex),m.set(Dt,Ct))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},dt=null,vt={},x={},y=new WeakMap,M=[],b=null,A=!1,S=null,g=null,O=null,w=null,z=null,G=null,N=null,B=new xe(0,0,0),K=0,D=!1,C=null,X=null,nt=null,lt=null,pt=null,yt.set(0,0,r.canvas.width,r.canvas.height),Tt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ft,disable:wt,bindFramebuffer:Ht,drawBuffers:kt,useProgram:ce,setBlending:Ce,setMaterial:H,setFlipSided:pe,setCullFace:ge,setLineWidth:ze,setPolygonOffset:Gt,setScissorTest:Ye,activeTexture:jt,bindTexture:se,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:Wt,texImage3D:St,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:Lt,texStorage3D:Qt,texSubImage2D:xt,texSubImage3D:Mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Yt,scissor:Et,viewport:qt,reset:ie}}function HT(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,_=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):su("canvas")}function A(L,E,$){let xt=1;const Mt=se(L);if((Mt.width>$||Mt.height>$)&&(xt=$/Math.max(Mt.width,Mt.height)),xt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(xt*Mt.width),Yt=Math.floor(xt*Mt.height);x===void 0&&(x=b(ut,Yt));const Lt=E?b(ut,Yt):x;return Lt.width=ut,Lt.height=Yt,Lt.getContext("2d").drawImage(L,0,0,ut,Yt),re("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ut+"x"+Yt+")."),Lt}else return"data"in L&&re("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function S(L){return L.generateMipmaps}function g(L){r.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(L,E,$,xt,Mt=!1){if(L!==null){if(r[L]!==void 0)return r[L];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=E;if(E===r.RED&&($===r.FLOAT&&(ut=r.R32F),$===r.HALF_FLOAT&&(ut=r.R16F),$===r.UNSIGNED_BYTE&&(ut=r.R8)),E===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ut=r.R8UI),$===r.UNSIGNED_SHORT&&(ut=r.R16UI),$===r.UNSIGNED_INT&&(ut=r.R32UI),$===r.BYTE&&(ut=r.R8I),$===r.SHORT&&(ut=r.R16I),$===r.INT&&(ut=r.R32I)),E===r.RG&&($===r.FLOAT&&(ut=r.RG32F),$===r.HALF_FLOAT&&(ut=r.RG16F),$===r.UNSIGNED_BYTE&&(ut=r.RG8)),E===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ut=r.RG8UI),$===r.UNSIGNED_SHORT&&(ut=r.RG16UI),$===r.UNSIGNED_INT&&(ut=r.RG32UI),$===r.BYTE&&(ut=r.RG8I),$===r.SHORT&&(ut=r.RG16I),$===r.INT&&(ut=r.RG32I)),E===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),$===r.UNSIGNED_INT&&(ut=r.RGB32UI),$===r.BYTE&&(ut=r.RGB8I),$===r.SHORT&&(ut=r.RGB16I),$===r.INT&&(ut=r.RGB32I)),E===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),$===r.UNSIGNED_INT&&(ut=r.RGBA32UI),$===r.BYTE&&(ut=r.RGBA8I),$===r.SHORT&&(ut=r.RGBA16I),$===r.INT&&(ut=r.RGBA32I)),E===r.RGB&&($===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),E===r.RGBA){const Yt=Mt?iu:Ne.getTransfer(xt);$===r.FLOAT&&(ut=r.RGBA32F),$===r.HALF_FLOAT&&(ut=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ut=Yt===Xe?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function z(L,E){let $;return L?E===null||E===Bs||E===ll?$=r.DEPTH24_STENCIL8:E===ya?$=r.DEPTH32F_STENCIL8:E===ol&&($=r.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Bs||E===ll?$=r.DEPTH_COMPONENT24:E===ya?$=r.DEPTH_COMPONENT32F:E===ol&&($=r.DEPTH_COMPONENT16),$}function G(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==ui&&L.minFilter!==yi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function N(L){const E=L.target;E.removeEventListener("dispose",N),K(E),E.isVideoTexture&&_.delete(E)}function B(L){const E=L.target;E.removeEventListener("dispose",B),C(E)}function K(L){const E=s.get(L);if(E.__webglInit===void 0)return;const $=L.source,xt=y.get($);if(xt){const Mt=xt[E.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(L),Object.keys(xt).length===0&&y.delete($)}s.remove(L)}function D(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const $=L.source,xt=y.get($);delete xt[E.__cacheKey],h.memory.textures--}function C(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(E.__webglFramebuffer[xt]))for(let Mt=0;Mt<E.__webglFramebuffer[xt].length;Mt++)r.deleteFramebuffer(E.__webglFramebuffer[xt][Mt]);else r.deleteFramebuffer(E.__webglFramebuffer[xt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[xt])}else{if(Array.isArray(E.__webglFramebuffer))for(let xt=0;xt<E.__webglFramebuffer.length;xt++)r.deleteFramebuffer(E.__webglFramebuffer[xt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xt=0;xt<E.__webglColorRenderbuffer.length;xt++)E.__webglColorRenderbuffer[xt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[xt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=L.textures;for(let xt=0,Mt=$.length;xt<Mt;xt++){const ut=s.get($[xt]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove($[xt])}s.remove(L)}let X=0;function nt(){X=0}function lt(){const L=X;return L>=l.maxTextures&&re("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),X+=1,L}function pt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ct(L,E){const $=s.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const xt=L.image;if(xt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{st($,L,E);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+E)}function F(L,E){const $=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){st($,L,E);return}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+E)}function U(L,E){const $=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){st($,L,E);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+E)}function W(L,E){const $=s.get(L);if(L.version>0&&$.__version!==L.version){ft($,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+E)}const dt={[Sd]:r.REPEAT,[va]:r.CLAMP_TO_EDGE,[bd]:r.MIRRORED_REPEAT},vt={[ui]:r.NEAREST,[rS]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[yi]:r.LINEAR,[wh]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},P={[uS]:r.NEVER,[xS]:r.ALWAYS,[fS]:r.LESS,[G_]:r.LEQUAL,[hS]:r.EQUAL,[mS]:r.GEQUAL,[dS]:r.GREATER,[pS]:r.NOTEQUAL};function at(L,E){if(E.type===ya&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===yi||E.magFilter===wh||E.magFilter===bc||E.magFilter===zs||E.minFilter===yi||E.minFilter===wh||E.minFilter===bc||E.minFilter===zs)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,dt[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,dt[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,dt[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,vt[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ui||E.minFilter!==bc&&E.minFilter!==zs||E.type===ya&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(L,E){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",N));const xt=E.source;let Mt=y.get(xt);Mt===void 0&&(Mt={},y.set(xt,Mt));const ut=pt(E);if(ut!==L.__cacheKey){Mt[ut]===void 0&&(Mt[ut]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,$=!0),Mt[ut].usedTimes++;const Yt=Mt[L.__cacheKey];Yt!==void 0&&(Mt[L.__cacheKey].usedTimes--,Yt.usedTimes===0&&D(E)),L.__cacheKey=ut,L.__webglTexture=Mt[ut].texture}return $}function Tt(L,E,$){return Math.floor(Math.floor(L/$)/E)}function Pt(L,E,$,xt){const ut=L.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,$,xt,E.data);else{ut.sort((St,Et)=>St.start-Et.start);let Yt=0;for(let St=1;St<ut.length;St++){const Et=ut[Yt],qt=ut[St],Vt=Et.start+Et.count,Ot=Tt(qt.start,E.width,4),ie=Tt(Et.start,E.width,4);qt.start<=Vt+1&&Ot===ie&&Tt(qt.start+qt.count-1,E.width,4)===Ot?Et.count=Math.max(Et.count,qt.start+qt.count-Et.start):(++Yt,ut[Yt]=qt)}ut.length=Yt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),Qt=r.getParameter(r.UNPACK_SKIP_PIXELS),Wt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let St=0,Et=ut.length;St<Et;St++){const qt=ut[St],Vt=Math.floor(qt.start/4),Ot=Math.ceil(qt.count/4),ie=Vt%E.width,V=Math.floor(Vt/E.width),Dt=Ot,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,ie,V,Dt,Rt,$,xt,E.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Wt)}}function st(L,E,$){let xt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xt=r.TEXTURE_3D);const Mt=yt(L,E),ut=E.source;i.bindTexture(xt,L.__webglTexture,r.TEXTURE0+$);const Yt=s.get(ut);if(ut.version!==Yt.__version||Mt===!0){i.activeTexture(r.TEXTURE0+$);const Lt=Ne.getPrimaries(Ne.workingColorSpace),Qt=E.colorSpace===as?null:Ne.getPrimaries(E.colorSpace),Wt=E.colorSpace===as||Lt===Qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let St=A(E.image,!1,l.maxTextureSize);St=jt(E,St);const Et=c.convert(E.format,E.colorSpace),qt=c.convert(E.type);let Vt=w(E.internalFormat,Et,qt,E.colorSpace,E.isVideoTexture);at(xt,E);let Ot;const ie=E.mipmaps,V=E.isVideoTexture!==!0,Dt=Yt.__version===void 0||Mt===!0,Rt=ut.dataReady,Ct=G(E,St);if(E.isDepthTexture)Vt=z(E.format===ul,E.type),Dt&&(V?i.texStorage2D(r.TEXTURE_2D,1,Vt,St.width,St.height):i.texImage2D(r.TEXTURE_2D,0,Vt,St.width,St.height,0,Et,qt,null));else if(E.isDataTexture)if(ie.length>0){V&&Dt&&i.texStorage2D(r.TEXTURE_2D,Ct,Vt,ie[0].width,ie[0].height);for(let bt=0,_t=ie.length;bt<_t;bt++)Ot=ie[bt],V?Rt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Et,qt,Ot.data):i.texImage2D(r.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Et,qt,Ot.data);E.generateMipmaps=!1}else V?(Dt&&i.texStorage2D(r.TEXTURE_2D,Ct,Vt,St.width,St.height),Rt&&Pt(E,St,Et,qt)):i.texImage2D(r.TEXTURE_2D,0,Vt,St.width,St.height,0,Et,qt,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ct,Vt,ie[0].width,ie[0].height,St.depth);for(let bt=0,_t=ie.length;bt<_t;bt++)if(Ot=ie[bt],E.format!==Di)if(Et!==null)if(V){if(Rt)if(E.layerUpdates.size>0){const Bt=Xg(Ot.width,Ot.height,E.format,E.type);for(const ae of E.layerUpdates){const Ie=Ot.data.subarray(ae*Bt/Ot.data.BYTES_PER_ELEMENT,(ae+1)*Bt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,ae,Ot.width,Ot.height,1,Et,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,St.depth,Et,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Vt,Ot.width,Ot.height,St.depth,0,Ot.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Rt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,St.depth,Et,qt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,Vt,Ot.width,Ot.height,St.depth,0,Et,qt,Ot.data)}else{V&&Dt&&i.texStorage2D(r.TEXTURE_2D,Ct,Vt,ie[0].width,ie[0].height);for(let bt=0,_t=ie.length;bt<_t;bt++)Ot=ie[bt],E.format!==Di?Et!==null?V?Rt&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Et,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Ot.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Rt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Et,qt,Ot.data):i.texImage2D(r.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Et,qt,Ot.data)}else if(E.isDataArrayTexture)if(V){if(Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ct,Vt,St.width,St.height,St.depth),Rt)if(E.layerUpdates.size>0){const bt=Xg(St.width,St.height,E.format,E.type);for(const _t of E.layerUpdates){const Bt=St.data.subarray(_t*bt/St.data.BYTES_PER_ELEMENT,(_t+1)*bt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,Et,qt,Bt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Et,qt,St.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,St.width,St.height,St.depth,0,Et,qt,St.data);else if(E.isData3DTexture)V?(Dt&&i.texStorage3D(r.TEXTURE_3D,Ct,Vt,St.width,St.height,St.depth),Rt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Et,qt,St.data)):i.texImage3D(r.TEXTURE_3D,0,Vt,St.width,St.height,St.depth,0,Et,qt,St.data);else if(E.isFramebufferTexture){if(Dt)if(V)i.texStorage2D(r.TEXTURE_2D,Ct,Vt,St.width,St.height);else{let bt=St.width,_t=St.height;for(let Bt=0;Bt<Ct;Bt++)i.texImage2D(r.TEXTURE_2D,Bt,Vt,bt,_t,0,Et,qt,null),bt>>=1,_t>>=1}}else if(ie.length>0){if(V&&Dt){const bt=se(ie[0]);i.texStorage2D(r.TEXTURE_2D,Ct,Vt,bt.width,bt.height)}for(let bt=0,_t=ie.length;bt<_t;bt++)Ot=ie[bt],V?Rt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Et,qt,Ot):i.texImage2D(r.TEXTURE_2D,bt,Vt,Et,qt,Ot);E.generateMipmaps=!1}else if(V){if(Dt){const bt=se(St);i.texStorage2D(r.TEXTURE_2D,Ct,Vt,bt.width,bt.height)}Rt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,qt,St)}else i.texImage2D(r.TEXTURE_2D,0,Vt,Et,qt,St);S(E)&&g(xt),Yt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ft(L,E,$){if(E.image.length!==6)return;const xt=yt(L,E),Mt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+$);const ut=s.get(Mt);if(Mt.version!==ut.__version||xt===!0){i.activeTexture(r.TEXTURE0+$);const Yt=Ne.getPrimaries(Ne.workingColorSpace),Lt=E.colorSpace===as?null:Ne.getPrimaries(E.colorSpace),Qt=E.colorSpace===as||Yt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,St=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!Wt&&!St?Et[_t]=A(E.image[_t],!0,l.maxCubemapSize):Et[_t]=St?E.image[_t].image:E.image[_t],Et[_t]=jt(E,Et[_t]);const qt=Et[0],Vt=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type),ie=w(E.internalFormat,Vt,Ot,E.colorSpace),V=E.isVideoTexture!==!0,Dt=ut.__version===void 0||xt===!0,Rt=Mt.dataReady;let Ct=G(E,qt);at(r.TEXTURE_CUBE_MAP,E);let bt;if(Wt){V&&Dt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,ie,qt.width,qt.height);for(let _t=0;_t<6;_t++){bt=Et[_t].mipmaps;for(let Bt=0;Bt<bt.length;Bt++){const ae=bt[Bt];E.format!==Di?Vt!==null?V?Rt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,ae.width,ae.height,Vt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,ie,ae.width,ae.height,0,ae.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,ae.width,ae.height,Vt,Ot,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,ie,ae.width,ae.height,0,Vt,Ot,ae.data)}}}else{if(bt=E.mipmaps,V&&Dt){bt.length>0&&Ct++;const _t=se(Et[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){V?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Vt,Ot,Et[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Et[_t].width,Et[_t].height,0,Vt,Ot,Et[_t].data);for(let Bt=0;Bt<bt.length;Bt++){const Ie=bt[Bt].image[_t].image;V?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,Ie.width,Ie.height,Vt,Ot,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,ie,Ie.width,Ie.height,0,Vt,Ot,Ie.data)}}else{V?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,Ot,Et[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Vt,Ot,Et[_t]);for(let Bt=0;Bt<bt.length;Bt++){const ae=bt[Bt];V?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,Vt,Ot,ae.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,ie,Vt,Ot,ae.image[_t])}}}S(E)&&g(r.TEXTURE_CUBE_MAP),ut.__version=Mt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function wt(L,E,$,xt,Mt,ut){const Yt=c.convert($.format,$.colorSpace),Lt=c.convert($.type),Qt=w($.internalFormat,Yt,Lt,$.colorSpace),Wt=s.get(E),St=s.get($);if(St.__renderTarget=E,!Wt.__hasExternalTextures){const Et=Math.max(1,E.width>>ut),qt=Math.max(1,E.height>>ut);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ut,Qt,Et,qt,E.depth,0,Yt,Lt,null):i.texImage2D(Mt,ut,Qt,Et,qt,0,Yt,Lt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),Gt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,Mt,St.__webglTexture,0,ze(E)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xt,Mt,St.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(L,E,$){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const xt=E.depthTexture,Mt=xt&&xt.isDepthTexture?xt.type:null,ut=z(E.stencilBuffer,Mt),Yt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=ze(E);Gt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt,ut,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,ut,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ut,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Yt,r.RENDERBUFFER,L)}else{const xt=E.textures;for(let Mt=0;Mt<xt.length;Mt++){const ut=xt[Mt],Yt=c.convert(ut.format,ut.colorSpace),Lt=c.convert(ut.type),Qt=w(ut.internalFormat,Yt,Lt,ut.colorSpace),Wt=ze(E);$&&Gt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,Qt,E.width,E.height):Gt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,Qt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Qt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct(E.depthTexture,0);const Mt=xt.__webglTexture,ut=ze(E);if(E.depthTexture.format===cl)Gt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0);else if(E.depthTexture.format===ul)Gt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function ce(L){const E=s.get(L),$=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const xt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xt){const Mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xt.removeEventListener("dispose",Mt)};xt.addEventListener("dispose",Mt),E.__depthDisposeCallback=Mt}E.__boundDepthTexture=xt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const xt=L.texture.mipmaps;xt&&xt.length>0?kt(E.__webglFramebuffer[0],L):kt(E.__webglFramebuffer,L)}else if($){E.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[xt]),E.__webglDepthbuffer[xt]===void 0)E.__webglDepthbuffer[xt]=r.createRenderbuffer(),Ht(E.__webglDepthbuffer[xt],L,!1);else{const Mt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[xt];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ut)}}else{const xt=L.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ht(E.__webglDepthbuffer,L,!1);else{const Mt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function on(L,E,$){const xt=s.get(L);E!==void 0&&wt(xt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ce(L)}function de(L){const E=L.texture,$=s.get(L),xt=s.get(E);L.addEventListener("dispose",B);const Mt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Yt=Mt.length>1;if(Yt||(xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture()),xt.__version=E.version,h.memory.textures++),ut){$.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Lt]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)$.__webglFramebuffer[Lt][Qt]=r.createFramebuffer()}else $.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)$.__webglFramebuffer[Lt]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Yt)for(let Lt=0,Qt=Mt.length;Lt<Qt;Lt++){const Wt=s.get(Mt[Lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&Gt(L)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Mt.length;Lt++){const Qt=Mt[Lt];$.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Lt]);const Wt=c.convert(Qt.format,Qt.colorSpace),St=c.convert(Qt.type),Et=w(Qt.internalFormat,Wt,St,Qt.colorSpace,L.isXRRenderTarget===!0),qt=ze(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Et,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,$.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht($.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),at(r.TEXTURE_CUBE_MAP,E);for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)wt($.__webglFramebuffer[Lt][Qt],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Qt);else wt($.__webglFramebuffer[Lt],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);S(E)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Lt=0,Qt=Mt.length;Lt<Qt;Lt++){const Wt=Mt[Lt],St=s.get(Wt);let Et=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Et,St.__webglTexture),at(Et,Wt),wt($.__webglFramebuffer,L,Wt,r.COLOR_ATTACHMENT0+Lt,Et,0),S(Wt)&&g(Et)}i.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,xt.__webglTexture),at(Lt,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)wt($.__webglFramebuffer[Qt],L,E,r.COLOR_ATTACHMENT0,Lt,Qt);else wt($.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,Lt,0);S(E)&&g(Lt),i.unbindTexture()}L.depthBuffer&&ce(L)}function Ce(L){const E=L.textures;for(let $=0,xt=E.length;$<xt;$++){const Mt=E[$];if(S(Mt)){const ut=O(L),Yt=s.get(Mt).__webglTexture;i.bindTexture(ut,Yt),g(ut),i.unbindTexture()}}}const H=[],pe=[];function ge(L){if(L.samples>0){if(Gt(L)===!1){const E=L.textures,$=L.width,xt=L.height;let Mt=r.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Yt=s.get(L),Lt=E.length>1;if(Lt)for(let Wt=0;Wt<E.length;Wt++)i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Qt=L.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[Wt]);const St=s.get(E[Wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,$,xt,0,0,$,xt,Mt,r.NEAREST),m===!0&&(H.length=0,pe.length=0,H.push(r.COLOR_ATTACHMENT0+Wt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(H.push(ut),pe.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let Wt=0;Wt<E.length;Wt++){i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[Wt]);const St=s.get(E[Wt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,St,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ze(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(L){const E=h.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function jt(L,E){const $=L.colorSpace,xt=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==jr&&$!==as&&(Ne.getTransfer($)===Xe?(xt!==Di||Mt!==Vi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",$)),E}function se(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=nt,this.setTexture2D=ct,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=W,this.rebindTextures=on,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Gt}function GT(r,t){function i(s,l=as){let c;const h=Ne.getTransfer(l);if(s===Vi)return r.UNSIGNED_BYTE;if(s===rp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===op)return r.UNSIGNED_SHORT_5_5_5_1;if(s===P_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===z_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===N_)return r.BYTE;if(s===O_)return r.SHORT;if(s===ol)return r.UNSIGNED_SHORT;if(s===sp)return r.INT;if(s===Bs)return r.UNSIGNED_INT;if(s===ya)return r.FLOAT;if(s===Kr)return r.HALF_FLOAT;if(s===B_)return r.ALPHA;if(s===F_)return r.RGB;if(s===Di)return r.RGBA;if(s===cl)return r.DEPTH_COMPONENT;if(s===ul)return r.DEPTH_STENCIL;if(s===I_)return r.RED;if(s===lp)return r.RED_INTEGER;if(s===cp)return r.RG;if(s===up)return r.RG_INTEGER;if(s===fp)return r.RGBA_INTEGER;if(s===Jc||s===$c||s===tu||s===eu)if(h===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ed||s===Td||s===Ad||s===Rd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Td)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ad)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cd||s===wd||s===Dd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Cd||s===wd)return h===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Dd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Bd||s===Fd||s===Id||s===Hd||s===Gd||s===Vd||s===Xd||s===kd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ud)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ld)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Od)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Id)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wd||s===Yd||s===qd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Wd)return h===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jd||s===Zd||s===Kd||s===Qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===jd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const VT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ev(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ea({vertexShader:VT,fragmentShader:XT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ki(new du(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WT extends Hs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,y=null,M=null,b=null;const A=typeof XRWebGLBinding<"u",S=new kT,g={},O=i.getContextAttributes();let w=null,z=null;const G=[],N=[],B=new ne;let K=null;const D=new wi;D.viewport=new rn;const C=new wi;C.viewport=new rn;const X=[D,C],nt=new lb;let lt=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ft=G[st];return ft===void 0&&(ft=new Qh,G[st]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(st){let ft=G[st];return ft===void 0&&(ft=new Qh,G[st]=ft),ft.getGripSpace()},this.getHand=function(st){let ft=G[st];return ft===void 0&&(ft=new Qh,G[st]=ft),ft.getHandSpace()};function ct(st){const ft=N.indexOf(st.inputSource);if(ft===-1)return;const wt=G[ft];wt!==void 0&&(wt.update(st.inputSource,st.frame,p||h),wt.dispatchEvent({type:st.type,data:st.inputSource}))}function F(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",U);for(let st=0;st<G.length;st++){const ft=N[st];ft!==null&&(N[st]=null,G[st].disconnect(ft))}lt=null,pt=null,S.reset();for(const st in g)delete g[st];t.setRenderTarget(w),M=null,y=null,x=null,l=null,z=null,Pt.stop(),s.isPresenting=!1,t.setPixelRatio(K),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){d=st,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(w=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",F),l.addEventListener("inputsourceschange",U),O.xrCompatible!==!0&&await i.makeXRCompatible(),K=t.getPixelRatio(),t.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,kt=null;O.depth&&(kt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=O.stencil?ul:cl,Ht=O.stencil?ll:Bs);const ce={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:c};x=this.getBinding(),y=x.createProjectionLayer(ce),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),z=new Is(y.textureWidth,y.textureHeight,{format:Di,type:Vi,depthTexture:new tv(y.textureWidth,y.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const wt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Is(M.framebufferWidth,M.framebufferHeight,{format:Di,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Pt.setContext(l),Pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function U(st){for(let ft=0;ft<st.removed.length;ft++){const wt=st.removed[ft],Ht=N.indexOf(wt);Ht>=0&&(N[Ht]=null,G[Ht].disconnect(wt))}for(let ft=0;ft<st.added.length;ft++){const wt=st.added[ft];let Ht=N.indexOf(wt);if(Ht===-1){for(let ce=0;ce<G.length;ce++)if(ce>=N.length){N.push(wt),Ht=ce;break}else if(N[ce]===null){N[ce]=wt,Ht=ce;break}if(Ht===-1)break}const kt=G[Ht];kt&&kt.connect(wt)}}const W=new Q,dt=new Q;function vt(st,ft,wt){W.setFromMatrixPosition(ft.matrixWorld),dt.setFromMatrixPosition(wt.matrixWorld);const Ht=W.distanceTo(dt),kt=ft.projectionMatrix.elements,ce=wt.projectionMatrix.elements,on=kt[14]/(kt[10]-1),de=kt[14]/(kt[10]+1),Ce=(kt[9]+1)/kt[5],H=(kt[9]-1)/kt[5],pe=(kt[8]-1)/kt[0],ge=(ce[8]+1)/ce[0],ze=on*pe,Gt=on*ge,Ye=Ht/(-pe+ge),jt=Ye*-pe;if(ft.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(jt),st.translateZ(Ye),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),kt[10]===-1)st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const se=on+Ye,L=de+Ye,E=ze-jt,$=Gt+(Ht-jt),xt=Ce*de/L*se,Mt=H*de/L*se;st.projectionMatrix.makePerspective(E,$,xt,Mt,se,L),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function P(st,ft){ft===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ft.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let ft=st.near,wt=st.far;S.texture!==null&&(S.depthNear>0&&(ft=S.depthNear),S.depthFar>0&&(wt=S.depthFar)),nt.near=C.near=D.near=ft,nt.far=C.far=D.far=wt,(lt!==nt.near||pt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),lt=nt.near,pt=nt.far),nt.layers.mask=st.layers.mask|6,D.layers.mask=nt.layers.mask&3,C.layers.mask=nt.layers.mask&5;const Ht=st.parent,kt=nt.cameras;P(nt,Ht);for(let ce=0;ce<kt.length;ce++)P(kt[ce],Ht);kt.length===2?vt(nt,D,C):nt.projectionMatrix.copy(D.projectionMatrix),at(st,nt,Ht)};function at(st,ft,wt){wt===null?st.matrix.copy(ft.matrixWorld):(st.matrix.copy(wt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ft.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=$d*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(st){m=st,y!==null&&(y.fixedFoveation=st),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=st)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(nt)},this.getCameraTexture=function(st){return g[st]};let yt=null;function Tt(st,ft){if(_=ft.getViewerPose(p||h),b=ft,_!==null){const wt=_.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let Ht=!1;wt.length!==nt.cameras.length&&(nt.cameras.length=0,Ht=!0);for(let de=0;de<wt.length;de++){const Ce=wt[de];let H=null;if(M!==null)H=M.getViewport(Ce);else{const ge=x.getViewSubImage(y,Ce);H=ge.viewport,de===0&&(t.setRenderTargetTextures(z,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(z))}let pe=X[de];pe===void 0&&(pe=new wi,pe.layers.enable(de),pe.viewport=new rn,X[de]=pe),pe.matrix.fromArray(Ce.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ce.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(H.x,H.y,H.width,H.height),de===0&&(nt.matrix.copy(pe.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Ht===!0&&nt.cameras.push(pe)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){x=s.getBinding();const de=x.getDepthInformation(wt[0]);de&&de.isValid&&de.texture&&S.init(de,l.renderState)}if(kt&&kt.includes("camera-access")&&A){t.state.unbindTexture(),x=s.getBinding();for(let de=0;de<wt.length;de++){const Ce=wt[de].camera;if(Ce){let H=g[Ce];H||(H=new ev,g[Ce]=H);const pe=x.getCameraImage(Ce);H.sourceTexture=pe}}}}for(let wt=0;wt<G.length;wt++){const Ht=N[wt],kt=G[wt];Ht!==null&&kt!==void 0&&kt.update(Ht,ft,p||h)}yt&&yt(st,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),b=null}const Pt=new iv;Pt.setAnimationLoop(Tt),this.setAnimationLoop=function(st){yt=st},this.dispose=function(){}}}const Ls=new Xi,YT=new tn;function qT(r,t){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function s(S,g){g.color.getRGB(S.fogColor.value,j_(r)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,O,w,z){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(S,g):g.isMeshToonMaterial?(c(S,g),x(S,g)):g.isMeshPhongMaterial?(c(S,g),_(S,g)):g.isMeshStandardMaterial?(c(S,g),y(S,g),g.isMeshPhysicalMaterial&&M(S,g,z)):g.isMeshMatcapMaterial?(c(S,g),b(S,g)):g.isMeshDepthMaterial?c(S,g):g.isMeshDistanceMaterial?(c(S,g),A(S,g)):g.isMeshNormalMaterial?c(S,g):g.isLineBasicMaterial?(h(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?m(S,g,O,w):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Kn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Kn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const O=t.get(g),w=O.envMap,z=O.envMapRotation;w&&(S.envMap.value=w,Ls.copy(z),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),S.envMapRotation.value.setFromMatrix4(YT.makeRotationFromEuler(Ls)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function h(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function m(S,g,O,w){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*O,S.scale.value=w*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function x(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,O){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,g){g.matcap&&(S.matcap.value=g.matcap)}function A(S,g){const O=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function jT(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,w){const z=w.program;s.uniformBlockBinding(O,z)}function p(O,w){let z=l[O.id];z===void 0&&(b(O),z=_(O),l[O.id]=z,O.addEventListener("dispose",S));const G=w.program;s.updateUBOMapping(O,G);const N=t.render.frame;c[O.id]!==N&&(y(O),c[O.id]=N)}function _(O){const w=x();O.__bindingPointIndex=w;const z=r.createBuffer(),G=O.__size,N=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,z),r.bufferData(r.UNIFORM_BUFFER,G,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,z),z}function x(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const w=l[O.id],z=O.uniforms,G=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let N=0,B=z.length;N<B;N++){const K=Array.isArray(z[N])?z[N]:[z[N]];for(let D=0,C=K.length;D<C;D++){const X=K[D];if(M(X,N,D,G)===!0){const nt=X.__offset,lt=Array.isArray(X.value)?X.value:[X.value];let pt=0;for(let ct=0;ct<lt.length;ct++){const F=lt[ct],U=A(F);typeof F=="number"||typeof F=="boolean"?(X.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,nt+pt,X.__data)):F.isMatrix3?(X.__data[0]=F.elements[0],X.__data[1]=F.elements[1],X.__data[2]=F.elements[2],X.__data[3]=0,X.__data[4]=F.elements[3],X.__data[5]=F.elements[4],X.__data[6]=F.elements[5],X.__data[7]=0,X.__data[8]=F.elements[6],X.__data[9]=F.elements[7],X.__data[10]=F.elements[8],X.__data[11]=0):(F.toArray(X.__data,pt),pt+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,nt,X.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(O,w,z,G){const N=O.value,B=w+"_"+z;if(G[B]===void 0)return typeof N=="number"||typeof N=="boolean"?G[B]=N:G[B]=N.clone(),!0;{const K=G[B];if(typeof N=="number"||typeof N=="boolean"){if(K!==N)return G[B]=N,!0}else if(K.equals(N)===!1)return K.copy(N),!0}return!1}function b(O){const w=O.uniforms;let z=0;const G=16;for(let B=0,K=w.length;B<K;B++){const D=Array.isArray(w[B])?w[B]:[w[B]];for(let C=0,X=D.length;C<X;C++){const nt=D[C],lt=Array.isArray(nt.value)?nt.value:[nt.value];for(let pt=0,ct=lt.length;pt<ct;pt++){const F=lt[pt],U=A(F),W=z%G,dt=W%U.boundary,vt=W+dt;z+=dt,vt!==0&&G-vt<U.storage&&(z+=G-vt),nt.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=z,z+=U.storage}}}const N=z%G;return N>0&&(z+=G-N),O.__size=z,O.__cache={},this}function A(O){const w={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(w.boundary=4,w.storage=4):O.isVector2?(w.boundary=8,w.storage=8):O.isVector3||O.isColor?(w.boundary=16,w.storage=12):O.isVector4?(w.boundary=16,w.storage=16):O.isMatrix3?(w.boundary=48,w.storage=48):O.isMatrix4?(w.boundary=64,w.storage=64):O.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",O),w}function S(O){const w=O.target;w.removeEventListener("dispose",S);const z=h.indexOf(w.__bindingPointIndex);h.splice(z,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function g(){for(const O in l)r.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}const ZT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let xa=null;function KT(){return xa===null&&(xa=new jS(ZT,32,32,cp,Kr),xa.minFilter=yi,xa.magFilter=yi,xa.wrapS=va,xa.wrapT=va,xa.generateMipmaps=!1,xa.needsUpdate=!0),xa}class QT{constructor(t={}){const{canvas:i=gS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Set([fp,up,lp]),A=new Set([Vi,Bs,ol,ll,rp,op]),S=new Uint32Array(4),g=new Int32Array(4);let O=null,w=null;const z=[],G=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let B=!1;this._outputColorSpace=li;let K=0,D=0,C=null,X=-1,nt=null;const lt=new rn,pt=new rn;let ct=null;const F=new xe(0);let U=0,W=i.width,dt=i.height,vt=1,P=null,at=null;const yt=new rn(0,0,W,dt),Tt=new rn(0,0,W,dt);let Pt=!1;const st=new pp;let ft=!1,wt=!1;const Ht=new tn,kt=new Q,ce=new rn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Ce(){return C===null?vt:1}let H=s;function pe(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ap}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",_t,!1),i.addEventListener("webglcontextcreationerror",Bt,!1),H===null){const Y="webgl2";if(H=pe(Y,R),H===null)throw pe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ge,ze,Gt,Ye,jt,se,L,E,$,xt,Mt,ut,Yt,Lt,Qt,Wt,St,Et,qt,Vt,Ot,ie,V,Dt;function Rt(){ge=new s3(H),ge.init(),ie=new GT(H,ge),ze=new KE(H,ge,t,ie),Gt=new IT(H,ge),ze.reversedDepthBuffer&&y&&Gt.buffers.depth.setReversed(!0),Ye=new l3(H),jt=new AT,se=new HT(H,ge,Gt,jt,ze,ie,Ye),L=new JE(N),E=new a3(N),$=new hb(H),V=new jE(H,$),xt=new r3(H,$,Ye,V),Mt=new u3(H,xt,$,Ye),qt=new c3(H,ze,se),Wt=new QE(jt),ut=new TT(N,L,E,ge,ze,V,Wt),Yt=new qT(N,jt),Lt=new CT,Qt=new OT(ge),Et=new qE(N,L,E,Gt,Mt,M,m),St=new BT(N,Mt,ze),Dt=new jT(H,Ye,ze,Gt),Vt=new ZE(H,ge,Ye),Ot=new o3(H,ge,Ye),Ye.programs=ut.programs,N.capabilities=ze,N.extensions=ge,N.properties=jt,N.renderLists=Lt,N.shadowMap=St,N.state=Gt,N.info=Ye}Rt();const Ct=new WT(N,H);this.xr=Ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(R){R!==void 0&&(vt=R,this.setSize(W,dt,!1))},this.getSize=function(R){return R.set(W,dt)},this.setSize=function(R,Y,rt=!0){if(Ct.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,dt=Y,i.width=Math.floor(R*vt),i.height=Math.floor(Y*vt),rt===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(W*vt,dt*vt).floor()},this.setDrawingBufferSize=function(R,Y,rt){W=R,dt=Y,vt=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(lt)},this.getViewport=function(R){return R.copy(yt)},this.setViewport=function(R,Y,rt,et){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,rt,et),Gt.viewport(lt.copy(yt).multiplyScalar(vt).round())},this.getScissor=function(R){return R.copy(Tt)},this.setScissor=function(R,Y,rt,et){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,Y,rt,et),Gt.scissor(pt.copy(Tt).multiplyScalar(vt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(R){Gt.setScissorTest(Pt=R)},this.setOpaqueSort=function(R){P=R},this.setTransparentSort=function(R){at=R},this.getClearColor=function(R){return R.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let et=0;if(R){let j=!1;if(C!==null){const At=C.texture.format;j=b.has(At)}if(j){const At=C.texture.type,Ut=A.has(At),zt=Et.getClearColor(),Ft=Et.getClearAlpha(),$t=zt.r,ee=zt.g,Zt=zt.b;Ut?(S[0]=$t,S[1]=ee,S[2]=Zt,S[3]=Ft,H.clearBufferuiv(H.COLOR,0,S)):(g[0]=$t,g[1]=ee,g[2]=Zt,g[3]=Ft,H.clearBufferiv(H.COLOR,0,g))}else et|=H.COLOR_BUFFER_BIT}Y&&(et|=H.DEPTH_BUFFER_BIT),rt&&(et|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",_t,!1),i.removeEventListener("webglcontextcreationerror",Bt,!1),Et.dispose(),Lt.dispose(),Qt.dispose(),jt.dispose(),L.dispose(),E.dispose(),Mt.dispose(),V.dispose(),Dt.dispose(),ut.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",$r),Ct.removeEventListener("sessionend",to),Mi.stop()};function bt(R){R.preventDefault(),ru("WebGLRenderer: Context Lost."),B=!0}function _t(){ru("WebGLRenderer: Context Restored."),B=!1;const R=Ye.autoReset,Y=St.enabled,rt=St.autoUpdate,et=St.needsUpdate,j=St.type;Rt(),Ye.autoReset=R,St.enabled=Y,St.autoUpdate=rt,St.needsUpdate=et,St.type=j}function Bt(R){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const Y=R.target;Y.removeEventListener("dispose",ae),Ie(Y)}function Ie(R){we(R),jt.remove(R)}function we(R){const Y=jt.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){ut.releaseProgram(rt)}),R.isShaderMaterial&&ut.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,et,j,At){Y===null&&(Y=on);const Ut=j.isMesh&&j.matrixWorld.determinant()<0,zt=xu(R,Y,rt,et,j);Gt.setMaterial(et,Ut);let Ft=rt.index,$t=1;if(et.wireframe===!0){if(Ft=xt.getWireframeAttribute(rt),Ft===void 0)return;$t=2}const ee=rt.drawRange,Zt=rt.attributes.position;let ue=ee.start*$t,Re=(ee.start+ee.count)*$t;At!==null&&(ue=Math.max(ue,At.start*$t),Re=Math.min(Re,(At.start+At.count)*$t)),Ft!==null?(ue=Math.max(ue,0),Re=Math.min(Re,Ft.count)):Zt!=null&&(ue=Math.max(ue,0),Re=Math.min(Re,Zt.count));const De=Re-ue;if(De<0||De===1/0)return;V.setup(j,et,zt,rt,Ft);let Ee,Pe=Vt;if(Ft!==null&&(Ee=$.get(Ft),Pe=Ot,Pe.setIndex(Ee)),j.isMesh)et.wireframe===!0?(Gt.setLineWidth(et.wireframeLinewidth*Ce()),Pe.setMode(H.LINES)):Pe.setMode(H.TRIANGLES);else if(j.isLine){let Jt=et.linewidth;Jt===void 0&&(Jt=1),Gt.setLineWidth(Jt*Ce()),j.isLineSegments?Pe.setMode(H.LINES):j.isLineLoop?Pe.setMode(H.LINE_LOOP):Pe.setMode(H.LINE_STRIP)}else j.isPoints?Pe.setMode(H.POINTS):j.isSprite&&Pe.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)fl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Pe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Jt=j._multiDrawStarts,qe=j._multiDrawCounts,Te=j._multiDrawCount,bn=Ft?$.get(Ft).bytesPerElement:1,Aa=jt.get(et).currentProgram.getUniforms();for(let Ze=0;Ze<Te;Ze++)Aa.setValue(H,"_gl_DrawID",Ze),Pe.render(Jt[Ze]/bn,qe[Ze])}else if(j.isInstancedMesh)Pe.renderInstances(ue,De,j.count);else if(rt.isInstancedBufferGeometry){const Jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,qe=Math.min(rt.instanceCount,Jt);Pe.renderInstances(ue,De,qe)}else Pe.render(ue,De)};function Nn(R,Y,rt){R.transparent===!0&&R.side===_a&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,xn(R,Y,rt),R.side=ba,R.needsUpdate=!0,xn(R,Y,rt),R.side=_a):xn(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),w=Qt.get(rt),w.init(Y),G.push(w),rt.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),R!==rt&&R.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights();const et=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const At=j.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const zt=At[Ut];Nn(zt,rt,j),et.add(zt)}else Nn(At,rt,j),et.add(At)}),w=G.pop(),et},this.compileAsync=function(R,Y,rt=null){const et=this.compile(R,Y,rt);return new Promise(j=>{function At(){if(et.forEach(function(Ut){jt.get(Ut).currentProgram.isReady()&&et.delete(Ut)}),et.size===0){j(R);return}setTimeout(At,10)}ge.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Qn=null;function hl(R){Qn&&Qn(R)}function $r(){Mi.stop()}function to(){Mi.start()}const Mi=new iv;Mi.setAnimationLoop(hl),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){Qn=R,Ct.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},Ct.addEventListener("sessionstart",$r),Ct.addEventListener("sessionend",to),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Y),Y=Ct.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,Y,C),w=Qt.get(R,G.length),w.init(Y),G.push(w),Ht.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),st.setFromProjectionMatrix(Ht,Hi,Y.reversedDepth),wt=this.localClippingEnabled,ft=Wt.init(this.clippingPlanes,wt),O=Lt.get(R,z.length),O.init(),z.push(O),Ct.enabled===!0&&Ct.isPresenting===!0){const At=N.xr.getDepthSensingMesh();At!==null&&cs(At,Y,-1/0,N.sortObjects)}cs(R,Y,0,N.sortObjects),O.finish(),N.sortObjects===!0&&O.sort(P,at),de=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,de&&Et.addToRenderList(O,R),this.info.render.frame++,ft===!0&&Wt.beginShadows();const rt=w.state.shadowsArray;St.render(rt,R,Y),ft===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=O.opaque,j=O.transmissive;if(w.setupLights(),Y.isArrayCamera){const At=Y.cameras;if(j.length>0)for(let Ut=0,zt=At.length;Ut<zt;Ut++){const Ft=At[Ut];no(et,j,R,Ft)}de&&Et.render(R);for(let Ut=0,zt=At.length;Ut<zt;Ut++){const Ft=At[Ut];eo(O,R,Ft,Ft.viewport)}}else j.length>0&&no(et,j,R,Y),de&&Et.render(R),eo(O,R,Y);C!==null&&D===0&&(se.updateMultisampleRenderTarget(C),se.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(N,R,Y),V.resetDefaultState(),X=-1,nt=null,G.pop(),G.length>0?(w=G[G.length-1],ft===!0&&Wt.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,z.pop(),z.length>0?O=z[z.length-1]:O=null};function cs(R,Y,rt,et){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||st.intersectsSprite(R)){et&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ht);const Ut=Mt.update(R),zt=R.material;zt.visible&&O.push(R,Ut,zt,rt,ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||st.intersectsObject(R))){const Ut=Mt.update(R),zt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ce.copy(Ut.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Ht)),Array.isArray(zt)){const Ft=Ut.groups;for(let $t=0,ee=Ft.length;$t<ee;$t++){const Zt=Ft[$t],ue=zt[Zt.materialIndex];ue&&ue.visible&&O.push(R,Ut,ue,rt,ce.z,Zt)}}else zt.visible&&O.push(R,Ut,zt,rt,ce.z,null)}}const At=R.children;for(let Ut=0,zt=At.length;Ut<zt;Ut++)cs(At[Ut],Y,rt,et)}function eo(R,Y,rt,et){const{opaque:j,transmissive:At,transparent:Ut}=R;w.setupLightsView(rt),ft===!0&&Wt.setGlobalState(N.clippingPlanes,rt),et&&Gt.viewport(lt.copy(et)),j.length>0&&Jn(j,Y,rt),At.length>0&&Jn(At,Y,rt),Ut.length>0&&Jn(Ut,Y,rt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function no(R,Y,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;w.state.transmissionRenderTarget[et.id]===void 0&&(w.state.transmissionRenderTarget[et.id]=new Is(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Kr:Vi,minFilter:zs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const At=w.state.transmissionRenderTarget[et.id],Ut=et.viewport||lt;At.setSize(Ut.z*N.transmissionResolutionScale,Ut.w*N.transmissionResolutionScale);const zt=N.getRenderTarget(),Ft=N.getActiveCubeFace(),$t=N.getActiveMipmapLevel();N.setRenderTarget(At),N.getClearColor(F),U=N.getClearAlpha(),U<1&&N.setClearColor(16777215,.5),N.clear(),de&&Et.render(rt);const ee=N.toneMapping;N.toneMapping=os;const Zt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),w.setupLightsView(et),ft===!0&&Wt.setGlobalState(N.clippingPlanes,et),Jn(R,rt,et),se.updateMultisampleRenderTarget(At),se.updateRenderTargetMipmap(At),ge.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Re=0,De=Y.length;Re<De;Re++){const Ee=Y[Re],{object:Pe,geometry:Jt,material:qe,group:Te}=Ee;if(qe.side===_a&&Pe.layers.test(et.layers)){const bn=qe.side;qe.side=Kn,qe.needsUpdate=!0,un(Pe,rt,et,Jt,qe,Te),qe.side=bn,qe.needsUpdate=!0,ue=!0}}ue===!0&&(se.updateMultisampleRenderTarget(At),se.updateRenderTargetMipmap(At))}N.setRenderTarget(zt,Ft,$t),N.setClearColor(F,U),Zt!==void 0&&(et.viewport=Zt),N.toneMapping=ee}function Jn(R,Y,rt){const et=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,At=R.length;j<At;j++){const Ut=R[j],{object:zt,geometry:Ft,group:$t}=Ut;let ee=Ut.material;ee.allowOverride===!0&&et!==null&&(ee=et),zt.layers.test(rt.layers)&&un(zt,Y,rt,Ft,ee,$t)}}function un(R,Y,rt,et,j,At){R.onBeforeRender(N,Y,rt,et,j,At),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(N,Y,rt,et,R,At),j.transparent===!0&&j.side===_a&&j.forceSinglePass===!1?(j.side=Kn,j.needsUpdate=!0,N.renderBufferDirect(rt,Y,et,j,R,At),j.side=ba,j.needsUpdate=!0,N.renderBufferDirect(rt,Y,et,j,R,At),j.side=_a):N.renderBufferDirect(rt,Y,et,j,R,At),R.onAfterRender(N,Y,rt,et,j,At)}function xn(R,Y,rt){Y.isScene!==!0&&(Y=on);const et=jt.get(R),j=w.state.lights,At=w.state.shadowsArray,Ut=j.state.version,zt=ut.getParameters(R,j.state,At,Y,rt),Ft=ut.getProgramCacheKey(zt);let $t=et.programs;et.environment=R.isMeshStandardMaterial?Y.environment:null,et.fog=Y.fog,et.envMap=(R.isMeshStandardMaterial?E:L).get(R.envMap||et.environment),et.envMapRotation=et.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",ae),$t=new Map,et.programs=$t);let ee=$t.get(Ft);if(ee!==void 0){if(et.currentProgram===ee&&et.lightsStateVersion===Ut)return Xs(R,zt),ee}else zt.uniforms=ut.getUniforms(R),R.onBeforeCompile(zt,N),ee=ut.acquireProgram(zt,Ft),$t.set(Ft,ee),et.uniforms=zt.uniforms;const Zt=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Wt.uniform),Xs(R,zt),et.needsLights=dl(R),et.lightsStateVersion=Ut,et.needsLights&&(Zt.ambientLightColor.value=j.state.ambient,Zt.lightProbe.value=j.state.probe,Zt.directionalLights.value=j.state.directional,Zt.directionalLightShadows.value=j.state.directionalShadow,Zt.spotLights.value=j.state.spot,Zt.spotLightShadows.value=j.state.spotShadow,Zt.rectAreaLights.value=j.state.rectArea,Zt.ltc_1.value=j.state.rectAreaLTC1,Zt.ltc_2.value=j.state.rectAreaLTC2,Zt.pointLights.value=j.state.point,Zt.pointLightShadows.value=j.state.pointShadow,Zt.hemisphereLights.value=j.state.hemi,Zt.directionalShadowMap.value=j.state.directionalShadowMap,Zt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Zt.spotShadowMap.value=j.state.spotShadowMap,Zt.spotLightMatrix.value=j.state.spotLightMatrix,Zt.spotLightMap.value=j.state.spotLightMap,Zt.pointShadowMap.value=j.state.pointShadowMap,Zt.pointShadowMatrix.value=j.state.pointShadowMatrix),et.currentProgram=ee,et.uniformsList=null,ee}function Wi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=nu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Xs(R,Y){const rt=jt.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function xu(R,Y,rt,et,j){Y.isScene!==!0&&(Y=on),se.resetTextureUnits();const At=Y.fog,Ut=et.isMeshStandardMaterial?Y.environment:null,zt=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:jr,Ft=(et.isMeshStandardMaterial?E:L).get(et.envMap||Ut),$t=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Zt=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,Re=!!rt.morphAttributes.color;let De=os;et.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(De=N.toneMapping);const Ee=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=Ee!==void 0?Ee.length:0,Jt=jt.get(et),qe=w.state.lights;if(ft===!0&&(wt===!0||R!==nt)){const Tn=R===nt&&et.id===X;Wt.setState(et,R,Tn)}let Te=!1;et.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==qe.state.version||Jt.outputColorSpace!==zt||j.isBatchedMesh&&Jt.batching===!1||!j.isBatchedMesh&&Jt.batching===!0||j.isBatchedMesh&&Jt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Jt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Jt.instancing===!1||!j.isInstancedMesh&&Jt.instancing===!0||j.isSkinnedMesh&&Jt.skinning===!1||!j.isSkinnedMesh&&Jt.skinning===!0||j.isInstancedMesh&&Jt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Jt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Jt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Jt.instancingMorph===!1&&j.morphTexture!==null||Jt.envMap!==Ft||et.fog===!0&&Jt.fog!==At||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Wt.numPlanes||Jt.numIntersection!==Wt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==Zt||Jt.morphNormals!==ue||Jt.morphColors!==Re||Jt.toneMapping!==De||Jt.morphTargetsCount!==Pe)&&(Te=!0):(Te=!0,Jt.__version=et.version);let bn=Jt.currentProgram;Te===!0&&(bn=xn(et,Y,j));let Aa=!1,Ze=!1,Yi=!1;const Ke=bn.getUniforms(),En=Jt.uniforms;if(Gt.useProgram(bn.program)&&(Aa=!0,Ze=!0,Yi=!0),et.id!==X&&(X=et.id,Ze=!0),Aa||nt!==R){Gt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ke.setValue(H,"projectionMatrix",R.projectionMatrix),Ke.setValue(H,"viewMatrix",R.matrixWorldInverse);const Cn=Ke.map.cameraPosition;Cn!==void 0&&Cn.setValue(H,kt.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&Ke.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ke.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),nt!==R&&(nt=R,Ze=!0,Yi=!0)}if(j.isSkinnedMesh){Ke.setOptional(H,j,"bindMatrix"),Ke.setOptional(H,j,"bindMatrixInverse");const Tn=j.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ke.setValue(H,"boneTexture",Tn.boneTexture,se))}j.isBatchedMesh&&(Ke.setOptional(H,j,"batchingTexture"),Ke.setValue(H,"batchingTexture",j._matricesTexture,se),Ke.setOptional(H,j,"batchingIdTexture"),Ke.setValue(H,"batchingIdTexture",j._indirectTexture,se),Ke.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Ke.setValue(H,"batchingColorTexture",j._colorsTexture,se));const gn=rt.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&qt.update(j,rt,bn),(Ze||Jt.receiveShadow!==j.receiveShadow)&&(Jt.receiveShadow=j.receiveShadow,Ke.setValue(H,"receiveShadow",j.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(En.envMap.value=Ft,En.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&Y.environment!==null&&(En.envMapIntensity.value=Y.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=KT()),Ze&&(Ke.setValue(H,"toneMappingExposure",N.toneMappingExposure),Jt.needsLights&&gu(En,Yi),At&&et.fog===!0&&Yt.refreshFogUniforms(En,At),Yt.refreshMaterialUniforms(En,et,vt,dt,w.state.transmissionRenderTarget[R.id]),nu.upload(H,Wi(Jt),En,se)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(nu.upload(H,Wi(Jt),En,se),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ke.setValue(H,"center",j.center),Ke.setValue(H,"modelViewMatrix",j.modelViewMatrix),Ke.setValue(H,"normalMatrix",j.normalMatrix),Ke.setValue(H,"modelMatrix",j.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Tn=et.uniformsGroups;for(let Cn=0,Ni=Tn.length;Cn<Ni;Cn++){const qi=Tn[Cn];Dt.update(qi,bn),Dt.bind(qi,bn)}}return bn}function gu(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function dl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,Y,rt){const et=jt.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),jt.get(R.texture).__webglTexture=Y,jt.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=jt.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const us=H.createFramebuffer();this.setRenderTarget=function(R,Y=0,rt=0){C=R,K=Y,D=rt;let et=!0,j=null,At=!1,Ut=!1;if(R){const Ft=jt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(H.FRAMEBUFFER,null),et=!1;else if(Ft.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(Ft.__hasExternalTextures)se.rebindTextures(R,jt.get(R.texture).__webglTexture,jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Zt=R.depthTexture;if(Ft.__boundDepthTexture!==Zt){if(Zt!==null&&jt.has(Zt)&&(R.width!==Zt.image.width||R.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const ee=jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[Y])?j=ee[Y][rt]:j=ee[Y],At=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?j=jt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?j=ee[rt]:j=ee,lt.copy(R.viewport),pt.copy(R.scissor),ct=R.scissorTest}else lt.copy(yt).multiplyScalar(vt).floor(),pt.copy(Tt).multiplyScalar(vt).floor(),ct=Pt;if(rt!==0&&(j=us),Gt.bindFramebuffer(H.FRAMEBUFFER,j)&&et&&Gt.drawBuffers(R,j),Gt.viewport(lt),Gt.scissor(pt),Gt.setScissorTest(ct),At){const Ft=jt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,rt)}else if(Ut){const Ft=Y;for(let $t=0;$t<R.textures.length;$t++){const ee=jt.get(R.textures[$t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$t,ee.__webglTexture,rt,Ft)}}else if(R!==null&&rt!==0){const Ft=jt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ft.__webglTexture,rt)}X=-1},this.readRenderTargetPixels=function(R,Y,rt,et,j,At,Ut,zt=0){if(!(R&&R.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){Gt.bindFramebuffer(H.FRAMEBUFFER,Ft);try{const $t=R.textures[zt],ee=$t.format,Zt=$t.type;if(!ze.textureFormatReadable(ee)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Zt)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-et&&rt>=0&&rt<=R.height-j&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt),H.readPixels(Y,rt,et,j,ie.convert(ee),ie.convert(Zt),At))}finally{const $t=C!==null?jt.get(C).__webglFramebuffer:null;Gt.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,et,j,At,Ut,zt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft)if(Y>=0&&Y<=R.width-et&&rt>=0&&rt<=R.height-j){Gt.bindFramebuffer(H.FRAMEBUFFER,Ft);const $t=R.textures[zt],ee=$t.format,Zt=$t.type;if(!ze.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.bufferData(H.PIXEL_PACK_BUFFER,At.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt),H.readPixels(Y,rt,et,j,ie.convert(ee),ie.convert(Zt),0);const Re=C!==null?jt.get(C).__webglFramebuffer:null;Gt.bindFramebuffer(H.FRAMEBUFFER,Re);const De=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _S(H,De,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,At),H.deleteBuffer(ue),H.deleteSync(De),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const et=Math.pow(2,-rt),j=Math.floor(R.image.width*et),At=Math.floor(R.image.height*et),Ut=Y!==null?Y.x:0,zt=Y!==null?Y.y:0;se.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Ut,zt,j,At),Gt.unbindTexture()};const io=H.createFramebuffer(),Ta=H.createFramebuffer();this.copyTextureToTexture=function(R,Y,rt=null,et=null,j=0,At=null){At===null&&(j!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=j,j=0):At=0);let Ut,zt,Ft,$t,ee,Zt,ue,Re,De;const Ee=R.isCompressedTexture?R.mipmaps[At]:R.image;if(rt!==null)Ut=rt.max.x-rt.min.x,zt=rt.max.y-rt.min.y,Ft=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,ee=rt.min.y,Zt=rt.isBox3?rt.min.z:0;else{const gn=Math.pow(2,-j);Ut=Math.floor(Ee.width*gn),zt=Math.floor(Ee.height*gn),R.isDataArrayTexture?Ft=Ee.depth:R.isData3DTexture?Ft=Math.floor(Ee.depth*gn):Ft=1,$t=0,ee=0,Zt=0}et!==null?(ue=et.x,Re=et.y,De=et.z):(ue=0,Re=0,De=0);const Pe=ie.convert(Y.format),Jt=ie.convert(Y.type);let qe;Y.isData3DTexture?(se.setTexture3D(Y,0),qe=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),qe=H.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),qe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Te=H.getParameter(H.UNPACK_ROW_LENGTH),bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Aa=H.getParameter(H.UNPACK_SKIP_PIXELS),Ze=H.getParameter(H.UNPACK_SKIP_ROWS),Yi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ee.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Zt);const Ke=R.isDataArrayTexture||R.isData3DTexture,En=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const gn=jt.get(R),Tn=jt.get(Y),Cn=jt.get(gn.__renderTarget),Ni=jt.get(Tn.__renderTarget);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let qi=0;qi<Ft;qi++)Ke&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(R).__webglTexture,j,Zt+qi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(Y).__webglTexture,At,De+qi)),H.blitFramebuffer($t,ee,Ut,zt,ue,Re,Ut,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||jt.has(R)){const gn=jt.get(R),Tn=jt.get(Y);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,io),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ta);for(let Cn=0;Cn<Ft;Cn++)Ke?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,j,Zt+Cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,j),En?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Tn.__webglTexture,At,De+Cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Tn.__webglTexture,At),j!==0?H.blitFramebuffer($t,ee,Ut,zt,ue,Re,Ut,zt,H.COLOR_BUFFER_BIT,H.NEAREST):En?H.copyTexSubImage3D(qe,At,ue,Re,De+Cn,$t,ee,Ut,zt):H.copyTexSubImage2D(qe,At,ue,Re,$t,ee,Ut,zt);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else En?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(qe,At,ue,Re,De,Ut,zt,Ft,Pe,Jt,Ee.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(qe,At,ue,Re,De,Ut,zt,Ft,Pe,Ee.data):H.texSubImage3D(qe,At,ue,Re,De,Ut,zt,Ft,Pe,Jt,Ee):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,At,ue,Re,Ut,zt,Pe,Jt,Ee.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,At,ue,Re,Ee.width,Ee.height,Pe,Ee.data):H.texSubImage2D(H.TEXTURE_2D,At,ue,Re,Ut,zt,Pe,Jt,Ee);H.pixelStorei(H.UNPACK_ROW_LENGTH,Te),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Aa),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ze),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yi),At===0&&Y.generateMipmaps&&H.generateMipmap(qe),Gt.unbindTexture()},this.initRenderTarget=function(R){jt.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),Gt.unbindTexture()},this.resetState=function(){K=0,D=0,C=null,Gt.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const d_={type:"change"},xp={type:"start"},lv={type:"end"},Qc=new hu,p_=new is,JT=Math.cos(70*yS.DEG2RAD),vn=new Q,jn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ld=1e-6;class $T extends ub{constructor(t,i=null){super(t,i),this.state=We.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Fs,this._lastTargetPosition=new Q,this._quat=new Fs().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vg,this._sphericalDelta=new Vg,this._scale=1,this._panOffset=new Q,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new Q,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eA.bind(this),this._onPointerDown=tA.bind(this),this._onPointerUp=nA.bind(this),this._onContextMenu=cA.bind(this),this._onMouseWheel=sA.bind(this),this._onKeyDown=rA.bind(this),this._onTouchStart=oA.bind(this),this._onTouchMove=lA.bind(this),this._onMouseDown=iA.bind(this),this._onMouseMove=aA.bind(this),this._interceptControlDown=uA.bind(this),this._interceptControlUp=fA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(d_),this.update(),this.state=We.NONE}update(t=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),l<-Math.PI?l+=jn:l>Math.PI&&(l-=jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=vn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Qc.origin.copy(this.object.position),Qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qc.direction))<JT?this.object.lookAt(this.target):(p_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qc.intersectPlane(p_,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ld||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ld||this._lastTargetPosition.distanceToSquared(this.target)>ld?(this.dispatchEvent(d_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let c=vn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ne,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function tA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function eA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function nA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lv),this.state=We.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function iA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=We.DOLLY;break;case Vr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}break;case Vr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(xp)}function aA(r){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function sA(r){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(r.preventDefault(),this.dispatchEvent(xp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(lv))}function rA(r){this.enabled!==!1&&this._handleKeyDown(r)}function oA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=We.TOUCH_ROTATE;break;case Hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=We.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(xp)}function lA(r){switch(this._trackPointer(r),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=We.NONE}}function cA(r){this.enabled!==!1&&r.preventDefault()}function uA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hA=new xe("#60a5fa"),dA=new xe("#facc15"),pA=new xe("#f97316");function mA(r,t,i,s=new Set){r.forEach(l=>{if(l.userData.locationId===i){l.material.color.copy(pA),l.material.emissive.set("#7c2d12"),l.material.emissiveIntensity=.35;return}if(l.userData.locationId===t){l.material.color.copy(hA),l.material.emissive.set("#1d4ed8"),l.material.emissiveIntensity=.25;return}if(s.has(l.userData.locationId)){l.material.color.copy(dA),l.material.emissive.set("#854d0e"),l.material.emissiveIntensity=.2;return}l.material.color.copy(l.userData.baseColor),l.material.emissive.set("#000000"),l.material.emissiveIntensity=0})}const xA={Boundary:"#9aa3a6","Layout Zone":"#ffffff","Main Aisle":"#40505a","Work Area":"#f2a65f",Pillar:"#374151",Gate:"#f59e0b",Wall:"#7b8794","Non-placeable Area":"#ef8b9a",Shelf:"#d6dadd",Nestainer:"#bfc9d6","Operation Area":"#ef4444",Shop:"#d6dadd",Path:"#3f484b",Dock:"#b7c7dd",Rack:"#c4cbd3",Office:"#ef4444"},m_=["#b91c1c","#7c3aed","#db2777","#ea580c","#0891b2","#2563eb","#16a34a","#ca8a04","#dc2626","#4f46e5"],x_=18,gA=.96,_A=12,g_=.7,__=3.2,vA=.32,yA=.82;function MA({locations:r,hoveredLocationId:t,selectedLocationId:i,searchedLocationIds:s,onHoverLocation:l,onSelectLocation:c}){const h=be.useRef(null),d=be.useRef(new Map),m=be.useRef(null),p=be.useRef(null),[_,x]=be.useState(1),[y,M]=be.useState(-28),[b,A]=be.useState(.54),[S,g]=be.useState({x:0,y:0}),O=be.useMemo(()=>new Set(s),[s]),w=be.useMemo(()=>LA(r),[r]),z=(U,W,dt=0)=>({...NA(U,W,dt,w,y,b)}),G=r.filter(U=>U.type==="Shop"),B=r.filter(U=>U.type==="Path").map(U=>AA(U,z)),K=RA(r,z),D=G.map(U=>SA(U,z,O,i,t)).sort((U,W)=>U.depth-W.depth),C=wA([...D.flatMap(U=>U.points),...B.flatMap(U=>U.points),...K.map(U=>U.point)]),X=DA(C,_,S),nt=TA(r,z);return Z.jsxs("svg",{"aria-label":"Warehouse 3D map",className:"isometric-map",onPointerCancel:F,onPointerDown:pt,onPointerLeave:F,onPointerMove:ct,onPointerUp:F,onWheel:lt,ref:h,role:"img",viewBox:`${X.x} ${X.y} ${X.width} ${X.height}`,children:[Z.jsx("defs",{children:Z.jsx("filter",{id:"iso-shadow",x:"-20%",y:"-20%",width:"140%",height:"150%",children:Z.jsx("feDropShadow",{dx:"0",dy:"8",floodColor:"#111827",floodOpacity:"0.25",stdDeviation:"5"})})}),Z.jsx("rect",{className:"isometric-bg",x:X.x,y:X.y,width:X.width,height:X.height}),nt&&Z.jsx("polygon",{className:"isometric-floor",points:ns(nt)}),B.map(U=>Z.jsxs("g",{className:"iso-lane",children:[Z.jsx("polygon",{points:ns(U.points)}),Z.jsx("polyline",{points:ns(U.centerLine)}),Z.jsx("text",{x:U.labelPoint.x,y:U.labelPoint.y,children:U.label})]},U.location.id)),K.map(U=>Z.jsxs("g",{className:`iso-amenity iso-amenity-${U.kind}`,children:[Z.jsx("rect",{height:"28",rx:"5",width:"38",x:U.point.x-19,y:U.point.y-28}),Z.jsx("text",{x:U.point.x,y:U.point.y-10,children:U.label})]},U.id)),D.map(U=>Z.jsxs("g",{className:`iso-block ${U.isHovered?"hovered":""} ${U.isSelected?"selected":""} ${U.isSearched?"searched":""}`,onClick:()=>c(U.location.id),onMouseEnter:()=>l(U.location.id),onMouseLeave:()=>l(null),children:[Z.jsx("polygon",{fill:U.rightColor,points:ns(U.rightFace),style:{stroke:U.borderColor}}),Z.jsx("polygon",{fill:U.frontColor,points:ns(U.frontFace),style:{stroke:U.borderColor}}),Z.jsx("polygon",{fill:U.topColor,points:ns(U.topFace),style:{stroke:U.borderColor}}),Z.jsx("polyline",{className:"iso-block-border",points:ns([...U.topFace,U.topFace[0]]),style:{stroke:U.borderColor}}),Z.jsx("polyline",{className:"iso-block-outline",points:ns([...U.topFace,U.topFace[0]])}),U.showLabel&&Z.jsx("text",{className:"iso-label",x:U.labelPoint.x,y:U.labelPoint.y,children:U.location.name}),U.showDetail&&Z.jsxs("g",{className:"iso-detail",children:[Z.jsx("rect",{height:"102",rx:"6",width:U.detailWidth,x:U.detailPoint.x-U.detailWidth/2,y:U.detailPoint.y-110}),Z.jsx("text",{x:U.detailPoint.x,y:U.detailPoint.y-88,children:U.location.name}),Z.jsxs("text",{className:"iso-detail-meta",x:U.detailPoint.x,y:U.detailPoint.y-68,children:["Type: ",U.location.type]}),Z.jsxs("text",{className:"iso-detail-meta",x:U.detailPoint.x,y:U.detailPoint.y-52,children:["Area: ",U.area.toFixed(0)," sq units · Height: ",U.height.toFixed(1)]}),Z.jsxs("text",{className:"iso-detail-meta",x:U.detailPoint.x,y:U.detailPoint.y-36,children:["X ",U.location.xMin,"-",U.location.xMax," · Y ",U.location.yMin,"-",U.location.yMax]}),Z.jsx("text",{className:"iso-detail-meta",x:U.detailPoint.x,y:U.detailPoint.y-20,children:U.location.description??"No description available."})]})]},U.location.id))]});function lt(U){U.preventDefault();const W=U.deltaY>0?-1:1,dt=cd(_*(W>0?1.12:.88),g_,__);x(dt)}function pt(U){const W=h.current;if(W){if(U.preventDefault(),W.setPointerCapture(U.pointerId),d.current.set(U.pointerId,{x:U.clientX,y:U.clientY}),d.current.size>=2){const[dt,vt]=[...d.current.values()];p.current={distance:v_(dt,vt),zoom:_},m.current=null;return}m.current={x:U.clientX,y:U.clientY,rotation:y}}}function ct(U){if(!h.current||!d.current.has(U.pointerId))return;if(U.preventDefault(),d.current.set(U.pointerId,{x:U.clientX,y:U.clientY}),d.current.size>=2){const[at,yt]=[...d.current.values()],Tt=p.current;Tt&&x(cd(Tt.zoom*(v_(at,yt)/Math.max(Tt.distance,1)),g_,__));return}const dt=m.current;if(!dt)return;const vt=U.clientX-dt.x,P=U.clientY-dt.y;M(M_(dt.rotation+vt*.35)),A(at=>cd(at-P*.0025,vA,yA)),m.current={...dt,x:U.clientX,y:U.clientY,rotation:M_(dt.rotation+vt*.35)}}function F(U){const W=h.current;if(W?.hasPointerCapture(U.pointerId)&&W.releasePointerCapture(U.pointerId),d.current.delete(U.pointerId),p.current=null,d.current.size===1){const[dt]=d.current.values();m.current={x:dt.x,y:dt.y,rotation:y};return}m.current=null}}function SA(r,t,i,s,l){const c=Math.max(r.zMax,r.zMin+.08),h=[t(r.xMin,r.yMin,c),t(r.xMax,r.yMin,c),t(r.xMax,r.yMax,c),t(r.xMin,r.yMax,c)],d=[t(r.xMin,r.yMax,r.zMin),t(r.xMax,r.yMax,r.zMin),t(r.xMax,r.yMax,c),t(r.xMin,r.yMax,c)],m=[t(r.xMax,r.yMin,r.zMin),t(r.xMax,r.yMax,r.zMin),t(r.xMax,r.yMax,c),t(r.xMax,r.yMin,c)],p=bA(r,i,s,l),_=EA(r,i,s,l),x=t((r.xMin+r.xMax)/2,(r.yMin+r.yMax)/2,c+.45),y=t((r.xMin+r.xMax)/2,(r.yMin+r.yMax)/2,c+2.3),M=Math.max(250,Math.min(380,r.name.length*8+190)),b=Math.abs(r.xMax-r.xMin)*Math.abs(r.yMax-r.yMin),A=Math.abs(r.zMax-r.zMin);return{location:r,topFace:h,frontFace:d,rightFace:m,points:[...h,...d,...m],labelPoint:x,topColor:p,frontColor:y_(p,-18),rightColor:y_(p,-28),borderColor:_,detailPoint:y,detailWidth:M,area:b,height:A,depth:r.xMax+r.yMax+c,isHovered:r.id===l,isSelected:r.id===s,isSearched:i.has(r.id),showDetail:!1,showLabel:r.type!=="Boundary"&&r.type!=="Path"}}function bA(r,t,i,s){return r.id===i||r.id===s||t.has(r.id)?"#ef4444":xA[r.type]??"#d6dadd"}function EA(r,t,i,s){return r.id===i||r.id===s||t.has(r.id)?"#991b1b":r.type==="Shop"?m_[UA(r.id)%m_.length]:"#17202a"}function TA(r,t){if(r.length===0)return null;const i=Math.min(...r.map(h=>h.xMin))-2,s=Math.min(...r.map(h=>h.yMin))-2,l=Math.max(...r.map(h=>h.xMax))+2,c=Math.max(...r.map(h=>h.yMax))+2;return[t(i,s,0),t(l,s,0),t(l,c,0),t(i,c,0)]}function AA(r,t){const s=[t(r.xMin,r.yMin,.06),t(r.xMax,r.yMin,.06),t(r.xMax,r.yMax,.06),t(r.xMin,r.yMax,.06)],l=r.yMax-r.yMin>=r.xMax-r.xMin,c=(r.xMin+r.xMax)/2,h=(r.yMin+r.yMax)/2,d=l?[t(c,r.yMin+1,.06+.02),t(c,r.yMax-1,.06+.02)]:[t(r.xMin+1,h,.06+.02),t(r.xMax-1,h,.06+.02)];return{location:r,points:s,centerLine:d,label:r.name.toLowerCase().includes("way")?"WAY":l?"North/South Way":"East/West Way",labelPoint:t(c,h,.06+.18)}}function RA(r,t){const i=r.filter(m=>m.type==="Gate");if(i.length>0)return i.map(m=>{const p=CA(m);return{id:`amenity-${m.id}`,kind:p==="CR"?"cr":"exit",label:p,point:t((m.xMin+m.xMax)/2,(m.yMin+m.yMax)/2,Math.max(m.zMax,1.8))}});const s=r.find(m=>m.type==="Boundary"),l=r.find(m=>m.id.includes("vert"))??r.find(m=>m.type==="Path"),c=r.find(m=>m.id.includes("horiz"))??r.filter(m=>m.type==="Path")[1];if(!s||!l||!c)return[];const h=(l.xMin+l.xMax)/2,d=(c.yMin+c.yMax)/2;return[{id:"amenity-exit-north",kind:"exit",label:"EXIT",point:t(h,s.yMax-1.5,1.8)},{id:"amenity-exit-south",kind:"exit",label:"EXIT",point:t(h,s.yMin+1.5,1.8)},{id:"amenity-cr",kind:"cr",label:"CR",point:t(h+5.5,d+4,1.8)},{id:"amenity-way-left",kind:"way",label:"WAY",point:t(s.xMin+8,d,1.8)},{id:"amenity-way-right",kind:"way",label:"WAY",point:t(s.xMax-8,d,1.8)}]}function CA(r){const t=`${r.name} ${r.description??""}`.toLowerCase();return t.includes("cr")||t.includes("restroom")||t.includes("bathroom")?"CR":t.includes("entrance")?"ENTRANCE":"EXIT"}function wA(r){if(r.length===0)return{x:-400,y:-220,width:800,height:520};const t=Math.min(...r.map(h=>h.x)),i=Math.max(...r.map(h=>h.x)),s=Math.min(...r.map(h=>h.y)),l=Math.max(...r.map(h=>h.y)),c=110;return{x:t-c,y:s-c,width:i-t+c*2,height:l-s+c*2}}function DA(r,t,i){const s=r.width/t,l=r.height/t;return{x:r.x+(r.width-s)/2+i.x,y:r.y+(r.height-l)/2+i.y,width:s,height:l}}function ns(r){return r.map(t=>`${t.x},${t.y}`).join(" ")}function UA(r){const t=Number.parseInt(r.replace(/\D+/g,""),10);return Number.isFinite(t)?Math.max(t-1,0):0}function LA(r){return r.length===0?{x:0,y:0}:{x:(Math.min(...r.map(t=>t.xMin))+Math.max(...r.map(t=>t.xMax)))/2,y:(Math.min(...r.map(t=>t.yMin))+Math.max(...r.map(t=>t.yMax)))/2}}function NA(r,t,i,s,l,c){const h=l*Math.PI/180,d=r-s.x,m=t-s.y,p=d*Math.cos(h)-m*Math.sin(h)+s.x,_=d*Math.sin(h)+m*Math.cos(h)+s.y;return{x:(p-_)*x_*gA,y:(p+_)*x_*c-i*_A}}function v_(r,t){return Math.hypot(r.x-t.x,r.y-t.y)}function y_(r,t){const i=r.replace("#",""),s=Number.parseInt(i.slice(0,2),16),l=Number.parseInt(i.slice(2,4),16),c=Number.parseInt(i.slice(4,6),16),h=d=>Math.min(255,Math.max(0,Math.round(d+d*t/100)));return`rgb(${h(s)}, ${h(l)}, ${h(c)})`}function cd(r,t,i){return Math.min(i,Math.max(t,r))}function M_(r){return r>180?r-360:r<-180?r+360:r}const OA={Boundary:"#9aa3a6","Layout Zone":"#ffffff","Main Aisle":"#d9ebfb","Work Area":"#fed7aa",Pillar:"#334155",Gate:"#f59e0b",Wall:"#94a3b8","Non-placeable Area":"#fda4af",Shelf:"#0f766e",Nestainer:"#2563eb","Operation Area":"#fecaca",Shop:"#cfd4d9",Path:"#b8c3cb",Dock:"#2563eb",Rack:"#7c8a96",Office:"#ef4444"},S_=["#dc2626","#7c3aed","#db2777","#ea580c","#0891b2","#2563eb","#16a34a","#ca8a04","#ef4444","#4f46e5"];function PA(r){const t=gp(r),i=Math.max(t.xMax-t.xMin,.1),s=Math.max(t.yMax-t.yMin,.1),l=Math.max(t.zMax-t.zMin,.1),c=new Vs(i,l,s),h=new xe(cv(r)),d=new nb({color:h,roughness:r.type==="Boundary"||r.type==="Layout Zone"?.88:.52,metalness:.02,transparent:!1,opacity:1,depthTest:!0,depthWrite:!0,fog:!1,side:ba}),m=new ki(c,d);return m.position.set(t.xMin+i/2,t.zMin+l/2,t.yMin+s/2),m.castShadow=r.type==="Shop"||r.type==="Gate",m.receiveShadow=!0,m.userData.locationId=r.id,m.userData.locationType=r.type,m.userData.baseColor=h,m}function zA(r){const t=new al;return r.forEach(i=>{const s=PA(i);t.add(s),(i.type==="Shop"||i.type==="Gate")&&t.add(BA(i)),(i.type==="Shop"||i.type==="Gate")&&t.add(FA(i))}),t}function BA(r){const t=gp(r),i=Math.max(t.xMax-t.xMin,.1),s=Math.max(t.yMax-t.yMin,.1),l=Math.max(t.zMax-t.zMin,.1),c=new eb(new Vs(i,l,s)),h=new $_({color:IA(r),transparent:!0,opacity:r.type==="Shop"?.82:1,fog:!1}),d=new $S(c,h);return d.position.set(t.xMin+i/2,t.zMin+l/2,t.yMin+s/2),d.renderOrder=6,d}function FA(r){const t=document.createElement("canvas"),i=t.getContext("2d"),s=uv(r),l=28,c=18,h=10;if(t.width=512,t.height=128,i){i.font=`700 ${l}px Inter, system-ui, sans-serif`;const b=Math.min(i.measureText(s).width,t.width-c*2),A=Math.ceil(b+c*2);i.fillStyle="rgba(255, 255, 255, 0.88)",i.strokeStyle="rgba(15, 23, 42, 0.22)",i.lineWidth=2,GA(i,0,0,A,l+h*2,8),i.fill(),i.stroke(),i.fillStyle="#17202a",i.textBaseline="middle",i.fillText(s,c,l/2+h,t.width-c*2)}const d=gp(r),m=Math.max(d.xMax-d.xMin,.1),p=Math.max(d.yMax-d.yMin,.1),_=Math.max(d.zMax-d.zMin,.1),x=new tb(t),y=new Q_({map:x,transparent:!0,depthTest:!0,depthWrite:!1}),M=new qS(y);return M.position.set(d.xMin+m/2,d.zMin+_+.28,d.yMin+p/2),M.scale.set(Math.min(Math.max(m,p,1.8),6),Math.min(Math.max(m,p,1.8),6)/4,1),M.renderOrder=10,M}function gp(r){return{xMin:Math.min(r.xMin,r.xMax),xMax:Math.max(r.xMin,r.xMax),yMin:Math.min(r.yMin,r.yMax),yMax:Math.max(r.yMin,r.yMax),zMin:Math.min(r.zMin,r.zMax),zMax:Math.max(r.zMin,r.zMax)}}function cv(r){if(r.type==="Boundary")return"#9aa3a6";if(r.type==="Layout Zone")return"#ffffff";if(r.type==="Shop")return"#d3d8dc";if(r.type==="Path")return"#c1c9cf";if(r.type==="Gate"){const t=uv(r);return t==="CR"?"#1d4ed8":t==="ENTRANCE"?"#059669":"#2563eb"}return OA[r.type]}function IA(r){return r.type!=="Shop"?cv(r):S_[HA(r.id)%S_.length]}function uv(r){if(r.type!=="Gate")return r.name||r.id;const t=`${r.name} ${r.description??""}`.toLowerCase();return t.includes("cr")||t.includes("restroom")||t.includes("bathroom")?"CR":t.includes("entrance")?"ENTRANCE":"EXIT"}function HA(r){const t=Number.parseInt(r.replace(/\D+/g,""),10);return Number.isFinite(t)?Math.max(t-1,0):0}function GA(r,t,i,s,l,c){r.beginPath(),r.moveTo(t+c,i),r.lineTo(t+s-c,i),r.quadraticCurveTo(t+s,i,t+s,i+c),r.lineTo(t+s,i+l-c),r.quadraticCurveTo(t+s,i+l,t+s-c,i+l),r.lineTo(t+c,i+l),r.quadraticCurveTo(t,i+l,t,i+l-c),r.lineTo(t,i+c),r.quadraticCurveTo(t,i,t+c,i),r.closePath()}function b_(r,t,i,s){const l=t.getBoundingClientRect(),c=new ne((r.clientX-l.left)/l.width*2-1,-((r.clientY-l.top)/l.height)*2+1),h=new cb;h.setFromCamera(c,i);const[d]=h.intersectObjects(s,!0),m=d?.object.userData.locationId;return typeof m=="string"?m:null}function VA({locations:r,hoveredLocationId:t,selectedLocationId:i,searchedLocationIds:s,onHoverLocation:l,onSelectLocation:c}){const h=be.useRef(null),d=be.useRef(null),m=be.useRef(null),p=be.useRef(null),_=be.useRef(null),x=be.useRef([]),[y,M]=be.useState(null);return be.useEffect(()=>{const b=h.current;if(!b)return;const A=b,S=new WS;S.background=new xe("#ffffff"),d.current=S;let g;try{g=new QT({antialias:!0}),M(null)}catch{M("webgl-unavailable");return}g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.shadowMap.enabled=!0,g.shadowMap.type=D_,g.outputColorSpace=li,A.appendChild(g.domElement);const O=new mp(-60,60,40,-40,.1,1e3);O.position.set(126,112,118),m.current=O;const w=new $T(O,g.domElement);w.enableDamping=!0,w.dampingFactor=.08,w.target.set(46,0,29),w.maxPolarAngle=Math.PI*.48,w.enablePan=!1,w.minZoom=.75,w.maxZoom=2.4,p.current=w;const z=new sb("#ffffff","#a8b0b7",1.6);S.add(z);const G=new Ig("#ffffff",2);G.position.set(20,60,30),G.castShadow=!0,G.shadow.mapSize.set(2048,2048),G.shadow.camera.near=10,G.shadow.camera.far=140,S.add(G);const N=new Ig("#dbeafe",.8);N.position.set(-40,34,-16),S.add(N);function B(){const{width:pt,height:ct}=A.getBoundingClientRect();g.setSize(pt,ct,!1),_.current?E_(O,w,_.current,pt/Math.max(ct,1)):fv(O,120,pt/Math.max(ct,1))}const K=new ResizeObserver(B);K.observe(A),B();let D=0;function C(){w.update(),g.render(S,O),D=requestAnimationFrame(C)}C();const X=pt=>{const ct=b_(pt,g.domElement,O,x.current);l(ct)},nt=()=>l(null),lt=pt=>{const ct=b_(pt,g.domElement,O,x.current);ct&&c(ct)};return g.domElement.addEventListener("pointermove",X),g.domElement.addEventListener("pointerleave",nt),g.domElement.addEventListener("pointerup",lt),()=>{cancelAnimationFrame(D),K.disconnect(),g.domElement.removeEventListener("pointermove",X),g.domElement.removeEventListener("pointerleave",nt),g.domElement.removeEventListener("pointerup",lt),w.dispose(),g.dispose(),g.domElement.parentElement===A&&A.removeChild(g.domElement),p.current=null,d.current=null,m.current=null,_.current=null,x.current=[]}},[l,c]),be.useEffect(()=>{const b=d.current;if(!b)return;_.current&&(b.remove(_.current),_.current.traverse(w=>{XA(w)}));const A=zA(r),S=[];A.traverse(w=>{w instanceof ki&&(w.userData.locationType==="Shop"||w.userData.locationType==="Gate")&&S.push(w)}),_.current=A,x.current=S,b.add(A);const g=m.current,O=p.current;if(g&&O&&r.length>0){const{width:w,height:z}=h.current?.getBoundingClientRect()??{width:1,height:1};E_(g,O,A,w/Math.max(z,1))}},[r]),be.useEffect(()=>{mA(x.current,t,i,new Set(s))},[t,i,s,r]),be.useEffect(()=>{const b=m.current,A=p.current;if(!b||!A||!i)return;const S=x.current.find(O=>O.userData.locationId===i);if(!S)return;const g=new Q;S.getWorldPosition(g),A.target.lerp(g,.55),A.update()},[i]),Z.jsx("div",{className:"three-map-canvas",ref:h,children:y&&Z.jsx(MA,{locations:r,hoveredLocationId:t,selectedLocationId:i,searchedLocationIds:s,onHoverLocation:l,onSelectLocation:c})})}function E_(r,t,i,s){const l=new Qr().setFromObject(i),c=l.getCenter(new Q),h=l.getSize(new Q),d=Math.max(h.z*1.9,h.x*1.5/Math.max(s,.1),86);r.zoom=1,t.target.copy(c),r.position.set(c.x+80,c.y+84,c.z+86),r.near=.1,r.far=600,fv(r,d,s),t.update()}function fv(r,t,i){const s=t*Math.max(i,.1);r.left=-s/2,r.right=s/2,r.top=t/2,r.bottom=-t/2,r.updateProjectionMatrix()}function XA(r){const t=r,i=t.geometry,s=t.material;i?.dispose(),Array.isArray(s)?s.forEach(T_):T_(s)}function T_(r){if(!r)return;r.map?.dispose(),r.dispose()}function kA({locations:r,hoveredLocationId:t,selectedLocationId:i,searchedLocationIds:s,onHoverLocation:l,onSelectLocation:c}){const h=r.find(d=>d.id===t)??r.find(d=>d.id===i)??null;return Z.jsxs("section",{className:"map-container",children:[Z.jsx(VA,{locations:r,hoveredLocationId:t,selectedLocationId:i,searchedLocationIds:s,onHoverLocation:l,onSelectLocation:c}),h&&h.type==="Shop"&&Z.jsxs("aside",{className:"map-hover-card","aria-live":"polite",children:[Z.jsx("strong",{children:h.name}),Z.jsx("span",{children:h.description}),Z.jsxs("small",{children:[Math.abs(h.xMax-h.xMin).toFixed(1)," x"," ",Math.abs(h.yMax-h.yMin).toFixed(1)," units"]})]}),Z.jsx("p",{className:"map-hint",children:"Pinch or scroll to zoom and drag to rotate"})]})}async function WA(){const r=await fetch("/api/locations");if(!r.ok)throw new Error(`Failed to load locations: ${r.status}`);return r.json()}const YA="/data/location-30-shops.csv?v=final-layout-20260513",qA=new Set(["Boundary","Layout Zone","Main Aisle","Work Area","Pillar","Gate","Wall","Non-placeable Area","Shelf","Nestainer","Operation Area","Shop","Path","Dock","Rack","Office"]);async function jA(r=YA){const t=await fetch(r,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to load CSV: ${t.status}`);return np(await t.text())}function np(r){const t=ZA(r).filter(s=>s.some(l=>l.trim()!==""));if(t.length<2)return[];const i=t[0].map(JA);return t.slice(1).map(s=>KA(i,s)).map(QA).filter(s=>s!==null)}function ZA(r){const t=[];let i=[],s="",l=!1;for(let c=0;c<r.length;c+=1){const h=r[c],d=r[c+1];if(h==='"'&&l&&d==='"'){s+='"',c+=1;continue}if(h==='"'){l=!l;continue}if(h===","&&!l){i.push(s),s="";continue}if((h===`
`||h==="\r")&&!l){h==="\r"&&d===`
`&&(c+=1),i.push(s),t.push(i),i=[],s="";continue}s+=h}return(s||i.length>0)&&(i.push(s),t.push(i)),t}function KA(r,t){return Object.fromEntries(r.map((i,s)=>[i,t[s]??""]))}function QA(r){const t=t2(Ci(r,"type")),i=Ci(r,"id").trim();return!i||!t?null:{id:i,type:t,name:Ci(r,"name").trim()||i,xMin:Ps(Ci(r,"xmin")),yMin:Ps(Ci(r,"ymin")),xMax:Ps(Ci(r,"xmax")),yMax:Ps(Ci(r,"ymax")),zMin:Ps(Ci(r,"zmin")),zMax:$A(r,t),description:Ci(r,"description").trim()||void 0}}function JA(r){return r.trim().toLowerCase().replace(/[\s_-]+/g,"")}function Ci(r,t){return r[t]??""}function $A(r,t){const i=Ci(r,"zmax");return i.trim()!==""?Ps(i):Ps(Ci(r,"zmin"))+e2(t)}function t2(r){const t=r.trim().toLowerCase().replace(/[\s_-]+/g,"");return[...qA].find(s=>s.toLowerCase().replace(/[\s_-]+/g,"")===t)??null}function Ps(r){const t=Number.parseFloat(r);return Number.isFinite(t)?t:0}function e2(r){return r==="Boundary"?.1:r==="Layout Zone"||r==="Path"?.08:r==="Gate"?2.2:3.4}const n2="/data/20260501_VisualizationInput_v7.xlsx",Zn=1/1e3,Gr=.2,A_={boundary:"Boundary",gate:"Gate","layout area":"Layout Zone","main aisle":"Main Aisle","main asile":"Main Aisle","non-placeable area":"Non-placeable Area","non placeable area":"Non-placeable Area","nonplaceable area":"Non-placeable Area",pillar:"Pillar",wall:"Wall","work area":"Work Area"},i2=new Set(["Boundary","Layout Zone","Main Aisle","Work Area","Pillar","Gate","Wall","Non-placeable Area","Shelf","Nestainer","Operation Area","Shop","Path","Dock","Rack","Office"]);async function a2(r=n2){if(!window.XLSX)throw new Error("Excel parser is not loaded");const t=await fetch(r,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to load workbook: ${t.status}`);return hv(await t.arrayBuffer())}function hv(r){if(!window.XLSX)throw new Error("Excel parser is not loaded");const t=window.XLSX.read(r,{type:"array"}),i=Object.fromEntries(t.SheetNames.map(l=>[l,l2(t,l)])),s=t.SheetNames.map(l=>i[l]??[]).find(s2);return s?s.map(r2).filter(l=>l!==null):u2({facilityRows:i.Facility??[],materialHandlingRows:i.MaterialHandling??[],planRows:i.Plan??[],patternRows:i.PatternResult??[]})}function s2(r){if(r.length===0)return!1;const t=new Set(Object.keys(r[0]));return["id","type","xmin","ymin","xmax","ymax"].every(i=>t.has(i))}function r2(r){const t=Fn(r.id),i=o2(r.type);return!t||!i?null:{id:t,type:i,name:Fn(r.name)||t,xMin:en(r.xmin),yMin:en(r.ymin),xMax:en(r.xmax),yMax:en(r.ymax),zMin:en(r.zmin),zMax:r.zmax==null||r.zmax===""?en(r.zmin)+dv(i):en(r.zmax),description:Fn(r.description)||void 0}}function o2(r){const t=Fn(r).toLowerCase().replace(/[\s_-]+/g,"");return[...i2].find(s=>s.toLowerCase().replace(/[\s_-]+/g,"")===t)??null}function l2(r,t){const i=r.Sheets[t];return!i||!window.XLSX?[]:window.XLSX.utils.sheet_to_json(i,{defval:"",raw:!1,blankrows:!1}).filter(s=>Object.values(s).some(l=>String(l??"").trim()!=="")).map(c2)}function c2(r){const t={};return Object.entries(r).forEach(([i,s])=>{t[i.toLowerCase().replace(/\s+/g,"")]=s}),t}function u2({facilityRows:r,materialHandlingRows:t,planRows:i,patternRows:s}){const l=r.map(f2).filter(y=>y!==null);if(l.length===0)return[];const c={x:Math.min(...l.map(y=>y.absoluteX)),y:Math.min(...l.map(y=>y.absoluteY))},h=p2(i,s),d=h?s.filter(y=>Fn(y.planid)===h):s,m=new Map(t.map(y=>[Fn(y.materialhandlingcode).toLowerCase(),y])),p=m2(d),_=l.map(y=>d2(y,c)),x=d.map(y=>h2(y,m,c,p)).filter(y=>y!==null);return[..._,...x]}function f2(r){const t=x2(r.facilitytype);if(!t)return null;const i=en(r.x0??r.locationx),s=en(r.y0??r.locationy),l=en(r.z0??r.locationz),c=r.x1==null||r.x1===""?i+en(r.width):en(r.x1),h=r.y1==null||r.y1===""?s+en(r.depth):en(r.y1),d=r.z1==null||r.z1===""?l+en(r.height):en(r.z1),m=Fn(r.facilitycode),p=Fn(r.facilityname)||m||t;return{id:`facility-${m||p}`,name:p,type:t,absoluteX:Math.min(i,c),absoluteY:Math.min(s,h),baseZ:Math.min(l,d)*Zn,width:Math.max(Math.abs(c-i)*Zn,Gr),depth:Math.max(Math.abs(h-s)*Zn,Gr),height:Math.max(Math.abs(d-l)*Zn,_2(t)),description:`${t} from Facility sheet${m?` (${m})`:""}.`}}function h2(r,t,i,s){const l=Fn(r.materialhandlingcode),c=t.get(l.toLowerCase()),h=g2(l,c),[d,m]=R_(en(r.x0),en(r.x1)),[p,_]=R_(en(r.y0),en(r.y1)),x=en(c?.width)*Zn,y=en(c?.depth)*Zn,M=Math.max((m-d)*s,x,Gr),b=Math.max((_-p)*s,y,Gr),A=Fn(r.patternresultid),g=Fn(c?.materialhandlingname)||l||A||h,O=en(c?.height)*Zn||dv(h);return!A&&!l&&M<=Gr&&b<=Gr?null:{id:`pattern-${A||l}-${d}-${p}`,name:g,type:h,xMin:d*s-i.x*Zn,yMin:p*s-i.y*Zn,xMax:d*s-i.x*Zn+M,yMax:p*s-i.y*Zn+b,zMin:0,zMax:O,description:`${h} from PatternResult${A?` (${A})`:""}.`}}function d2(r,t){const i=(r.absoluteX-t.x)*Zn,s=(r.absoluteY-t.y)*Zn;return{id:r.id,name:r.name,type:r.type,xMin:i,yMin:s,xMax:i+r.width,yMax:s+r.depth,zMin:r.baseZ,zMax:r.baseZ+r.height,description:r.description}}function p2(r,t){const i=Fn(r[0]?.planid);return i||Fn(t[0]?.planid)}function m2(r){return r.some(t=>"materialhandlingcode"in t)?Zn:1}function x2(r){const t=Fn(r).toLowerCase().replace(/[_\s]+/g," "),i=A_[t];return i||(Object.entries(A_).find(([l])=>t.startsWith(l))?.[1]??null)}function g2(r,t){const i=Fn(t?.storedunittype).toLowerCase(),s=Fn(t?.materialhandlingname).toLowerCase(),l=`${r} ${s}`.toLowerCase();return l.includes("operation_area")?"Operation Area":i.includes("pallet")||l.includes("nestainer")||l.includes("rack")?"Nestainer":"Shelf"}function dv(r){return r==="Nestainer"?1.35:r==="Operation Area"?.05:1.8}function _2(r){return r==="Pillar"?4:r==="Gate"?3.5:r==="Wall"?2.8:r==="Boundary"?.12:.03}function R_(r,t){return r<=t?[r,t]:[t,r]}function Fn(r){return r==null?"":String(r).trim()}function en(r){const t=Number.parseFloat(String(r??""));return Number.isFinite(t)?t:0}const v2=[{id:"boundary_empty",type:"Boundary",name:"Gray Warehouse Boundary",xMin:0,yMin:0,xMax:92,yMax:58,zMin:0,zMax:.1,description:"Gray warehouse boundary"},{id:"base_empty",type:"Layout Zone",name:"White Base Surface",xMin:3,yMin:3,xMax:89,yMax:55,zMin:.1,zMax:.14,description:"White base surface"}];function y2(){const[r,t]=be.useState([]),[i,s]=be.useState(!0),[l,c]=be.useState(null);return be.useEffect(()=>{let h=!1;async function d(){try{s(!0),c(null);let m;try{m=await jA()}catch{try{m=await a2()}catch{try{m=await WA()}catch{m=v2}}}h||t(m)}catch(m){h||c(m instanceof Error?m.message:"Failed to load locations")}finally{h||s(!1)}}return d(),()=>{h=!0}},[]),{locations:r,loading:i,error:l}}function M2(r){const[t,i]=be.useState(null),[s,l]=be.useState(null);return{selectedLocation:be.useMemo(()=>r.find(h=>h.id===t)??null,[r,t]),selectedLocationId:t,hoveredLocationId:s,setSelectedLocationId:i,setHoveredLocationId:l}}const pv="warehouse-layout-uploaded-csv",mv="warehouse-layout-uploaded-name",C_=[{id:"boundary_empty",type:"Boundary",name:"Gray Warehouse Boundary",xMin:0,yMin:0,xMax:92,yMax:58,zMin:0,zMax:.1,description:"Gray warehouse boundary after deleting data"},{id:"base_empty",type:"Layout Zone",name:"White Base Surface",xMin:3,yMin:3,xMax:89,yMax:55,zMin:.1,zMax:.14,description:"White base surface after deleting data"}],S2=[{id:"home",label:"Home",icon:"⌂"},{id:"data",label:"Data Governance",icon:"▣"},{id:"layout",label:"Layout Strategy",icon:"▤"},{id:"analytics",label:"Analytics",icon:"⌁"}],b2=["Boundary","Layout Zone","Shop","Path","Gate"];function E2(){const{locations:r,loading:t,error:i}=y2(),[s,l]=be.useState("home"),[c,h]=be.useState(null),[d,m]=be.useState(null),[p,_]=be.useState(null),x=c??r,y=M2(x),M=be.useMemo(()=>xv(x),[x]);be.useEffect(()=>{const w=window.localStorage.getItem(pv),z=window.localStorage.getItem(mv);if(!w)return;const G=np(w);G.length>0&&(h(G),m(z||"uploaded-layout.csv"))},[]);function b(w){if(_(null),!L2(w)){_("Please upload a CSV or Excel file using the location schema.");return}const z=new FileReader;z.onload=()=>{const G=w.name.toLowerCase().endsWith(".csv")?np(String(z.result??"")):hv(z.result);if(G.length===0){_("No valid location rows were found in this file.");return}h(G),m(w.name),l("layout"),il(G,w.name)},z.onerror=()=>_("The file could not be read."),w.name.toLowerCase().endsWith(".csv")?z.readAsText(w):z.readAsArrayBuffer(w)}function A(){h(C_),m("empty-warehouse.csv"),_(null),y.setHoveredLocationId(null),y.setSelectedLocationId(null),il(C_,"empty-warehouse.csv")}function S(w){h(z=>{const N=(z??x).filter(K=>K.id!==w);return il(N,d??"edited-layout.csv"),m(K=>K??"edited-layout.csv"),N})}function g(){h(w=>{const z=w??x,G=z.filter(D=>D.type==="Shop").length+1,N={id:D2(z,`shop_${G}`),type:"Shop",name:`New Shop ${G}`,xMin:6,yMin:6,xMax:14,yMax:12,zMin:.14,zMax:3.4,description:"New uploaded shop"},B=[...z,N];return il(B,d??"edited-layout.csv"),m(D=>D??"edited-layout.csv"),B})}function O(w,z){h(G=>{const B=(G??x).map(D=>D.id===w?{...D,...z}:D);return il(B,d??"edited-layout.csv"),m(D=>D??"edited-layout.csv"),B})}return Z.jsxs("div",{className:"app-shell",children:[Z.jsxs("aside",{className:"app-nav","aria-label":"Primary navigation",children:[Z.jsx("button",{className:"nav-collapse",type:"button","aria-label":"Collapse navigation",children:"‹"}),Z.jsx("nav",{className:"nav-items",children:S2.map(w=>Z.jsxs("button",{className:s===w.id?"active":"",type:"button",onClick:()=>l(w.id),children:[Z.jsx("span",{className:"nav-icon",children:w.icon}),w.label]},w.id))}),Z.jsxs("button",{type:"button",children:[Z.jsx("span",{className:"nav-icon",children:"⚙"}),"Settings"]})]}),Z.jsxs("main",{className:"main-panel",children:[Z.jsx(T2,{}),s==="home"&&Z.jsx(A2,{stats:M,onOpenLayout:()=>l("layout")}),s==="data"&&Z.jsx(R2,{locations:x,uploadedFileName:d,dataError:p,loading:t,error:i,onUpload:b,onDeleteDataset:A,onDeleteRow:S,onAddShopRow:g,onUpdateRow:O}),s==="layout"&&Z.jsx(C2,{locations:x,loading:t,error:i,selection:y,uploadedFileName:d}),s==="analytics"&&Z.jsx(w2,{stats:M})]})]})}function T2(){return Z.jsxs("header",{className:"app-header",children:[Z.jsxs("div",{className:"brand-lockup",children:[Z.jsx("div",{className:"qubit-mark",children:"✣"}),Z.jsxs("div",{children:[Z.jsx("h1",{children:"Qubit Star"}),Z.jsx("p",{children:"Layout Strategy & Plan Exploration"})]})]}),Z.jsx("p",{children:"Cooperation by Quanmatic for Suzuyo"})]})}function A2({stats:r,onOpenLayout:t}){return Z.jsxs("section",{className:"page-panel home-page",children:[Z.jsxs("div",{className:"hero-panel",children:[Z.jsx("h2",{children:"Warehouse Layout Workspace"}),Z.jsx("p",{children:"Upload facility data, validate rows, and view the generated 3D shop layout in one workflow."}),Z.jsx("button",{type:"button",onClick:t,children:"Open 3D Map"})]}),Z.jsxs("div",{className:"metric-grid",children:[Z.jsx(rs,{label:"Blocks",value:r.blocks}),Z.jsx(rs,{label:"Shops",value:r.shops}),Z.jsx(rs,{label:"Signs",value:r.signs}),Z.jsx(rs,{label:"Lanes",value:r.lanes})]})]})}function R2({locations:r,uploadedFileName:t,dataError:i,loading:s,error:l,onUpload:c,onDeleteDataset:h,onDeleteRow:d,onAddShopRow:m,onUpdateRow:p}){const _=be.useRef(null),x=xv(r);function y(M){const[b]=M.target.files??[];b&&(c(b),M.target.value="")}return Z.jsxs("section",{className:"data-page",children:[Z.jsxs("div",{className:"workbook-bar",children:[Z.jsx("div",{className:"upload-mark",children:"↥"}),Z.jsxs("div",{children:[Z.jsx("small",{children:"WORKBOOK"}),Z.jsx("strong",{children:t??"location-30-shops.csv"})]}),Z.jsx("input",{accept:".csv,.xlsx,.xls,text/csv",hidden:!0,onChange:y,ref:_,type:"file"}),Z.jsx("button",{type:"button",onClick:()=>_.current?.click(),children:"Upload .csv/.xlsx"}),Z.jsx("button",{className:"danger-button",type:"button",onClick:h,children:"Delete Data"})]}),Z.jsxs("div",{className:"data-workspace",children:[Z.jsxs("aside",{className:"sheet-list",children:[Z.jsx("h3",{children:"Sheets"}),Z.jsxs("button",{className:"active",type:"button",children:["Facility ",Z.jsxs("span",{children:[r.length," x 10"]})]}),Z.jsxs("button",{type:"button",children:["Shops ",Z.jsxs("span",{children:[x.shops," rows"]})]}),Z.jsxs("button",{type:"button",children:["Signs ",Z.jsxs("span",{children:[x.signs," rows"]})]}),Z.jsxs("button",{type:"button",children:["Lanes ",Z.jsxs("span",{children:[x.lanes," rows"]})]})]}),Z.jsxs("section",{className:"data-table-panel",children:[Z.jsxs("div",{className:"table-toolbar",children:[Z.jsx("button",{type:"button",onClick:m,children:"+ Add Shop Row"}),Z.jsx("p",{children:"Uploaded data is local and becomes the source for the 3D map."})]}),Z.jsx("div",{className:"data-table-scroll",children:Z.jsxs("table",{className:"data-table",children:[Z.jsx("thead",{children:Z.jsxs("tr",{children:[Z.jsx("th",{children:"id"}),Z.jsx("th",{children:"type"}),Z.jsx("th",{children:"name"}),Z.jsx("th",{children:"xMin"}),Z.jsx("th",{children:"yMin"}),Z.jsx("th",{children:"zMin"}),Z.jsx("th",{children:"xMax"}),Z.jsx("th",{children:"yMax"}),Z.jsx("th",{children:"zMax"}),Z.jsx("th",{children:"description"}),Z.jsx("th",{"aria-label":"actions"})]})}),Z.jsx("tbody",{children:r.map(M=>Z.jsxs("tr",{children:[Z.jsx("td",{children:Z.jsx("input",{value:M.id,onChange:b=>p(M.id,{id:b.target.value})})}),Z.jsx("td",{children:Z.jsx("select",{value:M.type,onChange:b=>p(M.id,{type:b.target.value}),children:b2.map(b=>Z.jsx("option",{value:b,children:b},b))})}),Z.jsx("td",{children:Z.jsx("input",{value:M.name,onChange:b=>p(M.id,{name:b.target.value})})}),Z.jsx("td",{children:Z.jsx(Ir,{location:M,field:"xMin",onUpdateRow:p})}),Z.jsx("td",{children:Z.jsx(Ir,{location:M,field:"yMin",onUpdateRow:p})}),Z.jsx("td",{children:Z.jsx(Ir,{location:M,field:"zMin",onUpdateRow:p})}),Z.jsx("td",{children:Z.jsx(Ir,{location:M,field:"xMax",onUpdateRow:p})}),Z.jsx("td",{children:Z.jsx(Ir,{location:M,field:"yMax",onUpdateRow:p})}),Z.jsx("td",{children:Z.jsx(Ir,{location:M,field:"zMax",onUpdateRow:p})}),Z.jsx("td",{children:Z.jsx("input",{value:M.description??"",onChange:b=>p(M.id,{description:b.target.value})})}),Z.jsx("td",{children:Z.jsx("button",{"aria-label":`Delete ${M.name}`,type:"button",onClick:()=>d(M.id),children:"×"})})]},M.id))})]})})]}),Z.jsxs("aside",{className:"validation-report",children:[Z.jsx("h3",{children:"Data Validation Report"}),Z.jsxs("section",{children:[Z.jsx("h4",{children:"Visualization"}),s&&Z.jsx("p",{children:"Loading default layout..."}),l&&Z.jsx("p",{className:"report-error",children:l}),i&&Z.jsx("p",{className:"report-error",children:i}),Z.jsxs("ul",{children:[Z.jsxs("li",{children:[x.blocks," total blocks"]}),Z.jsxs("li",{children:[x.shops," shops"]}),Z.jsxs("li",{children:[x.signs," signs"]}),Z.jsxs("li",{children:[x.lanes," lane markers"]})]})]}),Z.jsxs("section",{children:[Z.jsx("h4",{children:"All Checks"}),Z.jsx(ud,{label:"Required columns",ok:!0}),Z.jsx(ud,{label:"Valid location types",ok:!i}),Z.jsx(ud,{label:"Map-ready rows",ok:r.length>0})]})]})]})]})}function Ir({location:r,field:t,onUpdateRow:i}){return Z.jsx("input",{type:"number",value:r[t],onChange:s=>i(r.id,{[t]:U2(s.target.value)})})}function C2({locations:r,loading:t,error:i,selection:s,uploadedFileName:l}){return Z.jsxs("section",{className:"layout-map-stage","aria-label":"Layout Strategy",children:[Z.jsx("div",{className:"layout-source-pill",children:l?`Using uploaded data: ${l}`:"Using default CSV data"}),Z.jsx(kA,{locations:r,selectedLocationId:s.selectedLocationId,hoveredLocationId:s.hoveredLocationId,searchedLocationIds:[],onHoverLocation:s.setHoveredLocationId,onSelectLocation:s.setSelectedLocationId}),t&&Z.jsx("div",{className:"map-status",children:"Loading layout..."}),i&&Z.jsx("div",{className:"map-status map-status-error",children:i})]})}function w2({stats:r}){return Z.jsxs("section",{className:"page-panel analytics-page",children:[Z.jsx("h2",{children:"Analytics"}),Z.jsx("p",{children:"Temporary layout analytics summary."}),Z.jsxs("div",{className:"metric-grid",children:[Z.jsx(rs,{label:"Total Rows",value:r.blocks}),Z.jsx(rs,{label:"Shop Coverage",value:`${r.shops} shops`}),Z.jsx(rs,{label:"Way Markers",value:r.lanes}),Z.jsx(rs,{label:"Navigation Signs",value:r.signs})]})]})}function rs({label:r,value:t}){return Z.jsxs("article",{className:"metric-card",children:[Z.jsx("span",{children:r}),Z.jsx("strong",{children:t})]})}function ud({label:r,ok:t}){return Z.jsxs("div",{className:"check-row",children:[Z.jsx("strong",{children:r}),Z.jsx("span",{className:t?"ok":"error",children:t?"OK":"ERROR"})]})}function xv(r){return{blocks:r.length,shops:r.filter(t=>t.type==="Shop").length,signs:r.filter(t=>t.type==="Gate").length,lanes:r.filter(t=>t.type==="Path").length}}function il(r,t){window.localStorage.setItem(pv,N2(r)),window.localStorage.setItem(mv,t)}function D2(r,t){const i=new Set(r.map(l=>l.id));if(!i.has(t))return t;let s=2;for(;i.has(`${t}_${s}`);)s+=1;return`${t}_${s}`}function U2(r){const t=Number.parseFloat(r);return Number.isFinite(t)?t:0}function L2(r){const t=r.name.toLowerCase();return t.endsWith(".csv")||t.endsWith(".xlsx")||t.endsWith(".xls")}function N2(r){return["id,type,name,xMin,yMin,xMax,yMax,zMin,zMax,description",...r.map(i=>[i.id,i.type,i.name,i.xMin,i.yMin,i.xMax,i.yMax,i.zMin,i.zMax,i.description??""].map(O2).join(","))].join(`
`)}function O2(r){const t=String(r);return/[",\n\r]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}DM.createRoot(document.getElementById("root")).render(Z.jsx(be.StrictMode,{children:Z.jsx(E2,{})}));
