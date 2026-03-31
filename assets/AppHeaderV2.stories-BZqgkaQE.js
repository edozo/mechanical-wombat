import{r as s,j as c,R as Ee,b as L,c as P,p as W}from"./iframe-A9Ej3IUX.js";import{r as tt,R as nt}from"./index-dgGAFEio.js";import{c as se,u as D}from"./index-DG7SAsq_.js";import{E as Ce}from"./EdozoLogoV2-DaoyqAyi.js";import{c as ie,L as Z}from"./Lucide-DI0D7BoX.js";import{L as ge}from"./List-CBuAg5lV.js";import{E as ae}from"./EdozoLogo-BmrbuVdd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ozMNPM97.js";import"./edozo-logo-CiP2rhoA.js";const ot=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],rt=ie("chevron-down",ot);const st=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],it=ie("circle-user-round",st);const at=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],ct=ie("log-out",at);function be(e,t=[]){let n=[];function r(i,l){const a=s.createContext(l),u=n.length;n=[...n,l];const f=p=>{const{scope:g,children:y,...x}=p,v=g?.[e]?.[u]||a,w=s.useMemo(()=>x,Object.values(x));return c.jsx(v.Provider,{value:w,children:y})};f.displayName=i+"Provider";function d(p,g){const y=g?.[e]?.[u]||a,x=s.useContext(y);if(x)return x;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[f,d]}const o=()=>{const i=n.map(l=>s.createContext(l));return function(a){const u=a?.[e]||i;return s.useMemo(()=>({[`__scope${e}`]:{...a,[e]:u}}),[a,u])}};return o.scopeName=e,[r,lt(o,...t)]}function lt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=r.reduce((a,{useScope:u,scopeName:f})=>{const p=u(i)[`__scope${f}`];return{...a,...p}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}function I(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e?.(o),n===!1||!o.defaultPrevented)return t?.(o)}}function ut(e){const t=dt(e),n=s.forwardRef((r,o)=>{const{children:i,...l}=r,a=s.Children.toArray(i),u=a.find(pt);if(u){const f=u.props.children,d=a.map(p=>p===u?s.Children.count(f)>1?s.Children.only(null):s.isValidElement(f)?f.props.children:null:p);return c.jsx(t,{...l,ref:o,children:s.isValidElement(f)?s.cloneElement(f,void 0,d):null})}return c.jsx(t,{...l,ref:o,children:i})});return n.displayName=`${e}.Slot`,n}function dt(e){const t=s.forwardRef((n,r)=>{const{children:o,...i}=n;if(s.isValidElement(o)){const l=gt(o),a=mt(i,o.props);return o.type!==s.Fragment&&(a.ref=r?se(r,l):l),s.cloneElement(o,a)}return s.Children.count(o)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ft=Symbol("radix.slottable");function pt(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ft}function mt(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{const u=i(...a);return o(...a),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function gt(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var vt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],S=vt.reduce((e,t)=>{const n=ut(`Primitive.${t}`),r=s.forwardRef((o,i)=>{const{asChild:l,...a}=o,u=l?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(u,{...a,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function J(e,t){e&&tt.flushSync(()=>e.dispatchEvent(t))}var O=globalThis?.document?s.useLayoutEffect:()=>{},ht=Ee[" useInsertionEffect ".trim().toString()]||O;function Ne({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,i,l]=yt({defaultProp:t,onChange:n}),a=e!==void 0,u=a?e:o;{const d=s.useRef(e!==void 0);s.useEffect(()=>{const p=d.current;p!==a&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=a},[a,r])}const f=s.useCallback(d=>{if(a){const p=xt(d)?d(e):d;p!==e&&l.current?.(p)}else i(d)},[a,e,i,l]);return[u,f]}function yt({defaultProp:e,onChange:t}){const[n,r]=s.useState(e),o=s.useRef(n),i=s.useRef(t);return ht(()=>{i.current=t},[t]),s.useEffect(()=>{o.current!==n&&(i.current?.(n),o.current=n)},[n,o]),[n,r,i]}function xt(e){return typeof e=="function"}var wt=s.createContext(void 0);function Et(e){const t=s.useContext(wt);return e||t||"ltr"}function Ct(e,t){return s.useReducer((n,r)=>t[n][r]??n,e)}var B=e=>{const{present:t,children:n}=e,r=bt(t),o=typeof n=="function"?n({present:r.isPresent}):s.Children.only(n),i=D(r.ref,Nt(o));return typeof n=="function"||r.isPresent?s.cloneElement(o,{ref:i}):null};B.displayName="Presence";function bt(e){const[t,n]=s.useState(),r=s.useRef(null),o=s.useRef(e),i=s.useRef("none"),l=e?"mounted":"unmounted",[a,u]=Ct(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const f=q(r.current);i.current=a==="mounted"?f:"none"},[a]),O(()=>{const f=r.current,d=o.current;if(d!==e){const g=i.current,y=q(f);e?u("MOUNT"):y==="none"||f?.display==="none"?u("UNMOUNT"):u(d&&g!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,u]),O(()=>{if(t){let f;const d=t.ownerDocument.defaultView??window,p=y=>{const v=q(r.current).includes(CSS.escape(y.animationName));if(y.target===t&&v&&(u("ANIMATION_END"),!o.current)){const w=t.style.animationFillMode;t.style.animationFillMode="forwards",f=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=w)})}},g=y=>{y.target===t&&(i.current=q(r.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{d.clearTimeout(f),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:s.useCallback(f=>{r.current=f?getComputedStyle(f):null,n(f)},[])}}function q(e){return e?.animationName||"none"}function Nt(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Rt=Ee[" useId ".trim().toString()]||(()=>{}),Mt=0;function Re(e){const[t,n]=s.useState(Rt());return O(()=>{n(r=>r??String(Mt++))},[e]),e||(t?`radix-${t}`:"")}function ve(e){const t=It(e),n=s.forwardRef((r,o)=>{const{children:i,...l}=r,a=s.Children.toArray(i),u=a.find(St);if(u){const f=u.props.children,d=a.map(p=>p===u?s.Children.count(f)>1?s.Children.only(null):s.isValidElement(f)?f.props.children:null:p);return c.jsx(t,{...l,ref:o,children:s.isValidElement(f)?s.cloneElement(f,void 0,d):null})}return c.jsx(t,{...l,ref:o,children:i})});return n.displayName=`${e}.Slot`,n}function It(e){const t=s.forwardRef((n,r)=>{const{children:o,...i}=n;if(s.isValidElement(o)){const l=_t(o),a=Tt(i,o.props);return o.type!==s.Fragment&&(a.ref=r?se(r,l):l),s.cloneElement(o,a)}return s.Children.count(o)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Pt=Symbol("radix.slottable");function St(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Pt}function Tt(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{const u=i(...a);return o(...a),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function _t(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Me(e){const t=e+"CollectionProvider",[n,r]=be(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=v=>{const{scope:w,children:N}=v,M=L.useRef(null),m=L.useRef(new Map).current;return c.jsx(o,{scope:w,itemMap:m,collectionRef:M,children:N})};l.displayName=t;const a=e+"CollectionSlot",u=ve(a),f=L.forwardRef((v,w)=>{const{scope:N,children:M}=v,m=i(a,N),h=D(w,m.collectionRef);return c.jsx(u,{ref:h,children:M})});f.displayName=a;const d=e+"CollectionItemSlot",p="data-radix-collection-item",g=ve(d),y=L.forwardRef((v,w)=>{const{scope:N,children:M,...m}=v,h=L.useRef(null),E=D(w,h),C=i(d,N);return L.useEffect(()=>(C.itemMap.set(h,{ref:h,...m}),()=>{C.itemMap.delete(h)})),c.jsx(g,{[p]:"",ref:E,children:M})});y.displayName=d;function x(v){const w=i(e+"CollectionConsumer",v);return L.useCallback(()=>{const M=w.collectionRef.current;if(!M)return[];const m=Array.from(M.querySelectorAll(`[${p}]`));return Array.from(w.itemMap.values()).sort((C,b)=>m.indexOf(C.ref.current)-m.indexOf(b.ref.current))},[w.collectionRef,w.itemMap])}return[{Provider:l,Slot:f,ItemSlot:y},x,r]}function j(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...n)=>t.current?.(...n),[])}function At(e,t=globalThis?.document){const n=j(e);s.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var jt="DismissableLayer",Q="dismissableLayer.update",Dt="dismissableLayer.pointerDownOutside",Lt="dismissableLayer.focusOutside",he,Ie=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Pe=s.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:l,onDismiss:a,...u}=e,f=s.useContext(Ie),[d,p]=s.useState(null),g=d?.ownerDocument??globalThis?.document,[,y]=s.useState({}),x=D(t,b=>p(b)),v=Array.from(f.layers),[w]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),N=v.indexOf(w),M=d?v.indexOf(d):-1,m=f.layersWithOutsidePointerEventsDisabled.size>0,h=M>=N,E=Vt(b=>{const T=b.target,R=[...f.branches].some(_=>_.contains(T));!h||R||(o?.(b),l?.(b),b.defaultPrevented||a?.())},g),C=kt(b=>{const T=b.target;[...f.branches].some(_=>_.contains(T))||(i?.(b),l?.(b),b.defaultPrevented||a?.())},g);return At(b=>{M===f.layers.size-1&&(r?.(b),!b.defaultPrevented&&a&&(b.preventDefault(),a()))},g),s.useEffect(()=>{if(d)return n&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(he=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(d)),f.layers.add(d),ye(),()=>{n&&f.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=he)}},[d,g,n,f]),s.useEffect(()=>()=>{d&&(f.layers.delete(d),f.layersWithOutsidePointerEventsDisabled.delete(d),ye())},[d,f]),s.useEffect(()=>{const b=()=>y({});return document.addEventListener(Q,b),()=>document.removeEventListener(Q,b)},[]),c.jsx(S.div,{...u,ref:x,style:{pointerEvents:m?h?"auto":"none":void 0,...e.style},onFocusCapture:I(e.onFocusCapture,C.onFocusCapture),onBlurCapture:I(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:I(e.onPointerDownCapture,E.onPointerDownCapture)})});Pe.displayName=jt;var Ot="DismissableLayerBranch",$t=s.forwardRef((e,t)=>{const n=s.useContext(Ie),r=s.useRef(null),o=D(t,r);return s.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),c.jsx(S.div,{...e,ref:o})});$t.displayName=Ot;function Vt(e,t=globalThis?.document){const n=j(e),r=s.useRef(!1),o=s.useRef(()=>{});return s.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let u=function(){Se(Dt,n,f,{discrete:!0})};const f={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=u,t.addEventListener("click",o.current,{once:!0})):u()}else t.removeEventListener("click",o.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function kt(e,t=globalThis?.document){const n=j(e),r=s.useRef(!1);return s.useEffect(()=>{const o=i=>{i.target&&!r.current&&Se(Lt,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ye(){const e=new CustomEvent(Q);document.dispatchEvent(e)}function Se(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?J(o,i):o.dispatchEvent(i)}function Ft(e){const t=s.useRef({value:e,previous:e});return s.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var zt=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Wt="VisuallyHidden",Te=s.forwardRef((e,t)=>c.jsx(S.span,{...e,ref:t,style:{...zt,...e.style}}));Te.displayName=Wt;var Ht=Te,$="NavigationMenu",[ce,_e,Kt]=Me($),[ee,Ut,Bt]=Me($),[le]=be($,[Kt,Bt]),[qt,A]=le($),[Xt,Gt]=le($),Ae=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,delayDuration:l=200,skipDelayDuration:a=300,orientation:u="horizontal",dir:f,...d}=e,[p,g]=s.useState(null),y=D(t,R=>g(R)),x=Et(f),v=s.useRef(0),w=s.useRef(0),N=s.useRef(0),[M,m]=s.useState(!0),[h,E]=Ne({prop:r,onChange:R=>{const _=R!=="",Y=a>0;_?(window.clearTimeout(N.current),Y&&m(!1)):(window.clearTimeout(N.current),N.current=window.setTimeout(()=>m(!0),a)),o?.(R)},defaultProp:i??"",caller:$}),C=s.useCallback(()=>{window.clearTimeout(w.current),w.current=window.setTimeout(()=>E(""),150)},[E]),b=s.useCallback(R=>{window.clearTimeout(w.current),E(R)},[E]),T=s.useCallback(R=>{h===R?window.clearTimeout(w.current):v.current=window.setTimeout(()=>{window.clearTimeout(w.current),E(R)},l)},[h,E,l]);return s.useEffect(()=>()=>{window.clearTimeout(v.current),window.clearTimeout(w.current),window.clearTimeout(N.current)},[]),c.jsx(je,{scope:n,isRootMenu:!0,value:h,dir:x,orientation:u,rootNavigationMenu:p,onTriggerEnter:R=>{window.clearTimeout(v.current),M?T(R):b(R)},onTriggerLeave:()=>{window.clearTimeout(v.current),C()},onContentEnter:()=>window.clearTimeout(w.current),onContentLeave:C,onItemSelect:R=>{E(_=>_===R?"":R)},onItemDismiss:()=>E(""),children:c.jsx(S.nav,{"aria-label":"Main","data-orientation":u,dir:x,...d,ref:y})})});Ae.displayName=$;var te="NavigationMenuSub",Yt=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,orientation:l="horizontal",...a}=e,u=A(te,n),[f,d]=Ne({prop:r,onChange:o,defaultProp:i??"",caller:te});return c.jsx(je,{scope:n,isRootMenu:!1,value:f,dir:u.dir,orientation:l,rootNavigationMenu:u.rootNavigationMenu,onTriggerEnter:p=>d(p),onItemSelect:p=>d(p),onItemDismiss:()=>d(""),children:c.jsx(S.div,{"data-orientation":l,...a,ref:t})})});Yt.displayName=te;var je=e=>{const{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:o,orientation:i,children:l,value:a,onItemSelect:u,onItemDismiss:f,onTriggerEnter:d,onTriggerLeave:p,onContentEnter:g,onContentLeave:y}=e,[x,v]=s.useState(null),[w,N]=s.useState(new Map),[M,m]=s.useState(null);return c.jsx(qt,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:a,previousValue:Ft(a),baseId:Re(),dir:o,orientation:i,viewport:x,onViewportChange:v,indicatorTrack:M,onIndicatorTrackChange:m,onTriggerEnter:j(d),onTriggerLeave:j(p),onContentEnter:j(g),onContentLeave:j(y),onItemSelect:j(u),onItemDismiss:j(f),onViewportContentChange:s.useCallback((h,E)=>{N(C=>(C.set(h,E),new Map(C)))},[]),onViewportContentRemove:s.useCallback(h=>{N(E=>E.has(h)?(E.delete(h),new Map(E)):E)},[]),children:c.jsx(ce.Provider,{scope:t,children:c.jsx(Xt,{scope:t,items:w,children:l})})})},De="NavigationMenuList",Le=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=A(De,n),i=c.jsx(S.ul,{"data-orientation":o.orientation,...r,ref:t});return c.jsx(S.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:c.jsx(ce.Slot,{scope:n,children:o.isRootMenu?c.jsx(Ke,{asChild:!0,children:i}):i})})});Le.displayName=De;var Oe="NavigationMenuItem",[Zt,$e]=le(Oe),Ve=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,...o}=e,i=Re(),l=r||i||"LEGACY_REACT_AUTO_VALUE",a=s.useRef(null),u=s.useRef(null),f=s.useRef(null),d=s.useRef(()=>{}),p=s.useRef(!1),g=s.useCallback((x="start")=>{if(a.current){d.current();const v=oe(a.current);v.length&&fe(x==="start"?v:v.reverse())}},[]),y=s.useCallback(()=>{if(a.current){const x=oe(a.current);x.length&&(d.current=sn(x))}},[]);return c.jsx(Zt,{scope:n,value:l,triggerRef:u,contentRef:a,focusProxyRef:f,wasEscapeCloseRef:p,onEntryKeyDown:g,onFocusProxyEnter:g,onRootContentClose:y,onContentFocusOutside:y,children:c.jsx(S.li,{...o,ref:t})})});Ve.displayName=Oe;var ne="NavigationMenuTrigger",ke=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,disabled:r,...o}=e,i=A(ne,e.__scopeNavigationMenu),l=$e(ne,e.__scopeNavigationMenu),a=s.useRef(null),u=D(a,l.triggerRef,t),f=Be(i.baseId,l.value),d=qe(i.baseId,l.value),p=s.useRef(!1),g=s.useRef(!1),y=l.value===i.value;return c.jsxs(c.Fragment,{children:[c.jsx(ce.ItemSlot,{scope:n,value:l.value,children:c.jsx(Ue,{asChild:!0,children:c.jsx(S.button,{id:f,disabled:r,"data-disabled":r?"":void 0,"data-state":pe(y),"aria-expanded":y,"aria-controls":d,...o,ref:u,onPointerEnter:I(e.onPointerEnter,()=>{g.current=!1,l.wasEscapeCloseRef.current=!1}),onPointerMove:I(e.onPointerMove,G(()=>{r||g.current||l.wasEscapeCloseRef.current||p.current||(i.onTriggerEnter(l.value),p.current=!0)})),onPointerLeave:I(e.onPointerLeave,G(()=>{r||(i.onTriggerLeave(),p.current=!1)})),onClick:I(e.onClick,()=>{i.onItemSelect(l.value),g.current=y}),onKeyDown:I(e.onKeyDown,x=>{const w={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];y&&x.key===w&&(l.onEntryKeyDown(),x.preventDefault())})})})}),y&&c.jsxs(c.Fragment,{children:[c.jsx(Ht,{"aria-hidden":!0,tabIndex:0,ref:l.focusProxyRef,onFocus:x=>{const v=l.contentRef.current,w=x.relatedTarget,N=w===a.current,M=v?.contains(w);(N||!M)&&l.onFocusProxyEnter(N?"start":"end")}}),i.viewport&&c.jsx("span",{"aria-owns":d})]})]})});ke.displayName=ne;var Jt="NavigationMenuLink",xe="navigationMenu.linkSelect",Fe=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,active:r,onSelect:o,...i}=e;return c.jsx(Ue,{asChild:!0,children:c.jsx(S.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...i,ref:t,onClick:I(e.onClick,l=>{const a=l.target,u=new CustomEvent(xe,{bubbles:!0,cancelable:!0});if(a.addEventListener(xe,f=>o?.(f),{once:!0}),J(a,u),!u.defaultPrevented&&!l.metaKey){const f=new CustomEvent(X,{bubbles:!0,cancelable:!0});J(a,f)}},{checkForDefaultPrevented:!1})})})});Fe.displayName=Jt;var ue="NavigationMenuIndicator",Qt=s.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=A(ue,e.__scopeNavigationMenu),i=!!o.value;return o.indicatorTrack?nt.createPortal(c.jsx(B,{present:n||i,children:c.jsx(en,{...r,ref:t})}),o.indicatorTrack):null});Qt.displayName=ue;var en=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=A(ue,n),i=_e(n),[l,a]=s.useState(null),[u,f]=s.useState(null),d=o.orientation==="horizontal",p=!!o.value;s.useEffect(()=>{const x=i().find(v=>v.value===o.value)?.ref.current;x&&a(x)},[i,o.value]);const g=()=>{l&&f({size:d?l.offsetWidth:l.offsetHeight,offset:d?l.offsetLeft:l.offsetTop})};return re(l,g),re(o.indicatorTrack,g),u?c.jsx(S.div,{"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":o.orientation,...r,ref:t,style:{position:"absolute",...d?{left:0,width:u.size+"px",transform:`translateX(${u.offset}px)`}:{top:0,height:u.size+"px",transform:`translateY(${u.offset}px)`},...r.style}}):null}),F="NavigationMenuContent",ze=s.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=A(F,e.__scopeNavigationMenu),i=$e(F,e.__scopeNavigationMenu),l=D(i.contentRef,t),a=i.value===o.value,u={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?c.jsx(tn,{forceMount:n,...u,ref:l}):c.jsx(B,{present:n||a,children:c.jsx(We,{"data-state":pe(a),...u,ref:l,onPointerEnter:I(e.onPointerEnter,o.onContentEnter),onPointerLeave:I(e.onPointerLeave,G(o.onContentLeave)),style:{pointerEvents:!a&&o.isRootMenu?"none":void 0,...u.style}})})});ze.displayName=F;var tn=s.forwardRef((e,t)=>{const n=A(F,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:o}=n;return O(()=>{r(e.value,{ref:t,...e})},[e,t,r]),O(()=>()=>o(e.value),[e.value,o]),null}),X="navigationMenu.rootContentDismiss",We=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,triggerRef:o,focusProxyRef:i,wasEscapeCloseRef:l,onRootContentClose:a,onContentFocusOutside:u,...f}=e,d=A(F,n),p=s.useRef(null),g=D(p,t),y=Be(d.baseId,r),x=qe(d.baseId,r),v=_e(n),w=s.useRef(null),{onItemDismiss:N}=d;s.useEffect(()=>{const m=p.current;if(d.isRootMenu&&m){const h=()=>{N(),a(),m.contains(document.activeElement)&&o.current?.focus()};return m.addEventListener(X,h),()=>m.removeEventListener(X,h)}},[d.isRootMenu,e.value,o,N,a]);const M=s.useMemo(()=>{const h=v().map(_=>_.value);d.dir==="rtl"&&h.reverse();const E=h.indexOf(d.value),C=h.indexOf(d.previousValue),b=r===d.value,T=C===h.indexOf(r);if(!b&&!T)return w.current;const R=(()=>{if(E!==C){if(b&&C!==-1)return E>C?"from-end":"from-start";if(T&&E!==-1)return E>C?"to-start":"to-end"}return null})();return w.current=R,R},[d.previousValue,d.value,d.dir,v,r]);return c.jsx(Ke,{asChild:!0,children:c.jsx(Pe,{id:x,"aria-labelledby":y,"data-motion":M,"data-orientation":d.orientation,...f,ref:g,disableOutsidePointerEvents:!1,onDismiss:()=>{const m=new Event(X,{bubbles:!0,cancelable:!0});p.current?.dispatchEvent(m)},onFocusOutside:I(e.onFocusOutside,m=>{u();const h=m.target;d.rootNavigationMenu?.contains(h)&&m.preventDefault()}),onPointerDownOutside:I(e.onPointerDownOutside,m=>{const h=m.target,E=v().some(b=>b.ref.current?.contains(h)),C=d.isRootMenu&&d.viewport?.contains(h);(E||C||!d.isRootMenu)&&m.preventDefault()}),onKeyDown:I(e.onKeyDown,m=>{const h=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!h){const C=oe(m.currentTarget),b=document.activeElement,T=C.findIndex(Y=>Y===b),_=m.shiftKey?C.slice(0,T).reverse():C.slice(T+1,C.length);fe(_)?m.preventDefault():i.current?.focus()}}),onEscapeKeyDown:I(e.onEscapeKeyDown,m=>{l.current=!0})})})}),de="NavigationMenuViewport",He=s.forwardRef((e,t)=>{const{forceMount:n,...r}=e,i=!!A(de,e.__scopeNavigationMenu).value;return c.jsx(B,{present:n||i,children:c.jsx(nn,{...r,ref:t})})});He.displayName=de;var nn=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,children:r,...o}=e,i=A(de,n),l=D(t,i.onViewportChange),a=Gt(F,e.__scopeNavigationMenu),[u,f]=s.useState(null),[d,p]=s.useState(null),g=u?u?.width+"px":void 0,y=u?u?.height+"px":void 0,x=!!i.value,v=x?i.value:i.previousValue;return re(d,()=>{d&&f({width:d.offsetWidth,height:d.offsetHeight})}),c.jsx(S.div,{"data-state":pe(x),"data-orientation":i.orientation,...o,ref:l,style:{pointerEvents:!x&&i.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":g,"--radix-navigation-menu-viewport-height":y,...o.style},onPointerEnter:I(e.onPointerEnter,i.onContentEnter),onPointerLeave:I(e.onPointerLeave,G(i.onContentLeave)),children:Array.from(a.items).map(([N,{ref:M,forceMount:m,...h}])=>{const E=v===N;return c.jsx(B,{present:m||E,children:c.jsx(We,{...h,ref:se(M,C=>{E&&C&&p(C)})})},N)})})}),on="FocusGroup",Ke=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=A(on,n);return c.jsx(ee.Provider,{scope:n,children:c.jsx(ee.Slot,{scope:n,children:c.jsx(S.div,{dir:o.dir,...r,ref:t})})})}),we=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],rn="FocusGroupItem",Ue=s.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=Ut(n),i=A(rn,n);return c.jsx(ee.ItemSlot,{scope:n,children:c.jsx(S.button,{...r,ref:t,onKeyDown:I(e.onKeyDown,l=>{if(["Home","End",...we].includes(l.key)){let u=o().map(p=>p.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(l.key)&&u.reverse(),we.includes(l.key)){const p=u.indexOf(l.currentTarget);u=u.slice(p+1)}setTimeout(()=>fe(u)),l.preventDefault()}})})})});function oe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function fe(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}function sn(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const n=t.dataset.tabindex;t.setAttribute("tabindex",n)})}}function re(e,t){const n=j(t);O(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,n])}function pe(e){return e?"open":"closed"}function Be(e,t){return`${e}-trigger-${t}`}function qe(e,t){return`${e}-content-${t}`}function G(e){return t=>t.pointerType==="mouse"?e(t):void 0}var an=Ae,cn=Le,ln=Ve,Xe=ke,Ge=Fe,un=ze,dn=He;const fn=P.span`
  display: inline-flex;
  align-items: center;
`,pn=P.div`
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
`,mn=W`
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,gn=W`
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,vn=W`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(120px);
  }
`,hn=W`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-120px);
  }
