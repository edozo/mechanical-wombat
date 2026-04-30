import{s as h,c as m,r as a,j as t}from"./iframe-Ym7xYKuD.js";import{S as I}from"./search-D2kwJclu.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Btvlg0Xd.js";const _=m.div`
  display: flex;
  width: 100%;
  background: ${({theme:e})=>e.colors.neutral[50]};
  overflow: hidden;
  border: ${({theme:e,$border:r})=>r?`1px solid ${e.colors.neutral[400]}`:"none"};

  ${({$radius:e})=>e==="standard"&&h`
      border-radius: ${({theme:r})=>r.borderRadius.md};
    `}

  ${({$radius:e})=>e==="round"&&h`
      border-radius: ${({theme:r})=>r.borderRadius.round};
    `}

  &:focus-within {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.indigo[400]};
  }
`,v=m.input`
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.md.size};
  line-height: ${({theme:e})=>e.typography.scale.md.lineHeight};
  color: ${({theme:e})=>e.colors.neutral[900]};
  padding: ${({theme:e})=>e.spacing.sm};

  ${({$inputSize:e})=>e==="md"&&h`
      padding: ${({theme:r})=>r.spacing.md};
    `}

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral[500]};
  }

  &:focus-visible {
    outline: none;
  }
`,B=m.textarea`
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.md.size};
  line-height: ${({theme:e})=>e.typography.scale.md.lineHeight};
  color: ${({theme:e})=>e.colors.neutral[900]};
  padding: ${({theme:e})=>e.spacing.sm};
  resize: vertical;

  ${({$inputSize:e})=>e==="md"&&h`
      padding: ${({theme:r})=>r.spacing.md};
    `}

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral[500]};
  }

  &:focus-visible {
    outline: none;
  }
`,z=m.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border: 0;
  background: ${({theme:e})=>e.colors.neutral[200]};
  color: ${({theme:e})=>e.colors.neutral[700]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.md.size};
  cursor: pointer;
  white-space: nowrap;

  &:disabled {
    cursor: not-allowed;
    color: ${({theme:e})=>e.colors.neutral[400]};
  }

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.neutral[300]};
  }
