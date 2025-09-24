import{l as o,d as s,j as t}from"./iframe-ND4VGsRZ.js";import{W as d,U as u}from"./Icons-B-yUctU7.js";import"./preload-helper-C1FmrZbK.js";const g=s.div`
  width: 100%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>`${parseInt(e.theme.spacing.xsmall,10)-1}px`} ${e=>e.theme.spacing.small};
  font-size: ${e=>e.theme.font.size.text.small};
  line-height: ${e=>e.theme.font.lineHeight.text.small};
  ${e=>e.$variant==="info"&&o`
      border-color: ${e.theme.colors.system.blue};
      background: ${e.theme.colors.system.blueLighter};
      color: ${e.theme.colors.system.blue};
    `}
  ${e=>e.$variant==="alert"&&o`
      border-color: ${e.theme.colors.system.red};
      background: ${e.theme.colors.system.redLighter};
      color: ${e.theme.colors.system.red};
    `}
  ${e=>e.$variant==="warning"&&o`
      border-color: ${e.theme.colors.system.yellowDarker};
      background: ${e.theme.colors.system.yellowLighter};
      color: ${e.theme.colors.system.yellowDarker};
    `}
`,p=s(d)`
  margin: 0 ${e=>e.theme.spacing.small};
  fill: ${e=>e.theme.colors.system.red};
`;s(u)`
  fill: ${e=>e.theme.colors.white};
`;const a=({children:e,variant:c="info",...m})=>t.jsx(g,{$variant:c,...m,children:e});a.__docgenInfo={description:"",methods:[],displayName:"NotificationBar",props:{variant:{required:!1,tsType:{name:"union",raw:"'alert' | 'info' | 'warning'",elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x={title:"Components/NotificationBar",component:a},h=e=>t.jsx(a,{...e,children:t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(p,{}),t.jsx("span",{children:"You are currently using an outdated browser, this may cause issues using our site. Upgrade to a modern browser for a better experience"})]})}),r=h.bind({});var n,i,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => <NotificationBar {...args}>
    <div style={{
    display: 'flex',
    alignItems: 'center'
  }}>
      <StyledWarningIcon />
      <span>
        You are currently using an outdated browser, this may cause issues using our site. Upgrade to a modern browser
        for a better experience
      </span>
    </div>
  </NotificationBar>`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const b=["Controlled"];export{r as Controlled,b as __namedExportsOrder,x as default};
