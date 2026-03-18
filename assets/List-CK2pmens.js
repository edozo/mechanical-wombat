import{r as a,c,s as p,j as e}from"./iframe-CfiJSd57.js";const d=a.createContext({variant:"standard"}),m=()=>{const o=a.useContext(d);if(!o)throw new Error("List compound components can't be rendered outside List component");return o},f=c.div`
  background-color: ${({theme:o})=>o.colors.white};
  border-radius: inherit;
`,n=c.div.withConfig({shouldForwardProp:o=>o})`
  cursor: pointer;
  color: ${({theme:o})=>o.colors.grayDark};
  font-weight: 700;
  background-color: ${({theme:o})=>o.colors.white};
  position: relative;
  padding: ${({theme:o})=>o.spacing.xsmall};
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme:o})=>o.colors.gray};
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
    background-color: ${({variant:o,theme:r})=>o==="platform"?"#f2f6f9":r.colors.grayLighter};
  }
  &:focus,
  &:active {
    background-color: ${({variant:o,theme:r})=>o==="platform"?"#d6e1eb":r.colors.gray};
    color: ${({theme:o})=>o.colors.grayDark};
    outline: none;
  }

  ${({variant:o,disabled:r,theme:t})=>r&&p`
      cursor: not-allowed;
      background-color: ${o==="platform"?"#d6e1eb":t.colors.gray};
      &:hover,
      &:focus,
      &:active {
        background-color: ${o==="platform"?"#d6e1eb":t.colors.gray};
        outline: none;
      }
    `};
`,l=({disabled:o,children:r,onClick:t,...s})=>{const{variant:i}=m();return o?e.jsx(n,{disabled:o,variant:i,...s,children:r}):e.jsx(n,{onClick:t,variant:i,...s,children:r})};l.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const u=o=>e.jsx(d.Provider,{value:o,children:e.jsx(f,{children:o.children})});u.Item=l;u.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ disabled, children, onClick, ...rest }",optional:!1,type:null}],returns:null}],displayName:"List"};export{u as L};
