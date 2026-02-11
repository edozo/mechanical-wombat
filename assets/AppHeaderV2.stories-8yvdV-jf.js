import{r as i,j as u,V as Re,R as D,d as I,m as z}from"./iframe-B8H_cd0c.js";import{r as it,P as at}from"./index-t_li2hrf.js";import{c as re,L as G}from"./Lucide-BXeTKNB4.js";import{L as pe}from"./List-2gZKcKMl.js";import{E as Me}from"./EdozoLogo-C-dDWVPF.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ut=re("chevron-down",ct);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],dt=re("circle-user-round",lt);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],pt=re("log-out",ft);function Pe(e,t=[]){let o=[];function r(s,a){const c=i.createContext(a),d=o.length;o=[...o,a];const f=p=>{var E;const{scope:m,children:w,...C}=p,v=((E=m==null?void 0:m[e])==null?void 0:E[d])||c,y=i.useMemo(()=>C,Object.values(C));return u.jsx(v.Provider,{value:y,children:w})};f.displayName=s+"Provider";function l(p,m){var v;const w=((v=m==null?void 0:m[e])==null?void 0:v[d])||c,C=i.useContext(w);if(C)return C;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${s}\``)}return[f,l]}const n=()=>{const s=o.map(a=>i.createContext(a));return function(c){const d=(c==null?void 0:c[e])||s;return i.useMemo(()=>({[`__scope${e}`]:{...c,[e]:d}}),[c,d])}};return n.scopeName=e,[r,mt(n,...t)]}function mt(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const r=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(s){const a=r.reduce((c,{useScope:d,scopeName:f})=>{const p=d(s)[`__scope${f}`];return{...c,...p}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return o.scopeName=t.scopeName,o}function P(e,t,{checkForDefaultPrevented:o=!0}={}){return function(n){if(e==null||e(n),o===!1||!n.defaultPrevented)return t==null?void 0:t(n)}}function me(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function se(...e){return t=>{let o=!1;const r=e.map(n=>{const s=me(n,t);return!o&&typeof s=="function"&&(o=!0),s});if(o)return()=>{for(let n=0;n<r.length;n++){const s=r[n];typeof s=="function"?s():me(e[n],null)}}}}function j(...e){return i.useCallback(se(...e),e)}function Y(e){const t=vt(e),o=i.forwardRef((r,n)=>{const{children:s,...a}=r,c=i.Children.toArray(s),d=c.find(ht);if(d){const f=d.props.children,l=c.map(p=>p===d?i.Children.count(f)>1?i.Children.only(null):i.isValidElement(f)?f.props.children:null:p);return u.jsx(t,{...a,ref:n,children:i.isValidElement(f)?i.cloneElement(f,void 0,l):null})}return u.jsx(t,{...a,ref:n,children:s})});return o.displayName=`${e}.Slot`,o}function vt(e){const t=i.forwardRef((o,r)=>{const{children:n,...s}=o;if(i.isValidElement(n)){const a=xt(n),c=yt(s,n.props);return n.type!==i.Fragment&&(c.ref=r?se(r,a):a),i.cloneElement(n,c)}return i.Children.count(n)>1?i.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var gt=Symbol("radix.slottable");function ht(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===gt}function yt(e,t){const o={...t};for(const r in t){const n=e[r],s=t[r];/^on[A-Z]/.test(r)?n&&s?o[r]=(...c)=>{const d=s(...c);return n(...c),d}:n&&(o[r]=n):r==="style"?o[r]={...n,...s}:r==="className"&&(o[r]=[n,s].filter(Boolean).join(" "))}return{...e,...o}}function xt(e){var r,n;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var wt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],S=wt.reduce((e,t)=>{const o=Y(`Primitive.${t}`),r=i.forwardRef((n,s)=>{const{asChild:a,...c}=n,d=a?o:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),u.jsx(d,{...c,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Z(e,t){e&&it.flushSync(()=>e.dispatchEvent(t))}var O=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},Ct=Re[" useInsertionEffect ".trim().toString()]||O;function Ie({prop:e,defaultProp:t,onChange:o=()=>{},caller:r}){const[n,s,a]=bt({defaultProp:t,onChange:o}),c=e!==void 0,d=c?e:n;{const l=i.useRef(e!==void 0);i.useEffect(()=>{const p=l.current;p!==c&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),l.current=c},[c,r])}const f=i.useCallback(l=>{var p;if(c){const m=Et(l)?l(e):l;m!==e&&((p=a.current)==null||p.call(a,m))}else s(l)},[c,e,s,a]);return[d,f]}function bt({defaultProp:e,onChange:t}){const[o,r]=i.useState(e),n=i.useRef(o),s=i.useRef(t);return Ct(()=>{s.current=t},[t]),i.useEffect(()=>{var a;n.current!==o&&((a=s.current)==null||a.call(s,o),n.current=o)},[o,n]),[o,r,s]}function Et(e){return typeof e=="function"}var Nt=i.createContext(void 0);function Rt(e){const t=i.useContext(Nt);return e||t||"ltr"}function Mt(e,t){return i.useReducer((o,r)=>t[o][r]??o,e)}var K=e=>{const{present:t,children:o}=e,r=Pt(t),n=typeof o=="function"?o({present:r.isPresent}):i.Children.only(o),s=j(r.ref,It(n));return typeof o=="function"||r.isPresent?i.cloneElement(n,{ref:s}):null};K.displayName="Presence";function Pt(e){const[t,o]=i.useState(),r=i.useRef(null),n=i.useRef(e),s=i.useRef("none"),a=e?"mounted":"unmounted",[c,d]=Mt(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const f=U(r.current);s.current=c==="mounted"?f:"none"},[c]),O(()=>{const f=r.current,l=n.current;if(l!==e){const m=s.current,w=U(f);e?d("MOUNT"):w==="none"||(f==null?void 0:f.display)==="none"?d("UNMOUNT"):d(l&&m!==w?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,d]),O(()=>{if(t){let f;const l=t.ownerDocument.defaultView??window,p=w=>{const v=U(r.current).includes(CSS.escape(w.animationName));if(w.target===t&&v&&(d("ANIMATION_END"),!n.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",f=l.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},m=w=>{w.target===t&&(s.current=U(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{l.clearTimeout(f),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:i.useCallback(f=>{r.current=f?getComputedStyle(f):null,o(f)},[])}}function U(e){return(e==null?void 0:e.animationName)||"none"}function It(e){var r,n;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(n=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:n.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var St=Re[" useId ".trim().toString()]||(()=>{}),Tt=0;function Se(e){const[t,o]=i.useState(St());return O(()=>{o(r=>r??String(Tt++))},[e]),e||(t?`radix-${t}`:"")}function Te(e){const t=e+"CollectionProvider",[o,r]=Pe(t),[n,s]=o(t,{collectionRef:{current:null},itemMap:new Map}),a=v=>{const{scope:y,children:E}=v,M=D.useRef(null),g=D.useRef(new Map).current;return u.jsx(n,{scope:y,itemMap:g,collectionRef:M,children:E})};a.displayName=t;const c=e+"CollectionSlot",d=Y(c),f=D.forwardRef((v,y)=>{const{scope:E,children:M}=v,g=s(c,E),h=j(y,g.collectionRef);return u.jsx(d,{ref:h,children:M})});f.displayName=c;const l=e+"CollectionItemSlot",p="data-radix-collection-item",m=Y(l),w=D.forwardRef((v,y)=>{const{scope:E,children:M,...g}=v,h=D.useRef(null),x=j(y,h),N=s(l,E);return D.useEffect(()=>(N.itemMap.set(h,{ref:h,...g}),()=>void N.itemMap.delete(h))),u.jsx(m,{[p]:"",ref:x,children:M})});w.displayName=l;function C(v){const y=s(e+"CollectionConsumer",v);return D.useCallback(()=>{const M=y.collectionRef.current;if(!M)return[];const g=Array.from(M.querySelectorAll(`[${p}]`));return Array.from(y.itemMap.values()).sort((N,b)=>g.indexOf(N.ref.current)-g.indexOf(b.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:a,Slot:f,ItemSlot:w},C,r]}function L(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...o)=>{var r;return(r=t.current)==null?void 0:r.call(t,...o)},[])}function _t(e,t=globalThis==null?void 0:globalThis.document){const o=L(e);i.useEffect(()=>{const r=n=>{n.key==="Escape"&&o(n)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[o,t])}var At="DismissableLayer",J="dismissableLayer.update",Lt="dismissableLayer.pointerDownOutside",jt="dismissableLayer.focusOutside",ve,_e=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ae=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:r,onPointerDownOutside:n,onFocusOutside:s,onInteractOutside:a,onDismiss:c,...d}=e,f=i.useContext(_e),[l,p]=i.useState(null),m=(l==null?void 0:l.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,w]=i.useState({}),C=j(t,b=>p(b)),v=Array.from(f.layers),[y]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),E=v.indexOf(y),M=l?v.indexOf(l):-1,g=f.layersWithOutsidePointerEventsDisabled.size>0,h=M>=E,x=$t(b=>{const T=b.target,R=[...f.branches].some(A=>A.contains(T));!h||R||(n==null||n(b),a==null||a(b),b.defaultPrevented||c==null||c())},m),N=kt(b=>{const T=b.target;[...f.branches].some(A=>A.contains(T))||(s==null||s(b),a==null||a(b),b.defaultPrevented||c==null||c())},m);return _t(b=>{M===f.layers.size-1&&(r==null||r(b),!b.defaultPrevented&&c&&(b.preventDefault(),c()))},m),i.useEffect(()=>{if(l)return o&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(ve=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(l)),f.layers.add(l),ge(),()=>{o&&f.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=ve)}},[l,m,o,f]),i.useEffect(()=>()=>{l&&(f.layers.delete(l),f.layersWithOutsidePointerEventsDisabled.delete(l),ge())},[l,f]),i.useEffect(()=>{const b=()=>w({});return document.addEventListener(J,b),()=>document.removeEventListener(J,b)},[]),u.jsx(S.div,{...d,ref:C,style:{pointerEvents:g?h?"auto":"none":void 0,...e.style},onFocusCapture:P(e.onFocusCapture,N.onFocusCapture),onBlurCapture:P(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:P(e.onPointerDownCapture,x.onPointerDownCapture)})});Ae.displayName=At;var Dt="DismissableLayerBranch",Ot=i.forwardRef((e,t)=>{const o=i.useContext(_e),r=i.useRef(null),n=j(t,r);return i.useEffect(()=>{const s=r.current;if(s)return o.branches.add(s),()=>{o.branches.delete(s)}},[o.branches]),u.jsx(S.div,{...e,ref:n})});Ot.displayName=Dt;function $t(e,t=globalThis==null?void 0:globalThis.document){const o=L(e),r=i.useRef(!1),n=i.useRef(()=>{});return i.useEffect(()=>{const s=c=>{if(c.target&&!r.current){let d=function(){Le(Lt,o,f,{discrete:!0})};const f={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",n.current),n.current=d,t.addEventListener("click",n.current,{once:!0})):d()}else t.removeEventListener("click",n.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",s),t.removeEventListener("click",n.current)}},[t,o]),{onPointerDownCapture:()=>r.current=!0}}function kt(e,t=globalThis==null?void 0:globalThis.document){const o=L(e),r=i.useRef(!1);return i.useEffect(()=>{const n=s=>{s.target&&!r.current&&Le(jt,o,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",n),()=>t.removeEventListener("focusin",n)},[t,o]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ge(){const e=new CustomEvent(J);document.dispatchEvent(e)}function Le(e,t,o,{discrete:r}){const n=o.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:o});t&&n.addEventListener(e,t,{once:!0}),r?Z(n,s):n.dispatchEvent(s)}function Vt(e){const t=i.useRef({value:e,previous:e});return i.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Ft=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),zt="VisuallyHidden",je=i.forwardRef((e,t)=>u.jsx(S.span,{...e,ref:t,style:{...Ft,...e.style}}));je.displayName=zt;var Wt=je,$="NavigationMenu",[ie,De,Kt]=Te($),[Q,Ut,Ht]=Te($),[ae,Vn]=Pe($,[Kt,Ht]),[Bt,_]=ae($),[Xt,qt]=ae($),Oe=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,value:r,onValueChange:n,defaultValue:s,delayDuration:a=200,skipDelayDuration:c=300,orientation:d="horizontal",dir:f,...l}=e,[p,m]=i.useState(null),w=j(t,R=>m(R)),C=Rt(f),v=i.useRef(0),y=i.useRef(0),E=i.useRef(0),[M,g]=i.useState(!0),[h,x]=Ie({prop:r,onChange:R=>{const A=R!=="",q=c>0;A?(window.clearTimeout(E.current),q&&g(!1)):(window.clearTimeout(E.current),E.current=window.setTimeout(()=>g(!0),c)),n==null||n(R)},defaultProp:s??"",caller:$}),N=i.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>x(""),150)},[x]),b=i.useCallback(R=>{window.clearTimeout(y.current),x(R)},[x]),T=i.useCallback(R=>{h===R?window.clearTimeout(y.current):v.current=window.setTimeout(()=>{window.clearTimeout(y.current),x(R)},a)},[h,x,a]);return i.useEffect(()=>()=>{window.clearTimeout(v.current),window.clearTimeout(y.current),window.clearTimeout(E.current)},[]),u.jsx($e,{scope:o,isRootMenu:!0,value:h,dir:C,orientation:d,rootNavigationMenu:p,onTriggerEnter:R=>{window.clearTimeout(v.current),M?T(R):b(R)},onTriggerLeave:()=>{window.clearTimeout(v.current),N()},onContentEnter:()=>window.clearTimeout(y.current),onContentLeave:N,onItemSelect:R=>{x(A=>A===R?"":R)},onItemDismiss:()=>x(""),children:u.jsx(S.nav,{"aria-label":"Main","data-orientation":d,dir:C,...l,ref:w})})});Oe.displayName=$;var ee="NavigationMenuSub",Gt=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,value:r,onValueChange:n,defaultValue:s,orientation:a="horizontal",...c}=e,d=_(ee,o),[f,l]=Ie({prop:r,onChange:n,defaultProp:s??"",caller:ee});return u.jsx($e,{scope:o,isRootMenu:!1,value:f,dir:d.dir,orientation:a,rootNavigationMenu:d.rootNavigationMenu,onTriggerEnter:p=>l(p),onItemSelect:p=>l(p),onItemDismiss:()=>l(""),children:u.jsx(S.div,{"data-orientation":a,...c,ref:t})})});Gt.displayName=ee;var $e=e=>{const{scope:t,isRootMenu:o,rootNavigationMenu:r,dir:n,orientation:s,children:a,value:c,onItemSelect:d,onItemDismiss:f,onTriggerEnter:l,onTriggerLeave:p,onContentEnter:m,onContentLeave:w}=e,[C,v]=i.useState(null),[y,E]=i.useState(new Map),[M,g]=i.useState(null);return u.jsx(Bt,{scope:t,isRootMenu:o,rootNavigationMenu:r,value:c,previousValue:Vt(c),baseId:Se(),dir:n,orientation:s,viewport:C,onViewportChange:v,indicatorTrack:M,onIndicatorTrackChange:g,onTriggerEnter:L(l),onTriggerLeave:L(p),onContentEnter:L(m),onContentLeave:L(w),onItemSelect:L(d),onItemDismiss:L(f),onViewportContentChange:i.useCallback((h,x)=>{E(N=>(N.set(h,x),new Map(N)))},[]),onViewportContentRemove:i.useCallback(h=>{E(x=>x.has(h)?(x.delete(h),new Map(x)):x)},[]),children:u.jsx(ie.Provider,{scope:t,children:u.jsx(Xt,{scope:t,items:y,children:a})})})},ke="NavigationMenuList",Ve=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,...r}=e,n=_(ke,o),s=u.jsx(S.ul,{"data-orientation":n.orientation,...r,ref:t});return u.jsx(S.div,{style:{position:"relative"},ref:n.onIndicatorTrackChange,children:u.jsx(ie.Slot,{scope:o,children:n.isRootMenu?u.jsx(qe,{asChild:!0,children:s}):s})})});Ve.displayName=ke;var Fe="NavigationMenuItem",[Yt,ze]=ae(Fe),We=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,value:r,...n}=e,s=Se(),a=r||s||"LEGACY_REACT_AUTO_VALUE",c=i.useRef(null),d=i.useRef(null),f=i.useRef(null),l=i.useRef(()=>{}),p=i.useRef(!1),m=i.useCallback((C="start")=>{if(c.current){l.current();const v=ne(c.current);v.length&&le(C==="start"?v:v.reverse())}},[]),w=i.useCallback(()=>{if(c.current){const C=ne(c.current);C.length&&(l.current=rn(C))}},[]);return u.jsx(Yt,{scope:o,value:a,triggerRef:d,contentRef:c,focusProxyRef:f,wasEscapeCloseRef:p,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:w,onContentFocusOutside:w,children:u.jsx(S.li,{...n,ref:t})})});We.displayName=Fe;var te="NavigationMenuTrigger",Ke=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,disabled:r,...n}=e,s=_(te,e.__scopeNavigationMenu),a=ze(te,e.__scopeNavigationMenu),c=i.useRef(null),d=j(c,a.triggerRef,t),f=Ye(s.baseId,a.value),l=Ze(s.baseId,a.value),p=i.useRef(!1),m=i.useRef(!1),w=a.value===s.value;return u.jsxs(u.Fragment,{children:[u.jsx(ie.ItemSlot,{scope:o,value:a.value,children:u.jsx(Ge,{asChild:!0,children:u.jsx(S.button,{id:f,disabled:r,"data-disabled":r?"":void 0,"data-state":de(w),"aria-expanded":w,"aria-controls":l,...n,ref:d,onPointerEnter:P(e.onPointerEnter,()=>{m.current=!1,a.wasEscapeCloseRef.current=!1}),onPointerMove:P(e.onPointerMove,B(()=>{r||m.current||a.wasEscapeCloseRef.current||p.current||(s.onTriggerEnter(a.value),p.current=!0)})),onPointerLeave:P(e.onPointerLeave,B(()=>{r||(s.onTriggerLeave(),p.current=!1)})),onClick:P(e.onClick,()=>{s.onItemSelect(a.value),m.current=w}),onKeyDown:P(e.onKeyDown,C=>{const y={horizontal:"ArrowDown",vertical:s.dir==="rtl"?"ArrowLeft":"ArrowRight"}[s.orientation];w&&C.key===y&&(a.onEntryKeyDown(),C.preventDefault())})})})}),w&&u.jsxs(u.Fragment,{children:[u.jsx(Wt,{"aria-hidden":!0,tabIndex:0,ref:a.focusProxyRef,onFocus:C=>{const v=a.contentRef.current,y=C.relatedTarget,E=y===c.current,M=v==null?void 0:v.contains(y);(E||!M)&&a.onFocusProxyEnter(E?"start":"end")}}),s.viewport&&u.jsx("span",{"aria-owns":l})]})]})});Ke.displayName=te;var Zt="NavigationMenuLink",he="navigationMenu.linkSelect",Ue=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,active:r,onSelect:n,...s}=e;return u.jsx(Ge,{asChild:!0,children:u.jsx(S.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...s,ref:t,onClick:P(e.onClick,a=>{const c=a.target,d=new CustomEvent(he,{bubbles:!0,cancelable:!0});if(c.addEventListener(he,f=>n==null?void 0:n(f),{once:!0}),Z(c,d),!d.defaultPrevented&&!a.metaKey){const f=new CustomEvent(H,{bubbles:!0,cancelable:!0});Z(c,f)}},{checkForDefaultPrevented:!1})})})});Ue.displayName=Zt;var ce="NavigationMenuIndicator",Jt=i.forwardRef((e,t)=>{const{forceMount:o,...r}=e,n=_(ce,e.__scopeNavigationMenu),s=!!n.value;return n.indicatorTrack?at.createPortal(u.jsx(K,{present:o||s,children:u.jsx(Qt,{...r,ref:t})}),n.indicatorTrack):null});Jt.displayName=ce;var Qt=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,...r}=e,n=_(ce,o),s=De(o),[a,c]=i.useState(null),[d,f]=i.useState(null),l=n.orientation==="horizontal",p=!!n.value;i.useEffect(()=>{var v;const C=(v=s().find(y=>y.value===n.value))==null?void 0:v.ref.current;C&&c(C)},[s,n.value]);const m=()=>{a&&f({size:l?a.offsetWidth:a.offsetHeight,offset:l?a.offsetLeft:a.offsetTop})};return oe(a,m),oe(n.indicatorTrack,m),d?u.jsx(S.div,{"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":n.orientation,...r,ref:t,style:{position:"absolute",...l?{left:0,width:d.size+"px",transform:`translateX(${d.offset}px)`}:{top:0,height:d.size+"px",transform:`translateY(${d.offset}px)`},...r.style}}):null}),V="NavigationMenuContent",He=i.forwardRef((e,t)=>{const{forceMount:o,...r}=e,n=_(V,e.__scopeNavigationMenu),s=ze(V,e.__scopeNavigationMenu),a=j(s.contentRef,t),c=s.value===n.value,d={value:s.value,triggerRef:s.triggerRef,focusProxyRef:s.focusProxyRef,wasEscapeCloseRef:s.wasEscapeCloseRef,onContentFocusOutside:s.onContentFocusOutside,onRootContentClose:s.onRootContentClose,...r};return n.viewport?u.jsx(en,{forceMount:o,...d,ref:a}):u.jsx(K,{present:o||c,children:u.jsx(Be,{"data-state":de(c),...d,ref:a,onPointerEnter:P(e.onPointerEnter,n.onContentEnter),onPointerLeave:P(e.onPointerLeave,B(n.onContentLeave)),style:{pointerEvents:!c&&n.isRootMenu?"none":void 0,...d.style}})})});He.displayName=V;var en=i.forwardRef((e,t)=>{const o=_(V,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:n}=o;return O(()=>{r(e.value,{ref:t,...e})},[e,t,r]),O(()=>()=>n(e.value),[e.value,n]),null}),H="navigationMenu.rootContentDismiss",Be=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,value:r,triggerRef:n,focusProxyRef:s,wasEscapeCloseRef:a,onRootContentClose:c,onContentFocusOutside:d,...f}=e,l=_(V,o),p=i.useRef(null),m=j(p,t),w=Ye(l.baseId,r),C=Ze(l.baseId,r),v=De(o),y=i.useRef(null),{onItemDismiss:E}=l;i.useEffect(()=>{const g=p.current;if(l.isRootMenu&&g){const h=()=>{var x;E(),c(),g.contains(document.activeElement)&&((x=n.current)==null||x.focus())};return g.addEventListener(H,h),()=>g.removeEventListener(H,h)}},[l.isRootMenu,e.value,n,E,c]);const M=i.useMemo(()=>{const h=v().map(A=>A.value);l.dir==="rtl"&&h.reverse();const x=h.indexOf(l.value),N=h.indexOf(l.previousValue),b=r===l.value,T=N===h.indexOf(r);if(!b&&!T)return y.current;const R=(()=>{if(x!==N){if(b&&N!==-1)return x>N?"from-end":"from-start";if(T&&x!==-1)return x>N?"to-start":"to-end"}return null})();return y.current=R,R},[l.previousValue,l.value,l.dir,v,r]);return u.jsx(qe,{asChild:!0,children:u.jsx(Ae,{id:C,"aria-labelledby":w,"data-motion":M,"data-orientation":l.orientation,...f,ref:m,disableOutsidePointerEvents:!1,onDismiss:()=>{var h;const g=new Event(H,{bubbles:!0,cancelable:!0});(h=p.current)==null||h.dispatchEvent(g)},onFocusOutside:P(e.onFocusOutside,g=>{var x;d();const h=g.target;(x=l.rootNavigationMenu)!=null&&x.contains(h)&&g.preventDefault()}),onPointerDownOutside:P(e.onPointerDownOutside,g=>{var b;const h=g.target,x=v().some(T=>{var R;return(R=T.ref.current)==null?void 0:R.contains(h)}),N=l.isRootMenu&&((b=l.viewport)==null?void 0:b.contains(h));(x||N||!l.isRootMenu)&&g.preventDefault()}),onKeyDown:P(e.onKeyDown,g=>{var N;const h=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!h){const b=ne(g.currentTarget),T=document.activeElement,R=b.findIndex(st=>st===T),q=g.shiftKey?b.slice(0,R).reverse():b.slice(R+1,b.length);le(q)?g.preventDefault():(N=s.current)==null||N.focus()}}),onEscapeKeyDown:P(e.onEscapeKeyDown,g=>{a.current=!0})})})}),ue="NavigationMenuViewport",Xe=i.forwardRef((e,t)=>{const{forceMount:o,...r}=e,s=!!_(ue,e.__scopeNavigationMenu).value;return u.jsx(K,{present:o||s,children:u.jsx(tn,{...r,ref:t})})});Xe.displayName=ue;var tn=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,children:r,...n}=e,s=_(ue,o),a=j(t,s.onViewportChange),c=qt(V,e.__scopeNavigationMenu),[d,f]=i.useState(null),[l,p]=i.useState(null),m=d?(d==null?void 0:d.width)+"px":void 0,w=d?(d==null?void 0:d.height)+"px":void 0,C=!!s.value,v=C?s.value:s.previousValue;return oe(l,()=>{l&&f({width:l.offsetWidth,height:l.offsetHeight})}),u.jsx(S.div,{"data-state":de(C),"data-orientation":s.orientation,...n,ref:a,style:{pointerEvents:!C&&s.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":m,"--radix-navigation-menu-viewport-height":w,...n.style},onPointerEnter:P(e.onPointerEnter,s.onContentEnter),onPointerLeave:P(e.onPointerLeave,B(s.onContentLeave)),children:Array.from(c.items).map(([E,{ref:M,forceMount:g,...h}])=>{const x=v===E;return u.jsx(K,{present:g||x,children:u.jsx(Be,{...h,ref:se(M,N=>{x&&N&&p(N)})})},E)})})}),nn="FocusGroup",qe=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,...r}=e,n=_(nn,o);return u.jsx(Q.Provider,{scope:o,children:u.jsx(Q.Slot,{scope:o,children:u.jsx(S.div,{dir:n.dir,...r,ref:t})})})}),ye=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],on="FocusGroupItem",Ge=i.forwardRef((e,t)=>{const{__scopeNavigationMenu:o,...r}=e,n=Ut(o),s=_(on,o);return u.jsx(Q.ItemSlot,{scope:o,children:u.jsx(S.button,{...r,ref:t,onKeyDown:P(e.onKeyDown,a=>{if(["Home","End",...ye].includes(a.key)){let d=n().map(p=>p.ref.current);if([s.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(a.key)&&d.reverse(),ye.includes(a.key)){const p=d.indexOf(a.currentTarget);d=d.slice(p+1)}setTimeout(()=>le(d)),a.preventDefault()}})})})});function ne(e){const t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const n=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||n?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)t.push(o.currentNode);return t}function le(e){const t=document.activeElement;return e.some(o=>o===t?!0:(o.focus(),document.activeElement!==t))}function rn(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const o=t.dataset.tabindex;t.setAttribute("tabindex",o)})}}function oe(e,t){const o=L(t);O(()=>{let r=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(o)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,o])}function de(e){return e?"open":"closed"}function Ye(e,t){return`${e}-trigger-${t}`}function Ze(e,t){return`${e}-content-${t}`}function B(e){return t=>t.pointerType==="mouse"?e(t):void 0}var sn=Oe,an=Ve,cn=We,Je=Ke,Qe=Ue,un=He,ln=Xe;const dn=I.span`
  display: inline-flex;
  align-items: center;
`,fn=I.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
`,pn=I.div`
  display: flex;
  flex-direction: column;
