import{d as h,j as o}from"./iframe-Bg_nxw4C.js";import{L as a}from"./List-Bpn0YOZH.js";import"./preload-helper-C1FmrZbK.js";const x=h.div`
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
`,n=e=>{const{children:s,...g}=e;return o.jsx(x,{...g,children:s})};n.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{radius:{required:!1,tsType:{name:"union",raw:"'small' | 'standard' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'standard'"},{name:"literal",value:"'large'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const y={title:"Components/PopoverContent",argTypes:{onChange:{action:"changed"}},component:n},u=e=>o.jsx(n,{...e}),r=u.bind({});r.args={radius:"small",children:o.jsx("div",{style:{padding:"8px"},children:"This is my popoverContent"})};const t=u.bind({});t.args={children:o.jsxs(a,{children:[o.jsx(a.Item,{children:"Non-clicky item"}),o.jsx(a.Item,{disabled:!0,children:"Disabled item"})]})};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <PopoverContent {...args} />",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <PopoverContent {...args} />",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const f=["Simple","ListContent"];export{t as ListContent,r as Simple,f as __namedExportsOrder,y as default};
