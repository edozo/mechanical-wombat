import{r as d,j as n,W as Te,l as y,d as S,m as we,a as l}from"./iframe-3PpkPu-N.js";import{c as ze}from"./index-DJ-exrwZ.js";import{c as ge,L as he}from"./Lucide-BRJxHYgN.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],We=ge("arrow-left",Ve);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Re=ge("arrow-right",Ie);var _e=Symbol.for("react.lazy"),z=Te[" use ".trim().toString()];function Oe(e){return typeof e=="object"&&e!==null&&"then"in e}function ye(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===_e&&"_payload"in e&&Oe(e._payload)}function qe(e){const t=Le(e),i=d.forwardRef((r,a)=>{let{children:o,...c}=r;ye(o)&&typeof z=="function"&&(o=z(o._payload));const s=d.Children.toArray(o),u=s.find(Ae);if(u){const h=u.props.children,j=s.map(f=>f===u?d.Children.count(h)>1?d.Children.only(null):d.isValidElement(h)?h.props.children:null:f);return n.jsx(t,{...c,ref:a,children:d.isValidElement(h)?d.cloneElement(h,void 0,j):null})}return n.jsx(t,{...c,ref:a,children:o})});return i.displayName=`${e}.Slot`,i}var Fe=qe("Slot");function Le(e){const t=d.forwardRef((i,r)=>{let{children:a,...o}=i;if(ye(a)&&typeof z=="function"&&(a=z(a._payload)),d.isValidElement(a)){const c=Me(a),s=Pe(o,a.props);return a.type!==d.Fragment&&(s.ref=r?ze(r,c):c),d.cloneElement(a,s)}return d.Children.count(a)>1?d.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var fe=Symbol("radix.slottable");function Ee(e){const t=({children:i})=>n.jsx(n.Fragment,{children:i});return t.displayName=`${e}.Slottable`,t.__radixId=fe,t}var Ne=Ee("Slottable");function Ae(e){return d.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===fe}function Pe(e,t){const i={...t};for(const r in t){const a=e[r],o=t[r];/^on[A-Z]/.test(r)?a&&o?i[r]=(...s)=>{const u=o(...s);return a(...s),u}:a&&(i[r]=a):r==="style"?i[r]={...a,...o}:r==="className"&&(i[r]=[a,o].filter(Boolean).join(" "))}return{...e,...i}}function Me(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,i=t&&"isReactWarning"in t&&t.isReactWarning;return i?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,i=t&&"isReactWarning"in t&&t.isReactWarning,i?e.props.ref:e.props.ref||e.ref)}const He=(e,t,i)=>{const{indigo:r}=e.colors,{teal:a}=e.colors,{neutral:o}=e.colors;return{primary:{solid:{background:r[900],border:r[900],color:o[50],hoverBackground:r[50],hoverBorder:r[900],hoverColor:r[900],activeBackground:r[50],activeBorder:r[900],activeColor:r[900],disabledBackground:o[200],disabledBorder:o[200],disabledColor:o[500]},outline:{background:"transparent",border:r[900],color:r[900],hoverBackground:r[100],hoverBorder:r[900],hoverColor:r[900],activeBackground:r[950],activeBorder:r[950],activeColor:o[50],disabledBackground:"transparent",disabledBorder:o[300],disabledColor:o[500]},ghost:{background:"transparent",border:"transparent",color:r[900],hoverBackground:r[50],hoverBorder:"transparent",hoverColor:r[900],activeBackground:r[100],activeBorder:"transparent",activeColor:r[950],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:o[500]}},secondary:{solid:{background:r[600],border:r[600],color:r[50],hoverBackground:r[50],hoverBorder:r[600],hoverColor:r[600],activeBackground:r[200],activeBorder:r[600],activeColor:r[50],disabledBackground:o[200],disabledBorder:o[200],disabledColor:o[500]},outline:{background:"transparent",border:r[500],color:r[700],hoverBackground:r[50],hoverBorder:r[600],hoverColor:r[800],activeBackground:r[100],activeBorder:r[700],activeColor:r[900],disabledBackground:"transparent",disabledBorder:o[300],disabledColor:o[500]},ghost:{background:"transparent",border:"transparent",color:r[700],hoverBackground:r[50],hoverBorder:"transparent",hoverColor:r[800],activeBackground:r[100],activeBorder:"transparent",activeColor:r[900],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:o[500]}},tertiary:{solid:{background:o[700],border:o[700],color:o[50],hoverBackground:o[100],hoverBorder:o[700],hoverColor:o[700],activeBackground:o[50],activeBorder:o[700],activeColor:o[700],disabledBackground:o[200],disabledBorder:o[200],disabledColor:o[500]},outline:{background:"transparent",border:o[700],color:o[700],hoverBackground:o[200],hoverBorder:o[700],hoverColor:o[700],activeBackground:o[800],activeBorder:o[800],activeColor:o[50],disabledBackground:"transparent",disabledBorder:o[300],disabledColor:o[500]},ghost:{background:"transparent",border:"transparent",color:o[600],hoverBackground:o[200],hoverBorder:"transparent",hoverColor:o[700],activeBackground:o[200],activeBorder:"transparent",activeColor:o[800],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:o[500]}},quaternary:{solid:{background:a[400],border:a[400],color:o[50],hoverBackground:a[50],hoverBorder:a[500],hoverColor:a[600],activeBackground:a[200],activeBorder:a[600],activeColor:a[950],disabledBackground:o[200],disabledBorder:o[200],disabledColor:o[500]},outline:{background:"transparent",border:a[500],color:a[700],hoverBackground:a[50],hoverBorder:a[600],hoverColor:a[700],activeBackground:a[100],activeBorder:a[700],activeColor:a[900],disabledBackground:"transparent",disabledBorder:o[300],disabledColor:o[500]},ghost:{background:"transparent",border:"transparent",color:a[700],hoverBackground:a[50],hoverBorder:"transparent",hoverColor:a[800],activeBackground:a[100],activeBorder:"transparent",activeColor:a[900],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:o[500]}}}[t][i]},De=(e,t,i)=>{const r=e.colors.status[t];return{solid:{background:r[500],border:r[500],color:e.colors.neutral[50],hoverBackground:r[600],hoverBorder:r[600],hoverColor:e.colors.neutral[50],activeBackground:r[900],activeBorder:r[900],activeColor:e.colors.neutral[50],disabledBackground:e.colors.neutral[200],disabledBorder:e.colors.neutral[200],disabledColor:e.colors.neutral[500]},outline:{background:"transparent",border:r[500],color:r[500],hoverBackground:r[50],hoverBorder:r[600],hoverColor:r[600],activeBackground:r[100],activeBorder:r[900],activeColor:r[900],disabledBackground:"transparent",disabledBorder:e.colors.neutral[300],disabledColor:e.colors.neutral[500]},ghost:{background:"transparent",border:"transparent",color:r[700],hoverBackground:r[50],hoverBorder:"transparent",hoverColor:r[800],activeBackground:r[100],activeBorder:"transparent",activeColor:r[900],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:e.colors.neutral[500]}}[i]},Xe=(e,t,i,r)=>r?De(e,r,i):He(e,t,i),Ye=(e,t)=>({sm:{fontSize:e.typography.scale.xs.size,lineHeight:e.typography.scale.xs.lineHeight,fontWeight:e.typography.fontWeight.medium,gap:e.spacing.xs,paddingX:e.spacing.sm,paddingY:e.spacing["2xs"],borderRadius:e.borderRadius.sm,iconOnlySize:"28px"},md:{fontSize:e.typography.scale.xs.size,lineHeight:e.typography.scale.xs.lineHeight,fontWeight:e.typography.fontWeight.medium,gap:e.spacing.sm,paddingX:e.spacing.md,paddingY:e.spacing.xs,borderRadius:e.borderRadius.sm,iconOnlySize:"36px"},lg:{fontSize:e.typography.scale.sm.size,lineHeight:e.typography.scale.sm.lineHeight,fontWeight:e.typography.fontWeight.medium,gap:e.spacing.lg,paddingX:e.spacing.lg,paddingY:e.spacing.sm,borderRadius:e.borderRadius.md,iconOnlySize:"44px"}})[t],Ue=we`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,F=S.span`
  width: ${({theme:e})=>e.icons.sm};
  height: ${({theme:e})=>e.icons.sm};
  border: ${({theme:e})=>e.spacing["2xs"]} solid ${({theme:e})=>e.colors.blue[200]};
  border-top-color: ${({theme:e})=>e.colors.blue[600]};
  border-radius: 50%;
  animation: ${Ue} 0.8s linear infinite;
