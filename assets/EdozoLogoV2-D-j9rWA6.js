import{d as s,r as n,j as o}from"./iframe-B7Hjg5Rr.js";import{S as p}from"./edozo-logo-j80GRS-N.js";const d=s.div`
  display: inline-flex;
  gap: ${({theme:e})=>e.spacing.xs};
`,m=s.div`
  display: inline-flex;
  width: ${({$size:e})=>e==="small"?"54px":"84px"};
  height: ${({$size:e})=>e==="small"?"19px":"26px"};
`,c=s.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({$size:e,theme:a})=>e==="small"?a.typography.scale.sm.size:a.typography.scale.xl.size};
  line-height: ${({$size:e,theme:a})=>e==="small"?a.typography.scale.sm.lineHeight:a.typography.scale.xl.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.neutral[800]};
  text-transform: capitalize;
`,l=n.forwardRef(({appName:e,size:a="standard",...t},i)=>{const r=e==="edozo";return o.jsxs(d,{ref:i,...t,children:[o.jsx(m,{$size:a,children:o.jsx(p,{})}),!r&&o.jsx(c,{$size:a,children:e})]})});l.displayName="EdozoLogoV2";l.__docgenInfo={description:"",methods:[],displayName:"EdozoLogoV2",props:{appName:{required:!0,tsType:{name:"union",raw:"'edozo' | 'maps' | 'occupiers' | 'insight' | 'reports' | 'extract'",elements:[{name:"literal",value:"'edozo'"},{name:"literal",value:"'maps'"},{name:"literal",value:"'occupiers'"},{name:"literal",value:"'insight'"},{name:"literal",value:"'reports'"},{name:"literal",value:"'extract'"}]},description:"App name displayed as text alongside the Edozo wordmark."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'standard'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'standard'"}]},description:"Visual size of the logo.",defaultValue:{value:"'standard'",computed:!1}}}};export{l as E};
