import{l as u,d as m,j as n}from"./iframe-CAf_PyMu.js";import"./preload-helper-C1FmrZbK.js";const p=m.button`
  height: 100%;
  width: 100%;
  color: white;
  ${o=>{const{variant:e}=o,t=o.theme.colors.aliases[e],a=o.theme.colors.aliases[`${e}Light`],l=o.theme.colors.aliases[`${e}Dark`];return u`
      border: 2px solid ${t};
      background-color: ${t};
      outline: none;
      &:hover {
        background-color: ${a};
        border: 2px solid ${a};
      }
      &:focus {
        background-color: ${a};
        border: 2px solid ${l};
        outline: none;
      }
      &:active {
        background-color: ${l};
      }
      &:disabled {
        background-color: ${o.theme.colors.gray};
        border: 2px solid ${o.theme.colors.gray};
        cursor: not-allowed;
      }
    `}};
`,s=o=>{const{children:e,...t}=o;return n.jsx(p,{type:"button",...t,children:e})};s.__docgenInfo={description:"",methods:[],displayName:"TableDownloadButton",props:{variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},background:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const y={title:"Components/TableDownloadButton",component:s},b=o=>n.jsx(s,{...o,children:n.jsx("p",{children:"Icon"})}),r=b.bind({});r.args={variant:"primary"};var c,d,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => <TableDownloadButton {...args}>
    <p>Icon</p>
  </TableDownloadButton>`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const T=["Controlled"];export{r as Controlled,T as __namedExportsOrder,y as default};