`,yn=W`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.96);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`,xn=W`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.96);
  }
`,wn=P(an)`
  position: relative;
  display: flex;
  align-items: stretch;
`,En=P(cn)`
  list-style: none;
  margin: 0;
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.standard};
`,me=P(ln)`
  position: relative;
`,Cn=P(Xe)`
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
`,bn=P(Xe)`
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
  transition:
    background 100ms ease-out,
    border-color 120ms ease-out;

  &:hover {
    background: ${({theme:e})=>e.colors.neutral[200]};
    border-color: ${({theme:e})=>e.colors.neutral[400]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.blue[300]};
  }
`,Ye=P(un)`
  position: absolute;
  top: 0;
  right: 0;
  width: max-content;
  background: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.sm};
  z-index: 3;
  animation-duration: 250ms;
  animation-timing-function: ease;

  &[data-motion='from-start'] {
    animation-name: ${gn};
  }

  &[data-motion='from-end'] {
    animation-name: ${mn};
  }

  &[data-motion='to-start'] {
    animation-name: ${hn};
  }

  &[data-motion='to-end'] {
    animation-name: ${vn};
  }

  button {
    text-decoration: none;
  }
`,Nn=P.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`,Rn=P(dn)`
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
  transition:
    width,
    height,
    300ms ease;

  &[data-state='open'] {
    animation: ${yn} 200ms ease;
  }

  &[data-state='closed'] {
    animation: ${xn} 200ms ease;
  }
`,Ze=({edozoProducts:e,triggerProps:t})=>{const n=r=>{window.open(r.url,"_blank")};return c.jsxs(me,{children:[c.jsxs(Cn,{...t,children:[c.jsx(fn,{children:"Products"}),c.jsx(Z,{icon:rt,size:"sm","aria-hidden":"true"})]}),c.jsx(Ye,{children:c.jsx(ge,{variant:"platform",children:e.map(r=>c.jsx(ge.Item,{onClick:()=>n(r),disabled:r.disabled,children:c.jsx(pn,{children:c.jsx(Ce,{size:"small",appName:r.appName})})},r.url))})})]})};Ze.__docgenInfo={description:"",methods:[],displayName:"ProductSwitchV2",props:{edozoProducts:{required:!0,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:""},triggerProps:{required:!1,tsType:{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<'button'>",elements:[{name:"literal",value:"'button'"}]},description:""}}};const Mn=P.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Je=({children:e})=>c.jsx(Mn,{children:e});Je.__docgenInfo={description:"",methods:[],displayName:"PlatformMenuV2"};const In=P.div`
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
`,Qe=({children:e})=>c.jsx(me,{children:c.jsx(In,{children:c.jsx(Ge,{asChild:!0,children:e})})});Qe.__docgenInfo={description:"",methods:[],displayName:"MenuItemV2"};const z=({children:e,openOnClickOnly:t=!1,closeOnOutsideClickOnly:n=!1})=>{const[r,o]=s.useState(""),i=s.useRef(null);s.useEffect(()=>{if(!n)return;const a=u=>{if(!i.current)return;const{target:f}=u;f instanceof Node&&(i.current.contains(f)||o(""))};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[n]);const l=a=>{n&&a===""||o(a)};return c.jsxs(wn,{ref:i,value:n?r:void 0,onValueChange:n?l:void 0,onPointerMove:t?a=>a.preventDefault():void 0,onPointerLeave:t?a=>a.preventDefault():void 0,children:[c.jsx(En,{children:e}),c.jsx(Nn,{children:c.jsx(Rn,{})})]})};z.Item=Qe;z.PlatformMenu=Je;z.__docgenInfo={description:"",methods:[],displayName:"MenuV2",props:{openOnClickOnly:{defaultValue:{value:"false",computed:!1},required:!1},closeOnOutsideClickOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};const Pn=P.div`
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
`,et=({children:e})=>c.jsx(Pn,{children:e});et.__docgenInfo={description:"",methods:[],displayName:"HeaderV2"};const Sn=P.div`
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
`,Tn=P.button`
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
`,_n=[{appName:"maps",url:"https://maps.edozo.com/"},{appName:"occupiers",url:"https://occupiers.edozo.com/"},{appName:"insight",url:"https://insight.edozo.com/"},{appName:"reports",url:"https://reports.edozo.com/"}],H=({logoSection:e,logout:t,isAuthenticated:n,edozoProducts:r=_n,children:o,openOnClickOnly:i=!0,user:l})=>c.jsxs(et,{children:[e,n&&c.jsxs(z,{openOnClickOnly:i,closeOnOutsideClickOnly:!0,children:[o,c.jsx(Ze,{edozoProducts:r,triggerProps:i?{onPointerMove:a=>a.preventDefault(),onPointerLeave:a=>a.preventDefault()}:void 0}),c.jsxs(me,{children:[c.jsx(bn,{"aria-label":"Account menu",onPointerMove:i?a=>a.preventDefault():void 0,onPointerLeave:i?a=>a.preventDefault():void 0,children:c.jsx(Z,{icon:it,size:"md","aria-hidden":"true"})}),c.jsxs(Ye,{children:[l&&c.jsx(Sn,{children:l}),c.jsx(Ge,{asChild:!0,children:c.jsxs(Tn,{type:"button",onClick:t,"data-testid":"logoutButton",children:[c.jsx(Z,{icon:ct,size:"sm","aria-hidden":"true"}),"Logout"]})})]})]})]})]});H.__docgenInfo={description:"",methods:[],displayName:"AppHeaderV2",props:{logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},logoSection:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isAuthenticated:{required:!1,tsType:{name:"boolean"},description:""},edozoProducts:{required:!1,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:"",defaultValue:{value:`[
  {
    appName: 'maps',
    url: 'https://maps.edozo.com/',
  },
  {
    appName: 'occupiers',
    url: 'https://occupiers.edozo.com/',
  },
  {
    appName: 'insight',
    url: 'https://insight.edozo.com/',
  },
  {
    appName: 'reports',
    url: 'https://reports.edozo.com/',
  },
]`,computed:!1}},openOnClickOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},user:{required:!1,tsType:{name:"string"},description:"The logged-in user identifier shown in the account dropdown. May be a name or email address."}}};const Wn={title:"Components/HeaderV2",component:H,argTypes:{user:{description:"Logged-in user identifier (name or email) shown in the account dropdown.",control:{type:"text"}},isAuthenticated:{description:"Whether to show the authenticated menu.",control:{type:"boolean"}}}},K=()=>c.jsx(H,{logoSection:c.jsx(ae,{variant:"edozo",size:"small"}),logout:()=>{}}),V=e=>c.jsx(H,{logoSection:c.jsx("a",{href:"#",children:c.jsx(ae,{variant:"edozo"})}),isAuthenticated:e.isAuthenticated,logout:e.logout,user:e.user,children:c.jsxs(s.Fragment,{children:[c.jsx(z.Item,{children:c.jsx("a",{href:"#",className:"active",children:"Help"})}),c.jsx(z.Item,{children:c.jsx("a",{href:"#",children:"Docs"})})]})});V.args={isAuthenticated:!0,logout:()=>console.log("app specific logout method")};const U=()=>c.jsx(H,{logoSection:c.jsx(Ce,{appName:"maps"}),isAuthenticated:!0,logout:()=>{}}),k=e=>c.jsx(H,{logoSection:c.jsx("a",{href:"#",children:c.jsx(ae,{variant:"edozo"})}),isAuthenticated:!0,logout:e.logout,user:e.user});k.args={logout:()=>console.log("logout"),user:"jane.smith@example.com"};K.__docgenInfo={description:"",methods:[],displayName:"Default"};V.__docgenInfo={description:"",methods:[],displayName:"ControlledAppHeader"};U.__docgenInfo={description:"",methods:[],displayName:"MapsApp"};k.__docgenInfo={description:"",methods:[],displayName:"WithUser"};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => <AppHeaderV2 logoSection={<EdozoLogo variant={'edozo' as LogoVariants} size="small" />} logout={() => {}} />`,...K.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => <AppHeaderV2 logoSection={
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
  </AppHeaderV2>`,...V.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:'() => <AppHeaderV2 logoSection={<EdozoLogoV2 appName="maps" />} isAuthenticated logout={() => {}} />',...U.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => <AppHeaderV2 logoSection={
// eslint-disable-next-line jsx-a11y/anchor-is-valid
<a href="#">
        <EdozoLogo variant={'edozo' as LogoVariants} />
      </a>} isAuthenticated logout={args.logout} user={args.user} />`,...k.parameters?.docs?.source}}};const Hn=["Default","ControlledAppHeader","MapsApp","WithUser"];export{V as ControlledAppHeader,K as Default,U as MapsApp,k as WithUser,Hn as __namedExportsOrder,Wn as default};
