import{s as a,c as n,j as t,r as x}from"./iframe-S_88VaOw.js";import{u as w}from"./react-collapsed.esm-CxrfhaGV.js";import{ab as $,ad as b}from"./Icons-Bthe_-3V.js";import"./preload-helper-PPVm8Dsz.js";const p=n.div`
  width: 100%;
  border: 1px solid;
  display: flex;
  padding: ${({theme:e})=>e.spacing.xsmall} ${({theme:e})=>e.spacing.small};
  font-size: ${({theme:e})=>e.font.size.text.small};
  line-height: ${({theme:e})=>e.font.lineHeight.text.small};
  ${({theme:e,$variant:o})=>o==="info"&&a`
      border-color: ${e.colors.system.blue};
      background: ${e.colors.system.blueLighter};
      color: ${e.colors.system.blue};
    `}
  ${({theme:e,$variant:o})=>o==="alert"&&a`
      border-color: ${e.colors.system.red};
      background: ${e.colors.system.redLighter};
      color: ${e.colors.system.red};
    `}
  ${({theme:e,$variant:o})=>o==="warning"&&a`
      border-color: ${e.colors.system.yellowDarker};
      background: ${e.colors.system.yellowLighter};
      color: ${e.colors.system.yellowDarker};
    `}
`,v=n.div`
  flex: 1;
`,j=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,N=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,S=n.button`
  background: transparent;
  border: none;
  padding: 0;
  margin-left: ${({theme:e})=>e.spacing.small};
  font-size: ${({theme:e})=>e.font.size.text.small};
  line-height: ${({theme:e})=>e.font.lineHeight.text.small};
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  flex-shrink: 0;
  ${({theme:e,$variant:o})=>o==="info"&&a`
      color: ${e.colors.system.blue};
    `}
  ${({theme:e,$variant:o})=>o==="alert"&&a`
      color: ${e.colors.system.red};
    `}
  ${({theme:e,$variant:o})=>o==="warning"&&a`
      color: ${e.colors.system.yellowDarker};
    `}

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`,R=n.div`
  margin-top: ${({theme:e})=>e.spacing.xsmall};
  padding-top: ${({theme:e})=>e.spacing.xsmall};
  width: 100%;
`,I=n($)`
  margin: 0 ${({theme:e})=>e.spacing.small};
  fill: ${({theme:e})=>e.colors.system.red};
`;n(b)`
  fill: ${({theme:e})=>e.colors.white};
`;const c=({children:e,variant:o="info",...r})=>t.jsx(p,{$variant:o,...r,children:e}),m=({variant:e="info",children:o,details:r,...u})=>{const[l,f]=x.useState(!1),{getCollapseProps:g,getToggleProps:h}=w({isExpanded:l}),d="notification-details-panel";return t.jsx(p,{$variant:e,...u,children:t.jsxs(j,{children:[t.jsxs(N,{children:[t.jsx(v,{children:o}),t.jsx(S,{$variant:e,"aria-expanded":l,"aria-controls":d,...h({onClick:()=>f(y=>!y)}),children:l?"Show less":"Show more"})]}),t.jsx("div",{id:d,...g(),children:t.jsx(R,{children:r})})]})})};c.__docgenInfo={description:"",methods:[],displayName:"NotificationBar",props:{variant:{required:!1,tsType:{name:"union",raw:"'alert' | 'info' | 'warning'",elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"NotificationBarAccordion",props:{variant:{required:!1,tsType:{name:"union",raw:"'alert' | 'info' | 'warning'",elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},details:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const A={title:"Components/NotificationBar",component:c},T=e=>t.jsx(c,{...e,children:t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(I,{}),t.jsx("span",{children:"You are currently using an outdated browser, this may cause issues using our site. Upgrade to a modern browser for a better experience"})]})}),i=T.bind({}),s=()=>t.jsx(m,{variant:"info",details:t.jsxs("span",{children:["This is the details content that is ",t.jsx("strong",{children:"hidden by default"}),". It will expand when you click the 'Show more' button. You can include any additional information here that users might need but don't need to see immediately."]}),children:t.jsxs("span",{children:["This is the ",t.jsx("strong",{children:"summary"})," content that is always visible."]})});s.__docgenInfo={description:"",methods:[],displayName:"Accordion"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <NotificationBar {...args}>
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
  </NotificationBar>`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <NotificationBarAccordion variant="info" details={<span>
        This is the details content that is <strong>hidden by default</strong>. It will expand when you click the
        &apos;Show more&apos; button. You can include any additional information here that users might need but
        don&apos;t need to see immediately.
      </span>}>
    <span>
      This is the <strong>summary</strong> content that is always visible.
    </span>
  </NotificationBarAccordion>`,...s.parameters?.docs?.source}}};const q=["Default","Accordion"];export{s as Accordion,i as Default,q as __namedExportsOrder,A as default};
