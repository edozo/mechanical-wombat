import{l as n,d as s,j as t,r as w}from"./iframe-dDxe9d4u.js";import"./preload-helper-C1FmrZbK.js";const g=s.input`
  display: none;
`,x=s.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #ccc;
  border-radius: 20px;
  margin: 0;
`,h=s.span`
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
    background-color: ${({theme:e})=>e.colors.aliases.primary};
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

  ${({disabled:e})=>e&&n`
      background-color: #ccc;
      cursor: not-allowed;
      &:before {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `};
  ${({size:e})=>e==="small"&&n`
      &:after,
      &:before {
        height: 20px;
      }
    `}
`,b=s.span`
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
  ${({disabled:e})=>e&&n`
      background-color: #ccc;
      cursor: not-allowed;
      &::before {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `};
  ${({size:e})=>e==="small"&&n`
      width: 16px;
      right: 38px;
      margin: 2px;
    `}
`,k=s.div`
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

  ${({size:e})=>e==="small"&&n`
      width: 58px;
    `}
`,y=({disabled:e,id:r,currentValue:l,size:o="default",onChange:d,onText:c,offText:i})=>t.jsxs(k,{size:o,children:[t.jsx(g,{"data-testid":r,type:"checkbox",id:r,checked:l,onChange:d,disabled:e}),t.jsxs(x,{htmlFor:r,children:[t.jsx(h,{"data-yes":c,"data-no":i,size:o}),t.jsx(b,{disabled:e,size:o,role:"checkbox"})]})]});y.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!0,tsType:{name:"string"},description:""},currentValue:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onText:{required:!1,tsType:{name:"string"},description:""},offText:{required:!1,tsType:{name:"string"},description:""}}};const p=({defaultToggleValue:e,size:r="default",disabled:l,id:o,onText:d,offText:c})=>{const[i,T]=w.useState(e||!1);return t.jsx(y,{currentValue:i,onChange:()=>T(!i),id:o,size:r,disabled:l,onText:d,offText:c})};p.__docgenInfo={description:"",methods:[],displayName:"SwitchWrapper",props:{defaultToggleValue:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!0,tsType:{name:"boolean"},description:""},id:{required:!0,tsType:{name:"string"},description:""},onText:{required:!0,tsType:{name:"string"},description:""},offText:{required:!0,tsType:{name:"string"},description:""}}};const S={title:"Components/Switch",argTypes:{onChange:{action:"changed"}},component:p},q=e=>t.jsx(p,{...e}),a=q.bind({});a.args={defaultToggleValue:!0,size:"small",offText:"off",onText:"on",disabled:!1};var u,f,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <SwitchWrapper {...args} />",...(m=(f=a.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const $=["Controlled"];export{a as Controlled,$ as __namedExportsOrder,S as default};
