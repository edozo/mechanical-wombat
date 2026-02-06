import{d as m,j as a,r as u}from"./iframe-CcAdSECF.js";import{S as g}from"./Icons-DoO34_EV.js";import"./preload-helper-C1FmrZbK.js";const x=m.div`
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
`,s=({children:e})=>a.jsx(x,{children:e});s.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"OccupierPlans/EmptyState",component:s},p=e=>a.jsx(s,{children:void 0,...e}),t=p.bind({});t.args={children:"simple text"};const r=p.bind({});r.args={children:a.jsxs(u.Fragment,{children:[a.jsx(g,{}),"with icon and a"," ",a.jsx("button",{type:"button",onClick:()=>console.log("click"),children:"button"})]})};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"args => <EmptyState children={undefined} {...args} />",...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <EmptyState children={undefined} {...args} />",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const E=["Default","Icon"];export{t as Default,r as Icon,E as __namedExportsOrder,S as default};
