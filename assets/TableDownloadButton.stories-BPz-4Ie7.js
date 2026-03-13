import{s as c,c as d,j as a}from"./iframe-Bo766xwD.js";import"./preload-helper-PPVm8Dsz.js";const i=d.button`
  height: 100%;
  width: 100%;
  color: white;
  ${({theme:o,variant:e})=>{const t=o.colors.aliases[e],n=o.colors.aliases[`${e}Light`],l=o.colors.aliases[`${e}Dark`];return c`
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
`,s=o=>{const{children:e,...t}=o;return a.jsx(i,{type:"button",...t,children:e})};s.__docgenInfo={description:"",methods:[],displayName:"TableDownloadButton",props:{variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},background:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const m={title:"Components/TableDownloadButton",component:s},u=o=>a.jsx(s,{...o,children:a.jsx("p",{children:"Icon"})}),r=u.bind({});r.args={variant:"primary"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <TableDownloadButton {...args}>
    <p>Icon</p>
  </TableDownloadButton>`,...r.parameters?.docs?.source}}};const g=["Controlled"];export{r as Controlled,g as __namedExportsOrder,m as default};
