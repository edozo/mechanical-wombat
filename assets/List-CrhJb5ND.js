import{r as s,d as a,l as u,j as t}from"./iframe-ERl_u88-.js";const d=s.createContext({variant:"standard"}),h=()=>{const e=s.useContext(d);if(!e)throw new Error("List compound components can't be rendered outside List component");return e},p=a.div`
  background-color: ${e=>e.theme.colors.white};
  border-radius: inherit;
`,n=a.div.withConfig({shouldForwardProp:e=>e})`
  cursor: pointer;
  color: ${e=>e.theme.colors.grayDark};
  font-weight: 700;
  background-color: ${e=>e.theme.colors.white};
  position: relative;
  padding: ${e=>e.theme.spacing.xsmall};
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.colors.gray};
  }
  &:first-of-type {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &:last-of-type {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &:hover {
    background-color: ${e=>e.variant==="platform"?"#f2f6f9":e.theme.colors.grayLighter};
  }
  &:focus,
  &:active {
    background-color: ${e=>e.variant==="platform"?"#d6e1eb":e.theme.colors.gray};
    color: ${e=>e.theme.colors.grayDark};
    outline: none;
  }

  ${e=>e.disabled&&u`
      cursor: not-allowed;
      background-color: ${e.variant==="platform"?"#d6e1eb":e.theme.colors.gray};
      &:hover,
      &:focus,
      &:active {
        background-color: ${e.variant==="platform"?"#d6e1eb":e.theme.colors.gray};
        outline: none;
      }
    `};
`,c=({disabled:e,children:o,onClick:m,...r})=>{const{variant:i}=h();return e?t.jsx(n,{disabled:e,variant:i,...r,children:o}):t.jsx(n,{onClick:m,variant:i,...r,children:o})};c.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const l=e=>t.jsx(d.Provider,{value:e,children:t.jsx(p,{children:e.children})});l.Item=c;l.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ disabled, children, onClick, ...rest }",optional:!1,type:null}],returns:null}],displayName:"List"};export{l as L};
