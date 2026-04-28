import{c,j as a,r as n}from"./iframe-qSwtjqTo.js";import{S as i}from"./Icons-CJMPLFP0.js";import"./preload-helper-PPVm8Dsz.js";const d=c.div`
  border: 2px dashed ${({theme:e})=>e.colors.grayDark};
  border-radius: ${({theme:e})=>e.borderRadius.small};
  padding: ${({theme:e})=>e.spacing.small};
  font-size: ${({theme:e})=>e.font.size.text.small};
  line-height: ${({theme:e})=>e.font.lineHeight.text.small};
  color: ${({theme:e})=>e.colors.grayDark};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > svg {
    fill: ${({theme:e})=>e.colors.grayDark};
  }
`,s=({children:e})=>a.jsx(d,{children:e});s.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const u={title:"OccupierPlans/EmptyState",component:s},o=e=>a.jsx(s,{children:void 0,...e}),t=o.bind({});t.args={children:"simple text"};const r=o.bind({});r.args={children:a.jsxs(n.Fragment,{children:[a.jsx(i,{}),"with icon and a"," ",a.jsx("button",{type:"button",onClick:()=>console.log("click"),children:"button"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <EmptyState children={undefined} {...args} />",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <EmptyState children={undefined} {...args} />",...r.parameters?.docs?.source}}};const g=["Default","Icon"];export{t as Default,r as Icon,g as __namedExportsOrder,u as default};
