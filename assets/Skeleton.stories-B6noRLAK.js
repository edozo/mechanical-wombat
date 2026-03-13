import{c as s,p as h,j as e,r as u}from"./iframe-Bo766xwD.js";import"./preload-helper-PPVm8Dsz.js";const g=h`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`,x=s.div`
  width: ${({$width:i})=>i||"100%"};
  height: ${({$height:i})=>i||"12px"};
  border-radius: ${({theme:i,$radius:t})=>i.borderRadius[t||"standard"]};
  background: linear-gradient(
    90deg,
    ${({$color:i,theme:t})=>i==="white"?t.colors.white:t.colors.grayLight} 25%,
    ${({$color:i,theme:t})=>i==="white"?t.colors.grayLight:t.colors.grayLighter} 37%,
    ${({$color:i,theme:t})=>i==="white"?t.colors.white:t.colors.grayLight} 63%
  );
  background-size: 400% 100%;
  animation: ${g} 2s ease-in-out infinite;
`,a=({width:i,height:t,radius:d,color:p})=>e.jsx(x,{$width:i,$height:t,$radius:d,$color:p});a.__docgenInfo={description:"",methods:[],displayName:"SkeletonLine",props:{width:{required:!1,tsType:{name:"string"},description:"Width of the skeleton line (CSS value, e.g. '100%', '200px')."},height:{required:!1,tsType:{name:"string"},description:"Height of the skeleton line (CSS value)."},radius:{required:!1,tsType:{name:"unknown"},description:"Border radius token from the theme."},color:{required:!1,tsType:{name:"union",raw:"'white' | 'grey'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"}]},description:"Colour variant — defaults to grey."}}};const c=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:i,$gap:t})=>i.spacing[t||"xsmall"]};
`,l=({children:i,gap:t})=>e.jsx(c,{$gap:t,children:i});l.__docgenInfo={description:"",methods:[],displayName:"SkeletonGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Child skeleton elements to group together."},gap:{required:!1,tsType:{name:"unknown"},description:"Gap between skeleton items using a theme spacing token."}}};const n=({children:i})=>e.jsx(u.Fragment,{children:i});n.Line=a;n.Group=l;n.__docgenInfo={description:"",methods:[{name:"Line",docblock:null,modifiers:["static"],params:[{name:"{ width, height, radius, color }",optional:!1,type:null}],returns:null},{name:"Group",docblock:null,modifiers:["static"],params:[{name:"{ children, gap }",optional:!1,type:null}],returns:null}],displayName:"Skeleton"};const L={title:"Components/Skeleton"},r=()=>e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),o=()=>e.jsxs(n.Group,{gap:"xlarge",children:[e.jsxs(n.Group,{gap:"large",children:[e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{gap:"large",children:[e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"SkeletonBasicGroup"};o.__docgenInfo={description:"",methods:[],displayName:"SkeletonNestedGroup"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Skeleton.Group>
    <Skeleton.Line />
    <Skeleton.Line width="80%" height="20px" radius="xlarge" />
    <Skeleton.Line width="60%" />
    <Skeleton.Line height="20px" radius="xlarge" />
  </Skeleton.Group>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Skeleton.Group gap="xlarge">
    <Skeleton.Group gap="large">
      <Skeleton.Group>
        <Skeleton.Line />
        <Skeleton.Line width="80%" height="20px" radius="xlarge" />
        <Skeleton.Line width="60%" />
        <Skeleton.Line height="20px" radius="xlarge" />
      </Skeleton.Group>
      <Skeleton.Group>
        <Skeleton.Line />
        <Skeleton.Line width="80%" height="20px" radius="xlarge" />
        <Skeleton.Line width="60%" />
        <Skeleton.Line height="20px" radius="xlarge" />
      </Skeleton.Group>
      <Skeleton.Line width="80%" height="20px" radius="xlarge" />
    </Skeleton.Group>
    <Skeleton.Group gap="large">
      <Skeleton.Group>
        <Skeleton.Line />
        <Skeleton.Line width="80%" height="20px" radius="xlarge" />
        <Skeleton.Line width="60%" />
        <Skeleton.Line height="20px" radius="xlarge" />
      </Skeleton.Group>
      <Skeleton.Group>
        <Skeleton.Line />
        <Skeleton.Line width="80%" height="20px" radius="xlarge" />
        <Skeleton.Line width="60%" />
        <Skeleton.Line height="20px" radius="xlarge" />
      </Skeleton.Group>
      <Skeleton.Line width="80%" height="20px" radius="xlarge" />
    </Skeleton.Group>
  </Skeleton.Group>`,...o.parameters?.docs?.source}}};const m=["SkeletonBasicGroup","SkeletonNestedGroup"];export{r as SkeletonBasicGroup,o as SkeletonNestedGroup,m as __namedExportsOrder,L as default};
