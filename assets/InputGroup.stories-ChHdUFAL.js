import{s as G,c as d,j as t,r as j}from"./iframe-BoD0hbH1.js";import{aj as S}from"./Icons-DaUoRa__.js";import{T as _}from"./Typography-C1HRilCj.js";import"./preload-helper-PPVm8Dsz.js";const z=d.div`
  display: flex;
  width: 100%;
  border: ${({theme:e,$border:r})=>r&&`1px solid ${e.colors.grayDark}`};
  background: white;
  overflow: auto;
  ${({$radius:e})=>e==="standard"&&G`
      border-radius: 6px;
    `}
  ${({$radius:e})=>e==="round"&&G`
      border-radius: 50px;
    `};
`,N=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-color: ${({backgroundColor:e})=>e};
  svg {
    margin: 0 8px;
    width: ${({theme:e})=>e.icons.small};
    height: ${({theme:e})=>e.icons.small};
  }
`,T=({backgroundColor:e,children:r})=>t.jsx(N,{backgroundColor:e,children:r});T.__docgenInfo={description:"",methods:[],displayName:"Item",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const q=d.button`
  border: none;
  background: ${({theme:e})=>e.colors.grayLight};
  font-size: 16px;
  align-self: stretch;
  padding: 0 12px;
  border-radius: inherit;

  &:hover {
    background: ${({theme:e})=>e.colors.gray};
  }
`,C=({onClick:e,children:r})=>t.jsx(q,{onClick:e,children:r});C.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const v=j.createContext({}),E=()=>{const e=j.useContext(v);if(!e)throw new Error("InputGroup compound components cannot be rendered outside the InputGroup component");return e},H=d.input`
  flex: 1;
  border: 0;
  background: white;
  padding: ${({theme:e})=>e.spacing.xxsmall};
  font-size: ${({theme:e})=>e.font.size.text.base};
  line-height: ${({theme:e})=>e.font.lineHeight.text.base};

  &:focus {
    outline: none;
  }

  ${({theme:e,$inputSize:r})=>r==="large"&&G`
      padding: ${e.spacing.small};
    `}
`,k=()=>{const{placeholder:e,inputSize:r,id:o,value:a,onChange:s,type:y,min:f,max:W,step:M}=E();return t.jsx(H,{type:y,min:f,max:W,step:M,$inputSize:r,id:o,value:a,onChange:s,placeholder:e})};k.__docgenInfo={description:"",methods:[],displayName:"Input"};const L=d.textarea`
  flex: 1;
  border: 0;
  background: white;
  padding: ${({theme:e})=>e.spacing.xxsmall};
  font-size: ${({theme:e})=>e.font.size.text.base};
  line-height: ${({theme:e})=>e.font.lineHeight.text.base};

  &:focus {
    outline: none;
  }

  ${({theme:e,$inputSize:r})=>r==="large"&&G`
      padding: ${e.spacing.small};
    `}
