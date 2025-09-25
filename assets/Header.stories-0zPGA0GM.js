import{d as a,r as m,j as t,l as r}from"./iframe-Bp3xk_TS.js";import{B as M}from"./ButtonV2-Da77JvMV.js";import{P as H}from"./Popover-CepIree_.js";import{a as A,L as T}from"./Icons-47Aui603.js";import{L as y}from"./List-CEob2RD2.js";import{E as g}from"./EdozoLogo-B3r-wRhA.js";import"./preload-helper-C1FmrZbK.js";import"./Badge.styles-D7S4UOEs.js";import"./shift-away-BDz8DUtE.js";import"./index-BYex4An_.js";import"./Typography-CahfLL1r.js";const B=a.div`
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
`,L=a.div`
  display: grid;
  grid-template-columns: 134px auto;
  align-items: center;
  margin: ${e=>e.theme.spacing.xsmall};
  min-height: 34px;
`,E=a(M)`
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
`,$=({edozoProducts:e,appName:s})=>{const[i,d]=m.useState(!1),h=()=>d(!0),c=()=>d(!1),R=n=>{const{stageUrl:f,productionUrl:S}=n,{hostname:x}=window.location;if(x==="localhost")return confirm("You are being taken away from your local environment")&&window.open(f,"_blank"),!1;const[,,U]=x.split(".");U==="co"?window.open(f,"_blank"):window.open(S,"_blank"),c()};return t.jsx("div",{children:t.jsx(H,{placement:"top-end",interactive:!0,interactiveBorder:10,visible:i,maxWidth:394,onClickOutside:c,content:t.jsx("div",{style:{margin:"10px 0",borderRadius:"inherit"},children:t.jsx(y,{variant:"platform",children:e.map(n=>t.jsx(y.Item,{onClick:()=>R(n),disabled:n.disabled||s===n.appName,children:t.jsxs(L,{children:[t.jsx(g,{size:"small",variant:n.appName}),t.jsx(q,{children:n.description})]})},n.productionUrl))})}),children:t.jsx("div",{children:t.jsxs(E,{onClick:i?c:h,radius:"round",variant:"white",children:[t.jsx(A,{size:"small"}),t.jsx(B,{children:"Products"})]})})})})};$.__docgenInfo={description:"",methods:[],displayName:"ProductSwitch"};const F=a.button`
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
`,C=({children:e,onClick:s,...i})=>t.jsx(F,{onClick:s,...i,type:"button",children:e});C.__docgenInfo={description:"",methods:[],displayName:"PlatformButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const V=a.div`
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
`,I=({children:e})=>t.jsx(V,{children:e});I.__docgenInfo={description:"",methods:[],displayName:"PlatformMenu",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const D=a.nav`
  align-self: stretch;
  display: flex;
  align-items: stretch;
  > * {
    display: flex;
    align-items: center;
  }
`,O=a.div`
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
`,P=m.createContext({appName:"maps"}),W=()=>{const e=m.useContext(P);if(!e)throw new Error("Header compound components can't be rendered outside Header component");return e},k=e=>t.jsx(P.Provider,{value:e,children:t.jsx(O,{children:e.children})});k.__docgenInfo={description:"",methods:[],displayName:"Header",props:{appName:{required:!0,tsType:{name:"union",raw:"'maps' | 'occupiers' | 'insight' | 'reports' | 'edozo'",elements:[{name:"literal",value:"'maps'"},{name:"literal",value:"'occupiers'"},{name:"literal",value:"'insight'"},{name:"literal",value:"'reports'"},{name:"literal",value:"'edozo'"}]},description:""}}};const Y=a.div.withConfig({shouldForwardProp:e=>e!=="appName"})`
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
`,_=({children:e})=>{const{appName:s}=W();return t.jsx(Y,{appName:s,children:e})};_.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const o=({children:e})=>t.jsx(D,{children:e});o.Item=_;o.PlatformMenu=I;o.PlatformButton=C;o.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"PlatformMenu",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"PlatformButton",docblock:null,modifiers:["static"],params:[{name:"{ children, onClick, ...rest }",optional:!1,type:null}],returns:null}],displayName:"Menu"};const G=[{appName:"maps",description:"Create best in class OS mapping with single click technology",productionUrl:"https://maps.edozo.com/",stageUrl:"https://dev-maps.edozo.co/"},{appName:"occupiers",description:"Create plans and see occupiers for all use classes",productionUrl:"https://occupiers.edozo.com/",stageUrl:"https://occupiers.edozo.co/"},{appName:"insight",description:"Find thousands of commercial property transaction comps",productionUrl:"https://app.edozo.com/",stageUrl:"https://stage-rails.edozo.co/search"},{appName:"reports",description:"Create automated valuation reports",productionUrl:"https://reports.edozo.com/",stageUrl:"https://reports.edozo.co/"}],u=({appName:e="edozo",logoSection:s,logout:i,isAuthenticated:d,edozoProducts:h=G,children:c})=>t.jsxs(k,{appName:e,children:[s,d&&t.jsxs(o,{children:[c,t.jsxs(o.PlatformMenu,{children:[t.jsx($,{edozoProducts:h,appName:e}),t.jsx(o.PlatformButton,{onClick:i,"data-testid":"logoutButton",children:t.jsx(T,{size:"small"})})]})]})]});u.__docgenInfo={description:"",methods:[],displayName:"AppHeader",props:{appName:{required:!1,tsType:{name:"union",raw:"'maps' | 'occupiers' | 'insight' | 'reports' | 'edozo'",elements:[{name:"literal",value:"'maps'"},{name:"literal",value:"'occupiers'"},{name:"literal",value:"'insight'"},{name:"literal",value:"'reports'"},{name:"literal",value:"'edozo'"}]},description:"",defaultValue:{value:"'edozo'",computed:!1}},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},logoSection:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isAuthenticated:{required:!1,tsType:{name:"boolean"},description:""},edozoProducts:{required:!1,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:"",defaultValue:{value:`[
  {
    appName: 'maps',
    description: 'Create best in class OS mapping with single click technology',
    productionUrl: 'https://maps.edozo.com/',
    stageUrl: 'https://dev-maps.edozo.co/',
  },
  {
    appName: 'occupiers',
    description: 'Create plans and see occupiers for all use classes',
    productionUrl: 'https://occupiers.edozo.com/',
    stageUrl: 'https://occupiers.edozo.co/',
  },
  {
    appName: 'insight',
    description: 'Find thousands of commercial property transaction comps',
    productionUrl: 'https://app.edozo.com/',
    stageUrl: 'https://stage-rails.edozo.co/search',
  },
  {
    appName: 'reports',
    description: 'Create automated valuation reports',
    productionUrl: 'https://reports.edozo.com/',
    stageUrl: 'https://reports.edozo.co/',
  },
]`,computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const se={title:"Components/Header",component:u},p=()=>t.jsx(u,{appName:"edozo",logoSection:t.jsx(g,{variant:"edozo",size:"small"}),logout:()=>{}}),l=e=>t.jsx(u,{logoSection:t.jsx("a",{children:t.jsx(g,{variant:e.appName})}),isAuthenticated:e.isAuthenticated,appName:e.appName,logout:e.logout,children:t.jsxs(m.Fragment,{children:[t.jsx(o.Item,{children:t.jsx("a",{className:"active",children:"Create a unicorn"})}),t.jsx(o.Item,{children:t.jsx("a",{children:"My unicorns"})}),t.jsx(o.Item,{children:t.jsx("a",{children:"Unicorn centre"})})]})});l.args={appName:"insight",isAuthenticated:!0,logout:()=>console.log("app specific logout method")};p.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"ControlledAppHeader"};var v,N,b;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:'() => <AppHeader appName="edozo" logoSection={<EdozoLogo variant={"edozo" as LogoVariants} size="small" />} logout={() => {}} />',...(b=(N=p.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var z,w,j;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`args => <AppHeader logoSection={<a>
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
  </AppHeader>`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const ie=["Default","ControlledAppHeader"];export{l as ControlledAppHeader,p as Default,ie as __namedExportsOrder,se as default};
