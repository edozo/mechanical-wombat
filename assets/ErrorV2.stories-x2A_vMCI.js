import{c as s,r as h,j as o}from"./iframe-DVQN8M8q.js";import{B as d}from"./ButtonV3-DHSwfsEp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRKMa_vs.js";import"./index-Drdm2mZ3.js";const u=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing["2xl"]};
`,f=s.p`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  /* No theme token above 4xl (40px); error code is intentionally oversized */
  font-size: 5rem;
  line-height: 1;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.indigo[900]};
  letter-spacing: ${({theme:e})=>e.typography.letterSpacing.tight};
`,x=s.p`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale["2xl"].size};
  line-height: ${({theme:e})=>e.typography.scale["2xl"].lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.indigo[900]};
`,v=s.p`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.md.size};
  line-height: ${({theme:e})=>e.typography.scale.md.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
  color: ${({theme:e})=>e.colors.neutral[500]};
`,V=s.div`
  margin-top: ${({theme:e})=>e.spacing.sm};
`,r=h.forwardRef(({code:e,title:m,description:p,action:l,...g},y)=>o.jsxs(u,{ref:y,...g,children:[e&&o.jsx(f,{children:e}),o.jsx(x,{children:m}),p&&o.jsx(v,{children:p}),l&&o.jsx(V,{children:l})]}));r.displayName="ErrorV2";r.__docgenInfo={description:"",methods:[],displayName:"ErrorV2",props:{code:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:'Error code displayed as the primary visual (e.g. 404, "500").'},title:{required:!0,tsType:{name:"string"},description:"Short error title shown below the code."},description:{required:!1,tsType:{name:"string"},description:"Supplementary description providing context or guidance."},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"CTA slot — typically a button or link."}}};const j={title:"Components/ErrorV2",component:r,argTypes:{code:{description:'Large code or number displayed as the primary visual (e.g. "404", "500").',control:{type:"text"}},title:{description:"Short error title shown below the code.",control:{type:"text"}},description:{description:"Supplementary description providing context or guidance.",control:{type:"text"}}},args:{code:"404",title:"Page not found",description:"The page you're looking for doesn't exist or has moved."}},E=e=>o.jsx(r,{...e,action:o.jsx(d,{variant:"secondary",children:"Take me home"})}),c=E.bind({}),t=()=>o.jsx(r,{code:"404",title:"Page not found",description:"The page you're looking for doesn't exist or has moved.",action:o.jsx(d,{variant:"secondary",children:"Take me home"})}),n=()=>o.jsx(r,{code:"500",title:"Something went wrong",description:"We're having trouble on our end. Please try again in a moment.",action:o.jsx(d,{variant:"secondary",children:"Refresh the page"})}),i=()=>o.jsx(r,{title:"Access denied",description:"You don't have permission to view this page.",action:o.jsx(d,{variant:"secondary",children:"Go back"})}),a=()=>o.jsx(r,{code:"503",title:"Under maintenance",description:"We'll be back shortly. Thank you for your patience."});t.__docgenInfo={description:"",methods:[],displayName:"NotFound"};n.__docgenInfo={description:"",methods:[],displayName:"ServerError"};i.__docgenInfo={description:"",methods:[],displayName:"NoCode"};a.__docgenInfo={description:"",methods:[],displayName:"NoAction"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'args => <ErrorV2 {...args} action={<ButtonV3 variant="secondary">Take me home</ButtonV3>} />',...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <ErrorV2 code="404" title="Page not found" description="The page you're looking for doesn't exist or has moved." action={<ButtonV3 variant="secondary">Take me home</ButtonV3>} />`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <ErrorV2 code="500" title="Something went wrong" description="We're having trouble on our end. Please try again in a moment." action={<ButtonV3 variant="secondary">Refresh the page</ButtonV3>} />`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <ErrorV2 title="Access denied" description="You don't have permission to view this page." action={<ButtonV3 variant="secondary">Go back</ButtonV3>} />`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <ErrorV2 code="503" title="Under maintenance" description="We'll be back shortly. Thank you for your patience." />`,...a.parameters?.docs?.source}}};const w=["Playground","NotFound","ServerError","NoCode","NoAction"];export{a as NoAction,i as NoCode,t as NotFound,c as Playground,n as ServerError,w as __namedExportsOrder,j as default};
