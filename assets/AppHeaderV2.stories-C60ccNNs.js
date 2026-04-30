import{r as i,j as t,c as I,p as z}from"./iframe-DVQN8M8q.js";import{R as He}from"./index-o5E_Q4b3.js";import{P as j,b as R,c as Ke,a as me,d as le,u as q}from"./index-Bq5XD_db.js";import{u as K,c as We}from"./index-Drdm2mZ3.js";import{c as fe,a as Ue,u as S}from"./index-RSTP9jxP.js";import{P as G}from"./index-CaDlSjsI.js";import{u as ge}from"./index-BlYAF7zt.js";import{R as Ge,D as Xe}from"./index-DdWQuoNS.js";import{u as qe}from"./index-DCZCMVZZ.js";import{E as ve}from"./EdozoLogoV2-CtjdDOu_.js";import{L as B}from"./Lucide-b9gvWvQX.js";import{C as Be}from"./chevron-down-ClDcXg69.js";import{L as ue}from"./List-ChCnb7NS.js";import{c as he}from"./createLucideIcon-VbWEJlGx.js";import{E as te}from"./EdozoLogo-DWp_PwfQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bfe-EAqM.js";import"./edozo-logo-Dp2Xns4T.js";const Ye=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Je=he("circle-user-round",Ye);const Qe=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Ze=he("log-out",Qe);var A="NavigationMenu",[oe,xe,et]=fe(A),[Y,tt,ot]=fe(A),[ne]=Ke(A,[et,ot]),[nt,E]=ne(A),[rt,at]=ne(A),ye=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,value:n,onValueChange:s,defaultValue:a,delayDuration:c=200,skipDelayDuration:l=300,orientation:d="horizontal",dir:v,...u}=e,[f,N]=i.useState(null),C=K(o,w=>N(w)),h=Ue(v),x=i.useRef(0),b=i.useRef(0),M=i.useRef(0),[P,p]=i.useState(!0),[g,m]=me({prop:n,onChange:w=>{const T=w!=="",X=l>0;T?(window.clearTimeout(M.current),X&&p(!1)):(window.clearTimeout(M.current),M.current=window.setTimeout(()=>p(!0),l)),s?.(w)},defaultProp:a??"",caller:A}),y=i.useCallback(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>m(""),150)},[m]),_=i.useCallback(w=>{window.clearTimeout(b.current),m(w)},[m]),$=i.useCallback(w=>{g===w?window.clearTimeout(b.current):x.current=window.setTimeout(()=>{window.clearTimeout(b.current),m(w)},c)},[g,m,c]);return i.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(b.current),window.clearTimeout(M.current)},[]),t.jsx(we,{scope:r,isRootMenu:!0,value:g,dir:h,orientation:d,rootNavigationMenu:f,onTriggerEnter:w=>{window.clearTimeout(x.current),P?$(w):_(w)},onTriggerLeave:()=>{window.clearTimeout(x.current),y()},onContentEnter:()=>window.clearTimeout(b.current),onContentLeave:y,onItemSelect:w=>{m(T=>T===w?"":w)},onItemDismiss:()=>m(""),children:t.jsx(j.nav,{"aria-label":"Main","data-orientation":d,dir:h,...u,ref:C})})});ye.displayName=A;var J="NavigationMenuSub",st=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,value:n,onValueChange:s,defaultValue:a,orientation:c="horizontal",...l}=e,d=E(J,r),[v,u]=me({prop:n,onChange:s,defaultProp:a??"",caller:J});return t.jsx(we,{scope:r,isRootMenu:!1,value:v,dir:d.dir,orientation:c,rootNavigationMenu:d.rootNavigationMenu,onTriggerEnter:f=>u(f),onItemSelect:f=>u(f),onItemDismiss:()=>u(""),children:t.jsx(j.div,{"data-orientation":c,...l,ref:o})})});st.displayName=J;var we=e=>{const{scope:o,isRootMenu:r,rootNavigationMenu:n,dir:s,orientation:a,children:c,value:l,onItemSelect:d,onItemDismiss:v,onTriggerEnter:u,onTriggerLeave:f,onContentEnter:N,onContentLeave:C}=e,[h,x]=i.useState(null),[b,M]=i.useState(new Map),[P,p]=i.useState(null);return t.jsx(nt,{scope:o,isRootMenu:r,rootNavigationMenu:n,value:l,previousValue:qe(l),baseId:ge(),dir:s,orientation:a,viewport:h,onViewportChange:x,indicatorTrack:P,onIndicatorTrackChange:p,onTriggerEnter:S(u),onTriggerLeave:S(f),onContentEnter:S(N),onContentLeave:S(C),onItemSelect:S(d),onItemDismiss:S(v),onViewportContentChange:i.useCallback((g,m)=>{M(y=>(y.set(g,m),new Map(y)))},[]),onViewportContentRemove:i.useCallback(g=>{M(m=>m.has(g)?(m.delete(g),new Map(m)):m)},[]),children:t.jsx(oe.Provider,{scope:o,children:t.jsx(rt,{scope:o,items:b,children:c})})})},be="NavigationMenuList",Ne=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,...n}=e,s=E(be,r),a=t.jsx(j.ul,{"data-orientation":s.orientation,...n,ref:o});return t.jsx(j.div,{style:{position:"relative"},ref:s.onIndicatorTrackChange,children:t.jsx(oe.Slot,{scope:r,children:s.isRootMenu?t.jsx(Te,{asChild:!0,children:a}):a})})});Ne.displayName=be;var Ce="NavigationMenuItem",[it,Me]=ne(Ce),Re=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,value:n,...s}=e,a=ge(),c=n||a||"LEGACY_REACT_AUTO_VALUE",l=i.useRef(null),d=i.useRef(null),v=i.useRef(null),u=i.useRef(()=>{}),f=i.useRef(!1),N=i.useCallback((h="start")=>{if(l.current){u.current();const x=Z(l.current);x.length&&se(h==="start"?x:x.reverse())}},[]),C=i.useCallback(()=>{if(l.current){const h=Z(l.current);h.length&&(u.current=gt(h))}},[]);return t.jsx(it,{scope:r,value:c,triggerRef:d,contentRef:l,focusProxyRef:v,wasEscapeCloseRef:f,onEntryKeyDown:N,onFocusProxyEnter:N,onRootContentClose:C,onContentFocusOutside:C,children:t.jsx(j.li,{...s,ref:o})})});Re.displayName=Ce;var Q="NavigationMenuTrigger",Ie=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,disabled:n,...s}=e,a=E(Q,e.__scopeNavigationMenu),c=Me(Q,e.__scopeNavigationMenu),l=i.useRef(null),d=K(l,c.triggerRef,o),v=Se(a.baseId,c.value),u=Ae(a.baseId,c.value),f=i.useRef(!1),N=i.useRef(!1),C=c.value===a.value;return t.jsxs(t.Fragment,{children:[t.jsx(oe.ItemSlot,{scope:r,value:c.value,children:t.jsx($e,{asChild:!0,children:t.jsx(j.button,{id:v,disabled:n,"data-disabled":n?"":void 0,"data-state":ie(C),"aria-expanded":C,"aria-controls":u,...s,ref:d,onPointerEnter:R(e.onPointerEnter,()=>{N.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:R(e.onPointerMove,U(()=>{n||N.current||c.wasEscapeCloseRef.current||f.current||(a.onTriggerEnter(c.value),f.current=!0)})),onPointerLeave:R(e.onPointerLeave,U(()=>{n||(a.onTriggerLeave(),f.current=!1)})),onClick:R(e.onClick,()=>{a.onItemSelect(c.value),N.current=C}),onKeyDown:R(e.onKeyDown,h=>{const b={horizontal:"ArrowDown",vertical:a.dir==="rtl"?"ArrowLeft":"ArrowRight"}[a.orientation];C&&h.key===b&&(c.onEntryKeyDown(),h.preventDefault())})})})}),C&&t.jsxs(t.Fragment,{children:[t.jsx(Ge,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:h=>{const x=c.contentRef.current,b=h.relatedTarget,M=b===l.current,P=x?.contains(b);(M||!P)&&c.onFocusProxyEnter(M?"start":"end")}}),a.viewport&&t.jsx("span",{"aria-owns":u})]})]})});Ie.displayName=Q;var ct="NavigationMenuLink",de="navigationMenu.linkSelect",Ee=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,active:n,onSelect:s,...a}=e;return t.jsx($e,{asChild:!0,children:t.jsx(j.a,{"data-active":n?"":void 0,"aria-current":n?"page":void 0,...a,ref:o,onClick:R(e.onClick,c=>{const l=c.target,d=new CustomEvent(de,{bubbles:!0,cancelable:!0});if(l.addEventListener(de,v=>s?.(v),{once:!0}),le(l,d),!d.defaultPrevented&&!c.metaKey){const v=new CustomEvent(W,{bubbles:!0,cancelable:!0});le(l,v)}},{checkForDefaultPrevented:!1})})})});Ee.displayName=ct;var re="NavigationMenuIndicator",lt=i.forwardRef((e,o)=>{const{forceMount:r,...n}=e,s=E(re,e.__scopeNavigationMenu),a=!!s.value;return s.indicatorTrack?He.createPortal(t.jsx(G,{present:r||a,children:t.jsx(ut,{...n,ref:o})}),s.indicatorTrack):null});lt.displayName=re;var ut=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,...n}=e,s=E(re,r),a=xe(r),[c,l]=i.useState(null),[d,v]=i.useState(null),u=s.orientation==="horizontal",f=!!s.value;i.useEffect(()=>{const h=a().find(x=>x.value===s.value)?.ref.current;h&&l(h)},[a,s.value]);const N=()=>{c&&v({size:u?c.offsetWidth:c.offsetHeight,offset:u?c.offsetLeft:c.offsetTop})};return ee(c,N),ee(s.indicatorTrack,N),d?t.jsx(j.div,{"aria-hidden":!0,"data-state":f?"visible":"hidden","data-orientation":s.orientation,...n,ref:o,style:{position:"absolute",...u?{left:0,width:d.size+"px",transform:`translateX(${d.offset}px)`}:{top:0,height:d.size+"px",transform:`translateY(${d.offset}px)`},...n.style}}):null}),k="NavigationMenuContent",je=i.forwardRef((e,o)=>{const{forceMount:r,...n}=e,s=E(k,e.__scopeNavigationMenu),a=Me(k,e.__scopeNavigationMenu),c=K(a.contentRef,o),l=a.value===s.value,d={value:a.value,triggerRef:a.triggerRef,focusProxyRef:a.focusProxyRef,wasEscapeCloseRef:a.wasEscapeCloseRef,onContentFocusOutside:a.onContentFocusOutside,onRootContentClose:a.onRootContentClose,...n};return s.viewport?t.jsx(dt,{forceMount:r,...d,ref:c}):t.jsx(G,{present:r||l,children:t.jsx(Pe,{"data-state":ie(l),...d,ref:c,onPointerEnter:R(e.onPointerEnter,s.onContentEnter),onPointerLeave:R(e.onPointerLeave,U(s.onContentLeave)),style:{pointerEvents:!l&&s.isRootMenu?"none":void 0,...d.style}})})});je.displayName=k;var dt=i.forwardRef((e,o)=>{const r=E(k,e.__scopeNavigationMenu),{onViewportContentChange:n,onViewportContentRemove:s}=r;return q(()=>{n(e.value,{ref:o,...e})},[e,o,n]),q(()=>()=>s(e.value),[e.value,s]),null}),W="navigationMenu.rootContentDismiss",Pe=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,value:n,triggerRef:s,focusProxyRef:a,wasEscapeCloseRef:c,onRootContentClose:l,onContentFocusOutside:d,...v}=e,u=E(k,r),f=i.useRef(null),N=K(f,o),C=Se(u.baseId,n),h=Ae(u.baseId,n),x=xe(r),b=i.useRef(null),{onItemDismiss:M}=u;i.useEffect(()=>{const p=f.current;if(u.isRootMenu&&p){const g=()=>{M(),l(),p.contains(document.activeElement)&&s.current?.focus()};return p.addEventListener(W,g),()=>p.removeEventListener(W,g)}},[u.isRootMenu,e.value,s,M,l]);const P=i.useMemo(()=>{const g=x().map(T=>T.value);u.dir==="rtl"&&g.reverse();const m=g.indexOf(u.value),y=g.indexOf(u.previousValue),_=n===u.value,$=y===g.indexOf(n);if(!_&&!$)return b.current;const w=(()=>{if(m!==y){if(_&&y!==-1)return m>y?"from-end":"from-start";if($&&m!==-1)return m>y?"to-start":"to-end"}return null})();return b.current=w,w},[u.previousValue,u.value,u.dir,x,n]);return t.jsx(Te,{asChild:!0,children:t.jsx(Xe,{id:h,"aria-labelledby":C,"data-motion":P,"data-orientation":u.orientation,...v,ref:N,disableOutsidePointerEvents:!1,onDismiss:()=>{const p=new Event(W,{bubbles:!0,cancelable:!0});f.current?.dispatchEvent(p)},onFocusOutside:R(e.onFocusOutside,p=>{d();const g=p.target;u.rootNavigationMenu?.contains(g)&&p.preventDefault()}),onPointerDownOutside:R(e.onPointerDownOutside,p=>{const g=p.target,m=x().some(_=>_.ref.current?.contains(g)),y=u.isRootMenu&&u.viewport?.contains(g);(m||y||!u.isRootMenu)&&p.preventDefault()}),onKeyDown:R(e.onKeyDown,p=>{const g=p.altKey||p.ctrlKey||p.metaKey;if(p.key==="Tab"&&!g){const y=Z(p.currentTarget),_=document.activeElement,$=y.findIndex(X=>X===_),T=p.shiftKey?y.slice(0,$).reverse():y.slice($+1,y.length);se(T)?p.preventDefault():a.current?.focus()}}),onEscapeKeyDown:R(e.onEscapeKeyDown,p=>{c.current=!0})})})}),ae="NavigationMenuViewport",_e=i.forwardRef((e,o)=>{const{forceMount:r,...n}=e,a=!!E(ae,e.__scopeNavigationMenu).value;return t.jsx(G,{present:r||a,children:t.jsx(pt,{...n,ref:o})})});_e.displayName=ae;var pt=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,children:n,...s}=e,a=E(ae,r),c=K(o,a.onViewportChange),l=at(k,e.__scopeNavigationMenu),[d,v]=i.useState(null),[u,f]=i.useState(null),N=d?d?.width+"px":void 0,C=d?d?.height+"px":void 0,h=!!a.value,x=h?a.value:a.previousValue;return ee(u,()=>{u&&v({width:u.offsetWidth,height:u.offsetHeight})}),t.jsx(j.div,{"data-state":ie(h),"data-orientation":a.orientation,...s,ref:c,style:{pointerEvents:!h&&a.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":N,"--radix-navigation-menu-viewport-height":C,...s.style},onPointerEnter:R(e.onPointerEnter,a.onContentEnter),onPointerLeave:R(e.onPointerLeave,U(a.onContentLeave)),children:Array.from(l.items).map(([M,{ref:P,forceMount:p,...g}])=>{const m=x===M;return t.jsx(G,{present:p||m,children:t.jsx(Pe,{...g,ref:We(P,y=>{m&&y&&f(y)})})},M)})})}),mt="FocusGroup",Te=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,...n}=e,s=E(mt,r);return t.jsx(Y.Provider,{scope:r,children:t.jsx(Y.Slot,{scope:r,children:t.jsx(j.div,{dir:s.dir,...n,ref:o})})})}),pe=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],ft="FocusGroupItem",$e=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:r,...n}=e,s=tt(r),a=E(ft,r);return t.jsx(Y.ItemSlot,{scope:r,children:t.jsx(j.button,{...n,ref:o,onKeyDown:R(e.onKeyDown,c=>{if(["Home","End",...pe].includes(c.key)){let d=s().map(f=>f.ref.current);if([a.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(c.key)&&d.reverse(),pe.includes(c.key)){const f=d.indexOf(c.currentTarget);d=d.slice(f+1)}setTimeout(()=>se(d)),c.preventDefault()}})})})});function Z(e){const o=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const s=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||s?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)o.push(r.currentNode);return o}function se(e){const o=document.activeElement;return e.some(r=>r===o?!0:(r.focus(),document.activeElement!==o))}function gt(e){return e.forEach(o=>{o.dataset.tabindex=o.getAttribute("tabindex")||"",o.setAttribute("tabindex","-1")}),()=>{e.forEach(o=>{const r=o.dataset.tabindex;o.setAttribute("tabindex",r)})}}function ee(e,o){const r=S(o);q(()=>{let n=0;if(e){const s=new ResizeObserver(()=>{cancelAnimationFrame(n),n=window.requestAnimationFrame(r)});return s.observe(e),()=>{window.cancelAnimationFrame(n),s.unobserve(e)}}},[e,r])}function ie(e){return e?"open":"closed"}function Se(e,o){return`${e}-trigger-${o}`}function Ae(e,o){return`${e}-content-${o}`}function U(e){return o=>o.pointerType==="mouse"?e(o):void 0}var vt=ye,ht=Ne,xt=Re,Ve=Ie,Le=Ee,yt=je,wt=_e;const bt=I.span`
  display: inline-flex;
  align-items: center;
`,Nt=I.div`
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
`,Ct=z`
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Mt=z`
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Rt=z`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(120px);
  }
`,It=z`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-120px);
  }
