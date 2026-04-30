import{c as d,s as I,r as u,j as t}from"./iframe-Ym7xYKuD.js";import{R as T,T as S,C as O}from"./index-uE2MoTWy.js";import{C as R}from"./chevron-down-RwfI6N7_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BTaSxaBx.js";import"./index-B17tC9T8.js";import"./index-DBFNr24N.js";import"./index-BbPyFltH.js";import"./index-B9qndMY0.js";import"./index-CFF3_kQT.js";import"./createLucideIcon-Btvlg0Xd.js";const j=d(T)`
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.neutral[50]};
  border-radius: ${({theme:e,$square:n})=>n?"0":e.borderRadius.md};
  overflow: hidden;
`,_=d(S)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.md.size};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.neutral[900]};
  text-align: left;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.indigo[400]};
    outline-offset: -2px;
  }
`,q=d.span`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.neutral[500]};
  transition: transform 200ms ease;

  ${({$open:e})=>e&&I`
      transform: rotate(180deg);
    `}
`,V=d(O)`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  overflow: hidden;
`,s=u.forwardRef(({open:e,defaultOpen:n=!1,onOpenChange:i,trigger:f,square:y=!1,children:h,...x},b)=>{const[v,w]=u.useState(n),p=e!==void 0?e:v,C=m=>{e===void 0&&w(m),i?.(m)};return t.jsxs(j,{ref:b,open:p,onOpenChange:C,$square:y,...x,children:[t.jsxs(_,{children:[f,t.jsx(q,{$open:p,children:t.jsx(R,{size:16})})]}),t.jsx(V,{children:h})]})});s.displayName="CollapseV2";s.__docgenInfo={description:"",methods:[],displayName:"CollapseV2",props:{open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Default open state for uncontrolled usage.",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called when open state changes."},trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Trigger element content (text or React node)."},square:{required:!1,tsType:{name:"boolean"},description:"Removes border radius — use when the panel is flush against browser or container edges.",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Collapsible panel content."}}};const{expect:c,userEvent:g,within:$}=__STORYBOOK_MODULE_TEST__,U={title:"Components/CollapseV2",component:s,argTypes:{trigger:{description:"Trigger label.",control:{type:"text"}},defaultOpen:{description:"Initially open.",control:{type:"boolean"}},square:{description:"Removes border radius for flush edge placement.",control:{type:"boolean"}}},args:{trigger:"Show details",defaultOpen:!1,square:!1}},z=e=>t.jsx("div",{style:{width:400},children:t.jsx(s,{...e,children:t.jsx("p",{style:{margin:0,fontFamily:"Inter, sans-serif",fontSize:14},children:"This is the collapsible content. It can contain any React node."})})}),l=z.bind({}),o=e=>t.jsx("div",{style:{width:400},children:t.jsx(s,{...e,defaultOpen:!0,trigger:"Details",children:t.jsx("p",{style:{margin:0,fontFamily:"Inter, sans-serif",fontSize:14},children:"Opened by default."})})}),r=e=>t.jsx("div",{style:{width:400},children:t.jsx(s,{...e,square:!0,trigger:"Show details",children:t.jsx("p",{style:{margin:0,fontFamily:"Inter, sans-serif",fontSize:14},children:"No border radius — sits flush against container or browser edges."})})}),a=e=>t.jsx("div",{style:{width:400},children:t.jsx(s,{...e,defaultOpen:!0,trigger:"Toggle content",children:t.jsx("p",{"data-testid":"content",style:{margin:0,fontFamily:"Inter, sans-serif",fontSize:14},children:"Hidden content revealed"})})});a.play=async({canvasElement:e})=>{const n=$(e),i=n.getByRole("button");c(n.getByTestId("content")).toBeInTheDocument(),await g.click(i),c(n.queryByTestId("content")).not.toBeInTheDocument(),await g.click(i),c(n.getByTestId("content")).toBeInTheDocument()};o.__docgenInfo={description:"",methods:[],displayName:"DefaultOpen"};r.__docgenInfo={description:"",methods:[],displayName:"Square"};a.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Interactions"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  width: 400
}}>
    <CollapseV2 {...args}>
      <p style={{
      margin: 0,
      fontFamily: 'Inter, sans-serif',
      fontSize: 14
    }}>
        This is the collapsible content. It can contain any React node.
      </p>
    </CollapseV2>
  </div>`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  width: 400
}}>
    <CollapseV2 {...args} defaultOpen trigger="Details">
      <p style={{
      margin: 0,
      fontFamily: 'Inter, sans-serif',
      fontSize: 14
    }}>Opened by default.</p>
    </CollapseV2>
  </div>`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  width: 400
}}>
    <CollapseV2 {...args} square trigger="Show details">
      <p style={{
      margin: 0,
      fontFamily: 'Inter, sans-serif',
      fontSize: 14
    }}>
        No border radius — sits flush against container or browser edges.
      </p>
    </CollapseV2>
  </div>`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div style={{
  width: 400
}}>
    <CollapseV2 {...args} defaultOpen trigger="Toggle content">
      <p data-testid="content" style={{
      margin: 0,
      fontFamily: 'Inter, sans-serif',
      fontSize: 14
    }}>
        Hidden content revealed
      </p>
    </CollapseV2>
  </div>`,...a.parameters?.docs?.source}}};const W=["Playground","DefaultOpen","Square","Interactions"];export{o as DefaultOpen,a as Interactions,l as Playground,r as Square,W as __namedExportsOrder,U as default};
