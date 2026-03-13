import{r as s,j as l,W as je,R as $,c as I,p as W}from"./iframe-CWZzjXvL.js";import{r as mt,F as gt}from"./index-CN7tec_X.js";import{c as se,u as L}from"./index-BXAlGHt7.js";import{E as Le}from"./EdozoLogoV2-Zozqth8y.js";import{c as ie,L as Z}from"./Lucide-Cbi5mnZx.js";import{L as ge}from"./List-BAJuF0uR.js";import{E as ae}from"./EdozoLogo-CDjl9bYV.js";import"./preload-helper-C1FmrZbK.js";import"./edozo-logo-DokrQACW.js";/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ht=ie("chevron-down",vt);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xt=ie("circle-user-round",yt);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Et=ie("log-out",wt);function $e(e,t=[]){let r=[];function o(i,c){const a=s.createContext(c),u=r.length;r=[...r,c];const f=p=>{var b;const{scope:m,children:w,...E}=p,g=((b=m==null?void 0:m[e])==null?void 0:b[u])||a,y=s.useMemo(()=>E,Object.values(E));return l.jsx(g.Provider,{value:y,children:w})};f.displayName=i+"Provider";function d(p,m){var g;const w=((g=m==null?void 0:m[e])==null?void 0:g[u])||a,E=s.useContext(w);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[f,d]}const n=()=>{const i=r.map(c=>s.createContext(c));return function(a){const u=(a==null?void 0:a[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...a,[e]:u}}),[a,u])}};return n.scopeName=e,[o,Ct(n,...t)]}function Ct(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const o=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(i){const c=o.reduce((a,{useScope:u,scopeName:f})=>{const p=u(i)[`__scope${f}`];return{...a,...p}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return r.scopeName=t.scopeName,r}function P(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e==null||e(n),r===!1||!n.defaultPrevented)return t==null?void 0:t(n)}}function bt(e){const t=Nt(e),r=s.forwardRef((o,n)=>{const{children:i,...c}=o,a=s.Children.toArray(i),u=a.find(Mt);if(u){const f=u.props.children,d=a.map(p=>p===u?s.Children.count(f)>1?s.Children.only(null):s.isValidElement(f)?f.props.children:null:p);return l.jsx(t,{...c,ref:n,children:s.isValidElement(f)?s.cloneElement(f,void 0,d):null})}return l.jsx(t,{...c,ref:n,children:i})});return r.displayName=`${e}.Slot`,r}function Nt(e){const t=s.forwardRef((r,o)=>{const{children:n,...i}=r;if(s.isValidElement(n)){const c=It(n),a=Pt(i,n.props);return n.type!==s.Fragment&&(a.ref=o?se(o,c):c),s.cloneElement(n,a)}return s.Children.count(n)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Rt=Symbol("radix.slottable");function Mt(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Rt}function Pt(e,t){const r={...t};for(const o in t){const n=e[o],i=t[o];/^on[A-Z]/.test(o)?n&&i?r[o]=(...a)=>{const u=i(...a);return n(...a),u}:n&&(r[o]=n):o==="style"?r[o]={...n,...i}:o==="className"&&(r[o]=[n,i].filter(Boolean).join(" "))}return{...e,...r}}function It(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var St=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],S=St.reduce((e,t)=>{const r=bt(`Primitive.${t}`),o=s.forwardRef((n,i)=>{const{asChild:c,...a}=n,u=c?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(u,{...a,ref:i})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function J(e,t){e&&mt.flushSync(()=>e.dispatchEvent(t))}var D=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Tt=je[" useInsertionEffect ".trim().toString()]||D;function De({prop:e,defaultProp:t,onChange:r=()=>{},caller:o}){const[n,i,c]=_t({defaultProp:t,onChange:r}),a=e!==void 0,u=a?e:n;{const d=s.useRef(e!==void 0);s.useEffect(()=>{const p=d.current;p!==a&&console.warn(`${o} is changing from ${p?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=a},[a,o])}const f=s.useCallback(d=>{var p;if(a){const m=At(d)?d(e):d;m!==e&&((p=c.current)==null||p.call(c,m))}else i(d)},[a,e,i,c]);return[u,f]}function _t({defaultProp:e,onChange:t}){const[r,o]=s.useState(e),n=s.useRef(r),i=s.useRef(t);return Tt(()=>{i.current=t},[t]),s.useEffect(()=>{var c;n.current!==r&&((c=i.current)==null||c.call(i,r),n.current=r)},[r,n]),[r,o,i]}function At(e){return typeof e=="function"}var jt=s.createContext(void 0);function Lt(e){const t=s.useContext(jt);return e||t||"ltr"}function $t(e,t){return s.useReducer((r,o)=>t[r][o]??r,e)}var B=e=>{const{present:t,children:r}=e,o=Dt(t),n=typeof r=="function"?r({present:o.isPresent}):s.Children.only(r),i=L(o.ref,Ot(n));return typeof r=="function"||o.isPresent?s.cloneElement(n,{ref:i}):null};B.displayName="Presence";function Dt(e){const[t,r]=s.useState(),o=s.useRef(null),n=s.useRef(e),i=s.useRef("none"),c=e?"mounted":"unmounted",[a,u]=$t(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const f=q(o.current);i.current=a==="mounted"?f:"none"},[a]),D(()=>{const f=o.current,d=n.current;if(d!==e){const m=i.current,w=q(f);e?u("MOUNT"):w==="none"||(f==null?void 0:f.display)==="none"?u("UNMOUNT"):u(d&&m!==w?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,u]),D(()=>{if(t){let f;const d=t.ownerDocument.defaultView??window,p=w=>{const g=q(o.current).includes(CSS.escape(w.animationName));if(w.target===t&&g&&(u("ANIMATION_END"),!n.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",f=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},m=w=>{w.target===t&&(i.current=q(o.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{d.clearTimeout(f),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:s.useCallback(f=>{o.current=f?getComputedStyle(f):null,r(f)},[])}}function q(e){return(e==null?void 0:e.animationName)||"none"}function Ot(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Vt=je[" useId ".trim().toString()]||(()=>{}),kt=0;function Oe(e){const[t,r]=s.useState(Vt());return D(()=>{r(o=>o??String(kt++))},[e]),e||(t?`radix-${t}`:"")}function ve(e){const t=Ft(e),r=s.forwardRef((o,n)=>{const{children:i,...c}=o,a=s.Children.toArray(i),u=a.find(Wt);if(u){const f=u.props.children,d=a.map(p=>p===u?s.Children.count(f)>1?s.Children.only(null):s.isValidElement(f)?f.props.children:null:p);return l.jsx(t,{...c,ref:n,children:s.isValidElement(f)?s.cloneElement(f,void 0,d):null})}return l.jsx(t,{...c,ref:n,children:i})});return r.displayName=`${e}.Slot`,r}function Ft(e){const t=s.forwardRef((r,o)=>{const{children:n,...i}=r;if(s.isValidElement(n)){const c=Ht(n),a=Ut(i,n.props);return n.type!==s.Fragment&&(a.ref=o?se(o,c):c),s.cloneElement(n,a)}return s.Children.count(n)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var zt=Symbol("radix.slottable");function Wt(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===zt}function Ut(e,t){const r={...t};for(const o in t){const n=e[o],i=t[o];/^on[A-Z]/.test(o)?n&&i?r[o]=(...a)=>{const u=i(...a);return n(...a),u}:n&&(r[o]=n):o==="style"?r[o]={...n,...i}:o==="className"&&(r[o]=[n,i].filter(Boolean).join(" "))}return{...e,...r}}function Ht(e){var o,n;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Ve(e){const t=e+"CollectionProvider",[r,o]=$e(t),[n,i]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=g=>{const{scope:y,children:b}=g,M=$.useRef(null),v=$.useRef(new Map).current;return l.jsx(n,{scope:y,itemMap:v,collectionRef:M,children:b})};c.displayName=t;const a=e+"CollectionSlot",u=ve(a),f=$.forwardRef((g,y)=>{const{scope:b,children:M}=g,v=i(a,b),h=L(y,v.collectionRef);return l.jsx(u,{ref:h,children:M})});f.displayName=a;const d=e+"CollectionItemSlot",p="data-radix-collection-item",m=ve(d),w=$.forwardRef((g,y)=>{const{scope:b,children:M,...v}=g,h=$.useRef(null),x=L(y,h),N=i(d,b);return $.useEffect(()=>(N.itemMap.set(h,{ref:h,...v}),()=>void N.itemMap.delete(h))),l.jsx(m,{[p]:"",ref:x,children:M})});w.displayName=d;function E(g){const y=i(e+"CollectionConsumer",g);return $.useCallback(()=>{const M=y.collectionRef.current;if(!M)return[];const v=Array.from(M.querySelectorAll(`[${p}]`));return Array.from(y.itemMap.values()).sort((N,C)=>v.indexOf(N.ref.current)-v.indexOf(C.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:c,Slot:f,ItemSlot:w},E,o]}function j(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...r)=>{var o;return(o=t.current)==null?void 0:o.call(t,...r)},[])}function Kt(e,t=globalThis==null?void 0:globalThis.document){const r=j(e);s.useEffect(()=>{const o=n=>{n.key==="Escape"&&r(n)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[r,t])}var Bt="DismissableLayer",Q="dismissableLayer.update",qt="dismissableLayer.pointerDownOutside",Xt="dismissableLayer.focusOutside",he,ke=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Fe=s.forwardRef((e,t)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:n,onFocusOutside:i,onInteractOutside:c,onDismiss:a,...u}=e,f=s.useContext(ke),[d,p]=s.useState(null),m=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,w]=s.useState({}),E=L(t,C=>p(C)),g=Array.from(f.layers),[y]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),b=g.indexOf(y),M=d?g.indexOf(d):-1,v=f.layersWithOutsidePointerEventsDisabled.size>0,h=M>=b,x=Zt(C=>{const T=C.target,R=[...f.branches].some(A=>A.contains(T));!h||R||(n==null||n(C),c==null||c(C),C.defaultPrevented||a==null||a())},m),N=Jt(C=>{const T=C.target;[...f.branches].some(A=>A.contains(T))||(i==null||i(C),c==null||c(C),C.defaultPrevented||a==null||a())},m);return Kt(C=>{M===f.layers.size-1&&(o==null||o(C),!C.defaultPrevented&&a&&(C.preventDefault(),a()))},m),s.useEffect(()=>{if(d)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(he=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(d)),f.layers.add(d),ye(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=he)}},[d,m,r,f]),s.useEffect(()=>()=>{d&&(f.layers.delete(d),f.layersWithOutsidePointerEventsDisabled.delete(d),ye())},[d,f]),s.useEffect(()=>{const C=()=>w({});return document.addEventListener(Q,C),()=>document.removeEventListener(Q,C)},[]),l.jsx(S.div,{...u,ref:E,style:{pointerEvents:v?h?"auto":"none":void 0,...e.style},onFocusCapture:P(e.onFocusCapture,N.onFocusCapture),onBlurCapture:P(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:P(e.onPointerDownCapture,x.onPointerDownCapture)})});Fe.displayName=Bt;var Gt="DismissableLayerBranch",Yt=s.forwardRef((e,t)=>{const r=s.useContext(ke),o=s.useRef(null),n=L(t,o);return s.useEffect(()=>{const i=o.current;if(i)return r.branches.add(i),()=>{r.branches.delete(i)}},[r.branches]),l.jsx(S.div,{...e,ref:n})});Yt.displayName=Gt;function Zt(e,t=globalThis==null?void 0:globalThis.document){const r=j(e),o=s.useRef(!1),n=s.useRef(()=>{});return s.useEffect(()=>{const i=a=>{if(a.target&&!o.current){let u=function(){ze(qt,r,f,{discrete:!0})};const f={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",n.current),n.current=u,t.addEventListener("click",n.current,{once:!0})):u()}else t.removeEventListener("click",n.current);o.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",i),t.removeEventListener("click",n.current)}},[t,r]),{onPointerDownCapture:()=>o.current=!0}}function Jt(e,t=globalThis==null?void 0:globalThis.document){const r=j(e),o=s.useRef(!1);return s.useEffect(()=>{const n=i=>{i.target&&!o.current&&ze(Xt,r,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",n),()=>t.removeEventListener("focusin",n)},[t,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function ye(){const e=new CustomEvent(Q);document.dispatchEvent(e)}function ze(e,t,r,{discrete:o}){const n=r.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&n.addEventListener(e,t,{once:!0}),o?J(n,i):n.dispatchEvent(i)}function Qt(e){const t=s.useRef({value:e,previous:e});return s.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var en=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),tn="VisuallyHidden",We=s.forwardRef((e,t)=>l.jsx(S.span,{...e,ref:t,style:{...en,...e.style}}));We.displayName=tn;var nn=We,O="NavigationMenu",[ce,Ue,on]=Ve(O),[ee,rn,sn]=Ve(O),[le]=$e(O,[on,sn]),[an,_]=le(O),[cn,ln]=le(O),He=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,onValueChange:n,defaultValue:i,delayDuration:c=200,skipDelayDuration:a=300,orientation:u="horizontal",dir:f,...d}=e,[p,m]=s.useState(null),w=L(t,R=>m(R)),E=Lt(f),g=s.useRef(0),y=s.useRef(0),b=s.useRef(0),[M,v]=s.useState(!0),[h,x]=De({prop:o,onChange:R=>{const A=R!=="",Y=a>0;A?(window.clearTimeout(b.current),Y&&v(!1)):(window.clearTimeout(b.current),b.current=window.setTimeout(()=>v(!0),a)),n==null||n(R)},defaultProp:i??"",caller:O}),N=s.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>x(""),150)},[x]),C=s.useCallback(R=>{window.clearTimeout(y.current),x(R)},[x]),T=s.useCallback(R=>{h===R?window.clearTimeout(y.current):g.current=window.setTimeout(()=>{window.clearTimeout(y.current),x(R)},c)},[h,x,c]);return s.useEffect(()=>()=>{window.clearTimeout(g.current),window.clearTimeout(y.current),window.clearTimeout(b.current)},[]),l.jsx(Ke,{scope:r,isRootMenu:!0,value:h,dir:E,orientation:u,rootNavigationMenu:p,onTriggerEnter:R=>{window.clearTimeout(g.current),M?T(R):C(R)},onTriggerLeave:()=>{window.clearTimeout(g.current),N()},onContentEnter:()=>window.clearTimeout(y.current),onContentLeave:N,onItemSelect:R=>{x(A=>A===R?"":R)},onItemDismiss:()=>x(""),children:l.jsx(S.nav,{"aria-label":"Main","data-orientation":u,dir:E,...d,ref:w})})});He.displayName=O;var te="NavigationMenuSub",un=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,onValueChange:n,defaultValue:i,orientation:c="horizontal",...a}=e,u=_(te,r),[f,d]=De({prop:o,onChange:n,defaultProp:i??"",caller:te});return l.jsx(Ke,{scope:r,isRootMenu:!1,value:f,dir:u.dir,orientation:c,rootNavigationMenu:u.rootNavigationMenu,onTriggerEnter:p=>d(p),onItemSelect:p=>d(p),onItemDismiss:()=>d(""),children:l.jsx(S.div,{"data-orientation":c,...a,ref:t})})});un.displayName=te;var Ke=e=>{const{scope:t,isRootMenu:r,rootNavigationMenu:o,dir:n,orientation:i,children:c,value:a,onItemSelect:u,onItemDismiss:f,onTriggerEnter:d,onTriggerLeave:p,onContentEnter:m,onContentLeave:w}=e,[E,g]=s.useState(null),[y,b]=s.useState(new Map),[M,v]=s.useState(null);return l.jsx(an,{scope:t,isRootMenu:r,rootNavigationMenu:o,value:a,previousValue:Qt(a),baseId:Oe(),dir:n,orientation:i,viewport:E,onViewportChange:g,indicatorTrack:M,onIndicatorTrackChange:v,onTriggerEnter:j(d),onTriggerLeave:j(p),onContentEnter:j(m),onContentLeave:j(w),onItemSelect:j(u),onItemDismiss:j(f),onViewportContentChange:s.useCallback((h,x)=>{b(N=>(N.set(h,x),new Map(N)))},[]),onViewportContentRemove:s.useCallback(h=>{b(x=>x.has(h)?(x.delete(h),new Map(x)):x)},[]),children:l.jsx(ce.Provider,{scope:t,children:l.jsx(cn,{scope:t,items:y,children:c})})})},Be="NavigationMenuList",qe=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=_(Be,r),i=l.jsx(S.ul,{"data-orientation":n.orientation,...o,ref:t});return l.jsx(S.div,{style:{position:"relative"},ref:n.onIndicatorTrackChange,children:l.jsx(ce.Slot,{scope:r,children:n.isRootMenu?l.jsx(nt,{asChild:!0,children:i}):i})})});qe.displayName=Be;var Xe="NavigationMenuItem",[dn,Ge]=le(Xe),Ye=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,...n}=e,i=Oe(),c=o||i||"LEGACY_REACT_AUTO_VALUE",a=s.useRef(null),u=s.useRef(null),f=s.useRef(null),d=s.useRef(()=>{}),p=s.useRef(!1),m=s.useCallback((E="start")=>{if(a.current){d.current();const g=oe(a.current);g.length&&fe(E==="start"?g:g.reverse())}},[]),w=s.useCallback(()=>{if(a.current){const E=oe(a.current);E.length&&(d.current=xn(E))}},[]);return l.jsx(dn,{scope:r,value:c,triggerRef:u,contentRef:a,focusProxyRef:f,wasEscapeCloseRef:p,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:w,onContentFocusOutside:w,children:l.jsx(S.li,{...n,ref:t})})});Ye.displayName=Xe;var ne="NavigationMenuTrigger",Ze=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,disabled:o,...n}=e,i=_(ne,e.__scopeNavigationMenu),c=Ge(ne,e.__scopeNavigationMenu),a=s.useRef(null),u=L(a,c.triggerRef,t),f=rt(i.baseId,c.value),d=st(i.baseId,c.value),p=s.useRef(!1),m=s.useRef(!1),w=c.value===i.value;return l.jsxs(l.Fragment,{children:[l.jsx(ce.ItemSlot,{scope:r,value:c.value,children:l.jsx(ot,{asChild:!0,children:l.jsx(S.button,{id:f,disabled:o,"data-disabled":o?"":void 0,"data-state":pe(w),"aria-expanded":w,"aria-controls":d,...n,ref:u,onPointerEnter:P(e.onPointerEnter,()=>{m.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:P(e.onPointerMove,G(()=>{o||m.current||c.wasEscapeCloseRef.current||p.current||(i.onTriggerEnter(c.value),p.current=!0)})),onPointerLeave:P(e.onPointerLeave,G(()=>{o||(i.onTriggerLeave(),p.current=!1)})),onClick:P(e.onClick,()=>{i.onItemSelect(c.value),m.current=w}),onKeyDown:P(e.onKeyDown,E=>{const y={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];w&&E.key===y&&(c.onEntryKeyDown(),E.preventDefault())})})})}),w&&l.jsxs(l.Fragment,{children:[l.jsx(nn,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:E=>{const g=c.contentRef.current,y=E.relatedTarget,b=y===a.current,M=g==null?void 0:g.contains(y);(b||!M)&&c.onFocusProxyEnter(b?"start":"end")}}),i.viewport&&l.jsx("span",{"aria-owns":d})]})]})});Ze.displayName=ne;var fn="NavigationMenuLink",xe="navigationMenu.linkSelect",Je=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,active:o,onSelect:n,...i}=e;return l.jsx(ot,{asChild:!0,children:l.jsx(S.a,{"data-active":o?"":void 0,"aria-current":o?"page":void 0,...i,ref:t,onClick:P(e.onClick,c=>{const a=c.target,u=new CustomEvent(xe,{bubbles:!0,cancelable:!0});if(a.addEventListener(xe,f=>n==null?void 0:n(f),{once:!0}),J(a,u),!u.defaultPrevented&&!c.metaKey){const f=new CustomEvent(X,{bubbles:!0,cancelable:!0});J(a,f)}},{checkForDefaultPrevented:!1})})})});Je.displayName=fn;var ue="NavigationMenuIndicator",pn=s.forwardRef((e,t)=>{const{forceMount:r,...o}=e,n=_(ue,e.__scopeNavigationMenu),i=!!n.value;return n.indicatorTrack?gt.createPortal(l.jsx(B,{present:r||i,children:l.jsx(mn,{...o,ref:t})}),n.indicatorTrack):null});pn.displayName=ue;var mn=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=_(ue,r),i=Ue(r),[c,a]=s.useState(null),[u,f]=s.useState(null),d=n.orientation==="horizontal",p=!!n.value;s.useEffect(()=>{var g;const E=(g=i().find(y=>y.value===n.value))==null?void 0:g.ref.current;E&&a(E)},[i,n.value]);const m=()=>{c&&f({size:d?c.offsetWidth:c.offsetHeight,offset:d?c.offsetLeft:c.offsetTop})};return re(c,m),re(n.indicatorTrack,m),u?l.jsx(S.div,{"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":n.orientation,...o,ref:t,style:{position:"absolute",...d?{left:0,width:u.size+"px",transform:`translateX(${u.offset}px)`}:{top:0,height:u.size+"px",transform:`translateY(${u.offset}px)`},...o.style}}):null}),F="NavigationMenuContent",Qe=s.forwardRef((e,t)=>{const{forceMount:r,...o}=e,n=_(F,e.__scopeNavigationMenu),i=Ge(F,e.__scopeNavigationMenu),c=L(i.contentRef,t),a=i.value===n.value,u={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...o};return n.viewport?l.jsx(gn,{forceMount:r,...u,ref:c}):l.jsx(B,{present:r||a,children:l.jsx(et,{"data-state":pe(a),...u,ref:c,onPointerEnter:P(e.onPointerEnter,n.onContentEnter),onPointerLeave:P(e.onPointerLeave,G(n.onContentLeave)),style:{pointerEvents:!a&&n.isRootMenu?"none":void 0,...u.style}})})});Qe.displayName=F;var gn=s.forwardRef((e,t)=>{const r=_(F,e.__scopeNavigationMenu),{onViewportContentChange:o,onViewportContentRemove:n}=r;return D(()=>{o(e.value,{ref:t,...e})},[e,t,o]),D(()=>()=>n(e.value),[e.value,n]),null}),X="navigationMenu.rootContentDismiss",et=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,value:o,triggerRef:n,focusProxyRef:i,wasEscapeCloseRef:c,onRootContentClose:a,onContentFocusOutside:u,...f}=e,d=_(F,r),p=s.useRef(null),m=L(p,t),w=rt(d.baseId,o),E=st(d.baseId,o),g=Ue(r),y=s.useRef(null),{onItemDismiss:b}=d;s.useEffect(()=>{const v=p.current;if(d.isRootMenu&&v){const h=()=>{var x;b(),a(),v.contains(document.activeElement)&&((x=n.current)==null||x.focus())};return v.addEventListener(X,h),()=>v.removeEventListener(X,h)}},[d.isRootMenu,e.value,n,b,a]);const M=s.useMemo(()=>{const h=g().map(A=>A.value);d.dir==="rtl"&&h.reverse();const x=h.indexOf(d.value),N=h.indexOf(d.previousValue),C=o===d.value,T=N===h.indexOf(o);if(!C&&!T)return y.current;const R=(()=>{if(x!==N){if(C&&N!==-1)return x>N?"from-end":"from-start";if(T&&x!==-1)return x>N?"to-start":"to-end"}return null})();return y.current=R,R},[d.previousValue,d.value,d.dir,g,o]);return l.jsx(nt,{asChild:!0,children:l.jsx(Fe,{id:E,"aria-labelledby":w,"data-motion":M,"data-orientation":d.orientation,...f,ref:m,disableOutsidePointerEvents:!1,onDismiss:()=>{var h;const v=new Event(X,{bubbles:!0,cancelable:!0});(h=p.current)==null||h.dispatchEvent(v)},onFocusOutside:P(e.onFocusOutside,v=>{var x;u();const h=v.target;(x=d.rootNavigationMenu)!=null&&x.contains(h)&&v.preventDefault()}),onPointerDownOutside:P(e.onPointerDownOutside,v=>{var C;const h=v.target,x=g().some(T=>{var R;return(R=T.ref.current)==null?void 0:R.contains(h)}),N=d.isRootMenu&&((C=d.viewport)==null?void 0:C.contains(h));(x||N||!d.isRootMenu)&&v.preventDefault()}),onKeyDown:P(e.onKeyDown,v=>{var N;const h=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!h){const C=oe(v.currentTarget),T=document.activeElement,R=C.findIndex(pt=>pt===T),Y=v.shiftKey?C.slice(0,R).reverse():C.slice(R+1,C.length);fe(Y)?v.preventDefault():(N=i.current)==null||N.focus()}}),onEscapeKeyDown:P(e.onEscapeKeyDown,v=>{c.current=!0})})})}),de="NavigationMenuViewport",tt=s.forwardRef((e,t)=>{const{forceMount:r,...o}=e,i=!!_(de,e.__scopeNavigationMenu).value;return l.jsx(B,{present:r||i,children:l.jsx(vn,{...o,ref:t})})});tt.displayName=de;var vn=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,children:o,...n}=e,i=_(de,r),c=L(t,i.onViewportChange),a=ln(F,e.__scopeNavigationMenu),[u,f]=s.useState(null),[d,p]=s.useState(null),m=u?(u==null?void 0:u.width)+"px":void 0,w=u?(u==null?void 0:u.height)+"px":void 0,E=!!i.value,g=E?i.value:i.previousValue;return re(d,()=>{d&&f({width:d.offsetWidth,height:d.offsetHeight})}),l.jsx(S.div,{"data-state":pe(E),"data-orientation":i.orientation,...n,ref:c,style:{pointerEvents:!E&&i.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":m,"--radix-navigation-menu-viewport-height":w,...n.style},onPointerEnter:P(e.onPointerEnter,i.onContentEnter),onPointerLeave:P(e.onPointerLeave,G(i.onContentLeave)),children:Array.from(a.items).map(([b,{ref:M,forceMount:v,...h}])=>{const x=g===b;return l.jsx(B,{present:v||x,children:l.jsx(et,{...h,ref:se(M,N=>{x&&N&&p(N)})})},b)})})}),hn="FocusGroup",nt=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=_(hn,r);return l.jsx(ee.Provider,{scope:r,children:l.jsx(ee.Slot,{scope:r,children:l.jsx(S.div,{dir:n.dir,...o,ref:t})})})}),we=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],yn="FocusGroupItem",ot=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:r,...o}=e,n=rn(r),i=_(yn,r);return l.jsx(ee.ItemSlot,{scope:r,children:l.jsx(S.button,{...o,ref:t,onKeyDown:P(e.onKeyDown,c=>{if(["Home","End",...we].includes(c.key)){let u=n().map(p=>p.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(c.key)&&u.reverse(),we.includes(c.key)){const p=u.indexOf(c.currentTarget);u=u.slice(p+1)}setTimeout(()=>fe(u)),c.preventDefault()}})})})});function oe(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const n=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||n?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function fe(e){const t=document.activeElement;return e.some(r=>r===t?!0:(r.focus(),document.activeElement!==t))}function xn(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const r=t.dataset.tabindex;t.setAttribute("tabindex",r)})}}function re(e,t){const r=j(t);D(()=>{let o=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(o),o=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(o),n.unobserve(e)}}},[e,r])}function pe(e){return e?"open":"closed"}function rt(e,t){return`${e}-trigger-${t}`}function st(e,t){return`${e}-content-${t}`}function G(e){return t=>t.pointerType==="mouse"?e(t):void 0}var wn=He,En=qe,Cn=Ye,it=Ze,at=Je,bn=Qe,Nn=tt;const Rn=I.div`
  width: 240px;
`,Mn=I.span`
  display: inline-flex;
  align-items: center;
`,Pn=I.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
`,In=I.div`
  display: flex;
  flex-direction: column;
`,Sn=W`
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Tn=W`
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,_n=W`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(120px);
  }
`,An=W`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-120px);
  }
`,jn=W`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.96);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`,Ln=W`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.96);
  }
`,$n=I(wn)`
  position: relative;
  display: flex;
  align-items: stretch;
`,Dn=I(En)`
  list-style: none;
  margin: 0;
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.standard};
`,me=I(Cn)`
  position: relative;
`,On=I(it)`
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

  svg {
    transition: transform 200ms ease;
  }

  &[data-state='open'] svg {
    transform: rotate(-180deg);
  }
`,Vn=I(it)`
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
`,ct=I(bn)`
  position: absolute;
  top: 0;
  right: 0;
  width: max-content;
  background: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.sm};
  min-width: 260px;
  z-index: 3;
  animation-duration: 250ms;
  animation-timing-function: ease;

  &[data-motion='from-start'] {
    animation-name: ${Tn};
  }

  &[data-motion='from-end'] {
    animation-name: ${Sn};
  }

  &[data-motion='to-start'] {
    animation-name: ${An};
  }

  &[data-motion='to-end'] {
    animation-name: ${_n};
  }

  button {
    text-decoration: none;
  }
`,kn=I.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`,Fn=I(Nn)`
  position: relative;
  transform-origin: top center;
  margin-top: ${({theme:e})=>e.spacing.xs};
  width: var(--radix-navigation-menu-viewport-width);
  flex-shrink: 0;
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.boxShadow.xlarge};
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;

  &[data-state='open'] {
    animation: ${jn} 200ms ease;
  }

  &[data-state='closed'] {
    animation: ${Ln} 200ms ease;
  }
`,lt=({edozoProducts:e,triggerProps:t})=>{const r=o=>{window.open(o.url,"_blank")};return l.jsxs(me,{children:[l.jsxs(On,{...t,children:[l.jsx(Mn,{children:"Products"}),l.jsx(Z,{icon:ht,size:"sm","aria-hidden":"true"})]}),l.jsx(ct,{children:l.jsx(Rn,{children:l.jsx(ge,{variant:"platform",children:e.map(o=>l.jsx(ge.Item,{onClick:()=>r(o),disabled:o.disabled,children:l.jsxs(In,{children:[l.jsx(Le,{size:"small",appName:o.appName}),l.jsx(Pn,{children:o.description})]})},o.url))})})})]})};lt.__docgenInfo={description:"",methods:[],displayName:"ProductSwitchV2",props:{edozoProducts:{required:!0,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:""},triggerProps:{required:!1,tsType:{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<'button'>",elements:[{name:"literal",value:"'button'"}]},description:""}}};const zn=I.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,ut=({children:e})=>l.jsx(zn,{children:e});ut.__docgenInfo={description:"",methods:[],displayName:"PlatformMenuV2"};const Wn=I.div`
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
`,dt=({children:e})=>l.jsx(me,{children:l.jsx(Wn,{children:l.jsx(at,{asChild:!0,children:e})})});dt.__docgenInfo={description:"",methods:[],displayName:"MenuItemV2"};const z=({children:e,openOnClickOnly:t=!1,closeOnOutsideClickOnly:r=!1})=>{const[o,n]=s.useState(""),i=s.useRef(null);s.useEffect(()=>{if(!r)return;const a=u=>{if(!i.current)return;const{target:f}=u;f instanceof Node&&(i.current.contains(f)||n(""))};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[r]);const c=a=>{r&&a===""||n(a)};return l.jsxs($n,{ref:i,value:r?o:void 0,onValueChange:r?c:void 0,onPointerMove:t?a=>a.preventDefault():void 0,onPointerLeave:t?a=>a.preventDefault():void 0,children:[l.jsx(Dn,{children:e}),l.jsx(kn,{children:l.jsx(Fn,{})})]})};z.Item=dt;z.PlatformMenu=ut;z.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"PlatformMenu",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"MenuV2",props:{openOnClickOnly:{defaultValue:{value:"false",computed:!1},required:!1},closeOnOutsideClickOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};const Un=I.div`
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
`,ft=({children:e})=>l.jsx(Un,{children:e});ft.__docgenInfo={description:"",methods:[],displayName:"HeaderV2"};const Hn=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[200]};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
  color: ${({theme:e})=>e.colors.neutral[600]};
`,Kn=I.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.md};
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
`,Bn=[{appName:"maps",description:"Create best in class OS mapping with single click technology",url:"https://maps.edozo.com/"},{appName:"occupiers",description:"Create plans and see occupiers for all use classes",url:"https://occupiers.edozo.com/"},{appName:"insight",description:"Find thousands of commercial property transaction comps",url:"https://insight.edozo.com/"},{appName:"reports",description:"Create automated valuation reports",url:"https://reports.edozo.com/"}],U=({logoSection:e,logout:t,isAuthenticated:r,edozoProducts:o=Bn,children:n,openOnClickOnly:i=!0,user:c})=>l.jsxs(ft,{children:[e,r&&l.jsxs(z,{openOnClickOnly:i,closeOnOutsideClickOnly:!0,children:[n,l.jsx(lt,{edozoProducts:o,triggerProps:i?{onPointerMove:a=>a.preventDefault(),onPointerLeave:a=>a.preventDefault()}:void 0}),l.jsxs(me,{children:[l.jsx(Vn,{"aria-label":"Account menu",onPointerMove:i?a=>a.preventDefault():void 0,onPointerLeave:i?a=>a.preventDefault():void 0,children:l.jsx(Z,{icon:xt,size:"md","aria-hidden":"true"})}),l.jsxs(ct,{children:[c&&l.jsx(Hn,{children:c}),l.jsx(at,{asChild:!0,children:l.jsxs(Kn,{type:"button",onClick:t,"data-testid":"logoutButton",children:[l.jsx(Z,{icon:Et,size:"sm","aria-hidden":"true"}),"Logout"]})})]})]})]})]});U.__docgenInfo={description:"",methods:[],displayName:"AppHeaderV2",props:{logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},logoSection:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isAuthenticated:{required:!1,tsType:{name:"boolean"},description:""},edozoProducts:{required:!1,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:"",defaultValue:{value:`[
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
]`,computed:!1}},openOnClickOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},user:{required:!1,tsType:{name:"string"},description:"The logged-in user identifier shown in the account dropdown. May be a name or email address."}}};const no={title:"Components/HeaderV2",component:U,argTypes:{user:{description:"Logged-in user identifier (name or email) shown in the account dropdown.",control:{type:"text"}},isAuthenticated:{description:"Whether to show the authenticated menu.",control:{type:"boolean"}}}},H=()=>l.jsx(U,{logoSection:l.jsx(ae,{variant:"edozo",size:"small"}),logout:()=>{}}),V=e=>l.jsx(U,{logoSection:l.jsx("a",{href:"#",children:l.jsx(ae,{variant:"edozo"})}),isAuthenticated:e.isAuthenticated,logout:e.logout,user:e.user,children:l.jsxs(s.Fragment,{children:[l.jsx(z.Item,{children:l.jsx("a",{href:"#",className:"active",children:"Help"})}),l.jsx(z.Item,{children:l.jsx("a",{href:"#",children:"Docs"})})]})});V.args={isAuthenticated:!0,logout:()=>console.log("app specific logout method")};const K=()=>l.jsx(U,{logoSection:l.jsx(Le,{appName:"maps"}),isAuthenticated:!0,logout:()=>{}}),k=e=>l.jsx(U,{logoSection:l.jsx("a",{href:"#",children:l.jsx(ae,{variant:"edozo"})}),isAuthenticated:!0,logout:e.logout,user:e.user});k.args={logout:()=>console.log("logout"),user:"jane.smith@example.com"};H.__docgenInfo={description:"",methods:[],displayName:"Default"};V.__docgenInfo={description:"",methods:[],displayName:"ControlledAppHeader"};K.__docgenInfo={description:"",methods:[],displayName:"MapsApp"};k.__docgenInfo={description:"",methods:[],displayName:"WithUser"};var Ee,Ce,be;H.parameters={...H.parameters,docs:{...(Ee=H.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => <AppHeaderV2 logoSection={<EdozoLogo variant={'edozo' as LogoVariants} size="small" />} logout={() => {}} />`,...(be=(Ce=H.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var Ne,Re,Me;V.parameters={...V.parameters,docs:{...(Ne=V.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => <AppHeaderV2 logoSection={
// eslint-disable-next-line jsx-a11y/anchor-is-valid
<a href="#">
        <EdozoLogo variant={'edozo' as LogoVariants} />
      </a>} isAuthenticated={args.isAuthenticated} logout={args.logout} user={args.user}>
    <Fragment>
      <MenuV2.Item>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="active">
          Help
        </a>
      </MenuV2.Item>
      <MenuV2.Item>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Docs</a>
      </MenuV2.Item>
    </Fragment>
  </AppHeaderV2>`,...(Me=(Re=V.parameters)==null?void 0:Re.docs)==null?void 0:Me.source}}};var Pe,Ie,Se;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:'() => <AppHeaderV2 logoSection={<EdozoLogoV2 appName="maps" />} isAuthenticated logout={() => {}} />',...(Se=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var Te,_e,Ae;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`args => <AppHeaderV2 logoSection={
// eslint-disable-next-line jsx-a11y/anchor-is-valid
<a href="#">
        <EdozoLogo variant={'edozo' as LogoVariants} />
      </a>} isAuthenticated logout={args.logout} user={args.user} />`,...(Ae=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};const oo=["Default","ControlledAppHeader","MapsApp","WithUser"];export{V as ControlledAppHeader,H as Default,K as MapsApp,k as WithUser,oo as __namedExportsOrder,no as default};
