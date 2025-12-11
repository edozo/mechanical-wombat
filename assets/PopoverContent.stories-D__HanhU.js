import{d as g,j as t}from"./iframe-C0PYgCJh.js";import{L as s}from"./List-RdR4B6NV.js";import"./preload-helper-C1FmrZbK.js";const x=g.div`
  box-shadow: ${e=>e.theme.boxShadow.standard};
  background-color: ${e=>e.theme.colors.white};
  position: relative;
  display: inline-block;
  border-radius: ${e=>e.theme.borderRadius[e.radius||"standard"]};

  &:after {
    content: '';
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    right: 13px;
    border-bottom: 8px solid ${e=>e.theme.colors.white};
    top: -8px;
    bottom: auto;
  }
`,a=e=>{const{children:u,...h}=e;return t.jsx(x,{...h,children:u})};a.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{radius:{required:!1,tsType:{name:"union",raw:"'small' | 'standard' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'standard'"},{name:"literal",value:"'large'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const y={title:"Components/PopoverContent",argTypes:{onChange:{action:"changed"}},component:a},m=e=>t.jsx(a,{...e}),r=m.bind({});r.args={radius:"small",children:t.jsx("div",{style:{padding:"8px"},children:"This is my popoverContent"})};const o=m.bind({});o.args={children:t.jsxs(s,{children:[t.jsx(s.Item,{children:"Non-clicky item"}),t.jsx(s.Item,{disabled:!0,children:"Disabled item"})]})};var n,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"args => <PopoverContent {...args} />",...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,p,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"args => <PopoverContent {...args} />",...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const f=["Simple","ListContent"];export{o as ListContent,r as Simple,f as __namedExportsOrder,y as default};
