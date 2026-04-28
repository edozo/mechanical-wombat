import{c as t,j as r}from"./iframe-qSwtjqTo.js";import{i as l}from"./shift-away-NCsP8KQc.js";import{b as d}from"./Typography-Do4sEQuU.js";const c=t(l)`
  background-color: ${({theme:o})=>o.colors.white};
  color: ${({theme:o})=>o.colors.grayDarker};
  box-shadow: ${({theme:o})=>o.boxShadow.standard};
  border-radius: ${({theme:o,radius:e})=>o.borderRadius[e||"standard"]};

  .tippy-content {
    padding: 0;
    border-radius: inherit;
    > div {
      border-radius: inherit;
    }
  }

  .tippy-arrow {
    color: ${({theme:o})=>o.colors.white};
  }
`,p=t(d)`
  font-weight: ${({theme:o})=>o.font.weight.semibold};
  margin-bottom: ${({theme:o})=>o.spacing.xxsmall};
`,m=t.button`
  background-color: ${({theme:o})=>o.colors.grayLighter};
  border: 1px solid ${({theme:o})=>o.colors.grayLighter};
  padding: ${({theme:o})=>o.spacing.xsmall} ${({theme:o})=>o.spacing.small};
  font-weight: ${({theme:o})=>o.font.weight.semibold};
  font-size: ${({theme:o})=>o.font.size.text.xxsmall};
  &:hover {
    background-color: ${({theme:o})=>o.colors.steelBlueLighter};
    border-color: ${({theme:o})=>o.colors.steelBlueDark};
    color: ${({theme:o})=>o.colors.aliases.primary};
    svg {
      fill: ${({theme:o})=>o.colors.aliases.primary};
    }
  }
  &:focus {
    outline: none;
    border-color: ${({theme:o})=>o.colors.steelBlueDark};
  }
`,a=({children:o})=>r.jsx(p,{children:o});a.__docgenInfo={description:"",methods:[],displayName:"PopoverTitle",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const i=({children:o,...e})=>r.jsx(m,{type:"button",...e,children:o});i.__docgenInfo={description:"",methods:[],displayName:"PopoverButton"};l.defaultProps={animation:"shift-away",delay:[100,0],inertia:!0,placement:"bottom"};const s=({content:o,children:e,...n})=>r.jsx(c,{content:o,...n,children:e});s.Title=a;s.Button=i;s.__docgenInfo={description:"",methods:[{name:"Title",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Button",docblock:null,modifiers:["static"],params:[{name:"{ children, ...rest }",optional:!1,type:null}],returns:null}],displayName:"Popover"};export{s as P};