`,mn=I.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.indigo[800]};
`,vn=z`
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,gn=z`
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,hn=z`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(120px);
  }
`,yn=z`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-120px);
  }
`,xn=z`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.96);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`,wn=z`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.96);
  }
`,Cn=I(sn)`
  position: relative;
  display: flex;
  align-items: stretch;
`,bn=I(an)`
  list-style: none;
  margin: 0;
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.standard};
`,fe=I(cn)`
  position: relative;
`,En=I(Je)`
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
`,Nn=I(Je)`
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
`,et=I(un)`
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
    animation-name: ${gn};
  }

  &[data-motion='from-end'] {
    animation-name: ${vn};
  }

  &[data-motion='to-start'] {
    animation-name: ${yn};
  }

  &[data-motion='to-end'] {
    animation-name: ${hn};
  }

  button {
    text-decoration: none;
  }
`,Rn=I.div`
  position: relative;
  top: 70%;
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  transform: rotate(45deg);
  border-top-left-radius: 2px;
  border: 1px solid ${({theme:e})=>e.colors.neutral[300]};
  border-bottom: none;
  border-right: none;
`,Mn=I.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`,Pn=I(ln)`
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
    animation: ${xn} 200ms ease;
  }

  &[data-state='closed'] {
    animation: ${wn} 200ms ease;
  }
