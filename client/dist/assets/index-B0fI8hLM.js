(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ph={exports:{}},Go={};var Ix;function WS(){if(Ix)return Go;Ix=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Go.Fragment=t,Go.jsx=i,Go.jsxs=i,Go}var Fx;function qS(){return Fx||(Fx=1,ph.exports=WS()),ph.exports}var oe=qS(),mh={exports:{}},re={};var Hx;function YS(){if(Hx)return re;Hx=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function x(L,st,yt){this.props=L,this.context=st,this.refs=y,this.updater=yt||T}x.prototype.isReactComponent={},x.prototype.setState=function(L,st){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,st,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=x.prototype;function D(L,st,yt){this.props=L,this.context=st,this.refs=y,this.updater=yt||T}var I=D.prototype=new O;I.constructor=D,A(I,x.prototype),I.isPureReactComponent=!0;var X=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},nt=Object.prototype.hasOwnProperty;function w(L,st,yt){var Et=yt.ref;return{$$typeof:r,type:L,key:st,ref:Et!==void 0?Et:null,props:yt}}function C(L,st){return w(L.type,st,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function tt(L){var st={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return st[yt]})}var ot=/\/+/g;function dt(L,st){return typeof L=="object"&&L!==null&&L.key!=null?tt(""+L.key):st.toString(36)}function ut(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(st){L.status==="pending"&&(L.status="fulfilled",L.value=st)},function(st){L.status==="pending"&&(L.status="rejected",L.reason=st)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,st,yt,Et,Ot){var it=typeof L;(it==="undefined"||it==="boolean")&&(L=null);var ct=!1;if(L===null)ct=!0;else switch(it){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(L.$$typeof){case r:case t:ct=!0;break;case v:return ct=L._init,P(ct(L._payload),st,yt,Et,Ot)}}if(ct)return Ot=Ot(L),ct=Et===""?"."+dt(L,0):Et,X(Ot)?(yt="",ct!=null&&(yt=ct.replace(ot,"$&/")+"/"),P(Ot,st,yt,"",function(Xt){return Xt})):Ot!=null&&(V(Ot)&&(Ot=C(Ot,yt+(Ot.key==null||L&&L.key===Ot.key?"":(""+Ot.key).replace(ot,"$&/")+"/")+ct)),st.push(Ot)),1;ct=0;var Ct=Et===""?".":Et+":";if(X(L))for(var Ft=0;Ft<L.length;Ft++)Et=L[Ft],it=Ct+dt(Et,Ft),ct+=P(Et,st,yt,it,Ot);else if(Ft=M(L),typeof Ft=="function")for(L=Ft.call(L),Ft=0;!(Et=L.next()).done;)Et=Et.value,it=Ct+dt(Et,Ft++),ct+=P(Et,st,yt,it,Ot);else if(it==="object"){if(typeof L.then=="function")return P(ut(L),st,yt,Et,Ot);throw st=String(L),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return ct}function q(L,st,yt){if(L==null)return L;var Et=[],Ot=0;return P(L,Et,"","",function(it){return st.call(yt,it,Ot++)}),Et}function j(L){if(L._status===-1){var st=L._result;st=st(),st.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=st)}if(L._status===1)return L._result.default;throw L._result}var gt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},_t={map:q,forEach:function(L,st,yt){q(L,function(){st.apply(this,arguments)},yt)},count:function(L){var st=0;return q(L,function(){st++}),st},toArray:function(L){return q(L,function(st){return st})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return re.Activity=_,re.Children=_t,re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=D,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(L,st,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Et=A({},L.props),Ot=L.key;if(st!=null)for(it in st.key!==void 0&&(Ot=""+st.key),st)!nt.call(st,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&st.ref===void 0||(Et[it]=st[it]);var it=arguments.length-2;if(it===1)Et.children=yt;else if(1<it){for(var ct=Array(it),Ct=0;Ct<it;Ct++)ct[Ct]=arguments[Ct+2];Et.children=ct}return w(L.type,Ot,Et)},re.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},re.createElement=function(L,st,yt){var Et,Ot={},it=null;if(st!=null)for(Et in st.key!==void 0&&(it=""+st.key),st)nt.call(st,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Ot[Et]=st[Et]);var ct=arguments.length-2;if(ct===1)Ot.children=yt;else if(1<ct){for(var Ct=Array(ct),Ft=0;Ft<ct;Ft++)Ct[Ft]=arguments[Ft+2];Ot.children=Ct}if(L&&L.defaultProps)for(Et in ct=L.defaultProps,ct)Ot[Et]===void 0&&(Ot[Et]=ct[Et]);return w(L,it,Ot)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=V,re.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:j}},re.memo=function(L,st){return{$$typeof:p,type:L,compare:st===void 0?null:st}},re.startTransition=function(L){var st=z.T,yt={};z.T=yt;try{var Et=L(),Ot=z.S;Ot!==null&&Ot(yt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(N,gt)}catch(it){gt(it)}finally{st!==null&&yt.types!==null&&(st.types=yt.types),z.T=st}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(L){return z.H.use(L)},re.useActionState=function(L,st,yt){return z.H.useActionState(L,st,yt)},re.useCallback=function(L,st){return z.H.useCallback(L,st)},re.useContext=function(L){return z.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,st){return z.H.useDeferredValue(L,st)},re.useEffect=function(L,st){return z.H.useEffect(L,st)},re.useEffectEvent=function(L){return z.H.useEffectEvent(L)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(L,st,yt){return z.H.useImperativeHandle(L,st,yt)},re.useInsertionEffect=function(L,st){return z.H.useInsertionEffect(L,st)},re.useLayoutEffect=function(L,st){return z.H.useLayoutEffect(L,st)},re.useMemo=function(L,st){return z.H.useMemo(L,st)},re.useOptimistic=function(L,st){return z.H.useOptimistic(L,st)},re.useReducer=function(L,st,yt){return z.H.useReducer(L,st,yt)},re.useRef=function(L){return z.H.useRef(L)},re.useState=function(L){return z.H.useState(L)},re.useSyncExternalStore=function(L,st,yt){return z.H.useSyncExternalStore(L,st,yt)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.6",re}var Gx;function kd(){return Gx||(Gx=1,mh.exports=YS()),mh.exports}var ln=kd(),xh={exports:{}},Vo={},gh={exports:{}},_h={};var Vx;function jS(){return Vx||(Vx=1,(function(r){function t(P,q){var j=P.length;P.push(q);t:for(;0<j;){var gt=j-1>>>1,_t=P[gt];if(0<l(_t,q))P[gt]=q,P[j]=_t,j=gt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var q=P[0],j=P.pop();if(j!==q){P[0]=j;t:for(var gt=0,_t=P.length,L=_t>>>1;gt<L;){var st=2*(gt+1)-1,yt=P[st],Et=st+1,Ot=P[Et];if(0>l(yt,j))Et<_t&&0>l(Ot,yt)?(P[gt]=Ot,P[Et]=j,gt=Et):(P[gt]=yt,P[st]=j,gt=st);else if(Et<_t&&0>l(Ot,j))P[gt]=Ot,P[Et]=j,gt=Et;else break t}}return q}function l(P,q){var j=P.sortIndex-q.sortIndex;return j!==0?j:P.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,_=null,S=3,M=!1,T=!1,A=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function I(P){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=P)s(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function X(P){if(A=!1,I(P),!T)if(i(m)!==null)T=!0,N||(N=!0,tt());else{var q=i(p);q!==null&&ut(X,q.startTime-P)}}var N=!1,z=-1,nt=5,w=-1;function C(){return y?!0:!(r.unstable_now()-w<nt)}function V(){if(y=!1,N){var P=r.unstable_now();w=P;var q=!0;try{t:{T=!1,A&&(A=!1,O(z),z=-1),M=!0;var j=S;try{e:{for(I(P),_=i(m);_!==null&&!(_.expirationTime>P&&C());){var gt=_.callback;if(typeof gt=="function"){_.callback=null,S=_.priorityLevel;var _t=gt(_.expirationTime<=P);if(P=r.unstable_now(),typeof _t=="function"){_.callback=_t,I(P),q=!0;break e}_===i(m)&&s(m),I(P)}else s(m);_=i(m)}if(_!==null)q=!0;else{var L=i(p);L!==null&&ut(X,L.startTime-P),q=!1}}break t}finally{_=null,S=j,M=!1}q=void 0}}finally{q?tt():N=!1}}}var tt;if(typeof D=="function")tt=function(){D(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,dt=ot.port2;ot.port1.onmessage=V,tt=function(){dt.postMessage(null)}}else tt=function(){x(V,0)};function ut(P,q){z=x(function(){P(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):nt=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(P){switch(S){case 1:case 2:case 3:var q=3;break;default:q=S}var j=S;S=q;try{return P()}finally{S=j}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=S;S=P;try{return q()}finally{S=j}},r.unstable_scheduleCallback=function(P,q,j){var gt=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?gt+j:gt):j=gt,P){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=j+_t,P={id:v++,callback:q,priorityLevel:P,startTime:j,expirationTime:_t,sortIndex:-1},j>gt?(P.sortIndex=j,t(p,P),i(m)===null&&P===i(p)&&(A?(O(z),z=-1):A=!0,ut(X,j-gt))):(P.sortIndex=_t,t(m,P),T||M||(T=!0,N||(N=!0,tt()))),P},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(P){var q=S;return function(){var j=S;S=q;try{return P.apply(this,arguments)}finally{S=j}}}})(_h)),_h}var Xx;function ZS(){return Xx||(Xx=1,gh.exports=jS()),gh.exports}var vh={exports:{}},Nn={};var kx;function KS(){if(kx)return Nn;kx=1;var r=kd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Nn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.6",Nn}var Wx;function QS(){if(Wx)return vh.exports;Wx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vh.exports=KS(),vh.exports}var qx;function JS(){if(qx)return Vo;qx=1;var r=ZS(),t=kd(),i=QS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,o=f;break}if(E===o){g=!0,o=u,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,o=u;break}if(E===o){g=!0,o=f,a=u;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case X:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case D:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case I:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case nt:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ut=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},gt=[],_t=-1;function L(e){return{current:e}}function st(e){0>_t||(e.current=gt[_t],gt[_t]=null,_t--)}function yt(e,n){_t++,gt[_t]=e.current,e.current=n}var Et=L(null),Ot=L(null),it=L(null),ct=L(null);function Ct(e,n){switch(yt(it,n),yt(Ot,e),yt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ox(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ox(n),e=lx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}st(Et),yt(Et,e)}function Ft(){st(Et),st(Ot),st(it)}function Xt(e){e.memoizedState!==null&&yt(ct,e);var n=Et.current,a=lx(n,e.type);n!==a&&(yt(Ot,e),yt(Et,a))}function ue(e){Ot.current===e&&(st(Et),st(Ot)),ct.current===e&&(st(ct),Bo._currentValue=j)}var sn,pe;function Re(e){if(sn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);sn=n&&n[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sn+e+pe}var F=!1;function me(e,n){if(!e||F)return"";F=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(rt){var et=rt}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(rt){et=rt}e.call(mt.prototype)}}else{try{throw Error()}catch(rt){et=rt}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(rt){if(rt&&et&&typeof rt.stack=="string")return[rt.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var B=g.split(`
`),Q=E.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===Q.length)for(o=B.length-1,u=Q.length-1;1<=o&&0<=u&&B[o]!==Q[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==Q[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==Q[u]){var ft=`
`+B[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{F=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Re(a):""}function ge(e,n){switch(e.tag){case 26:case 27:case 5:return Re(e.type);case 16:return Re("Lazy");case 13:return e.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return Re("Activity");default:return""}}function Pe(e){try{var n="",a=null;do n+=ge(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ht=Object.prototype.hasOwnProperty,We=r.unstable_scheduleCallback,Yt=r.unstable_cancelCallback,ae=r.unstable_shouldYield,U=r.unstable_requestPaint,b=r.unstable_now,K=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,vt=r.unstable_UserBlockingPriority,lt=r.unstable_NormalPriority,Wt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,Kt=r.log,kt=r.unstable_setDisableYieldValue,St=null,bt=null;function qt(e){if(typeof Kt=="function"&&kt(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(St,e)}catch{}}var Gt=Math.clz32?Math.clz32:H,Nt=Math.log,ne=Math.LN2;function H(e){return e>>>=0,e===0?32:31-(Nt(e)/ne|0)|0}var wt=256,At=262144,Rt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?u=Mt(o):(g&=E,g!==0?u=Mt(g):a||(a=E&~e,a!==0&&(u=Mt(a))))):(E=o&~f,E!==0?u=Mt(E):g!==0?u=Mt(g):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),e}function Ce(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kn(e,n,a,o,u,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,B=e.expirationTimes,Q=e.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Gt(a),mt=1<<ft;E[ft]=0,B[ft]=-1;var et=Q[ft];if(et!==null)for(Q[ft]=null,ft=0;ft<et.length;ft++){var rt=et[ft];rt!==null&&(rt.lane&=-536870913)}a&=~mt}o!==0&&rl(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function rl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Gt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function jr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Gt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Zr(e,n){var a=n&-n;return a=(a&42)!==0?1:Mi(a),(a&(e.suspendedLanes|n))!==0?0:a}function Mi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kr(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Ux(e.type))}function Qr(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Qn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Qn,mn="__reactProps$"+Qn,ki="__reactContainer$"+Qn,Is="__reactEvents$"+Qn,ou="__reactListeners$"+Qn,lu="__reactHandles$"+Qn,ol="__reactResources$"+Qn,os="__reactMarker$"+Qn;function Jr(e){delete e[cn],delete e[mn],delete e[Is],delete e[ou],delete e[lu]}function ba(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ki]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=mx(e);e!==null;){if(a=e[cn])return a;e=mx(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[cn]||e[ki]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function k(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function at(e){var n=e[ol];return n||(n=e[ol]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(e){e[os]=!0}var Y=new Set,Tt={};function Dt(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(Tt[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},te={};function jt(e){return Ht.call(te,e)?!0:Ht.call(Jt,e)?!1:Bt.test(e)?te[e]=!0:(Jt[e]=!0,!1)}function fe(e,n,a){if(jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ae(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function we(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function be(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){if(!e._valueTracker){var n=Oe(e)?"checked":"value";e._valueTracker=Qt(e,n,""+e[n])}}function Ee(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ea=/[\n"\\]/g;function je(e){return e.replace(Ea,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Wi(e,n,a,o,u,f,g,E){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+be(n)):e.value!==""+be(n)&&(e.value=""+be(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?bn(e,g,be(n)):a!=null?bn(e,g,be(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+be(E):e.removeAttribute("name")}function Ze(e,n,a,o,u,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(e);return}a=a!=null?""+be(a):"",n=n!=null?""+be(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),qe(e)}function bn(e,n,a){n==="number"&&Mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+be(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function En(e,n,a){if(n!=null&&(n=""+be(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+be(a):""}function Rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ut(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=be(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),qe(e)}function Oi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ap(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||qi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function sp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ap(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&ap(e,f,n[f])}function cu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),V_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return V_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var uu=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,Hs=null;function rp(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Wi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+je(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[mn]||null;if(!u)throw Error(s(90));Wi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ee(o)}break t;case"textarea":En(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xn(e,!!a.multiple,n,!1)}}}var hu=!1;function op(e,n,a){if(hu)return e(n,a);hu=!0;try{var o=e(n);return o}finally{if(hu=!1,(Fs!==null||Hs!==null)&&(Zl(),Fs&&(n=Fs,e=Hs,Hs=Fs=null,rp(n),e)))for(n=0;n<e.length;n++)rp(e[n])}}function $r(e,n){var a=e.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(ji)try{var to={};Object.defineProperty(to,"passive",{get:function(){du=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{du=!1}var Ta=null,pu=null,cl=null;function lp(){if(cl)return cl;var e,n=pu,a=n.length,o,u="value"in Ta?Ta.value:Ta.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var g=a-e;for(o=1;o<=g&&n[a-o]===u[f-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function cp(){return!1}function Gn(e){function n(a,o,u,f,g){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:cp,this.isPropagationStopped=cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Gn(ls),eo=_({},ls,{view:0,detail:0}),X_=Gn(eo),mu,xu,no,dl=_({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(mu=e.screenX-no.screenX,xu=e.screenY-no.screenY):xu=mu=0,no=e),mu)},movementY:function(e){return"movementY"in e?e.movementY:xu}}),up=Gn(dl),k_=_({},dl,{dataTransfer:0}),W_=Gn(k_),q_=_({},eo,{relatedTarget:0}),gu=Gn(q_),Y_=_({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),j_=Gn(Y_),Z_=_({},ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K_=Gn(Z_),Q_=_({},ls,{data:0}),fp=Gn(Q_),J_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ev(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tv[e])?!!n[e]:!1}function _u(){return ev}var nv=_({},eo,{key:function(e){if(e.key){var n=J_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iv=Gn(nv),av=_({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=Gn(av),sv=_({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),rv=Gn(sv),ov=_({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=Gn(ov),cv=_({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uv=Gn(cv),fv=_({},ls,{newState:0,oldState:0}),hv=Gn(fv),dv=[9,13,27,32],vu=ji&&"CompositionEvent"in window,io=null;ji&&"documentMode"in document&&(io=document.documentMode);var pv=ji&&"TextEvent"in window&&!io,dp=ji&&(!vu||io&&8<io&&11>=io),pp=" ",mp=!1;function xp(e,n){switch(e){case"keyup":return dv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gs=!1;function mv(e,n){switch(e){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return e=n.data,e===pp&&mp?null:e;default:return null}}function xv(e,n){if(Gs)return e==="compositionend"||!vu&&xp(e,n)?(e=lp(),cl=pu=Ta=null,Gs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gv[e.type]:n==="textarea"}function vp(e,n,a,o){Fs?Hs?Hs.push(o):Hs=[o]:Fs=o,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ao=null,so=null;function _v(e){ex(e,0)}function pl(e){var n=k(e);if(Ee(n))return e}function Sp(e,n){if(e==="change")return n}var yp=!1;if(ji){var Su;if(ji){var yu="oninput"in document;if(!yu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),yu=typeof Mp.oninput=="function"}Su=yu}else Su=!1;yp=Su&&(!document.documentMode||9<document.documentMode)}function bp(){ao&&(ao.detachEvent("onpropertychange",Ep),so=ao=null)}function Ep(e){if(e.propertyName==="value"&&pl(so)){var n=[];vp(n,so,e,fu(e)),op(_v,n)}}function vv(e,n,a){e==="focusin"?(bp(),ao=n,so=a,ao.attachEvent("onpropertychange",Ep)):e==="focusout"&&bp()}function Sv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(so)}function yv(e,n){if(e==="click")return pl(n)}function Mv(e,n){if(e==="input"||e==="change")return pl(n)}function bv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:bv;function ro(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ht.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ap(e,n){var a=Tp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Mn(e.document)}return n}function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ev=ji&&"documentMode"in document&&11>=document.documentMode,Vs=null,bu=null,oo=null,Eu=!1;function wp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||Vs==null||Vs!==Mn(o)||(o=Vs,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=nc(bu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Vs)))}function cs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Xs={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Tu={},Dp={};ji&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function us(e){if(Tu[e])return Tu[e];if(!Xs[e])return e;var n=Xs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return Tu[e]=n[a];return e}var Up=us("animationend"),Lp=us("animationiteration"),Np=us("animationstart"),Tv=us("transitionrun"),Av=us("transitionstart"),Rv=us("transitioncancel"),Op=us("transitionend"),Pp=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function bi(e,n){Pp.set(e,n),Dt(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],ks=0,Ru=0;function xl(){for(var e=ks,n=Ru=ks=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,o!==null&&u!==null){var g=o.pending;g===null?u.next=u:(u.next=g.next,g.next=u),o.pending=u}f!==0&&zp(a,u,f)}}function gl(e,n,a,o){ci[ks++]=e,ci[ks++]=n,ci[ks++]=a,ci[ks++]=o,Ru|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Cu(e,n,a,o){return gl(e,n,a,o),_l(e)}function fs(e,n){return gl(e,null,null,n),_l(e)}function zp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Gt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function _l(e){if(50<Do)throw Do=0,If=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ws={};function Cv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new Cv(e,n,a,o)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Bp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,o,u,f){var g=0;if(o=e,typeof e=="function")wu(e)&&(g=1);else if(typeof e=="string")g=NS(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=$n(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return hs(a.children,u,f,n);case y:g=8,u|=24;break;case x:return e=$n(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case X:return e=$n(13,a,n,u),e.elementType=X,e.lanes=f,e;case N:return e=$n(19,a,n,u),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:g=10;break t;case O:g=9;break t;case I:g=11;break t;case z:g=14;break t;case nt:g=16,o=null;break t}g=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=$n(g,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function hs(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function Du(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function Ip(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Uu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fp=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=Fp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pe(n)},Fp.set(e,n),n)}return{value:e,source:n,stack:Pe(n)}}var qs=[],Ys=0,Sl=null,lo=0,fi=[],hi=0,Aa=null,Pi=1,zi="";function Ki(e,n){qs[Ys++]=lo,qs[Ys++]=Sl,Sl=e,lo=n}function Hp(e,n,a){fi[hi++]=Pi,fi[hi++]=zi,fi[hi++]=Aa,Aa=e;var o=Pi;e=zi;var u=32-Gt(o)-1;o&=~(1<<u),a+=1;var f=32-Gt(n)+u;if(30<f){var g=u-u%5;f=(o&(1<<g)-1).toString(32),o>>=g,u-=g,Pi=1<<32-Gt(n)+u|a<<u|o,zi=f+e}else Pi=1<<f|a<<u|o,zi=e}function Lu(e){e.return!==null&&(Ki(e,1),Hp(e,1,0))}function Nu(e){for(;e===Sl;)Sl=qs[--Ys],qs[Ys]=null,lo=qs[--Ys],qs[Ys]=null;for(;e===Aa;)Aa=fi[--hi],fi[hi]=null,zi=fi[--hi],fi[hi]=null,Pi=fi[--hi],fi[hi]=null}function Gp(e,n){fi[hi++]=Pi,fi[hi++]=zi,fi[hi++]=Aa,Pi=n.id,zi=n.overflow,Aa=e}var Cn=null,Ke=null,Te=!1,Ra=null,di=!1,Ou=Error(s(519));function Ca(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(ui(n,e)),Ou}function Vp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[mn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)ve(Lo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Ze(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||sx(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ca(e,!0)}function Xp(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Cn=Cn.return}}function js(e){if(e!==Cn)return!1;if(!Te)return Xp(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$f(e.type,e.memoizedProps)),a=!a),a&&Ke&&Ca(e),Xp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=px(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=px(e)}else n===27?(n=Ke,Va(e.type)?(e=ah,ah=null,Ke=e):Ke=n):Ke=Cn?mi(e.stateNode.nextSibling):null;return!0}function ds(){Ke=Cn=null,Te=!1}function Pu(){var e=Ra;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ra=null),e}function co(e){Ra===null?Ra=[e]:Ra.push(e)}var zu=L(null),ps=null,Qi=null;function wa(e,n,a){yt(zu,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=zu.current,st(zu)}function Bu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Iu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Bu(f.return,a,e),o||(g=null);break t}f=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Bu(g,a,e),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===e){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Zs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=u.type;Jn(u.pendingProps.value,g.value)||(e!==null?e.push(E):e=[E])}}else if(u===ct.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Iu(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ps=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return kp(ps,e)}function Ml(e,n){return ps===null&&ms(e),kp(e,n)}function kp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(s(308));Qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qi=Qi.next=n;return a}var wv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Dv=r.unstable_scheduleCallback,Uv=r.unstable_NormalPriority,un={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new wv,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&Dv(Uv,function(){e.controller.abort()})}var fo=null,Hu=0,Ks=0,Qs=null;function Lv(e,n){if(fo===null){var a=fo=[];Hu=0,Ks=kf(),Qs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Hu++,n.then(Wp,Wp),n}function Wp(){if(--Hu===0&&fo!==null){Qs!==null&&(Qs.status="fulfilled");var e=fo;fo=null,Ks=0,Qs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Nv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qp=P.S;P.S=function(e,n){w0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Lv(e,n),qp!==null&&qp(e,n)};var xs=L(null);function Gu(){var e=xs.current;return e!==null?e:Ye.pooledCache}function bl(e,n){n===null?yt(xs,xs.current):yt(xs,n.pool)}function Yp(){var e=Gu();return e===null?null:{parent:un._currentValue,pool:e}}var Js=Error(s(460)),Vu=Error(s(474)),El=Error(s(542)),Tl={then:function(){}};function jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qp(e),e;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qp(e),e}throw _s=n,Js}}function gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,Js):a}}var _s=null;function Kp(){if(_s===null)throw Error(s(459));var e=_s;return _s=null,e}function Qp(e){if(e===Js||e===El)throw Error(s(483))}var $s=null,ho=0;function Al(e){var n=ho;return ho+=1,$s===null&&($s=[]),Zp($s,e,n)}function po(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jp(e){function n(W,G){if(e){var Z=W.deletions;Z===null?(W.deletions=[G],W.flags|=16):Z.push(G)}}function a(W,G){if(!e)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function o(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function u(W,G){return W=Zi(W,G),W.index=0,W.sibling=null,W}function f(W,G,Z){return W.index=Z,e?(Z=W.alternate,Z!==null?(Z=Z.index,Z<G?(W.flags|=67108866,G):Z):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function g(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function E(W,G,Z,ht){return G===null||G.tag!==6?(G=Du(Z,W.mode,ht),G.return=W,G):(G=u(G,Z),G.return=W,G)}function B(W,G,Z,ht){var Zt=Z.type;return Zt===A?ft(W,G,Z.props.children,ht,Z.key):G!==null&&(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===nt&&gs(Zt)===G.type)?(G=u(G,Z.props),po(G,Z),G.return=W,G):(G=vl(Z.type,Z.key,Z.props,null,W.mode,ht),po(G,Z),G.return=W,G)}function Q(W,G,Z,ht){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=Uu(Z,W.mode,ht),G.return=W,G):(G=u(G,Z.children||[]),G.return=W,G)}function ft(W,G,Z,ht,Zt){return G===null||G.tag!==7?(G=hs(Z,W.mode,ht,Zt),G.return=W,G):(G=u(G,Z),G.return=W,G)}function mt(W,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Du(""+G,W.mode,Z),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return Z=vl(G.type,G.key,G.props,null,W.mode,Z),po(Z,G),Z.return=W,Z;case T:return G=Uu(G,W.mode,Z),G.return=W,G;case nt:return G=gs(G),mt(W,G,Z)}if(ut(G)||tt(G))return G=hs(G,W.mode,Z,null),G.return=W,G;if(typeof G.then=="function")return mt(W,Al(G),Z);if(G.$$typeof===D)return mt(W,Ml(W,G),Z);Rl(W,G)}return null}function et(W,G,Z,ht){var Zt=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Zt!==null?null:E(W,G,""+Z,ht);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:return Z.key===Zt?B(W,G,Z,ht):null;case T:return Z.key===Zt?Q(W,G,Z,ht):null;case nt:return Z=gs(Z),et(W,G,Z,ht)}if(ut(Z)||tt(Z))return Zt!==null?null:ft(W,G,Z,ht,null);if(typeof Z.then=="function")return et(W,G,Al(Z),ht);if(Z.$$typeof===D)return et(W,G,Ml(W,Z),ht);Rl(W,Z)}return null}function rt(W,G,Z,ht,Zt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(Z)||null,E(G,W,""+ht,Zt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case M:return W=W.get(ht.key===null?Z:ht.key)||null,B(G,W,ht,Zt);case T:return W=W.get(ht.key===null?Z:ht.key)||null,Q(G,W,ht,Zt);case nt:return ht=gs(ht),rt(W,G,Z,ht,Zt)}if(ut(ht)||tt(ht))return W=W.get(Z)||null,ft(G,W,ht,Zt,null);if(typeof ht.then=="function")return rt(W,G,Z,Al(ht),Zt);if(ht.$$typeof===D)return rt(W,G,Z,Ml(G,ht),Zt);Rl(G,ht)}return null}function It(W,G,Z,ht){for(var Zt=null,De=null,Vt=G,he=G=0,Me=null;Vt!==null&&he<Z.length;he++){Vt.index>he?(Me=Vt,Vt=null):Me=Vt.sibling;var Ue=et(W,Vt,Z[he],ht);if(Ue===null){Vt===null&&(Vt=Me);break}e&&Vt&&Ue.alternate===null&&n(W,Vt),G=f(Ue,G,he),De===null?Zt=Ue:De.sibling=Ue,De=Ue,Vt=Me}if(he===Z.length)return a(W,Vt),Te&&Ki(W,he),Zt;if(Vt===null){for(;he<Z.length;he++)Vt=mt(W,Z[he],ht),Vt!==null&&(G=f(Vt,G,he),De===null?Zt=Vt:De.sibling=Vt,De=Vt);return Te&&Ki(W,he),Zt}for(Vt=o(Vt);he<Z.length;he++)Me=rt(Vt,W,he,Z[he],ht),Me!==null&&(e&&Me.alternate!==null&&Vt.delete(Me.key===null?he:Me.key),G=f(Me,G,he),De===null?Zt=Me:De.sibling=Me,De=Me);return e&&Vt.forEach(function(Ya){return n(W,Ya)}),Te&&Ki(W,he),Zt}function $t(W,G,Z,ht){if(Z==null)throw Error(s(151));for(var Zt=null,De=null,Vt=G,he=G=0,Me=null,Ue=Z.next();Vt!==null&&!Ue.done;he++,Ue=Z.next()){Vt.index>he?(Me=Vt,Vt=null):Me=Vt.sibling;var Ya=et(W,Vt,Ue.value,ht);if(Ya===null){Vt===null&&(Vt=Me);break}e&&Vt&&Ya.alternate===null&&n(W,Vt),G=f(Ya,G,he),De===null?Zt=Ya:De.sibling=Ya,De=Ya,Vt=Me}if(Ue.done)return a(W,Vt),Te&&Ki(W,he),Zt;if(Vt===null){for(;!Ue.done;he++,Ue=Z.next())Ue=mt(W,Ue.value,ht),Ue!==null&&(G=f(Ue,G,he),De===null?Zt=Ue:De.sibling=Ue,De=Ue);return Te&&Ki(W,he),Zt}for(Vt=o(Vt);!Ue.done;he++,Ue=Z.next())Ue=rt(Vt,W,he,Ue.value,ht),Ue!==null&&(e&&Ue.alternate!==null&&Vt.delete(Ue.key===null?he:Ue.key),G=f(Ue,G,he),De===null?Zt=Ue:De.sibling=Ue,De=Ue);return e&&Vt.forEach(function(kS){return n(W,kS)}),Te&&Ki(W,he),Zt}function Ge(W,G,Z,ht){if(typeof Z=="object"&&Z!==null&&Z.type===A&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:t:{for(var Zt=Z.key;G!==null;){if(G.key===Zt){if(Zt=Z.type,Zt===A){if(G.tag===7){a(W,G.sibling),ht=u(G,Z.props.children),ht.return=W,W=ht;break t}}else if(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===nt&&gs(Zt)===G.type){a(W,G.sibling),ht=u(G,Z.props),po(ht,Z),ht.return=W,W=ht;break t}a(W,G);break}else n(W,G);G=G.sibling}Z.type===A?(ht=hs(Z.props.children,W.mode,ht,Z.key),ht.return=W,W=ht):(ht=vl(Z.type,Z.key,Z.props,null,W.mode,ht),po(ht,Z),ht.return=W,W=ht)}return g(W);case T:t:{for(Zt=Z.key;G!==null;){if(G.key===Zt)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){a(W,G.sibling),ht=u(G,Z.children||[]),ht.return=W,W=ht;break t}else{a(W,G);break}else n(W,G);G=G.sibling}ht=Uu(Z,W.mode,ht),ht.return=W,W=ht}return g(W);case nt:return Z=gs(Z),Ge(W,G,Z,ht)}if(ut(Z))return It(W,G,Z,ht);if(tt(Z)){if(Zt=tt(Z),typeof Zt!="function")throw Error(s(150));return Z=Zt.call(Z),$t(W,G,Z,ht)}if(typeof Z.then=="function")return Ge(W,G,Al(Z),ht);if(Z.$$typeof===D)return Ge(W,G,Ml(W,Z),ht);Rl(W,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,G!==null&&G.tag===6?(a(W,G.sibling),ht=u(G,Z),ht.return=W,W=ht):(a(W,G),ht=Du(Z,W.mode,ht),ht.return=W,W=ht),g(W)):a(W,G)}return function(W,G,Z,ht){try{ho=0;var Zt=Ge(W,G,Z,ht);return $s=null,Zt}catch(Vt){if(Vt===Js||Vt===El)throw Vt;var De=$n(29,Vt,null,W.mode);return De.lanes=ht,De.return=W,De}}}var vs=Jp(!0),$p=Jp(!1),Da=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(e),zp(e,null,a),n}return gl(e,o,n,a),_l(e)}function mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,jr(e,a)}}function Wu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var qu=!1;function xo(){if(qu){var e=Qs;if(e!==null)throw e}}function go(e,n,a,o){qu=!1;var u=e.updateQueue;Da=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var B=E,Q=B.next;B.next=null,g===null?f=Q:g.next=Q,g=B;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,E=ft.lastBaseUpdate,E!==g&&(E===null?ft.firstBaseUpdate=Q:E.next=Q,ft.lastBaseUpdate=B))}if(f!==null){var mt=u.baseState;g=0,ft=Q=B=null,E=f;do{var et=E.lane&-536870913,rt=et!==E.lane;if(rt?(ye&et)===et:(o&et)===et){et!==0&&et===Ks&&(qu=!0),ft!==null&&(ft=ft.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var It=e,$t=E;et=n;var Ge=a;switch($t.tag){case 1:if(It=$t.payload,typeof It=="function"){mt=It.call(Ge,mt,et);break t}mt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=$t.payload,et=typeof It=="function"?It.call(Ge,mt,et):It,et==null)break t;mt=_({},mt,et);break t;case 2:Da=!0}}et=E.callback,et!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[et]:rt.push(et))}else rt={lane:et,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ft===null?(Q=ft=rt,B=mt):ft=ft.next=rt,g|=et;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ft===null&&(B=mt),u.baseState=B,u.firstBaseUpdate=Q,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ba|=g,e.lanes=g,e.memoizedState=mt}}function tm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function em(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tm(a[e],n)}var tr=L(null),Cl=L(0);function nm(e,n){e=oa,yt(Cl,e),yt(tr,n),oa=e|n.baseLanes}function Yu(){yt(Cl,oa),yt(tr,tr.current)}function ju(){oa=Cl.current,st(tr),st(Cl)}var ti=L(null),pi=null;function Na(e){var n=e.alternate;yt(rn,rn.current&1),yt(ti,e),pi===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(pi=e)}function Zu(e){yt(rn,rn.current),yt(ti,e),pi===null&&(pi=e)}function im(e){e.tag===22?(yt(rn,rn.current),yt(ti,e),pi===null&&(pi=e)):Oa()}function Oa(){yt(rn,rn.current),yt(ti,ti.current)}function ei(e){st(ti),pi===e&&(pi=null),st(rn)}var rn=L(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||nh(a)||ih(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,le=null,Fe=null,fn=null,Dl=!1,er=!1,Ss=!1,Ul=0,_o=0,nr=null,Ov=0;function en(){throw Error(s(321))}function Ku(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Qu(e,n,a,o,u,f){return $i=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Hm:df,Ss=!1,f=a(o,u),Ss=!1,er&&(f=sm(n,a,o,u)),am(e),f}function am(e){P.H=yo;var n=Fe!==null&&Fe.next!==null;if($i=0,fn=Fe=le=null,Dl=!1,_o=0,nr=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&yl(e)&&(hn=!0))}function sm(e,n,a,o){le=e;var u=0;do{if(er&&(nr=null),_o=0,er=!1,25<=u)throw Error(s(301));if(u+=1,fn=Fe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Gm,f=n(a,o)}while(er);return f}function Pv(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(le.flags|=1024),n}function Ju(){var e=Ul!==0;return Ul=0,e}function $u(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function tf(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}$i=0,fn=Fe=le=null,er=!1,_o=Ul=0,nr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?le.memoizedState=fn=e:fn=fn.next=e,fn}function on(){if(Fe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=fn===null?le.memoizedState:fn.next;if(n!==null)fn=n,Fe=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},fn===null?le.memoizedState=fn=e:fn=fn.next=e}return fn}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,nr===null&&(nr=[]),e=Zp(nr,e,n),n=le,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Hm:df),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===D)return wn(e)}throw Error(s(438,String(e)))}function ef(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=on();return nf(n,Fe,e)}function nf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var E=g=null,B=null,Q=n,ft=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(ye&mt)===mt:($i&mt)===mt){var et=Q.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Ks&&(ft=!0);else if(($i&et)===et){Q=Q.next,et===Ks&&(ft=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(E=B=mt,g=f):B=B.next=mt,le.lanes|=et,Ba|=et;mt=Q.action,Ss&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else et={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(E=B=et,g=f):B=B.next=et,le.lanes|=mt,Ba|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(B===null?g=f:B.next=E,!Jn(f,e.memoizedState)&&(hn=!0,ft&&(a=Qs,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function af(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=e(f,g.action),g=g.next;while(g!==u);Jn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function rm(e,n,a){var o=le,u=on(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Jn((Fe||u).memoizedState,a);if(g&&(u.memoizedState=a,hn=!0),u=u.queue,of(cm.bind(null,o,u,e),[e]),u.getSnapshot!==n||g||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,ir(9,{destroy:void 0},lm.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));f||($i&127)!==0||om(o,n,a)}return a}function om(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Ll(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function lm(e,n,a,o){n.value=a,n.getSnapshot=o,um(n)&&fm(e)}function cm(e,n,a){return a(function(){um(n)&&fm(e)})}function um(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function fm(e){var n=fs(e,2);n!==null&&qn(n,e,2)}function sf(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),Ss){qt(!0);try{a()}finally{qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function hm(e,n,a,o){return e.baseState=a,nf(e,Fe,typeof o=="function"?o:ta)}function zv(e,n,a,o,u){if(Bl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,dm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function dm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,g={};P.T=g;try{var E=a(u,o),B=P.S;B!==null&&B(g,E),pm(e,n,E)}catch(Q){rf(e,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),P.T=f}}else try{f=a(u,o),pm(e,n,f)}catch(Q){rf(e,n,Q)}}function pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){mm(e,n,o)},function(o){return rf(e,n,o)}):mm(e,n,a)}function mm(e,n,a){n.status="fulfilled",n.value=a,xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,dm(e,a)))}function rf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==o)}e.action=null}function xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function gm(e,n){return n}function _m(e,n){if(Te){var a=Ye.formState;if(a!==null){t:{var o=le;if(Te){if(Ke){e:{for(var u=Ke,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=mi(u.nextSibling),o=u.data==="F!";break t}}Ca(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:n},a.queue=o,a=Bm.bind(null,le,o),o.dispatch=a,o=sf(!1),f=hf.bind(null,le,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=zv.bind(null,le,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function vm(e){var n=on();return Sm(n,Fe,e)}function Sm(e,n,a){if(n=nf(e,n,gm)[0],e=Ol(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(g){throw g===Js?El:g}else o=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,ir(9,{destroy:void 0},Bv.bind(null,u,a),null)),[o,f,e]}function Bv(e,n){e.action=n}function ym(e){var n=on(),a=Fe;if(a!==null)return Sm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ir(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Ll(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Mm(){return on().memoizedState}function Pl(e,n,a,o){var u=In();le.flags|=e,u.memoizedState=ir(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(e,n,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;Fe!==null&&o!==null&&Ku(o,Fe.memoizedState.deps)?u.memoizedState=ir(n,f,a,o):(le.flags|=e,u.memoizedState=ir(1|n,f,a,o))}function bm(e,n){Pl(8390656,8,e,n)}function of(e,n){zl(2048,8,e,n)}function Iv(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Ll(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Em(e){var n=on().memoizedState;return Iv({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Tm(e,n){return zl(4,2,e,n)}function Am(e,n){return zl(4,4,e,n)}function Rm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cm(e,n,a){a=a!=null?a.concat([e]):null,zl(4,4,Rm.bind(null,n,e),a)}function lf(){}function wm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ku(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Dm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ku(n,o[1]))return o[0];if(o=e(),Ss){qt(!0);try{e()}finally{qt(!1)}}return a.memoizedState=[o,n],o}function cf(e,n,a){return a===void 0||($i&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=U0(),le.lanes|=e,Ba|=e,a)}function Um(e,n,a,o){return Jn(a,n)?a:tr.current!==null?(e=cf(e,a,o),Jn(e,n)||(hn=!0),e):($i&42)===0||($i&1073741824)!==0&&(ye&261930)===0?(hn=!0,e.memoizedState=a):(e=U0(),le.lanes|=e,Ba|=e,n)}function Lm(e,n,a,o,u){var f=q.p;q.p=f!==0&&8>f?f:8;var g=P.T,E={};P.T=E,hf(e,!1,n,a);try{var B=u(),Q=P.S;if(Q!==null&&Q(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=Nv(B,o);So(e,n,ft,ai(e))}else So(e,n,o,ai(e))}catch(mt){So(e,n,{then:function(){},status:"rejected",reason:mt},ai())}finally{q.p=f,g!==null&&E.types!==null&&(g.types=E.types),P.T=g}}function Fv(){}function uf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Nm(e).queue;Lm(e,u,n,j,a===null?Fv:function(){return Om(e),a(o)})}function Nm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Om(e){var n=Nm(e);n.next===null&&(n=e.alternate.memoizedState),So(e,n.next.queue,{},ai())}function ff(){return wn(Bo)}function Pm(){return on().memoizedState}function zm(){return on().memoizedState}function Hv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=Ua(a);var o=La(n,e,a);o!==null&&(qn(o,n,a),mo(o,n,a)),n={cache:Fu()},e.payload=n;return}n=n.return}}function Gv(e,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bl(e)?Im(n,a):(a=Cu(e,n,a,o),a!==null&&(qn(a,e,o),Fm(a,n,o)))}function Bm(e,n,a){var o=ai();So(e,n,a,o)}function So(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))Im(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(u.hasEagerState=!0,u.eagerState=E,Jn(E,g))return gl(e,n,u,0),Ye===null&&xl(),!1}catch{}if(a=Cu(e,n,u,o),a!==null)return qn(a,e,o),Fm(a,n,o),!0}return!1}function hf(e,n,a,o){if(o={lane:2,revertLane:kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(n)throw Error(s(479))}else n=Cu(e,a,o,2),n!==null&&qn(n,e,2)}function Bl(e){var n=e.alternate;return e===le||n!==null&&n===le}function Im(e,n){er=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Fm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,jr(e,a)}}var yo={readContext:wn,use:Nl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};yo.useEffectEvent=en;var Hm={readContext:wn,use:Nl,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:bm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Rm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(Ss){qt(!0);try{e()}finally{qt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(Ss){qt(!0);try{a(n)}finally{qt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Gv.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=sf(e);var n=e.queue,a=Bm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:lf,useDeferredValue:function(e,n){var a=In();return cf(a,e,n)},useTransition:function(){var e=sf(!1);return e=Lm.bind(null,le,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=In();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(ye&127)!==0||om(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,bm(cm.bind(null,o,f,e),[e]),o.flags|=2048,ir(9,{destroy:void 0},lm.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=Ye.identifierPrefix;if(Te){var a=zi,o=Pi;a=(o&~(1<<32-Gt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ov++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ff,useFormState:_m,useActionState:_m,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:ef,useCacheRefresh:function(){return In().memoizedState=Hv.bind(null,le)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},df={readContext:wn,use:Nl,useCallback:wm,useContext:wn,useEffect:of,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Ol,useRef:Mm,useState:function(){return Ol(ta)},useDebugValue:lf,useDeferredValue:function(e,n){var a=on();return Um(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Ol(ta)[0],n=on().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:ff,useFormState:vm,useActionState:vm,useOptimistic:function(e,n){var a=on();return hm(a,Fe,e,n)},useMemoCache:ef,useCacheRefresh:zm};df.useEffectEvent=Em;var Gm={readContext:wn,use:Nl,useCallback:wm,useContext:wn,useEffect:of,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:af,useRef:Mm,useState:function(){return af(ta)},useDebugValue:lf,useDeferredValue:function(e,n){var a=on();return Fe===null?cf(a,e,n):Um(a,Fe.memoizedState,e,n)},useTransition:function(){var e=af(ta)[0],n=on().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:ff,useFormState:ym,useActionState:ym,useOptimistic:function(e,n){var a=on();return Fe!==null?hm(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:zm};Gm.useEffectEvent=Em;function pf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var mf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Ua(o);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(qn(n,e,o),mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(qn(n,e,o),mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=Ua(a);o.tag=2,n!=null&&(o.callback=n),n=La(e,o,a),n!==null&&(qn(n,e,a),mo(n,e,a))}};function Vm(e,n,a,o,u,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,g):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,f):!0}function Xm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&mf.enqueueReplaceState(n,n.state,null)}function ys(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function km(e){ml(e)}function Wm(e){console.error(e)}function qm(e){ml(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function xf(e,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function jm(e){return e=Ua(e),e.tag=3,e}function Zm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Ym(n,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Ym(n,a,o),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function Vv(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Zs(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?Kl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Gf(e,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Gf(e,o,u)),!1}throw Error(s(435,a.tag))}return Gf(e,o,u),Kl(),!1}if(Te)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ou&&(e=Error(s(422),{cause:o}),co(ui(e,a)))):(o!==Ou&&(n=Error(s(423),{cause:o}),co(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ui(o,a),u=xf(e.stateNode,o,u),Wu(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=ui(f,a),wo===null?wo=[f]:wo.push(f),nn!==4&&(nn=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=xf(a.stateNode,o,e),Wu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=jm(u),Zm(u,e,a,o),Wu(a,u),!1}a=a.return}while(a!==null);return!1}var gf=Error(s(461)),hn=!1;function Dn(e,n,a,o){n.child=e===null?$p(n,null,a,o):vs(n,e.child,a,o)}function Km(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var g={};for(var E in o)E!=="ref"&&(g[E]=o[E])}else g=o;return ms(n),o=Qu(e,n,a,g,f,u),E=Ju(),e!==null&&!hn?($u(e,n,u),ea(e,n,u)):(Te&&E&&Lu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function Qm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!wu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jm(e,n,f,o,u)):(e=vl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Tf(e,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(g,o)&&e.ref===n.ref)return ea(e,n,u)}return n.flags|=1,e=Zi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Jm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(ro(f,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=f,Tf(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,ea(e,n,u)}return _f(e,n,a,o,u)}function $m(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return t0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,f!==null?f.cachePool:null),f!==null?nm(n,f):Yu(),im(n);else return o=n.lanes=536870912,t0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(bl(n,f.cachePool),nm(n,f),Oa(),n.memoizedState=null):(e!==null&&bl(n,null),Yu(),Oa());return Dn(e,n,u,a),n.child}function Mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function t0(e,n,a,o,u){var f=Gu();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&bl(n,null),Yu(),im(n),e!==null&&Zs(e,n,o,!0),n.childLanes=u,null}function Fl(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function e0(e,n,a){return vs(n,e.child,null,a),e=Fl(n,n.pendingProps),e.flags|=2,ei(n),n.memoizedState=null,e}function Xv(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Fl(n,o),n.lanes=536870912,Mo(null,e);if(Zu(n),(e=Ke)?(e=dx(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Ip(e),a.return=n,n.child=a,Cn=n,Ke=null)):e=null,e===null)throw Ca(n);return n.lanes=536870912,null}return Fl(n,o)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Zu(n),u)if(n.flags&256)n.flags&=-257,n=e0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||Zs(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=Ye,o!==null&&(g=Zr(o,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,fs(e,g),qn(o,e,g),gf;Kl(),n=e0(e,n,a)}else e=f.treeContext,Ke=mi(g.nextSibling),Cn=n,Te=!0,Ra=null,di=!1,e!==null&&Gp(n,e),n=Fl(n,o),n.flags|=4096;return n}return e=Zi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function _f(e,n,a,o,u){return ms(n),a=Qu(e,n,a,o,void 0,u),o=Ju(),e!==null&&!hn?($u(e,n,u),ea(e,n,u)):(Te&&o&&Lu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function n0(e,n,a,o,u,f){return ms(n),n.updateQueue=null,a=sm(n,o,a,u),am(e),o=Ju(),e!==null&&!hn?($u(e,n,f),ea(e,n,f)):(Te&&o&&Lu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function i0(e,n,a,o,u){if(ms(n),n.stateNode===null){var f=Ws,g=a.contextType;typeof g=="object"&&g!==null&&(f=wn(g)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=mf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Xu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?wn(g):Ws,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(pf(n,a,g,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&mf.enqueueReplaceState(f,f.state,null),go(n,o,f,u),xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,B=ys(a,E);f.props=B;var Q=f.context,ft=a.contextType;g=Ws,typeof ft=="object"&&ft!==null&&(g=wn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==g)&&Xm(n,f,o,g),Da=!1;var et=n.memoizedState;f.state=et,go(n,o,f,u),xo(),Q=n.memoizedState,E||et!==Q||Da?(typeof mt=="function"&&(pf(n,a,mt,o),Q=n.memoizedState),(B=Da||Vm(n,a,B,o,et,Q,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=Q),f.props=o,f.state=Q,f.context=g,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ku(e,n),g=n.memoizedProps,ft=ys(a,g),f.props=ft,mt=n.pendingProps,et=f.context,Q=a.contextType,B=Ws,typeof Q=="object"&&Q!==null&&(B=wn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||et!==B)&&Xm(n,f,o,B),Da=!1,et=n.memoizedState,f.state=et,go(n,o,f,u),xo();var rt=n.memoizedState;g!==mt||et!==rt||Da||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof E=="function"&&(pf(n,a,E,o),rt=n.memoizedState),(ft=Da||Vm(n,a,ft,o,et,rt,B)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=B,o=ft):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Hl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=vs(n,e.child,null,u),n.child=vs(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ea(e,n,u),e}function a0(e,n,a,o){return ds(),n.flags|=256,Dn(e,n,a,o),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(e){return{baseLanes:e,cachePool:Yp()}}function yf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function s0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Na(n):Oa(),(e=Ke)?(e=dx(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Ip(e),a.return=n,n.child=a,Cn=n,Ke=null)):e=null,e===null)throw Ca(n);return ih(e)?n.lanes=32:n.lanes=536870912,null}var E=o.children;return o=o.fallback,u?(Oa(),u=n.mode,E=Gl({mode:"hidden",children:E},u),o=hs(o,u,a,null),E.return=n,o.return=n,E.sibling=o,n.child=E,o=n.child,o.memoizedState=Sf(a),o.childLanes=yf(e,g,a),n.memoizedState=vf,Mo(null,o)):(Na(n),Mf(n,E))}var B=e.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=bf(e,n,a)):n.memoizedState!==null?(Oa(),n.child=e.child,n.flags|=128,n=null):(Oa(),E=o.fallback,u=n.mode,o=Gl({mode:"visible",children:o.children},u),E=hs(E,u,a,null),E.flags|=2,o.return=n,E.return=n,o.sibling=E,n.child=o,vs(n,e.child,null,a),o=n.child,o.memoizedState=Sf(a),o.childLanes=yf(e,g,a),n.memoizedState=vf,n=Mo(null,o));else if(Na(n),ih(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var Q=g.dgst;g=Q,o=Error(s(419)),o.stack="",o.digest=g,co({value:o,source:null,stack:null}),n=bf(e,n,a)}else if(hn||Zs(e,n,a,!1),g=(a&e.childLanes)!==0,hn||g){if(g=Ye,g!==null&&(o=Zr(g,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,fs(e,o),qn(g,e,o),gf;nh(E)||Kl(),n=bf(e,n,a)}else nh(E)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Ke=mi(E.nextSibling),Cn=n,Te=!0,Ra=null,di=!1,e!==null&&Gp(n,e),n=Mf(n,o.children),n.flags|=4096);return n}return u?(Oa(),E=o.fallback,u=n.mode,B=e.child,Q=B.sibling,o=Zi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,Q!==null?E=Zi(Q,E):(E=hs(E,u,a,null),E.flags|=2),E.return=n,o.return=n,o.sibling=E,n.child=o,Mo(null,o),o=n.child,E=e.child.memoizedState,E===null?E=Sf(a):(u=E.cachePool,u!==null?(B=un._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Yp(),E={baseLanes:E.baseLanes|a,cachePool:u}),o.memoizedState=E,o.childLanes=yf(e,g,a),n.memoizedState=vf,Mo(e.child,o)):(Na(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function Mf(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function bf(e,n,a){return vs(n,e.child,null,a),e=Mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function r0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Bu(e.return,n,a)}function Ef(e,n,a,o,u,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function o0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var g=rn.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,yt(rn,g),Dn(e,n,o,a),o=Te?lo:0,!E&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&r0(e,a,n);else if(e.tag===19)r0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ef(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ef(n,!0,a,null,f,o);break;case"together":Ef(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Tf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function kv(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),wa(n,un,e.memoizedState.cache),ds();break;case 27:case 5:Xt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?s0(e,n,a):(Na(n),e=ea(e,n,a),e!==null?e.sibling:null);Na(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Zs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return o0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(rn,rn.current),o)break;return null;case 22:return n.lanes=0,$m(e,n,a,n.pendingProps);case 24:wa(n,un,e.memoizedState.cache)}return ea(e,n,a)}function l0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Tf(e,a)&&(n.flags&128)===0)return hn=!1,kv(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Te&&(n.flags&1048576)!==0&&Hp(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=gs(n.elementType),n.type=e,typeof e=="function")wu(e)?(o=ys(e,o),n.tag=1,n=i0(null,n,e,o,a)):(n.tag=0,n=_f(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===I){n.tag=11,n=Km(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=Qm(null,n,e,o,a);break t}}throw n=dt(e)||e,Error(s(306,n,""))}}return n;case 0:return _f(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ys(o,n.pendingProps),i0(e,n,o,u,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ku(e,n),go(n,o,null,a);var g=n.memoizedState;if(o=g.cache,wa(n,un,o),o!==f.cache&&Iu(n,[un],a,!0),xo(),o=g.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=a0(e,n,o,a);break t}else if(o!==u){u=ui(Error(s(424)),n),co(u),n=a0(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=mi(e.firstChild),Cn=n,Te=!0,Ra=null,di=!0,a=$p(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ds(),o===u){n=ea(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=vx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=ic(it.current).createElement(a),o[cn]=n,o[mn]=e,Un(o,a,e),J(o),n.stateNode=o):n.memoizedState=vx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&Te&&(o=n.stateNode=xx(n.type,n.pendingProps,it.current),Cn=n,di=!0,u=Ke,Va(n.type)?(ah=u,Ke=mi(o.firstChild)):Ke=u),Dn(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Ke)&&(o=SS(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,Cn=n,Ke=mi(o.firstChild),di=!1,u=!0):u=!1),u||Ca(n)),Xt(n),u=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,o=f.children,$f(u,f)?o=null:g!==null&&$f(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Qu(e,n,Pv,null,null,a),Bo._currentValue=u),Hl(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=Ke)&&(a=yS(a,n.pendingProps,di),a!==null?(n.stateNode=a,Cn=n,Ke=null,e=!0):e=!1),e||Ca(n)),null;case 13:return s0(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=vs(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return Km(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,wa(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ms(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return Qm(e,n,n.type,n.pendingProps,a);case 15:return Jm(e,n,n.type,n.pendingProps,a);case 19:return o0(e,n,a);case 31:return Xv(e,n,a);case 22:return $m(e,n,a,n.pendingProps);case 24:return ms(n),o=wn(un),e===null?(u=Gu(),u===null&&(u=Ye,f=Fu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Xu(n),wa(n,un,u)):((e.lanes&a)!==0&&(ku(e,n),go(n,null,null,a),xo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,un,o)):(o=f.cache,wa(n,un,o),o!==u.cache&&Iu(n,[un],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function Af(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(P0())e.flags|=8192;else throw _s=Tl,Vu}else e.flags&=-16777217}function c0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ex(n))if(P0())e.flags|=8192;else throw _s=Tl,Vu}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,or|=n)}function bo(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Wv(e,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(un),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(js(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pu())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(na(n),f!==null?(Qe(n),c0(n,f)):(Qe(n),Af(n,u,null,o,a))):f?f!==e.memoizedState?(na(n),Qe(n),c0(n,f)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&na(n),Qe(n),Af(n,u,e,o,a)),null;case 27:if(ue(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}e=Et.current,js(n)?Vp(n):(e=xx(u,o,a),n.stateNode=e,na(n))}return Qe(n),null;case 5:if(ue(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(f=Et.current,js(n))Vp(n);else{var g=ic(it.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?g.createElement(u,{is:o.is}):g.createElement(u)}}f[cn]=n,f[mn]=o;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&na(n)}}return Qe(n),Af(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||sx(e.nodeValue,a)),e||Ca(n,!0)}else e=ic(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=js(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Qe(n),null);case 4:return Ft(),e===null&&jf(n.stateNode.containerInfo),Qe(n),null;case 10:return Ji(n.type),Qe(n),null;case 19:if(st(rn),o=n.memoizedState,o===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,bo(o,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Bp(a,e),a=a.sibling;return yt(rn,rn.current&1|2),Te&&Ki(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>Yl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(e=wl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Te)return Qe(n),null}else 2*b()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=rn.current,yt(rn,u?a&1|2:a&1),Te&&Ki(n,o.treeForkCount),e):(Qe(n),null);case 22:case 23:return ei(n),ju(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&st(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(un),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function qv(e,n){switch(Nu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(un),Ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ue(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return st(rn),null;case 4:return Ft(),null;case 10:return Ji(n.type),null;case 22:case 23:return ei(n),ju(),e!==null&&st(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(un),null;case 25:return null;default:return null}}function u0(e,n){switch(Nu(n),n.tag){case 3:Ji(un),Ft();break;case 26:case 27:case 5:ue(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:st(rn);break;case 10:Ji(n.type);break;case 22:case 23:ei(n),ju(),e!==null&&st(xs);break;case 24:Ji(un)}}function Eo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,g=a.inst;o=f(),g.destroy=o}a=a.next}while(a!==u)}}catch(E){Be(n,n.return,E)}}function Pa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var g=o.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var B=a,Q=E;try{Q()}catch(ft){Be(u,B,ft)}}}o=o.next}while(o!==f)}}catch(ft){Be(n,n.return,ft)}}function f0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{em(n,a)}catch(o){Be(e,e.return,o)}}}function h0(e,n,a){a.props=ys(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function To(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function d0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Rf(e,n,a){try{var o=e.stateNode;pS(o,e.type,a,n),o[mn]=n}catch(u){Be(e,e.return,u)}}function p0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function Cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||p0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(o!==4&&(o===27&&Va(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(wf(e,n,a),e=e.sibling;e!==null;)wf(e,n,a),e=e.sibling}function Xl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Xl(e,n,a),e=e.sibling;e!==null;)Xl(e,n,a),e=e.sibling}function m0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[cn]=e,n[mn]=a}catch(f){Be(e,e.return,f)}}var ia=!1,dn=!1,Df=!1,x0=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function Yv(e,n){if(e=e.containerInfo,Qf=uc,e=Cp(e),Mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,B=-1,Q=0,ft=0,mt=e,et=null;e:for(;;){for(var rt;mt!==a||u!==0&&mt.nodeType!==3||(E=g+u),mt!==f||o!==0&&mt.nodeType!==3||(B=g+o),mt.nodeType===3&&(g+=mt.nodeValue.length),(rt=mt.firstChild)!==null;)et=mt,mt=rt;for(;;){if(mt===e)break e;if(et===a&&++Q===u&&(E=g),et===f&&++ft===o&&(B=g),(rt=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=rt}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:e,selectionRange:a},uc=!1,Tn=n;Tn!==null;)if(n=Tn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Tn=e;else for(;Tn!==null;){switch(n=Tn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var It=ys(a.type,u);e=o.getSnapshotBeforeUpdate(It,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Be(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)eh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Tn=e;break}Tn=n.return}}function g0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),o&4&&Eo(5,a);break;case 1:if(sa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Be(a,a.return,g)}else{var u=ys(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Be(a,a.return,g)}}o&64&&f0(a),o&512&&To(a,a.return);break;case 3:if(sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{em(e,n)}catch(g){Be(a,a.return,g)}}break;case 27:n===null&&o&4&&m0(a);case 26:case 5:sa(e,a),n===null&&o&4&&d0(a),o&512&&To(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),o&4&&S0(e,a);break;case 13:sa(e,a),o&4&&y0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nS.bind(null,a),MS(e,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||dn,u=ia;var f=dn;ia=o,(dn=n)&&!f?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=u,dn=f}break;case 30:break;default:sa(e,a)}}function _0(e){var n=e.alternate;n!==null&&(e.alternate=null,_0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Jr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Vn=!1;function aa(e,n,a){for(a=a.child;a!==null;)v0(e,n,a),a=a.sibling}function v0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:dn||Bi(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Bi(a,n);var o=Je,u=Vn;Va(a.type)&&(Je=a.stateNode,Vn=!1),aa(e,n,a),Oo(a.stateNode),Je=o,Vn=u;break;case 5:dn||Bi(a,n);case 6:if(o=Je,u=Vn,Je=null,aa(e,n,a),Je=o,Vn=u,Je!==null)if(Vn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Je!==null&&(Vn?(e=Je,fx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),mr(e)):fx(Je,a.stateNode));break;case 4:o=Je,u=Vn,Je=a.stateNode.containerInfo,Vn=!0,aa(e,n,a),Je=o,Vn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),dn||Pa(4,a,n),aa(e,n,a);break;case 1:dn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&h0(a,n,o)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,aa(e,n,a),dn=o;break;default:aa(e,n,a)}}function S0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{mr(e)}catch(a){Be(n,n.return,a)}}}function y0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{mr(e)}catch(a){Be(n,n.return,a)}}function jv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new x0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new x0),n;default:throw Error(s(435,e.tag))}}function kl(e,n){var a=jv(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=iS.bind(null,e,o);o.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Va(E.type)){Je=E.stateNode,Vn=!1;break t}break;case 5:Je=E.stateNode,Vn=!1;break t;case 3:case 4:Je=E.stateNode.containerInfo,Vn=!0;break t}E=E.return}if(Je===null)throw Error(s(160));v0(f,g,u),Je=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)M0(n,e),n=n.sibling}var Ei=null;function M0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),kn(e),o&4&&(Pa(3,e,e.return),Eo(3,e),Pa(5,e,e.return));break;case 1:Xn(n,e),kn(e),o&512&&(dn||a===null||Bi(a,a.return)),o&64&&ia&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ei;if(Xn(n,e),kn(e),o&512&&(dn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[os]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[cn]=e,J(f),o=f;break t;case"link":var g=Mx("link","href",u).get(o+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(g=Mx("meta","content",u).get(o+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[cn]=e,J(f),o=f}e.stateNode=o}else bx(u,e.type,e.stateNode);else e.stateNode=yx(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?bx(u,e.type,e.stateNode):yx(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Rf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),kn(e),o&512&&(dn||a===null||Bi(a,a.return)),a!==null&&o&4&&Rf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),kn(e),o&512&&(dn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{Oi(u,"")}catch(It){Be(e,e.return,It)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Rf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Df=!0);break;case 6:if(Xn(n,e),kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(It){Be(e,e.return,It)}}break;case 3:if(rc=null,u=Ei,Ei=ac(n.containerInfo),Xn(n,e),Ei=u,kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{mr(n.containerInfo)}catch(It){Be(e,e.return,It)}Df&&(Df=!1,b0(e));break;case 4:o=Ei,Ei=ac(e.stateNode.containerInfo),Xn(n,e),kn(e),Ei=o;break;case 12:Xn(n,e),kn(e);break;case 31:Xn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 13:Xn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,Q=ia,ft=dn;if(ia=Q||u,dn=ft||B,Xn(n,e),dn=ft,ia=Q,kn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ia||dn||Ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=B.stateNode;var mt=B.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;E.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(It){Be(B,B.return,It)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(It){Be(B,B.return,It)}}}else if(n.tag===18){if(a===null){B=n;try{var rt=B.stateNode;u?hx(rt,!0):hx(B.stateNode,!1)}catch(It){Be(B,B.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(e,a))));break;case 19:Xn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(p0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Cf(e);Xl(e,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Oi(g,""),a.flags&=-33);var E=Cf(e);Xl(e,E,g);break;case 3:case 4:var B=a.stateNode.containerInfo,Q=Cf(e);wf(e,Q,B);break;default:throw Error(s(161))}}catch(ft){Be(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function b0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;b0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)g0(e,n.alternate,n),n=n.sibling}function Ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),Ms(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&h0(n,n.return,a),Ms(n);break;case 27:Oo(n.stateNode);case 26:case 5:Bi(n,n.return),Ms(n);break;case 22:n.memoizedState===null&&Ms(n);break;case 30:Ms(n);break;default:Ms(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),Eo(4,f);break;case 1:if(ra(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Be(o,o.return,Q)}if(o=f,u=o.updateQueue,u!==null){var E=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)tm(B[u],E)}catch(Q){Be(o,o.return,Q)}}a&&g&64&&f0(f),To(f,f.return);break;case 27:m0(f);case 26:case 5:ra(u,f,a),a&&o===null&&g&4&&d0(f),To(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&g&4&&S0(u,f);break;case 13:ra(u,f,a),a&&g&4&&y0(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),To(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function Uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&uo(a))}function Lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e))}function Ti(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)E0(e,n,a,o),n=n.sibling}function E0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,o),u&2048&&Eo(9,n);break;case 1:Ti(e,n,a,o);break;case 3:Ti(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e)));break;case 12:if(u&2048){Ti(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Be(n,n.return,B)}}else Ti(e,n,a,o);break;case 31:Ti(e,n,a,o);break;case 13:Ti(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,o):Ao(e,n):f._visibility&2?Ti(e,n,a,o):(f._visibility|=2,ar(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Uf(g,n);break;case 24:Ti(e,n,a,o),u&2048&&Lf(n.alternate,n);break;default:Ti(e,n,a,o)}}function ar(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,E=a,B=o,Q=g.flags;switch(g.tag){case 0:case 11:case 15:ar(f,g,E,B,u),Eo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?ar(f,g,E,B,u):Ao(f,g):(ft._visibility|=2,ar(f,g,E,B,u)),u&&Q&2048&&Uf(g.alternate,g);break;case 24:ar(f,g,E,B,u),u&&Q&2048&&Lf(g.alternate,g);break;default:ar(f,g,E,B,u)}n=n.sibling}}function Ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&Uf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Lf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var Ro=8192;function sr(e,n,a){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)T0(e,n,a),e=e.sibling}function T0(e,n,a){switch(e.tag){case 26:sr(e,n,a),e.flags&Ro&&e.memoizedState!==null&&OS(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:sr(e,n,a);break;case 3:case 4:var o=Ei;Ei=ac(e.stateNode.containerInfo),sr(e,n,a),Ei=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,sr(e,n,a),Ro=o):sr(e,n,a));break;default:sr(e,n,a)}}function A0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,C0(o,e)}A0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)R0(e),e=e.sibling}function R0(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):Co(e);break;default:Co(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,C0(o,e)}A0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function C0(e,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else t:for(a=e;Tn!==null;){o=Tn;var u=o.sibling,f=o.return;if(_0(o),o===a){Tn=null;break t}if(u!==null){u.return=f,Tn=u;break t}Tn=f}}}var Zv={getCacheForType:function(e){var n=wn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(un).controller.signal}},Kv=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ye=null,_e=null,ye=0,ze=0,ni=null,za=!1,rr=!1,Nf=!1,oa=0,nn=0,Ba=0,bs=0,Of=0,ii=0,or=0,wo=null,Wn=null,Pf=!1,ql=0,w0=0,Yl=1/0,jl=null,Ia=null,gn=0,Fa=null,lr=null,la=0,zf=0,Bf=null,D0=null,Do=0,If=null;function ai(){return(Ne&2)!==0&&ye!==0?ye&-ye:P.T!==null?kf():Kr()}function U0(){if(ii===0)if((ye&536870912)===0||Te){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ii=e}else ii=536870912;return e=ti.current,e!==null&&(e.flags|=32),ii}function qn(e,n,a){(e===Ye&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(cr(e,0),Ha(e,ye,ii,!1)),Ln(e,a),((Ne&2)===0||e!==Ye)&&(e===Ye&&((Ne&2)===0&&(bs|=a),nn===4&&Ha(e,ye,ii,!1)),Ii(e))}function L0(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||zt(e,n),u=o?$v(e,n):Hf(e,n,!0),f=o;do{if(u===0){rr&&!o&&Ha(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Qv(a)){u=Hf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=e;u=wo;var B=E.current.memoizedState.isDehydrated;if(B&&(cr(E,g).flags|=256),g=Hf(E,g,!1),g!==2){if(Nf&&!B){E.errorRecoveryDisabledLanes|=f,bs|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){cr(e,0),Ha(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ha(o,n,ii,!za);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-b(),10<u)){if(Ha(o,n,ii,!za),xt(o,0,!0)!==0)break t;la=n,o.timeoutHandle=cx(N0.bind(null,o,a,Wn,jl,Pf,n,ii,bs,or,za,f,"Throttled",-0,0),u);break t}N0(o,a,Wn,jl,Pf,n,ii,bs,or,za,f,null,-0,0)}}break}while(!0);Ii(e)}function N0(e,n,a,o,u,f,g,E,B,Q,ft,mt,et,rt){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},T0(n,f,mt);var It=(f&62914560)===f?ql-b():(f&4194048)===f?w0-b():0;if(It=PS(mt,It),It!==null){la=f,e.cancelPendingCommit=It(G0.bind(null,e,n,f,a,o,u,g,E,B,ft,mt,null,et,rt)),Ha(e,f,g,!Q);return}}G0(e,n,f,a,o,u,g,E,B)}function Qv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(e,n,a,o){n&=~Of,n&=~bs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Gt(u),g=1<<f;o[f]=-1,u&=~g}a!==0&&rl(e,a,n)}function Zl(){return(Ne&6)===0?(Uo(0),!1):!0}function Ff(){if(_e!==null){if(ze===0)var e=_e.return;else e=_e,Qi=ps=null,tf(e),$s=null,ho=0,e=_e;for(;e!==null;)u0(e.alternate,e),e=e.return;_e=null}}function cr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,Ff(),Ye=e,_e=a=Zi(e.current,null),ye=n,ze=0,ni=null,za=!1,rr=zt(e,n),Nf=!1,or=ii=Of=bs=Ba=nn=0,Wn=wo=null,Pf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Gt(o),f=1<<u;n|=e[u],o&=~f}return oa=n,xl(),a}function O0(e,n){le=null,P.H=yo,n===Js||n===El?(n=Kp(),ze=3):n===Vu?(n=Kp(),ze=4):ze=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,_e===null&&(nn=1,Il(e,ui(n,e.current)))}function P0(){var e=ti.current;return e===null?!0:(ye&4194048)===ye?pi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===pi:!1}function z0(){var e=P.H;return P.H=yo,e===null?yo:e}function B0(){var e=P.A;return P.A=Zv,e}function Kl(){nn=4,za||(ye&4194048)!==ye&&ti.current!==null||(rr=!0),(Ba&134217727)===0&&(bs&134217727)===0||Ye===null||Ha(Ye,ye,ii,!1)}function Hf(e,n,a){var o=Ne;Ne|=2;var u=z0(),f=B0();(Ye!==e||ye!==n)&&(jl=null,cr(e,n)),n=!1;var g=nn;t:do try{if(ze!==0&&_e!==null){var E=_e,B=ni;switch(ze){case 8:Ff(),g=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var Q=ze;if(ze=0,ni=null,ur(e,E,B,Q),a&&rr){g=0;break t}break;default:Q=ze,ze=0,ni=null,ur(e,E,B,Q)}}Jv(),g=nn;break}catch(ft){O0(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Qi=ps=null,Ne=o,P.H=u,P.A=f,_e===null&&(Ye=null,ye=0,xl()),g}function Jv(){for(;_e!==null;)I0(_e)}function $v(e,n){var a=Ne;Ne|=2;var o=z0(),u=B0();Ye!==e||ye!==n?(jl=null,Yl=b()+500,cr(e,n)):rr=zt(e,n);t:do try{if(ze!==0&&_e!==null){n=_e;var f=ni;e:switch(ze){case 1:ze=0,ni=null,ur(e,n,f,1);break;case 2:case 9:if(jp(f)){ze=0,ni=null,F0(n);break}n=function(){ze!==2&&ze!==9||Ye!==e||(ze=7),Ii(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:jp(f)?(ze=0,ni=null,F0(n)):(ze=0,ni=null,ur(e,n,f,7));break;case 5:var g=null;switch(_e.tag){case 26:g=_e.memoizedState;case 5:case 27:var E=_e;if(g?Ex(g):E.stateNode.complete){ze=0,ni=null;var B=E.sibling;if(B!==null)_e=B;else{var Q=E.return;Q!==null?(_e=Q,Ql(Q)):_e=null}break e}}ze=0,ni=null,ur(e,n,f,5);break;case 6:ze=0,ni=null,ur(e,n,f,6);break;case 8:Ff(),nn=6;break t;default:throw Error(s(462))}}tS();break}catch(ft){O0(e,ft)}while(!0);return Qi=ps=null,P.H=o,P.A=u,Ne=a,_e!==null?0:(Ye=null,ye=0,xl(),nn)}function tS(){for(;_e!==null&&!ae();)I0(_e)}function I0(e){var n=l0(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?Ql(e):_e=n}function F0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=n0(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=n0(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:tf(n);default:u0(a,n),n=_e=Bp(n,oa),n=l0(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?Ql(e):_e=n}function ur(e,n,a,o){Qi=ps=null,tf(n),$s=null,ho=0;var u=n.return;try{if(Vv(e,u,n,a,ye)){nn=1,Il(e,ui(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;nn=1,Il(e,ui(a,e.current)),_e=null;return}n.flags&32768?(Te||o===1?e=!0:rr||(ye&536870912)!==0?e=!1:(za=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),H0(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){H0(n,za);return}e=n.return;var a=Wv(n.alternate,n,oa);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);nn===0&&(nn=5)}function H0(e,n){do{var a=qv(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);nn=6,_e=null}function G0(e,n,a,o,u,f,g,E,B){e.cancelPendingCommit=null;do Jl();while(gn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Ru,Kn(e,a,f,g,E,B),e===Ye&&(_e=Ye=null,ye=0),lr=n,Fa=e,la=a,zf=f,Bf=u,D0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aS(lt,function(){return q0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=q.p,q.p=2,g=Ne,Ne|=4;try{Yv(e,n,a)}finally{Ne=g,q.p=u,P.T=o}}gn=1,V0(),X0(),k0()}}function V0(){if(gn===1){gn=0;var e=Fa,n=lr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var u=Ne;Ne|=4;try{M0(n,e);var f=Jf,g=Cp(e.containerInfo),E=f.focusedElem,B=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&Rp(E.ownerDocument.documentElement,E)){if(B!==null&&Mu(E)){var Q=B.start,ft=B.end;if(ft===void 0&&(ft=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ft,E.value.length);else{var mt=E.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var rt=et.getSelection(),It=E.textContent.length,$t=Math.min(B.start,It),Ge=B.end===void 0?$t:Math.min(B.end,It);!rt.extend&&$t>Ge&&(g=Ge,Ge=$t,$t=g);var W=Ap(E,$t),G=Ap(E,Ge);if(W&&G&&(rt.rangeCount!==1||rt.anchorNode!==W.node||rt.anchorOffset!==W.offset||rt.focusNode!==G.node||rt.focusOffset!==G.offset)){var Z=mt.createRange();Z.setStart(W.node,W.offset),rt.removeAllRanges(),$t>Ge?(rt.addRange(Z),rt.extend(G.node,G.offset)):(Z.setEnd(G.node,G.offset),rt.addRange(Z))}}}}for(mt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&mt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var ht=mt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}uc=!!Qf,Jf=Qf=null}finally{Ne=u,q.p=o,P.T=a}}e.current=n,gn=2}}function X0(){if(gn===2){gn=0;var e=Fa,n=lr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var u=Ne;Ne|=4;try{g0(e,n.alternate,n)}finally{Ne=u,q.p=o,P.T=a}}gn=3}}function k0(){if(gn===4||gn===3){gn=0,U();var e=Fa,n=lr,a=la,o=D0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,lr=Fa=null,W0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),rs(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=q.p,q.p=2,P.T=null;try{for(var f=e.onRecoverableError,g=0;g<o.length;g++){var E=o[g];f(E.value,{componentStack:E.stack})}}finally{P.T=n,q.p=u}}(la&3)!==0&&Jl(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===If?Do++:(Do=0,If=e):Do=0,Uo(0)}}function W0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,uo(n)))}function Jl(){return V0(),X0(),k0(),q0()}function q0(){if(gn!==5)return!1;var e=Fa,n=zf;zf=0;var a=rs(la),o=P.T,u=q.p;try{q.p=32>a?32:a,P.T=null,a=Bf,Bf=null;var f=Fa,g=la;if(gn=0,lr=Fa=null,la=0,(Ne&6)!==0)throw Error(s(331));var E=Ne;if(Ne|=4,R0(f.current),E0(f,f.current,g,a),Ne=E,Uo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(St,f)}catch{}return!0}finally{q.p=u,P.T=o,W0(e,n)}}function Y0(e,n,a){n=ui(a,n),n=xf(e.stateNode,n,2),e=La(e,n,2),e!==null&&(Ln(e,2),Ii(e))}function Be(e,n,a){if(e.tag===3)Y0(e,e,a);else for(;n!==null;){if(n.tag===3){Y0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ia===null||!Ia.has(o))){e=ui(a,e),a=jm(2),o=La(n,a,2),o!==null&&(Zm(a,o,n,e),Ln(o,2),Ii(o));break}}n=n.return}}function Gf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Kv;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Nf=!0,u.add(a),e=eS.bind(null,e,n,a),n.then(e,e))}function eS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(ye&a)===a&&(nn===4||nn===3&&(ye&62914560)===ye&&300>b()-ql?(Ne&2)===0&&cr(e,0):Of|=a,or===ye&&(or=0)),Ii(e)}function j0(e,n){n===0&&(n=Ie()),e=fs(e,n),e!==null&&(Ln(e,n),Ii(e))}function nS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),j0(e,a)}function iS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),j0(e,a)}function aS(e,n){return We(e,n)}var $l=null,fr=null,Vf=!1,tc=!1,Xf=!1,Ga=0;function Ii(e){e!==fr&&e.next===null&&(fr===null?$l=fr=e:fr=fr.next=e),tc=!0,Vf||(Vf=!0,rS())}function Uo(e,n){if(!Xf&&tc){Xf=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var g=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Gt(42|e)+1)-1,f&=u&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,J0(o,f))}else f=ye,f=xt(o,o===Ye?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||zt(o,f)||(a=!0,J0(o,f));o=o.next}while(a);Xf=!1}}function sS(){Z0()}function Z0(){tc=Vf=!1;var e=0;Ga!==0&&xS()&&(e=Ga);for(var n=b(),a=null,o=$l;o!==null;){var u=o.next,f=K0(o,n);f===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(fr=a)):(a=o,(e!==0||(f&3)!==0)&&(tc=!0)),o=u}gn!==0&&gn!==5||Uo(e),Ga!==0&&(Ga=0)}function K0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Gt(f),E=1<<g,B=u[g];B===-1?((E&a)===0||(E&o)!==0)&&(u[g]=ie(E,n)):B<=n&&(e.expiredLanes|=E),f&=~E}if(n=Ye,a=ye,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Yt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Yt(o),rs(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Ut;break;default:a=lt}return o=Q0.bind(null,e),a=We(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Yt(o),e.callbackPriority=2,e.callbackNode=null,2}function Q0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=ye;return o=xt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(L0(e,o,n),K0(e,b()),e.callbackNode!=null&&e.callbackNode===a?Q0.bind(null,e):null)}function J0(e,n){if(Jl())return null;L0(e,n,!0)}function rS(){_S(function(){(Ne&6)!==0?We(pt,sS):Z0()})}function kf(){if(Ga===0){var e=Ks;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Ga=e}return Ga}function $0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function tx(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function oS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=$0((u[mn]||null).action),g=o.submitter;g&&(n=(n=g[mn]||null)?$0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new hl("action","action",null,o,u);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ga!==0){var B=g?tx(u,g):new FormData(u);uf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=g?tx(u,g):new FormData(u),uf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Wf=0;Wf<Au.length;Wf++){var qf=Au[Wf],lS=qf.toLowerCase(),cS=qf[0].toUpperCase()+qf.slice(1);bi(lS,"on"+cS)}bi(Up,"onAnimationEnd"),bi(Lp,"onAnimationIteration"),bi(Np,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(Tv,"onTransitionRun"),bi(Av,"onTransitionStart"),bi(Rv,"onTransitionCancel"),bi(Op,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function ex(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var g=o.length-1;0<=g;g--){var E=o[g],B=E.instance,Q=E.currentTarget;if(E=E.listener,B!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=Q;try{f(u)}catch(ft){ml(ft)}u.currentTarget=null,f=B}else for(g=0;g<o.length;g++){if(E=o[g],B=E.instance,Q=E.currentTarget,E=E.listener,B!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=Q;try{f(u)}catch(ft){ml(ft)}u.currentTarget=null,f=B}}}}function ve(e,n){var a=n[Is];a===void 0&&(a=n[Is]=new Set);var o=e+"__bubble";a.has(o)||(nx(n,e,2,!1),a.add(o))}function Yf(e,n,a){var o=0;n&&(o|=4),nx(a,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function jf(e){if(!e[ec]){e[ec]=!0,Y.forEach(function(a){a!=="selectionchange"&&(uS.has(a)||Yf(a,!1,e),Yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,Yf("selectionchange",!1,n))}}function nx(e,n,a,o){switch(Ux(n)){case 2:var u=IS;break;case 8:u=FS;break;default:u=ch}a=u.bind(null,n,a,e),u=void 0,!du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Zf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var E=o.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=o.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=ba(E),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){o=f=g;continue t}E=E.parentNode}}o=o.return}op(function(){var Q=f,ft=fu(a),mt=[];t:{var et=Pp.get(e);if(et!==void 0){var rt=hl,It=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":rt=iv;break;case"focusin":It="focus",rt=gu;break;case"focusout":It="blur",rt=gu;break;case"beforeblur":case"afterblur":rt=gu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=W_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=rv;break;case Up:case Lp:case Np:rt=j_;break;case Op:rt=lv;break;case"scroll":case"scrollend":rt=X_;break;case"wheel":rt=uv;break;case"copy":case"cut":case"paste":rt=K_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=hp;break;case"toggle":case"beforetoggle":rt=hv}var $t=(n&4)!==0,Ge=!$t&&(e==="scroll"||e==="scrollend"),W=$t?et!==null?et+"Capture":null:et;$t=[];for(var G=Q,Z;G!==null;){var ht=G;if(Z=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Z===null||W===null||(ht=$r(G,W),ht!=null&&$t.push(No(G,ht,Z))),Ge)break;G=G.return}0<$t.length&&(et=new rt(et,It,null,a,ft),mt.push({event:et,listeners:$t}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",et&&a!==uu&&(It=a.relatedTarget||a.fromElement)&&(ba(It)||It[ki]))break t;if((rt||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,rt?(It=a.relatedTarget||a.toElement,rt=Q,It=It?ba(It):null,It!==null&&(Ge=c(It),$t=It.tag,It!==Ge||$t!==5&&$t!==27&&$t!==6)&&(It=null)):(rt=null,It=Q),rt!==It)){if($t=up,ht="onMouseLeave",W="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($t=hp,ht="onPointerLeave",W="onPointerEnter",G="pointer"),Ge=rt==null?et:k(rt),Z=It==null?et:k(It),et=new $t(ht,G+"leave",rt,a,ft),et.target=Ge,et.relatedTarget=Z,ht=null,ba(ft)===Q&&($t=new $t(W,G+"enter",It,a,ft),$t.target=Z,$t.relatedTarget=Ge,ht=$t),Ge=ht,rt&&It)e:{for($t=fS,W=rt,G=It,Z=0,ht=W;ht;ht=$t(ht))Z++;ht=0;for(var Zt=G;Zt;Zt=$t(Zt))ht++;for(;0<Z-ht;)W=$t(W),Z--;for(;0<ht-Z;)G=$t(G),ht--;for(;Z--;){if(W===G||G!==null&&W===G.alternate){$t=W;break e}W=$t(W),G=$t(G)}$t=null}else $t=null;rt!==null&&ix(mt,et,rt,$t,!1),It!==null&&Ge!==null&&ix(mt,Ge,It,$t,!0)}}t:{if(et=Q?k(Q):window,rt=et.nodeName&&et.nodeName.toLowerCase(),rt==="select"||rt==="input"&&et.type==="file")var De=Sp;else if(_p(et))if(yp)De=Mv;else{De=Sv;var Vt=vv}else rt=et.nodeName,!rt||rt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?Q&&cu(Q.elementType)&&(De=Sp):De=yv;if(De&&(De=De(e,Q))){vp(mt,De,a,ft);break t}Vt&&Vt(e,et,Q),e==="focusout"&&Q&&et.type==="number"&&Q.memoizedProps.value!=null&&bn(et,"number",et.value)}switch(Vt=Q?k(Q):window,e){case"focusin":(_p(Vt)||Vt.contentEditable==="true")&&(Vs=Vt,bu=Q,oo=null);break;case"focusout":oo=bu=Vs=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,wp(mt,a,ft);break;case"selectionchange":if(Ev)break;case"keydown":case"keyup":wp(mt,a,ft)}var he;if(vu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Gs?xp(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(dp&&a.locale!=="ko"&&(Gs||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Gs&&(he=lp()):(Ta=ft,pu="value"in Ta?Ta.value:Ta.textContent,Gs=!0)),Vt=nc(Q,Me),0<Vt.length&&(Me=new fp(Me,e,null,a,ft),mt.push({event:Me,listeners:Vt}),he?Me.data=he:(he=gp(a),he!==null&&(Me.data=he)))),(he=pv?mv(e,a):xv(e,a))&&(Me=nc(Q,"onBeforeInput"),0<Me.length&&(Vt=new fp("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Vt,listeners:Me}),Vt.data=he)),oS(mt,e,Q,a,ft)}ex(mt,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=$r(e,a),u!=null&&o.unshift(No(e,u,f)),u=$r(e,n),u!=null&&o.push(No(e,u,f))),e.tag===3)return o;e=e.return}return[]}function fS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ix(e,n,a,o,u){for(var f=n._reactName,g=[];a!==null&&a!==o;){var E=a,B=E.alternate,Q=E.stateNode;if(E=E.tag,B!==null&&B===o)break;E!==5&&E!==26&&E!==27||Q===null||(B=Q,u?(Q=$r(a,f),Q!=null&&g.unshift(No(a,Q,B))):u||(Q=$r(a,f),Q!=null&&g.push(No(a,Q,B)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var hS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function ax(e){return(typeof e=="string"?e:""+e).replace(hS,`
`).replace(dS,"")}function sx(e,n){return n=ax(n),ax(e)===n}function He(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Oi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Oi(e,""+o);break;case"className":Ae(e,"class",o);break;case"tabIndex":Ae(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(e,a,o);break;case"style":sp(e,o,f);break;case"data":if(n!=="object"){Ae(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Yi);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),fe(e,"popover",o);break;case"xlinkActuate":we(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":we(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":we(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":we(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":we(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":we(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":we(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":we(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":we(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=G_.get(a)||a,fe(e,a,o))}}function Kf(e,n,a,o,u,f){switch(a){case"style":sp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Oi(e,o):(typeof o=="number"||typeof o=="bigint")&&Oi(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):fe(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,f,g,a,null)}}u&&He(e,n,"srcSet",a.srcSet,a,null),o&&He(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var E=f=g=u=null,B=null,Q=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":g=ft;break;case"checked":B=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":E=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:He(e,n,o,ft,a,null)}}Ze(e,f,E,B,Q,g,u,!1);return;case"select":ve("invalid",e),o=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":o=E;default:He(e,n,u,E,a,null)}n=f,a=g,e.multiple=!!o,n!=null?xn(e,!!o,n,!1):a!=null&&xn(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":o=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:He(e,n,g,E,a,null)}Rn(e,o,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,n,B,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)ve(Lo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,Q,o,a,null)}return;default:if(cu(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Kf(e,n,ft,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&He(e,n,E,o,a,null))}function pS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,E=null,B=null,Q=null,ft=null;for(rt in a){var mt=a[rt];if(a.hasOwnProperty(rt)&&mt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=mt;default:o.hasOwnProperty(rt)||He(e,n,rt,null,o,mt)}}for(var et in o){var rt=o[et];if(mt=a[et],o.hasOwnProperty(et)&&(rt!=null||mt!=null))switch(et){case"type":f=rt;break;case"name":u=rt;break;case"checked":Q=rt;break;case"defaultChecked":ft=rt;break;case"value":g=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==mt&&He(e,n,et,rt,o,mt)}}Wi(e,g,E,B,Q,ft,f,u);return;case"select":rt=g=E=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":rt=B;default:o.hasOwnProperty(f)||He(e,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":et=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==B&&He(e,n,u,f,o,B)}n=E,a=g,o=rt,et!=null?xn(e,!!a,et,!1):!!o!=!!a&&(n!=null?xn(e,!!a,n,!0):xn(e,!!a,a?[]:"",!1));return;case"textarea":rt=et=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:He(e,n,E,null,o,u)}for(g in o)if(u=o[g],f=a[g],o.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":et=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&He(e,n,g,u,o,f)}En(e,et,rt);return;case"option":for(var It in a)et=a[It],a.hasOwnProperty(It)&&et!=null&&!o.hasOwnProperty(It)&&(It==="selected"?e.selected=!1:He(e,n,It,null,o,et));for(B in o)et=o[B],rt=a[B],o.hasOwnProperty(B)&&et!==rt&&(et!=null||rt!=null)&&(B==="selected"?e.selected=et&&typeof et!="function"&&typeof et!="symbol":He(e,n,B,et,o,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)et=a[$t],a.hasOwnProperty($t)&&et!=null&&!o.hasOwnProperty($t)&&He(e,n,$t,null,o,et);for(Q in o)if(et=o[Q],rt=a[Q],o.hasOwnProperty(Q)&&et!==rt&&(et!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:He(e,n,Q,et,o,rt)}return;default:if(cu(n)){for(var Ge in a)et=a[Ge],a.hasOwnProperty(Ge)&&et!==void 0&&!o.hasOwnProperty(Ge)&&Kf(e,n,Ge,void 0,o,et);for(ft in o)et=o[ft],rt=a[ft],!o.hasOwnProperty(ft)||et===rt||et===void 0&&rt===void 0||Kf(e,n,ft,et,o,rt);return}}for(var W in a)et=a[W],a.hasOwnProperty(W)&&et!=null&&!o.hasOwnProperty(W)&&He(e,n,W,null,o,et);for(mt in o)et=o[mt],rt=a[mt],!o.hasOwnProperty(mt)||et===rt||et==null&&rt==null||He(e,n,mt,et,o,rt)}function rx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,g=u.initiatorType,E=u.duration;if(f&&E&&rx(g)){for(g=0,E=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],Q=B.startTime;if(Q>E)break;var ft=B.transferSize,mt=B.initiatorType;ft&&rx(mt)&&(B=B.responseEnd,g+=ft*(B<E?1:(E-Q)/(B-Q)))}if(--o,n+=8*(f+g)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qf=null,Jf=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function ox(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function $f(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var th=null;function xS(){var e=window.event;return e&&e.type==="popstate"?e===th?!1:(th=e,!0):(th=null,!1)}var cx=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,ux=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof ux<"u"?function(e){return ux.resolve(null).then(e).catch(vS)}:cx;function vS(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function fx(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Oo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[os]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Oo(e.ownerDocument.body);a=u}while(a);mr(n)}function hx(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function eh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),Jr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function SS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[os])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function yS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function dx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function nh(e){return e.data==="$?"||e.data==="$~"}function ih(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function MS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ah=null;function px(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function mx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function xx(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Jr(e)}var xi=new Map,gx=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=q.d;q.d={f:bS,r:ES,D:TS,C:AS,L:RS,m:CS,X:DS,S:wS,M:US};function bS(){var e=ca.f(),n=Zl();return e||n}function ES(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?Om(n):ca.r(e)}var hr=typeof document>"u"?null:document;function _x(e,n,a){var o=hr;if(o&&typeof n=="string"&&n){var u=je(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),gx.has(u)||(gx.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),J(n),o.head.appendChild(n)))}}function TS(e){ca.D(e),_x("dns-prefetch",e,null)}function AS(e,n){ca.C(e,n),_x("preconnect",e,n)}function RS(e,n,a){ca.L(e,n,a);var o=hr;if(o&&e&&n){var u='link[rel="preload"][as="'+je(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+je(a.imageSizes)+'"]')):u+='[href="'+je(e)+'"]';var f=u;switch(n){case"style":f=dr(e);break;case"script":f=pr(e)}xi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),xi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(f))||n==="script"&&o.querySelector(zo(f))||(n=o.createElement("link"),Un(n,"link",e),J(n),o.head.appendChild(n)))}}function CS(e,n){ca.m(e,n);var a=hr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+je(o)+'"][href="'+je(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=pr(e)}if(!xi.has(f)&&(e=_({rel:"modulepreload",href:e},n),xi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(f)))return}o=a.createElement("link"),Un(o,"link",e),J(o),a.head.appendChild(o)}}}function wS(e,n,a){ca.S(e,n,a);var o=hr;if(o&&e){var u=at(o).hoistableStyles,f=dr(e);n=n||"default";var g=u.get(f);if(!g){var E={loading:0,preload:null};if(g=o.querySelector(Po(f)))E.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=xi.get(f))&&sh(e,a);var B=g=o.createElement("link");J(B),Un(B,"link",e),B._p=new Promise(function(Q,ft){B.onload=Q,B.onerror=ft}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,sc(g,n,o)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(f,g)}}}function DS(e,n){ca.X(e,n);var a=hr;if(a&&e){var o=at(a).hoistableScripts,u=pr(e),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(e=_({src:e,async:!0},n),(n=xi.get(u))&&rh(e,n),f=a.createElement("script"),J(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function US(e,n){ca.M(e,n);var a=hr;if(a&&e){var o=at(a).hoistableScripts,u=pr(e),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=xi.get(u))&&rh(e,n),f=a.createElement("script"),J(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function vx(e,n,a,o){var u=(u=it.current)?ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=dr(a.href),a=at(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dr(a.href);var f=at(u).hoistableStyles,g=f.get(e);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=u.querySelector(Po(e)))&&!f._p&&(g.instance=f,g.state.loading=5),xi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(e,a),f||LS(u,e,a,g.state))),n&&o===null)throw Error(s(528,""));return g}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=pr(a),a=at(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function dr(e){return'href="'+je(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function Sx(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function LS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),J(n),e.head.appendChild(n))}function pr(e){return'[src="'+je(e)+'"]'}function zo(e){return"script[async]"+e}function yx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+je(a.href)+'"]');if(o)return n.instance=o,J(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),J(o),Un(o,"style",u),sc(o,a.precedence,e),n.instance=o;case"stylesheet":u=dr(a.href);var f=e.querySelector(Po(u));if(f)return n.state.loading|=4,n.instance=f,J(f),f;o=Sx(a),(u=xi.get(u))&&sh(o,u),f=(e.ownerDocument||e).createElement("link"),J(f);var g=f;return g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),Un(f,"link",o),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=pr(a.src),(u=e.querySelector(zo(f)))?(n.instance=u,J(u),u):(o=a,(u=xi.get(f))&&(o=_({},a),rh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),J(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,e));return n.instance}function sc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,g=0;g<o.length;g++){var E=o[g];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function Mx(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[os]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var E=o.get(g);E?E.push(f):o.set(g,[f])}}return o}function bx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function NS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ex(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function OS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=dr(o.href),f=n.querySelector(Po(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,J(f);return}f=n.ownerDocument||n,o=Sx(o),(u=xi.get(u))&&sh(o,u),f=f.createElement("link"),J(f);var g=f;g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),Un(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var oh=0;function PS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&oh===0&&(oh=62500*mS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>oh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(zS,e),lc=null,oc.call(e))}function zS(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var o=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||o,f===o&&a.set(null,u),a.set(g,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:D,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function BS(e,n,a,o,u,f,g,E,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Tx(e,n,a,o,u,f,g,E,B,Q,ft,mt){return e=new BS(e,n,a,g,B,Q,ft,mt,E),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=Fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Xu(f),e}function Ax(e){return e?(e=Ws,e):Ws}function Rx(e,n,a,o,u,f){u=Ax(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=La(e,o,n),a!==null&&(qn(a,e,n),mo(a,e,n))}function Cx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function lh(e,n){Cx(e,n),(e=e.alternate)&&Cx(e,n)}function wx(e){if(e.tag===13||e.tag===31){var n=fs(e,67108864);n!==null&&qn(n,e,67108864),lh(e,67108864)}}function Dx(e){if(e.tag===13||e.tag===31){var n=ai();n=Mi(n);var a=fs(e,n);a!==null&&qn(a,e,n),lh(e,n)}}var uc=!0;function IS(e,n,a,o){var u=P.T;P.T=null;var f=q.p;try{q.p=2,ch(e,n,a,o)}finally{q.p=f,P.T=u}}function FS(e,n,a,o){var u=P.T;P.T=null;var f=q.p;try{q.p=8,ch(e,n,a,o)}finally{q.p=f,P.T=u}}function ch(e,n,a,o){if(uc){var u=uh(o);if(u===null)Zf(e,n,o,fc,a),Lx(e,o);else if(GS(u,e,n,a,o))o.stopPropagation();else if(Lx(e,o),n&4&&-1<HS.indexOf(e)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Mt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var B=1<<31-Gt(g);E.entanglements[1]|=B,g&=~B}Ii(f),(Ne&6)===0&&(Yl=b()+500,Uo(0))}}break;case 31:case 13:E=fs(f,2),E!==null&&qn(E,f,2),Zl(),lh(f,2)}if(f=uh(o),f===null&&Zf(e,n,o,fc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Zf(e,n,o,null,a)}}function uh(e){return e=fu(e),fh(e)}var fc=null;function fh(e){if(fc=null,e=ba(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function Ux(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case pt:return 2;case vt:return 8;case lt:case Wt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var hh=!1,Xa=null,ka=null,Wa=null,Io=new Map,Fo=new Map,qa=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lx(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Ho(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&wx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function GS(e,n,a,o,u){switch(n){case"focusin":return Xa=Ho(Xa,e,n,a,o,u),!0;case"dragenter":return ka=Ho(ka,e,n,a,o,u),!0;case"mouseover":return Wa=Ho(Wa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Io.set(f,Ho(Io.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Fo.set(f,Ho(Fo.get(f)||null,e,n,a,o,u)),!0}return!1}function Nx(e){var n=ba(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Qr(e.priority,function(){Dx(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Qr(e.priority,function(){Dx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=uh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);uu=o,a.target.dispatchEvent(o),uu=null}else return n=R(a),n!==null&&wx(n),e.blockedOn=a,!1;n.shift()}return!0}function Ox(e,n,a){hc(e)&&a.delete(n)}function VS(){hh=!1,Xa!==null&&hc(Xa)&&(Xa=null),ka!==null&&hc(ka)&&(ka=null),Wa!==null&&hc(Wa)&&(Wa=null),Io.forEach(Ox),Fo.forEach(Ox)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,hh||(hh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,VS)))}var pc=null;function Px(e){pc!==e&&(pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(fh(o||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,uf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function mr(e){function n(B){return dc(B,e)}Xa!==null&&dc(Xa,e),ka!==null&&dc(ka,e),Wa!==null&&dc(Wa,e),Io.forEach(n),Fo.forEach(n);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)Nx(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],g=u[mn]||null;if(typeof f=="function")g||Px(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[mn]||null)E=g.formAction;else if(fh(u)!==null)continue}else E=g.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),Px(a)}}}function zx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function dh(e){this._internalRoot=e}mc.prototype.render=dh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();Rx(a,o,e,n,null,null)},mc.prototype.unmount=dh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rx(e.current,2,null,e,null,null),Zl(),n[ki]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,e),a===0&&Nx(e)}};var Bx=t.version;if(Bx!=="19.2.6")throw Error(s(527,Bx,"19.2.6"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var XS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{St=xc.inject(XS),bt=xc}catch{}}return Vo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=km,f=Wm,g=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Tx(e,1,!1,null,null,a,o,null,u,f,g,zx),e[ki]=n.current,jf(e),new dh(n)},Vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=km,g=Wm,E=qm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Tx(e,1,!0,n,a??null,o,u,B,f,g,E,zx),n.context=Ax(null),a=n.current,o=ai(),o=Mi(o),u=Ua(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Ii(n),e[ki]=n.current,jf(e),new mc(n)},Vo.version="19.2.6",Vo}var Yx;function $S(){if(Yx)return xh.exports;Yx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),xh.exports=JS(),xh.exports}var ty=$S();const ey=["Map","Docks","Racks","Analytics"];function ny(){return oe.jsx("nav",{className:"bottom-nav","aria-label":"Warehouse sections",children:ey.map(r=>oe.jsx("button",{className:r==="Map"?"active":"",type:"button",children:r},r))})}const iy=["Layout Zone","Shelf","Nestainer","Main Aisle","Work Area"];function ay({query:r,locations:t,selectedLocation:i,selectedLocationId:s,onQueryChange:l,onSelectLocation:c}){return oe.jsxs("aside",{className:"sidebar",children:[oe.jsxs("label",{className:"search-field",children:[oe.jsx("span",{children:"Search"}),oe.jsx("input",{value:r,onChange:h=>l(h.target.value),placeholder:"Shelf, nestainer, zone...",type:"search"})]}),oe.jsx("div",{className:"filter-list","aria-label":"Location filters",children:iy.map(h=>oe.jsx("button",{type:"button",onClick:()=>l(h),children:h},h))}),oe.jsx("section",{className:"location-list","aria-label":"Locations",children:t.map(h=>oe.jsxs("button",{className:h.id===s?"selected":"",type:"button",onClick:()=>c(h.id),children:[oe.jsx("span",{children:h.name}),oe.jsx("small",{children:h.type})]},h.id))}),oe.jsx("section",{className:"details-panel","aria-live":"polite",children:i?oe.jsxs(oe.Fragment,{children:[oe.jsx("p",{className:"eyebrow",children:i.type}),oe.jsx("h2",{children:i.name}),oe.jsx("p",{children:i.description??"No description available."}),oe.jsxs("dl",{children:[oe.jsxs("div",{children:[oe.jsx("dt",{children:"X"}),oe.jsxs("dd",{children:[i.xMin," - ",i.xMax]})]}),oe.jsxs("div",{children:[oe.jsx("dt",{children:"Y"}),oe.jsxs("dd",{children:[i.yMin," - ",i.yMax]})]}),oe.jsxs("div",{children:[oe.jsx("dt",{children:"Z"}),oe.jsxs("dd",{children:[i.zMin," - ",i.zMax]})]})]})]}):oe.jsx("p",{children:"Select a block to view its details."})})]})}const Wd="181",zr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sy=0,jx=1,ry=2,s_=1,r_=2,xa=3,ss=0,Zn=1,ga=2,Sa=0,Br=1,Zx=2,Kx=3,Qx=4,oy=5,Ds=100,ly=101,cy=102,uy=103,fy=104,hy=200,dy=201,py=202,my=203,$h=204,td=205,xy=206,gy=207,_y=208,vy=209,Sy=210,yy=211,My=212,by=213,Ey=214,ed=0,nd=1,id=2,Fr=3,ad=4,sd=5,rd=6,od=7,o_=0,Ty=1,Ay=2,is=0,Ry=1,Cy=2,wy=3,Dy=4,Uy=5,Ly=6,Ny=7,l_=300,Hr=301,Gr=302,ld=303,cd=304,nu=306,ud=1e3,_a=1001,fd=1002,li=1003,Oy=1004,gc=1005,Si=1006,Sh=1007,Ls=1008,Vi=1009,c_=1010,u_=1011,tl=1012,qd=1013,Ns=1014,va=1015,kr=1016,Yd=1017,jd=1018,el=1020,f_=35902,h_=35899,d_=1021,p_=1022,wi=1023,nl=1026,il=1027,m_=1028,Zd=1029,Kd=1030,Qd=1031,Jd=1033,Xc=33776,kc=33777,Wc=33778,qc=33779,hd=35840,dd=35841,pd=35842,md=35843,xd=36196,gd=37492,_d=37496,vd=37808,Sd=37809,yd=37810,Md=37811,bd=37812,Ed=37813,Td=37814,Ad=37815,Rd=37816,Cd=37817,wd=37818,Dd=37819,Ud=37820,Ld=37821,Nd=36492,Od=36494,Pd=36495,zd=36283,Bd=36284,Id=36285,Fd=36286,Py=3200,zy=3201,x_=0,By=1,es="",oi="srgb",Vr="srgb-linear",Zc="linear",Ve="srgb",xr=7680,Jx=519,Iy=512,Fy=513,Hy=514,g_=515,Gy=516,Vy=517,Xy=518,ky=519,Hd=35044,$x="300 es",Gi=2e3,Kc=2001;function __(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Wy(){const r=Qc("canvas");return r.style.display="block",r}const tg={};function Jc(...r){const t="THREE."+r.shift();console.log(t,...r)}function se(...r){const t="THREE."+r.shift();console.warn(t,...r)}function tn(...r){const t="THREE."+r.shift();console.error(t,...r)}function al(...r){const t=r.join(" ");t in tg||(tg[t]=!0,se(...r))}function qy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class zs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,Gd=180/Math.PI;function as(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Se(r,t,i){return Math.max(t,Math.min(i,r))}function Yy(r,t){return(r%t+t)%t}function yh(r,t,i){return(1-i)*r+i*t}function Hi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const jy={DEG2RAD:Yc};class ee{constructor(t=0,i=0){ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],S=c[h+0],M=c[h+1],T=c[h+2],A=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=M,t[i+2]=T,t[i+3]=A;return}if(_!==A||m!==S||p!==M||v!==T){let y=m*S+p*M+v*T+_*A;y<0&&(S=-S,M=-M,T=-T,A=-A,y=-y);let x=1-d;if(y<.9995){const O=Math.acos(y),D=Math.sin(O);x=Math.sin(x*O)/D,d=Math.sin(d*O)/D,m=m*x+S*d,p=p*x+M*d,v=v*x+T*d,_=_*x+A*d}else{m=m*x+S*d,p=p*x+M*d,v=v*x+T*d,_=_*x+A*d;const O=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=O,p*=O,v*=O,_*=O}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=c[h],S=c[h+1],M=c[h+2],T=c[h+3];return t[i]=d*T+v*_+m*M-p*S,t[i+1]=m*T+v*S+p*_-d*M,t[i+2]=p*T+v*M+d*S-m*_,t[i+3]=v*T-d*_-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),_=d(c/2),S=m(s/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=S*v*_+p*M*T,this._y=p*M*_-S*v*T,this._z=p*v*T+S*M*_,this._w=p*v*_-S*M*T;break;case"YXZ":this._x=S*v*_+p*M*T,this._y=p*M*_-S*v*T,this._z=p*v*T-S*M*_,this._w=p*v*_+S*M*T;break;case"ZXY":this._x=S*v*_-p*M*T,this._y=p*M*_+S*v*T,this._z=p*v*T+S*M*_,this._w=p*v*_-S*M*T;break;case"ZYX":this._x=S*v*_-p*M*T,this._y=p*M*_+S*v*T,this._z=p*v*T-S*M*_,this._w=p*v*_+S*M*T;break;case"YZX":this._x=S*v*_+p*M*T,this._y=p*M*_+S*v*T,this._z=p*v*T-S*M*_,this._w=p*v*_-S*M*T;break;case"XZY":this._x=S*v*_-p*M*T,this._y=p*M*_-S*v*T,this._z=p*v*T+S*M*_,this._w=p*v*_+S*M*T;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=s+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(eg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(eg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*v,this.y=s+m*v+d*p-c*_,this.z=l+m*_+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Mh.copy(this).projectOnVector(t),this.sub(Mh)}reflect(t){return this.sub(Mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new $,eg=new Os;class de{constructor(t,i,s,l,c,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],_=s[7],S=s[2],M=s[5],T=s[8],A=l[0],y=l[3],x=l[6],O=l[1],D=l[4],I=l[7],X=l[2],N=l[5],z=l[8];return c[0]=h*A+d*O+m*X,c[3]=h*y+d*D+m*N,c[6]=h*x+d*I+m*z,c[1]=p*A+v*O+_*X,c[4]=p*y+v*D+_*N,c[7]=p*x+v*I+_*z,c[2]=S*A+M*O+T*X,c[5]=S*y+M*D+T*N,c[8]=S*x+M*I+T*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=v*h-d*p,S=d*m-v*c,M=p*c-h*m,T=i*_+s*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=_*A,t[1]=(l*p-v*s)*A,t[2]=(d*s-l*h)*A,t[3]=S*A,t[4]=(v*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=M*A,t[7]=(s*m-p*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(bh.makeScale(t,i)),this}rotate(t){return this.premultiply(bh.makeRotation(-t)),this}translate(t,i){return this.premultiply(bh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new de,ng=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ig=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zy(){const r={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Ir(l.r),l.g=Ir(l.g),l.b=Ir(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===es?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Vr]:{primaries:t,whitePoint:s,transfer:Zc,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}const Le=Zy();function ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let gr;class Ky{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{gr===void 0&&(gr=Qc("canvas")),gr.width=t.width,gr.height=t.height;const l=gr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Qc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ya(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ya(i[s]/255)*255):i[s]=ya(i[s]);return{data:i,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qy=0;class $d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Eh(l[h].image)):c.push(Eh(l[h]))}else c=Eh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Eh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ky.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let Jy=0;const Th=new $;class Bn extends zs{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=_a,l=_a,c=Si,h=Ls,d=wi,m=Vi,p=Bn.DEFAULT_ANISOTROPY,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=as(),this.name="",this.source=new $d(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==l_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ud:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case fd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ud:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case fd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=l_;Bn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],_=m[8],S=m[1],M=m[5],T=m[9],A=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+A)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,I=(M+1)/2,X=(x+1)/2,N=(v+S)/4,z=(_+A)/4,nt=(T+y)/4;return D>I&&D>X?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=N/s,c=z/s):I>X?I<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(I),s=N/l,c=nt/l):X<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),s=z/c,l=nt/c),this.set(s,l,c,i),this}let O=Math.sqrt((y-T)*(y-T)+(_-A)*(_-A)+(S-v)*(S-v));return Math.abs(O)<.001&&(O=1),this.x=(y-T)/O,this.y=(_-A)/O,this.z=(S-v)/O,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends zs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Bn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new $d(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends $y{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class v_ extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tM extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xo),vc.subVectors(this.max,Xo),_r.subVectors(t.a,Xo),vr.subVectors(t.b,Xo),Sr.subVectors(t.c,Xo),ja.subVectors(vr,_r),Za.subVectors(Sr,vr),Es.subVectors(_r,Sr);let i=[0,-ja.z,ja.y,0,-Za.z,Za.y,0,-Es.z,Es.y,ja.z,0,-ja.x,Za.z,0,-Za.x,Es.z,0,-Es.x,-ja.y,ja.x,0,-Za.y,Za.x,0,-Es.y,Es.x,0];return!Ah(i,_r,vr,Sr,vc)||(i=[1,0,0,0,1,0,0,0,1],!Ah(i,_r,vr,Sr,vc))?!1:(Sc.crossVectors(ja,Za),i=[Sc.x,Sc.y,Sc.z],Ah(i,_r,vr,Sr,vc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ua=[new $,new $,new $,new $,new $,new $,new $,new $],Ai=new $,_c=new Wr,_r=new $,vr=new $,Sr=new $,ja=new $,Za=new $,Es=new $,Xo=new $,vc=new $,Sc=new $,Ts=new $;function Ah(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ts.fromArray(r,c);const d=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),m=t.dot(Ts),p=i.dot(Ts),v=s.dot(Ts);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const eM=new Wr,ko=new $,Rh=new $;class iu{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):eM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ko,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(Rh)),this.expandByPoint(ko.copy(t.center).sub(Rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fa=new $,Ch=new $,yc=new $,Ka=new $,wh=new $,Mc=new $,Dh=new $;class au{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ch.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Ka.copy(this.origin).sub(Ch);const c=t.distanceTo(i)*.5,h=-this.direction.dot(yc),d=Ka.dot(this.direction),m=-Ka.dot(yc),p=Ka.lengthSq(),v=Math.abs(1-h*h);let _,S,M,T;if(v>0)if(_=h*m-d,S=h*d-m,T=c*v,_>=0)if(S>=-T)if(S<=T){const A=1/v;_*=A,S*=A,M=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-T?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p):S<=T?(_=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ch).addScaledVector(yc,S),M}intersectSphere(t,i){fa.subVectors(t.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),v>=0?(c=(t.min.y-S.y)*v,h=(t.max.y-S.y)*v):(c=(t.max.y-S.y)*v,h=(t.min.y-S.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,i,s,l,c){wh.subVectors(i,t),Mc.subVectors(s,t),Dh.crossVectors(wh,Mc);let h=this.direction.dot(Dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ka.subVectors(this.origin,t);const m=d*this.direction.dot(Mc.crossVectors(Ka,Mc));if(m<0)return null;const p=d*this.direction.dot(wh.cross(Ka));if(p<0||m+p>h)return null;const v=-d*Ka.dot(Dh);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,s,l,c,h,d,m,p,v,_,S,M,T,A,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,_,S,M,T,A,y)}set(t,i,s,l,c,h,d,m,p,v,_,S,M,T,A,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=M,x[7]=T,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/yr.setFromMatrixColumn(t,0).length(),c=1/yr.setFromMatrixColumn(t,1).length(),h=1/yr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=h*v,M=h*_,T=d*v,A=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=M+T*p,i[5]=S-A*p,i[9]=-d*m,i[2]=A-S*p,i[6]=T+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*v,M=m*_,T=p*v,A=p*_;i[0]=S+A*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=M*d-T,i[6]=A+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*v,M=m*_,T=p*v,A=p*_;i[0]=S-A*d,i[4]=-h*_,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*v,i[9]=A-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*v,M=h*_,T=d*v,A=d*_;i[0]=m*v,i[4]=T*p-M,i[8]=S*p+A,i[1]=m*_,i[5]=A*p+S,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*v,i[4]=A-S*_,i[8]=T*_+M,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*_+T,i[10]=S-A*_}else if(t.order==="XZY"){const S=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+A,i[5]=h*v,i[9]=M*_-T,i[2]=T*_-M,i[6]=d*v,i[10]=A*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nM,t,iM)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Qa.crossVectors(s,si),Qa.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Qa.crossVectors(s,si)),Qa.normalize(),bc.crossVectors(si,Qa),l[0]=Qa.x,l[4]=bc.x,l[8]=si.x,l[1]=Qa.y,l[5]=bc.y,l[9]=si.y,l[2]=Qa.z,l[6]=bc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],_=s[5],S=s[9],M=s[13],T=s[2],A=s[6],y=s[10],x=s[14],O=s[3],D=s[7],I=s[11],X=s[15],N=l[0],z=l[4],nt=l[8],w=l[12],C=l[1],V=l[5],tt=l[9],ot=l[13],dt=l[2],ut=l[6],P=l[10],q=l[14],j=l[3],gt=l[7],_t=l[11],L=l[15];return c[0]=h*N+d*C+m*dt+p*j,c[4]=h*z+d*V+m*ut+p*gt,c[8]=h*nt+d*tt+m*P+p*_t,c[12]=h*w+d*ot+m*q+p*L,c[1]=v*N+_*C+S*dt+M*j,c[5]=v*z+_*V+S*ut+M*gt,c[9]=v*nt+_*tt+S*P+M*_t,c[13]=v*w+_*ot+S*q+M*L,c[2]=T*N+A*C+y*dt+x*j,c[6]=T*z+A*V+y*ut+x*gt,c[10]=T*nt+A*tt+y*P+x*_t,c[14]=T*w+A*ot+y*q+x*L,c[3]=O*N+D*C+I*dt+X*j,c[7]=O*z+D*V+I*ut+X*gt,c[11]=O*nt+D*tt+I*P+X*_t,c[15]=O*w+D*ot+I*q+X*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],_=t[6],S=t[10],M=t[14],T=t[3],A=t[7],y=t[11],x=t[15];return T*(+c*m*_-l*p*_-c*d*S+s*p*S+l*d*M-s*m*M)+A*(+i*m*M-i*p*S+c*h*S-l*h*M+l*p*v-c*m*v)+y*(+i*p*_-i*d*M-c*h*_+s*h*M+c*d*v-s*p*v)+x*(-l*d*v-i*m*_+i*d*S+l*h*_-s*h*S+s*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=t[9],S=t[10],M=t[11],T=t[12],A=t[13],y=t[14],x=t[15],O=_*y*p-A*S*p+A*m*M-d*y*M-_*m*x+d*S*x,D=T*S*p-v*y*p-T*m*M+h*y*M+v*m*x-h*S*x,I=v*A*p-T*_*p+T*d*M-h*A*M-v*d*x+h*_*x,X=T*_*m-v*A*m-T*d*S+h*A*S+v*d*y-h*_*y,N=i*O+s*D+l*I+c*X;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return t[0]=O*z,t[1]=(A*S*c-_*y*c-A*l*M+s*y*M+_*l*x-s*S*x)*z,t[2]=(d*y*c-A*m*c+A*l*p-s*y*p-d*l*x+s*m*x)*z,t[3]=(_*m*c-d*S*c-_*l*p+s*S*p+d*l*M-s*m*M)*z,t[4]=D*z,t[5]=(v*y*c-T*S*c+T*l*M-i*y*M-v*l*x+i*S*x)*z,t[6]=(T*m*c-h*y*c-T*l*p+i*y*p+h*l*x-i*m*x)*z,t[7]=(h*S*c-v*m*c+v*l*p-i*S*p-h*l*M+i*m*M)*z,t[8]=I*z,t[9]=(T*_*c-v*A*c-T*s*M+i*A*M+v*s*x-i*_*x)*z,t[10]=(h*A*c-T*d*c+T*s*p-i*A*p-h*s*x+i*d*x)*z,t[11]=(v*d*c-h*_*c-v*s*p+i*_*p+h*s*M-i*d*M)*z,t[12]=X*z,t[13]=(v*A*l-T*_*l+T*s*S-i*A*S-v*s*y+i*_*y)*z,t[14]=(T*d*l-h*A*l-T*s*m+i*A*m+h*s*y-i*d*y)*z,t[15]=(h*_*l-v*d*l+v*s*m-i*_*m-h*s*S+i*d*S)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,_=d+d,S=c*p,M=c*v,T=c*_,A=h*v,y=h*_,x=d*_,O=m*p,D=m*v,I=m*_,X=s.x,N=s.y,z=s.z;return l[0]=(1-(A+x))*X,l[1]=(M+I)*X,l[2]=(T-D)*X,l[3]=0,l[4]=(M-I)*N,l[5]=(1-(S+x))*N,l[6]=(y+O)*N,l[7]=0,l[8]=(T+D)*z,l[9]=(y-O)*z,l[10]=(1-(S+A))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=yr.set(l[0],l[1],l[2]).length();const h=yr.set(l[4],l[5],l[6]).length(),d=yr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ri.copy(this);const p=1/c,v=1/h,_=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Gi,m=!1){const p=this.elements,v=2*c/(i-t),_=2*c/(s-l),S=(i+t)/(i-t),M=(s+l)/(s-l);let T,A;if(m)T=c/(h-c),A=h*c/(h-c);else if(d===Gi)T=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Kc)T=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Gi,m=!1){const p=this.elements,v=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),M=-(s+l)/(s-l);let T,A;if(m)T=1/(h-c),A=h/(h-c);else if(d===Gi)T=-2/(h-c),A=-(h+c)/(h-c);else if(d===Kc)T=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const yr=new $,Ri=new $e,nM=new $(0,0,0),iM=new $(1,1,1),Qa=new $,bc=new $,si=new $,ag=new $e,sg=new Os;class Xi{constructor(t=0,i=0,s=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return ag.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ag,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return sg.setFromEuler(this),this.setFromQuaternion(sg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let aM=0;const rg=new $,Mr=new Os,ha=new $e,Ec=new $,Wo=new $,sM=new $,rM=new Os,og=new $(1,0,0),lg=new $(0,1,0),cg=new $(0,0,1),ug={type:"added"},oM={type:"removed"},br={type:"childadded",child:null},Uh={type:"childremoved",child:null};class vn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new $,i=new Xi,s=new Os,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new de}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Mr.setFromAxisAngle(t,i),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,i){return Mr.setFromAxisAngle(t,i),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(og,t)}rotateY(t){return this.rotateOnAxis(lg,t)}rotateZ(t){return this.rotateOnAxis(cg,t)}translateOnAxis(t,i){return rg.copy(t).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(og,t)}translateY(t){return this.translateOnAxis(lg,t)}translateZ(t){return this.translateOnAxis(cg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ec.copy(t):Ec.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Wo,Ec,this.up):ha.lookAt(Ec,Wo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Mr.setFromRotationMatrix(ha),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(tn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ug),br.child=t,this.dispatchEvent(br),br.child=null):tn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(oM),Uh.child=t,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ug),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,sM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,rM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),_=h(t.shapes),S=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}vn.DEFAULT_UP=new $(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new $,da=new $,Lh=new $,pa=new $,Er=new $,Tr=new $,fg=new $,Nh=new $,Oh=new $,Ph=new $,zh=new an,Bh=new an,Ih=new an;class vi{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ci.subVectors(l,i),da.subVectors(s,i),Lh.subVectors(t,i);const h=Ci.dot(Ci),d=Ci.dot(da),m=Ci.dot(Lh),p=da.dot(da),v=da.dot(Lh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(p*m-d*v)*S,T=(h*v-d*m)*S;return c.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return zh.setScalar(0),Bh.setScalar(0),Ih.setScalar(0),zh.fromBufferAttribute(t,i),Bh.fromBufferAttribute(t,s),Ih.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(zh,c.x),h.addScaledVector(Bh,c.y),h.addScaledVector(Ih,c.z),h}static isFrontFacing(t,i,s,l){return Ci.subVectors(s,i),da.subVectors(t,i),Ci.cross(da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ci.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Er.subVectors(l,s),Tr.subVectors(c,s),Nh.subVectors(t,s);const m=Er.dot(Nh),p=Tr.dot(Nh);if(m<=0&&p<=0)return i.copy(s);Oh.subVectors(t,l);const v=Er.dot(Oh),_=Tr.dot(Oh);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Er,h);Ph.subVectors(t,c);const M=Er.dot(Ph),T=Tr.dot(Ph);if(T>=0&&M<=T)return i.copy(c);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(Tr,d);const y=v*T-M*_;if(y<=0&&_-v>=0&&M-T>=0)return fg.subVectors(c,l),d=(_-v)/(_-v+(M-T)),i.copy(l).addScaledVector(fg,d);const x=1/(y+A+S);return h=A*x,d=S*x,i.copy(s).addScaledVector(Er,h).addScaledVector(Tr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Fh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ce{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=Yy(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Fh(h,c,t+1/3),this.g=Fh(h,c,t),this.b=Fh(h,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=oi){function s(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const s=S_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Le.workingToColorSpace(Pn.copy(this),t),Math.round(Se(Pn.r*255,0,255))*65536+Math.round(Se(Pn.g*255,0,255))*256+Math.round(Se(Pn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=v<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=oi){Le.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+t,Ja.s+i,Ja.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ja),t.getHSL(Tc);const s=yh(Ja.h,Tc.h,i),l=yh(Ja.s,Tc.s,i),c=yh(Ja.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ce;ce.NAMES=S_;let lM=0;class Bs extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Br,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=td,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==$h&&(s.blendSrc=this.blendSrc),this.blendDst!==td&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class y_ extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=o_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new $,Ac=new ee;let cM=0;class Di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Hd,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(t),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Hi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Hi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Hi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Hi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Hi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hd&&(t.usage=this.usage),t}}class M_ extends Di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class b_ extends Di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ui extends Di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let uM=0;const gi=new $e,Hh=new vn,Ar=new $,ri=new Wr,qo=new Wr,An=new $;class Ni extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(__(t)?b_:M_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return Hh.lookAt(t),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ui(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];qo.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(ri.min,qo.min),ri.expandByPoint(An),An.addVectors(ri.max,qo.max),ri.expandByPoint(An)):(ri.expandByPoint(qo.min),ri.expandByPoint(qo.max))}ri.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)An.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)An.fromBufferAttribute(d,p),m&&(Ar.fromBufferAttribute(t,p),An.add(Ar)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&tn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){tn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let nt=0;nt<s.count;nt++)d[nt]=new $,m[nt]=new $;const p=new $,v=new $,_=new $,S=new ee,M=new ee,T=new ee,A=new $,y=new $;function x(nt,w,C){p.fromBufferAttribute(s,nt),v.fromBufferAttribute(s,w),_.fromBufferAttribute(s,C),S.fromBufferAttribute(c,nt),M.fromBufferAttribute(c,w),T.fromBufferAttribute(c,C),v.sub(p),_.sub(p),M.sub(S),T.sub(S);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(V),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(V),d[nt].add(A),d[w].add(A),d[C].add(A),m[nt].add(y),m[w].add(y),m[C].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let nt=0,w=O.length;nt<w;++nt){const C=O[nt],V=C.start,tt=C.count;for(let ot=V,dt=V+tt;ot<dt;ot+=3)x(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const D=new $,I=new $,X=new $,N=new $;function z(nt){X.fromBufferAttribute(l,nt),N.copy(X);const w=d[nt];D.copy(w),D.sub(X.multiplyScalar(X.dot(w))).normalize(),I.crossVectors(N,w);const V=I.dot(m[nt])<0?-1:1;h.setXYZW(nt,D.x,D.y,D.z,V)}for(let nt=0,w=O.length;nt<w;++nt){const C=O[nt],V=C.start,tt=C.count;for(let ot=V,dt=V+tt;ot<dt;ot+=3)z(t.getX(ot+0)),z(t.getX(ot+1)),z(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new $,c=new $,h=new $,d=new $,m=new $,p=new $,v=new $,_=new $;if(t)for(let S=0,M=t.count;S<M;S+=3){const T=t.getX(S+0),A=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)An.fromBufferAttribute(t,i),An.normalize(),t.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,_=d.normalized,S=new p.constructor(m.length*v);let M=0,T=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*v;for(let x=0;x<v;x++)S[T++]=p[M++]}return new Di(S,v,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,_=p.length;v<_;v++){const S=p[v],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],_=c[p];for(let S=0,M=_.length;S<M;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hg=new $e,As=new au,Rc=new iu,dg=new $,Cc=new $,wc=new $,Dc=new $,Gh=new $,Uc=new $,pg=new $,Lc=new $;class Li extends vn{constructor(t=new Ni,i=new y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],_=c[m];v!==0&&(Gh.fromBufferAttribute(_,t),h?Uc.addScaledVector(Gh,v):Uc.addScaledVector(Gh.sub(i),v))}i.add(Uc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),As.copy(t.ray).recast(t.near),!(Rc.containsPoint(As.origin)===!1&&(As.intersectSphere(Rc,dg)===null||As.origin.distanceToSquared(dg)>(t.far-t.near)**2))&&(hg.copy(c).invert(),As.copy(t.ray).applyMatrix4(hg),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,As)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=S.length;T<A;T++){const y=S[T],x=h[y.materialIndex],O=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let I=O,X=D;I<X;I+=3){const N=d.getX(I),z=d.getX(I+1),nt=d.getX(I+2);l=Nc(this,x,t,s,p,v,_,N,z,nt),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=T,x=A;y<x;y+=3){const O=d.getX(y),D=d.getX(y+1),I=d.getX(y+2);l=Nc(this,h,t,s,p,v,_,O,D,I),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=S.length;T<A;T++){const y=S[T],x=h[y.materialIndex],O=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let I=O,X=D;I<X;I+=3){const N=I,z=I+1,nt=I+2;l=Nc(this,x,t,s,p,v,_,N,z,nt),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=T,x=A;y<x;y+=3){const O=y,D=y+1,I=y+2;l=Nc(this,h,t,s,p,v,_,O,D,I),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function fM(r,t,i,s,l,c,h,d){let m;if(t.side===Zn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ss,d),m===null)return null;Lc.copy(d),Lc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:r}}function Nc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Cc),r.getVertexPosition(m,wc),r.getVertexPosition(p,Dc);const v=fM(r,t,i,s,Cc,wc,Dc,pg);if(v){const _=new $;vi.getBarycoord(pg,Cc,wc,Dc,_),l&&(v.uv=vi.getInterpolatedAttribute(l,d,m,p,_,new ee)),c&&(v.uv1=vi.getInterpolatedAttribute(c,d,m,p,_,new ee)),h&&(v.normal=vi.getInterpolatedAttribute(h,d,m,p,_,new $),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new $,materialIndex:0};vi.getNormal(Cc,wc,Dc,S.normal),v.face=S,v.barycoord=_}return v}class qr extends Ni{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],_=[];let S=0,M=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ui(p,3)),this.setAttribute("normal",new Ui(v,3)),this.setAttribute("uv",new Ui(_,2));function T(A,y,x,O,D,I,X,N,z,nt,w){const C=I/z,V=X/nt,tt=I/2,ot=X/2,dt=N/2,ut=z+1,P=nt+1;let q=0,j=0;const gt=new $;for(let _t=0;_t<P;_t++){const L=_t*V-ot;for(let st=0;st<ut;st++){const yt=st*C-tt;gt[A]=yt*O,gt[y]=L*D,gt[x]=dt,p.push(gt.x,gt.y,gt.z),gt[A]=0,gt[y]=0,gt[x]=N>0?1:-1,v.push(gt.x,gt.y,gt.z),_.push(st/z),_.push(1-_t/nt),q+=1}}for(let _t=0;_t<nt;_t++)for(let L=0;L<z;L++){const st=S+L+ut*_t,yt=S+L+ut*(_t+1),Et=S+(L+1)+ut*(_t+1),Ot=S+(L+1)+ut*_t;m.push(st,yt,Ot),m.push(yt,Et,Ot),j+=6}d.addGroup(M,j,w),M+=j,S+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Xr(r[i]);for(const l in s)t[l]=s[l]}return t}function hM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function E_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const dM={clone:Xr,merge:Hn};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ma extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=hM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class T_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new $,mg=new ee,xg=new ee;class _i extends T_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-t/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-t/$a.z)}getViewSize(t,i){return this.getViewBounds(t,mg,xg),i.subVectors(xg,mg)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Rr=-90,Cr=1;class xM extends vn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Rr,Cr,t,i);l.layers=this.layers,this.add(l);const c=new _i(Rr,Cr,t,i);c.layers=this.layers,this.add(c);const h=new _i(Rr,Cr,t,i);h.layers=this.layers,this.add(h);const d=new _i(Rr,Cr,t,i);d.layers=this.layers,this.add(d);const m=new _i(Rr,Cr,t,i);m.layers=this.layers,this.add(m);const p=new _i(Rr,Cr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(_,S,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class A_ extends Bn{constructor(t=[],i=Hr,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gM extends Ps{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new A_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qr(5,5,5),c=new Ma({name:"CubemapFromEquirect",uniforms:Xr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Sa});c.uniforms.tEquirect.value=i;const h=new Li(l,c),d=i.minFilter;return i.minFilter===Ls&&(i.minFilter=Si),new xM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Jo extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,s),x=this._getHandJoint(p,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Jo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class ep{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ce(t),this.near=i,this.far=s}clone(){return new ep(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vM extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class SM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Hd,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new $;class $c{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(t),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Hi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Hi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Hi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Hi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Hi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Jc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Di(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $c(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Jc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class R_ extends Bs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let wr;const Yo=new $,Dr=new $,Ur=new $,Lr=new ee,jo=new ee,C_=new $e,Oc=new $,Zo=new $,Pc=new $,gg=new ee,Xh=new ee,_g=new ee;class yM extends vn{constructor(t=new R_){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new Ni;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new SM(i,5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new $c(s,3,0,!1)),wr.setAttribute("uv",new $c(s,2,3,!1))}this.geometry=wr,this.material=t,this.center=new ee(.5,.5),this.count=1}raycast(t,i){t.camera===null&&tn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Dr.setFromMatrixScale(this.matrixWorld),C_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dr.multiplyScalar(-Ur.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;zc(Oc.set(-.5,-.5,0),Ur,h,Dr,l,c),zc(Zo.set(.5,-.5,0),Ur,h,Dr,l,c),zc(Pc.set(.5,.5,0),Ur,h,Dr,l,c),gg.set(0,0),Xh.set(1,0),_g.set(1,1);let d=t.ray.intersectTriangle(Oc,Zo,Pc,!1,Yo);if(d===null&&(zc(Zo.set(-.5,.5,0),Ur,h,Dr,l,c),Xh.set(0,1),d=t.ray.intersectTriangle(Oc,Pc,Zo,!1,Yo),d===null))return;const m=t.ray.origin.distanceTo(Yo);m<t.near||m>t.far||i.push({distance:m,point:Yo.clone(),uv:vi.getInterpolation(Yo,Oc,Zo,Pc,gg,Xh,_g,new ee),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zc(r,t,i,s,l,c){Lr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(jo.x=c*Lr.x-l*Lr.y,jo.y=l*Lr.x+c*Lr.y):jo.copy(Lr),r.copy(t),r.x+=jo.x,r.y+=jo.y,r.applyMatrix4(C_)}class MM extends Bn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=li,v=li,_,S){super(null,h,d,m,p,v,l,c,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kh=new $,bM=new $,EM=new de;class ts{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=kh.subVectors(s,i).cross(bM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(kh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||EM.getNormalMatrix(t),l=this.coplanarPoint(kh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new iu,TM=new ee(.5,.5),Bc=new $;class np{constructor(t=new ts,i=new ts,s=new ts,l=new ts,c=new ts,h=new ts){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],_=c[5],S=c[6],M=c[7],T=c[8],A=c[9],y=c[10],x=c[11],O=c[12],D=c[13],I=c[14],X=c[15];if(l[0].setComponents(p-h,M-v,x-T,X-O).normalize(),l[1].setComponents(p+h,M+v,x+T,X+O).normalize(),l[2].setComponents(p+d,M+_,x+A,X+D).normalize(),l[3].setComponents(p-d,M-_,x-A,X-D).normalize(),s)l[4].setComponents(m,S,y,I).normalize(),l[5].setComponents(p-m,M-S,x-y,X-I).normalize();else if(l[4].setComponents(p-m,M-S,x-y,X-I).normalize(),i===Gi)l[5].setComponents(p+m,M+S,x+y,X+I).normalize();else if(i===Kc)l[5].setComponents(m,S,y,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const i=TM.distanceTo(t.center);return Rs.radius=.7071067811865476+i,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class w_ extends Bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tu=new $,eu=new $,vg=new $e,Ko=new au,Ic=new iu,Wh=new $,Sg=new $;class AM extends vn{constructor(t=new Ni,i=new w_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)tu.fromBufferAttribute(i,l-1),eu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=tu.distanceTo(eu);t.setAttribute("lineDistance",new Ui(s,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,t.ray.intersectsSphere(Ic)===!1)return;vg.copy(l).invert(),Ko.copy(t.ray).applyMatrix4(vg);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,S=s.attributes.position;if(v!==null){const M=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let A=M,y=T-1;A<y;A+=p){const x=v.getX(A),O=v.getX(A+1),D=Fc(this,t,Ko,m,x,O,A);D&&i.push(D)}if(this.isLineLoop){const A=v.getX(T-1),y=v.getX(M),x=Fc(this,t,Ko,m,A,y,T-1);x&&i.push(x)}}else{const M=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let A=M,y=T-1;A<y;A+=p){const x=Fc(this,t,Ko,m,A,A+1,A);x&&i.push(x)}if(this.isLineLoop){const A=Fc(this,t,Ko,m,T-1,M,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Fc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(tu.fromBufferAttribute(d,l),eu.fromBufferAttribute(d,c),i.distanceSqToSegment(tu,eu,Wh,Sg)>s)return;Wh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Wh);if(!(p<t.near||p>t.far))return{distance:p,point:Sg.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const yg=new $,Mg=new $;class RM extends AM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)yg.fromBufferAttribute(i,l),Mg.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+yg.distanceTo(Mg);t.setAttribute("lineDistance",new Ui(s,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class CM extends Bn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class D_ extends Bn{constructor(t,i,s=Ns,l,c,h,d=li,m=li,p,v=nl,_=1){if(v!==nl&&v!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $d(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class U_ extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sl extends Ni{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,_=t/d,S=i/m,M=[],T=[],A=[],y=[];for(let x=0;x<v;x++){const O=x*S-h;for(let D=0;D<p;D++){const I=D*_-c;T.push(I,-O,0),A.push(0,0,1),y.push(D/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const D=O+p*x,I=O+p*(x+1),X=O+1+p*(x+1),N=O+1+p*x;M.push(D,I,N),M.push(I,X,N)}this.setIndex(M),this.setAttribute("position",new Ui(T,3)),this.setAttribute("normal",new Ui(A,3)),this.setAttribute("uv",new Ui(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.widthSegments,t.heightSegments)}}class L_ extends Bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x_,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wM extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DM extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class N_ extends vn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class UM extends N_{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const qh=new $e,bg=new $,Eg=new $;class LM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;bg.setFromMatrixPosition(t.matrixWorld),i.position.copy(bg),Eg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Eg),i.updateMatrixWorld(),qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class O_ extends T_{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class NM extends LM{constructor(){super(new O_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tg extends N_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new NM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class OM extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ag=new $e;class PM{constructor(t,i,s=0,l=1/0){this.ray=new au(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new tp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):tn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Ag.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ag),this}intersectObject(t,i=!0,s=[]){return Vd(t,this,s,i),s.sort(Rg),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Vd(t[l],this,s,i);return s.sort(Rg),s}}function Rg(r,t){return r.distance-t.distance}function Vd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Vd(c[h],t,i,!0)}}class Cg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zM extends RM{constructor(t=10,i=10,s=4473924,l=8947848){s=new ce(s),l=new ce(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let S=0,M=0,T=-d;S<=i;S++,T+=h){m.push(-d,0,T,d,0,T),m.push(T,0,-d,T,0,d);const A=S===c?s:l;A.toArray(p,M),M+=3,A.toArray(p,M),M+=3,A.toArray(p,M),M+=3,A.toArray(p,M),M+=3}const v=new Ni;v.setAttribute("position",new Ui(m,3)),v.setAttribute("color",new Ui(p,3));const _=new w_({vertexColors:!0,toneMapped:!1});super(v,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class BM extends zs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function wg(r,t,i,s){const l=IM(s);switch(i){case d_:return r*t;case m_:return r*t/l.components*l.byteLength;case Zd:return r*t/l.components*l.byteLength;case Kd:return r*t*2/l.components*l.byteLength;case Qd:return r*t*2/l.components*l.byteLength;case p_:return r*t*3/l.components*l.byteLength;case wi:return r*t*4/l.components*l.byteLength;case Jd:return r*t*4/l.components*l.byteLength;case Xc:case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wc:case qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case dd:case md:return Math.max(r,16)*Math.max(t,8)/4;case hd:case pd:return Math.max(r,8)*Math.max(t,8)/2;case xd:case gd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _d:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Md:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case bd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ud:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ld:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Nd:case Od:case Pd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case zd:case Bd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Id:case Fd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IM(r){switch(r){case Vi:case c_:return{byteLength:1,components:1};case tl:case u_:case kr:return{byteLength:2,components:1};case Yd:case jd:return{byteLength:2,components:4};case Ns:case qd:case va:return{byteLength:4,components:1};case f_:case h_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);function P_(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function FM(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const v=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,v);else{_.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<_.length;M++){const T=_[S],A=_[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++S,_[S]=A)}_.length=S+1;for(let M=0,T=_.length;M<T;M++){const A=_[M];r.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var HM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
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
#endif`,VM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
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
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
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
#endif`,ZM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$M=`#ifdef USE_IRIDESCENCE
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
#endif`,tb=`#ifdef USE_BUMPMAP
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
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cb=`#define PI 3.141592653589793
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
} // validated`,ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fb=`vec3 transformedNormal = objectNormal;
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
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rb=`#ifdef USE_GRADIENTMAP
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
}`,Cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
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
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bb=`PhysicalMaterial material;
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
#endif`,Ib=`uniform sampler2D dfgLUT;
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
}`,Fb=`
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
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zb=`#if defined( USE_POINTS_UV )
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
#endif`,Kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
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
#endif`,nE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lE=`#ifdef USE_NORMALMAP
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
#endif`,cE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EE=`float getShadowMask() {
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
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,wE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#ifdef USE_TRANSMISSION
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HE=`uniform sampler2D t2D;
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`#include <common>
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
}`,qE=`#if DEPTH_PACKING == 3200
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
}`,YE=`#define DISTANCE
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
}`,jE=`#define DISTANCE
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`uniform float scale;
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
}`,JE=`uniform vec3 diffuse;
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
}`,$E=`#include <common>
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
}`,t3=`uniform vec3 diffuse;
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
}`,e3=`#define LAMBERT
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
}`,n3=`#define LAMBERT
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
}`,i3=`#define MATCAP
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
}`,a3=`#define MATCAP
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
}`,s3=`#define NORMAL
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
}`,r3=`#define NORMAL
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
}`,o3=`#define PHONG
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
}`,l3=`#define PHONG
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
}`,c3=`#define STANDARD
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
}`,u3=`#define STANDARD
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
}`,f3=`#define TOON
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
}`,h3=`#define TOON
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
}`,d3=`uniform float size;
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
}`,p3=`uniform vec3 diffuse;
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
}`,m3=`#include <common>
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
}`,x3=`uniform vec3 color;
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
}`,g3=`uniform float rotation;
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
}`,_3=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:HM,alphahash_pars_fragment:GM,alphamap_fragment:VM,alphamap_pars_fragment:XM,alphatest_fragment:kM,alphatest_pars_fragment:WM,aomap_fragment:qM,aomap_pars_fragment:YM,batching_pars_vertex:jM,batching_vertex:ZM,begin_vertex:KM,beginnormal_vertex:QM,bsdfs:JM,iridescence_fragment:$M,bumpmap_pars_fragment:tb,clipping_planes_fragment:eb,clipping_planes_pars_fragment:nb,clipping_planes_pars_vertex:ib,clipping_planes_vertex:ab,color_fragment:sb,color_pars_fragment:rb,color_pars_vertex:ob,color_vertex:lb,common:cb,cube_uv_reflection_fragment:ub,defaultnormal_vertex:fb,displacementmap_pars_vertex:hb,displacementmap_vertex:db,emissivemap_fragment:pb,emissivemap_pars_fragment:mb,colorspace_fragment:xb,colorspace_pars_fragment:gb,envmap_fragment:_b,envmap_common_pars_fragment:vb,envmap_pars_fragment:Sb,envmap_pars_vertex:yb,envmap_physical_pars_fragment:Lb,envmap_vertex:Mb,fog_vertex:bb,fog_pars_vertex:Eb,fog_fragment:Tb,fog_pars_fragment:Ab,gradientmap_pars_fragment:Rb,lightmap_pars_fragment:Cb,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Db,lights_pars_begin:Ub,lights_toon_fragment:Nb,lights_toon_pars_fragment:Ob,lights_phong_fragment:Pb,lights_phong_pars_fragment:zb,lights_physical_fragment:Bb,lights_physical_pars_fragment:Ib,lights_fragment_begin:Fb,lights_fragment_maps:Hb,lights_fragment_end:Gb,logdepthbuf_fragment:Vb,logdepthbuf_pars_fragment:Xb,logdepthbuf_pars_vertex:kb,logdepthbuf_vertex:Wb,map_fragment:qb,map_pars_fragment:Yb,map_particle_fragment:jb,map_particle_pars_fragment:Zb,metalnessmap_fragment:Kb,metalnessmap_pars_fragment:Qb,morphinstance_vertex:Jb,morphcolor_vertex:$b,morphnormal_vertex:tE,morphtarget_pars_vertex:eE,morphtarget_vertex:nE,normal_fragment_begin:iE,normal_fragment_maps:aE,normal_pars_fragment:sE,normal_pars_vertex:rE,normal_vertex:oE,normalmap_pars_fragment:lE,clearcoat_normal_fragment_begin:cE,clearcoat_normal_fragment_maps:uE,clearcoat_pars_fragment:fE,iridescence_pars_fragment:hE,opaque_fragment:dE,packing:pE,premultiplied_alpha_fragment:mE,project_vertex:xE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:ME,shadowmap_vertex:bE,shadowmask_pars_fragment:EE,skinbase_vertex:TE,skinning_pars_vertex:AE,skinning_vertex:RE,skinnormal_vertex:CE,specularmap_fragment:wE,specularmap_pars_fragment:DE,tonemapping_fragment:UE,tonemapping_pars_fragment:LE,transmission_fragment:NE,transmission_pars_fragment:OE,uv_pars_fragment:PE,uv_pars_vertex:zE,uv_vertex:BE,worldpos_vertex:IE,background_vert:FE,background_frag:HE,backgroundCube_vert:GE,backgroundCube_frag:VE,cube_vert:XE,cube_frag:kE,depth_vert:WE,depth_frag:qE,distanceRGBA_vert:YE,distanceRGBA_frag:jE,equirect_vert:ZE,equirect_frag:KE,linedashed_vert:QE,linedashed_frag:JE,meshbasic_vert:$E,meshbasic_frag:t3,meshlambert_vert:e3,meshlambert_frag:n3,meshmatcap_vert:i3,meshmatcap_frag:a3,meshnormal_vert:s3,meshnormal_frag:r3,meshphong_vert:o3,meshphong_frag:l3,meshphysical_vert:c3,meshphysical_frag:u3,meshtoon_vert:f3,meshtoon_frag:h3,points_vert:d3,points_frag:p3,shadow_vert:m3,shadow_frag:x3,sprite_vert:g3,sprite_frag:_3},Lt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Fi={basic:{uniforms:Hn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Hn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ce(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Hn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Hn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Hn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ce(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Hn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Hn([Lt.points,Lt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Hn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Hn([Lt.common,Lt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Hn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Hn([Lt.sprite,Lt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Hn([Lt.common,Lt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Hn([Lt.lights,Lt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Fi.physical={uniforms:Hn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Hc={r:0,b:0,g:0},Cs=new Xi,v3=new $e;function S3(r,t,i,s,l,c,h){const d=new ce(0);let m=c===!0?0:1,p,v,_=null,S=0,M=null;function T(D){let I=D.isScene===!0?D.background:null;return I&&I.isTexture&&(I=(D.backgroundBlurriness>0?i:t).get(I)),I}function A(D){let I=!1;const X=T(D);X===null?x(d,m):X&&X.isColor&&(x(X,1),I=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,h):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||I)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(D,I){const X=T(I);X&&(X.isCubeTexture||X.mapping===nu)?(v===void 0&&(v=new Li(new qr(1,1,1),new Ma({name:"BackgroundCubeMaterial",uniforms:Xr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(N,z,nt){this.matrixWorld.copyPosition(nt.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Cs.copy(I.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(v3.makeRotationFromEuler(Cs)),v.material.toneMapped=Le.getTransfer(X.colorSpace)!==Ve,(_!==X||S!==X.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,_=X,S=X.version,M=r.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new Li(new sl(2,2),new Ma({name:"BackgroundMaterial",uniforms:Xr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Le.getTransfer(X.colorSpace)!==Ve,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(_!==X||S!==X.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=X,S=X.version,M=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function x(D,I){D.getRGB(Hc,E_(r)),s.buffers.color.setClear(Hc.r,Hc.g,Hc.b,I,h)}function O(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,I=1){d.set(D),m=I,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,x(d,m)},render:A,addToRenderList:y,dispose:O}}function y3(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(C,V,tt,ot,dt){let ut=!1;const P=_(ot,tt,V);c!==P&&(c=P,p(c.object)),ut=M(C,ot,tt,dt),ut&&T(C,ot,tt,dt),dt!==null&&t.update(dt,r.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,I(C,V,tt,ot),dt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function v(C){return r.deleteVertexArray(C)}function _(C,V,tt){const ot=tt.wireframe===!0;let dt=s[C.id];dt===void 0&&(dt={},s[C.id]=dt);let ut=dt[V.id];ut===void 0&&(ut={},dt[V.id]=ut);let P=ut[ot];return P===void 0&&(P=S(m()),ut[ot]=P),P}function S(C){const V=[],tt=[],ot=[];for(let dt=0;dt<i;dt++)V[dt]=0,tt[dt]=0,ot[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:tt,attributeDivisors:ot,object:C,attributes:{},index:null}}function M(C,V,tt,ot){const dt=c.attributes,ut=V.attributes;let P=0;const q=tt.getAttributes();for(const j in q)if(q[j].location>=0){const _t=dt[j];let L=ut[j];if(L===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),_t===void 0||_t.attribute!==L||L&&_t.data!==L.data)return!0;P++}return c.attributesNum!==P||c.index!==ot}function T(C,V,tt,ot){const dt={},ut=V.attributes;let P=0;const q=tt.getAttributes();for(const j in q)if(q[j].location>=0){let _t=ut[j];_t===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor));const L={};L.attribute=_t,_t&&_t.data&&(L.data=_t.data),dt[j]=L,P++}c.attributes=dt,c.attributesNum=P,c.index=ot}function A(){const C=c.newAttributes;for(let V=0,tt=C.length;V<tt;V++)C[V]=0}function y(C){x(C,0)}function x(C,V){const tt=c.newAttributes,ot=c.enabledAttributes,dt=c.attributeDivisors;tt[C]=1,ot[C]===0&&(r.enableVertexAttribArray(C),ot[C]=1),dt[C]!==V&&(r.vertexAttribDivisor(C,V),dt[C]=V)}function O(){const C=c.newAttributes,V=c.enabledAttributes;for(let tt=0,ot=V.length;tt<ot;tt++)V[tt]!==C[tt]&&(r.disableVertexAttribArray(tt),V[tt]=0)}function D(C,V,tt,ot,dt,ut,P){P===!0?r.vertexAttribIPointer(C,V,tt,dt,ut):r.vertexAttribPointer(C,V,tt,ot,dt,ut)}function I(C,V,tt,ot){A();const dt=ot.attributes,ut=tt.getAttributes(),P=V.defaultAttributeValues;for(const q in ut){const j=ut[q];if(j.location>=0){let gt=dt[q];if(gt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor)),gt!==void 0){const _t=gt.normalized,L=gt.itemSize,st=t.get(gt);if(st===void 0)continue;const yt=st.buffer,Et=st.type,Ot=st.bytesPerElement,it=Et===r.INT||Et===r.UNSIGNED_INT||gt.gpuType===qd;if(gt.isInterleavedBufferAttribute){const ct=gt.data,Ct=ct.stride,Ft=gt.offset;if(ct.isInstancedInterleavedBuffer){for(let Xt=0;Xt<j.locationSize;Xt++)x(j.location+Xt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Xt=0;Xt<j.locationSize;Xt++)y(j.location+Xt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Xt=0;Xt<j.locationSize;Xt++)D(j.location+Xt,L/j.locationSize,Et,_t,Ct*Ot,(Ft+L/j.locationSize*Xt)*Ot,it)}else{if(gt.isInstancedBufferAttribute){for(let ct=0;ct<j.locationSize;ct++)x(j.location+ct,gt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ct=0;ct<j.locationSize;ct++)y(j.location+ct);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let ct=0;ct<j.locationSize;ct++)D(j.location+ct,L/j.locationSize,Et,_t,L*Ot,L/j.locationSize*ct*Ot,it)}}else if(P!==void 0){const _t=P[q];if(_t!==void 0)switch(_t.length){case 2:r.vertexAttrib2fv(j.location,_t);break;case 3:r.vertexAttrib3fv(j.location,_t);break;case 4:r.vertexAttrib4fv(j.location,_t);break;default:r.vertexAttrib1fv(j.location,_t)}}}}O()}function X(){nt();for(const C in s){const V=s[C];for(const tt in V){const ot=V[tt];for(const dt in ot)v(ot[dt].object),delete ot[dt];delete V[tt]}delete s[C]}}function N(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const tt in V){const ot=V[tt];for(const dt in ot)v(ot[dt].object),delete ot[dt];delete V[tt]}delete s[C.id]}function z(C){for(const V in s){const tt=s[V];if(tt[C.id]===void 0)continue;const ot=tt[C.id];for(const dt in ot)v(ot[dt].object),delete ot[dt];delete tt[C.id]}}function nt(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:nt,resetDefaultState:w,dispose:X,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:O}}function M3(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,_){_!==0&&(r.drawArraysInstanced(s,p,v,_),i.update(v,s,_))}function d(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,_);let M=0;for(let T=0;T<_;T++)M+=v[T];i.update(M,s,1)}function m(p,v,_,S){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],v[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,_);let T=0;for(let A=0;A<_;A++)T+=v[A]*S[A];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function b3(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==wi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const nt=z===kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Vi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==va&&!nt)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(se("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),I=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),X=T>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:I,vertexTextures:X,maxSamples:N}}function E3(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ts,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||s!==0||l;return l=S,s=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,M){const T=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!l||T===null||T.length===0||c&&!y)c?v(null):p();else{const O=c?0:s,D=O*4;let I=x.clippingState||null;m.value=I,I=v(T,S,D,M);for(let X=0;X!==D;++X)I[X]=i[X];x.clippingState=I,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(_,S,M,T){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=m.value,T!==!0||y===null){const x=M+A*4,O=S.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,I=M;D!==A;++D,I+=4)h.copy(_[D]).applyMatrix4(O,d),h.normal.toArray(y,I),y[I+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function T3(r){let t=new WeakMap;function i(h,d){return d===ld?h.mapping=Hr:d===cd&&(h.mapping=Gr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ld||d===cd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new gM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const ns=4,Dg=[.125,.215,.35,.446,.526,.582],Us=20,A3=256,Qo=new O_,Ug=new ce;let Yh=null,jh=0,Zh=0,Kh=!1;const R3=new $;class Lg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=R3}=c;Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,jh,Zh),this._renderer.xr.enabled=Kh,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hr||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:kr,format:wi,colorSpace:Vr,depthBuffer:!1},l=Ng(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=C3(c)),this._blurMaterial=D3(c,t,i),this._ggxMaterial=w3(c,t,i)}return l}_compileMaterial(t){const i=new Li(new Ni,t);this._renderer.compile(i,Qo)}_sceneToCubeUV(t,i,s,l,c){const m=new _i(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(Ug),_.toneMapping=is,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new qr,new y_({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let x=!1;const O=t.background;O?O.isColor&&(y.color.copy(O),t.background=null,x=!0):(y.color.copy(Ug),x=!0);for(let D=0;D<6;D++){const I=D%3;I===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[D],c.y,c.z)):I===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[D]));const X=this._cubeSize;Nr(l,I*X,D>2?X:0,X,X),_.setRenderTarget(l),x&&_.render(A,m),_.render(t,m)}_.toneMapping=M,_.autoClear=S,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Hr||t.mapping===Gr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Qo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=.05+p*.95,M=_*S,{_lodMax:T}=this,A=this._sizeLods[s],y=3*A*(s>T-ns?s-T+ns:0),x=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=T-i,Nr(c,y,x,3*A,2*A),l.setRenderTarget(c),l.render(d,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Nr(t,y,x,3*A,2*A),l.setRenderTarget(t),l.render(d,Qo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&tn("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Us-1),A=c/T,y=isFinite(c)?1+Math.floor(v*A):Us;y>Us&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const x=[];let O=0;for(let z=0;z<Us;++z){const nt=z/A,w=Math.exp(-nt*nt/2);x.push(w),z===0?O+=w:z<y&&(O+=2*w)}for(let z=0;z<x.length;z++)x[z]=x[z]/O;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=T,S.mipInt.value=D-s;const I=this._sizeLods[l],X=3*I*(l>D-ns?l-D+ns:0),N=4*(this._cubeSize-I);Nr(i,X,N,3*I,2*I),m.setRenderTarget(i),m.render(_,Qo)}}function C3(r){const t=[],i=[],s=[];let l=r;const c=r-ns+1+Dg.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-ns?m=Dg[h-r+ns-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,T=6,A=3,y=2,x=1,O=new Float32Array(A*T*M),D=new Float32Array(y*T*M),I=new Float32Array(x*T*M);for(let N=0;N<M;N++){const z=N%3*2/3-1,nt=N>2?0:-1,w=[z,nt,0,z+2/3,nt,0,z+2/3,nt+1,0,z,nt,0,z+2/3,nt+1,0,z,nt+1,0];O.set(w,A*T*N),D.set(S,y*T*N);const C=[N,N,N,N,N,N];I.set(C,x*T*N)}const X=new Ni;X.setAttribute("position",new Di(O,A)),X.setAttribute("uv",new Di(D,y)),X.setAttribute("faceIndex",new Di(I,x)),s.push(new Li(X,null)),l>ns&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Ng(r,t,i){const s=new Ps(r,t,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function w3(r,t,i){return new Ma({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:A3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function D3(r,t,i){const s=new Float32Array(Us),l=new $(0,1,0);return new Ma({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:su(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Og(){return new Ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Pg(){return new Ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}function U3(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ld||m===cd,v=m===Hr||m===Gr;if(p||v){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Lg(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Lg(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function L3(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&al("WebGLRenderer: "+s+" extension not supported."),l}}}function N3(r,t,i,s){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",h),delete l[S.id];const M=c.get(S);M&&(t.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)t.update(S[M],r.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,T=_.attributes.position;let A=0;if(M!==null){const O=M.array;A=M.version;for(let D=0,I=O.length;D<I;D+=3){const X=O[D+0],N=O[D+1],z=O[D+2];S.push(X,N,N,z,z,X)}}else if(T!==void 0){const O=T.array;A=T.version;for(let D=0,I=O.length/3-1;D<I;D+=3){const X=D+0,N=D+1,z=D+2;S.push(X,N,N,z,z,X)}}else return;const y=new(__(S)?b_:M_)(S,1);y.version=A;const x=c.get(_);x&&t.remove(x),c.set(_,y)}function v(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function O3(r,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,M){r.drawElements(s,M,c,S*h),i.update(M,s,1)}function p(S,M,T){T!==0&&(r.drawElementsInstanced(s,M,c,S*h,T),i.update(M,s,T))}function v(S,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,T);let y=0;for(let x=0;x<T;x++)y+=M[x];i.update(y,s,1)}function _(S,M,T,A){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,M[x],A[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,A,0,T);let x=0;for(let O=0;O<T;O++)x+=M[O]*A[O];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function P3(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:tn("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function z3(r,t,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let C=function(){nt.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let I=0;T===!0&&(I=1),A===!0&&(I=2),y===!0&&(I=3);let X=d.attributes.position.count*I,N=1;X>t.maxTextureSize&&(N=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const z=new Float32Array(X*N*4*_),nt=new v_(z,X,N,_);nt.type=va,nt.needsUpdate=!0;const w=I*4;for(let V=0;V<_;V++){const tt=x[V],ot=O[V],dt=D[V],ut=X*N*4*V;for(let P=0;P<tt.count;P++){const q=P*w;T===!0&&(l.fromBufferAttribute(tt,P),z[ut+q+0]=l.x,z[ut+q+1]=l.y,z[ut+q+2]=l.z,z[ut+q+3]=0),A===!0&&(l.fromBufferAttribute(ot,P),z[ut+q+4]=l.x,z[ut+q+5]=l.y,z[ut+q+6]=l.z,z[ut+q+7]=0),y===!0&&(l.fromBufferAttribute(dt,P),z[ut+q+8]=l.x,z[ut+q+9]=l.y,z[ut+q+10]=l.z,z[ut+q+11]=dt.itemSize===4?l.w:1)}}S={count:_,texture:nt,size:new ee(X,N)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function B3(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const z_=new Bn,zg=new D_(1,1),B_=new v_,I_=new tM,F_=new A_,Bg=[],Ig=[],Fg=new Float32Array(16),Hg=new Float32Array(9),Gg=new Float32Array(4);function Yr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Bg[l];if(c===void 0&&(c=new Float32Array(l),Bg[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function Sn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function ru(r,t){let i=Ig[t];i===void 0&&(i=new Int32Array(t),Ig[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function I3(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function F3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2fv(this.addr,t),yn(i,t)}}function H3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;r.uniform3fv(this.addr,t),yn(i,t)}}function G3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4fv(this.addr,t),yn(i,t)}}function V3(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Gg.set(s),r.uniformMatrix2fv(this.addr,!1,Gg),yn(i,s)}}function X3(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Hg.set(s),r.uniformMatrix3fv(this.addr,!1,Hg),yn(i,s)}}function k3(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Fg.set(s),r.uniformMatrix4fv(this.addr,!1,Fg),yn(i,s)}}function W3(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function q3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2iv(this.addr,t),yn(i,t)}}function Y3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3iv(this.addr,t),yn(i,t)}}function j3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4iv(this.addr,t),yn(i,t)}}function Z3(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function K3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2uiv(this.addr,t),yn(i,t)}}function Q3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3uiv(this.addr,t),yn(i,t)}}function J3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4uiv(this.addr,t),yn(i,t)}}function $3(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(zg.compareFunction=g_,c=zg):c=z_,i.setTexture2D(t||c,l)}function t1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||I_,l)}function e1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||F_,l)}function n1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||B_,l)}function i1(r){switch(r){case 5126:return I3;case 35664:return F3;case 35665:return H3;case 35666:return G3;case 35674:return V3;case 35675:return X3;case 35676:return k3;case 5124:case 35670:return W3;case 35667:case 35671:return q3;case 35668:case 35672:return Y3;case 35669:case 35673:return j3;case 5125:return Z3;case 36294:return K3;case 36295:return Q3;case 36296:return J3;case 35678:case 36198:case 36298:case 36306:case 35682:return $3;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return n1}}function a1(r,t){r.uniform1fv(this.addr,t)}function s1(r,t){const i=Yr(t,this.size,2);r.uniform2fv(this.addr,i)}function r1(r,t){const i=Yr(t,this.size,3);r.uniform3fv(this.addr,i)}function o1(r,t){const i=Yr(t,this.size,4);r.uniform4fv(this.addr,i)}function l1(r,t){const i=Yr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function c1(r,t){const i=Yr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function u1(r,t){const i=Yr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function f1(r,t){r.uniform1iv(this.addr,t)}function h1(r,t){r.uniform2iv(this.addr,t)}function d1(r,t){r.uniform3iv(this.addr,t)}function p1(r,t){r.uniform4iv(this.addr,t)}function m1(r,t){r.uniform1uiv(this.addr,t)}function x1(r,t){r.uniform2uiv(this.addr,t)}function g1(r,t){r.uniform3uiv(this.addr,t)}function _1(r,t){r.uniform4uiv(this.addr,t)}function v1(r,t,i){const s=this.cache,l=t.length,c=ru(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||z_,c[h])}function S1(r,t,i){const s=this.cache,l=t.length,c=ru(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||I_,c[h])}function y1(r,t,i){const s=this.cache,l=t.length,c=ru(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||F_,c[h])}function M1(r,t,i){const s=this.cache,l=t.length,c=ru(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||B_,c[h])}function b1(r){switch(r){case 5126:return a1;case 35664:return s1;case 35665:return r1;case 35666:return o1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return f1;case 35667:case 35671:return h1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return x1;case 36295:return g1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return M1}}class E1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=i1(i.type)}}class T1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=b1(i.type)}}class A1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function Vg(r,t){r.seq.push(t),r.map[t.id]=t}function R1(r,t,i){const s=r.name,l=s.length;for(Qh.lastIndex=0;;){const c=Qh.exec(s),h=Qh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Vg(i,p===void 0?new E1(d,r,t):new T1(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new A1(d),Vg(i,_)),i=_}}}class jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);R1(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Xg(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const C1=37297;let w1=0;function D1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const kg=new de;function U1(r){Le._getMatrix(kg,Le.workingColorSpace,r);const t=`mat3( ${kg.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case Zc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Wg(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+D1(r.getShaderSource(t),d)}else return c}function L1(r,t){const i=U1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function N1(r,t){let i;switch(t){case Ry:i="Linear";break;case Cy:i="Reinhard";break;case wy:i="Cineon";break;case Dy:i="ACESFilmic";break;case Ly:i="AgX";break;case Ny:i="Neutral";break;case Uy:i="Custom";break;default:se("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new $;function O1(){Le.getLuminanceCoefficients(Gc);const r=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function z1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function B1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function $o(r){return r!==""}function qg(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(r){return r.replace(I1,H1)}const F1=new Map;function H1(r,t){let i=xe[t];if(i===void 0){const s=F1.get(t);if(s!==void 0)i=xe[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Xd(i)}const G1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jg(r){return r.replace(G1,V1)}function V1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Zg(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function X1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===s_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===r_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xa&&(t="SHADOWMAP_TYPE_VSM"),t}function k1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hr:case Gr:t="ENVMAP_TYPE_CUBE";break;case nu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W1(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Gr&&(t="ENVMAP_MODE_REFRACTION"),t}function q1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case o_:t="ENVMAP_BLENDING_MULTIPLY";break;case Ty:t="ENVMAP_BLENDING_MIX";break;case Ay:t="ENVMAP_BLENDING_ADD";break}return t}function Y1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function j1(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=X1(i),p=k1(i),v=W1(i),_=q1(i),S=Y1(i),M=P1(i),T=z1(c),A=l.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter($o).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter($o).join(`
`),x.length>0&&(x+=`
`)):(y=[Zg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),x=[Zg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==is?"#define TONE_MAPPING":"",i.toneMapping!==is?xe.tonemapping_pars_fragment:"",i.toneMapping!==is?N1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,L1("linearToOutputTexel",i.outputColorSpace),O1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),h=Xd(h),h=qg(h,i),h=Yg(h,i),d=Xd(d),d=qg(d,i),d=Yg(d,i),h=jg(h),d=jg(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===$x?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$x?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=O+y+h,I=O+x+d,X=Xg(l,l.VERTEX_SHADER,D),N=Xg(l,l.FRAGMENT_SHADER,I);l.attachShader(A,X),l.attachShader(A,N),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(V){if(r.debug.checkShaderErrors){const tt=l.getProgramInfoLog(A)||"",ot=l.getShaderInfoLog(X)||"",dt=l.getShaderInfoLog(N)||"",ut=tt.trim(),P=ot.trim(),q=dt.trim();let j=!0,gt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,X,N);else{const _t=Wg(l,X,"vertex"),L=Wg(l,N,"fragment");tn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ut+`
`+_t+`
`+L)}else ut!==""?se("WebGLProgram: Program Info Log:",ut):(P===""||q==="")&&(gt=!1);gt&&(V.diagnostics={runnable:j,programLog:ut,vertexShader:{log:P,prefix:y},fragmentShader:{log:q,prefix:x}})}l.deleteShader(X),l.deleteShader(N),nt=new jc(l,A),w=B1(l,A)}let nt;this.getUniforms=function(){return nt===void 0&&z(this),nt};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,C1)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=w1++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=X,this.fragmentShader=N,this}let Z1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Q1(t),i.set(t,s)),s}}class Q1{constructor(t){this.id=Z1++,this.code=t,this.usedTimes=0}}function J1(r,t,i,s,l,c,h){const d=new tp,m=new K1,p=new Set,v=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,V,tt,ot){const dt=tt.fog,ut=ot.geometry,P=w.isMeshStandardMaterial?tt.environment:null,q=(w.isMeshStandardMaterial?i:t).get(w.envMap||P),j=q&&q.mapping===nu?q.image.height:null,gt=T[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&se("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const _t=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,L=_t!==void 0?_t.length:0;let st=0;ut.morphAttributes.position!==void 0&&(st=1),ut.morphAttributes.normal!==void 0&&(st=2),ut.morphAttributes.color!==void 0&&(st=3);let yt,Et,Ot,it;if(gt){const Ce=Fi[gt];yt=Ce.vertexShader,Et=Ce.fragmentShader}else yt=w.vertexShader,Et=w.fragmentShader,m.update(w),Ot=m.getVertexShaderID(w),it=m.getFragmentShaderID(w);const ct=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),Ft=ot.isInstancedMesh===!0,Xt=ot.isBatchedMesh===!0,ue=!!w.map,sn=!!w.matcap,pe=!!q,Re=!!w.aoMap,F=!!w.lightMap,me=!!w.bumpMap,ge=!!w.normalMap,Pe=!!w.displacementMap,Ht=!!w.emissiveMap,We=!!w.metalnessMap,Yt=!!w.roughnessMap,ae=w.anisotropy>0,U=w.clearcoat>0,b=w.dispersion>0,K=w.iridescence>0,pt=w.sheen>0,vt=w.transmission>0,lt=ae&&!!w.anisotropyMap,Wt=U&&!!w.clearcoatMap,Ut=U&&!!w.clearcoatNormalMap,Kt=U&&!!w.clearcoatRoughnessMap,kt=K&&!!w.iridescenceMap,St=K&&!!w.iridescenceThicknessMap,bt=pt&&!!w.sheenColorMap,qt=pt&&!!w.sheenRoughnessMap,Gt=!!w.specularMap,Nt=!!w.specularColorMap,ne=!!w.specularIntensityMap,H=vt&&!!w.transmissionMap,wt=vt&&!!w.thicknessMap,At=!!w.gradientMap,Rt=!!w.alphaMap,Mt=w.alphaTest>0,xt=!!w.alphaHash,zt=!!w.extensions;let ie=is;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Ie={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Et,defines:w.defines,customVertexShaderID:Ot,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Xt,batchingColor:Xt&&ot._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&ot.instanceColor!==null,instancingMorph:Ft&&ot.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Vr,alphaToCoverage:!!w.alphaToCoverage,map:ue,matcap:sn,envMap:pe,envMapMode:pe&&q.mapping,envMapCubeUVHeight:j,aoMap:Re,lightMap:F,bumpMap:me,normalMap:ge,displacementMap:S&&Pe,emissiveMap:Ht,normalMapObjectSpace:ge&&w.normalMapType===By,normalMapTangentSpace:ge&&w.normalMapType===x_,metalnessMap:We,roughnessMap:Yt,anisotropy:ae,anisotropyMap:lt,clearcoat:U,clearcoatMap:Wt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:K,iridescenceMap:kt,iridescenceThicknessMap:St,sheen:pt,sheenColorMap:bt,sheenRoughnessMap:qt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:ne,transmission:vt,transmissionMap:H,thicknessMap:wt,gradientMap:At,opaque:w.transparent===!1&&w.blending===Br&&w.alphaToCoverage===!1,alphaMap:Rt,alphaTest:Mt,alphaHash:xt,combine:w.combine,mapUv:ue&&A(w.map.channel),aoMapUv:Re&&A(w.aoMap.channel),lightMapUv:F&&A(w.lightMap.channel),bumpMapUv:me&&A(w.bumpMap.channel),normalMapUv:ge&&A(w.normalMap.channel),displacementMapUv:Pe&&A(w.displacementMap.channel),emissiveMapUv:Ht&&A(w.emissiveMap.channel),metalnessMapUv:We&&A(w.metalnessMap.channel),roughnessMapUv:Yt&&A(w.roughnessMap.channel),anisotropyMapUv:lt&&A(w.anisotropyMap.channel),clearcoatMapUv:Wt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:qt&&A(w.sheenRoughnessMap.channel),specularMapUv:Gt&&A(w.specularMap.channel),specularColorMapUv:Nt&&A(w.specularColorMap.channel),specularIntensityMapUv:ne&&A(w.specularIntensityMap.channel),transmissionMapUv:H&&A(w.transmissionMap.channel),thicknessMapUv:wt&&A(w.thicknessMap.channel),alphaMapUv:Rt&&A(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ge||ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ut.attributes.uv&&(ue||Rt),fog:!!dt,useFog:w.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ct,skinning:ot.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:st,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:ue&&w.map.isVideoTexture===!0&&Le.getTransfer(w.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&Le.getTransfer(w.emissiveMap.colorSpace)===Ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ga,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:zt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&w.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function x(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(O(C,w),D(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function O(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function D(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function I(w){const C=T[w.type];let V;if(C){const tt=Fi[C];V=dM.clone(tt.uniforms)}else V=w.uniforms;return V}function X(w,C){let V;for(let tt=0,ot=v.length;tt<ot;tt++){const dt=v[tt];if(dt.cacheKey===C){V=dt,++V.usedTimes;break}}return V===void 0&&(V=new j1(r,C,w,c),v.push(V)),V}function N(w){if(--w.usedTimes===0){const C=v.indexOf(w);v[C]=v[v.length-1],v.pop(),w.destroy()}}function z(w){m.remove(w)}function nt(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:I,acquireProgram:X,releaseProgram:N,releaseShaderCache:z,programs:v,dispose:nt}}function $1(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function tT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Kg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Qg(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,S,M,T,A,y){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:T,renderOrder:_.renderOrder,z:A,group:y},r[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=T,x.renderOrder=_.renderOrder,x.z=A,x.group=y),t++,x}function d(_,S,M,T,A,y){const x=h(_,S,M,T,A,y);M.transmission>0?s.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(_,S,M,T,A,y){const x=h(_,S,M,T,A,y);M.transmission>0?s.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||tT),s.length>1&&s.sort(S||Kg),l.length>1&&l.sort(S||Kg)}function v(){for(let _=t,S=r.length;_<S;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function eT(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Qg,r.set(s,[h])):l>=c.length?(h=new Qg,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function nT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new ce};break;case"SpotLight":i={position:new $,direction:new $,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":i={color:new ce,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=i,i}}}function iT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let aT=0;function sT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function rT(r){const t=new nT,i=iT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,c=new $e,h=new $e;function d(p){let v=0,_=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,T=0,A=0,y=0,x=0,O=0,D=0,I=0,X=0,N=0,z=0;p.sort(sT);for(let w=0,C=p.length;w<C;w++){const V=p[w],tt=V.color,ot=V.intensity,dt=V.distance,ut=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=tt.r*ot,_+=tt.g*ot,S+=tt.b*ot;else if(V.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(V.sh.coefficients[P],ot);z++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,j=i.get(V);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,s.directionalShadow[M]=j,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=V.shadow.matrix,O++}s.directional[M]=P,M++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(tt).multiplyScalar(ot),P.distance=dt,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,s.spot[A]=P;const q=V.shadow;if(V.map&&(s.spotLightMap[X]=V.map,X++,q.updateMatrices(V),V.castShadow&&N++),s.spotLightMatrix[A]=q.matrix,V.castShadow){const j=i.get(V);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,s.spotShadow[A]=j,s.spotShadowMap[A]=ut,I++}A++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy(tt).multiplyScalar(ot),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=P,y++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const q=V.shadow,j=i.get(V);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,s.pointShadow[T]=j,s.pointShadowMap[T]=ut,s.pointShadowMatrix[T]=V.shadow.matrix,D++}s.point[T]=P,T++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar(ot),P.groundColor.copy(V.groundColor).multiplyScalar(ot),s.hemi[x]=P,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=S;const nt=s.hash;(nt.directionalLength!==M||nt.pointLength!==T||nt.spotLength!==A||nt.rectAreaLength!==y||nt.hemiLength!==x||nt.numDirectionalShadows!==O||nt.numPointShadows!==D||nt.numSpotShadows!==I||nt.numSpotMaps!==X||nt.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=I+X-N,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=z,nt.directionalLength=M,nt.pointLength=T,nt.spotLength=A,nt.rectAreaLength=y,nt.hemiLength=x,nt.numDirectionalShadows=O,nt.numPointShadows=D,nt.numSpotShadows=I,nt.numSpotMaps=X,nt.numLightProbes=z,s.version=aT++)}function m(p,v){let _=0,S=0,M=0,T=0,A=0;const y=v.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const D=p[x];if(D.isDirectionalLight){const I=s.directional[_];I.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),_++}else if(D.isSpotLight){const I=s.spot[M];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const I=s.rectArea[T];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(y),h.identity(),c.copy(D.matrixWorld),c.premultiply(y),h.extractRotation(c),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),I.halfWidth.applyMatrix4(h),I.halfHeight.applyMatrix4(h),T++}else if(D.isPointLight){const I=s.point[S];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(y),S++}else if(D.isHemisphereLight){const I=s.hemi[A];I.direction.setFromMatrixPosition(D.matrixWorld),I.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:s}}function Jg(r){const t=new rT(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function oT(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Jg(r),t.set(l,[d])):c>=h.length?(d=new Jg(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const lT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cT=`uniform sampler2D shadow_pass;
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
}`;function uT(r,t,i){let s=new np;const l=new ee,c=new ee,h=new an,d=new wM({depthPacking:zy}),m=new DM,p={},v=i.maxTextureSize,_={[ss]:Zn,[Zn]:ss,[ga]:ga},S=new Ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:lT,fragmentShader:cT}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ni;T.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Li(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s_;let x=this.type;this.render=function(N,z,nt){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),tt=r.state;tt.setBlending(Sa),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const ot=x!==xa&&this.type===xa,dt=x===xa&&this.type!==xa;for(let ut=0,P=N.length;ut<P;ut++){const q=N[ut],j=q.shadow;if(j===void 0){se("WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const gt=j.getFrameExtents();if(l.multiply(gt),c.copy(j.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/gt.x),l.x=c.x*gt.x,j.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/gt.y),l.y=c.y*gt.y,j.mapSize.y=c.y)),j.map===null||ot===!0||dt===!0){const L=this.type!==xa?{minFilter:li,magFilter:li}:{};j.map!==null&&j.map.dispose(),j.map=new Ps(l.x,l.y,L),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const _t=j.getViewportCount();for(let L=0;L<_t;L++){const st=j.getViewport(L);h.set(c.x*st.x,c.y*st.y,c.x*st.z,c.y*st.w),tt.viewport(h),j.updateMatrices(q,L),s=j.getFrustum(),I(z,nt,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===xa&&O(j,nt),j.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(w,C,V)};function O(N,z){const nt=t.update(A);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ps(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(z,null,nt,S,A,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(z,null,nt,M,A,null)}function D(N,z,nt,w){let C=null;const V=nt.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)C=V;else if(C=nt.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const tt=C.uuid,ot=z.uuid;let dt=p[tt];dt===void 0&&(dt={},p[tt]=dt);let ut=dt[ot];ut===void 0&&(ut=C.clone(),dt[ot]=ut,z.addEventListener("dispose",X)),C=ut}if(C.visible=z.visible,C.wireframe=z.wireframe,w===xa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:_[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,nt.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const tt=r.properties.get(C);tt.light=nt}return C}function I(N,z,nt,w,C){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===xa)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,N.matrixWorld);const ot=t.update(N),dt=N.material;if(Array.isArray(dt)){const ut=ot.groups;for(let P=0,q=ut.length;P<q;P++){const j=ut[P],gt=dt[j.materialIndex];if(gt&&gt.visible){const _t=D(N,gt,w,C);N.onBeforeShadow(r,N,z,nt,ot,_t,j),r.renderBufferDirect(nt,null,ot,_t,N,j),N.onAfterShadow(r,N,z,nt,ot,_t,j)}}}else if(dt.visible){const ut=D(N,dt,w,C);N.onBeforeShadow(r,N,z,nt,ot,ut,null),r.renderBufferDirect(nt,null,ot,ut,N,null),N.onAfterShadow(r,N,z,nt,ot,ut,null)}}const tt=N.children;for(let ot=0,dt=tt.length;ot<dt;ot++)I(tt[ot],z,nt,w,C)}function X(N){N.target.removeEventListener("dispose",X);for(const nt in p){const w=p[nt],C=N.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const fT={[ed]:nd,[id]:rd,[ad]:od,[Fr]:sd,[nd]:ed,[rd]:id,[od]:ad,[sd]:Fr};function hT(r,t){function i(){let H=!1;const wt=new an;let At=null;const Rt=new an(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!H&&(r.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){H=Mt},setClear:function(Mt,xt,zt,ie,Ie){Ie===!0&&(Mt*=ie,xt*=ie,zt*=ie),wt.set(Mt,xt,zt,ie),Rt.equals(wt)===!1&&(r.clearColor(Mt,xt,zt,ie),Rt.copy(wt))},reset:function(){H=!1,At=null,Rt.set(-1,0,0,0)}}}function s(){let H=!1,wt=!1,At=null,Rt=null,Mt=null;return{setReversed:function(xt){if(wt!==xt){const zt=t.get("EXT_clip_control");xt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),wt=xt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return wt},setTest:function(xt){xt?ct(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(xt){At!==xt&&!H&&(r.depthMask(xt),At=xt)},setFunc:function(xt){if(wt&&(xt=fT[xt]),Rt!==xt){switch(xt){case ed:r.depthFunc(r.NEVER);break;case nd:r.depthFunc(r.ALWAYS);break;case id:r.depthFunc(r.LESS);break;case Fr:r.depthFunc(r.LEQUAL);break;case ad:r.depthFunc(r.EQUAL);break;case sd:r.depthFunc(r.GEQUAL);break;case rd:r.depthFunc(r.GREATER);break;case od:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Rt=xt}},setLocked:function(xt){H=xt},setClear:function(xt){Mt!==xt&&(wt&&(xt=1-xt),r.clearDepth(xt),Mt=xt)},reset:function(){H=!1,At=null,Rt=null,Mt=null,wt=!1}}}function l(){let H=!1,wt=null,At=null,Rt=null,Mt=null,xt=null,zt=null,ie=null,Ie=null;return{setTest:function(Ce){H||(Ce?ct(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Ce){wt!==Ce&&!H&&(r.stencilMask(Ce),wt=Ce)},setFunc:function(Ce,Ln,Kn){(At!==Ce||Rt!==Ln||Mt!==Kn)&&(r.stencilFunc(Ce,Ln,Kn),At=Ce,Rt=Ln,Mt=Kn)},setOp:function(Ce,Ln,Kn){(xt!==Ce||zt!==Ln||ie!==Kn)&&(r.stencilOp(Ce,Ln,Kn),xt=Ce,zt=Ln,ie=Kn)},setLocked:function(Ce){H=Ce},setClear:function(Ce){Ie!==Ce&&(r.clearStencil(Ce),Ie=Ce)},reset:function(){H=!1,wt=null,At=null,Rt=null,Mt=null,xt=null,zt=null,ie=null,Ie=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,M=[],T=null,A=!1,y=null,x=null,O=null,D=null,I=null,X=null,N=null,z=new ce(0,0,0),nt=0,w=!1,C=null,V=null,tt=null,ot=null,dt=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,q=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),P=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),P=q>=2);let gt=null,_t={};const L=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),yt=new an().fromArray(L),Et=new an().fromArray(st);function Ot(H,wt,At,Rt){const Mt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(H,xt),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<At;zt++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,Rt,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(wt+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return xt}const it={};it[r.TEXTURE_2D]=Ot(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(r.DEPTH_TEST),h.setFunc(Fr),me(!1),ge(jx),ct(r.CULL_FACE),Re(Sa);function ct(H){v[H]!==!0&&(r.enable(H),v[H]=!0)}function Ct(H){v[H]!==!1&&(r.disable(H),v[H]=!1)}function Ft(H,wt){return _[H]!==wt?(r.bindFramebuffer(H,wt),_[H]=wt,H===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=wt),H===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function Xt(H,wt){let At=M,Rt=!1;if(H){At=S.get(wt),At===void 0&&(At=[],S.set(wt,At));const Mt=H.textures;if(At.length!==Mt.length||At[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,zt=Mt.length;xt<zt;xt++)At[xt]=r.COLOR_ATTACHMENT0+xt;At.length=Mt.length,Rt=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,Rt=!0);Rt&&r.drawBuffers(At)}function ue(H){return T!==H?(r.useProgram(H),T=H,!0):!1}const sn={[Ds]:r.FUNC_ADD,[ly]:r.FUNC_SUBTRACT,[cy]:r.FUNC_REVERSE_SUBTRACT};sn[uy]=r.MIN,sn[fy]=r.MAX;const pe={[hy]:r.ZERO,[dy]:r.ONE,[py]:r.SRC_COLOR,[$h]:r.SRC_ALPHA,[Sy]:r.SRC_ALPHA_SATURATE,[_y]:r.DST_COLOR,[xy]:r.DST_ALPHA,[my]:r.ONE_MINUS_SRC_COLOR,[td]:r.ONE_MINUS_SRC_ALPHA,[vy]:r.ONE_MINUS_DST_COLOR,[gy]:r.ONE_MINUS_DST_ALPHA,[yy]:r.CONSTANT_COLOR,[My]:r.ONE_MINUS_CONSTANT_COLOR,[by]:r.CONSTANT_ALPHA,[Ey]:r.ONE_MINUS_CONSTANT_ALPHA};function Re(H,wt,At,Rt,Mt,xt,zt,ie,Ie,Ce){if(H===Sa){A===!0&&(Ct(r.BLEND),A=!1);return}if(A===!1&&(ct(r.BLEND),A=!0),H!==oy){if(H!==y||Ce!==w){if((x!==Ds||I!==Ds)&&(r.blendEquation(r.FUNC_ADD),x=Ds,I=Ds),Ce)switch(H){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zx:r.blendFunc(r.ONE,r.ONE);break;case Kx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:tn("WebGLState: Invalid blending: ",H);break}else switch(H){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kx:tn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qx:tn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tn("WebGLState: Invalid blending: ",H);break}O=null,D=null,X=null,N=null,z.set(0,0,0),nt=0,y=H,w=Ce}return}Mt=Mt||wt,xt=xt||At,zt=zt||Rt,(wt!==x||Mt!==I)&&(r.blendEquationSeparate(sn[wt],sn[Mt]),x=wt,I=Mt),(At!==O||Rt!==D||xt!==X||zt!==N)&&(r.blendFuncSeparate(pe[At],pe[Rt],pe[xt],pe[zt]),O=At,D=Rt,X=xt,N=zt),(ie.equals(z)===!1||Ie!==nt)&&(r.blendColor(ie.r,ie.g,ie.b,Ie),z.copy(ie),nt=Ie),y=H,w=!1}function F(H,wt){H.side===ga?Ct(r.CULL_FACE):ct(r.CULL_FACE);let At=H.side===Zn;wt&&(At=!At),me(At),H.blending===Br&&H.transparent===!1?Re(Sa):Re(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),c.setMask(H.colorWrite);const Rt=H.stencilWrite;d.setTest(Rt),Rt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(H){C!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),C=H)}function ge(H){H!==sy?(ct(r.CULL_FACE),H!==V&&(H===jx?r.cullFace(r.BACK):H===ry?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),V=H}function Pe(H){H!==tt&&(P&&r.lineWidth(H),tt=H)}function Ht(H,wt,At){H?(ct(r.POLYGON_OFFSET_FILL),(ot!==wt||dt!==At)&&(r.polygonOffset(wt,At),ot=wt,dt=At)):Ct(r.POLYGON_OFFSET_FILL)}function We(H){H?ct(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function Yt(H){H===void 0&&(H=r.TEXTURE0+ut-1),gt!==H&&(r.activeTexture(H),gt=H)}function ae(H,wt,At){At===void 0&&(gt===null?At=r.TEXTURE0+ut-1:At=gt);let Rt=_t[At];Rt===void 0&&(Rt={type:void 0,texture:void 0},_t[At]=Rt),(Rt.type!==H||Rt.texture!==wt)&&(gt!==At&&(r.activeTexture(At),gt=At),r.bindTexture(H,wt||it[H]),Rt.type=H,Rt.texture=wt)}function U(){const H=_t[gt];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function pt(){try{r.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function vt(){try{r.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function lt(){try{r.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Wt(){try{r.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ut(){try{r.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Kt(){try{r.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function kt(){try{r.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function St(){try{r.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function bt(H){yt.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),yt.copy(H))}function qt(H){Et.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Et.copy(H))}function Gt(H,wt){let At=p.get(wt);At===void 0&&(At=new WeakMap,p.set(wt,At));let Rt=At.get(H);Rt===void 0&&(Rt=r.getUniformBlockIndex(wt,H.name),At.set(H,Rt))}function Nt(H,wt){const Rt=p.get(wt).get(H);m.get(wt)!==Rt&&(r.uniformBlockBinding(wt,Rt,H.__bindingPointIndex),m.set(wt,Rt))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},gt=null,_t={},_={},S=new WeakMap,M=[],T=null,A=!1,y=null,x=null,O=null,D=null,I=null,X=null,N=null,z=new ce(0,0,0),nt=0,w=!1,C=null,V=null,tt=null,ot=null,dt=null,yt.set(0,0,r.canvas.width,r.canvas.height),Et.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ct,disable:Ct,bindFramebuffer:Ft,drawBuffers:Xt,useProgram:ue,setBlending:Re,setMaterial:F,setFlipSided:me,setCullFace:ge,setLineWidth:Pe,setPolygonOffset:Ht,setScissorTest:We,activeTexture:Yt,bindTexture:ae,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:K,texImage2D:kt,texImage3D:St,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Ut,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Wt,scissor:bt,viewport:qt,reset:ne}}function dT(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ee,v=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return M?new OffscreenCanvas(U,b):Qc("canvas")}function A(U,b,K){let pt=1;const vt=ae(U);if((vt.width>K||vt.height>K)&&(pt=K/Math.max(vt.width,vt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const lt=Math.floor(pt*vt.width),Wt=Math.floor(pt*vt.height);_===void 0&&(_=T(lt,Wt));const Ut=b?T(lt,Wt):_;return Ut.width=lt,Ut.height=Wt,Ut.getContext("2d").drawImage(U,0,0,lt,Wt),se("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+Wt+")."),Ut}else return"data"in U&&se("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){r.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(U,b,K,pt,vt=!1){if(U!==null){if(r[U]!==void 0)return r[U];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let lt=b;if(b===r.RED&&(K===r.FLOAT&&(lt=r.R32F),K===r.HALF_FLOAT&&(lt=r.R16F),K===r.UNSIGNED_BYTE&&(lt=r.R8)),b===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(lt=r.R8UI),K===r.UNSIGNED_SHORT&&(lt=r.R16UI),K===r.UNSIGNED_INT&&(lt=r.R32UI),K===r.BYTE&&(lt=r.R8I),K===r.SHORT&&(lt=r.R16I),K===r.INT&&(lt=r.R32I)),b===r.RG&&(K===r.FLOAT&&(lt=r.RG32F),K===r.HALF_FLOAT&&(lt=r.RG16F),K===r.UNSIGNED_BYTE&&(lt=r.RG8)),b===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(lt=r.RG8UI),K===r.UNSIGNED_SHORT&&(lt=r.RG16UI),K===r.UNSIGNED_INT&&(lt=r.RG32UI),K===r.BYTE&&(lt=r.RG8I),K===r.SHORT&&(lt=r.RG16I),K===r.INT&&(lt=r.RG32I)),b===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(lt=r.RGB8UI),K===r.UNSIGNED_SHORT&&(lt=r.RGB16UI),K===r.UNSIGNED_INT&&(lt=r.RGB32UI),K===r.BYTE&&(lt=r.RGB8I),K===r.SHORT&&(lt=r.RGB16I),K===r.INT&&(lt=r.RGB32I)),b===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(lt=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(lt=r.RGBA16UI),K===r.UNSIGNED_INT&&(lt=r.RGBA32UI),K===r.BYTE&&(lt=r.RGBA8I),K===r.SHORT&&(lt=r.RGBA16I),K===r.INT&&(lt=r.RGBA32I)),b===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(lt=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(lt=r.R11F_G11F_B10F)),b===r.RGBA){const Wt=vt?Zc:Le.getTransfer(pt);K===r.FLOAT&&(lt=r.RGBA32F),K===r.HALF_FLOAT&&(lt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(lt=Wt===Ve?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(lt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(lt=r.RGB5_A1)}return(lt===r.R16F||lt===r.R32F||lt===r.RG16F||lt===r.RG32F||lt===r.RGBA16F||lt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function I(U,b){let K;return U?b===null||b===Ns||b===el?K=r.DEPTH24_STENCIL8:b===va?K=r.DEPTH32F_STENCIL8:b===tl&&(K=r.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ns||b===el?K=r.DEPTH_COMPONENT24:b===va?K=r.DEPTH_COMPONENT32F:b===tl&&(K=r.DEPTH_COMPONENT16),K}function X(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==li&&U.minFilter!==Si?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function N(U){const b=U.target;b.removeEventListener("dispose",N),nt(b),b.isVideoTexture&&v.delete(b)}function z(U){const b=U.target;b.removeEventListener("dispose",z),C(b)}function nt(U){const b=s.get(U);if(b.__webglInit===void 0)return;const K=U.source,pt=S.get(K);if(pt){const vt=pt[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&w(U),Object.keys(pt).length===0&&S.delete(K)}s.remove(U)}function w(U){const b=s.get(U);r.deleteTexture(b.__webglTexture);const K=U.source,pt=S.get(K);delete pt[b.__cacheKey],h.memory.textures--}function C(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let vt=0;vt<b.__webglFramebuffer[pt].length;vt++)r.deleteFramebuffer(b.__webglFramebuffer[pt][vt]);else r.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)r.deleteFramebuffer(b.__webglFramebuffer[pt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=U.textures;for(let pt=0,vt=K.length;pt<vt;pt++){const lt=s.get(K[pt]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(K[pt])}s.remove(U)}let V=0;function tt(){V=0}function ot(){const U=V;return U>=l.maxTextures&&se("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function dt(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ut(U,b){const K=s.get(U);if(U.isVideoTexture&&We(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const pt=U.image;if(pt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{it(K,U,b);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+b)}function P(U,b){const K=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){it(K,U,b);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+b)}function q(U,b){const K=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){it(K,U,b);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+b)}function j(U,b){const K=s.get(U);if(U.version>0&&K.__version!==U.version){ct(K,U,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+b)}const gt={[ud]:r.REPEAT,[_a]:r.CLAMP_TO_EDGE,[fd]:r.MIRRORED_REPEAT},_t={[li]:r.NEAREST,[Oy]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[Si]:r.LINEAR,[Sh]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},L={[Iy]:r.NEVER,[ky]:r.ALWAYS,[Fy]:r.LESS,[g_]:r.LEQUAL,[Hy]:r.EQUAL,[Xy]:r.GEQUAL,[Gy]:r.GREATER,[Vy]:r.NOTEQUAL};function st(U,b){if(b.type===va&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Si||b.magFilter===Sh||b.magFilter===gc||b.magFilter===Ls||b.minFilter===Si||b.minFilter===Sh||b.minFilter===gc||b.minFilter===Ls)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,gt[b.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,gt[b.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,gt[b.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,_t[b.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===li||b.minFilter!==gc&&b.minFilter!==Ls||b.type===va&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function yt(U,b){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",N));const pt=b.source;let vt=S.get(pt);vt===void 0&&(vt={},S.set(pt,vt));const lt=dt(b);if(lt!==U.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,K=!0),vt[lt].usedTimes++;const Wt=vt[U.__cacheKey];Wt!==void 0&&(vt[U.__cacheKey].usedTimes--,Wt.usedTimes===0&&w(b)),U.__cacheKey=lt,U.__webglTexture=vt[lt].texture}return K}function Et(U,b,K){return Math.floor(Math.floor(U/K)/b)}function Ot(U,b,K,pt){const lt=U.updateRanges;if(lt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,K,pt,b.data);else{lt.sort((St,bt)=>St.start-bt.start);let Wt=0;for(let St=1;St<lt.length;St++){const bt=lt[Wt],qt=lt[St],Gt=bt.start+bt.count,Nt=Et(qt.start,b.width,4),ne=Et(bt.start,b.width,4);qt.start<=Gt+1&&Nt===ne&&Et(qt.start+qt.count-1,b.width,4)===Nt?bt.count=Math.max(bt.count,qt.start+qt.count-bt.start):(++Wt,lt[Wt]=qt)}lt.length=Wt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),Kt=r.getParameter(r.UNPACK_SKIP_PIXELS),kt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let St=0,bt=lt.length;St<bt;St++){const qt=lt[St],Gt=Math.floor(qt.start/4),Nt=Math.ceil(qt.count/4),ne=Gt%b.width,H=Math.floor(Gt/b.width),wt=Nt,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),i.texSubImage2D(r.TEXTURE_2D,0,ne,H,wt,At,K,pt,b.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,kt)}}function it(U,b,K){let pt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=r.TEXTURE_3D);const vt=yt(U,b),lt=b.source;i.bindTexture(pt,U.__webglTexture,r.TEXTURE0+K);const Wt=s.get(lt);if(lt.version!==Wt.__version||vt===!0){i.activeTexture(r.TEXTURE0+K);const Ut=Le.getPrimaries(Le.workingColorSpace),Kt=b.colorSpace===es?null:Le.getPrimaries(b.colorSpace),kt=b.colorSpace===es||Ut===Kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let St=A(b.image,!1,l.maxTextureSize);St=Yt(b,St);const bt=c.convert(b.format,b.colorSpace),qt=c.convert(b.type);let Gt=D(b.internalFormat,bt,qt,b.colorSpace,b.isVideoTexture);st(pt,b);let Nt;const ne=b.mipmaps,H=b.isVideoTexture!==!0,wt=Wt.__version===void 0||vt===!0,At=lt.dataReady,Rt=X(b,St);if(b.isDepthTexture)Gt=I(b.format===il,b.type),wt&&(H?i.texStorage2D(r.TEXTURE_2D,1,Gt,St.width,St.height):i.texImage2D(r.TEXTURE_2D,0,Gt,St.width,St.height,0,bt,qt,null));else if(b.isDataTexture)if(ne.length>0){H&&wt&&i.texStorage2D(r.TEXTURE_2D,Rt,Gt,ne[0].width,ne[0].height);for(let Mt=0,xt=ne.length;Mt<xt;Mt++)Nt=ne[Mt],H?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,qt,Nt.data):i.texImage2D(r.TEXTURE_2D,Mt,Gt,Nt.width,Nt.height,0,bt,qt,Nt.data);b.generateMipmaps=!1}else H?(wt&&i.texStorage2D(r.TEXTURE_2D,Rt,Gt,St.width,St.height),At&&Ot(b,St,bt,qt)):i.texImage2D(r.TEXTURE_2D,0,Gt,St.width,St.height,0,bt,qt,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Gt,ne[0].width,ne[0].height,St.depth);for(let Mt=0,xt=ne.length;Mt<xt;Mt++)if(Nt=ne[Mt],b.format!==wi)if(bt!==null)if(H){if(At)if(b.layerUpdates.size>0){const zt=wg(Nt.width,Nt.height,b.format,b.type);for(const ie of b.layerUpdates){const Ie=Nt.data.subarray(ie*zt/Nt.data.BYTES_PER_ELEMENT,(ie+1)*zt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ie,Nt.width,Nt.height,1,bt,Ie)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Nt.width,Nt.height,St.depth,bt,Nt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Gt,Nt.width,Nt.height,St.depth,0,Nt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?At&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Nt.width,Nt.height,St.depth,bt,qt,Nt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Gt,Nt.width,Nt.height,St.depth,0,bt,qt,Nt.data)}else{H&&wt&&i.texStorage2D(r.TEXTURE_2D,Rt,Gt,ne[0].width,ne[0].height);for(let Mt=0,xt=ne.length;Mt<xt;Mt++)Nt=ne[Mt],b.format!==wi?bt!==null?H?At&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,Nt.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,Gt,Nt.width,Nt.height,0,Nt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,qt,Nt.data):i.texImage2D(r.TEXTURE_2D,Mt,Gt,Nt.width,Nt.height,0,bt,qt,Nt.data)}else if(b.isDataArrayTexture)if(H){if(wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Gt,St.width,St.height,St.depth),At)if(b.layerUpdates.size>0){const Mt=wg(St.width,St.height,b.format,b.type);for(const xt of b.layerUpdates){const zt=St.data.subarray(xt*Mt/St.data.BYTES_PER_ELEMENT,(xt+1)*Mt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,bt,qt,zt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,bt,qt,St.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Gt,St.width,St.height,St.depth,0,bt,qt,St.data);else if(b.isData3DTexture)H?(wt&&i.texStorage3D(r.TEXTURE_3D,Rt,Gt,St.width,St.height,St.depth),At&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,bt,qt,St.data)):i.texImage3D(r.TEXTURE_3D,0,Gt,St.width,St.height,St.depth,0,bt,qt,St.data);else if(b.isFramebufferTexture){if(wt)if(H)i.texStorage2D(r.TEXTURE_2D,Rt,Gt,St.width,St.height);else{let Mt=St.width,xt=St.height;for(let zt=0;zt<Rt;zt++)i.texImage2D(r.TEXTURE_2D,zt,Gt,Mt,xt,0,bt,qt,null),Mt>>=1,xt>>=1}}else if(ne.length>0){if(H&&wt){const Mt=ae(ne[0]);i.texStorage2D(r.TEXTURE_2D,Rt,Gt,Mt.width,Mt.height)}for(let Mt=0,xt=ne.length;Mt<xt;Mt++)Nt=ne[Mt],H?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,bt,qt,Nt):i.texImage2D(r.TEXTURE_2D,Mt,Gt,bt,qt,Nt);b.generateMipmaps=!1}else if(H){if(wt){const Mt=ae(St);i.texStorage2D(r.TEXTURE_2D,Rt,Gt,Mt.width,Mt.height)}At&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,qt,St)}else i.texImage2D(r.TEXTURE_2D,0,Gt,bt,qt,St);y(b)&&x(pt),Wt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ct(U,b,K){if(b.image.length!==6)return;const pt=yt(U,b),vt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+K);const lt=s.get(vt);if(vt.version!==lt.__version||pt===!0){i.activeTexture(r.TEXTURE0+K);const Wt=Le.getPrimaries(Le.workingColorSpace),Ut=b.colorSpace===es?null:Le.getPrimaries(b.colorSpace),Kt=b.colorSpace===es||Wt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const kt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let xt=0;xt<6;xt++)!kt&&!St?bt[xt]=A(b.image[xt],!0,l.maxCubemapSize):bt[xt]=St?b.image[xt].image:b.image[xt],bt[xt]=Yt(b,bt[xt]);const qt=bt[0],Gt=c.convert(b.format,b.colorSpace),Nt=c.convert(b.type),ne=D(b.internalFormat,Gt,Nt,b.colorSpace),H=b.isVideoTexture!==!0,wt=lt.__version===void 0||pt===!0,At=vt.dataReady;let Rt=X(b,qt);st(r.TEXTURE_CUBE_MAP,b);let Mt;if(kt){H&&wt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,ne,qt.width,qt.height);for(let xt=0;xt<6;xt++){Mt=bt[xt].mipmaps;for(let zt=0;zt<Mt.length;zt++){const ie=Mt[zt];b.format!==wi?Gt!==null?H?At&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,0,0,ie.width,ie.height,Gt,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,ne,ie.width,ie.height,0,ie.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,0,0,ie.width,ie.height,Gt,Nt,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,ne,ie.width,ie.height,0,Gt,Nt,ie.data)}}}else{if(Mt=b.mipmaps,H&&wt){Mt.length>0&&Rt++;const xt=ae(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){H?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,bt[xt].width,bt[xt].height,Gt,Nt,bt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,bt[xt].width,bt[xt].height,0,Gt,Nt,bt[xt].data);for(let zt=0;zt<Mt.length;zt++){const Ie=Mt[zt].image[xt].image;H?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,0,0,Ie.width,Ie.height,Gt,Nt,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,ne,Ie.width,Ie.height,0,Gt,Nt,Ie.data)}}else{H?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Gt,Nt,bt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Gt,Nt,bt[xt]);for(let zt=0;zt<Mt.length;zt++){const ie=Mt[zt];H?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,0,0,Gt,Nt,ie.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,ne,Gt,Nt,ie.image[xt])}}}y(b)&&x(r.TEXTURE_CUBE_MAP),lt.__version=vt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Ct(U,b,K,pt,vt,lt){const Wt=c.convert(K.format,K.colorSpace),Ut=c.convert(K.type),Kt=D(K.internalFormat,Wt,Ut,K.colorSpace),kt=s.get(b),St=s.get(K);if(St.__renderTarget=b,!kt.__hasExternalTextures){const bt=Math.max(1,b.width>>lt),qt=Math.max(1,b.height>>lt);vt===r.TEXTURE_3D||vt===r.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,Kt,bt,qt,b.depth,0,Wt,Ut,null):i.texImage2D(vt,lt,Kt,bt,qt,0,Wt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,vt,St.__webglTexture,0,Pe(b)):(vt===r.TEXTURE_2D||vt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,vt,St.__webglTexture,lt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(U,b,K){if(r.bindRenderbuffer(r.RENDERBUFFER,U),b.depthBuffer){const pt=b.depthTexture,vt=pt&&pt.isDepthTexture?pt.type:null,lt=I(b.stencilBuffer,vt),Wt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=Pe(b);Ht(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,lt,b.width,b.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,lt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,lt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Wt,r.RENDERBUFFER,U)}else{const pt=b.textures;for(let vt=0;vt<pt.length;vt++){const lt=pt[vt],Wt=c.convert(lt.format,lt.colorSpace),Ut=c.convert(lt.type),Kt=D(lt.internalFormat,Wt,Ut,lt.colorSpace),kt=Pe(b);K&&Ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,Kt,b.width,b.height):Ht(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,kt,Kt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Kt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ut(b.depthTexture,0);const vt=pt.__webglTexture,lt=Pe(b);if(b.depthTexture.format===nl)Ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0);else if(b.depthTexture.format===il)Ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ue(U){const b=s.get(U),K=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",vt)};pt.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=pt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const pt=U.texture.mipmaps;pt&&pt.length>0?Xt(b.__webglFramebuffer[0],U):Xt(b.__webglFramebuffer,U)}else if(K){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=r.createRenderbuffer(),Ft(b.__webglDepthbuffer[pt],U,!1);else{const vt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,lt)}}else{const pt=U.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ft(b.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,lt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function sn(U,b,K){const pt=s.get(U);b!==void 0&&Ct(pt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&ue(U)}function pe(U){const b=U.texture,K=s.get(U),pt=s.get(b);U.addEventListener("dispose",z);const vt=U.textures,lt=U.isWebGLCubeRenderTarget===!0,Wt=vt.length>1;if(Wt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=b.version,h.memory.textures++),lt){K.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Ut]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)K.__webglFramebuffer[Ut][Kt]=r.createFramebuffer()}else K.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)K.__webglFramebuffer[Ut]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Wt)for(let Ut=0,Kt=vt.length;Ut<Kt;Ut++){const kt=s.get(vt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&Ht(U)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Kt=vt[Ut];K.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Ut]);const kt=c.convert(Kt.format,Kt.colorSpace),St=c.convert(Kt.type),bt=D(Kt.internalFormat,kt,St,Kt.colorSpace,U.isXRRenderTarget===!0),qt=Pe(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,bt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,K.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Ft(K.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),st(r.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(K.__webglFramebuffer[Ut][Kt],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Kt);else Ct(K.__webglFramebuffer[Ut],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(b)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Ut=0,Kt=vt.length;Ut<Kt;Ut++){const kt=vt[Ut],St=s.get(kt);let bt=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(bt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,St.__webglTexture),st(bt,kt),Ct(K.__webglFramebuffer,U,kt,r.COLOR_ATTACHMENT0+Ut,bt,0),y(kt)&&x(bt)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,pt.__webglTexture),st(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(K.__webglFramebuffer[Kt],U,b,r.COLOR_ATTACHMENT0,Ut,Kt);else Ct(K.__webglFramebuffer,U,b,r.COLOR_ATTACHMENT0,Ut,0);y(b)&&x(Ut),i.unbindTexture()}U.depthBuffer&&ue(U)}function Re(U){const b=U.textures;for(let K=0,pt=b.length;K<pt;K++){const vt=b[K];if(y(vt)){const lt=O(U),Wt=s.get(vt).__webglTexture;i.bindTexture(lt,Wt),x(lt),i.unbindTexture()}}}const F=[],me=[];function ge(U){if(U.samples>0){if(Ht(U)===!1){const b=U.textures,K=U.width,pt=U.height;let vt=r.COLOR_BUFFER_BIT;const lt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Wt=s.get(U),Ut=b.length>1;if(Ut)for(let kt=0;kt<b.length;kt++)i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Kt=U.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let kt=0;kt<b.length;kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[kt]);const St=s.get(b[kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,K,pt,0,0,K,pt,vt,r.NEAREST),m===!0&&(F.length=0,me.length=0,F.push(r.COLOR_ATTACHMENT0+kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(F.push(lt),me.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<b.length;kt++){i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[kt]);const St=s.get(b[kt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,St,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Pe(U){return Math.min(l.maxSamples,U.samples)}function Ht(U){const b=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function We(U){const b=h.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function Yt(U,b){const K=U.colorSpace,pt=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Vr&&K!==es&&(Le.getTransfer(K)===Ve?(pt!==wi||vt!==Vi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tn("WebGLTextures: Unsupported texture color space:",K)),b}function ae(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=tt,this.setTexture2D=ut,this.setTexture2DArray=P,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=sn,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ht}function pT(r,t){function i(s,l=es){let c;const h=Le.getTransfer(l);if(s===Vi)return r.UNSIGNED_BYTE;if(s===Yd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===jd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===f_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===h_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===c_)return r.BYTE;if(s===u_)return r.SHORT;if(s===tl)return r.UNSIGNED_SHORT;if(s===qd)return r.INT;if(s===Ns)return r.UNSIGNED_INT;if(s===va)return r.FLOAT;if(s===kr)return r.HALF_FLOAT;if(s===d_)return r.ALPHA;if(s===p_)return r.RGB;if(s===wi)return r.RGBA;if(s===nl)return r.DEPTH_COMPONENT;if(s===il)return r.DEPTH_STENCIL;if(s===m_)return r.RED;if(s===Zd)return r.RED_INTEGER;if(s===Kd)return r.RG;if(s===Qd)return r.RG_INTEGER;if(s===Jd)return r.RGBA_INTEGER;if(s===Xc||s===kc||s===Wc||s===qc)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hd||s===dd||s===pd||s===md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xd||s===gd||s===_d)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===xd||s===gd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===_d)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vd||s===Sd||s===yd||s===Md||s===bd||s===Ed||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===vd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ed)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Td)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ad)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ud)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ld)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nd||s===Od||s===Pd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Nd)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Od)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zd||s===Bd||s===Id||s===Fd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===zd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Id)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const mT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xT=`
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

}`;class gT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new U_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ma({vertexShader:mT,fragmentShader:xT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new sl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _T extends zs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,_=null,S=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",y=new gT,x={},O=i.getContextAttributes();let D=null,I=null;const X=[],N=[],z=new ee;let nt=null;const w=new _i;w.viewport=new an;const C=new _i;C.viewport=new an;const V=[w,C],tt=new OM;let ot=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ct=X[it];return ct===void 0&&(ct=new Vh,X[it]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(it){let ct=X[it];return ct===void 0&&(ct=new Vh,X[it]=ct),ct.getGripSpace()},this.getHand=function(it){let ct=X[it];return ct===void 0&&(ct=new Vh,X[it]=ct),ct.getHandSpace()};function ut(it){const ct=N.indexOf(it.inputSource);if(ct===-1)return;const Ct=X[ct];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,p||h),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function P(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",q);for(let it=0;it<X.length;it++){const ct=N[it];ct!==null&&(N[it]=null,X[it].disconnect(ct))}ot=null,dt=null,y.reset();for(const it in x)delete x[it];t.setRenderTarget(D),M=null,S=null,_=null,l=null,I=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(nt),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",P),l.addEventListener("inputsourceschange",q),O.xrCompatible!==!0&&await i.makeXRCompatible(),nt=t.getPixelRatio(),t.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Ft=null,Xt=null;O.depth&&(Xt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=O.stencil?il:nl,Ft=O.stencil?el:Ns);const ue={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(ue),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),I=new Ps(S.textureWidth,S.textureHeight,{format:wi,type:Vi,depthTexture:new D_(S.textureWidth,S.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ct={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Ps(M.framebufferWidth,M.framebufferHeight,{format:wi,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(it){for(let ct=0;ct<it.removed.length;ct++){const Ct=it.removed[ct],Ft=N.indexOf(Ct);Ft>=0&&(N[Ft]=null,X[Ft].disconnect(Ct))}for(let ct=0;ct<it.added.length;ct++){const Ct=it.added[ct];let Ft=N.indexOf(Ct);if(Ft===-1){for(let ue=0;ue<X.length;ue++)if(ue>=N.length){N.push(Ct),Ft=ue;break}else if(N[ue]===null){N[ue]=Ct,Ft=ue;break}if(Ft===-1)break}const Xt=X[Ft];Xt&&Xt.connect(Ct)}}const j=new $,gt=new $;function _t(it,ct,Ct){j.setFromMatrixPosition(ct.matrixWorld),gt.setFromMatrixPosition(Ct.matrixWorld);const Ft=j.distanceTo(gt),Xt=ct.projectionMatrix.elements,ue=Ct.projectionMatrix.elements,sn=Xt[14]/(Xt[10]-1),pe=Xt[14]/(Xt[10]+1),Re=(Xt[9]+1)/Xt[5],F=(Xt[9]-1)/Xt[5],me=(Xt[8]-1)/Xt[0],ge=(ue[8]+1)/ue[0],Pe=sn*me,Ht=sn*ge,We=Ft/(-me+ge),Yt=We*-me;if(ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Yt),it.translateZ(We),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Xt[10]===-1)it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const ae=sn+We,U=pe+We,b=Pe-Yt,K=Ht+(Ft-Yt),pt=Re*pe/U*ae,vt=F*pe/U*ae;it.projectionMatrix.makePerspective(b,K,pt,vt,ae,U),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function L(it,ct){ct===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ct.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ct=it.near,Ct=it.far;y.texture!==null&&(y.depthNear>0&&(ct=y.depthNear),y.depthFar>0&&(Ct=y.depthFar)),tt.near=C.near=w.near=ct,tt.far=C.far=w.far=Ct,(ot!==tt.near||dt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),ot=tt.near,dt=tt.far),tt.layers.mask=it.layers.mask|6,w.layers.mask=tt.layers.mask&3,C.layers.mask=tt.layers.mask&5;const Ft=it.parent,Xt=tt.cameras;L(tt,Ft);for(let ue=0;ue<Xt.length;ue++)L(Xt[ue],Ft);Xt.length===2?_t(tt,w,C):tt.projectionMatrix.copy(w.projectionMatrix),st(it,tt,Ft)};function st(it,ct,Ct){Ct===null?it.matrix.copy(ct.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Gd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(it){m=it,S!==null&&(S.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(tt)},this.getCameraTexture=function(it){return x[it]};let yt=null;function Et(it,ct){if(v=ct.getViewerPose(p||h),T=ct,v!==null){const Ct=v.views;M!==null&&(t.setRenderTargetFramebuffer(I,M.framebuffer),t.setRenderTarget(I));let Ft=!1;Ct.length!==tt.cameras.length&&(tt.cameras.length=0,Ft=!0);for(let pe=0;pe<Ct.length;pe++){const Re=Ct[pe];let F=null;if(M!==null)F=M.getViewport(Re);else{const ge=_.getViewSubImage(S,Re);F=ge.viewport,pe===0&&(t.setRenderTargetTextures(I,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(I))}let me=V[pe];me===void 0&&(me=new _i,me.layers.enable(pe),me.viewport=new an,V[pe]=me),me.matrix.fromArray(Re.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Re.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(F.x,F.y,F.width,F.height),pe===0&&(tt.matrix.copy(me.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Ft===!0&&tt.cameras.push(me)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const pe=_.getDepthInformation(Ct[0]);pe&&pe.isValid&&pe.texture&&y.init(pe,l.renderState)}if(Xt&&Xt.includes("camera-access")&&A){t.state.unbindTexture(),_=s.getBinding();for(let pe=0;pe<Ct.length;pe++){const Re=Ct[pe].camera;if(Re){let F=x[Re];F||(F=new U_,x[Re]=F);const me=_.getCameraImage(Re);F.sourceTexture=me}}}}for(let Ct=0;Ct<X.length;Ct++){const Ft=N[Ct],Xt=X[Ct];Ft!==null&&Xt!==void 0&&Xt.update(Ft,ct,p||h)}yt&&yt(it,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),T=null}const Ot=new P_;Ot.setAnimationLoop(Et),this.setAnimationLoop=function(it){yt=it},this.dispose=function(){}}}const ws=new Xi,vT=new $e;function ST(r,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,E_(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,O,D,I){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x)):x.isMeshStandardMaterial?(c(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,I)):x.isMeshMatcapMaterial?(c(y,x),T(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),A(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,O,D):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Zn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Zn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=t.get(x),D=O.envMap,I=O.envMapRotation;D&&(y.envMap.value=D,ws.copy(I),ws.x*=-1,ws.y*=-1,ws.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),y.envMapRotation.value.setFromMatrix4(vT.makeRotationFromEuler(ws)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,O,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=D*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const O=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function yT(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,D){const I=D.program;s.uniformBlockBinding(O,I)}function p(O,D){let I=l[O.id];I===void 0&&(T(O),I=v(O),l[O.id]=I,O.addEventListener("dispose",y));const X=D.program;s.updateUBOMapping(O,X);const N=t.render.frame;c[O.id]!==N&&(S(O),c[O.id]=N)}function v(O){const D=_();O.__bindingPointIndex=D;const I=r.createBuffer(),X=O.__size,N=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,X,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,I),I}function _(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return tn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const D=l[O.id],I=O.uniforms,X=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let N=0,z=I.length;N<z;N++){const nt=Array.isArray(I[N])?I[N]:[I[N]];for(let w=0,C=nt.length;w<C;w++){const V=nt[w];if(M(V,N,w,X)===!0){const tt=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let dt=0;for(let ut=0;ut<ot.length;ut++){const P=ot[ut],q=A(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,tt+dt,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,dt),dt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,tt,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(O,D,I,X){const N=O.value,z=D+"_"+I;if(X[z]===void 0)return typeof N=="number"||typeof N=="boolean"?X[z]=N:X[z]=N.clone(),!0;{const nt=X[z];if(typeof N=="number"||typeof N=="boolean"){if(nt!==N)return X[z]=N,!0}else if(nt.equals(N)===!1)return nt.copy(N),!0}return!1}function T(O){const D=O.uniforms;let I=0;const X=16;for(let z=0,nt=D.length;z<nt;z++){const w=Array.isArray(D[z])?D[z]:[D[z]];for(let C=0,V=w.length;C<V;C++){const tt=w[C],ot=Array.isArray(tt.value)?tt.value:[tt.value];for(let dt=0,ut=ot.length;dt<ut;dt++){const P=ot[dt],q=A(P),j=I%X,gt=j%q.boundary,_t=j+gt;I+=gt,_t!==0&&X-_t<q.storage&&(I+=X-_t),tt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=I,I+=q.storage}}}const N=I%X;return N>0&&(I+=X-N),O.__size=I,O.__cache={},this}function A(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",O),D}function y(O){const D=O.target;D.removeEventListener("dispose",y);const I=h.indexOf(D.__bindingPointIndex);h.splice(I,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const O in l)r.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const MT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ma=null;function bT(){return ma===null&&(ma=new MM(MT,32,32,Kd,kr),ma.minFilter=Si,ma.magFilter=Si,ma.wrapS=_a,ma.wrapT=_a,ma.generateMipmaps=!1,ma.needsUpdate=!0),ma}class ET{constructor(t={}){const{canvas:i=Wy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const T=new Set([Jd,Qd,Zd]),A=new Set([Vi,Ns,tl,el,Yd,jd]),y=new Uint32Array(4),x=new Int32Array(4);let O=null,D=null;const I=[],X=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let z=!1;this._outputColorSpace=oi;let nt=0,w=0,C=null,V=-1,tt=null;const ot=new an,dt=new an;let ut=null;const P=new ce(0);let q=0,j=i.width,gt=i.height,_t=1,L=null,st=null;const yt=new an(0,0,j,gt),Et=new an(0,0,j,gt);let Ot=!1;const it=new np;let ct=!1,Ct=!1;const Ft=new $e,Xt=new $,ue=new an,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Re(){return C===null?_t:1}let F=s;function me(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wd}`),i.addEventListener("webglcontextlost",Mt,!1),i.addEventListener("webglcontextrestored",xt,!1),i.addEventListener("webglcontextcreationerror",zt,!1),F===null){const k="webgl2";if(F=me(k,R),F===null)throw me(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ge,Pe,Ht,We,Yt,ae,U,b,K,pt,vt,lt,Wt,Ut,Kt,kt,St,bt,qt,Gt,Nt,ne,H,wt;function At(){ge=new L3(F),ge.init(),ne=new pT(F,ge),Pe=new b3(F,ge,t,ne),Ht=new hT(F,ge),Pe.reversedDepthBuffer&&S&&Ht.buffers.depth.setReversed(!0),We=new P3(F),Yt=new $1,ae=new dT(F,ge,Ht,Yt,Pe,ne,We),U=new T3(N),b=new U3(N),K=new FM(F),H=new y3(F,K),pt=new N3(F,K,We,H),vt=new B3(F,pt,K,We),qt=new z3(F,Pe,ae),kt=new E3(Yt),lt=new J1(N,U,b,ge,Pe,H,kt),Wt=new ST(N,Yt),Ut=new eT,Kt=new oT(ge),bt=new S3(N,U,b,Ht,vt,M,m),St=new uT(N,vt,Pe),wt=new yT(F,We,Pe,Ht),Gt=new M3(F,ge,We),Nt=new O3(F,ge,We),We.programs=lt.programs,N.capabilities=Pe,N.extensions=ge,N.properties=Yt,N.renderLists=Ut,N.shadowMap=St,N.state=Ht,N.info=We}At();const Rt=new _T(N,F);this.xr=Rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(j,gt,!1))},this.getSize=function(R){return R.set(j,gt)},this.setSize=function(R,k,at=!0){if(Rt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,gt=k,i.width=Math.floor(R*_t),i.height=Math.floor(k*_t),at===!0&&(i.style.width=R+"px",i.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(j*_t,gt*_t).floor()},this.setDrawingBufferSize=function(R,k,at){j=R,gt=k,_t=at,i.width=Math.floor(R*at),i.height=Math.floor(k*at),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(ot)},this.getViewport=function(R){return R.copy(yt)},this.setViewport=function(R,k,at,J){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,k,at,J),Ht.viewport(ot.copy(yt).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(Et)},this.setScissor=function(R,k,at,J){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,k,at,J),Ht.scissor(dt.copy(Et).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(R){Ht.setScissorTest(Ot=R)},this.setOpaqueSort=function(R){L=R},this.setTransparentSort=function(R){st=R},this.getClearColor=function(R){return R.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,at=!0){let J=0;if(R){let Y=!1;if(C!==null){const Tt=C.texture.format;Y=T.has(Tt)}if(Y){const Tt=C.texture.type,Dt=A.has(Tt),Pt=bt.getClearColor(),Bt=bt.getClearAlpha(),Jt=Pt.r,te=Pt.g,jt=Pt.b;Dt?(y[0]=Jt,y[1]=te,y[2]=jt,y[3]=Bt,F.clearBufferuiv(F.COLOR,0,y)):(x[0]=Jt,x[1]=te,x[2]=jt,x[3]=Bt,F.clearBufferiv(F.COLOR,0,x))}else J|=F.COLOR_BUFFER_BIT}k&&(J|=F.DEPTH_BUFFER_BIT),at&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Mt,!1),i.removeEventListener("webglcontextrestored",xt,!1),i.removeEventListener("webglcontextcreationerror",zt,!1),bt.dispose(),Ut.dispose(),Kt.dispose(),Yt.dispose(),U.dispose(),b.dispose(),vt.dispose(),H.dispose(),wt.dispose(),lt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",jr),Rt.removeEventListener("sessionend",Zr),Mi.stop()};function Mt(R){R.preventDefault(),Jc("WebGLRenderer: Context Lost."),z=!0}function xt(){Jc("WebGLRenderer: Context Restored."),z=!1;const R=We.autoReset,k=St.enabled,at=St.autoUpdate,J=St.needsUpdate,Y=St.type;At(),We.autoReset=R,St.enabled=k,St.autoUpdate=at,St.needsUpdate=J,St.type=Y}function zt(R){tn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const k=R.target;k.removeEventListener("dispose",ie),Ie(k)}function Ie(R){Ce(R),Yt.remove(R)}function Ce(R){const k=Yt.get(R).programs;k!==void 0&&(k.forEach(function(at){lt.releaseProgram(at)}),R.isShaderMaterial&&lt.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,at,J,Y,Tt){k===null&&(k=sn);const Dt=Y.isMesh&&Y.matrixWorld.determinant()<0,Pt=ou(R,k,at,J,Y);Ht.setMaterial(J,Dt);let Bt=at.index,Jt=1;if(J.wireframe===!0){if(Bt=pt.getWireframeAttribute(at),Bt===void 0)return;Jt=2}const te=at.drawRange,jt=at.attributes.position;let fe=te.start*Jt,Ae=(te.start+te.count)*Jt;Tt!==null&&(fe=Math.max(fe,Tt.start*Jt),Ae=Math.min(Ae,(Tt.start+Tt.count)*Jt)),Bt!==null?(fe=Math.max(fe,0),Ae=Math.min(Ae,Bt.count)):jt!=null&&(fe=Math.max(fe,0),Ae=Math.min(Ae,jt.count));const we=Ae-fe;if(we<0||we===1/0)return;H.setup(Y,J,Pt,at,Bt);let be,Oe=Gt;if(Bt!==null&&(be=K.get(Bt),Oe=Nt,Oe.setIndex(be)),Y.isMesh)J.wireframe===!0?(Ht.setLineWidth(J.wireframeLinewidth*Re()),Oe.setMode(F.LINES)):Oe.setMode(F.TRIANGLES);else if(Y.isLine){let Qt=J.linewidth;Qt===void 0&&(Qt=1),Ht.setLineWidth(Qt*Re()),Y.isLineSegments?Oe.setMode(F.LINES):Y.isLineLoop?Oe.setMode(F.LINE_LOOP):Oe.setMode(F.LINE_STRIP)}else Y.isPoints?Oe.setMode(F.POINTS):Y.isSprite&&Oe.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)al("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qt=Y._multiDrawStarts,qe=Y._multiDrawCounts,Ee=Y._multiDrawCount,Mn=Bt?K.get(Bt).bytesPerElement:1,Ea=Yt.get(J).currentProgram.getUniforms();for(let je=0;je<Ee;je++)Ea.setValue(F,"_gl_DrawID",je),Oe.render(Qt[je]/Mn,qe[je])}else if(Y.isInstancedMesh)Oe.renderInstances(fe,we,Y.count);else if(at.isInstancedBufferGeometry){const Qt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,qe=Math.min(at.instanceCount,Qt);Oe.renderInstances(fe,we,qe)}else Oe.render(fe,we)};function Ln(R,k,at){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,mn(R,k,at),R.side=ss,R.needsUpdate=!0,mn(R,k,at),R.side=ga):mn(R,k,at)}this.compile=function(R,k,at=null){at===null&&(at=R),D=Kt.get(at),D.init(k),X.push(D),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(D.pushLight(Y),Y.castShadow&&D.pushShadow(Y))}),R!==at&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(D.pushLight(Y),Y.castShadow&&D.pushShadow(Y))}),D.setupLights();const J=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Pt=Tt[Dt];Ln(Pt,at,Y),J.add(Pt)}else Ln(Tt,at,Y),J.add(Tt)}),D=X.pop(),J},this.compileAsync=function(R,k,at=null){const J=this.compile(R,k,at);return new Promise(Y=>{function Tt(){if(J.forEach(function(Dt){Yt.get(Dt).currentProgram.isReady()&&J.delete(Dt)}),J.size===0){Y(R);return}setTimeout(Tt,10)}ge.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Kn=null;function rl(R){Kn&&Kn(R)}function jr(){Mi.stop()}function Zr(){Mi.start()}const Mi=new P_;Mi.setAnimationLoop(rl),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){Kn=R,Rt.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},Rt.addEventListener("sessionstart",jr),Rt.addEventListener("sessionend",Zr),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){tn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(k),k=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,k,C),D=Kt.get(R,X.length),D.init(k),X.push(D),Ft.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),it.setFromProjectionMatrix(Ft,Gi,k.reversedDepth),Ct=this.localClippingEnabled,ct=kt.init(this.clippingPlanes,Ct),O=Ut.get(R,I.length),O.init(),I.push(O),Rt.enabled===!0&&Rt.isPresenting===!0){const Tt=N.xr.getDepthSensingMesh();Tt!==null&&rs(Tt,k,-1/0,N.sortObjects)}rs(R,k,0,N.sortObjects),O.finish(),N.sortObjects===!0&&O.sort(L,st),pe=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,pe&&bt.addToRenderList(O,R),this.info.render.frame++,ct===!0&&kt.beginShadows();const at=D.state.shadowsArray;St.render(at,R,k),ct===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=O.opaque,Y=O.transmissive;if(D.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(Y.length>0)for(let Dt=0,Pt=Tt.length;Dt<Pt;Dt++){const Bt=Tt[Dt];Qr(J,Y,R,Bt)}pe&&bt.render(R);for(let Dt=0,Pt=Tt.length;Dt<Pt;Dt++){const Bt=Tt[Dt];Kr(O,R,Bt,Bt.viewport)}}else Y.length>0&&Qr(J,Y,R,k),pe&&bt.render(R),Kr(O,R,k);C!==null&&w===0&&(ae.updateMultisampleRenderTarget(C),ae.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(N,R,k),H.resetDefaultState(),V=-1,tt=null,X.pop(),X.length>0?(D=X[X.length-1],ct===!0&&kt.setGlobalState(N.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?O=I[I.length-1]:O=null};function rs(R,k,at,J){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||it.intersectsSprite(R)){J&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ft);const Dt=vt.update(R),Pt=R.material;Pt.visible&&O.push(R,Dt,Pt,at,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||it.intersectsObject(R))){const Dt=vt.update(R),Pt=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ue.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),ue.copy(Dt.boundingSphere.center)),ue.applyMatrix4(R.matrixWorld).applyMatrix4(Ft)),Array.isArray(Pt)){const Bt=Dt.groups;for(let Jt=0,te=Bt.length;Jt<te;Jt++){const jt=Bt[Jt],fe=Pt[jt.materialIndex];fe&&fe.visible&&O.push(R,Dt,fe,at,ue.z,jt)}}else Pt.visible&&O.push(R,Dt,Pt,at,ue.z,null)}}const Tt=R.children;for(let Dt=0,Pt=Tt.length;Dt<Pt;Dt++)rs(Tt[Dt],k,at,J)}function Kr(R,k,at,J){const{opaque:Y,transmissive:Tt,transparent:Dt}=R;D.setupLightsView(at),ct===!0&&kt.setGlobalState(N.clippingPlanes,at),J&&Ht.viewport(ot.copy(J)),Y.length>0&&Qn(Y,k,at),Tt.length>0&&Qn(Tt,k,at),Dt.length>0&&Qn(Dt,k,at),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Qr(R,k,at,J){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[J.id]===void 0&&(D.state.transmissionRenderTarget[J.id]=new Ps(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?kr:Vi,minFilter:Ls,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Tt=D.state.transmissionRenderTarget[J.id],Dt=J.viewport||ot;Tt.setSize(Dt.z*N.transmissionResolutionScale,Dt.w*N.transmissionResolutionScale);const Pt=N.getRenderTarget(),Bt=N.getActiveCubeFace(),Jt=N.getActiveMipmapLevel();N.setRenderTarget(Tt),N.getClearColor(P),q=N.getClearAlpha(),q<1&&N.setClearColor(16777215,.5),N.clear(),pe&&bt.render(at);const te=N.toneMapping;N.toneMapping=is;const jt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),D.setupLightsView(J),ct===!0&&kt.setGlobalState(N.clippingPlanes,J),Qn(R,at,J),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ae=0,we=k.length;Ae<we;Ae++){const be=k[Ae],{object:Oe,geometry:Qt,material:qe,group:Ee}=be;if(qe.side===ga&&Oe.layers.test(J.layers)){const Mn=qe.side;qe.side=Zn,qe.needsUpdate=!0,cn(Oe,at,J,Qt,qe,Ee),qe.side=Mn,qe.needsUpdate=!0,fe=!0}}fe===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}N.setRenderTarget(Pt,Bt,Jt),N.setClearColor(P,q),jt!==void 0&&(J.viewport=jt),N.toneMapping=te}function Qn(R,k,at){const J=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Tt=R.length;Y<Tt;Y++){const Dt=R[Y],{object:Pt,geometry:Bt,group:Jt}=Dt;let te=Dt.material;te.allowOverride===!0&&J!==null&&(te=J),Pt.layers.test(at.layers)&&cn(Pt,k,at,Bt,te,Jt)}}function cn(R,k,at,J,Y,Tt){R.onBeforeRender(N,k,at,J,Y,Tt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(N,k,at,J,R,Tt),Y.transparent===!0&&Y.side===ga&&Y.forceSinglePass===!1?(Y.side=Zn,Y.needsUpdate=!0,N.renderBufferDirect(at,k,J,Y,R,Tt),Y.side=ss,Y.needsUpdate=!0,N.renderBufferDirect(at,k,J,Y,R,Tt),Y.side=ga):N.renderBufferDirect(at,k,J,Y,R,Tt),R.onAfterRender(N,k,at,J,Y,Tt)}function mn(R,k,at){k.isScene!==!0&&(k=sn);const J=Yt.get(R),Y=D.state.lights,Tt=D.state.shadowsArray,Dt=Y.state.version,Pt=lt.getParameters(R,Y.state,Tt,k,at),Bt=lt.getProgramCacheKey(Pt);let Jt=J.programs;J.environment=R.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(R.isMeshStandardMaterial?b:U).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",ie),Jt=new Map,J.programs=Jt);let te=Jt.get(Bt);if(te!==void 0){if(J.currentProgram===te&&J.lightsStateVersion===Dt)return Is(R,Pt),te}else Pt.uniforms=lt.getUniforms(R),R.onBeforeCompile(Pt,N),te=lt.acquireProgram(Pt,Bt),Jt.set(Bt,te),J.uniforms=Pt.uniforms;const jt=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=kt.uniform),Is(R,Pt),J.needsLights=ol(R),J.lightsStateVersion=Dt,J.needsLights&&(jt.ambientLightColor.value=Y.state.ambient,jt.lightProbe.value=Y.state.probe,jt.directionalLights.value=Y.state.directional,jt.directionalLightShadows.value=Y.state.directionalShadow,jt.spotLights.value=Y.state.spot,jt.spotLightShadows.value=Y.state.spotShadow,jt.rectAreaLights.value=Y.state.rectArea,jt.ltc_1.value=Y.state.rectAreaLTC1,jt.ltc_2.value=Y.state.rectAreaLTC2,jt.pointLights.value=Y.state.point,jt.pointLightShadows.value=Y.state.pointShadow,jt.hemisphereLights.value=Y.state.hemi,jt.directionalShadowMap.value=Y.state.directionalShadowMap,jt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,jt.spotShadowMap.value=Y.state.spotShadowMap,jt.spotLightMatrix.value=Y.state.spotLightMatrix,jt.spotLightMap.value=Y.state.spotLightMap,jt.pointShadowMap.value=Y.state.pointShadowMap,jt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=te,J.uniformsList=null,te}function ki(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=jc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Is(R,k){const at=Yt.get(R);at.outputColorSpace=k.outputColorSpace,at.batching=k.batching,at.batchingColor=k.batchingColor,at.instancing=k.instancing,at.instancingColor=k.instancingColor,at.instancingMorph=k.instancingMorph,at.skinning=k.skinning,at.morphTargets=k.morphTargets,at.morphNormals=k.morphNormals,at.morphColors=k.morphColors,at.morphTargetsCount=k.morphTargetsCount,at.numClippingPlanes=k.numClippingPlanes,at.numIntersection=k.numClipIntersection,at.vertexAlphas=k.vertexAlphas,at.vertexTangents=k.vertexTangents,at.toneMapping=k.toneMapping}function ou(R,k,at,J,Y){k.isScene!==!0&&(k=sn),ae.resetTextureUnits();const Tt=k.fog,Dt=J.isMeshStandardMaterial?k.environment:null,Pt=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vr,Bt=(J.isMeshStandardMaterial?b:U).get(J.envMap||Dt),Jt=J.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,te=!!at.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),jt=!!at.morphAttributes.position,fe=!!at.morphAttributes.normal,Ae=!!at.morphAttributes.color;let we=is;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(we=N.toneMapping);const be=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Oe=be!==void 0?be.length:0,Qt=Yt.get(J),qe=D.state.lights;if(ct===!0&&(Ct===!0||R!==tt)){const En=R===tt&&J.id===V;kt.setState(J,R,En)}let Ee=!1;J.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==qe.state.version||Qt.outputColorSpace!==Pt||Y.isBatchedMesh&&Qt.batching===!1||!Y.isBatchedMesh&&Qt.batching===!0||Y.isBatchedMesh&&Qt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qt.instancing===!1||!Y.isInstancedMesh&&Qt.instancing===!0||Y.isSkinnedMesh&&Qt.skinning===!1||!Y.isSkinnedMesh&&Qt.skinning===!0||Y.isInstancedMesh&&Qt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qt.instancingMorph===!1&&Y.morphTexture!==null||Qt.envMap!==Bt||J.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==kt.numPlanes||Qt.numIntersection!==kt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==te||Qt.morphTargets!==jt||Qt.morphNormals!==fe||Qt.morphColors!==Ae||Qt.toneMapping!==we||Qt.morphTargetsCount!==Oe)&&(Ee=!0):(Ee=!0,Qt.__version=J.version);let Mn=Qt.currentProgram;Ee===!0&&(Mn=mn(J,k,Y));let Ea=!1,je=!1,Wi=!1;const Ze=Mn.getUniforms(),bn=Qt.uniforms;if(Ht.useProgram(Mn.program)&&(Ea=!0,je=!0,Wi=!0),J.id!==V&&(V=J.id,je=!0),Ea||tt!==R){Ht.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ze.setValue(F,"projectionMatrix",R.projectionMatrix),Ze.setValue(F,"viewMatrix",R.matrixWorldInverse);const Rn=Ze.map.cameraPosition;Rn!==void 0&&Rn.setValue(F,Xt.setFromMatrixPosition(R.matrixWorld)),Pe.logarithmicDepthBuffer&&Ze.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ze.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),tt!==R&&(tt=R,je=!0,Wi=!0)}if(Y.isSkinnedMesh){Ze.setOptional(F,Y,"bindMatrix"),Ze.setOptional(F,Y,"bindMatrixInverse");const En=Y.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ze.setValue(F,"boneTexture",En.boneTexture,ae))}Y.isBatchedMesh&&(Ze.setOptional(F,Y,"batchingTexture"),Ze.setValue(F,"batchingTexture",Y._matricesTexture,ae),Ze.setOptional(F,Y,"batchingIdTexture"),Ze.setValue(F,"batchingIdTexture",Y._indirectTexture,ae),Ze.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ze.setValue(F,"batchingColorTexture",Y._colorsTexture,ae));const xn=at.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&qt.update(Y,at,Mn),(je||Qt.receiveShadow!==Y.receiveShadow)&&(Qt.receiveShadow=Y.receiveShadow,Ze.setValue(F,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(bn.envMap.value=Bt,bn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(bn.envMapIntensity.value=k.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=bT()),je&&(Ze.setValue(F,"toneMappingExposure",N.toneMappingExposure),Qt.needsLights&&lu(bn,Wi),Tt&&J.fog===!0&&Wt.refreshFogUniforms(bn,Tt),Wt.refreshMaterialUniforms(bn,J,_t,gt,D.state.transmissionRenderTarget[R.id]),jc.upload(F,ki(Qt),bn,ae)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(jc.upload(F,ki(Qt),bn,ae),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ze.setValue(F,"center",Y.center),Ze.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ze.setValue(F,"normalMatrix",Y.normalMatrix),Ze.setValue(F,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const En=J.uniformsGroups;for(let Rn=0,Oi=En.length;Rn<Oi;Rn++){const qi=En[Rn];wt.update(qi,Mn),wt.bind(qi,Mn)}}return Mn}function lu(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function ol(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,k,at){const J=Yt.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Yt.get(R.texture).__webglTexture=k,Yt.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:at,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const at=Yt.get(R);at.__webglFramebuffer=k,at.__useDefaultFramebuffer=k===void 0};const os=F.createFramebuffer();this.setRenderTarget=function(R,k=0,at=0){C=R,nt=k,w=at;let J=!0,Y=null,Tt=!1,Dt=!1;if(R){const Bt=Yt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(F.FRAMEBUFFER,null),J=!1;else if(Bt.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(Bt.__hasExternalTextures)ae.rebindTextures(R,Yt.get(R.texture).__webglTexture,Yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Bt.__boundDepthTexture!==jt){if(jt!==null&&Yt.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Dt=!0);const te=Yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(te[k])?Y=te[k][at]:Y=te[k],Tt=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?Y=Yt.get(R).__webglMultisampledFramebuffer:Array.isArray(te)?Y=te[at]:Y=te,ot.copy(R.viewport),dt.copy(R.scissor),ut=R.scissorTest}else ot.copy(yt).multiplyScalar(_t).floor(),dt.copy(Et).multiplyScalar(_t).floor(),ut=Ot;if(at!==0&&(Y=os),Ht.bindFramebuffer(F.FRAMEBUFFER,Y)&&J&&Ht.drawBuffers(R,Y),Ht.viewport(ot),Ht.scissor(dt),Ht.setScissorTest(ut),Tt){const Bt=Yt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,at)}else if(Dt){const Bt=k;for(let Jt=0;Jt<R.textures.length;Jt++){const te=Yt.get(R.textures[Jt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Jt,te.__webglTexture,at,Bt)}}else if(R!==null&&at!==0){const Bt=Yt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,at)}V=-1},this.readRenderTargetPixels=function(R,k,at,J,Y,Tt,Dt,Pt=0){if(!(R&&R.isWebGLRenderTarget)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){Ht.bindFramebuffer(F.FRAMEBUFFER,Bt);try{const Jt=R.textures[Pt],te=Jt.format,jt=Jt.type;if(!Pe.textureFormatReadable(te)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(jt)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-J&&at>=0&&at<=R.height-Y&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(k,at,J,Y,ne.convert(te),ne.convert(jt),Tt))}finally{const Jt=C!==null?Yt.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(F.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(R,k,at,J,Y,Tt,Dt,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(k>=0&&k<=R.width-J&&at>=0&&at<=R.height-Y){Ht.bindFramebuffer(F.FRAMEBUFFER,Bt);const Jt=R.textures[Pt],te=Jt.format,jt=Jt.type;if(!Pe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(k,at,J,Y,ne.convert(te),ne.convert(jt),0);const Ae=C!==null?Yt.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(F.FRAMEBUFFER,Ae);const we=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await qy(F,we,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(fe),F.deleteSync(we),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,at=0){const J=Math.pow(2,-at),Y=Math.floor(R.image.width*J),Tt=Math.floor(R.image.height*J),Dt=k!==null?k.x:0,Pt=k!==null?k.y:0;ae.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Dt,Pt,Y,Tt),Ht.unbindTexture()};const Jr=F.createFramebuffer(),ba=F.createFramebuffer();this.copyTextureToTexture=function(R,k,at=null,J=null,Y=0,Tt=null){Tt===null&&(Y!==0?(al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Y,Y=0):Tt=0);let Dt,Pt,Bt,Jt,te,jt,fe,Ae,we;const be=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(at!==null)Dt=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,te=at.min.y,jt=at.isBox3?at.min.z:0;else{const xn=Math.pow(2,-Y);Dt=Math.floor(be.width*xn),Pt=Math.floor(be.height*xn),R.isDataArrayTexture?Bt=be.depth:R.isData3DTexture?Bt=Math.floor(be.depth*xn):Bt=1,Jt=0,te=0,jt=0}J!==null?(fe=J.x,Ae=J.y,we=J.z):(fe=0,Ae=0,we=0);const Oe=ne.convert(k.format),Qt=ne.convert(k.type);let qe;k.isData3DTexture?(ae.setTexture3D(k,0),qe=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ae.setTexture2DArray(k,0),qe=F.TEXTURE_2D_ARRAY):(ae.setTexture2D(k,0),qe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Ee=F.getParameter(F.UNPACK_ROW_LENGTH),Mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ea=F.getParameter(F.UNPACK_SKIP_PIXELS),je=F.getParameter(F.UNPACK_SKIP_ROWS),Wi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,te),F.pixelStorei(F.UNPACK_SKIP_IMAGES,jt);const Ze=R.isDataArrayTexture||R.isData3DTexture,bn=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const xn=Yt.get(R),En=Yt.get(k),Rn=Yt.get(xn.__renderTarget),Oi=Yt.get(En.__renderTarget);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let qi=0;qi<Bt;qi++)Ze&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(R).__webglTexture,Y,jt+qi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(k).__webglTexture,Tt,we+qi)),F.blitFramebuffer(Jt,te,Dt,Pt,fe,Ae,Dt,Pt,F.DEPTH_BUFFER_BIT,F.NEAREST);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||Yt.has(R)){const xn=Yt.get(R),En=Yt.get(k);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,Jr),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,ba);for(let Rn=0;Rn<Bt;Rn++)Ze?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xn.__webglTexture,Y,jt+Rn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xn.__webglTexture,Y),bn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,En.__webglTexture,Tt,we+Rn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,En.__webglTexture,Tt),Y!==0?F.blitFramebuffer(Jt,te,Dt,Pt,fe,Ae,Dt,Pt,F.COLOR_BUFFER_BIT,F.NEAREST):bn?F.copyTexSubImage3D(qe,Tt,fe,Ae,we+Rn,Jt,te,Dt,Pt):F.copyTexSubImage2D(qe,Tt,fe,Ae,Jt,te,Dt,Pt);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(qe,Tt,fe,Ae,we,Dt,Pt,Bt,Oe,Qt,be.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(qe,Tt,fe,Ae,we,Dt,Pt,Bt,Oe,be.data):F.texSubImage3D(qe,Tt,fe,Ae,we,Dt,Pt,Bt,Oe,Qt,be):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,fe,Ae,Dt,Pt,Oe,Qt,be.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,fe,Ae,be.width,be.height,Oe,be.data):F.texSubImage2D(F.TEXTURE_2D,Tt,fe,Ae,Dt,Pt,Oe,Qt,be);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ea),F.pixelStorei(F.UNPACK_SKIP_ROWS,je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wi),Tt===0&&k.generateMipmaps&&F.generateMipmap(qe),Ht.unbindTexture()},this.initRenderTarget=function(R){Yt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Ht.unbindTexture()},this.resetState=function(){nt=0,w=0,C=null,Ht.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const $g={type:"change"},ip={type:"start"},H_={type:"end"},Vc=new au,t_=new ts,TT=Math.cos(70*jy.DEG2RAD),_n=new $,Yn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jh=1e-6;class AT extends BM{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Os,this._lastTargetPosition=new $,this._quat=new Os().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cg,this._sphericalDelta=new Cg,this._scale=1,this._panOffset=new $,this._rotateStart=new ee,this._rotateEnd=new ee,this._rotateDelta=new ee,this._panStart=new ee,this._panEnd=new ee,this._panDelta=new ee,this._dollyStart=new ee,this._dollyEnd=new ee,this._dollyDelta=new ee,this._dollyDirection=new $,this._mouse=new ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CT.bind(this),this._onPointerDown=RT.bind(this),this._onPointerUp=wT.bind(this),this._onContextMenu=zT.bind(this),this._onMouseWheel=LT.bind(this),this._onKeyDown=NT.bind(this),this._onTouchStart=OT.bind(this),this._onTouchMove=PT.bind(this),this._onMouseDown=DT.bind(this),this._onMouseMove=UT.bind(this),this._interceptControlDown=BT.bind(this),this._interceptControlUp=IT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($g),this.update(),this.state=ke.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Yn:s>Math.PI&&(s-=Yn),l<-Math.PI?l+=Yn:l>Math.PI&&(l-=Yn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Vc.origin.copy(this.object.position),Vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vc.direction))<TT?this.object.lookAt(this.target):(t_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vc.intersectPlane(t_,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jh||this._lastTargetPosition.distanceToSquared(this.target)>Jh?(this.dispatchEvent($g),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Yn/60*this.autoRotateSpeed*t:Yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ee,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function RT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function CT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function wT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(H_),this.state=ke.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function DT(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ke.DOLLY;break;case zr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}break;case zr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(ip)}function UT(r){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function LT(r){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(r.preventDefault(),this.dispatchEvent(ip),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(H_))}function NT(r){this.enabled!==!1&&this._handleKeyDown(r)}function OT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ke.TOUCH_ROTATE;break;case Or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ke.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(ip)}function PT(r){switch(this._trackPointer(r),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ke.NONE}}function zT(r){this.enabled!==!1&&r.preventDefault()}function BT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const FT=new ce("#60a5fa"),HT=new ce("#facc15"),GT=new ce("#f97316");function VT(r,t,i,s=new Set){r.forEach(l=>{if(l.userData.locationId===i){l.material.color.copy(GT),l.material.emissive.set("#7c2d12"),l.material.emissiveIntensity=.35;return}if(l.userData.locationId===t){l.material.color.copy(FT),l.material.emissive.set("#1d4ed8"),l.material.emissiveIntensity=.25;return}if(s.has(l.userData.locationId)){l.material.color.copy(HT),l.material.emissive.set("#854d0e"),l.material.emissiveIntensity=.2;return}l.material.color.copy(l.userData.baseColor),l.material.emissive.set("#000000"),l.material.emissiveIntensity=0})}const XT={Boundary:"#d8dde2","Layout Zone":"#bfdbfe","Main Aisle":"#d9ebfb","Work Area":"#fed7aa",Pillar:"#334155",Gate:"#f59e0b",Wall:"#94a3b8","Non-placeable Area":"#fda4af",Shelf:"#0f766e",Nestainer:"#2563eb","Operation Area":"#fecaca",Shop:"#cfd4d9",Path:"#4b5258",Dock:"#2563eb",Rack:"#7c8a96",Office:"#ef4444"};function kT(r){const t=Math.max(r.xMax-r.xMin,.1),i=Math.max(r.yMax-r.yMin,.1),s=Math.max(r.zMax-r.zMin,.1),l=new qr(t,s,i),c=new ce(XT[r.type]),h=new L_({color:c,roughness:.55,metalness:.05,transparent:r.type==="Boundary",opacity:r.type==="Boundary"?.22:1}),d=new Li(l,h);return d.position.set(r.xMin+t/2,r.zMin+s/2,r.yMin+i/2),d.castShadow=r.type!=="Boundary",d.receiveShadow=!0,d.userData.locationId=r.id,d.userData.baseColor=c,d}function WT(r){const t=new Jo;return r.forEach(i=>{const s=kT(i);t.add(s),i.type!=="Boundary"&&i.type!=="Main Aisle"&&t.add(qT(i))}),t}function qT(r){const t=document.createElement("canvas"),i=t.getContext("2d"),s=r.name||r.id,l=28,c=18,h=10;if(t.width=512,t.height=128,i){i.font=`700 ${l}px Inter, system-ui, sans-serif`;const M=Math.min(i.measureText(s).width,t.width-c*2),T=Math.ceil(M+c*2);i.fillStyle="rgba(255, 255, 255, 0.88)",i.strokeStyle="rgba(15, 23, 42, 0.22)",i.lineWidth=2,YT(i,0,0,T,l+h*2,8),i.fill(),i.stroke(),i.fillStyle="#17202a",i.textBaseline="middle",i.fillText(s,c,l/2+h,t.width-c*2)}const d=Math.max(r.xMax-r.xMin,.1),m=Math.max(r.yMax-r.yMin,.1),p=Math.max(r.zMax-r.zMin,.1),v=new CM(t),_=new R_({map:v,transparent:!0,depthTest:!1,depthWrite:!1}),S=new yM(_);return S.position.set(r.xMin+d/2,r.zMin+p+.28,r.yMin+m/2),S.scale.set(Math.min(Math.max(d,m,1.8),6),Math.min(Math.max(d,m,1.8),6)/4,1),S.renderOrder=10,S}function YT(r,t,i,s,l,c){r.beginPath(),r.moveTo(t+c,i),r.lineTo(t+s-c,i),r.quadraticCurveTo(t+s,i,t+s,i+c),r.lineTo(t+s,i+l-c),r.quadraticCurveTo(t+s,i+l,t+s-c,i+l),r.lineTo(t+c,i+l),r.quadraticCurveTo(t,i+l,t,i+l-c),r.lineTo(t,i+c),r.quadraticCurveTo(t,i,t+c,i),r.closePath()}function e_(r,t,i,s){const l=t.getBoundingClientRect(),c=new ee((r.clientX-l.left)/l.width*2-1,-((r.clientY-l.top)/l.height)*2+1),h=new PM;h.setFromCamera(c,i);const[d]=h.intersectObjects(s,!0),m=d?.object.userData.locationId;return typeof m=="string"?m:null}function jT({locations:r,hoveredLocationId:t,selectedLocationId:i,searchedLocationIds:s,onHoverLocation:l,onSelectLocation:c}){const h=ln.useRef(null),d=ln.useRef(null),m=ln.useRef(null),p=ln.useRef(null),v=ln.useRef(null),_=ln.useRef([]),[S,M]=ln.useState(null);return ln.useEffect(()=>{const T=h.current;if(!T)return;const A=T,y=new vM;y.background=new ce("#eef2f5"),y.fog=new ep("#eef2f5",90,180),d.current=y;let x;try{x=new ET({antialias:!0}),M(null)}catch{M("3D rendering is not available in this browser.");return}x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.shadowMap.enabled=!0,x.shadowMap.type=r_,x.outputColorSpace=oi,A.appendChild(x.domElement);const O=new _i(45,1,.1,1e3);O.position.set(54,58,70),m.current=O;const D=new AT(O,x.domElement);D.enableDamping=!0,D.dampingFactor=.08,D.target.set(20,0,20),D.maxPolarAngle=Math.PI*.48,D.minDistance=18,D.maxDistance=145,p.current=D;const I=new UM("#ffffff","#a8b0b7",2.1);y.add(I);const X=new Tg("#ffffff",2.6);X.position.set(20,60,30),X.castShadow=!0,X.shadow.mapSize.set(2048,2048),X.shadow.camera.near=10,X.shadow.camera.far=140,y.add(X);const N=new Tg("#dbeafe",1.1);N.position.set(-40,34,-16),y.add(N);const z=new Li(new sl(80,80),new L_({color:"#f8fafc",roughness:.8}));z.rotation.x=-Math.PI/2,z.position.set(20,-.04,20),z.receiveShadow=!0,y.add(z);const nt=new zM(80,40,"#94a3b8","#cbd5e1");nt.position.set(20,.02,20),y.add(nt);function w(){const{width:P,height:q}=A.getBoundingClientRect();x.setSize(P,q,!1),O.aspect=P/Math.max(q,1),O.updateProjectionMatrix()}const C=new ResizeObserver(w);C.observe(A),w();let V=0;function tt(){D.update(),x.render(y,O),V=requestAnimationFrame(tt)}tt();const ot=P=>{const q=e_(P,x.domElement,O,_.current);l(q)},dt=()=>l(null),ut=P=>{const q=e_(P,x.domElement,O,_.current);q&&c(q)};return x.domElement.addEventListener("pointermove",ot),x.domElement.addEventListener("pointerleave",dt),x.domElement.addEventListener("pointerup",ut),()=>{cancelAnimationFrame(V),C.disconnect(),x.domElement.removeEventListener("pointermove",ot),x.domElement.removeEventListener("pointerleave",dt),x.domElement.removeEventListener("pointerup",ut),D.dispose(),x.dispose(),x.domElement.parentElement===A&&A.removeChild(x.domElement),p.current=null,d.current=null,m.current=null,v.current=null,_.current=[]}},[l,c]),ln.useEffect(()=>{const T=d.current;if(!T)return;v.current&&(T.remove(v.current),v.current.traverse(D=>{KT(D)}));const A=WT(r),y=[];A.traverse(D=>{D instanceof Li&&y.push(D)}),v.current=A,_.current=y,T.add(A);const x=m.current,O=p.current;x&&O&&r.length>0&&ZT(x,O,A)},[r]),ln.useEffect(()=>{VT(_.current,t,i,new Set(s))},[t,i,s,r]),ln.useEffect(()=>{const T=m.current,A=p.current;if(!T||!A||!i)return;const y=_.current.find(O=>O.userData.locationId===i);if(!y)return;const x=new $;y.getWorldPosition(x),A.target.lerp(x,.55),A.update()},[i]),oe.jsx("div",{className:"three-map-canvas",ref:h,children:S&&oe.jsx("div",{className:"map-render-error",children:S})})}function ZT(r,t,i){const s=new Wr().setFromObject(i),l=s.getCenter(new $),c=s.getSize(new $),d=Math.max(c.x,c.y,c.z,1)*1.65;t.target.copy(l),r.position.set(l.x+d*.72,l.y+d*.88,l.z+d),r.near=Math.max(d/120,.1),r.far=d*8,r.updateProjectionMatrix(),t.update()}function KT(r){const t=r,i=t.geometry,s=t.material;i?.dispose(),Array.isArray(s)?s.forEach(n_):n_(s)}function n_(r){if(!r)return;r.map?.dispose(),r.dispose()}function QT({locations:r,hoveredLocationId:t,selectedLocationId:i,searchedLocationIds:s,onHoverLocation:l,onSelectLocation:c}){return oe.jsxs("section",{className:"map-container",children:[oe.jsx(jT,{locations:r,hoveredLocationId:t,selectedLocationId:i,searchedLocationIds:s,onHoverLocation:l,onSelectLocation:c}),oe.jsx("p",{className:"map-hint",children:"Pinch to zoom and drag to move"})]})}async function JT(){const r=await fetch("/api/locations");if(!r.ok)throw new Error(`Failed to load locations: ${r.status}`);return r.json()}const $T="/data/20260501_VisualizationInput_v7.xlsx",jn=1/1e3,Pr=.2,i_={boundary:"Boundary",gate:"Gate","layout area":"Layout Zone","main aisle":"Main Aisle","main asile":"Main Aisle","non-placeable area":"Non-placeable Area","non placeable area":"Non-placeable Area","nonplaceable area":"Non-placeable Area",pillar:"Pillar",wall:"Wall","work area":"Work Area"};async function tA(r=$T){if(!window.XLSX)throw new Error("Excel parser is not loaded");const t=await fetch(r,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to load workbook: ${t.status}`);const i=window.XLSX.read(await t.arrayBuffer(),{type:"array"}),s=Object.fromEntries(i.SheetNames.map(l=>[l,eA(i,l)]));return iA({facilityRows:s.Facility??[],materialHandlingRows:s.MaterialHandling??[],planRows:s.Plan??[],patternRows:s.PatternResult??[]})}function eA(r,t){const i=r.Sheets[t];return!i||!window.XLSX?[]:window.XLSX.utils.sheet_to_json(i,{defval:"",raw:!1,blankrows:!1}).filter(s=>Object.values(s).some(l=>String(l??"").trim()!=="")).map(nA)}function nA(r){const t={};return Object.entries(r).forEach(([i,s])=>{t[i.toLowerCase().replace(/\s+/g,"")]=s}),t}function iA({facilityRows:r,materialHandlingRows:t,planRows:i,patternRows:s}){const l=r.map(aA).filter(S=>S!==null);if(l.length===0)return[];const c={x:Math.min(...l.map(S=>S.absoluteX)),y:Math.min(...l.map(S=>S.absoluteY))},h=oA(i,s),d=h?s.filter(S=>yi(S.planid)===h):s,m=new Map(t.map(S=>[yi(S.materialhandlingcode).toLowerCase(),S])),p=lA(d),v=l.map(S=>rA(S,c)),_=d.map(S=>sA(S,m,c,p)).filter(S=>S!==null);return[...v,..._]}function aA(r){const t=cA(r.facilitytype);if(!t)return null;const i=zn(r.x0??r.locationx),s=zn(r.y0??r.locationy),l=zn(r.z0??r.locationz),c=r.x1==null||r.x1===""?i+zn(r.width):zn(r.x1),h=r.y1==null||r.y1===""?s+zn(r.depth):zn(r.y1),d=r.z1==null||r.z1===""?l+zn(r.height):zn(r.z1),m=yi(r.facilitycode),p=yi(r.facilityname)||m||t;return{id:`facility-${m||p}`,name:p,type:t,absoluteX:Math.min(i,c),absoluteY:Math.min(s,h),baseZ:Math.min(l,d)*jn,width:Math.max(Math.abs(c-i)*jn,Pr),depth:Math.max(Math.abs(h-s)*jn,Pr),height:Math.max(Math.abs(d-l)*jn,hA(t)),description:`${t} from Facility sheet${m?` (${m})`:""}.`}}function sA(r,t,i,s){const l=yi(r.materialhandlingcode),c=t.get(l.toLowerCase()),h=uA(l,c),[d,m]=a_(zn(r.x0),zn(r.x1)),[p,v]=a_(zn(r.y0),zn(r.y1)),_=zn(c?.width)*jn,S=zn(c?.depth)*jn,M=Math.max((m-d)*s,_,Pr),T=Math.max((v-p)*s,S,Pr),A=yi(r.patternresultid),x=yi(c?.materialhandlingname)||l||A||h,O=zn(c?.height)*jn||fA(h);return!A&&!l&&M<=Pr&&T<=Pr?null:{id:`pattern-${A||l}-${d}-${p}`,name:x,type:h,xMin:d*s-i.x*jn,yMin:p*s-i.y*jn,xMax:d*s-i.x*jn+M,yMax:p*s-i.y*jn+T,zMin:0,zMax:O,description:`${h} from PatternResult${A?` (${A})`:""}.`}}function rA(r,t){const i=(r.absoluteX-t.x)*jn,s=(r.absoluteY-t.y)*jn;return{id:r.id,name:r.name,type:r.type,xMin:i,yMin:s,xMax:i+r.width,yMax:s+r.depth,zMin:r.baseZ,zMax:r.baseZ+r.height,description:r.description}}function oA(r,t){const i=yi(r[0]?.planid);return i||yi(t[0]?.planid)}function lA(r){return r.some(t=>"materialhandlingcode"in t)?jn:1}function cA(r){const t=yi(r).toLowerCase().replace(/[_\s]+/g," "),i=i_[t];return i||(Object.entries(i_).find(([l])=>t.startsWith(l))?.[1]??null)}function uA(r,t){const i=yi(t?.storedunittype).toLowerCase(),s=yi(t?.materialhandlingname).toLowerCase(),l=`${r} ${s}`.toLowerCase();return l.includes("operation_area")?"Operation Area":i.includes("pallet")||l.includes("nestainer")||l.includes("rack")?"Nestainer":"Shelf"}function fA(r){return r==="Nestainer"?1.35:r==="Operation Area"?.05:1.8}function hA(r){return r==="Pillar"?4:r==="Gate"?3.5:r==="Wall"?2.8:r==="Boundary"?.12:.03}function a_(r,t){return r<=t?[r,t]:[t,r]}function yi(r){return r==null?"":String(r).trim()}function zn(r){const t=Number.parseFloat(String(r??""));return Number.isFinite(t)?t:0}function dA(){const[r,t]=ln.useState([]),[i,s]=ln.useState(!0),[l,c]=ln.useState(null);return ln.useEffect(()=>{let h=!1;async function d(){try{s(!0),c(null);let m;try{m=await tA()}catch{m=await JT()}h||t(m)}catch(m){h||c(m instanceof Error?m.message:"Failed to load locations")}finally{h||s(!1)}}return d(),()=>{h=!0}},[]),{locations:r,loading:i,error:l}}function pA(r){const[t,i]=ln.useState(null),[s,l]=ln.useState(null);return{selectedLocation:ln.useMemo(()=>r.find(h=>h.id===t)??null,[r,t]),selectedLocationId:t,hoveredLocationId:s,setSelectedLocationId:i,setHoveredLocationId:l}}function mA(){const{locations:r,loading:t,error:i}=dA(),s=pA(r),[l,c]=ln.useState(""),h=ln.useMemo(()=>{const m=l.trim().toLowerCase();return m?r.filter(p=>p.name.toLowerCase().includes(m)||p.type.toLowerCase().includes(m)||p.description?.toLowerCase().includes(m)):r},[r,l]),d=l.trim()?h.map(m=>m.id):[];return oe.jsxs("div",{className:"app-shell",children:[oe.jsx(ay,{query:l,locations:h,selectedLocation:s.selectedLocation,selectedLocationId:s.selectedLocationId,onQueryChange:c,onSelectLocation:s.setSelectedLocationId}),oe.jsxs("main",{className:"main-panel",children:[oe.jsx(QT,{locations:r,selectedLocationId:s.selectedLocationId,hoveredLocationId:s.hoveredLocationId,searchedLocationIds:d,onHoverLocation:s.setHoveredLocationId,onSelectLocation:s.setSelectedLocationId}),t&&oe.jsx("div",{className:"map-status",children:"Loading layout..."}),i&&oe.jsx("div",{className:"map-status map-status-error",children:i}),oe.jsx(ny,{})]})]})}ty.createRoot(document.getElementById("root")).render(oe.jsx(ln.StrictMode,{children:oe.jsx(mA,{})}));
