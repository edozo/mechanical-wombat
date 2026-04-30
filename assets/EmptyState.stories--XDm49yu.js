import{c as n,j as s,r as c}from"./iframe-DVQN8M8q.js";import{S as i}from"./Icons-BQUfchoK.js";import"./preload-helper-PPVm8Dsz.js";const d=n.div`
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
`,a=({children:e})=>s.jsx(d,{children:e});a.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const g={title:"Components/EmptyState",component:a},o=e=>s.jsx(a,{children:void 0,...e}),t=o.bind({});t.args={children:"simple text"};const r=o.bind({});r.args={children:s.jsxs(c.Fragment,{children:[s.jsx(i,{}),"with icon and a"," ",s.jsx("button",{type:"button",onClick:()=>console.log("click"),children:"button"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <EmptyState children={undefined} {...args} />",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <EmptyState children={undefined} {...args} />",...r.parameters?.docs?.source}}};const u=["Default","Icon"];export{t as Default,r as Icon,u as __namedExportsOrder,g as default};
