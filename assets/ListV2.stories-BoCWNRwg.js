import{c as b,s as u,r as l,j as t}from"./iframe-DVQN8M8q.js";import{S as f}from"./index-BRKMa_vs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Drdm2mZ3.js";const g=b.div`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: inherit;
`,E={standard:u`
    &:hover:not([aria-disabled='true']) {
      background-color: ${({theme:e})=>e.colors.neutral[100]};
    }
    &:active:not([aria-disabled='true']) {
      background-color: ${({theme:e})=>e.colors.neutral[200]};
    }
  `,platform:u`
    &:hover:not([aria-disabled='true']) {
      background-color: ${({theme:e})=>e.colors.slate[100]};
    }
    &:active:not([aria-disabled='true']) {
      background-color: ${({theme:e})=>e.colors.slate[200]};
    }
  `},y=b.div`
  position: relative;
  padding: ${({theme:e})=>e.spacing.sm};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  border-radius: inherit;

  &:not(:last-child) {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[200]};
  }

  &:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  ${({$disabled:e})=>e&&u`
      color: ${({theme:r})=>r.colors.neutral[400]};
      outline: none;
    `}

  ${({$variant:e,$disabled:r})=>!r&&E[e]}
`,I=l.createContext(null),j=()=>{const e=l.useContext(I);if(!e)throw new Error("ListV2.Item must be rendered inside a ListV2 component");return e},p=l.forwardRef(({variant:e="standard",children:r,...d},s)=>{const m=l.useMemo(()=>({variant:e}),[e]);return t.jsx(I.Provider,{value:m,children:t.jsx(g,{ref:s,...d,children:r})})});p.displayName="ListV2";const v=l.forwardRef(({disabled:e=!1,asChild:r=!1,onClick:d,children:s,...m},V)=>{const{variant:L}=j(),x=r?f:"div";return t.jsx(y,{as:x,ref:V,$variant:L,$disabled:e,"aria-disabled":e||void 0,onClick:e?void 0:d,...m,children:s})});v.displayName="ListV2.Item";const i=Object.assign(p,{Item:v});p.__docgenInfo={description:"",methods:[],displayName:"ListV2",props:{variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'platform'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'platform'"}]},description:"Controls item hover and active colours.",defaultValue:{value:"'standard'",computed:!1}}}};const{expect:h,userEvent:w,within:_}=__STORYBOOK_MODULE_TEST__,$={title:"Components/ListV2",component:i,argTypes:{variant:{description:"Controls item hover and active colours.",control:{type:"select"},options:["standard","platform"]}},args:{variant:"standard"}},k=e=>t.jsx("div",{style:{width:320,border:"1px solid #E5E7EB",borderRadius:6,overflow:"hidden"},children:t.jsxs(i,{...e,children:[t.jsx(i.Item,{children:"First item"}),t.jsx(i.Item,{children:"Second item"}),t.jsx(i.Item,{children:"Third item"})]})}),c=k.bind({}),a=e=>t.jsx("div",{style:{width:320,border:"1px solid #E5E7EB",borderRadius:6,overflow:"hidden"},children:t.jsxs(i,{...e,children:[t.jsx(i.Item,{children:"First item"}),t.jsx(i.Item,{disabled:!0,children:"Disabled item"}),t.jsx(i.Item,{children:"Third item"})]})}),n=e=>t.jsx("div",{style:{width:320,border:"1px solid #E5E7EB",borderRadius:6,overflow:"hidden"},children:t.jsxs(i,{...e,variant:"platform",children:[t.jsx(i.Item,{children:"First item"}),t.jsx(i.Item,{children:"Second item"}),t.jsx(i.Item,{children:"Third item"})]})}),o=e=>t.jsx("div",{style:{width:320,border:"1px solid #E5E7EB",borderRadius:6,overflow:"hidden"},children:t.jsxs(i,{...e,children:[t.jsx(i.Item,{"data-testid":"item-1",onClick:()=>{},children:"Clickable item"}),t.jsx(i.Item,{"data-testid":"item-disabled",disabled:!0,onClick:()=>{},children:"Disabled item"})]})});o.play=async({canvasElement:e})=>{const r=_(e),d=r.getByTestId("item-disabled");h(d).toHaveAttribute("aria-disabled","true");const s=r.getByTestId("item-1");await w.click(s),h(s).toBeInTheDocument()};a.__docgenInfo={description:"",methods:[],displayName:"WithDisabledItem"};n.__docgenInfo={description:"",methods:[],displayName:"PlatformVariant"};o.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Interactions"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  width: 320,
  border: '1px solid #E5E7EB',
  borderRadius: 6,
  overflow: 'hidden'
}}>
    <ListV2 {...args}>
      <ListV2.Item>First item</ListV2.Item>
      <ListV2.Item>Second item</ListV2.Item>
      <ListV2.Item>Third item</ListV2.Item>
    </ListV2>
  </div>`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div style={{
  width: 320,
  border: '1px solid #E5E7EB',
  borderRadius: 6,
  overflow: 'hidden'
}}>
    <ListV2 {...args}>
      <ListV2.Item>First item</ListV2.Item>
      <ListV2.Item disabled>Disabled item</ListV2.Item>
      <ListV2.Item>Third item</ListV2.Item>
    </ListV2>
  </div>`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div style={{
  width: 320,
  border: '1px solid #E5E7EB',
  borderRadius: 6,
  overflow: 'hidden'
}}>
    <ListV2 {...args} variant="platform">
      <ListV2.Item>First item</ListV2.Item>
      <ListV2.Item>Second item</ListV2.Item>
      <ListV2.Item>Third item</ListV2.Item>
    </ListV2>
  </div>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <div style={{
    width: 320,
    border: '1px solid #E5E7EB',
    borderRadius: 6,
    overflow: 'hidden'
  }}>
      <ListV2 {...args}>
        <ListV2.Item data-testid="item-1" onClick={() => {}}>
          Clickable item
        </ListV2.Item>
        <ListV2.Item data-testid="item-disabled" disabled onClick={() => {}}>
          Disabled item
        </ListV2.Item>
      </ListV2>
    </div>;
}`,...o.parameters?.docs?.source}}};const B=["Playground","WithDisabledItem","PlatformVariant","Interactions"];export{o as Interactions,n as PlatformVariant,c as Playground,a as WithDisabledItem,B as __namedExportsOrder,$ as default};
