import{l as n,d as a}from"./iframe-CcAdSECF.js";const i=(o,l)=>{if(l)return o.colors.aliases[l]||o.colors[l]||l},t=a.div`
  display: inline-block;
  font-family: ${({theme:o})=>o.font.family.main};
  font-weight: ${({theme:o})=>o.font.weight.bold};
  color: ${({theme:o,$color:l})=>i(o,l)};
  background-color: ${({theme:o,$background:l})=>i(o,l)};
  text-align: center;

  ${({theme:o,$size:l,$background:s})=>{const r=i(o,s);return l==="standard"&&n`
        padding: ${o.spacing.xxsmall} ${o.spacing.xsmall};
        border-radius: ${o.borderRadius.standard};
        border: 2px solid ${r&&i(o,r)};
        font-size: ${o.font.size.text.xsmall};
        line-height: ${o.font.lineHeight.text.xsmall};
      `}}

  ${({theme:o,$size:l,$background:s})=>{const r=i(o,s);return l==="small"&&n`
        padding: 2px ${o.spacing.xxsmall};
        border-radius: ${o.borderRadius.small};
        font-size: ${o.font.size.text.xxsmall};
        line-height: ${o.font.lineHeight.text.xxsmall};
        border: 2px solid ${r&&i(o,r)};
      `}}

  ${({theme:o,$size:l,$background:s})=>{const r=i(o,s);return l==="xxsmall"&&n`
        padding: 0 2px;
        border-radius: ${o.borderRadius.small};
        font-size: 6px;
        line-height: 10px;
        border: 2px solid ${r&&i(o,r)};
      `}}
`;export{t as S};
