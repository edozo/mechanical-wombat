import{l as o,d as a,j as t,r as N}from"./iframe-vqTh4RY9.js";import{u as S}from"./react-collapsed.esm-xMHlxHsl.js";import{W as R,U as I}from"./Icons-DdLUdJas.js";import"./preload-helper-C1FmrZbK.js";const y=a.div`
  width: 100%;
  border: 1px solid;
  display: flex;
  padding: ${e=>e.theme.spacing.xsmall} ${e=>e.theme.spacing.small};
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
`,T=a.div`
  flex: 1;
`,k=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,B=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,_=a.button`
  background: transparent;
  border: none;
  padding: 0;
  margin-left: ${e=>e.theme.spacing.small};
  font-size: ${e=>e.theme.font.size.text.small};
  line-height: ${e=>e.theme.font.lineHeight.text.small};
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  flex-shrink: 0;
  ${e=>e.$variant==="info"&&o`
      color: ${e.theme.colors.system.blue};
    `}
  ${e=>e.$variant==="alert"&&o`
      color: ${e.theme.colors.system.red};
    `}
  ${e=>e.$variant==="warning"&&o`
      color: ${e.theme.colors.system.yellowDarker};
    `}

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`,D=a.div`
  margin-top: ${e=>e.theme.spacing.xsmall};
  padding-top: ${e=>e.theme.spacing.xsmall};
  width: 100%;
`,A=a(R)`
  margin: 0 ${e=>e.theme.spacing.small};
  fill: ${e=>e.theme.colors.system.red};
`;a(I)`
  fill: ${e=>e.theme.colors.white};
`;const c=({children:e,variant:r="info",...s})=>t.jsx(y,{$variant:r,...s,children:e}),x=({variant:e="info",children:r,details:s,...$})=>{const[l,w]=N.useState(!1),{getCollapseProps:v,getToggleProps:b}=S({isExpanded:l}),d="notification-details-panel";return t.jsx(y,{$variant:e,...$,children:t.jsxs(k,{children:[t.jsxs(B,{children:[t.jsx(T,{children:r}),t.jsx(_,{$variant:e,"aria-expanded":l,"aria-controls":d,...b({onClick:()=>w(j=>!j)}),children:l?"Show less":"Show more"})]}),t.jsx("div",{id:d,...v(),children:t.jsx(D,{children:s})})]})})};c.__docgenInfo={description:"",methods:[],displayName:"NotificationBar",props:{variant:{required:!1,tsType:{name:"union",raw:"'alert' | 'info' | 'warning'",elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"NotificationBarAccordion",props:{variant:{required:!1,tsType:{name:"union",raw:"'alert' | 'info' | 'warning'",elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},details:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const P={title:"Components/NotificationBar",component:c},q=e=>t.jsx(c,{...e,children:t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(A,{}),t.jsx("span",{children:"You are currently using an outdated browser, this may cause issues using our site. Upgrade to a modern browser for a better experience"})]})}),i=q.bind({}),n=()=>t.jsx(x,{variant:"info",details:t.jsxs("span",{children:["This is the details content that is ",t.jsx("strong",{children:"hidden by default"}),". It will expand when you click the 'Show more' button. You can include any additional information here that users might need but don't need to see immediately."]}),children:t.jsxs("span",{children:["This is the ",t.jsx("strong",{children:"summary"})," content that is always visible."]})});n.__docgenInfo={description:"",methods:[],displayName:"Accordion"};var m,h,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`args => <NotificationBar {...args}>
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
  </NotificationBar>`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var p,f,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => <NotificationBarAccordion variant="info" details={<span>
        This is the details content that is <strong>hidden by default</strong>. It will expand when you click the 'Show
        more' button. You can include any additional information here that users might need but don't need to see
        immediately.
      </span>}>
    <span>
      This is the <strong>summary</strong> content that is always visible.
    </span>
  </NotificationBarAccordion>`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const U=["Default","Accordion"];export{n as Accordion,i as Default,U as __namedExportsOrder,P as default};
