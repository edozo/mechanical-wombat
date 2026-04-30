import{c as i,K as s,j as o}from"./iframe-DVQN8M8q.js";const p=i.span`
  display: inline-flex;

  svg {
    width: ${({theme:e,size:n})=>e.icons[n]};
    height: ${({theme:e,size:n})=>e.icons[n]};
  }
`,a=(e,{size:n="md",color:r,...t},c)=>o.jsx(p,{size:n,children:o.jsx(e,{...t,fill:"none",stroke:r||c?.colors?.grayDarker,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),d=e=>r=>{const t=s();return a(e,r,t)},l=({icon:e,...n})=>{const r=s();return a(e,n,r)};l.__docgenInfo={description:"",methods:[],displayName:"LucideIcon",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<React.SVGProps<SVGSVGElement>>",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]},description:""}}};export{l as L,d as c};
