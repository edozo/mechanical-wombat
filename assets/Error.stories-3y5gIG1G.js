import{d as o,j as e,b as q,r as p}from"./iframe-DHnWrkHs.js";import{H as M}from"./Typography-C5BQ67by.js";import{B as F,E as H}from"./Icons-0qYy0H7B.js";import{B as _}from"./Button-BAoklKme.js";import"./preload-helper-C1FmrZbK.js";const S=o.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0px;
`,h=({children:r})=>e.jsx(S,{children:r});h.__docgenInfo={description:"",methods:[],displayName:"Error",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const C=o.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,t=({children:r})=>e.jsx(C,{children:r});t.__docgenInfo={description:"",methods:[],displayName:"ErrorColumn",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const D=o.div`
  display: flex;
  border-radius: 50%;
  background-color: ${({theme:r,opacity:n})=>q(r.colors.skyBlueLighter,n)};
  padding: ${({padding:r})=>r};
  > div > svg {
    margin: 30px;
    width: 175px;
    height: 175px;
    display: flex;
  }
`,s=({children:r,opacity:n=1,padding:x="0px",...B})=>e.jsx(D,{opacity:n,padding:x,...B,children:r});s.__docgenInfo={description:"",methods:[],displayName:"Ring",props:{opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},padding:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'0px'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W=o.span`
  font-weight: 700;
  color: rgba(180, 238, 249, 0.5);
  font-size: 200px;
  text-align: center;
  line-height: 100%;
  margin-bottom: -110px;
`,z=o(M)`
  text-align: center;
  margin-bottom: 80px;
`,$=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: ${({theme:r})=>r.font.size.h4};
  line-height: ${({theme:r})=>r.font.lineHeight.text.xlarge};
  font-weight: ${({theme:r})=>r.font.weight.semibold};
`,l=({foregroundMessage:r,backgroundMessage:n,children:x})=>e.jsxs($,{children:[e.jsx(W,{children:n}),e.jsx(z,{children:r}),e.jsx("div",{children:x})]});l.__docgenInfo={description:"",methods:[],displayName:"ErrorInfo",props:{foregroundMessage:{required:!1,tsType:{name:"string"},description:""},backgroundMessage:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I=({children:r="This page doesn't exist or is no longer available, please go back home."})=>e.jsxs(p.Fragment,{children:[e.jsx(t,{children:e.jsx(l,{foregroundMessage:"Not found",backgroundMessage:"404",children:r})}),e.jsx(t,{children:e.jsx(s,{opacity:.2,padding:"56px",children:e.jsx(s,{opacity:.4,padding:"44px",children:e.jsx(s,{opacity:.7,padding:"18px",children:e.jsx(F,{fill:"#00B8D7"})})})})})]});I.__docgenInfo={description:"",methods:[],displayName:"NotFound",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:`"This page doesn't exist or is no longer available, please go back home."`,computed:!1}}}};const k=({children:r="This page doesn't exist or is no longer available, please go back home."})=>e.jsxs(p.Fragment,{children:[e.jsx(t,{children:e.jsx(l,{foregroundMessage:"Sorry",backgroundMessage:"Oops",children:r})}),e.jsx(t,{children:e.jsx(s,{opacity:.2,padding:"56px",children:e.jsx(s,{opacity:.4,padding:"44px",children:e.jsx(s,{opacity:.7,padding:"18px",children:e.jsx(H,{fill:"#00B8D7"})})})})})]});k.__docgenInfo={description:"",methods:[],displayName:"GenericError",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:`"This page doesn't exist or is no longer available, please go back home."`,computed:!1}}}};const U={title:"OccupierPlans/Error",component:h,argTypes:{}},g=r=>e.jsx("div",{style:{display:"flex",border:"1px dotted lightgray",minHeight:"1000px",maxWidth:"2000px",alignItems:"stretch",justifyContent:"stretch",flexDirection:"column"},children:e.jsx(h,{...r})}),i=g.bind({});i.args={children:e.jsxs(p.Fragment,{children:[e.jsx(t,{children:e.jsxs(l,{foregroundMessage:"I'm a teapot",backgroundMessage:"418",children:[e.jsxs("div",{style:{marginBottom:"50px"},children:[e.jsx("p",{children:"The server refuses to brew coffee because it is, permanently, a teapot."}),e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418",target:"_blank",rel:"noreferrer",children:"read more..."})]}),e.jsx(_,{children:"Take me to the coffee maker"})]})}),e.jsx(t,{children:e.jsx(s,{opacity:.2,padding:"56px",children:e.jsx(s,{opacity:.4,padding:"44px",children:e.jsx(s,{opacity:.7,padding:"18px",children:e.jsx("div",{style:{margin:"30px",width:"175px",height:"175px",display:"flex"},children:e.jsx("img",{src:"https://www.cornishware.co.uk/tco-images/unsafe/fit-in/500x500/filters:upscale():fill(white)/https://www.cornishware.co.uk/static/media/catalog/product/8/6/860036cb_blue_betty_teapot_large_49oz-140cl.png",alt:"teapot"})})})})})})]})};const a=g.bind({});a.args={children:e.jsx(p.Fragment,{children:e.jsx(t,{children:e.jsxs(l,{children:[e.jsx("div",{children:e.jsx("p",{children:"You do not have access to edozo admin, please contact someone that can change your permissions."})}),e.jsx(_,{children:"Logout"})]})})})};const d=g.bind({});d.args={children:e.jsx(I,{children:void 0})};const c=g.bind({});c.args={children:e.jsx(k,{children:void 0})};var m,u,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  border: '1px dotted lightgray',
  minHeight: '1000px',
  maxWidth: '2000px',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  flexDirection: 'column'
}}>
    <Error {...args} />
  </div>`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,j,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  border: '1px dotted lightgray',
  minHeight: '1000px',
  maxWidth: '2000px',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  flexDirection: 'column'
}}>
    <Error {...args} />
  </div>`,...(b=(j=a.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var v,R,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  border: '1px dotted lightgray',
  minHeight: '1000px',
  maxWidth: '2000px',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  flexDirection: 'column'
}}>
    <Error {...args} />
  </div>`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var N,w,T;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  border: '1px dotted lightgray',
  minHeight: '1000px',
  maxWidth: '2000px',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  flexDirection: 'column'
}}>
    <Error {...args} />
  </div>`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const Y=["Teapot","Permissions","NotFound","ErrorBoundary"];export{c as ErrorBoundary,d as NotFound,a as Permissions,i as Teapot,Y as __namedExportsOrder,U as default};
