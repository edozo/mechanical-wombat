import{r as c,j as a,c as C,s as g}from"./iframe-DVQN8M8q.js";import{a as H,P as y,b as j,c as U}from"./index-Bq5XD_db.js";import{R as Y,I as J,c as _}from"./index-oQ6__ToB.js";import{P as Q}from"./index-CaDlSjsI.js";import{a as X}from"./index-RSTP9jxP.js";import{u as Z}from"./index-BlYAF7zt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-o5E_Q4b3.js";import"./index-Bfe-EAqM.js";import"./index-Drdm2mZ3.js";var $="Tabs",[ee]=U($,[_]),A=_(),[ae,S]=ee($),D=c.forwardRef((e,n)=>{const{__scopeTabs:o,value:r,onValueChange:s,defaultValue:l,orientation:i="horizontal",dir:u,activationMode:p="automatic",...m}=e,b=X(u),[d,T]=H({prop:r,onChange:s,defaultProp:l??"",caller:$});return a.jsx(ae,{scope:o,baseId:Z(),value:d,onValueChange:T,orientation:i,dir:b,activationMode:p,children:a.jsx(y.div,{dir:b,"data-orientation":i,...m,ref:n})})});D.displayName=$;var L="TabsList",N=c.forwardRef((e,n)=>{const{__scopeTabs:o,loop:r=!0,...s}=e,l=S(L,o),i=A(o);return a.jsx(Y,{asChild:!0,...i,orientation:l.orientation,dir:l.dir,loop:r,children:a.jsx(y.div,{role:"tablist","aria-orientation":l.orientation,...s,ref:n})})});N.displayName=L;var E="TabsTrigger",P=c.forwardRef((e,n)=>{const{__scopeTabs:o,value:r,disabled:s=!1,...l}=e,i=S(E,o),u=A(o),p=B(i.baseId,r),m=F(i.baseId,r),b=r===i.value;return a.jsx(J,{asChild:!0,...u,focusable:!s,active:b,children:a.jsx(y.button,{type:"button",role:"tab","aria-selected":b,"aria-controls":m,"data-state":b?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:p,...l,ref:n,onMouseDown:j(e.onMouseDown,d=>{!s&&d.button===0&&d.ctrlKey===!1?i.onValueChange(r):d.preventDefault()}),onKeyDown:j(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&i.onValueChange(r)}),onFocus:j(e.onFocus,()=>{const d=i.activationMode!=="manual";!b&&!s&&d&&i.onValueChange(r)})})})});P.displayName=E;var k="TabsContent",O=c.forwardRef((e,n)=>{const{__scopeTabs:o,value:r,forceMount:s,children:l,...i}=e,u=S(k,o),p=B(u.baseId,r),m=F(u.baseId,r),b=r===u.value,d=c.useRef(b);return c.useEffect(()=>{const T=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(T)},[]),a.jsx(Q,{present:s||b,children:({present:T})=>a.jsx(y.div,{"data-state":b?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!T,id:m,tabIndex:0,...i,ref:n,style:{...e.style,animationDuration:d.current?"0s":void 0},children:T&&l})})});O.displayName=k;function B(e,n){return`${e}-trigger-${n}`}function F(e,n){return`${e}-content-${n}`}var te=D,ne=N,re=P,se=O;const oe=C(te)`
  display: flex;
  flex-direction: column;
`,ie={underline:g`
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[300]};
  `,pill:g`
    gap: ${({theme:e})=>e.spacing.xs};
    padding: ${({theme:e})=>e.spacing.xs};
    background: ${({theme:e})=>e.colors.neutral[100]};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
  `,boxed:g`
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[300]};
    gap: ${({theme:e})=>e.spacing.xs};
    padding: 0 ${({theme:e})=>e.spacing.sm};
  `,subtle:g`
    gap: ${({theme:e})=>e.spacing.xs};
  `},le=C(ne)`
  display: flex;

  ${({$stretch:e})=>e&&g`
      > button {
        flex: 1;
        justify-content: center;
      }
    `}

  ${({$appearance:e})=>ie[e]}
`,ce={underline:g`
    padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
    border-bottom: 2px solid transparent;
    color: ${({theme:e})=>e.colors.neutral[500]};
    margin-bottom: -1px;
    border-radius: 0;

    &[data-state='active'] {
      color: ${({theme:e})=>e.colors.neutral[900]};
      border-bottom-color: ${({theme:e})=>e.colors.indigo[600]};
    }

    &:hover:not([data-disabled]):not([data-state='active']) {
      color: ${({theme:e})=>e.colors.neutral[700]};
    }
  `,pill:g`
    padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.md};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    color: ${({theme:e})=>e.colors.neutral[600]};

    &[data-state='active'] {
      background: ${({theme:e})=>e.colors.neutral[50]};
      color: ${({theme:e})=>e.colors.neutral[900]};
      box-shadow: ${({theme:e})=>e.boxShadow.sm};
    }

    &:hover:not([data-disabled]):not([data-state='active']) {
      background: ${({theme:e})=>e.colors.neutral[200]};
      color: ${({theme:e})=>e.colors.neutral[900]};
    }
  `,boxed:g`
    padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
    border: 1px solid transparent;
    border-bottom: none;
    border-radius: ${({theme:e})=>e.borderRadius.md} ${({theme:e})=>e.borderRadius.md} 0 0;
    color: ${({theme:e})=>e.colors.neutral[500]};
    margin-bottom: -1px;

    &[data-state='active'] {
      background: ${({theme:e})=>e.colors.neutral[50]};
      border-color: ${({theme:e})=>e.colors.neutral[300]};
      border-bottom-color: ${({theme:e})=>e.colors.neutral[50]};
      color: ${({theme:e})=>e.colors.neutral[900]};
    }

    &:hover:not([data-disabled]):not([data-state='active']) {
      color: ${({theme:e})=>e.colors.neutral[700]};
      background: ${({theme:e})=>e.colors.neutral[100]};
    }
  `,subtle:g`
    padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.md};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    color: ${({theme:e})=>e.colors.neutral[500]};

    &[data-state='active'] {
      background: ${({theme:e})=>e.colors.neutral[200]};
      color: ${({theme:e})=>e.colors.neutral[900]};
    }

    &:hover:not([data-disabled]):not([data-state='active']) {
      background: ${({theme:e})=>e.colors.neutral[100]};
      color: ${({theme:e})=>e.colors.neutral[700]};
    }
  `},de=C(re)`
  display: inline-flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  white-space: nowrap;
  transition:
    color 150ms ease,
    background-color 150ms ease,
    border-color 150ms ease,
    box-shadow 150ms ease;

  &[data-disabled] {
    cursor: not-allowed;
    color: ${({theme:e})=>e.colors.neutral[300]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.indigo[400]};
    outline-offset: -2px;
  }

  ${({$appearance:e})=>ce[e]}
`,be=C(se)`
  padding: ${({theme:e})=>e.spacing.md};

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.indigo[400]};
    outline-offset: -2px;
  }
`,M=c.createContext(null),z=()=>{const e=c.useContext(M);if(!e)throw new Error("TabsV2 sub-components must be used inside a TabsV2 root");return e},I=c.forwardRef(({defaultValue:e,value:n,onValueChange:o,orientation:r="horizontal",appearance:s="underline",children:l,...i},u)=>{const p=c.useMemo(()=>({appearance:s}),[s]);return a.jsx(M.Provider,{value:p,children:a.jsx(oe,{ref:u,defaultValue:e,value:n,onValueChange:o,orientation:r,...i,children:l})})});I.displayName="TabsV2";const q=c.forwardRef(({stretch:e,children:n,...o},r)=>{const{appearance:s}=z();return a.jsx(le,{ref:r,$stretch:e,$appearance:s,...o,children:n})});q.displayName="TabsV2.List";const G=c.forwardRef(({value:e,disabled:n,children:o,...r},s)=>{const{appearance:l}=z();return a.jsx(de,{ref:s,value:e,disabled:n,$appearance:l,...r,children:o})});G.displayName="TabsV2.Trigger";const K=c.forwardRef(({value:e,children:n,...o},r)=>a.jsx(be,{ref:r,value:e,...o,children:n}));K.displayName="TabsV2.Content";const t=Object.assign(I,{List:q,Trigger:G,Content:K});I.__docgenInfo={description:"",methods:[],displayName:"TabsV2",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The tab value to activate on first render (uncontrolled)."},value:{required:!1,tsType:{name:"string"},description:"The controlled active tab value."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when the active tab changes."},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Tab orientation.",defaultValue:{value:"'horizontal'",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:"'underline' | 'pill' | 'boxed' | 'subtle'",elements:[{name:"literal",value:"'underline'"},{name:"literal",value:"'pill'"},{name:"literal",value:"'boxed'"},{name:"literal",value:"'subtle'"}]},description:"Visual style of the tab list and triggers.",defaultValue:{value:"'underline'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tab content."}}};const{expect:w,userEvent:R,within:ue}=__STORYBOOK_MODULE_TEST__,W=["underline","pill","boxed","subtle"],$e={title:"Components/TabsV2",component:t,argTypes:{defaultValue:{description:"Initially active tab value.",control:{type:"text"}},appearance:{description:"Visual style of the tab list and triggers.",control:{type:"select"},options:W}},args:{defaultValue:"tab1",appearance:"underline"}},ge=e=>a.jsxs(t,{...e,children:[a.jsxs(t.List,{children:[a.jsx(t.Trigger,{value:"tab1",children:"Overview"}),a.jsx(t.Trigger,{value:"tab2",children:"Details"}),a.jsx(t.Trigger,{value:"tab3",children:"Settings"})]}),a.jsx(t.Content,{value:"tab1",children:"Overview content"}),a.jsx(t.Content,{value:"tab2",children:"Details content"}),a.jsx(t.Content,{value:"tab3",children:"Settings content"})]}),f=ge.bind({}),h=()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:W.map(e=>a.jsxs("div",{children:[a.jsx("p",{style:{margin:"0 0 8px",fontFamily:"Inter, sans-serif",fontSize:12,color:"#6B7280"},children:e}),a.jsxs(t,{defaultValue:"tab1",appearance:e,children:[a.jsxs(t.List,{children:[a.jsx(t.Trigger,{value:"tab1",children:"Overview"}),a.jsx(t.Trigger,{value:"tab2",children:"Details"}),a.jsx(t.Trigger,{value:"tab3",children:"Settings"})]}),a.jsx(t.Content,{value:"tab1",children:"Overview content"}),a.jsx(t.Content,{value:"tab2",children:"Details content"}),a.jsx(t.Content,{value:"tab3",children:"Settings content"})]})]},e))}),x=e=>a.jsxs(t,{...e,children:[a.jsxs(t.List,{children:[a.jsx(t.Trigger,{value:"tab1",children:"Active"}),a.jsx(t.Trigger,{value:"tab2",disabled:!0,children:"Disabled"}),a.jsx(t.Trigger,{value:"tab3",children:"Another"})]}),a.jsx(t.Content,{value:"tab1",children:"Active tab content"}),a.jsx(t.Content,{value:"tab3",children:"Another tab content"})]}),V=e=>a.jsxs(t,{...e,children:[a.jsxs(t.List,{stretch:!0,children:[a.jsx(t.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(t.Trigger,{value:"tab2",children:"Tab 2"}),a.jsx(t.Trigger,{value:"tab3",children:"Tab 3"})]}),a.jsx(t.Content,{value:"tab1",children:"Tab 1 content"}),a.jsx(t.Content,{value:"tab2",children:"Tab 2 content"}),a.jsx(t.Content,{value:"tab3",children:"Tab 3 content"})]}),v=e=>a.jsxs(t,{...e,children:[a.jsxs(t.List,{children:[a.jsx(t.Trigger,{value:"tab1",children:"Tab 1"}),a.jsx(t.Trigger,{value:"tab2",children:"Tab 2"})]}),a.jsx(t.Content,{value:"tab1",children:a.jsx("span",{"data-testid":"content-1",children:"Content 1"})}),a.jsx(t.Content,{value:"tab2",children:a.jsx("span",{"data-testid":"content-2",children:"Content 2"})})]});v.play=async({canvasElement:e})=>{const n=ue(e);w(n.getByTestId("content-1")).toBeInTheDocument(),await R.click(n.getByRole("tab",{name:"Tab 2"})),w(n.getByTestId("content-2")).toBeInTheDocument(),await R.click(n.getByRole("tab",{name:"Tab 1"})),w(n.getByTestId("content-1")).toBeInTheDocument()};h.__docgenInfo={description:"",methods:[],displayName:"AppearanceComparison"};x.__docgenInfo={description:"",methods:[],displayName:"WithDisabledTab"};V.__docgenInfo={description:"",methods:[],displayName:"Stretched"};v.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Interactions"};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <TabsV2 {...args}>
    <TabsV2.List>
      <TabsV2.Trigger value="tab1">Overview</TabsV2.Trigger>
      <TabsV2.Trigger value="tab2">Details</TabsV2.Trigger>
      <TabsV2.Trigger value="tab3">Settings</TabsV2.Trigger>
    </TabsV2.List>
    <TabsV2.Content value="tab1">Overview content</TabsV2.Content>
    <TabsV2.Content value="tab2">Details content</TabsV2.Content>
    <TabsV2.Content value="tab3">Settings content</TabsV2.Content>
  </TabsV2>`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 32
}}>
    {APPEARANCES.map(appearance => <div key={appearance}>
        <p style={{
      margin: '0 0 8px',
      fontFamily: 'Inter, sans-serif',
      fontSize: 12,
      color: '#6B7280'
    }}>
          {appearance}
        </p>
        <TabsV2 defaultValue="tab1" appearance={appearance}>
          <TabsV2.List>
            <TabsV2.Trigger value="tab1">Overview</TabsV2.Trigger>
            <TabsV2.Trigger value="tab2">Details</TabsV2.Trigger>
            <TabsV2.Trigger value="tab3">Settings</TabsV2.Trigger>
          </TabsV2.List>
          <TabsV2.Content value="tab1">Overview content</TabsV2.Content>
          <TabsV2.Content value="tab2">Details content</TabsV2.Content>
          <TabsV2.Content value="tab3">Settings content</TabsV2.Content>
        </TabsV2>
      </div>)}
  </div>`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <TabsV2 {...args}>
    <TabsV2.List>
      <TabsV2.Trigger value="tab1">Active</TabsV2.Trigger>
      <TabsV2.Trigger value="tab2" disabled>
        Disabled
      </TabsV2.Trigger>
      <TabsV2.Trigger value="tab3">Another</TabsV2.Trigger>
    </TabsV2.List>
    <TabsV2.Content value="tab1">Active tab content</TabsV2.Content>
    <TabsV2.Content value="tab3">Another tab content</TabsV2.Content>
  </TabsV2>`,...x.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => <TabsV2 {...args}>
    <TabsV2.List stretch>
      <TabsV2.Trigger value="tab1">Tab 1</TabsV2.Trigger>
      <TabsV2.Trigger value="tab2">Tab 2</TabsV2.Trigger>
      <TabsV2.Trigger value="tab3">Tab 3</TabsV2.Trigger>
    </TabsV2.List>
    <TabsV2.Content value="tab1">Tab 1 content</TabsV2.Content>
    <TabsV2.Content value="tab2">Tab 2 content</TabsV2.Content>
    <TabsV2.Content value="tab3">Tab 3 content</TabsV2.Content>
  </TabsV2>`,...V.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <TabsV2 {...args}>
    <TabsV2.List>
      <TabsV2.Trigger value="tab1">Tab 1</TabsV2.Trigger>
      <TabsV2.Trigger value="tab2">Tab 2</TabsV2.Trigger>
    </TabsV2.List>
    <TabsV2.Content value="tab1">
      <span data-testid="content-1">Content 1</span>
    </TabsV2.Content>
    <TabsV2.Content value="tab2">
      <span data-testid="content-2">Content 2</span>
    </TabsV2.Content>
  </TabsV2>`,...v.parameters?.docs?.source}}};const je=["Playground","AppearanceComparison","WithDisabledTab","Stretched","Interactions"];export{h as AppearanceComparison,v as Interactions,f as Playground,V as Stretched,x as WithDisabledTab,je as __namedExportsOrder,$e as default};
