import{r as i,j as o,c as E,p as X}from"./iframe-Ym7xYKuD.js";import{B as R}from"./ButtonV3-DqlVfu-G.js";import{u as ee,P as I,b as j,c as oe}from"./index-BTaSxaBx.js";import{c as te,u as N}from"./index-BbPyFltH.js";import{D as re}from"./index-CG_YTZYe.js";import{h as ne,R as se,u as ae,F as ie}from"./Combination-mCZ7RhrR.js";import{u as pe}from"./index-CFF3_kQT.js";import{R as ce,P as le,A as F,c as B,C as de,a as ue}from"./index-DagEZYMM.js";import{P as D}from"./index-B9qndMY0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BewngeI9.js";import"./index-B17tC9T8.js";import"./index-DBFNr24N.js";import"./index-B-6lRUjL.js";import"./index-BgeF02YF.js";function fe(e){const t=ve(e),r=i.forwardRef((s,n)=>{const{children:a,...p}=s,c=i.Children.toArray(a),d=c.find(me);if(d){const u=d.props.children,h=c.map(v=>v===d?i.Children.count(u)>1?i.Children.only(null):i.isValidElement(u)?u.props.children:null:v);return o.jsx(t,{...p,ref:n,children:i.isValidElement(u)?i.cloneElement(u,void 0,h):null})}return o.jsx(t,{...p,ref:n,children:a})});return r.displayName=`${e}.Slot`,r}function ve(e){const t=i.forwardRef((r,s)=>{const{children:n,...a}=r;if(i.isValidElement(n)){const p=ye(n),c=he(a,n.props);return n.type!==i.Fragment&&(c.ref=s?te(s,p):p),i.cloneElement(n,c)}return i.Children.count(n)>1?i.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ge=Symbol("radix.slottable");function me(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ge}function he(e,t){const r={...t};for(const s in t){const n=e[s],a=t[s];/^on[A-Z]/.test(s)?n&&a?r[s]=(...c)=>{const d=a(...c);return n(...c),d}:n&&(r[s]=n):s==="style"?r[s]={...n,...a}:s==="className"&&(r[s]=[n,a].filter(Boolean).join(" "))}return{...e,...r}}function ye(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var _="Popover",[k]=oe(_,[B]),V=B(),[Pe,f]=k(_),W=e=>{const{__scopePopover:t,children:r,open:s,defaultOpen:n,onOpenChange:a,modal:p=!1}=e,c=V(t),d=i.useRef(null),[u,h]=i.useState(!1),[v,g]=ee({prop:s,defaultProp:n??!1,onChange:a,caller:_});return o.jsx(ce,{...c,children:o.jsx(Pe,{scope:t,contentId:pe(),triggerRef:d,open:v,onOpenChange:g,onOpenToggle:i.useCallback(()=>g(b=>!b),[g]),hasCustomAnchor:u,onCustomAnchorAdd:i.useCallback(()=>h(!0),[]),onCustomAnchorRemove:i.useCallback(()=>h(!1),[]),modal:p,children:r})})};W.displayName=_;var M="PopoverAnchor",Ce=i.forwardRef((e,t)=>{const{__scopePopover:r,...s}=e,n=f(M,r),a=V(r),{onCustomAnchorAdd:p,onCustomAnchorRemove:c}=n;return i.useEffect(()=>(p(),()=>c()),[p,c]),o.jsx(F,{...a,...s,ref:t})});Ce.displayName=M;var z="PopoverTrigger",$=i.forwardRef((e,t)=>{const{__scopePopover:r,...s}=e,n=f(z,r),a=V(r),p=N(t,n.triggerRef),c=o.jsx(I.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":U(n.open),...s,ref:p,onClick:j(e.onClick,n.onOpenToggle)});return n.hasCustomAnchor?c:o.jsx(F,{asChild:!0,...a,children:c})});$.displayName=z;var T="PopoverPortal",[xe,je]=k(T,{forceMount:void 0}),L=e=>{const{__scopePopover:t,forceMount:r,children:s,container:n}=e,a=f(T,t);return o.jsx(xe,{scope:t,forceMount:r,children:o.jsx(D,{present:r||a.open,children:o.jsx(le,{asChild:!0,container:n,children:s})})})};L.displayName=T;var y="PopoverContent",q=i.forwardRef((e,t)=>{const r=je(y,e.__scopePopover),{forceMount:s=r.forceMount,...n}=e,a=f(y,e.__scopePopover);return o.jsx(D,{present:s||a.open,children:a.modal?o.jsx(Ve,{...n,ref:t}):o.jsx(Oe,{...n,ref:t})})});q.displayName=y;var Re=fe("PopoverContent.RemoveScroll"),Ve=i.forwardRef((e,t)=>{const r=f(y,e.__scopePopover),s=i.useRef(null),n=N(t,s),a=i.useRef(!1);return i.useEffect(()=>{const p=s.current;if(p)return ne(p)},[]),o.jsx(se,{as:Re,allowPinchZoom:!0,children:o.jsx(H,{...e,ref:n,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:j(e.onCloseAutoFocus,p=>{p.preventDefault(),a.current||r.triggerRef.current?.focus()}),onPointerDownOutside:j(e.onPointerDownOutside,p=>{const c=p.detail.originalEvent,d=c.button===0&&c.ctrlKey===!0,u=c.button===2||d;a.current=u},{checkForDefaultPrevented:!1}),onFocusOutside:j(e.onFocusOutside,p=>p.preventDefault(),{checkForDefaultPrevented:!1})})})}),Oe=i.forwardRef((e,t)=>{const r=f(y,e.__scopePopover),s=i.useRef(!1),n=i.useRef(!1);return o.jsx(H,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{e.onCloseAutoFocus?.(a),a.defaultPrevented||(s.current||r.triggerRef.current?.focus(),a.preventDefault()),s.current=!1,n.current=!1},onInteractOutside:a=>{e.onInteractOutside?.(a),a.defaultPrevented||(s.current=!0,a.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const p=a.target;r.triggerRef.current?.contains(p)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&n.current&&a.preventDefault()}})}),H=i.forwardRef((e,t)=>{const{__scopePopover:r,trapFocus:s,onOpenAutoFocus:n,onCloseAutoFocus:a,disableOutsidePointerEvents:p,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:u,onInteractOutside:h,...v}=e,g=f(y,r),b=V(r);return ae(),o.jsx(ie,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:n,onUnmountAutoFocus:a,children:o.jsx(re,{asChild:!0,disableOutsidePointerEvents:p,onInteractOutside:h,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:u,onDismiss:()=>g.onOpenChange(!1),children:o.jsx(de,{"data-state":U(g.open),role:"dialog",id:g.contentId,...b,...v,ref:t,style:{...v.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),G="PopoverClose",K=i.forwardRef((e,t)=>{const{__scopePopover:r,...s}=e,n=f(G,r);return o.jsx(I.button,{type:"button",...s,ref:t,onClick:j(e.onClick,()=>n.onOpenChange(!1))})});K.displayName=G;var _e="PopoverArrow",Y=i.forwardRef((e,t)=>{const{__scopePopover:r,...s}=e,n=V(r);return o.jsx(ue,{...n,...s,ref:t})});Y.displayName=_e;function U(e){return e?"open":"closed"}var be=W,Se=$,Te=L,we=q,Ae=K,Ee=Y;const Ie=X`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ne=E(we)`
  background: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.colors.neutral[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.boxShadow.md};
  z-index: 50;

  &[data-state='open'] {
    animation: ${Ie} 150ms ease;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.indigo[400]};
    outline-offset: -2px;
  }
`,Fe=E(Ee)`
  fill: ${({theme:e})=>e.colors.neutral[50]};
`,w=({open:e,defaultOpen:t,onOpenChange:r,children:s})=>o.jsx(be,{open:e,defaultOpen:t,onOpenChange:r,children:s});w.displayName="PopoverV2";const Z=i.forwardRef((e,t)=>o.jsx(Se,{ref:t,...e}));Z.displayName="PopoverV2.Trigger";const J=i.forwardRef(({side:e="bottom",align:t="center",sideOffset:r=8,children:s,...n},a)=>o.jsx(Te,{children:o.jsxs(Ne,{ref:a,side:e,align:t,sideOffset:r,...n,children:[s,o.jsx(Fe,{})]})}));J.displayName="PopoverV2.Content";const Q=i.forwardRef((e,t)=>o.jsx(Ae,{ref:t,...e}));Q.displayName="PopoverV2.Close";const l=Object.assign(w,{Trigger:Z,Content:J,Close:Q});w.__docgenInfo={description:"",methods:[],displayName:"PopoverV2",props:{open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Default open state for uncontrolled usage."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called when the open state changes."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"PopoverV2.Trigger and PopoverV2.Content."}}};const{expect:S,userEvent:A,within:O}=__STORYBOOK_MODULE_TEST__,Je={title:"Components/PopoverV2",component:l,argTypes:{defaultOpen:{description:"Whether the popover is open by default (uncontrolled).",control:{type:"boolean"}}},args:{defaultOpen:!1}},P=e=>o.jsx("div",{style:{padding:64,display:"flex",justifyContent:"center"},children:o.jsxs(l,{...e,children:[o.jsx(l.Trigger,{asChild:!0,children:o.jsx(R,{variant:"secondary",children:"Open popover"})}),o.jsx(l.Content,{children:o.jsxs("div",{style:{padding:16,fontFamily:"Inter, sans-serif",fontSize:14,maxWidth:240},children:[o.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"Popover heading"}),o.jsx("p",{style:{margin:0,color:"#6B7280"},children:"Some supporting content goes here."})]})})]})}),C=()=>o.jsx("div",{style:{padding:80,display:"flex",gap:16,justifyContent:"center"},children:["top","right","bottom","left"].map(e=>o.jsxs(l,{children:[o.jsx(l.Trigger,{asChild:!0,children:o.jsx(R,{variant:"secondary",children:e})}),o.jsx(l.Content,{side:e,align:"center",children:o.jsxs("div",{style:{padding:12,fontFamily:"Inter, sans-serif",fontSize:13},children:["Opens on ",e]})})]},e))}),x=()=>o.jsx("div",{style:{padding:64,display:"flex",justifyContent:"center"},children:o.jsxs(l,{children:[o.jsx(l.Trigger,{asChild:!0,children:o.jsx(R,{variant:"secondary",children:"Open"})}),o.jsx(l.Content,{children:o.jsxs("div",{style:{padding:16,fontFamily:"Inter, sans-serif",fontSize:14,maxWidth:240},children:[o.jsx("p",{style:{margin:"0 0 12px"},children:"Content with a close button."}),o.jsx(l.Close,{asChild:!0,children:o.jsx(R,{variant:"secondary",size:"sm",children:"Close"})})]})})]})}),m=()=>o.jsx("div",{style:{padding:64,display:"flex",justifyContent:"center"},children:o.jsxs(l,{children:[o.jsx(l.Trigger,{asChild:!0,children:o.jsx(R,{variant:"secondary",children:"Open popover"})}),o.jsx(l.Content,{children:o.jsx("div",{style:{padding:16,fontFamily:"Inter, sans-serif",fontSize:14},children:o.jsx("span",{"data-testid":"popover-content",children:"Popover is open"})})})]})});m.tags=["play-fn"];m.play=async({canvasElement:e})=>{const r=O(e).getByRole("button",{name:"Open popover"});S(O(document.body).queryByTestId("popover-content")).not.toBeInTheDocument(),await A.click(r),S(await O(document.body).findByTestId("popover-content")).toBeInTheDocument(),await A.click(r),S(O(document.body).queryByTestId("popover-content")).not.toBeInTheDocument()};P.__docgenInfo={description:"",methods:[],displayName:"Playground"};C.__docgenInfo={description:"",methods:[],displayName:"Sides"};x.__docgenInfo={description:"",methods:[],displayName:"WithCloseButton"};m.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Interactions"};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: 64,
  display: 'flex',
  justifyContent: 'center'
}}>
    <PopoverV2 {...args}>
      <PopoverV2.Trigger asChild>
        <ButtonV3 variant="secondary">Open popover</ButtonV3>
      </PopoverV2.Trigger>
      <PopoverV2.Content>
        <div style={{
        padding: 16,
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        maxWidth: 240
      }}>
          <p style={{
          margin: '0 0 8px',
          fontWeight: 600
        }}>Popover heading</p>
          <p style={{
          margin: 0,
          color: '#6B7280'
        }}>Some supporting content goes here.</p>
        </div>
      </PopoverV2.Content>
    </PopoverV2>
  </div>`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <div style={{
  padding: 80,
  display: 'flex',
  gap: 16,
  justifyContent: 'center'
}}>
    {(['top', 'right', 'bottom', 'left'] as const).map(side => <PopoverV2 key={side}>
        <PopoverV2.Trigger asChild>
          <ButtonV3 variant="secondary">{side}</ButtonV3>
        </PopoverV2.Trigger>
        <PopoverV2.Content side={side} align="center">
          <div style={{
        padding: 12,
        fontFamily: 'Inter, sans-serif',
        fontSize: 13
      }}>Opens on {side}</div>
        </PopoverV2.Content>
      </PopoverV2>)}
  </div>`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <div style={{
  padding: 64,
  display: 'flex',
  justifyContent: 'center'
}}>
    <PopoverV2>
      <PopoverV2.Trigger asChild>
        <ButtonV3 variant="secondary">Open</ButtonV3>
      </PopoverV2.Trigger>
      <PopoverV2.Content>
        <div style={{
        padding: 16,
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        maxWidth: 240
      }}>
          <p style={{
          margin: '0 0 12px'
        }}>Content with a close button.</p>
          <PopoverV2.Close asChild>
            <ButtonV3 variant="secondary" size="sm">
              Close
            </ButtonV3>
          </PopoverV2.Close>
        </div>
      </PopoverV2.Content>
    </PopoverV2>
  </div>`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <div style={{
  padding: 64,
  display: 'flex',
  justifyContent: 'center'
}}>
    <PopoverV2>
      <PopoverV2.Trigger asChild>
        <ButtonV3 variant="secondary">Open popover</ButtonV3>
      </PopoverV2.Trigger>
      <PopoverV2.Content>
        <div style={{
        padding: 16,
        fontFamily: 'Inter, sans-serif',
        fontSize: 14
      }}>
          <span data-testid="popover-content">Popover is open</span>
        </div>
      </PopoverV2.Content>
    </PopoverV2>
  </div>`,...m.parameters?.docs?.source}}};const Qe=["Playground","Sides","WithCloseButton","Interactions"];export{m as Interactions,P as Playground,C as Sides,x as WithCloseButton,Qe as __namedExportsOrder,Je as default};
