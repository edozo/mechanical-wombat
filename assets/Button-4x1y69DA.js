import{l as r,d as o,r as a,j as t}from"./iframe-ND4VGsRZ.js";const l=o.button`
  font-family: ${e=>e.theme.font.family.main};
  border: 2px solid ${e=>e.theme.colors.aliases[e.color||"primary"]};
  background-color: ${e=>e.theme.colors.aliases[e.color||"primary"]};
  border-radius: ${e=>e.theme.borderRadius[e.borderRadius||"standard"]};
  color: ${e=>e.theme.colors.white};
  padding: ${e=>e.theme.spacing.xsmall} ${e=>e.theme.spacing.base}; /* Get from theme */
  font-size: 1.2em; /* Get from theme */
  transition: all 0.2s; /* Get from theme */
  &:hover {
    background-color: ${e=>e.theme.colors.aliases[e.color?`${e.color}Light`:"primaryLight"]};
    border-color: ${e=>e.theme.colors.aliases[e.color?`${e.color}Light`:"primaryLight"]};
  }
  &:focus {
    background-color: ${e=>e.theme.colors.aliases[e.color&&`${e.color}Light`||"primaryLight"]};
    border-color: ${e=>e.theme.colors.aliases[e.color&&`${e.color}Dark`||"primaryDark"]};
    outline: none;
  }
  &:active {
    background-color: ${e=>e.theme.colors.aliases[e.color&&`${e.color}Dark`||"primaryDark"]};
    border-color: ${e=>e.theme.colors.aliases[e.color&&`${e.color}Dark`||"primaryDark"]};
    outline: none;
  }

  ${e=>e.variant==="outline"&&r`
      background-color: transparent;
      color: ${e.theme.colors.aliases[e.color||"primary"]};
      &:hover,
      &:focus,
      &:active {
        color: ${e.theme.colors.white};
      }
    `};

  ${e=>e.variant==="ghost"&&r`
      background-color: transparent;
      border: 2px solid transparent;
      color: ${e.theme.colors.aliases[e.color||"primary"]};
      &:hover,
      &:focus,
      &:active {
        color: ${e.theme.colors.white};
      }
    `};

  &:disabled,
  &[disabled] {
    background-color: ${e=>e.theme.colors.gray};
    border-color: ${e=>e.theme.colors.gray};
    color: ${e=>e.theme.colors.grayLighter};
  }
`,s=e=>(a.useEffect(()=>{},[]),t.jsx(l,{...e,children:e.children}));s.__docgenInfo={description:`@deprecated This Button component is deprecated and will be removed in the next major version.
Please use the new ButtonV2 component instead.`,methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:""},borderRadius:{required:!1,tsType:{name:"union",raw:"'small' | 'standard' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'standard'"},{name:"literal",value:"'large'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{s as B};
