import{j as d}from"./iframe-Bp3xk_TS.js";import{L as a}from"./List-CEob2RD2.js";import"./preload-helper-C1FmrZbK.js";const u={title:"Components/List",component:a,argTypes:{onClick:{action:"clicked"}},parameters:{backgrounds:{default:"orange"}}},c=({children:m,...p})=>d.jsx(a,{...p,children:m.map(({node:b,disabled:L=!1})=>d.jsx(a.Item,{disabled:L,children:b},Math.random()))}),e=c.bind({});e.args={children:[{node:"First",disabled:!1},{node:"Second",disabled:!1},{node:"Third",disabled:!1}]};const s=c.bind({});s.args={children:[{node:"First",disabled:!1},{node:"Second",disabled:!0},{node:"Third",disabled:!1}]};var n,r,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
  </List>`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var t,i,l;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
  </List>`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const I=["Controlled","DisabledListItem"];export{e as Controlled,s as DisabledListItem,I as __namedExportsOrder,u as default};
