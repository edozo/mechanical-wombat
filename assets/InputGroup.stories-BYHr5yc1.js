import{l as x,d as i,j as t,r as y}from"./iframe-CAf_PyMu.js";import{h as b}from"./Icons-DX3p5fmT.js";import{T as he}from"./Typography-B8KoVLWG.js";import"./preload-helper-C1FmrZbK.js";const Ie=i.div`
  display: flex;
  width: 100%;
  border: ${e=>e.$border&&`1px solid ${e.theme.colors.grayDark}`};
  background: white;
  overflow: auto;
  ${e=>e.$radius==="standard"&&x`
      border-radius: 6px;
    `}
  ${e=>e.$radius==="round"&&x`
      border-radius: 50px;
    `};
`,ge=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-color: ${e=>e.backgroundColor};
  svg {
    margin: 0 8px;
    width: ${e=>e.theme.icons.small};
    height: ${e=>e.theme.icons.small};
  }
`,te=({backgroundColor:e,children:r})=>t.jsx(ge,{backgroundColor:e,children:r});te.__docgenInfo={description:"",methods:[],displayName:"Item",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const xe=i.button`
  border: none;
  background: ${e=>e.theme.colors.grayLight};
  font-size: 16px;
  align-self: stretch;
  padding: 0 12px;
  border-radius: inherit;

  &:hover {
    background: ${e=>e.theme.colors.gray};
  }
`,ne=({onClick:e,children:r})=>t.jsx(xe,{onClick:e,children:r});ne.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const re=y.createContext({}),oe=()=>{const e=y.useContext(re);if(!e)throw new Error("InputGroup compound components cannot be rendered outside the InputGroup component");return e},be=i.input`
  flex: 1;
  border: 0;
  background: white;
  padding: ${e=>e.theme.spacing.xxsmall};
  font-size: ${e=>e.theme.font.size.text.base};
  line-height: ${e=>e.theme.font.lineHeight.text.base};

  &:focus {
    outline: none;
  }

  ${e=>e.$inputSize==="large"&&x`
      padding: ${e.theme.spacing.small};
    `}
`,ae=()=>{const{placeholder:e,inputSize:r,id:o,value:G,onChange:S,type:ce,min:le,max:de,step:me}=oe();return t.jsx(be,{type:ce,min:le,max:de,step:me,$inputSize:r,id:o,value:G,onChange:S,placeholder:e})};ae.__docgenInfo={description:"",methods:[],displayName:"Input"};const Ge=i.textarea`
  flex: 1;
  border: 0;
  background: white;
  padding: ${e=>e.theme.spacing.xxsmall};
  font-size: ${e=>e.theme.font.size.text.base};
  line-height: ${e=>e.theme.font.lineHeight.text.base};

  &:focus {
    outline: none;
  }

  ${e=>e.$inputSize==="large"&&x`
      padding: ${e.theme.spacing.small};
    `}
