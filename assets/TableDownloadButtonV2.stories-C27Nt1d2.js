import{s as u,c as m,j as e}from"./iframe-Ym7xYKuD.js";import"./preload-helper-PPVm8Dsz.js";const y=(a,n)=>{const{indigo:o}=a.colors;return{primary:{main:o[900],light:o[700],dark:o[950]},secondary:{main:o[600],light:o[500],dark:o[700]}}[n]},g=m.button`
  height: 100%;
  width: 100%;
  color: white;
  font-family: ${({theme:a})=>a.typography.fontFamily.sans};
  font-size: ${({theme:a})=>a.typography.scale.sm.size};
  line-height: ${({theme:a})=>a.typography.scale.sm.lineHeight};
  font-weight: ${({theme:a})=>a.typography.fontWeight.medium};
  letter-spacing: ${({theme:a})=>a.typography.letterSpacing.normal};
  ${({theme:a,variant:n})=>{const{main:o,light:l,dark:p}=y(a,n);return u`
      border: 2px solid ${o};
      background-color: ${o};
      outline: none;
      &:hover {
        background-color: ${l};
        border: 2px solid ${l};
      }
      &:focus {
        background-color: ${l};
        border: 2px solid ${p};
        outline: none;
      }
      &:active {
        background-color: ${p};
      }
      &:disabled {
        background-color: ${a.colors.neutral[300]};
        border: 2px solid ${a.colors.neutral[300]};
        color: ${a.colors.neutral[500]};
        cursor: not-allowed;
      }
    `}};
`,r=a=>{const{children:n,...o}=a;return e.jsx(g,{type:"button",...o,children:n})};r.__docgenInfo={description:"",methods:[],displayName:"TableDownloadButtonV2",props:{variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},background:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const D={title:"Components/TableDownloadButtonV2",component:r,argTypes:{variant:{description:"Visual intent of the button.",control:{type:"select"},options:["primary","secondary"]},disabled:{description:"Disables the button and applies a muted appearance.",control:{type:"boolean"}}},args:{variant:"primary",disabled:!1}},b=a=>e.jsx(r,{...a,children:"Download"}),c=b.bind({}),t=a=>e.jsx(r,{...a,variant:"primary",children:"Download"}),s=a=>e.jsx(r,{...a,variant:"secondary",children:"Download"}),d=a=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{...a,variant:"primary",children:"Primary"}),e.jsx(r,{...a,variant:"secondary",children:"Secondary"})]}),i=a=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{...a,variant:"primary",disabled:!0,children:"Primary"}),e.jsx(r,{...a,variant:"secondary",disabled:!0,children:"Secondary"})]});t.__docgenInfo={description:"",methods:[],displayName:"Primary"};s.__docgenInfo={description:"",methods:[],displayName:"Secondary"};d.__docgenInfo={description:"",methods:[],displayName:"Variants"};i.__docgenInfo={description:"",methods:[],displayName:"Disabled"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <TableDownloadButtonV2 {...args}>Download</TableDownloadButtonV2>",...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <TableDownloadButtonV2 {...args} variant="primary">
    Download
  </TableDownloadButtonV2>`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <TableDownloadButtonV2 {...args} variant="secondary">
    Download
  </TableDownloadButtonV2>`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  gap: '8px'
}}>
    <TableDownloadButtonV2 {...args} variant="primary">
      Primary
    </TableDownloadButtonV2>
    <TableDownloadButtonV2 {...args} variant="secondary">
      Secondary
    </TableDownloadButtonV2>
  </div>`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  gap: '8px'
}}>
    <TableDownloadButtonV2 {...args} variant="primary" disabled>
      Primary
    </TableDownloadButtonV2>
    <TableDownloadButtonV2 {...args} variant="secondary" disabled>
      Secondary
    </TableDownloadButtonV2>
  </div>`,...i.parameters?.docs?.source}}};const T=["Playground","Primary","Secondary","Variants","Disabled"];export{i as Disabled,c as Playground,t as Primary,s as Secondary,d as Variants,T as __namedExportsOrder,D as default};
