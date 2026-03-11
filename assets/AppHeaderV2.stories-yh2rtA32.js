import{r as s,j as l,V as Ne,R as D,d as I,m as z}from"./iframe-DHnWrkHs.js";import{r as st,P as it}from"./index-DDxpFW0c.js";import{c as oe,u as L}from"./index-H-xKwyoR.js";import{c as re,L as G}from"./Lucide-D1azRJM2.js";import{L as fe}from"./List-Df4UJnQk.js";import{E as Re}from"./EdozoLogo-Bz8O918_.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ct=re("chevron-down",at);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ut=re("circle-user-round",lt);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],ft=re("log-out",dt);function Me(e,t=[]){let r=[];function o(i,a){const c=s.createContext(a),u=r.length;r=[...r,a];const f=p=>{var b;const{scope:m,children:w,...C}=p,v=((b=m==null?void 0:m[e])==null?void 0:b[u])||c,y=s.useMemo(()=>C,Object.values(C));return l.jsx(v.Provider,{value:y,children:w})};f.displayName=i+"Provider";function d(p,m){var v;const w=((v=m==null?void 0:m[e])==null?void 0:v[u])||c,C=s.useContext(w);if(C)return C;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[f,d]}const n=()=>{const i=r.map(a=>s.createContext(a));return function(c){const u=(c==null?void 0:c[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])}};return n.scopeName=e,[o,pt(n,...t)]}function pt(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const o=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(i){const a=o.reduce((c,{useScope:u,scopeName:f})=>{const p=u(i)[`__scope${f}`];return{...c,...p}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return r.scopeName=t.scopeName,r}function P(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e==null||e(n),r===!1||!n.defaultPrevented)return t==null?void 0:t(n)}}function mt(e){const t=vt(e),r=s.forwardRef((o,n)=>{const{children:i,...a}=o,c=s.Children.toArray(i),u=c.find(ht);if(u){const f=u.props.children,d=c.map(p=>p===u?s.Children.count(f)>1?s.Children.only(null):s.isValidElement(f)?f.props.children:null:p);return l.jsx(t,{...a,ref:n,children:s.isValidElement(f)?s.cloneElement(f,void 0,d):null})}return l.jsx(t,{...a,ref:n,children:i})});return r.displayName=`${e}.Slot`,r}function vt(e){const t=s.forwardRef((r,o)=>{const{children:n,...i}=r;if(s.isValidElement(n)){const a=xt(n),c=yt(i,n.props);return n.type!==s.Fragment&&(c.ref=o?oe(o,a):a),s.cloneElement(n,c)}return s.Children.count(n)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var gt=Symbol("radix.slottable");function ht(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===gt}function yt(e,t){const r={...t};for(const o in t){const n=e[o],i=t[o];/^on[A-Z]/.test(o)?n&&i?r[o]=(...c)=>{const u=i(...c);return n(...c),u}:n&&(r[o]=n):o==="style"?r[o]={...n,...i}:o==="className"&&(r[o]=[n,i].filter(Boolean).join(" "))}return{...e,...r}}function xt(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var wt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],S=wt.reduce((e,t)=>{const r=mt(`Primitive.${t}`),o=s.forwardRef((n,i)=>{const{asChild:a,...c}=n,u=a?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(u,{...c,ref:i})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function Y(e,t){e&&st.flushSync(()=>e.dispatchEvent(t))}var $=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Ct=Ne[" useInsertionEffect ".trim().toString()]||$;function Pe({prop:e,defaultProp:t,onChange:r=()=>{},caller:o}){const[n,i,a]=Et({defaultProp:t,onChange:r}),c=e!==void 0,u=c?e:n;{const d=s.useRef(e!==void 0);s.useEffect(()=>{const p=d.current;p!==c&&console.warn(`${o} is changing from ${p?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=c},[c,o])}const f=s.useCallback(d=>{var p;if(c){const m=bt(d)?d(e):d;m!==e&&((p=a.current)==null||p.call(a,m))}else i(d)},[c,e,i,a]);return[u,f]}function Et({defaultProp:e,onChange:t}){const[r,o]=s.useState(e),n=s.useRef(r),i=s.useRef(t);return Ct(()=>{i.current=t},[t]),s.useEffect(()=>{var a;n.current!==r&&((a=i.current)==null||a.call(i,r),n.current=r)},[r,n]),[r,o,i]}function bt(e){return typeof e=="function"}var Nt=s.createContext(void 0);function Rt(e){const t=s.useContext(Nt);return e||t||"ltr"}function Mt(e,t){return s.useReducer((r,o)=>t[r][o]??r,e)}var K=e=>{const{present:t,children:r}=e,o=Pt(t),n=typeof r=="function"?r({present:o.isPresent}):s.Children.only(r),i=L(o.ref,It(n));return typeof r=="function"||o.isPresent?s.cloneElement(n,{ref:i}):null};K.displayName="Presence";function Pt(e){const[t,r]=s.useState(),o=s.useRef(null),n=s.useRef(e),i=s.useRef("none"),a=e?"mounted":"unmounted",[c,u]=Mt(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const f=H(o.current);i.current=c==="mounted"?f:"none"},[c]),$(()=>{const f=o.current,d=n.current;if(d!==e){const m=i.current,w=H(f);e?u("MOUNT"):w==="none"||(f==null?void 0:f.display)==="none"?u("UNMOUNT"):u(d&&m!==w?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,u]),$(()=>{if(t){let f;const d=t.ownerDocument.defaultView??window,p=w=>{const v=H(o.current).includes(CSS.escape(w.animationName));if(w.target===t&&v&&(u("ANIMATION_END"),!n.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",f=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},m=w=>{w.target===t&&(i.current=H(o.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{d.clearTimeout(f),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:s.useCallback(f=>{o.current=f?getComputedStyle(f):null,r(f)},[])}}function H(e){return(e==null?void 0:e.animationName)||"none"}function It(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var St=Ne[" useId ".trim().toString()]||(()=>{}),Tt=0;function Ie(e){const[t,r]=s.useState(St());return $(()=>{r(o=>o??String(Tt++))},[e]),e||(t?`radix-${t}`:"")}function pe(e){const t=_t(e),r=s.forwardRef((o,n)=>{const{children:i,...a}=o,c=s.Children.toArray(i),u=c.find(jt);if(u){const f=u.props.children,d=c.map(p=>p===u?s.Children.count(f)>1?s.Children.only(null):s.isValidElement(f)?f.props.children:null:p);return l.jsx(t,{...a,ref:n,children:s.isValidElement(f)?s.cloneElement(f,void 0,d):null})}return l.jsx(t,{...a,ref:n,children:i})});return r.displayName=`${e}.Slot`,r}function _t(e){const t=s.forwardRef((r,o)=>{const{children:n,...i}=r;if(s.isValidElement(n)){const a=Dt(n),c=Lt(i,n.props);return n.type!==s.Fragment&&(c.ref=o?oe(o,a):a),s.cloneElement(n,c)}return s.Children.count(n)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var At=Symbol("radix.slottable");function jt(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===At}function Lt(e,t){const r={...t};for(const o in t){const n=e[o],i=t[o];/^on[A-Z]/.test(o)?n&&i?r[o]=(...c)=>{const u=i(...c);return n(...c),u}:n&&(r[o]=n):o==="style"?r[o]={...n,...i}:o==="className"&&(r[o]=[n,i].filter(Boolean).join(" "))}return{...e,...r}}function Dt(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Se(e){const t=e+"CollectionProvider",[r,o]=Me(t),[n,i]=r(t,{collectionRef:{current:null},itemMap:new Map}),a=v=>{const{scope:y,children:b}=v,M=D.useRef(null),g=D.useRef(new Map).current;return l.jsx(n,{scope:y,itemMap:g,collectionRef:M,children:b})};a.displayName=t;const c=e+"CollectionSlot",u=pe(c),f=D.forwardRef((v,y)=>{const{scope:b,children:M}=v,g=i(c,b),h=L(y,g.collectionRef);return l.jsx(u,{ref:h,children:M})});f.displayName=c;const d=e+"CollectionItemSlot",p="data-radix-collection-item",m=pe(d),w=D.forwardRef((v,y)=>{const{scope:b,children:M,...g}=v,h=D.useRef(null),x=L(y,h),N=i(d,b);return D.useEffect(()=>(N.itemMap.set(h,{ref:h,...g}),()=>void N.itemMap.delete(h))),l.jsx(m,{[p]:"",ref:x,children:M})});w.displayName=d;function C(v){const y=i(e+"CollectionConsumer",v);return D.useCallback(()=>{const M=y.collectionRef.current;if(!M)return[];const g=Array.from(M.querySelectorAll(`[${p}]`));return Array.from(y.itemMap.values()).sort((N,E)=>g.indexOf(N.ref.current)-g.indexOf(E.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:a,Slot:f,ItemSlot:w},C,o]}function j(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...r)=>{var o;return(o=t.current)==null?void 0:o.call(t,...r)},[])}function $t(e,t=globalThis==null?void 0:globalThis.document){const r=j(e);s.useEffect(()=>{const o=n=>{n.key==="Escape"&&r(n)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[r,t])}var Ot="DismissableLayer",Z="dismissableLayer.update",Vt="dismissableLayer.pointerDownOutside",kt="dismissableLayer.focusOutside",me,Te=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),_e=s.forwardRef((e,t)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:n,onFocusOutside:i,onInteractOutside:a,onDismiss:c,...u}=e,f=s.useContext(Te),[d,p]=s.useState(null),m=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,w]=s.useState({}),C=L(t,E=>p(E)),v=Array.from(f.layers),[y]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),b=v.indexOf(y),M=d?v.indexOf(d):-1,g=f.layersWithOutsidePointerEventsDisabled.size>0,h=M>=b,x=Wt(E=>{const T=E.target,R=[...f.branches].some(A=>A.contains(T));!h||R||(n==null||n(E),a==null||a(E),E.defaultPrevented||c==null||c())},m),N=Kt(E=>{const T=E.target;[...f.branches].some(A=>A.contains(T))||(i==null||i(E),a==null||a(E),E.defaultPrevented||c==null||c())},m);return $t(E=>{M===f.layers.size-1&&(o==null||o(E),!E.defaultPrevented&&c&&(E.preventDefault(),c()))},m),s.useEffect(()=>{if(d)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(me=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(d)),f.layers.add(d),ve(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=me)}},[d,m,r,f]),s.useEffect(()=>()=>{d&&(f.layers.delete(d),f.layersWithOutsidePointerEventsDisabled.delete(d),ve())},[d,f]),s.useEffect(()=>{const E=()=>w({});return document.addEventListener(Z,E),()=>document.removeEventListener(Z,E)},[]),l.jsx(S.div,{...u,ref:C,style:{pointerEvents:g?h?"auto":"none":void 0,...e.style},onFocusCapture:P(e.onFocusCapture,N.onFocusCapture),onBlurCapture:P(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:P(e.onPointerDownCapture,x.onPointerDownCapture)})});_e.displayName=Ot;var Ft="DismissableLayerBranch",zt=s.forwardRef((e,t)=>{const r=s.useContext(Te),o=s.useRef(null),n=L(t,o);return s.useEffect(()=>{const i=o.current;if(i)return r.branches.add(i),()=>{r.branches.delete(i)}},[r.branches]),l.jsx(S.div,{...e,ref:n})});zt.displayName=Ft;function Wt(e,t=globalThis==null?void 0:globalThis.document){const r=j(e),o=s.useRef(!1),n=s.useRef(()=>{});return s.useEffect(()=>{const i=c=>{if(c.target&&!o.current){let u=function(){Ae(Vt,r,f,{discrete:!0})};const f={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",n.current),n.current=u,t.addEventListener("click",n.current,{once:!0})):u()}else t.removeEventListener("click",n.current);o.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",i),t.removeEventListener("click",n.current)}},[t,r]),{onPointerDownCapture:()=>o.current=!0}}function Kt(e,t=globalThis==null?void 0:globalThis.document){const r=j(e),o=s.useRef(!1);return s.useEffect(()=>{const n=i=>{i.target&&!o.current&&Ae(kt,r,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",n),()=>t.removeEventListener("focusin",n)},[t,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function ve(){const e=new CustomEvent(Z);document.dispatchEvent(e)}function Ae(e,t,r,{discrete:o}){const n=r.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&n.addEventListener(e,t,{once:!0}),o?Y(n,i):n.dispatchEvent(i)}function Ht(e){const t=s.useRef({value:e,previous:e});return s.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Ut=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Bt="VisuallyHidden",je=s.forwardRef((e,t)=>l.jsx(S.span,{...e,ref:t,style:{...Ut,...e.style}}));je.displayName=Bt;var Xt=je,O="NavigationMenu",[se,Le,qt]=Se(O),[J,Gt,Yt]=Se(O),[ie,Un]=Me(O,[qt,Yt]),[Zt,_]=ie(O),[Jt,Qt]=ie(O),De=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,onValueChange:n,defaultValue:i,delayDuration:a=200,skipDelayDuration:c=300,orientation:u="horizontal",dir:f,...d}=e,[p,m]=s.useState(null),w=L(t,R=>m(R)),C=Rt(f),v=s.useRef(0),y=s.useRef(0),b=s.useRef(0),[M,g]=s.useState(!0),[h,x]=Pe({prop:o,onChange:R=>{const A=R!=="",q=c>0;A?(window.clearTimeout(b.current),q&&g(!1)):(window.clearTimeout(b.current),b.current=window.setTimeout(()=>g(!0),c)),n==null||n(R)},defaultProp:i??"",caller:O}),N=s.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>x(""),150)},[x]),E=s.useCallback(R=>{window.clearTimeout(y.current),x(R)},[x]),T=s.useCallback(R=>{h===R?window.clearTimeout(y.current):v.current=window.setTimeout(()=>{window.clearTimeout(y.current),x(R)},a)},[h,x,a]);return s.useEffect(()=>()=>{window.clearTimeout(v.current),window.clearTimeout(y.current),window.clearTimeout(b.current)},[]),l.jsx($e,{scope:r,isRootMenu:!0,value:h,dir:C,orientation:u,rootNavigationMenu:p,onTriggerEnter:R=>{window.clearTimeout(v.current),M?T(R):E(R)},onTriggerLeave:()=>{window.clearTimeout(v.current),N()},onContentEnter:()=>window.clearTimeout(y.current),onContentLeave:N,onItemSelect:R=>{x(A=>A===R?"":R)},onItemDismiss:()=>x(""),children:l.jsx(S.nav,{"aria-label":"Main","data-orientation":u,dir:C,...d,ref:w})})});De.displayName=O;var Q="NavigationMenuSub",en=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,onValueChange:n,defaultValue:i,orientation:a="horizontal",...c}=e,u=_(Q,r),[f,d]=Pe({prop:o,onChange:n,defaultProp:i??"",caller:Q});return l.jsx($e,{scope:r,isRootMenu:!1,value:f,dir:u.dir,orientation:a,rootNavigationMenu:u.rootNavigationMenu,onTriggerEnter:p=>d(p),onItemSelect:p=>d(p),onItemDismiss:()=>d(""),children:l.jsx(S.div,{"data-orientation":a,...c,ref:t})})});en.displayName=Q;var $e=e=>{const{scope:t,isRootMenu:r,rootNavigationMenu:o,dir:n,orientation:i,children:a,value:c,onItemSelect:u,onItemDismiss:f,onTriggerEnter:d,onTriggerLeave:p,onContentEnter:m,onContentLeave:w}=e,[C,v]=s.useState(null),[y,b]=s.useState(new Map),[M,g]=s.useState(null);return l.jsx(Zt,{scope:t,isRootMenu:r,rootNavigationMenu:o,value:c,previousValue:Ht(c),baseId:Ie(),dir:n,orientation:i,viewport:C,onViewportChange:v,indicatorTrack:M,onIndicatorTrackChange:g,onTriggerEnter:j(d),onTriggerLeave:j(p),onContentEnter:j(m),onContentLeave:j(w),onItemSelect:j(u),onItemDismiss:j(f),onViewportContentChange:s.useCallback((h,x)=>{b(N=>(N.set(h,x),new Map(N)))},[]),onViewportContentRemove:s.useCallback(h=>{b(x=>x.has(h)?(x.delete(h),new Map(x)):x)},[]),children:l.jsx(se.Provider,{scope:t,children:l.jsx(Jt,{scope:t,items:y,children:a})})})},Oe="NavigationMenuList",Ve=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=_(Oe,r),i=l.jsx(S.ul,{"data-orientation":n.orientation,...o,ref:t});return l.jsx(S.div,{style:{position:"relative"},ref:n.onIndicatorTrackChange,children:l.jsx(se.Slot,{scope:r,children:n.isRootMenu?l.jsx(Xe,{asChild:!0,children:i}):i})})});Ve.displayName=Oe;var ke="NavigationMenuItem",[tn,Fe]=ie(ke),ze=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,...n}=e,i=Ie(),a=o||i||"LEGACY_REACT_AUTO_VALUE",c=s.useRef(null),u=s.useRef(null),f=s.useRef(null),d=s.useRef(()=>{}),p=s.useRef(!1),m=s.useCallback((C="start")=>{if(c.current){d.current();const v=te(c.current);v.length&&le(C==="start"?v:v.reverse())}},[]),w=s.useCallback(()=>{if(c.current){const C=te(c.current);C.length&&(d.current=un(C))}},[]);return l.jsx(tn,{scope:r,value:a,triggerRef:u,contentRef:c,focusProxyRef:f,wasEscapeCloseRef:p,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:w,onContentFocusOutside:w,children:l.jsx(S.li,{...n,ref:t})})});ze.displayName=ke;var ee="NavigationMenuTrigger",We=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,disabled:o,...n}=e,i=_(ee,e.__scopeNavigationMenu),a=Fe(ee,e.__scopeNavigationMenu),c=s.useRef(null),u=L(c,a.triggerRef,t),f=Ge(i.baseId,a.value),d=Ye(i.baseId,a.value),p=s.useRef(!1),m=s.useRef(!1),w=a.value===i.value;return l.jsxs(l.Fragment,{children:[l.jsx(se.ItemSlot,{scope:r,value:a.value,children:l.jsx(qe,{asChild:!0,children:l.jsx(S.button,{id:f,disabled:o,"data-disabled":o?"":void 0,"data-state":ue(w),"aria-expanded":w,"aria-controls":d,...n,ref:u,onPointerEnter:P(e.onPointerEnter,()=>{m.current=!1,a.wasEscapeCloseRef.current=!1}),onPointerMove:P(e.onPointerMove,B(()=>{o||m.current||a.wasEscapeCloseRef.current||p.current||(i.onTriggerEnter(a.value),p.current=!0)})),onPointerLeave:P(e.onPointerLeave,B(()=>{o||(i.onTriggerLeave(),p.current=!1)})),onClick:P(e.onClick,()=>{i.onItemSelect(a.value),m.current=w}),onKeyDown:P(e.onKeyDown,C=>{const y={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];w&&C.key===y&&(a.onEntryKeyDown(),C.preventDefault())})})})}),w&&l.jsxs(l.Fragment,{children:[l.jsx(Xt,{"aria-hidden":!0,tabIndex:0,ref:a.focusProxyRef,onFocus:C=>{const v=a.contentRef.current,y=C.relatedTarget,b=y===c.current,M=v==null?void 0:v.contains(y);(b||!M)&&a.onFocusProxyEnter(b?"start":"end")}}),i.viewport&&l.jsx("span",{"aria-owns":d})]})]})});We.displayName=ee;var nn="NavigationMenuLink",ge="navigationMenu.linkSelect",Ke=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,active:o,onSelect:n,...i}=e;return l.jsx(qe,{asChild:!0,children:l.jsx(S.a,{"data-active":o?"":void 0,"aria-current":o?"page":void 0,...i,ref:t,onClick:P(e.onClick,a=>{const c=a.target,u=new CustomEvent(ge,{bubbles:!0,cancelable:!0});if(c.addEventListener(ge,f=>n==null?void 0:n(f),{once:!0}),Y(c,u),!u.defaultPrevented&&!a.metaKey){const f=new CustomEvent(U,{bubbles:!0,cancelable:!0});Y(c,f)}},{checkForDefaultPrevented:!1})})})});Ke.displayName=nn;var ae="NavigationMenuIndicator",on=s.forwardRef((e,t)=>{const{forceMount:r,...o}=e,n=_(ae,e.__scopeNavigationMenu),i=!!n.value;return n.indicatorTrack?it.createPortal(l.jsx(K,{present:r||i,children:l.jsx(rn,{...o,ref:t})}),n.indicatorTrack):null});on.displayName=ae;var rn=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=_(ae,r),i=Le(r),[a,c]=s.useState(null),[u,f]=s.useState(null),d=n.orientation==="horizontal",p=!!n.value;s.useEffect(()=>{var v;const C=(v=i().find(y=>y.value===n.value))==null?void 0:v.ref.current;C&&c(C)},[i,n.value]);const m=()=>{a&&f({size:d?a.offsetWidth:a.offsetHeight,offset:d?a.offsetLeft:a.offsetTop})};return ne(a,m),ne(n.indicatorTrack,m),u?l.jsx(S.div,{"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":n.orientation,...o,ref:t,style:{position:"absolute",...d?{left:0,width:u.size+"px",transform:`translateX(${u.offset}px)`}:{top:0,height:u.size+"px",transform:`translateY(${u.offset}px)`},...o.style}}):null}),k="NavigationMenuContent",He=s.forwardRef((e,t)=>{const{forceMount:r,...o}=e,n=_(k,e.__scopeNavigationMenu),i=Fe(k,e.__scopeNavigationMenu),a=L(i.contentRef,t),c=i.value===n.value,u={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...o};return n.viewport?l.jsx(sn,{forceMount:r,...u,ref:a}):l.jsx(K,{present:r||c,children:l.jsx(Ue,{"data-state":ue(c),...u,ref:a,onPointerEnter:P(e.onPointerEnter,n.onContentEnter),onPointerLeave:P(e.onPointerLeave,B(n.onContentLeave)),style:{pointerEvents:!c&&n.isRootMenu?"none":void 0,...u.style}})})});He.displayName=k;var sn=s.forwardRef((e,t)=>{const r=_(k,e.__scopeNavigationMenu),{onViewportContentChange:o,onViewportContentRemove:n}=r;return $(()=>{o(e.value,{ref:t,...e})},[e,t,o]),$(()=>()=>n(e.value),[e.value,n]),null}),U="navigationMenu.rootContentDismiss",Ue=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,triggerRef:n,focusProxyRef:i,wasEscapeCloseRef:a,onRootContentClose:c,onContentFocusOutside:u,...f}=e,d=_(k,r),p=s.useRef(null),m=L(p,t),w=Ge(d.baseId,o),C=Ye(d.baseId,o),v=Le(r),y=s.useRef(null),{onItemDismiss:b}=d;s.useEffect(()=>{const g=p.current;if(d.isRootMenu&&g){const h=()=>{var x;b(),c(),g.contains(document.activeElement)&&((x=n.current)==null||x.focus())};return g.addEventListener(U,h),()=>g.removeEventListener(U,h)}},[d.isRootMenu,e.value,n,b,c]);const M=s.useMemo(()=>{const h=v().map(A=>A.value);d.dir==="rtl"&&h.reverse();const x=h.indexOf(d.value),N=h.indexOf(d.previousValue),E=o===d.value,T=N===h.indexOf(o);if(!E&&!T)return y.current;const R=(()=>{if(x!==N){if(E&&N!==-1)return x>N?"from-end":"from-start";if(T&&x!==-1)return x>N?"to-start":"to-end"}return null})();return y.current=R,R},[d.previousValue,d.value,d.dir,v,o]);return l.jsx(Xe,{asChild:!0,children:l.jsx(_e,{id:C,"aria-labelledby":w,"data-motion":M,"data-orientation":d.orientation,...f,ref:m,disableOutsidePointerEvents:!1,onDismiss:()=>{var h;const g=new Event(U,{bubbles:!0,cancelable:!0});(h=p.current)==null||h.dispatchEvent(g)},onFocusOutside:P(e.onFocusOutside,g=>{var x;u();const h=g.target;(x=d.rootNavigationMenu)!=null&&x.contains(h)&&g.preventDefault()}),onPointerDownOutside:P(e.onPointerDownOutside,g=>{var E;const h=g.target,x=v().some(T=>{var R;return(R=T.ref.current)==null?void 0:R.contains(h)}),N=d.isRootMenu&&((E=d.viewport)==null?void 0:E.contains(h));(x||N||!d.isRootMenu)&&g.preventDefault()}),onKeyDown:P(e.onKeyDown,g=>{var N;const h=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!h){const E=te(g.currentTarget),T=document.activeElement,R=E.findIndex(rt=>rt===T),q=g.shiftKey?E.slice(0,R).reverse():E.slice(R+1,E.length);le(q)?g.preventDefault():(N=i.current)==null||N.focus()}}),onEscapeKeyDown:P(e.onEscapeKeyDown,g=>{a.current=!0})})})}),ce="NavigationMenuViewport",Be=s.forwardRef((e,t)=>{const{forceMount:r,...o}=e,i=!!_(ce,e.__scopeNavigationMenu).value;return l.jsx(K,{present:r||i,children:l.jsx(an,{...o,ref:t})})});Be.displayName=ce;var an=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,children:o,...n}=e,i=_(ce,r),a=L(t,i.onViewportChange),c=Qt(k,e.__scopeNavigationMenu),[u,f]=s.useState(null),[d,p]=s.useState(null),m=u?(u==null?void 0:u.width)+"px":void 0,w=u?(u==null?void 0:u.height)+"px":void 0,C=!!i.value,v=C?i.value:i.previousValue;return ne(d,()=>{d&&f({width:d.offsetWidth,height:d.offsetHeight})}),l.jsx(S.div,{"data-state":ue(C),"data-orientation":i.orientation,...n,ref:a,style:{pointerEvents:!C&&i.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":m,"--radix-navigation-menu-viewport-height":w,...n.style},onPointerEnter:P(e.onPointerEnter,i.onContentEnter),onPointerLeave:P(e.onPointerLeave,B(i.onContentLeave)),children:Array.from(c.items).map(([b,{ref:M,forceMount:g,...h}])=>{const x=v===b;return l.jsx(K,{present:g||x,children:l.jsx(Ue,{...h,ref:oe(M,N=>{x&&N&&p(N)})})},b)})})}),cn="FocusGroup",Xe=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=_(cn,r);return l.jsx(J.Provider,{scope:r,children:l.jsx(J.Slot,{scope:r,children:l.jsx(S.div,{dir:n.dir,...o,ref:t})})})}),he=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],ln="FocusGroupItem",qe=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=Gt(r),i=_(ln,r);return l.jsx(J.ItemSlot,{scope:r,children:l.jsx(S.button,{...o,ref:t,onKeyDown:P(e.onKeyDown,a=>{if(["Home","End",...he].includes(a.key)){let u=n().map(p=>p.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(a.key)&&u.reverse(),he.includes(a.key)){const p=u.indexOf(a.currentTarget);u=u.slice(p+1)}setTimeout(()=>le(u)),a.preventDefault()}})})})});function te(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const n=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||n?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function le(e){const t=document.activeElement;return e.some(r=>r===t?!0:(r.focus(),document.activeElement!==t))}function un(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const r=t.dataset.tabindex;t.setAttribute("tabindex",r)})}}function ne(e,t){const r=j(t);$(()=>{let o=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(o),o=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(o),n.unobserve(e)}}},[e,r])}function ue(e){return e?"open":"closed"}function Ge(e,t){return`${e}-trigger-${t}`}function Ye(e,t){return`${e}-content-${t}`}function B(e){return t=>t.pointerType==="mouse"?e(t):void 0}var dn=De,fn=Ve,pn=ze,Ze=We,Je=Ke,mn=He,vn=Be;const gn=I.span`
  display: inline-flex;
  align-items: center;
`,hn=I.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
`,yn=I.div`
  display: flex;
  flex-direction: column;
