import{r as g,j as s,i,c as k}from"./iframe-DVQN8M8q.js";import{a as C,P as _,b as F,c as O}from"./index-Bq5XD_db.js";import{I as H,c as R,R as L}from"./index-oQ6__ToB.js";import{a as U}from"./index-RSTP9jxP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-o5E_Q4b3.js";import"./index-Bfe-EAqM.js";import"./index-Drdm2mZ3.js";import"./index-BlYAF7zt.js";var w="Toggle",M=g.forwardRef((e,o)=>{const{pressed:t,defaultPressed:l,onPressedChange:a,...u}=e,[n,r]=C({prop:t,onChange:a,defaultProp:l??!1,caller:w});return s.jsx(_.button,{type:"button","aria-pressed":n,"data-state":n?"on":"off","data-disabled":e.disabled?"":void 0,...u,ref:o,onClick:F(e.onClick,()=>{e.disabled||r(!n)})})});M.displayName=w;var c="ToggleGroup",[E]=O(c,[R]),N=R(),I=i.forwardRef((e,o)=>{const{type:t,...l}=e;if(t==="single"){const a=l;return s.jsx(q,{...a,ref:o})}if(t==="multiple"){const a=l;return s.jsx(K,{...a,ref:o})}throw new Error(`Missing prop \`type\` expected on \`${c}\``)});I.displayName=c;var[D,z]=E(c),q=i.forwardRef((e,o)=>{const{value:t,defaultValue:l,onValueChange:a=()=>{},...u}=e,[n,r]=C({prop:t,defaultProp:l??"",onChange:a,caller:c});return s.jsx(D,{scope:e.__scopeToggleGroup,type:"single",value:i.useMemo(()=>n?[n]:[],[n]),onItemActivate:r,onItemDeactivate:i.useCallback(()=>r(""),[r]),children:s.jsx(A,{...u,ref:o})})}),K=i.forwardRef((e,o)=>{const{value:t,defaultValue:l,onValueChange:a=()=>{},...u}=e,[n,r]=C({prop:t,defaultProp:l??[],onChange:a,caller:c}),p=i.useCallback(m=>r((v=[])=>[...v,m]),[r]),G=i.useCallback(m=>r((v=[])=>v.filter(B=>B!==m)),[r]);return s.jsx(D,{scope:e.__scopeToggleGroup,type:"multiple",value:n,onItemActivate:p,onItemDeactivate:G,children:s.jsx(A,{...u,ref:o})})});I.displayName=c;var[Y,J]=E(c),A=i.forwardRef((e,o)=>{const{__scopeToggleGroup:t,disabled:l=!1,rovingFocus:a=!0,orientation:u,dir:n,loop:r=!0,...p}=e,G=N(t),m=U(n),v={role:"group",dir:m,...p};return s.jsx(Y,{scope:t,rovingFocus:a,disabled:l,children:a?s.jsx(L,{asChild:!0,...G,orientation:u,dir:m,loop:r,children:s.jsx(_.div,{...v,ref:o})}):s.jsx(_.div,{...v,ref:o})})}),V="ToggleGroupItem",W=i.forwardRef((e,o)=>{const t=z(V,e.__scopeToggleGroup),l=J(V,e.__scopeToggleGroup),a=N(e.__scopeToggleGroup),u=t.value.includes(e.value),n=l.disabled||e.disabled,r={...e,pressed:u,disabled:n},p=i.useRef(null);return l.rovingFocus?s.jsx(H,{asChild:!0,...a,focusable:!n,active:u,ref:p,children:s.jsx(j,{...r,ref:o})}):s.jsx(j,{...r,ref:o})});W.displayName=V;var j=i.forwardRef((e,o)=>{const{__scopeToggleGroup:t,value:l,...a}=e,u=z(V,t),n={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},r=u.type==="single"?n:void 0;return s.jsx(M,{...r,...a,ref:o,onPressedChange:p=>{p?u.onItemActivate(l):u.onItemDeactivate(l)}})}),Q=I,X=W;const P=k(Q)`
  display: inline-flex;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral[200]};
  box-shadow: ${({theme:e})=>e.boxShadow.sm};
  gap: 1px;
  overflow: hidden;
`,$=k(X)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({theme:e})=>e.colors.neutral[50]};
  color: ${({theme:e})=>e.colors.neutral[700]};
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  transition:
    background-color 150ms ease,
    color 150ms ease;

  font-size: ${({theme:e,$size:o})=>o==="sm"?e.typography.scale.sm.size:e.typography.scale.md.size};
  padding: ${({theme:e,$size:o})=>o==="sm"?`${e.spacing.xs} ${e.spacing.sm}`:`${e.spacing.sm} ${e.spacing.md}`};

  &:first-child {
    border-radius: ${({theme:e})=>e.borderRadius.md} 0 0 ${({theme:e})=>e.borderRadius.md};
  }

  &:last-child {
    border-radius: 0 ${({theme:e})=>e.borderRadius.md} ${({theme:e})=>e.borderRadius.md} 0;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({theme:e})=>e.colors.neutral[300]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.indigo[400]};
    outline-offset: -2px;
    z-index: 1;
  }

  &[data-state='on'] {
    background: ${({theme:e})=>e.colors.indigo[100]};
    color: ${({theme:e})=>e.colors.indigo[700]};
  }

  &:hover:not([data-state='on']):not(:disabled) {
    background: ${({theme:e})=>e.colors.indigo[50]};
    color: ${({theme:e})=>e.colors.indigo[600]};
  }
