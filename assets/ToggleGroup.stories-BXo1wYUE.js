import{d as m,l as c,R as d,j as s}from"./iframe-ERl_u88-.js";import"./preload-helper-C1FmrZbK.js";const p=m.div`
  background-color: ${e=>e.theme.colors.aliases.primary};
  border-radius: ${e=>e.theme.borderRadius.standard};
  display: inline-block;
`,u=m.button`
  font-size: ${e=>e.theme.font.size.text.small};
  line-height: ${e=>e.theme.font.lineHeight.text.base};
  font-weight: ${e=>e.theme.font.weight.semibold};
  background-color: transparent;
  color: ${e=>e.theme.colors.white};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.standard};
  padding: 0 ${e=>e.theme.spacing.small};
  margin: ${e=>e.theme.spacing.xxsmall};
  &:hover {
    background-color: ${e=>e.theme.colors.white};
    color: ${e=>e.theme.colors.aliases.primary};
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
  ${e=>e.$isActive&&c`
      background-color: ${e.theme.colors.white};
      color: ${e.theme.colors.aliases.primary};
    `};
`;class a extends d.Component{constructor(){super(...arguments),this.state={activeItem:this.props.selectedItem},this.componentDidUpdate=t=>{this.props.selectedItem.value&&this.props.selectedItem.value!==t.selectedItem.value&&this.setState({activeItem:this.props.selectedItem})},this.handleClick=t=>{this.setState({activeItem:t}),this.props.onChange(t)}}render(){return s.jsx(p,{children:this.props.items.map(t=>s.jsx(u,{type:"button",onClick:()=>this.handleClick(t),$isActive:this.state.activeItem.value===t.value,children:t.label},t.value))})}}a.__docgenInfo={description:"",methods:[{name:"componentDidUpdate",docblock:null,modifiers:[],params:[{name:"prevProps",optional:!1,type:{name:"any"}}],returns:{type:{name:"void"}}},{name:"handleClick",docblock:null,modifiers:[],params:[{name:"item",optional:!1,type:{name:"Item",alias:"Item"}}],returns:{type:{name:"void"}}}],displayName:"ToggleGroup",props:{$isActive:{required:!1,tsType:{name:"boolean"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: Item) => void",signature:{arguments:[{type:{name:"Item"},name:"item"}],return:{name:"void"}}},description:""},selectedItem:{required:!0,tsType:{name:"Item"},description:""}}};const I={title:"Components/ToggleGroup",component:a,argTypes:{onChange:{action:"changed"}}},r=[{label:"Item A",value:"itema"},{label:"Item B",value:"itemb"},{label:"Item C",value:"itemc"}],o=e=>s.jsx(a,{items:r,onChange:e.onChange,selectedItem:r[1]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var n,i,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"args => <ToggleGroup items={items} onChange={args.onChange} selectedItem={items[1]} />",...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,I as default};
