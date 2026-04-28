import{r as l,j as t,R as ee,s as y,c as S,p as re,d}from"./iframe-qSwtjqTo.js";import{c as ae}from"./index-B-9CN0lr.js";import{c as E,L as N}from"./Lucide-Pip8w0GY.js";import"./preload-helper-PPVm8Dsz.js";const oe=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],te=E("arrow-left",oe);const ne=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ie=E("arrow-right",ne);var se=Symbol.for("react.lazy"),z=ee[" use ".trim().toString()];function de(e){return typeof e=="object"&&e!==null&&"then"in e}function q(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===se&&"_payload"in e&&de(e._payload)}function le(e){const n=pe(e),i=l.forwardRef((r,a)=>{let{children:o,...c}=r;q(o)&&typeof z=="function"&&(o=z(o._payload));const s=l.Children.toArray(o),u=s.find(he);if(u){const h=u.props.children,j=s.map(f=>f===u?l.Children.count(h)>1?l.Children.only(null):l.isValidElement(h)?h.props.children:null:f);return t.jsx(n,{...c,ref:a,children:l.isValidElement(h)?l.cloneElement(h,void 0,j):null})}return t.jsx(n,{...c,ref:a,children:o})});return i.displayName=`${e}.Slot`,i}var ce=le("Slot");function pe(e){const n=l.forwardRef((i,r)=>{let{children:a,...o}=i;if(q(a)&&typeof z=="function"&&(a=z(a._payload)),l.isValidElement(a)){const c=fe(a),s=ye(o,a.props);return a.type!==l.Fragment&&(s.ref=r?ae(r,c):c),l.cloneElement(a,s)}return l.Children.count(a)>1?l.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var P=Symbol("radix.slottable");function ue(e){const n=({children:i})=>t.jsx(t.Fragment,{children:i});return n.displayName=`${e}.Slottable`,n.__radixId=P,n}var ge=ue("Slottable");function he(e){return l.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===P}function ye(e,n){const i={...n};for(const r in n){const a=e[r],o=n[r];/^on[A-Z]/.test(r)?a&&o?i[r]=(...s)=>{const u=o(...s);return a(...s),u}:a&&(i[r]=a):r==="style"?i[r]={...a,...o}:r==="className"&&(i[r]=[a,o].filter(Boolean).join(" "))}return{...e,...i}}function fe(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,i=n&&"isReactWarning"in n&&n.isReactWarning;return i?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,i=n&&"isReactWarning"in n&&n.isReactWarning,i?e.props.ref:e.props.ref||e.ref)}const be=(e,n,i)=>{const{indigo:r}=e.colors,{teal:a}=e.colors,{neutral:o}=e.colors;return{primary:{solid:{background:r[900],border:r[900],color:o[50],hoverBackground:r[50],hoverBorder:r[900],hoverColor:r[900],activeBackground:r[50],activeBorder:r[900],activeColor:r[900],disabledBackground:o[200],disabledBorder:o[200],disabledColor:o[500]},outline:{background:"transparent",border:r[900],color:r[900],hoverBackground:r[100],hoverBorder:r[900],hoverColor:r[900],activeBackground:r[950],activeBorder:r[950],activeColor:o[50],disabledBackground:"transparent",disabledBorder:o[300],disabledColor:o[500]},ghost:{background:"transparent",border:"transparent",color:r[900],hoverBackground:r[50],hoverBorder:"transparent",hoverColor:r[900],activeBackground:r[100],activeBorder:"transparent",activeColor:r[950],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:o[500]}},secondary:{solid:{background:r[600],border:r[600],color:r[50],hoverBackground:r[50],hoverBorder:r[600],hoverColor:r[600],activeBackground:r[200],activeBorder:r[600],activeColor:r[50],disabledBackground:o[200],disabledBorder:o[200],disabledColor:o[500]},outline:{background:"transparent",border:r[500],color:r[700],hoverBackground:r[50],hoverBorder:r[600],hoverColor:r[800],activeBackground:r[100],activeBorder:r[700],activeColor:r[900],disabledBackground:"transparent",disabledBorder:o[300],disabledColor:o[500]},ghost:{background:"transparent",border:"transparent",color:r[700],hoverBackground:r[50],hoverBorder:"transparent",hoverColor:r[800],activeBackground:r[100],activeBorder:"transparent",activeColor:r[900],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:o[500]}},tertiary:{solid:{background:o[700],border:o[700],color:o[50],hoverBackground:o[100],hoverBorder:o[700],hoverColor:o[700],activeBackground:o[50],activeBorder:o[700],activeColor:o[700],disabledBackground:o[200],disabledBorder:o[200],disabledColor:o[500]},outline:{background:"transparent",border:o[700],color:o[700],hoverBackground:o[200],hoverBorder:o[700],hoverColor:o[700],activeBackground:o[800],activeBorder:o[800],activeColor:o[50],disabledBackground:"transparent",disabledBorder:o[300],disabledColor:o[500]},ghost:{background:"transparent",border:"transparent",color:o[600],hoverBackground:o[200],hoverBorder:"transparent",hoverColor:o[700],activeBackground:o[200],activeBorder:"transparent",activeColor:o[800],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:o[500]}},quaternary:{solid:{background:a[400],border:a[400],color:o[50],hoverBackground:a[50],hoverBorder:a[500],hoverColor:a[600],activeBackground:a[200],activeBorder:a[600],activeColor:a[950],disabledBackground:o[200],disabledBorder:o[200],disabledColor:o[500]},outline:{background:"transparent",border:a[500],color:a[700],hoverBackground:a[50],hoverBorder:a[600],hoverColor:a[700],activeBackground:a[100],activeBorder:a[700],activeColor:a[900],disabledBackground:"transparent",disabledBorder:o[300],disabledColor:o[500]},ghost:{background:"transparent",border:"transparent",color:a[700],hoverBackground:a[50],hoverBorder:"transparent",hoverColor:a[800],activeBackground:a[100],activeBorder:"transparent",activeColor:a[900],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:o[500]}}}[n][i]},me=(e,n,i)=>{const r=e.colors.status[n];return{solid:{background:r[500],border:r[500],color:e.colors.neutral[50],hoverBackground:r[600],hoverBorder:r[600],hoverColor:e.colors.neutral[50],activeBackground:r[900],activeBorder:r[900],activeColor:e.colors.neutral[50],disabledBackground:e.colors.neutral[200],disabledBorder:e.colors.neutral[200],disabledColor:e.colors.neutral[500]},outline:{background:"transparent",border:r[500],color:r[500],hoverBackground:r[50],hoverBorder:r[600],hoverColor:r[600],activeBackground:r[100],activeBorder:r[900],activeColor:r[900],disabledBackground:"transparent",disabledBorder:e.colors.neutral[300],disabledColor:e.colors.neutral[500]},ghost:{background:"transparent",border:"transparent",color:r[700],hoverBackground:r[50],hoverBorder:"transparent",hoverColor:r[800],activeBackground:r[100],activeBorder:"transparent",activeColor:r[900],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:e.colors.neutral[500]}}[i]},ve=(e,n,i,r)=>r?me(e,r,i):be(e,n,i),Be=(e,n)=>({sm:{fontSize:e.typography.scale.xs.size,lineHeight:e.typography.scale.xs.lineHeight,fontWeight:e.typography.fontWeight.medium,gap:e.spacing.xs,paddingX:e.spacing.sm,paddingY:e.spacing["2xs"],borderRadius:e.borderRadius.sm,iconOnlySize:"28px"},md:{fontSize:e.typography.scale.xs.size,lineHeight:e.typography.scale.xs.lineHeight,fontWeight:e.typography.fontWeight.medium,gap:e.spacing.sm,paddingX:e.spacing.md,paddingY:e.spacing.xs,borderRadius:e.borderRadius.sm,iconOnlySize:"36px"},lg:{fontSize:e.typography.scale.sm.size,lineHeight:e.typography.scale.sm.lineHeight,fontWeight:e.typography.fontWeight.medium,gap:e.spacing.lg,paddingX:e.spacing.lg,paddingY:e.spacing.sm,borderRadius:e.borderRadius.md,iconOnlySize:"44px"}})[n],xe=re`
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
  animation: ${xe} 0.8s linear infinite;
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

  ${({theme:e,$size:n})=>{const i={sm:e.icons.md,md:e.icons.lg,lg:e.icons.xl};return y`
      width: ${i[n]};
      height: ${i[n]};
      font-size: ${i[n]};

      & > svg {
        width: 100%;
        height: 100%;
      }
    `}}
`,A=S.button.withConfig({shouldForwardProp:e=>!e.startsWith("$")})`
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
  transition:
    color 220ms ease-in-out,
    background 220ms ease-in-out,
    border-color 220ms ease-in-out;

  svg {
    transition: transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  ${({theme:e,$size:n,$iconOnly:i})=>{const r=Be(e,n);return y`
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

  ${({theme:e,$variant:n,$appearance:i,$status:r})=>{const a=ve(e,n,i,r);return y`
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
`,p=l.forwardRef((e,n)=>{const{variant:i="secondary",appearance:r="solid",size:a="md",leadingIcon:o,trailingIcon:c,iconOnly:s=!1,isLoading:u=!1,disabled:h=!1,context:j="default",status:f,fullWidth:R=!1,asChild:M=!1,children:_,...W}=e,H=W["aria-label"];if(s&&!H)throw new Error("ButtonV3: iconOnly buttons require an aria-label.");if(o&&c)throw new Error("ButtonV3: use either leadingIcon or trailingIcon, not both.");const D=!!(f&&j!=="notification");l.useEffect(()=>{},[D]);const O=j==="notification"?f:void 0,T=h||u;if(M){const{onClick:G,tabIndex:Q,...Z}=W,J=n,K=I=>{if(T){I.preventDefault(),I.stopPropagation();return}G?.(I)};return t.jsxs(A,{as:ce,ref:J,onClick:K,"aria-busy":u,"aria-disabled":T,tabIndex:T?-1:Q,"data-variant":i,"data-appearance":r,$variant:i,$appearance:r,$size:a,$status:O,$fullWidth:R,$iconOnly:s,$isLoading:u,...Z,children:[u&&t.jsx(L,{"aria-hidden":"true",children:t.jsx(F,{"data-testid":"button-v3-spinner"})}),s&&o&&t.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:o}),s&&!o&&c&&t.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:c}),!s&&o&&t.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:o}),!s&&t.jsx(ge,{children:_}),!s&&c&&t.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:c})]})}const{type:X="button",...Y}=W,U=n;return t.jsxs(A,{ref:U,type:X,disabled:T,"aria-busy":u,"data-variant":i,"data-appearance":r,$variant:i,$appearance:r,$size:a,$status:O,$fullWidth:R,$iconOnly:s,$isLoading:u,...Y,children:[u&&t.jsx(L,{"aria-hidden":"true",children:t.jsx(F,{"data-testid":"button-v3-spinner"})}),s?t.jsxs(l.Fragment,{children:[o&&t.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:o}),!o&&c&&t.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:c})]}):t.jsxs(l.Fragment,{children:[o&&t.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:o}),_,c&&t.jsx(g,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:c})]})]})});p.displayName="ButtonV3";p.__docgenInfo={description:"",methods:[],displayName:"ButtonV3",props:{variant:{required:!1,tsType:{name:"ButtonV3Variant"},description:"Visual intent: primary, secondary, tertiary, quaternary."},appearance:{required:!1,tsType:{name:"ButtonV3Appearance"},description:"Visual appearance: solid, outline, ghost."},size:{required:!1,tsType:{name:"ButtonV3Size"},description:"Size scale for spacing/text/icons."},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Renders icon-only button; requires aria-label."},isLoading:{required:!1,tsType:{name:"boolean"},description:"Shows spinner and disables interactions."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the button."},context:{required:!1,tsType:{name:"ButtonV3Context"},description:"Context for behavior rules (e.g. notification status)."},status:{required:!1,tsType:{name:"ButtonV3Status"},description:"Status tone; applied when context='notification'."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Expands button to full container width."},asChild:{required:!1,tsType:{name:"boolean"},description:"Render styles onto a child element (for Link/NavLink/a) using Radix Slot."}}};const je={title:"Components/ButtonV3",component:p,argTypes:{variant:{description:"Visual intent for emphasis and colour family.",control:{type:"select"},options:["primary","secondary","tertiary","quaternary"]},appearance:{description:"Visual appearance for the selected intent.",control:{type:"select"},options:["solid","outline","ghost"]},size:{description:"Size scale for spacing, typography, and icon dimensions.",control:{type:"select"},options:["sm","md","lg"]},leadingIcon:{description:"Icon rendered before the button label.",control:!1},trailingIcon:{description:"Icon rendered after the button label.",control:!1},iconOnly:{description:"Renders as icon-only content; requires an aria-label.",control:{type:"boolean"}},isLoading:{description:"Shows spinner and disables interactions.",control:{type:"boolean"}},disabled:{description:"Disables interactions and applies disabled styles.",control:{type:"boolean"}},context:{description:"Usage context; status tones apply in notification context.",control:{type:"select"},options:["default","notification"]},status:{description:"Optional status tone.",control:{type:"select"},options:["info","success","warning","danger"]},fullWidth:{description:"Expands button width to fill parent container.",control:{type:"boolean"}},asChild:{description:"Render styles onto the passed child element via Radix Slot.",control:{type:"boolean"}},type:{description:"Native HTML button type.",control:{type:"select"},options:["button","submit","reset"]}},args:{children:"ButtonV3",variant:"secondary",appearance:"solid",size:"md",disabled:!1,isLoading:!1,fullWidth:!1,context:"default"}},w=e=>t.jsx(p,{...e}),V=w.bind({}),b=e=>t.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t.jsx(p,{...e,asChild:!1,variant:"primary",children:"Primary"}),t.jsx(p,{...e,asChild:!1,variant:"secondary",children:"Secondary"}),t.jsx(p,{...e,asChild:!1,variant:"tertiary",children:"Tertiary"}),t.jsx(p,{...e,asChild:!1,variant:"quaternary",children:"Quaternary"})]}),m=e=>t.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t.jsx(p,{...e,asChild:!1,appearance:"solid",children:"Solid"}),t.jsx(p,{...e,asChild:!1,appearance:"outline",children:"Outline"}),t.jsx(p,{...e,asChild:!1,appearance:"ghost",children:"Ghost"})]}),v=e=>{const n=["primary","secondary","tertiary","quaternary"],i=["solid","outline","ghost"];return t.jsxs("div",{style:{display:"grid",gap:"8px",gridTemplateColumns:"120px repeat(3, minmax(0, 1fr))",justifyItems:"stretch",alignItems:"center"},children:[t.jsx("div",{}),i.map(r=>t.jsx("div",{style:{fontWeight:d.typography.fontWeight.semibold,fontFamily:d.typography.fontFamily.sans,color:d.colors.neutral[600],textTransform:"capitalize"},children:r},`variant-header-${r}`)),n.flatMap(r=>[t.jsx("div",{style:{fontWeight:d.typography.fontWeight.semibold,fontFamily:d.typography.fontFamily.sans,color:d.colors.neutral[600],textTransform:"capitalize"},children:r},`variant-row-${r}`),...i.map(a=>t.jsx("div",{style:{border:`1px dashed ${d.colors.neutral[400]}`,borderRadius:d.borderRadius.sm,padding:d.spacing.sm},children:t.jsxs(p,{...e,asChild:!1,variant:r,appearance:a,children:[r," ",a]})},`${r}-${a}`))])]})},B=e=>{const n=["info","success","warning","danger"],i=["solid","outline","ghost"];return t.jsxs("div",{style:{display:"grid",gap:"8px",gridTemplateColumns:"120px repeat(3, minmax(0, 1fr))",justifyItems:"stretch",alignItems:"center"},children:[t.jsx("div",{}),i.map(r=>t.jsx("div",{style:{fontWeight:d.typography.fontWeight.semibold,fontFamily:d.typography.fontFamily.sans,color:d.colors.neutral[600],textTransform:"capitalize"},children:r},`header-${r}`)),n.flatMap(r=>[t.jsx("div",{style:{fontWeight:d.typography.fontWeight.semibold,fontFamily:d.typography.fontFamily.sans,color:d.colors.neutral[600],textTransform:"capitalize"},children:r},`row-${r}`),...i.map(a=>t.jsx("div",{style:{border:`1px dashed ${d.colors.neutral[400]}`,borderRadius:d.borderRadius.small,padding:d.spacing.sm},children:t.jsxs(p,{...e,asChild:!1,context:"notification",status:r,appearance:a,children:[r," ",a]})},`${r}-${a}`))])]})},x=e=>t.jsx(p,{...e,asChild:!1,iconOnly:!0,"aria-label":"Search",leadingIcon:t.jsx("span",{children:"⌕"}),trailingIcon:void 0}),C=w.bind({});C.args={variant:"primary",size:"md",children:"Next",trailingIcon:t.jsx(N,{icon:ie,color:"currentColor"})};const $=w.bind({});$.args={variant:"primary",size:"md",children:"Back",leadingIcon:t.jsx(N,{icon:te,color:"currentColor"})};const k=w.bind({});k.args={asChild:!0,variant:"secondary",appearance:"outline",size:"md",children:t.jsx("a",{href:"https://www.edozo.com",target:"_blank",rel:"noopener noreferrer",children:"Open Edozo (asChild)"})};b.__docgenInfo={description:"",methods:[],displayName:"Variants"};m.__docgenInfo={description:"",methods:[],displayName:"Styles"};v.__docgenInfo={description:"",methods:[],displayName:"VariantStyleMatrix"};B.__docgenInfo={description:"",methods:[],displayName:"NotificationContextMatrix"};x.__docgenInfo={description:"",methods:[],displayName:"IconOnly"};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...V.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
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
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
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
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'args => <ButtonV3 {...args} asChild={false} iconOnly aria-label="Search" leadingIcon={<span>⌕</span>} trailingIcon={undefined} />',...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...C.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...$.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...k.parameters?.docs?.source}}};const Te=["Playground","Variants","Styles","VariantStyleMatrix","NotificationContextMatrix","IconOnly","ButtonWithTrailingArrowRight","ButtonWithLeadingArrowLeft","AsChildAnchorUsage"];export{k as AsChildAnchorUsage,$ as ButtonWithLeadingArrowLeft,C as ButtonWithTrailingArrowRight,x as IconOnly,B as NotificationContextMatrix,V as Playground,m as Styles,v as VariantStyleMatrix,b as Variants,Te as __namedExportsOrder,je as default};