`,d=g.forwardRef(({items:e,size:o="md",...t},l)=>t.type==="single"?s.jsx(P,{ref:l,type:"single",value:t.value,onValueChange:t.onValueChange,children:e.map(a=>s.jsx($,{value:a.value,disabled:a.disabled,$size:o,children:a.label},a.value))}):s.jsx(P,{ref:l,type:"multiple",value:t.value,onValueChange:t.onValueChange,children:e.map(a=>s.jsx($,{value:a.value,disabled:a.disabled,$size:o,children:a.label},a.value))}));d.displayName="ToggleGroupV2";d.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupV2",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const{expect:S,userEvent:Z,within:ee}=__STORYBOOK_MODULE_TEST__,T=[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"}],ce={title:"Components/ToggleGroupV2",component:d,argTypes:{type:{description:"Selection mode.",control:{type:"select"},options:["single","multiple"]},size:{description:"Size scale.",control:{type:"select"},options:["sm","md"]}}},f=()=>{const[e,o]=g.useState("week");return s.jsx(d,{type:"single",items:T,value:e,onValueChange:o})},h=()=>{const[e,o]=g.useState(["day","week"]);return s.jsx(d,{type:"multiple",items:T,value:e,onValueChange:o})},b=()=>{const[e,o]=g.useState("day");return s.jsx(d,{type:"single",size:"sm",items:T,value:e,onValueChange:o})},x=()=>{const[e,o]=g.useState("day"),t=[{label:"Day",value:"day"},{label:"Week",value:"week",disabled:!0},{label:"Month",value:"month"}];return s.jsx(d,{type:"single",items:t,value:e,onValueChange:o})},y=()=>{const[e,o]=g.useState("day");return s.jsx(d,{type:"single",items:T,value:e,onValueChange:o})};y.play=async({canvasElement:e})=>{const o=ee(e),t=o.getByRole("radio",{name:"Day"}),l=o.getByRole("radio",{name:"Week"});S(t).toHaveAttribute("data-state","on"),S(l).toHaveAttribute("data-state","off"),await Z.click(l),S(l).toHaveAttribute("data-state","on")};f.__docgenInfo={description:"",methods:[],displayName:"Single"};h.__docgenInfo={description:"",methods:[],displayName:"Multiple"};b.__docgenInfo={description:"",methods:[],displayName:"Small"};x.__docgenInfo={description:"",methods:[],displayName:"WithDisabledItem"};y.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Interactions"};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('week');
  return <ToggleGroupV2 type="single" items={ITEMS} value={value} onValueChange={setValue} />;
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(['day', 'week']);
  return <ToggleGroupV2 type="multiple" items={ITEMS} value={value} onValueChange={setValue} />;
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('day');
  return <ToggleGroupV2 type="single" size="sm" items={ITEMS} value={value} onValueChange={setValue} />;
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('day');
  const items = [{
    label: 'Day',
    value: 'day'
  }, {
    label: 'Week',
    value: 'week',
    disabled: true
  }, {
    label: 'Month',
    value: 'month'
  }];
  return <ToggleGroupV2 type="single" items={items} value={value} onValueChange={setValue} />;
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('day');
  return <ToggleGroupV2 type="single" items={ITEMS} value={value} onValueChange={setValue} />;
}`,...y.parameters?.docs?.source}}};const de=["Single","Multiple","Small","WithDisabledItem","Interactions"];export{y as Interactions,h as Multiple,f as Single,b as Small,x as WithDisabledItem,de as __namedExportsOrder,ce as default};
