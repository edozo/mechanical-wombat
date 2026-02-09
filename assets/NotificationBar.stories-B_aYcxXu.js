import{l as n,d as a,j as t,r as N}from"./iframe-0cFjXTKO.js";import{u as S}from"./react-collapsed.esm-DvPNwedH.js";import{W as R,U as I}from"./Icons-039RpJOZ.js";import"./preload-helper-C1FmrZbK.js";const y=a.div`
  width: 100%;
  border: 1px solid;
  display: flex;
  padding: ${({theme:e})=>e.spacing.xsmall} ${({theme:e})=>e.spacing.small};
  font-size: ${({theme:e})=>e.font.size.text.small};
  line-height: ${({theme:e})=>e.font.lineHeight.text.small};
  ${({theme:e,$variant:o})=>o==="info"&&n`
      border-color: ${e.colors.system.blue};
      background: ${e.colors.system.blueLighter};
      color: ${e.colors.system.blue};
    `}
  ${({theme:e,$variant:o})=>o==="alert"&&n`
      border-color: ${e.colors.system.red};
      background: ${e.colors.system.redLighter};
      color: ${e.colors.system.red};
    `}
  ${({theme:e,$variant:o})=>o==="warning"&&n`
      border-color: ${e.colors.system.yellowDarker};
      background: ${e.colors.system.yellowLighter};
      color: ${e.colors.system.yellowDarker};
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
  margin-left: ${({theme:e})=>e.spacing.small};
  font-size: ${({theme:e})=>e.font.size.text.small};
  line-height: ${({theme:e})=>e.font.lineHeight.text.small};
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  flex-shrink: 0;
  ${({theme:e,$variant:o})=>o==="info"&&n`
      color: ${e.colors.system.blue};
    `}
  ${({theme:e,$variant:o})=>o==="alert"&&n`
      color: ${e.colors.system.red};
    `}
  ${({theme:e,$variant:o})=>o==="warning"&&n`
      color: ${e.colors.system.yellowDarker};
    `}

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`,D=a.div`
  margin-top: ${({theme:e})=>e.spacing.xsmall};
  padding-top: ${({theme:e})=>e.spacing.xsmall};
  width: 100%;
`,A=a(R)`
  margin: 0 ${({theme:e})=>e.spacing.small};
  fill: ${({theme:e})=>e.colors.system.red};
`;a(I)`
  fill: ${({theme:e})=>e.colors.white};
`;const c=({children:e,variant:o="info",...r})=>t.jsx(y,{$variant:o,...r,children:e}),x=({variant:e="info",children:o,details:r,...w})=>{const[l,$]=N.useState(!1),{getCollapseProps:b,getToggleProps:v}=S({isExpanded:l}),d="notification-details-panel";return t.jsx(y,{$variant:e,...w,children:t.jsxs(k,{children:[t.jsxs(B,{children:[t.jsx(T,{children:o}),t.jsx(_,{$variant:e,"aria-expanded":l,"aria-controls":d,...v({onClick:()=>$(j=>!j)}),children:l?"Show less":"Show more"})]}),t.jsx("div",{id:d,...b(),children:t.jsx(D,{children:r})})]})})};c.__docgenInfo={description:"",methods:[],displayName:"NotificationBar",props:{variant:{required:!1,tsType:{name:"union",raw:"'alert' | 'info' | 'warning'",elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"NotificationBarAccordion",props:{variant:{required:!1,tsType:{name:"union",raw:"'alert' | 'info' | 'warning'",elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},details:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const P={title:"Components/NotificationBar",component:c},q=e=>t.jsx(c,{...e,children:t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(A,{}),t.jsx("span",{children:"You are currently using an outdated browser, this may cause issues using our site. Upgrade to a modern browser for a better experience"})]})}),s=q.bind({}),i=()=>t.jsx(x,{variant:"info",details:t.jsxs("span",{children:["This is the details content that is ",t.jsx("strong",{children:"hidden by default"}),". It will expand when you click the 'Show more' button. You can include any additional information here that users might need but don't need to see immediately."]}),children:t.jsxs("span",{children:["This is the ",t.jsx("strong",{children:"summary"})," content that is always visible."]})});i.__docgenInfo={description:"",methods:[],displayName:"Accordion"};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => <NotificationBar {...args}>
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
  </NotificationBar>`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => <NotificationBarAccordion variant="info" details={<span>
        This is the details content that is <strong>hidden by default</strong>. It will expand when you click the 'Show
        more' button. You can include any additional information here that users might need but don't need to see
        immediately.
      </span>}>
    <span>
      This is the <strong>summary</strong> content that is always visible.
    </span>
  </NotificationBarAccordion>`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const U=["Default","Accordion"];export{i as Accordion,s as Default,U as __namedExportsOrder,P as default};