`,$=()=>{const{placeholder:e,inputSize:r,id:o,value:a,onChange:s}=E();return t.jsx(L,{$inputSize:r,id:o,value:a,onChange:s,placeholder:e})};$.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const P={inputSize:"standard",radius:"standard",border:!0,placeholder:""},n=e=>{const r={...P,...e};return t.jsx(v.Provider,{value:r,children:t.jsx(z,{$border:r.border,$radius:r.radius,children:r.children})})};n.Button=C;n.Item=T;n.Input=k;n.Textarea=$;n.__docgenInfo={description:"",methods:[{name:"Button",docblock:null,modifiers:["static"],params:[{name:"{ onClick, children }",optional:!1,type:null}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ backgroundColor, children }",optional:!1,type:null}],returns:null},{name:"Input",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Textarea",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InputGroup"};const B=({value:e,placeholder:r,disabled:o,name:a,inputSize:s="large",onChange:y,reset:f})=>t.jsxs(n,{border:!1,inputSize:s,value:e,placeholder:r,disabled:o,name:a,onChange:y,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:e?t.jsx(n.Button,{onClick:f,children:"×"}):t.jsx(S,{})})]});B.__docgenInfo={description:"",methods:[],displayName:"GlobalSearch",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""},inputSize:{required:!1,tsType:{name:"union",raw:"'standard' | 'large'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'large'",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},reset:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const Z={title:"OccupierPlans/InputGroup",component:n,argTypes:{onChange:{action:"changed"},onClick:{action:"clicked"}},parameters:{backgrounds:{default:"light gray"}}},R=e=>t.jsx(n,{type:e.type,onChange:()=>null,...e,children:t.jsx(n.Input,{})}),V=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(S,{})})]}),K=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Item,{children:t.jsx(S,{})}),t.jsx(n.Input,{})]}),A=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(n.Button,{onClick:()=>console.log("123"),children:"×"})})]}),O=e=>t.jsxs(n,{placeholder:"Placeholder from the input props",onChange:()=>null,...e,children:[t.jsx(n.Item,{children:t.jsx(S,{})}),t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(n.Button,{onClick:()=>console.log("123"),children:"Submit"})})]}),w=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(_,{children:"item"})})]}),D=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Item,{backgroundColor:"red",children:t.jsx("strong",{style:{border:"1px solid green",margin:"0 36px"},children:t.jsx("em",{children:"item"})})}),t.jsx(n.Input,{})]}),F=()=>{const[e,r]=j.useState("");return t.jsx(B,{name:"global-search",placeholder:"Search by Plan name or Address",disabled:!1,value:e,onChange:o=>r(o.target.value),reset:()=>r("")})},J=e=>t.jsx(n,{onChange:()=>null,...e,children:t.jsx(n.Textarea,{})}),u=R.bind({});u.args={type:"number",min:-1,max:3,step:.01};const m=V.bind({}),g=K.bind({}),I=A.bind({}),h=O.bind({}),x=w.bind({}),b=D.bind({}),p=R.bind({});p.args={radius:"standard",inputSize:"standard",border:!0};const l=J.bind({});l.args={radius:"standard",inputSize:"standard",border:!0};const c=w.bind({});c.args={radius:"round"};const i=F.bind({});i.args={inputSize:"standard"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <InputGroup type={args.type} onChange={() => null} {...args}>
    <InputGroup.Input />
  </InputGroup>`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
  </InputGroup>`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
    <InputGroup.Input />
  </InputGroup>`,...g.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <InputGroup.Button onClick={() => console.log('123')}>&times;</InputGroup.Button>
    </InputGroup.Item>
  </InputGroup>`,...I.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <InputGroup placeholder="Placeholder from the input props" onChange={() => null} {...args}>
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
    <InputGroup.Input />
    <InputGroup.Item>
      <InputGroup.Button onClick={() => console.log('123')}>Submit</InputGroup.Button>
    </InputGroup.Item>
  </InputGroup>`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <TextSmall>item</TextSmall>
    </InputGroup.Item>
  </InputGroup>`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Item backgroundColor="red">
      <strong style={{
      border: '1px solid green',
      margin: '0 36px'
    }}>
        <em>item</em>
      </strong>
    </InputGroup.Item>
    <InputGroup.Input />
  </InputGroup>`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <InputGroup type={args.type} onChange={() => null} {...args}>
    <InputGroup.Input />
  </InputGroup>`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Textarea />
  </InputGroup>`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <TextSmall>item</TextSmall>
    </InputGroup.Item>
  </InputGroup>`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('');
  return <GlobalSearch name="global-search" placeholder="Search by Plan name or Address" disabled={false} value={value} onChange={event => setValue(event.target.value)} reset={() => setValue('')} />;
}`,...i.parameters?.docs?.source}}};const ee=["Number","WithIconEnd","WithIconStart","WithIconButton","KitchenSink","WithItemEnd","WithItemStart","WithoutItem","Textarea","RoundedItem","GlobalSearchExample"];export{i as GlobalSearchExample,h as KitchenSink,u as Number,c as RoundedItem,l as Textarea,I as WithIconButton,m as WithIconEnd,g as WithIconStart,x as WithItemEnd,b as WithItemStart,p as WithoutItem,ee as __namedExportsOrder,Z as default};
