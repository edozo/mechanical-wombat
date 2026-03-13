import{c as s}from"./iframe-CWZzjXvL.js";const t=s.div`
  margin: ${({theme:o})=>o.spacing.small};
`,a=(o,r)=>r?r in o.colors?o.colors[r]:r:"#FF6600",i=s.div`
  background: ${({theme:o,background:r})=>a(o,r)};
  border-radius: ${({theme:o,borderRadius:r})=>r?o.borderRadius[r]:o.borderRadius.small};
  width: ${({size:o})=>o||"100px"};
  height: ${({size:o})=>o||"100px"};
  border: 1px solid ${({theme:o})=>o.colors.gray};
`,l=s.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${({theme:o})=>o.spacing.base};
  @media ${({theme:o})=>o.minMedia.xl} {
    border: ${({theme:o,showBorder:r})=>r!==!1?`2px dashed ${o.colors.red}`:"none"};
  }
`,p=s.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  color: ${({theme:o})=>o.colors.grayDark};
`,n=s.p`
  font-size: 8px;
  line-height: 11px;
  font-weight: bold;
  margin-bottom: 0;
  text-transform: uppercase;
  color: ${({theme:o})=>o.colors.grayDark};
  overflow-wrap: break-word;
  hyphens: auto;
`,d=s.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: regular;
  color: ${({theme:o})=>o.colors.grayDark};
  margin-top: 4px;
`;export{n as D,l as S,p as a,d as b,t as c,i as d};
