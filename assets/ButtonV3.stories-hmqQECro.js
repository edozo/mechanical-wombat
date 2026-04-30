import{j as a,d as e}from"./iframe-DVQN8M8q.js";import{B as n}from"./ButtonV3-DHSwfsEp.js";import{L as x}from"./Lucide-b9gvWvQX.js";import{c as v}from"./createLucideIcon-VbWEJlGx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRKMa_vs.js";import"./index-Drdm2mZ3.js";const b=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],V=v("arrow-left",b);const T=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],B=v("arrow-right",T),z={title:"Components/ButtonV3",component:n,argTypes:{variant:{description:"Visual intent for emphasis and colour family.",control:{type:"select"},options:["primary","secondary","tertiary","quaternary"]},appearance:{description:"Visual appearance for the selected intent.",control:{type:"select"},options:["solid","outline","ghost"]},size:{description:"Size scale for spacing, typography, and icon dimensions.",control:{type:"select"},options:["sm","md","lg"]},leadingIcon:{description:"Icon rendered before the button label.",control:!1},trailingIcon:{description:"Icon rendered after the button label.",control:!1},iconOnly:{description:"Renders as icon-only content; requires an aria-label.",control:{type:"boolean"}},isLoading:{description:"Shows spinner and disables interactions.",control:{type:"boolean"}},disabled:{description:"Disables interactions and applies disabled styles.",control:{type:"boolean"}},context:{description:"Usage context; status tones apply in notification context.",control:{type:"select"},options:["default","notification"]},status:{description:"Optional status tone.",control:{type:"select"},options:["info","success","warning","danger"]},fullWidth:{description:"Expands button width to fill parent container.",control:{type:"boolean"}},asChild:{description:"Render styles onto the passed child element via Radix Slot.",control:{type:"boolean"}},type:{description:"Native HTML button type.",control:{type:"select"},options:["button","submit","reset"]}},args:{children:"ButtonV3",variant:"secondary",appearance:"solid",size:"md",disabled:!1,isLoading:!1,fullWidth:!1,context:"default"}},f=r=>a.jsx(n,{...r}),h=f.bind({}),i=r=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[a.jsx(n,{...r,asChild:!1,variant:"primary",children:"Primary"}),a.jsx(n,{...r,asChild:!1,variant:"secondary",children:"Secondary"}),a.jsx(n,{...r,asChild:!1,variant:"tertiary",children:"Tertiary"}),a.jsx(n,{...r,asChild:!1,variant:"quaternary",children:"Quaternary"})]}),l=r=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[a.jsx(n,{...r,asChild:!1,appearance:"solid",children:"Solid"}),a.jsx(n,{...r,asChild:!1,appearance:"outline",children:"Outline"}),a.jsx(n,{...r,asChild:!1,appearance:"ghost",children:"Ghost"})]}),d=r=>{const g=["primary","secondary","tertiary","quaternary"],o=["solid","outline","ghost"];return a.jsxs("div",{style:{display:"grid",gap:"8px",gridTemplateColumns:"120px repeat(3, minmax(0, 1fr))",justifyItems:"stretch",alignItems:"center"},children:[a.jsx("div",{}),o.map(t=>a.jsx("div",{style:{fontWeight:e.typography.fontWeight.semibold,fontFamily:e.typography.fontFamily.sans,color:e.colors.neutral[600],textTransform:"capitalize"},children:t},`variant-header-${t}`)),g.flatMap(t=>[a.jsx("div",{style:{fontWeight:e.typography.fontWeight.semibold,fontFamily:e.typography.fontFamily.sans,color:e.colors.neutral[600],textTransform:"capitalize"},children:t},`variant-row-${t}`),...o.map(s=>a.jsx("div",{style:{border:`1px dashed ${e.colors.neutral[400]}`,borderRadius:e.borderRadius.sm,padding:e.spacing.sm},children:a.jsxs(n,{...r,asChild:!1,variant:t,appearance:s,children:[t," ",s]})},`${t}-${s}`))])]})},p=r=>{const g=["info","success","warning","danger"],o=["solid","outline","ghost"];return a.jsxs("div",{style:{display:"grid",gap:"8px",gridTemplateColumns:"120px repeat(3, minmax(0, 1fr))",justifyItems:"stretch",alignItems:"center"},children:[a.jsx("div",{}),o.map(t=>a.jsx("div",{style:{fontWeight:e.typography.fontWeight.semibold,fontFamily:e.typography.fontFamily.sans,color:e.colors.neutral[600],textTransform:"capitalize"},children:t},`header-${t}`)),g.flatMap(t=>[a.jsx("div",{style:{fontWeight:e.typography.fontWeight.semibold,fontFamily:e.typography.fontFamily.sans,color:e.colors.neutral[600],textTransform:"capitalize"},children:t},`row-${t}`),...o.map(s=>a.jsx("div",{style:{border:`1px dashed ${e.colors.neutral[400]}`,borderRadius:e.borderRadius.small,padding:e.spacing.sm},children:a.jsxs(n,{...r,asChild:!1,context:"notification",status:t,appearance:s,children:[t," ",s]})},`${t}-${s}`))])]})},c=r=>a.jsx(n,{...r,asChild:!1,iconOnly:!0,"aria-label":"Search",leadingIcon:a.jsx("span",{children:"⌕"}),trailingIcon:void 0}),m=f.bind({});m.args={variant:"primary",size:"md",children:"Next",trailingIcon:a.jsx(x,{icon:B,color:"currentColor"})};const u=f.bind({});u.args={variant:"primary",size:"md",children:"Back",leadingIcon:a.jsx(x,{icon:V,color:"currentColor"})};const y=f.bind({});y.args={asChild:!0,variant:"secondary",appearance:"outline",size:"md",children:a.jsx("a",{href:"https://www.edozo.com",target:"_blank",rel:"noopener noreferrer",children:"Open Edozo (asChild)"})};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};l.__docgenInfo={description:"",methods:[],displayName:"Styles"};d.__docgenInfo={description:"",methods:[],displayName:"VariantStyleMatrix"};p.__docgenInfo={description:"",methods:[],displayName:"NotificationContextMatrix"};c.__docgenInfo={description:"",methods:[],displayName:"IconOnly"};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
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
  </div>`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'args => <ButtonV3 {...args} asChild={false} iconOnly aria-label="Search" leadingIcon={<span>⌕</span>} trailingIcon={undefined} />',...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"args => <ButtonV3 {...args} />",...y.parameters?.docs?.source}}};const _=["Playground","Variants","Styles","VariantStyleMatrix","NotificationContextMatrix","IconOnly","ButtonWithTrailingArrowRight","ButtonWithLeadingArrowLeft","AsChildAnchorUsage"];export{y as AsChildAnchorUsage,u as ButtonWithLeadingArrowLeft,m as ButtonWithTrailingArrowRight,c as IconOnly,p as NotificationContextMatrix,h as Playground,l as Styles,d as VariantStyleMatrix,i as Variants,_ as __namedExportsOrder,z as default};
