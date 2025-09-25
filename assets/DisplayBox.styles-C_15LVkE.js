import{d as o}from"./iframe-C_eeFh7-.js";const a=o.div`
  margin: ${e=>e.theme.spacing.small};
`,t=o.div`
  background: ${e=>e.background?e.theme.colors[e.background]:e.theme.colors.gray};
  border-radius: ${e=>e.borderRadius?e.theme.borderRadius[e.borderRadius]:e.theme.borderRadius.small};
  width: ${e=>e.size?e.size:"100px"};
  height: ${e=>e.size?e.size:"100px"};
  border: 1px solid ${e=>e.theme.colors.gray};
`,s=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${e=>e.theme.spacing.base};
  @media ${e=>e.theme.minMedia.xl} {
    border: 2px dashed red;
  }
`,i=o.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.grayDark};
`,d=o.p`
  font-size: 8px;
  line-height: 11px;
  font-weight: bold;
  margin-bottom: 0;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.grayDark};
  overflow-wrap: break-word;
  hyphens: auto;
`,l=o.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: regular;
  color: ${e=>e.theme.colors.grayDark};
  margin-top: 4px;
`;export{d as D,s as S,i as a,l as b,a as c,t as d};
