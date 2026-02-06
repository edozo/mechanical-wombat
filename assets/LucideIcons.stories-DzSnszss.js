import{r as i,d as $,n as k,j as t}from"./iframe-CcAdSECF.js";import{D as b}from"./DisplayBox.styles-9RHbTFHG.js";import{D as C}from"./DisplayBox-DzHf5GRY.js";import{a as j}from"./Typography-LtNBzG3i.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),R=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,r,n)=>n?n.toUpperCase():r.toLowerCase()),u=e=>{const o=R(e);return o.charAt(0).toUpperCase()+o.slice(1)},w=(...e)=>e.filter((o,r,n)=>!!o&&o.trim()!==""&&n.indexOf(o)===r).join(" ").trim(),V=e=>{for(const o in e)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=i.forwardRef(({color:e="currentColor",size:o=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:s,iconNode:E,...m},I)=>i.createElement("svg",{ref:I,...N,width:o,height:o,stroke:e,strokeWidth:n?Number(r)*24/Number(o):r,className:w("lucide",a),...!s&&!V(m)&&{"aria-hidden":"true"},...m},[...E.map(([W,A])=>i.createElement(W,A)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,o)=>{const r=i.forwardRef(({className:n,...a},s)=>i.createElement(M,{ref:s,iconNode:o,className:w(`lucide-${G(u(e))}`,`lucide-${e}`,n),...a}));return r.displayName=u(e),r};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],_=p("check",z);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],S=p("search",K);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],T=p("triangle",P);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],B=p("x",F),q=$.span`
  display: inline-flex;

  svg {
    width: ${({theme:e,size:o})=>e.icons[o]};
    height: ${({theme:e,size:o})=>e.icons[o]};
  }
`,L=(e,{size:o="md",color:r,...n},a)=>{var s;return t.jsx(q,{size:o,children:t.jsx(e,{...n,fill:"none",stroke:r||((s=a==null?void 0:a.colors)==null?void 0:s.grayDarker),strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})},X=e=>r=>{const n=k();return L(e,r,n)},c=({icon:e,...o})=>{const r=k();return L(e,o,r)};c.__docgenInfo={description:"",methods:[],displayName:"LucideIcon",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<React.SVGProps<SVGSVGElement>>",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]},description:""}}};const Z=e=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("circle",{cx:12,cy:12,r:8,stroke:"currentColor",strokeWidth:2}),i.createElement("path",{d:"M8 12h8",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round"})),D=X(Z),oe={title:"Components/Lucide Icons",component:c,argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]},color:{control:{type:"color"}},iconKey:{control:{type:"select"},options:["Triangle","Check","Search","X","CustomExample"]},icon:{table:{disable:!0}},children:{table:{disable:!0}},background:{table:{disable:!0}},borderRadius:{table:{disable:!0}}}},O={Triangle:T,Check:_,Search:S,X:B,CustomExample:D},U=[{name:"Triangle",component:t.jsx(c,{icon:T})},{name:"Check",component:t.jsx(c,{icon:_})},{name:"Custom example",component:t.jsx(D,{})},{name:"Search",component:t.jsx(c,{icon:S})},{name:"X",component:t.jsx(c,{icon:B})}],l=({size:e,color:o,iconKey:r})=>t.jsxs("div",{children:[t.jsx(C,{children:t.jsxs("div",{style:{padding:"8px",textAlign:"center"},children:[t.jsx(c,{icon:O[r],size:e,color:o}),t.jsx(b,{style:{width:"80px"},children:r})]})}),t.jsxs(j,{children:["For the full set of icons available visit - ",t.jsx("a",{href:"https://lucide.dev/icons/",target:"_blank",rel:"noopener noreferrer",children:"lucide.dev/icons"})]})]});l.args={size:"md",color:"#4c4c4c",iconKey:"Search"};const d=()=>t.jsxs("div",{children:[t.jsx(C,{children:U.map(e=>t.jsxs("div",{style:{padding:"8px",textAlign:"center"},children:[e.component,t.jsx(b,{style:{width:"80px"},children:e.name})]},e.name))}),t.jsxs(j,{children:["For the full set of icons available visit - ",t.jsx("a",{href:"https://lucide.dev/icons/",target:"_blank",rel:"noopener noreferrer",children:"lucide.dev/icons"})]})]});l.__docgenInfo={description:"",methods:[],displayName:"Controls"};d.__docgenInfo={description:"",methods:[],displayName:"Default"};var h,x,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
  </div>`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,f,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div>
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
  </div>`,...(v=(f=d.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const te=["Controls","Default"];export{l as Controls,d as Default,te as __namedExportsOrder,oe as default};
