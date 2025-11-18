import{d as a,r as d,j as t,l as r}from"./iframe-ERl_u88-.js";import{B as S}from"./ButtonV2-DfDiNCUq.js";import{P as M}from"./Popover-CtJf6A9m.js";import{a as A,L as H}from"./Icons-CrtEe_mb.js";import{L as x}from"./List-CrhJb5ND.js";import{E as g}from"./EdozoLogo-Dzg2mSR_.js";import"./preload-helper-C1FmrZbK.js";import"./Badge.styles-D3y5WfxF.js";import"./shift-away-BcDh0Ns-.js";import"./index-3pr3q-XA.js";import"./Typography-CDTNyAOa.js";const T=a.div`
  font-family: ${e=>e.theme.font.family.main};
  font-size: ${e=>e.theme.font.size.text.base};
  line-height: ${e=>e.theme.font.lineHeight.text.base};
  font-weight: ${e=>e.theme.font.weight.bold};
  color: #060048;
  margin-left: ${e=>e.theme.spacing.xsmall};
`,q=a.span`
  font-family: ${e=>e.theme.font.family.main};
  font-size: ${e=>e.theme.font.size.text.xsmall};
  font-weight: ${e=>e.theme.font.weight.regular};
`,B=a.div`
  display: grid;
  grid-template-columns: 134px auto;
  align-items: center;
  margin: ${e=>e.theme.spacing.xsmall};
  min-height: 34px;
`,L=a(S)`
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
`,$=({edozoProducts:e,appName:s})=>{const[i,m]=d.useState(!1),h=()=>m(!0),c=()=>m(!1),_=n=>{const{url:f}=n,{hostname:R}=window.location;if(R==="localhost")return confirm("You are being taken away from your local environment")&&window.open(f,"_blank"),!1;window.open(f,"_blank"),c()};return t.jsx("div",{children:t.jsx(M,{placement:"top-end",interactive:!0,interactiveBorder:10,visible:i,maxWidth:394,onClickOutside:c,content:t.jsx("div",{style:{margin:"10px 0",borderRadius:"inherit"},children:t.jsx(x,{variant:"platform",children:e.map(n=>t.jsx(x.Item,{onClick:()=>_(n),disabled:n.disabled||s===n.appName,children:t.jsxs(B,{children:[t.jsx(g,{size:"small",variant:n.appName}),t.jsx(q,{children:n.description})]})},n.url))})}),children:t.jsx("div",{children:t.jsxs(L,{onClick:i?c:h,radius:"round",variant:"white",children:[t.jsx(A,{size:"small"}),t.jsx(T,{children:"Products"})]})})})})};$.__docgenInfo={description:"",methods:[],displayName:"ProductSwitch",props:{edozoProducts:{required:!0,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:""},appName:{required:!0,tsType:{name:"union",raw:"'maps' | 'occupiers' | 'insight' | 'reports' | 'edozo'",elements:[{name:"literal",value:"'maps'"},{name:"literal",value:"'occupiers'"},{name:"literal",value:"'insight'"},{name:"literal",value:"'reports'"},{name:"literal",value:"'edozo'"}]},description:""}}};const E=a.button`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  background: ${e=>e.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 100ms;
  animation-timing-function: cubic-bezier(0.2, -2, 0.8, 2);

  &:hover {
    background: ${e=>e.theme.colors.gray};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9) rotate(-90deg);
  }
`,z=({children:e,onClick:s,...i})=>t.jsx(E,{onClick:s,...i,type:"button",children:e});z.__docgenInfo={description:"",methods:[],displayName:"PlatformButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const F=a.div`
  background: ${e=>e.theme.colors.grayLighter};
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0 ${e=>e.theme.spacing.base} 0 ${e=>e.theme.spacing.base};
  margin-left: ${e=>e.theme.spacing.base};
  > * {
    margin-right: ${e=>e.theme.spacing.small};
  }
  > :last-child {
    margin-right: 0;
  }
`,I=({children:e})=>t.jsx(F,{children:e});I.__docgenInfo={description:"",methods:[],displayName:"PlatformMenu",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const V=a.nav`
  align-self: stretch;
  display: flex;
  align-items: stretch;
  > * {
    display: flex;
    align-items: center;
  }
`,D=a.div`
  position: sticky;
  top: 0;
  max-height: 60px;
  min-height: 60px;
  background: ${e=>e.theme.colors.white};
  box-shadow: ${e=>e.theme.boxShadow.xsmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 ${e=>e.theme.spacing.base};
  z-index: 2;
  width: 100%;
  a {
    text-decoration: none;
  }
`,P=d.createContext({appName:"maps"}),O=()=>{const e=d.useContext(P);if(!e)throw new Error("Header compound components can't be rendered outside Header component");return e},C=e=>t.jsx(P.Provider,{value:e,children:t.jsx(D,{children:e.children})});C.__docgenInfo={description:"",methods:[],displayName:"Header",props:{appName:{required:!0,tsType:{name:"union",raw:"'maps' | 'occupiers' | 'insight' | 'reports' | 'edozo'",elements:[{name:"literal",value:"'maps'"},{name:"literal",value:"'occupiers'"},{name:"literal",value:"'insight'"},{name:"literal",value:"'reports'"},{name:"literal",value:"'edozo'"}]},description:""}}};const U=a.div.withConfig({shouldForwardProp:e=>e!=="appName"})`
  > a {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    text-decoration: none;
    font-size: ${e=>e.theme.font.size.text.base};
    margin-left: ${e=>e.theme.spacing.small};
    color: ${e=>e.theme.colors.grayDarker};

    &.active:after {
      height: 6px;
    }

    &:after {
      content: '';
      transition: height 0.2s ease-out;
      height: 0px;
      width: 100%;
      background: ${e=>e.theme.colors.aliases.primary};
      ${e=>e.appName==="maps"&&r`
          background: ${e.theme.colors.aliases.primary};
        `}
      ${e=>e.appName==="occupiers"&&r`
          background: ${e.theme.colors.appColors.occupiers};
        `} 
      ${e=>e.appName==="insight"&&r`
          background: ${e.theme.colors.appColors.insight};
        `}
      ${e=>e.appName==="reports"&&r`
          background: ${e.theme.colors.appColors.reports};
        `}
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &:hover {
      text-decoration: none;
      color: ${e=>e.theme.colors.aliases.primary};
      ${e=>e.appName==="maps"&&r`
          color: ${e.theme.colors.aliases.primary};
        `} 
      ${e=>e.appName==="occupiers"&&r`
          color: ${e.theme.colors.appColors.occupiers};
        `} 
      ${e=>e.appName==="insight"&&r`
          color: ${e.theme.colors.appColors.insight};
        `}
      ${e=>e.appName==="reports"&&r`
          color: ${e.theme.colors.appColors.reports};
        `}
    }

    &:hover:after {
      height: 6px;
    }
  }
`,k=({children:e})=>{const{appName:s}=O();return t.jsx(U,{appName:s,children:e})};k.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const o=({children:e})=>t.jsx(V,{children:e});o.Item=k;o.PlatformMenu=I;o.PlatformButton=z;o.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"PlatformMenu",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"PlatformButton",docblock:null,modifiers:["static"],params:[{name:"{ children, onClick, ...rest }",optional:!1,type:null}],returns:null}],displayName:"Menu"};const W=[{appName:"maps",description:"Create best in class OS mapping with single click technology",url:"https://maps.edozo.com/"},{appName:"occupiers",description:"Create plans and see occupiers for all use classes",url:"https://occupiers.edozo.com/"},{appName:"insight",description:"Find thousands of commercial property transaction comps",url:"https://insight.edozo.com/"},{appName:"reports",description:"Create automated valuation reports",url:"https://reports.edozo.com/"}],u=({appName:e="edozo",logoSection:s,logout:i,isAuthenticated:m,edozoProducts:h=W,children:c})=>t.jsxs(C,{appName:e,children:[s,m&&t.jsxs(o,{children:[c,t.jsxs(o.PlatformMenu,{children:[t.jsx($,{edozoProducts:h,appName:e}),t.jsx(o.PlatformButton,{onClick:i,"data-testid":"logoutButton",children:t.jsx(H,{size:"small"})})]})]})]});u.__docgenInfo={description:"",methods:[],displayName:"AppHeader",props:{appName:{required:!1,tsType:{name:"union",raw:"'maps' | 'occupiers' | 'insight' | 'reports' | 'edozo'",elements:[{name:"literal",value:"'maps'"},{name:"literal",value:"'occupiers'"},{name:"literal",value:"'insight'"},{name:"literal",value:"'reports'"},{name:"literal",value:"'edozo'"}]},description:"",defaultValue:{value:"'edozo'",computed:!1}},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},logoSection:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isAuthenticated:{required:!1,tsType:{name:"boolean"},description:""},edozoProducts:{required:!1,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:"",defaultValue:{value:`[
  {
    appName: 'maps',
    description: 'Create best in class OS mapping with single click technology',
    url: 'https://maps.edozo.com/',
  },
  {
    appName: 'occupiers',
    description: 'Create plans and see occupiers for all use classes',
    url: 'https://occupiers.edozo.com/',
  },
  {
    appName: 'insight',
    description: 'Find thousands of commercial property transaction comps',
    url: 'https://insight.edozo.com/',
  },
  {
    appName: 'reports',
    description: 'Create automated valuation reports',
    url: 'https://reports.edozo.com/',
  },
]`,computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ne={title:"Components/Header",component:u},p=()=>t.jsx(u,{appName:"edozo",logoSection:t.jsx(g,{variant:"edozo",size:"small"}),logout:()=>{}}),l=e=>t.jsx(u,{logoSection:t.jsx("a",{children:t.jsx(g,{variant:e.appName})}),isAuthenticated:e.isAuthenticated,appName:e.appName,logout:e.logout,children:t.jsxs(d.Fragment,{children:[t.jsx(o.Item,{children:t.jsx("a",{className:"active",children:"Create a unicorn"})}),t.jsx(o.Item,{children:t.jsx("a",{children:"My unicorns"})}),t.jsx(o.Item,{children:t.jsx("a",{children:"Unicorn centre"})})]})});l.args={appName:"insight",isAuthenticated:!0,logout:()=>console.log("app specific logout method")};p.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"ControlledAppHeader"};var y,v,N;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:'() => <AppHeader appName="edozo" logoSection={<EdozoLogo variant={"edozo" as LogoVariants} size="small" />} logout={() => {}} />',...(N=(v=p.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var b,w,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`args => <AppHeader logoSection={<a>
        <EdozoLogo variant={args.appName as LogoVariants} />
      </a>} isAuthenticated={args.isAuthenticated} appName={args.appName} logout={args.logout}>
    <Fragment>
      <Menu.Item>
        <a className="active">Create a unicorn</a>
      </Menu.Item>
      <Menu.Item>
        <a>My unicorns</a>
      </Menu.Item>
      <Menu.Item>
        <a>Unicorn centre</a>
      </Menu.Item>
    </Fragment>
  </AppHeader>`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const re=["Default","ControlledAppHeader"];export{l as ControlledAppHeader,p as Default,re as __namedExportsOrder,ne as default};
