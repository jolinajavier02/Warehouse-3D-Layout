(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var kf={exports:{}},Co={};var hx;function oS(){if(hx)return Co;hx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var dx;function lS(){return dx||(dx=1,kf.exports=oS()),kf.exports}var ee=lS(),Wf={exports:{}},se={};var px;function cS(){if(px)return se;px=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function v(L,at,yt){this.props=L,this.context=at,this.refs=M,this.updater=yt||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,at){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,at,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function z(){}z.prototype=v.prototype;function U(L,at,yt){this.props=L,this.context=at,this.refs=M,this.updater=yt||A}var F=U.prototype=new z;F.constructor=U,C(F,v.prototype),F.isPureReactComponent=!0;var X=Array.isArray;function N(){}var I={H:null,A:null,T:null,S:null},tt=Object.prototype.hasOwnProperty;function D(L,at,yt){var Et=yt.ref;return{$$typeof:o,type:L,key:at,ref:Et!==void 0?Et:null,props:yt}}function R(L,at){return D(L.type,at,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function et(L){var at={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return at[yt]})}var lt=/\/+/g;function mt(L,at){return typeof L=="object"&&L!==null&&L.key!=null?et(""+L.key):at.toString(36)}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(at){L.status==="pending"&&(L.status="fulfilled",L.value=at)},function(at){L.status==="pending"&&(L.status="rejected",L.reason=at)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,at,yt,Et,Ot){var nt=typeof L;(nt==="undefined"||nt==="boolean")&&(L=null);var ct=!1;if(L===null)ct=!0;else switch(nt){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(L.$$typeof){case o:case e:ct=!0;break;case g:return ct=L._init,P(ct(L._payload),at,yt,Et,Ot)}}if(ct)return Ot=Ot(L),ct=Et===""?"."+mt(L,0):Et,X(Ot)?(yt="",ct!=null&&(yt=ct.replace(lt,"$&/")+"/"),P(Ot,at,yt,"",function(Xt){return Xt})):Ot!=null&&(G(Ot)&&(Ot=R(Ot,yt+(Ot.key==null||L&&L.key===Ot.key?"":(""+Ot.key).replace(lt,"$&/")+"/")+ct)),at.push(Ot)),1;ct=0;var Ct=Et===""?".":Et+":";if(X(L))for(var Bt=0;Bt<L.length;Bt++)Et=L[Bt],nt=Ct+mt(Et,Bt),ct+=P(Et,at,yt,nt,Ot);else if(Bt=y(L),typeof Bt=="function")for(L=Bt.call(L),Bt=0;!(Et=L.next()).done;)Et=Et.value,nt=Ct+mt(Et,Bt++),ct+=P(Et,at,yt,nt,Ot);else if(nt==="object"){if(typeof L.then=="function")return P(ft(L),at,yt,Et,Ot);throw at=String(L),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ct}function j(L,at,yt){if(L==null)return L;var Et=[],Ot=0;return P(L,Et,"","",function(nt){return at.call(yt,nt,Ot++)}),Et}function Y(L){if(L._status===-1){var at=L._result;at=at(),at.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=at)}if(L._status===1)return L._result.default;throw L._result}var _t=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},gt={map:j,forEach:function(L,at,yt){j(L,function(){at.apply(this,arguments)},yt)},count:function(L){var at=0;return j(L,function(){at++}),at},toArray:function(L){return j(L,function(at){return at})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return se.Activity=_,se.Children=gt,se.Component=v,se.Fragment=i,se.Profiler=l,se.PureComponent=U,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,se.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},se.cache=function(L){return function(){return L.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(L,at,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Et=C({},L.props),Ot=L.key;if(at!=null)for(nt in at.key!==void 0&&(Ot=""+at.key),at)!tt.call(at,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&at.ref===void 0||(Et[nt]=at[nt]);var nt=arguments.length-2;if(nt===1)Et.children=yt;else if(1<nt){for(var ct=Array(nt),Ct=0;Ct<nt;Ct++)ct[Ct]=arguments[Ct+2];Et.children=ct}return D(L.type,Ot,Et)},se.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},se.createElement=function(L,at,yt){var Et,Ot={},nt=null;if(at!=null)for(Et in at.key!==void 0&&(nt=""+at.key),at)tt.call(at,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Ot[Et]=at[Et]);var ct=arguments.length-2;if(ct===1)Ot.children=yt;else if(1<ct){for(var Ct=Array(ct),Bt=0;Bt<ct;Bt++)Ct[Bt]=arguments[Bt+2];Ot.children=Ct}if(L&&L.defaultProps)for(Et in ct=L.defaultProps,ct)Ot[Et]===void 0&&(Ot[Et]=ct[Et]);return D(L,nt,Ot)},se.createRef=function(){return{current:null}},se.forwardRef=function(L){return{$$typeof:d,render:L}},se.isValidElement=G,se.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Y}},se.memo=function(L,at){return{$$typeof:p,type:L,compare:at===void 0?null:at}},se.startTransition=function(L){var at=I.T,yt={};I.T=yt;try{var Et=L(),Ot=I.S;Ot!==null&&Ot(yt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(N,_t)}catch(nt){_t(nt)}finally{at!==null&&yt.types!==null&&(at.types=yt.types),I.T=at}},se.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},se.use=function(L){return I.H.use(L)},se.useActionState=function(L,at,yt){return I.H.useActionState(L,at,yt)},se.useCallback=function(L,at){return I.H.useCallback(L,at)},se.useContext=function(L){return I.H.useContext(L)},se.useDebugValue=function(){},se.useDeferredValue=function(L,at){return I.H.useDeferredValue(L,at)},se.useEffect=function(L,at){return I.H.useEffect(L,at)},se.useEffectEvent=function(L){return I.H.useEffectEvent(L)},se.useId=function(){return I.H.useId()},se.useImperativeHandle=function(L,at,yt){return I.H.useImperativeHandle(L,at,yt)},se.useInsertionEffect=function(L,at){return I.H.useInsertionEffect(L,at)},se.useLayoutEffect=function(L,at){return I.H.useLayoutEffect(L,at)},se.useMemo=function(L,at){return I.H.useMemo(L,at)},se.useOptimistic=function(L,at){return I.H.useOptimistic(L,at)},se.useReducer=function(L,at,yt){return I.H.useReducer(L,at,yt)},se.useRef=function(L){return I.H.useRef(L)},se.useState=function(L){return I.H.useState(L)},se.useSyncExternalStore=function(L,at,yt){return I.H.useSyncExternalStore(L,at,yt)},se.useTransition=function(){return I.H.useTransition()},se.version="19.2.6",se}var mx;function _d(){return mx||(mx=1,Wf.exports=cS()),Wf.exports}var En=_d(),qf={exports:{}},Do={},Yf={exports:{}},jf={};var xx;function uS(){return xx||(xx=1,(function(o){function e(P,j){var Y=P.length;P.push(j);t:for(;0<Y;){var _t=Y-1>>>1,gt=P[_t];if(0<l(gt,j))P[_t]=j,P[Y]=gt,Y=_t;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var j=P[0],Y=P.pop();if(Y!==j){P[0]=Y;t:for(var _t=0,gt=P.length,L=gt>>>1;_t<L;){var at=2*(_t+1)-1,yt=P[at],Et=at+1,Ot=P[Et];if(0>l(yt,Y))Et<gt&&0>l(Ot,yt)?(P[_t]=Ot,P[Et]=Y,_t=Et):(P[_t]=yt,P[at]=Y,_t=at);else if(Et<gt&&0>l(Ot,Y))P[_t]=Ot,P[Et]=Y,_t=Et;else break t}}return j}function l(P,j){var Y=P.sortIndex-j.sortIndex;return Y!==0?Y:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,S=3,y=!1,A=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function F(P){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=P)s(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function X(P){if(C=!1,F(P),!A)if(i(m)!==null)A=!0,N||(N=!0,et());else{var j=i(p);j!==null&&ft(X,j.startTime-P)}}var N=!1,I=-1,tt=5,D=-1;function R(){return M?!0:!(o.unstable_now()-D<tt)}function G(){if(M=!1,N){var P=o.unstable_now();D=P;var j=!0;try{t:{A=!1,C&&(C=!1,z(I),I=-1),y=!0;var Y=S;try{e:{for(F(P),_=i(m);_!==null&&!(_.expirationTime>P&&R());){var _t=_.callback;if(typeof _t=="function"){_.callback=null,S=_.priorityLevel;var gt=_t(_.expirationTime<=P);if(P=o.unstable_now(),typeof gt=="function"){_.callback=gt,F(P),j=!0;break e}_===i(m)&&s(m),F(P)}else s(m);_=i(m)}if(_!==null)j=!0;else{var L=i(p);L!==null&&ft(X,L.startTime-P),j=!1}}break t}finally{_=null,S=Y,y=!1}j=void 0}}finally{j?et():N=!1}}}var et;if(typeof U=="function")et=function(){U(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,mt=lt.port2;lt.port1.onmessage=G,et=function(){mt.postMessage(null)}}else et=function(){v(G,0)};function ft(P,j){I=v(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var Y=S;S=j;try{return P()}finally{S=Y}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=S;S=P;try{return j()}finally{S=Y}},o.unstable_scheduleCallback=function(P,j,Y){var _t=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?_t+Y:_t):Y=_t,P){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=Y+gt,P={id:g++,callback:j,priorityLevel:P,startTime:Y,expirationTime:gt,sortIndex:-1},Y>_t?(P.sortIndex=Y,e(p,P),i(m)===null&&P===i(p)&&(C?(z(I),I=-1):C=!0,ft(X,Y-_t))):(P.sortIndex=gt,e(m,P),A||y||(A=!0,N||(N=!0,et()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var j=S;return function(){var Y=S;S=j;try{return P.apply(this,arguments)}finally{S=Y}}}})(jf)),jf}var _x;function fS(){return _x||(_x=1,Yf.exports=uS()),Yf.exports}var Zf={exports:{}},Ln={};var gx;function hS(){if(gx)return Ln;gx=1;var o=_d();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Ln.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.6",Ln}var vx;function dS(){if(vx)return Zf.exports;vx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zf.exports=hS(),Zf.exports}var Sx;function pS(){if(Sx)return Do;Sx=1;var o=fS(),e=_d(),i=dS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,r=f;break}if(E===r){x=!0,r=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,r=c;break}if(E===r){x=!0,r=f,a=c;break}E=E.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),U=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case N:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case U:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case tt:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var ft=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},_t=[],gt=-1;function L(t){return{current:t}}function at(t){0>gt||(t.current=_t[gt],_t[gt]=null,gt--)}function yt(t,n){gt++,_t[gt]=t.current,t.current=n}var Et=L(null),Ot=L(null),nt=L(null),ct=L(null);function Ct(t,n){switch(yt(nt,n),yt(Ot,t),yt(Et,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Pm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Pm(n),t=zm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(Et),yt(Et,t)}function Bt(){at(Et),at(Ot),at(nt)}function Xt(t){t.memoizedState!==null&&yt(ct,t);var n=Et.current,a=zm(n,t.type);n!==a&&(yt(Ot,t),yt(Et,a))}function ce(t){Ot.current===t&&(at(Et),at(Ot)),ct.current===t&&(at(ct),Eo._currentValue=Y)}var an,de;function Re(t){if(an===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);an=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+t+de}var B=!1;function pe(t,n){if(!t||B)return"";B=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(rt){var $=rt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(rt){$=rt}t.call(pt.prototype)}}else{try{throw Error()}catch(rt){$=rt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(rt){if(rt&&$&&typeof rt.stack=="string")return[rt.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var O=x.split(`
`),Q=E.split(`
`);for(c=r=0;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===O.length||c===Q.length)for(r=O.length-1,c=Q.length-1;1<=r&&0<=c&&O[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(O[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||O[r]!==Q[c]){var ut=`
`+O[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=c);break}}}finally{B=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Re(a):""}function xe(t,n){switch(t.tag){case 26:case 27:case 5:return Re(t.type);case 16:return Re("Lazy");case 13:return t.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return pe(t.type,!1);case 11:return pe(t.type.render,!1);case 1:return pe(t.type,!0);case 31:return Re("Activity");default:return""}}function Pe(t){try{var n="",a=null;do n+=xe(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ht=Object.prototype.hasOwnProperty,ke=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,ae=o.unstable_shouldYield,w=o.unstable_requestPaint,b=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,ot=o.unstable_NormalPriority,Wt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Kt=o.log,kt=o.unstable_setDisableYieldValue,St=null,bt=null;function qt(t){if(typeof Kt=="function"&&kt(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(St,t)}catch{}}var Gt=Math.clz32?Math.clz32:H,Nt=Math.log,ne=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Nt(t)/ne|0)|0}var Dt=256,At=262144,Rt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Mt(r):(x&=E,x!==0?c=Mt(x):a||(a=E&~t,a!==0&&(c=Mt(a))))):(E=r&~f,E!==0?c=Mt(E):x!==0?c=Mt(x):a||(a=r&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function zt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Un(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yn(t,n,a,r,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,O=t.expirationTimes,Q=t.hiddenUpdates;for(a=x&~a;0<a;){var ut=31-Gt(a),pt=1<<ut;E[ut]=0,O[ut]=-1;var $=Q[ut];if($!==null)for(Q[ut]=null,ut=0;ut<$.length;ut++){var rt=$[ut];rt!==null&&(rt.lane&=-536870913)}a&=~pt}r!==0&&Yo(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Yo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Gt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Pr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Gt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function zr(t,n){var a=n&-n;return a=(a&42)!==0?1:_i(a),(a&(t.suspendedLanes|n))!==0?0:a}function _i(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $a(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ir(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:sx(t.type))}function Fr(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var jn=Math.random().toString(36).slice(2),on="__reactFiber$"+jn,dn="__reactProps$"+jn,Ii="__reactContainer$"+jn,Us="__reactEvents$"+jn,Ic="__reactListeners$"+jn,Fc="__reactHandles$"+jn,jo="__reactResources$"+jn,ts="__reactMarker$"+jn;function Br(t){delete t[on],delete t[dn],delete t[Us],delete t[Ic],delete t[Fc]}function xa(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ii]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Xm(t);t!==null;){if(a=t[on])return a;t=Xm(t)}return n}t=a,a=t.parentNode}return null}function T(t){if(t=t[on]||t[Ii]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function k(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function it(t){var n=t[jo];return n||(n=t[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(t){t[ts]=!0}var q=new Set,Tt={};function wt(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(Tt[t]=n,t=0;t<n.length;t++)q.add(n[t])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},te={};function jt(t){return Ht.call(te,t)?!0:Ht.call(Jt,t)?!1:It.test(t)?te[t]=!0:(Jt[t]=!0,!1)}function ue(t,n,a){if(jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function De(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=Oe(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Ee(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Oe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function vn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _a=/[\n"\\]/g;function Ye(t){return t.replace(_a,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(t,n,a,r,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+be(n)):t.value!==""+be(n)&&(t.value=""+be(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,x,be(n)):a!=null?Sn(t,x,be(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+be(E):t.removeAttribute("name")}function je(t,n,a,r,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(t);return}a=a!=null?""+be(a):"",n=n!=null?""+be(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),We(t)}function Sn(t,n,a){n==="number"&&vn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function pn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+be(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+be(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+be(a):""}function Tn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ft(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=be(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),We(t)}function Ri(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ld(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Bi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Nd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Ld(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Ld(t,f,n[f])}function Bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ig=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ag=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(t){return ag.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var Hc=null;function Gc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ls=null,Ns=null;function Od(t){var n=T(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Fi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[dn]||null;if(!c)throw Error(s(90));Fi(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Ee(r)}break t;case"textarea":yn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&pn(t,!!a.multiple,n,!1)}}}var Vc=!1;function Pd(t,n,a){if(Vc)return t(n,a);Vc=!0;try{var r=t(n);return r}finally{if(Vc=!1,(Ls!==null||Ns!==null)&&(zl(),Ls&&(n=Ls,t=Ns,Ns=Ls=null,Od(n),t)))for(n=0;n<t.length;n++)Od(t[n])}}function Hr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[dn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(Gi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Xc=!1}var ga=null,kc=null,Ko=null;function zd(){if(Ko)return Ko;var t,n=kc,a=n.length,r,c="value"in ga?ga.value:ga.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return Ko=c.slice(t,1<r?1-r:void 0)}function Qo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function Id(){return!1}function Fn(t){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jo:Id,this.isPropagationStopped=Id,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Fn(es),Vr=_({},es,{view:0,detail:0}),sg=Fn(Vr),Wc,qc,Xr,tl=_({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(Wc=t.screenX-Xr.screenX,qc=t.screenY-Xr.screenY):qc=Wc=0,Xr=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),Fd=Fn(tl),rg=_({},tl,{dataTransfer:0}),og=Fn(rg),lg=_({},Vr,{relatedTarget:0}),Yc=Fn(lg),cg=_({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),ug=Fn(cg),fg=_({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hg=Fn(fg),dg=_({},es,{data:0}),Bd=Fn(dg),pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _g(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=xg[t])?!!n[t]:!1}function jc(){return _g}var gg=_({},Vr,{key:function(t){if(t.key){var n=pg[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vg=Fn(gg),Sg=_({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=Fn(Sg),yg=_({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Mg=Fn(yg),bg=_({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eg=Fn(bg),Tg=_({},tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=Fn(Tg),Rg=_({},es,{newState:0,oldState:0}),Cg=Fn(Rg),Dg=[9,13,27,32],Zc=Gi&&"CompositionEvent"in window,kr=null;Gi&&"documentMode"in document&&(kr=document.documentMode);var wg=Gi&&"TextEvent"in window&&!kr,Gd=Gi&&(!Zc||kr&&8<kr&&11>=kr),Vd=" ",Xd=!1;function kd(t,n){switch(t){case"keyup":return Dg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function Ug(t,n){switch(t){case"compositionend":return Wd(n);case"keypress":return n.which!==32?null:(Xd=!0,Vd);case"textInput":return t=n.data,t===Vd&&Xd?null:t;default:return null}}function Lg(t,n){if(Os)return t==="compositionend"||!Zc&&kd(t,n)?(t=zd(),Ko=kc=ga=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gd&&n.locale!=="ko"?null:n.data;default:return null}}var Ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ng[t.type]:n==="textarea"}function Yd(t,n,a,r){Ls?Ns?Ns.push(r):Ns=[r]:Ls=r,n=Xl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Wr=null,qr=null;function Og(t){Dm(t,0)}function el(t){var n=k(t);if(Ee(n))return t}function jd(t,n){if(t==="change")return n}var Zd=!1;if(Gi){var Kc;if(Gi){var Qc="oninput"in document;if(!Qc){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),Qc=typeof Kd.oninput=="function"}Kc=Qc}else Kc=!1;Zd=Kc&&(!document.documentMode||9<document.documentMode)}function Qd(){Wr&&(Wr.detachEvent("onpropertychange",Jd),qr=Wr=null)}function Jd(t){if(t.propertyName==="value"&&el(qr)){var n=[];Yd(n,qr,t,Gc(t)),Pd(Og,n)}}function Pg(t,n,a){t==="focusin"?(Qd(),Wr=n,qr=a,Wr.attachEvent("onpropertychange",Jd)):t==="focusout"&&Qd()}function zg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return el(qr)}function Ig(t,n){if(t==="click")return el(n)}function Fg(t,n){if(t==="input"||t==="change")return el(n)}function Bg(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Bg;function Yr(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ht.call(n,c)||!Zn(t[c],n[c]))return!1}return!0}function $d(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,n){var a=$d(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$d(a)}}function ep(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ep(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function np(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vn(t.document)}return n}function Jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Hg=Gi&&"documentMode"in document&&11>=document.documentMode,Ps=null,$c=null,jr=null,tu=!1;function ip(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tu||Ps==null||Ps!==vn(r)||(r=Ps,"selectionStart"in r&&Jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Yr(jr,r)||(jr=r,r=Xl($c,"onSelect"),0<r.length&&(n=new $o("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ps)))}function ns(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var zs={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},eu={},ap={};Gi&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function is(t){if(eu[t])return eu[t];if(!zs[t])return t;var n=zs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ap)return eu[t]=n[a];return t}var sp=is("animationend"),rp=is("animationiteration"),op=is("animationstart"),Gg=is("transitionrun"),Vg=is("transitionstart"),Xg=is("transitioncancel"),lp=is("transitionend"),cp=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function gi(t,n){cp.set(t,n),wt(n,[t])}var nl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Is=0,iu=0;function il(){for(var t=Is,n=iu=Is=0;n<t;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&up(a,c,f)}}function al(t,n,a,r){si[Is++]=t,si[Is++]=n,si[Is++]=a,si[Is++]=r,iu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function au(t,n,a,r){return al(t,n,a,r),sl(t)}function as(t,n){return al(t,null,null,n),sl(t)}function up(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Gt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function sl(t){if(50<_o)throw _o=0,pf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Fs={};function kg(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,r){return new kg(t,n,a,r)}function su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function rl(t,n,a,r,c,f){var x=0;if(r=t,typeof t=="function")su(t)&&(x=1);else if(typeof t=="string")x=Zv(t,a,Et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Kn(31,a,n,c),t.elementType=D,t.lanes=f,t;case C:return ss(a.children,c,f,n);case M:x=8,c|=24;break;case v:return t=Kn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case X:return t=Kn(13,a,n,c),t.elementType=X,t.lanes=f,t;case N:return t=Kn(19,a,n,c),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:x=10;break t;case z:x=9;break t;case F:x=11;break t;case I:x=14;break t;case tt:x=16,r=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Kn(x,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ss(t,n,a,r){return t=Kn(7,t,r,n),t.lanes=a,t}function ru(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function hp(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function ou(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var dp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=dp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Pe(n)},dp.set(t,n),n)}return{value:t,source:n,stack:Pe(n)}}var Bs=[],Hs=0,ol=null,Zr=0,oi=[],li=0,va=null,Ci=1,Di="";function Xi(t,n){Bs[Hs++]=Zr,Bs[Hs++]=ol,ol=t,Zr=n}function pp(t,n,a){oi[li++]=Ci,oi[li++]=Di,oi[li++]=va,va=t;var r=Ci;t=Di;var c=32-Gt(r)-1;r&=~(1<<c),a+=1;var f=32-Gt(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,Ci=1<<32-Gt(n)+c|a<<c|r,Di=f+t}else Ci=1<<f|a<<c|r,Di=t}function lu(t){t.return!==null&&(Xi(t,1),pp(t,1,0))}function cu(t){for(;t===ol;)ol=Bs[--Hs],Bs[Hs]=null,Zr=Bs[--Hs],Bs[Hs]=null;for(;t===va;)va=oi[--li],oi[li]=null,Di=oi[--li],oi[li]=null,Ci=oi[--li],oi[li]=null}function mp(t,n){oi[li++]=Ci,oi[li++]=Di,oi[li++]=va,Ci=n.id,Di=n.overflow,va=t}var An=null,Ze=null,Te=!1,Sa=null,ci=!1,uu=Error(s(519));function ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kr(ri(n,t)),uu}function xp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[on]=t,n[dn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)ge(vo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),je(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Tn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Nm(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||ya(t,!0)}function _p(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:An=An.return}}function Gs(t){if(t!==An)return!1;if(!Te)return _p(t),Te=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Df(t.type,t.memoizedProps)),a=!a),a&&Ze&&ya(t),_p(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=Vm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=Vm(t)}else n===27?(n=Ze,Pa(t.type)?(t=Of,Of=null,Ze=t):Ze=n):Ze=An?fi(t.stateNode.nextSibling):null;return!0}function rs(){Ze=An=null,Te=!1}function fu(){var t=Sa;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Sa=null),t}function Kr(t){Sa===null?Sa=[t]:Sa.push(t)}var hu=L(null),os=null,ki=null;function Ma(t,n,a){yt(hu,n._currentValue),n._currentValue=a}function Wi(t){t._currentValue=hu.current,at(hu)}function du(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function pu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var O=0;O<n.length;O++)if(E.context===n[O]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),du(f.return,a,t),r||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),du(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Vs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var E=c.type;Zn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===ct.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}c=c.return}t!==null&&pu(n,t,a,r),n.flags|=262144}function ll(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ls(t){os=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return gp(os,t)}function cl(t,n){return os===null&&ls(t),gp(t,n)}function gp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(t===null)throw Error(s(308));ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ki=ki.next=n;return a}var Wg=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},qg=o.unstable_scheduleCallback,Yg=o.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new Wg,data:new Map,refCount:0}}function Qr(t){t.refCount--,t.refCount===0&&qg(Yg,function(){t.controller.abort()})}var Jr=null,xu=0,Xs=0,ks=null;function jg(t,n){if(Jr===null){var a=Jr=[];xu=0,Xs=Sf(),ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return xu++,n.then(vp,vp),n}function vp(){if(--xu===0&&Jr!==null){ks!==null&&(ks.status="fulfilled");var t=Jr;Jr=null,Xs=0,ks=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Zg(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Sp=P.S;P.S=function(t,n){im=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jg(t,n),Sp!==null&&Sp(t,n)};var cs=L(null);function _u(){var t=cs.current;return t!==null?t:qe.pooledCache}function ul(t,n){n===null?yt(cs,cs.current):yt(cs,n.pool)}function yp(){var t=_u();return t===null?null:{parent:ln._currentValue,pool:t}}var Ws=Error(s(460)),gu=Error(s(474)),fl=Error(s(542)),hl={then:function(){}};function Mp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function bp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t}throw fs=n,Ws}}function us(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fs=a,Ws):a}}var fs=null;function Ep(){if(fs===null)throw Error(s(459));var t=fs;return fs=null,t}function Tp(t){if(t===Ws||t===fl)throw Error(s(483))}var qs=null,$r=0;function dl(t){var n=$r;return $r+=1,qs===null&&(qs=[]),bp(qs,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ap(t){function n(W,V){if(t){var Z=W.deletions;Z===null?(W.deletions=[V],W.flags|=16):Z.push(V)}}function a(W,V){if(!t)return null;for(;V!==null;)n(W,V),V=V.sibling;return null}function r(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function c(W,V){return W=Vi(W,V),W.index=0,W.sibling=null,W}function f(W,V,Z){return W.index=Z,t?(Z=W.alternate,Z!==null?(Z=Z.index,Z<V?(W.flags|=67108866,V):Z):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function x(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,V,Z,ht){return V===null||V.tag!==6?(V=ru(Z,W.mode,ht),V.return=W,V):(V=c(V,Z),V.return=W,V)}function O(W,V,Z,ht){var Zt=Z.type;return Zt===C?ut(W,V,Z.props.children,ht,Z.key):V!==null&&(V.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===tt&&us(Zt)===V.type)?(V=c(V,Z.props),to(V,Z),V.return=W,V):(V=rl(Z.type,Z.key,Z.props,null,W.mode,ht),to(V,Z),V.return=W,V)}function Q(W,V,Z,ht){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=ou(Z,W.mode,ht),V.return=W,V):(V=c(V,Z.children||[]),V.return=W,V)}function ut(W,V,Z,ht,Zt){return V===null||V.tag!==7?(V=ss(Z,W.mode,ht,Zt),V.return=W,V):(V=c(V,Z),V.return=W,V)}function pt(W,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ru(""+V,W.mode,Z),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return Z=rl(V.type,V.key,V.props,null,W.mode,Z),to(Z,V),Z.return=W,Z;case A:return V=ou(V,W.mode,Z),V.return=W,V;case tt:return V=us(V),pt(W,V,Z)}if(ft(V)||et(V))return V=ss(V,W.mode,Z,null),V.return=W,V;if(typeof V.then=="function")return pt(W,dl(V),Z);if(V.$$typeof===U)return pt(W,cl(W,V),Z);pl(W,V)}return null}function $(W,V,Z,ht){var Zt=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Zt!==null?null:E(W,V,""+Z,ht);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:return Z.key===Zt?O(W,V,Z,ht):null;case A:return Z.key===Zt?Q(W,V,Z,ht):null;case tt:return Z=us(Z),$(W,V,Z,ht)}if(ft(Z)||et(Z))return Zt!==null?null:ut(W,V,Z,ht,null);if(typeof Z.then=="function")return $(W,V,dl(Z),ht);if(Z.$$typeof===U)return $(W,V,cl(W,Z),ht);pl(W,Z)}return null}function rt(W,V,Z,ht,Zt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(Z)||null,E(V,W,""+ht,Zt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case y:return W=W.get(ht.key===null?Z:ht.key)||null,O(V,W,ht,Zt);case A:return W=W.get(ht.key===null?Z:ht.key)||null,Q(V,W,ht,Zt);case tt:return ht=us(ht),rt(W,V,Z,ht,Zt)}if(ft(ht)||et(ht))return W=W.get(Z)||null,ut(V,W,ht,Zt,null);if(typeof ht.then=="function")return rt(W,V,Z,dl(ht),Zt);if(ht.$$typeof===U)return rt(W,V,Z,cl(V,ht),Zt);pl(V,ht)}return null}function Ft(W,V,Z,ht){for(var Zt=null,we=null,Vt=V,fe=V=0,ye=null;Vt!==null&&fe<Z.length;fe++){Vt.index>fe?(ye=Vt,Vt=null):ye=Vt.sibling;var Ue=$(W,Vt,Z[fe],ht);if(Ue===null){Vt===null&&(Vt=ye);break}t&&Vt&&Ue.alternate===null&&n(W,Vt),V=f(Ue,V,fe),we===null?Zt=Ue:we.sibling=Ue,we=Ue,Vt=ye}if(fe===Z.length)return a(W,Vt),Te&&Xi(W,fe),Zt;if(Vt===null){for(;fe<Z.length;fe++)Vt=pt(W,Z[fe],ht),Vt!==null&&(V=f(Vt,V,fe),we===null?Zt=Vt:we.sibling=Vt,we=Vt);return Te&&Xi(W,fe),Zt}for(Vt=r(Vt);fe<Z.length;fe++)ye=rt(Vt,W,fe,Z[fe],ht),ye!==null&&(t&&ye.alternate!==null&&Vt.delete(ye.key===null?fe:ye.key),V=f(ye,V,fe),we===null?Zt=ye:we.sibling=ye,we=ye);return t&&Vt.forEach(function(Ha){return n(W,Ha)}),Te&&Xi(W,fe),Zt}function $t(W,V,Z,ht){if(Z==null)throw Error(s(151));for(var Zt=null,we=null,Vt=V,fe=V=0,ye=null,Ue=Z.next();Vt!==null&&!Ue.done;fe++,Ue=Z.next()){Vt.index>fe?(ye=Vt,Vt=null):ye=Vt.sibling;var Ha=$(W,Vt,Ue.value,ht);if(Ha===null){Vt===null&&(Vt=ye);break}t&&Vt&&Ha.alternate===null&&n(W,Vt),V=f(Ha,V,fe),we===null?Zt=Ha:we.sibling=Ha,we=Ha,Vt=ye}if(Ue.done)return a(W,Vt),Te&&Xi(W,fe),Zt;if(Vt===null){for(;!Ue.done;fe++,Ue=Z.next())Ue=pt(W,Ue.value,ht),Ue!==null&&(V=f(Ue,V,fe),we===null?Zt=Ue:we.sibling=Ue,we=Ue);return Te&&Xi(W,fe),Zt}for(Vt=r(Vt);!Ue.done;fe++,Ue=Z.next())Ue=rt(Vt,W,fe,Ue.value,ht),Ue!==null&&(t&&Ue.alternate!==null&&Vt.delete(Ue.key===null?fe:Ue.key),V=f(Ue,V,fe),we===null?Zt=Ue:we.sibling=Ue,we=Ue);return t&&Vt.forEach(function(rS){return n(W,rS)}),Te&&Xi(W,fe),Zt}function Ge(W,V,Z,ht){if(typeof Z=="object"&&Z!==null&&Z.type===C&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:t:{for(var Zt=Z.key;V!==null;){if(V.key===Zt){if(Zt=Z.type,Zt===C){if(V.tag===7){a(W,V.sibling),ht=c(V,Z.props.children),ht.return=W,W=ht;break t}}else if(V.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===tt&&us(Zt)===V.type){a(W,V.sibling),ht=c(V,Z.props),to(ht,Z),ht.return=W,W=ht;break t}a(W,V);break}else n(W,V);V=V.sibling}Z.type===C?(ht=ss(Z.props.children,W.mode,ht,Z.key),ht.return=W,W=ht):(ht=rl(Z.type,Z.key,Z.props,null,W.mode,ht),to(ht,Z),ht.return=W,W=ht)}return x(W);case A:t:{for(Zt=Z.key;V!==null;){if(V.key===Zt)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){a(W,V.sibling),ht=c(V,Z.children||[]),ht.return=W,W=ht;break t}else{a(W,V);break}else n(W,V);V=V.sibling}ht=ou(Z,W.mode,ht),ht.return=W,W=ht}return x(W);case tt:return Z=us(Z),Ge(W,V,Z,ht)}if(ft(Z))return Ft(W,V,Z,ht);if(et(Z)){if(Zt=et(Z),typeof Zt!="function")throw Error(s(150));return Z=Zt.call(Z),$t(W,V,Z,ht)}if(typeof Z.then=="function")return Ge(W,V,dl(Z),ht);if(Z.$$typeof===U)return Ge(W,V,cl(W,Z),ht);pl(W,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,V!==null&&V.tag===6?(a(W,V.sibling),ht=c(V,Z),ht.return=W,W=ht):(a(W,V),ht=ru(Z,W.mode,ht),ht.return=W,W=ht),x(W)):a(W,V)}return function(W,V,Z,ht){try{$r=0;var Zt=Ge(W,V,Z,ht);return qs=null,Zt}catch(Vt){if(Vt===Ws||Vt===fl)throw Vt;var we=Kn(29,Vt,null,W.mode);return we.lanes=ht,we.return=W,we}}}var hs=Ap(!0),Rp=Ap(!1),ba=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ta(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=sl(t),up(t,null,a),n}return al(t,r,n,a),sl(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Pr(t,a)}}function yu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mu=!1;function no(){if(Mu){var t=ks;if(t!==null)throw t}}function io(t,n,a,r){Mu=!1;var c=t.updateQueue;ba=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var O=E,Q=O.next;O.next=null,x===null?f=Q:x.next=Q,x=O;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==x&&(E===null?ut.firstBaseUpdate=Q:E.next=Q,ut.lastBaseUpdate=O))}if(f!==null){var pt=c.baseState;x=0,ut=Q=O=null,E=f;do{var $=E.lane&-536870913,rt=$!==E.lane;if(rt?(Se&$)===$:(r&$)===$){$!==0&&$===Xs&&(Mu=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,$t=E;$=n;var Ge=a;switch($t.tag){case 1:if(Ft=$t.payload,typeof Ft=="function"){pt=Ft.call(Ge,pt,$);break t}pt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=$t.payload,$=typeof Ft=="function"?Ft.call(Ge,pt,$):Ft,$==null)break t;pt=_({},pt,$);break t;case 2:ba=!0}}$=E.callback,$!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[$]:rt.push($))}else rt={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(Q=ut=rt,O=pt):ut=ut.next=rt,x|=$;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ut===null&&(O=pt),c.baseState=O,c.firstBaseUpdate=Q,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),wa|=x,t.lanes=x,t.memoizedState=pt}}function Cp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Dp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Cp(a[t],n)}var Ys=L(null),ml=L(0);function wp(t,n){t=ta,yt(ml,t),yt(Ys,n),ta=t|n.baseLanes}function bu(){yt(ml,ta),yt(Ys,Ys.current)}function Eu(){ta=ml.current,at(Ys),at(ml)}var Qn=L(null),ui=null;function Aa(t){var n=t.alternate;yt(sn,sn.current&1),yt(Qn,t),ui===null&&(n===null||Ys.current!==null||n.memoizedState!==null)&&(ui=t)}function Tu(t){yt(sn,sn.current),yt(Qn,t),ui===null&&(ui=t)}function Up(t){t.tag===22?(yt(sn,sn.current),yt(Qn,t),ui===null&&(ui=t)):Ra()}function Ra(){yt(sn,sn.current),yt(Qn,Qn.current)}function Jn(t){at(Qn),ui===t&&(ui=null),at(sn)}var sn=L(0);function xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lf(a)||Nf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,le=null,Be=null,cn=null,_l=!1,js=!1,ds=!1,gl=0,ao=0,Zs=null,Kg=0;function Je(){throw Error(s(321))}function Au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function Ru(t,n,a,r,c,f){return qi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?p0:Vu,ds=!1,f=a(r,c),ds=!1,js&&(f=Np(n,a,r,c)),Lp(t),f}function Lp(t){P.H=oo;var n=Be!==null&&Be.next!==null;if(qi=0,cn=Be=le=null,_l=!1,ao=0,Zs=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&ll(t)&&(un=!0))}function Np(t,n,a,r){le=t;var c=0;do{if(js&&(Zs=null),ao=0,js=!1,25<=c)throw Error(s(301));if(c+=1,cn=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=m0,f=n(a,r)}while(js);return f}function Qg(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(le.flags|=1024),n}function Cu(){var t=gl!==0;return gl=0,t}function Du(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function wu(t){if(_l){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}_l=!1}qi=0,cn=Be=le=null,js=!1,ao=gl=0,Zs=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?le.memoizedState=cn=t:cn=cn.next=t,cn}function rn(){if(Be===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=cn===null?le.memoizedState:cn.next;if(n!==null)cn=n,Be=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},cn===null?le.memoizedState=cn=t:cn=cn.next=t}return cn}function vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ao;return ao+=1,Zs===null&&(Zs=[]),t=bp(Zs,t,n),n=le,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?p0:Vu),t}function Sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===U)return Rn(t)}throw Error(s(438,String(t)))}function Uu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=vl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=R;return n.index++,a}function Yi(t,n){return typeof n=="function"?n(t):n}function yl(t){var n=rn();return Lu(n,Be,t)}function Lu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,O=null,Q=n,ut=!1;do{var pt=Q.lane&-536870913;if(pt!==Q.lane?(Se&pt)===pt:(qi&pt)===pt){var $=Q.revertLane;if($===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pt===Xs&&(ut=!0);else if((qi&$)===$){Q=Q.next,$===Xs&&(ut=!0);continue}else pt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(E=O=pt,x=f):O=O.next=pt,le.lanes|=$,wa|=$;pt=Q.action,ds&&a(f,pt),f=Q.hasEagerState?Q.eagerState:a(f,pt)}else $={lane:pt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(E=O=$,x=f):O=O.next=$,le.lanes|=pt,wa|=pt;Q=Q.next}while(Q!==null&&Q!==n);if(O===null?x=f:O.next=E,!Zn(f,t.memoizedState)&&(un=!0,ut&&(a=ks,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=O,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Nu(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Zn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Op(t,n,a){var r=le,c=rn(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Zn((Be||c).memoizedState,a);if(x&&(c.memoizedState=a,un=!0),c=c.queue,zu(Ip.bind(null,r,c,t),[t]),c.getSnapshot!==n||x||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,Ks(9,{destroy:void 0},zp.bind(null,r,c,a,n),null),qe===null)throw Error(s(349));f||(qi&127)!==0||Pp(r,n,a)}return a}function Pp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=vl(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function zp(t,n,a,r){n.value=a,n.getSnapshot=r,Fp(n)&&Bp(t)}function Ip(t,n,a){return a(function(){Fp(n)&&Bp(t)})}function Fp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function Bp(t){var n=as(t,2);n!==null&&Xn(n,t,2)}function Ou(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),ds){qt(!0);try{a()}finally{qt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},n}function Hp(t,n,a,r){return t.baseState=a,Lu(t,Be,typeof r=="function"?r:Yi)}function Jg(t,n,a,r,c){if(El(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Gp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var E=a(c,r),O=P.S;O!==null&&O(x,E),Vp(t,n,E)}catch(Q){Pu(t,n,Q)}finally{f!==null&&x.types!==null&&(f.types=x.types),P.T=f}}else try{f=a(c,r),Vp(t,n,f)}catch(Q){Pu(t,n,Q)}}function Vp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Xp(t,n,r)},function(r){return Pu(t,n,r)}):Xp(t,n,a)}function Xp(t,n,a){n.status="fulfilled",n.value=a,kp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Gp(t,a)))}function Pu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,kp(n),n=n.next;while(n!==r)}t.action=null}function kp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Wp(t,n){return n}function qp(t,n){if(Te){var a=qe.formState;if(a!==null){t:{var r=le;if(Te){if(Ze){e:{for(var c=Ze,f=ci;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=fi(c.nextSibling),r=c.data==="F!";break t}}ya(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wp,lastRenderedState:n},a.queue=r,a=f0.bind(null,le,r),r.dispatch=a,r=Ou(!1),f=Gu.bind(null,le,!1,r.queue),r=Pn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=Jg.bind(null,le,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Yp(t){var n=rn();return jp(n,Be,t)}function jp(t,n,a){if(n=Lu(t,n,Wp)[0],t=yl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=so(n)}catch(x){throw x===Ws?fl:x}else r=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Ks(9,{destroy:void 0},$g.bind(null,c,a),null)),[r,f,t]}function $g(t,n){t.action=n}function Zp(t){var n=rn(),a=Be;if(a!==null)return jp(n,a,t);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Ks(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=vl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Kp(){return rn().memoizedState}function Ml(t,n,a,r){var c=Pn();le.flags|=t,c.memoizedState=Ks(1|n,{destroy:void 0},a,r===void 0?null:r)}function bl(t,n,a,r){var c=rn();r=r===void 0?null:r;var f=c.memoizedState.inst;Be!==null&&r!==null&&Au(r,Be.memoizedState.deps)?c.memoizedState=Ks(n,f,a,r):(le.flags|=t,c.memoizedState=Ks(1|n,f,a,r))}function Qp(t,n){Ml(8390656,8,t,n)}function zu(t,n){bl(2048,8,t,n)}function tv(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=vl(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Jp(t){var n=rn().memoizedState;return tv({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function $p(t,n){return bl(4,2,t,n)}function t0(t,n){return bl(4,4,t,n)}function e0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function n0(t,n,a){a=a!=null?a.concat([t]):null,bl(4,4,e0.bind(null,n,t),a)}function Iu(){}function i0(t,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Au(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function a0(t,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Au(n,r[1]))return r[0];if(r=t(),ds){qt(!0);try{t()}finally{qt(!1)}}return a.memoizedState=[r,n],r}function Fu(t,n,a){return a===void 0||(qi&1073741824)!==0&&(Se&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sm(),le.lanes|=t,wa|=t,a)}function s0(t,n,a,r){return Zn(a,n)?a:Ys.current!==null?(t=Fu(t,a,r),Zn(t,n)||(un=!0),t):(qi&42)===0||(qi&1073741824)!==0&&(Se&261930)===0?(un=!0,t.memoizedState=a):(t=sm(),le.lanes|=t,wa|=t,n)}function r0(t,n,a,r,c){var f=j.p;j.p=f!==0&&8>f?f:8;var x=P.T,E={};P.T=E,Gu(t,!1,n,a);try{var O=c(),Q=P.S;if(Q!==null&&Q(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ut=Zg(O,r);ro(t,n,ut,ei(t))}else ro(t,n,r,ei(t))}catch(pt){ro(t,n,{then:function(){},status:"rejected",reason:pt},ei())}finally{j.p=f,x!==null&&E.types!==null&&(x.types=E.types),P.T=x}}function ev(){}function Bu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=o0(t).queue;r0(t,c,n,Y,a===null?ev:function(){return l0(t),a(r)})}function o0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function l0(t){var n=o0(t);n.next===null&&(n=t.alternate.memoizedState),ro(t,n.next.queue,{},ei())}function Hu(){return Rn(Eo)}function c0(){return rn().memoizedState}function u0(){return rn().memoizedState}function nv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Ea(a);var r=Ta(n,t,a);r!==null&&(Xn(r,n,a),eo(r,n,a)),n={cache:mu()},t.payload=n;return}n=n.return}}function iv(t,n,a){var r=ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},El(t)?h0(n,a):(a=au(t,n,a,r),a!==null&&(Xn(a,t,r),d0(a,n,r)))}function f0(t,n,a){var r=ei();ro(t,n,a,r)}function ro(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(t))h0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Zn(E,x))return al(t,n,c,0),qe===null&&il(),!1}catch{}if(a=au(t,n,c,r),a!==null)return Xn(a,t,r),d0(a,n,r),!0}return!1}function Gu(t,n,a,r){if(r={lane:2,revertLane:Sf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},El(t)){if(n)throw Error(s(479))}else n=au(t,a,r,2),n!==null&&Xn(n,t,2)}function El(t){var n=t.alternate;return t===le||n!==null&&n===le}function h0(t,n){js=_l=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function d0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Pr(t,a)}}var oo={readContext:Rn,use:Sl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};oo.useEffectEvent=Je;var p0={readContext:Rn,use:Sl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Qp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ml(4194308,4,e0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ml(4194308,4,t,n)},useInsertionEffect:function(t,n){Ml(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var r=t();if(ds){qt(!0);try{t()}finally{qt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Pn();if(a!==void 0){var c=a(n);if(ds){qt(!0);try{a(n)}finally{qt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=iv.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ou(t);var n=t.queue,a=f0.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(t,n){var a=Pn();return Fu(a,t,n)},useTransition:function(){var t=Ou(!1);return t=r0.bind(null,le,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,c=Pn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Se&127)!==0||Pp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Qp(Ip.bind(null,r,f,t),[t]),r.flags|=2048,Ks(9,{destroy:void 0},zp.bind(null,r,f,a,n),null),a},useId:function(){var t=Pn(),n=qe.identifierPrefix;if(Te){var a=Di,r=Ci;a=(r&~(1<<32-Gt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Kg++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Hu,useFormState:qp,useActionState:qp,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gu.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Uu,useCacheRefresh:function(){return Pn().memoizedState=nv.bind(null,le)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Vu={readContext:Rn,use:Sl,useCallback:i0,useContext:Rn,useEffect:zu,useImperativeHandle:n0,useInsertionEffect:$p,useLayoutEffect:t0,useMemo:a0,useReducer:yl,useRef:Kp,useState:function(){return yl(Yi)},useDebugValue:Iu,useDeferredValue:function(t,n){var a=rn();return s0(a,Be.memoizedState,t,n)},useTransition:function(){var t=yl(Yi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Op,useId:c0,useHostTransitionStatus:Hu,useFormState:Yp,useActionState:Yp,useOptimistic:function(t,n){var a=rn();return Hp(a,Be,t,n)},useMemoCache:Uu,useCacheRefresh:u0};Vu.useEffectEvent=Jp;var m0={readContext:Rn,use:Sl,useCallback:i0,useContext:Rn,useEffect:zu,useImperativeHandle:n0,useInsertionEffect:$p,useLayoutEffect:t0,useMemo:a0,useReducer:Nu,useRef:Kp,useState:function(){return Nu(Yi)},useDebugValue:Iu,useDeferredValue:function(t,n){var a=rn();return Be===null?Fu(a,t,n):s0(a,Be.memoizedState,t,n)},useTransition:function(){var t=Nu(Yi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Op,useId:c0,useHostTransitionStatus:Hu,useFormState:Zp,useActionState:Zp,useOptimistic:function(t,n){var a=rn();return Be!==null?Hp(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uu,useCacheRefresh:u0};m0.useEffectEvent=Jp;function Xu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ei(),c=Ea(r);c.payload=n,a!=null&&(c.callback=a),n=Ta(t,c,r),n!==null&&(Xn(n,t,r),eo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ei(),c=Ea(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ta(t,c,r),n!==null&&(Xn(n,t,r),eo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),r=Ea(a);r.tag=2,n!=null&&(r.callback=n),n=Ta(t,r,a),n!==null&&(Xn(n,t,a),eo(n,t,a))}};function x0(t,n,a,r,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,r)||!Yr(c,f):!0}function _0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ku.enqueueReplaceState(n,n.state,null)}function ps(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function g0(t){nl(t)}function v0(t){console.error(t)}function S0(t){nl(t)}function Tl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function y0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Wu(t,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Tl(t,n)},a}function M0(t){return t=Ea(t),t.tag=3,t}function b0(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){y0(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){y0(n,a,r),typeof c!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function av(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,c,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Il():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),_f(t,r,c)),!1;case 22:return a.flags|=65536,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),_f(t,r,c)),!1}throw Error(s(435,a.tag))}return _f(t,r,c),Il(),!1}if(Te)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==uu&&(t=Error(s(422),{cause:r}),Kr(ri(t,a)))):(r!==uu&&(n=Error(s(423),{cause:r}),Kr(ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ri(r,a),c=Wu(t.stateNode,r,c),yu(t,c),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),xo===null?xo=[f]:xo.push(f),$e!==4&&($e=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Wu(a.stateNode,r,t),yu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ua===null||!Ua.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=M0(c),b0(c,t,a,r),yu(a,c),!1}a=a.return}while(a!==null);return!1}var qu=Error(s(461)),un=!1;function Cn(t,n,a,r){n.child=t===null?Rp(n,null,a,r):hs(n,t.child,a,r)}function E0(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var E in r)E!=="ref"&&(x[E]=r[E])}else x=r;return ls(n),r=Ru(t,n,a,x,f,c),E=Cu(),t!==null&&!un?(Du(t,n,c),ji(t,n,c)):(Te&&E&&lu(n),n.flags|=1,Cn(t,n,r,c),n.child)}function T0(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,A0(t,n,f,r,c)):(t=rl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!tf(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(x,r)&&t.ref===n.ref)return ji(t,n,c)}return n.flags|=1,t=Vi(f,r),t.ref=n.ref,t.return=n,n.child=t}function A0(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Yr(f,r)&&t.ref===n.ref)if(un=!1,n.pendingProps=r=f,tf(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ji(t,n,c)}return Yu(t,n,a,r,c)}function R0(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return C0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ul(n,f!==null?f.cachePool:null),f!==null?wp(n,f):bu(),Up(n);else return r=n.lanes=536870912,C0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ul(n,f.cachePool),wp(n,f),Ra(),n.memoizedState=null):(t!==null&&ul(n,null),bu(),Ra());return Cn(t,n,c,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function C0(t,n,a,r,c){var f=_u();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ul(n,null),bu(),Up(n),t!==null&&Vs(t,n,r,!0),n.childLanes=c,null}function Al(t,n){return n=Cl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function D0(t,n,a){return hs(n,t.child,null,a),t=Al(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function sv(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Te){if(r.mode==="hidden")return t=Al(n,r),n.lanes=536870912,lo(null,t);if(Tu(n),(t=Ze)?(t=Gm(t,ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:va!==null?{id:Ci,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=hp(t),a.return=n,n.child=a,An=n,Ze=null)):t=null,t===null)throw ya(n);return n.lanes=536870912,null}return Al(n,r)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Tu(n),c)if(n.flags&256)n.flags&=-257,n=D0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Vs(t,n,a,!1),c=(a&t.childLanes)!==0,un||c){if(r=qe,r!==null&&(x=zr(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,as(t,x),Xn(r,t,x),qu;Il(),n=D0(t,n,a)}else t=f.treeContext,Ze=fi(x.nextSibling),An=n,Te=!0,Sa=null,ci=!1,t!==null&&mp(n,t),n=Al(n,r),n.flags|=4096;return n}return t=Vi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Rl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yu(t,n,a,r,c){return ls(n),a=Ru(t,n,a,r,void 0,c),r=Cu(),t!==null&&!un?(Du(t,n,c),ji(t,n,c)):(Te&&r&&lu(n),n.flags|=1,Cn(t,n,a,c),n.child)}function w0(t,n,a,r,c,f){return ls(n),n.updateQueue=null,a=Np(n,r,a,c),Lp(t),r=Cu(),t!==null&&!un?(Du(t,n,f),ji(t,n,f)):(Te&&r&&lu(n),n.flags|=1,Cn(t,n,a,f),n.child)}function U0(t,n,a,r,c){if(ls(n),n.stateNode===null){var f=Fs,x=a.contextType;typeof x=="object"&&x!==null&&(f=Rn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},vu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Rn(x):Fs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Xu(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&ku.enqueueReplaceState(f,f.state,null),io(n,r,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,O=ps(a,E);f.props=O;var Q=f.context,ut=a.contextType;x=Fs,typeof ut=="object"&&ut!==null&&(x=Rn(ut));var pt=a.getDerivedStateFromProps;ut=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==x)&&_0(n,f,r,x),ba=!1;var $=n.memoizedState;f.state=$,io(n,r,f,c),no(),Q=n.memoizedState,E||$!==Q||ba?(typeof pt=="function"&&(Xu(n,a,pt,r),Q=n.memoizedState),(O=ba||x0(n,a,O,r,$,Q,x))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=x,r=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Su(t,n),x=n.memoizedProps,ut=ps(a,x),f.props=ut,pt=n.pendingProps,$=f.context,Q=a.contextType,O=Fs,typeof Q=="object"&&Q!==null&&(O=Rn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==pt||$!==O)&&_0(n,f,r,O),ba=!1,$=n.memoizedState,f.state=$,io(n,r,f,c),no();var rt=n.memoizedState;x!==pt||$!==rt||ba||t!==null&&t.dependencies!==null&&ll(t.dependencies)?(typeof E=="function"&&(Xu(n,a,E,r),rt=n.memoizedState),(ut=ba||x0(n,a,ut,r,$,rt,O)||t!==null&&t.dependencies!==null&&ll(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=O,r=ut):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Rl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=hs(n,t.child,null,c),n.child=hs(n,null,a,c)):Cn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ji(t,n,c),t}function L0(t,n,a,r){return rs(),n.flags|=256,Cn(t,n,a,r),n.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(t){return{baseLanes:t,cachePool:yp()}}function Ku(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function N0(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Te){if(c?Aa(n):Ra(),(t=Ze)?(t=Gm(t,ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:va!==null?{id:Ci,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=hp(t),a.return=n,n.child=a,An=n,Ze=null)):t=null,t===null)throw ya(n);return Nf(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Ra(),c=n.mode,E=Cl({mode:"hidden",children:E},c),r=ss(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=Zu(a),r.childLanes=Ku(t,x,a),n.memoizedState=ju,lo(null,r)):(Aa(n),Qu(n,E))}var O=t.memoizedState;if(O!==null&&(E=O.dehydrated,E!==null)){if(f)n.flags&256?(Aa(n),n.flags&=-257,n=Ju(t,n,a)):n.memoizedState!==null?(Ra(),n.child=t.child,n.flags|=128,n=null):(Ra(),E=r.fallback,c=n.mode,r=Cl({mode:"visible",children:r.children},c),E=ss(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,hs(n,t.child,null,a),r=n.child,r.memoizedState=Zu(a),r.childLanes=Ku(t,x,a),n.memoizedState=ju,n=lo(null,r));else if(Aa(n),Nf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var Q=x.dgst;x=Q,r=Error(s(419)),r.stack="",r.digest=x,Kr({value:r,source:null,stack:null}),n=Ju(t,n,a)}else if(un||Vs(t,n,a,!1),x=(a&t.childLanes)!==0,un||x){if(x=qe,x!==null&&(r=zr(x,a),r!==0&&r!==O.retryLane))throw O.retryLane=r,as(t,r),Xn(x,t,r),qu;Lf(E)||Il(),n=Ju(t,n,a)}else Lf(E)?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,Ze=fi(E.nextSibling),An=n,Te=!0,Sa=null,ci=!1,t!==null&&mp(n,t),n=Qu(n,r.children),n.flags|=4096);return n}return c?(Ra(),E=r.fallback,c=n.mode,O=t.child,Q=O.sibling,r=Vi(O,{mode:"hidden",children:r.children}),r.subtreeFlags=O.subtreeFlags&65011712,Q!==null?E=Vi(Q,E):(E=ss(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,lo(null,r),r=n.child,E=t.child.memoizedState,E===null?E=Zu(a):(c=E.cachePool,c!==null?(O=ln._currentValue,c=c.parent!==O?{parent:O,pool:O}:c):c=yp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Ku(t,x,a),n.memoizedState=ju,lo(t.child,r)):(Aa(n),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Qu(t,n){return n=Cl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Cl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Ju(t,n,a){return hs(n,t.child,null,a),t=Qu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function O0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),du(t.return,n,a)}function $u(t,n,a,r,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function P0(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var x=sn.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,yt(sn,x),Cn(t,n,r,a),r=Te?Zr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&O0(t,a,n);else if(t.tag===19)O0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&xl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),$u(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&xl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}$u(n,!0,a,null,f,r);break;case"together":$u(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Vs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Vi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function tf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ll(t)))}function rv(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),Ma(n,ln,t.memoizedState.cache),rs();break;case 27:case 5:Xt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:Ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?N0(t,n,a):(Aa(n),t=ji(t,n,a),t!==null?t.sibling:null);Aa(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Vs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return P0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(sn,sn.current),r)break;return null;case 22:return n.lanes=0,R0(t,n,a,n.pendingProps);case 24:Ma(n,ln,t.memoizedState.cache)}return ji(t,n,a)}function z0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!tf(t,a)&&(n.flags&128)===0)return un=!1,rv(t,n,a);un=(t.flags&131072)!==0}else un=!1,Te&&(n.flags&1048576)!==0&&pp(n,Zr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=us(n.elementType),n.type=t,typeof t=="function")su(t)?(r=ps(t,r),n.tag=1,n=U0(null,n,t,r,a)):(n.tag=0,n=Yu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===F){n.tag=11,n=E0(null,n,t,r,a);break t}else if(c===I){n.tag=14,n=T0(null,n,t,r,a);break t}}throw n=mt(t)||t,Error(s(306,n,""))}}return n;case 0:return Yu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=ps(r,n.pendingProps),U0(t,n,r,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Su(t,n),io(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Ma(n,ln,r),r!==f.cache&&pu(n,[ln],a,!0),no(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=L0(t,n,r,a);break t}else if(r!==c){c=ri(Error(s(424)),n),Kr(c),n=L0(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=fi(t.firstChild),An=n,Te=!0,Sa=null,ci=!0,a=Rp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(rs(),r===c){n=ji(t,n,a);break t}Cn(t,n,r,a)}n=n.child}return n;case 26:return Rl(t,n),t===null?(a=Ym(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,t=n.pendingProps,r=kl(nt.current).createElement(a),r[on]=n,r[dn]=t,Dn(r,a,t),J(r),n.stateNode=r):n.memoizedState=Ym(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&Te&&(r=n.stateNode=km(n.type,n.pendingProps,nt.current),An=n,ci=!0,c=Ze,Pa(n.type)?(Of=c,Ze=fi(r.firstChild)):Ze=c),Cn(t,n,n.pendingProps.children,a),Rl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Te&&((c=r=Ze)&&(r=zv(r,n.type,n.pendingProps,ci),r!==null?(n.stateNode=r,An=n,Ze=fi(r.firstChild),ci=!1,c=!0):c=!1),c||ya(n)),Xt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,r=f.children,Df(c,f)?r=null:x!==null&&Df(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Ru(t,n,Qg,null,null,a),Eo._currentValue=c),Rl(t,n),Cn(t,n,r,a),n.child;case 6:return t===null&&Te&&((t=a=Ze)&&(a=Iv(a,n.pendingProps,ci),a!==null?(n.stateNode=a,An=n,Ze=null,t=!0):t=!1),t||ya(n)),null;case 13:return N0(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=hs(n,null,r,a):Cn(t,n,r,a),n.child;case 11:return E0(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ma(n,n.type,r.value),Cn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ls(n),c=Rn(c),r=r(c),n.flags|=1,Cn(t,n,r,a),n.child;case 14:return T0(t,n,n.type,n.pendingProps,a);case 15:return A0(t,n,n.type,n.pendingProps,a);case 19:return P0(t,n,a);case 31:return sv(t,n,a);case 22:return R0(t,n,a,n.pendingProps);case 24:return ls(n),r=Rn(ln),t===null?(c=_u(),c===null&&(c=qe,f=mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},vu(n),Ma(n,ln,c)):((t.lanes&a)!==0&&(Su(t,n),io(n,null,null,a),no()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ma(n,ln,r)):(r=f.cache,Ma(n,ln,r),r!==c.cache&&pu(n,[ln],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Zi(t){t.flags|=4}function ef(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(cm())t.flags|=8192;else throw fs=hl,gu}else t.flags&=-16777217}function I0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Jm(n))if(cm())t.flags|=8192;else throw fs=hl,gu}function Dl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Fe():536870912,t.lanes|=n,tr|=n)}function co(t,n){if(!Te)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function ov(t,n,a){var r=n.pendingProps;switch(cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Wi(ln),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Gs(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fu())),Ke(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Zi(n),f!==null?(Ke(n),I0(n,f)):(Ke(n),ef(n,c,null,r,a))):f?f!==t.memoizedState?(Zi(n),Ke(n),I0(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Zi(n),Ke(n),ef(n,c,t,r,a)),null;case 27:if(ce(n),a=nt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}t=Et.current,Gs(n)?xp(n):(t=km(c,r,a),n.stateNode=t,Zi(n))}return Ke(n),null;case 5:if(ce(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=Et.current,Gs(n))xp(n);else{var x=kl(nt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}f[on]=n,f[dn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Dn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Zi(n)}}return Ke(n),ef(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=nt.current,Gs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=An,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Nm(t.nodeValue,a)),t||ya(n,!0)}else t=kl(t).createTextNode(r),t[on]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Gs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[on]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Gs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[on]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),Ke(n),null);case 4:return Bt(),t===null&&Ef(n.stateNode.containerInfo),Ke(n),null;case 10:return Wi(n.type),Ke(n),null;case 19:if(at(sn),r=n.memoizedState,r===null)return Ke(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)co(r,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=xl(t),f!==null){for(n.flags|=128,co(r,!1),t=f.updateQueue,n.updateQueue=t,Dl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)fp(a,t),a=a.sibling;return yt(sn,sn.current&1|2),Te&&Xi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&b()>Ol&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304)}else{if(!c)if(t=xl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Dl(n,t),co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Te)return Ke(n),null}else 2*b()-r.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=b(),t.sibling=null,a=sn.current,yt(sn,c?a&1|2:a&1),Te&&Xi(n,r.treeForkCount),t):(Ke(n),null);case 22:case 23:return Jn(n),Eu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&at(cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(ln),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function lv(t,n){switch(cu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wi(ln),Bt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return at(sn),null;case 4:return Bt(),null;case 10:return Wi(n.type),null;case 22:case 23:return Jn(n),Eu(),t!==null&&at(cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wi(ln),null;case 25:return null;default:return null}}function F0(t,n){switch(cu(n),n.tag){case 3:Wi(ln),Bt();break;case 26:case 27:case 5:ce(n);break;case 4:Bt();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:at(sn);break;case 10:Wi(n.type);break;case 22:case 23:Jn(n),Eu(),t!==null&&at(cs);break;case 24:Wi(ln)}}function uo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(E){Ie(n,n.return,E)}}function Ca(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var x=r.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var O=a,Q=E;try{Q()}catch(ut){Ie(c,O,ut)}}}r=r.next}while(r!==f)}}catch(ut){Ie(n,n.return,ut)}}function B0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Dp(n,a)}catch(r){Ie(t,t.return,r)}}}function H0(t,n,a){a.props=ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ie(t,n,r)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Ie(t,n,c)}}function wi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function G0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function nf(t,n,a){try{var r=t.stateNode;wv(r,t.type,a,n),r[dn]=n}catch(c){Ie(t,t.return,c)}}function V0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pa(t.type)||t.tag===4}function af(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||V0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(r!==4&&(r===27&&Pa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(sf(t,n,a),t=t.sibling;t!==null;)sf(t,n,a),t=t.sibling}function wl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Pa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(wl(t,n,a),t=t.sibling;t!==null;)wl(t,n,a),t=t.sibling}function X0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Dn(n,r,a),n[on]=t,n[dn]=a}catch(f){Ie(t,t.return,f)}}var Ki=!1,fn=!1,rf=!1,k0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function cv(t,n){if(t=t.containerInfo,Rf=Ql,t=np(t),Jc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,O=-1,Q=0,ut=0,pt=t,$=null;e:for(;;){for(var rt;pt!==a||c!==0&&pt.nodeType!==3||(E=x+c),pt!==f||r!==0&&pt.nodeType!==3||(O=x+r),pt.nodeType===3&&(x+=pt.nodeValue.length),(rt=pt.firstChild)!==null;)$=pt,pt=rt;for(;;){if(pt===t)break e;if($===a&&++Q===c&&(E=x),$===f&&++ut===r&&(O=x),(rt=pt.nextSibling)!==null)break;pt=$,$=pt.parentNode}pt=rt}a=E===-1||O===-1?null:{start:E,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:t,selectionRange:a},Ql=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ft=ps(a.type,c);t=r.getSnapshotBeforeUpdate(Ft,f),r.__reactInternalSnapshotBeforeUpdate=t}catch($t){Ie(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Uf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Uf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function W0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),r&4&&uo(5,a);break;case 1:if(Ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ie(a,a.return,x)}else{var c=ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(a,a.return,x)}}r&64&&B0(a),r&512&&fo(a,a.return);break;case 3:if(Ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dp(t,n)}catch(x){Ie(a,a.return,x)}}break;case 27:n===null&&r&4&&X0(a);case 26:case 5:Ji(t,a),n===null&&r&4&&G0(a),r&512&&fo(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),r&4&&j0(t,a);break;case 13:Ji(t,a),r&4&&Z0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=gv.bind(null,a),Fv(t,a))));break;case 22:if(r=a.memoizedState!==null||Ki,!r){n=n!==null&&n.memoizedState!==null||fn,c=Ki;var f=fn;Ki=r,(fn=n)&&!f?$i(t,a,(a.subtreeFlags&8772)!==0):Ji(t,a),Ki=c,fn=f}break;case 30:break;default:Ji(t,a)}}function q0(t){var n=t.alternate;n!==null&&(t.alternate=null,q0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Br(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Bn=!1;function Qi(t,n,a){for(a=a.child;a!==null;)Y0(t,n,a),a=a.sibling}function Y0(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:fn||wi(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||wi(a,n);var r=Qe,c=Bn;Pa(a.type)&&(Qe=a.stateNode,Bn=!1),Qi(t,n,a),yo(a.stateNode),Qe=r,Bn=c;break;case 5:fn||wi(a,n);case 6:if(r=Qe,c=Bn,Qe=null,Qi(t,n,a),Qe=r,Bn=c,Qe!==null)if(Bn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Qe!==null&&(Bn?(t=Qe,Bm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),lr(t)):Bm(Qe,a.stateNode));break;case 4:r=Qe,c=Bn,Qe=a.stateNode.containerInfo,Bn=!0,Qi(t,n,a),Qe=r,Bn=c;break;case 0:case 11:case 14:case 15:Ca(2,a,n),fn||Ca(4,a,n),Qi(t,n,a);break;case 1:fn||(wi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&H0(a,n,r)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,Qi(t,n,a),fn=r;break;default:Qi(t,n,a)}}function j0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{lr(t)}catch(a){Ie(n,n.return,a)}}}function Z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{lr(t)}catch(a){Ie(n,n.return,a)}}function uv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new k0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new k0),n;default:throw Error(s(435,t.tag))}}function Ul(t,n){var a=uv(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=vv.bind(null,t,r);r.then(c,c)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(Pa(E.type)){Qe=E.stateNode,Bn=!1;break t}break;case 5:Qe=E.stateNode,Bn=!1;break t;case 3:case 4:Qe=E.stateNode.containerInfo,Bn=!0;break t}E=E.return}if(Qe===null)throw Error(s(160));Y0(f,x,c),Qe=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)K0(n,t),n=n.sibling}var vi=null;function K0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),r&4&&(Ca(3,t,t.return),uo(3,t),Ca(5,t,t.return));break;case 1:Hn(n,t),Gn(t),r&512&&(fn||a===null||wi(a,a.return)),r&64&&Ki&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=vi;if(Hn(n,t),Gn(t),r&512&&(fn||a===null||wi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ts]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Dn(f,r,a),f[on]=t,J(f),r=f;break t;case"link":var x=Km("link","href",c).get(r+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(r),Dn(f,r,a),c.head.appendChild(f);break;case"meta":if(x=Km("meta","content",c).get(r+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(r),Dn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=t,J(f),r=f}t.stateNode=r}else Qm(c,t.type,t.stateNode);else t.stateNode=Zm(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Qm(c,t.type,t.stateNode):Zm(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),r&512&&(fn||a===null||wi(a,a.return)),a!==null&&r&4&&nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),r&512&&(fn||a===null||wi(a,a.return)),t.flags&32){c=t.stateNode;try{Ri(c,"")}catch(Ft){Ie(t,t.return,Ft)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,nf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(rf=!0);break;case 6:if(Hn(n,t),Gn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ft){Ie(t,t.return,Ft)}}break;case 3:if(Yl=null,c=vi,vi=Wl(n.containerInfo),Hn(n,t),vi=c,Gn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{lr(n.containerInfo)}catch(Ft){Ie(t,t.return,Ft)}rf&&(rf=!1,Q0(t));break;case 4:r=vi,vi=Wl(t.stateNode.containerInfo),Hn(n,t),Gn(t),vi=r;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ul(t,r)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nl=b()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ul(t,r)));break;case 22:c=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,Q=Ki,ut=fn;if(Ki=Q||c,fn=ut||O,Hn(n,t),fn=ut,Ki=Q,Gn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||Ki||fn||ms(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=O.stateNode;var pt=O.memoizedProps.style,$=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Ft){Ie(O,O.return,Ft)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(Ft){Ie(O,O.return,Ft)}}}else if(n.tag===18){if(a===null){O=n;try{var rt=O.stateNode;c?Hm(rt,!0):Hm(O.stateNode,!1)}catch(Ft){Ie(O,O.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ul(t,a))));break;case 19:Hn(n,t),Gn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ul(t,r)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(V0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=af(t);wl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ri(x,""),a.flags&=-33);var E=af(t);wl(t,E,x);break;case 3:case 4:var O=a.stateNode.containerInfo,Q=af(t);sf(t,Q,O);break;default:throw Error(s(161))}}catch(ut){Ie(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Q0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)W0(t,n.alternate,n),n=n.sibling}function ms(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ca(4,n,n.return),ms(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&H0(n,n.return,a),ms(n);break;case 27:yo(n.stateNode);case 26:case 5:wi(n,n.return),ms(n);break;case 22:n.memoizedState===null&&ms(n);break;case 30:ms(n);break;default:ms(n)}t=t.sibling}}function $i(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:$i(c,f,a),uo(4,f);break;case 1:if($i(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ie(r,r.return,Q)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)Cp(O[c],E)}catch(Q){Ie(r,r.return,Q)}}a&&x&64&&B0(f),fo(f,f.return);break;case 27:X0(f);case 26:case 5:$i(c,f,a),a&&r===null&&x&4&&G0(f),fo(f,f.return);break;case 12:$i(c,f,a);break;case 31:$i(c,f,a),a&&x&4&&j0(c,f);break;case 13:$i(c,f,a),a&&x&4&&Z0(c,f);break;case 22:f.memoizedState===null&&$i(c,f,a),fo(f,f.return);break;case 30:break;default:$i(c,f,a)}n=n.sibling}}function of(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qr(a))}function lf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qr(t))}function Si(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)J0(t,n,a,r),n=n.sibling}function J0(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,r),c&2048&&uo(9,n);break;case 1:Si(t,n,a,r);break;case 3:Si(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qr(t)));break;case 12:if(c&2048){Si(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Ie(n,n.return,O)}}else Si(t,n,a,r);break;case 31:Si(t,n,a,r);break;case 13:Si(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,r):ho(t,n):f._visibility&2?Si(t,n,a,r):(f._visibility|=2,Qs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&of(x,n);break;case 24:Si(t,n,a,r),c&2048&&lf(n.alternate,n);break;default:Si(t,n,a,r)}}function Qs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,E=a,O=r,Q=x.flags;switch(x.tag){case 0:case 11:case 15:Qs(f,x,E,O,c),uo(8,x);break;case 23:break;case 22:var ut=x.stateNode;x.memoizedState!==null?ut._visibility&2?Qs(f,x,E,O,c):ho(f,x):(ut._visibility|=2,Qs(f,x,E,O,c)),c&&Q&2048&&of(x.alternate,x);break;case 24:Qs(f,x,E,O,c),c&&Q&2048&&lf(x.alternate,x);break;default:Qs(f,x,E,O,c)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:ho(a,r),c&2048&&of(r.alternate,r);break;case 24:ho(a,r),c&2048&&lf(r.alternate,r);break;default:ho(a,r)}n=n.sibling}}var po=8192;function Js(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)$0(t,n,a),t=t.sibling}function $0(t,n,a){switch(t.tag){case 26:Js(t,n,a),t.flags&po&&t.memoizedState!==null&&Kv(a,vi,t.memoizedState,t.memoizedProps);break;case 5:Js(t,n,a);break;case 3:case 4:var r=vi;vi=Wl(t.stateNode.containerInfo),Js(t,n,a),vi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=po,po=16777216,Js(t,n,a),po=r):Js(t,n,a));break;default:Js(t,n,a)}}function tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,nm(r,t)}tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(t),t=t.sibling}function em(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&Ca(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ll(t)):mo(t);break;default:mo(t)}}function Ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,nm(r,t)}tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ca(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}t=t.sibling}}function nm(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Mn=r;else t:for(a=t;Mn!==null;){r=Mn;var c=r.sibling,f=r.return;if(q0(r),r===a){Mn=null;break t}if(c!==null){c.return=f,Mn=c;break t}Mn=f}}}var fv={getCacheForType:function(t){var n=Rn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(ln).controller.signal}},hv=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,_e=null,Se=0,ze=0,$n=null,Da=!1,$s=!1,cf=!1,ta=0,$e=0,wa=0,xs=0,uf=0,ti=0,tr=0,xo=null,Vn=null,ff=!1,Nl=0,im=0,Ol=1/0,Pl=null,Ua=null,mn=0,La=null,er=null,ea=0,hf=0,df=null,am=null,_o=0,pf=null;function ei(){return(Ne&2)!==0&&Se!==0?Se&-Se:P.T!==null?Sf():Ir()}function sm(){if(ti===0)if((Se&536870912)===0||Te){var t=At;At<<=1,(At&3932160)===0&&(At=262144),ti=t}else ti=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ti}function Xn(t,n,a){(t===qe&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(nr(t,0),Na(t,Se,ti,!1)),Un(t,a),((Ne&2)===0||t!==qe)&&(t===qe&&((Ne&2)===0&&(xs|=a),$e===4&&Na(t,Se,ti,!1)),Ui(t))}function rm(t,n,a){if((Ne&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||zt(t,n),c=r?mv(t,n):xf(t,n,!0),f=r;do{if(c===0){$s&&!r&&Na(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!dv(a)){c=xf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=t;c=xo;var O=E.current.memoizedState.isDehydrated;if(O&&(nr(E,x).flags|=256),x=xf(E,x,!1),x!==2){if(cf&&!O){E.errorRecoveryDisabledLanes|=f,xs|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){nr(t,0),Na(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Na(r,n,ti,!Da);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Nl+300-b(),10<c)){if(Na(r,n,ti,!Da),xt(r,0,!0)!==0)break t;ea=n,r.timeoutHandle=Im(om.bind(null,r,a,Vn,Pl,ff,n,ti,xs,tr,Da,f,"Throttled",-0,0),c);break t}om(r,a,Vn,Pl,ff,n,ti,xs,tr,Da,f,null,-0,0)}}break}while(!0);Ui(t)}function om(t,n,a,r,c,f,x,E,O,Q,ut,pt,$,rt){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},$0(n,f,pt);var Ft=(f&62914560)===f?Nl-b():(f&4194048)===f?im-b():0;if(Ft=Qv(pt,Ft),Ft!==null){ea=f,t.cancelPendingCommit=Ft(mm.bind(null,t,n,f,a,r,c,x,E,O,ut,pt,null,$,rt)),Na(t,f,x,!Q);return}}mm(t,n,f,a,r,c,x,E,O)}function dv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(t,n,a,r){n&=~uf,n&=~xs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Gt(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&Yo(t,a,n)}function zl(){return(Ne&6)===0?(go(0),!1):!0}function mf(){if(_e!==null){if(ze===0)var t=_e.return;else t=_e,ki=os=null,wu(t),qs=null,$r=0,t=_e;for(;t!==null;)F0(t.alternate,t),t=t.return;_e=null}}function nr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Nv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,mf(),qe=t,_e=a=Vi(t.current,null),Se=n,ze=0,$n=null,Da=!1,$s=zt(t,n),cf=!1,tr=ti=uf=xs=wa=$e=0,Vn=xo=null,ff=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Gt(r),f=1<<c;n|=t[c],r&=~f}return ta=n,il(),a}function lm(t,n){le=null,P.H=oo,n===Ws||n===fl?(n=Ep(),ze=3):n===gu?(n=Ep(),ze=4):ze=n===qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,_e===null&&($e=1,Tl(t,ri(n,t.current)))}function cm(){var t=Qn.current;return t===null?!0:(Se&4194048)===Se?ui===null:(Se&62914560)===Se||(Se&536870912)!==0?t===ui:!1}function um(){var t=P.H;return P.H=oo,t===null?oo:t}function fm(){var t=P.A;return P.A=fv,t}function Il(){$e=4,Da||(Se&4194048)!==Se&&Qn.current!==null||($s=!0),(wa&134217727)===0&&(xs&134217727)===0||qe===null||Na(qe,Se,ti,!1)}function xf(t,n,a){var r=Ne;Ne|=2;var c=um(),f=fm();(qe!==t||Se!==n)&&(Pl=null,nr(t,n)),n=!1;var x=$e;t:do try{if(ze!==0&&_e!==null){var E=_e,O=$n;switch(ze){case 8:mf(),x=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var Q=ze;if(ze=0,$n=null,ir(t,E,O,Q),a&&$s){x=0;break t}break;default:Q=ze,ze=0,$n=null,ir(t,E,O,Q)}}pv(),x=$e;break}catch(ut){lm(t,ut)}while(!0);return n&&t.shellSuspendCounter++,ki=os=null,Ne=r,P.H=c,P.A=f,_e===null&&(qe=null,Se=0,il()),x}function pv(){for(;_e!==null;)hm(_e)}function mv(t,n){var a=Ne;Ne|=2;var r=um(),c=fm();qe!==t||Se!==n?(Pl=null,Ol=b()+500,nr(t,n)):$s=zt(t,n);t:do try{if(ze!==0&&_e!==null){n=_e;var f=$n;e:switch(ze){case 1:ze=0,$n=null,ir(t,n,f,1);break;case 2:case 9:if(Mp(f)){ze=0,$n=null,dm(n);break}n=function(){ze!==2&&ze!==9||qe!==t||(ze=7),Ui(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Mp(f)?(ze=0,$n=null,dm(n)):(ze=0,$n=null,ir(t,n,f,7));break;case 5:var x=null;switch(_e.tag){case 26:x=_e.memoizedState;case 5:case 27:var E=_e;if(x?Jm(x):E.stateNode.complete){ze=0,$n=null;var O=E.sibling;if(O!==null)_e=O;else{var Q=E.return;Q!==null?(_e=Q,Fl(Q)):_e=null}break e}}ze=0,$n=null,ir(t,n,f,5);break;case 6:ze=0,$n=null,ir(t,n,f,6);break;case 8:mf(),$e=6;break t;default:throw Error(s(462))}}xv();break}catch(ut){lm(t,ut)}while(!0);return ki=os=null,P.H=r,P.A=c,Ne=a,_e!==null?0:(qe=null,Se=0,il(),$e)}function xv(){for(;_e!==null&&!ae();)hm(_e)}function hm(t){var n=z0(t.alternate,t,ta);t.memoizedProps=t.pendingProps,n===null?Fl(t):_e=n}function dm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=w0(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=w0(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:wu(n);default:F0(a,n),n=_e=fp(n,ta),n=z0(a,n,ta)}t.memoizedProps=t.pendingProps,n===null?Fl(t):_e=n}function ir(t,n,a,r){ki=os=null,wu(n),qs=null,$r=0;var c=n.return;try{if(av(t,c,n,a,Se)){$e=1,Tl(t,ri(a,t.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;$e=1,Tl(t,ri(a,t.current)),_e=null;return}n.flags&32768?(Te||r===1?t=!0:$s||(Se&536870912)!==0?t=!1:(Da=t=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),pm(n,t)):Fl(n)}function Fl(t){var n=t;do{if((n.flags&32768)!==0){pm(n,Da);return}t=n.return;var a=ov(n.alternate,n,ta);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=t}while(n!==null);$e===0&&($e=5)}function pm(t,n){do{var a=lv(t.alternate,t);if(a!==null){a.flags&=32767,_e=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_e=t;return}_e=t=a}while(t!==null);$e=6,_e=null}function mm(t,n,a,r,c,f,x,E,O){t.cancelPendingCommit=null;do Bl();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=iu,Yn(t,a,f,x,E,O),t===qe&&(_e=qe=null,Se=0),er=n,La=t,ea=a,hf=f,df=c,am=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sv(ot,function(){return Sm(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,c=j.p,j.p=2,x=Ne,Ne|=4;try{cv(t,n,a)}finally{Ne=x,j.p=c,P.T=r}}mn=1,xm(),_m(),gm()}}function xm(){if(mn===1){mn=0;var t=La,n=er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=j.p;j.p=2;var c=Ne;Ne|=4;try{K0(n,t);var f=Cf,x=np(t.containerInfo),E=f.focusedElem,O=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&ep(E.ownerDocument.documentElement,E)){if(O!==null&&Jc(E)){var Q=O.start,ut=O.end;if(ut===void 0&&(ut=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ut,E.value.length);else{var pt=E.ownerDocument||document,$=pt&&pt.defaultView||window;if($.getSelection){var rt=$.getSelection(),Ft=E.textContent.length,$t=Math.min(O.start,Ft),Ge=O.end===void 0?$t:Math.min(O.end,Ft);!rt.extend&&$t>Ge&&(x=Ge,Ge=$t,$t=x);var W=tp(E,$t),V=tp(E,Ge);if(W&&V&&(rt.rangeCount!==1||rt.anchorNode!==W.node||rt.anchorOffset!==W.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var Z=pt.createRange();Z.setStart(W.node,W.offset),rt.removeAllRanges(),$t>Ge?(rt.addRange(Z),rt.extend(V.node,V.offset)):(Z.setEnd(V.node,V.offset),rt.addRange(Z))}}}}for(pt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&pt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var ht=pt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Ql=!!Rf,Cf=Rf=null}finally{Ne=c,j.p=r,P.T=a}}t.current=n,mn=2}}function _m(){if(mn===2){mn=0;var t=La,n=er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=j.p;j.p=2;var c=Ne;Ne|=4;try{W0(t,n.alternate,n)}finally{Ne=c,j.p=r,P.T=a}}mn=3}}function gm(){if(mn===4||mn===3){mn=0,w();var t=La,n=er,a=ea,r=am;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,er=La=null,vm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ua=null),$a(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,c=j.p,j.p=2,P.T=null;try{for(var f=t.onRecoverableError,x=0;x<r.length;x++){var E=r[x];f(E.value,{componentStack:E.stack})}}finally{P.T=n,j.p=c}}(ea&3)!==0&&Bl(),Ui(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===pf?_o++:(_o=0,pf=t):_o=0,go(0)}}function vm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qr(n)))}function Bl(){return xm(),_m(),gm(),Sm()}function Sm(){if(mn!==5)return!1;var t=La,n=hf;hf=0;var a=$a(ea),r=P.T,c=j.p;try{j.p=32>a?32:a,P.T=null,a=df,df=null;var f=La,x=ea;if(mn=0,er=La=null,ea=0,(Ne&6)!==0)throw Error(s(331));var E=Ne;if(Ne|=4,em(f.current),J0(f,f.current,x,a),Ne=E,go(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(St,f)}catch{}return!0}finally{j.p=c,P.T=r,vm(t,n)}}function ym(t,n,a){n=ri(a,n),n=Wu(t.stateNode,n,2),t=Ta(t,n,2),t!==null&&(Un(t,2),Ui(t))}function Ie(t,n,a){if(t.tag===3)ym(t,t,a);else for(;n!==null;){if(n.tag===3){ym(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ua===null||!Ua.has(r))){t=ri(a,t),a=M0(2),r=Ta(n,a,2),r!==null&&(b0(a,r,n,t),Un(r,2),Ui(r));break}}n=n.return}}function _f(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new hv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(cf=!0,c.add(a),t=_v.bind(null,t,n,a),n.then(t,t))}function _v(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Se&a)===a&&($e===4||$e===3&&(Se&62914560)===Se&&300>b()-Nl?(Ne&2)===0&&nr(t,0):uf|=a,tr===Se&&(tr=0)),Ui(t)}function Mm(t,n){n===0&&(n=Fe()),t=as(t,n),t!==null&&(Un(t,n),Ui(t))}function gv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Mm(t,a)}function vv(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Mm(t,a)}function Sv(t,n){return ke(t,n)}var Hl=null,ar=null,gf=!1,Gl=!1,vf=!1,Oa=0;function Ui(t){t!==ar&&t.next===null&&(ar===null?Hl=ar=t:ar=ar.next=t),Gl=!0,gf||(gf=!0,Mv())}function go(t,n){if(!vf&&Gl){vf=!0;do for(var a=!1,r=Hl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Gt(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Am(r,f))}else f=Se,f=xt(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||zt(r,f)||(a=!0,Am(r,f));r=r.next}while(a);vf=!1}}function yv(){bm()}function bm(){Gl=gf=!1;var t=0;Oa!==0&&Lv()&&(t=Oa);for(var n=b(),a=null,r=Hl;r!==null;){var c=r.next,f=Em(r,n);f===0?(r.next=null,a===null?Hl=c:a.next=c,c===null&&(ar=a)):(a=r,(t!==0||(f&3)!==0)&&(Gl=!0)),r=c}mn!==0&&mn!==5||go(t),Oa!==0&&(Oa=0)}function Em(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Gt(f),E=1<<x,O=c[x];O===-1?((E&a)===0||(E&r)!==0)&&(c[x]=ie(E,n)):O<=n&&(t.expiredLanes|=E),f&=~E}if(n=qe,a=Se,a=xt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Yt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||zt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Yt(r),$a(a)){case 2:case 8:a=vt;break;case 32:a=ot;break;case 268435456:a=Ut;break;default:a=ot}return r=Tm.bind(null,t),a=ke(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Yt(r),t.callbackPriority=2,t.callbackNode=null,2}function Tm(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bl()&&t.callbackNode!==a)return null;var r=Se;return r=xt(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(rm(t,r,n),Em(t,b()),t.callbackNode!=null&&t.callbackNode===a?Tm.bind(null,t):null)}function Am(t,n){if(Bl())return null;rm(t,n,!0)}function Mv(){Ov(function(){(Ne&6)!==0?ke(dt,yv):bm()})}function Sf(){if(Oa===0){var t=Xs;t===0&&(t=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Oa=t}return Oa}function Rm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zo(""+t)}function Cm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function bv(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Rm((c[dn]||null).action),x=r.submitter;x&&(n=(n=x[dn]||null)?Rm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new $o("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Oa!==0){var O=x?Cm(c,x):new FormData(c);Bu(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(E.preventDefault(),O=x?Cm(c,x):new FormData(c),Bu(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var yf=0;yf<nu.length;yf++){var Mf=nu[yf],Ev=Mf.toLowerCase(),Tv=Mf[0].toUpperCase()+Mf.slice(1);gi(Ev,"on"+Tv)}gi(sp,"onAnimationEnd"),gi(rp,"onAnimationIteration"),gi(op,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(Gg,"onTransitionRun"),gi(Vg,"onTransitionStart"),gi(Xg,"onTransitionCancel"),gi(lp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Av=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Dm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var E=r[x],O=E.instance,Q=E.currentTarget;if(E=E.listener,O!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){nl(ut)}c.currentTarget=null,f=O}else for(x=0;x<r.length;x++){if(E=r[x],O=E.instance,Q=E.currentTarget,E=E.listener,O!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){nl(ut)}c.currentTarget=null,f=O}}}}function ge(t,n){var a=n[Us];a===void 0&&(a=n[Us]=new Set);var r=t+"__bubble";a.has(r)||(wm(n,t,2,!1),a.add(r))}function bf(t,n,a){var r=0;n&&(r|=4),wm(a,t,r,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Ef(t){if(!t[Vl]){t[Vl]=!0,q.forEach(function(a){a!=="selectionchange"&&(Av.has(a)||bf(a,!1,t),bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,bf("selectionchange",!1,n))}}function wm(t,n,a,r){switch(sx(n)){case 2:var c=tS;break;case 8:c=eS;break;default:c=Bf}a=c.bind(null,n,a,t),c=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Tf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var E=r.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=r.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=xa(E),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){r=f=x;continue t}E=E.parentNode}}r=r.return}Pd(function(){var Q=f,ut=Gc(a),pt=[];t:{var $=cp.get(t);if($!==void 0){var rt=$o,Ft=t;switch(t){case"keypress":if(Qo(a)===0)break t;case"keydown":case"keyup":rt=vg;break;case"focusin":Ft="focus",rt=Yc;break;case"focusout":Ft="blur",rt=Yc;break;case"beforeblur":case"afterblur":rt=Yc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Mg;break;case sp:case rp:case op:rt=ug;break;case lp:rt=Eg;break;case"scroll":case"scrollend":rt=sg;break;case"wheel":rt=Ag;break;case"copy":case"cut":case"paste":rt=hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Hd;break;case"toggle":case"beforetoggle":rt=Cg}var $t=(n&4)!==0,Ge=!$t&&(t==="scroll"||t==="scrollend"),W=$t?$!==null?$+"Capture":null:$;$t=[];for(var V=Q,Z;V!==null;){var ht=V;if(Z=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Z===null||W===null||(ht=Hr(V,W),ht!=null&&$t.push(So(V,ht,Z))),Ge)break;V=V.return}0<$t.length&&($=new rt($,Ft,null,a,ut),pt.push({event:$,listeners:$t}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",$&&a!==Hc&&(Ft=a.relatedTarget||a.fromElement)&&(xa(Ft)||Ft[Ii]))break t;if((rt||$)&&($=ut.window===ut?ut:($=ut.ownerDocument)?$.defaultView||$.parentWindow:window,rt?(Ft=a.relatedTarget||a.toElement,rt=Q,Ft=Ft?xa(Ft):null,Ft!==null&&(Ge=u(Ft),$t=Ft.tag,Ft!==Ge||$t!==5&&$t!==27&&$t!==6)&&(Ft=null)):(rt=null,Ft=Q),rt!==Ft)){if($t=Fd,ht="onMouseLeave",W="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($t=Hd,ht="onPointerLeave",W="onPointerEnter",V="pointer"),Ge=rt==null?$:k(rt),Z=Ft==null?$:k(Ft),$=new $t(ht,V+"leave",rt,a,ut),$.target=Ge,$.relatedTarget=Z,ht=null,xa(ut)===Q&&($t=new $t(W,V+"enter",Ft,a,ut),$t.target=Z,$t.relatedTarget=Ge,ht=$t),Ge=ht,rt&&Ft)e:{for($t=Rv,W=rt,V=Ft,Z=0,ht=W;ht;ht=$t(ht))Z++;ht=0;for(var Zt=V;Zt;Zt=$t(Zt))ht++;for(;0<Z-ht;)W=$t(W),Z--;for(;0<ht-Z;)V=$t(V),ht--;for(;Z--;){if(W===V||V!==null&&W===V.alternate){$t=W;break e}W=$t(W),V=$t(V)}$t=null}else $t=null;rt!==null&&Um(pt,$,rt,$t,!1),Ft!==null&&Ge!==null&&Um(pt,Ge,Ft,$t,!0)}}t:{if($=Q?k(Q):window,rt=$.nodeName&&$.nodeName.toLowerCase(),rt==="select"||rt==="input"&&$.type==="file")var we=jd;else if(qd($))if(Zd)we=Fg;else{we=zg;var Vt=Pg}else rt=$.nodeName,!rt||rt.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Bc(Q.elementType)&&(we=jd):we=Ig;if(we&&(we=we(t,Q))){Yd(pt,we,a,ut);break t}Vt&&Vt(t,$,Q),t==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&Sn($,"number",$.value)}switch(Vt=Q?k(Q):window,t){case"focusin":(qd(Vt)||Vt.contentEditable==="true")&&(Ps=Vt,$c=Q,jr=null);break;case"focusout":jr=$c=Ps=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,ip(pt,a,ut);break;case"selectionchange":if(Hg)break;case"keydown":case"keyup":ip(pt,a,ut)}var fe;if(Zc)t:{switch(t){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Os?kd(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Gd&&a.locale!=="ko"&&(Os||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Os&&(fe=zd()):(ga=ut,kc="value"in ga?ga.value:ga.textContent,Os=!0)),Vt=Xl(Q,ye),0<Vt.length&&(ye=new Bd(ye,t,null,a,ut),pt.push({event:ye,listeners:Vt}),fe?ye.data=fe:(fe=Wd(a),fe!==null&&(ye.data=fe)))),(fe=wg?Ug(t,a):Lg(t,a))&&(ye=Xl(Q,"onBeforeInput"),0<ye.length&&(Vt=new Bd("onBeforeInput","beforeinput",null,a,ut),pt.push({event:Vt,listeners:ye}),Vt.data=fe)),bv(pt,t,Q,a,ut)}Dm(pt,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Xl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hr(t,a),c!=null&&r.unshift(So(t,c,f)),c=Hr(t,n),c!=null&&r.push(So(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Rv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Um(t,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var E=a,O=E.alternate,Q=E.stateNode;if(E=E.tag,O!==null&&O===r)break;E!==5&&E!==26&&E!==27||Q===null||(O=Q,c?(Q=Hr(a,f),Q!=null&&x.unshift(So(a,Q,O))):c||(Q=Hr(a,f),Q!=null&&x.push(So(a,Q,O)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Cv=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function Lm(t){return(typeof t=="string"?t:""+t).replace(Cv,`
`).replace(Dv,"")}function Nm(t,n){return n=Lm(n),Lm(t)===n}function He(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ri(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ri(t,""+r);break;case"className":Ae(t,"class",r);break;case"tabIndex":Ae(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(t,a,r);break;case"style":Nd(t,r,f);break;case"data":if(n!=="object"){Ae(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Zo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Zo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Hi);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Zo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ue(t,"popover",r);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ue(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ig.get(a)||a,ue(t,a,r))}}function Af(t,n,a,r,c,f){switch(a){case"style":Nd(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Ri(t,r):(typeof r=="number"||typeof r=="bigint")&&Ri(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ue(t,a,r)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,f,x,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),r&&He(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var E=f=x=c=null,O=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":x=ut;break;case"checked":O=ut;break;case"defaultChecked":Q=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:He(t,n,r,ut,a,null)}}je(t,f,E,O,Q,x,c,!1);return;case"select":ge("invalid",t),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":r=E;default:He(t,n,c,E,a,null)}n=f,a=x,t.multiple=!!r,n!=null?pn(t,!!r,n,!1):a!=null&&pn(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:He(t,n,x,E,a,null)}Tn(t,r,c,f);return;case"option":for(O in a)a.hasOwnProperty(O)&&(r=a[O],r!=null)&&(O==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":He(t,n,O,r,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<vo.length;r++)ge(vo[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,Q,r,a,null)}return;default:if(Bc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&Af(t,n,ut,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&He(t,n,E,r,a,null))}function wv(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,O=null,Q=null,ut=null;for(rt in a){var pt=a[rt];if(a.hasOwnProperty(rt)&&pt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":O=pt;default:r.hasOwnProperty(rt)||He(t,n,rt,null,r,pt)}}for(var $ in r){var rt=r[$];if(pt=a[$],r.hasOwnProperty($)&&(rt!=null||pt!=null))switch($){case"type":f=rt;break;case"name":c=rt;break;case"checked":Q=rt;break;case"defaultChecked":ut=rt;break;case"value":x=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==pt&&He(t,n,$,rt,r,pt)}}Fi(t,x,E,O,Q,ut,f,c);return;case"select":rt=x=E=$=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":rt=O;default:r.hasOwnProperty(f)||He(t,n,f,null,r,O)}for(c in r)if(f=r[c],O=a[c],r.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==O&&He(t,n,c,f,r,O)}n=E,a=x,r=rt,$!=null?pn(t,!!a,$,!1):!!r!=!!a&&(n!=null?pn(t,!!a,n,!0):pn(t,!!a,a?[]:"",!1));return;case"textarea":rt=$=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:He(t,n,E,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":$=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&He(t,n,x,c,r,f)}yn(t,$,rt);return;case"option":for(var Ft in a)$=a[Ft],a.hasOwnProperty(Ft)&&$!=null&&!r.hasOwnProperty(Ft)&&(Ft==="selected"?t.selected=!1:He(t,n,Ft,null,r,$));for(O in r)$=r[O],rt=a[O],r.hasOwnProperty(O)&&$!==rt&&($!=null||rt!=null)&&(O==="selected"?t.selected=$&&typeof $!="function"&&typeof $!="symbol":He(t,n,O,$,r,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)$=a[$t],a.hasOwnProperty($t)&&$!=null&&!r.hasOwnProperty($t)&&He(t,n,$t,null,r,$);for(Q in r)if($=r[Q],rt=a[Q],r.hasOwnProperty(Q)&&$!==rt&&($!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:He(t,n,Q,$,r,rt)}return;default:if(Bc(n)){for(var Ge in a)$=a[Ge],a.hasOwnProperty(Ge)&&$!==void 0&&!r.hasOwnProperty(Ge)&&Af(t,n,Ge,void 0,r,$);for(ut in r)$=r[ut],rt=a[ut],!r.hasOwnProperty(ut)||$===rt||$===void 0&&rt===void 0||Af(t,n,ut,$,r,rt);return}}for(var W in a)$=a[W],a.hasOwnProperty(W)&&$!=null&&!r.hasOwnProperty(W)&&He(t,n,W,null,r,$);for(pt in r)$=r[pt],rt=a[pt],!r.hasOwnProperty(pt)||$===rt||$==null&&rt==null||He(t,n,pt,$,r,rt)}function Om(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Uv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Om(x)){for(x=0,E=c.responseEnd,r+=1;r<a.length;r++){var O=a[r],Q=O.startTime;if(Q>E)break;var ut=O.transferSize,pt=O.initiatorType;ut&&Om(pt)&&(O=O.responseEnd,x+=ut*(O<E?1:(E-Q)/(O-Q)))}if(--r,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Rf=null,Cf=null;function kl(t){return t.nodeType===9?t:t.ownerDocument}function Pm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function Lv(){var t=window.event;return t&&t.type==="popstate"?t===wf?!1:(wf=t,!0):(wf=null,!1)}var Im=typeof setTimeout=="function"?setTimeout:void 0,Nv=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(Pv)}:Im;function Pv(t){setTimeout(function(){throw t})}function Pa(t){return t==="head"}function Bm(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),lr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[ts]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&yo(t.ownerDocument.body);a=c}while(a);lr(n)}function Hm(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Uf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),Br(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function zv(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ts])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function Iv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function Gm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function Lf(t){return t.data==="$?"||t.data==="$~"}function Nf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Fv(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Of=null;function Vm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Xm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function km(t,n,a){switch(n=kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Br(t)}var hi=new Map,Wm=new Set;function Wl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=j.d;j.d={f:Bv,r:Hv,D:Gv,C:Vv,L:Xv,m:kv,X:qv,S:Wv,M:Yv};function Bv(){var t=na.f(),n=zl();return t||n}function Hv(t){var n=T(t);n!==null&&n.tag===5&&n.type==="form"?l0(n):na.r(t)}var sr=typeof document>"u"?null:document;function qm(t,n,a){var r=sr;if(r&&typeof n=="string"&&n){var c=Ye(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Wm.has(c)||(Wm.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Dn(n,"link",t),J(n),r.head.appendChild(n)))}}function Gv(t){na.D(t),qm("dns-prefetch",t,null)}function Vv(t,n){na.C(t,n),qm("preconnect",t,n)}function Xv(t,n,a){na.L(t,n,a);var r=sr;if(r&&t&&n){var c='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ye(a.imageSizes)+'"]')):c+='[href="'+Ye(t)+'"]';var f=c;switch(n){case"style":f=rr(t);break;case"script":f=or(t)}hi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Mo(f))||n==="script"&&r.querySelector(bo(f))||(n=r.createElement("link"),Dn(n,"link",t),J(n),r.head.appendChild(n)))}}function kv(t,n){na.m(t,n);var a=sr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ye(r)+'"][href="'+Ye(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=or(t)}if(!hi.has(f)&&(t=_({rel:"modulepreload",href:t},n),hi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}r=a.createElement("link"),Dn(r,"link",t),J(r),a.head.appendChild(r)}}}function Wv(t,n,a){na.S(t,n,a);var r=sr;if(r&&t){var c=it(r).hoistableStyles,f=rr(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=r.querySelector(Mo(f)))E.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(f))&&Pf(t,a);var O=x=r.createElement("link");J(O),Dn(O,"link",t),O._p=new Promise(function(Q,ut){O.onload=Q,O.onerror=ut}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,ql(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function qv(t,n){na.X(t,n);var a=sr;if(a&&t){var r=it(a).hoistableScripts,c=or(t),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(t=_({src:t,async:!0},n),(n=hi.get(c))&&zf(t,n),f=a.createElement("script"),J(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Yv(t,n){na.M(t,n);var a=sr;if(a&&t){var r=it(a).hoistableScripts,c=or(t),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=hi.get(c))&&zf(t,n),f=a.createElement("script"),J(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Ym(t,n,a,r){var c=(c=nt.current)?Wl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rr(a.href),a=it(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=rr(a.href);var f=it(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(Mo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),f||jv(c,t,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=it(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function rr(t){return'href="'+Ye(t)+'"'}function Mo(t){return'link[rel="stylesheet"]['+t+"]"}function jm(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function jv(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Dn(n,"link",a),J(n),t.head.appendChild(n))}function or(t){return'[src="'+Ye(t)+'"]'}function bo(t){return"script[async]"+t}function Zm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(r)return n.instance=r,J(r),r;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),J(r),Dn(r,"style",c),ql(r,a.precedence,t),n.instance=r;case"stylesheet":c=rr(a.href);var f=t.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,J(f),f;r=jm(a),(c=hi.get(c))&&Pf(r,c),f=(t.ownerDocument||t).createElement("link"),J(f);var x=f;return x._p=new Promise(function(E,O){x.onload=E,x.onerror=O}),Dn(f,"link",r),n.state.loading|=4,ql(f,a.precedence,t),n.instance=f;case"script":return f=or(a.src),(c=t.querySelector(bo(f)))?(n.instance=c,J(c),c):(r=a,(c=hi.get(f))&&(r=_({},a),zf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),J(c),Dn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ql(r,a.precedence,t));return n.instance}function ql(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var E=r[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Yl=null;function Km(t,n,a){if(Yl===null){var r=new Map,c=Yl=new Map;c.set(a,r)}else c=Yl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ts]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=r.get(x);E?E.push(f):r.set(x,[f])}}return r}function Qm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Zv(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Kv(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=rr(r.href),f=n.querySelector(Mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=jl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,J(f);return}f=n.ownerDocument||n,r=jm(r),(c=hi.get(c))&&Pf(r,c),f=f.createElement("link"),J(f);var x=f;x._p=new Promise(function(E,O){x.onload=E,x.onerror=O}),Dn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=jl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var If=0;function Qv(t,n){return t.stylesheets&&t.count===0&&Kl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Kl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&If===0&&(If=62500*Uv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Kl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>If?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Zl=null;function Kl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zl=new Map,n.forEach(Jv,t),Zl=null,jl.call(t))}function Jv(t,n){if(!(n.state.loading&4)){var a=Zl.get(t);if(a)var r=a.get(null);else{a=new Map,Zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=jl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function $v(t,n,a,r,c,f,x,E,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function $m(t,n,a,r,c,f,x,E,O,Q,ut,pt){return t=new $v(t,n,a,x,O,Q,ut,pt,E),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},vu(f),t}function tx(t){return t?(t=Fs,t):Fs}function ex(t,n,a,r,c,f){c=tx(c),r.context===null?r.context=c:r.pendingContext=c,r=Ea(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ta(t,r,n),a!==null&&(Xn(a,t,n),eo(a,t,n))}function nx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Ff(t,n){nx(t,n),(t=t.alternate)&&nx(t,n)}function ix(t){if(t.tag===13||t.tag===31){var n=as(t,67108864);n!==null&&Xn(n,t,67108864),Ff(t,67108864)}}function ax(t){if(t.tag===13||t.tag===31){var n=ei();n=_i(n);var a=as(t,n);a!==null&&Xn(a,t,n),Ff(t,n)}}var Ql=!0;function tS(t,n,a,r){var c=P.T;P.T=null;var f=j.p;try{j.p=2,Bf(t,n,a,r)}finally{j.p=f,P.T=c}}function eS(t,n,a,r){var c=P.T;P.T=null;var f=j.p;try{j.p=8,Bf(t,n,a,r)}finally{j.p=f,P.T=c}}function Bf(t,n,a,r){if(Ql){var c=Hf(r);if(c===null)Tf(t,n,r,Jl,a),rx(t,r);else if(iS(c,t,n,a,r))r.stopPropagation();else if(rx(t,r),n&4&&-1<nS.indexOf(t)){for(;c!==null;){var f=T(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Mt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var O=1<<31-Gt(x);E.entanglements[1]|=O,x&=~O}Ui(f),(Ne&6)===0&&(Ol=b()+500,go(0))}}break;case 31:case 13:E=as(f,2),E!==null&&Xn(E,f,2),zl(),Ff(f,2)}if(f=Hf(r),f===null&&Tf(t,n,r,Jl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Tf(t,n,r,null,a)}}function Hf(t){return t=Gc(t),Gf(t)}var Jl=null;function Gf(t){if(Jl=null,t=xa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Jl=t,null}function sx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case dt:return 2;case vt:return 8;case ot:case Wt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Vf=!1,za=null,Ia=null,Fa=null,To=new Map,Ao=new Map,Ba=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rx(t,n){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=T(n),n!==null&&ix(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function iS(t,n,a,r,c){switch(n){case"focusin":return za=Ro(za,t,n,a,r,c),!0;case"dragenter":return Ia=Ro(Ia,t,n,a,r,c),!0;case"mouseover":return Fa=Ro(Fa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ro(To.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,r,c)),!0}return!1}function ox(t){var n=xa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Fr(t.priority,function(){ax(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Fr(t.priority,function(){ax(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Hf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Hc=r,a.target.dispatchEvent(r),Hc=null}else return n=T(a),n!==null&&ix(n),t.blockedOn=a,!1;n.shift()}return!0}function lx(t,n,a){$l(t)&&a.delete(n)}function aS(){Vf=!1,za!==null&&$l(za)&&(za=null),Ia!==null&&$l(Ia)&&(Ia=null),Fa!==null&&$l(Fa)&&(Fa=null),To.forEach(lx),Ao.forEach(lx)}function tc(t,n){t.blockedOn===n&&(t.blockedOn=null,Vf||(Vf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,aS)))}var ec=null;function cx(t){ec!==t&&(ec=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ec===t&&(ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Gf(r||a)===null)continue;break}var f=T(a);f!==null&&(t.splice(n,3),n-=3,Bu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function lr(t){function n(O){return tc(O,t)}za!==null&&tc(za,t),Ia!==null&&tc(Ia,t),Fa!==null&&tc(Fa,t),To.forEach(n),Ao.forEach(n);for(var a=0;a<Ba.length;a++){var r=Ba[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)ox(a),a.blockedOn===null&&Ba.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[dn]||null;if(typeof f=="function")x||cx(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[dn]||null)E=x.formAction;else if(Gf(c)!==null)continue}else E=x.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),cx(a)}}}function ux(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Xf(t){this._internalRoot=t}nc.prototype.render=Xf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ei();ex(a,r,t,n,null,null)},nc.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ex(t.current,2,null,t,null,null),zl(),n[Ii]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ir();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,t),a===0&&ox(t)}};var fx=e.version;if(fx!=="19.2.6")throw Error(s(527,fx,"19.2.6"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var sS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{St=ic.inject(sS),bt=ic}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=g0,f=v0,x=S0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=$m(t,1,!1,null,null,a,r,null,c,f,x,ux),t[Ii]=n.current,Ef(t),new Xf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=g0,x=v0,E=S0,O=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(O=a.formState)),n=$m(t,1,!0,n,a??null,r,c,O,f,x,E,ux),n.context=tx(null),a=n.current,r=ei(),r=_i(r),c=Ea(r),c.callback=null,Ta(a,c,r),a=r,n.current.lanes=a,Un(n,a),Ui(n),t[Ii]=n.current,Ef(t),new nc(n)},Do.version="19.2.6",Do}var yx;function mS(){if(yx)return qf.exports;yx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=pS(),qf.exports}var xS=mS();const _S=["Map","Docks","Racks","Analytics"];function gS(){return ee.jsx("nav",{className:"bottom-nav","aria-label":"Warehouse sections",children:_S.map(o=>ee.jsx("button",{className:o==="Map"?"active":"",type:"button",children:o},o))})}const vS=["Shop","Path","Dock","Rack","Office"];function SS({query:o,locations:e,selectedLocation:i,selectedLocationId:s,onQueryChange:l,onSelectLocation:u}){return ee.jsxs("aside",{className:"sidebar",children:[ee.jsx("div",{className:"brand-mark",children:"WH"}),ee.jsxs("label",{className:"search-field",children:[ee.jsx("span",{children:"Search"}),ee.jsx("input",{value:o,onChange:h=>l(h.target.value),placeholder:"Shop, dock, rack...",type:"search"})]}),ee.jsx("div",{className:"filter-list","aria-label":"Location filters",children:vS.map(h=>ee.jsx("button",{type:"button",onClick:()=>l(h),children:h},h))}),ee.jsx("section",{className:"location-list","aria-label":"Locations",children:e.map(h=>ee.jsxs("button",{className:h.id===s?"selected":"",type:"button",onClick:()=>u(h.id),children:[ee.jsx("span",{children:h.name}),ee.jsx("small",{children:h.type})]},h.id))}),ee.jsx("section",{className:"details-panel","aria-live":"polite",children:i?ee.jsxs(ee.Fragment,{children:[ee.jsx("p",{className:"eyebrow",children:i.type}),ee.jsx("h2",{children:i.name}),ee.jsx("p",{children:i.description??"No description available."}),ee.jsxs("dl",{children:[ee.jsxs("div",{children:[ee.jsx("dt",{children:"X"}),ee.jsxs("dd",{children:[i.xMin," - ",i.xMax]})]}),ee.jsxs("div",{children:[ee.jsx("dt",{children:"Y"}),ee.jsxs("dd",{children:[i.yMin," - ",i.yMax]})]}),ee.jsxs("div",{children:[ee.jsx("dt",{children:"Z"}),ee.jsxs("dd",{children:[i.zMin," - ",i.zMax]})]})]})]}):ee.jsx("p",{children:"Select a block to view its details."})})]})}function yS(){return ee.jsxs("header",{className:"top-bar",children:[ee.jsxs("div",{children:[ee.jsx("p",{className:"eyebrow",children:"Live warehouse map"}),ee.jsx("h1",{children:"Warehouse 3D Layout"})]}),ee.jsx("div",{className:"top-bar-meta",children:"Operations View"})]})}const gd="181",Er={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},MS=0,Mx=1,bS=2,T_=1,ES=2,ca=3,Qa=0,qn=1,ua=2,da=0,Tr=1,bx=2,Ex=3,Tx=4,TS=5,bs=100,AS=101,RS=102,CS=103,DS=104,wS=200,US=201,LS=202,NS=203,Rh=204,Ch=205,OS=206,PS=207,zS=208,IS=209,FS=210,BS=211,HS=212,GS=213,VS=214,Dh=0,wh=1,Uh=2,Rr=3,Lh=4,Nh=5,Oh=6,Ph=7,A_=0,XS=1,kS=2,Ka=0,WS=1,qS=2,YS=3,jS=4,ZS=5,KS=6,QS=7,R_=300,Cr=301,Dr=302,zh=303,Ih=304,Oc=306,Fh=1e3,fa=1001,Bh=1002,ai=1003,JS=1004,ac=1005,xi=1006,Kf=1007,Ts=1008,Pi=1009,C_=1010,D_=1011,Fo=1012,vd=1013,Rs=1014,ha=1015,Lr=1016,Sd=1017,yd=1018,Bo=1020,w_=35902,U_=35899,L_=1021,N_=1022,Ti=1023,Ho=1026,Go=1027,O_=1028,Md=1029,bd=1030,Ed=1031,Td=1033,Tc=33776,Ac=33777,Rc=33778,Cc=33779,Hh=35840,Gh=35841,Vh=35842,Xh=35843,kh=36196,Wh=37492,qh=37496,Yh=37808,jh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,td=37815,ed=37816,nd=37817,id=37818,ad=37819,sd=37820,rd=37821,od=36492,ld=36494,cd=36495,ud=36283,fd=36284,hd=36285,dd=36286,$S=3200,ty=3201,P_=0,ey=1,ja="",pi="srgb",wr="srgb-linear",Uc="linear",Ve="srgb",cr=7680,Ax=519,ny=512,iy=513,ay=514,z_=515,sy=516,ry=517,oy=518,ly=519,Rx=35044,Cx="300 es",Ni=2e3,Lc=2001;function I_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Nc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function cy(){const o=Nc("canvas");return o.style.display="block",o}const Dx={};function wx(...o){const e="THREE."+o.shift();console.log(e,...o)}function re(...o){const e="THREE."+o.shift();console.warn(e,...o)}function tn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Vo(...o){const e=o.join(" ");e in Dx||(Dx[e]=!0,re(...o))}function uy(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,pd=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function fy(o,e){return(o%e+e)%e}function Qf(o,e,i){return(1-i)*o+i*e}function wo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const hy={DEG2RAD:Dc};class oe{constructor(e=0,i=0){oe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ve(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],S=u[h+0],y=u[h+1],A=u[h+2],C=u[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(d>=1){e[i+0]=S,e[i+1]=y,e[i+2]=A,e[i+3]=C;return}if(_!==C||m!==S||p!==y||g!==A){let M=m*S+p*y+g*A+_*C;M<0&&(S=-S,y=-y,A=-A,C=-C,M=-M);let v=1-d;if(M<.9995){const z=Math.acos(M),U=Math.sin(z);v=Math.sin(v*z)/U,d=Math.sin(d*z)/U,m=m*v+S*d,p=p*v+y*d,g=g*v+A*d,_=_*v+C*d}else{m=m*v+S*d,p=p*v+y*d,g=g*v+A*d,_=_*v+C*d;const z=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=z,p*=z,g*=z,_*=z}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=u[h],S=u[h+1],y=u[h+2],A=u[h+3];return e[i]=d*A+g*_+m*y-p*S,e[i+1]=m*A+g*S+p*_-d*y,e[i+2]=p*A+g*y+d*S-m*_,e[i+3]=g*A-d*_-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(u/2),S=m(s/2),y=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=S*g*_+p*y*A,this._y=p*y*_-S*g*A,this._z=p*g*A+S*y*_,this._w=p*g*_-S*y*A;break;case"YXZ":this._x=S*g*_+p*y*A,this._y=p*y*_-S*g*A,this._z=p*g*A-S*y*_,this._w=p*g*_+S*y*A;break;case"ZXY":this._x=S*g*_-p*y*A,this._y=p*y*_+S*g*A,this._z=p*g*A+S*y*_,this._w=p*g*_-S*y*A;break;case"ZYX":this._x=S*g*_-p*y*A,this._y=p*y*_+S*g*A,this._z=p*g*A-S*y*_,this._w=p*g*_+S*y*A;break;case"YZX":this._x=S*g*_+p*y*A,this._y=p*y*_+S*g*A,this._z=p*g*A-S*y*_,this._w=p*g*_-S*y*A;break;case"XZY":this._x=S*g*_-p*y*A,this._y=p*y*_-S*g*A,this._z=p*g*A+S*y*_,this._w=p*g*_+S*y*A;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=s+d+_;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,u=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,s=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ux.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ux.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),g=2*(d*i-u*l),_=2*(u*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-u*_,this.z=l+m*_+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ve(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new st,Ux=new Cs;class he{constructor(e,i,s,l,u,h,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],S=s[2],y=s[5],A=s[8],C=l[0],M=l[3],v=l[6],z=l[1],U=l[4],F=l[7],X=l[2],N=l[5],I=l[8];return u[0]=h*C+d*z+m*X,u[3]=h*M+d*U+m*N,u[6]=h*v+d*F+m*I,u[1]=p*C+g*z+_*X,u[4]=p*M+g*U+_*N,u[7]=p*v+g*F+_*I,u[2]=S*C+y*z+A*X,u[5]=S*M+y*U+A*N,u[8]=S*v+y*F+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*h-d*p,S=d*m-g*u,y=p*u-h*m,A=i*_+s*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(l*p-g*s)*C,e[2]=(d*s-l*h)*C,e[3]=S*C,e[4]=(g*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=y*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply($f.makeScale(e,i)),this}rotate(e){return this.premultiply($f.makeRotation(-e)),this}translate(e,i){return this.premultiply($f.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new he,Lx=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nx=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dy(){const o={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ve&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Ar(l.r),l.g=Ar(l.g),l.b=Ar(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?Uc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[wr]:{primaries:e,whitePoint:s,transfer:Uc,toXYZ:Lx,fromXYZ:Nx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:s,transfer:Ve,toXYZ:Lx,fromXYZ:Nx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const Le=dy();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ar(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ur;class py{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ur===void 0&&(ur=Nc("canvas")),ur.width=e.width,ur.height=e.height;const l=ur.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=ur}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Nc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=pa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(pa(i[s]/255)*255):i[s]=pa(i[s]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let my=0;class Ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(th(l[h].image)):u.push(th(l[h]))}else u=th(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function th(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?py.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let xy=0;const eh=new st;class In extends ws{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=fa,l=fa,u=xi,h=Ts,d=Ti,m=Pi,p=In.DEFAULT_ANISOTROPY,g=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Xo(),this.name="",this.source=new Ad(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fh:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case Bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fh:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case Bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=R_;In.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],_=m[8],S=m[1],y=m[5],A=m[9],C=m[2],M=m[6],v=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,F=(y+1)/2,X=(v+1)/2,N=(g+S)/4,I=(_+C)/4,tt=(A+M)/4;return U>F&&U>X?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=N/s,u=I/s):F>X?F<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),s=N/l,u=tt/l):X<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),s=I/u,l=tt/u),this.set(s,l,u,i),this}let z=Math.sqrt((M-A)*(M-A)+(_-C)*(_-C)+(S-g)*(S-g));return Math.abs(z)<.001&&(z=1),this.x=(M-A)/z,this.y=(_-C)/z,this.z=(S-g)/z,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _y extends ws{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new In(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ad(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends _y{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class F_ extends In{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gy extends In{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,yi):yi.fromBufferAttribute(u,h),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),rc.subVectors(this.max,Uo),fr.subVectors(e.a,Uo),hr.subVectors(e.b,Uo),dr.subVectors(e.c,Uo),Ga.subVectors(hr,fr),Va.subVectors(dr,hr),_s.subVectors(fr,dr);let i=[0,-Ga.z,Ga.y,0,-Va.z,Va.y,0,-_s.z,_s.y,Ga.z,0,-Ga.x,Va.z,0,-Va.x,_s.z,0,-_s.x,-Ga.y,Ga.x,0,-Va.y,Va.x,0,-_s.y,_s.x,0];return!nh(i,fr,hr,dr,rc)||(i=[1,0,0,0,1,0,0,0,1],!nh(i,fr,hr,dr,rc))?!1:(oc.crossVectors(Ga,Va),i=[oc.x,oc.y,oc.z],nh(i,fr,hr,dr,rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ia=[new st,new st,new st,new st,new st,new st,new st,new st],yi=new st,sc=new ko,fr=new st,hr=new st,dr=new st,Ga=new st,Va=new st,_s=new st,Uo=new st,rc=new st,oc=new st,gs=new st;function nh(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){gs.fromArray(o,u);const d=l.x*Math.abs(gs.x)+l.y*Math.abs(gs.y)+l.z*Math.abs(gs.z),m=e.dot(gs),p=i.dot(gs),g=s.dot(gs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const vy=new ko,Lo=new st,ih=new st;class Rd{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):vy.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(ih)),this.expandByPoint(Lo.copy(e.center).sub(ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const aa=new st,ah=new st,lc=new st,Xa=new st,sh=new st,cc=new st,rh=new st;class Cd{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ah.copy(e).add(i).multiplyScalar(.5),lc.copy(i).sub(e).normalize(),Xa.copy(this.origin).sub(ah);const u=e.distanceTo(i)*.5,h=-this.direction.dot(lc),d=Xa.dot(this.direction),m=-Xa.dot(lc),p=Xa.lengthSq(),g=Math.abs(1-h*h);let _,S,y,A;if(g>0)if(_=h*m-d,S=h*d-m,A=u*g,_>=0)if(S>=-A)if(S<=A){const C=1/g;_*=C,S*=C,y=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=u,_=Math.max(0,-(h*S+d)),y=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(h*S+d)),y=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-h*u+d)),S=_>0?-u:Math.min(Math.max(-u,-m),u),y=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(_=Math.max(0,-(h*u+d)),S=_>0?u:Math.min(Math.max(-u,-m),u),y=-_*_+S*(S+2*m)+p);else S=h>0?-u:u,_=Math.max(0,-(h*S+d)),y=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ah).addScaledVector(lc,S),y}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const s=aa.dot(this.direction),l=aa.dot(aa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,s,l,u){sh.subVectors(i,e),cc.subVectors(s,e),rh.crossVectors(sh,cc);let h=this.direction.dot(rh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Xa.subVectors(this.origin,e);const m=d*this.direction.dot(cc.crossVectors(Xa,cc));if(m<0)return null;const p=d*this.direction.dot(sh.cross(Xa));if(p<0||m+p>h)return null;const g=-d*Xa.dot(rh);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,s,l,u,h,d,m,p,g,_,S,y,A,C,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,g,_,S,y,A,C,M)}set(e,i,s,l,u,h,d,m,p,g,_,S,y,A,C,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=S,v[3]=y,v[7]=A,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/pr.setFromMatrixColumn(e,0).length(),u=1/pr.setFromMatrixColumn(e,1).length(),h=1/pr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=h*g,y=h*_,A=d*g,C=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+A*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=A+y*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*g,y=m*_,A=p*g,C=p*_;i[0]=S+C*d,i[4]=A*d-y,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=y*d-A,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*g,y=m*_,A=p*g,C=p*_;i[0]=S-C*d,i[4]=-h*_,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*g,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*g,y=h*_,A=d*g,C=d*_;i[0]=m*g,i[4]=A*p-y,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=y*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*g,i[4]=C-S*_,i[8]=A*_+y,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+A,i[10]=S-C*_}else if(e.order==="XZY"){const S=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+C,i[5]=h*g,i[9]=y*_-A,i[2]=A*_-y,i[6]=d*g,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sy,e,yy)}lookAt(e,i,s){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ka.crossVectors(s,ni),ka.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ka.crossVectors(s,ni)),ka.normalize(),uc.crossVectors(ni,ka),l[0]=ka.x,l[4]=uc.x,l[8]=ni.x,l[1]=ka.y,l[5]=uc.y,l[9]=ni.y,l[2]=ka.z,l[6]=uc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],S=s[9],y=s[13],A=s[2],C=s[6],M=s[10],v=s[14],z=s[3],U=s[7],F=s[11],X=s[15],N=l[0],I=l[4],tt=l[8],D=l[12],R=l[1],G=l[5],et=l[9],lt=l[13],mt=l[2],ft=l[6],P=l[10],j=l[14],Y=l[3],_t=l[7],gt=l[11],L=l[15];return u[0]=h*N+d*R+m*mt+p*Y,u[4]=h*I+d*G+m*ft+p*_t,u[8]=h*tt+d*et+m*P+p*gt,u[12]=h*D+d*lt+m*j+p*L,u[1]=g*N+_*R+S*mt+y*Y,u[5]=g*I+_*G+S*ft+y*_t,u[9]=g*tt+_*et+S*P+y*gt,u[13]=g*D+_*lt+S*j+y*L,u[2]=A*N+C*R+M*mt+v*Y,u[6]=A*I+C*G+M*ft+v*_t,u[10]=A*tt+C*et+M*P+v*gt,u[14]=A*D+C*lt+M*j+v*L,u[3]=z*N+U*R+F*mt+X*Y,u[7]=z*I+U*G+F*ft+X*_t,u[11]=z*tt+U*et+F*P+X*gt,u[15]=z*D+U*lt+F*j+X*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],S=e[10],y=e[14],A=e[3],C=e[7],M=e[11],v=e[15];return A*(+u*m*_-l*p*_-u*d*S+s*p*S+l*d*y-s*m*y)+C*(+i*m*y-i*p*S+u*h*S-l*h*y+l*p*g-u*m*g)+M*(+i*p*_-i*d*y-u*h*_+s*h*y+u*d*g-s*p*g)+v*(-l*d*g-i*m*_+i*d*S+l*h*_-s*h*S+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],S=e[10],y=e[11],A=e[12],C=e[13],M=e[14],v=e[15],z=_*M*p-C*S*p+C*m*y-d*M*y-_*m*v+d*S*v,U=A*S*p-g*M*p-A*m*y+h*M*y+g*m*v-h*S*v,F=g*C*p-A*_*p+A*d*y-h*C*y-g*d*v+h*_*v,X=A*_*m-g*C*m-A*d*S+h*C*S+g*d*M-h*_*M,N=i*z+s*U+l*F+u*X;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=z*I,e[1]=(C*S*u-_*M*u-C*l*y+s*M*y+_*l*v-s*S*v)*I,e[2]=(d*M*u-C*m*u+C*l*p-s*M*p-d*l*v+s*m*v)*I,e[3]=(_*m*u-d*S*u-_*l*p+s*S*p+d*l*y-s*m*y)*I,e[4]=U*I,e[5]=(g*M*u-A*S*u+A*l*y-i*M*y-g*l*v+i*S*v)*I,e[6]=(A*m*u-h*M*u-A*l*p+i*M*p+h*l*v-i*m*v)*I,e[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*y+i*m*y)*I,e[8]=F*I,e[9]=(A*_*u-g*C*u-A*s*y+i*C*y+g*s*v-i*_*v)*I,e[10]=(h*C*u-A*d*u+A*s*p-i*C*p-h*s*v+i*d*v)*I,e[11]=(g*d*u-h*_*u-g*s*p+i*_*p+h*s*y-i*d*y)*I,e[12]=X*I,e[13]=(g*C*l-A*_*l+A*s*S-i*C*S-g*s*M+i*_*M)*I,e[14]=(A*d*l-h*C*l-A*s*m+i*C*m+h*s*M-i*d*M)*I,e[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*S+i*d*S)*I,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,_=d+d,S=u*p,y=u*g,A=u*_,C=h*g,M=h*_,v=d*_,z=m*p,U=m*g,F=m*_,X=s.x,N=s.y,I=s.z;return l[0]=(1-(C+v))*X,l[1]=(y+F)*X,l[2]=(A-U)*X,l[3]=0,l[4]=(y-F)*N,l[5]=(1-(S+v))*N,l[6]=(M+z)*N,l[7]=0,l[8]=(A+U)*I,l[9]=(M-z)*I,l[10]=(1-(S+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=pr.set(l[0],l[1],l[2]).length();const h=pr.set(l[4],l[5],l[6]).length(),d=pr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Mi.copy(this);const p=1/u,g=1/h,_=1/d;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=_,Mi.elements[9]*=_,Mi.elements[10]*=_,i.setFromRotationMatrix(Mi),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=Ni,m=!1){const p=this.elements,g=2*u/(i-e),_=2*u/(s-l),S=(i+e)/(i-e),y=(s+l)/(s-l);let A,C;if(m)A=u/(h-u),C=h*u/(h-u);else if(d===Ni)A=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Lc)A=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=Ni,m=!1){const p=this.elements,g=2/(i-e),_=2/(s-l),S=-(i+e)/(i-e),y=-(s+l)/(s-l);let A,C;if(m)A=1/(h-u),C=h/(h-u);else if(d===Ni)A=-2/(h-u),C=-(h+u)/(h-u);else if(d===Lc)A=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const pr=new st,Mi=new nn,Sy=new st(0,0,0),yy=new st(1,1,1),ka=new st,uc=new st,ni=new st,Ox=new nn,Px=new Cs;class zi{constructor(e=0,i=0,s=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Ox.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ox,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Px.setFromEuler(this),this.setFromQuaternion(Px,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let My=0;const zx=new st,mr=new Cs,sa=new nn,fc=new st,No=new st,by=new st,Ey=new Cs,Ix=new st(1,0,0),Fx=new st(0,1,0),Bx=new st(0,0,1),Hx={type:"added"},Ty={type:"removed"},xr={type:"childadded",child:null},oh={type:"childremoved",child:null};class wn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new st,i=new zi,s=new Cs,l=new st(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new he}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return mr.setFromAxisAngle(e,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,i){return mr.setFromAxisAngle(e,i),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Ix,e)}rotateY(e){return this.rotateOnAxis(Fx,e)}rotateZ(e){return this.rotateOnAxis(Bx,e)}translateOnAxis(e,i){return zx.copy(e).applyQuaternion(this.quaternion),this.position.add(zx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ix,e)}translateY(e){return this.translateOnAxis(Fx,e)}translateZ(e){return this.translateOnAxis(Bx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?fc.copy(e):fc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(No,fc,this.up):sa.lookAt(fc,No,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),mr.setFromRotationMatrix(sa),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(tn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hx),xr.child=e,this.dispatchEvent(xr),xr.child=null):tn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ty),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hx),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,by),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,Ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),_=h(e.shapes),S=h(e.skeletons),y=h(e.animations),A=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new st(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new st,ra=new st,lh=new st,oa=new st,_r=new st,gr=new st,Gx=new st,ch=new st,uh=new st,fh=new st,hh=new en,dh=new en,ph=new en;class Ei{constructor(e=new st,i=new st,s=new st){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),bi.subVectors(e,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){bi.subVectors(l,i),ra.subVectors(s,i),lh.subVectors(e,i);const h=bi.dot(bi),d=bi.dot(ra),m=bi.dot(lh),p=ra.dot(ra),g=ra.dot(lh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const S=1/_,y=(p*m-d*g)*S,A=(h*g-d*m)*S;return u.set(1-y-A,A,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,oa.x),m.addScaledVector(h,oa.y),m.addScaledVector(d,oa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return hh.setScalar(0),dh.setScalar(0),ph.setScalar(0),hh.fromBufferAttribute(e,i),dh.fromBufferAttribute(e,s),ph.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(hh,u.x),h.addScaledVector(dh,u.y),h.addScaledVector(ph,u.z),h}static isFrontFacing(e,i,s,l){return bi.subVectors(s,i),ra.subVectors(e,i),bi.cross(ra).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),bi.cross(ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ei.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;_r.subVectors(l,s),gr.subVectors(u,s),ch.subVectors(e,s);const m=_r.dot(ch),p=gr.dot(ch);if(m<=0&&p<=0)return i.copy(s);uh.subVectors(e,l);const g=_r.dot(uh),_=gr.dot(uh);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(_r,h);fh.subVectors(e,u);const y=_r.dot(fh),A=gr.dot(fh);if(A>=0&&y<=A)return i.copy(u);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(gr,d);const M=g*A-y*_;if(M<=0&&_-g>=0&&y-A>=0)return Gx.subVectors(u,l),d=(_-g)/(_-g+(y-A)),i.copy(l).addScaledVector(Gx,d);const v=1/(M+C+S);return h=C*v,d=S*v,i.copy(s).addScaledVector(_r,h).addScaledVector(gr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},hc={h:0,s:0,l:0};function mh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Me{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Le.workingColorSpace){if(e=fy(e,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=mh(h,u,e+1/3),this.g=mh(h,u,e),this.b=mh(h,u,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=pi){function s(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=pi){const s=B_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Le.workingToColorSpace(On.copy(this),e),Math.round(ve(On.r*255,0,255))*65536+Math.round(ve(On.g*255,0,255))*256+Math.round(ve(On.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,u=On.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=pi){Le.workingToColorSpace(On.copy(this),e);const i=On.r,s=On.g,l=On.b;return e!==pi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Wa),this.setHSL(Wa.h+e,Wa.s+i,Wa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Wa),e.getHSL(hc);const s=Qf(Wa.h,hc.h,i),l=Qf(Wa.s,hc.s,i),u=Qf(Wa.l,hc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Me;Me.NAMES=B_;let Ay=0;class Wo extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Tr,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ch,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(s.blending=this.blending),this.side!==Qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ch&&(s.blendDst=this.blendDst),this.blendEquation!==bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ax&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class H_ extends Wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=A_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new st,dc=new oe;let Ry=0;class Oi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ry++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Rx,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(e),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=wo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rx&&(e.usage=this.usage),e}}class G_ extends Oi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class V_ extends Oi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class As extends Oi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Cy=0;const di=new nn,xh=new wn,vr=new st,ii=new ko,Oo=new ko,bn=new st;class Ja extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I_(e)?V_:G_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new he().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,s){return di.makeTranslation(e,i,s),this.applyMatrix4(di),this}scale(e,i,s){return di.makeScale(e,i,s),this.applyMatrix4(di),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new As(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(ii.min,Oo.min),ii.expandByPoint(bn),bn.addVectors(ii.max,Oo.max),ii.expandByPoint(bn)):(ii.expandByPoint(Oo.min),ii.expandByPoint(Oo.max))}ii.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)bn.fromBufferAttribute(d,p),m&&(vr.fromBufferAttribute(e,p),bn.add(vr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&tn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){tn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let tt=0;tt<s.count;tt++)d[tt]=new st,m[tt]=new st;const p=new st,g=new st,_=new st,S=new oe,y=new oe,A=new oe,C=new st,M=new st;function v(tt,D,R){p.fromBufferAttribute(s,tt),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,R),S.fromBufferAttribute(u,tt),y.fromBufferAttribute(u,D),A.fromBufferAttribute(u,R),g.sub(p),_.sub(p),y.sub(S),A.sub(S);const G=1/(y.x*A.y-A.x*y.y);isFinite(G)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(_,-y.y).multiplyScalar(G),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-A.x).multiplyScalar(G),d[tt].add(C),d[D].add(C),d[R].add(C),m[tt].add(M),m[D].add(M),m[R].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let tt=0,D=z.length;tt<D;++tt){const R=z[tt],G=R.start,et=R.count;for(let lt=G,mt=G+et;lt<mt;lt+=3)v(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const U=new st,F=new st,X=new st,N=new st;function I(tt){X.fromBufferAttribute(l,tt),N.copy(X);const D=d[tt];U.copy(D),U.sub(X.multiplyScalar(X.dot(D))).normalize(),F.crossVectors(N,D);const G=F.dot(m[tt])<0?-1:1;h.setXYZW(tt,U.x,U.y,U.z,G)}for(let tt=0,D=z.length;tt<D;++tt){const R=z[tt],G=R.start,et=R.count;for(let lt=G,mt=G+et;lt<mt;lt+=3)I(e.getX(lt+0)),I(e.getX(lt+1)),I(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new st,u=new st,h=new st,d=new st,m=new st,p=new st,g=new st,_=new st;if(e)for(let S=0,y=e.count;S<y;S+=3){const A=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let y=0,A=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let v=0;v<g;v++)S[A++]=p[y++]}return new Oi(S,g,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ja,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],y=e(S,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],_=u[p];for(let S=0,y=_.length;S<y;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vx=new nn,vs=new Cd,pc=new Rd,Xx=new st,mc=new st,xc=new st,_c=new st,_h=new st,gc=new st,kx=new st,vc=new st;class Ai extends wn{constructor(e=new Ja,i=new H_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){gc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(_h.fromBufferAttribute(_,e),h?gc.addScaledVector(_h,g):gc.addScaledVector(_h.sub(i),g))}i.add(gc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(u),vs.copy(e.ray).recast(e.near),!(pc.containsPoint(vs.origin)===!1&&(vs.intersectSphere(pc,Xx)===null||vs.origin.distanceToSquared(Xx)>(e.far-e.near)**2))&&(Vx.copy(u).invert(),vs.copy(e.ray).applyMatrix4(Vx),!(s.boundingBox!==null&&vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,vs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,S=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const M=S[A],v=h[M.materialIndex],z=Math.max(M.start,y.start),U=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let F=z,X=U;F<X;F+=3){const N=d.getX(F),I=d.getX(F+1),tt=d.getX(F+2);l=Sc(this,v,e,s,p,g,_,N,I,tt),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=A,v=C;M<v;M+=3){const z=d.getX(M),U=d.getX(M+1),F=d.getX(M+2);l=Sc(this,h,e,s,p,g,_,z,U,F),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const M=S[A],v=h[M.materialIndex],z=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let F=z,X=U;F<X;F+=3){const N=F,I=F+1,tt=F+2;l=Sc(this,v,e,s,p,g,_,N,I,tt),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=A,v=C;M<v;M+=3){const z=M,U=M+1,F=M+2;l=Sc(this,h,e,s,p,g,_,z,U,F),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Dy(o,e,i,s,l,u,h,d){let m;if(e.side===qn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Qa,d),m===null)return null;vc.copy(d),vc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(vc);return p<i.near||p>i.far?null:{distance:p,point:vc.clone(),object:o}}function Sc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,mc),o.getVertexPosition(m,xc),o.getVertexPosition(p,_c);const g=Dy(o,e,i,s,mc,xc,_c,kx);if(g){const _=new st;Ei.getBarycoord(kx,mc,xc,_c,_),l&&(g.uv=Ei.getInterpolatedAttribute(l,d,m,p,_,new oe)),u&&(g.uv1=Ei.getInterpolatedAttribute(u,d,m,p,_,new oe)),h&&(g.normal=Ei.getInterpolatedAttribute(h,d,m,p,_,new st),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new st,materialIndex:0};Ei.getNormal(mc,xc,_c,S.normal),g.face=S,g.barycoord=_}return g}class Nr extends Ja{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],_=[];let S=0,y=0;A("z","y","x",-1,-1,s,i,e,h,u,0),A("z","y","x",1,-1,s,i,-e,h,u,1),A("x","z","y",1,1,e,s,i,l,h,2),A("x","z","y",1,-1,e,s,-i,l,h,3),A("x","y","z",1,-1,e,i,s,l,u,4),A("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new As(p,3)),this.setAttribute("normal",new As(g,3)),this.setAttribute("uv",new As(_,2));function A(C,M,v,z,U,F,X,N,I,tt,D){const R=F/I,G=X/tt,et=F/2,lt=X/2,mt=N/2,ft=I+1,P=tt+1;let j=0,Y=0;const _t=new st;for(let gt=0;gt<P;gt++){const L=gt*G-lt;for(let at=0;at<ft;at++){const yt=at*R-et;_t[C]=yt*z,_t[M]=L*U,_t[v]=mt,p.push(_t.x,_t.y,_t.z),_t[C]=0,_t[M]=0,_t[v]=N>0?1:-1,g.push(_t.x,_t.y,_t.z),_.push(at/I),_.push(1-gt/tt),j+=1}}for(let gt=0;gt<tt;gt++)for(let L=0;L<I;L++){const at=S+L+ft*gt,yt=S+L+ft*(gt+1),Et=S+(L+1)+ft*(gt+1),Ot=S+(L+1)+ft*gt;m.push(at,yt,Ot),m.push(yt,Et,Ot),Y+=6}d.addGroup(y,Y,D),y+=Y,S+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ur(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function zn(o){const e={};for(let i=0;i<o.length;i++){const s=Ur(o[i]);for(const l in s)e[l]=s[l]}return e}function wy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function X_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const Uy={clone:Ur,merge:zn};var Ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ma extends Wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ly,this.fragmentShader=Ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class k_ extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new st,Wx=new oe,qx=new oe;class mi extends k_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=pd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-e/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(qa.x,qa.y).multiplyScalar(-e/qa.z)}getViewSize(e,i){return this.getViewBounds(e,Wx,qx),i.subVectors(qx,Wx)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Dc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Sr=-90,yr=1;class Oy extends wn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Sr,yr,e,i);l.layers=this.layers,this.add(l);const u=new mi(Sr,yr,e,i);u.layers=this.layers,this.add(u);const h=new mi(Sr,yr,e,i);h.layers=this.layers,this.add(h);const d=new mi(Sr,yr,e,i);d.layers=this.layers,this.add(d);const m=new mi(Sr,yr,e,i);m.layers=this.layers,this.add(m);const p=new mi(Sr,yr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ni)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Lc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(_,S,y),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class W_ extends In{constructor(e=[],i=Cr,s,l,u,h,d,m,p,g){super(e,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Py extends Ds{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new W_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Nr(5,5,5),u=new ma({name:"CubemapFromEquirect",uniforms:Ur(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:da});u.uniforms.tEquirect.value=i;const h=new Ai(l,u),d=i.minFilter;return i.minFilter===Ts&&(i.minFilter=xi),new Oy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class zo extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zy={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),v=this._getHandJoint(p,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(zy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new zo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Iy extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Fy extends In{constructor(e=null,i=1,s=1,l,u,h,d,m,p=ai,g=ai,_,S){super(null,h,d,m,p,g,l,u,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new st,By=new st,Hy=new he;class Ya{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=vh.subVectors(s,i).cross(By.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(vh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Hy.getNormalMatrix(e),l=this.coplanarPoint(vh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Rd,Gy=new oe(.5,.5),yc=new st;class wd{constructor(e=new Ya,i=new Ya,s=new Ya,l=new Ya,u=new Ya,h=new Ya){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ni,s=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],_=u[5],S=u[6],y=u[7],A=u[8],C=u[9],M=u[10],v=u[11],z=u[12],U=u[13],F=u[14],X=u[15];if(l[0].setComponents(p-h,y-g,v-A,X-z).normalize(),l[1].setComponents(p+h,y+g,v+A,X+z).normalize(),l[2].setComponents(p+d,y+_,v+C,X+U).normalize(),l[3].setComponents(p-d,y-_,v-C,X-U).normalize(),s)l[4].setComponents(m,S,M,F).normalize(),l[5].setComponents(p-m,y-S,v-M,X-F).normalize();else if(l[4].setComponents(p-m,y-S,v-M,X-F).normalize(),i===Ni)l[5].setComponents(p+m,y+S,v+M,X+F).normalize();else if(i===Lc)l[5].setComponents(m,S,M,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const i=Gy.distanceTo(e.center);return Ss.radius=.7071067811865476+i,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(yc.x=l.normal.x>0?e.max.x:e.min.x,yc.y=l.normal.y>0?e.max.y:e.min.y,yc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q_ extends In{constructor(e,i,s=Rs,l,u,h,d=ai,m=ai,p,g=Ho,_=1){if(g!==Ho&&g!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ad(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Y_ extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qo extends Ja{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=e/d,S=i/m,y=[],A=[],C=[],M=[];for(let v=0;v<g;v++){const z=v*S-h;for(let U=0;U<p;U++){const F=U*_-u;A.push(F,-z,0),C.push(0,0,1),M.push(U/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<d;z++){const U=z+p*v,F=z+p*(v+1),X=z+1+p*(v+1),N=z+1+p*v;y.push(U,F,N),y.push(F,X,N)}this.setIndex(y),this.setAttribute("position",new As(A,3)),this.setAttribute("normal",new As(C,3)),this.setAttribute("uv",new As(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.widthSegments,e.heightSegments)}}class j_ extends Wo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=P_,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vy extends Wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xy extends Wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Z_ extends wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class ky extends Z_{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Sh=new nn,Yx=new st,jx=new st;class Wy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wd,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Yx.setFromMatrixPosition(e.matrixWorld),i.position.copy(Yx),jx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(jx),i.updateMatrixWorld(),Sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class K_ extends k_{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qy extends Wy{constructor(){super(new K_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yy extends Z_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new qy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jy extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zx=new nn;class Zy{constructor(e,i,s=0,l=1/0){this.ray=new Cd(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Dd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):tn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Zx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zx),this}intersectObject(e,i=!0,s=[]){return md(e,this,s,i),s.sort(Kx),s}intersectObjects(e,i=!0,s=[]){for(let l=0,u=e.length;l<u;l++)md(e[l],this,s,i);return s.sort(Kx),s}}function Kx(o,e){return o.distance-e.distance}function md(o,e,i,s){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)md(u[h],e,i,!0)}}class Qx{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ky extends ws{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jx(o,e,i,s){const l=Qy(s);switch(i){case L_:return o*e;case O_:return o*e/l.components*l.byteLength;case Md:return o*e/l.components*l.byteLength;case bd:return o*e*2/l.components*l.byteLength;case Ed:return o*e*2/l.components*l.byteLength;case N_:return o*e*3/l.components*l.byteLength;case Ti:return o*e*4/l.components*l.byteLength;case Td:return o*e*4/l.components*l.byteLength;case Tc:case Ac:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gh:case Xh:return Math.max(o,16)*Math.max(e,8)/4;case Hh:case Vh:return Math.max(o,8)*Math.max(e,8)/2;case kh:case Wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case td:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case id:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case sd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case od:case ld:case cd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case ud:case fd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case hd:case dd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Qy(o){switch(o){case Pi:case C_:return{byteLength:1,components:1};case Fo:case D_:case Lr:return{byteLength:2,components:1};case Sd:case yd:return{byteLength:2,components:4};case Rs:case vd:case ha:return{byteLength:4,components:1};case w_:case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);function Q_(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Jy(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,g);else{_.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<_.length;y++){const A=_[S],C=_[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,_[S]=C)}_.length=S+1;for(let y=0,A=_.length;y<A;y++){const C=_[y];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var $y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tM=`#ifdef USE_ALPHAHASH
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
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
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
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
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
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,dM=`#ifdef USE_BUMPMAP
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MM=`#define PI 3.141592653589793
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
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EM=`vec3 transformedNormal = objectNormal;
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
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
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
}`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kM=`uniform bool receiveShadow;
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
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
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
#endif`,QM=`uniform sampler2D dfgLUT;
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
}`,JM=`
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
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
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lb=`#if defined( USE_POINTS_UV )
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
#endif`,cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
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
#endif`,mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_b=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yb=`#ifdef USE_NORMALMAP
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
#endif`,Mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ib=`float getShadowMask() {
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
}`,Fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bb=`#ifdef USE_SKINNING
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
#endif`,Hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gb=`#ifdef USE_SKINNING
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
#endif`,Vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#ifdef USE_TRANSMISSION
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$b=`uniform sampler2D t2D;
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
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`#include <common>
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
}`,sE=`#if DEPTH_PACKING == 3200
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
}`,rE=`#define DISTANCE
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
}`,oE=`#define DISTANCE
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`uniform float scale;
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
}`,fE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,dE=`uniform vec3 diffuse;
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
}`,pE=`#define LAMBERT
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
}`,mE=`#define LAMBERT
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
}`,xE=`#define MATCAP
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
}`,_E=`#define MATCAP
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
}`,gE=`#define NORMAL
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
}`,vE=`#define NORMAL
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
}`,SE=`#define PHONG
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
}`,yE=`#define PHONG
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
}`,ME=`#define STANDARD
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
}`,bE=`#define STANDARD
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
}`,EE=`#define TOON
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
}`,TE=`#define TOON
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
}`,AE=`uniform float size;
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
}`,RE=`uniform vec3 diffuse;
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
}`,CE=`#include <common>
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
}`,DE=`uniform vec3 color;
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
}`,wE=`uniform float rotation;
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
}`,UE=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:$y,alphahash_pars_fragment:tM,alphamap_fragment:eM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:aM,aomap_fragment:sM,aomap_pars_fragment:rM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:fM,iridescence_fragment:hM,bumpmap_pars_fragment:dM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:xM,clipping_planes_vertex:_M,color_fragment:gM,color_pars_fragment:vM,color_pars_vertex:SM,color_vertex:yM,common:MM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:EM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:DM,colorspace_pars_fragment:wM,envmap_fragment:UM,envmap_common_pars_fragment:LM,envmap_pars_fragment:NM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:WM,envmap_vertex:PM,fog_vertex:zM,fog_pars_vertex:IM,fog_fragment:FM,fog_pars_fragment:BM,gradientmap_pars_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:XM,lights_pars_begin:kM,lights_toon_fragment:qM,lights_toon_pars_fragment:YM,lights_phong_fragment:jM,lights_phong_pars_fragment:ZM,lights_physical_fragment:KM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:$M,lights_fragment_end:tb,logdepthbuf_fragment:eb,logdepthbuf_pars_fragment:nb,logdepthbuf_pars_vertex:ib,logdepthbuf_vertex:ab,map_fragment:sb,map_pars_fragment:rb,map_particle_fragment:ob,map_particle_pars_fragment:lb,metalnessmap_fragment:cb,metalnessmap_pars_fragment:ub,morphinstance_vertex:fb,morphcolor_vertex:hb,morphnormal_vertex:db,morphtarget_pars_vertex:pb,morphtarget_vertex:mb,normal_fragment_begin:xb,normal_fragment_maps:_b,normal_pars_fragment:gb,normal_pars_vertex:vb,normal_vertex:Sb,normalmap_pars_fragment:yb,clearcoat_normal_fragment_begin:Mb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:Tb,opaque_fragment:Ab,packing:Rb,premultiplied_alpha_fragment:Cb,project_vertex:Db,dithering_fragment:wb,dithering_pars_fragment:Ub,roughnessmap_fragment:Lb,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Ob,shadowmap_pars_vertex:Pb,shadowmap_vertex:zb,shadowmask_pars_fragment:Ib,skinbase_vertex:Fb,skinning_pars_vertex:Bb,skinning_vertex:Hb,skinnormal_vertex:Gb,specularmap_fragment:Vb,specularmap_pars_fragment:Xb,tonemapping_fragment:kb,tonemapping_pars_fragment:Wb,transmission_fragment:qb,transmission_pars_fragment:Yb,uv_pars_fragment:jb,uv_pars_vertex:Zb,uv_vertex:Kb,worldpos_vertex:Qb,background_vert:Jb,background_frag:$b,backgroundCube_vert:tE,backgroundCube_frag:eE,cube_vert:nE,cube_frag:iE,depth_vert:aE,depth_frag:sE,distanceRGBA_vert:rE,distanceRGBA_frag:oE,equirect_vert:lE,equirect_frag:cE,linedashed_vert:uE,linedashed_frag:fE,meshbasic_vert:hE,meshbasic_frag:dE,meshlambert_vert:pE,meshlambert_frag:mE,meshmatcap_vert:xE,meshmatcap_frag:_E,meshnormal_vert:gE,meshnormal_frag:vE,meshphong_vert:SE,meshphong_frag:yE,meshphysical_vert:ME,meshphysical_frag:bE,meshtoon_vert:EE,meshtoon_frag:TE,points_vert:AE,points_frag:RE,shadow_vert:CE,shadow_frag:DE,sprite_vert:wE,sprite_frag:UE},Lt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Li={basic:{uniforms:zn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:zn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:zn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:zn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:zn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:zn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:zn([Lt.points,Lt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:zn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:zn([Lt.common,Lt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:zn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:zn([Lt.sprite,Lt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:zn([Lt.common,Lt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:zn([Lt.lights,Lt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Li.physical={uniforms:zn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Mc={r:0,b:0,g:0},ys=new zi,LE=new nn;function NE(o,e,i,s,l,u,h){const d=new Me(0);let m=u===!0?0:1,p,g,_=null,S=0,y=null;function A(U){let F=U.isScene===!0?U.background:null;return F&&F.isTexture&&(F=(U.backgroundBlurriness>0?i:e).get(F)),F}function C(U){let F=!1;const X=A(U);X===null?v(d,m):X&&X.isColor&&(v(X,1),F=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,h):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||F)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,F){const X=A(F);X&&(X.isCubeTexture||X.mapping===Oc)?(g===void 0&&(g=new Ai(new Nr(1,1,1),new ma({name:"BackgroundCubeMaterial",uniforms:Ur(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,I,tt){this.matrixWorld.copyPosition(tt.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ys.copy(F.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(LE.makeRotationFromEuler(ys)),g.material.toneMapped=Le.getTransfer(X.colorSpace)!==Ve,(_!==X||S!==X.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=X,S=X.version,y=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new Ai(new qo(2,2),new ma({name:"BackgroundMaterial",uniforms:Ur(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Le.getTransfer(X.colorSpace)!==Ve,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(_!==X||S!==X.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=X,S=X.version,y=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,F){U.getRGB(Mc,X_(o)),s.buffers.color.setClear(Mc.r,Mc.g,Mc.b,F,h)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,F=1){d.set(U),m=F,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:C,addToRenderList:M,dispose:z}}function OE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(R,G,et,lt,mt){let ft=!1;const P=_(lt,et,G);u!==P&&(u=P,p(u.object)),ft=y(R,lt,et,mt),ft&&A(R,lt,et,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,F(R,G,et,lt),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function _(R,G,et){const lt=et.wireframe===!0;let mt=s[R.id];mt===void 0&&(mt={},s[R.id]=mt);let ft=mt[G.id];ft===void 0&&(ft={},mt[G.id]=ft);let P=ft[lt];return P===void 0&&(P=S(m()),ft[lt]=P),P}function S(R){const G=[],et=[],lt=[];for(let mt=0;mt<i;mt++)G[mt]=0,et[mt]=0,lt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:et,attributeDivisors:lt,object:R,attributes:{},index:null}}function y(R,G,et,lt){const mt=u.attributes,ft=G.attributes;let P=0;const j=et.getAttributes();for(const Y in j)if(j[Y].location>=0){const gt=mt[Y];let L=ft[Y];if(L===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),gt===void 0||gt.attribute!==L||L&&gt.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==lt}function A(R,G,et,lt){const mt={},ft=G.attributes;let P=0;const j=et.getAttributes();for(const Y in j)if(j[Y].location>=0){let gt=ft[Y];gt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor));const L={};L.attribute=gt,gt&&gt.data&&(L.data=gt.data),mt[Y]=L,P++}u.attributes=mt,u.attributesNum=P,u.index=lt}function C(){const R=u.newAttributes;for(let G=0,et=R.length;G<et;G++)R[G]=0}function M(R){v(R,0)}function v(R,G){const et=u.newAttributes,lt=u.enabledAttributes,mt=u.attributeDivisors;et[R]=1,lt[R]===0&&(o.enableVertexAttribArray(R),lt[R]=1),mt[R]!==G&&(o.vertexAttribDivisor(R,G),mt[R]=G)}function z(){const R=u.newAttributes,G=u.enabledAttributes;for(let et=0,lt=G.length;et<lt;et++)G[et]!==R[et]&&(o.disableVertexAttribArray(et),G[et]=0)}function U(R,G,et,lt,mt,ft,P){P===!0?o.vertexAttribIPointer(R,G,et,mt,ft):o.vertexAttribPointer(R,G,et,lt,mt,ft)}function F(R,G,et,lt){C();const mt=lt.attributes,ft=et.getAttributes(),P=G.defaultAttributeValues;for(const j in ft){const Y=ft[j];if(Y.location>=0){let _t=mt[j];if(_t===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor)),_t!==void 0){const gt=_t.normalized,L=_t.itemSize,at=e.get(_t);if(at===void 0)continue;const yt=at.buffer,Et=at.type,Ot=at.bytesPerElement,nt=Et===o.INT||Et===o.UNSIGNED_INT||_t.gpuType===vd;if(_t.isInterleavedBufferAttribute){const ct=_t.data,Ct=ct.stride,Bt=_t.offset;if(ct.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)v(Y.location+Xt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)M(Y.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Xt=0;Xt<Y.locationSize;Xt++)U(Y.location+Xt,L/Y.locationSize,Et,gt,Ct*Ot,(Bt+L/Y.locationSize*Xt)*Ot,nt)}else{if(_t.isInstancedBufferAttribute){for(let ct=0;ct<Y.locationSize;ct++)v(Y.location+ct,_t.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ct=0;ct<Y.locationSize;ct++)M(Y.location+ct);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ct=0;ct<Y.locationSize;ct++)U(Y.location+ct,L/Y.locationSize,Et,gt,L*Ot,L/Y.locationSize*ct*Ot,nt)}}else if(P!==void 0){const gt=P[j];if(gt!==void 0)switch(gt.length){case 2:o.vertexAttrib2fv(Y.location,gt);break;case 3:o.vertexAttrib3fv(Y.location,gt);break;case 4:o.vertexAttrib4fv(Y.location,gt);break;default:o.vertexAttrib1fv(Y.location,gt)}}}}z()}function X(){tt();for(const R in s){const G=s[R];for(const et in G){const lt=G[et];for(const mt in lt)g(lt[mt].object),delete lt[mt];delete G[et]}delete s[R]}}function N(R){if(s[R.id]===void 0)return;const G=s[R.id];for(const et in G){const lt=G[et];for(const mt in lt)g(lt[mt].object),delete lt[mt];delete G[et]}delete s[R.id]}function I(R){for(const G in s){const et=s[G];if(et[R.id]===void 0)continue;const lt=et[R.id];for(const mt in lt)g(lt[mt].object),delete lt[mt];delete et[R.id]}}function tt(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:tt,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:M,disableUnusedAttributes:z}}function PE(o,e,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(o.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let A=0;A<_;A++)y+=g[A];i.update(y,s,1)}function m(p,g,_,S){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)h(p[A],g[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,_);let A=0;for(let C=0;C<_;C++)A+=g[C]*S[C];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function zE(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Ti&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const tt=I===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Pi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ha&&!tt)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(re("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:z,maxVaryings:U,maxFragmentUniforms:F,vertexTextures:X,maxSamples:N}}function IE(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Ya,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const y=_.length!==0||S||s!==0||l;return l=S,s=_.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,y){const A=_.clippingPlanes,C=_.clipIntersection,M=_.clipShadows,v=o.get(_);if(!l||A===null||A.length===0||u&&!M)u?g(null):p();else{const z=u?0:s,U=z*4;let F=v.clippingState||null;m.value=F,F=g(A,S,U,y);for(let X=0;X!==U;++X)F[X]=i[X];v.clippingState=F,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,S,y,A){const C=_!==null?_.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const v=y+C*4,z=S.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,F=y;U!==C;++U,F+=4)h.copy(_[U]).applyMatrix4(z,d),h.normal.toArray(M,F),M[F+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function FE(o){let e=new WeakMap;function i(h,d){return d===zh?h.mapping=Cr:d===Ih&&(h.mapping=Dr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===zh||d===Ih)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Py(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Za=4,$x=[.125,.215,.35,.446,.526,.582],Es=20,BE=256,Po=new K_,t_=new Me;let yh=null,Mh=0,bh=0,Eh=!1;const HE=new st;class e_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=HE}=u;yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Mh,bh),this._renderer.xr.enabled=Eh,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Cr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Lr,format:Ti,colorSpace:wr,depthBuffer:!1},l=n_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=GE(u)),this._blurMaterial=XE(u,e,i),this._ggxMaterial=VE(u,e,i)}return l}_compileMaterial(e){const i=new Ai(new Ja,e);this._renderer.compile(i,Po)}_sceneToCubeUV(e,i,s,l,u){const m=new mi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(t_),_.toneMapping=Ka,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ai(new Nr,new H_({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let v=!1;const z=e.background;z?z.isColor&&(M.color.copy(z),e.background=null,v=!0):(M.color.copy(t_),v=!0);for(let U=0;U<6;U++){const F=U%3;F===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[U],u.y,u.z)):F===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[U]));const X=this._cubeSize;Mr(l,F*X,U>2?X:0,X,X),_.setRenderTarget(l),v&&_.render(C,m),_.render(e,m)}_.toneMapping=y,_.autoClear=S,e.background=z}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Cr||e.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=a_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Mr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Po)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),S=.05+p*.95,y=_*S,{_lodMax:A}=this,C=this._sizeLods[s],M=3*C*(s>A-Za?s-A+Za:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=A-i,Mr(u,M,v,3*C,2*C),l.setRenderTarget(u),l.render(d,Po),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-s,Mr(e,M,v,3*C,2*C),l.setRenderTarget(e),l.render(d,Po)}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&tn("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,y=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Es-1),C=u/A,M=isFinite(u)?1+Math.floor(g*C):Es;M>Es&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Es}`);const v=[];let z=0;for(let I=0;I<Es;++I){const tt=I/C,D=Math.exp(-tt*tt/2);v.push(D),I===0?z+=D:I<M&&(z+=2*D)}for(let I=0;I<v.length;I++)v[I]=v[I]/z;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=A,S.mipInt.value=U-s;const F=this._sizeLods[l],X=3*F*(l>U-Za?l-U+Za:0),N=4*(this._cubeSize-F);Mr(i,X,N,3*F,2*F),m.setRenderTarget(i),m.render(_,Po)}}function GE(o){const e=[],i=[],s=[];let l=o;const u=o-Za+1+$x.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-Za?m=$x[h-o+Za-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,A=6,C=3,M=2,v=1,z=new Float32Array(C*A*y),U=new Float32Array(M*A*y),F=new Float32Array(v*A*y);for(let N=0;N<y;N++){const I=N%3*2/3-1,tt=N>2?0:-1,D=[I,tt,0,I+2/3,tt,0,I+2/3,tt+1,0,I,tt,0,I+2/3,tt+1,0,I,tt+1,0];z.set(D,C*A*N),U.set(S,M*A*N);const R=[N,N,N,N,N,N];F.set(R,v*A*N)}const X=new Ja;X.setAttribute("position",new Oi(z,C)),X.setAttribute("uv",new Oi(U,M)),X.setAttribute("faceIndex",new Oi(F,v)),s.push(new Ai(X,null)),l>Za&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function n_(o,e,i){const s=new Ds(o,e,i);return s.texture.mapping=Oc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Mr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function VE(o,e,i){return new ma({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function XE(o,e,i){const s=new Float32Array(Es),l=new st(0,1,0);return new ma({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function i_(){return new ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function a_(){return new ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function kE(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===zh||m===Ih,g=m===Cr||m===Dr;if(p||g){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new e_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new e_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function WE(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Vo("WebGLRenderer: "+s+" extension not supported."),l}}}function qE(o,e,i,s){const l={},u=new WeakMap;function h(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(_){const S=[],y=_.index,A=_.attributes.position;let C=0;if(y!==null){const z=y.array;C=y.version;for(let U=0,F=z.length;U<F;U+=3){const X=z[U+0],N=z[U+1],I=z[U+2];S.push(X,N,N,I,I,X)}}else if(A!==void 0){const z=A.array;C=A.version;for(let U=0,F=z.length/3-1;U<F;U+=3){const X=U+0,N=U+1,I=U+2;S.push(X,N,N,I,I,X)}}else return;const M=new(I_(S)?V_:G_)(S,1);M.version=C;const v=u.get(_);v&&e.remove(v),u.set(_,M)}function g(_){const S=u.get(_);if(S){const y=_.index;y!==null&&S.version<y.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function YE(o,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(s,y,u,S*h),i.update(y,s,1)}function p(S,y,A){A!==0&&(o.drawElementsInstanced(s,y,u,S*h,A),i.update(y,s,A))}function g(S,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,S,0,A);let M=0;for(let v=0;v<A;v++)M+=y[v];i.update(M,s,1)}function _(S,y,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<S.length;v++)p(S[v]/h,y[v],C[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,S,0,C,0,A);let v=0;for(let z=0;z<A;z++)v+=y[z]*C[z];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function jE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:tn("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ZE(o,e,i){const s=new WeakMap,l=new en;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let R=function(){tt.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let F=0;A===!0&&(F=1),C===!0&&(F=2),M===!0&&(F=3);let X=d.attributes.position.count*F,N=1;X>e.maxTextureSize&&(N=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const I=new Float32Array(X*N*4*_),tt=new F_(I,X,N,_);tt.type=ha,tt.needsUpdate=!0;const D=F*4;for(let G=0;G<_;G++){const et=v[G],lt=z[G],mt=U[G],ft=X*N*4*G;for(let P=0;P<et.count;P++){const j=P*D;A===!0&&(l.fromBufferAttribute(et,P),I[ft+j+0]=l.x,I[ft+j+1]=l.y,I[ft+j+2]=l.z,I[ft+j+3]=0),C===!0&&(l.fromBufferAttribute(lt,P),I[ft+j+4]=l.x,I[ft+j+5]=l.y,I[ft+j+6]=l.z,I[ft+j+7]=0),M===!0&&(l.fromBufferAttribute(mt,P),I[ft+j+8]=l.x,I[ft+j+9]=l.y,I[ft+j+10]=l.z,I[ft+j+11]=mt.itemSize===4?l.w:1)}}S={count:_,texture:tt,size:new oe(X,N)},s.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function KE(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const J_=new In,s_=new q_(1,1),$_=new F_,tg=new gy,eg=new W_,r_=[],o_=[],l_=new Float32Array(16),c_=new Float32Array(9),u_=new Float32Array(4);function Or(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=r_[l];if(u===void 0&&(u=new Float32Array(l),r_[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function _n(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function zc(o,e){let i=o_[e];i===void 0&&(i=new Int32Array(e),o_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function QE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function JE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function $E(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function t3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function e3(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(_n(i,s))return;u_.set(s),o.uniformMatrix2fv(this.addr,!1,u_),gn(i,s)}}function n3(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(_n(i,s))return;c_.set(s),o.uniformMatrix3fv(this.addr,!1,c_),gn(i,s)}}function i3(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(_n(i,s))return;l_.set(s),o.uniformMatrix4fv(this.addr,!1,l_),gn(i,s)}}function a3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function s3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function r3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function o3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function l3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function c3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function u3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function f3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function h3(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(s_.compareFunction=z_,u=s_):u=J_,i.setTexture2D(e||u,l)}function d3(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||tg,l)}function p3(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||eg,l)}function m3(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||$_,l)}function x3(o){switch(o){case 5126:return QE;case 35664:return JE;case 35665:return $E;case 35666:return t3;case 35674:return e3;case 35675:return n3;case 35676:return i3;case 5124:case 35670:return a3;case 35667:case 35671:return s3;case 35668:case 35672:return r3;case 35669:case 35673:return o3;case 5125:return l3;case 36294:return c3;case 36295:return u3;case 36296:return f3;case 35678:case 36198:case 36298:case 36306:case 35682:return h3;case 35679:case 36299:case 36307:return d3;case 35680:case 36300:case 36308:case 36293:return p3;case 36289:case 36303:case 36311:case 36292:return m3}}function _3(o,e){o.uniform1fv(this.addr,e)}function g3(o,e){const i=Or(e,this.size,2);o.uniform2fv(this.addr,i)}function v3(o,e){const i=Or(e,this.size,3);o.uniform3fv(this.addr,i)}function S3(o,e){const i=Or(e,this.size,4);o.uniform4fv(this.addr,i)}function y3(o,e){const i=Or(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function M3(o,e){const i=Or(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function b3(o,e){const i=Or(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function E3(o,e){o.uniform1iv(this.addr,e)}function T3(o,e){o.uniform2iv(this.addr,e)}function A3(o,e){o.uniform3iv(this.addr,e)}function R3(o,e){o.uniform4iv(this.addr,e)}function C3(o,e){o.uniform1uiv(this.addr,e)}function D3(o,e){o.uniform2uiv(this.addr,e)}function w3(o,e){o.uniform3uiv(this.addr,e)}function U3(o,e){o.uniform4uiv(this.addr,e)}function L3(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);_n(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||J_,u[h])}function N3(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);_n(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||tg,u[h])}function O3(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);_n(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||eg,u[h])}function P3(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);_n(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||$_,u[h])}function z3(o){switch(o){case 5126:return _3;case 35664:return g3;case 35665:return v3;case 35666:return S3;case 35674:return y3;case 35675:return M3;case 35676:return b3;case 5124:case 35670:return E3;case 35667:case 35671:return T3;case 35668:case 35672:return A3;case 35669:case 35673:return R3;case 5125:return C3;case 36294:return D3;case 36295:return w3;case 36296:return U3;case 35678:case 36198:case 36298:case 36306:case 35682:return L3;case 35679:case 36299:case 36307:return N3;case 35680:case 36300:case 36308:case 36293:return O3;case 36289:case 36303:case 36311:case 36292:return P3}}class I3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=x3(i.type)}}class F3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=z3(i.type)}}class B3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Th=/(\w+)(\])?(\[|\.)?/g;function f_(o,e){o.seq.push(e),o.map[e.id]=e}function H3(o,e,i){const s=o.name,l=s.length;for(Th.lastIndex=0;;){const u=Th.exec(s),h=Th.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){f_(i,p===void 0?new I3(d,o,e):new F3(d,o,e));break}else{let _=i.map[d];_===void 0&&(_=new B3(d),f_(i,_)),i=_}}}class wc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);H3(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function h_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const G3=37297;let V3=0;function X3(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const d_=new he;function k3(o){Le._getMatrix(d_,Le.workingColorSpace,o);const e=`mat3( ${d_.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case Uc:return[e,"LinearTransferOETF"];case Ve:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function p_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+X3(o.getShaderSource(e),d)}else return u}function W3(o,e){const i=k3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function q3(o,e){let i;switch(e){case WS:i="Linear";break;case qS:i="Reinhard";break;case YS:i="Cineon";break;case jS:i="ACESFilmic";break;case KS:i="AgX";break;case QS:i="Neutral";break;case ZS:i="Custom";break;default:re("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new st;function Y3(){Le.getLuminanceCoefficients(bc);const o=bc.x.toFixed(4),e=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Z3(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function K3(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Io(o){return o!==""}function m_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q3=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(o){return o.replace(Q3,$3)}const J3=new Map;function $3(o,e){let i=me[e];if(i===void 0){const s=J3.get(e);if(s!==void 0)i=me[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return xd(i)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function __(o){return o.replace(t1,e1)}function e1(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function g_(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ca&&(e="SHADOWMAP_TYPE_VSM"),e}function i1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a1(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Dr&&(e="ENVMAP_MODE_REFRACTION"),e}function s1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case A_:e="ENVMAP_BLENDING_MULTIPLY";break;case XS:e="ENVMAP_BLENDING_MIX";break;case kS:e="ENVMAP_BLENDING_ADD";break}return e}function r1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function o1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=n1(i),p=i1(i),g=a1(i),_=s1(i),S=r1(i),y=j3(i),A=Z3(u),C=l.createProgram();let M,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Io).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Io).join(`
`),v.length>0&&(v+=`
`)):(M=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),v=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?me.tonemapping_pars_fragment:"",i.toneMapping!==Ka?q3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,W3("linearToOutputTexel",i.outputColorSpace),Y3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),h=xd(h),h=m_(h,i),h=x_(h,i),d=xd(d),d=m_(d,i),d=x_(d,i),h=__(h),d=__(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===Cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=z+M+h,F=z+v+d,X=h_(l,l.VERTEX_SHADER,U),N=h_(l,l.FRAGMENT_SHADER,F);l.attachShader(C,X),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(G){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(C)||"",lt=l.getShaderInfoLog(X)||"",mt=l.getShaderInfoLog(N)||"",ft=et.trim(),P=lt.trim(),j=mt.trim();let Y=!0,_t=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,X,N);else{const gt=p_(l,X,"vertex"),L=p_(l,N,"fragment");tn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+gt+`
`+L)}else ft!==""?re("WebGLProgram: Program Info Log:",ft):(P===""||j==="")&&(_t=!1);_t&&(G.diagnostics={runnable:Y,programLog:ft,vertexShader:{log:P,prefix:M},fragmentShader:{log:j,prefix:v}})}l.deleteShader(X),l.deleteShader(N),tt=new wc(l,C),D=K3(l,C)}let tt;this.getUniforms=function(){return tt===void 0&&I(this),tt};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,G3)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=V3++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=N,this}let l1=0;class c1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new u1(e),i.set(e,s)),s}}class u1{constructor(e){this.id=l1++,this.code=e,this.usedTimes=0}}function f1(o,e,i,s,l,u,h){const d=new Dd,m=new c1,p=new Set,g=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,R,G,et,lt){const mt=et.fog,ft=lt.geometry,P=D.isMeshStandardMaterial?et.environment:null,j=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),Y=j&&j.mapping===Oc?j.image.height:null,_t=A[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&re("WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const gt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,L=gt!==void 0?gt.length:0;let at=0;ft.morphAttributes.position!==void 0&&(at=1),ft.morphAttributes.normal!==void 0&&(at=2),ft.morphAttributes.color!==void 0&&(at=3);let yt,Et,Ot,nt;if(_t){const Ce=Li[_t];yt=Ce.vertexShader,Et=Ce.fragmentShader}else yt=D.vertexShader,Et=D.fragmentShader,m.update(D),Ot=m.getVertexShaderID(D),nt=m.getFragmentShaderID(D);const ct=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Bt=lt.isInstancedMesh===!0,Xt=lt.isBatchedMesh===!0,ce=!!D.map,an=!!D.matcap,de=!!j,Re=!!D.aoMap,B=!!D.lightMap,pe=!!D.bumpMap,xe=!!D.normalMap,Pe=!!D.displacementMap,Ht=!!D.emissiveMap,ke=!!D.metalnessMap,Yt=!!D.roughnessMap,ae=D.anisotropy>0,w=D.clearcoat>0,b=D.dispersion>0,K=D.iridescence>0,dt=D.sheen>0,vt=D.transmission>0,ot=ae&&!!D.anisotropyMap,Wt=w&&!!D.clearcoatMap,Ut=w&&!!D.clearcoatNormalMap,Kt=w&&!!D.clearcoatRoughnessMap,kt=K&&!!D.iridescenceMap,St=K&&!!D.iridescenceThicknessMap,bt=dt&&!!D.sheenColorMap,qt=dt&&!!D.sheenRoughnessMap,Gt=!!D.specularMap,Nt=!!D.specularColorMap,ne=!!D.specularIntensityMap,H=vt&&!!D.transmissionMap,Dt=vt&&!!D.thicknessMap,At=!!D.gradientMap,Rt=!!D.alphaMap,Mt=D.alphaTest>0,xt=!!D.alphaHash,zt=!!D.extensions;let ie=Ka;D.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Fe={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Et,defines:D.defines,customVertexShaderID:Ot,customFragmentShaderID:nt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Xt,batchingColor:Xt&&lt._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&lt.instanceColor!==null,instancingMorph:Bt&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:wr,alphaToCoverage:!!D.alphaToCoverage,map:ce,matcap:an,envMap:de,envMapMode:de&&j.mapping,envMapCubeUVHeight:Y,aoMap:Re,lightMap:B,bumpMap:pe,normalMap:xe,displacementMap:S&&Pe,emissiveMap:Ht,normalMapObjectSpace:xe&&D.normalMapType===ey,normalMapTangentSpace:xe&&D.normalMapType===P_,metalnessMap:ke,roughnessMap:Yt,anisotropy:ae,anisotropyMap:ot,clearcoat:w,clearcoatMap:Wt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:K,iridescenceMap:kt,iridescenceThicknessMap:St,sheen:dt,sheenColorMap:bt,sheenRoughnessMap:qt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:ne,transmission:vt,transmissionMap:H,thicknessMap:Dt,gradientMap:At,opaque:D.transparent===!1&&D.blending===Tr&&D.alphaToCoverage===!1,alphaMap:Rt,alphaTest:Mt,alphaHash:xt,combine:D.combine,mapUv:ce&&C(D.map.channel),aoMapUv:Re&&C(D.aoMap.channel),lightMapUv:B&&C(D.lightMap.channel),bumpMapUv:pe&&C(D.bumpMap.channel),normalMapUv:xe&&C(D.normalMap.channel),displacementMapUv:Pe&&C(D.displacementMap.channel),emissiveMapUv:Ht&&C(D.emissiveMap.channel),metalnessMapUv:ke&&C(D.metalnessMap.channel),roughnessMapUv:Yt&&C(D.roughnessMap.channel),anisotropyMapUv:ot&&C(D.anisotropyMap.channel),clearcoatMapUv:Wt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&C(D.sheenRoughnessMap.channel),specularMapUv:Gt&&C(D.specularMap.channel),specularColorMapUv:Nt&&C(D.specularColorMap.channel),specularIntensityMapUv:ne&&C(D.specularIntensityMap.channel),transmissionMapUv:H&&C(D.transmissionMap.channel),thicknessMapUv:Dt&&C(D.thicknessMap.channel),alphaMapUv:Rt&&C(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(xe||ae),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(ce||Rt),fog:!!mt,useFog:D.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ct,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:at,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:ce&&D.map.isVideoTexture===!0&&Le.getTransfer(D.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ht&&D.emissiveMap.isVideoTexture===!0&&Le.getTransfer(D.emissiveMap.colorSpace)===Ve,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ua,flipSided:D.side===qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:zt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&D.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function v(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)R.push(G),R.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(z(R,D),U(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function z(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function U(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function F(D){const R=A[D.type];let G;if(R){const et=Li[R];G=Uy.clone(et.uniforms)}else G=D.uniforms;return G}function X(D,R){let G;for(let et=0,lt=g.length;et<lt;et++){const mt=g[et];if(mt.cacheKey===R){G=mt,++G.usedTimes;break}}return G===void 0&&(G=new o1(o,R,D,u),g.push(G)),G}function N(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function I(D){m.remove(D)}function tt(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:F,acquireProgram:X,releaseProgram:N,releaseShaderCache:I,programs:g,dispose:tt}}function h1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function d1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function v_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function S_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(_,S,y,A,C,M){let v=o[e];return v===void 0?(v={id:_.id,object:_,geometry:S,material:y,groupOrder:A,renderOrder:_.renderOrder,z:C,group:M},o[e]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=y,v.groupOrder=A,v.renderOrder=_.renderOrder,v.z=C,v.group=M),e++,v}function d(_,S,y,A,C,M){const v=h(_,S,y,A,C,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,S,y,A,C,M){const v=h(_,S,y,A,C,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||d1),s.length>1&&s.sort(S||v_),l.length>1&&l.sort(S||v_)}function g(){for(let _=e,S=o.length;_<S;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function p1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new S_,o.set(s,[h])):l>=u.length?(h=new S_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function m1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new Me};break;case"SpotLight":i={position:new st,direction:new st,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function x1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let _1=0;function g1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function v1(o){const e=new m1,i=x1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new st);const l=new st,u=new nn,h=new nn;function d(p){let g=0,_=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,A=0,C=0,M=0,v=0,z=0,U=0,F=0,X=0,N=0,I=0;p.sort(g1);for(let D=0,R=p.length;D<R;D++){const G=p[D],et=G.color,lt=G.intensity,mt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=et.r*lt,_+=et.g*lt,S+=et.b*lt;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],lt);I++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const j=G.shadow,Y=i.get(G);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=ft,s.directionalShadowMatrix[y]=G.shadow.matrix,z++}s.directional[y]=P,y++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(et).multiplyScalar(lt),P.distance=mt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[C]=P;const j=G.shadow;if(G.map&&(s.spotLightMap[X]=G.map,X++,j.updateMatrices(G),G.castShadow&&N++),s.spotLightMatrix[C]=j.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.spotShadow[C]=Y,s.spotShadowMap[C]=ft,F++}C++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(et).multiplyScalar(lt),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=P,M++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const j=G.shadow,Y=i.get(G);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,s.pointShadow[A]=Y,s.pointShadowMap[A]=ft,s.pointShadowMatrix[A]=G.shadow.matrix,U++}s.point[A]=P,A++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(lt),P.groundColor.copy(G.groundColor).multiplyScalar(lt),s.hemi[v]=P,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=S;const tt=s.hash;(tt.directionalLength!==y||tt.pointLength!==A||tt.spotLength!==C||tt.rectAreaLength!==M||tt.hemiLength!==v||tt.numDirectionalShadows!==z||tt.numPointShadows!==U||tt.numSpotShadows!==F||tt.numSpotMaps!==X||tt.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=F+X-N,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=I,tt.directionalLength=y,tt.pointLength=A,tt.spotLength=C,tt.rectAreaLength=M,tt.hemiLength=v,tt.numDirectionalShadows=z,tt.numPointShadows=U,tt.numSpotShadows=F,tt.numSpotMaps=X,tt.numLightProbes=I,s.version=_1++)}function m(p,g){let _=0,S=0,y=0,A=0,C=0;const M=g.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const U=p[v];if(U.isDirectionalLight){const F=s.directional[_];F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(M),_++}else if(U.isSpotLight){const F=s.spot[y];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(M),F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const F=s.rectArea[A];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(M),h.identity(),u.copy(U.matrixWorld),u.premultiply(M),h.extractRotation(u),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(h),F.halfHeight.applyMatrix4(h),A++}else if(U.isPointLight){const F=s.point[S];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(M),S++}else if(U.isHemisphereLight){const F=s.hemi[C];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function y_(o){const e=new v1(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function S1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new y_(o),e.set(l,[d])):u>=h.length?(d=new y_(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
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
}`;function b1(o,e,i){let s=new wd;const l=new oe,u=new oe,h=new en,d=new Vy({depthPacking:ty}),m=new Xy,p={},g=i.maxTextureSize,_={[Qa]:qn,[qn]:Qa,[ua]:ua},S=new ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:y1,fragmentShader:M1}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new Ja;A.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ai(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T_;let v=this.type;this.render=function(N,I,tt){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),et=o.state;et.setBlending(da),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const lt=v!==ca&&this.type===ca,mt=v===ca&&this.type!==ca;for(let ft=0,P=N.length;ft<P;ft++){const j=N[ft],Y=j.shadow;if(Y===void 0){re("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const _t=Y.getFrameExtents();if(l.multiply(_t),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/_t.x),l.x=u.x*_t.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/_t.y),l.y=u.y*_t.y,Y.mapSize.y=u.y)),Y.map===null||lt===!0||mt===!0){const L=this.type!==ca?{minFilter:ai,magFilter:ai}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ds(l.x,l.y,L),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const gt=Y.getViewportCount();for(let L=0;L<gt;L++){const at=Y.getViewport(L);h.set(u.x*at.x,u.y*at.y,u.x*at.z,u.y*at.w),et.viewport(h),Y.updateMatrices(j,L),s=Y.getFrustum(),F(I,tt,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===ca&&z(Y,tt),Y.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(D,R,G)};function z(N,I){const tt=e.update(C);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ds(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(I,null,tt,S,C,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(I,null,tt,y,C,null)}function U(N,I,tt,D){let R=null;const G=tt.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)R=G;else if(R=tt.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const et=R.uuid,lt=I.uuid;let mt=p[et];mt===void 0&&(mt={},p[et]=mt);let ft=mt[lt];ft===void 0&&(ft=R.clone(),mt[lt]=ft,I.addEventListener("dispose",X)),R=ft}if(R.visible=I.visible,R.wireframe=I.wireframe,D===ca?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:_[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,tt.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const et=o.properties.get(R);et.light=tt}return R}function F(N,I,tt,D,R){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===ca)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,N.matrixWorld);const lt=e.update(N),mt=N.material;if(Array.isArray(mt)){const ft=lt.groups;for(let P=0,j=ft.length;P<j;P++){const Y=ft[P],_t=mt[Y.materialIndex];if(_t&&_t.visible){const gt=U(N,_t,D,R);N.onBeforeShadow(o,N,I,tt,lt,gt,Y),o.renderBufferDirect(tt,null,lt,gt,N,Y),N.onAfterShadow(o,N,I,tt,lt,gt,Y)}}}else if(mt.visible){const ft=U(N,mt,D,R);N.onBeforeShadow(o,N,I,tt,lt,ft,null),o.renderBufferDirect(tt,null,lt,ft,N,null),N.onAfterShadow(o,N,I,tt,lt,ft,null)}}const et=N.children;for(let lt=0,mt=et.length;lt<mt;lt++)F(et[lt],I,tt,D,R)}function X(N){N.target.removeEventListener("dispose",X);for(const tt in p){const D=p[tt],R=N.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const E1={[Dh]:wh,[Uh]:Oh,[Lh]:Ph,[Rr]:Nh,[wh]:Dh,[Oh]:Uh,[Ph]:Lh,[Nh]:Rr};function T1(o,e){function i(){let H=!1;const Dt=new en;let At=null;const Rt=new en(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!H&&(o.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){H=Mt},setClear:function(Mt,xt,zt,ie,Fe){Fe===!0&&(Mt*=ie,xt*=ie,zt*=ie),Dt.set(Mt,xt,zt,ie),Rt.equals(Dt)===!1&&(o.clearColor(Mt,xt,zt,ie),Rt.copy(Dt))},reset:function(){H=!1,At=null,Rt.set(-1,0,0,0)}}}function s(){let H=!1,Dt=!1,At=null,Rt=null,Mt=null;return{setReversed:function(xt){if(Dt!==xt){const zt=e.get("EXT_clip_control");xt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Dt=xt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return Dt},setTest:function(xt){xt?ct(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(xt){At!==xt&&!H&&(o.depthMask(xt),At=xt)},setFunc:function(xt){if(Dt&&(xt=E1[xt]),Rt!==xt){switch(xt){case Dh:o.depthFunc(o.NEVER);break;case wh:o.depthFunc(o.ALWAYS);break;case Uh:o.depthFunc(o.LESS);break;case Rr:o.depthFunc(o.LEQUAL);break;case Lh:o.depthFunc(o.EQUAL);break;case Nh:o.depthFunc(o.GEQUAL);break;case Oh:o.depthFunc(o.GREATER);break;case Ph:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=xt}},setLocked:function(xt){H=xt},setClear:function(xt){Mt!==xt&&(Dt&&(xt=1-xt),o.clearDepth(xt),Mt=xt)},reset:function(){H=!1,At=null,Rt=null,Mt=null,Dt=!1}}}function l(){let H=!1,Dt=null,At=null,Rt=null,Mt=null,xt=null,zt=null,ie=null,Fe=null;return{setTest:function(Ce){H||(Ce?ct(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ce){Dt!==Ce&&!H&&(o.stencilMask(Ce),Dt=Ce)},setFunc:function(Ce,Un,Yn){(At!==Ce||Rt!==Un||Mt!==Yn)&&(o.stencilFunc(Ce,Un,Yn),At=Ce,Rt=Un,Mt=Yn)},setOp:function(Ce,Un,Yn){(xt!==Ce||zt!==Un||ie!==Yn)&&(o.stencilOp(Ce,Un,Yn),xt=Ce,zt=Un,ie=Yn)},setLocked:function(Ce){H=Ce},setClear:function(Ce){Fe!==Ce&&(o.clearStencil(Ce),Fe=Ce)},reset:function(){H=!1,Dt=null,At=null,Rt=null,Mt=null,xt=null,zt=null,ie=null,Fe=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,y=[],A=null,C=!1,M=null,v=null,z=null,U=null,F=null,X=null,N=null,I=new Me(0,0,0),tt=0,D=!1,R=null,G=null,et=null,lt=null,mt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=j>=2);let _t=null,gt={};const L=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),yt=new en().fromArray(L),Et=new en().fromArray(at);function Ot(H,Dt,At,Rt){const Mt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(H,xt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<At;zt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Rt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Dt+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return xt}const nt={};nt[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Rr),pe(!1),xe(Mx),ct(o.CULL_FACE),Re(da);function ct(H){g[H]!==!0&&(o.enable(H),g[H]=!0)}function Ct(H){g[H]!==!1&&(o.disable(H),g[H]=!1)}function Bt(H,Dt){return _[H]!==Dt?(o.bindFramebuffer(H,Dt),_[H]=Dt,H===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Dt),H===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Xt(H,Dt){let At=y,Rt=!1;if(H){At=S.get(Dt),At===void 0&&(At=[],S.set(Dt,At));const Mt=H.textures;if(At.length!==Mt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,zt=Mt.length;xt<zt;xt++)At[xt]=o.COLOR_ATTACHMENT0+xt;At.length=Mt.length,Rt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Rt=!0);Rt&&o.drawBuffers(At)}function ce(H){return A!==H?(o.useProgram(H),A=H,!0):!1}const an={[bs]:o.FUNC_ADD,[AS]:o.FUNC_SUBTRACT,[RS]:o.FUNC_REVERSE_SUBTRACT};an[CS]=o.MIN,an[DS]=o.MAX;const de={[wS]:o.ZERO,[US]:o.ONE,[LS]:o.SRC_COLOR,[Rh]:o.SRC_ALPHA,[FS]:o.SRC_ALPHA_SATURATE,[zS]:o.DST_COLOR,[OS]:o.DST_ALPHA,[NS]:o.ONE_MINUS_SRC_COLOR,[Ch]:o.ONE_MINUS_SRC_ALPHA,[IS]:o.ONE_MINUS_DST_COLOR,[PS]:o.ONE_MINUS_DST_ALPHA,[BS]:o.CONSTANT_COLOR,[HS]:o.ONE_MINUS_CONSTANT_COLOR,[GS]:o.CONSTANT_ALPHA,[VS]:o.ONE_MINUS_CONSTANT_ALPHA};function Re(H,Dt,At,Rt,Mt,xt,zt,ie,Fe,Ce){if(H===da){C===!0&&(Ct(o.BLEND),C=!1);return}if(C===!1&&(ct(o.BLEND),C=!0),H!==TS){if(H!==M||Ce!==D){if((v!==bs||F!==bs)&&(o.blendEquation(o.FUNC_ADD),v=bs,F=bs),Ce)switch(H){case Tr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bx:o.blendFunc(o.ONE,o.ONE);break;case Ex:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:tn("WebGLState: Invalid blending: ",H);break}else switch(H){case Tr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ex:tn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tx:tn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tn("WebGLState: Invalid blending: ",H);break}z=null,U=null,X=null,N=null,I.set(0,0,0),tt=0,M=H,D=Ce}return}Mt=Mt||Dt,xt=xt||At,zt=zt||Rt,(Dt!==v||Mt!==F)&&(o.blendEquationSeparate(an[Dt],an[Mt]),v=Dt,F=Mt),(At!==z||Rt!==U||xt!==X||zt!==N)&&(o.blendFuncSeparate(de[At],de[Rt],de[xt],de[zt]),z=At,U=Rt,X=xt,N=zt),(ie.equals(I)===!1||Fe!==tt)&&(o.blendColor(ie.r,ie.g,ie.b,Fe),I.copy(ie),tt=Fe),M=H,D=!1}function B(H,Dt){H.side===ua?Ct(o.CULL_FACE):ct(o.CULL_FACE);let At=H.side===qn;Dt&&(At=!At),pe(At),H.blending===Tr&&H.transparent===!1?Re(da):Re(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),u.setMask(H.colorWrite);const Rt=H.stencilWrite;d.setTest(Rt),Rt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function pe(H){R!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),R=H)}function xe(H){H!==MS?(ct(o.CULL_FACE),H!==G&&(H===Mx?o.cullFace(o.BACK):H===bS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),G=H}function Pe(H){H!==et&&(P&&o.lineWidth(H),et=H)}function Ht(H,Dt,At){H?(ct(o.POLYGON_OFFSET_FILL),(lt!==Dt||mt!==At)&&(o.polygonOffset(Dt,At),lt=Dt,mt=At)):Ct(o.POLYGON_OFFSET_FILL)}function ke(H){H?ct(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Yt(H){H===void 0&&(H=o.TEXTURE0+ft-1),_t!==H&&(o.activeTexture(H),_t=H)}function ae(H,Dt,At){At===void 0&&(_t===null?At=o.TEXTURE0+ft-1:At=_t);let Rt=gt[At];Rt===void 0&&(Rt={type:void 0,texture:void 0},gt[At]=Rt),(Rt.type!==H||Rt.texture!==Dt)&&(_t!==At&&(o.activeTexture(At),_t=At),o.bindTexture(H,Dt||nt[H]),Rt.type=H,Rt.texture=Dt)}function w(){const H=gt[_t];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function dt(){try{o.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function vt(){try{o.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Wt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ut(){try{o.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Kt(){try{o.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function kt(){try{o.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function St(){try{o.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function bt(H){yt.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),yt.copy(H))}function qt(H){Et.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Et.copy(H))}function Gt(H,Dt){let At=p.get(Dt);At===void 0&&(At=new WeakMap,p.set(Dt,At));let Rt=At.get(H);Rt===void 0&&(Rt=o.getUniformBlockIndex(Dt,H.name),At.set(H,Rt))}function Nt(H,Dt){const Rt=p.get(Dt).get(H);m.get(Dt)!==Rt&&(o.uniformBlockBinding(Dt,Rt,H.__bindingPointIndex),m.set(Dt,Rt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},_t=null,gt={},_={},S=new WeakMap,y=[],A=null,C=!1,M=null,v=null,z=null,U=null,F=null,X=null,N=null,I=new Me(0,0,0),tt=0,D=!1,R=null,G=null,et=null,lt=null,mt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ct,disable:Ct,bindFramebuffer:Bt,drawBuffers:Xt,useProgram:ce,setBlending:Re,setMaterial:B,setFlipSided:pe,setCullFace:xe,setLineWidth:Pe,setPolygonOffset:Ht,setScissorTest:ke,activeTexture:Yt,bindTexture:ae,unbindTexture:w,compressedTexImage2D:b,compressedTexImage3D:K,texImage2D:kt,texImage3D:St,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Ut,texStorage3D:Kt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Wt,scissor:bt,viewport:qt,reset:ne}}function A1(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new oe,g=new WeakMap;let _;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,b){return y?new OffscreenCanvas(w,b):Nc("canvas")}function C(w,b,K){let dt=1;const vt=ae(w);if((vt.width>K||vt.height>K)&&(dt=K/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ot=Math.floor(dt*vt.width),Wt=Math.floor(dt*vt.height);_===void 0&&(_=A(ot,Wt));const Ut=b?A(ot,Wt):_;return Ut.width=ot,Ut.height=Wt,Ut.getContext("2d").drawImage(w,0,0,ot,Wt),re("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ot+"x"+Wt+")."),Ut}else return"data"in w&&re("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),w;return w}function M(w){return w.generateMipmaps}function v(w){o.generateMipmap(w)}function z(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(w,b,K,dt,vt=!1){if(w!==null){if(o[w]!==void 0)return o[w];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot=b;if(b===o.RED&&(K===o.FLOAT&&(ot=o.R32F),K===o.HALF_FLOAT&&(ot=o.R16F),K===o.UNSIGNED_BYTE&&(ot=o.R8)),b===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.R8UI),K===o.UNSIGNED_SHORT&&(ot=o.R16UI),K===o.UNSIGNED_INT&&(ot=o.R32UI),K===o.BYTE&&(ot=o.R8I),K===o.SHORT&&(ot=o.R16I),K===o.INT&&(ot=o.R32I)),b===o.RG&&(K===o.FLOAT&&(ot=o.RG32F),K===o.HALF_FLOAT&&(ot=o.RG16F),K===o.UNSIGNED_BYTE&&(ot=o.RG8)),b===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.RG8UI),K===o.UNSIGNED_SHORT&&(ot=o.RG16UI),K===o.UNSIGNED_INT&&(ot=o.RG32UI),K===o.BYTE&&(ot=o.RG8I),K===o.SHORT&&(ot=o.RG16I),K===o.INT&&(ot=o.RG32I)),b===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),K===o.UNSIGNED_INT&&(ot=o.RGB32UI),K===o.BYTE&&(ot=o.RGB8I),K===o.SHORT&&(ot=o.RGB16I),K===o.INT&&(ot=o.RGB32I)),b===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),K===o.UNSIGNED_INT&&(ot=o.RGBA32UI),K===o.BYTE&&(ot=o.RGBA8I),K===o.SHORT&&(ot=o.RGBA16I),K===o.INT&&(ot=o.RGBA32I)),b===o.RGB&&(K===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(ot=o.R11F_G11F_B10F)),b===o.RGBA){const Wt=vt?Uc:Le.getTransfer(dt);K===o.FLOAT&&(ot=o.RGBA32F),K===o.HALF_FLOAT&&(ot=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ot=Wt===Ve?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function F(w,b){let K;return w?b===null||b===Rs||b===Bo?K=o.DEPTH24_STENCIL8:b===ha?K=o.DEPTH32F_STENCIL8:b===Fo&&(K=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rs||b===Bo?K=o.DEPTH_COMPONENT24:b===ha?K=o.DEPTH_COMPONENT32F:b===Fo&&(K=o.DEPTH_COMPONENT16),K}function X(w,b){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==ai&&w.minFilter!==xi?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function N(w){const b=w.target;b.removeEventListener("dispose",N),tt(b),b.isVideoTexture&&g.delete(b)}function I(w){const b=w.target;b.removeEventListener("dispose",I),R(b)}function tt(w){const b=s.get(w);if(b.__webglInit===void 0)return;const K=w.source,dt=S.get(K);if(dt){const vt=dt[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(w),Object.keys(dt).length===0&&S.delete(K)}s.remove(w)}function D(w){const b=s.get(w);o.deleteTexture(b.__webglTexture);const K=w.source,dt=S.get(K);delete dt[b.__cacheKey],h.memory.textures--}function R(w){const b=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let vt=0;vt<b.__webglFramebuffer[dt].length;vt++)o.deleteFramebuffer(b.__webglFramebuffer[dt][vt]);else o.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)o.deleteFramebuffer(b.__webglFramebuffer[dt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=w.textures;for(let dt=0,vt=K.length;dt<vt;dt++){const ot=s.get(K[dt]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),h.memory.textures--),s.remove(K[dt])}s.remove(w)}let G=0;function et(){G=0}function lt(){const w=G;return w>=l.maxTextures&&re("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),G+=1,w}function mt(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function ft(w,b){const K=s.get(w);if(w.isVideoTexture&&ke(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&K.__version!==w.version){const dt=w.image;if(dt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(K,w,b);return}}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+b)}function P(w,b){const K=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){nt(K,w,b);return}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+b)}function j(w,b){const K=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){nt(K,w,b);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+b)}function Y(w,b){const K=s.get(w);if(w.version>0&&K.__version!==w.version){ct(K,w,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+b)}const _t={[Fh]:o.REPEAT,[fa]:o.CLAMP_TO_EDGE,[Bh]:o.MIRRORED_REPEAT},gt={[ai]:o.NEAREST,[JS]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[xi]:o.LINEAR,[Kf]:o.LINEAR_MIPMAP_NEAREST,[Ts]:o.LINEAR_MIPMAP_LINEAR},L={[ny]:o.NEVER,[ly]:o.ALWAYS,[iy]:o.LESS,[z_]:o.LEQUAL,[ay]:o.EQUAL,[oy]:o.GEQUAL,[sy]:o.GREATER,[ry]:o.NOTEQUAL};function at(w,b){if(b.type===ha&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===xi||b.magFilter===Kf||b.magFilter===ac||b.magFilter===Ts||b.minFilter===xi||b.minFilter===Kf||b.minFilter===ac||b.minFilter===Ts)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,_t[b.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,_t[b.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,_t[b.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,gt[b.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,gt[b.minFilter]),b.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ai||b.minFilter!==ac&&b.minFilter!==Ts||b.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function yt(w,b){let K=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",N));const dt=b.source;let vt=S.get(dt);vt===void 0&&(vt={},S.set(dt,vt));const ot=mt(b);if(ot!==w.__cacheKey){vt[ot]===void 0&&(vt[ot]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,K=!0),vt[ot].usedTimes++;const Wt=vt[w.__cacheKey];Wt!==void 0&&(vt[w.__cacheKey].usedTimes--,Wt.usedTimes===0&&D(b)),w.__cacheKey=ot,w.__webglTexture=vt[ot].texture}return K}function Et(w,b,K){return Math.floor(Math.floor(w/K)/b)}function Ot(w,b,K,dt){const ot=w.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,K,dt,b.data);else{ot.sort((St,bt)=>St.start-bt.start);let Wt=0;for(let St=1;St<ot.length;St++){const bt=ot[Wt],qt=ot[St],Gt=bt.start+bt.count,Nt=Et(qt.start,b.width,4),ne=Et(bt.start,b.width,4);qt.start<=Gt+1&&Nt===ne&&Et(qt.start+qt.count-1,b.width,4)===Nt?bt.count=Math.max(bt.count,qt.start+qt.count-bt.start):(++Wt,ot[Wt]=qt)}ot.length=Wt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let St=0,bt=ot.length;St<bt;St++){const qt=ot[St],Gt=Math.floor(qt.start/4),Nt=Math.ceil(qt.count/4),ne=Gt%b.width,H=Math.floor(Gt/b.width),Dt=Nt,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),i.texSubImage2D(o.TEXTURE_2D,0,ne,H,Dt,At,K,dt,b.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function nt(w,b,K){let dt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=o.TEXTURE_3D);const vt=yt(w,b),ot=b.source;i.bindTexture(dt,w.__webglTexture,o.TEXTURE0+K);const Wt=s.get(ot);if(ot.version!==Wt.__version||vt===!0){i.activeTexture(o.TEXTURE0+K);const Ut=Le.getPrimaries(Le.workingColorSpace),Kt=b.colorSpace===ja?null:Le.getPrimaries(b.colorSpace),kt=b.colorSpace===ja||Ut===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let St=C(b.image,!1,l.maxTextureSize);St=Yt(b,St);const bt=u.convert(b.format,b.colorSpace),qt=u.convert(b.type);let Gt=U(b.internalFormat,bt,qt,b.colorSpace,b.isVideoTexture);at(dt,b);let Nt;const ne=b.mipmaps,H=b.isVideoTexture!==!0,Dt=Wt.__version===void 0||vt===!0,At=ot.dataReady,Rt=X(b,St);if(b.isDepthTexture)Gt=F(b.format===Go,b.type),Dt&&(H?i.texStorage2D(o.TEXTURE_2D,1,Gt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Gt,St.width,St.height,0,bt,qt,null));else if(b.isDataTexture)if(ne.length>0){H&&Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,ne[0].width,ne[0].height);for(let Mt=0,xt=ne.length;Mt<xt;Mt++)Nt=ne[Mt],H?At&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,qt,Nt.data):i.texImage2D(o.TEXTURE_2D,Mt,Gt,Nt.width,Nt.height,0,bt,qt,Nt.data);b.generateMipmaps=!1}else H?(Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,St.width,St.height),At&&Ot(b,St,bt,qt)):i.texImage2D(o.TEXTURE_2D,0,Gt,St.width,St.height,0,bt,qt,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){H&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Gt,ne[0].width,ne[0].height,St.depth);for(let Mt=0,xt=ne.length;Mt<xt;Mt++)if(Nt=ne[Mt],b.format!==Ti)if(bt!==null)if(H){if(At)if(b.layerUpdates.size>0){const zt=Jx(Nt.width,Nt.height,b.format,b.type);for(const ie of b.layerUpdates){const Fe=Nt.data.subarray(ie*zt/Nt.data.BYTES_PER_ELEMENT,(ie+1)*zt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ie,Nt.width,Nt.height,1,bt,Fe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Nt.width,Nt.height,St.depth,bt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Gt,Nt.width,Nt.height,St.depth,0,Nt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Nt.width,Nt.height,St.depth,bt,qt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Gt,Nt.width,Nt.height,St.depth,0,bt,qt,Nt.data)}else{H&&Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,ne[0].width,ne[0].height);for(let Mt=0,xt=ne.length;Mt<xt;Mt++)Nt=ne[Mt],b.format!==Ti?bt!==null?H?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Gt,Nt.width,Nt.height,0,Nt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?At&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt.width,Nt.height,bt,qt,Nt.data):i.texImage2D(o.TEXTURE_2D,Mt,Gt,Nt.width,Nt.height,0,bt,qt,Nt.data)}else if(b.isDataArrayTexture)if(H){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Gt,St.width,St.height,St.depth),At)if(b.layerUpdates.size>0){const Mt=Jx(St.width,St.height,b.format,b.type);for(const xt of b.layerUpdates){const zt=St.data.subarray(xt*Mt/St.data.BYTES_PER_ELEMENT,(xt+1)*Mt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,bt,qt,zt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,bt,qt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,St.width,St.height,St.depth,0,bt,qt,St.data);else if(b.isData3DTexture)H?(Dt&&i.texStorage3D(o.TEXTURE_3D,Rt,Gt,St.width,St.height,St.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,bt,qt,St.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,St.width,St.height,St.depth,0,bt,qt,St.data);else if(b.isFramebufferTexture){if(Dt)if(H)i.texStorage2D(o.TEXTURE_2D,Rt,Gt,St.width,St.height);else{let Mt=St.width,xt=St.height;for(let zt=0;zt<Rt;zt++)i.texImage2D(o.TEXTURE_2D,zt,Gt,Mt,xt,0,bt,qt,null),Mt>>=1,xt>>=1}}else if(ne.length>0){if(H&&Dt){const Mt=ae(ne[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Gt,Mt.width,Mt.height)}for(let Mt=0,xt=ne.length;Mt<xt;Mt++)Nt=ne[Mt],H?At&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,bt,qt,Nt):i.texImage2D(o.TEXTURE_2D,Mt,Gt,bt,qt,Nt);b.generateMipmaps=!1}else if(H){if(Dt){const Mt=ae(St);i.texStorage2D(o.TEXTURE_2D,Rt,Gt,Mt.width,Mt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,qt,St)}else i.texImage2D(o.TEXTURE_2D,0,Gt,bt,qt,St);M(b)&&v(dt),Wt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function ct(w,b,K){if(b.image.length!==6)return;const dt=yt(w,b),vt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+K);const ot=s.get(vt);if(vt.version!==ot.__version||dt===!0){i.activeTexture(o.TEXTURE0+K);const Wt=Le.getPrimaries(Le.workingColorSpace),Ut=b.colorSpace===ja?null:Le.getPrimaries(b.colorSpace),Kt=b.colorSpace===ja||Wt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const kt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let xt=0;xt<6;xt++)!kt&&!St?bt[xt]=C(b.image[xt],!0,l.maxCubemapSize):bt[xt]=St?b.image[xt].image:b.image[xt],bt[xt]=Yt(b,bt[xt]);const qt=bt[0],Gt=u.convert(b.format,b.colorSpace),Nt=u.convert(b.type),ne=U(b.internalFormat,Gt,Nt,b.colorSpace),H=b.isVideoTexture!==!0,Dt=ot.__version===void 0||dt===!0,At=vt.dataReady;let Rt=X(b,qt);at(o.TEXTURE_CUBE_MAP,b);let Mt;if(kt){H&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ne,qt.width,qt.height);for(let xt=0;xt<6;xt++){Mt=bt[xt].mipmaps;for(let zt=0;zt<Mt.length;zt++){const ie=Mt[zt];b.format!==Ti?Gt!==null?H?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,0,0,ie.width,ie.height,Gt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,ne,ie.width,ie.height,0,ie.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,0,0,ie.width,ie.height,Gt,Nt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt,ne,ie.width,ie.height,0,Gt,Nt,ie.data)}}}else{if(Mt=b.mipmaps,H&&Dt){Mt.length>0&&Rt++;const xt=ae(bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,bt[xt].width,bt[xt].height,Gt,Nt,bt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,bt[xt].width,bt[xt].height,0,Gt,Nt,bt[xt].data);for(let zt=0;zt<Mt.length;zt++){const Fe=Mt[zt].image[xt].image;H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,0,0,Fe.width,Fe.height,Gt,Nt,Fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,ne,Fe.width,Fe.height,0,Gt,Nt,Fe.data)}}else{H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Gt,Nt,bt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Gt,Nt,bt[xt]);for(let zt=0;zt<Mt.length;zt++){const ie=Mt[zt];H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,0,0,Gt,Nt,ie.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,zt+1,ne,Gt,Nt,ie.image[xt])}}}M(b)&&v(o.TEXTURE_CUBE_MAP),ot.__version=vt.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ct(w,b,K,dt,vt,ot){const Wt=u.convert(K.format,K.colorSpace),Ut=u.convert(K.type),Kt=U(K.internalFormat,Wt,Ut,K.colorSpace),kt=s.get(b),St=s.get(K);if(St.__renderTarget=b,!kt.__hasExternalTextures){const bt=Math.max(1,b.width>>ot),qt=Math.max(1,b.height>>ot);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ot,Kt,bt,qt,b.depth,0,Wt,Ut,null):i.texImage2D(vt,ot,Kt,bt,qt,0,Wt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),Ht(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,vt,St.__webglTexture,0,Pe(b)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,vt,St.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(w,b,K){if(o.bindRenderbuffer(o.RENDERBUFFER,w),b.depthBuffer){const dt=b.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ot=F(b.stencilBuffer,vt),Wt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Pe(b);Ht(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ot,b.width,b.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ot,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ot,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,w)}else{const dt=b.textures;for(let vt=0;vt<dt.length;vt++){const ot=dt[vt],Wt=u.convert(ot.format,ot.colorSpace),Ut=u.convert(ot.type),Kt=U(ot.internalFormat,Wt,Ut,ot.colorSpace),kt=Pe(b);K&&Ht(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Kt,b.width,b.height):Ht(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,Kt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const vt=dt.__webglTexture,ot=Pe(b);if(b.depthTexture.format===Ho)Ht(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(b.depthTexture.format===Go)Ht(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ce(w){const b=s.get(w),K=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const dt=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=dt}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const dt=w.texture.mipmaps;dt&&dt.length>0?Xt(b.__webglFramebuffer[0],w):Xt(b.__webglFramebuffer,w)}else if(K){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=o.createRenderbuffer(),Bt(b.__webglDepthbuffer[dt],w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ot)}}else{const dt=w.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Bt(b.__webglDepthbuffer,w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function an(w,b,K){const dt=s.get(w);b!==void 0&&Ct(dt.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&ce(w)}function de(w){const b=w.texture,K=s.get(w),dt=s.get(b);w.addEventListener("dispose",I);const vt=w.textures,ot=w.isWebGLCubeRenderTarget===!0,Wt=vt.length>1;if(Wt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=b.version,h.memory.textures++),ot){K.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Ut]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)K.__webglFramebuffer[Ut][Kt]=o.createFramebuffer()}else K.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)K.__webglFramebuffer[Ut]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Ut=0,Kt=vt.length;Ut<Kt;Ut++){const kt=s.get(vt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(w.samples>0&&Ht(w)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Kt=vt[Ut];K.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Ut]);const kt=u.convert(Kt.format,Kt.colorSpace),St=u.convert(Kt.type),bt=U(Kt.internalFormat,kt,St,Kt.colorSpace,w.isXRRenderTarget===!0),qt=Pe(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,bt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,K.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Bt(K.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),at(o.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(K.__webglFramebuffer[Ut][Kt],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Kt);else Ct(K.__webglFramebuffer[Ut],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(b)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Ut=0,Kt=vt.length;Ut<Kt;Ut++){const kt=vt[Ut],St=s.get(kt);let bt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(bt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,St.__webglTexture),at(bt,kt),Ct(K.__webglFramebuffer,w,kt,o.COLOR_ATTACHMENT0+Ut,bt,0),M(kt)&&v(bt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ut=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,dt.__webglTexture),at(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(K.__webglFramebuffer[Kt],w,b,o.COLOR_ATTACHMENT0,Ut,Kt);else Ct(K.__webglFramebuffer,w,b,o.COLOR_ATTACHMENT0,Ut,0);M(b)&&v(Ut),i.unbindTexture()}w.depthBuffer&&ce(w)}function Re(w){const b=w.textures;for(let K=0,dt=b.length;K<dt;K++){const vt=b[K];if(M(vt)){const ot=z(w),Wt=s.get(vt).__webglTexture;i.bindTexture(ot,Wt),v(ot),i.unbindTexture()}}}const B=[],pe=[];function xe(w){if(w.samples>0){if(Ht(w)===!1){const b=w.textures,K=w.width,dt=w.height;let vt=o.COLOR_BUFFER_BIT;const ot=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=s.get(w),Ut=b.length>1;if(Ut)for(let kt=0;kt<b.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Kt=w.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let kt=0;kt<b.length;kt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[kt]);const St=s.get(b[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,K,dt,0,0,K,dt,vt,o.NEAREST),m===!0&&(B.length=0,pe.length=0,B.push(o.COLOR_ATTACHMENT0+kt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(B.push(ot),pe.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,pe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,B))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<b.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[kt]);const St=s.get(b[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const b=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Pe(w){return Math.min(l.maxSamples,w.samples)}function Ht(w){const b=s.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ke(w){const b=h.render.frame;g.get(w)!==b&&(g.set(w,b),w.update())}function Yt(w,b){const K=w.colorSpace,dt=w.format,vt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||K!==wr&&K!==ja&&(Le.getTransfer(K)===Ve?(dt!==Ti||vt!==Pi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tn("WebGLTextures: Unsupported texture color space:",K)),b}function ae(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=et,this.setTexture2D=ft,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=an,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ht}function R1(o,e){function i(s,l=ja){let u;const h=Le.getTransfer(l);if(s===Pi)return o.UNSIGNED_BYTE;if(s===Sd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===yd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===w_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===U_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===C_)return o.BYTE;if(s===D_)return o.SHORT;if(s===Fo)return o.UNSIGNED_SHORT;if(s===vd)return o.INT;if(s===Rs)return o.UNSIGNED_INT;if(s===ha)return o.FLOAT;if(s===Lr)return o.HALF_FLOAT;if(s===L_)return o.ALPHA;if(s===N_)return o.RGB;if(s===Ti)return o.RGBA;if(s===Ho)return o.DEPTH_COMPONENT;if(s===Go)return o.DEPTH_STENCIL;if(s===O_)return o.RED;if(s===Md)return o.RED_INTEGER;if(s===bd)return o.RG;if(s===Ed)return o.RG_INTEGER;if(s===Td)return o.RGBA_INTEGER;if(s===Tc||s===Ac||s===Rc||s===Cc)if(h===Ve)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Tc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Tc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hh||s===Gh||s===Vh||s===Xh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Hh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===Wh||s===qh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===kh||s===Wh)return h===Ve?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===qh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Yh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===td)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ed)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===id)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ad)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===od||s===ld||s===cd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===od)return h===Ve?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ld)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ud||s===fd||s===hd||s===dd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===ud)return u.COMPRESSED_RED_RGTC1_EXT;if(s===fd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D1=`
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

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Y_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ma({vertexShader:C1,fragmentShader:D1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new qo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U1 extends ws{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,y=null,A=null;const C=typeof XRWebGLBinding<"u",M=new w1,v={},z=i.getContextAttributes();let U=null,F=null;const X=[],N=[],I=new oe;let tt=null;const D=new mi;D.viewport=new en;const R=new mi;R.viewport=new en;const G=[D,R],et=new jy;let lt=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ct=X[nt];return ct===void 0&&(ct=new gh,X[nt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(nt){let ct=X[nt];return ct===void 0&&(ct=new gh,X[nt]=ct),ct.getGripSpace()},this.getHand=function(nt){let ct=X[nt];return ct===void 0&&(ct=new gh,X[nt]=ct),ct.getHandSpace()};function ft(nt){const ct=N.indexOf(nt.inputSource);if(ct===-1)return;const Ct=X[ct];Ct!==void 0&&(Ct.update(nt.inputSource,nt.frame,p||h),Ct.dispatchEvent({type:nt.type,data:nt.inputSource}))}function P(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",j);for(let nt=0;nt<X.length;nt++){const ct=N[nt];ct!==null&&(N[nt]=null,X[nt].disconnect(ct))}lt=null,mt=null,M.reset();for(const nt in v)delete v[nt];e.setRenderTarget(U),y=null,S=null,_=null,l=null,F=null,Ot.stop(),s.isPresenting=!1,e.setPixelRatio(tt),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){u=nt,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",P),l.addEventListener("inputsourceschange",j),z.xrCompatible!==!0&&await i.makeXRCompatible(),tt=e.getPixelRatio(),e.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Bt=null,Xt=null;z.depth&&(Xt=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=z.stencil?Go:Ho,Bt=z.stencil?Bo:Rs);const ce={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(ce),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),F=new Ds(S.textureWidth,S.textureHeight,{format:Ti,type:Pi,depthTexture:new q_(S.textureWidth,S.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ct={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Ds(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(nt){for(let ct=0;ct<nt.removed.length;ct++){const Ct=nt.removed[ct],Bt=N.indexOf(Ct);Bt>=0&&(N[Bt]=null,X[Bt].disconnect(Ct))}for(let ct=0;ct<nt.added.length;ct++){const Ct=nt.added[ct];let Bt=N.indexOf(Ct);if(Bt===-1){for(let ce=0;ce<X.length;ce++)if(ce>=N.length){N.push(Ct),Bt=ce;break}else if(N[ce]===null){N[ce]=Ct,Bt=ce;break}if(Bt===-1)break}const Xt=X[Bt];Xt&&Xt.connect(Ct)}}const Y=new st,_t=new st;function gt(nt,ct,Ct){Y.setFromMatrixPosition(ct.matrixWorld),_t.setFromMatrixPosition(Ct.matrixWorld);const Bt=Y.distanceTo(_t),Xt=ct.projectionMatrix.elements,ce=Ct.projectionMatrix.elements,an=Xt[14]/(Xt[10]-1),de=Xt[14]/(Xt[10]+1),Re=(Xt[9]+1)/Xt[5],B=(Xt[9]-1)/Xt[5],pe=(Xt[8]-1)/Xt[0],xe=(ce[8]+1)/ce[0],Pe=an*pe,Ht=an*xe,ke=Bt/(-pe+xe),Yt=ke*-pe;if(ct.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Yt),nt.translateZ(ke),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Xt[10]===-1)nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const ae=an+ke,w=de+ke,b=Pe-Yt,K=Ht+(Bt-Yt),dt=Re*de/w*ae,vt=B*de/w*ae;nt.projectionMatrix.makePerspective(b,K,dt,vt,ae,w),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function L(nt,ct){ct===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ct.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ct=nt.near,Ct=nt.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(Ct=M.depthFar)),et.near=R.near=D.near=ct,et.far=R.far=D.far=Ct,(lt!==et.near||mt!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),lt=et.near,mt=et.far),et.layers.mask=nt.layers.mask|6,D.layers.mask=et.layers.mask&3,R.layers.mask=et.layers.mask&5;const Bt=nt.parent,Xt=et.cameras;L(et,Bt);for(let ce=0;ce<Xt.length;ce++)L(Xt[ce],Bt);Xt.length===2?gt(et,D,R):et.projectionMatrix.copy(D.projectionMatrix),at(nt,et,Bt)};function at(nt,ct,Ct){Ct===null?nt.matrix.copy(ct.matrixWorld):(nt.matrix.copy(Ct.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ct.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=pd*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(nt){m=nt,S!==null&&(S.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(et)},this.getCameraTexture=function(nt){return v[nt]};let yt=null;function Et(nt,ct){if(g=ct.getViewerPose(p||h),A=ct,g!==null){const Ct=g.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let Bt=!1;Ct.length!==et.cameras.length&&(et.cameras.length=0,Bt=!0);for(let de=0;de<Ct.length;de++){const Re=Ct[de];let B=null;if(y!==null)B=y.getViewport(Re);else{const xe=_.getViewSubImage(S,Re);B=xe.viewport,de===0&&(e.setRenderTargetTextures(F,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(F))}let pe=G[de];pe===void 0&&(pe=new mi,pe.layers.enable(de),pe.viewport=new en,G[de]=pe),pe.matrix.fromArray(Re.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Re.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(B.x,B.y,B.width,B.height),de===0&&(et.matrix.copy(pe.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Bt===!0&&et.cameras.push(pe)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const de=_.getDepthInformation(Ct[0]);de&&de.isValid&&de.texture&&M.init(de,l.renderState)}if(Xt&&Xt.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let de=0;de<Ct.length;de++){const Re=Ct[de].camera;if(Re){let B=v[Re];B||(B=new Y_,v[Re]=B);const pe=_.getCameraImage(Re);B.sourceTexture=pe}}}}for(let Ct=0;Ct<X.length;Ct++){const Bt=N[Ct],Xt=X[Ct];Bt!==null&&Xt!==void 0&&Xt.update(Bt,ct,p||h)}yt&&yt(nt,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),A=null}const Ot=new Q_;Ot.setAnimationLoop(Et),this.setAnimationLoop=function(nt){yt=nt},this.dispose=function(){}}}const Ms=new zi,L1=new nn;function N1(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,X_(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,z,U,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(M,v):v.isMeshToonMaterial?(u(M,v),_(M,v)):v.isMeshPhongMaterial?(u(M,v),g(M,v)):v.isMeshStandardMaterial?(u(M,v),S(M,v),v.isMeshPhysicalMaterial&&y(M,v,F)):v.isMeshMatcapMaterial?(u(M,v),A(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),C(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,z,U):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===qn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===qn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const z=e.get(v),U=z.envMap,F=z.envMapRotation;U&&(M.envMap.value=U,Ms.copy(F),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),M.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(Ms)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,z,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*z,M.scale.value=U*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function S(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,z){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const z=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function O1(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,U){const F=U.program;s.uniformBlockBinding(z,F)}function p(z,U){let F=l[z.id];F===void 0&&(A(z),F=g(z),l[z.id]=F,z.addEventListener("dispose",M));const X=U.program;s.updateUBOMapping(z,X);const N=e.render.frame;u[z.id]!==N&&(S(z),u[z.id]=N)}function g(z){const U=_();z.__bindingPointIndex=U;const F=o.createBuffer(),X=z.__size,N=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,X,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,F),F}function _(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return tn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const U=l[z.id],F=z.uniforms,X=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let N=0,I=F.length;N<I;N++){const tt=Array.isArray(F[N])?F[N]:[F[N]];for(let D=0,R=tt.length;D<R;D++){const G=tt[D];if(y(G,N,D,X)===!0){const et=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let mt=0;for(let ft=0;ft<lt.length;ft++){const P=lt[ft],j=C(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,et+mt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,mt),mt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(z,U,F,X){const N=z.value,I=U+"_"+F;if(X[I]===void 0)return typeof N=="number"||typeof N=="boolean"?X[I]=N:X[I]=N.clone(),!0;{const tt=X[I];if(typeof N=="number"||typeof N=="boolean"){if(tt!==N)return X[I]=N,!0}else if(tt.equals(N)===!1)return tt.copy(N),!0}return!1}function A(z){const U=z.uniforms;let F=0;const X=16;for(let I=0,tt=U.length;I<tt;I++){const D=Array.isArray(U[I])?U[I]:[U[I]];for(let R=0,G=D.length;R<G;R++){const et=D[R],lt=Array.isArray(et.value)?et.value:[et.value];for(let mt=0,ft=lt.length;mt<ft;mt++){const P=lt[mt],j=C(P),Y=F%X,_t=Y%j.boundary,gt=Y+_t;F+=_t,gt!==0&&X-gt<j.storage&&(F+=X-gt),et.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=F,F+=j.storage}}}const N=F%X;return N>0&&(F+=X-N),z.__size=F,z.__cache={},this}function C(z){const U={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(U.boundary=4,U.storage=4):z.isVector2?(U.boundary=8,U.storage=8):z.isVector3||z.isColor?(U.boundary=16,U.storage=12):z.isVector4?(U.boundary=16,U.storage=16):z.isMatrix3?(U.boundary=48,U.storage=48):z.isMatrix4?(U.boundary=64,U.storage=64):z.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",z),U}function M(z){const U=z.target;U.removeEventListener("dispose",M);const F=h.indexOf(U.__bindingPointIndex);h.splice(F,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}const P1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let la=null;function z1(){return la===null&&(la=new Fy(P1,32,32,bd,Lr),la.minFilter=xi,la.magFilter=xi,la.wrapS=fa,la.wrapT=fa,la.generateMipmaps=!1,la.needsUpdate=!0),la}class I1{constructor(e={}){const{canvas:i=cy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const A=new Set([Td,Ed,Md]),C=new Set([Pi,Rs,Fo,Bo,Sd,yd]),M=new Uint32Array(4),v=new Int32Array(4);let z=null,U=null;const F=[],X=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1;this._outputColorSpace=pi;let tt=0,D=0,R=null,G=-1,et=null;const lt=new en,mt=new en;let ft=null;const P=new Me(0);let j=0,Y=i.width,_t=i.height,gt=1,L=null,at=null;const yt=new en(0,0,Y,_t),Et=new en(0,0,Y,_t);let Ot=!1;const nt=new wd;let ct=!1,Ct=!1;const Bt=new nn,Xt=new st,ce=new en,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Re(){return R===null?gt:1}let B=s;function pe(T,k){return i.getContext(T,k)}try{const T={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gd}`),i.addEventListener("webglcontextlost",Mt,!1),i.addEventListener("webglcontextrestored",xt,!1),i.addEventListener("webglcontextcreationerror",zt,!1),B===null){const k="webgl2";if(B=pe(k,T),B===null)throw pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let xe,Pe,Ht,ke,Yt,ae,w,b,K,dt,vt,ot,Wt,Ut,Kt,kt,St,bt,qt,Gt,Nt,ne,H,Dt;function At(){xe=new WE(B),xe.init(),ne=new R1(B,xe),Pe=new zE(B,xe,e,ne),Ht=new T1(B,xe),Pe.reversedDepthBuffer&&S&&Ht.buffers.depth.setReversed(!0),ke=new jE(B),Yt=new h1,ae=new A1(B,xe,Ht,Yt,Pe,ne,ke),w=new FE(N),b=new kE(N),K=new Jy(B),H=new OE(B,K),dt=new qE(B,K,ke,H),vt=new KE(B,dt,K,ke),qt=new ZE(B,Pe,ae),kt=new IE(Yt),ot=new f1(N,w,b,xe,Pe,H,kt),Wt=new N1(N,Yt),Ut=new p1,Kt=new S1(xe),bt=new NE(N,w,b,Ht,vt,y,m),St=new b1(N,vt,Pe),Dt=new O1(B,ke,Pe,Ht),Gt=new PE(B,xe,ke),Nt=new YE(B,xe,ke),ke.programs=ot.programs,N.capabilities=Pe,N.extensions=xe,N.properties=Yt,N.renderLists=Ut,N.shadowMap=St,N.state=Ht,N.info=ke}At();const Rt=new U1(N,B);this.xr=Rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(T){T!==void 0&&(gt=T,this.setSize(Y,_t,!1))},this.getSize=function(T){return T.set(Y,_t)},this.setSize=function(T,k,it=!0){if(Rt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,_t=k,i.width=Math.floor(T*gt),i.height=Math.floor(k*gt),it===!0&&(i.style.width=T+"px",i.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(Y*gt,_t*gt).floor()},this.setDrawingBufferSize=function(T,k,it){Y=T,_t=k,gt=it,i.width=Math.floor(T*it),i.height=Math.floor(k*it),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(lt)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,k,it,J){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,k,it,J),Ht.viewport(lt.copy(yt).multiplyScalar(gt).round())},this.getScissor=function(T){return T.copy(Et)},this.setScissor=function(T,k,it,J){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,k,it,J),Ht.scissor(mt.copy(Et).multiplyScalar(gt).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(T){Ht.setScissorTest(Ot=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,it=!0){let J=0;if(T){let q=!1;if(R!==null){const Tt=R.texture.format;q=A.has(Tt)}if(q){const Tt=R.texture.type,wt=C.has(Tt),Pt=bt.getClearColor(),It=bt.getClearAlpha(),Jt=Pt.r,te=Pt.g,jt=Pt.b;wt?(M[0]=Jt,M[1]=te,M[2]=jt,M[3]=It,B.clearBufferuiv(B.COLOR,0,M)):(v[0]=Jt,v[1]=te,v[2]=jt,v[3]=It,B.clearBufferiv(B.COLOR,0,v))}else J|=B.COLOR_BUFFER_BIT}k&&(J|=B.DEPTH_BUFFER_BIT),it&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Mt,!1),i.removeEventListener("webglcontextrestored",xt,!1),i.removeEventListener("webglcontextcreationerror",zt,!1),bt.dispose(),Ut.dispose(),Kt.dispose(),Yt.dispose(),w.dispose(),b.dispose(),vt.dispose(),H.dispose(),Dt.dispose(),ot.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Pr),Rt.removeEventListener("sessionend",zr),_i.stop()};function Mt(T){T.preventDefault(),wx("WebGLRenderer: Context Lost."),I=!0}function xt(){wx("WebGLRenderer: Context Restored."),I=!1;const T=ke.autoReset,k=St.enabled,it=St.autoUpdate,J=St.needsUpdate,q=St.type;At(),ke.autoReset=T,St.enabled=k,St.autoUpdate=it,St.needsUpdate=J,St.type=q}function zt(T){tn("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ie(T){const k=T.target;k.removeEventListener("dispose",ie),Fe(k)}function Fe(T){Ce(T),Yt.remove(T)}function Ce(T){const k=Yt.get(T).programs;k!==void 0&&(k.forEach(function(it){ot.releaseProgram(it)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,it,J,q,Tt){k===null&&(k=an);const wt=q.isMesh&&q.matrixWorld.determinant()<0,Pt=Ic(T,k,it,J,q);Ht.setMaterial(J,wt);let It=it.index,Jt=1;if(J.wireframe===!0){if(It=dt.getWireframeAttribute(it),It===void 0)return;Jt=2}const te=it.drawRange,jt=it.attributes.position;let ue=te.start*Jt,Ae=(te.start+te.count)*Jt;Tt!==null&&(ue=Math.max(ue,Tt.start*Jt),Ae=Math.min(Ae,(Tt.start+Tt.count)*Jt)),It!==null?(ue=Math.max(ue,0),Ae=Math.min(Ae,It.count)):jt!=null&&(ue=Math.max(ue,0),Ae=Math.min(Ae,jt.count));const De=Ae-ue;if(De<0||De===1/0)return;H.setup(q,J,Pt,it,It);let be,Oe=Gt;if(It!==null&&(be=K.get(It),Oe=Nt,Oe.setIndex(be)),q.isMesh)J.wireframe===!0?(Ht.setLineWidth(J.wireframeLinewidth*Re()),Oe.setMode(B.LINES)):Oe.setMode(B.TRIANGLES);else if(q.isLine){let Qt=J.linewidth;Qt===void 0&&(Qt=1),Ht.setLineWidth(Qt*Re()),q.isLineSegments?Oe.setMode(B.LINES):q.isLineLoop?Oe.setMode(B.LINE_LOOP):Oe.setMode(B.LINE_STRIP)}else q.isPoints?Oe.setMode(B.POINTS):q.isSprite&&Oe.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))Oe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qt=q._multiDrawStarts,We=q._multiDrawCounts,Ee=q._multiDrawCount,vn=It?K.get(It).bytesPerElement:1,_a=Yt.get(J).currentProgram.getUniforms();for(let Ye=0;Ye<Ee;Ye++)_a.setValue(B,"_gl_DrawID",Ye),Oe.render(Qt[Ye]/vn,We[Ye])}else if(q.isInstancedMesh)Oe.renderInstances(ue,De,q.count);else if(it.isInstancedBufferGeometry){const Qt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,We=Math.min(it.instanceCount,Qt);Oe.renderInstances(ue,De,We)}else Oe.render(ue,De)};function Un(T,k,it){T.transparent===!0&&T.side===ua&&T.forceSinglePass===!1?(T.side=qn,T.needsUpdate=!0,dn(T,k,it),T.side=Qa,T.needsUpdate=!0,dn(T,k,it),T.side=ua):dn(T,k,it)}this.compile=function(T,k,it=null){it===null&&(it=T),U=Kt.get(it),U.init(k),X.push(U),it.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),T!==it&&T.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),U.setupLights();const J=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Pt=Tt[wt];Un(Pt,it,q),J.add(Pt)}else Un(Tt,it,q),J.add(Tt)}),U=X.pop(),J},this.compileAsync=function(T,k,it=null){const J=this.compile(T,k,it);return new Promise(q=>{function Tt(){if(J.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&J.delete(wt)}),J.size===0){q(T);return}setTimeout(Tt,10)}xe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Yn=null;function Yo(T){Yn&&Yn(T)}function Pr(){_i.stop()}function zr(){_i.start()}const _i=new Q_;_i.setAnimationLoop(Yo),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(T){Yn=T,Rt.setAnimationLoop(T),T===null?_i.stop():_i.start()},Rt.addEventListener("sessionstart",Pr),Rt.addEventListener("sessionend",zr),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){tn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(k),k=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,k,R),U=Kt.get(T,X.length),U.init(k),X.push(U),Bt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),nt.setFromProjectionMatrix(Bt,Ni,k.reversedDepth),Ct=this.localClippingEnabled,ct=kt.init(this.clippingPlanes,Ct),z=Ut.get(T,F.length),z.init(),F.push(z),Rt.enabled===!0&&Rt.isPresenting===!0){const Tt=N.xr.getDepthSensingMesh();Tt!==null&&$a(Tt,k,-1/0,N.sortObjects)}$a(T,k,0,N.sortObjects),z.finish(),N.sortObjects===!0&&z.sort(L,at),de=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,de&&bt.addToRenderList(z,T),this.info.render.frame++,ct===!0&&kt.beginShadows();const it=U.state.shadowsArray;St.render(it,T,k),ct===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=z.opaque,q=z.transmissive;if(U.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(q.length>0)for(let wt=0,Pt=Tt.length;wt<Pt;wt++){const It=Tt[wt];Fr(J,q,T,It)}de&&bt.render(T);for(let wt=0,Pt=Tt.length;wt<Pt;wt++){const It=Tt[wt];Ir(z,T,It,It.viewport)}}else q.length>0&&Fr(J,q,T,k),de&&bt.render(T),Ir(z,T,k);R!==null&&D===0&&(ae.updateMultisampleRenderTarget(R),ae.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(N,T,k),H.resetDefaultState(),G=-1,et=null,X.pop(),X.length>0?(U=X[X.length-1],ct===!0&&kt.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?z=F[F.length-1]:z=null};function $a(T,k,it,J){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)it=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){J&&ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Bt);const wt=vt.update(T),Pt=T.material;Pt.visible&&z.push(T,wt,Pt,it,ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){const wt=vt.update(T),Pt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ce.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ce.copy(wt.boundingSphere.center)),ce.applyMatrix4(T.matrixWorld).applyMatrix4(Bt)),Array.isArray(Pt)){const It=wt.groups;for(let Jt=0,te=It.length;Jt<te;Jt++){const jt=It[Jt],ue=Pt[jt.materialIndex];ue&&ue.visible&&z.push(T,wt,ue,it,ce.z,jt)}}else Pt.visible&&z.push(T,wt,Pt,it,ce.z,null)}}const Tt=T.children;for(let wt=0,Pt=Tt.length;wt<Pt;wt++)$a(Tt[wt],k,it,J)}function Ir(T,k,it,J){const{opaque:q,transmissive:Tt,transparent:wt}=T;U.setupLightsView(it),ct===!0&&kt.setGlobalState(N.clippingPlanes,it),J&&Ht.viewport(lt.copy(J)),q.length>0&&jn(q,k,it),Tt.length>0&&jn(Tt,k,it),wt.length>0&&jn(wt,k,it),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Fr(T,k,it,J){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[J.id]===void 0&&(U.state.transmissionRenderTarget[J.id]=new Ds(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Lr:Pi,minFilter:Ts,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Tt=U.state.transmissionRenderTarget[J.id],wt=J.viewport||lt;Tt.setSize(wt.z*N.transmissionResolutionScale,wt.w*N.transmissionResolutionScale);const Pt=N.getRenderTarget(),It=N.getActiveCubeFace(),Jt=N.getActiveMipmapLevel();N.setRenderTarget(Tt),N.getClearColor(P),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear(),de&&bt.render(it);const te=N.toneMapping;N.toneMapping=Ka;const jt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),U.setupLightsView(J),ct===!0&&kt.setGlobalState(N.clippingPlanes,J),jn(T,it,J),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Ae=0,De=k.length;Ae<De;Ae++){const be=k[Ae],{object:Oe,geometry:Qt,material:We,group:Ee}=be;if(We.side===ua&&Oe.layers.test(J.layers)){const vn=We.side;We.side=qn,We.needsUpdate=!0,on(Oe,it,J,Qt,We,Ee),We.side=vn,We.needsUpdate=!0,ue=!0}}ue===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}N.setRenderTarget(Pt,It,Jt),N.setClearColor(P,j),jt!==void 0&&(J.viewport=jt),N.toneMapping=te}function jn(T,k,it){const J=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Tt=T.length;q<Tt;q++){const wt=T[q],{object:Pt,geometry:It,group:Jt}=wt;let te=wt.material;te.allowOverride===!0&&J!==null&&(te=J),Pt.layers.test(it.layers)&&on(Pt,k,it,It,te,Jt)}}function on(T,k,it,J,q,Tt){T.onBeforeRender(N,k,it,J,q,Tt),T.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(N,k,it,J,T,Tt),q.transparent===!0&&q.side===ua&&q.forceSinglePass===!1?(q.side=qn,q.needsUpdate=!0,N.renderBufferDirect(it,k,J,q,T,Tt),q.side=Qa,q.needsUpdate=!0,N.renderBufferDirect(it,k,J,q,T,Tt),q.side=ua):N.renderBufferDirect(it,k,J,q,T,Tt),T.onAfterRender(N,k,it,J,q,Tt)}function dn(T,k,it){k.isScene!==!0&&(k=an);const J=Yt.get(T),q=U.state.lights,Tt=U.state.shadowsArray,wt=q.state.version,Pt=ot.getParameters(T,q.state,Tt,k,it),It=ot.getProgramCacheKey(Pt);let Jt=J.programs;J.environment=T.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(T.isMeshStandardMaterial?b:w).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Jt===void 0&&(T.addEventListener("dispose",ie),Jt=new Map,J.programs=Jt);let te=Jt.get(It);if(te!==void 0){if(J.currentProgram===te&&J.lightsStateVersion===wt)return Us(T,Pt),te}else Pt.uniforms=ot.getUniforms(T),T.onBeforeCompile(Pt,N),te=ot.acquireProgram(Pt,It),Jt.set(It,te),J.uniforms=Pt.uniforms;const jt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(jt.clippingPlanes=kt.uniform),Us(T,Pt),J.needsLights=jo(T),J.lightsStateVersion=wt,J.needsLights&&(jt.ambientLightColor.value=q.state.ambient,jt.lightProbe.value=q.state.probe,jt.directionalLights.value=q.state.directional,jt.directionalLightShadows.value=q.state.directionalShadow,jt.spotLights.value=q.state.spot,jt.spotLightShadows.value=q.state.spotShadow,jt.rectAreaLights.value=q.state.rectArea,jt.ltc_1.value=q.state.rectAreaLTC1,jt.ltc_2.value=q.state.rectAreaLTC2,jt.pointLights.value=q.state.point,jt.pointLightShadows.value=q.state.pointShadow,jt.hemisphereLights.value=q.state.hemi,jt.directionalShadowMap.value=q.state.directionalShadowMap,jt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,jt.spotShadowMap.value=q.state.spotShadowMap,jt.spotLightMatrix.value=q.state.spotLightMatrix,jt.spotLightMap.value=q.state.spotLightMap,jt.pointShadowMap.value=q.state.pointShadowMap,jt.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=te,J.uniformsList=null,te}function Ii(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=wc.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Us(T,k){const it=Yt.get(T);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function Ic(T,k,it,J,q){k.isScene!==!0&&(k=an),ae.resetTextureUnits();const Tt=k.fog,wt=J.isMeshStandardMaterial?k.environment:null,Pt=R===null?N.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:wr,It=(J.isMeshStandardMaterial?b:w).get(J.envMap||wt),Jt=J.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,te=!!it.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),jt=!!it.morphAttributes.position,ue=!!it.morphAttributes.normal,Ae=!!it.morphAttributes.color;let De=Ka;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(De=N.toneMapping);const be=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Oe=be!==void 0?be.length:0,Qt=Yt.get(J),We=U.state.lights;if(ct===!0&&(Ct===!0||T!==et)){const yn=T===et&&J.id===G;kt.setState(J,T,yn)}let Ee=!1;J.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==We.state.version||Qt.outputColorSpace!==Pt||q.isBatchedMesh&&Qt.batching===!1||!q.isBatchedMesh&&Qt.batching===!0||q.isBatchedMesh&&Qt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Qt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Qt.instancing===!1||!q.isInstancedMesh&&Qt.instancing===!0||q.isSkinnedMesh&&Qt.skinning===!1||!q.isSkinnedMesh&&Qt.skinning===!0||q.isInstancedMesh&&Qt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Qt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Qt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Qt.instancingMorph===!1&&q.morphTexture!==null||Qt.envMap!==It||J.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==kt.numPlanes||Qt.numIntersection!==kt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==te||Qt.morphTargets!==jt||Qt.morphNormals!==ue||Qt.morphColors!==Ae||Qt.toneMapping!==De||Qt.morphTargetsCount!==Oe)&&(Ee=!0):(Ee=!0,Qt.__version=J.version);let vn=Qt.currentProgram;Ee===!0&&(vn=dn(J,k,q));let _a=!1,Ye=!1,Fi=!1;const je=vn.getUniforms(),Sn=Qt.uniforms;if(Ht.useProgram(vn.program)&&(_a=!0,Ye=!0,Fi=!0),J.id!==G&&(G=J.id,Ye=!0),_a||et!==T){Ht.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),je.setValue(B,"projectionMatrix",T.projectionMatrix),je.setValue(B,"viewMatrix",T.matrixWorldInverse);const Tn=je.map.cameraPosition;Tn!==void 0&&Tn.setValue(B,Xt.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&je.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&je.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),et!==T&&(et=T,Ye=!0,Fi=!0)}if(q.isSkinnedMesh){je.setOptional(B,q,"bindMatrix"),je.setOptional(B,q,"bindMatrixInverse");const yn=q.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),je.setValue(B,"boneTexture",yn.boneTexture,ae))}q.isBatchedMesh&&(je.setOptional(B,q,"batchingTexture"),je.setValue(B,"batchingTexture",q._matricesTexture,ae),je.setOptional(B,q,"batchingIdTexture"),je.setValue(B,"batchingIdTexture",q._indirectTexture,ae),je.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&je.setValue(B,"batchingColorTexture",q._colorsTexture,ae));const pn=it.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&qt.update(q,it,vn),(Ye||Qt.receiveShadow!==q.receiveShadow)&&(Qt.receiveShadow=q.receiveShadow,je.setValue(B,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Sn.envMap.value=It,Sn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(Sn.envMapIntensity.value=k.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=z1()),Ye&&(je.setValue(B,"toneMappingExposure",N.toneMappingExposure),Qt.needsLights&&Fc(Sn,Fi),Tt&&J.fog===!0&&Wt.refreshFogUniforms(Sn,Tt),Wt.refreshMaterialUniforms(Sn,J,gt,_t,U.state.transmissionRenderTarget[T.id]),wc.upload(B,Ii(Qt),Sn,ae)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(wc.upload(B,Ii(Qt),Sn,ae),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&je.setValue(B,"center",q.center),je.setValue(B,"modelViewMatrix",q.modelViewMatrix),je.setValue(B,"normalMatrix",q.normalMatrix),je.setValue(B,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const yn=J.uniformsGroups;for(let Tn=0,Ri=yn.length;Tn<Ri;Tn++){const Bi=yn[Tn];Dt.update(Bi,vn),Dt.bind(Bi,vn)}}return vn}function Fc(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function jo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,k,it){const J=Yt.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Yt.get(T.texture).__webglTexture=k,Yt.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:it,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const it=Yt.get(T);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0};const ts=B.createFramebuffer();this.setRenderTarget=function(T,k=0,it=0){R=T,tt=k,D=it;let J=!0,q=null,Tt=!1,wt=!1;if(T){const It=Yt.get(T);if(It.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(T);else if(It.__hasExternalTextures)ae.rebindTextures(T,Yt.get(T.texture).__webglTexture,Yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const jt=T.depthTexture;if(It.__boundDepthTexture!==jt){if(jt!==null&&Yt.has(jt)&&(T.width!==jt.image.width||T.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(T)}}const Jt=T.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(wt=!0);const te=Yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(te[k])?q=te[k][it]:q=te[k],Tt=!0):T.samples>0&&ae.useMultisampledRTT(T)===!1?q=Yt.get(T).__webglMultisampledFramebuffer:Array.isArray(te)?q=te[it]:q=te,lt.copy(T.viewport),mt.copy(T.scissor),ft=T.scissorTest}else lt.copy(yt).multiplyScalar(gt).floor(),mt.copy(Et).multiplyScalar(gt).floor(),ft=Ot;if(it!==0&&(q=ts),Ht.bindFramebuffer(B.FRAMEBUFFER,q)&&J&&Ht.drawBuffers(T,q),Ht.viewport(lt),Ht.scissor(mt),Ht.setScissorTest(ft),Tt){const It=Yt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,It.__webglTexture,it)}else if(wt){const It=k;for(let Jt=0;Jt<T.textures.length;Jt++){const te=Yt.get(T.textures[Jt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Jt,te.__webglTexture,it,It)}}else if(T!==null&&it!==0){const It=Yt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,it)}G=-1},this.readRenderTargetPixels=function(T,k,it,J,q,Tt,wt,Pt=0){if(!(T&&T.isWebGLRenderTarget)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){Ht.bindFramebuffer(B.FRAMEBUFFER,It);try{const Jt=T.textures[Pt],te=Jt.format,jt=Jt.type;if(!Pe.textureFormatReadable(te)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(jt)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-J&&it>=0&&it<=T.height-q&&(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt),B.readPixels(k,it,J,q,ne.convert(te),ne.convert(jt),Tt))}finally{const Jt=R!==null?Yt.get(R).__webglFramebuffer:null;Ht.bindFramebuffer(B.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(T,k,it,J,q,Tt,wt,Pt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It)if(k>=0&&k<=T.width-J&&it>=0&&it<=T.height-q){Ht.bindFramebuffer(B.FRAMEBUFFER,It);const Jt=T.textures[Pt],te=Jt.format,jt=Jt.type;if(!Pe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ue),B.bufferData(B.PIXEL_PACK_BUFFER,Tt.byteLength,B.STREAM_READ),T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt),B.readPixels(k,it,J,q,ne.convert(te),ne.convert(jt),0);const Ae=R!==null?Yt.get(R).__webglFramebuffer:null;Ht.bindFramebuffer(B.FRAMEBUFFER,Ae);const De=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await uy(B,De,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ue),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Tt),B.deleteBuffer(ue),B.deleteSync(De),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,it=0){const J=Math.pow(2,-it),q=Math.floor(T.image.width*J),Tt=Math.floor(T.image.height*J),wt=k!==null?k.x:0,Pt=k!==null?k.y:0;ae.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,it,0,0,wt,Pt,q,Tt),Ht.unbindTexture()};const Br=B.createFramebuffer(),xa=B.createFramebuffer();this.copyTextureToTexture=function(T,k,it=null,J=null,q=0,Tt=null){Tt===null&&(q!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=q,q=0):Tt=0);let wt,Pt,It,Jt,te,jt,ue,Ae,De;const be=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(it!==null)wt=it.max.x-it.min.x,Pt=it.max.y-it.min.y,It=it.isBox3?it.max.z-it.min.z:1,Jt=it.min.x,te=it.min.y,jt=it.isBox3?it.min.z:0;else{const pn=Math.pow(2,-q);wt=Math.floor(be.width*pn),Pt=Math.floor(be.height*pn),T.isDataArrayTexture?It=be.depth:T.isData3DTexture?It=Math.floor(be.depth*pn):It=1,Jt=0,te=0,jt=0}J!==null?(ue=J.x,Ae=J.y,De=J.z):(ue=0,Ae=0,De=0);const Oe=ne.convert(k.format),Qt=ne.convert(k.type);let We;k.isData3DTexture?(ae.setTexture3D(k,0),We=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ae.setTexture2DArray(k,0),We=B.TEXTURE_2D_ARRAY):(ae.setTexture2D(k,0),We=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Ee=B.getParameter(B.UNPACK_ROW_LENGTH),vn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_a=B.getParameter(B.UNPACK_SKIP_PIXELS),Ye=B.getParameter(B.UNPACK_SKIP_ROWS),Fi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,be.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,be.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Jt),B.pixelStorei(B.UNPACK_SKIP_ROWS,te),B.pixelStorei(B.UNPACK_SKIP_IMAGES,jt);const je=T.isDataArrayTexture||T.isData3DTexture,Sn=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const pn=Yt.get(T),yn=Yt.get(k),Tn=Yt.get(pn.__renderTarget),Ri=Yt.get(yn.__renderTarget);Ht.bindFramebuffer(B.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ht.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Bi=0;Bi<It;Bi++)je&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.get(T).__webglTexture,q,jt+Bi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.get(k).__webglTexture,Tt,De+Bi)),B.blitFramebuffer(Jt,te,wt,Pt,ue,Ae,wt,Pt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ht.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||Yt.has(T)){const pn=Yt.get(T),yn=Yt.get(k);Ht.bindFramebuffer(B.READ_FRAMEBUFFER,Br),Ht.bindFramebuffer(B.DRAW_FRAMEBUFFER,xa);for(let Tn=0;Tn<It;Tn++)je?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,q,jt+Tn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,q),Sn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yn.__webglTexture,Tt,De+Tn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yn.__webglTexture,Tt),q!==0?B.blitFramebuffer(Jt,te,wt,Pt,ue,Ae,wt,Pt,B.COLOR_BUFFER_BIT,B.NEAREST):Sn?B.copyTexSubImage3D(We,Tt,ue,Ae,De+Tn,Jt,te,wt,Pt):B.copyTexSubImage2D(We,Tt,ue,Ae,Jt,te,wt,Pt);Ht.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Sn?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(We,Tt,ue,Ae,De,wt,Pt,It,Oe,Qt,be.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(We,Tt,ue,Ae,De,wt,Pt,It,Oe,be.data):B.texSubImage3D(We,Tt,ue,Ae,De,wt,Pt,It,Oe,Qt,be):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Tt,ue,Ae,wt,Pt,Oe,Qt,be.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Tt,ue,Ae,be.width,be.height,Oe,be.data):B.texSubImage2D(B.TEXTURE_2D,Tt,ue,Ae,wt,Pt,Oe,Qt,be);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_a),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Fi),Tt===0&&k.generateMipmaps&&B.generateMipmap(We),Ht.unbindTexture()},this.initRenderTarget=function(T){Yt.get(T).__webglFramebuffer===void 0&&ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),Ht.unbindTexture()},this.resetState=function(){tt=0,D=0,R=null,Ht.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}const M_={type:"change"},Ud={type:"start"},ng={type:"end"},Ec=new Cd,b_=new Ya,F1=Math.cos(70*hy.DEG2RAD),xn=new st,Wn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ah=1e-6;class B1 extends Ky{constructor(e,i=null){super(e,i),this.state=Xe.NONE,this.target=new st,this.cursor=new st,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new st,this._lastQuaternion=new Cs,this._lastTargetPosition=new st,this._quat=new Cs().setFromUnitVectors(e.up,new st(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qx,this._sphericalDelta=new Qx,this._scale=1,this._panOffset=new st,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new st,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=G1.bind(this),this._onPointerDown=H1.bind(this),this._onPointerUp=V1.bind(this),this._onContextMenu=Z1.bind(this),this._onMouseWheel=W1.bind(this),this._onKeyDown=q1.bind(this),this._onTouchStart=Y1.bind(this),this._onTouchMove=j1.bind(this),this._onMouseDown=X1.bind(this),this._onMouseMove=k1.bind(this),this._interceptControlDown=K1.bind(this),this._interceptControlUp=Q1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(M_),this.update(),this.state=Xe.NONE}update(e=null){const i=this.object.position;xn.copy(i).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),l<-Math.PI?l+=Wn:l>Math.PI&&(l-=Wn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),i.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=xn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new st(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new st(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ec.origin.copy(this.object.position),Ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ec.direction))<F1?this.object.lookAt(this.target):(b_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ec.intersectPlane(b_,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ah||this._lastTargetPosition.distanceToSquared(this.target)>Ah?(this.dispatchEvent(M_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wn/60*this.autoRotateSpeed*e:Wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){xn.setFromMatrixColumn(i,0),xn.multiplyScalar(-e),this._panOffset.add(xn)}_panUp(e,i){this.screenSpacePanning===!0?xn.setFromMatrixColumn(i,1):(xn.setFromMatrixColumn(i,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(e),this._panOffset.add(xn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;xn.copy(l).sub(this.target);let u=xn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new oe,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function H1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function G1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function V1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ng),this.state=Xe.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function X1(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Xe.DOLLY;break;case Er.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Xe.ROTATE}break;case Er.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Ud)}function k1(o){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function W1(o){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(o.preventDefault(),this.dispatchEvent(Ud),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(ng))}function q1(o){this.enabled!==!1&&this._handleKeyDown(o)}function Y1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Xe.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Xe.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Ud)}function j1(o){switch(this._trackPointer(o),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Xe.NONE}}function Z1(o){this.enabled!==!1&&o.preventDefault()}function K1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Q1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const J1=new Me("#60a5fa"),$1=new Me("#f97316");function tT(o,e,i){o.forEach(s=>{if(s.userData.locationId===i){s.material.color.copy($1),s.material.emissive.set("#7c2d12"),s.material.emissiveIntensity=.35;return}if(s.userData.locationId===e){s.material.color.copy(J1),s.material.emissive.set("#1d4ed8"),s.material.emissiveIntensity=.25;return}s.material.color.copy(s.userData.baseColor),s.material.emissive.set("#000000"),s.material.emissiveIntensity=0})}const eT={Boundary:"#d8dde2",Shop:"#cfd4d9",Path:"#4b5258",Dock:"#2563eb",Rack:"#7c8a96",Office:"#ef4444"};function nT(o){const e=Math.max(o.xMax-o.xMin,.1),i=Math.max(o.yMax-o.yMin,.1),s=Math.max(o.zMax-o.zMin,.1),l=new Nr(e,s,i),u=new Me(eT[o.type]),h=new j_({color:u,roughness:.55,metalness:.05,transparent:o.type==="Boundary",opacity:o.type==="Boundary"?.22:1}),d=new Ai(l,h);return d.position.set(o.xMin+e/2,o.zMin+s/2,o.yMin+i/2),d.castShadow=o.type!=="Boundary",d.receiveShadow=!0,d.userData.locationId=o.id,d.userData.baseColor=u,d}function iT(o){const e=new zo;return o.forEach(i=>{e.add(nT(i))}),e}function E_(o,e,i,s){const l=e.getBoundingClientRect(),u=new oe((o.clientX-l.left)/l.width*2-1,-((o.clientY-l.top)/l.height)*2+1),h=new Zy;h.setFromCamera(u,i);const[d]=h.intersectObjects(s,!0),m=d?.object.userData.locationId;return typeof m=="string"?m:null}function aT({locations:o,hoveredLocationId:e,selectedLocationId:i,onHoverLocation:s,onSelectLocation:l}){const u=En.useRef(null),h=En.useRef(null),d=En.useRef(null),m=En.useRef(null),p=En.useRef([]);return En.useEffect(()=>{const g=u.current;if(!g)return;const _=g,S=new Iy;S.background=new Me("#eef2f5"),h.current=S;const y=new I1({antialias:!0});y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,_.appendChild(y.domElement);const A=new mi(45,1,.1,1e3);A.position.set(48,52,72),d.current=A;const C=new B1(A,y.domElement);C.enableDamping=!0,C.target.set(20,0,20),C.maxPolarAngle=Math.PI*.48;const M=new ky("#ffffff","#a8b0b7",2.1);S.add(M);const v=new Yy("#ffffff",2.6);v.position.set(20,60,30),v.castShadow=!0,S.add(v);const z=new Ai(new qo(80,80),new j_({color:"#f8fafc",roughness:.8}));z.rotation.x=-Math.PI/2,z.position.set(20,-.04,20),z.receiveShadow=!0,S.add(z);function U(){const{width:R,height:G}=_.getBoundingClientRect();y.setSize(R,G,!1),A.aspect=R/Math.max(G,1),A.updateProjectionMatrix()}const F=new ResizeObserver(U);F.observe(_),U();let X=0;function N(){C.update(),y.render(S,A),X=requestAnimationFrame(N)}N();const I=R=>{const G=E_(R,y.domElement,A,p.current);s(G)},tt=()=>s(null),D=R=>{const G=E_(R,y.domElement,A,p.current);G&&l(G)};return y.domElement.addEventListener("pointermove",I),y.domElement.addEventListener("pointerleave",tt),y.domElement.addEventListener("pointerup",D),()=>{cancelAnimationFrame(X),F.disconnect(),y.domElement.removeEventListener("pointermove",I),y.domElement.removeEventListener("pointerleave",tt),y.domElement.removeEventListener("pointerup",D),C.dispose(),y.dispose(),_.removeChild(y.domElement)}},[s,l]),En.useEffect(()=>{const g=h.current;if(!g)return;m.current&&(g.remove(m.current),m.current.traverse(y=>{y.geometry?.dispose()}));const _=iT(o),S=[];_.traverse(y=>{y instanceof Ai&&S.push(y)}),m.current=_,p.current=S,g.add(_)},[o]),En.useEffect(()=>{tT(p.current,e,i)},[e,i,o]),ee.jsx("div",{className:"three-map-canvas",ref:u})}function sT({locations:o,hoveredLocationId:e,selectedLocationId:i,onHoverLocation:s,onSelectLocation:l}){return ee.jsxs("section",{className:"map-container",children:[ee.jsx(aT,{locations:o,hoveredLocationId:e,selectedLocationId:i,onHoverLocation:s,onSelectLocation:l}),ee.jsx("p",{className:"map-hint",children:"Pinch to zoom and drag to move"})]})}async function rT(){const o=await fetch("/api/locations");if(!o.ok)throw new Error(`Failed to load locations: ${o.status}`);return o.json()}function oT(){const[o,e]=En.useState([]),[i,s]=En.useState(!0),[l,u]=En.useState(null);return En.useEffect(()=>{let h=!1;async function d(){try{s(!0),u(null);const m=await rT();h||e(m)}catch(m){h||u(m instanceof Error?m.message:"Failed to load locations")}finally{h||s(!1)}}return d(),()=>{h=!0}},[]),{locations:o,loading:i,error:l}}function lT(o){const[e,i]=En.useState(null),[s,l]=En.useState(null);return{selectedLocation:En.useMemo(()=>o.find(h=>h.id===e)??null,[o,e]),selectedLocationId:e,hoveredLocationId:s,setSelectedLocationId:i,setHoveredLocationId:l}}function cT(){const{locations:o,loading:e,error:i}=oT(),s=lT(o),[l,u]=En.useState(""),h=En.useMemo(()=>{const d=l.trim().toLowerCase();return d?o.filter(m=>m.name.toLowerCase().includes(d)||m.type.toLowerCase().includes(d)||m.description?.toLowerCase().includes(d)):o},[o,l]);return ee.jsxs("div",{className:"app-shell",children:[ee.jsx(SS,{query:l,locations:h,selectedLocation:s.selectedLocation,selectedLocationId:s.selectedLocationId,onQueryChange:u,onSelectLocation:s.setSelectedLocationId}),ee.jsxs("main",{className:"main-panel",children:[ee.jsx(yS,{}),ee.jsx(sT,{locations:o,selectedLocationId:s.selectedLocationId,hoveredLocationId:s.hoveredLocationId,onHoverLocation:s.setHoveredLocationId,onSelectLocation:s.setSelectedLocationId}),e&&ee.jsx("div",{className:"map-status",children:"Loading layout..."}),i&&ee.jsx("div",{className:"map-status map-status-error",children:i}),ee.jsx(gS,{})]})]})}xS.createRoot(document.getElementById("root")).render(ee.jsx(En.StrictMode,{children:ee.jsx(cT,{})}));
