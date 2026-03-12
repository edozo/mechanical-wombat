import{r as n,j as e}from"./iframe-B7Hjg5Rr.js";import{D as h}from"./DisplayBox.styles-cbGffDmj.js";import{c as i,a as _,L as t}from"./Lucide-BfT9y3dH.js";import{D as u}from"./DisplayBox-D2uDCwll.js";import{a as y}from"./Typography-BCwW3sJ5.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],v=i("check",B);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],f=i("search",D);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],g=i("triangle",C);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],b=i("x",T),S=o=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},n.createElement("circle",{cx:12,cy:12,r:8,stroke:"currentColor",strokeWidth:2}),n.createElement("path",{d:"M8 12h8",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round"})),j=_(S),A={title:"Components/Lucide Icons",component:t,argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]},color:{control:{type:"color"}},iconKey:{control:{type:"select"},options:["Triangle","Check","Search","X","CustomExample"]},icon:{table:{disable:!0}},children:{table:{disable:!0}},background:{table:{disable:!0}},borderRadius:{table:{disable:!0}}}},w={Triangle:g,Check:v,Search:f,X:b,CustomExample:j},E=[{name:"Triangle",component:e.jsx(t,{icon:g})},{name:"Check",component:e.jsx(t,{icon:v})},{name:"Custom example",component:e.jsx(j,{})},{name:"Search",component:e.jsx(t,{icon:f})},{name:"X",component:e.jsx(t,{icon:b})}],s=({size:o,color:k,iconKey:c})=>e.jsxs("div",{children:[e.jsx(u,{children:e.jsxs("div",{style:{padding:"8px",textAlign:"center"},children:[e.jsx(t,{icon:w[c],size:o,color:k}),e.jsx(h,{style:{width:"80px"},children:c})]})}),e.jsxs(y,{children:["For the full set of icons available visit - ",e.jsx("a",{href:"https://lucide.dev/icons/",target:"_blank",rel:"noopener noreferrer",children:"lucide.dev/icons"})]})]});s.args={size:"md",color:"#4c4c4c",iconKey:"Search"};const r=()=>e.jsxs("div",{children:[e.jsx(u,{children:E.map(o=>e.jsxs("div",{style:{padding:"8px",textAlign:"center"},children:[o.component,e.jsx(h,{style:{width:"80px"},children:o.name})]},o.name))}),e.jsxs(y,{children:["For the full set of icons available visit - ",e.jsx("a",{href:"https://lucide.dev/icons/",target:"_blank",rel:"noopener noreferrer",children:"lucide.dev/icons"})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Controls"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,l,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`({
  size,
  color,
  iconKey
}) => <div>
    <DisplayBoxWrapper>
      <div style={{
      padding: '8px',
      textAlign: 'center'
    }}>
        <LucideIcon icon={iconMap[iconKey]} size={size} color={color} />
        <DisplayBoxSubTitle style={{
        width: '80px'
      }}>{iconKey}</DisplayBoxSubTitle>
      </div>
    </DisplayBoxWrapper>
    <TextBase>For the full set of icons available visit - <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer">lucide.dev/icons</a></TextBase>
  </div>`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div>
    <DisplayBoxWrapper>
      {icons.map(icon => <div style={{
      padding: '8px',
      textAlign: 'center'
    }} key={icon.name}>
          {icon.component}
          <DisplayBoxSubTitle style={{
        width: '80px'
      }}>{icon.name}</DisplayBoxSubTitle>
        </div>)}
    </DisplayBoxWrapper>
    <TextBase>For the full set of icons available visit - <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer">lucide.dev/icons</a></TextBase>
  </div>`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const F=["Controls","Default"];export{s as Controls,r as Default,F as __namedExportsOrder,A as default};
