import{l as o,d as s,r as t,j as i}from"./iframe-B7Hjg5Rr.js";const l=s.button`
  font-family: ${({theme:e})=>e.font.family.main};
  border: 2px solid ${({theme:e,color:r})=>e.colors.aliases[r||"primary"]};
  background-color: ${({theme:e,color:r})=>e.colors.aliases[r||"primary"]};
  border-radius: ${({theme:e,borderRadius:r})=>e.borderRadius[r||"standard"]};
  color: ${({theme:e})=>e.colors.white};
  padding: ${({theme:e})=>e.spacing.xsmall} ${({theme:e})=>e.spacing.base}; /* Get from theme */
  font-size: 1.2em; /* Get from theme */
  transition: all 0.2s; /* Get from theme */
  &:hover {
    background-color: ${({theme:e,color:r})=>e.colors.aliases[r?`${r}Light`:"primaryLight"]};
    border-color: ${({theme:e,color:r})=>e.colors.aliases[r?`${r}Light`:"primaryLight"]};
  }
  &:focus {
    background-color: ${({theme:e,color:r})=>e.colors.aliases[r?`${r}Light`:"primaryLight"]};
    border-color: ${({theme:e,color:r})=>e.colors.aliases[r?`${r}Dark`:"primaryDark"]};
    outline: none;
  }
  &:active {
    background-color: ${({theme:e,color:r})=>e.colors.aliases[r?`${r}Dark`:"primaryDark"]};
    border-color: ${({theme:e,color:r})=>e.colors.aliases[r?`${r}Dark`:"primaryDark"]};
    outline: none;
  }

  ${({theme:e,variant:r,color:a})=>r==="outline"&&o`
      background-color: transparent;
      color: ${e.colors.aliases[a||"primary"]};
      &:hover,
      &:focus,
      &:active {
        color: ${e.colors.white};
      }
    `};

  ${({theme:e,variant:r,color:a})=>r==="ghost"&&o`
      background-color: transparent;
      border: 2px solid transparent;
      color: ${e.colors.aliases[a||"primary"]};
      &:hover,
      &:focus,
      &:active {
        color: ${e.colors.white};
      }
    `};

  &:disabled,
  &[disabled] {
    background-color: ${({theme:e})=>e.colors.gray};
    border-color: ${({theme:e})=>e.colors.gray};
    color: ${({theme:e})=>e.colors.grayLighter};
  }
`,n=e=>(t.useEffect(()=>{},[]),i.jsx(l,{...e,children:e.children}));n.__docgenInfo={description:`@deprecated This Button component is deprecated and will be removed in the next major version.
Please use the new ButtonV2 component instead.`,methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:""},borderRadius:{required:!1,tsType:{name:"union",raw:"'small' | 'standard' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'standard'"},{name:"literal",value:"'large'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{n as B};
