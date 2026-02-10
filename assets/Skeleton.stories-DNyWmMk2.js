import{d as u,m,j as e,r as S}from"./iframe-Bg_nxw4C.js";import"./preload-helper-C1FmrZbK.js";const L=m`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`,w=u.div`
  width: ${({$width:i})=>i||"100%"};
  height: ${({$height:i})=>i||"12px"};
  border-radius: ${({theme:i,$radius:r})=>i.borderRadius[r||"standard"]};
  background: linear-gradient(
    90deg,
    ${({$color:i,theme:r})=>i==="white"?r.colors.white:r.colors.grayLight} 25%,
    ${({$color:i,theme:r})=>i==="white"?r.colors.grayLight:r.colors.grayLighter} 37%,
    ${({$color:i,theme:r})=>i==="white"?r.colors.white:r.colors.grayLight} 63%
  );
  background-size: 400% 100%;
  animation: ${L} 2s ease-in-out infinite;
`,g=({width:i,height:r,radius:c,color:k})=>e.jsx(w,{$width:i,$height:r,$radius:c,$color:k});g.__docgenInfo={description:"",methods:[],displayName:"SkeletonLine",props:{width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},radius:{required:!1,tsType:{name:"unknown"},description:""},color:{required:!1,tsType:{name:"union",raw:"'white' | 'grey'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"}]},description:""}}};const j=u.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:i,$gap:r})=>i.spacing[r||"xsmall"]};
`,x=({children:i,gap:r})=>e.jsx(j,{$gap:r,children:i});x.__docgenInfo={description:"",methods:[],displayName:"SkeletonGroup",props:{gap:{required:!1,tsType:{name:"unknown"},description:""}}};const n=({children:i})=>e.jsx(S.Fragment,{children:i});n.Line=g;n.Group=x;n.__docgenInfo={description:"",methods:[{name:"Line",docblock:null,modifiers:["static"],params:[{name:`{
  width,
  height,
  radius,
  color,
}: {
  width?: string;
  height?: string;
  radius?: keyof DefaultTheme['borderRadius'];
  color?: 'white' | 'grey';
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
  width?: string;
  height?: string;
  radius?: keyof DefaultTheme['borderRadius'];
  color?: 'white' | 'grey';
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"height",value:{name:"string",required:!1}},{key:"radius",value:{name:"unknown",required:!1}},{key:"color",value:{name:"union",raw:"'white' | 'grey'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"}],required:!1}}]}}}],returns:null},{name:"Group",docblock:null,modifiers:["static"],params:[{name:"{ children, gap }: PropsWithChildren<{ gap?: keyof DefaultTheme['spacing'] }>",optional:!1,type:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:"{ gap?: keyof DefaultTheme['spacing'] }",signature:{properties:[{key:"gap",value:{name:"unknown",required:!1}}]}}],raw:"PropsWithChildren<{ gap?: keyof DefaultTheme['spacing'] }>",alias:"PropsWithChildren"}}],returns:null}],displayName:"Skeleton"};const f={title:"Components/Skeleton"},t=()=>e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),o=()=>e.jsxs(n.Group,{gap:"xlarge",children:[e.jsxs(n.Group,{gap:"large",children:[e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{gap:"large",children:[e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"})]})]});t.__docgenInfo={description:"",methods:[],displayName:"SkeletonBasicGroup"};o.__docgenInfo={description:"",methods:[],displayName:"SkeletonNestedGroup"};var a,s,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => <Skeleton.Group>
    <Skeleton.Line />
    <Skeleton.Line width="80%" height="20px" radius="xlarge" />
    <Skeleton.Line width="60%" />
    <Skeleton.Line height="20px" radius="xlarge" />
  </Skeleton.Group>`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,p,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Skeleton.Group gap="xlarge">
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
  </Skeleton.Group>`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const _=["SkeletonBasicGroup","SkeletonNestedGroup"];export{t as SkeletonBasicGroup,o as SkeletonNestedGroup,_ as __namedExportsOrder,f as default};
