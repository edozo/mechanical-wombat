import{d as r,r as m,j as t,l as a}from"./iframe-EU7jn1Ok.js";import{B as S}from"./ButtonV2-CLqrE2aE.js";import{P as M}from"./Popover-CYkfD5jH.js";import{a as A,L as H}from"./Icons-DRyR5T76.js";import{L as x}from"./List-bPuUP5Fm.js";import{E as h}from"./EdozoLogo-CJ3SxtLt.js";import"./preload-helper-C1FmrZbK.js";import"./Badge.styles-CvMdY4Xr.js";import"./shift-away-D6TO8Su7.js";import"./index-BTY-XV4L.js";import"./Typography-CjZZ2G3p.js";const T=r.div`
  font-family: ${({theme:e})=>e.font.family.main};
  font-size: ${({theme:e})=>e.font.size.text.base};
  line-height: ${({theme:e})=>e.font.lineHeight.text.base};
  font-weight: ${({theme:e})=>e.font.weight.bold};
  color: #060048;
  margin-left: ${({theme:e})=>e.spacing.xsmall};
`,q=r.span`
  font-family: ${({theme:e})=>e.font.family.main};
  font-size: ${({theme:e})=>e.font.size.text.xsmall};
  font-weight: ${({theme:e})=>e.font.weight.regular};
`,B=r.div`
  display: grid;
  grid-template-columns: 134px auto;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xsmall};
  min-height: 34px;
`,L=r(S)`
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
`,w=({edozoProducts:e,appName:o})=>{const[i,d]=m.useState(!1),g=()=>d(!0),l=()=>d(!1),_=s=>{const{url:f}=s,{hostname:R}=window.location;if(R==="localhost")return confirm("You are being taken away from your local environment")&&window.open(f,"_blank"),!1;window.open(f,"_blank"),l()};return t.jsx("div",{children:t.jsx(M,{placement:"top-end",interactive:!0,interactiveBorder:10,visible:i,maxWidth:394,onClickOutside:l,content:t.jsx("div",{style:{margin:"10px 0",borderRadius:"inherit"},children:t.jsx(x,{variant:"platform",children:e.map(s=>t.jsx(x.Item,{onClick:()=>_(s),disabled:s.disabled||o===s.appName,children:t.jsxs(B,{children:[t.jsx(h,{size:"small",variant:s.appName}),t.jsx(q,{children:s.description})]})},s.url))})}),children:t.jsx("div",{children:t.jsxs(L,{onClick:i?l:g,radius:"round",variant:"white",children:[t.jsx(A,{size:"small"}),t.jsx(T,{children:"Products"})]})})})})};w.__docgenInfo={description:"",methods:[],displayName:"ProductSwitch",props:{edozoProducts:{required:!0,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:""},appName:{required:!0,tsType:{name:"string"},description:""}}};const E=r.button`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 100ms;
  animation-timing-function: cubic-bezier(0.2, -2, 0.8, 2);

  &:hover {
    background: ${({theme:e})=>e.colors.gray};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9) rotate(-90deg);
  }
`,z=({children:e,onClick:o,...i})=>t.jsx(E,{onClick:o,...i,type:"button",children:e});z.__docgenInfo={description:"",methods:[],displayName:"PlatformButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const F=r.div`
  background: ${({theme:e})=>e.colors.grayLighter};
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0 ${({theme:e})=>e.spacing.base} 0 ${({theme:e})=>e.spacing.base};
  margin-left: ${({theme:e})=>e.spacing.base};
  > * {
    margin-right: ${({theme:e})=>e.spacing.small};
  }
  > :last-child {
    margin-right: 0;
  }
`,C=({children:e})=>t.jsx(F,{children:e});C.__docgenInfo={description:"",methods:[],displayName:"PlatformMenu",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const V=r.nav`
  align-self: stretch;
  display: flex;
  align-items: stretch;
  > * {
    display: flex;
    align-items: center;
  }
`,D=r.div`
  position: sticky;
  top: 0;
  max-height: 60px;
  min-height: 60px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.boxShadow.xsmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 ${({theme:e})=>e.spacing.base};
  z-index: 2;
  width: 100%;
  a {
    text-decoration: none;
  }
`,I=m.createContext({appName:"maps"}),O=()=>{const e=m.useContext(I);if(!e)throw new Error("Header compound components can't be rendered outside Header component");return e},P=e=>t.jsx(I.Provider,{value:e,children:t.jsx(D,{children:e.children})});P.__docgenInfo={description:"",methods:[],displayName:"Header",props:{appName:{required:!0,tsType:{name:"string"},description:""}}};const U=r.div.withConfig({shouldForwardProp:e=>e!=="appName"})`
  > a {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    text-decoration: none;
    font-size: ${({theme:e})=>e.font.size.text.base};
    margin-left: ${({theme:e})=>e.spacing.small};
    color: ${({theme:e})=>e.colors.grayDarker};

    &.active:after {
      height: 6px;
    }

    &:after {
      content: '';
      transition: height 0.2s ease-out;
      height: 0px;
      width: 100%;
      background: ${({theme:e})=>e.colors.aliases.primary};
      ${({theme:e,appName:o})=>o==="maps"&&a`
          background: ${e.colors.aliases.primary};
        `}
      ${({theme:e,appName:o})=>o==="occupiers"&&a`
          background: ${e.colors.appColors.occupiers};
        `}
      ${({theme:e,appName:o})=>o==="insight"&&a`
          background: ${e.colors.appColors.insight};
        `}
      ${({theme:e,appName:o})=>o==="reports"&&a`
          background: ${e.colors.appColors.reports};
        `}
      ${({theme:e,appName:o})=>o==="extract"&&a`
          background: ${e.colors.appColors.extract};
        `}
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &:hover {
      text-decoration: none;
      color: ${({theme:e})=>e.colors.aliases.primary};
      ${({theme:e,appName:o})=>o==="maps"&&a`
          color: ${e.colors.aliases.primary};
        `}
      ${({theme:e,appName:o})=>o==="occupiers"&&a`
          color: ${e.colors.appColors.occupiers};
        `}
      ${({theme:e,appName:o})=>o==="insight"&&a`
          color: ${e.colors.appColors.insight};
        `}
      ${({theme:e,appName:o})=>o==="reports"&&a`
          color: ${e.colors.appColors.reports};
        `}
      ${({theme:e,appName:o})=>o==="extract"&&a`
          color: ${e.colors.appColors.extract};
        `}
    }

    &:hover:after {
      height: 6px;
    }
  }
`,k=({children:e})=>{const{appName:o}=O();return t.jsx(U,{appName:o,children:e})};k.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const n=({children:e})=>t.jsx(V,{children:e});n.Item=k;n.PlatformMenu=C;n.PlatformButton=z;n.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"PlatformMenu",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"PlatformButton",docblock:null,modifiers:["static"],params:[{name:"{ children, onClick, ...rest }",optional:!1,type:null}],returns:null}],displayName:"Menu"};const W=[{appName:"maps",description:"Create best in class OS mapping with single click technology",url:"https://maps.edozo.com/"},{appName:"occupiers",description:"Create plans and see occupiers for all use classes",url:"https://occupiers.edozo.com/"},{appName:"insight",description:"Find thousands of commercial property transaction comps",url:"https://insight.edozo.com/"},{appName:"reports",description:"Create automated valuation reports",url:"https://reports.edozo.com/"}],u=({appName:e="edozo",logoSection:o,logout:i,isAuthenticated:d,edozoProducts:g=W,children:l})=>t.jsxs(P,{appName:e,children:[o,d&&t.jsxs(n,{children:[l,t.jsxs(n.PlatformMenu,{children:[t.jsx(w,{edozoProducts:g,appName:e}),t.jsx(n.PlatformButton,{onClick:i,"data-testid":"logoutButton",children:t.jsx(H,{size:"small"})})]})]})]});u.__docgenInfo={description:"",methods:[],displayName:"AppHeader",props:{appName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'edozo'",computed:!1}},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},logoSection:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isAuthenticated:{required:!1,tsType:{name:"boolean"},description:""},edozoProducts:{required:!1,tsType:{name:"Array",elements:[{name:"ProductInfo"}],raw:"ProductInfo[]"},description:"",defaultValue:{value:`[
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
]`,computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ne={title:"Components/Header",component:u},p=()=>t.jsx(u,{appName:"edozo",logoSection:t.jsx(h,{variant:"edozo",size:"small"}),logout:()=>{}}),c=e=>t.jsx(u,{logoSection:t.jsx("a",{children:t.jsx(h,{variant:e.appName})}),isAuthenticated:e.isAuthenticated,appName:e.appName,logout:e.logout,children:t.jsxs(m.Fragment,{children:[t.jsx(n.Item,{children:t.jsx("a",{className:"active",children:"Create a unicorn"})}),t.jsx(n.Item,{children:t.jsx("a",{children:"My unicorns"})}),t.jsx(n.Item,{children:t.jsx("a",{children:"Unicorn centre"})})]})});c.args={appName:"insight",isAuthenticated:!0,logout:()=>console.log("app specific logout method")};p.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"ControlledAppHeader"};var y,N,$;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:'() => <AppHeader appName="edozo" logoSection={<EdozoLogo variant={"edozo" as LogoVariants} size="small" />} logout={() => {}} />',...($=(N=p.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var b,v,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`args => <AppHeader logoSection={<a>
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
  </AppHeader>`,...(j=(v=c.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const re=["Default","ControlledAppHeader"];export{c as ControlledAppHeader,p as Default,re as __namedExportsOrder,ne as default};
