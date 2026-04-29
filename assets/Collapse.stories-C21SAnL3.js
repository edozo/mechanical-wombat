import{c as o,r as i,j as s}from"./iframe-B_s_zxyq.js";import{u as x}from"./react-collapsed.esm-BjJLCKjU.js";import"./preload-helper-PPVm8Dsz.js";o.div`
  margin-bottom: ${({theme:e})=>e.spacing.small};
`;const b=o.div`
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.borderRadius.small};
`,y=o.button`
  padding: ${({theme:e})=>e.spacing.xsmall};
  background: transparent;
  border: none;
  text-align: left;
  font-family: ${({theme:e})=>e.font.family.secondary};
  font-weight: ${({theme:e})=>e.font.weight.semibold};
  display: block;
  cursor: pointer;
`,h=o.div`
  margin: ${({theme:e})=>e.spacing.xsmall};
`,n=({children:e,isOpen:d=!1,trigger:p,...g})=>{const[m,l]=i.useState(d),{getToggleProps:u,getCollapseProps:f}=x({isExpanded:m});return i.useEffect(()=>{let t=!0;return t&&l(d),()=>{t=!1}},[d,l]),s.jsxs(b,{...g,children:[s.jsx(y,{...u({onClick:()=>l(t=>!t)}),children:p}),s.jsx("div",{...f(),children:s.jsx(h,{children:e})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T={title:"Components/Collapse",component:n},c=e=>s.jsx(n,{...e}),r=c.bind({});r.args={trigger:"Trigger",children:s.jsxs("div",{style:{border:"3px dotted red"},children:["sadasdas",s.jsx("br",{}),"dasdasdasd"]})};const a=c.bind({});a.args={isOpen:!0,trigger:"Trigger",children:s.jsxs("div",{style:{border:"3px dotted red"},children:["sadasdas",s.jsx("br",{}),"dasdasdasd"]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Collapse {...args} />",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <Collapse {...args} />",...a.parameters?.docs?.source}}};const v=["Default","Opened"];export{r as Default,a as Opened,v as __namedExportsOrder,T as default};
