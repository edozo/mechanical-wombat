import{l as u,d as p,j as a}from"./iframe-rEZmXa4A.js";import"./preload-helper-C1FmrZbK.js";const b=p.button`
  height: 100%;
  width: 100%;
  color: white;
  ${({theme:o,variant:e})=>{const t=o.colors.aliases[e],n=o.colors.aliases[`${e}Light`],l=o.colors.aliases[`${e}Dark`];return u`
      border: 2px solid ${t};
      background-color: ${t};
      outline: none;
      &:hover {
        background-color: ${n};
        border: 2px solid ${n};
      }
      &:focus {
        background-color: ${n};
        border: 2px solid ${l};
        outline: none;
      }
      &:active {
        background-color: ${l};
      }
      &:disabled {
        background-color: ${o.colors.gray};
        border: 2px solid ${o.colors.gray};
        cursor: not-allowed;
      }
    `}};
`,s=o=>{const{children:e,...t}=o;return a.jsx(b,{type:"button",...t,children:e})};s.__docgenInfo={description:"",methods:[],displayName:"TableDownloadButton",props:{variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},background:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const T={title:"Components/TableDownloadButton",component:s},m=o=>a.jsx(s,{...o,children:a.jsx("p",{children:"Icon"})}),r=m.bind({});r.args={variant:"primary"};var d,c,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => <TableDownloadButton {...args}>
    <p>Icon</p>
  </TableDownloadButton>`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const $=["Controlled"];export{r as Controlled,$ as __namedExportsOrder,T as default};