`,L=S.span`
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;S.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: inherit;
  visibility: ${({$hidden:e})=>e?"hidden":"visible"};
`;const g=S.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({theme:e,$size:t})=>{const i={sm:e.icons.md,md:e.icons.lg,lg:e.icons.xl};return y`
      width: ${i[t]};
      height: ${i[t]};
      font-size: ${i[t]};

      & > svg {
        width: 100%;
        height: 100%;
      }
    `}}
`,E=S.button.withConfig({shouldForwardProp:e=>!e.startsWith("$")})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  border-style: solid;
  border-width: ${({theme:e})=>e.spacing["2xs"]};
  border-radius: ${({theme:e})=>e.spacing.sm};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  text-decoration: none;
  appearance: none;
  user-select: none;
  white-space: nowrap;
  transition: color 220ms ease-in-out, background 220ms ease-in-out, border-color 220ms ease-in-out;

  svg {
    transition: transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  ${({theme:e,$size:t,$iconOnly:i})=>{const r=Ye(e,t);return y`
      font-size: ${r.fontSize};
      line-height: ${r.lineHeight};
      font-weight: ${r.fontWeight};
      gap: ${r.gap};
      padding: ${r.paddingY} ${r.paddingX};
      ${i?y`
            padding: 0;
            width: ${r.iconOnlySize};
            height: ${r.iconOnlySize};
            min-width: ${r.iconOnlySize};
            min-height: ${r.iconOnlySize};
            max-width: ${r.iconOnlySize};
            max-height: ${r.iconOnlySize};
            flex: 0 0 ${r.iconOnlySize};
          `:""}
    `}}

  ${({theme:e,$variant:t,$appearance:i,$status:r})=>{const a=Xe(e,t,i,r);return y`
      color: ${a.color};
      border-color: ${a.border};
      background: ${a.background};

      &:disabled,
      &[aria-disabled='true'] {
        color: ${a.disabledColor};
        border-color: ${a.disabledBorder};
        background: ${a.disabledBackground};
      }

      &:hover:not(:disabled):not([aria-disabled='true']) {
        color: ${a.hoverColor};
        border-color: ${a.hoverBorder};
        background: ${a.hoverBackground};

        [data-icon-position='trailing'] svg.lucide-arrow-right {
          transform: translateX(${e.spacing.xs});
        }

        [data-icon-position='leading'] svg.lucide-arrow-left {
          transform: translateX(-${e.spacing.xs});
        }
      }

      &:active:not(:disabled):not([aria-disabled='true']) {
        color: ${a.activeColor};
        border-color: ${a.activeBorder};
        background: ${a.activeBackground};
      }
    `}}

  ${({$iconOnly:e})=>e&&y`
      border-radius: 50%;
      overflow: hidden;
    `}

  ${({$isLoading:e})=>e&&y`
      cursor: progress;
    `}

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: ${({theme:e})=>e.spacing["2xs"]} solid ${({theme:e})=>e.colors.blue[600]};
    outline-offset: ${({theme:e})=>e.spacing["2xs"]};
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,p=d.forwardRef((e,t)=>{const{variant:i="secondary",appearance:r="solid",size:a="md",leadingIcon:o,trailingIcon:c,iconOnly:s=!1,isLoading:u=!1,disabled:h=!1,context:j="default",status:f,fullWidth:_=!1,asChild:me=!1,children:O,...W}=e,be=W["aria-label"];if(s&&!be)throw new Error("ButtonV3: iconOnly buttons require an aria-label.");if(o&&c)throw new Error("ButtonV3: use either leadingIcon or trailingIcon, not both.");const ve=!!(f&&j!=="notification");d.useEffect(()=>{},[ve]);const q=j==="notification"?f:void 0,T=h||u;if(me){const{onClick:I,tabIndex:$e,...ke}=W,Se=t,je=R=>{if(T){R.preventDefault(),R.stopPropagation();return}I==null||I(R)};return n.jsxs(E,{as:Fe,ref:Se,onClick:je,"aria-busy":u,"aria-disabled":T,tabIndex:T?-1:$e,"data-variant":i,"data-appearance":r,$variant:i,$appearance:r,$size:a,$status:q,$fullWidth:_,$iconOnly:s,$isLoading:u,...ke,children:[u&&n.jsx(L,{"aria-hidden":"true",children:n.jsx(F,{"data-testid":"button-v3-spinner"})}),s&&o&&n.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:o}),s&&!o&&c&&n.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:c}),!s&&o&&n.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:o}),!s&&n.jsx(Ne,{children:O}),!s&&c&&n.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:c})]})}const{type:xe="button",...Be}=W,Ce=t;return n.jsxs(E,{ref:Ce,type:xe,disabled:T,"aria-busy":u,"data-variant":i,"data-appearance":r,$variant:i,$appearance:r,$size:a,$status:q,$fullWidth:_,$iconOnly:s,$isLoading:u,...Be,children:[u&&n.jsx(L,{"aria-hidden":"true",children:n.jsx(F,{"data-testid":"button-v3-spinner"})}),s?n.jsxs(d.Fragment,{children:[o&&n.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:o}),!o&&c&&n.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:c})]}):n.jsxs(d.Fragment,{children:[o&&n.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:o}),O,c&&n.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:c})]})]})});p.displayName="ButtonV3";p.__docgenInfo={description:"",methods:[],displayName:"ButtonV3",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'quaternary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'quaternary'"}]},description:"Visual intent: primary, secondary, tertiary, quaternary."},appearance:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"Visual appearance: solid, outline, ghost."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size scale for spacing/text/icons."},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Renders icon-only button; requires aria-label."},isLoading:{required:!1,tsType:{name:"boolean"},description:"Shows spinner and disables interactions."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the button."},context:{required:!1,tsType:{name:"union",raw:"'default' | 'notification'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'notification'"}]},description:"Context for behavior rules (e.g. notification status)."},status:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"Status tone; applied when context='notification'."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Expands button to full container width."},asChild:{required:!1,tsType:{name:"boolean"},description:"Render styles onto a child element (for Link/NavLink/a) using Radix Slot."}}};const Ke={title:"Components/ButtonV3",component:p,argTypes:{variant:{description:"Visual intent for emphasis and colour family.",control:{type:"select"},options:["primary","secondary","tertiary","quaternary"]},appearance:{description:"Visual appearance for the selected intent.",control:{type:"select"},options:["solid","outline","ghost"]},size:{description:"Size scale for spacing, typography, and icon dimensions.",control:{type:"select"},options:["sm","md","lg"]},leadingIcon:{description:"Icon rendered before the button label.",control:!1},trailingIcon:{description:"Icon rendered after the button label.",control:!1},iconOnly:{description:"Renders as icon-only content; requires an aria-label.",control:{type:"boolean"}},isLoading:{description:"Shows spinner and disables interactions.",control:{type:"boolean"}},disabled:{description:"Disables interactions and applies disabled styles.",control:{type:"boolean"}},context:{description:"Usage context; status tones apply in notification context.",control:{type:"select"},options:["default","notification"]},status:{description:"Optional status tone.",control:{type:"select"},options:["info","success","warning","danger"]},fullWidth:{description:"Expands button width to fill parent container.",control:{type:"boolean"}},asChild:{description:"Render styles onto the passed child element via Radix Slot.",control:{type:"boolean"}},type:{description:"Native HTML button type.",control:{type:"select"},options:["button","submit","reset"]}},args:{children:"ButtonV3",variant:"secondary",appearance:"solid",size:"md",disabled:!1,isLoading:!1,fullWidth:!1,context:"default"}},V=e=>n.jsx(p,{...e}),w=V.bind({}),m=e=>n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[n.jsx(p,{...e,asChild:!1,variant:"primary",children:"Primary"}),n.jsx(p,{...e,asChild:!1,variant:"secondary",children:"Secondary"}),n.jsx(p,{...e,asChild:!1,variant:"tertiary",children:"Tertiary"}),n.jsx(p,{...e,asChild:!1,variant:"quaternary",children:"Quaternary"})]}),b=e=>n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[n.jsx(p,{...e,asChild:!1,appearance:"solid",children:"Solid"}),n.jsx(p,{...e,asChild:!1,appearance:"outline",children:"Outline"}),n.jsx(p,{...e,asChild:!1,appearance:"ghost",children:"Ghost"})]}),v=e=>{const t=["primary","secondary","tertiary","quaternary"],i=["solid","outline","ghost"];return n.jsxs("div",{style:{display:"grid",gap:"8px",gridTemplateColumns:"120px repeat(3, minmax(0, 1fr))",justifyItems:"stretch",alignItems:"center"},children:[n.jsx("div",{}),i.map(r=>n.jsx("div",{style:{fontWeight:l.typography.fontWeight.semibold,fontFamily:l.typography.fontFamily.sans,color:l.colors.neutral[600],textTransform:"capitalize"},children:r},`variant-header-${r}`)),t.flatMap(r=>[n.jsx("div",{style:{fontWeight:l.typography.fontWeight.semibold,fontFamily:l.typography.fontFamily.sans,color:l.colors.neutral[600],textTransform:"capitalize"},children:r},`variant-row-${r}`),...i.map(a=>n.jsx("div",{style:{border:`1px dashed ${l.colors.neutral[400]}`,borderRadius:l.borderRadius.sm,padding:l.spacing.sm},children:n.jsxs(p,{...e,asChild:!1,variant:r,appearance:a,children:[r," ",a]})},`${r}-${a}`))])]})},x=e=>{const t=["info","success","warning","danger"],i=["solid","outline","ghost"];return n.jsxs("div",{style:{display:"grid",gap:"8px",gridTemplateColumns:"120px repeat(3, minmax(0, 1fr))",justifyItems:"stretch",alignItems:"center"},children:[n.jsx("div",{}),i.map(r=>n.jsx("div",{style:{fontWeight:l.typography.fontWeight.semibold,fontFamily:l.typography.fontFamily.sans,color:l.colors.neutral[600],textTransform:"capitalize"},children:r},`header-${r}`)),t.flatMap(r=>[n.jsx("div",{style:{fontWeight:l.typography.fontWeight.semibold,fontFamily:l.typography.fontFamily.sans,color:l.colors.neutral[600],textTransform:"capitalize"},children:r},`row-${r}`),...i.map(a=>n.jsx("div",{style:{border:`1px dashed ${l.colors.neutral[400]}`,borderRadius:l.borderRadius.small,padding:l.spacing.sm},children:n.jsxs(p,{...e,asChild:!1,context:"notification",status:r,appearance:a,children:[r," ",a]})},`${r}-${a}`))])]})},B=e=>n.jsx(p,{...e,asChild:!1,iconOnly:!0,"aria-label":"Search",leadingIcon:n.jsx("span",{children:"⌕"}),trailingIcon:void 0}),C=V.bind({});C.args={variant:"primary",size:"md",children:"Next",trailingIcon:n.jsx(he,{icon:Re,color:"currentColor"})};const $=V.bind({});$.args={variant:"primary",size:"md",children:"Back",leadingIcon:n.jsx(he,{icon:We,color:"currentColor"})};const k=V.bind({});k.args={asChild:!0,variant:"secondary",appearance:"outline",size:"md",children:n.jsx("a",{href:"https://www.edozo.com",target:"_blank",rel:"noopener noreferrer",children:"Open Edozo (asChild)"})};m.__docgenInfo={description:"",methods:[],displayName:"Variants"};b.__docgenInfo={description:"",methods:[],displayName:"Styles"};v.__docgenInfo={description:"",methods:[],displayName:"VariantStyleMatrix"};x.__docgenInfo={description:"",methods:[],displayName:"NotificationContextMatrix"};B.__docgenInfo={description:"",methods:[],displayName:"IconOnly"};var N,A,P;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...(P=(A=w.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var M,H,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap'
}}>
    <ButtonV3 {...args} asChild={false} variant="primary">
      Primary
    </ButtonV3>
    <ButtonV3 {...args} asChild={false} variant="secondary">
      Secondary
    </ButtonV3>
    <ButtonV3 {...args} asChild={false} variant="tertiary">
      Tertiary
    </ButtonV3>
    <ButtonV3 {...args} asChild={false} variant="quaternary">
      Quaternary
    </ButtonV3>
  </div>`,...(D=(H=m.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var X,Y,U;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap'
}}>
    <ButtonV3 {...args} asChild={false} appearance="solid">
      Solid
    </ButtonV3>
    <ButtonV3 {...args} asChild={false} appearance="outline">
      Outline
    </ButtonV3>
    <ButtonV3 {...args} asChild={false} appearance="ghost">
      Ghost
    </ButtonV3>
  </div>`,...(U=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var G,Q,Z;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const variants: Array<ButtonV3Props['variant']> = ['primary', 'secondary', 'tertiary', 'quaternary'];
  const appearances: Array<ButtonV3Props['appearance']> = ['solid', 'outline', 'ghost'];
  return <div style={{
    display: 'grid',
    gap: '8px',
    gridTemplateColumns: '120px repeat(3, minmax(0, 1fr))',
    justifyItems: 'stretch',
    alignItems: 'center'
  }}>
      <div />
      {appearances.map(appearance => <div key={\`variant-header-\${appearance}\`} style={{
      fontWeight: defaultTheme.typography.fontWeight.semibold,
      fontFamily: defaultTheme.typography.fontFamily.sans,
      color: defaultTheme.colors.neutral[600],
      textTransform: 'capitalize'
    }}>
          {appearance}
        </div>)}

      {variants.flatMap(variant => [<div key={\`variant-row-\${variant}\`} style={{
      fontWeight: defaultTheme.typography.fontWeight.semibold,
      fontFamily: defaultTheme.typography.fontFamily.sans,
      color: defaultTheme.colors.neutral[600],
      textTransform: 'capitalize'
    }}>
          {variant}
        </div>, ...appearances.map(appearance => <div key={\`\${variant}-\${appearance}\`} style={{
      border: \`1px dashed \${defaultTheme.colors.neutral[400]}\`,
      borderRadius: defaultTheme.borderRadius.sm,
      padding: defaultTheme.spacing.sm
    }}>
            <ButtonV3 {...args} asChild={false} variant={variant} appearance={appearance}>
              {variant} {appearance}
            </ButtonV3>
          </div>)])}
    </div>;
}`,...(Z=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var J,K,ee;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const statuses: Array<NonNullable<ButtonV3Props['status']>> = ['info', 'success', 'warning', 'danger'];
  const appearances: Array<ButtonV3Props['appearance']> = ['solid', 'outline', 'ghost'];
  return <div style={{
    display: 'grid',
    gap: '8px',
    gridTemplateColumns: '120px repeat(3, minmax(0, 1fr))',
    justifyItems: 'stretch',
    alignItems: 'center'
  }}>
      <div />
      {appearances.map(appearance => <div key={\`header-\${appearance}\`} style={{
      fontWeight: defaultTheme.typography.fontWeight.semibold,
      fontFamily: defaultTheme.typography.fontFamily.sans,
      color: defaultTheme.colors.neutral[600],
      textTransform: 'capitalize'
    }}>
          {appearance}
        </div>)}

      {statuses.flatMap(status => [<div key={\`row-\${status}\`} style={{
      fontWeight: defaultTheme.typography.fontWeight.semibold,
      fontFamily: defaultTheme.typography.fontFamily.sans,
      color: defaultTheme.colors.neutral[600],
      textTransform: 'capitalize'
    }}>
          {status}
        </div>, ...appearances.map(appearance => <div key={\`\${status}-\${appearance}\`} style={{
      border: \`1px dashed \${defaultTheme.colors.neutral[400]}\`,
      borderRadius: defaultTheme.borderRadius.small,
      padding: defaultTheme.spacing.sm
    }}>
            <ButtonV3 {...args} asChild={false} context="notification" status={status} appearance={appearance}>
              {status} {appearance}
            </ButtonV3>
          </div>)])}
    </div>;
}`,...(ee=(K=x.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};var re,ae,oe;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:'args => <ButtonV3 {...args} asChild={false} iconOnly aria-label="Search" leadingIcon={<span>⌕</span>} trailingIcon={undefined} />',...(oe=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,te,ie;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...(ie=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,le,de;$.parameters={...$.parameters,docs:{...(se=$.parameters)==null?void 0:se.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...(de=(le=$.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ue;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...(ue=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const er=["Playground","Variants","Styles","VariantStyleMatrix","NotificationContextMatrix","IconOnly","ButtonWithTrailingArrowRight","ButtonWithLeadingArrowLeft","AsChildAnchorUsage"];export{k as AsChildAnchorUsage,$ as ButtonWithLeadingArrowLeft,C as ButtonWithTrailingArrowRight,B as IconOnly,x as NotificationContextMatrix,w as Playground,b as Styles,v as VariantStyleMatrix,m as Variants,er as __namedExportsOrder,Ke as default};
