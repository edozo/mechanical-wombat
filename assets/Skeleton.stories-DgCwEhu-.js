import{d as u,m as S,j as e,r as L}from"./iframe-rEZmXa4A.js";import"./preload-helper-C1FmrZbK.js";const m=S`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`,w=u.div`
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
  animation: ${m} 2s ease-in-out infinite;
`,g=({width:i,height:t,radius:c,color:k})=>e.jsx(w,{$width:i,$height:t,$radius:c,$color:k});g.__docgenInfo={description:"",methods:[],displayName:"SkeletonLine",props:{width:{required:!1,tsType:{name:"string"},description:"Width of the skeleton line (CSS value, e.g. '100%', '200px')."},height:{required:!1,tsType:{name:"string"},description:"Height of the skeleton line (CSS value)."},radius:{required:!1,tsType:{name:"unknown"},description:"Border radius token from the theme."},color:{required:!1,tsType:{name:"union",raw:"'white' | 'grey'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"}]},description:"Colour variant — defaults to grey."}}};const G=u.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:i,$gap:t})=>i.spacing[t||"xsmall"]};
`,x=({children:i,gap:t})=>e.jsx(G,{$gap:t,children:i});x.__docgenInfo={description:"",methods:[],displayName:"SkeletonGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Child skeleton elements to group together."},gap:{required:!1,tsType:{name:"unknown"},description:"Gap between skeleton items using a theme spacing token."}}};const n=({children:i})=>e.jsx(L.Fragment,{children:i});n.Line=g;n.Group=x;n.__docgenInfo={description:"",methods:[{name:"Line",docblock:null,modifiers:["static"],params:[{name:"{ width, height, radius, color }",optional:!1,type:null}],returns:null},{name:"Group",docblock:null,modifiers:["static"],params:[{name:"{ children, gap }",optional:!1,type:null}],returns:null}],displayName:"Skeleton"};const y={title:"Components/Skeleton"},r=()=>e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),o=()=>e.jsxs(n.Group,{gap:"xlarge",children:[e.jsxs(n.Group,{gap:"large",children:[e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{gap:"large",children:[e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"SkeletonBasicGroup"};o.__docgenInfo={description:"",methods:[],displayName:"SkeletonNestedGroup"};var s,a,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => <Skeleton.Group>
    <Skeleton.Line />
    <Skeleton.Line width="80%" height="20px" radius="xlarge" />
    <Skeleton.Line width="60%" />
    <Skeleton.Line height="20px" radius="xlarge" />
  </Skeleton.Group>`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,p,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Skeleton.Group gap="xlarge">
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
  </Skeleton.Group>`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const _=["SkeletonBasicGroup","SkeletonNestedGroup"];export{r as SkeletonBasicGroup,o as SkeletonNestedGroup,_ as __namedExportsOrder,y as default};
