import{l as G,d,j as t,r as j}from"./iframe-0cFjXTKO.js";import{h as S}from"./Icons-039RpJOZ.js";import{T as ge}from"./Typography-Ahhe0RBs.js";import"./preload-helper-C1FmrZbK.js";const Ie=d.div`
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
`,he=d.div`
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
`,re=({backgroundColor:e,children:r})=>t.jsx(he,{backgroundColor:e,children:r});re.__docgenInfo={description:"",methods:[],displayName:"Item",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const xe=d.button`
  border: none;
  background: ${({theme:e})=>e.colors.grayLight};
  font-size: 16px;
  align-self: stretch;
  padding: 0 12px;
  border-radius: inherit;

  &:hover {
    background: ${({theme:e})=>e.colors.gray};
  }
`,oe=({onClick:e,children:r})=>t.jsx(xe,{onClick:e,children:r});oe.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ae=j.createContext({}),se=()=>{const e=j.useContext(ae);if(!e)throw new Error("InputGroup compound components cannot be rendered outside the InputGroup component");return e},be=d.input`
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
`,ue=()=>{const{placeholder:e,inputSize:r,id:o,value:a,onChange:s,type:y,min:f,max:de,step:me}=se();return t.jsx(be,{type:y,min:f,max:de,step:me,$inputSize:r,id:o,value:a,onChange:s,placeholder:e})};ue.__docgenInfo={description:"",methods:[],displayName:"Input"};const Ge=d.textarea`
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
`,pe=()=>{const{placeholder:e,inputSize:r,id:o,value:a,onChange:s}=se();return t.jsx(Ge,{$inputSize:r,id:o,value:a,onChange:s,placeholder:e})};pe.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const Se={inputSize:"standard",radius:"standard",border:!0,placeholder:""},n=e=>{const r={...Se,...e};return t.jsx(ae.Provider,{value:r,children:t.jsx(Ie,{$border:r.border,$radius:r.radius,children:r.children})})};n.Button=oe;n.Item=re;n.Input=ue;n.Textarea=pe;n.__docgenInfo={description:"",methods:[{name:"Button",docblock:null,modifiers:["static"],params:[{name:"{ onClick, children }",optional:!1,type:null}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ backgroundColor, children }",optional:!1,type:null}],returns:null},{name:"Input",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Textarea",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InputGroup"};const le=({value:e,placeholder:r,disabled:o,name:a,inputSize:s="large",onChange:y,reset:f})=>t.jsxs(n,{border:!1,inputSize:s,value:e,placeholder:r,disabled:o,name:a,onChange:y,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:e?t.jsx(n.Button,{onClick:f,children:"×"}):t.jsx(S,{})})]});le.__docgenInfo={description:"",methods:[],displayName:"GlobalSearch",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""},inputSize:{required:!1,tsType:{name:"union",raw:"'standard' | 'large'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'large'",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},reset:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const we={title:"OccupierPlans/InputGroup",component:n,argTypes:{onChange:{action:"changed"},onClick:{action:"clicked"}},parameters:{backgrounds:{default:"light gray"}}},ie=e=>t.jsx(n,{type:e.type,onChange:()=>null,...e,children:t.jsx(n.Input,{})}),ye=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(S,{})})]}),fe=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Item,{children:t.jsx(S,{})}),t.jsx(n.Input,{})]}),je=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(n.Button,{onClick:()=>console.log("123"),children:"×"})})]}),Te=e=>t.jsxs(n,{placeholder:"Placeholder from the input props",onChange:()=>null,...e,children:[t.jsx(n.Item,{children:t.jsx(S,{})}),t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(n.Button,{onClick:()=>console.log("123"),children:"Submit"})})]}),ce=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(ge,{children:"item"})})]}),Ce=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Item,{backgroundColor:"red",children:t.jsx("strong",{style:{border:"1px solid green",margin:"0 36px"},children:t.jsx("em",{children:"item"})})}),t.jsx(n.Input,{})]}),ve=()=>{const[e,r]=j.useState("");return t.jsx(le,{name:"global-search",placeholder:"Search by Plan name or Address",disabled:!1,value:e,onChange:o=>r(o.target.value),reset:()=>r("")})},Ee=e=>t.jsx(n,{onChange:()=>null,...e,children:t.jsx(n.Textarea,{})}),u=ie.bind({});u.args={type:"number",min:-1,max:3,step:.01};const m=ye.bind({}),g=fe.bind({}),I=je.bind({}),h=Te.bind({}),x=ce.bind({}),b=Ce.bind({}),p=ie.bind({});p.args={radius:"standard",inputSize:"standard",border:!0};const l=Ee.bind({});l.args={radius:"standard",inputSize:"standard",border:!0};const i=ce.bind({});i.args={radius:"round"};const c=ve.bind({});c.args={inputSize:"standard"};var T,C,v;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`args => <InputGroup type={args.type} onChange={() => null} {...args}>
    <InputGroup.Input />
  </InputGroup>`,...(v=(C=u.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var E,k,$;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
  </InputGroup>`,...($=(k=m.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var B,R,w;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
    <InputGroup.Input />
  </InputGroup>`,...(w=(R=g.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var W,M,_;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <InputGroup.Button onClick={() => console.log('123')}>&times;</InputGroup.Button>
    </InputGroup.Item>
  </InputGroup>`,...(_=(M=I.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var z,N,q;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`args => <InputGroup placeholder="Placeholder from the input props" onChange={() => null} {...args}>
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
    <InputGroup.Input />
    <InputGroup.Item>
      <InputGroup.Button onClick={() => console.log('123')}>Submit</InputGroup.Button>
    </InputGroup.Item>
  </InputGroup>`,...(q=(N=h.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var H,L,P;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <TextSmall>item</TextSmall>
    </InputGroup.Item>
  </InputGroup>`,...(P=(L=x.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var V,K,A;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Item backgroundColor="red">
      <strong style={{
      border: '1px solid green',
      margin: '0 36px'
    }}>
        <em>item</em>
      </strong>
    </InputGroup.Item>
    <InputGroup.Input />
  </InputGroup>`,...(A=(K=b.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var O,D,F;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`args => <InputGroup type={args.type} onChange={() => null} {...args}>
    <InputGroup.Input />
  </InputGroup>`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var J,Q,U;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Textarea />
  </InputGroup>`,...(U=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <TextSmall>item</TextSmall>
    </InputGroup.Item>
  </InputGroup>`,...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('');
  return <GlobalSearch name="global-search" placeholder="Search by Plan name or Address" disabled={false} value={value} onChange={event => setValue(event.target.value)} reset={() => setValue('')} />;
}`,...(ne=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const We=["Number","WithIconEnd","WithIconStart","WithIconButton","KitchenSink","WithItemEnd","WithItemStart","WithoutItem","Textarea","RoundedItem","GlobalSearchExample"];export{c as GlobalSearchExample,h as KitchenSink,u as Number,i as RoundedItem,l as Textarea,I as WithIconButton,m as WithIconEnd,g as WithIconStart,x as WithItemEnd,b as WithItemStart,p as WithoutItem,We as __namedExportsOrder,we as default};
