import{d as g,m,j as e,r as S}from"./iframe-ND4VGsRZ.js";import"./preload-helper-C1FmrZbK.js";const L=m`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`,w=g.div`
  width: ${i=>i.$width||"100%"};
  height: ${i=>i.$height||"12px"};
  border-radius: ${i=>i.theme.borderRadius[i.$radius||"standard"]};
  background: linear-gradient(
    90deg,
    ${i=>i.$color==="white"?i.theme.colors.white:i.theme.colors.grayLight} 25%,
    ${i=>i.$color==="white"?i.theme.colors.grayLight:i.theme.colors.grayLighter} 37%,
    ${i=>i.$color==="white"?i.theme.colors.white:i.theme.colors.grayLight} 63%
  );
  background-size: 400% 100%;
  animation: ${L} 2s ease-in-out infinite;
`,p=({width:i,height:o,radius:c,color:k})=>e.jsx(w,{$width:i,$height:o,$radius:c,$color:k});p.__docgenInfo={description:"",methods:[],displayName:"SkeletonLine",props:{width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},radius:{required:!1,tsType:{name:"unknown"},description:""},color:{required:!1,tsType:{name:"union",raw:"'white' | 'grey'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"}]},description:""}}};const j=g.div`
  display: flex;
  flex-direction: column;
  gap: ${i=>i.theme.spacing[i.$gap||"xsmall"]};
`,x=({children:i,gap:o})=>e.jsx(j,{$gap:o,children:i});x.__docgenInfo={description:"",methods:[],displayName:"SkeletonGroup",props:{gap:{required:!1,tsType:{name:"unknown"},description:""}}};const n=({children:i})=>e.jsx(S.Fragment,{children:i});n.Line=p;n.Group=x;n.__docgenInfo={description:"",methods:[{name:"Line",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"height",value:{name:"string",required:!1}},{key:"radius",value:{name:"unknown",required:!1}},{key:"color",value:{name:"union",raw:"'white' | 'grey'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"}],required:!1}}]}}}],returns:null},{name:"Group",docblock:null,modifiers:["static"],params:[{name:"{ children, gap }: PropsWithChildren<{ gap?: keyof DefaultTheme['spacing'] }>",optional:!1,type:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:"{ gap?: keyof DefaultTheme['spacing'] }",signature:{properties:[{key:"gap",value:{name:"unknown",required:!1}}]}}],raw:"PropsWithChildren<{ gap?: keyof DefaultTheme['spacing'] }>",alias:"PropsWithChildren"}}],returns:null}],displayName:"Skeleton"};const f={title:"Components/Skeleton"},r=()=>e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),t=()=>e.jsxs(n.Group,{gap:"xlarge",children:[e.jsxs(n.Group,{gap:"large",children:[e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{gap:"large",children:[e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsxs(n.Group,{children:[e.jsx(n.Line,{}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"}),e.jsx(n.Line,{width:"60%"}),e.jsx(n.Line,{height:"20px",radius:"xlarge"})]}),e.jsx(n.Line,{width:"80%",height:"20px",radius:"xlarge"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"SkeletonBasicGroup"};t.__docgenInfo={description:"",methods:[],displayName:"SkeletonNestedGroup"};var a,s,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => <Skeleton.Group>
    <Skeleton.Line />
    <Skeleton.Line width="80%" height="20px" radius="xlarge" />
    <Skeleton.Line width="60%" />
    <Skeleton.Line height="20px" radius="xlarge" />
  </Skeleton.Group>`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,h,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Skeleton.Group gap="xlarge">
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
  </Skeleton.Group>`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const $=["SkeletonBasicGroup","SkeletonNestedGroup"];export{r as SkeletonBasicGroup,t as SkeletonNestedGroup,$ as __namedExportsOrder,f as default};