`,T=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.sm};
  background: ${({$backgroundColor:e,theme:r})=>e??r.colors.neutral[200]};
  color: ${({theme:e})=>e.colors.neutral[600]};
  white-space: nowrap;
`,y=a.createContext(null),V=()=>{const e=a.useContext(y);if(!e)throw new Error("InputGroupV2 sub-components must be rendered inside InputGroupV2");return e},g=a.forwardRef(({radius:e="standard",inputSize:r="sm",border:o=!0,children:$,...w},b)=>{const j=a.useMemo(()=>({radius:e,inputSize:r,border:o}),[e,r,o]);return t.jsx(y.Provider,{value:j,children:t.jsx(_,{ref:b,$border:o,$radius:e,...w,children:$})})});g.displayName="InputGroupV2";const x=a.forwardRef((e,r)=>{const{inputSize:o}=V();return t.jsx(v,{ref:r,$inputSize:o,...e})});x.displayName="InputGroupV2.Input";const f=a.forwardRef((e,r)=>{const{inputSize:o}=V();return t.jsx(B,{ref:r,$inputSize:o,...e})});f.displayName="InputGroupV2.Textarea";const G=a.forwardRef((e,r)=>t.jsx(z,{ref:r,type:"button",...e}));G.displayName="InputGroupV2.Button";const S=a.forwardRef(({backgroundColor:e,...r},o)=>t.jsx(T,{ref:o,$backgroundColor:e,...r}));S.displayName="InputGroupV2.Item";const n=Object.assign(g,{Input:x,Textarea:f,Button:G,Item:S});g.__docgenInfo={description:"",methods:[],displayName:"InputGroupV2",props:{radius:{required:!1,tsType:{name:"union",raw:"'standard' | 'round'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'round'"}]},description:"Border radius style of the group.",defaultValue:{value:"'standard'",computed:!1}},inputSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Padding scale applied to Input and Textarea sub-components.",defaultValue:{value:"'sm'",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"Renders a border around the group.",defaultValue:{value:"true",computed:!1}}}};const{expect:R,userEvent:W,within:E}=__STORYBOOK_MODULE_TEST__,O={title:"Components/InputGroupV2",component:n,argTypes:{radius:{description:"Border radius style.",control:{type:"select"},options:["standard","round"]},inputSize:{description:"Padding scale for Input and Textarea.",control:{type:"select"},options:["sm","md"]},border:{description:"Show border around the group.",control:{type:"boolean"}}},args:{radius:"standard",inputSize:"sm",border:!0}},p=e=>t.jsxs(n,{...e,style:{width:320},children:[t.jsx(n.Input,{placeholder:"Search…"}),t.jsx(n.Item,{children:t.jsx(I,{size:16})})]}),u=e=>t.jsxs(n,{...e,style:{width:320},children:[t.jsx(n.Input,{placeholder:"Enter a value…"}),t.jsx(n.Button,{children:"Submit"})]}),d=e=>t.jsxs(n,{...e,style:{width:320},children:[t.jsx(n.Item,{children:t.jsx(I,{size:16})}),t.jsx(n.Input,{placeholder:"Search…"})]}),i=e=>t.jsxs(n,{...e,radius:"round",style:{width:320},children:[t.jsx(n.Input,{placeholder:"Search…"}),t.jsx(n.Item,{children:t.jsx(I,{size:16})})]}),c=e=>t.jsxs(n,{...e,inputSize:"md",style:{width:320},children:[t.jsx(n.Input,{placeholder:"Large input…"}),t.jsx(n.Button,{children:"Go"})]}),l=e=>t.jsxs(n,{...e,style:{width:320},children:[t.jsx(n.Textarea,{placeholder:"Write something…",rows:3}),t.jsx(n.Button,{children:"Send"})]}),s=e=>t.jsxs(n,{...e,style:{width:320},children:[t.jsx(n.Input,{"data-testid":"input",placeholder:"Type here…"}),t.jsx(n.Button,{"data-testid":"btn",children:"Search"})]});s.play=async({canvasElement:e})=>{const o=E(e).getByTestId("input");await W.type(o,"hello"),R(o).toHaveValue("hello")};p.__docgenInfo={description:"",methods:[],displayName:"WithIconEnd"};u.__docgenInfo={description:"",methods:[],displayName:"WithButton"};d.__docgenInfo={description:"",methods:[],displayName:"WithIconStart"};i.__docgenInfo={description:"",methods:[],displayName:"Round"};c.__docgenInfo={description:"",methods:[],displayName:"Large"};l.__docgenInfo={description:"",methods:[],displayName:"WithTextarea"};s.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Interactions"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <InputGroupV2 {...args} style={{
  width: 320
}}>
    <InputGroupV2.Input placeholder="Search…" />
    <InputGroupV2.Item>
      <Search size={16} />
    </InputGroupV2.Item>
  </InputGroupV2>`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <InputGroupV2 {...args} style={{
  width: 320
}}>
    <InputGroupV2.Input placeholder="Enter a value…" />
    <InputGroupV2.Button>Submit</InputGroupV2.Button>
  </InputGroupV2>`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <InputGroupV2 {...args} style={{
  width: 320
}}>
    <InputGroupV2.Item>
      <Search size={16} />
    </InputGroupV2.Item>
    <InputGroupV2.Input placeholder="Search…" />
  </InputGroupV2>`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <InputGroupV2 {...args} radius="round" style={{
  width: 320
}}>
    <InputGroupV2.Input placeholder="Search…" />
    <InputGroupV2.Item>
      <Search size={16} />
    </InputGroupV2.Item>
  </InputGroupV2>`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <InputGroupV2 {...args} inputSize="md" style={{
  width: 320
}}>
    <InputGroupV2.Input placeholder="Large input…" />
    <InputGroupV2.Button>Go</InputGroupV2.Button>
  </InputGroupV2>`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <InputGroupV2 {...args} style={{
  width: 320
}}>
    <InputGroupV2.Textarea placeholder="Write something…" rows={3} />
    <InputGroupV2.Button>Send</InputGroupV2.Button>
  </InputGroupV2>`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <InputGroupV2 {...args} style={{
  width: 320
}}>
    <InputGroupV2.Input data-testid="input" placeholder="Type here…" />
    <InputGroupV2.Button data-testid="btn">Search</InputGroupV2.Button>
  </InputGroupV2>`,...s.parameters?.docs?.source}}};const q=["WithIconEnd","WithButton","WithIconStart","Round","Large","WithTextarea","Interactions"];export{s as Interactions,c as Large,i as Round,u as WithButton,p as WithIconEnd,d as WithIconStart,l as WithTextarea,q as __namedExportsOrder,O as default};
