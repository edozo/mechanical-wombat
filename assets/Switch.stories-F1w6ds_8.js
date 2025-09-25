import{l as s,d as n,j as t,r as w}from"./iframe-BGMA8d48.js";import"./preload-helper-C1FmrZbK.js";const g=n.input`
  display: none;
`,x=n.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #ccc;
  border-radius: 20px;
  margin: 0;
`,h=n.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  &::before,
  &::after {
    display: inline-flex;
    float: left;
    width: 50%;
    height: 26px;
    padding: 0;
    font-size: 12px;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  &::before {
    content: '';
    text-transform: uppercase;
    padding-left: 6px;
    padding-right: 24px;
    background-color: ${e=>e.theme.colors.aliases.primary};
    color: #fff;
  }

  &::after {
    content: '';
    text-transform: uppercase;
    padding-right: 6px;
    padding-left: 24px;
    background-color: #ccc;
    color: #fff;
  }

  ${e=>e.disabled&&s`
      background-color: #ccc;
      cursor: not-allowed;
      &:before {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `};
  ${e=>e.size==="small"&&s`
      &:after,
      &:before {
        height: 20px;
      }
    `}
`,b=n.span`
  display: block;
  width: 18px;
  margin: 4px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 30px;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
  ${e=>e.disabled&&s`
      background-color: #ccc;
      cursor: not-allowed;
      &::before {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `};
  ${e=>e.size==="small"&&s`
      width: 16px;
      right: 38px;
      margin: 2px;
    `}
`,k=n.div`
  position: relative;
  width: 56px;
  display: inline-block;
  vertical-align: middle;
  user-select: none;
  text-align: left;
  > ${g}:checked + ${x} {
    ${h} {
      margin-left: 0;
    }
    ${b} {
      right: 0px;
    }
  }

  ${e=>e.size==="small"&&s`
      width: 58px;
    `}
`,y=({disabled:e,id:r,currentValue:l,size:a="default",onChange:d,onText:c,offText:i})=>t.jsxs(k,{size:a,children:[t.jsx(g,{"data-testid":r,type:"checkbox",id:r,checked:l,onChange:d,disabled:e}),t.jsxs(x,{htmlFor:r,children:[t.jsx(h,{"data-yes":c,"data-no":i,size:a}),t.jsx(b,{disabled:e,size:a,role:"checkbox"})]})]});y.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!0,tsType:{name:"string"},description:""},currentValue:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onText:{required:!1,tsType:{name:"string"},description:""},offText:{required:!1,tsType:{name:"string"},description:""}}};const p=({defaultToggleValue:e,size:r="default",disabled:l,id:a,onText:d,offText:c})=>{const[i,T]=w.useState(e||!1);return t.jsx(y,{currentValue:i,onChange:()=>T(!i),id:a,size:r,disabled:l,onText:d,offText:c})};p.__docgenInfo={description:"",methods:[],displayName:"SwitchWrapper",props:{defaultToggleValue:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!0,tsType:{name:"boolean"},description:""},id:{required:!0,tsType:{name:"string"},description:""},onText:{required:!0,tsType:{name:"string"},description:""},offText:{required:!0,tsType:{name:"string"},description:""}}};const S={title:"Components/Switch",argTypes:{onChange:{action:"changed"}},component:p},q=e=>t.jsx(p,{...e}),o=q.bind({});o.args={defaultToggleValue:!0,size:"small",offText:"off",onText:"on",disabled:!1};var u,f,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"args => <SwitchWrapper {...args} />",...(m=(f=o.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const $=["Controlled"];export{o as Controlled,$ as __namedExportsOrder,S as default};
