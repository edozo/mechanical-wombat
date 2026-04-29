import{r as o,j as s,c as E,s as S}from"./iframe-B_s_zxyq.js";import{a as q,P as R,b as A,c as H}from"./index-ByMoprPX.js";import{u as P}from"./index-DhjLS5mZ.js";import{u as F}from"./index-C_k0vlwa.js";import{u as U}from"./index-BKYOVJQf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cvv2XpWp.js";import"./index-mhk4LmpH.js";var y="Switch",[X]=H(y),[L,W]=X(y),V=o.forwardRef((e,a)=>{const{__scopeSwitch:t,name:c,checked:r,defaultChecked:p,required:i,disabled:d,value:u="on",onCheckedChange:x,form:l,...v}=e,[k,b]=o.useState(null),_=P(a,w=>b(w)),j=o.useRef(!1),z=k?l||!!k.closest("form"):!0,[g,$]=q({prop:r,defaultProp:p??!1,onChange:x,caller:y});return s.jsxs(L,{scope:t,checked:g,disabled:d,children:[s.jsx(R.button,{type:"button",role:"switch","aria-checked":g,"aria-required":i,"data-state":O(g),"data-disabled":d?"":void 0,disabled:d,value:u,...v,ref:_,onClick:A(e.onClick,w=>{$(B=>!B),z&&(j.current=w.isPropagationStopped(),j.current||w.stopPropagation())})}),z&&s.jsx(M,{control:k,bubbles:!j.current,name:c,value:u,checked:g,required:i,disabled:d,form:l,style:{transform:"translateX(-100%)"}})]})});V.displayName=y;var N="SwitchThumb",D=o.forwardRef((e,a)=>{const{__scopeSwitch:t,...c}=e,r=W(N,t);return s.jsx(R.span,{"data-state":O(r.checked),"data-disabled":r.disabled?"":void 0,...c,ref:a})});D.displayName=N;var K="SwitchBubbleInput",M=o.forwardRef(({__scopeSwitch:e,control:a,checked:t,bubbles:c=!0,...r},p)=>{const i=o.useRef(null),d=P(i,p),u=F(t),x=U(a);return o.useEffect(()=>{const l=i.current;if(!l)return;const v=window.HTMLInputElement.prototype,b=Object.getOwnPropertyDescriptor(v,"checked").set;if(u!==t&&b){const _=new Event("click",{bubbles:c});b.call(l,t),l.dispatchEvent(_)}},[u,t,c]),s.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...r,tabIndex:-1,ref:d,style:{...r.style,...x,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});M.displayName=K;function O(e){return e?"checked":"unchecked"}var Y=V,G=D;const J={sm:S`
    width: 36px;
    height: 20px;
  `,md:S`
    width: 44px;
    height: 24px;
  `},Q={sm:S`
    width: 16px;
    height: 16px;

    &[data-state='checked'] {
      transform: translateX(16px);
    }
  `,md:S`
    width: 20px;
    height: 20px;

    &[data-state='checked'] {
      transform: translateX(20px);
    }
  `},Z=E(Y)`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.round};
  background-color: ${({theme:e})=>e.colors.neutral[400]};
  cursor: pointer;
  padding: 2px;
  transition: background-color 200ms ease;

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.indigo[600]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.indigo[400]};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({$size:e})=>J[e]}
`,ee=E(G)`
  display: block;
  border-radius: ${({theme:e})=>e.borderRadius.round};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  box-shadow: ${({theme:e})=>e.boxShadow.sm};
  transition: transform 200ms ease;

  &[data-state='unchecked'] {
    transform: translateX(0);
  }

  ${({$size:e})=>Q[e]}
`,n=o.forwardRef(({checked:e,onCheckedChange:a,disabled:t=!1,size:c="md",id:r,...p},i)=>s.jsx(Z,{ref:i,id:r,checked:e,onCheckedChange:a,disabled:t,$size:c,...p,children:s.jsx(ee,{$size:c})}));n.displayName="SwitchV2";n.__docgenInfo={description:"",methods:[],displayName:"SwitchV2",props:{checked:{required:!0,tsType:{name:"boolean"},description:"Whether the switch is checked (controlled)."},onCheckedChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Called when the checked state changes."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the switch.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Size scale.",defaultValue:{value:"'md'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Associates the switch with a label element."},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name when no label element is present."}}};const{expect:T,userEvent:I,within:te}=__STORYBOOK_MODULE_TEST__,he={title:"Components/SwitchV2",component:n,argTypes:{checked:{description:"Whether the switch is on.",control:{type:"boolean"}},disabled:{description:"Disables the switch.",control:{type:"boolean"}},size:{description:"Size scale.",control:{type:"select"},options:["sm","md"]}},args:{size:"md",disabled:!1}},se=e=>{const[a,t]=o.useState(!1);return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("label",{htmlFor:"switch-story",style:{fontFamily:"Inter, sans-serif",fontSize:14},children:a?"On":"Off"}),s.jsx(n,{...e,id:"switch-story",checked:a,onCheckedChange:t})]})},C=se.bind({}),m=()=>{const[e,a]=o.useState(!1),[t,c]=o.useState(!0);return s.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[s.jsx(n,{size:"sm",checked:e,onCheckedChange:a,"aria-label":"Small switch"}),s.jsx(n,{size:"md",checked:t,onCheckedChange:c,"aria-label":"Medium switch"})]})},f=()=>s.jsxs("div",{style:{display:"flex",gap:16},children:[s.jsx(n,{checked:!1,onCheckedChange:()=>{},disabled:!0,"aria-label":"Disabled off"}),s.jsx(n,{checked:!0,onCheckedChange:()=>{},disabled:!0,"aria-label":"Disabled on"})]}),h=()=>{const[e,a]=o.useState(!1);return s.jsx(n,{checked:e,onCheckedChange:a,"aria-label":"Toggle"})};h.play=async({canvasElement:e})=>{const t=te(e).getByRole("switch");T(t).toHaveAttribute("data-state","unchecked"),await I.click(t),T(t).toHaveAttribute("data-state","checked"),await I.click(t),T(t).toHaveAttribute("data-state","unchecked")};m.__docgenInfo={description:"",methods:[],displayName:"Sizes"};f.__docgenInfo={description:"",methods:[],displayName:"Disabled"};h.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Interactions"};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  return <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8
  }}>
      <label htmlFor="switch-story" style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: 14
    }}>
        {checked ? 'On' : 'Off'}
      </label>
      <SwitchV2 {...args} id="switch-story" checked={checked} onCheckedChange={setChecked} />
    </div>;
}`,...C.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [smChecked, setSmChecked] = useState(false);
  const [mdChecked, setMdChecked] = useState(true);
  return <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <SwitchV2 size="sm" checked={smChecked} onCheckedChange={setSmChecked} aria-label="Small switch" />
      <SwitchV2 size="md" checked={mdChecked} onCheckedChange={setMdChecked} aria-label="Medium switch" />
    </div>;
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 16
}}>
    <SwitchV2 checked={false} onCheckedChange={() => {}} disabled aria-label="Disabled off" />
    <SwitchV2 checked onCheckedChange={() => {}} disabled aria-label="Disabled on" />
  </div>`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <SwitchV2 checked={checked} onCheckedChange={setChecked} aria-label="Toggle" />;
}`,...h.parameters?.docs?.source}}};const pe=["Playground","Sizes","Disabled","Interactions"];export{f as Disabled,h as Interactions,C as Playground,m as Sizes,pe as __namedExportsOrder,he as default};
