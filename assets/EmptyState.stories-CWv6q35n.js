import{d as p,j as a,r as u}from"./iframe-CAf_PyMu.js";import{S as g}from"./Icons-DX3p5fmT.js";import"./preload-helper-C1FmrZbK.js";const h=p.div`
  border: 2px dashed ${e=>e.theme.colors.grayDark};
  border-radius: ${e=>e.theme.borderRadius.small};
  padding: ${e=>e.theme.spacing.small};
  font-size: ${e=>e.theme.font.size.text.small};
  line-height: ${e=>e.theme.font.lineHeight.text.small};
  color: ${e=>e.theme.colors.grayDark};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > svg {
    fill: ${e=>e.theme.colors.grayDark};
  }
`,s=({children:e})=>a.jsx(h,{children:e});s.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"OccupierPlans/EmptyState",component:s},m=e=>a.jsx(s,{children:void 0,...e}),t=m.bind({});t.args={children:"simple text"};const r=m.bind({});r.args={children:a.jsxs(u.Fragment,{children:[a.jsx(g,{}),"with icon and a"," ",a.jsx("button",{type:"button",onClick:()=>console.log("click"),children:"button"})]})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"args => <EmptyState children={undefined} {...args} />",...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <EmptyState children={undefined} {...args} />",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const E=["Default","Icon"];export{t as Default,r as Icon,E as __namedExportsOrder,S as default};
