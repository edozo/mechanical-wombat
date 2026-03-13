import{s as n,c as a}from"./iframe-Bo766xwD.js";const l=(o,r)=>{if(r)return o.colors.aliases[r]||o.colors[r]||r},t=a.div`
  display: inline-block;
  font-family: ${({theme:o})=>o.font.family.main};
  font-weight: ${({theme:o})=>o.font.weight.bold};
  color: ${({theme:o,$color:r})=>l(o,r)};
  background-color: ${({theme:o,$background:r})=>l(o,r)};
  text-align: center;

  ${({theme:o,$size:r,$background:i})=>{const s=l(o,i);return r==="standard"&&n`
        padding: ${o.spacing.xxsmall} ${o.spacing.xsmall};
        border-radius: ${o.borderRadius.standard};
        border: 2px solid ${s&&l(o,s)};
        font-size: ${o.font.size.text.xsmall};
        line-height: ${o.font.lineHeight.text.xsmall};
      `}}

  ${({theme:o,$size:r,$background:i})=>{const s=l(o,i);return r==="small"&&n`
        padding: 2px ${o.spacing.xxsmall};
        border-radius: ${o.borderRadius.small};
        font-size: ${o.font.size.text.xxsmall};
        line-height: ${o.font.lineHeight.text.xxsmall};
        border: 2px solid ${s&&l(o,s)};
      `}}

  ${({theme:o,$size:r,$background:i})=>{const s=l(o,i);return r==="xxsmall"&&n`
        padding: 0 2px;
        border-radius: ${o.borderRadius.small};
        font-size: 6px;
        line-height: 10px;
        border: 2px solid ${s&&l(o,s)};
      `}}
`;export{t as S};
