import{c as n,s as t,r as f,j as a}from"./iframe-B_s_zxyq.js";import{R as q,T as D,C}from"./index-dGbQAGN5.js";import{X as N}from"./x-CypLQ_2x.js";import{C as I}from"./chevron-down-BWLPXZ50.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ByMoprPX.js";import"./index-Cvv2XpWp.js";import"./index-mhk4LmpH.js";import"./index-DhjLS5mZ.js";import"./index-CciVrY-V.js";import"./index-BmayEMoJ.js";import"./createLucideIcon-C64gVH1X.js";const V={info:t`
    background-color: ${({theme:e})=>e.colors.blue[50]};
    color: ${({theme:e})=>e.colors.blue[700]};
    border-color: ${({theme:e})=>e.colors.blue[200]};
  `,success:t`
    background-color: ${({theme:e})=>e.colors.teal[50]};
    color: ${({theme:e})=>e.colors.teal[700]};
    border-color: ${({theme:e})=>e.colors.teal[200]};
  `,warning:t`
    background-color: ${({theme:e})=>e.colors.status.warning[50]};
    color: ${({theme:e})=>e.colors.status.warning[700]};
    border-color: ${({theme:e})=>e.colors.status.warning[200]};
  `,danger:t`
    background-color: ${({theme:e})=>e.colors.status.danger[50]};
    color: ${({theme:e})=>e.colors.status.danger[700]};
    border-color: ${({theme:e})=>e.colors.status.danger[200]};
  `},z=n.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border: 1px solid;
  border-radius: ${({theme:e,$square:i})=>i?"0":e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};

  ${({$variant:e})=>V[e]}
`,k=n.div`
  flex: 1;
  min-width: 0;
