import{c as i,r as g,j as t}from"./iframe-DVQN8M8q.js";import{S as d}from"./search-Bs5aVp0y.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-VbWEJlGx.js";const h=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.xl};
  border: 2px dashed ${({theme:e})=>e.colors.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-align: center;
`,u=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.neutral[500]};
`,f=i.p`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.xl.size};
  line-height: ${({theme:e})=>e.typography.scale.xl.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.neutral[900]};
`,x=i.p`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.md.size};
  line-height: ${({theme:e})=>e.typography.scale.md.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
  color: ${({theme:e})=>e.colors.neutral[600]};
`,S=i.div`
  margin-top: ${({theme:e})=>e.spacing.xs};
`,o=g.forwardRef(({icon:e,title:l,description:c,action:p,...m},y)=>t.jsxs(h,{ref:y,...m,children:[e&&t.jsx(u,{children:e}),t.jsx(f,{children:l}),c&&t.jsx(x,{children:c}),p&&t.jsx(S,{children:p})]}));o.displayName="EmptyStateV2";o.__docgenInfo={description:"",methods:[],displayName:"EmptyStateV2",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon displayed above the title."},title:{required:!0,tsType:{name:"string"},description:"Primary message."},description:{required:!1,tsType:{name:"string"},description:"Supporting text below the title."},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Call-to-action rendered below the description."}}};const W={title:"Components/EmptyStateV2",component:o,argTypes:{title:{description:"Primary message.",control:{type:"text"}},description:{description:"Supporting text below the title.",control:{type:"text"}}},args:{title:"Nothing here yet",description:"Add some items to get started."}},j=e=>t.jsx(o,{...e}),n=j.bind({}),r=e=>t.jsx(o,{...e,icon:t.jsx(d,{size:40})}),s=e=>t.jsx(o,{...e,icon:t.jsx(d,{size:40}),action:t.jsx("button",{type:"button",children:"Add item"})}),a=()=>t.jsx(o,{title:"No results found"});r.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};s.__docgenInfo={description:"",methods:[],displayName:"WithAction"};a.__docgenInfo={description:"",methods:[],displayName:"TitleOnly"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <EmptyStateV2 {...args} />",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <EmptyStateV2 {...args} icon={<Search size={40} />} />",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'args => <EmptyStateV2 {...args} icon={<Search size={40} />} action={<button type="button">Add item</button>} />',...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'() => <EmptyStateV2 title="No results found" />',...a.parameters?.docs?.source}}};const R=["Playground","WithIcon","WithAction","TitleOnly"];export{n as Playground,a as TitleOnly,s as WithAction,r as WithIcon,R as __namedExportsOrder,W as default};
