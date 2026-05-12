(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Qf={exports:{}},wo={};var vx;function yS(){if(vx)return wo;vx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var Sx;function MS(){return Sx||(Sx=1,Qf.exports=yS()),Qf.exports}var ee=MS(),Jf={exports:{}},re={};var yx;function bS(){if(yx)return re;yx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function g(N,st,yt){this.props=N,this.context=st,this.refs=y,this.updater=yt||T}g.prototype.isReactComponent={},g.prototype.setState=function(N,st){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,st,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=g.prototype;function U(N,st,yt){this.props=N,this.context=st,this.refs=y,this.updater=yt||T}var I=U.prototype=new O;I.constructor=U,A(I,g.prototype),I.isPureReactComponent=!0;var X=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},et=Object.prototype.hasOwnProperty;function D(N,st,yt){var Et=yt.ref;return{$$typeof:o,type:N,key:st,ref:Et!==void 0?Et:null,props:yt}}function C(N,st){return D(N.type,st,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function $(N){var st={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(yt){return st[yt]})}var ot=/\/+/g;function dt(N,st){return typeof N=="object"&&N!==null&&N.key!=null?$(""+N.key):st.toString(36)}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(L,L):(N.status="pending",N.then(function(st){N.status==="pending"&&(N.status="fulfilled",N.value=st)},function(st){N.status==="pending"&&(N.status="rejected",N.reason=st)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,st,yt,Et,Ot){var it=typeof N;(it==="undefined"||it==="boolean")&&(N=null);var ct=!1;if(N===null)ct=!0;else switch(it){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(N.$$typeof){case o:case t:ct=!0;break;case _:return ct=N._init,P(ct(N._payload),st,yt,Et,Ot)}}if(ct)return Ot=Ot(N),ct=Et===""?"."+dt(N,0):Et,X(Ot)?(yt="",ct!=null&&(yt=ct.replace(ot,"$&/")+"/"),P(Ot,st,yt,"",function(Xt){return Xt})):Ot!=null&&(V(Ot)&&(Ot=C(Ot,yt+(Ot.key==null||N&&N.key===Ot.key?"":(""+Ot.key).replace(ot,"$&/")+"/")+ct)),st.push(Ot)),1;ct=0;var Ct=Et===""?".":Et+":";if(X(N))for(var Ft=0;Ft<N.length;Ft++)Et=N[Ft],it=Ct+dt(Et,Ft),ct+=P(Et,st,yt,it,Ot);else if(Ft=M(N),typeof Ft=="function")for(N=Ft.call(N),Ft=0;!(Et=N.next()).done;)Et=Et.value,it=Ct+dt(Et,Ft++),ct+=P(Et,st,yt,it,Ot);else if(it==="object"){if(typeof N.then=="function")return P(ut(N),st,yt,Et,Ot);throw st=String(N),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return ct}function j(N,st,yt){if(N==null)return N;var Et=[],Ot=0;return P(N,Et,"","",function(it){return st.call(yt,it,Ot++)}),Et}function Y(N){if(N._status===-1){var st=N._result;st=st(),st.then(function(yt){(N._status===0||N._status===-1)&&(N._status=1,N._result=yt)},function(yt){(N._status===0||N._status===-1)&&(N._status=2,N._result=yt)}),N._status===-1&&(N._status=0,N._result=st)}if(N._status===1)return N._result.default;throw N._result}var gt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},_t={map:j,forEach:function(N,st,yt){j(N,function(){st.apply(this,arguments)},yt)},count:function(N){var st=0;return j(N,function(){st++}),st},toArray:function(N){return j(N,function(st){return st})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=v,re.Children=_t,re.Component=g,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,st,yt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Et=A({},N.props),Ot=N.key;if(st!=null)for(it in st.key!==void 0&&(Ot=""+st.key),st)!et.call(st,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&st.ref===void 0||(Et[it]=st[it]);var it=arguments.length-2;if(it===1)Et.children=yt;else if(1<it){for(var ct=Array(it),Ct=0;Ct<it;Ct++)ct[Ct]=arguments[Ct+2];Et.children=ct}return D(N.type,Ot,Et)},re.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},re.createElement=function(N,st,yt){var Et,Ot={},it=null;if(st!=null)for(Et in st.key!==void 0&&(it=""+st.key),st)et.call(st,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Ot[Et]=st[Et]);var ct=arguments.length-2;if(ct===1)Ot.children=yt;else if(1<ct){for(var Ct=Array(ct),Ft=0;Ft<ct;Ft++)Ct[Ft]=arguments[Ft+2];Ot.children=Ct}if(N&&N.defaultProps)for(Et in ct=N.defaultProps,ct)Ot[Et]===void 0&&(Ot[Et]=ct[Et]);return D(N,it,Ot)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=V,re.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:Y}},re.memo=function(N,st){return{$$typeof:p,type:N,compare:st===void 0?null:st}},re.startTransition=function(N){var st=B.T,yt={};B.T=yt;try{var Et=N(),Ot=B.S;Ot!==null&&Ot(yt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(L,gt)}catch(it){gt(it)}finally{st!==null&&yt.types!==null&&(st.types=yt.types),B.T=st}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(N){return B.H.use(N)},re.useActionState=function(N,st,yt){return B.H.useActionState(N,st,yt)},re.useCallback=function(N,st){return B.H.useCallback(N,st)},re.useContext=function(N){return B.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,st){return B.H.useDeferredValue(N,st)},re.useEffect=function(N,st){return B.H.useEffect(N,st)},re.useEffectEvent=function(N){return B.H.useEffectEvent(N)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(N,st,yt){return B.H.useImperativeHandle(N,st,yt)},re.useInsertionEffect=function(N,st){return B.H.useInsertionEffect(N,st)},re.useLayoutEffect=function(N,st){return B.H.useLayoutEffect(N,st)},re.useMemo=function(N,st){return B.H.useMemo(N,st)},re.useOptimistic=function(N,st){return B.H.useOptimistic(N,st)},re.useReducer=function(N,st,yt){return B.H.useReducer(N,st,yt)},re.useRef=function(N){return B.H.useRef(N)},re.useState=function(N){return B.H.useState(N)},re.useSyncExternalStore=function(N,st,yt){return B.H.useSyncExternalStore(N,st,yt)},re.useTransition=function(){return B.H.useTransition()},re.version="19.2.6",re}var Mx;function Td(){return Mx||(Mx=1,Jf.exports=bS()),Jf.exports}var on=Td(),$f={exports:{}},Uo={},th={exports:{}},eh={};var bx;function ES(){return bx||(bx=1,(function(o){function t(P,j){var Y=P.length;P.push(j);t:for(;0<Y;){var gt=Y-1>>>1,_t=P[gt];if(0<l(_t,j))P[gt]=j,P[Y]=_t,Y=gt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var j=P[0],Y=P.pop();if(Y!==j){P[0]=Y;t:for(var gt=0,_t=P.length,N=_t>>>1;gt<N;){var st=2*(gt+1)-1,yt=P[st],Et=st+1,Ot=P[Et];if(0>l(yt,Y))Et<_t&&0>l(Ot,yt)?(P[gt]=Ot,P[Et]=Y,gt=Et):(P[gt]=yt,P[st]=Y,gt=st);else if(Et<_t&&0>l(Ot,Y))P[gt]=Ot,P[Et]=Y,gt=Et;else break t}}return j}function l(P,j){var Y=P.sortIndex-j.sortIndex;return Y!==0?Y:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,S=3,M=!1,T=!1,A=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function I(P){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=P)s(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function X(P){if(A=!1,I(P),!T)if(i(m)!==null)T=!0,L||(L=!0,$());else{var j=i(p);j!==null&&ut(X,j.startTime-P)}}var L=!1,B=-1,et=5,D=-1;function C(){return y?!0:!(o.unstable_now()-D<et)}function V(){if(y=!1,L){var P=o.unstable_now();D=P;var j=!0;try{t:{T=!1,A&&(A=!1,O(B),B=-1),M=!0;var Y=S;try{e:{for(I(P),v=i(m);v!==null&&!(v.expirationTime>P&&C());){var gt=v.callback;if(typeof gt=="function"){v.callback=null,S=v.priorityLevel;var _t=gt(v.expirationTime<=P);if(P=o.unstable_now(),typeof _t=="function"){v.callback=_t,I(P),j=!0;break e}v===i(m)&&s(m),I(P)}else s(m);v=i(m)}if(v!==null)j=!0;else{var N=i(p);N!==null&&ut(X,N.startTime-P),j=!1}}break t}finally{v=null,S=Y,M=!1}j=void 0}}finally{j?$():L=!1}}}var $;if(typeof U=="function")$=function(){U(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,dt=ot.port2;ot.port1.onmessage=V,$=function(){dt.postMessage(null)}}else $=function(){g(V,0)};function ut(P,j){B=g(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):et=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var Y=S;S=j;try{return P()}finally{S=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=S;S=P;try{return j()}finally{S=Y}},o.unstable_scheduleCallback=function(P,j,Y){var gt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?gt+Y:gt):Y=gt,P){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=Y+_t,P={id:_++,callback:j,priorityLevel:P,startTime:Y,expirationTime:_t,sortIndex:-1},Y>gt?(P.sortIndex=Y,t(p,P),i(m)===null&&P===i(p)&&(A?(O(B),B=-1):A=!0,ut(X,Y-gt))):(P.sortIndex=_t,t(m,P),T||M||(T=!0,L||(L=!0,$()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var j=S;return function(){var Y=S;S=j;try{return P.apply(this,arguments)}finally{S=Y}}}})(eh)),eh}var Ex;function TS(){return Ex||(Ex=1,th.exports=ES()),th.exports}var nh={exports:{}},Ln={};var Tx;function AS(){if(Tx)return Ln;Tx=1;var o=Td();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Ln.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.6",Ln}var Ax;function RS(){if(Ax)return nh.exports;Ax=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),nh.exports=AS(),nh.exports}var Rx;function CS(){if(Rx)return Uo;Rx=1;var o=TS(),t=Td(),i=RS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,r=f;break}if(E===r){x=!0,r=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,r=c;break}if(E===r){x=!0,r=f,a=c;break}E=E.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case X:return"Suspense";case L:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case U:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case I:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case et:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ut=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},gt=[],_t=-1;function N(e){return{current:e}}function st(e){0>_t||(e.current=gt[_t],gt[_t]=null,_t--)}function yt(e,n){_t++,gt[_t]=e.current,e.current=n}var Et=N(null),Ot=N(null),it=N(null),ct=N(null);function Ct(e,n){switch(yt(it,n),yt(Ot,e),yt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?V0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=V0(n),e=X0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}st(Et),yt(Et,e)}function Ft(){st(Et),st(Ot),st(it)}function Xt(e){e.memoizedState!==null&&yt(ct,e);var n=Et.current,a=X0(n,e.type);n!==a&&(yt(Ot,e),yt(Et,a))}function ce(e){Ot.current===e&&(st(Et),st(Ot)),ct.current===e&&(st(ct),Ao._currentValue=Y)}var an,de;function Re(e){if(an===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);an=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+e+de}var F=!1;function pe(e,n){if(!e||F)return"";F=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(rt){var tt=rt}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(rt){tt=rt}e.call(mt.prototype)}}else{try{throw Error()}catch(rt){tt=rt}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(rt){if(rt&&tt&&typeof rt.stack=="string")return[rt.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var z=x.split(`
`),Q=E.split(`
`);for(c=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===z.length||c===Q.length)for(r=z.length-1,c=Q.length-1;1<=r&&0<=c&&z[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(z[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||z[r]!==Q[c]){var ft=`
`+z[r].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=r&&0<=c);break}}}finally{F=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Re(a):""}function ge(e,n){switch(e.tag){case 26:case 27:case 5:return Re(e.type);case 16:return Re("Lazy");case 13:return e.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return Re("Activity");default:return""}}function Pe(e){try{var n="",a=null;do n+=ge(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ht=Object.prototype.hasOwnProperty,ke=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,ae=o.unstable_shouldYield,w=o.unstable_requestPaint,b=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,Wt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Kt=o.log,kt=o.unstable_setDisableYieldValue,St=null,bt=null;function qt(e){if(typeof Kt=="function"&&kt(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(St,e)}catch{}}var Gt=Math.clz32?Math.clz32:H,Nt=Math.log,ne=Math.LN2;function H(e){return e>>>=0,e===0?32:31-(Nt(e)/ne|0)|0}var Dt=256,At=262144,Rt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Mt(r):(x&=E,x!==0?c=Mt(x):a||(a=E&~e,a!==0&&(c=Mt(a))))):(E=r&~f,E!==0?c=Mt(E):x!==0?c=Mt(x):a||(a=r&~e,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),e}function Ce(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yn(e,n,a,r,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,z=e.expirationTimes,Q=e.hiddenUpdates;for(a=x&~a;0<a;){var ft=31-Gt(a),mt=1<<ft;E[ft]=0,z[ft]=-1;var tt=Q[ft];if(tt!==null)for(Q[ft]=null,ft=0;ft<tt.length;ft++){var rt=tt[ft];rt!==null&&(rt.lane&=-536870913)}a&=~mt}r!==0&&jo(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function jo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Gt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Br(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Gt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Ir(e,n){var a=n&-n;return a=(a&42)!==0?1:gi(a),(a&(e.suspendedLanes|n))!==0?0:a}function gi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ts(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fr(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:hx(e.type))}function Hr(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var jn=Math.random().toString(36).slice(2),ln="__reactFiber$"+jn,pn="__reactProps$"+jn,Fi="__reactContainer$"+jn,Us="__reactEvents$"+jn,kc="__reactListeners$"+jn,Wc="__reactHandles$"+jn,Zo="__reactResources$"+jn,es="__reactMarker$"+jn;function Gr(e){delete e[ln],delete e[pn],delete e[Us],delete e[kc],delete e[Wc]}function _a(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Fi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=K0(e);e!==null;){if(a=e[ln])return a;e=K0(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[ln]||e[Fi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function k(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function at(e){var n=e[Zo];return n||(n=e[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(e){e[es]=!0}var q=new Set,Tt={};function wt(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(Tt[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},te={};function jt(e){return Ht.call(te,e)?!0:Ht.call(Jt,e)?!1:Bt.test(e)?te[e]=!0:(Jt[e]=!0,!1)}function ue(e,n,a){if(jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ae(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function De(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function be(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function We(e){if(!e._valueTracker){var n=Oe(e)?"checked":"value";e._valueTracker=Qt(e,n,""+e[n])}}function Ee(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Oe(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var va=/[\n"\\]/g;function Ye(e){return e.replace(va,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hi(e,n,a,r,c,f,x,E){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+be(n)):e.value!==""+be(n)&&(e.value=""+be(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?yn(e,x,be(n)):a!=null?yn(e,x,be(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+be(E):e.removeAttribute("name")}function je(e,n,a,r,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(e);return}a=a!=null?""+be(a):"",n=n!=null?""+be(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=E?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),We(e)}function yn(e,n,a){n==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mn(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+be(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Mn(e,n,a){if(n!=null&&(n=""+be(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+be(a):""}function An(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ut(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=be(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),We(e)}function Ci(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Gi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Gi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Fd(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Fd(e,f,n[f])}function qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var g_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),__=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(e){return __.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vi(){}var Yc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,Ns=null;function Gd(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Hi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[pn]||null;if(!c)throw Error(s(90));Hi(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ee(r)}break t;case"textarea":Mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&mn(e,!!a.multiple,n,!1)}}}var Zc=!1;function Vd(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var r=e(n);return r}finally{if(Zc=!1,(Ls!==null||Ns!==null)&&(Bl(),Ls&&(n=Ls,e=Ns,Ns=Ls=null,Gd(n),e)))for(n=0;n<e.length;n++)Gd(e[n])}}function Vr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[pn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Xi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Kc=!1}var Sa=null,Qc=null,Qo=null;function Xd(){if(Qo)return Qo;var e,n=Qc,a=n.length,r,c="value"in Sa?Sa.value:Sa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return Qo=c.slice(e,1<r?1-r:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function kd(){return!1}function In(e){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:kd,this.isPropagationStopped=kd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=In(ns),kr=v({},ns,{view:0,detail:0}),v_=In(kr),Jc,$c,Wr,el=v({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(Jc=e.screenX-Wr.screenX,$c=e.screenY-Wr.screenY):$c=Jc=0,Wr=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),Wd=In(el),S_=v({},el,{dataTransfer:0}),y_=In(S_),M_=v({},kr,{relatedTarget:0}),tu=In(M_),b_=v({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),E_=In(b_),T_=v({},ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),A_=In(T_),R_=v({},ns,{data:0}),qd=In(R_),C_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=w_[e])?!!n[e]:!1}function eu(){return U_}var L_=v({},kr,{key:function(e){if(e.key){var n=C_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),N_=In(L_),O_=v({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=In(O_),P_=v({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),z_=In(P_),B_=v({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),I_=In(B_),F_=v({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H_=In(F_),G_=v({},ns,{newState:0,oldState:0}),V_=In(G_),X_=[9,13,27,32],nu=Xi&&"CompositionEvent"in window,qr=null;Xi&&"documentMode"in document&&(qr=document.documentMode);var k_=Xi&&"TextEvent"in window&&!qr,jd=Xi&&(!nu||qr&&8<qr&&11>=qr),Zd=" ",Kd=!1;function Qd(e,n){switch(e){case"keyup":return X_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function W_(e,n){switch(e){case"compositionend":return Jd(n);case"keypress":return n.which!==32?null:(Kd=!0,Zd);case"textInput":return e=n.data,e===Zd&&Kd?null:e;default:return null}}function q_(e,n){if(Os)return e==="compositionend"||!nu&&Qd(e,n)?(e=Xd(),Qo=Qc=Sa=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jd&&n.locale!=="ko"?null:n.data;default:return null}}var Y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Y_[e.type]:n==="textarea"}function tp(e,n,a,r){Ls?Ns?Ns.push(r):Ns=[r]:Ls=r,n=kl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Yr=null,jr=null;function j_(e){z0(e,0)}function nl(e){var n=k(e);if(Ee(n))return e}function ep(e,n){if(e==="change")return n}var np=!1;if(Xi){var iu;if(Xi){var au="oninput"in document;if(!au){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),au=typeof ip.oninput=="function"}iu=au}else iu=!1;np=iu&&(!document.documentMode||9<document.documentMode)}function ap(){Yr&&(Yr.detachEvent("onpropertychange",sp),jr=Yr=null)}function sp(e){if(e.propertyName==="value"&&nl(jr)){var n=[];tp(n,jr,e,jc(e)),Vd(j_,n)}}function Z_(e,n,a){e==="focusin"?(ap(),Yr=n,jr=a,Yr.attachEvent("onpropertychange",sp)):e==="focusout"&&ap()}function K_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(jr)}function Q_(e,n){if(e==="click")return nl(n)}function J_(e,n){if(e==="input"||e==="change")return nl(n)}function $_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:$_;function Zr(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ht.call(n,c)||!Zn(e[c],n[c]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function op(e,n){var a=rp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rp(a)}}function lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Sn(e.document)}return n}function su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var tv=Xi&&"documentMode"in document&&11>=document.documentMode,Ps=null,ru=null,Kr=null,ou=!1;function up(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Ps==null||Ps!==Sn(r)||(r=Ps,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Zr(Kr,r)||(Kr=r,r=kl(ru,"onSelect"),0<r.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ps)))}function is(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var zs={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},lu={},fp={};Xi&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function as(e){if(lu[e])return lu[e];if(!zs[e])return e;var n=zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in fp)return lu[e]=n[a];return e}var hp=as("animationend"),dp=as("animationiteration"),pp=as("animationstart"),ev=as("transitionrun"),nv=as("transitionstart"),iv=as("transitioncancel"),mp=as("transitionend"),xp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function _i(e,n){xp.set(e,n),wt(n,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],Bs=0,uu=0;function al(){for(var e=Bs,n=uu=Bs=0;n<e;){var a=ri[n];ri[n++]=null;var r=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&gp(a,c,f)}}function sl(e,n,a,r){ri[Bs++]=e,ri[Bs++]=n,ri[Bs++]=a,ri[Bs++]=r,uu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function fu(e,n,a,r){return sl(e,n,a,r),rl(e)}function ss(e,n){return sl(e,null,null,n),rl(e)}function gp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Gt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<vo)throw vo=0,yf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function av(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,r){return new av(e,n,a,r)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function _p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,r,c,f){var x=0;if(r=e,typeof e=="function")hu(e)&&(x=1);else if(typeof e=="string")x=cS(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Kn(31,a,n,c),e.elementType=D,e.lanes=f,e;case A:return rs(a.children,c,f,n);case y:x=8,c|=24;break;case g:return e=Kn(12,a,n,c|2),e.elementType=g,e.lanes=f,e;case X:return e=Kn(13,a,n,c),e.elementType=X,e.lanes=f,e;case L:return e=Kn(19,a,n,c),e.elementType=L,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case O:x=9;break t;case I:x=11;break t;case B:x=14;break t;case et:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Kn(x,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function rs(e,n,a,r){return e=Kn(7,e,r,n),e.lanes=a,e}function du(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function vp(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function pu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Sp=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=Sp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pe(n)},Sp.set(e,n),n)}return{value:e,source:n,stack:Pe(n)}}var Fs=[],Hs=0,ll=null,Qr=0,li=[],ci=0,ya=null,Di=1,wi="";function Wi(e,n){Fs[Hs++]=Qr,Fs[Hs++]=ll,ll=e,Qr=n}function yp(e,n,a){li[ci++]=Di,li[ci++]=wi,li[ci++]=ya,ya=e;var r=Di;e=wi;var c=32-Gt(r)-1;r&=~(1<<c),a+=1;var f=32-Gt(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,Di=1<<32-Gt(n)+c|a<<c|r,wi=f+e}else Di=1<<f|a<<c|r,wi=e}function mu(e){e.return!==null&&(Wi(e,1),yp(e,1,0))}function xu(e){for(;e===ll;)ll=Fs[--Hs],Fs[Hs]=null,Qr=Fs[--Hs],Fs[Hs]=null;for(;e===ya;)ya=li[--ci],li[ci]=null,wi=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null}function Mp(e,n){li[ci++]=Di,li[ci++]=wi,li[ci++]=ya,Di=n.id,wi=n.overflow,ya=e}var Rn=null,Ze=null,Te=!1,Ma=null,ui=!1,gu=Error(s(519));function ba(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jr(oi(n,e)),gu}function bp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[ln]=e,n[pn]=r,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)ve(yo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),je(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),An(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||H0(n.textContent,a)?(r.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),r.onScroll!=null&&ve("scroll",n),r.onScrollEnd!=null&&ve("scrollend",n),r.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||ba(e,!0)}function Ep(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Rn=Rn.return}}function Gs(e){if(e!==Rn)return!1;if(!Te)return Ep(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&Ze&&ba(e),Ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Z0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Z0(e)}else n===27?(n=Ze,Ba(e.type)?(e=Gf,Gf=null,Ze=e):Ze=n):Ze=Rn?hi(e.stateNode.nextSibling):null;return!0}function os(){Ze=Rn=null,Te=!1}function _u(){var e=Ma;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ma=null),e}function Jr(e){Ma===null?Ma=[e]:Ma.push(e)}var vu=N(null),ls=null,qi=null;function Ea(e,n,a){yt(vu,n._currentValue),n._currentValue=a}function Yi(e){e._currentValue=vu.current,st(vu)}function Su(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function yu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Su(f.return,a,e),r||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Su(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Vs(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var E=c.type;Zn(c.pendingProps.value,x.value)||(e!==null?e.push(E):e=[E])}}else if(c===ct.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}c=c.return}e!==null&&yu(n,e,a,r),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cs(e){ls=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Tp(ls,e)}function ul(e,n){return ls===null&&cs(e),Tp(e,n)}function Tp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(s(308));qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qi=qi.next=n;return a}var sv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},rv=o.unstable_scheduleCallback,ov=o.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new sv,data:new Map,refCount:0}}function $r(e){e.refCount--,e.refCount===0&&rv(ov,function(){e.controller.abort()})}var to=null,bu=0,Xs=0,ks=null;function lv(e,n){if(to===null){var a=to=[];bu=0,Xs=Rf(),ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return bu++,n.then(Ap,Ap),n}function Ap(){if(--bu===0&&to!==null){ks!==null&&(ks.status="fulfilled");var e=to;to=null,Xs=0,ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function cv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Rp=P.S;P.S=function(e,n){u0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&lv(e,n),Rp!==null&&Rp(e,n)};var us=N(null);function Eu(){var e=us.current;return e!==null?e:qe.pooledCache}function fl(e,n){n===null?yt(us,us.current):yt(us,n.pool)}function Cp(){var e=Eu();return e===null?null:{parent:cn._currentValue,pool:e}}var Ws=Error(s(460)),Tu=Error(s(474)),hl=Error(s(542)),dl={then:function(){}};function Dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Lp(e),e;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Lp(e),e}throw hs=n,Ws}}function fs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hs=a,Ws):a}}var hs=null;function Up(){if(hs===null)throw Error(s(459));var e=hs;return hs=null,e}function Lp(e){if(e===Ws||e===hl)throw Error(s(483))}var qs=null,eo=0;function pl(e){var n=eo;return eo+=1,qs===null&&(qs=[]),wp(qs,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Np(e){function n(W,G){if(e){var Z=W.deletions;Z===null?(W.deletions=[G],W.flags|=16):Z.push(G)}}function a(W,G){if(!e)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function r(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=ki(W,G),W.index=0,W.sibling=null,W}function f(W,G,Z){return W.index=Z,e?(Z=W.alternate,Z!==null?(Z=Z.index,Z<G?(W.flags|=67108866,G):Z):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function x(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function E(W,G,Z,ht){return G===null||G.tag!==6?(G=du(Z,W.mode,ht),G.return=W,G):(G=c(G,Z),G.return=W,G)}function z(W,G,Z,ht){var Zt=Z.type;return Zt===A?ft(W,G,Z.props.children,ht,Z.key):G!==null&&(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===et&&fs(Zt)===G.type)?(G=c(G,Z.props),no(G,Z),G.return=W,G):(G=ol(Z.type,Z.key,Z.props,null,W.mode,ht),no(G,Z),G.return=W,G)}function Q(W,G,Z,ht){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=pu(Z,W.mode,ht),G.return=W,G):(G=c(G,Z.children||[]),G.return=W,G)}function ft(W,G,Z,ht,Zt){return G===null||G.tag!==7?(G=rs(Z,W.mode,ht,Zt),G.return=W,G):(G=c(G,Z),G.return=W,G)}function mt(W,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=du(""+G,W.mode,Z),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return Z=ol(G.type,G.key,G.props,null,W.mode,Z),no(Z,G),Z.return=W,Z;case T:return G=pu(G,W.mode,Z),G.return=W,G;case et:return G=fs(G),mt(W,G,Z)}if(ut(G)||$(G))return G=rs(G,W.mode,Z,null),G.return=W,G;if(typeof G.then=="function")return mt(W,pl(G),Z);if(G.$$typeof===U)return mt(W,ul(W,G),Z);ml(W,G)}return null}function tt(W,G,Z,ht){var Zt=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Zt!==null?null:E(W,G,""+Z,ht);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:return Z.key===Zt?z(W,G,Z,ht):null;case T:return Z.key===Zt?Q(W,G,Z,ht):null;case et:return Z=fs(Z),tt(W,G,Z,ht)}if(ut(Z)||$(Z))return Zt!==null?null:ft(W,G,Z,ht,null);if(typeof Z.then=="function")return tt(W,G,pl(Z),ht);if(Z.$$typeof===U)return tt(W,G,ul(W,Z),ht);ml(W,Z)}return null}function rt(W,G,Z,ht,Zt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(Z)||null,E(G,W,""+ht,Zt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case M:return W=W.get(ht.key===null?Z:ht.key)||null,z(G,W,ht,Zt);case T:return W=W.get(ht.key===null?Z:ht.key)||null,Q(G,W,ht,Zt);case et:return ht=fs(ht),rt(W,G,Z,ht,Zt)}if(ut(ht)||$(ht))return W=W.get(Z)||null,ft(G,W,ht,Zt,null);if(typeof ht.then=="function")return rt(W,G,Z,pl(ht),Zt);if(ht.$$typeof===U)return rt(W,G,Z,ul(G,ht),Zt);ml(G,ht)}return null}function It(W,G,Z,ht){for(var Zt=null,we=null,Vt=G,fe=G=0,Me=null;Vt!==null&&fe<Z.length;fe++){Vt.index>fe?(Me=Vt,Vt=null):Me=Vt.sibling;var Ue=tt(W,Vt,Z[fe],ht);if(Ue===null){Vt===null&&(Vt=Me);break}e&&Vt&&Ue.alternate===null&&n(W,Vt),G=f(Ue,G,fe),we===null?Zt=Ue:we.sibling=Ue,we=Ue,Vt=Me}if(fe===Z.length)return a(W,Vt),Te&&Wi(W,fe),Zt;if(Vt===null){for(;fe<Z.length;fe++)Vt=mt(W,Z[fe],ht),Vt!==null&&(G=f(Vt,G,fe),we===null?Zt=Vt:we.sibling=Vt,we=Vt);return Te&&Wi(W,fe),Zt}for(Vt=r(Vt);fe<Z.length;fe++)Me=rt(Vt,W,fe,Z[fe],ht),Me!==null&&(e&&Me.alternate!==null&&Vt.delete(Me.key===null?fe:Me.key),G=f(Me,G,fe),we===null?Zt=Me:we.sibling=Me,we=Me);return e&&Vt.forEach(function(Va){return n(W,Va)}),Te&&Wi(W,fe),Zt}function $t(W,G,Z,ht){if(Z==null)throw Error(s(151));for(var Zt=null,we=null,Vt=G,fe=G=0,Me=null,Ue=Z.next();Vt!==null&&!Ue.done;fe++,Ue=Z.next()){Vt.index>fe?(Me=Vt,Vt=null):Me=Vt.sibling;var Va=tt(W,Vt,Ue.value,ht);if(Va===null){Vt===null&&(Vt=Me);break}e&&Vt&&Va.alternate===null&&n(W,Vt),G=f(Va,G,fe),we===null?Zt=Va:we.sibling=Va,we=Va,Vt=Me}if(Ue.done)return a(W,Vt),Te&&Wi(W,fe),Zt;if(Vt===null){for(;!Ue.done;fe++,Ue=Z.next())Ue=mt(W,Ue.value,ht),Ue!==null&&(G=f(Ue,G,fe),we===null?Zt=Ue:we.sibling=Ue,we=Ue);return Te&&Wi(W,fe),Zt}for(Vt=r(Vt);!Ue.done;fe++,Ue=Z.next())Ue=rt(Vt,W,fe,Ue.value,ht),Ue!==null&&(e&&Ue.alternate!==null&&Vt.delete(Ue.key===null?fe:Ue.key),G=f(Ue,G,fe),we===null?Zt=Ue:we.sibling=Ue,we=Ue);return e&&Vt.forEach(function(SS){return n(W,SS)}),Te&&Wi(W,fe),Zt}function Ge(W,G,Z,ht){if(typeof Z=="object"&&Z!==null&&Z.type===A&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:t:{for(var Zt=Z.key;G!==null;){if(G.key===Zt){if(Zt=Z.type,Zt===A){if(G.tag===7){a(W,G.sibling),ht=c(G,Z.props.children),ht.return=W,W=ht;break t}}else if(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===et&&fs(Zt)===G.type){a(W,G.sibling),ht=c(G,Z.props),no(ht,Z),ht.return=W,W=ht;break t}a(W,G);break}else n(W,G);G=G.sibling}Z.type===A?(ht=rs(Z.props.children,W.mode,ht,Z.key),ht.return=W,W=ht):(ht=ol(Z.type,Z.key,Z.props,null,W.mode,ht),no(ht,Z),ht.return=W,W=ht)}return x(W);case T:t:{for(Zt=Z.key;G!==null;){if(G.key===Zt)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){a(W,G.sibling),ht=c(G,Z.children||[]),ht.return=W,W=ht;break t}else{a(W,G);break}else n(W,G);G=G.sibling}ht=pu(Z,W.mode,ht),ht.return=W,W=ht}return x(W);case et:return Z=fs(Z),Ge(W,G,Z,ht)}if(ut(Z))return It(W,G,Z,ht);if($(Z)){if(Zt=$(Z),typeof Zt!="function")throw Error(s(150));return Z=Zt.call(Z),$t(W,G,Z,ht)}if(typeof Z.then=="function")return Ge(W,G,pl(Z),ht);if(Z.$$typeof===U)return Ge(W,G,ul(W,Z),ht);ml(W,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,G!==null&&G.tag===6?(a(W,G.sibling),ht=c(G,Z),ht.return=W,W=ht):(a(W,G),ht=du(Z,W.mode,ht),ht.return=W,W=ht),x(W)):a(W,G)}return function(W,G,Z,ht){try{eo=0;var Zt=Ge(W,G,Z,ht);return qs=null,Zt}catch(Vt){if(Vt===Ws||Vt===hl)throw Vt;var we=Kn(29,Vt,null,W.mode);return we.lanes=ht,we.return=W,we}}}var ds=Np(!0),Op=Np(!1),Ta=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=rl(e),gp(e,null,a),n}return sl(e,r,n,a),rl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Br(e,a)}}function Cu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Du=!1;function ao(){if(Du){var e=ks;if(e!==null)throw e}}function so(e,n,a,r){Du=!1;var c=e.updateQueue;Ta=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,Q=z.next;z.next=null,x===null?f=Q:x.next=Q,x=z;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,E=ft.lastBaseUpdate,E!==x&&(E===null?ft.firstBaseUpdate=Q:E.next=Q,ft.lastBaseUpdate=z))}if(f!==null){var mt=c.baseState;x=0,ft=Q=z=null,E=f;do{var tt=E.lane&-536870913,rt=tt!==E.lane;if(rt?(ye&tt)===tt:(r&tt)===tt){tt!==0&&tt===Xs&&(Du=!0),ft!==null&&(ft=ft.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var It=e,$t=E;tt=n;var Ge=a;switch($t.tag){case 1:if(It=$t.payload,typeof It=="function"){mt=It.call(Ge,mt,tt);break t}mt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=$t.payload,tt=typeof It=="function"?It.call(Ge,mt,tt):It,tt==null)break t;mt=v({},mt,tt);break t;case 2:Ta=!0}}tt=E.callback,tt!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[tt]:rt.push(tt))}else rt={lane:tt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ft===null?(Q=ft=rt,z=mt):ft=ft.next=rt,x|=tt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ft===null&&(z=mt),c.baseState=z,c.firstBaseUpdate=Q,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),La|=x,e.lanes=x,e.memoizedState=mt}}function Pp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function zp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pp(a[e],n)}var Ys=N(null),xl=N(0);function Bp(e,n){e=na,yt(xl,e),yt(Ys,n),na=e|n.baseLanes}function wu(){yt(xl,na),yt(Ys,Ys.current)}function Uu(){na=xl.current,st(Ys),st(xl)}var Qn=N(null),fi=null;function Ca(e){var n=e.alternate;yt(sn,sn.current&1),yt(Qn,e),fi===null&&(n===null||Ys.current!==null||n.memoizedState!==null)&&(fi=e)}function Lu(e){yt(sn,sn.current),yt(Qn,e),fi===null&&(fi=e)}function Ip(e){e.tag===22?(yt(sn,sn.current),yt(Qn,e),fi===null&&(fi=e)):Da()}function Da(){yt(sn,sn.current),yt(Qn,Qn.current)}function Jn(e){st(Qn),fi===e&&(fi=null),st(sn)}var sn=N(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ji=0,le=null,Fe=null,un=null,_l=!1,js=!1,ps=!1,vl=0,ro=0,Zs=null,uv=0;function $e(){throw Error(s(321))}function Nu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Ou(e,n,a,r,c,f){return ji=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?ym:Zu,ps=!1,f=a(r,c),ps=!1,js&&(f=Hp(n,a,r,c)),Fp(e),f}function Fp(e){P.H=co;var n=Fe!==null&&Fe.next!==null;if(ji=0,un=Fe=le=null,_l=!1,ro=0,Zs=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&cl(e)&&(fn=!0))}function Hp(e,n,a,r){le=e;var c=0;do{if(js&&(Zs=null),ro=0,js=!1,25<=c)throw Error(s(301));if(c+=1,un=Fe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Mm,f=n(a,r)}while(js);return f}function fv(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(le.flags|=1024),n}function Pu(){var e=vl!==0;return vl=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}ji=0,un=Fe=le=null,js=!1,ro=vl=0,Zs=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?le.memoizedState=un=e:un=un.next=e,un}function rn(){if(Fe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=un===null?le.memoizedState:un.next;if(n!==null)un=n,Fe=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},un===null?le.memoizedState=un=e:un=un.next=e}return un}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=ro;return ro+=1,Zs===null&&(Zs=[]),e=wp(Zs,e,n),n=le,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?ym:Zu),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===U)return Cn(e)}throw Error(s(438,String(e)))}function Iu(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Zi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=rn();return Fu(n,Fe,e)}function Fu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=x=null,z=null,Q=n,ft=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(ye&mt)===mt:(ji&mt)===mt){var tt=Q.revertLane;if(tt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Xs&&(ft=!0);else if((ji&tt)===tt){Q=Q.next,tt===Xs&&(ft=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(E=z=mt,x=f):z=z.next=mt,le.lanes|=tt,La|=tt;mt=Q.action,ps&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else tt={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(E=z=tt,x=f):z=z.next=tt,le.lanes|=mt,La|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(z===null?x=f:z.next=E,!Zn(f,e.memoizedState)&&(fn=!0,ft&&(a=ks,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=z,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Hu(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);Zn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Gp(e,n,a){var r=le,c=rn(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Zn((Fe||c).memoizedState,a);if(x&&(c.memoizedState=a,fn=!0),c=c.queue,Xu(kp.bind(null,r,c,e),[e]),c.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,Ks(9,{destroy:void 0},Xp.bind(null,r,c,a,n),null),qe===null)throw Error(s(349));f||(ji&127)!==0||Vp(r,n,a)}return a}function Vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Sl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Xp(e,n,a,r){n.value=a,n.getSnapshot=r,Wp(n)&&qp(e)}function kp(e,n,a){return a(function(){Wp(n)&&qp(e)})}function Wp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function qp(e){var n=ss(e,2);n!==null&&Xn(n,e,2)}function Gu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),ps){qt(!0);try{a()}finally{qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},n}function Yp(e,n,a,r){return e.baseState=a,Fu(e,Fe,typeof r=="function"?r:Zi)}function hv(e,n,a,r,c){if(Tl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function jp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var E=a(c,r),z=P.S;z!==null&&z(x,E),Zp(e,n,E)}catch(Q){Vu(e,n,Q)}finally{f!==null&&x.types!==null&&(f.types=x.types),P.T=f}}else try{f=a(c,r),Zp(e,n,f)}catch(Q){Vu(e,n,Q)}}function Zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Kp(e,n,r)},function(r){return Vu(e,n,r)}):Kp(e,n,a)}function Kp(e,n,a){n.status="fulfilled",n.value=a,Qp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,jp(e,a)))}function Vu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Qp(n),n=n.next;while(n!==r)}e.action=null}function Qp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jp(e,n){return n}function $p(e,n){if(Te){var a=qe.formState;if(a!==null){t:{var r=le;if(Te){if(Ze){e:{for(var c=Ze,f=ui;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=hi(c.nextSibling),r=c.data==="F!";break t}}ba(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:n},a.queue=r,a=_m.bind(null,le,r),r.dispatch=a,r=Gu(!1),f=ju.bind(null,le,!1,r.queue),r=Pn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=hv.bind(null,le,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function tm(e){var n=rn();return em(n,Fe,e)}function em(e,n,a){if(n=Fu(e,n,Jp)[0],e=Ml(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=oo(n)}catch(x){throw x===Ws?hl:x}else r=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Ks(9,{destroy:void 0},dv.bind(null,c,a),null)),[r,f,e]}function dv(e,n){e.action=n}function nm(e){var n=rn(),a=Fe;if(a!==null)return em(n,a,e);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Ks(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=Sl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function im(){return rn().memoizedState}function bl(e,n,a,r){var c=Pn();le.flags|=e,c.memoizedState=Ks(1|n,{destroy:void 0},a,r===void 0?null:r)}function El(e,n,a,r){var c=rn();r=r===void 0?null:r;var f=c.memoizedState.inst;Fe!==null&&r!==null&&Nu(r,Fe.memoizedState.deps)?c.memoizedState=Ks(n,f,a,r):(le.flags|=e,c.memoizedState=Ks(1|n,f,a,r))}function am(e,n){bl(8390656,8,e,n)}function Xu(e,n){El(2048,8,e,n)}function pv(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Sl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function sm(e){var n=rn().memoizedState;return pv({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function rm(e,n){return El(4,2,e,n)}function om(e,n){return El(4,4,e,n)}function lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cm(e,n,a){a=a!=null?a.concat([e]):null,El(4,4,lm.bind(null,n,e),a)}function ku(){}function um(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Nu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function fm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Nu(n,r[1]))return r[0];if(r=e(),ps){qt(!0);try{e()}finally{qt(!1)}}return a.memoizedState=[r,n],r}function Wu(e,n,a){return a===void 0||(ji&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=h0(),le.lanes|=e,La|=e,a)}function hm(e,n,a,r){return Zn(a,n)?a:Ys.current!==null?(e=Wu(e,a,r),Zn(e,n)||(fn=!0),e):(ji&42)===0||(ji&1073741824)!==0&&(ye&261930)===0?(fn=!0,e.memoizedState=a):(e=h0(),le.lanes|=e,La|=e,n)}function dm(e,n,a,r,c){var f=j.p;j.p=f!==0&&8>f?f:8;var x=P.T,E={};P.T=E,ju(e,!1,n,a);try{var z=c(),Q=P.S;if(Q!==null&&Q(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ft=cv(z,r);lo(e,n,ft,ei(e))}else lo(e,n,r,ei(e))}catch(mt){lo(e,n,{then:function(){},status:"rejected",reason:mt},ei())}finally{j.p=f,x!==null&&E.types!==null&&(x.types=E.types),P.T=x}}function mv(){}function qu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=pm(e).queue;dm(e,c,n,Y,a===null?mv:function(){return mm(e),a(r)})}function pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function mm(e){var n=pm(e);n.next===null&&(n=e.alternate.memoizedState),lo(e,n.next.queue,{},ei())}function Yu(){return Cn(Ao)}function xm(){return rn().memoizedState}function gm(){return rn().memoizedState}function xv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Aa(a);var r=Ra(n,e,a);r!==null&&(Xn(r,n,a),io(r,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function gv(e,n,a){var r=ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?vm(n,a):(a=fu(e,n,a,r),a!==null&&(Xn(a,e,r),Sm(a,n,r)))}function _m(e,n,a){var r=ei();lo(e,n,a,r)}function lo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))vm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Zn(E,x))return sl(e,n,c,0),qe===null&&al(),!1}catch{}if(a=fu(e,n,c,r),a!==null)return Xn(a,e,r),Sm(a,n,r),!0}return!1}function ju(e,n,a,r){if(r={lane:2,revertLane:Rf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(s(479))}else n=fu(e,a,r,2),n!==null&&Xn(n,e,2)}function Tl(e){var n=e.alternate;return e===le||n!==null&&n===le}function vm(e,n){js=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Sm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Br(e,a)}}var co={readContext:Cn,use:yl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};co.useEffectEvent=$e;var ym={readContext:Cn,use:yl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bl(4194308,4,lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bl(4194308,4,e,n)},useInsertionEffect:function(e,n){bl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var r=e();if(ps){qt(!0);try{e()}finally{qt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Pn();if(a!==void 0){var c=a(n);if(ps){qt(!0);try{a(n)}finally{qt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=gv.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=_m.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=Pn();return Wu(a,e,n)},useTransition:function(){var e=Gu(!1);return e=dm.bind(null,le,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=le,c=Pn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(ye&127)!==0||Vp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,am(kp.bind(null,r,f,e),[e]),r.flags|=2048,Ks(9,{destroy:void 0},Xp.bind(null,r,f,a,n),null),a},useId:function(){var e=Pn(),n=qe.identifierPrefix;if(Te){var a=wi,r=Di;a=(r&~(1<<32-Gt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=uv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:$p,useActionState:$p,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Pn().memoizedState=xv.bind(null,le)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:Cn,use:yl,useCallback:um,useContext:Cn,useEffect:Xu,useImperativeHandle:cm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:fm,useReducer:Ml,useRef:im,useState:function(){return Ml(Zi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=rn();return hm(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Ml(Zi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Gp,useId:xm,useHostTransitionStatus:Yu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=rn();return Yp(a,Fe,e,n)},useMemoCache:Iu,useCacheRefresh:gm};Zu.useEffectEvent=sm;var Mm={readContext:Cn,use:yl,useCallback:um,useContext:Cn,useEffect:Xu,useImperativeHandle:cm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:fm,useReducer:Hu,useRef:im,useState:function(){return Hu(Zi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=rn();return Fe===null?Wu(a,e,n):hm(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Hu(Zi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Gp,useId:xm,useHostTransitionStatus:Yu,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var a=rn();return Fe!==null?Yp(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:gm};Mm.useEffectEvent=sm;function Ku(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ei(),c=Aa(r);c.payload=n,a!=null&&(c.callback=a),n=Ra(e,c,r),n!==null&&(Xn(n,e,r),io(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ei(),c=Aa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ra(e,c,r),n!==null&&(Xn(n,e,r),io(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),r=Aa(a);r.tag=2,n!=null&&(r.callback=n),n=Ra(e,r,a),n!==null&&(Xn(n,e,a),io(n,e,a))}};function bm(e,n,a,r,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Zr(a,r)||!Zr(c,f):!0}function Em(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Qu.enqueueReplaceState(n,n.state,null)}function ms(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Tm(e){il(e)}function Am(e){console.error(e)}function Rm(e){il(e)}function Al(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Cm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ju(e,n,a){return a=Aa(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(e,n)},a}function Dm(e){return e=Aa(e),e.tag=3,e}function wm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Cm(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Cm(n,a,r),typeof c!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function _v(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,c,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Il():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ef(e,r,c)),!1;case 22:return a.flags|=65536,r===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ef(e,r,c)),!1}throw Error(s(435,a.tag))}return Ef(e,r,c),Il(),!1}if(Te)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==gu&&(e=Error(s(422),{cause:r}),Jr(oi(e,a)))):(r!==gu&&(n=Error(s(423),{cause:r}),Jr(oi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=oi(r,a),c=Ju(e.stateNode,r,c),Cu(e,c),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:r});if(f=oi(f,a),_o===null?_o=[f]:_o.push(f),tn!==4&&(tn=2),n===null)return!0;r=oi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ju(a.stateNode,r,e),Cu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Na===null||!Na.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Dm(c),wm(c,e,a,r),Cu(a,c),!1}a=a.return}while(a!==null);return!1}var $u=Error(s(461)),fn=!1;function Dn(e,n,a,r){n.child=e===null?Op(n,null,a,r):ds(n,e.child,a,r)}function Um(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var E in r)E!=="ref"&&(x[E]=r[E])}else x=r;return cs(n),r=Ou(e,n,a,x,f,c),E=Pu(),e!==null&&!fn?(zu(e,n,c),Ki(e,n,c)):(Te&&E&&mu(n),n.flags|=1,Dn(e,n,r,c),n.child)}function Lm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Nm(e,n,f,r,c)):(e=ol(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zr,a(x,r)&&e.ref===n.ref)return Ki(e,n,c)}return n.flags|=1,e=ki(f,r),e.ref=n.ref,e.return=n,n.child=e}function Nm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Zr(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,lf(e,c))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Ki(e,n,c)}return tf(e,n,a,r,c)}function Om(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Pm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Bp(n,f):wu(),Ip(n);else return r=n.lanes=536870912,Pm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(fl(n,f.cachePool),Bp(n,f),Da(),n.memoizedState=null):(e!==null&&fl(n,null),wu(),Da());return Dn(e,n,c,a),n.child}function uo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pm(e,n,a,r,c){var f=Eu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&fl(n,null),wu(),Ip(n),e!==null&&Vs(e,n,r,!0),n.childLanes=c,null}function Rl(e,n){return n=Dl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function zm(e,n,a){return ds(n,e.child,null,a),e=Rl(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function vv(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(r.mode==="hidden")return e=Rl(n,r),n.lanes=536870912,uo(null,e);if(Lu(n),(e=Ze)?(e=j0(e,ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Di,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=n,n.child=a,Rn=n,Ze=null)):e=null,e===null)throw ba(n);return n.lanes=536870912,null}return Rl(n,r)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Lu(n),c)if(n.flags&256)n.flags&=-257,n=zm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Vs(e,n,a,!1),c=(a&e.childLanes)!==0,fn||c){if(r=qe,r!==null&&(x=Ir(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,ss(e,x),Xn(r,e,x),$u;Il(),n=zm(e,n,a)}else e=f.treeContext,Ze=hi(x.nextSibling),Rn=n,Te=!0,Ma=null,ui=!1,e!==null&&Mp(n,e),n=Rl(n,r),n.flags|=4096;return n}return e=ki(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,r,c){return cs(n),a=Ou(e,n,a,r,void 0,c),r=Pu(),e!==null&&!fn?(zu(e,n,c),Ki(e,n,c)):(Te&&r&&mu(n),n.flags|=1,Dn(e,n,a,c),n.child)}function Bm(e,n,a,r,c,f){return cs(n),n.updateQueue=null,a=Hp(n,r,a,c),Fp(e),r=Pu(),e!==null&&!fn?(zu(e,n,f),Ki(e,n,f)):(Te&&r&&mu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function Im(e,n,a,r,c){if(cs(n),n.stateNode===null){var f=Is,x=a.contextType;typeof x=="object"&&x!==null&&(f=Cn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Au(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Cn(x):Is,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Ku(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Qu.enqueueReplaceState(f,f.state,null),so(n,r,f,c),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,z=ms(a,E);f.props=z;var Q=f.context,ft=a.contextType;x=Is,typeof ft=="object"&&ft!==null&&(x=Cn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==x)&&Em(n,f,r,x),Ta=!1;var tt=n.memoizedState;f.state=tt,so(n,r,f,c),ao(),Q=n.memoizedState,E||tt!==Q||Ta?(typeof mt=="function"&&(Ku(n,a,mt,r),Q=n.memoizedState),(z=Ta||bm(n,a,z,r,tt,Q,x))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=x,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Ru(e,n),x=n.memoizedProps,ft=ms(a,x),f.props=ft,mt=n.pendingProps,tt=f.context,Q=a.contextType,z=Is,typeof Q=="object"&&Q!==null&&(z=Cn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==mt||tt!==z)&&Em(n,f,r,z),Ta=!1,tt=n.memoizedState,f.state=tt,so(n,r,f,c),ao();var rt=n.memoizedState;x!==mt||tt!==rt||Ta||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof E=="function"&&(Ku(n,a,E,r),rt=n.memoizedState),(ft=Ta||bm(n,a,ft,r,tt,rt,z)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=z,r=ft):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Cl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ds(n,e.child,null,c),n.child=ds(n,null,a,c)):Dn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ki(e,n,c),e}function Fm(e,n,a,r){return os(),n.flags|=256,Dn(e,n,a,r),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Cp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function Hm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?Ca(n):Da(),(e=Ze)?(e=j0(e,ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Di,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=n,n.child=a,Rn=n,Ze=null)):e=null,e===null)throw ba(n);return Hf(e)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Da(),c=n.mode,E=Dl({mode:"hidden",children:E},c),r=rs(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=nf(a),r.childLanes=af(e,x,a),n.memoizedState=ef,uo(null,r)):(Ca(n),sf(n,E))}var z=e.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(Ca(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(Da(),n.child=e.child,n.flags|=128,n=null):(Da(),E=r.fallback,c=n.mode,r=Dl({mode:"visible",children:r.children},c),E=rs(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,ds(n,e.child,null,a),r=n.child,r.memoizedState=nf(a),r.childLanes=af(e,x,a),n.memoizedState=ef,n=uo(null,r));else if(Ca(n),Hf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var Q=x.dgst;x=Q,r=Error(s(419)),r.stack="",r.digest=x,Jr({value:r,source:null,stack:null}),n=rf(e,n,a)}else if(fn||Vs(e,n,a,!1),x=(a&e.childLanes)!==0,fn||x){if(x=qe,x!==null&&(r=Ir(x,a),r!==0&&r!==z.retryLane))throw z.retryLane=r,ss(e,r),Xn(x,e,r),$u;Ff(E)||Il(),n=rf(e,n,a)}else Ff(E)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Ze=hi(E.nextSibling),Rn=n,Te=!0,Ma=null,ui=!1,e!==null&&Mp(n,e),n=sf(n,r.children),n.flags|=4096);return n}return c?(Da(),E=r.fallback,c=n.mode,z=e.child,Q=z.sibling,r=ki(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,Q!==null?E=ki(Q,E):(E=rs(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,uo(null,r),r=n.child,E=e.child.memoizedState,E===null?E=nf(a):(c=E.cachePool,c!==null?(z=cn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=Cp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=af(e,x,a),n.memoizedState=ef,uo(e.child,r)):(Ca(n),a=e.child,e=a.sibling,a=ki(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function sf(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function rf(e,n,a){return ds(n,e.child,null,a),e=sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Gm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Su(e.return,n,a)}function of(e,n,a,r,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function Vm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var x=sn.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,yt(sn,x),Dn(e,n,r,a),r=Te?Qr:0,!E&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gm(e,a,n);else if(e.tag===19)Gm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&gl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}of(n,!0,a,null,f,r);break;case"together":of(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function Sv(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),Ea(n,cn,e.memoizedState.cache),os();break;case 27:case 5:Xt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:Ea(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Hm(e,n,a):(Ca(n),e=Ki(e,n,a),e!==null?e.sibling:null);Ca(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Vs(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Vm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(sn,sn.current),r)break;return null;case 22:return n.lanes=0,Om(e,n,a,n.pendingProps);case 24:Ea(n,cn,e.memoizedState.cache)}return Ki(e,n,a)}function Xm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return fn=!1,Sv(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Te&&(n.flags&1048576)!==0&&yp(n,Qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=fs(n.elementType),n.type=e,typeof e=="function")hu(e)?(r=ms(e,r),n.tag=1,n=Im(null,n,e,r,a)):(n.tag=0,n=tf(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===I){n.tag=11,n=Um(null,n,e,r,a);break t}else if(c===B){n.tag=14,n=Lm(null,n,e,r,a);break t}}throw n=dt(e)||e,Error(s(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=ms(r,n.pendingProps),Im(e,n,r,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Ru(e,n),so(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Ea(n,cn,r),r!==f.cache&&yu(n,[cn],a,!0),ao(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Fm(e,n,r,a);break t}else if(r!==c){c=oi(Error(s(424)),n),Jr(c),n=Fm(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=hi(e.firstChild),Rn=n,Te=!0,Ma=null,ui=!0,a=Op(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(os(),r===c){n=Ki(e,n,a);break t}Dn(e,n,r,a)}n=n.child}return n;case 26:return Cl(e,n),e===null?(a=tx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,r=Wl(it.current).createElement(a),r[ln]=n,r[pn]=e,wn(r,a,e),J(r),n.stateNode=r):n.memoizedState=tx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&Te&&(r=n.stateNode=Q0(n.type,n.pendingProps,it.current),Rn=n,ui=!0,c=Ze,Ba(n.type)?(Gf=c,Ze=hi(r.firstChild)):Ze=c),Dn(e,n,n.pendingProps.children,a),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((c=r=Ze)&&(r=Kv(r,n.type,n.pendingProps,ui),r!==null?(n.stateNode=r,Rn=n,Ze=hi(r.firstChild),ui=!1,c=!0):c=!1),c||ba(n)),Xt(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,zf(c,f)?r=null:x!==null&&zf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Ou(e,n,fv,null,null,a),Ao._currentValue=c),Cl(e,n),Dn(e,n,r,a),n.child;case 6:return e===null&&Te&&((e=a=Ze)&&(a=Qv(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Rn=n,Ze=null,e=!0):e=!1),e||ba(n)),null;case 13:return Hm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ds(n,null,r,a):Dn(e,n,r,a),n.child;case 11:return Um(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ea(n,n.type,r.value),Dn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,cs(n),c=Cn(c),r=r(c),n.flags|=1,Dn(e,n,r,a),n.child;case 14:return Lm(e,n,n.type,n.pendingProps,a);case 15:return Nm(e,n,n.type,n.pendingProps,a);case 19:return Vm(e,n,a);case 31:return vv(e,n,a);case 22:return Om(e,n,a,n.pendingProps);case 24:return cs(n),r=Cn(cn),e===null?(c=Eu(),c===null&&(c=qe,f=Mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Au(n),Ea(n,cn,c)):((e.lanes&a)!==0&&(Ru(e,n),so(n,null,null,a),ao()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ea(n,cn,r)):(r=f.cache,Ea(n,cn,r),r!==c.cache&&yu(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Qi(e){e.flags|=4}function cf(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(x0())e.flags|=8192;else throw hs=dl,Tu}else e.flags&=-16777217}function km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sx(n))if(x0())e.flags|=8192;else throw hs=dl,Tu}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,tr|=n)}function fo(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function yv(e,n,a){var r=n.pendingProps;switch(xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Yi(cn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gs(n)?Qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),Ke(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Qi(n),f!==null?(Ke(n),km(n,f)):(Ke(n),cf(n,c,null,r,a))):f?f!==e.memoizedState?(Qi(n),Ke(n),km(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Qi(n),Ke(n),cf(n,c,e,r,a)),null;case 27:if(ce(n),a=it.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Et.current,Gs(n)?bp(n):(e=Q0(c,r,a),n.stateNode=e,Qi(n))}return Ke(n),null;case 5:if(ce(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=Et.current,Gs(n))bp(n);else{var x=Wl(it.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}f[ln]=n,f[pn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(wn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Qi(n)}}return Ke(n),cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Qi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Gs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||H0(e.nodeValue,a)),e||ba(n,!0)}else e=Wl(e).createTextNode(r),e[ln]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Gs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=_u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Gs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[ln]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=_u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),Ke(n),null);case 4:return Ft(),e===null&&Uf(n.stateNode.containerInfo),Ke(n),null;case 10:return Yi(n.type),Ke(n),null;case 19:if(st(sn),r=n.memoizedState,r===null)return Ke(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)fo(r,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=gl(e),f!==null){for(n.flags|=128,fo(r,!1),e=f.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)_p(a,e),a=a.sibling;return yt(sn,sn.current&1|2),Te&&Wi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&b()>Pl&&(n.flags|=128,c=!0,fo(r,!1),n.lanes=4194304)}else{if(!c)if(e=gl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),fo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Te)return Ke(n),null}else 2*b()-r.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,c=!0,fo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=b(),e.sibling=null,a=sn.current,yt(sn,c?a&1|2:a&1),Te&&Wi(n,r.treeForkCount),e):(Ke(n),null);case 22:case 23:return Jn(n),Uu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&st(us),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(cn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Mv(e,n){switch(xu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yi(cn),Ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return st(sn),null;case 4:return Ft(),null;case 10:return Yi(n.type),null;case 22:case 23:return Jn(n),Uu(),e!==null&&st(us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yi(cn),null;case 25:return null;default:return null}}function Wm(e,n){switch(xu(n),n.tag){case 3:Yi(cn),Ft();break;case 26:case 27:case 5:ce(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:st(sn);break;case 10:Yi(n.type);break;case 22:case 23:Jn(n),Uu(),e!==null&&st(us);break;case 24:Yi(cn)}}function ho(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(E){Be(n,n.return,E)}}function wa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var x=r.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var z=a,Q=E;try{Q()}catch(ft){Be(c,z,ft)}}}r=r.next}while(r!==f)}}catch(ft){Be(n,n.return,ft)}}function qm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{zp(n,a)}catch(r){Be(e,e.return,r)}}}function Ym(e,n,a){a.props=ms(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Be(e,n,r)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Be(e,n,c)}}function Ui(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Be(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(e,n,c)}else a.current=null}function jm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Be(e,e.return,c)}}function uf(e,n,a){try{var r=e.stateNode;kv(r,e.type,a,n),r[pn]=n}catch(c){Be(e,e.return,c)}}function Zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi));else if(r!==4&&(r===27&&Ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(hf(e,n,a),e=e.sibling;e!==null;)hf(e,n,a),e=e.sibling}function Ul(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,n,a),e=e.sibling;e!==null;)Ul(e,n,a),e=e.sibling}function Km(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,r,a),n[ln]=e,n[pn]=a}catch(f){Be(e,e.return,f)}}var Ji=!1,hn=!1,df=!1,Qm=typeof WeakSet=="function"?WeakSet:Set,bn=null;function bv(e,n){if(e=e.containerInfo,Of=Jl,e=cp(e),su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,z=-1,Q=0,ft=0,mt=e,tt=null;e:for(;;){for(var rt;mt!==a||c!==0&&mt.nodeType!==3||(E=x+c),mt!==f||r!==0&&mt.nodeType!==3||(z=x+r),mt.nodeType===3&&(x+=mt.nodeValue.length),(rt=mt.firstChild)!==null;)tt=mt,mt=rt;for(;;){if(mt===e)break e;if(tt===a&&++Q===c&&(E=x),tt===f&&++ft===r&&(z=x),(rt=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=rt}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:e,selectionRange:a},Jl=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var It=ms(a.type,c);e=r.getSnapshotBeforeUpdate(It,f),r.__reactInternalSnapshotBeforeUpdate=e}catch($t){Be(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function Jm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),r&4&&ho(5,a);break;case 1:if(ta(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Be(a,a.return,x)}else{var c=ms(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}r&64&&qm(a),r&512&&po(a,a.return);break;case 3:if(ta(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zp(e,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&r&4&&Km(a);case 26:case 5:ta(e,a),n===null&&r&4&&jm(a),r&512&&po(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),r&4&&e0(e,a);break;case 13:ta(e,a),r&4&&n0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lv.bind(null,a),Jv(e,a))));break;case 22:if(r=a.memoizedState!==null||Ji,!r){n=n!==null&&n.memoizedState!==null||hn,c=Ji;var f=hn;Ji=r,(hn=n)&&!f?ea(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),Ji=c,hn=f}break;case 30:break;default:ta(e,a)}}function $m(e){var n=e.alternate;n!==null&&(e.alternate=null,$m(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Gr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Fn=!1;function $i(e,n,a){for(a=a.child;a!==null;)t0(e,n,a),a=a.sibling}function t0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:hn||Ui(a,n),$i(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ui(a,n);var r=Qe,c=Fn;Ba(a.type)&&(Qe=a.stateNode,Fn=!1),$i(e,n,a),bo(a.stateNode),Qe=r,Fn=c;break;case 5:hn||Ui(a,n);case 6:if(r=Qe,c=Fn,Qe=null,$i(e,n,a),Qe=r,Fn=c,Qe!==null)if(Fn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Qe!==null&&(Fn?(e=Qe,q0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),lr(e)):q0(Qe,a.stateNode));break;case 4:r=Qe,c=Fn,Qe=a.stateNode.containerInfo,Fn=!0,$i(e,n,a),Qe=r,Fn=c;break;case 0:case 11:case 14:case 15:wa(2,a,n),hn||wa(4,a,n),$i(e,n,a);break;case 1:hn||(Ui(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Ym(a,n,r)),$i(e,n,a);break;case 21:$i(e,n,a);break;case 22:hn=(r=hn)||a.memoizedState!==null,$i(e,n,a),hn=r;break;default:$i(e,n,a)}}function e0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{lr(e)}catch(a){Be(n,n.return,a)}}}function n0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{lr(e)}catch(a){Be(n,n.return,a)}}function Ev(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Qm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Qm),n;default:throw Error(s(435,e.tag))}}function Ll(e,n){var a=Ev(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Nv.bind(null,e,r);r.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(Ba(E.type)){Qe=E.stateNode,Fn=!1;break t}break;case 5:Qe=E.stateNode,Fn=!1;break t;case 3:case 4:Qe=E.stateNode.containerInfo,Fn=!0;break t}E=E.return}if(Qe===null)throw Error(s(160));t0(f,x,c),Qe=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)i0(n,e),n=n.sibling}var vi=null;function i0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),r&4&&(wa(3,e,e.return),ho(3,e),wa(5,e,e.return));break;case 1:Hn(n,e),Gn(e),r&512&&(hn||a===null||Ui(a,a.return)),r&64&&Ji&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=vi;if(Hn(n,e),Gn(e),r&512&&(hn||a===null||Ui(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[es]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),wn(f,r,a),f[ln]=e,J(f),r=f;break t;case"link":var x=ix("link","href",c).get(r+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(r),wn(f,r,a),c.head.appendChild(f);break;case"meta":if(x=ix("meta","content",c).get(r+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(r),wn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=e,J(f),r=f}e.stateNode=r}else ax(c,e.type,e.stateNode);else e.stateNode=nx(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ax(c,e.type,e.stateNode):nx(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),r&512&&(hn||a===null||Ui(a,a.return)),a!==null&&r&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),r&512&&(hn||a===null||Ui(a,a.return)),e.flags&32){c=e.stateNode;try{Ci(c,"")}catch(It){Be(e,e.return,It)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,uf(e,c,a!==null?a.memoizedProps:c)),r&1024&&(df=!0);break;case 6:if(Hn(n,e),Gn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(It){Be(e,e.return,It)}}break;case 3:if(jl=null,c=vi,vi=ql(n.containerInfo),Hn(n,e),vi=c,Gn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{lr(n.containerInfo)}catch(It){Be(e,e.return,It)}df&&(df=!1,a0(e));break;case 4:r=vi,vi=ql(e.stateNode.containerInfo),Hn(n,e),Gn(e),vi=r;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=b()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,Q=Ji,ft=hn;if(Ji=Q||c,hn=ft||z,Hn(n,e),hn=ft,Ji=Q,Gn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Ji||hn||xs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=z.stateNode;var mt=z.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;E.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(It){Be(z,z.return,It)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(It){Be(z,z.return,It)}}}else if(n.tag===18){if(a===null){z=n;try{var rt=z.stateNode;c?Y0(rt,!0):Y0(z.stateNode,!1)}catch(It){Be(z,z.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ll(e,a))));break;case 19:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Zm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ff(e);Ul(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ci(x,""),a.flags&=-33);var E=ff(e);Ul(e,E,x);break;case 3:case 4:var z=a.stateNode.containerInfo,Q=ff(e);hf(e,Q,z);break;default:throw Error(s(161))}}catch(ft){Be(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function a0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;a0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Jm(e,n.alternate,n),n=n.sibling}function xs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),xs(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ym(n,n.return,a),xs(n);break;case 27:bo(n.stateNode);case 26:case 5:Ui(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}e=e.sibling}}function ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ea(c,f,a),ho(4,f);break;case 1:if(ea(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Be(r,r.return,Q)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Pp(z[c],E)}catch(Q){Be(r,r.return,Q)}}a&&x&64&&qm(f),po(f,f.return);break;case 27:Km(f);case 26:case 5:ea(c,f,a),a&&r===null&&x&4&&jm(f),po(f,f.return);break;case 12:ea(c,f,a);break;case 31:ea(c,f,a),a&&x&4&&e0(c,f);break;case 13:ea(c,f,a),a&&x&4&&n0(c,f);break;case 22:f.memoizedState===null&&ea(c,f,a),po(f,f.return);break;case 30:break;default:ea(c,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$r(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e))}function Si(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)s0(e,n,a,r),n=n.sibling}function s0(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,r),c&2048&&ho(9,n);break;case 1:Si(e,n,a,r);break;case 3:Si(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e)));break;case 12:if(c&2048){Si(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Be(n,n.return,z)}}else Si(e,n,a,r);break;case 31:Si(e,n,a,r);break;case 13:Si(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Si(e,n,a,r):mo(e,n):f._visibility&2?Si(e,n,a,r):(f._visibility|=2,Qs(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&pf(x,n);break;case 24:Si(e,n,a,r),c&2048&&mf(n.alternate,n);break;default:Si(e,n,a,r)}}function Qs(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,E=a,z=r,Q=x.flags;switch(x.tag){case 0:case 11:case 15:Qs(f,x,E,z,c),ho(8,x);break;case 23:break;case 22:var ft=x.stateNode;x.memoizedState!==null?ft._visibility&2?Qs(f,x,E,z,c):mo(f,x):(ft._visibility|=2,Qs(f,x,E,z,c)),c&&Q&2048&&pf(x.alternate,x);break;case 24:Qs(f,x,E,z,c),c&&Q&2048&&mf(x.alternate,x);break;default:Qs(f,x,E,z,c)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:mo(a,r),c&2048&&pf(r.alternate,r);break;case 24:mo(a,r),c&2048&&mf(r.alternate,r);break;default:mo(a,r)}n=n.sibling}}var xo=8192;function Js(e,n,a){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)r0(e,n,a),e=e.sibling}function r0(e,n,a){switch(e.tag){case 26:Js(e,n,a),e.flags&xo&&e.memoizedState!==null&&uS(a,vi,e.memoizedState,e.memoizedProps);break;case 5:Js(e,n,a);break;case 3:case 4:var r=vi;vi=ql(e.stateNode.containerInfo),Js(e,n,a),vi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=xo,xo=16777216,Js(e,n,a),xo=r):Js(e,n,a));break;default:Js(e,n,a)}}function o0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,c0(r,e)}o0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l0(e),e=e.sibling}function l0(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&wa(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):go(e);break;default:go(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,c0(r,e)}o0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function c0(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$r(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else t:for(a=e;bn!==null;){r=bn;var c=r.sibling,f=r.return;if($m(r),r===a){bn=null;break t}if(c!==null){c.return=f,bn=c;break t}bn=f}}}var Tv={getCacheForType:function(e){var n=Cn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(cn).controller.signal}},Av=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,_e=null,ye=0,ze=0,$n=null,Ua=!1,$s=!1,xf=!1,na=0,tn=0,La=0,gs=0,gf=0,ti=0,tr=0,_o=null,Vn=null,_f=!1,Ol=0,u0=0,Pl=1/0,zl=null,Na=null,xn=0,Oa=null,er=null,ia=0,vf=0,Sf=null,f0=null,vo=0,yf=null;function ei(){return(Ne&2)!==0&&ye!==0?ye&-ye:P.T!==null?Rf():Fr()}function h0(){if(ti===0)if((ye&536870912)===0||Te){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function Xn(e,n,a){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(nr(e,0),Pa(e,ye,ti,!1)),Un(e,a),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(gs|=a),tn===4&&Pa(e,ye,ti,!1)),Li(e))}function d0(e,n,a){if((Ne&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||zt(e,n),c=r?Dv(e,n):bf(e,n,!0),f=r;do{if(c===0){$s&&!r&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Rv(a)){c=bf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=e;c=_o;var z=E.current.memoizedState.isDehydrated;if(z&&(nr(E,x).flags|=256),x=bf(E,x,!1),x!==2){if(xf&&!z){E.errorRecoveryDisabledLanes|=f,gs|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){nr(e,0),Pa(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Pa(r,n,ti,!Ua);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ol+300-b(),10<c)){if(Pa(r,n,ti,!Ua),xt(r,0,!0)!==0)break t;ia=n,r.timeoutHandle=k0(p0.bind(null,r,a,Vn,zl,_f,n,ti,gs,tr,Ua,f,"Throttled",-0,0),c);break t}p0(r,a,Vn,zl,_f,n,ti,gs,tr,Ua,f,null,-0,0)}}break}while(!0);Li(e)}function p0(e,n,a,r,c,f,x,E,z,Q,ft,mt,tt,rt){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},r0(n,f,mt);var It=(f&62914560)===f?Ol-b():(f&4194048)===f?u0-b():0;if(It=fS(mt,It),It!==null){ia=f,e.cancelPendingCommit=It(M0.bind(null,e,n,f,a,r,c,x,E,z,ft,mt,null,tt,rt)),Pa(e,f,x,!Q);return}}M0(e,n,f,a,r,c,x,E,z)}function Rv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,r){n&=~gf,n&=~gs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Gt(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&jo(e,a,n)}function Bl(){return(Ne&6)===0?(So(0),!1):!0}function Mf(){if(_e!==null){if(ze===0)var e=_e.return;else e=_e,qi=ls=null,Bu(e),qs=null,eo=0,e=_e;for(;e!==null;)Wm(e.alternate,e),e=e.return;_e=null}}function nr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Yv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,Mf(),qe=e,_e=a=ki(e.current,null),ye=n,ze=0,$n=null,Ua=!1,$s=zt(e,n),xf=!1,tr=ti=gf=gs=La=tn=0,Vn=_o=null,_f=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Gt(r),f=1<<c;n|=e[c],r&=~f}return na=n,al(),a}function m0(e,n){le=null,P.H=co,n===Ws||n===hl?(n=Up(),ze=3):n===Tu?(n=Up(),ze=4):ze=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,_e===null&&(tn=1,Al(e,oi(n,e.current)))}function x0(){var e=Qn.current;return e===null?!0:(ye&4194048)===ye?fi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===fi:!1}function g0(){var e=P.H;return P.H=co,e===null?co:e}function _0(){var e=P.A;return P.A=Tv,e}function Il(){tn=4,Ua||(ye&4194048)!==ye&&Qn.current!==null||($s=!0),(La&134217727)===0&&(gs&134217727)===0||qe===null||Pa(qe,ye,ti,!1)}function bf(e,n,a){var r=Ne;Ne|=2;var c=g0(),f=_0();(qe!==e||ye!==n)&&(zl=null,nr(e,n)),n=!1;var x=tn;t:do try{if(ze!==0&&_e!==null){var E=_e,z=$n;switch(ze){case 8:Mf(),x=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var Q=ze;if(ze=0,$n=null,ir(e,E,z,Q),a&&$s){x=0;break t}break;default:Q=ze,ze=0,$n=null,ir(e,E,z,Q)}}Cv(),x=tn;break}catch(ft){m0(e,ft)}while(!0);return n&&e.shellSuspendCounter++,qi=ls=null,Ne=r,P.H=c,P.A=f,_e===null&&(qe=null,ye=0,al()),x}function Cv(){for(;_e!==null;)v0(_e)}function Dv(e,n){var a=Ne;Ne|=2;var r=g0(),c=_0();qe!==e||ye!==n?(zl=null,Pl=b()+500,nr(e,n)):$s=zt(e,n);t:do try{if(ze!==0&&_e!==null){n=_e;var f=$n;e:switch(ze){case 1:ze=0,$n=null,ir(e,n,f,1);break;case 2:case 9:if(Dp(f)){ze=0,$n=null,S0(n);break}n=function(){ze!==2&&ze!==9||qe!==e||(ze=7),Li(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Dp(f)?(ze=0,$n=null,S0(n)):(ze=0,$n=null,ir(e,n,f,7));break;case 5:var x=null;switch(_e.tag){case 26:x=_e.memoizedState;case 5:case 27:var E=_e;if(x?sx(x):E.stateNode.complete){ze=0,$n=null;var z=E.sibling;if(z!==null)_e=z;else{var Q=E.return;Q!==null?(_e=Q,Fl(Q)):_e=null}break e}}ze=0,$n=null,ir(e,n,f,5);break;case 6:ze=0,$n=null,ir(e,n,f,6);break;case 8:Mf(),tn=6;break t;default:throw Error(s(462))}}wv();break}catch(ft){m0(e,ft)}while(!0);return qi=ls=null,P.H=r,P.A=c,Ne=a,_e!==null?0:(qe=null,ye=0,al(),tn)}function wv(){for(;_e!==null&&!ae();)v0(_e)}function v0(e){var n=Xm(e.alternate,e,na);e.memoizedProps=e.pendingProps,n===null?Fl(e):_e=n}function S0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Bm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Bm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Bu(n);default:Wm(a,n),n=_e=_p(n,na),n=Xm(a,n,na)}e.memoizedProps=e.pendingProps,n===null?Fl(e):_e=n}function ir(e,n,a,r){qi=ls=null,Bu(n),qs=null,eo=0;var c=n.return;try{if(_v(e,c,n,a,ye)){tn=1,Al(e,oi(a,e.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;tn=1,Al(e,oi(a,e.current)),_e=null;return}n.flags&32768?(Te||r===1?e=!0:$s||(ye&536870912)!==0?e=!1:(Ua=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),y0(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){y0(n,Ua);return}e=n.return;var a=yv(n.alternate,n,na);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);tn===0&&(tn=5)}function y0(e,n){do{var a=Mv(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);tn=6,_e=null}function M0(e,n,a,r,c,f,x,E,z){e.cancelPendingCommit=null;do Hl();while(xn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=uu,Yn(e,a,f,x,E,z),e===qe&&(_e=qe=null,ye=0),er=n,Oa=e,ia=a,vf=f,Sf=c,f0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ov(lt,function(){return R0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,c=j.p,j.p=2,x=Ne,Ne|=4;try{bv(e,n,a)}finally{Ne=x,j.p=c,P.T=r}}xn=1,b0(),E0(),T0()}}function b0(){if(xn===1){xn=0;var e=Oa,n=er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=j.p;j.p=2;var c=Ne;Ne|=4;try{i0(n,e);var f=Pf,x=cp(e.containerInfo),E=f.focusedElem,z=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&lp(E.ownerDocument.documentElement,E)){if(z!==null&&su(E)){var Q=z.start,ft=z.end;if(ft===void 0&&(ft=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ft,E.value.length);else{var mt=E.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var rt=tt.getSelection(),It=E.textContent.length,$t=Math.min(z.start,It),Ge=z.end===void 0?$t:Math.min(z.end,It);!rt.extend&&$t>Ge&&(x=Ge,Ge=$t,$t=x);var W=op(E,$t),G=op(E,Ge);if(W&&G&&(rt.rangeCount!==1||rt.anchorNode!==W.node||rt.anchorOffset!==W.offset||rt.focusNode!==G.node||rt.focusOffset!==G.offset)){var Z=mt.createRange();Z.setStart(W.node,W.offset),rt.removeAllRanges(),$t>Ge?(rt.addRange(Z),rt.extend(G.node,G.offset)):(Z.setEnd(G.node,G.offset),rt.addRange(Z))}}}}for(mt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&mt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var ht=mt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Jl=!!Of,Pf=Of=null}finally{Ne=c,j.p=r,P.T=a}}e.current=n,xn=2}}function E0(){if(xn===2){xn=0;var e=Oa,n=er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=j.p;j.p=2;var c=Ne;Ne|=4;try{Jm(e,n.alternate,n)}finally{Ne=c,j.p=r,P.T=a}}xn=3}}function T0(){if(xn===4||xn===3){xn=0,w();var e=Oa,n=er,a=ia,r=f0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,er=Oa=null,A0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Na=null),ts(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,c=j.p,j.p=2,P.T=null;try{for(var f=e.onRecoverableError,x=0;x<r.length;x++){var E=r[x];f(E.value,{componentStack:E.stack})}}finally{P.T=n,j.p=c}}(ia&3)!==0&&Hl(),Li(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===yf?vo++:(vo=0,yf=e):vo=0,So(0)}}function A0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$r(n)))}function Hl(){return b0(),E0(),T0(),R0()}function R0(){if(xn!==5)return!1;var e=Oa,n=vf;vf=0;var a=ts(ia),r=P.T,c=j.p;try{j.p=32>a?32:a,P.T=null,a=Sf,Sf=null;var f=Oa,x=ia;if(xn=0,er=Oa=null,ia=0,(Ne&6)!==0)throw Error(s(331));var E=Ne;if(Ne|=4,l0(f.current),s0(f,f.current,x,a),Ne=E,So(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(St,f)}catch{}return!0}finally{j.p=c,P.T=r,A0(e,n)}}function C0(e,n,a){n=oi(a,n),n=Ju(e.stateNode,n,2),e=Ra(e,n,2),e!==null&&(Un(e,2),Li(e))}function Be(e,n,a){if(e.tag===3)C0(e,e,a);else for(;n!==null;){if(n.tag===3){C0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Na===null||!Na.has(r))){e=oi(a,e),a=Dm(2),r=Ra(n,a,2),r!==null&&(wm(a,r,n,e),Un(r,2),Li(r));break}}n=n.return}}function Ef(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Av;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(xf=!0,c.add(a),e=Uv.bind(null,e,n,a),n.then(e,e))}function Uv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ye&a)===a&&(tn===4||tn===3&&(ye&62914560)===ye&&300>b()-Ol?(Ne&2)===0&&nr(e,0):gf|=a,tr===ye&&(tr=0)),Li(e)}function D0(e,n){n===0&&(n=Ie()),e=ss(e,n),e!==null&&(Un(e,n),Li(e))}function Lv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),D0(e,a)}function Nv(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),D0(e,a)}function Ov(e,n){return ke(e,n)}var Gl=null,ar=null,Tf=!1,Vl=!1,Af=!1,za=0;function Li(e){e!==ar&&e.next===null&&(ar===null?Gl=ar=e:ar=ar.next=e),Vl=!0,Tf||(Tf=!0,zv())}function So(e,n){if(!Af&&Vl){Af=!0;do for(var a=!1,r=Gl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Gt(42|e)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,N0(r,f))}else f=ye,f=xt(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||zt(r,f)||(a=!0,N0(r,f));r=r.next}while(a);Af=!1}}function Pv(){w0()}function w0(){Vl=Tf=!1;var e=0;za!==0&&qv()&&(e=za);for(var n=b(),a=null,r=Gl;r!==null;){var c=r.next,f=U0(r,n);f===0?(r.next=null,a===null?Gl=c:a.next=c,c===null&&(ar=a)):(a=r,(e!==0||(f&3)!==0)&&(Vl=!0)),r=c}xn!==0&&xn!==5||So(e),za!==0&&(za=0)}function U0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Gt(f),E=1<<x,z=c[x];z===-1?((E&a)===0||(E&r)!==0)&&(c[x]=ie(E,n)):z<=n&&(e.expiredLanes|=E),f&=~E}if(n=qe,a=ye,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Yt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Yt(r),ts(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Ut;break;default:a=lt}return r=L0.bind(null,e),a=ke(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Yt(r),e.callbackPriority=2,e.callbackNode=null,2}function L0(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hl()&&e.callbackNode!==a)return null;var r=ye;return r=xt(e,e===qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(d0(e,r,n),U0(e,b()),e.callbackNode!=null&&e.callbackNode===a?L0.bind(null,e):null)}function N0(e,n){if(Hl())return null;d0(e,n,!0)}function zv(){jv(function(){(Ne&6)!==0?ke(pt,Pv):w0()})}function Rf(){if(za===0){var e=Xs;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),za=e}return za}function O0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ko(""+e)}function P0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Bv(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=O0((c[pn]||null).action),x=r.submitter;x&&(n=(n=x[pn]||null)?O0(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new tl("action","action",null,r,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(za!==0){var z=x?P0(c,x):new FormData(c);qu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=x?P0(c,x):new FormData(c),qu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var Cf=0;Cf<cu.length;Cf++){var Df=cu[Cf],Iv=Df.toLowerCase(),Fv=Df[0].toUpperCase()+Df.slice(1);_i(Iv,"on"+Fv)}_i(hp,"onAnimationEnd"),_i(dp,"onAnimationIteration"),_i(pp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(ev,"onTransitionRun"),_i(nv,"onTransitionStart"),_i(iv,"onTransitionCancel"),_i(mp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function z0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var E=r[x],z=E.instance,Q=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ft){il(ft)}c.currentTarget=null,f=z}else for(x=0;x<r.length;x++){if(E=r[x],z=E.instance,Q=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ft){il(ft)}c.currentTarget=null,f=z}}}}function ve(e,n){var a=n[Us];a===void 0&&(a=n[Us]=new Set);var r=e+"__bubble";a.has(r)||(B0(n,e,2,!1),a.add(r))}function wf(e,n,a){var r=0;n&&(r|=4),B0(a,e,r,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[Xl]){e[Xl]=!0,q.forEach(function(a){a!=="selectionchange"&&(Hv.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,wf("selectionchange",!1,n))}}function B0(e,n,a,r){switch(hx(n)){case 2:var c=pS;break;case 8:c=mS;break;default:c=qf}a=c.bind(null,n,a,e),c=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Lf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var E=r.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=r.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=_a(E),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){r=f=x;continue t}E=E.parentNode}}r=r.return}Vd(function(){var Q=f,ft=jc(a),mt=[];t:{var tt=xp.get(e);if(tt!==void 0){var rt=tl,It=e;switch(e){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":rt=N_;break;case"focusin":It="focus",rt=tu;break;case"focusout":It="blur",rt=tu;break;case"beforeblur":case"afterblur":rt=tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=z_;break;case hp:case dp:case pp:rt=E_;break;case mp:rt=I_;break;case"scroll":case"scrollend":rt=v_;break;case"wheel":rt=H_;break;case"copy":case"cut":case"paste":rt=A_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Yd;break;case"toggle":case"beforetoggle":rt=V_}var $t=(n&4)!==0,Ge=!$t&&(e==="scroll"||e==="scrollend"),W=$t?tt!==null?tt+"Capture":null:tt;$t=[];for(var G=Q,Z;G!==null;){var ht=G;if(Z=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Z===null||W===null||(ht=Vr(G,W),ht!=null&&$t.push(Mo(G,ht,Z))),Ge)break;G=G.return}0<$t.length&&(tt=new rt(tt,It,null,a,ft),mt.push({event:tt,listeners:$t}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",tt&&a!==Yc&&(It=a.relatedTarget||a.fromElement)&&(_a(It)||It[Fi]))break t;if((rt||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,rt?(It=a.relatedTarget||a.toElement,rt=Q,It=It?_a(It):null,It!==null&&(Ge=u(It),$t=It.tag,It!==Ge||$t!==5&&$t!==27&&$t!==6)&&(It=null)):(rt=null,It=Q),rt!==It)){if($t=Wd,ht="onMouseLeave",W="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($t=Yd,ht="onPointerLeave",W="onPointerEnter",G="pointer"),Ge=rt==null?tt:k(rt),Z=It==null?tt:k(It),tt=new $t(ht,G+"leave",rt,a,ft),tt.target=Ge,tt.relatedTarget=Z,ht=null,_a(ft)===Q&&($t=new $t(W,G+"enter",It,a,ft),$t.target=Z,$t.relatedTarget=Ge,ht=$t),Ge=ht,rt&&It)e:{for($t=Gv,W=rt,G=It,Z=0,ht=W;ht;ht=$t(ht))Z++;ht=0;for(var Zt=G;Zt;Zt=$t(Zt))ht++;for(;0<Z-ht;)W=$t(W),Z--;for(;0<ht-Z;)G=$t(G),ht--;for(;Z--;){if(W===G||G!==null&&W===G.alternate){$t=W;break e}W=$t(W),G=$t(G)}$t=null}else $t=null;rt!==null&&I0(mt,tt,rt,$t,!1),It!==null&&Ge!==null&&I0(mt,Ge,It,$t,!0)}}t:{if(tt=Q?k(Q):window,rt=tt.nodeName&&tt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&tt.type==="file")var we=ep;else if($d(tt))if(np)we=J_;else{we=K_;var Vt=Z_}else rt=tt.nodeName,!rt||rt.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?Q&&qc(Q.elementType)&&(we=ep):we=Q_;if(we&&(we=we(e,Q))){tp(mt,we,a,ft);break t}Vt&&Vt(e,tt,Q),e==="focusout"&&Q&&tt.type==="number"&&Q.memoizedProps.value!=null&&yn(tt,"number",tt.value)}switch(Vt=Q?k(Q):window,e){case"focusin":($d(Vt)||Vt.contentEditable==="true")&&(Ps=Vt,ru=Q,Kr=null);break;case"focusout":Kr=ru=Ps=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,up(mt,a,ft);break;case"selectionchange":if(tv)break;case"keydown":case"keyup":up(mt,a,ft)}var fe;if(nu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Os?Qd(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(jd&&a.locale!=="ko"&&(Os||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Os&&(fe=Xd()):(Sa=ft,Qc="value"in Sa?Sa.value:Sa.textContent,Os=!0)),Vt=kl(Q,Me),0<Vt.length&&(Me=new qd(Me,e,null,a,ft),mt.push({event:Me,listeners:Vt}),fe?Me.data=fe:(fe=Jd(a),fe!==null&&(Me.data=fe)))),(fe=k_?W_(e,a):q_(e,a))&&(Me=kl(Q,"onBeforeInput"),0<Me.length&&(Vt=new qd("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Vt,listeners:Me}),Vt.data=fe)),Bv(mt,e,Q,a,ft)}z0(mt,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Vr(e,a),c!=null&&r.unshift(Mo(e,c,f)),c=Vr(e,n),c!=null&&r.push(Mo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function Gv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function I0(e,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var E=a,z=E.alternate,Q=E.stateNode;if(E=E.tag,z!==null&&z===r)break;E!==5&&E!==26&&E!==27||Q===null||(z=Q,c?(Q=Vr(a,f),Q!=null&&x.unshift(Mo(a,Q,z))):c||(Q=Vr(a,f),Q!=null&&x.push(Mo(a,Q,z)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var Vv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function F0(e){return(typeof e=="string"?e:""+e).replace(Vv,`
`).replace(Xv,"")}function H0(e,n){return n=F0(n),F0(e)===n}function He(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ci(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ci(e,""+r);break;case"className":Ae(e,"class",r);break;case"tabIndex":Ae(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(e,a,r);break;case"style":Hd(e,r,f);break;case"data":if(n!=="object"){Ae(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Ko(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",c.name,c,null),He(e,n,"formEncType",c.formEncType,c,null),He(e,n,"formMethod",c.formMethod,c,null),He(e,n,"formTarget",c.formTarget,c,null)):(He(e,n,"encType",c.encType,c,null),He(e,n,"method",c.method,c,null),He(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Ko(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Vi);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Ko(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ve("beforetoggle",e),ve("toggle",e),ue(e,"popover",r);break;case"xlinkActuate":De(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":De(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":De(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":De(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":De(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":De(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":De(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":De(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":De(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ue(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=g_.get(a)||a,ue(e,a,r))}}function Nf(e,n,a,r,c,f){switch(a){case"style":Hd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ci(e,r):(typeof r=="number"||typeof r=="bigint")&&Ci(e,""+r);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ue(e,a,r)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,f,x,a,null)}}c&&He(e,n,"srcSet",a.srcSet,a,null),r&&He(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var E=f=x=c=null,z=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":c=ft;break;case"type":x=ft;break;case"checked":z=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":E=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:He(e,n,r,ft,a,null)}}je(e,f,E,z,Q,x,c,!1);return;case"select":ve("invalid",e),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":r=E;default:He(e,n,c,E,a,null)}n=f,a=x,e.multiple=!!r,n!=null?mn(e,!!r,n,!1):a!=null&&mn(e,!!r,a,!0);return;case"textarea":ve("invalid",e),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:He(e,n,x,E,a,null)}An(e,r,c,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(r=a[z],r!=null)&&(z==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":He(e,n,z,r,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(r=0;r<yo.length;r++)ve(yo[r],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,Q,r,a,null)}return;default:if(qc(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Nf(e,n,ft,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&He(e,n,E,r,a,null))}function kv(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,z=null,Q=null,ft=null;for(rt in a){var mt=a[rt];if(a.hasOwnProperty(rt)&&mt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=mt;default:r.hasOwnProperty(rt)||He(e,n,rt,null,r,mt)}}for(var tt in r){var rt=r[tt];if(mt=a[tt],r.hasOwnProperty(tt)&&(rt!=null||mt!=null))switch(tt){case"type":f=rt;break;case"name":c=rt;break;case"checked":Q=rt;break;case"defaultChecked":ft=rt;break;case"value":x=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==mt&&He(e,n,tt,rt,r,mt)}}Hi(e,x,E,z,Q,ft,f,c);return;case"select":rt=x=E=tt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":rt=z;default:r.hasOwnProperty(f)||He(e,n,f,null,r,z)}for(c in r)if(f=r[c],z=a[c],r.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":tt=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==z&&He(e,n,c,f,r,z)}n=E,a=x,r=rt,tt!=null?mn(e,!!a,tt,!1):!!r!=!!a&&(n!=null?mn(e,!!a,n,!0):mn(e,!!a,a?[]:"",!1));return;case"textarea":rt=tt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:He(e,n,E,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":tt=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&He(e,n,x,c,r,f)}Mn(e,tt,rt);return;case"option":for(var It in a)tt=a[It],a.hasOwnProperty(It)&&tt!=null&&!r.hasOwnProperty(It)&&(It==="selected"?e.selected=!1:He(e,n,It,null,r,tt));for(z in r)tt=r[z],rt=a[z],r.hasOwnProperty(z)&&tt!==rt&&(tt!=null||rt!=null)&&(z==="selected"?e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":He(e,n,z,tt,r,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)tt=a[$t],a.hasOwnProperty($t)&&tt!=null&&!r.hasOwnProperty($t)&&He(e,n,$t,null,r,tt);for(Q in r)if(tt=r[Q],rt=a[Q],r.hasOwnProperty(Q)&&tt!==rt&&(tt!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:He(e,n,Q,tt,r,rt)}return;default:if(qc(n)){for(var Ge in a)tt=a[Ge],a.hasOwnProperty(Ge)&&tt!==void 0&&!r.hasOwnProperty(Ge)&&Nf(e,n,Ge,void 0,r,tt);for(ft in r)tt=r[ft],rt=a[ft],!r.hasOwnProperty(ft)||tt===rt||tt===void 0&&rt===void 0||Nf(e,n,ft,tt,r,rt);return}}for(var W in a)tt=a[W],a.hasOwnProperty(W)&&tt!=null&&!r.hasOwnProperty(W)&&He(e,n,W,null,r,tt);for(mt in r)tt=r[mt],rt=a[mt],!r.hasOwnProperty(mt)||tt===rt||tt==null&&rt==null||He(e,n,mt,tt,r,rt)}function G0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&G0(x)){for(x=0,E=c.responseEnd,r+=1;r<a.length;r++){var z=a[r],Q=z.startTime;if(Q>E)break;var ft=z.transferSize,mt=z.initiatorType;ft&&G0(mt)&&(z=z.responseEnd,x+=ft*(z<E?1:(E-Q)/(z-Q)))}if(--r,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Of=null,Pf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function V0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function qv(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,W0=typeof Promise=="function"?Promise:void 0,jv=typeof queueMicrotask=="function"?queueMicrotask:typeof W0<"u"?function(e){return W0.resolve(null).then(e).catch(Zv)}:k0;function Zv(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function q0(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),lr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[es]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&bo(e.ownerDocument.body);a=c}while(a);lr(n)}function Y0(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),Gr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Kv(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[es])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function Qv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function j0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jv(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Gf=null;function Z0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function K0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Q0(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gr(e)}var di=new Map,J0=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=j.d;j.d={f:$v,r:tS,D:eS,C:nS,L:iS,m:aS,X:rS,S:sS,M:oS};function $v(){var e=aa.f(),n=Bl();return e||n}function tS(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?mm(n):aa.r(e)}var sr=typeof document>"u"?null:document;function $0(e,n,a){var r=sr;if(r&&typeof n=="string"&&n){var c=Ye(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),J0.has(c)||(J0.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),wn(n,"link",e),J(n),r.head.appendChild(n)))}}function eS(e){aa.D(e),$0("dns-prefetch",e,null)}function nS(e,n){aa.C(e,n),$0("preconnect",e,n)}function iS(e,n,a){aa.L(e,n,a);var r=sr;if(r&&e&&n){var c='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ye(a.imageSizes)+'"]')):c+='[href="'+Ye(e)+'"]';var f=c;switch(n){case"style":f=rr(e);break;case"script":f=or(e)}di.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(To(f))||(n=r.createElement("link"),wn(n,"link",e),J(n),r.head.appendChild(n)))}}function aS(e,n){aa.m(e,n);var a=sr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ye(r)+'"][href="'+Ye(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=or(e)}if(!di.has(f)&&(e=v({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}r=a.createElement("link"),wn(r,"link",e),J(r),a.head.appendChild(r)}}}function sS(e,n,a){aa.S(e,n,a);var r=sr;if(r&&e){var c=at(r).hoistableStyles,f=rr(e);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=r.querySelector(Eo(f)))E.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Vf(e,a);var z=x=r.createElement("link");J(z),wn(z,"link",e),z._p=new Promise(function(Q,ft){z.onload=Q,z.onerror=ft}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Yl(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function rS(e,n){aa.X(e,n);var a=sr;if(a&&e){var r=at(a).hoistableScripts,c=or(e),f=r.get(c);f||(f=a.querySelector(To(c)),f||(e=v({src:e,async:!0},n),(n=di.get(c))&&Xf(e,n),f=a.createElement("script"),J(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function oS(e,n){aa.M(e,n);var a=sr;if(a&&e){var r=at(a).hoistableScripts,c=or(e),f=r.get(c);f||(f=a.querySelector(To(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=di.get(c))&&Xf(e,n),f=a.createElement("script"),J(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function tx(e,n,a,r){var c=(c=it.current)?ql(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rr(a.href),a=at(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rr(a.href);var f=at(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(Eo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||lS(c,e,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=at(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function rr(e){return'href="'+Ye(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function ex(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function lS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),wn(n,"link",a),J(n),e.head.appendChild(n))}function or(e){return'[src="'+Ye(e)+'"]'}function To(e){return"script[async]"+e}function nx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(r)return n.instance=r,J(r),r;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),J(r),wn(r,"style",c),Yl(r,a.precedence,e),n.instance=r;case"stylesheet":c=rr(a.href);var f=e.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,J(f),f;r=ex(a),(c=di.get(c))&&Vf(r,c),f=(e.ownerDocument||e).createElement("link"),J(f);var x=f;return x._p=new Promise(function(E,z){x.onload=E,x.onerror=z}),wn(f,"link",r),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=or(a.src),(c=e.querySelector(To(f)))?(n.instance=c,J(c),c):(r=a,(c=di.get(f))&&(r=v({},a),Xf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),J(c),wn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yl(r,a.precedence,e));return n.instance}function Yl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var E=r[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function ix(e,n,a){if(jl===null){var r=new Map,c=jl=new Map;c.set(a,r)}else c=jl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[es]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var E=r.get(x);E?E.push(f):r.set(x,[f])}}return r}function ax(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function cS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function uS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=rr(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,J(f);return}f=n.ownerDocument||n,r=ex(r),(c=di.get(c))&&Vf(r,c),f=f.createElement("link"),J(f);var x=f;x._p=new Promise(function(E,z){x.onload=E,x.onerror=z}),wn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function fS(e,n){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&kf===0&&(kf=62500*Wv());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>kf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(hS,e),Kl=null,Zl.call(e))}function hS(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var r=a.get(null);else{a=new Map,Kl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=Zl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function dS(e,n,a,r,c,f,x,E,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function rx(e,n,a,r,c,f,x,E,z,Q,ft,mt){return e=new dS(e,n,a,x,z,Q,ft,mt,E),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Au(f),e}function ox(e){return e?(e=Is,e):Is}function lx(e,n,a,r,c,f){c=ox(c),r.context===null?r.context=c:r.pendingContext=c,r=Aa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ra(e,r,n),a!==null&&(Xn(a,e,n),io(a,e,n))}function cx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){cx(e,n),(e=e.alternate)&&cx(e,n)}function ux(e){if(e.tag===13||e.tag===31){var n=ss(e,67108864);n!==null&&Xn(n,e,67108864),Wf(e,67108864)}}function fx(e){if(e.tag===13||e.tag===31){var n=ei();n=gi(n);var a=ss(e,n);a!==null&&Xn(a,e,n),Wf(e,n)}}var Jl=!0;function pS(e,n,a,r){var c=P.T;P.T=null;var f=j.p;try{j.p=2,qf(e,n,a,r)}finally{j.p=f,P.T=c}}function mS(e,n,a,r){var c=P.T;P.T=null;var f=j.p;try{j.p=8,qf(e,n,a,r)}finally{j.p=f,P.T=c}}function qf(e,n,a,r){if(Jl){var c=Yf(r);if(c===null)Lf(e,n,r,$l,a),dx(e,r);else if(gS(c,e,n,a,r))r.stopPropagation();else if(dx(e,r),n&4&&-1<xS.indexOf(e)){for(;c!==null;){var f=R(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Mt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var z=1<<31-Gt(x);E.entanglements[1]|=z,x&=~z}Li(f),(Ne&6)===0&&(Pl=b()+500,So(0))}}break;case 31:case 13:E=ss(f,2),E!==null&&Xn(E,f,2),Bl(),Wf(f,2)}if(f=Yf(r),f===null&&Lf(e,n,r,$l,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Lf(e,n,r,null,a)}}function Yf(e){return e=jc(e),jf(e)}var $l=null;function jf(e){if($l=null,e=_a(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function hx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case pt:return 2;case vt:return 8;case lt:case Wt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Zf=!1,Ia=null,Fa=null,Ha=null,Ro=new Map,Co=new Map,Ga=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dx(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function Do(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=R(n),n!==null&&ux(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function gS(e,n,a,r,c){switch(n){case"focusin":return Ia=Do(Ia,e,n,a,r,c),!0;case"dragenter":return Fa=Do(Fa,e,n,a,r,c),!0;case"mouseover":return Ha=Do(Ha,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,Do(Ro.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Co.set(f,Do(Co.get(f)||null,e,n,a,r,c)),!0}return!1}function px(e){var n=_a(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Hr(e.priority,function(){fx(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Hr(e.priority,function(){fx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=R(a),n!==null&&ux(n),e.blockedOn=a,!1;n.shift()}return!0}function mx(e,n,a){tc(e)&&a.delete(n)}function _S(){Zf=!1,Ia!==null&&tc(Ia)&&(Ia=null),Fa!==null&&tc(Fa)&&(Fa=null),Ha!==null&&tc(Ha)&&(Ha=null),Ro.forEach(mx),Co.forEach(mx)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_S)))}var nc=null;function xx(e){nc!==e&&(nc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(jf(r||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,qu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function lr(e){function n(z){return ec(z,e)}Ia!==null&&ec(Ia,e),Fa!==null&&ec(Fa,e),Ha!==null&&ec(Ha,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<Ga.length;a++){var r=Ga[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ga.length&&(a=Ga[0],a.blockedOn===null);)px(a),a.blockedOn===null&&Ga.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[pn]||null;if(typeof f=="function")x||xx(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[pn]||null)E=x.formAction;else if(jf(c)!==null)continue}else E=x.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),xx(a)}}}function gx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Kf(e){this._internalRoot=e}ic.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ei();lx(a,r,e,n,null,null)},ic.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;lx(e.current,2,null,e,null,null),Bl(),n[Fi]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ga.length&&n!==0&&n<Ga[a].priority;a++);Ga.splice(a,0,e),a===0&&px(e)}};var _x=t.version;if(_x!=="19.2.6")throw Error(s(527,_x,"19.2.6"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var vS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{St=ac.inject(vS),bt=ac}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Tm,f=Am,x=Rm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=rx(e,1,!1,null,null,a,r,null,c,f,x,gx),e[Fi]=n.current,Uf(e),new Kf(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Tm,x=Am,E=Rm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=rx(e,1,!0,n,a??null,r,c,z,f,x,E,gx),n.context=ox(null),a=n.current,r=ei(),r=gi(r),c=Aa(r),c.callback=null,Ra(a,c,r),a=r,n.current.lanes=a,Un(n,a),Li(n),e[Fi]=n.current,Uf(e),new ic(n)},Uo.version="19.2.6",Uo}var Cx;function DS(){if(Cx)return $f.exports;Cx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$f.exports=CS(),$f.exports}var wS=DS();const US=["Map","Docks","Racks","Analytics"];function LS(){return ee.jsx("nav",{className:"bottom-nav","aria-label":"Warehouse sections",children:US.map(o=>ee.jsx("button",{className:o==="Map"?"active":"",type:"button",children:o},o))})}const NS=["Shop","Path","Dock","Rack","Office"];function OS({query:o,locations:t,selectedLocation:i,selectedLocationId:s,onQueryChange:l,onSelectLocation:u}){return ee.jsxs("aside",{className:"sidebar",children:[ee.jsx("div",{className:"brand-mark",children:"WH"}),ee.jsxs("label",{className:"search-field",children:[ee.jsx("span",{children:"Search"}),ee.jsx("input",{value:o,onChange:h=>l(h.target.value),placeholder:"Shop, dock, rack...",type:"search"})]}),ee.jsx("div",{className:"filter-list","aria-label":"Location filters",children:NS.map(h=>ee.jsx("button",{type:"button",onClick:()=>l(h),children:h},h))}),ee.jsx("section",{className:"location-list","aria-label":"Locations",children:t.map(h=>ee.jsxs("button",{className:h.id===s?"selected":"",type:"button",onClick:()=>u(h.id),children:[ee.jsx("span",{children:h.name}),ee.jsx("small",{children:h.type})]},h.id))}),ee.jsx("section",{className:"details-panel","aria-live":"polite",children:i?ee.jsxs(ee.Fragment,{children:[ee.jsx("p",{className:"eyebrow",children:i.type}),ee.jsx("h2",{children:i.name}),ee.jsx("p",{children:i.description??"No description available."}),ee.jsxs("dl",{children:[ee.jsxs("div",{children:[ee.jsx("dt",{children:"X"}),ee.jsxs("dd",{children:[i.xMin," - ",i.xMax]})]}),ee.jsxs("div",{children:[ee.jsx("dt",{children:"Y"}),ee.jsxs("dd",{children:[i.yMin," - ",i.yMax]})]}),ee.jsxs("div",{children:[ee.jsx("dt",{children:"Z"}),ee.jsxs("dd",{children:[i.zMin," - ",i.zMax]})]})]})]}):ee.jsx("p",{children:"Select a block to view its details."})})]})}function PS(){return ee.jsxs("header",{className:"top-bar",children:[ee.jsxs("div",{children:[ee.jsx("p",{className:"eyebrow",children:"Live warehouse map"}),ee.jsx("h1",{children:"Warehouse 3D Layout"})]}),ee.jsx("div",{className:"top-bar-meta",children:"Operations View"})]})}const Ad="181",Er={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zS=0,Dx=1,BS=2,Bg=1,Ig=2,fa=3,$a=0,qn=1,ha=2,ma=0,Tr=1,wx=2,Ux=3,Lx=4,IS=5,Es=100,FS=101,HS=102,GS=103,VS=104,XS=200,kS=201,WS=202,qS=203,Ph=204,zh=205,YS=206,jS=207,ZS=208,KS=209,QS=210,JS=211,$S=212,ty=213,ey=214,Bh=0,Ih=1,Fh=2,Rr=3,Hh=4,Gh=5,Vh=6,Xh=7,Fg=0,ny=1,iy=2,Ja=0,ay=1,sy=2,ry=3,oy=4,ly=5,cy=6,uy=7,Hg=300,Cr=301,Dr=302,kh=303,Wh=304,Fc=306,qh=1e3,da=1001,Yh=1002,si=1003,fy=1004,sc=1005,xi=1006,ih=1007,As=1008,zi=1009,Gg=1010,Vg=1011,Go=1012,Rd=1013,Rs=1014,pa=1015,Lr=1016,Cd=1017,Dd=1018,Vo=1020,Xg=35902,kg=35899,Wg=1021,qg=1022,Ti=1023,Xo=1026,ko=1027,Yg=1028,wd=1029,Ud=1030,Ld=1031,Nd=1033,Cc=33776,Dc=33777,wc=33778,Uc=33779,jh=35840,Zh=35841,Kh=35842,Qh=35843,Jh=36196,$h=37492,td=37496,ed=37808,nd=37809,id=37810,ad=37811,sd=37812,rd=37813,od=37814,ld=37815,cd=37816,ud=37817,fd=37818,hd=37819,dd=37820,pd=37821,md=36492,xd=36494,gd=36495,_d=36283,vd=36284,Sd=36285,yd=36286,hy=3200,dy=3201,jg=0,py=1,Ka="",ai="srgb",wr="srgb-linear",Oc="linear",Ve="srgb",cr=7680,Nx=519,my=512,xy=513,gy=514,Zg=515,_y=516,vy=517,Sy=518,yy=519,Ox=35044,Px="300 es",Oi=2e3,Pc=2001;function Kg(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function My(){const o=zc("canvas");return o.style.display="block",o}const zx={};function Bx(...o){const t="THREE."+o.shift();console.log(t,...o)}function se(...o){const t="THREE."+o.shift();console.warn(t,...o)}function en(...o){const t="THREE."+o.shift();console.error(t,...o)}function Wo(...o){const t=o.join(" ");t in zx||(zx[t]=!0,se(...o))}function by(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class ws{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,Md=180/Math.PI;function qo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function Se(o,t,i){return Math.max(t,Math.min(i,o))}function Ey(o,t){return(o%t+t)%t}function ah(o,t,i){return(1-i)*o+i*t}function Lo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ty={DEG2RAD:Lc};class oe{constructor(t=0,i=0){oe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],S=u[h+0],M=u[h+1],T=u[h+2],A=u[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(d>=1){t[i+0]=S,t[i+1]=M,t[i+2]=T,t[i+3]=A;return}if(v!==A||m!==S||p!==M||_!==T){let y=m*S+p*M+_*T+v*A;y<0&&(S=-S,M=-M,T=-T,A=-A,y=-y);let g=1-d;if(y<.9995){const O=Math.acos(y),U=Math.sin(O);g=Math.sin(g*O)/U,d=Math.sin(d*O)/U,m=m*g+S*d,p=p*g+M*d,_=_*g+T*d,v=v*g+A*d}else{m=m*g+S*d,p=p*g+M*d,_=_*g+T*d,v=v*g+A*d;const O=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=O,p*=O,_*=O,v*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[h],S=u[h+1],M=u[h+2],T=u[h+3];return t[i]=d*T+_*v+m*M-p*S,t[i+1]=m*T+_*S+p*v-d*M,t[i+2]=p*T+_*M+d*S-m*v,t[i+3]=_*T-d*v-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(u/2),S=m(s/2),M=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=S*_*v+p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v-S*M*T;break;case"YXZ":this._x=S*_*v+p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v+S*M*T;break;case"ZXY":this._x=S*_*v-p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v-S*M*T;break;case"ZYX":this._x=S*_*v-p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v+S*M*T;break;case"YZX":this._x=S*_*v+p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v-S*M*T;break;case"XZY":this._x=S*_*v-p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v+S*M*T;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],S=s+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-s*p,this._z=u*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ix.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ix.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*_,this.y=s+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return sh.copy(this).projectOnVector(t),this.sub(sh)}reflect(t){return this.sub(sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sh=new nt,Ix=new Cs;class he{constructor(t,i,s,l,u,h,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],S=s[2],M=s[5],T=s[8],A=l[0],y=l[3],g=l[6],O=l[1],U=l[4],I=l[7],X=l[2],L=l[5],B=l[8];return u[0]=h*A+d*O+m*X,u[3]=h*y+d*U+m*L,u[6]=h*g+d*I+m*B,u[1]=p*A+_*O+v*X,u[4]=p*y+_*U+v*L,u[7]=p*g+_*I+v*B,u[2]=S*A+M*O+T*X,u[5]=S*y+M*U+T*L,u[8]=S*g+M*I+T*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*u*_+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*h-d*p,S=d*m-_*u,M=p*u-h*m,T=i*v+s*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=v*A,t[1]=(l*p-_*s)*A,t[2]=(d*s-l*h)*A,t[3]=S*A,t[4]=(_*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=M*A,t[7]=(s*m-p*i)*A,t[8]=(h*i-s*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(rh.makeScale(t,i)),this}rotate(t){return this.premultiply(rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new he,Fx=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hx=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ay(){const o={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ve&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Ar(l.r),l.g=Ar(l.g),l.b=Ar(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?Oc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[wr]:{primaries:t,whitePoint:s,transfer:Oc,toXYZ:Fx,fromXYZ:Hx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:Fx,fromXYZ:Hx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const Le=Ay();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ar(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ur;class Ry{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ur===void 0&&(ur=zc("canvas")),ur.width=t.width,ur.height=t.height;const l=ur.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ur}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=xa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cy=0;class Od{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(oh(l[h].image)):u.push(oh(l[h]))}else u=oh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function oh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ry.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let Dy=0;const lh=new nt;class Bn extends ws{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=da,l=da,u=xi,h=As,d=Ti,m=zi,p=Bn.DEFAULT_ANISOTROPY,_=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=qo(),this.name="",this.source=new Od(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qh:t.x=t.x-Math.floor(t.x);break;case da:t.x=t.x<0?0:1;break;case Yh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qh:t.y=t.y-Math.floor(t.y);break;case da:t.y=t.y<0?0:1;break;case Yh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Hg;Bn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],_=m[4],v=m[8],S=m[1],M=m[5],T=m[9],A=m[2],y=m[6],g=m[10];if(Math.abs(_-S)<.01&&Math.abs(v-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+A)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,I=(M+1)/2,X=(g+1)/2,L=(_+S)/4,B=(v+A)/4,et=(T+y)/4;return U>I&&U>X?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=L/s,u=B/s):I>X?I<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(I),s=L/l,u=et/l):X<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),s=B/u,l=et/u),this.set(s,l,u,i),this}let O=Math.sqrt((y-T)*(y-T)+(v-A)*(v-A)+(S-_)*(S-_));return Math.abs(O)<.001&&(O=1),this.x=(y-T)/O,this.y=(v-A)/O,this.z=(S-_)/O,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wy extends ws{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Bn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Od(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends wy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Qg extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uy extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(t=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,yi):yi.fromBufferAttribute(u,h),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),rc.copy(s.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),oc.subVectors(this.max,No),fr.subVectors(t.a,No),hr.subVectors(t.b,No),dr.subVectors(t.c,No),Xa.subVectors(hr,fr),ka.subVectors(dr,hr),_s.subVectors(fr,dr);let i=[0,-Xa.z,Xa.y,0,-ka.z,ka.y,0,-_s.z,_s.y,Xa.z,0,-Xa.x,ka.z,0,-ka.x,_s.z,0,-_s.x,-Xa.y,Xa.x,0,-ka.y,ka.x,0,-_s.y,_s.x,0];return!ch(i,fr,hr,dr,oc)||(i=[1,0,0,0,1,0,0,0,1],!ch(i,fr,hr,dr,oc))?!1:(lc.crossVectors(Xa,ka),i=[lc.x,lc.y,lc.z],ch(i,fr,hr,dr,oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],yi=new nt,rc=new Nr,fr=new nt,hr=new nt,dr=new nt,Xa=new nt,ka=new nt,_s=new nt,No=new nt,oc=new nt,lc=new nt,vs=new nt;function ch(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){vs.fromArray(o,u);const d=l.x*Math.abs(vs.x)+l.y*Math.abs(vs.y)+l.z*Math.abs(vs.z),m=t.dot(vs),p=i.dot(vs),_=s.dot(vs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Ly=new Nr,Oo=new nt,uh=new nt;class Hc{constructor(t=new nt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ly.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(uh)),this.expandByPoint(Oo.copy(t.center).sub(uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new nt,fh=new nt,cc=new nt,Wa=new nt,hh=new nt,uc=new nt,dh=new nt;class Gc{constructor(t=new nt,i=new nt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){fh.copy(t).add(i).multiplyScalar(.5),cc.copy(i).sub(t).normalize(),Wa.copy(this.origin).sub(fh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(cc),d=Wa.dot(this.direction),m=-Wa.dot(cc),p=Wa.lengthSq(),_=Math.abs(1-h*h);let v,S,M,T;if(_>0)if(v=h*m-d,S=h*d-m,T=u*_,v>=0)if(S>=-T)if(S<=T){const A=1/_;v*=A,S*=A,M=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S<=-T?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p):S<=T?(v=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(fh).addScaledVector(cc,S),M}intersectSphere(t,i){ra.subVectors(t.center,this.origin);const s=ra.dot(this.direction),l=ra.dot(ra)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-S.z)*v,m=(t.max.z-S.z)*v):(d=(t.max.z-S.z)*v,m=(t.min.z-S.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,i,s,l,u){hh.subVectors(i,t),uc.subVectors(s,t),dh.crossVectors(hh,uc);let h=this.direction.dot(dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Wa.subVectors(this.origin,t);const m=d*this.direction.dot(uc.crossVectors(Wa,uc));if(m<0)return null;const p=d*this.direction.dot(hh.cross(Wa));if(p<0||m+p>h)return null;const _=-d*Wa.dot(dh);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,u,h,d,m,p,_,v,S,M,T,A,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,_,v,S,M,T,A,y)}set(t,i,s,l,u,h,d,m,p,_,v,S,M,T,A,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=S,g[3]=M,g[7]=T,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/pr.setFromMatrixColumn(t,0).length(),u=1/pr.setFromMatrixColumn(t,1).length(),h=1/pr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const S=h*_,M=h*v,T=d*_,A=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=S-A*p,i[9]=-d*m,i[2]=A-S*p,i[6]=T+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*_,M=m*v,T=p*_,A=p*v;i[0]=S+A*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-T,i[6]=A+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*_,M=m*v,T=p*_,A=p*v;i[0]=S-A*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*_,i[9]=A-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*_,M=h*v,T=d*_,A=d*v;i[0]=m*_,i[4]=T*p-M,i[8]=S*p+A,i[1]=m*v,i[5]=A*p+S,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*_,i[4]=A-S*v,i[8]=T*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+T,i[10]=S-A*v}else if(t.order==="XZY"){const S=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=S*v+A,i[5]=h*_,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*_,i[10]=A*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ny,t,Oy)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),qa.crossVectors(s,ni),qa.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),qa.crossVectors(s,ni)),qa.normalize(),fc.crossVectors(ni,qa),l[0]=qa.x,l[4]=fc.x,l[8]=ni.x,l[1]=qa.y,l[5]=fc.y,l[9]=ni.y,l[2]=qa.z,l[6]=fc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],S=s[9],M=s[13],T=s[2],A=s[6],y=s[10],g=s[14],O=s[3],U=s[7],I=s[11],X=s[15],L=l[0],B=l[4],et=l[8],D=l[12],C=l[1],V=l[5],$=l[9],ot=l[13],dt=l[2],ut=l[6],P=l[10],j=l[14],Y=l[3],gt=l[7],_t=l[11],N=l[15];return u[0]=h*L+d*C+m*dt+p*Y,u[4]=h*B+d*V+m*ut+p*gt,u[8]=h*et+d*$+m*P+p*_t,u[12]=h*D+d*ot+m*j+p*N,u[1]=_*L+v*C+S*dt+M*Y,u[5]=_*B+v*V+S*ut+M*gt,u[9]=_*et+v*$+S*P+M*_t,u[13]=_*D+v*ot+S*j+M*N,u[2]=T*L+A*C+y*dt+g*Y,u[6]=T*B+A*V+y*ut+g*gt,u[10]=T*et+A*$+y*P+g*_t,u[14]=T*D+A*ot+y*j+g*N,u[3]=O*L+U*C+I*dt+X*Y,u[7]=O*B+U*V+I*ut+X*gt,u[11]=O*et+U*$+I*P+X*_t,u[15]=O*D+U*ot+I*j+X*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],S=t[10],M=t[14],T=t[3],A=t[7],y=t[11],g=t[15];return T*(+u*m*v-l*p*v-u*d*S+s*p*S+l*d*M-s*m*M)+A*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*_-u*m*_)+y*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*_-s*p*_)+g*(-l*d*_-i*m*v+i*d*S+l*h*v-s*h*S+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],S=t[10],M=t[11],T=t[12],A=t[13],y=t[14],g=t[15],O=v*y*p-A*S*p+A*m*M-d*y*M-v*m*g+d*S*g,U=T*S*p-_*y*p-T*m*M+h*y*M+_*m*g-h*S*g,I=_*A*p-T*v*p+T*d*M-h*A*M-_*d*g+h*v*g,X=T*v*m-_*A*m-T*d*S+h*A*S+_*d*y-h*v*y,L=i*O+s*U+l*I+u*X;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return t[0]=O*B,t[1]=(A*S*u-v*y*u-A*l*M+s*y*M+v*l*g-s*S*g)*B,t[2]=(d*y*u-A*m*u+A*l*p-s*y*p-d*l*g+s*m*g)*B,t[3]=(v*m*u-d*S*u-v*l*p+s*S*p+d*l*M-s*m*M)*B,t[4]=U*B,t[5]=(_*y*u-T*S*u+T*l*M-i*y*M-_*l*g+i*S*g)*B,t[6]=(T*m*u-h*y*u-T*l*p+i*y*p+h*l*g-i*m*g)*B,t[7]=(h*S*u-_*m*u+_*l*p-i*S*p-h*l*M+i*m*M)*B,t[8]=I*B,t[9]=(T*v*u-_*A*u-T*s*M+i*A*M+_*s*g-i*v*g)*B,t[10]=(h*A*u-T*d*u+T*s*p-i*A*p-h*s*g+i*d*g)*B,t[11]=(_*d*u-h*v*u-_*s*p+i*v*p+h*s*M-i*d*M)*B,t[12]=X*B,t[13]=(_*A*l-T*v*l+T*s*S-i*A*S-_*s*y+i*v*y)*B,t[14]=(T*d*l-h*A*l-T*s*m+i*A*m+h*s*y-i*d*y)*B,t[15]=(h*v*l-_*d*l+_*s*m-i*v*m-h*s*S+i*d*S)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,S=u*p,M=u*_,T=u*v,A=h*_,y=h*v,g=d*v,O=m*p,U=m*_,I=m*v,X=s.x,L=s.y,B=s.z;return l[0]=(1-(A+g))*X,l[1]=(M+I)*X,l[2]=(T-U)*X,l[3]=0,l[4]=(M-I)*L,l[5]=(1-(S+g))*L,l[6]=(y+O)*L,l[7]=0,l[8]=(T+U)*B,l[9]=(y-O)*B,l[10]=(1-(S+A))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=pr.set(l[0],l[1],l[2]).length();const h=pr.set(l[4],l[5],l[6]).length(),d=pr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const p=1/u,_=1/h,v=1/d;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=_,Mi.elements[5]*=_,Mi.elements[6]*=_,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,i.setFromRotationMatrix(Mi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Oi,m=!1){const p=this.elements,_=2*u/(i-t),v=2*u/(s-l),S=(i+t)/(i-t),M=(s+l)/(s-l);let T,A;if(m)T=u/(h-u),A=h*u/(h-u);else if(d===Oi)T=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Pc)T=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Oi,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),S=-(i+t)/(i-t),M=-(s+l)/(s-l);let T,A;if(m)T=1/(h-u),A=h/(h-u);else if(d===Oi)T=-2/(h-u),A=-(h+u)/(h-u);else if(d===Pc)T=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const pr=new nt,Mi=new Je,Ny=new nt(0,0,0),Oy=new nt(1,1,1),qa=new nt,fc=new nt,ni=new nt,Gx=new Je,Vx=new Cs;class Bi{constructor(t=0,i=0,s=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Gx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Vx.setFromEuler(this),this.setFromQuaternion(Vx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Py=0;const Xx=new nt,mr=new Cs,oa=new Je,hc=new nt,Po=new nt,zy=new nt,By=new Cs,kx=new nt(1,0,0),Wx=new nt(0,1,0),qx=new nt(0,0,1),Yx={type:"added"},Iy={type:"removed"},xr={type:"childadded",child:null},ph={type:"childremoved",child:null};class Tn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new nt,i=new Bi,s=new Cs,l=new nt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new he}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(kx,t)}rotateY(t){return this.rotateOnAxis(Wx,t)}rotateZ(t){return this.rotateOnAxis(qx,t)}translateOnAxis(t,i){return Xx.copy(t).applyQuaternion(this.quaternion),this.position.add(Xx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(kx,t)}translateY(t){return this.translateOnAxis(Wx,t)}translateZ(t){return this.translateOnAxis(qx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?hc.copy(t):hc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Po,hc,this.up):oa.lookAt(hc,Po,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),mr.setFromRotationMatrix(oa),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(en("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yx),xr.child=t,this.dispatchEvent(xr),xr.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Iy),ph.child=t,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yx),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,zy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,By,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),v=h(t.shapes),S=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new nt(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new nt,la=new nt,mh=new nt,ca=new nt,gr=new nt,_r=new nt,jx=new nt,xh=new nt,gh=new nt,_h=new nt,vh=new nn,Sh=new nn,yh=new nn;class Ei{constructor(t=new nt,i=new nt,s=new nt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),bi.subVectors(t,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){bi.subVectors(l,i),la.subVectors(s,i),mh.subVectors(t,i);const h=bi.dot(bi),d=bi.dot(la),m=bi.dot(mh),p=la.dot(la),_=la.dot(mh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,M=(p*m-d*_)*S,T=(h*_-d*m)*S;return u.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ca.x),m.addScaledVector(h,ca.y),m.addScaledVector(d,ca.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return vh.setScalar(0),Sh.setScalar(0),yh.setScalar(0),vh.fromBufferAttribute(t,i),Sh.fromBufferAttribute(t,s),yh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(vh,u.x),h.addScaledVector(Sh,u.y),h.addScaledVector(yh,u.z),h}static isFrontFacing(t,i,s,l){return bi.subVectors(s,i),la.subVectors(t,i),bi.cross(la).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),la.subVectors(this.a,this.b),bi.cross(la).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Ei.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;gr.subVectors(l,s),_r.subVectors(u,s),xh.subVectors(t,s);const m=gr.dot(xh),p=_r.dot(xh);if(m<=0&&p<=0)return i.copy(s);gh.subVectors(t,l);const _=gr.dot(gh),v=_r.dot(gh);if(_>=0&&v<=_)return i.copy(l);const S=m*v-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(gr,h);_h.subVectors(t,u);const M=gr.dot(_h),T=_r.dot(_h);if(T>=0&&M<=T)return i.copy(u);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(_r,d);const y=_*T-M*v;if(y<=0&&v-_>=0&&M-T>=0)return jx.subVectors(u,l),d=(v-_)/(v-_+(M-T)),i.copy(l).addScaledVector(jx,d);const g=1/(y+A+S);return h=A*g,d=S*g,i.copy(s).addScaledVector(gr,h).addScaledVector(_r,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Mh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class xe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=Ey(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Mh(h,u,t+1/3),this.g=Mh(h,u,t),this.b=Mh(h,u,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=ai){function s(u){u!==void 0&&parseFloat(u)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ai){const s=Jg[t.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return Le.workingToColorSpace(On.copy(this),t),Math.round(Se(On.r*255,0,255))*65536+Math.round(Se(On.g*255,0,255))*256+Math.round(Se(On.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,u=On.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=ai){Le.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==ai?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ya),this.setHSL(Ya.h+t,Ya.s+i,Ya.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ya),t.getHSL(dc);const s=ah(Ya.h,dc.h,i),l=ah(Ya.s,dc.s,i),u=ah(Ya.l,dc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new xe;xe.NAMES=Jg;let Fy=0;class Or extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Tr,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=zh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(s.blending=this.blending),this.side!==$a&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ph&&(s.blendSrc=this.blendSrc),this.blendDst!==zh&&(s.blendDst=this.blendDst),this.blendEquation!==Es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $g extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new nt,pc=new oe;let Hy=0;class Pi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Ox,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(t),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Lo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ox&&(t.usage=this.usage),t}}class t_ extends Pi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class e_ extends Pi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ai extends Pi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Gy=0;const pi=new Je,bh=new Tn,vr=new nt,ii=new Nr,zo=new Nr,En=new nt;class Ii extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kg(t)?e_:t_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new he().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,s){return pi.makeTranslation(t,i,s),this.applyMatrix4(pi),this}scale(t,i,s){return pi.makeScale(t,i,s),this.applyMatrix4(pi),this}lookAt(t){return bh.lookAt(t),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ai(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ii.min,zo.min),ii.expandByPoint(En),En.addVectors(ii.max,zo.max),ii.expandByPoint(En)):(ii.expandByPoint(zo.min),ii.expandByPoint(zo.max))}ii.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)En.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(En));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)En.fromBufferAttribute(d,p),m&&(vr.fromBufferAttribute(t,p),En.add(vr)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let et=0;et<s.count;et++)d[et]=new nt,m[et]=new nt;const p=new nt,_=new nt,v=new nt,S=new oe,M=new oe,T=new oe,A=new nt,y=new nt;function g(et,D,C){p.fromBufferAttribute(s,et),_.fromBufferAttribute(s,D),v.fromBufferAttribute(s,C),S.fromBufferAttribute(u,et),M.fromBufferAttribute(u,D),T.fromBufferAttribute(u,C),_.sub(p),v.sub(p),M.sub(S),T.sub(S);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(A.copy(_).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(V),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(V),d[et].add(A),d[D].add(A),d[C].add(A),m[et].add(y),m[D].add(y),m[C].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let et=0,D=O.length;et<D;++et){const C=O[et],V=C.start,$=C.count;for(let ot=V,dt=V+$;ot<dt;ot+=3)g(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const U=new nt,I=new nt,X=new nt,L=new nt;function B(et){X.fromBufferAttribute(l,et),L.copy(X);const D=d[et];U.copy(D),U.sub(X.multiplyScalar(X.dot(D))).normalize(),I.crossVectors(L,D);const V=I.dot(m[et])<0?-1:1;h.setXYZW(et,U.x,U.y,U.z,V)}for(let et=0,D=O.length;et<D;++et){const C=O[et],V=C.start,$=C.count;for(let ot=V,dt=V+$;ot<dt;ot+=3)B(t.getX(ot+0)),B(t.getX(ot+1)),B(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new nt,u=new nt,h=new nt,d=new nt,m=new nt,p=new nt,_=new nt,v=new nt;if(t)for(let S=0,M=t.count;S<M;S+=3){const T=t.getX(S+0),A=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,y),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,S=new p.constructor(m.length*_);let M=0,T=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*_;for(let g=0;g<_;g++)S[T++]=p[M++]}return new Pi(S,_,v)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ii,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const S=p[_],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],v=u[p];for(let S=0,M=v.length;S<M;S++)_.push(v[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zx=new Je,Ss=new Gc,mc=new Hc,Kx=new nt,xc=new nt,gc=new nt,_c=new nt,Eh=new nt,vc=new nt,Qx=new nt,Sc=new nt;class Ri extends Tn{constructor(t=new Ii,i=new $g){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){vc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(Eh.fromBufferAttribute(v,t),h?vc.addScaledVector(Eh,_):vc.addScaledVector(Eh.sub(i),_))}i.add(vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(u),Ss.copy(t.ray).recast(t.near),!(mc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(mc,Kx)===null||Ss.origin.distanceToSquared(Kx)>(t.far-t.near)**2))&&(Zx.copy(u).invert(),Ss.copy(t.ray).applyMatrix4(Zx),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ss)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=S.length;T<A;T++){const y=S[T],g=h[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let I=O,X=U;I<X;I+=3){const L=d.getX(I),B=d.getX(I+1),et=d.getX(I+2);l=yc(this,g,t,s,p,_,v,L,B,et),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=T,g=A;y<g;y+=3){const O=d.getX(y),U=d.getX(y+1),I=d.getX(y+2);l=yc(this,h,t,s,p,_,v,O,U,I),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=S.length;T<A;T++){const y=S[T],g=h[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let I=O,X=U;I<X;I+=3){const L=I,B=I+1,et=I+2;l=yc(this,g,t,s,p,_,v,L,B,et),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=T,g=A;y<g;y+=3){const O=y,U=y+1,I=y+2;l=yc(this,h,t,s,p,_,v,O,U,I),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Vy(o,t,i,s,l,u,h,d){let m;if(t.side===qn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===$a,d),m===null)return null;Sc.copy(d),Sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:o}}function yc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,xc),o.getVertexPosition(m,gc),o.getVertexPosition(p,_c);const _=Vy(o,t,i,s,xc,gc,_c,Qx);if(_){const v=new nt;Ei.getBarycoord(Qx,xc,gc,_c,v),l&&(_.uv=Ei.getInterpolatedAttribute(l,d,m,p,v,new oe)),u&&(_.uv1=Ei.getInterpolatedAttribute(u,d,m,p,v,new oe)),h&&(_.normal=Ei.getInterpolatedAttribute(h,d,m,p,v,new nt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new nt,materialIndex:0};Ei.getNormal(xc,gc,_c,S.normal),_.face=S,_.barycoord=v}return _}class Pr extends Ii{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let S=0,M=0;T("z","y","x",-1,-1,s,i,t,h,u,0),T("z","y","x",1,-1,s,i,-t,h,u,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,u,4),T("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ai(p,3)),this.setAttribute("normal",new Ai(_,3)),this.setAttribute("uv",new Ai(v,2));function T(A,y,g,O,U,I,X,L,B,et,D){const C=I/B,V=X/et,$=I/2,ot=X/2,dt=L/2,ut=B+1,P=et+1;let j=0,Y=0;const gt=new nt;for(let _t=0;_t<P;_t++){const N=_t*V-ot;for(let st=0;st<ut;st++){const yt=st*C-$;gt[A]=yt*O,gt[y]=N*U,gt[g]=dt,p.push(gt.x,gt.y,gt.z),gt[A]=0,gt[y]=0,gt[g]=L>0?1:-1,_.push(gt.x,gt.y,gt.z),v.push(st/B),v.push(1-_t/et),j+=1}}for(let _t=0;_t<et;_t++)for(let N=0;N<B;N++){const st=S+N+ut*_t,yt=S+N+ut*(_t+1),Et=S+(N+1)+ut*(_t+1),Ot=S+(N+1)+ut*_t;m.push(st,yt,Ot),m.push(yt,Et,Ot),Y+=6}d.addGroup(M,Y,D),M+=Y,S+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ur(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const s=Ur(o[i]);for(const l in s)t[l]=s[l]}return t}function Xy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function n_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const ky={clone:Ur,merge:zn};var Wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=Xy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class i_ extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new nt,Jx=new oe,$x=new oe;class mi extends i_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Md*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Md*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-t/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ja.x,ja.y).multiplyScalar(-t/ja.z)}getViewSize(t,i){return this.getViewBounds(t,Jx,$x),i.subVectors($x,Jx)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Lc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Sr=-90,yr=1;class Yy extends Tn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Sr,yr,t,i);l.layers=this.layers,this.add(l);const u=new mi(Sr,yr,t,i);u.layers=this.layers,this.add(u);const h=new mi(Sr,yr,t,i);h.layers=this.layers,this.add(h);const d=new mi(Sr,yr,t,i);d.layers=this.layers,this.add(d);const m=new mi(Sr,yr,t,i);m.layers=this.layers,this.add(m);const p=new mi(Sr,yr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Pc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,S,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class a_ extends Bn{constructor(t=[],i=Cr,s,l,u,h,d,m,p,_){super(t,i,s,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jy extends Ds{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new a_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Pr(5,5,5),u=new ga({name:"CubemapFromEquirect",uniforms:Ur(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:ma});u.uniforms.tEquirect.value=i;const h=new Ri(l,u),d=i.minFilter;return i.minFilter===As&&(i.minFilter=xi),new Yy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Fo extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,s),g=this._getHandJoint(p,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class zd{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new xe(t),this.near=i,this.far=s}clone(){return new zd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ky extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Qy extends Bn{constructor(t=null,i=1,s=1,l,u,h,d,m,p=si,_=si,v,S){super(null,h,d,m,p,_,l,u,v,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ah=new nt,Jy=new nt,$y=new he;class Za{constructor(t=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ah.subVectors(s,i).cross(Jy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ah),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||$y.getNormalMatrix(t),l=this.coplanarPoint(Ah).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Hc,tM=new oe(.5,.5),Mc=new nt;class Bd{constructor(t=new Za,i=new Za,s=new Za,l=new Za,u=new Za,h=new Za){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Oi,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],_=u[4],v=u[5],S=u[6],M=u[7],T=u[8],A=u[9],y=u[10],g=u[11],O=u[12],U=u[13],I=u[14],X=u[15];if(l[0].setComponents(p-h,M-_,g-T,X-O).normalize(),l[1].setComponents(p+h,M+_,g+T,X+O).normalize(),l[2].setComponents(p+d,M+v,g+A,X+U).normalize(),l[3].setComponents(p-d,M-v,g-A,X-U).normalize(),s)l[4].setComponents(m,S,y,I).normalize(),l[5].setComponents(p-m,M-S,g-y,X-I).normalize();else if(l[4].setComponents(p-m,M-S,g-y,X-I).normalize(),i===Oi)l[5].setComponents(p+m,M+S,g+y,X+I).normalize();else if(i===Pc)l[5].setComponents(m,S,y,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);const i=tM.distanceTo(t.center);return ys.radius=.7071067811865476+i,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s_ extends Or{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Bc=new nt,Ic=new nt,tg=new Je,Bo=new Gc,bc=new Hc,Rh=new nt,eg=new nt;class eM extends Tn{constructor(t=new Ii,i=new s_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Bc.fromBufferAttribute(i,l-1),Ic.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Bc.distanceTo(Ic);t.setAttribute("lineDistance",new Ai(s,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(l),bc.radius+=u,t.ray.intersectsSphere(bc)===!1)return;tg.copy(l).invert(),Bo.copy(t.ray).applyMatrix4(tg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const M=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let A=M,y=T-1;A<y;A+=p){const g=_.getX(A),O=_.getX(A+1),U=Ec(this,t,Bo,m,g,O,A);U&&i.push(U)}if(this.isLineLoop){const A=_.getX(T-1),y=_.getX(M),g=Ec(this,t,Bo,m,A,y,T-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let A=M,y=T-1;A<y;A+=p){const g=Ec(this,t,Bo,m,A,A+1,A);g&&i.push(g)}if(this.isLineLoop){const A=Ec(this,t,Bo,m,T-1,M,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Ec(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(Bc.fromBufferAttribute(d,l),Ic.fromBufferAttribute(d,u),i.distanceSqToSegment(Bc,Ic,Rh,eg)>s)return;Rh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Rh);if(!(p<t.near||p>t.far))return{distance:p,point:eg.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const ng=new nt,ig=new nt;class nM extends eM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)ng.fromBufferAttribute(i,l),ig.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+ng.distanceTo(ig);t.setAttribute("lineDistance",new Ai(s,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class r_ extends Bn{constructor(t,i,s=Rs,l,u,h,d=si,m=si,p,_=Xo,v=1){if(_!==Xo&&_!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,l,u,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Od(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class o_ extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yo extends Ii{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,S=i/m,M=[],T=[],A=[],y=[];for(let g=0;g<_;g++){const O=g*S-h;for(let U=0;U<p;U++){const I=U*v-u;T.push(I,-O,0),A.push(0,0,1),y.push(U/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let O=0;O<d;O++){const U=O+p*g,I=O+p*(g+1),X=O+1+p*(g+1),L=O+1+p*g;M.push(U,I,L),M.push(I,X,L)}this.setIndex(M),this.setAttribute("position",new Ai(T,3)),this.setAttribute("normal",new Ai(A,3)),this.setAttribute("uv",new Ai(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.widthSegments,t.heightSegments)}}class l_ extends Or{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jg,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class iM extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class aM extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class c_ extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class sM extends c_{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Ch=new Je,ag=new nt,sg=new nt;class rM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;ag.setFromMatrixPosition(t.matrixWorld),i.position.copy(ag),sg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(sg),i.updateMatrixWorld(),Ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class u_ extends i_{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oM extends rM{constructor(){super(new u_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rg extends c_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new oM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lM extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const og=new Je;class cM{constructor(t,i,s=0,l=1/0){this.ray=new Gc(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Pd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):en("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return og.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(og),this}intersectObject(t,i=!0,s=[]){return bd(t,this,s,i),s.sort(lg),s}intersectObjects(t,i=!0,s=[]){for(let l=0,u=t.length;l<u;l++)bd(t[l],this,s,i);return s.sort(lg),s}}function lg(o,t){return o.distance-t.distance}function bd(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)bd(u[h],t,i,!0)}}class cg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uM extends nM{constructor(t=10,i=10,s=4473924,l=8947848){s=new xe(s),l=new xe(l);const u=i/2,h=t/i,d=t/2,m=[],p=[];for(let S=0,M=0,T=-d;S<=i;S++,T+=h){m.push(-d,0,T,d,0,T),m.push(T,0,-d,T,0,d);const A=S===u?s:l;A.toArray(p,M),M+=3,A.toArray(p,M),M+=3,A.toArray(p,M),M+=3,A.toArray(p,M),M+=3}const _=new Ii;_.setAttribute("position",new Ai(m,3)),_.setAttribute("color",new Ai(p,3));const v=new s_({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class fM extends ws{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ug(o,t,i,s){const l=hM(s);switch(i){case Wg:return o*t;case Yg:return o*t/l.components*l.byteLength;case wd:return o*t/l.components*l.byteLength;case Ud:return o*t*2/l.components*l.byteLength;case Ld:return o*t*2/l.components*l.byteLength;case qg:return o*t*3/l.components*l.byteLength;case Ti:return o*t*4/l.components*l.byteLength;case Nd:return o*t*4/l.components*l.byteLength;case Cc:case Dc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case wc:case Uc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Zh:case Qh:return Math.max(o,16)*Math.max(t,8)/4;case jh:case Kh:return Math.max(o,8)*Math.max(t,8)/2;case Jh:case $h:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case td:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ed:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case id:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ad:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case sd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case rd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case od:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case ld:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case cd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ud:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case fd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case hd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case dd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case pd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case md:case xd:case gd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case _d:case vd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Sd:case yd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hM(o){switch(o){case zi:case Gg:return{byteLength:1,components:1};case Go:case Vg:case Lr:return{byteLength:2,components:1};case Cd:case Dd:return{byteLength:2,components:4};case Rs:case Rd:case pa:return{byteLength:4,components:1};case Xg:case kg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);function f_(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function dM(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<v.length;M++){const T=v[S],A=v[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++S,v[S]=A)}v.length=S+1;for(let M=0,T=v.length;M<T;M++){const A=v[M];o.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var pM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mM=`#ifdef USE_ALPHAHASH
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
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
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
#endif`,yM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MM=`#ifdef USE_BATCHING
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
#endif`,bM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RM=`#ifdef USE_IRIDESCENCE
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
#endif`,CM=`#ifdef USE_BUMPMAP
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,BM=`#define PI 3.141592653589793
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
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FM=`vec3 transformedNormal = objectNormal;
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
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",WM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eb=`#ifdef USE_GRADIENTMAP
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
}`,nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ib=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sb=`uniform bool receiveShadow;
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
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fb=`PhysicalMaterial material;
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
#endif`,hb=`uniform sampler2D dfgLUT;
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
}`,db=`
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
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
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bb=`#if defined( USE_POINTS_UV )
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
#endif`,Eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`#ifdef USE_MORPHTARGETS
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
#endif`,wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zb=`#ifdef USE_NORMALMAP
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
#endif`,Bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jb=`float getShadowMask() {
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
}`,$b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tE=`#ifdef USE_SKINNING
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
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
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
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#ifdef USE_TRANSMISSION
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
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
}`,SE=`#if DEPTH_PACKING == 3200
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
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
}`,AE=`uniform vec3 diffuse;
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
}`,RE=`#include <common>
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
}`,CE=`uniform vec3 diffuse;
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
}`,DE=`#define LAMBERT
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
}`,UE=`#define MATCAP
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
}`,LE=`#define MATCAP
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
}`,NE=`#define NORMAL
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
}`,OE=`#define NORMAL
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
}`,PE=`#define PHONG
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
}`,zE=`#define PHONG
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
}`,BE=`#define STANDARD
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
}`,IE=`#define STANDARD
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
}`,HE=`#define TOON
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
}`,GE=`uniform float size;
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
}`,VE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
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
}`,kE=`uniform vec3 color;
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
}`,WE=`uniform float rotation;
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
}`,qE=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:pM,alphahash_pars_fragment:mM,alphamap_fragment:xM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:vM,aomap_fragment:SM,aomap_pars_fragment:yM,batching_pars_vertex:MM,batching_vertex:bM,begin_vertex:EM,beginnormal_vertex:TM,bsdfs:AM,iridescence_fragment:RM,bumpmap_pars_fragment:CM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:UM,clipping_planes_vertex:LM,color_fragment:NM,color_pars_fragment:OM,color_pars_vertex:PM,color_vertex:zM,common:BM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:FM,displacementmap_pars_vertex:HM,displacementmap_vertex:GM,emissivemap_fragment:VM,emissivemap_pars_fragment:XM,colorspace_fragment:kM,colorspace_pars_fragment:WM,envmap_fragment:qM,envmap_common_pars_fragment:YM,envmap_pars_fragment:jM,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:rb,envmap_vertex:KM,fog_vertex:QM,fog_pars_vertex:JM,fog_fragment:$M,fog_pars_fragment:tb,gradientmap_pars_fragment:eb,lightmap_pars_fragment:nb,lights_lambert_fragment:ib,lights_lambert_pars_fragment:ab,lights_pars_begin:sb,lights_toon_fragment:ob,lights_toon_pars_fragment:lb,lights_phong_fragment:cb,lights_phong_pars_fragment:ub,lights_physical_fragment:fb,lights_physical_pars_fragment:hb,lights_fragment_begin:db,lights_fragment_maps:pb,lights_fragment_end:mb,logdepthbuf_fragment:xb,logdepthbuf_pars_fragment:gb,logdepthbuf_pars_vertex:_b,logdepthbuf_vertex:vb,map_fragment:Sb,map_pars_fragment:yb,map_particle_fragment:Mb,map_particle_pars_fragment:bb,metalnessmap_fragment:Eb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:Ab,morphcolor_vertex:Rb,morphnormal_vertex:Cb,morphtarget_pars_vertex:Db,morphtarget_vertex:wb,normal_fragment_begin:Ub,normal_fragment_maps:Lb,normal_pars_fragment:Nb,normal_pars_vertex:Ob,normal_vertex:Pb,normalmap_pars_fragment:zb,clearcoat_normal_fragment_begin:Bb,clearcoat_normal_fragment_maps:Ib,clearcoat_pars_fragment:Fb,iridescence_pars_fragment:Hb,opaque_fragment:Gb,packing:Vb,premultiplied_alpha_fragment:Xb,project_vertex:kb,dithering_fragment:Wb,dithering_pars_fragment:qb,roughnessmap_fragment:Yb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:Zb,shadowmap_pars_vertex:Kb,shadowmap_vertex:Qb,shadowmask_pars_fragment:Jb,skinbase_vertex:$b,skinning_pars_vertex:tE,skinning_vertex:eE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:aE,tonemapping_fragment:sE,tonemapping_pars_fragment:rE,transmission_fragment:oE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:uE,uv_vertex:fE,worldpos_vertex:hE,background_vert:dE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:xE,cube_vert:gE,cube_frag:_E,depth_vert:vE,depth_frag:SE,distanceRGBA_vert:yE,distanceRGBA_frag:ME,equirect_vert:bE,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:AE,meshbasic_vert:RE,meshbasic_frag:CE,meshlambert_vert:DE,meshlambert_frag:wE,meshmatcap_vert:UE,meshmatcap_frag:LE,meshnormal_vert:NE,meshnormal_frag:OE,meshphong_vert:PE,meshphong_frag:zE,meshphysical_vert:BE,meshphysical_frag:IE,meshtoon_vert:FE,meshtoon_frag:HE,points_vert:GE,points_frag:VE,shadow_vert:XE,shadow_frag:kE,sprite_vert:WE,sprite_frag:qE},Lt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ni={basic:{uniforms:zn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:zn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new xe(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:zn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:zn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:zn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new xe(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:zn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:zn([Lt.points,Lt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:zn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:zn([Lt.common,Lt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:zn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:zn([Lt.sprite,Lt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:zn([Lt.common,Lt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:zn([Lt.lights,Lt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Ni.physical={uniforms:zn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Tc={r:0,b:0,g:0},Ms=new Bi,YE=new Je;function jE(o,t,i,s,l,u,h){const d=new xe(0);let m=u===!0?0:1,p,_,v=null,S=0,M=null;function T(U){let I=U.isScene===!0?U.background:null;return I&&I.isTexture&&(I=(U.backgroundBlurriness>0?i:t).get(I)),I}function A(U){let I=!1;const X=T(U);X===null?g(d,m):X&&X.isColor&&(g(X,1),I=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,h):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||I)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,I){const X=T(I);X&&(X.isCubeTexture||X.mapping===Fc)?(_===void 0&&(_=new Ri(new Pr(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:Ur(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(L,B,et){this.matrixWorld.copyPosition(et.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ms.copy(I.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),_.material.uniforms.envMap.value=X,_.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(Ms)),_.material.toneMapped=Le.getTransfer(X.colorSpace)!==Ve,(v!==X||S!==X.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=X,S=X.version,M=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new Ri(new Yo(2,2),new ga({name:"BackgroundMaterial",uniforms:Ur(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Le.getTransfer(X.colorSpace)!==Ve,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||S!==X.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=X,S=X.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,I){U.getRGB(Tc,n_(o)),s.buffers.color.setClear(Tc.r,Tc.g,Tc.b,I,h)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,I=1){d.set(U),m=I,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(d,m)},render:A,addToRenderList:y,dispose:O}}function ZE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(C,V,$,ot,dt){let ut=!1;const P=v(ot,$,V);u!==P&&(u=P,p(u.object)),ut=M(C,ot,$,dt),ut&&T(C,ot,$,dt),dt!==null&&t.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,I(C,V,$,ot),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function v(C,V,$){const ot=$.wireframe===!0;let dt=s[C.id];dt===void 0&&(dt={},s[C.id]=dt);let ut=dt[V.id];ut===void 0&&(ut={},dt[V.id]=ut);let P=ut[ot];return P===void 0&&(P=S(m()),ut[ot]=P),P}function S(C){const V=[],$=[],ot=[];for(let dt=0;dt<i;dt++)V[dt]=0,$[dt]=0,ot[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:ot,object:C,attributes:{},index:null}}function M(C,V,$,ot){const dt=u.attributes,ut=V.attributes;let P=0;const j=$.getAttributes();for(const Y in j)if(j[Y].location>=0){const _t=dt[Y];let N=ut[Y];if(N===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),_t===void 0||_t.attribute!==N||N&&_t.data!==N.data)return!0;P++}return u.attributesNum!==P||u.index!==ot}function T(C,V,$,ot){const dt={},ut=V.attributes;let P=0;const j=$.getAttributes();for(const Y in j)if(j[Y].location>=0){let _t=ut[Y];_t===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor));const N={};N.attribute=_t,_t&&_t.data&&(N.data=_t.data),dt[Y]=N,P++}u.attributes=dt,u.attributesNum=P,u.index=ot}function A(){const C=u.newAttributes;for(let V=0,$=C.length;V<$;V++)C[V]=0}function y(C){g(C,0)}function g(C,V){const $=u.newAttributes,ot=u.enabledAttributes,dt=u.attributeDivisors;$[C]=1,ot[C]===0&&(o.enableVertexAttribArray(C),ot[C]=1),dt[C]!==V&&(o.vertexAttribDivisor(C,V),dt[C]=V)}function O(){const C=u.newAttributes,V=u.enabledAttributes;for(let $=0,ot=V.length;$<ot;$++)V[$]!==C[$]&&(o.disableVertexAttribArray($),V[$]=0)}function U(C,V,$,ot,dt,ut,P){P===!0?o.vertexAttribIPointer(C,V,$,dt,ut):o.vertexAttribPointer(C,V,$,ot,dt,ut)}function I(C,V,$,ot){A();const dt=ot.attributes,ut=$.getAttributes(),P=V.defaultAttributeValues;for(const j in ut){const Y=ut[j];if(Y.location>=0){let gt=dt[j];if(gt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor)),gt!==void 0){const _t=gt.normalized,N=gt.itemSize,st=t.get(gt);if(st===void 0)continue;const yt=st.buffer,Et=st.type,Ot=st.bytesPerElement,it=Et===o.INT||Et===o.UNSIGNED_INT||gt.gpuType===Rd;if(gt.isInterleavedBufferAttribute){const ct=gt.data,Ct=ct.stride,Ft=gt.offset;if(ct.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)g(Y.location+Xt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)y(Y.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Xt=0;Xt<Y.locationSize;Xt++)U(Y.location+Xt,N/Y.locationSize,Et,_t,Ct*Ot,(Ft+N/Y.locationSize*Xt)*Ot,it)}else{if(gt.isInstancedBufferAttribute){for(let ct=0;ct<Y.locationSize;ct++)g(Y.location+ct,gt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ct=0;ct<Y.locationSize;ct++)y(Y.location+ct);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ct=0;ct<Y.locationSize;ct++)U(Y.location+ct,N/Y.locationSize,Et,_t,N*Ot,N/Y.locationSize*ct*Ot,it)}}else if(P!==void 0){const _t=P[j];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(Y.location,_t);break;case 3:o.vertexAttrib3fv(Y.location,_t);break;case 4:o.vertexAttrib4fv(Y.location,_t);break;default:o.vertexAttrib1fv(Y.location,_t)}}}}O()}function X(){et();for(const C in s){const V=s[C];for(const $ in V){const ot=V[$];for(const dt in ot)_(ot[dt].object),delete ot[dt];delete V[$]}delete s[C]}}function L(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const $ in V){const ot=V[$];for(const dt in ot)_(ot[dt].object),delete ot[dt];delete V[$]}delete s[C.id]}function B(C){for(const V in s){const $=s[V];if($[C.id]===void 0)continue;const ot=$[C.id];for(const dt in ot)_(ot[dt].object),delete ot[dt];delete $[C.id]}}function et(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:et,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:y,disableUnusedAttributes:O}}function KE(o,t,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=_[T];i.update(M,s,1)}function m(p,_,v,S){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],_[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,v);let T=0;for(let A=0;A<v;A++)T+=_[A]*S[A];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function QE(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Ti&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const et=B===Lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==zi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==pa&&!et)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(se("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),I=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=T>0,L=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:I,vertexTextures:X,maxSamples:L}}function JE(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Za,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||s!==0||l;return l=S,s=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,M){const T=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!l||T===null||T.length===0||u&&!y)u?_(null):p();else{const O=u?0:s,U=O*4;let I=g.clippingState||null;m.value=I,I=_(T,S,U,M);for(let X=0;X!==U;++X)I[X]=i[X];g.clippingState=I,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,S,M,T){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,T!==!0||y===null){const g=M+A*4,O=S.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<g)&&(y=new Float32Array(g));for(let U=0,I=M;U!==A;++U,I+=4)h.copy(v[U]).applyMatrix4(O,d),h.normal.toArray(y,I),y[I+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function $E(o){let t=new WeakMap;function i(h,d){return d===kh?h.mapping=Cr:d===Wh&&(h.mapping=Dr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===kh||d===Wh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new jy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Qa=4,fg=[.125,.215,.35,.446,.526,.582],Ts=20,t3=256,Io=new u_,hg=new xe;let Dh=null,wh=0,Uh=0,Lh=!1;const e3=new nt;class dg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=e3}=u;Dh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dh,wh,Uh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cr||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Lr,format:Ti,colorSpace:wr,depthBuffer:!1},l=pg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n3(u)),this._blurMaterial=a3(u,t,i),this._ggxMaterial=i3(u,t,i)}return l}_compileMaterial(t){const i=new Ri(new Ii,t);this._renderer.compile(i,Io)}_sceneToCubeUV(t,i,s,l,u){const m=new mi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(hg),v.toneMapping=Ja,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new Pr,new $g({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let g=!1;const O=t.background;O?O.isColor&&(y.color.copy(O),t.background=null,g=!0):(y.color.copy(hg),g=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[U],u.y,u.z)):I===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[U]));const X=this._cubeSize;Mr(l,I*X,U>2?X:0,X,X),v.setRenderTarget(l),g&&v.render(A,m),v.render(t,m)}v.toneMapping=M,v.autoClear=S,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Cr||t.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Mr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Io)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),S=.05+p*.95,M=v*S,{_lodMax:T}=this,A=this._sizeLods[s],y=3*A*(s>T-Qa?s-T+Qa:0),g=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=T-i,Mr(u,y,g,3*A,2*A),l.setRenderTarget(u),l.render(d,Io),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-s,Mr(t,y,g,3*A,2*A),l.setRenderTarget(t),l.render(d,Io)}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&en("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ts-1),A=u/T,y=isFinite(u)?1+Math.floor(_*A):Ts;y>Ts&&se(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ts}`);const g=[];let O=0;for(let B=0;B<Ts;++B){const et=B/A,D=Math.exp(-et*et/2);g.push(D),B===0?O+=D:B<y&&(O+=2*D)}for(let B=0;B<g.length;B++)g[B]=g[B]/O;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=T,S.mipInt.value=U-s;const I=this._sizeLods[l],X=3*I*(l>U-Qa?l-U+Qa:0),L=4*(this._cubeSize-I);Mr(i,X,L,3*I,2*I),m.setRenderTarget(i),m.render(v,Io)}}function n3(o){const t=[],i=[],s=[];let l=o;const u=o-Qa+1+fg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-Qa?m=fg[h-o+Qa-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,S=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,T=6,A=3,y=2,g=1,O=new Float32Array(A*T*M),U=new Float32Array(y*T*M),I=new Float32Array(g*T*M);for(let L=0;L<M;L++){const B=L%3*2/3-1,et=L>2?0:-1,D=[B,et,0,B+2/3,et,0,B+2/3,et+1,0,B,et,0,B+2/3,et+1,0,B,et+1,0];O.set(D,A*T*L),U.set(S,y*T*L);const C=[L,L,L,L,L,L];I.set(C,g*T*L)}const X=new Ii;X.setAttribute("position",new Pi(O,A)),X.setAttribute("uv",new Pi(U,y)),X.setAttribute("faceIndex",new Pi(I,g)),s.push(new Ri(X,null)),l>Qa&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function pg(o,t,i){const s=new Ds(o,t,i);return s.texture.mapping=Fc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Mr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function i3(o,t,i){return new ga({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:t3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function a3(o,t,i){const s=new Float32Array(Ts),l=new nt(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function mg(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function xg(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function s3(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===kh||m===Wh,_=m===Cr||m===Dr;if(p||_){let v=t.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new dg(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new dg(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function r3(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wo("WebGLRenderer: "+s+" extension not supported."),l}}}function o3(o,t,i,s){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,T=v.attributes.position;let A=0;if(M!==null){const O=M.array;A=M.version;for(let U=0,I=O.length;U<I;U+=3){const X=O[U+0],L=O[U+1],B=O[U+2];S.push(X,L,L,B,B,X)}}else if(T!==void 0){const O=T.array;A=T.version;for(let U=0,I=O.length/3-1;U<I;U+=3){const X=U+0,L=U+1,B=U+2;S.push(X,L,L,B,B,X)}}else return;const y=new(Kg(S)?e_:t_)(S,1);y.version=A;const g=u.get(v);g&&t.remove(g),u.set(v,y)}function _(v){const S=u.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function l3(o,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,T){T!==0&&(o.drawElementsInstanced(s,M,u,S*h,T),i.update(M,s,T))}function _(S,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,T);let y=0;for(let g=0;g<T;g++)y+=M[g];i.update(y,s,1)}function v(S,M,T,A){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<S.length;g++)p(S[g]/h,M[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,A,0,T);let g=0;for(let O=0;O<T;O++)g+=M[O]*A[O];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function c3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:en("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function u3(o,t,i){const s=new WeakMap,l=new nn;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let C=function(){et.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let I=0;T===!0&&(I=1),A===!0&&(I=2),y===!0&&(I=3);let X=d.attributes.position.count*I,L=1;X>t.maxTextureSize&&(L=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const B=new Float32Array(X*L*4*v),et=new Qg(B,X,L,v);et.type=pa,et.needsUpdate=!0;const D=I*4;for(let V=0;V<v;V++){const $=g[V],ot=O[V],dt=U[V],ut=X*L*4*V;for(let P=0;P<$.count;P++){const j=P*D;T===!0&&(l.fromBufferAttribute($,P),B[ut+j+0]=l.x,B[ut+j+1]=l.y,B[ut+j+2]=l.z,B[ut+j+3]=0),A===!0&&(l.fromBufferAttribute(ot,P),B[ut+j+4]=l.x,B[ut+j+5]=l.y,B[ut+j+6]=l.z,B[ut+j+7]=0),y===!0&&(l.fromBufferAttribute(dt,P),B[ut+j+8]=l.x,B[ut+j+9]=l.y,B[ut+j+10]=l.z,B[ut+j+11]=dt.itemSize===4?l.w:1)}}S={count:v,texture:et,size:new oe(X,L)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function f3(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const h_=new Bn,gg=new r_(1,1),d_=new Qg,p_=new Uy,m_=new a_,_g=[],vg=[],Sg=new Float32Array(16),yg=new Float32Array(9),Mg=new Float32Array(4);function zr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=_g[l];if(u===void 0&&(u=new Float32Array(l),_g[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function _n(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Xc(o,t){let i=vg[t];i===void 0&&(i=new Int32Array(t),vg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function h3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function d3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function p3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function m3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function x3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;Mg.set(s),o.uniformMatrix2fv(this.addr,!1,Mg),vn(i,s)}}function g3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;yg.set(s),o.uniformMatrix3fv(this.addr,!1,yg),vn(i,s)}}function _3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;Sg.set(s),o.uniformMatrix4fv(this.addr,!1,Sg),vn(i,s)}}function v3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function S3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function y3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function M3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function b3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function E3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function T3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function A3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function R3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(gg.compareFunction=Zg,u=gg):u=h_,i.setTexture2D(t||u,l)}function C3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||p_,l)}function D3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||m_,l)}function w3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||d_,l)}function U3(o){switch(o){case 5126:return h3;case 35664:return d3;case 35665:return p3;case 35666:return m3;case 35674:return x3;case 35675:return g3;case 35676:return _3;case 5124:case 35670:return v3;case 35667:case 35671:return S3;case 35668:case 35672:return y3;case 35669:case 35673:return M3;case 5125:return b3;case 36294:return E3;case 36295:return T3;case 36296:return A3;case 35678:case 36198:case 36298:case 36306:case 35682:return R3;case 35679:case 36299:case 36307:return C3;case 35680:case 36300:case 36308:case 36293:return D3;case 36289:case 36303:case 36311:case 36292:return w3}}function L3(o,t){o.uniform1fv(this.addr,t)}function N3(o,t){const i=zr(t,this.size,2);o.uniform2fv(this.addr,i)}function O3(o,t){const i=zr(t,this.size,3);o.uniform3fv(this.addr,i)}function P3(o,t){const i=zr(t,this.size,4);o.uniform4fv(this.addr,i)}function z3(o,t){const i=zr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function B3(o,t){const i=zr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function I3(o,t){const i=zr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function F3(o,t){o.uniform1iv(this.addr,t)}function H3(o,t){o.uniform2iv(this.addr,t)}function G3(o,t){o.uniform3iv(this.addr,t)}function V3(o,t){o.uniform4iv(this.addr,t)}function X3(o,t){o.uniform1uiv(this.addr,t)}function k3(o,t){o.uniform2uiv(this.addr,t)}function W3(o,t){o.uniform3uiv(this.addr,t)}function q3(o,t){o.uniform4uiv(this.addr,t)}function Y3(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);_n(s,u)||(o.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||h_,u[h])}function j3(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);_n(s,u)||(o.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||p_,u[h])}function Z3(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);_n(s,u)||(o.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||m_,u[h])}function K3(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);_n(s,u)||(o.uniform1iv(this.addr,u),vn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||d_,u[h])}function Q3(o){switch(o){case 5126:return L3;case 35664:return N3;case 35665:return O3;case 35666:return P3;case 35674:return z3;case 35675:return B3;case 35676:return I3;case 5124:case 35670:return F3;case 35667:case 35671:return H3;case 35668:case 35672:return G3;case 35669:case 35673:return V3;case 5125:return X3;case 36294:return k3;case 36295:return W3;case 36296:return q3;case 35678:case 36198:case 36298:case 36306:case 35682:return Y3;case 35679:case 36299:case 36307:return j3;case 35680:case 36300:case 36308:case 36293:return Z3;case 36289:case 36303:case 36311:case 36292:return K3}}class J3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=U3(i.type)}}class $3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Q3(i.type)}}class t1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function bg(o,t){o.seq.push(t),o.map[t.id]=t}function e1(o,t,i){const s=o.name,l=s.length;for(Nh.lastIndex=0;;){const u=Nh.exec(s),h=Nh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){bg(i,p===void 0?new J3(d,o,t):new $3(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new t1(d),bg(i,v)),i=v}}}class Nc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);e1(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Eg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const n1=37297;let i1=0;function a1(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Tg=new he;function s1(o){Le._getMatrix(Tg,Le.workingColorSpace,o);const t=`mat3( ${Tg.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case Oc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Ag(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+a1(o.getShaderSource(t),d)}else return u}function r1(o,t){const i=s1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function o1(o,t){let i;switch(t){case ay:i="Linear";break;case sy:i="Reinhard";break;case ry:i="Cineon";break;case oy:i="ACESFilmic";break;case cy:i="AgX";break;case uy:i="Neutral";break;case ly:i="Custom";break;default:se("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new nt;function l1(){Le.getLuminanceCoefficients(Ac);const o=Ac.x.toFixed(4),t=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function u1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function f1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Ho(o){return o!==""}function Rg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(o){return o.replace(h1,p1)}const d1=new Map;function p1(o,t){let i=me[t];if(i===void 0){const s=d1.get(t);if(s!==void 0)i=me[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ed(i)}const m1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(o){return o.replace(m1,x1)}function x1(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function wg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function g1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Bg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ig?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===fa&&(t="SHADOWMAP_TYPE_VSM"),t}function _1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cr:case Dr:t="ENVMAP_TYPE_CUBE";break;case Fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v1(o){let t="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Dr&&(t="ENVMAP_MODE_REFRACTION"),t}function S1(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Fg:t="ENVMAP_BLENDING_MULTIPLY";break;case ny:t="ENVMAP_BLENDING_MIX";break;case iy:t="ENVMAP_BLENDING_ADD";break}return t}function y1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function M1(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=g1(i),p=_1(i),_=v1(i),v=S1(i),S=y1(i),M=c1(i),T=u1(u),A=l.createProgram();let y,g,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ho).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ho).join(`
`),g.length>0&&(g+=`
`)):(y=[wg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),g=[wg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ja?"#define TONE_MAPPING":"",i.toneMapping!==Ja?me.tonemapping_pars_fragment:"",i.toneMapping!==Ja?o1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,r1("linearToOutputTexel",i.outputColorSpace),l1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=Ed(h),h=Rg(h,i),h=Cg(h,i),d=Ed(d),d=Rg(d,i),d=Cg(d,i),h=Dg(h),d=Dg(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===Px?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Px?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=O+y+h,I=O+g+d,X=Eg(l,l.VERTEX_SHADER,U),L=Eg(l,l.FRAGMENT_SHADER,I);l.attachShader(A,X),l.attachShader(A,L),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(V){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(A)||"",ot=l.getShaderInfoLog(X)||"",dt=l.getShaderInfoLog(L)||"",ut=$.trim(),P=ot.trim(),j=dt.trim();let Y=!0,gt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,X,L);else{const _t=Ag(l,X,"vertex"),N=Ag(l,L,"fragment");en("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ut+`
`+_t+`
`+N)}else ut!==""?se("WebGLProgram: Program Info Log:",ut):(P===""||j==="")&&(gt=!1);gt&&(V.diagnostics={runnable:Y,programLog:ut,vertexShader:{log:P,prefix:y},fragmentShader:{log:j,prefix:g}})}l.deleteShader(X),l.deleteShader(L),et=new Nc(l,A),D=f1(l,A)}let et;this.getUniforms=function(){return et===void 0&&B(this),et};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,n1)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=i1++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=X,this.fragmentShader=L,this}let b1=0;class E1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new T1(t),i.set(t,s)),s}}class T1{constructor(t){this.id=b1++,this.code=t,this.usedTimes=0}}function A1(o,t,i,s,l,u,h){const d=new Pd,m=new E1,p=new Set,_=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,C,V,$,ot){const dt=$.fog,ut=ot.geometry,P=D.isMeshStandardMaterial?$.environment:null,j=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),Y=j&&j.mapping===Fc?j.image.height:null,gt=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&se("WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const _t=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,N=_t!==void 0?_t.length:0;let st=0;ut.morphAttributes.position!==void 0&&(st=1),ut.morphAttributes.normal!==void 0&&(st=2),ut.morphAttributes.color!==void 0&&(st=3);let yt,Et,Ot,it;if(gt){const Ce=Ni[gt];yt=Ce.vertexShader,Et=Ce.fragmentShader}else yt=D.vertexShader,Et=D.fragmentShader,m.update(D),Ot=m.getVertexShaderID(D),it=m.getFragmentShaderID(D);const ct=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Ft=ot.isInstancedMesh===!0,Xt=ot.isBatchedMesh===!0,ce=!!D.map,an=!!D.matcap,de=!!j,Re=!!D.aoMap,F=!!D.lightMap,pe=!!D.bumpMap,ge=!!D.normalMap,Pe=!!D.displacementMap,Ht=!!D.emissiveMap,ke=!!D.metalnessMap,Yt=!!D.roughnessMap,ae=D.anisotropy>0,w=D.clearcoat>0,b=D.dispersion>0,K=D.iridescence>0,pt=D.sheen>0,vt=D.transmission>0,lt=ae&&!!D.anisotropyMap,Wt=w&&!!D.clearcoatMap,Ut=w&&!!D.clearcoatNormalMap,Kt=w&&!!D.clearcoatRoughnessMap,kt=K&&!!D.iridescenceMap,St=K&&!!D.iridescenceThicknessMap,bt=pt&&!!D.sheenColorMap,qt=pt&&!!D.sheenRoughnessMap,Gt=!!D.specularMap,Nt=!!D.specularColorMap,ne=!!D.specularIntensityMap,H=vt&&!!D.transmissionMap,Dt=vt&&!!D.thicknessMap,At=!!D.gradientMap,Rt=!!D.alphaMap,Mt=D.alphaTest>0,xt=!!D.alphaHash,zt=!!D.extensions;let ie=Ja;D.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ie={shaderID:gt,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Et,defines:D.defines,customVertexShaderID:Ot,customFragmentShaderID:it,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Xt,batchingColor:Xt&&ot._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&ot.instanceColor!==null,instancingMorph:Ft&&ot.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:wr,alphaToCoverage:!!D.alphaToCoverage,map:ce,matcap:an,envMap:de,envMapMode:de&&j.mapping,envMapCubeUVHeight:Y,aoMap:Re,lightMap:F,bumpMap:pe,normalMap:ge,displacementMap:S&&Pe,emissiveMap:Ht,normalMapObjectSpace:ge&&D.normalMapType===py,normalMapTangentSpace:ge&&D.normalMapType===jg,metalnessMap:ke,roughnessMap:Yt,anisotropy:ae,anisotropyMap:lt,clearcoat:w,clearcoatMap:Wt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:K,iridescenceMap:kt,iridescenceThicknessMap:St,sheen:pt,sheenColorMap:bt,sheenRoughnessMap:qt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:ne,transmission:vt,transmissionMap:H,thicknessMap:Dt,gradientMap:At,opaque:D.transparent===!1&&D.blending===Tr&&D.alphaToCoverage===!1,alphaMap:Rt,alphaTest:Mt,alphaHash:xt,combine:D.combine,mapUv:ce&&A(D.map.channel),aoMapUv:Re&&A(D.aoMap.channel),lightMapUv:F&&A(D.lightMap.channel),bumpMapUv:pe&&A(D.bumpMap.channel),normalMapUv:ge&&A(D.normalMap.channel),displacementMapUv:Pe&&A(D.displacementMap.channel),emissiveMapUv:Ht&&A(D.emissiveMap.channel),metalnessMapUv:ke&&A(D.metalnessMap.channel),roughnessMapUv:Yt&&A(D.roughnessMap.channel),anisotropyMapUv:lt&&A(D.anisotropyMap.channel),clearcoatMapUv:Wt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&A(D.sheenRoughnessMap.channel),specularMapUv:Gt&&A(D.specularMap.channel),specularColorMapUv:Nt&&A(D.specularColorMap.channel),specularIntensityMapUv:ne&&A(D.specularIntensityMap.channel),transmissionMapUv:H&&A(D.transmissionMap.channel),thicknessMapUv:Dt&&A(D.thicknessMap.channel),alphaMapUv:Rt&&A(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ge||ae),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ut.attributes.uv&&(ce||Rt),fog:!!dt,useFog:D.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ct,skinning:ot.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:st,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:ce&&D.map.isVideoTexture===!0&&Le.getTransfer(D.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ht&&D.emissiveMap.isVideoTexture===!0&&Le.getTransfer(D.emissiveMap.colorSpace)===Ve,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ha,flipSided:D.side===qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:zt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&D.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function g(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(O(C,D),U(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function I(D){const C=T[D.type];let V;if(C){const $=Ni[C];V=ky.clone($.uniforms)}else V=D.uniforms;return V}function X(D,C){let V;for(let $=0,ot=_.length;$<ot;$++){const dt=_[$];if(dt.cacheKey===C){V=dt,++V.usedTimes;break}}return V===void 0&&(V=new M1(o,C,D,u),_.push(V)),V}function L(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function B(D){m.remove(D)}function et(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:I,acquireProgram:X,releaseProgram:L,releaseShaderCache:B,programs:_,dispose:et}}function R1(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function C1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ug(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Lg(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,S,M,T,A,y){let g=o[t];return g===void 0?(g={id:v.id,object:v,geometry:S,material:M,groupOrder:T,renderOrder:v.renderOrder,z:A,group:y},o[t]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=M,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=A,g.group=y),t++,g}function d(v,S,M,T,A,y){const g=h(v,S,M,T,A,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,S,M,T,A,y){const g=h(v,S,M,T,A,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,S){i.length>1&&i.sort(v||C1),s.length>1&&s.sort(S||Ug),l.length>1&&l.sort(S||Ug)}function _(){for(let v=t,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function D1(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new Lg,o.set(s,[h])):l>=u.length?(h=new Lg,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function w1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new nt,color:new xe};break;case"SpotLight":i={position:new nt,direction:new nt,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[t.id]=i,i}}}function U1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let L1=0;function N1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function O1(o){const t=new w1,i=U1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new nt);const l=new nt,u=new Je,h=new Je;function d(p){let _=0,v=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,T=0,A=0,y=0,g=0,O=0,U=0,I=0,X=0,L=0,B=0;p.sort(N1);for(let D=0,C=p.length;D<C;D++){const V=p[D],$=V.color,ot=V.intensity,dt=V.distance,ut=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=$.r*ot,v+=$.g*ot,S+=$.b*ot;else if(V.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(V.sh.coefficients[P],ot);B++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=V.shadow.matrix,O++}s.directional[M]=P,M++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy($).multiplyScalar(ot),P.distance=dt,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,s.spot[A]=P;const j=V.shadow;if(V.map&&(s.spotLightMap[X]=V.map,X++,j.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[A]=j.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.spotShadow[A]=Y,s.spotShadowMap[A]=ut,I++}A++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy($).multiplyScalar(ot),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=P,y++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const j=V.shadow,Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,s.pointShadow[T]=Y,s.pointShadowMap[T]=ut,s.pointShadowMatrix[T]=V.shadow.matrix,U++}s.point[T]=P,T++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar(ot),P.groundColor.copy(V.groundColor).multiplyScalar(ot),s.hemi[g]=P,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=S;const et=s.hash;(et.directionalLength!==M||et.pointLength!==T||et.spotLength!==A||et.rectAreaLength!==y||et.hemiLength!==g||et.numDirectionalShadows!==O||et.numPointShadows!==U||et.numSpotShadows!==I||et.numSpotMaps!==X||et.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=T,s.hemi.length=g,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=I+X-L,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=B,et.directionalLength=M,et.pointLength=T,et.spotLength=A,et.rectAreaLength=y,et.hemiLength=g,et.numDirectionalShadows=O,et.numPointShadows=U,et.numSpotShadows=I,et.numSpotMaps=X,et.numLightProbes=B,s.version=L1++)}function m(p,_){let v=0,S=0,M=0,T=0,A=0;const y=_.matrixWorldInverse;for(let g=0,O=p.length;g<O;g++){const U=p[g];if(U.isDirectionalLight){const I=s.directional[v];I.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),v++}else if(U.isSpotLight){const I=s.spot[M];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const I=s.rectArea[T];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),h.identity(),u.copy(U.matrixWorld),u.premultiply(y),h.extractRotation(u),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),I.halfWidth.applyMatrix4(h),I.halfHeight.applyMatrix4(h),T++}else if(U.isPointLight){const I=s.point[S];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const I=s.hemi[A];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:s}}function Ng(o){const t=new O1(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function P1(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Ng(o),t.set(l,[d])):u>=h.length?(d=new Ng(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B1=`uniform sampler2D shadow_pass;
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
}`;function I1(o,t,i){let s=new Bd;const l=new oe,u=new oe,h=new nn,d=new iM({depthPacking:dy}),m=new aM,p={},_=i.maxTextureSize,v={[$a]:qn,[qn]:$a,[ha]:ha},S=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:z1,fragmentShader:B1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ii;T.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ri(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let g=this.type;this.render=function(L,B,et){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),$=o.state;$.setBlending(ma),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ot=g!==fa&&this.type===fa,dt=g===fa&&this.type!==fa;for(let ut=0,P=L.length;ut<P;ut++){const j=L[ut],Y=j.shadow;if(Y===void 0){se("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const gt=Y.getFrameExtents();if(l.multiply(gt),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/gt.x),l.x=u.x*gt.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/gt.y),l.y=u.y*gt.y,Y.mapSize.y=u.y)),Y.map===null||ot===!0||dt===!0){const N=this.type!==fa?{minFilter:si,magFilter:si}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ds(l.x,l.y,N),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const _t=Y.getViewportCount();for(let N=0;N<_t;N++){const st=Y.getViewport(N);h.set(u.x*st.x,u.y*st.y,u.x*st.z,u.y*st.w),$.viewport(h),Y.updateMatrices(j,N),s=Y.getFrustum(),I(B,et,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===fa&&O(Y,et),Y.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(D,C,V)};function O(L,B){const et=t.update(A);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ds(l.x,l.y)),S.uniforms.shadow_pass.value=L.map.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(B,null,et,S,A,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(B,null,et,M,A,null)}function U(L,B,et,D){let C=null;const V=et.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)C=V;else if(C=et.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=C.uuid,ot=B.uuid;let dt=p[$];dt===void 0&&(dt={},p[$]=dt);let ut=dt[ot];ut===void 0&&(ut=C.clone(),dt[ot]=ut,B.addEventListener("dispose",X)),C=ut}if(C.visible=B.visible,C.wireframe=B.wireframe,D===fa?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:v[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,et.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=o.properties.get(C);$.light=et}return C}function I(L,B,et,D,C){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===fa)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,L.matrixWorld);const ot=t.update(L),dt=L.material;if(Array.isArray(dt)){const ut=ot.groups;for(let P=0,j=ut.length;P<j;P++){const Y=ut[P],gt=dt[Y.materialIndex];if(gt&&gt.visible){const _t=U(L,gt,D,C);L.onBeforeShadow(o,L,B,et,ot,_t,Y),o.renderBufferDirect(et,null,ot,_t,L,Y),L.onAfterShadow(o,L,B,et,ot,_t,Y)}}}else if(dt.visible){const ut=U(L,dt,D,C);L.onBeforeShadow(o,L,B,et,ot,ut,null),o.renderBufferDirect(et,null,ot,ut,L,null),L.onAfterShadow(o,L,B,et,ot,ut,null)}}const $=L.children;for(let ot=0,dt=$.length;ot<dt;ot++)I($[ot],B,et,D,C)}function X(L){L.target.removeEventListener("dispose",X);for(const et in p){const D=p[et],C=L.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const F1={[Bh]:Ih,[Fh]:Vh,[Hh]:Xh,[Rr]:Gh,[Ih]:Bh,[Vh]:Fh,[Xh]:Hh,[Gh]:Rr};function H1(o,t){function i(){let H=!1;const Dt=new nn;let At=null;const Rt=new nn(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!H&&(o.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){H=Mt},setClear:function(Mt,xt,zt,ie,Ie){Ie===!0&&(Mt*=ie,xt*=ie,zt*=ie),Dt.set(Mt,xt,zt,ie),Rt.equals(Dt)===!1&&(o.clearColor(Mt,xt,zt,ie),Rt.copy(Dt))},reset:function(){H=!1,At=null,Rt.set(-1,0,0,0)}}}function s(){let H=!1,Dt=!1,At=null,Rt=null,Mt=null;return{setReversed:function(xt){if(Dt!==xt){const zt=t.get("EXT_clip_control");xt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Dt=xt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return Dt},setTest:function(xt){xt?ct(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(xt){At!==xt&&!H&&(o.depthMask(xt),At=xt)},setFunc:function(xt){if(Dt&&(xt=F1[xt]),Rt!==xt){switch(xt){case Bh:o.depthFunc(o.NEVER);break;case Ih:o.depthFunc(o.ALWAYS);break;case Fh:o.depthFunc(o.LESS);break;case Rr:o.depthFunc(o.LEQUAL);break;case Hh:o.depthFunc(o.EQUAL);break;case Gh:o.depthFunc(o.GEQUAL);break;case Vh:o.depthFunc(o.GREATER);break;case Xh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=xt}},setLocked:function(xt){H=xt},setClear:function(xt){Mt!==xt&&(Dt&&(xt=1-xt),o.clearDepth(xt),Mt=xt)},reset:function(){H=!1,At=null,Rt=null,Mt=null,Dt=!1}}}function l(){let H=!1,Dt=null,At=null,Rt=null,Mt=null,xt=null,zt=null,ie=null,Ie=null;return{setTest:function(Ce){H||(Ce?ct(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ce){Dt!==Ce&&!H&&(o.stencilMask(Ce),Dt=Ce)},setFunc:function(Ce,Un,Yn){(At!==Ce||Rt!==Un||Mt!==Yn)&&(o.stencilFunc(Ce,Un,Yn),At=Ce,Rt=Un,Mt=Yn)},setOp:function(Ce,Un,Yn){(xt!==Ce||zt!==Un||ie!==Yn)&&(o.stencilOp(Ce,Un,Yn),xt=Ce,zt=Un,ie=Yn)},setLocked:function(Ce){H=Ce},setClear:function(Ce){Ie!==Ce&&(o.clearStencil(Ce),Ie=Ce)},reset:function(){H=!1,Dt=null,At=null,Rt=null,Mt=null,xt=null,zt=null,ie=null,Ie=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},S=new WeakMap,M=[],T=null,A=!1,y=null,g=null,O=null,U=null,I=null,X=null,L=null,B=new xe(0,0,0),et=0,D=!1,C=null,V=null,$=null,ot=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=j>=2);let gt=null,_t={};const N=o.getParameter(o.SCISSOR_BOX),st=o.getParameter(o.VIEWPORT),yt=new nn().fromArray(N),Et=new nn().fromArray(st);function Ot(H,Dt,At,Rt){const Mt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(H,xt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<At;zt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Rt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Dt+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return xt}const it={};it[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Rr),pe(!1),ge(Dx),ct(o.CULL_FACE),Re(ma);function ct(H){_[H]!==!0&&(o.enable(H),_[H]=!0)}function Ct(H){_[H]!==!1&&(o.disable(H),_[H]=!1)}function Ft(H,Dt){return v[H]!==Dt?(o.bindFramebuffer(H,Dt),v[H]=Dt,H===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Dt),H===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Xt(H,Dt){let At=M,Rt=!1;if(H){At=S.get(Dt),At===void 0&&(At=[],S.set(Dt,At));const Mt=H.textures;if(At.length!==Mt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,zt=Mt.length;xt<zt;xt++)At[xt]=o.COLOR_ATTACHMENT0+xt;At.length=Mt.length,Rt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Rt=!0);Rt&&o.drawBuffers(At)}function ce(H){return T!==H?(o.useProgram(H),T=H,!0):!1}const an={[Es]:o.FUNC_ADD,[FS]:o.FUNC_SUBTRACT,[HS]:o.FUNC_REVERSE_SUBTRACT};an[GS]=o.MIN,an[VS]=o.MAX;const de={[XS]:o.ZERO,[kS]:o.ONE,[WS]:o.SRC_COLOR,[Ph]:o.SRC_ALPHA,[QS]:o.SRC_ALPHA_SATURATE,[ZS]:o.DST_COLOR,[YS]:o.DST_ALPHA,[qS]:o.ONE_MINUS_SRC_COLOR,[zh]:o.ONE_MINUS_SRC_ALPHA,[KS]:o.ONE_MINUS_DST_COLOR,[jS]:o.ONE_MINUS_DST_ALPHA,[JS]:o.CONSTANT_COLOR,[$S]:o.ONE_MINUS_CONSTANT_COLOR,[ty]:o.CONSTANT_ALPHA,[ey]:o.ONE_MINUS_CONSTANT_ALPHA};function Re(H,Dt,At,Rt,Mt,xt,zt,ie,Ie,Ce){if(H===ma){A===!0&&(Ct(o.BLEND),A=!1);return}if(A===!1&&(ct(o.BLEND),A=!0),H!==IS){if(H!==y||Ce!==D){if((g!==Es||I!==Es)&&(o.blendEquation(o.FUNC_ADD),g=Es,I=Es),Ce)switch(H){case Tr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wx:o.blendFunc(o.ONE,o.ONE);break;case Ux:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:en("WebGLState: Invalid blending: ",H);break}else switch(H){case Tr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ux:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lx:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",H);break}O=null,U=null,X=null,L=null,B.set(0,0,0),et=0,y=H,D=Ce}return}Mt=Mt||Dt,xt=xt||At,zt=zt||Rt,(Dt!==g||Mt!==I)&&(o.blendEquationSeparate(an[Dt],an[Mt]),g=Dt,I=Mt),(At!==O||Rt!==U||xt!==X||zt!==L)&&(o.blendFuncSeparate(de[At],de[Rt],de[xt],de[zt]),O=At,U=Rt,X=xt,L=zt),(ie.equals(B)===!1||Ie!==et)&&(o.blendColor(ie.r,ie.g,ie.b,Ie),B.copy(ie),et=Ie),y=H,D=!1}function F(H,Dt){H.side===ha?Ct(o.CULL_FACE):ct(o.CULL_FACE);let At=H.side===qn;Dt&&(At=!At),pe(At),H.blending===Tr&&H.transparent===!1?Re(ma):Re(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),u.setMask(H.colorWrite);const Rt=H.stencilWrite;d.setTest(Rt),Rt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function pe(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function ge(H){H!==zS?(ct(o.CULL_FACE),H!==V&&(H===Dx?o.cullFace(o.BACK):H===BS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),V=H}function Pe(H){H!==$&&(P&&o.lineWidth(H),$=H)}function Ht(H,Dt,At){H?(ct(o.POLYGON_OFFSET_FILL),(ot!==Dt||dt!==At)&&(o.polygonOffset(Dt,At),ot=Dt,dt=At)):Ct(o.POLYGON_OFFSET_FILL)}function ke(H){H?ct(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Yt(H){H===void 0&&(H=o.TEXTURE0+ut-1),gt!==H&&(o.activeTexture(H),gt=H)}function ae(H,Dt,At){At===void 0&&(gt===null?At=o.TEXTURE0+ut-1:At=gt);let Rt=_t[At];Rt===void 0&&(Rt={type:void 0,texture:void 0},_t[At]=Rt),(Rt.type!==H||Rt.texture!==Dt)&&(gt!==At&&(o.activeTexture(At),gt=At),o.bindTexture(H,Dt||it[H]),Rt.type=H,Rt.texture=Dt)}function w(){const H=_t[gt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function pt(){try{o.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function vt(){try{o.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Wt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ut(){try{o.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Kt(){try{o.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function kt(){try{o.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function St(){try{o.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function bt(H){yt.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),yt.copy(H))}function qt(H){Et.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Et.copy(H))}function Gt(H,Dt){let At=p.get(Dt);At===void 0&&(At=new WeakMap,p.set(Dt,At));let Rt=At.get(H);Rt===void 0&&(Rt=o.getUniformBlockIndex(Dt,H.name),At.set(H,Rt))}function Nt(H,Dt){const Rt=p.get(Dt).get(H);m.get(Dt)!==Rt&&(o.uniformBlockBinding(Dt,Rt,H.__bindingPointIndex),m.set(Dt,Rt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},gt=null,_t={},v={},S=new WeakMap,M=[],T=null,A=!1,y=null,g=null,O=null,U=null,I=null,X=null,L=null,B=new xe(0,0,0),et=0,D=!1,C=null,V=null,$=null,ot=null,dt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ct,disable:Ct,bindFramebuffer:Ft,drawBuffers:Xt,useProgram:ce,setBlending:Re,setMaterial:F,setFlipSided:pe,setCullFace:ge,setLineWidth:Pe,setPolygonOffset:Ht,setScissorTest:ke,activeTexture:Yt,bindTexture:ae,unbindTexture:w,compressedTexImage2D:b,compressedTexImage3D:K,texImage2D:kt,texImage3D:St,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Ut,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Wt,scissor:bt,viewport:qt,reset:ne}}function G1(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new oe,_=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(w,b){return M?new OffscreenCanvas(w,b):zc("canvas")}function A(w,b,K){let pt=1;const vt=ae(w);if((vt.width>K||vt.height>K)&&(pt=K/Math.max(vt.width,vt.height)),pt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const lt=Math.floor(pt*vt.width),Wt=Math.floor(pt*vt.height);v===void 0&&(v=T(lt,Wt));const Ut=b?T(lt,Wt):v;return Ut.width=lt,Ut.height=Wt,Ut.getContext("2d").drawImage(w,0,0,lt,Wt),se("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+Wt+")."),Ut}else return"data"in w&&se("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),w;return w}function y(w){return w.generateMipmaps}function g(w){o.generateMipmap(w)}function O(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(w,b,K,pt,vt=!1){if(w!==null){if(o[w]!==void 0)return o[w];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let lt=b;if(b===o.RED&&(K===o.FLOAT&&(lt=o.R32F),K===o.HALF_FLOAT&&(lt=o.R16F),K===o.UNSIGNED_BYTE&&(lt=o.R8)),b===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(lt=o.R8UI),K===o.UNSIGNED_SHORT&&(lt=o.R16UI),K===o.UNSIGNED_INT&&(lt=o.R32UI),K===o.BYTE&&(lt=o.R8I),K===o.SHORT&&(lt=o.R16I),K===o.INT&&(lt=o.R32I)),b===o.RG&&(K===o.FLOAT&&(lt=o.RG32F),K===o.HALF_FLOAT&&(lt=o.RG16F),K===o.UNSIGNED_BYTE&&(lt=o.RG8)),b===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(lt=o.RG8UI),K===o.UNSIGNED_SHORT&&(lt=o.RG16UI),K===o.UNSIGNED_INT&&(lt=o.RG32UI),K===o.BYTE&&(lt=o.RG8I),K===o.SHORT&&(lt=o.RG16I),K===o.INT&&(lt=o.RG32I)),b===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),K===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),K===o.UNSIGNED_INT&&(lt=o.RGB32UI),K===o.BYTE&&(lt=o.RGB8I),K===o.SHORT&&(lt=o.RGB16I),K===o.INT&&(lt=o.RGB32I)),b===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),K===o.UNSIGNED_INT&&(lt=o.RGBA32UI),K===o.BYTE&&(lt=o.RGBA8I),K===o.SHORT&&(lt=o.RGBA16I),K===o.INT&&(lt=o.RGBA32I)),b===o.RGB&&(K===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),b===o.RGBA){const Wt=vt?Oc:Le.getTransfer(pt);K===o.FLOAT&&(lt=o.RGBA32F),K===o.HALF_FLOAT&&(lt=o.RGBA16F),K===o.UNSIGNED_BYTE&&(lt=Wt===Ve?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function I(w,b){let K;return w?b===null||b===Rs||b===Vo?K=o.DEPTH24_STENCIL8:b===pa?K=o.DEPTH32F_STENCIL8:b===Go&&(K=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rs||b===Vo?K=o.DEPTH_COMPONENT24:b===pa?K=o.DEPTH_COMPONENT32F:b===Go&&(K=o.DEPTH_COMPONENT16),K}function X(w,b){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==si&&w.minFilter!==xi?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function L(w){const b=w.target;b.removeEventListener("dispose",L),et(b),b.isVideoTexture&&_.delete(b)}function B(w){const b=w.target;b.removeEventListener("dispose",B),C(b)}function et(w){const b=s.get(w);if(b.__webglInit===void 0)return;const K=w.source,pt=S.get(K);if(pt){const vt=pt[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(w),Object.keys(pt).length===0&&S.delete(K)}s.remove(w)}function D(w){const b=s.get(w);o.deleteTexture(b.__webglTexture);const K=w.source,pt=S.get(K);delete pt[b.__cacheKey],h.memory.textures--}function C(w){const b=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let vt=0;vt<b.__webglFramebuffer[pt].length;vt++)o.deleteFramebuffer(b.__webglFramebuffer[pt][vt]);else o.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)o.deleteFramebuffer(b.__webglFramebuffer[pt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=w.textures;for(let pt=0,vt=K.length;pt<vt;pt++){const lt=s.get(K[pt]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(K[pt])}s.remove(w)}let V=0;function $(){V=0}function ot(){const w=V;return w>=l.maxTextures&&se("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),V+=1,w}function dt(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function ut(w,b){const K=s.get(w);if(w.isVideoTexture&&ke(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&K.__version!==w.version){const pt=w.image;if(pt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{it(K,w,b);return}}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+b)}function P(w,b){const K=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){it(K,w,b);return}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+b)}function j(w,b){const K=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){it(K,w,b);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+b)}function Y(w,b){const K=s.get(w);if(w.version>0&&K.__version!==w.version){ct(K,w,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+b)}const gt={[qh]:o.REPEAT,[da]:o.CLAMP_TO_EDGE,[Yh]:o.MIRRORED_REPEAT},_t={[si]:o.NEAREST,[fy]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[xi]:o.LINEAR,[ih]:o.LINEAR_MIPMAP_NEAREST,[As]:o.LINEAR_MIPMAP_LINEAR},N={[my]:o.NEVER,[yy]:o.ALWAYS,[xy]:o.LESS,[Zg]:o.LEQUAL,[gy]:o.EQUAL,[Sy]:o.GEQUAL,[_y]:o.GREATER,[vy]:o.NOTEQUAL};function st(w,b){if(b.type===pa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===xi||b.magFilter===ih||b.magFilter===sc||b.magFilter===As||b.minFilter===xi||b.minFilter===ih||b.minFilter===sc||b.minFilter===As)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,gt[b.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,gt[b.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,gt[b.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,_t[b.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===si||b.minFilter!==sc&&b.minFilter!==As||b.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");o.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function yt(w,b){let K=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",L));const pt=b.source;let vt=S.get(pt);vt===void 0&&(vt={},S.set(pt,vt));const lt=dt(b);if(lt!==w.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,K=!0),vt[lt].usedTimes++;const Wt=vt[w.__cacheKey];Wt!==void 0&&(vt[w.__cacheKey].usedTimes--,Wt.usedTimes===0&&D(b)),w.__cacheKey=lt,w.__webglTexture=vt[lt].texture}return K}function Et(w,b,K){return Math.floor(Math.floor(w/K)/b)}function Ot(w,b,K,pt){const lt=w.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,K,pt,b.data);else{lt.sort((St,bt)=>St.start-bt.start);let Wt=0;for(let St=1;St<lt.length;St++){const bt=lt[Wt],qt=lt[St],Gt=bt.start+bt.count,Nt=Et(qt.start,b.width,4),ne=Et(bt.start,b.width,4);qt.start<=Gt+1&&Nt===ne&&Et(qt.start+qt.count-1,b.width,4)===Nt?bt.count=Math.max(bt.count,qt.start+qt.count-bt.start):(++Wt,lt[Wt]=qt)}lt.length=Wt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let St=0,bt=lt.length;St<bt;St++){const qt=lt[St],Gt=Math.floor(qt.start/4),Nt=Math.ceil(qt.count/4),ne=Gt%b.width,H=Math.floor(Gt/b.width),Dt=Nt,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),i.texSubImage2D(o.TEXTURE_2D,0,ne,H,Dt,At,K,pt,b.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function it(w,b,K){let pt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=o.TEXTURE_3D);const vt=yt(w,b),lt=b.source;i.bindTexture(pt,w.__webglTexture,o.TEXTURE0+K);const Wt=s.get(lt);if(lt.version!==Wt.__version||vt===!0){i.activeTexture(o.TEXTURE0+K);const Ut=Le.getPrimaries(Le.workingColorSpace),Kt=b.colorSpace===Ka?null:Le.getPrimaries(b.colorSpace),kt=b.colorSpace===Ka||Ut===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let St=A(b.image,!1,l.maxTextureSize);St=Yt(b,St);const bt=u.convert(b.format,b.colorSpace),qt=u.convert(b.type);let Gt=U(b.internalFormat,bt,qt,b.colorSpace,b.isVideoTexture);st(pt,b);let Nt;const ne=b.mipmaps,H=b.isVideoTexture!==!0,Dt=Wt.__version===void 0||vt===!0,At=lt.dataReady,Rt=X(b,St);if(b.isDepthTexture)Gt=I(b.format===ko,b.type),Dt&&(H?i.texStorage2D(o.TEXTURE_2D,1,Gt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Gt,St.width,St.height,0,bt,qt,null));else if(b.isDataTexture)if(ne.length>0){H&&Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,ne[0].width,ne[0].height);for(let Mt=0,xt=ne.length;Mt<xt;Mt++)Nt=ne[Mt],H?At&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,qt,Nt.data):i.texImage2D(o.TEXTURE_2D,Mt,Gt,Nt.width,Nt.height,0,bt,qt,Nt.data);b.generateMipmaps=!1}else H?(Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,St.width,St.height),At&&Ot(b,St,bt,qt)):i.texImage2D(o.TEXTURE_2D,0,Gt,St.width,St.height,0,bt,qt,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Gt,ne[0].width,ne[0].height,St.depth);for(let Mt=0,xt=ne.length;Mt<xt;Mt++)if(Nt=ne[Mt],b.format!==Ti)if(bt!==null)if(H){if(At)if(b.layerUpdates.size>0){const zt=ug(Nt.width,Nt.height,b.format,b.type);for(const ie of b.layerUpdates){const Ie=Nt.data.subarray(ie*zt/Nt.data.BYTES_PER_ELEMENT,(ie+1)*zt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ie,Nt.width,Nt.height,1,bt,Ie)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Nt.width,Nt.height,St.depth,bt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Gt,Nt.width,Nt.height,St.depth,0,Nt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Nt.width,Nt.height,St.depth,bt,qt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Gt,Nt.width,Nt.height,St.depth,0,bt,qt,Nt.data)}else{H&&Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,ne[0].width,ne[0].height);for(let Mt=0,xt=ne.length;Mt<xt;Mt++)Nt=ne[Mt],b.format!==Ti?bt!==null?H?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Gt,Nt.width,Nt.height,0,Nt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?At&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,qt,Nt.data):i.texImage2D(o.TEXTURE_2D,Mt,Gt,Nt.width,Nt.height,0,bt,qt,Nt.data)}else if(b.isDataArrayTexture)if(H){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Gt,St.width,St.height,St.depth),At)if(b.layerUpdates.size>0){const Mt=ug(St.width,St.height,b.format,b.type);for(const xt of b.layerUpdates){const zt=St.data.subarray(xt*Mt/St.data.BYTES_PER_ELEMENT,(xt+1)*Mt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,bt,qt,zt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,bt,qt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,St.width,St.height,St.depth,0,bt,qt,St.data);else if(b.isData3DTexture)H?(Dt&&i.texStorage3D(o.TEXTURE_3D,Rt,Gt,St.width,St.height,St.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,bt,qt,St.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,St.width,St.height,St.depth,0,bt,qt,St.data);else if(b.isFramebufferTexture){if(Dt)if(H)i.texStorage2D(o.TEXTURE_2D,Rt,Gt,St.width,St.height);else{let Mt=St.width,xt=St.height;for(let zt=0;zt<Rt;zt++)i.texImage2D(o.TEXTURE_2D,zt,Gt,Mt,xt,0,bt,qt,null),Mt>>=1,xt>>=1}}else if(ne.length>0){if(H&&Dt){const Mt=ae(ne[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Gt,Mt.width,Mt.height)}for(let Mt=0,xt=ne.length;Mt<xt;Mt++)Nt=ne[Mt],H?At&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,bt,qt,Nt):i.texImage2D(o.TEXTURE_2D,Mt,Gt,bt,qt,Nt);b.generateMipmaps=!1}else if(H){if(Dt){const Mt=ae(St);i.texStorage2D(o.TEXTURE_2D,Rt,Gt,Mt.width,Mt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,qt,St)}else i.texImage2D(o.TEXTURE_2D,0,Gt,bt,qt,St);y(b)&&g(pt),Wt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function ct(w,b,K){if(b.image.length!==6)return;const pt=yt(w,b),vt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+K);const lt=s.get(vt);if(vt.version!==lt.__version||pt===!0){i.activeTexture(o.TEXTURE0+K);const Wt=Le.getPrimaries(Le.workingColorSpace),Ut=b.colorSpace===Ka?null:Le.getPrimaries(b.colorSpace),Kt=b.colorSpace===Ka||Wt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const kt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let xt=0;xt<6;xt++)!kt&&!St?bt[xt]=A(b.image[xt],!0,l.maxCubemapSize):bt[xt]=St?b.image[xt].image:b.image[xt],bt[xt]=Yt(b,bt[xt]);const qt=bt[0],Gt=u.convert(b.format,b.colorSpace),Nt=u.convert(b.type),ne=U(b.internalFormat,Gt,Nt,b.colorSpace),H=b.isVideoTexture!==!0,Dt=lt.__version===void 0||pt===!0,At=vt.dataReady;let Rt=X(b,qt);st(o.TEXTURE_CUBE_MAP,b);let Mt;if(kt){H&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ne,qt.width,qt.height);for(let xt=0;xt<6;xt++){Mt=bt[xt].mipmaps;for(let zt=0;zt<Mt.length;zt++){const ie=Mt[zt];b.format!==Ti?Gt!==null?H?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,0,0,ie.width,ie.height,Gt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,ne,ie.width,ie.height,0,ie.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,0,0,ie.width,ie.height,Gt,Nt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,ne,ie.width,ie.height,0,Gt,Nt,ie.data)}}}else{if(Mt=b.mipmaps,H&&Dt){Mt.length>0&&Rt++;const xt=ae(bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,bt[xt].width,bt[xt].height,Gt,Nt,bt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,bt[xt].width,bt[xt].height,0,Gt,Nt,bt[xt].data);for(let zt=0;zt<Mt.length;zt++){const Ie=Mt[zt].image[xt].image;H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,0,0,Ie.width,Ie.height,Gt,Nt,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,ne,Ie.width,Ie.height,0,Gt,Nt,Ie.data)}}else{H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Gt,Nt,bt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Gt,Nt,bt[xt]);for(let zt=0;zt<Mt.length;zt++){const ie=Mt[zt];H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,0,0,Gt,Nt,ie.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,ne,Gt,Nt,ie.image[xt])}}}y(b)&&g(o.TEXTURE_CUBE_MAP),lt.__version=vt.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ct(w,b,K,pt,vt,lt){const Wt=u.convert(K.format,K.colorSpace),Ut=u.convert(K.type),Kt=U(K.internalFormat,Wt,Ut,K.colorSpace),kt=s.get(b),St=s.get(K);if(St.__renderTarget=b,!kt.__hasExternalTextures){const bt=Math.max(1,b.width>>lt),qt=Math.max(1,b.height>>lt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,Kt,bt,qt,b.depth,0,Wt,Ut,null):i.texImage2D(vt,lt,Kt,bt,qt,0,Wt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),Ht(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,vt,St.__webglTexture,0,Pe(b)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,vt,St.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(w,b,K){if(o.bindRenderbuffer(o.RENDERBUFFER,w),b.depthBuffer){const pt=b.depthTexture,vt=pt&&pt.isDepthTexture?pt.type:null,lt=I(b.stencilBuffer,vt),Wt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Pe(b);Ht(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,lt,b.width,b.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,lt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,lt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,w)}else{const pt=b.textures;for(let vt=0;vt<pt.length;vt++){const lt=pt[vt],Wt=u.convert(lt.format,lt.colorSpace),Ut=u.convert(lt.type),Kt=U(lt.internalFormat,Wt,Ut,lt.colorSpace),kt=Pe(b);K&&Ht(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Kt,b.width,b.height):Ht(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,Kt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ut(b.depthTexture,0);const vt=pt.__webglTexture,lt=Pe(b);if(b.depthTexture.format===Xo)Ht(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(b.depthTexture.format===ko)Ht(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ce(w){const b=s.get(w),K=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const pt=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",vt)};pt.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=pt}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const pt=w.texture.mipmaps;pt&&pt.length>0?Xt(b.__webglFramebuffer[0],w):Xt(b.__webglFramebuffer,w)}else if(K){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=o.createRenderbuffer(),Ft(b.__webglDepthbuffer[pt],w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}else{const pt=w.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ft(b.__webglDepthbuffer,w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function an(w,b,K){const pt=s.get(w);b!==void 0&&Ct(pt.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&ce(w)}function de(w){const b=w.texture,K=s.get(w),pt=s.get(b);w.addEventListener("dispose",B);const vt=w.textures,lt=w.isWebGLCubeRenderTarget===!0,Wt=vt.length>1;if(Wt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=b.version,h.memory.textures++),lt){K.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Ut]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)K.__webglFramebuffer[Ut][Kt]=o.createFramebuffer()}else K.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)K.__webglFramebuffer[Ut]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Ut=0,Kt=vt.length;Ut<Kt;Ut++){const kt=s.get(vt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(w.samples>0&&Ht(w)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Kt=vt[Ut];K.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Ut]);const kt=u.convert(Kt.format,Kt.colorSpace),St=u.convert(Kt.type),bt=U(Kt.internalFormat,kt,St,Kt.colorSpace,w.isXRRenderTarget===!0),qt=Pe(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,bt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,K.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(K.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),st(o.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(K.__webglFramebuffer[Ut][Kt],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Kt);else Ct(K.__webglFramebuffer[Ut],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(b)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Ut=0,Kt=vt.length;Ut<Kt;Ut++){const kt=vt[Ut],St=s.get(kt);let bt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(bt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,St.__webglTexture),st(bt,kt),Ct(K.__webglFramebuffer,w,kt,o.COLOR_ATTACHMENT0+Ut,bt,0),y(kt)&&g(bt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ut=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,pt.__webglTexture),st(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(K.__webglFramebuffer[Kt],w,b,o.COLOR_ATTACHMENT0,Ut,Kt);else Ct(K.__webglFramebuffer,w,b,o.COLOR_ATTACHMENT0,Ut,0);y(b)&&g(Ut),i.unbindTexture()}w.depthBuffer&&ce(w)}function Re(w){const b=w.textures;for(let K=0,pt=b.length;K<pt;K++){const vt=b[K];if(y(vt)){const lt=O(w),Wt=s.get(vt).__webglTexture;i.bindTexture(lt,Wt),g(lt),i.unbindTexture()}}}const F=[],pe=[];function ge(w){if(w.samples>0){if(Ht(w)===!1){const b=w.textures,K=w.width,pt=w.height;let vt=o.COLOR_BUFFER_BIT;const lt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=s.get(w),Ut=b.length>1;if(Ut)for(let kt=0;kt<b.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Kt=w.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let kt=0;kt<b.length;kt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[kt]);const St=s.get(b[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,K,pt,0,0,K,pt,vt,o.NEAREST),m===!0&&(F.length=0,pe.length=0,F.push(o.COLOR_ATTACHMENT0+kt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(F.push(lt),pe.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,pe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<b.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[kt]);const St=s.get(b[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const b=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Pe(w){return Math.min(l.maxSamples,w.samples)}function Ht(w){const b=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ke(w){const b=h.render.frame;_.get(w)!==b&&(_.set(w,b),w.update())}function Yt(w,b){const K=w.colorSpace,pt=w.format,vt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||K!==wr&&K!==Ka&&(Le.getTransfer(K)===Ve?(pt!==Ti||vt!==zi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",K)),b}function ae(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=$,this.setTexture2D=ut,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=an,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ht}function V1(o,t){function i(s,l=Ka){let u;const h=Le.getTransfer(l);if(s===zi)return o.UNSIGNED_BYTE;if(s===Cd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Dd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Xg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===kg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Gg)return o.BYTE;if(s===Vg)return o.SHORT;if(s===Go)return o.UNSIGNED_SHORT;if(s===Rd)return o.INT;if(s===Rs)return o.UNSIGNED_INT;if(s===pa)return o.FLOAT;if(s===Lr)return o.HALF_FLOAT;if(s===Wg)return o.ALPHA;if(s===qg)return o.RGB;if(s===Ti)return o.RGBA;if(s===Xo)return o.DEPTH_COMPONENT;if(s===ko)return o.DEPTH_STENCIL;if(s===Yg)return o.RED;if(s===wd)return o.RED_INTEGER;if(s===Ud)return o.RG;if(s===Ld)return o.RG_INTEGER;if(s===Nd)return o.RGBA_INTEGER;if(s===Cc||s===Dc||s===wc||s===Uc)if(h===Ve)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Cc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Cc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jh||s===Zh||s===Kh||s===Qh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jh||s===$h||s===td)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Jh||s===$h)return h===Ve?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===td)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ed)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===id)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ad)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===od)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ld)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ud)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===md||s===xd||s===gd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===md)return h===Ve?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_d||s===vd||s===Sd||s===yd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===_d)return u.COMPRESSED_RED_RGTC1_EXT;if(s===vd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const X1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k1=`
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

}`;class W1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new o_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ga({vertexShader:X1,fragmentShader:k1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Yo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q1 extends ws{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,S=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",y=new W1,g={},O=i.getContextAttributes();let U=null,I=null;const X=[],L=[],B=new oe;let et=null;const D=new mi;D.viewport=new nn;const C=new mi;C.viewport=new nn;const V=[D,C],$=new lM;let ot=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ct=X[it];return ct===void 0&&(ct=new Th,X[it]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(it){let ct=X[it];return ct===void 0&&(ct=new Th,X[it]=ct),ct.getGripSpace()},this.getHand=function(it){let ct=X[it];return ct===void 0&&(ct=new Th,X[it]=ct),ct.getHandSpace()};function ut(it){const ct=L.indexOf(it.inputSource);if(ct===-1)return;const Ct=X[ct];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,p||h),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function P(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",j);for(let it=0;it<X.length;it++){const ct=L[it];ct!==null&&(L[it]=null,X[it].disconnect(ct))}ot=null,dt=null,y.reset();for(const it in g)delete g[it];t.setRenderTarget(U),M=null,S=null,v=null,l=null,I=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(et),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",P),l.addEventListener("inputsourceschange",j),O.xrCompatible!==!0&&await i.makeXRCompatible(),et=t.getPixelRatio(),t.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Ft=null,Xt=null;O.depth&&(Xt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=O.stencil?ko:Xo,Ft=O.stencil?Vo:Rs);const ce={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};v=this.getBinding(),S=v.createProjectionLayer(ce),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),I=new Ds(S.textureWidth,S.textureHeight,{format:Ti,type:zi,depthTexture:new r_(S.textureWidth,S.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ct={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Ds(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(it){for(let ct=0;ct<it.removed.length;ct++){const Ct=it.removed[ct],Ft=L.indexOf(Ct);Ft>=0&&(L[Ft]=null,X[Ft].disconnect(Ct))}for(let ct=0;ct<it.added.length;ct++){const Ct=it.added[ct];let Ft=L.indexOf(Ct);if(Ft===-1){for(let ce=0;ce<X.length;ce++)if(ce>=L.length){L.push(Ct),Ft=ce;break}else if(L[ce]===null){L[ce]=Ct,Ft=ce;break}if(Ft===-1)break}const Xt=X[Ft];Xt&&Xt.connect(Ct)}}const Y=new nt,gt=new nt;function _t(it,ct,Ct){Y.setFromMatrixPosition(ct.matrixWorld),gt.setFromMatrixPosition(Ct.matrixWorld);const Ft=Y.distanceTo(gt),Xt=ct.projectionMatrix.elements,ce=Ct.projectionMatrix.elements,an=Xt[14]/(Xt[10]-1),de=Xt[14]/(Xt[10]+1),Re=(Xt[9]+1)/Xt[5],F=(Xt[9]-1)/Xt[5],pe=(Xt[8]-1)/Xt[0],ge=(ce[8]+1)/ce[0],Pe=an*pe,Ht=an*ge,ke=Ft/(-pe+ge),Yt=ke*-pe;if(ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Yt),it.translateZ(ke),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Xt[10]===-1)it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const ae=an+ke,w=de+ke,b=Pe-Yt,K=Ht+(Ft-Yt),pt=Re*de/w*ae,vt=F*de/w*ae;it.projectionMatrix.makePerspective(b,K,pt,vt,ae,w),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function N(it,ct){ct===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ct.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ct=it.near,Ct=it.far;y.texture!==null&&(y.depthNear>0&&(ct=y.depthNear),y.depthFar>0&&(Ct=y.depthFar)),$.near=C.near=D.near=ct,$.far=C.far=D.far=Ct,(ot!==$.near||dt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),ot=$.near,dt=$.far),$.layers.mask=it.layers.mask|6,D.layers.mask=$.layers.mask&3,C.layers.mask=$.layers.mask&5;const Ft=it.parent,Xt=$.cameras;N($,Ft);for(let ce=0;ce<Xt.length;ce++)N(Xt[ce],Ft);Xt.length===2?_t($,D,C):$.projectionMatrix.copy(D.projectionMatrix),st(it,$,Ft)};function st(it,ct,Ct){Ct===null?it.matrix.copy(ct.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Md*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(it){m=it,S!==null&&(S.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(it){return g[it]};let yt=null;function Et(it,ct){if(_=ct.getViewerPose(p||h),T=ct,_!==null){const Ct=_.views;M!==null&&(t.setRenderTargetFramebuffer(I,M.framebuffer),t.setRenderTarget(I));let Ft=!1;Ct.length!==$.cameras.length&&($.cameras.length=0,Ft=!0);for(let de=0;de<Ct.length;de++){const Re=Ct[de];let F=null;if(M!==null)F=M.getViewport(Re);else{const ge=v.getViewSubImage(S,Re);F=ge.viewport,de===0&&(t.setRenderTargetTextures(I,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(I))}let pe=V[de];pe===void 0&&(pe=new mi,pe.layers.enable(de),pe.viewport=new nn,V[de]=pe),pe.matrix.fromArray(Re.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Re.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(F.x,F.y,F.width,F.height),de===0&&($.matrix.copy(pe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ft===!0&&$.cameras.push(pe)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=s.getBinding();const de=v.getDepthInformation(Ct[0]);de&&de.isValid&&de.texture&&y.init(de,l.renderState)}if(Xt&&Xt.includes("camera-access")&&A){t.state.unbindTexture(),v=s.getBinding();for(let de=0;de<Ct.length;de++){const Re=Ct[de].camera;if(Re){let F=g[Re];F||(F=new o_,g[Re]=F);const pe=v.getCameraImage(Re);F.sourceTexture=pe}}}}for(let Ct=0;Ct<X.length;Ct++){const Ft=L[Ct],Xt=X[Ct];Ft!==null&&Xt!==void 0&&Xt.update(Ft,ct,p||h)}yt&&yt(it,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),T=null}const Ot=new f_;Ot.setAnimationLoop(Et),this.setAnimationLoop=function(it){yt=it},this.dispose=function(){}}}const bs=new Bi,Y1=new Je;function j1(o,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,n_(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,O,U,I){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),S(y,g),g.isMeshPhysicalMaterial&&M(y,g,I)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),A(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,O,U):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===qn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===qn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const O=t.get(g),U=O.envMap,I=O.envMapRotation;U&&(y.envMap.value=U,bs.copy(I),bs.x*=-1,bs.y*=-1,bs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),y.envMapRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(bs)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,O,U){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*O,y.scale.value=U*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function S(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,O){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const O=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Z1(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const I=U.program;s.uniformBlockBinding(O,I)}function p(O,U){let I=l[O.id];I===void 0&&(T(O),I=_(O),l[O.id]=I,O.addEventListener("dispose",y));const X=U.program;s.updateUBOMapping(O,X);const L=t.render.frame;u[O.id]!==L&&(S(O),u[O.id]=L)}function _(O){const U=v();O.__bindingPointIndex=U;const I=o.createBuffer(),X=O.__size,L=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,I),o.bufferData(o.UNIFORM_BUFFER,X,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,I),I}function v(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const U=l[O.id],I=O.uniforms,X=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let L=0,B=I.length;L<B;L++){const et=Array.isArray(I[L])?I[L]:[I[L]];for(let D=0,C=et.length;D<C;D++){const V=et[D];if(M(V,L,D,X)===!0){const $=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let dt=0;for(let ut=0;ut<ot.length;ut++){const P=ot[ut],j=A(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,$+dt,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,dt),dt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,U,I,X){const L=O.value,B=U+"_"+I;if(X[B]===void 0)return typeof L=="number"||typeof L=="boolean"?X[B]=L:X[B]=L.clone(),!0;{const et=X[B];if(typeof L=="number"||typeof L=="boolean"){if(et!==L)return X[B]=L,!0}else if(et.equals(L)===!1)return et.copy(L),!0}return!1}function T(O){const U=O.uniforms;let I=0;const X=16;for(let B=0,et=U.length;B<et;B++){const D=Array.isArray(U[B])?U[B]:[U[B]];for(let C=0,V=D.length;C<V;C++){const $=D[C],ot=Array.isArray($.value)?$.value:[$.value];for(let dt=0,ut=ot.length;dt<ut;dt++){const P=ot[dt],j=A(P),Y=I%X,gt=Y%j.boundary,_t=Y+gt;I+=gt,_t!==0&&X-_t<j.storage&&(I+=X-_t),$.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=I,I+=j.storage}}}const L=I%X;return L>0&&(I+=X-L),O.__size=I,O.__cache={},this}function A(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const I=h.indexOf(U.__bindingPointIndex);h.splice(I,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function g(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}const K1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ua=null;function Q1(){return ua===null&&(ua=new Qy(K1,32,32,Ud,Lr),ua.minFilter=xi,ua.magFilter=xi,ua.wrapS=da,ua.wrapT=da,ua.generateMipmaps=!1,ua.needsUpdate=!0),ua}class J1{constructor(t={}){const{canvas:i=My(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const T=new Set([Nd,Ld,wd]),A=new Set([zi,Rs,Go,Vo,Cd,Dd]),y=new Uint32Array(4),g=new Int32Array(4);let O=null,U=null;const I=[],X=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let B=!1;this._outputColorSpace=ai;let et=0,D=0,C=null,V=-1,$=null;const ot=new nn,dt=new nn;let ut=null;const P=new xe(0);let j=0,Y=i.width,gt=i.height,_t=1,N=null,st=null;const yt=new nn(0,0,Y,gt),Et=new nn(0,0,Y,gt);let Ot=!1;const it=new Bd;let ct=!1,Ct=!1;const Ft=new Je,Xt=new nt,ce=new nn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Re(){return C===null?_t:1}let F=s;function pe(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ad}`),i.addEventListener("webglcontextlost",Mt,!1),i.addEventListener("webglcontextrestored",xt,!1),i.addEventListener("webglcontextcreationerror",zt,!1),F===null){const k="webgl2";if(F=pe(k,R),F===null)throw pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ge,Pe,Ht,ke,Yt,ae,w,b,K,pt,vt,lt,Wt,Ut,Kt,kt,St,bt,qt,Gt,Nt,ne,H,Dt;function At(){ge=new r3(F),ge.init(),ne=new V1(F,ge),Pe=new QE(F,ge,t,ne),Ht=new H1(F,ge),Pe.reversedDepthBuffer&&S&&Ht.buffers.depth.setReversed(!0),ke=new c3(F),Yt=new R1,ae=new G1(F,ge,Ht,Yt,Pe,ne,ke),w=new $E(L),b=new s3(L),K=new dM(F),H=new ZE(F,K),pt=new o3(F,K,ke,H),vt=new f3(F,pt,K,ke),qt=new u3(F,Pe,ae),kt=new JE(Yt),lt=new A1(L,w,b,ge,Pe,H,kt),Wt=new j1(L,Yt),Ut=new D1,Kt=new P1(ge),bt=new jE(L,w,b,Ht,vt,M,m),St=new I1(L,vt,Pe),Dt=new Z1(F,ke,Pe,Ht),Gt=new KE(F,ge,ke),Nt=new l3(F,ge,ke),ke.programs=lt.programs,L.capabilities=Pe,L.extensions=ge,L.properties=Yt,L.renderLists=Ut,L.shadowMap=St,L.state=Ht,L.info=ke}At();const Rt=new q1(L,F);this.xr=Rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(Y,gt,!1))},this.getSize=function(R){return R.set(Y,gt)},this.setSize=function(R,k,at=!0){if(Rt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,gt=k,i.width=Math.floor(R*_t),i.height=Math.floor(k*_t),at===!0&&(i.style.width=R+"px",i.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(Y*_t,gt*_t).floor()},this.setDrawingBufferSize=function(R,k,at){Y=R,gt=k,_t=at,i.width=Math.floor(R*at),i.height=Math.floor(k*at),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(ot)},this.getViewport=function(R){return R.copy(yt)},this.setViewport=function(R,k,at,J){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,k,at,J),Ht.viewport(ot.copy(yt).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(Et)},this.setScissor=function(R,k,at,J){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,k,at,J),Ht.scissor(dt.copy(Et).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(R){Ht.setScissorTest(Ot=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){st=R},this.getClearColor=function(R){return R.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,at=!0){let J=0;if(R){let q=!1;if(C!==null){const Tt=C.texture.format;q=T.has(Tt)}if(q){const Tt=C.texture.type,wt=A.has(Tt),Pt=bt.getClearColor(),Bt=bt.getClearAlpha(),Jt=Pt.r,te=Pt.g,jt=Pt.b;wt?(y[0]=Jt,y[1]=te,y[2]=jt,y[3]=Bt,F.clearBufferuiv(F.COLOR,0,y)):(g[0]=Jt,g[1]=te,g[2]=jt,g[3]=Bt,F.clearBufferiv(F.COLOR,0,g))}else J|=F.COLOR_BUFFER_BIT}k&&(J|=F.DEPTH_BUFFER_BIT),at&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Mt,!1),i.removeEventListener("webglcontextrestored",xt,!1),i.removeEventListener("webglcontextcreationerror",zt,!1),bt.dispose(),Ut.dispose(),Kt.dispose(),Yt.dispose(),w.dispose(),b.dispose(),vt.dispose(),H.dispose(),Dt.dispose(),lt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Br),Rt.removeEventListener("sessionend",Ir),gi.stop()};function Mt(R){R.preventDefault(),Bx("WebGLRenderer: Context Lost."),B=!0}function xt(){Bx("WebGLRenderer: Context Restored."),B=!1;const R=ke.autoReset,k=St.enabled,at=St.autoUpdate,J=St.needsUpdate,q=St.type;At(),ke.autoReset=R,St.enabled=k,St.autoUpdate=at,St.needsUpdate=J,St.type=q}function zt(R){en("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const k=R.target;k.removeEventListener("dispose",ie),Ie(k)}function Ie(R){Ce(R),Yt.remove(R)}function Ce(R){const k=Yt.get(R).programs;k!==void 0&&(k.forEach(function(at){lt.releaseProgram(at)}),R.isShaderMaterial&&lt.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,at,J,q,Tt){k===null&&(k=an);const wt=q.isMesh&&q.matrixWorld.determinant()<0,Pt=kc(R,k,at,J,q);Ht.setMaterial(J,wt);let Bt=at.index,Jt=1;if(J.wireframe===!0){if(Bt=pt.getWireframeAttribute(at),Bt===void 0)return;Jt=2}const te=at.drawRange,jt=at.attributes.position;let ue=te.start*Jt,Ae=(te.start+te.count)*Jt;Tt!==null&&(ue=Math.max(ue,Tt.start*Jt),Ae=Math.min(Ae,(Tt.start+Tt.count)*Jt)),Bt!==null?(ue=Math.max(ue,0),Ae=Math.min(Ae,Bt.count)):jt!=null&&(ue=Math.max(ue,0),Ae=Math.min(Ae,jt.count));const De=Ae-ue;if(De<0||De===1/0)return;H.setup(q,J,Pt,at,Bt);let be,Oe=Gt;if(Bt!==null&&(be=K.get(Bt),Oe=Nt,Oe.setIndex(be)),q.isMesh)J.wireframe===!0?(Ht.setLineWidth(J.wireframeLinewidth*Re()),Oe.setMode(F.LINES)):Oe.setMode(F.TRIANGLES);else if(q.isLine){let Qt=J.linewidth;Qt===void 0&&(Qt=1),Ht.setLineWidth(Qt*Re()),q.isLineSegments?Oe.setMode(F.LINES):q.isLineLoop?Oe.setMode(F.LINE_LOOP):Oe.setMode(F.LINE_STRIP)}else q.isPoints?Oe.setMode(F.POINTS):q.isSprite&&Oe.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Wo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Oe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qt=q._multiDrawStarts,We=q._multiDrawCounts,Ee=q._multiDrawCount,Sn=Bt?K.get(Bt).bytesPerElement:1,va=Yt.get(J).currentProgram.getUniforms();for(let Ye=0;Ye<Ee;Ye++)va.setValue(F,"_gl_DrawID",Ye),Oe.render(Qt[Ye]/Sn,We[Ye])}else if(q.isInstancedMesh)Oe.renderInstances(ue,De,q.count);else if(at.isInstancedBufferGeometry){const Qt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,We=Math.min(at.instanceCount,Qt);Oe.renderInstances(ue,De,We)}else Oe.render(ue,De)};function Un(R,k,at){R.transparent===!0&&R.side===ha&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,pn(R,k,at),R.side=$a,R.needsUpdate=!0,pn(R,k,at),R.side=ha):pn(R,k,at)}this.compile=function(R,k,at=null){at===null&&(at=R),U=Kt.get(at),U.init(k),X.push(U),at.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),R!==at&&R.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),U.setupLights();const J=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Pt=Tt[wt];Un(Pt,at,q),J.add(Pt)}else Un(Tt,at,q),J.add(Tt)}),U=X.pop(),J},this.compileAsync=function(R,k,at=null){const J=this.compile(R,k,at);return new Promise(q=>{function Tt(){if(J.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&J.delete(wt)}),J.size===0){q(R);return}setTimeout(Tt,10)}ge.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Yn=null;function jo(R){Yn&&Yn(R)}function Br(){gi.stop()}function Ir(){gi.start()}const gi=new f_;gi.setAnimationLoop(jo),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(R){Yn=R,Rt.setAnimationLoop(R),R===null?gi.stop():gi.start()},Rt.addEventListener("sessionstart",Br),Rt.addEventListener("sessionend",Ir),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(k),k=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,k,C),U=Kt.get(R,X.length),U.init(k),X.push(U),Ft.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),it.setFromProjectionMatrix(Ft,Oi,k.reversedDepth),Ct=this.localClippingEnabled,ct=kt.init(this.clippingPlanes,Ct),O=Ut.get(R,I.length),O.init(),I.push(O),Rt.enabled===!0&&Rt.isPresenting===!0){const Tt=L.xr.getDepthSensingMesh();Tt!==null&&ts(Tt,k,-1/0,L.sortObjects)}ts(R,k,0,L.sortObjects),O.finish(),L.sortObjects===!0&&O.sort(N,st),de=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,de&&bt.addToRenderList(O,R),this.info.render.frame++,ct===!0&&kt.beginShadows();const at=U.state.shadowsArray;St.render(at,R,k),ct===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=O.opaque,q=O.transmissive;if(U.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(q.length>0)for(let wt=0,Pt=Tt.length;wt<Pt;wt++){const Bt=Tt[wt];Hr(J,q,R,Bt)}de&&bt.render(R);for(let wt=0,Pt=Tt.length;wt<Pt;wt++){const Bt=Tt[wt];Fr(O,R,Bt,Bt.viewport)}}else q.length>0&&Hr(J,q,R,k),de&&bt.render(R),Fr(O,R,k);C!==null&&D===0&&(ae.updateMultisampleRenderTarget(C),ae.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(L,R,k),H.resetDefaultState(),V=-1,$=null,X.pop(),X.length>0?(U=X[X.length-1],ct===!0&&kt.setGlobalState(L.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?O=I[I.length-1]:O=null};function ts(R,k,at,J){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||it.intersectsSprite(R)){J&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ft);const wt=vt.update(R),Pt=R.material;Pt.visible&&O.push(R,wt,Pt,at,ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||it.intersectsObject(R))){const wt=vt.update(R),Pt=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ce.copy(wt.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Ft)),Array.isArray(Pt)){const Bt=wt.groups;for(let Jt=0,te=Bt.length;Jt<te;Jt++){const jt=Bt[Jt],ue=Pt[jt.materialIndex];ue&&ue.visible&&O.push(R,wt,ue,at,ce.z,jt)}}else Pt.visible&&O.push(R,wt,Pt,at,ce.z,null)}}const Tt=R.children;for(let wt=0,Pt=Tt.length;wt<Pt;wt++)ts(Tt[wt],k,at,J)}function Fr(R,k,at,J){const{opaque:q,transmissive:Tt,transparent:wt}=R;U.setupLightsView(at),ct===!0&&kt.setGlobalState(L.clippingPlanes,at),J&&Ht.viewport(ot.copy(J)),q.length>0&&jn(q,k,at),Tt.length>0&&jn(Tt,k,at),wt.length>0&&jn(wt,k,at),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Hr(R,k,at,J){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[J.id]===void 0&&(U.state.transmissionRenderTarget[J.id]=new Ds(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Lr:zi,minFilter:As,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Tt=U.state.transmissionRenderTarget[J.id],wt=J.viewport||ot;Tt.setSize(wt.z*L.transmissionResolutionScale,wt.w*L.transmissionResolutionScale);const Pt=L.getRenderTarget(),Bt=L.getActiveCubeFace(),Jt=L.getActiveMipmapLevel();L.setRenderTarget(Tt),L.getClearColor(P),j=L.getClearAlpha(),j<1&&L.setClearColor(16777215,.5),L.clear(),de&&bt.render(at);const te=L.toneMapping;L.toneMapping=Ja;const jt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),U.setupLightsView(J),ct===!0&&kt.setGlobalState(L.clippingPlanes,J),jn(R,at,J),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Ae=0,De=k.length;Ae<De;Ae++){const be=k[Ae],{object:Oe,geometry:Qt,material:We,group:Ee}=be;if(We.side===ha&&Oe.layers.test(J.layers)){const Sn=We.side;We.side=qn,We.needsUpdate=!0,ln(Oe,at,J,Qt,We,Ee),We.side=Sn,We.needsUpdate=!0,ue=!0}}ue===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}L.setRenderTarget(Pt,Bt,Jt),L.setClearColor(P,j),jt!==void 0&&(J.viewport=jt),L.toneMapping=te}function jn(R,k,at){const J=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Tt=R.length;q<Tt;q++){const wt=R[q],{object:Pt,geometry:Bt,group:Jt}=wt;let te=wt.material;te.allowOverride===!0&&J!==null&&(te=J),Pt.layers.test(at.layers)&&ln(Pt,k,at,Bt,te,Jt)}}function ln(R,k,at,J,q,Tt){R.onBeforeRender(L,k,at,J,q,Tt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(L,k,at,J,R,Tt),q.transparent===!0&&q.side===ha&&q.forceSinglePass===!1?(q.side=qn,q.needsUpdate=!0,L.renderBufferDirect(at,k,J,q,R,Tt),q.side=$a,q.needsUpdate=!0,L.renderBufferDirect(at,k,J,q,R,Tt),q.side=ha):L.renderBufferDirect(at,k,J,q,R,Tt),R.onAfterRender(L,k,at,J,q,Tt)}function pn(R,k,at){k.isScene!==!0&&(k=an);const J=Yt.get(R),q=U.state.lights,Tt=U.state.shadowsArray,wt=q.state.version,Pt=lt.getParameters(R,q.state,Tt,k,at),Bt=lt.getProgramCacheKey(Pt);let Jt=J.programs;J.environment=R.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(R.isMeshStandardMaterial?b:w).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",ie),Jt=new Map,J.programs=Jt);let te=Jt.get(Bt);if(te!==void 0){if(J.currentProgram===te&&J.lightsStateVersion===wt)return Us(R,Pt),te}else Pt.uniforms=lt.getUniforms(R),R.onBeforeCompile(Pt,L),te=lt.acquireProgram(Pt,Bt),Jt.set(Bt,te),J.uniforms=Pt.uniforms;const jt=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=kt.uniform),Us(R,Pt),J.needsLights=Zo(R),J.lightsStateVersion=wt,J.needsLights&&(jt.ambientLightColor.value=q.state.ambient,jt.lightProbe.value=q.state.probe,jt.directionalLights.value=q.state.directional,jt.directionalLightShadows.value=q.state.directionalShadow,jt.spotLights.value=q.state.spot,jt.spotLightShadows.value=q.state.spotShadow,jt.rectAreaLights.value=q.state.rectArea,jt.ltc_1.value=q.state.rectAreaLTC1,jt.ltc_2.value=q.state.rectAreaLTC2,jt.pointLights.value=q.state.point,jt.pointLightShadows.value=q.state.pointShadow,jt.hemisphereLights.value=q.state.hemi,jt.directionalShadowMap.value=q.state.directionalShadowMap,jt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,jt.spotShadowMap.value=q.state.spotShadowMap,jt.spotLightMatrix.value=q.state.spotLightMatrix,jt.spotLightMap.value=q.state.spotLightMap,jt.pointShadowMap.value=q.state.pointShadowMap,jt.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=te,J.uniformsList=null,te}function Fi(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Nc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Us(R,k){const at=Yt.get(R);at.outputColorSpace=k.outputColorSpace,at.batching=k.batching,at.batchingColor=k.batchingColor,at.instancing=k.instancing,at.instancingColor=k.instancingColor,at.instancingMorph=k.instancingMorph,at.skinning=k.skinning,at.morphTargets=k.morphTargets,at.morphNormals=k.morphNormals,at.morphColors=k.morphColors,at.morphTargetsCount=k.morphTargetsCount,at.numClippingPlanes=k.numClippingPlanes,at.numIntersection=k.numClipIntersection,at.vertexAlphas=k.vertexAlphas,at.vertexTangents=k.vertexTangents,at.toneMapping=k.toneMapping}function kc(R,k,at,J,q){k.isScene!==!0&&(k=an),ae.resetTextureUnits();const Tt=k.fog,wt=J.isMeshStandardMaterial?k.environment:null,Pt=C===null?L.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:wr,Bt=(J.isMeshStandardMaterial?b:w).get(J.envMap||wt),Jt=J.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,te=!!at.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),jt=!!at.morphAttributes.position,ue=!!at.morphAttributes.normal,Ae=!!at.morphAttributes.color;let De=Ja;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(De=L.toneMapping);const be=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Oe=be!==void 0?be.length:0,Qt=Yt.get(J),We=U.state.lights;if(ct===!0&&(Ct===!0||R!==$)){const Mn=R===$&&J.id===V;kt.setState(J,R,Mn)}let Ee=!1;J.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==We.state.version||Qt.outputColorSpace!==Pt||q.isBatchedMesh&&Qt.batching===!1||!q.isBatchedMesh&&Qt.batching===!0||q.isBatchedMesh&&Qt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Qt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Qt.instancing===!1||!q.isInstancedMesh&&Qt.instancing===!0||q.isSkinnedMesh&&Qt.skinning===!1||!q.isSkinnedMesh&&Qt.skinning===!0||q.isInstancedMesh&&Qt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Qt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Qt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Qt.instancingMorph===!1&&q.morphTexture!==null||Qt.envMap!==Bt||J.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==kt.numPlanes||Qt.numIntersection!==kt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==te||Qt.morphTargets!==jt||Qt.morphNormals!==ue||Qt.morphColors!==Ae||Qt.toneMapping!==De||Qt.morphTargetsCount!==Oe)&&(Ee=!0):(Ee=!0,Qt.__version=J.version);let Sn=Qt.currentProgram;Ee===!0&&(Sn=pn(J,k,q));let va=!1,Ye=!1,Hi=!1;const je=Sn.getUniforms(),yn=Qt.uniforms;if(Ht.useProgram(Sn.program)&&(va=!0,Ye=!0,Hi=!0),J.id!==V&&(V=J.id,Ye=!0),va||$!==R){Ht.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),je.setValue(F,"projectionMatrix",R.projectionMatrix),je.setValue(F,"viewMatrix",R.matrixWorldInverse);const An=je.map.cameraPosition;An!==void 0&&An.setValue(F,Xt.setFromMatrixPosition(R.matrixWorld)),Pe.logarithmicDepthBuffer&&je.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&je.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),$!==R&&($=R,Ye=!0,Hi=!0)}if(q.isSkinnedMesh){je.setOptional(F,q,"bindMatrix"),je.setOptional(F,q,"bindMatrixInverse");const Mn=q.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),je.setValue(F,"boneTexture",Mn.boneTexture,ae))}q.isBatchedMesh&&(je.setOptional(F,q,"batchingTexture"),je.setValue(F,"batchingTexture",q._matricesTexture,ae),je.setOptional(F,q,"batchingIdTexture"),je.setValue(F,"batchingIdTexture",q._indirectTexture,ae),je.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&je.setValue(F,"batchingColorTexture",q._colorsTexture,ae));const mn=at.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&qt.update(q,at,Sn),(Ye||Qt.receiveShadow!==q.receiveShadow)&&(Qt.receiveShadow=q.receiveShadow,je.setValue(F,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(yn.envMap.value=Bt,yn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(yn.envMapIntensity.value=k.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=Q1()),Ye&&(je.setValue(F,"toneMappingExposure",L.toneMappingExposure),Qt.needsLights&&Wc(yn,Hi),Tt&&J.fog===!0&&Wt.refreshFogUniforms(yn,Tt),Wt.refreshMaterialUniforms(yn,J,_t,gt,U.state.transmissionRenderTarget[R.id]),Nc.upload(F,Fi(Qt),yn,ae)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Nc.upload(F,Fi(Qt),yn,ae),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&je.setValue(F,"center",q.center),je.setValue(F,"modelViewMatrix",q.modelViewMatrix),je.setValue(F,"normalMatrix",q.normalMatrix),je.setValue(F,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Mn=J.uniformsGroups;for(let An=0,Ci=Mn.length;An<Ci;An++){const Gi=Mn[An];Dt.update(Gi,Sn),Dt.bind(Gi,Sn)}}return Sn}function Wc(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Zo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return et},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,k,at){const J=Yt.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Yt.get(R.texture).__webglTexture=k,Yt.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:at,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const at=Yt.get(R);at.__webglFramebuffer=k,at.__useDefaultFramebuffer=k===void 0};const es=F.createFramebuffer();this.setRenderTarget=function(R,k=0,at=0){C=R,et=k,D=at;let J=!0,q=null,Tt=!1,wt=!1;if(R){const Bt=Yt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(F.FRAMEBUFFER,null),J=!1;else if(Bt.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(Bt.__hasExternalTextures)ae.rebindTextures(R,Yt.get(R.texture).__webglTexture,Yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Bt.__boundDepthTexture!==jt){if(jt!==null&&Yt.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(wt=!0);const te=Yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(te[k])?q=te[k][at]:q=te[k],Tt=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?q=Yt.get(R).__webglMultisampledFramebuffer:Array.isArray(te)?q=te[at]:q=te,ot.copy(R.viewport),dt.copy(R.scissor),ut=R.scissorTest}else ot.copy(yt).multiplyScalar(_t).floor(),dt.copy(Et).multiplyScalar(_t).floor(),ut=Ot;if(at!==0&&(q=es),Ht.bindFramebuffer(F.FRAMEBUFFER,q)&&J&&Ht.drawBuffers(R,q),Ht.viewport(ot),Ht.scissor(dt),Ht.setScissorTest(ut),Tt){const Bt=Yt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,at)}else if(wt){const Bt=k;for(let Jt=0;Jt<R.textures.length;Jt++){const te=Yt.get(R.textures[Jt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Jt,te.__webglTexture,at,Bt)}}else if(R!==null&&at!==0){const Bt=Yt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,at)}V=-1},this.readRenderTargetPixels=function(R,k,at,J,q,Tt,wt,Pt=0){if(!(R&&R.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt){Ht.bindFramebuffer(F.FRAMEBUFFER,Bt);try{const Jt=R.textures[Pt],te=Jt.format,jt=Jt.type;if(!Pe.textureFormatReadable(te)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(jt)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-J&&at>=0&&at<=R.height-q&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(k,at,J,q,ne.convert(te),ne.convert(jt),Tt))}finally{const Jt=C!==null?Yt.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(F.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(R,k,at,J,q,Tt,wt,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt)if(k>=0&&k<=R.width-J&&at>=0&&at<=R.height-q){Ht.bindFramebuffer(F.FRAMEBUFFER,Bt);const Jt=R.textures[Pt],te=Jt.format,jt=Jt.type;if(!Pe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(k,at,J,q,ne.convert(te),ne.convert(jt),0);const Ae=C!==null?Yt.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(F.FRAMEBUFFER,Ae);const De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await by(F,De,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(ue),F.deleteSync(De),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,at=0){const J=Math.pow(2,-at),q=Math.floor(R.image.width*J),Tt=Math.floor(R.image.height*J),wt=k!==null?k.x:0,Pt=k!==null?k.y:0;ae.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,wt,Pt,q,Tt),Ht.unbindTexture()};const Gr=F.createFramebuffer(),_a=F.createFramebuffer();this.copyTextureToTexture=function(R,k,at=null,J=null,q=0,Tt=null){Tt===null&&(q!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=q,q=0):Tt=0);let wt,Pt,Bt,Jt,te,jt,ue,Ae,De;const be=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(at!==null)wt=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,te=at.min.y,jt=at.isBox3?at.min.z:0;else{const mn=Math.pow(2,-q);wt=Math.floor(be.width*mn),Pt=Math.floor(be.height*mn),R.isDataArrayTexture?Bt=be.depth:R.isData3DTexture?Bt=Math.floor(be.depth*mn):Bt=1,Jt=0,te=0,jt=0}J!==null?(ue=J.x,Ae=J.y,De=J.z):(ue=0,Ae=0,De=0);const Oe=ne.convert(k.format),Qt=ne.convert(k.type);let We;k.isData3DTexture?(ae.setTexture3D(k,0),We=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ae.setTexture2DArray(k,0),We=F.TEXTURE_2D_ARRAY):(ae.setTexture2D(k,0),We=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Ee=F.getParameter(F.UNPACK_ROW_LENGTH),Sn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),va=F.getParameter(F.UNPACK_SKIP_PIXELS),Ye=F.getParameter(F.UNPACK_SKIP_ROWS),Hi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,te),F.pixelStorei(F.UNPACK_SKIP_IMAGES,jt);const je=R.isDataArrayTexture||R.isData3DTexture,yn=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const mn=Yt.get(R),Mn=Yt.get(k),An=Yt.get(mn.__renderTarget),Ci=Yt.get(Mn.__renderTarget);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Gi=0;Gi<Bt;Gi++)je&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(R).__webglTexture,q,jt+Gi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(k).__webglTexture,Tt,De+Gi)),F.blitFramebuffer(Jt,te,wt,Pt,ue,Ae,wt,Pt,F.DEPTH_BUFFER_BIT,F.NEAREST);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||Yt.has(R)){const mn=Yt.get(R),Mn=Yt.get(k);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,Gr),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,_a);for(let An=0;An<Bt;An++)je?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,q,jt+An):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,q),yn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mn.__webglTexture,Tt,De+An):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mn.__webglTexture,Tt),q!==0?F.blitFramebuffer(Jt,te,wt,Pt,ue,Ae,wt,Pt,F.COLOR_BUFFER_BIT,F.NEAREST):yn?F.copyTexSubImage3D(We,Tt,ue,Ae,De+An,Jt,te,wt,Pt):F.copyTexSubImage2D(We,Tt,ue,Ae,Jt,te,wt,Pt);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(We,Tt,ue,Ae,De,wt,Pt,Bt,Oe,Qt,be.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(We,Tt,ue,Ae,De,wt,Pt,Bt,Oe,be.data):F.texSubImage3D(We,Tt,ue,Ae,De,wt,Pt,Bt,Oe,Qt,be):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,ue,Ae,wt,Pt,Oe,Qt,be.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,ue,Ae,be.width,be.height,Oe,be.data):F.texSubImage2D(F.TEXTURE_2D,Tt,ue,Ae,wt,Pt,Oe,Qt,be);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Sn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,va),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Hi),Tt===0&&k.generateMipmaps&&F.generateMipmap(We),Ht.unbindTexture()},this.initRenderTarget=function(R){Yt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Ht.unbindTexture()},this.resetState=function(){et=0,D=0,C=null,Ht.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const Og={type:"change"},Id={type:"start"},x_={type:"end"},Rc=new Gc,Pg=new Za,$1=Math.cos(70*Ty.DEG2RAD),gn=new nt,Wn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oh=1e-6;class tT extends fM{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new Cs,this._lastTargetPosition=new nt,this._quat=new Cs().setFromUnitVectors(t.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cg,this._sphericalDelta=new cg,this._scale=1,this._panOffset=new nt,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new nt,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nT.bind(this),this._onPointerDown=eT.bind(this),this._onPointerUp=iT.bind(this),this._onContextMenu=uT.bind(this),this._onMouseWheel=rT.bind(this),this._onKeyDown=oT.bind(this),this._onTouchStart=lT.bind(this),this._onTouchMove=cT.bind(this),this._onMouseDown=aT.bind(this),this._onMouseMove=sT.bind(this),this._interceptControlDown=fT.bind(this),this._interceptControlUp=hT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Og),this.update(),this.state=Xe.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),l<-Math.PI?l+=Wn:l>Math.PI&&(l-=Wn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new nt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Rc.origin.copy(this.object.position),Rc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rc.direction))<$1?this.object.lookAt(this.target):(Pg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rc.intersectPlane(Pg,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oh||this._lastTargetPosition.distanceToSquared(this.target)>Oh?(this.dispatchEvent(Og),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let u=gn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new oe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function eT(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function nT(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function iT(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(x_),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function aT(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Xe.DOLLY;break;case Er.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Xe.ROTATE}break;case Er.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Id)}function sT(o){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function rT(o){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(o.preventDefault(),this.dispatchEvent(Id),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(x_))}function oT(o){this.enabled!==!1&&this._handleKeyDown(o)}function lT(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Xe.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Xe.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Id)}function cT(o){switch(this._trackPointer(o),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Xe.NONE}}function uT(o){this.enabled!==!1&&o.preventDefault()}function fT(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hT(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const dT=new xe("#60a5fa"),pT=new xe("#f97316");function mT(o,t,i){o.forEach(s=>{if(s.userData.locationId===i){s.material.color.copy(pT),s.material.emissive.set("#7c2d12"),s.material.emissiveIntensity=.35;return}if(s.userData.locationId===t){s.material.color.copy(dT),s.material.emissive.set("#1d4ed8"),s.material.emissiveIntensity=.25;return}s.material.color.copy(s.userData.baseColor),s.material.emissive.set("#000000"),s.material.emissiveIntensity=0})}const xT={Boundary:"#d8dde2",Shop:"#cfd4d9",Path:"#4b5258",Dock:"#2563eb",Rack:"#7c8a96",Office:"#ef4444"};function gT(o){const t=Math.max(o.xMax-o.xMin,.1),i=Math.max(o.yMax-o.yMin,.1),s=Math.max(o.zMax-o.zMin,.1),l=new Pr(t,s,i),u=new xe(xT[o.type]),h=new l_({color:u,roughness:.55,metalness:.05,transparent:o.type==="Boundary",opacity:o.type==="Boundary"?.22:1}),d=new Ri(l,h);return d.position.set(o.xMin+t/2,o.zMin+s/2,o.yMin+i/2),d.castShadow=o.type!=="Boundary",d.receiveShadow=!0,d.userData.locationId=o.id,d.userData.baseColor=u,d}function _T(o){const t=new Fo;return o.forEach(i=>{t.add(gT(i))}),t}function zg(o,t,i,s){const l=t.getBoundingClientRect(),u=new oe((o.clientX-l.left)/l.width*2-1,-((o.clientY-l.top)/l.height)*2+1),h=new cM;h.setFromCamera(u,i);const[d]=h.intersectObjects(s,!0),m=d?.object.userData.locationId;return typeof m=="string"?m:null}function vT({locations:o,hoveredLocationId:t,selectedLocationId:i,onHoverLocation:s,onSelectLocation:l}){const u=on.useRef(null),h=on.useRef(null),d=on.useRef(null),m=on.useRef(null),p=on.useRef(null),_=on.useRef([]),[v,S]=on.useState(null);return on.useEffect(()=>{const M=u.current;if(!M)return;const T=M,A=new Ky;A.background=new xe("#eef2f5"),A.fog=new zd("#eef2f5",90,180),h.current=A;let y;try{y=new J1({antialias:!0}),S(null)}catch{S("3D rendering is not available in this browser.");return}y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,y.shadowMap.type=Ig,y.outputColorSpace=ai,T.appendChild(y.domElement);const g=new mi(45,1,.1,1e3);g.position.set(54,58,70),d.current=g;const O=new tT(g,y.domElement);O.enableDamping=!0,O.dampingFactor=.08,O.target.set(20,0,20),O.maxPolarAngle=Math.PI*.48,O.minDistance=18,O.maxDistance=145,m.current=O;const U=new sM("#ffffff","#a8b0b7",2.1);A.add(U);const I=new rg("#ffffff",2.6);I.position.set(20,60,30),I.castShadow=!0,I.shadow.mapSize.set(2048,2048),I.shadow.camera.near=10,I.shadow.camera.far=140,A.add(I);const X=new rg("#dbeafe",1.1);X.position.set(-40,34,-16),A.add(X);const L=new Ri(new Yo(80,80),new l_({color:"#f8fafc",roughness:.8}));L.rotation.x=-Math.PI/2,L.position.set(20,-.04,20),L.receiveShadow=!0,A.add(L);const B=new uM(80,40,"#94a3b8","#cbd5e1");B.position.set(20,.02,20),A.add(B);function et(){const{width:ut,height:P}=T.getBoundingClientRect();y.setSize(ut,P,!1),g.aspect=ut/Math.max(P,1),g.updateProjectionMatrix()}const D=new ResizeObserver(et);D.observe(T),et();let C=0;function V(){O.update(),y.render(A,g),C=requestAnimationFrame(V)}V();const $=ut=>{const P=zg(ut,y.domElement,g,_.current);s(P)},ot=()=>s(null),dt=ut=>{const P=zg(ut,y.domElement,g,_.current);P&&l(P)};return y.domElement.addEventListener("pointermove",$),y.domElement.addEventListener("pointerleave",ot),y.domElement.addEventListener("pointerup",dt),()=>{cancelAnimationFrame(C),D.disconnect(),y.domElement.removeEventListener("pointermove",$),y.domElement.removeEventListener("pointerleave",ot),y.domElement.removeEventListener("pointerup",dt),O.dispose(),y.dispose(),y.domElement.parentElement===T&&T.removeChild(y.domElement),m.current=null,h.current=null,d.current=null,p.current=null,_.current=[]}},[s,l]),on.useEffect(()=>{const M=h.current;if(!M)return;p.current&&(M.remove(p.current),p.current.traverse(O=>{const U=O;U.geometry?.dispose(),Array.isArray(U.material)?U.material.forEach(I=>I.dispose()):U.material?.dispose()}));const T=_T(o),A=[];T.traverse(O=>{O instanceof Ri&&A.push(O)}),p.current=T,_.current=A,M.add(T);const y=d.current,g=m.current;y&&g&&o.length>0&&ST(y,g,T)},[o]),on.useEffect(()=>{mT(_.current,t,i)},[t,i,o]),on.useEffect(()=>{const M=d.current,T=m.current;if(!M||!T||!i)return;const A=_.current.find(g=>g.userData.locationId===i);if(!A)return;const y=new nt;A.getWorldPosition(y),T.target.lerp(y,.55),T.update()},[i]),ee.jsx("div",{className:"three-map-canvas",ref:u,children:v&&ee.jsx("div",{className:"map-render-error",children:v})})}function ST(o,t,i){const s=new Nr().setFromObject(i),l=s.getCenter(new nt),u=s.getSize(new nt),d=Math.max(u.x,u.y,u.z,1)*1.65;t.target.copy(l),o.position.set(l.x+d*.72,l.y+d*.88,l.z+d),o.near=Math.max(d/120,.1),o.far=d*8,o.updateProjectionMatrix(),t.update()}function yT({locations:o,hoveredLocationId:t,selectedLocationId:i,onHoverLocation:s,onSelectLocation:l}){return ee.jsxs("section",{className:"map-container",children:[ee.jsx(vT,{locations:o,hoveredLocationId:t,selectedLocationId:i,onHoverLocation:s,onSelectLocation:l}),ee.jsx("p",{className:"map-hint",children:"Pinch to zoom and drag to move"})]})}async function MT(){const o=await fetch("/api/locations");if(!o.ok)throw new Error(`Failed to load locations: ${o.status}`);return o.json()}function bT(){const[o,t]=on.useState([]),[i,s]=on.useState(!0),[l,u]=on.useState(null);return on.useEffect(()=>{let h=!1;async function d(){try{s(!0),u(null);const m=await MT();h||t(m)}catch(m){h||u(m instanceof Error?m.message:"Failed to load locations")}finally{h||s(!1)}}return d(),()=>{h=!0}},[]),{locations:o,loading:i,error:l}}function ET(o){const[t,i]=on.useState(null),[s,l]=on.useState(null);return{selectedLocation:on.useMemo(()=>o.find(h=>h.id===t)??null,[o,t]),selectedLocationId:t,hoveredLocationId:s,setSelectedLocationId:i,setHoveredLocationId:l}}function TT(){const{locations:o,loading:t,error:i}=bT(),s=ET(o),[l,u]=on.useState(""),h=on.useMemo(()=>{const d=l.trim().toLowerCase();return d?o.filter(m=>m.name.toLowerCase().includes(d)||m.type.toLowerCase().includes(d)||m.description?.toLowerCase().includes(d)):o},[o,l]);return ee.jsxs("div",{className:"app-shell",children:[ee.jsx(OS,{query:l,locations:h,selectedLocation:s.selectedLocation,selectedLocationId:s.selectedLocationId,onQueryChange:u,onSelectLocation:s.setSelectedLocationId}),ee.jsxs("main",{className:"main-panel",children:[ee.jsx(PS,{}),ee.jsx(yT,{locations:o,selectedLocationId:s.selectedLocationId,hoveredLocationId:s.hoveredLocationId,onHoverLocation:s.setHoveredLocationId,onSelectLocation:s.setSelectedLocationId}),t&&ee.jsx("div",{className:"map-status",children:"Loading layout..."}),i&&ee.jsx("div",{className:"map-status map-status-error",children:i}),ee.jsx(LS,{})]})]})}wS.createRoot(document.getElementById("root")).render(ee.jsx(on.StrictMode,{children:ee.jsx(TT,{})}));
