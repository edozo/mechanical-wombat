import{d as o,r as i,j as s}from"./iframe-ERl_u88-.js";import{u as R}from"./react-collapsed.esm-B27TUXEH.js";import"./preload-helper-C1FmrZbK.js";o.div`
  margin-bottom: ${e=>e.theme.spacing.small};
`;const T=o.div`
  display: flex;
  flex-direction: column;
  background: ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.borderRadius.small};
`,v=o.button`
  padding: ${e=>e.theme.spacing.xsmall};
  background: transparent;
  border: none;
  text-align: left;
  font-family: ${e=>e.theme.font.family.secondary};
  font-weight: ${e=>e.theme.font.weight.semibold};
  display: block;
  cursor: pointer;
`,$=o.div`
  margin: ${e=>e.theme.spacing.xsmall};
`,n=({children:e,isOpen:d=!1,trigger:h,...b})=>{const[y,l]=i.useState(d),{getToggleProps:j,getCollapseProps:C}=R({isExpanded:y});return i.useEffect(()=>{let t=!0;return t&&l(d),()=>{t=!1}},[d,l]),s.jsxs(T,{...b,children:[s.jsx(v,{...j({onClick:()=>l(t=>!t)}),children:h}),s.jsx("div",{...C(),children:s.jsx($,{children:e})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N={title:"OccupierPlans/Collapse",component:n},x=e=>s.jsx(n,{...e}),r=x.bind({});r.args={trigger:"Trigger",children:s.jsxs("div",{style:{border:"3px dotted red"},children:["sadasdas",s.jsx("br",{}),"dasdasdasd"]})};const a=x.bind({});a.args={isOpen:!0,trigger:"Trigger",children:s.jsxs("div",{style:{border:"3px dotted red"},children:["sadasdas",s.jsx("br",{}),"dasdasdasd"]})};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Collapse {...args} />",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Collapse {...args} />",...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const _=["Default","Opened"];export{r as Default,a as Opened,_ as __namedExportsOrder,N as default};