`,tt=({edozoProducts:e,triggerProps:t})=>{const o=r=>{window.open(r.url,"_blank")};return u.jsxs(fe,{children:[u.jsxs(En,{...t,children:[u.jsx(dn,{children:"Products"}),u.jsx(G,{icon:ut,size:"sm","aria-hidden":"true"})]}),u.jsx(et,{children:u.jsx(pe,{variant:"platform",children:e.map(r=>u.jsx(pe.Item,{onClick:()=>o(r),disabled:r.disabled,children:u.jsxs(pn,{children:[u.jsx(mn,{children:r.appName}),u.jsx(fn,{children:r.description})]})},r.url))})})]})};tt.__docgenInfo={description:"",methods:[],displayName:"ProductSwitchV2",props:{edozoProducts:{required:!0,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:""},triggerProps:{required:!1,tsType:{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<'button'>",elements:[{name:"literal",value:"'button'"}]},description:""}}};const In=I.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,nt=({children:e})=>u.jsx(In,{children:e});nt.__docgenInfo={description:"",methods:[],displayName:"PlatformMenuV2"};const Sn=I.div`
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
`,ot=({children:e})=>u.jsx(fe,{children:u.jsx(Sn,{children:u.jsx(Qe,{asChild:!0,children:e})})});ot.__docgenInfo={description:"",methods:[],displayName:"MenuItemV2"};const F=({children:e,openOnClickOnly:t=!1,closeOnOutsideClickOnly:o=!1})=>{const[r,n]=i.useState(""),s=i.useRef(null);i.useEffect(()=>{if(!o)return;const c=d=>{if(!s.current)return;const f=d.target;f instanceof Node&&(s.current.contains(f)||n(""))};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[o]);const a=c=>{o&&c===""||n(c)};return u.jsxs(Cn,{ref:s,value:o?r:void 0,onValueChange:o?a:void 0,onPointerMove:t?c=>c.preventDefault():void 0,onPointerLeave:t?c=>c.preventDefault():void 0,children:[u.jsx(bn,{children:e}),u.jsx(Rn,{}),u.jsx(Mn,{children:u.jsx(Pn,{})})]})};F.Item=ot;F.PlatformMenu=nt;F.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"PlatformMenu",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"MenuV2",props:{openOnClickOnly:{defaultValue:{value:"false",computed:!1},required:!1},closeOnOutsideClickOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};const Tn=I.div`
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
`,rt=({children:e})=>u.jsx(Tn,{children:e});rt.__docgenInfo={description:"",methods:[],displayName:"HeaderV2"};const _n=I.button`
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
`,An=[{appName:"Maps",description:"Create best in class OS mapping with single click technology",url:"https://maps.edozo.com/"},{appName:"Occupiers",description:"Create plans and see occupiers for all use classes",url:"https://occupiers.edozo.com/"},{appName:"Insight",description:"Find thousands of commercial property transaction comps",url:"https://insight.edozo.com/"},{appName:"Reports",description:"Create automated valuation reports",url:"https://reports.edozo.com/"}],X=({logoSection:e,logout:t,isAuthenticated:o,edozoProducts:r=An,children:n,openOnClickOnly:s=!0})=>u.jsxs(rt,{children:[e,o&&u.jsxs(F,{openOnClickOnly:s,closeOnOutsideClickOnly:!0,children:[n,u.jsx(tt,{edozoProducts:r,triggerProps:s?{onPointerMove:a=>a.preventDefault(),onPointerLeave:a=>a.preventDefault()}:void 0}),u.jsxs(fe,{children:[u.jsx(Nn,{"aria-label":"Account menu",onPointerMove:s?a=>a.preventDefault():void 0,onPointerLeave:s?a=>a.preventDefault():void 0,children:u.jsx(G,{icon:dt,size:"md","aria-hidden":"true"})}),u.jsx(et,{children:u.jsx(Qe,{asChild:!0,children:u.jsxs(_n,{type:"button",onClick:t,"data-testid":"logoutButton",children:[u.jsx(G,{icon:pt,size:"sm","aria-hidden":"true"}),"Logout"]})})})]})]})]});X.__docgenInfo={description:"",methods:[],displayName:"AppHeaderV2",props:{logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},logoSection:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isAuthenticated:{required:!1,tsType:{name:"boolean"},description:""},edozoProducts:{required:!1,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:"",defaultValue:{value:`[
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
]`,computed:!1}},openOnClickOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Fn={title:"Components/HeaderV2",component:X},W=()=>u.jsx(X,{logoSection:u.jsx(Me,{variant:"edozo",size:"small"}),logout:()=>{}}),k=e=>u.jsx(X,{logoSection:u.jsx("a",{children:u.jsx(Me,{variant:"edozo"})}),isAuthenticated:e.isAuthenticated,logout:e.logout,children:u.jsxs(i.Fragment,{children:[u.jsx(F.Item,{children:u.jsx("a",{className:"active",children:"Help"})}),u.jsx(F.Item,{children:u.jsx("a",{children:"Docs"})})]})});k.args={isAuthenticated:!0,logout:()=>console.log("app specific logout method")};W.__docgenInfo={description:"",methods:[],displayName:"Default"};k.__docgenInfo={description:"",methods:[],displayName:"ControlledAppHeader"};var xe,we,Ce;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:'() => <AppHeaderV2 logoSection={<EdozoLogo variant={"edozo" as LogoVariants} size="small" />} logout={() => {}} />',...(Ce=(we=W.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var be,Ee,Ne;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`args => <AppHeaderV2 logoSection={<a>
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
  </AppHeaderV2>`,...(Ne=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};const zn=["Default","ControlledAppHeader"];export{k as ControlledAppHeader,W as Default,zn as __namedExportsOrder,Fn as default};
