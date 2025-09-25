import{d as t,j as r}from"./iframe-BGMA8d48.js";import{i as a}from"./shift-away-AnGGGuFV.js";import{a as d}from"./Typography-Dl8jUFo-.js";const m=t(a)`
  background-color: ${e=>e.theme.colors.white};
  color: ${e=>e.theme.colors.grayDarker};
  box-shadow: ${e=>e.theme.boxShadow.standard};
  border-radius: ${e=>e.theme.borderRadius[e.radius||"standard"]};

  .tippy-content {
    padding: 0;
    border-radius: inherit;
    > div {
      border-radius: inherit;
    }
  }

  .tippy-arrow {
    color: ${e=>e.theme.colors.white};
  }
`,c=t(d)`
  font-weight: ${e=>e.theme.font.weight.semibold};
  margin-bottom: ${e=>e.theme.spacing.xxsmall};
`,p=t.button`
  background-color: ${e=>e.theme.colors.grayLighter};
  border: 1px solid ${e=>e.theme.colors.grayLighter};
  padding: ${e=>e.theme.spacing.xsmall} ${e=>e.theme.spacing.small};
  font-weight: ${e=>e.theme.font.weight.semibold};
  font-size: ${e=>e.theme.font.size.text.xxsmall};
  &:hover {
    background-color: ${e=>e.theme.colors.steelBlueLighter};
    border-color: ${e=>e.theme.colors.steelBlueDark};
    color: ${e=>e.theme.colors.aliases.primary};
    svg {
      fill: ${e=>e.theme.colors.aliases.primary};
    }
  }
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.steelBlueDark};
  }
`,l=({children:e})=>r.jsx(c,{children:e});l.__docgenInfo={description:"",methods:[],displayName:"PopoverTitle",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const i=({children:e,...o})=>r.jsx(p,{type:"button",...o,children:e});i.__docgenInfo={description:"",methods:[],displayName:"PopoverButton"};a.defaultProps={animation:"shift-away",delay:[100,0],inertia:!0,placement:"bottom"};const s=({content:e,children:o,...n})=>r.jsx(m,{content:e,...n,children:o});s.Title=l;s.Button=i;s.__docgenInfo={description:"",methods:[{name:"Title",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Button",docblock:null,modifiers:["static"],params:[{name:"{ children, ...rest }",optional:!1,type:null}],returns:null}],displayName:"Popover"};export{s as P};
