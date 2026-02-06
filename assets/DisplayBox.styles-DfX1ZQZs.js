import{d as o}from"./iframe-CSSP5ieD.js";const a=o.div`
  margin: ${e=>e.theme.spacing.small};
`,s=(e,r)=>r?r in e.colors?e.colors[r]:r:"#FF6600",i=o.div`
  background: ${e=>s(e.theme,e.background)};
  border-radius: ${e=>e.borderRadius?e.theme.borderRadius[e.borderRadius]:e.theme.borderRadius.small};
  width: ${e=>e.size?e.size:"100px"};
  height: ${e=>e.size?e.size:"100px"};
  border: 1px solid ${e=>e.theme.colors.gray};
`,l=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${e=>e.theme.spacing.base};
  @media ${e=>e.theme.minMedia.xl} {
    border: ${e=>e.showBorder!==!1?`2px dashed ${e.theme.colors.red}`:"none"};
  }
`,d=o.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.grayDark};
`,n=o.p`
  font-size: 8px;
  line-height: 11px;
  font-weight: bold;
  margin-bottom: 0;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.grayDark};
  overflow-wrap: break-word;
  hyphens: auto;
`,p=o.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: regular;
  color: ${e=>e.theme.colors.grayDark};
  margin-top: 4px;
`;export{n as D,l as S,d as a,p as b,a as c,i as d};
