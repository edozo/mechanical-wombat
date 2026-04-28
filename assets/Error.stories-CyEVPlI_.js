import{c as o,j as e,a as j,r as x}from"./iframe-S_88VaOw.js";import{H as b}from"./Typography-CNz3SAjx.js";import{B as v,E as R}from"./Icons-Bthe_-3V.js";import{B as h}from"./Button-Drk57fQN.js";import"./preload-helper-PPVm8Dsz.js";const E=o.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0px;
`,m=({children:r})=>e.jsx(E,{children:r});m.__docgenInfo={description:"",methods:[],displayName:"Error",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N=o.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,t=({children:r})=>e.jsx(N,{children:r});t.__docgenInfo={description:"",methods:[],displayName:"ErrorColumn",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const w=o.div`
  display: flex;
  border-radius: 50%;
  background-color: ${({theme:r,opacity:n})=>j(r.colors.skyBlueLighter,n)};
  padding: ${({padding:r})=>r};
  > div > svg {
    margin: 30px;
    width: 175px;
    height: 175px;
    display: flex;
  }
`,s=({children:r,opacity:n=1,padding:g="0px",...y})=>e.jsx(w,{opacity:n,padding:g,...y,children:r});s.__docgenInfo={description:"",methods:[],displayName:"Ring",props:{opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},padding:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'0px'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T=o.span`
  font-weight: 700;
  color: rgba(180, 238, 249, 0.5);
  font-size: 200px;
  text-align: center;
  line-height: 100%;
  margin-bottom: -110px;
`,_=o(b)`
  text-align: center;
  margin-bottom: 80px;
`,I=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: ${({theme:r})=>r.font.size.h4};
  line-height: ${({theme:r})=>r.font.lineHeight.text.xlarge};
  font-weight: ${({theme:r})=>r.font.weight.semibold};
`,l=({foregroundMessage:r,backgroundMessage:n,children:g})=>e.jsxs(I,{children:[e.jsx(T,{children:n}),e.jsx(_,{children:r}),e.jsx("div",{children:g})]});l.__docgenInfo={description:"",methods:[],displayName:"ErrorInfo",props:{foregroundMessage:{required:!1,tsType:{name:"string"},description:""},backgroundMessage:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const u=({children:r="This page doesn't exist or is no longer available, please go back home."})=>e.jsxs(x.Fragment,{children:[e.jsx(t,{children:e.jsx(l,{foregroundMessage:"Not found",backgroundMessage:"404",children:r})}),e.jsx(t,{children:e.jsx(s,{opacity:.2,padding:"56px",children:e.jsx(s,{opacity:.4,padding:"44px",children:e.jsx(s,{opacity:.7,padding:"18px",children:e.jsx(v,{fill:"#00B8D7"})})})})})]});u.__docgenInfo={description:"",methods:[],displayName:"NotFound",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:`"This page doesn't exist or is no longer available, please go back home."`,computed:!1}}}};const f=({children:r="This page doesn't exist or is no longer available, please go back home."})=>e.jsxs(x.Fragment,{children:[e.jsx(t,{children:e.jsx(l,{foregroundMessage:"Sorry",backgroundMessage:"Oops",children:r})}),e.jsx(t,{children:e.jsx(s,{opacity:.2,padding:"56px",children:e.jsx(s,{opacity:.4,padding:"44px",children:e.jsx(s,{opacity:.7,padding:"18px",children:e.jsx(R,{fill:"#00B8D7"})})})})})]});f.__docgenInfo={description:"",methods:[],displayName:"GenericError",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:`"This page doesn't exist or is no longer available, please go back home."`,computed:!1}}}};const S={title:"OccupierPlans/Error",component:m,argTypes:{}},p=r=>e.jsx("div",{style:{display:"flex",border:"1px dotted lightgray",minHeight:"1000px",maxWidth:"2000px",alignItems:"stretch",justifyContent:"stretch",flexDirection:"column"},children:e.jsx(m,{...r})}),a=p.bind({});a.args={children:e.jsxs(x.Fragment,{children:[e.jsx(t,{children:e.jsxs(l,{foregroundMessage:"I'm a teapot",backgroundMessage:"418",children:[e.jsxs("div",{style:{marginBottom:"50px"},children:[e.jsx("p",{children:"The server refuses to brew coffee because it is, permanently, a teapot."}),e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418",target:"_blank",rel:"noreferrer",children:"read more..."})]}),e.jsx(h,{children:"Take me to the coffee maker"})]})}),e.jsx(t,{children:e.jsx(s,{opacity:.2,padding:"56px",children:e.jsx(s,{opacity:.4,padding:"44px",children:e.jsx(s,{opacity:.7,padding:"18px",children:e.jsx("div",{style:{margin:"30px",width:"175px",height:"175px",display:"flex"},children:e.jsx("img",{src:"https://www.cornishware.co.uk/tco-images/unsafe/fit-in/500x500/filters:upscale():fill(white)/https://www.cornishware.co.uk/static/media/catalog/product/8/6/860036cb_blue_betty_teapot_large_49oz-140cl.png",alt:"teapot"})})})})})})]})};const i=p.bind({});i.args={children:e.jsx(t,{children:e.jsxs(l,{children:[e.jsx("div",{children:e.jsx("p",{children:"You do not have access to edozo admin, please contact someone that can change your permissions."})}),e.jsx(h,{children:"Logout"})]})})};const d=p.bind({});d.args={children:e.jsx(u,{})};const c=p.bind({});c.args={children:e.jsx(f,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  border: '1px dotted lightgray',
  minHeight: '1000px',
  maxWidth: '2000px',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  flexDirection: 'column'
}}>
    <Error {...args} />
  </div>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  border: '1px dotted lightgray',
  minHeight: '1000px',
  maxWidth: '2000px',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  flexDirection: 'column'
}}>
    <Error {...args} />
  </div>`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  border: '1px dotted lightgray',
  minHeight: '1000px',
  maxWidth: '2000px',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  flexDirection: 'column'
}}>
    <Error {...args} />
  </div>`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  border: '1px dotted lightgray',
  minHeight: '1000px',
  maxWidth: '2000px',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  flexDirection: 'column'
}}>
    <Error {...args} />
  </div>`,...c.parameters?.docs?.source}}};const C=["Teapot","Permissions","NotFound","ErrorBoundary"];export{c as ErrorBoundary,d as NotFound,i as Permissions,a as Teapot,C as __namedExportsOrder,S as default};
