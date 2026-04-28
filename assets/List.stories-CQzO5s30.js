import{j as d}from"./iframe-qSwtjqTo.js";import{L as a}from"./List-_qWTAapv.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Components/List",component:a,argTypes:{onClick:{action:"clicked"}},parameters:{backgrounds:{default:"orange"}}},n=({children:r,...o})=>d.jsx(a,{...o,children:r.map(({node:t,disabled:i=!1})=>d.jsx(a.Item,{disabled:i,children:t},Math.random()))}),e=n.bind({});e.args={children:[{node:"First",disabled:!1},{node:"Second",disabled:!1},{node:"Third",disabled:!1}]};const s=n.bind({});s.args={children:[{node:"First",disabled:!1},{node:"Second",disabled:!0},{node:"Third",disabled:!1}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  children,
  ...args
}) => <List {...args}>
    {children.map(({
    node,
    disabled = false
  }: {
    node: React.ReactNode;
    disabled: boolean;
  }) => <List.Item disabled={disabled} key={Math.random()}>
        {node}
      </List.Item>)}
  </List>`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  children,
  ...args
}) => <List {...args}>
    {children.map(({
    node,
    disabled = false
  }: {
    node: React.ReactNode;
    disabled: boolean;
  }) => <List.Item disabled={disabled} key={Math.random()}>
        {node}
      </List.Item>)}
  </List>`,...s.parameters?.docs?.source}}};const b=["Controlled","DisabledListItem"];export{e as Controlled,s as DisabledListItem,b as __namedExportsOrder,p as default};
