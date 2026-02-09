import{r as a,d as C,n as p,j as i}from"./iframe-0cFjXTKO.js";/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),l=r=>{const e=L(r);return e.charAt(0).toUpperCase()+e.slice(1)},d=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),y=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=a.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:s="",children:n,iconNode:u,...c},f)=>a.createElement("svg",{ref:f,...k,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:d("lucide",s),...!n&&!y(c)&&{"aria-hidden":"true"},...c},[...u.map(([w,g])=>a.createElement(w,g)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(r,e)=>{const t=a.forwardRef(({className:o,...s},n)=>a.createElement(x,{ref:n,iconNode:e,className:d(`lucide-${h(l(r))}`,`lucide-${r}`,o),...s}));return t.displayName=l(r),t},I=C.span`
  display: inline-flex;

  svg {
    width: ${({theme:r,size:e})=>r.icons[e]};
    height: ${({theme:r,size:e})=>r.icons[e]};
  }
`,m=(r,{size:e="md",color:t,...o},s)=>{var n;return i.jsx(I,{size:e,children:i.jsx(r,{...o,fill:"none",stroke:t||((n=s==null?void 0:s.colors)==null?void 0:n.grayDarker),strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})},v=r=>t=>{const o=p();return m(r,t,o)},G=({icon:r,...e})=>{const t=p();return m(r,e,t)};G.__docgenInfo={description:"",methods:[],displayName:"LucideIcon",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<React.SVGProps<SVGSVGElement>>",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]},description:""}}};export{G as L,v as a,V as c};
