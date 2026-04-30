import{c as n,s as i,i as l,j as s}from"./iframe-DVQN8M8q.js";import"./preload-helper-PPVm8Dsz.js";const c=n.div`
  background-color: ${({theme:e})=>e.colors.aliases.primary};
  border-radius: ${({theme:e})=>e.borderRadius.standard};
  display: inline-block;
`,m=n.button`
  font-size: ${({theme:e})=>e.font.size.text.small};
  line-height: ${({theme:e})=>e.font.lineHeight.text.base};
  font-weight: ${({theme:e})=>e.font.weight.semibold};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.white};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.standard};
  padding: 0 ${({theme:e})=>e.spacing.small};
  margin: ${({theme:e})=>e.spacing.xxsmall};
  &:hover {
    background-color: ${({theme:e})=>e.colors.white};
    color: ${({theme:e})=>e.colors.aliases.primary};
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
  ${({theme:e,$isActive:t})=>t&&i`
      background-color: ${e.colors.white};
      color: ${e.colors.aliases.primary};
    `};
`;class a extends l.Component{constructor(){super(...arguments),this.state={activeItem:this.props.selectedItem},this.handleClick=t=>{this.setState({activeItem:t}),this.props.onChange(t)}}componentDidUpdate(t){this.props.selectedItem.value&&this.props.selectedItem.value!==t.selectedItem.value&&this.setState({activeItem:this.props.selectedItem})}render(){return s.jsx(c,{children:this.props.items.map(t=>s.jsx(m,{type:"button",onClick:()=>this.handleClick(t),$isActive:this.state.activeItem.value===t.value,children:t.label},t.value))})}}a.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[{name:"item",optional:!1,type:{name:"Item",alias:"Item"}}],returns:{type:{name:"void"}}}],displayName:"ToggleGroup",props:{$isActive:{required:!1,tsType:{name:"boolean"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"Item"}],raw:"Item[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: Item) => void",signature:{arguments:[{type:{name:"Item"},name:"item"}],return:{name:"void"}}},description:""},selectedItem:{required:!0,tsType:{name:"Item"},description:""}}};const u={title:"Components/ToggleGroup",component:a,argTypes:{onChange:{action:"changed"}}},r=[{label:"Item A",value:"itema"},{label:"Item B",value:"itemb"},{label:"Item C",value:"itemc"}],o=e=>s.jsx(a,{items:r,onChange:e.onChange,selectedItem:r[1]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <ToggleGroup items={items} onChange={args.onChange} selectedItem={items[1]} />",...o.parameters?.docs?.source}}};const g=["Default"];export{o as Default,g as __namedExportsOrder,u as default};