`,se=()=>{const{placeholder:e,inputSize:r,id:o,value:G,onChange:S}=oe();return t.jsx(Ge,{$inputSize:r,id:o,value:G,onChange:S,placeholder:e})};se.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const Se={inputSize:"standard",radius:"standard",border:!0,placeholder:""},n=e=>{const r={...Se,...e};return t.jsx(re.Provider,{value:r,children:t.jsx(Ie,{$border:r.border,$radius:r.radius,children:r.children})})};n.Button=ne;n.Item=te;n.Input=ae;n.Textarea=se;n.__docgenInfo={description:"",methods:[{name:"Button",docblock:null,modifiers:["static"],params:[{name:"{ onClick, children }",optional:!1,type:null}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ backgroundColor, children }",optional:!1,type:null}],returns:null},{name:"Input",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Textarea",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"InputGroup"};const ue=e=>t.jsxs(n,{border:!1,inputSize:"large",...e,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:e.value?t.jsx(n.Button,{onClick:e.reset,children:"×"}):t.jsx(b,{})})]});ue.__docgenInfo={description:"",methods:[],displayName:"GlobalSearch",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},reset:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const we={title:"OccupierPlans/InputGroup",component:n,argTypes:{onChange:{action:"changed"},onClick:{action:"clicked"}},parameters:{backgrounds:{default:"light gray"}}},pe=e=>t.jsx(n,{type:e.type,onChange:()=>null,...e,children:t.jsx(n.Input,{})}),ye=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(b,{})})]}),fe=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Item,{children:t.jsx(b,{})}),t.jsx(n.Input,{})]}),je=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(n.Button,{onClick:()=>console.log("123"),children:"×"})})]}),Te=e=>t.jsxs(n,{placeholder:"Placeholder from the input props",onChange:()=>null,...e,children:[t.jsx(n.Item,{children:t.jsx(b,{})}),t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(n.Button,{onClick:()=>console.log("123"),children:"Submit"})})]}),ie=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Input,{}),t.jsx(n.Item,{children:t.jsx(he,{children:"item"})})]}),Ce=e=>t.jsxs(n,{onChange:()=>null,...e,children:[t.jsx(n.Item,{backgroundColor:"red",children:t.jsx("strong",{style:{border:"1px solid green",margin:"0 36px"},children:t.jsx("em",{children:"item"})})}),t.jsx(n.Input,{})]}),ve=()=>{const[e,r]=y.useState("");return t.jsx(ue,{name:"global-search",placeholder:"Search by Plan name or Address",disabled:!1,value:e,onChange:o=>r(o.target.value),reset:()=>r("")})},ke=e=>t.jsx(n,{onChange:()=>null,...e,children:t.jsx(n.Textarea,{})}),a=pe.bind({});a.args={type:"number",min:-1,max:3,step:.01};const c=ye.bind({}),l=fe.bind({}),d=je.bind({}),m=Te.bind({}),h=ie.bind({}),I=Ce.bind({}),s=pe.bind({});s.args={radius:"standard",inputSize:"standard",border:!0};const u=ke.bind({});u.args={radius:"standard",inputSize:"standard",border:!0};const p=ie.bind({});p.args={radius:"round"};const g=ve.bind({});var f,j,T;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => <InputGroup type={args.type} onChange={() => null} {...args}>
    <InputGroup.Input />
  </InputGroup>`,...(T=(j=a.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var C,v,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
  </InputGroup>`,...(k=(v=c.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var E,$,B;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
    <InputGroup.Input />
  </InputGroup>`,...(B=($=l.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var R,w,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <InputGroup.Button onClick={() => console.log('123')}>&times;</InputGroup.Button>
    </InputGroup.Item>
  </InputGroup>`,...(W=(w=d.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var z,M,_;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`args => <InputGroup placeholder="Placeholder from the input props" onChange={() => null} {...args}>
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
    <InputGroup.Input />
    <InputGroup.Item>
      <InputGroup.Button onClick={() => console.log('123')}>Submit</InputGroup.Button>
    </InputGroup.Item>
  </InputGroup>`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var N,H,q;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <TextSmall>item</TextSmall>
    </InputGroup.Item>
  </InputGroup>`,...(q=(H=h.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var L,P,V;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Item backgroundColor="red">
      <strong style={{
      border: '1px solid green',
      margin: '0 36px'
    }}>
        <em>item</em>
      </strong>
    </InputGroup.Item>
    <InputGroup.Input />
  </InputGroup>`,...(V=(P=I.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var K,A,O;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`args => <InputGroup type={args.type} onChange={() => null} {...args}>
    <InputGroup.Input />
  </InputGroup>`,...(O=(A=s.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var D,F,J;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Textarea />
  </InputGroup>`,...(J=(F=u.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`args => <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <TextSmall>item</TextSmall>
    </InputGroup.Item>
  </InputGroup>`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('');
  return <GlobalSearch name="global-search" placeholder="Search by Plan name or Address" disabled={false} value={value} onChange={event => setValue(event.target.value)} reset={() => setValue('')} />;
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const We=["Number","WithIconEnd","WithIconStart","WithIconButton","KitchenSink","WithItemEnd","WithItemStart","WithoutItem","Textarea","RoundedItem","GlobalSearchExample"];export{g as GlobalSearchExample,m as KitchenSink,a as Number,p as RoundedItem,u as Textarea,d as WithIconButton,c as WithIconEnd,l as WithIconStart,h as WithItemEnd,I as WithItemStart,s as WithoutItem,We as __namedExportsOrder,we as default};