`,xn=I.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.indigo[800]};
`,wn=z`
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Cn=z`
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,En=z`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(120px);
  }
`,bn=z`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-120px);
  }
`,Nn=z`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.96);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`,Rn=z`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.96);
  }
`,Mn=I(dn)`
  position: relative;
  display: flex;
  align-items: stretch;
`,Pn=I(fn)`
  list-style: none;
  margin: 0;
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.standard};
`,de=I(pn)`
  position: relative;
`,In=I(Ze)`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing["2xs"]};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: transparent;
  color: ${({theme:e})=>e.colors.neutral[700]};
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  border-radius: ${({theme:e})=>e.borderRadius.standard};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral[200]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.blue[300]};
  }

  &[data-state='open'] svg {
    transform: rotate(-180deg);
  }

  svg {
    transition: transform 200ms ease;
  }
`,Sn=I(Ze)`
  all: unset;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.colors.neutral[300]};
  border-radius: 999px;
  width: 36px;
  height: 36px;
  background: ${({theme:e})=>e.colors.neutral[50]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 100ms ease-out, border-color 120ms ease-out;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral[200]};
    border-color: ${({theme:e})=>e.colors.neutral[400]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.blue[300]};
  }
`,Qe=I(mn)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.standard};
  padding: ${({theme:e})=>e.spacing.sm};
  min-width: 220px;
  z-index: 3;
  animation-duration: 250ms;
  animation-timing-function: ease;

  &[data-motion='from-start'] {
    animation-name: ${Cn};
  }

  &[data-motion='from-end'] {
    animation-name: ${wn};
  }

  &[data-motion='to-start'] {
    animation-name: ${bn};
  }

  &[data-motion='to-end'] {
    animation-name: ${En};
  }

  button {
    text-decoration: none;
  }
