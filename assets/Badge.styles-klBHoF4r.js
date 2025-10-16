import{l as r,d as l}from"./iframe-GMHNUVQT.js";const o=(e,t)=>{if(t)return e.colors.aliases[t]||e.colors[t]||t},n=l.div`
  display: inline-block;
  font-family: ${e=>e.theme.font.family.main};
  font-weight: ${e=>e.theme.font.weight.bold};
  color: ${e=>o(e.theme,e.$color)};
  background-color: ${e=>o(e.theme,e.$background)};
  text-align: center;

  ${e=>{const t=o(e.theme,e.$background);return e.$size==="standard"&&r`
        padding: ${e.theme.spacing.xxsmall} ${e.theme.spacing.xsmall};
        border-radius: ${e.theme.borderRadius.standard};
        border: 2px solid ${t&&o(e.theme,t)};
        font-size: ${e.theme.font.size.text.xsmall};
        line-height: ${e.theme.font.lineHeight.text.xsmall};
      `}}

  ${e=>{const t=o(e.theme,e.$background);return e.$size==="small"&&r`
        padding: 2px ${e.theme.spacing.xxsmall};
        border-radius: ${e.theme.borderRadius.small};
        font-size: ${e.theme.font.size.text.xxsmall};
        line-height: ${e.theme.font.lineHeight.text.xxsmall};
        border: 2px solid ${t&&o(e.theme,t)};
      `}}

  ${e=>{const t=o(e.theme,e.$background);return e.$size==="xxsmall"&&r`
        padding: 0 2px;
        border-radius: ${e.theme.borderRadius.small};
        font-size: 6px;
        line-height: 10px;
        border: 2px solid ${t&&o(e.theme,t)};
      `}}
`;export{n as S};
