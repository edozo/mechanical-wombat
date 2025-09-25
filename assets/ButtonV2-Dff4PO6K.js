import{l as a,d as i,j as n}from"./iframe-C_eeFh7-.js";import{S as o}from"./Badge.styles-bQlWSTJ0.js";const d=i.button.withConfig({shouldForwardProp:e=>e})`
  border: none;
  color: white;
  position: relative;
  cursor: pointer;

  /* SIZE */
  ${e=>e.size==="standard"&&a`
      font-size: ${e.theme.font.size.text.base};
      line-height: ${e.theme.font.lineHeight.text.base};
      padding: ${e.theme.spacing.xsmall} ${e.theme.spacing.base};
    `}
  ${e=>e.size==="small"&&a`
      font-size: ${e.theme.font.size.text.xsmall};
      line-height: ${e.theme.font.lineHeight.text.xsmall};
      padding: ${e.theme.spacing.xxsmall} ${e.theme.spacing.small};
    `}
  ${e=>e.size==="large"&&a`
      font-size: ${e.theme.font.size.text.large};
      line-height: ${e.theme.font.lineHeight.text.large};
      padding: ${e.theme.spacing.small} ${e.theme.spacing.large};
    `}
  
      
  /* RADIUS */
  ${e=>e.radius==="standard"&&a`
      border-radius: 6px;
    `}
  ${e=>e.radius==="round"&&a`
      border-radius: 50px;
    `}
      
  /* VARIANT */
  ${e=>e.variant==="primary"&&a`
      background: ${e.theme.colors.aliases.primary};
    `}
  ${e=>e.variant==="secondary"&&a`
      background: ${e.theme.colors.aliases.secondary};
    `}
  ${e=>e.variant==="tertiary"&&a`
      background: ${e.theme.colors.white};
      border: 2px solid ${e.theme.colors.grayDark};
      color: ${e.theme.colors.grayDark};
    `}
  ${e=>e.variant==="danger"&&a`
      background: ${e.theme.colors.system.red};
    `}
    ${e=>e.variant==="white"&&a`
        background: ${e.theme.colors.white};
        color: ${e.theme.colors.black};
      `}
  
  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    background: ${e=>e.theme.colors.gray};
    cursor: not-allowed;
  }

  & > ${o} {
    position: absolute;
    top: -4px;
    right: -4px;
    ${e=>e.radius==="round"&&a`
        top: -7px;
        right: 0;
      `}
	}
`,m=({children:e,variant:t="primary",size:r="standard",radius:l="standard",...s})=>n.jsx(d,{variant:t,size:r,radius:l,...s,children:e});m.__docgenInfo={description:"",methods:[],displayName:"ButtonV2",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'standard' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'standard'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'standard' | 'round'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'round'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger' | 'white'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'white'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}},composes:["ButtonHTMLAttributes"]};export{m as B};
