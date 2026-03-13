import{s as i,c,j as r,r as j}from"./iframe-CWZzjXvL.js";import"./preload-helper-C1FmrZbK.js";const y=c.input`
  display: none;
`,k=c.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #ccc;
  border-radius: 20px;
  margin: 0;
`,v=c.span`
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

  ${({disabled:e})=>e&&i`
      background-color: #ccc;
      cursor: not-allowed;
      &:before {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `};
  ${({size:e})=>e==="small"&&i`
      &:after,
      &:before {
        height: 20px;
      }
    `}
`,S=c.span`
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
  ${({disabled:e})=>e&&i`
      background-color: #ccc;
      cursor: not-allowed;
      &::before {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `};
  ${({size:e})=>e==="small"&&i`
      width: 16px;
      right: 38px;
      margin: 2px;
    `}
`,$=c.div`
  position: relative;
  width: 56px;
  display: inline-block;
  vertical-align: middle;
  user-select: none;
  text-align: left;
  > ${y}:checked + ${k} {
    ${v} {
      margin-left: 0;
    }
    ${S} {
      right: 0px;
    }
  }

  ${({size:e})=>e==="small"&&i`
      width: 58px;
    `}
`,q=({disabled:e,id:a,currentValue:t,size:s="default",onChange:d,onText:p,offText:l})=>r.jsxs($,{size:s,children:[r.jsx(y,{"data-testid":a,type:"checkbox",id:a,checked:t,onChange:d,disabled:e}),r.jsxs(k,{htmlFor:a,children:[r.jsx(v,{"data-yes":p,"data-no":l,size:s}),r.jsx(S,{disabled:e,size:s,role:"checkbox"})]})]});q.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!0,tsType:{name:"string"},description:""},currentValue:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onText:{required:!1,tsType:{name:"string"},description:""},offText:{required:!1,tsType:{name:"string"},description:""}}};const f=({defaultToggleValue:e,size:a="default",disabled:t,id:s,onText:d,offText:p})=>{const[l,C]=j.useState(e||!1);return r.jsx(q,{currentValue:l,onChange:()=>C(!l),id:s,size:a,disabled:t,onText:d,offText:p})};f.__docgenInfo={description:"",methods:[],displayName:"SwitchWrapper",props:{defaultToggleValue:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!0,tsType:{name:"boolean"},description:""},id:{required:!0,tsType:{name:"string"},description:""},onText:{required:!0,tsType:{name:"string"},description:""},offText:{required:!0,tsType:{name:"string"},description:""}}};const{expect:u,userEvent:g,within:I}=__STORYBOOK_MODULE_TEST__,B={title:"Components/Switch",argTypes:{onChange:{action:"changed"}},component:f},_=e=>r.jsx(f,{...e}),n=_.bind({});n.args={id:"switch-story",defaultToggleValue:!0,size:"small",offText:"off",onText:"on",disabled:!1};const o=_.bind({});o.args={id:"switch-interactions",defaultToggleValue:!1,size:"default",offText:"No",onText:"Yes",disabled:!1};o.play=async({canvasElement:e})=>{const t=I(e).getByTestId("switch-interactions");u(t).not.toBeChecked(),await g.click(t),u(t).toBeChecked(),await g.click(t),u(t).not.toBeChecked()};var m,h,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"args => <SwitchWrapper {...args} />",...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,T,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"args => <SwitchWrapper {...args} />",...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const O=["Controlled","Interactions"];export{n as Controlled,o as Interactions,O as __namedExportsOrder,B as default};
