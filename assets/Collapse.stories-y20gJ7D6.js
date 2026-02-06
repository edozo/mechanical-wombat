import{d as o,r as i,j as s}from"./iframe-CcAdSECF.js";import{u as R}from"./react-collapsed.esm-t8N6lqII.js";import"./preload-helper-C1FmrZbK.js";o.div`
  margin-bottom: ${({theme:e})=>e.spacing.small};
`;const T=o.div`
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.small};
`,v=o.button`
  padding: ${({theme:e})=>e.spacing.xsmall};
  background: transparent;
  border: none;
  text-align: left;
  font-family: ${({theme:e})=>e.font.family.secondary};
  font-weight: ${({theme:e})=>e.font.weight.semibold};
  display: block;
  cursor: pointer;
`,$=o.div`
  margin: ${({theme:e})=>e.spacing.xsmall};
`,n=({children:e,isOpen:d=!1,trigger:b,...y})=>{const[h,l]=i.useState(d),{getToggleProps:j,getCollapseProps:C}=R({isExpanded:h});return i.useEffect(()=>{let t=!0;return t&&l(d),()=>{t=!1}},[d,l]),s.jsxs(T,{...y,children:[s.jsx(v,{...j({onClick:()=>l(t=>!t)}),children:b}),s.jsx("div",{...C(),children:s.jsx($,{children:e})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N={title:"OccupierPlans/Collapse",component:n},x=e=>s.jsx(n,{...e}),r=x.bind({});r.args={trigger:"Trigger",children:s.jsxs("div",{style:{border:"3px dotted red"},children:["sadasdas",s.jsx("br",{}),"dasdasdasd"]})};const a=x.bind({});a.args={isOpen:!0,trigger:"Trigger",children:s.jsxs("div",{style:{border:"3px dotted red"},children:["sadasdas",s.jsx("br",{}),"dasdasdasd"]})};var c,p,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Collapse {...args} />",...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,m,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Collapse {...args} />",...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const _=["Default","Opened"];export{r as Default,a as Opened,_ as __namedExportsOrder,N as default};
