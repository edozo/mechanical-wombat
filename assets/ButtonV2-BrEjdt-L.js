import{s as r,c as s,j as n}from"./iframe-BoD0hbH1.js";import{S as i}from"./Badge.styles-QvTnsmtK.js";const d=s.button.withConfig({shouldForwardProp:a=>a})`
  border: none;
  color: white;
  position: relative;
  cursor: pointer;

  /* SIZE */
  ${({theme:a,size:e})=>e==="standard"&&r`
      font-size: ${a.font.size.text.base};
      line-height: ${a.font.lineHeight.text.base};
      padding: ${a.spacing.xsmall} ${a.spacing.base};
    `}
  ${({theme:a,size:e})=>e==="small"&&r`
      font-size: ${a.font.size.text.xsmall};
      line-height: ${a.font.lineHeight.text.xsmall};
      padding: ${a.spacing.xxsmall} ${a.spacing.small};
    `}
  ${({theme:a,size:e})=>e==="large"&&r`
      font-size: ${a.font.size.text.large};
      line-height: ${a.font.lineHeight.text.large};
      padding: ${a.spacing.small} ${a.spacing.large};
    `}


  /* RADIUS */
  ${({radius:a})=>a==="standard"&&r`
      border-radius: 6px;
    `}
  ${({radius:a})=>a==="round"&&r`
      border-radius: 50px;
    `}

  /* VARIANT */
  ${({theme:a,variant:e})=>e==="primary"&&r`
      background: ${a.colors.aliases.primary};
    `}
  ${({theme:a,variant:e})=>e==="secondary"&&r`
      background: ${a.colors.aliases.secondary};
    `}
  ${({theme:a,variant:e})=>e==="tertiary"&&r`
      background: ${a.colors.white};
      border: 2px solid ${a.colors.grayDark};
      color: ${a.colors.grayDark};
    `}
  ${({theme:a,variant:e})=>e==="danger"&&r`
      background: ${a.colors.system.red};
    `}
    ${({theme:a,variant:e})=>e==="white"&&r`
      background: ${a.colors.white};
      color: ${a.colors.black};
    `}

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    background: ${({theme:a})=>a.colors.gray};
    cursor: not-allowed;
  }

  & > ${i} {
    position: absolute;
    top: -4px;
    right: -4px;
    ${({radius:a})=>a==="round"&&r`
        top: -7px;
        right: 0;
      `}
  }
`,u=({children:a,variant:e="primary",size:l="standard",radius:t="standard",...o})=>n.jsx(d,{variant:e,size:l,radius:t,...o,children:a});u.__docgenInfo={description:"",methods:[],displayName:"ButtonV2",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'standard' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'standard'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'standard' | 'round'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'round'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger' | 'white'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'white'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}},composes:["ButtonHTMLAttributes"]};export{u as B};
