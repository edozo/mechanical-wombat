import{c as h,p as k,j as e,r as g}from"./iframe-Ym7xYKuD.js";import"./preload-helper-PPVm8Dsz.js";const L=k`
  0%   { background-position: 100% 0; }
  100% { background-position: -100% 0; }
`,V=h.div`
  width: ${({$width:o})=>o??"100%"};
  height: ${({$height:o})=>o??"12px"};
  border-radius: ${({theme:o,$radius:t})=>o.borderRadius[t]};
  background: linear-gradient(
    90deg,
    ${({theme:o,$color:t})=>t==="light"?o.colors.neutral[100]:o.colors.neutral[200]} 25%,
    ${({theme:o,$color:t})=>t==="light"?o.colors.neutral[50]:o.colors.neutral[100]} 37%,
    ${({theme:o,$color:t})=>t==="light"?o.colors.neutral[100]:o.colors.neutral[200]} 63%
  );
  background-size: 400% 100%;
  animation: ${L} 2s ease-in-out infinite;
`,j=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o,$gap:t})=>o.spacing[t]};
`,x=g.forwardRef(({width:o,height:t,radius:l="md",color:p="default",...m},S)=>e.jsx(V,{ref:S,$width:o,$height:t,$radius:l,$color:p,...m}));x.displayName="SkeletonV2.Line";const u=g.forwardRef(({gap:o="xs",children:t,...l},p)=>e.jsx(j,{ref:p,$gap:o,...l,children:t}));u.displayName="SkeletonV2.Group";const c=({children:o})=>e.jsx(e.Fragment,{children:o});c.displayName="SkeletonV2";const i=Object.assign(c,{Line:x,Group:u});c.__docgenInfo={description:"",methods:[],displayName:"SkeletonV2",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"SkeletonV2.Line and SkeletonV2.Group elements."}}};const f={title:"Components/SkeletonV2",component:i},n=()=>e.jsxs("div",{style:{width:320,display:"flex",flexDirection:"column",gap:8},children:[e.jsx(i.Line,{}),e.jsx(i.Line,{width:"75%"}),e.jsx(i.Line,{width:"50%"})]}),s=()=>e.jsx("div",{style:{width:320},children:e.jsxs(i.Group,{gap:"sm",children:[e.jsx(i.Line,{height:"20px"}),e.jsx(i.Line,{width:"80%"}),e.jsx(i.Line,{width:"60%"})]})}),r=()=>e.jsx("div",{style:{width:320},children:e.jsxs(i.Group,{gap:"md",children:[e.jsx(i.Line,{height:"160px",radius:"md"}),e.jsxs(i.Group,{gap:"xs",children:[e.jsx(i.Line,{height:"20px",width:"70%"}),e.jsx(i.Line,{width:"90%"}),e.jsx(i.Line,{width:"60%"})]})]})}),d=()=>e.jsx("div",{style:{width:320,padding:24,background:"#4338CA",borderRadius:8},children:e.jsxs(i.Group,{gap:"sm",children:[e.jsx(i.Line,{color:"light",height:"20px",width:"70%"}),e.jsx(i.Line,{color:"light"}),e.jsx(i.Line,{color:"light",width:"80%"})]})}),a=()=>e.jsxs("div",{style:{width:320,display:"flex",flexDirection:"column",gap:8},children:[e.jsx(i.Line,{height:"8px"}),e.jsx(i.Line,{height:"12px"}),e.jsx(i.Line,{height:"16px"}),e.jsx(i.Line,{height:"24px"}),e.jsx(i.Line,{height:"40px"})]});n.__docgenInfo={description:"",methods:[],displayName:"Lines"};s.__docgenInfo={description:"",methods:[],displayName:"Grouped"};r.__docgenInfo={description:"",methods:[],displayName:"CardSkeleton"};d.__docgenInfo={description:"",methods:[],displayName:"LightVariant"};a.__docgenInfo={description:"",methods:[],displayName:"Sizes"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <div style={{
  width: 320,
  display: 'flex',
  flexDirection: 'column',
  gap: 8
}}>
    <SkeletonV2.Line />
    <SkeletonV2.Line width="75%" />
    <SkeletonV2.Line width="50%" />
  </div>`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <div style={{
  width: 320
}}>
    <SkeletonV2.Group gap="sm">
      <SkeletonV2.Line height="20px" />
      <SkeletonV2.Line width="80%" />
      <SkeletonV2.Line width="60%" />
    </SkeletonV2.Group>
  </div>`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  width: 320
}}>
    <SkeletonV2.Group gap="md">
      <SkeletonV2.Line height="160px" radius="md" />
      <SkeletonV2.Group gap="xs">
        <SkeletonV2.Line height="20px" width="70%" />
        <SkeletonV2.Line width="90%" />
        <SkeletonV2.Line width="60%" />
      </SkeletonV2.Group>
    </SkeletonV2.Group>
  </div>`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <div style={{
  width: 320,
  padding: 24,
  background: '#4338CA',
  borderRadius: 8
}}>
    <SkeletonV2.Group gap="sm">
      <SkeletonV2.Line color="light" height="20px" width="70%" />
      <SkeletonV2.Line color="light" />
      <SkeletonV2.Line color="light" width="80%" />
    </SkeletonV2.Group>
  </div>`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <div style={{
  width: 320,
  display: 'flex',
  flexDirection: 'column',
  gap: 8
}}>
    <SkeletonV2.Line height="8px" />
    <SkeletonV2.Line height="12px" />
    <SkeletonV2.Line height="16px" />
    <SkeletonV2.Line height="24px" />
    <SkeletonV2.Line height="40px" />
  </div>`,...a.parameters?.docs?.source}}};const G=["Lines","Grouped","CardSkeleton","LightVariant","Sizes"];export{r as CardSkeleton,s as Grouped,d as LightVariant,n as Lines,a as Sizes,G as __namedExportsOrder,f as default};
