import{c as l,j as o}from"./iframe-B_s_zxyq.js";import{L as a}from"./List-r2iT5NTy.js";import"./preload-helper-PPVm8Dsz.js";const p=l.div`
  box-shadow: ${({theme:e})=>e.boxShadow.standard};
  background-color: ${({theme:e})=>e.colors.white};
  position: relative;
  display: inline-block;
  border-radius: ${({theme:e,radius:s})=>e.borderRadius[s||"standard"]};

  &:after {
    content: '';
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    right: 13px;
    border-bottom: 8px solid ${({theme:e})=>e.colors.white};
    top: -8px;
    bottom: auto;
  }
`,n=e=>{const{children:s,...d}=e;return o.jsx(p,{...d,children:s})};n.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{radius:{required:!1,tsType:{name:"union",raw:"'small' | 'standard' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'standard'"},{name:"literal",value:"'large'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const g={title:"Components/PopoverContent",argTypes:{onChange:{action:"changed"}},component:n},i=e=>o.jsx(n,{...e}),r=i.bind({});r.args={radius:"small",children:o.jsx("div",{style:{padding:"8px"},children:"This is my popoverContent"})};const t=i.bind({});t.args={children:o.jsxs(a,{children:[o.jsx(a.Item,{children:"Non-clicky item"}),o.jsx(a.Item,{disabled:!0,children:"Disabled item"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <PopoverContent {...args} />",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <PopoverContent {...args} />",...t.parameters?.docs?.source}}};const h=["Simple","ListContent"];export{t as ListContent,r as Simple,h as __namedExportsOrder,g as default};
