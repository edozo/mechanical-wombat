import{r as s,j as l,V as Ie,R as D,d as I,m as z}from"./iframe-D_ylYApI.js";import{r as ut,P as dt}from"./index-B9WJPlW7.js";import{c as re,u as L}from"./index-EfH-__yw.js";import{c as se,L as Y}from"./Lucide-DdVjS6p8.js";import{E as Se}from"./EdozoLogoV2-DwqUgY4S.js";import{L as pe}from"./List-C6_xgZdj.js";import{E as Te}from"./EdozoLogo-DazFnUOt.js";import"./preload-helper-C1FmrZbK.js";import"./edozo-logo-NeVFMK4-.js";/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],pt=se("chevron-down",ft);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],vt=se("circle-user-round",mt);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],ht=se("log-out",gt);function _e(e,t=[]){let r=[];function o(i,a){const c=s.createContext(a),u=r.length;r=[...r,a];const f=p=>{var b;const{scope:m,children:w,...C}=p,v=((b=m==null?void 0:m[e])==null?void 0:b[u])||c,y=s.useMemo(()=>C,Object.values(C));return l.jsx(v.Provider,{value:y,children:w})};f.displayName=i+"Provider";function d(p,m){var v;const w=((v=m==null?void 0:m[e])==null?void 0:v[u])||c,C=s.useContext(w);if(C)return C;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[f,d]}const n=()=>{const i=r.map(a=>s.createContext(a));return function(c){const u=(c==null?void 0:c[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])}};return n.scopeName=e,[o,yt(n,...t)]}function yt(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const o=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(i){const a=o.reduce((c,{useScope:u,scopeName:f})=>{const p=u(i)[`__scope${f}`];return{...c,...p}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return r.scopeName=t.scopeName,r}function P(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e==null||e(n),r===!1||!n.defaultPrevented)return t==null?void 0:t(n)}}function xt(e){const t=wt(e),r=s.forwardRef((o,n)=>{const{children:i,...a}=o,c=s.Children.toArray(i),u=c.find(Et);if(u){const f=u.props.children,d=c.map(p=>p===u?s.Children.count(f)>1?s.Children.only(null):s.isValidElement(f)?f.props.children:null:p);return l.jsx(t,{...a,ref:n,children:s.isValidElement(f)?s.cloneElement(f,void 0,d):null})}return l.jsx(t,{...a,ref:n,children:i})});return r.displayName=`${e}.Slot`,r}function wt(e){const t=s.forwardRef((r,o)=>{const{children:n,...i}=r;if(s.isValidElement(n)){const a=Nt(n),c=bt(i,n.props);return n.type!==s.Fragment&&(c.ref=o?re(o,a):a),s.cloneElement(n,c)}return s.Children.count(n)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Ct=Symbol("radix.slottable");function Et(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ct}function bt(e,t){const r={...t};for(const o in t){const n=e[o],i=t[o];/^on[A-Z]/.test(o)?n&&i?r[o]=(...c)=>{const u=i(...c);return n(...c),u}:n&&(r[o]=n):o==="style"?r[o]={...n,...i}:o==="className"&&(r[o]=[n,i].filter(Boolean).join(" "))}return{...e,...r}}function Nt(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Rt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],S=Rt.reduce((e,t)=>{const r=xt(`Primitive.${t}`),o=s.forwardRef((n,i)=>{const{asChild:a,...c}=n,u=a?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(u,{...c,ref:i})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function Z(e,t){e&&ut.flushSync(()=>e.dispatchEvent(t))}var O=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Mt=Ie[" useInsertionEffect ".trim().toString()]||O;function Ae({prop:e,defaultProp:t,onChange:r=()=>{},caller:o}){const[n,i,a]=Pt({defaultProp:t,onChange:r}),c=e!==void 0,u=c?e:n;{const d=s.useRef(e!==void 0);s.useEffect(()=>{const p=d.current;p!==c&&console.warn(`${o} is changing from ${p?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=c},[c,o])}const f=s.useCallback(d=>{var p;if(c){const m=It(d)?d(e):d;m!==e&&((p=a.current)==null||p.call(a,m))}else i(d)},[c,e,i,a]);return[u,f]}function Pt({defaultProp:e,onChange:t}){const[r,o]=s.useState(e),n=s.useRef(r),i=s.useRef(t);return Mt(()=>{i.current=t},[t]),s.useEffect(()=>{var a;n.current!==r&&((a=i.current)==null||a.call(i,r),n.current=r)},[r,n]),[r,o,i]}function It(e){return typeof e=="function"}var St=s.createContext(void 0);function Tt(e){const t=s.useContext(St);return e||t||"ltr"}function _t(e,t){return s.useReducer((r,o)=>t[r][o]??r,e)}var H=e=>{const{present:t,children:r}=e,o=At(t),n=typeof r=="function"?r({present:o.isPresent}):s.Children.only(r),i=L(o.ref,jt(n));return typeof r=="function"||o.isPresent?s.cloneElement(n,{ref:i}):null};H.displayName="Presence";function At(e){const[t,r]=s.useState(),o=s.useRef(null),n=s.useRef(e),i=s.useRef("none"),a=e?"mounted":"unmounted",[c,u]=_t(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const f=B(o.current);i.current=c==="mounted"?f:"none"},[c]),O(()=>{const f=o.current,d=n.current;if(d!==e){const m=i.current,w=B(f);e?u("MOUNT"):w==="none"||(f==null?void 0:f.display)==="none"?u("UNMOUNT"):u(d&&m!==w?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,u]),O(()=>{if(t){let f;const d=t.ownerDocument.defaultView??window,p=w=>{const v=B(o.current).includes(CSS.escape(w.animationName));if(w.target===t&&v&&(u("ANIMATION_END"),!n.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",f=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},m=w=>{w.target===t&&(i.current=B(o.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{d.clearTimeout(f),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:s.useCallback(f=>{o.current=f?getComputedStyle(f):null,r(f)},[])}}function B(e){return(e==null?void 0:e.animationName)||"none"}function jt(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Lt=Ie[" useId ".trim().toString()]||(()=>{}),Dt=0;function je(e){const[t,r]=s.useState(Lt());return O(()=>{r(o=>o??String(Dt++))},[e]),e||(t?`radix-${t}`:"")}function me(e){const t=Ot(e),r=s.forwardRef((o,n)=>{const{children:i,...a}=o,c=s.Children.toArray(i),u=c.find(Vt);if(u){const f=u.props.children,d=c.map(p=>p===u?s.Children.count(f)>1?s.Children.only(null):s.isValidElement(f)?f.props.children:null:p);return l.jsx(t,{...a,ref:n,children:s.isValidElement(f)?s.cloneElement(f,void 0,d):null})}return l.jsx(t,{...a,ref:n,children:i})});return r.displayName=`${e}.Slot`,r}function Ot(e){const t=s.forwardRef((r,o)=>{const{children:n,...i}=r;if(s.isValidElement(n)){const a=Ft(n),c=kt(i,n.props);return n.type!==s.Fragment&&(c.ref=o?re(o,a):a),s.cloneElement(n,c)}return s.Children.count(n)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var $t=Symbol("radix.slottable");function Vt(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===$t}function kt(e,t){const r={...t};for(const o in t){const n=e[o],i=t[o];/^on[A-Z]/.test(o)?n&&i?r[o]=(...c)=>{const u=i(...c);return n(...c),u}:n&&(r[o]=n):o==="style"?r[o]={...n,...i}:o==="className"&&(r[o]=[n,i].filter(Boolean).join(" "))}return{...e,...r}}function Ft(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Le(e){const t=e+"CollectionProvider",[r,o]=_e(t),[n,i]=r(t,{collectionRef:{current:null},itemMap:new Map}),a=v=>{const{scope:y,children:b}=v,M=D.useRef(null),g=D.useRef(new Map).current;return l.jsx(n,{scope:y,itemMap:g,collectionRef:M,children:b})};a.displayName=t;const c=e+"CollectionSlot",u=me(c),f=D.forwardRef((v,y)=>{const{scope:b,children:M}=v,g=i(c,b),h=L(y,g.collectionRef);return l.jsx(u,{ref:h,children:M})});f.displayName=c;const d=e+"CollectionItemSlot",p="data-radix-collection-item",m=me(d),w=D.forwardRef((v,y)=>{const{scope:b,children:M,...g}=v,h=D.useRef(null),x=L(y,h),N=i(d,b);return D.useEffect(()=>(N.itemMap.set(h,{ref:h,...g}),()=>void N.itemMap.delete(h))),l.jsx(m,{[p]:"",ref:x,children:M})});w.displayName=d;function C(v){const y=i(e+"CollectionConsumer",v);return D.useCallback(()=>{const M=y.collectionRef.current;if(!M)return[];const g=Array.from(M.querySelectorAll(`[${p}]`));return Array.from(y.itemMap.values()).sort((N,E)=>g.indexOf(N.ref.current)-g.indexOf(E.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:a,Slot:f,ItemSlot:w},C,o]}function j(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...r)=>{var o;return(o=t.current)==null?void 0:o.call(t,...r)},[])}function zt(e,t=globalThis==null?void 0:globalThis.document){const r=j(e);s.useEffect(()=>{const o=n=>{n.key==="Escape"&&r(n)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[r,t])}var Wt="DismissableLayer",J="dismissableLayer.update",Kt="dismissableLayer.pointerDownOutside",Ht="dismissableLayer.focusOutside",ve,De=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Oe=s.forwardRef((e,t)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:n,onFocusOutside:i,onInteractOutside:a,onDismiss:c,...u}=e,f=s.useContext(De),[d,p]=s.useState(null),m=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,w]=s.useState({}),C=L(t,E=>p(E)),v=Array.from(f.layers),[y]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),b=v.indexOf(y),M=d?v.indexOf(d):-1,g=f.layersWithOutsidePointerEventsDisabled.size>0,h=M>=b,x=Xt(E=>{const T=E.target,R=[...f.branches].some(A=>A.contains(T));!h||R||(n==null||n(E),a==null||a(E),E.defaultPrevented||c==null||c())},m),N=qt(E=>{const T=E.target;[...f.branches].some(A=>A.contains(T))||(i==null||i(E),a==null||a(E),E.defaultPrevented||c==null||c())},m);return zt(E=>{M===f.layers.size-1&&(o==null||o(E),!E.defaultPrevented&&c&&(E.preventDefault(),c()))},m),s.useEffect(()=>{if(d)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(ve=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(d)),f.layers.add(d),ge(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=ve)}},[d,m,r,f]),s.useEffect(()=>()=>{d&&(f.layers.delete(d),f.layersWithOutsidePointerEventsDisabled.delete(d),ge())},[d,f]),s.useEffect(()=>{const E=()=>w({});return document.addEventListener(J,E),()=>document.removeEventListener(J,E)},[]),l.jsx(S.div,{...u,ref:C,style:{pointerEvents:g?h?"auto":"none":void 0,...e.style},onFocusCapture:P(e.onFocusCapture,N.onFocusCapture),onBlurCapture:P(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:P(e.onPointerDownCapture,x.onPointerDownCapture)})});Oe.displayName=Wt;var Ut="DismissableLayerBranch",Bt=s.forwardRef((e,t)=>{const r=s.useContext(De),o=s.useRef(null),n=L(t,o);return s.useEffect(()=>{const i=o.current;if(i)return r.branches.add(i),()=>{r.branches.delete(i)}},[r.branches]),l.jsx(S.div,{...e,ref:n})});Bt.displayName=Ut;function Xt(e,t=globalThis==null?void 0:globalThis.document){const r=j(e),o=s.useRef(!1),n=s.useRef(()=>{});return s.useEffect(()=>{const i=c=>{if(c.target&&!o.current){let u=function(){$e(Kt,r,f,{discrete:!0})};const f={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",n.current),n.current=u,t.addEventListener("click",n.current,{once:!0})):u()}else t.removeEventListener("click",n.current);o.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",i),t.removeEventListener("click",n.current)}},[t,r]),{onPointerDownCapture:()=>o.current=!0}}function qt(e,t=globalThis==null?void 0:globalThis.document){const r=j(e),o=s.useRef(!1);return s.useEffect(()=>{const n=i=>{i.target&&!o.current&&$e(Ht,r,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",n),()=>t.removeEventListener("focusin",n)},[t,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function ge(){const e=new CustomEvent(J);document.dispatchEvent(e)}function $e(e,t,r,{discrete:o}){const n=r.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&n.addEventListener(e,t,{once:!0}),o?Z(n,i):n.dispatchEvent(i)}function Gt(e){const t=s.useRef({value:e,previous:e});return s.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Yt=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Zt="VisuallyHidden",Ve=s.forwardRef((e,t)=>l.jsx(S.span,{...e,ref:t,style:{...Yt,...e.style}}));Ve.displayName=Zt;var Jt=Ve,$="NavigationMenu",[ie,ke,Qt]=Le($),[Q,en,tn]=Le($),[ae]=_e($,[Qt,tn]),[nn,_]=ae($),[on,rn]=ae($),Fe=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,onValueChange:n,defaultValue:i,delayDuration:a=200,skipDelayDuration:c=300,orientation:u="horizontal",dir:f,...d}=e,[p,m]=s.useState(null),w=L(t,R=>m(R)),C=Tt(f),v=s.useRef(0),y=s.useRef(0),b=s.useRef(0),[M,g]=s.useState(!0),[h,x]=Ae({prop:o,onChange:R=>{const A=R!=="",G=c>0;A?(window.clearTimeout(b.current),G&&g(!1)):(window.clearTimeout(b.current),b.current=window.setTimeout(()=>g(!0),c)),n==null||n(R)},defaultProp:i??"",caller:$}),N=s.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>x(""),150)},[x]),E=s.useCallback(R=>{window.clearTimeout(y.current),x(R)},[x]),T=s.useCallback(R=>{h===R?window.clearTimeout(y.current):v.current=window.setTimeout(()=>{window.clearTimeout(y.current),x(R)},a)},[h,x,a]);return s.useEffect(()=>()=>{window.clearTimeout(v.current),window.clearTimeout(y.current),window.clearTimeout(b.current)},[]),l.jsx(ze,{scope:r,isRootMenu:!0,value:h,dir:C,orientation:u,rootNavigationMenu:p,onTriggerEnter:R=>{window.clearTimeout(v.current),M?T(R):E(R)},onTriggerLeave:()=>{window.clearTimeout(v.current),N()},onContentEnter:()=>window.clearTimeout(y.current),onContentLeave:N,onItemSelect:R=>{x(A=>A===R?"":R)},onItemDismiss:()=>x(""),children:l.jsx(S.nav,{"aria-label":"Main","data-orientation":u,dir:C,...d,ref:w})})});Fe.displayName=$;var ee="NavigationMenuSub",sn=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,onValueChange:n,defaultValue:i,orientation:a="horizontal",...c}=e,u=_(ee,r),[f,d]=Ae({prop:o,onChange:n,defaultProp:i??"",caller:ee});return l.jsx(ze,{scope:r,isRootMenu:!1,value:f,dir:u.dir,orientation:a,rootNavigationMenu:u.rootNavigationMenu,onTriggerEnter:p=>d(p),onItemSelect:p=>d(p),onItemDismiss:()=>d(""),children:l.jsx(S.div,{"data-orientation":a,...c,ref:t})})});sn.displayName=ee;var ze=e=>{const{scope:t,isRootMenu:r,rootNavigationMenu:o,dir:n,orientation:i,children:a,value:c,onItemSelect:u,onItemDismiss:f,onTriggerEnter:d,onTriggerLeave:p,onContentEnter:m,onContentLeave:w}=e,[C,v]=s.useState(null),[y,b]=s.useState(new Map),[M,g]=s.useState(null);return l.jsx(nn,{scope:t,isRootMenu:r,rootNavigationMenu:o,value:c,previousValue:Gt(c),baseId:je(),dir:n,orientation:i,viewport:C,onViewportChange:v,indicatorTrack:M,onIndicatorTrackChange:g,onTriggerEnter:j(d),onTriggerLeave:j(p),onContentEnter:j(m),onContentLeave:j(w),onItemSelect:j(u),onItemDismiss:j(f),onViewportContentChange:s.useCallback((h,x)=>{b(N=>(N.set(h,x),new Map(N)))},[]),onViewportContentRemove:s.useCallback(h=>{b(x=>x.has(h)?(x.delete(h),new Map(x)):x)},[]),children:l.jsx(ie.Provider,{scope:t,children:l.jsx(on,{scope:t,items:y,children:a})})})},We="NavigationMenuList",Ke=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=_(We,r),i=l.jsx(S.ul,{"data-orientation":n.orientation,...o,ref:t});return l.jsx(S.div,{style:{position:"relative"},ref:n.onIndicatorTrackChange,children:l.jsx(ie.Slot,{scope:r,children:n.isRootMenu?l.jsx(Je,{asChild:!0,children:i}):i})})});Ke.displayName=We;var He="NavigationMenuItem",[an,Ue]=ae(He),Be=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,...n}=e,i=je(),a=o||i||"LEGACY_REACT_AUTO_VALUE",c=s.useRef(null),u=s.useRef(null),f=s.useRef(null),d=s.useRef(()=>{}),p=s.useRef(!1),m=s.useCallback((C="start")=>{if(c.current){d.current();const v=ne(c.current);v.length&&ue(C==="start"?v:v.reverse())}},[]),w=s.useCallback(()=>{if(c.current){const C=ne(c.current);C.length&&(d.current=vn(C))}},[]);return l.jsx(an,{scope:r,value:a,triggerRef:u,contentRef:c,focusProxyRef:f,wasEscapeCloseRef:p,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:w,onContentFocusOutside:w,children:l.jsx(S.li,{...n,ref:t})})});Be.displayName=He;var te="NavigationMenuTrigger",Xe=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,disabled:o,...n}=e,i=_(te,e.__scopeNavigationMenu),a=Ue(te,e.__scopeNavigationMenu),c=s.useRef(null),u=L(c,a.triggerRef,t),f=et(i.baseId,a.value),d=tt(i.baseId,a.value),p=s.useRef(!1),m=s.useRef(!1),w=a.value===i.value;return l.jsxs(l.Fragment,{children:[l.jsx(ie.ItemSlot,{scope:r,value:a.value,children:l.jsx(Qe,{asChild:!0,children:l.jsx(S.button,{id:f,disabled:o,"data-disabled":o?"":void 0,"data-state":de(w),"aria-expanded":w,"aria-controls":d,...n,ref:u,onPointerEnter:P(e.onPointerEnter,()=>{m.current=!1,a.wasEscapeCloseRef.current=!1}),onPointerMove:P(e.onPointerMove,q(()=>{o||m.current||a.wasEscapeCloseRef.current||p.current||(i.onTriggerEnter(a.value),p.current=!0)})),onPointerLeave:P(e.onPointerLeave,q(()=>{o||(i.onTriggerLeave(),p.current=!1)})),onClick:P(e.onClick,()=>{i.onItemSelect(a.value),m.current=w}),onKeyDown:P(e.onKeyDown,C=>{const y={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];w&&C.key===y&&(a.onEntryKeyDown(),C.preventDefault())})})})}),w&&l.jsxs(l.Fragment,{children:[l.jsx(Jt,{"aria-hidden":!0,tabIndex:0,ref:a.focusProxyRef,onFocus:C=>{const v=a.contentRef.current,y=C.relatedTarget,b=y===c.current,M=v==null?void 0:v.contains(y);(b||!M)&&a.onFocusProxyEnter(b?"start":"end")}}),i.viewport&&l.jsx("span",{"aria-owns":d})]})]})});Xe.displayName=te;var cn="NavigationMenuLink",he="navigationMenu.linkSelect",qe=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,active:o,onSelect:n,...i}=e;return l.jsx(Qe,{asChild:!0,children:l.jsx(S.a,{"data-active":o?"":void 0,"aria-current":o?"page":void 0,...i,ref:t,onClick:P(e.onClick,a=>{const c=a.target,u=new CustomEvent(he,{bubbles:!0,cancelable:!0});if(c.addEventListener(he,f=>n==null?void 0:n(f),{once:!0}),Z(c,u),!u.defaultPrevented&&!a.metaKey){const f=new CustomEvent(X,{bubbles:!0,cancelable:!0});Z(c,f)}},{checkForDefaultPrevented:!1})})})});qe.displayName=cn;var ce="NavigationMenuIndicator",ln=s.forwardRef((e,t)=>{const{forceMount:r,...o}=e,n=_(ce,e.__scopeNavigationMenu),i=!!n.value;return n.indicatorTrack?dt.createPortal(l.jsx(H,{present:r||i,children:l.jsx(un,{...o,ref:t})}),n.indicatorTrack):null});ln.displayName=ce;var un=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=_(ce,r),i=ke(r),[a,c]=s.useState(null),[u,f]=s.useState(null),d=n.orientation==="horizontal",p=!!n.value;s.useEffect(()=>{var v;const C=(v=i().find(y=>y.value===n.value))==null?void 0:v.ref.current;C&&c(C)},[i,n.value]);const m=()=>{a&&f({size:d?a.offsetWidth:a.offsetHeight,offset:d?a.offsetLeft:a.offsetTop})};return oe(a,m),oe(n.indicatorTrack,m),u?l.jsx(S.div,{"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":n.orientation,...o,ref:t,style:{position:"absolute",...d?{left:0,width:u.size+"px",transform:`translateX(${u.offset}px)`}:{top:0,height:u.size+"px",transform:`translateY(${u.offset}px)`},...o.style}}):null}),k="NavigationMenuContent",Ge=s.forwardRef((e,t)=>{const{forceMount:r,...o}=e,n=_(k,e.__scopeNavigationMenu),i=Ue(k,e.__scopeNavigationMenu),a=L(i.contentRef,t),c=i.value===n.value,u={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...o};return n.viewport?l.jsx(dn,{forceMount:r,...u,ref:a}):l.jsx(H,{present:r||c,children:l.jsx(Ye,{"data-state":de(c),...u,ref:a,onPointerEnter:P(e.onPointerEnter,n.onContentEnter),onPointerLeave:P(e.onPointerLeave,q(n.onContentLeave)),style:{pointerEvents:!c&&n.isRootMenu?"none":void 0,...u.style}})})});Ge.displayName=k;var dn=s.forwardRef((e,t)=>{const r=_(k,e.__scopeNavigationMenu),{onViewportContentChange:o,onViewportContentRemove:n}=r;return O(()=>{o(e.value,{ref:t,...e})},[e,t,o]),O(()=>()=>n(e.value),[e.value,n]),null}),X="navigationMenu.rootContentDismiss",Ye=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,triggerRef:n,focusProxyRef:i,wasEscapeCloseRef:a,onRootContentClose:c,onContentFocusOutside:u,...f}=e,d=_(k,r),p=s.useRef(null),m=L(p,t),w=et(d.baseId,o),C=tt(d.baseId,o),v=ke(r),y=s.useRef(null),{onItemDismiss:b}=d;s.useEffect(()=>{const g=p.current;if(d.isRootMenu&&g){const h=()=>{var x;b(),c(),g.contains(document.activeElement)&&((x=n.current)==null||x.focus())};return g.addEventListener(X,h),()=>g.removeEventListener(X,h)}},[d.isRootMenu,e.value,n,b,c]);const M=s.useMemo(()=>{const h=v().map(A=>A.value);d.dir==="rtl"&&h.reverse();const x=h.indexOf(d.value),N=h.indexOf(d.previousValue),E=o===d.value,T=N===h.indexOf(o);if(!E&&!T)return y.current;const R=(()=>{if(x!==N){if(E&&N!==-1)return x>N?"from-end":"from-start";if(T&&x!==-1)return x>N?"to-start":"to-end"}return null})();return y.current=R,R},[d.previousValue,d.value,d.dir,v,o]);return l.jsx(Je,{asChild:!0,children:l.jsx(Oe,{id:C,"aria-labelledby":w,"data-motion":M,"data-orientation":d.orientation,...f,ref:m,disableOutsidePointerEvents:!1,onDismiss:()=>{var h;const g=new Event(X,{bubbles:!0,cancelable:!0});(h=p.current)==null||h.dispatchEvent(g)},onFocusOutside:P(e.onFocusOutside,g=>{var x;u();const h=g.target;(x=d.rootNavigationMenu)!=null&&x.contains(h)&&g.preventDefault()}),onPointerDownOutside:P(e.onPointerDownOutside,g=>{var E;const h=g.target,x=v().some(T=>{var R;return(R=T.ref.current)==null?void 0:R.contains(h)}),N=d.isRootMenu&&((E=d.viewport)==null?void 0:E.contains(h));(x||N||!d.isRootMenu)&&g.preventDefault()}),onKeyDown:P(e.onKeyDown,g=>{var N;const h=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!h){const E=ne(g.currentTarget),T=document.activeElement,R=E.findIndex(lt=>lt===T),G=g.shiftKey?E.slice(0,R).reverse():E.slice(R+1,E.length);ue(G)?g.preventDefault():(N=i.current)==null||N.focus()}}),onEscapeKeyDown:P(e.onEscapeKeyDown,g=>{a.current=!0})})})}),le="NavigationMenuViewport",Ze=s.forwardRef((e,t)=>{const{forceMount:r,...o}=e,i=!!_(le,e.__scopeNavigationMenu).value;return l.jsx(H,{present:r||i,children:l.jsx(fn,{...o,ref:t})})});Ze.displayName=le;var fn=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,children:o,...n}=e,i=_(le,r),a=L(t,i.onViewportChange),c=rn(k,e.__scopeNavigationMenu),[u,f]=s.useState(null),[d,p]=s.useState(null),m=u?(u==null?void 0:u.width)+"px":void 0,w=u?(u==null?void 0:u.height)+"px":void 0,C=!!i.value,v=C?i.value:i.previousValue;return oe(d,()=>{d&&f({width:d.offsetWidth,height:d.offsetHeight})}),l.jsx(S.div,{"data-state":de(C),"data-orientation":i.orientation,...n,ref:a,style:{pointerEvents:!C&&i.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":m,"--radix-navigation-menu-viewport-height":w,...n.style},onPointerEnter:P(e.onPointerEnter,i.onContentEnter),onPointerLeave:P(e.onPointerLeave,q(i.onContentLeave)),children:Array.from(c.items).map(([b,{ref:M,forceMount:g,...h}])=>{const x=v===b;return l.jsx(H,{present:g||x,children:l.jsx(Ye,{...h,ref:re(M,N=>{x&&N&&p(N)})})},b)})})}),pn="FocusGroup",Je=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=_(pn,r);return l.jsx(Q.Provider,{scope:r,children:l.jsx(Q.Slot,{scope:r,children:l.jsx(S.div,{dir:n.dir,...o,ref:t})})})}),ye=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],mn="FocusGroupItem",Qe=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=en(r),i=_(mn,r);return l.jsx(Q.ItemSlot,{scope:r,children:l.jsx(S.button,{...o,ref:t,onKeyDown:P(e.onKeyDown,a=>{if(["Home","End",...ye].includes(a.key)){let u=n().map(p=>p.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(a.key)&&u.reverse(),ye.includes(a.key)){const p=u.indexOf(a.currentTarget);u=u.slice(p+1)}setTimeout(()=>ue(u)),a.preventDefault()}})})})});function ne(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const n=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||n?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function ue(e){const t=document.activeElement;return e.some(r=>r===t?!0:(r.focus(),document.activeElement!==t))}function vn(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const r=t.dataset.tabindex;t.setAttribute("tabindex",r)})}}function oe(e,t){const r=j(t);O(()=>{let o=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(o),o=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(o),n.unobserve(e)}}},[e,r])}function de(e){return e?"open":"closed"}function et(e,t){return`${e}-trigger-${t}`}function tt(e,t){return`${e}-content-${t}`}function q(e){return t=>t.pointerType==="mouse"?e(t):void 0}var gn=Fe,hn=Ke,yn=Be,nt=Xe,ot=qe,xn=Ge,wn=Ze;const Cn=I.span`
  display: inline-flex;
  align-items: center;
`,En=I.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
`,bn=I.div`
  display: flex;
  flex-direction: column;
`,Nn=z`
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Rn=z`
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Mn=z`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(120px);
  }
`,Pn=z`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-120px);
  }
`,In=z`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.96);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`,Sn=z`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.96);
  }
`,Tn=I(gn)`
  position: relative;
  display: flex;
  align-items: stretch;
`,_n=I(hn)`
  list-style: none;
  margin: 0;
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.standard};
`,fe=I(yn)`
  position: relative;
`,An=I(nt)`
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
`,jn=I(nt)`
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
`,rt=I(xn)`
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
    animation-name: ${Rn};
  }

  &[data-motion='from-end'] {
    animation-name: ${Nn};
  }

  &[data-motion='to-start'] {
    animation-name: ${Pn};
  }

  &[data-motion='to-end'] {
    animation-name: ${Mn};
  }

  button {
    text-decoration: none;
  }
`,Ln=I.div`
  position: relative;
  top: 70%;
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  transform: rotate(45deg);
  border-top-left-radius: 2px;
  border: 1px solid ${({theme:e})=>e.colors.neutral[300]};
  border-bottom: none;
  border-right: none;
`,Dn=I.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`,On=I(wn)`
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
    animation: ${In} 200ms ease;
  }

  &[data-state='closed'] {
    animation: ${Sn} 200ms ease;
  }
`,st=({edozoProducts:e,triggerProps:t})=>{const r=o=>{window.open(o.url,"_blank")};return l.jsxs(fe,{children:[l.jsxs(An,{...t,children:[l.jsx(Cn,{children:"Products"}),l.jsx(Y,{icon:pt,size:"sm","aria-hidden":"true"})]}),l.jsx(rt,{children:l.jsx(pe,{variant:"platform",children:e.map(o=>l.jsx(pe.Item,{onClick:()=>r(o),disabled:o.disabled,children:l.jsxs(bn,{children:[l.jsx(Se,{size:"small",appName:o.appName}),l.jsx(En,{children:o.description})]})},o.url))})})]})};st.__docgenInfo={description:"",methods:[],displayName:"ProductSwitchV2",props:{edozoProducts:{required:!0,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:""},triggerProps:{required:!1,tsType:{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<'button'>",elements:[{name:"literal",value:"'button'"}]},description:""}}};const $n=I.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,it=({children:e})=>l.jsx($n,{children:e});it.__docgenInfo={description:"",methods:[],displayName:"PlatformMenuV2"};const Vn=I.div`
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
`,at=({children:e})=>l.jsx(fe,{children:l.jsx(Vn,{children:l.jsx(ot,{asChild:!0,children:e})})});at.__docgenInfo={description:"",methods:[],displayName:"MenuItemV2"};const F=({children:e,openOnClickOnly:t=!1,closeOnOutsideClickOnly:r=!1})=>{const[o,n]=s.useState(""),i=s.useRef(null);s.useEffect(()=>{if(!r)return;const c=u=>{if(!i.current)return;const f=u.target;f instanceof Node&&(i.current.contains(f)||n(""))};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[r]);const a=c=>{r&&c===""||n(c)};return l.jsxs(Tn,{ref:i,value:r?o:void 0,onValueChange:r?a:void 0,onPointerMove:t?c=>c.preventDefault():void 0,onPointerLeave:t?c=>c.preventDefault():void 0,children:[l.jsx(_n,{children:e}),l.jsx(Ln,{}),l.jsx(Dn,{children:l.jsx(On,{})})]})};F.Item=at;F.PlatformMenu=it;F.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"PlatformMenu",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"MenuV2",props:{openOnClickOnly:{defaultValue:{value:"false",computed:!1},required:!1},closeOnOutsideClickOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};const kn=I.div`
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
`,ct=({children:e})=>l.jsx(kn,{children:e});ct.__docgenInfo={description:"",methods:[],displayName:"HeaderV2"};const Fn=I.button`
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
`,zn=[{appName:"maps",description:"Create best in class OS mapping with single click technology",url:"https://maps.edozo.com/"},{appName:"occupiers",description:"Create plans and see occupiers for all use classes",url:"https://occupiers.edozo.com/"},{appName:"insight",description:"Find thousands of commercial property transaction comps",url:"https://insight.edozo.com/"},{appName:"reports",description:"Create automated valuation reports",url:"https://reports.edozo.com/"}],U=({logoSection:e,logout:t,isAuthenticated:r,edozoProducts:o=zn,children:n,openOnClickOnly:i=!0})=>l.jsxs(ct,{children:[e,r&&l.jsxs(F,{openOnClickOnly:i,closeOnOutsideClickOnly:!0,children:[n,l.jsx(st,{edozoProducts:o,triggerProps:i?{onPointerMove:a=>a.preventDefault(),onPointerLeave:a=>a.preventDefault()}:void 0}),l.jsxs(fe,{children:[l.jsx(jn,{"aria-label":"Account menu",onPointerMove:i?a=>a.preventDefault():void 0,onPointerLeave:i?a=>a.preventDefault():void 0,children:l.jsx(Y,{icon:vt,size:"md","aria-hidden":"true"})}),l.jsx(rt,{children:l.jsx(ot,{asChild:!0,children:l.jsxs(Fn,{type:"button",onClick:t,"data-testid":"logoutButton",children:[l.jsx(Y,{icon:ht,size:"sm","aria-hidden":"true"}),"Logout"]})})})]})]})]});U.__docgenInfo={description:"",methods:[],displayName:"AppHeaderV2",props:{logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},logoSection:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isAuthenticated:{required:!1,tsType:{name:"boolean"},description:""},edozoProducts:{required:!1,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:"",defaultValue:{value:`[
  {
    appName: 'maps',
    description: 'Create best in class OS mapping with single click technology',
    url: 'https://maps.edozo.com/',
  },
  {
    appName: 'occupiers',
    description: 'Create plans and see occupiers for all use classes',
    url: 'https://occupiers.edozo.com/',
  },
  {
    appName: 'insight',
    description: 'Find thousands of commercial property transaction comps',
    url: 'https://insight.edozo.com/',
  },
  {
    appName: 'reports',
    description: 'Create automated valuation reports',
    url: 'https://reports.edozo.com/',
  },
]`,computed:!1}},openOnClickOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Zn={title:"Components/HeaderV2",component:U},W=()=>l.jsx(U,{logoSection:l.jsx(Te,{variant:"edozo",size:"small"}),logout:()=>{}}),V=e=>l.jsx(U,{logoSection:l.jsx("a",{children:l.jsx(Te,{variant:"edozo"})}),isAuthenticated:e.isAuthenticated,logout:e.logout,children:l.jsxs(s.Fragment,{children:[l.jsx(F.Item,{children:l.jsx("a",{className:"active",children:"Help"})}),l.jsx(F.Item,{children:l.jsx("a",{children:"Docs"})})]})});V.args={isAuthenticated:!0,logout:()=>console.log("app specific logout method")};const K=()=>l.jsx(U,{logoSection:l.jsx(Se,{appName:"maps"}),isAuthenticated:!0,logout:()=>{}});W.__docgenInfo={description:"",methods:[],displayName:"Default"};V.__docgenInfo={description:"",methods:[],displayName:"ControlledAppHeader"};K.__docgenInfo={description:"",methods:[],displayName:"MapsApp"};var xe,we,Ce;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:'() => <AppHeaderV2 logoSection={<EdozoLogo variant={"edozo" as LogoVariants} size="small" />} logout={() => {}} />',...(Ce=(we=W.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Ee,be,Ne;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => <AppHeaderV2 logoSection={<a>
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
  </AppHeaderV2>`,...(Ne=(be=V.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};var Re,Me,Pe;K.parameters={...K.parameters,docs:{...(Re=K.parameters)==null?void 0:Re.docs,source:{originalSource:'() => <AppHeaderV2 logoSection={<EdozoLogoV2 appName="maps" />} isAuthenticated logout={() => {}} />',...(Pe=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};const Jn=["Default","ControlledAppHeader","MapsApp"];export{V as ControlledAppHeader,W as Default,K as MapsApp,Jn as __namedExportsOrder,Zn as default};