`,Et=z`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.96);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`,jt=z`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.96);
  }
`,Pt=I(vt)`
  position: relative;
  display: flex;
  align-items: stretch;
`,_t=I(ht)`
  list-style: none;
  margin: 0;
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.standard};
`,ce=I(xt)`
  position: relative;
`,Tt=I(Ve)`
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
`,$t=I(Ve)`
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
`,ke=I(yt)`
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
    animation-name: ${Mt};
  }

  &[data-motion='from-end'] {
    animation-name: ${Ct};
  }

  &[data-motion='to-start'] {
    animation-name: ${It};
  }

  &[data-motion='to-end'] {
    animation-name: ${Rt};
  }

  button {
    text-decoration: none;
  }
`,St=I.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`,At=I(wt)`
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
    animation: ${Et} 200ms ease;
  }

  &[data-state='closed'] {
    animation: ${jt} 200ms ease;
  }
`,De=({edozoProducts:e,triggerProps:o})=>{const r=n=>{window.open(n.url,"_blank")};return t.jsxs(ce,{children:[t.jsxs(Tt,{...o,children:[t.jsx(bt,{children:"Products"}),t.jsx(B,{icon:Be,size:"sm","aria-hidden":"true"})]}),t.jsx(ke,{children:t.jsx(ue,{variant:"platform",children:e.map(n=>t.jsx(ue.Item,{onClick:()=>r(n),disabled:n.disabled,children:t.jsx(Nt,{children:t.jsx(ve,{size:"small",appName:n.appName})})},n.url))})})]})};De.__docgenInfo={description:"",methods:[],displayName:"ProductSwitchV2",props:{edozoProducts:{required:!0,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:""},triggerProps:{required:!1,tsType:{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<'button'>",elements:[{name:"literal",value:"'button'"}]},description:""}}};const Vt=I.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,ze=({children:e})=>t.jsx(Vt,{children:e});ze.__docgenInfo={description:"",methods:[],displayName:"PlatformMenuV2"};const Lt=I.div`
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
`,Fe=({children:e})=>t.jsx(ce,{children:t.jsx(Lt,{children:t.jsx(Le,{asChild:!0,children:e})})});Fe.__docgenInfo={description:"",methods:[],displayName:"MenuItemV2"};const D=({children:e,openOnClickOnly:o=!1,closeOnOutsideClickOnly:r=!1})=>{const[n,s]=i.useState(""),a=i.useRef(null);i.useEffect(()=>{if(!r)return;const l=d=>{if(!a.current)return;const{target:v}=d;v instanceof Node&&(a.current.contains(v)||s(""))};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[r]);const c=l=>{r&&l===""||s(l)};return t.jsxs(Pt,{ref:a,value:r?n:void 0,onValueChange:r?c:void 0,onPointerMove:o?l=>l.preventDefault():void 0,onPointerLeave:o?l=>l.preventDefault():void 0,children:[t.jsx(_t,{children:e}),t.jsx(St,{children:t.jsx(At,{})})]})};D.Item=Fe;D.PlatformMenu=ze;D.__docgenInfo={description:"",methods:[],displayName:"MenuV2",props:{openOnClickOnly:{defaultValue:{value:"false",computed:!1},required:!1},closeOnOutsideClickOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};const kt=I.div`
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
`,Oe=({children:e})=>t.jsx(kt,{children:e});Oe.__docgenInfo={description:"",methods:[],displayName:"HeaderV2"};const Dt=I.div`
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
`,zt=I.button`
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
`,Ft=[{appName:"maps",url:"https://maps.edozo.com/"},{appName:"occupiers",url:"https://occupiers.edozo.com/"},{appName:"insight",url:"https://insight.edozo.com/"},{appName:"reports",url:"https://reports.edozo.com/"}],F=({logoSection:e,logout:o,isAuthenticated:r,edozoProducts:n=Ft,children:s,openOnClickOnly:a=!0,user:c})=>t.jsxs(Oe,{children:[e,r&&t.jsxs(D,{openOnClickOnly:a,closeOnOutsideClickOnly:!0,children:[s,t.jsx(De,{edozoProducts:n,triggerProps:a?{onPointerMove:l=>l.preventDefault(),onPointerLeave:l=>l.preventDefault()}:void 0}),t.jsxs(ce,{children:[t.jsx($t,{"aria-label":"Account menu",onPointerMove:a?l=>l.preventDefault():void 0,onPointerLeave:a?l=>l.preventDefault():void 0,children:t.jsx(B,{icon:Je,size:"md","aria-hidden":"true"})}),t.jsxs(ke,{children:[c&&t.jsx(Dt,{children:c}),t.jsx(Le,{asChild:!0,children:t.jsxs(zt,{type:"button",onClick:o,"data-testid":"logoutButton",children:[t.jsx(B,{icon:Ze,size:"sm","aria-hidden":"true"}),"Logout"]})})]})]})]})]});F.__docgenInfo={description:"",methods:[],displayName:"AppHeaderV2",props:{logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},logoSection:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isAuthenticated:{required:!1,tsType:{name:"boolean"},description:""},edozoProducts:{required:!1,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:"",defaultValue:{value:`[
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
]`,computed:!1}},openOnClickOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},user:{required:!1,tsType:{name:"string"},description:"The logged-in user identifier shown in the account dropdown. May be a name or email address."}}};const ao={title:"Components/HeaderV2",component:F,argTypes:{user:{description:"Logged-in user identifier (name or email) shown in the account dropdown.",control:{type:"text"}},isAuthenticated:{description:"Whether to show the authenticated menu.",control:{type:"boolean"}}}},O=()=>t.jsx(F,{logoSection:t.jsx(te,{variant:"edozo",size:"small"}),logout:()=>{}}),V=e=>t.jsx(F,{logoSection:t.jsx("a",{href:"#",children:t.jsx(te,{variant:"edozo"})}),isAuthenticated:e.isAuthenticated,logout:e.logout,user:e.user,children:t.jsxs(i.Fragment,{children:[t.jsx(D.Item,{children:t.jsx("a",{href:"#",className:"active",children:"Help"})}),t.jsx(D.Item,{children:t.jsx("a",{href:"#",children:"Docs"})})]})});V.args={isAuthenticated:!0,logout:()=>console.log("app specific logout method")};const H=()=>t.jsx(F,{logoSection:t.jsx(ve,{appName:"maps"}),isAuthenticated:!0,logout:()=>{}}),L=e=>t.jsx(F,{logoSection:t.jsx("a",{href:"#",children:t.jsx(te,{variant:"edozo"})}),isAuthenticated:!0,logout:e.logout,user:e.user});L.args={logout:()=>console.log("logout"),user:"jane.smith@example.com"};O.__docgenInfo={description:"",methods:[],displayName:"Default"};V.__docgenInfo={description:"",methods:[],displayName:"ControlledAppHeader"};H.__docgenInfo={description:"",methods:[],displayName:"MapsApp"};L.__docgenInfo={description:"",methods:[],displayName:"WithUser"};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <AppHeaderV2 logoSection={<EdozoLogo variant={'edozo' as LogoVariants} size="small" />} logout={() => {}} />`,...O.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => <AppHeaderV2 logoSection={
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
  </AppHeaderV2>`,...V.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:'() => <AppHeaderV2 logoSection={<EdozoLogoV2 appName="maps" />} isAuthenticated logout={() => {}} />',...H.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <AppHeaderV2 logoSection={
// eslint-disable-next-line jsx-a11y/anchor-is-valid
<a href="#">
        <EdozoLogo variant={'edozo' as LogoVariants} />
      </a>} isAuthenticated logout={args.logout} user={args.user} />`,...L.parameters?.docs?.source}}};const so=["Default","ControlledAppHeader","MapsApp","WithUser"];export{V as ControlledAppHeader,O as Default,H as MapsApp,L as WithUser,so as __namedExportsOrder,ao as default};