`,$=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }
`,O=n(q)`
  border: 1px solid;
  border-radius: ${({theme:e,$square:i})=>i?"0":e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};

  ${({$variant:e})=>V[e]}
`,F=n.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
`,E=n.div`
  flex: 1;
  min-width: 0;
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
`,W=n(D)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-decoration: underline;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }
`,H=n.span`
  display: flex;
  align-items: center;
  transition: transform 200ms ease;

  ${({$open:e})=>e&&t`
      transform: rotate(180deg);
    `}
`,M=n(C)`
  padding: 0 ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
`,s=f.forwardRef(({variant:e="info",square:i=!1,onDismiss:h,children:y,...o},b)=>a.jsxs(z,{ref:b,$variant:e,$square:i,role:"status",...o,children:[a.jsx(k,{children:y}),h&&a.jsx($,{onClick:h,"aria-label":"Dismiss",children:a.jsx(N,{size:16})})]}));s.displayName="NotificationBarV2";const g=f.forwardRef(({variant:e="info",square:i=!1,details:h,onDismiss:y,open:o,defaultOpen:b=!1,onOpenChange:B,children:S,...j},R)=>{const[A,T]=f.useState(b),w=o!==void 0?o:A,_=x=>{o===void 0&&T(x),B?.(x)};return a.jsxs(O,{ref:R,$variant:e,$square:i,open:w,onOpenChange:_,...j,children:[a.jsxs(F,{children:[a.jsx(E,{children:S}),a.jsxs(W,{children:[w?"Show less":"Show more",a.jsx(H,{$open:w,children:a.jsx(I,{size:14})})]}),y&&a.jsx($,{onClick:y,"aria-label":"Dismiss",children:a.jsx(N,{size:16})})]}),a.jsx(M,{children:h})]})});g.displayName="NotificationBarV2Accordion";s.__docgenInfo={description:"",methods:[],displayName:"NotificationBarV2",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"Colour and icon intent.",defaultValue:{value:"'info'",computed:!1}},square:{required:!1,tsType:{name:"boolean"},description:"Removes border radius — use when the bar is flush against browser edges (e.g. top-of-page banners).",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dismiss button is clicked. Renders a dismiss button when provided."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Notification content."}}};g.__docgenInfo={description:"",methods:[],displayName:"NotificationBarV2Accordion",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"Colour and icon intent.",defaultValue:{value:"'info'",computed:!1}},square:{required:!1,tsType:{name:"boolean"},description:"Removes border radius — use when the bar is flush against browser edges (e.g. top-of-page banners).",defaultValue:{value:"false",computed:!1}},details:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Expandable detail content."},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dismiss button is clicked. Renders a dismiss button when provided."},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Default open state for uncontrolled usage.",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called when the open state changes."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Summary content shown in the collapsed state."}}};const{expect:U,within:Y}=__STORYBOOK_MODULE_TEST__,re={title:"Components/NotificationBarV2",component:s,argTypes:{variant:{description:"Colour and intent.",control:{type:"select"},options:["info","success","warning","danger"]}},args:{variant:"info"}},K=e=>a.jsx(s,{...e,children:"Your changes have been saved."}),v=K.bind({}),c=e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,width:480},children:[a.jsx(s,{...e,variant:"info",children:"Information message"}),a.jsx(s,{...e,variant:"success",children:"Success message"}),a.jsx(s,{...e,variant:"warning",children:"Warning message"}),a.jsx(s,{...e,variant:"danger",children:"Danger message"})]}),d=()=>{const[e,i]=f.useState(!0);return e?a.jsx(s,{variant:"info",onDismiss:()=>i(!1),children:"This notification can be dismissed."}):a.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:14},children:"Dismissed"})},l=()=>a.jsx("div",{style:{width:480},children:a.jsx(g,{variant:"warning",details:"Additional details about the warning appear here when the section is expanded.",children:"Something needs your attention."})}),u=()=>{const[e,i]=f.useState(!0);return e?a.jsx("div",{style:{width:480},children:a.jsx(g,{variant:"danger",details:"Full error details are shown here.",onDismiss:()=>i(!1),children:"An error occurred."})}):a.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:14},children:"Dismissed"})},p=()=>a.jsx(s,{variant:"warning",square:!0,children:"This bar is flush against the edges — no border radius."}),m=()=>a.jsx(g,{variant:"info",square:!0,details:"Full details visible when expanded.",children:"Maintenance window tonight from 22:00–23:00 UTC."}),r=e=>a.jsx(s,{...e,variant:"info",children:"Info message"});r.play=async({canvasElement:e})=>{const i=Y(e);U(i.getByRole("status")).toBeInTheDocument()};c.__docgenInfo={description:"",methods:[],displayName:"Variants"};d.__docgenInfo={description:"",methods:[],displayName:"Dismissible"};l.__docgenInfo={description:"",methods:[],displayName:"Accordion"};u.__docgenInfo={description:"",methods:[],displayName:"AccordionWithDismiss"};p.__docgenInfo={description:"",methods:[],displayName:"SquareBanner"};m.__docgenInfo={description:"",methods:[],displayName:"SquareBannerAccordion"};r.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Interactions"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"args => <NotificationBarV2 {...args}>Your changes have been saved.</NotificationBarV2>",...v.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: 480
}}>
    <NotificationBarV2 {...args} variant="info">
      Information message
    </NotificationBarV2>
    <NotificationBarV2 {...args} variant="success">
      Success message
    </NotificationBarV2>
    <NotificationBarV2 {...args} variant="warning">
      Warning message
    </NotificationBarV2>
    <NotificationBarV2 {...args} variant="danger">
      Danger message
    </NotificationBarV2>
  </div>`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  return visible ? <NotificationBarV2 variant="info" onDismiss={() => setVisible(false)}>
      This notification can be dismissed.
    </NotificationBarV2> : <span style={{
    fontFamily: 'Inter, sans-serif',
    fontSize: 14
  }}>Dismissed</span>;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <div style={{
  width: 480
}}>
    <NotificationBarV2Accordion variant="warning" details="Additional details about the warning appear here when the section is expanded.">
      Something needs your attention.
    </NotificationBarV2Accordion>
  </div>`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  if (!visible) return <span style={{
    fontFamily: 'Inter, sans-serif',
    fontSize: 14
  }}>Dismissed</span>;
  return <div style={{
    width: 480
  }}>
      <NotificationBarV2Accordion variant="danger" details="Full error details are shown here." onDismiss={() => setVisible(false)}>
        An error occurred.
      </NotificationBarV2Accordion>
    </div>;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <NotificationBarV2 variant="warning" square>
    This bar is flush against the edges — no border radius.
  </NotificationBarV2>`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <NotificationBarV2Accordion variant="info" square details="Full details visible when expanded.">
    Maintenance window tonight from 22:00–23:00 UTC.
  </NotificationBarV2Accordion>`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <NotificationBarV2 {...args} variant="info">
    Info message
  </NotificationBarV2>`,...r.parameters?.docs?.source}}};const oe=["Playground","Variants","Dismissible","Accordion","AccordionWithDismiss","SquareBanner","SquareBannerAccordion","Interactions"];export{l as Accordion,u as AccordionWithDismiss,d as Dismissible,r as Interactions,v as Playground,p as SquareBanner,m as SquareBannerAccordion,c as Variants,oe as __namedExportsOrder,re as default};