`,Tn=I.div`
  position: relative;
  top: 70%;
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  transform: rotate(45deg);
  border-top-left-radius: 2px;
  border: 1px solid ${({theme:e})=>e.colors.neutral[300]};
  border-bottom: none;
  border-right: none;
`,_n=I.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`,An=I(vn)`
  position: relative;
  transform-origin: top center;
  margin-top: ${({theme:e})=>e.spacing.xs};
  width: 100%;
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.standard};
  overflow: visible;
  box-shadow: ${({theme:e})=>e.boxShadow.xlarge};
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;

  &[data-state='open'] {
    animation: ${Nn} 200ms ease;
  }

  &[data-state='closed'] {
    animation: ${Rn} 200ms ease;
  }
`,et=({edozoProducts:e,triggerProps:t})=>{const r=o=>{window.open(o.url,"_blank")};return l.jsxs(de,{children:[l.jsxs(In,{...t,children:[l.jsx(gn,{children:"Products"}),l.jsx(G,{icon:ct,size:"sm","aria-hidden":"true"})]}),l.jsx(Qe,{children:l.jsx(fe,{variant:"platform",children:e.map(o=>l.jsx(fe.Item,{onClick:()=>r(o),disabled:o.disabled,children:l.jsxs(yn,{children:[l.jsx(xn,{children:o.appName}),l.jsx(hn,{children:o.description})]})},o.url))})})]})};et.__docgenInfo={description:"",methods:[],displayName:"ProductSwitchV2",props:{edozoProducts:{required:!0,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:""},triggerProps:{required:!1,tsType:{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<'button'>",elements:[{name:"literal",value:"'button'"}]},description:""}}};const jn=I.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,tt=({children:e})=>l.jsx(jn,{children:e});tt.__docgenInfo={description:"",methods:[],displayName:"PlatformMenuV2"};const Ln=I.div`
  > a {
    display: inline-flex;
    align-items: center;
    height: 100%;
    color: ${({theme:e})=>e.colors.neutral[700]};
    font-family: ${({theme:e})=>e.typography.fontFamily.sans};
    font-size: ${({theme:e})=>e.typography.scale.sm.size};
    line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
    font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
    text-decoration: none;
    padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.sm};
    border-radius: ${({theme:e})=>e.borderRadius.standard};

    &:hover {
      background: ${({theme:e})=>e.colors.neutral[200]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.blue[900]};
      outline: none;
    }
  }
`,nt=({children:e})=>l.jsx(de,{children:l.jsx(Ln,{children:l.jsx(Je,{asChild:!0,children:e})})});nt.__docgenInfo={description:"",methods:[],displayName:"MenuItemV2"};const F=({children:e,openOnClickOnly:t=!1,closeOnOutsideClickOnly:r=!1})=>{const[o,n]=s.useState(""),i=s.useRef(null);s.useEffect(()=>{if(!r)return;const c=u=>{if(!i.current)return;const f=u.target;f instanceof Node&&(i.current.contains(f)||n(""))};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[r]);const a=c=>{r&&c===""||n(c)};return l.jsxs(Mn,{ref:i,value:r?o:void 0,onValueChange:r?a:void 0,onPointerMove:t?c=>c.preventDefault():void 0,onPointerLeave:t?c=>c.preventDefault():void 0,children:[l.jsx(Pn,{children:e}),l.jsx(Tn,{}),l.jsx(_n,{children:l.jsx(An,{})})]})};F.Item=nt;F.PlatformMenu=tt;F.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"PlatformMenu",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"MenuV2",props:{openOnClickOnly:{defaultValue:{value:"false",computed:!1},required:!1},closeOnOutsideClickOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};const Dn=I.div`
  position: sticky;
  top: 0;
  max-height: 60px;
  min-height: 60px;
  background: ${({theme:e})=>e.colors.neutral[50]};
  box-shadow: ${({theme:e})=>e.boxShadow.xsmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({theme:e})=>e.spacing.lg};
  z-index: 2;
  width: 100%;
`,ot=({children:e})=>l.jsx(Dn,{children:e});ot.__docgenInfo={description:"",methods:[],displayName:"HeaderV2"};const $n=I.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.standard};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-decoration: none;
  color: ${({theme:e})=>e.colors.status.danger[700]};

  &:hover {
    background: ${({theme:e})=>e.colors.status.danger[100]};
    color: ${({theme:e})=>e.colors.status.danger[700]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.blue[400]};
    outline: none;
  }
`,On=[{appName:"Maps",description:"Create best in class OS mapping with single click technology",url:"https://maps.edozo.com/"},{appName:"Occupiers",description:"Create plans and see occupiers for all use classes",url:"https://occupiers.edozo.com/"},{appName:"Insight",description:"Find thousands of commercial property transaction comps",url:"https://insight.edozo.com/"},{appName:"Reports",description:"Create automated valuation reports",url:"https://reports.edozo.com/"}],X=({logoSection:e,logout:t,isAuthenticated:r,edozoProducts:o=On,children:n,openOnClickOnly:i=!0})=>l.jsxs(ot,{children:[e,r&&l.jsxs(F,{openOnClickOnly:i,closeOnOutsideClickOnly:!0,children:[n,l.jsx(et,{edozoProducts:o,triggerProps:i?{onPointerMove:a=>a.preventDefault(),onPointerLeave:a=>a.preventDefault()}:void 0}),l.jsxs(de,{children:[l.jsx(Sn,{"aria-label":"Account menu",onPointerMove:i?a=>a.preventDefault():void 0,onPointerLeave:i?a=>a.preventDefault():void 0,children:l.jsx(G,{icon:ut,size:"md","aria-hidden":"true"})}),l.jsx(Qe,{children:l.jsx(Je,{asChild:!0,children:l.jsxs($n,{type:"button",onClick:t,"data-testid":"logoutButton",children:[l.jsx(G,{icon:ft,size:"sm","aria-hidden":"true"}),"Logout"]})})})]})]})]});X.__docgenInfo={description:"",methods:[],displayName:"AppHeaderV2",props:{logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},logoSection:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isAuthenticated:{required:!1,tsType:{name:"boolean"},description:""},edozoProducts:{required:!1,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:"",defaultValue:{value:`[
  {
    appName: 'Maps',
    description: 'Create best in class OS mapping with single click technology',
    url: 'https://maps.edozo.com/',
  },
  {
    appName: 'Occupiers',
    description: 'Create plans and see occupiers for all use classes',
    url: 'https://occupiers.edozo.com/',
  },
  {
    appName: 'Insight',
    description: 'Find thousands of commercial property transaction comps',
    url: 'https://insight.edozo.com/',
  },
  {
    appName: 'Reports',
    description: 'Create automated valuation reports',
    url: 'https://reports.edozo.com/',
  },
]`,computed:!1}},openOnClickOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Bn={title:"Components/HeaderV2",component:X},W=()=>l.jsx(X,{logoSection:l.jsx(Re,{variant:"edozo",size:"small"}),logout:()=>{}}),V=e=>l.jsx(X,{logoSection:l.jsx("a",{children:l.jsx(Re,{variant:"edozo"})}),isAuthenticated:e.isAuthenticated,logout:e.logout,children:l.jsxs(s.Fragment,{children:[l.jsx(F.Item,{children:l.jsx("a",{className:"active",children:"Help"})}),l.jsx(F.Item,{children:l.jsx("a",{children:"Docs"})})]})});V.args={isAuthenticated:!0,logout:()=>console.log("app specific logout method")};W.__docgenInfo={description:"",methods:[],displayName:"Default"};V.__docgenInfo={description:"",methods:[],displayName:"ControlledAppHeader"};var ye,xe,we;W.parameters={...W.parameters,docs:{...(ye=W.parameters)==null?void 0:ye.docs,source:{originalSource:'() => <AppHeaderV2 logoSection={<EdozoLogo variant={"edozo" as LogoVariants} size="small" />} logout={() => {}} />',...(we=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Ce,Ee,be;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => <AppHeaderV2 logoSection={<a>
        <EdozoLogo variant={"edozo" as LogoVariants} />
      </a>} isAuthenticated={args.isAuthenticated} logout={args.logout}>
    <Fragment>
      <MenuV2.Item>
        <a className="active">Help</a>
      </MenuV2.Item>
      <MenuV2.Item>
        <a>Docs</a>
      </MenuV2.Item>
    </Fragment>
  </AppHeaderV2>`,...(be=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:be.source}}};const Xn=["Default","ControlledAppHeader"];export{V as ControlledAppHeader,W as Default,Xn as __namedExportsOrder,Bn as default};
