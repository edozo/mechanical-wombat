import{s as u,c as g,p as E,r as b,j as t}from"./iframe-Ym7xYKuD.js";import{S as X,a as F}from"./index-BewngeI9.js";const Y=(o,i,n)=>{const{indigo:r}=o.colors,{teal:a}=o.colors,{neutral:e}=o.colors;return{primary:{solid:{background:r[900],border:r[900],color:e[50],hoverBackground:r[50],hoverBorder:r[900],hoverColor:r[900],activeBackground:r[50],activeBorder:r[900],activeColor:r[900],disabledBackground:e[200],disabledBorder:e[200],disabledColor:e[500]},outline:{background:"transparent",border:r[900],color:r[900],hoverBackground:r[100],hoverBorder:r[900],hoverColor:r[900],activeBackground:r[950],activeBorder:r[950],activeColor:e[50],disabledBackground:"transparent",disabledBorder:e[300],disabledColor:e[500]},ghost:{background:"transparent",border:"transparent",color:r[900],hoverBackground:r[50],hoverBorder:"transparent",hoverColor:r[900],activeBackground:r[100],activeBorder:"transparent",activeColor:r[950],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:e[500]}},secondary:{solid:{background:r[600],border:r[600],color:r[50],hoverBackground:r[50],hoverBorder:r[600],hoverColor:r[600],activeBackground:r[200],activeBorder:r[600],activeColor:r[50],disabledBackground:e[200],disabledBorder:e[200],disabledColor:e[500]},outline:{background:"transparent",border:r[500],color:r[700],hoverBackground:r[50],hoverBorder:r[600],hoverColor:r[800],activeBackground:r[100],activeBorder:r[700],activeColor:r[900],disabledBackground:"transparent",disabledBorder:e[300],disabledColor:e[500]},ghost:{background:"transparent",border:"transparent",color:r[700],hoverBackground:r[50],hoverBorder:"transparent",hoverColor:r[800],activeBackground:r[100],activeBorder:"transparent",activeColor:r[900],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:e[500]}},tertiary:{solid:{background:e[700],border:e[700],color:e[50],hoverBackground:e[100],hoverBorder:e[700],hoverColor:e[700],activeBackground:e[50],activeBorder:e[700],activeColor:e[700],disabledBackground:e[200],disabledBorder:e[200],disabledColor:e[500]},outline:{background:"transparent",border:e[700],color:e[700],hoverBackground:e[200],hoverBorder:e[700],hoverColor:e[700],activeBackground:e[800],activeBorder:e[800],activeColor:e[50],disabledBackground:"transparent",disabledBorder:e[300],disabledColor:e[500]},ghost:{background:"transparent",border:"transparent",color:e[600],hoverBackground:e[200],hoverBorder:"transparent",hoverColor:e[700],activeBackground:e[200],activeBorder:"transparent",activeColor:e[800],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:e[500]}},quaternary:{solid:{background:a[400],border:a[400],color:e[50],hoverBackground:a[50],hoverBorder:a[500],hoverColor:a[600],activeBackground:a[200],activeBorder:a[600],activeColor:a[950],disabledBackground:e[200],disabledBorder:e[200],disabledColor:e[500]},outline:{background:"transparent",border:a[500],color:a[700],hoverBackground:a[50],hoverBorder:a[600],hoverColor:a[700],activeBackground:a[100],activeBorder:a[700],activeColor:a[900],disabledBackground:"transparent",disabledBorder:e[300],disabledColor:e[500]},ghost:{background:"transparent",border:"transparent",color:a[700],hoverBackground:a[50],hoverBorder:"transparent",hoverColor:a[800],activeBackground:a[100],activeBorder:"transparent",activeColor:a[900],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:e[500]}}}[i][n]},D=(o,i,n)=>{const r=o.colors.status[i];return{solid:{background:r[500],border:r[500],color:o.colors.neutral[50],hoverBackground:r[600],hoverBorder:r[600],hoverColor:o.colors.neutral[50],activeBackground:r[900],activeBorder:r[900],activeColor:o.colors.neutral[50],disabledBackground:o.colors.neutral[200],disabledBorder:o.colors.neutral[200],disabledColor:o.colors.neutral[500]},outline:{background:"transparent",border:r[500],color:r[500],hoverBackground:r[50],hoverBorder:r[600],hoverColor:r[600],activeBackground:r[100],activeBorder:r[900],activeColor:r[900],disabledBackground:"transparent",disabledBorder:o.colors.neutral[300],disabledColor:o.colors.neutral[500]},ghost:{background:"transparent",border:"transparent",color:r[700],hoverBackground:r[50],hoverBorder:"transparent",hoverColor:r[800],activeBackground:r[100],activeBorder:"transparent",activeColor:r[900],disabledBackground:"transparent",disabledBorder:"transparent",disabledColor:o.colors.neutral[500]}}[n]},N=(o,i,n,r)=>r?D(o,r,n):Y(o,i,n),A=(o,i)=>({sm:{fontSize:o.typography.scale.xs.size,lineHeight:o.typography.scale.xs.lineHeight,fontWeight:o.typography.fontWeight.medium,gap:o.spacing.xs,paddingX:o.spacing.sm,paddingY:o.spacing["2xs"],borderRadius:o.borderRadius.sm,iconOnlySize:"28px"},md:{fontSize:o.typography.scale.xs.size,lineHeight:o.typography.scale.xs.lineHeight,fontWeight:o.typography.fontWeight.medium,gap:o.spacing.sm,paddingX:o.spacing.md,paddingY:o.spacing.xs,borderRadius:o.borderRadius.sm,iconOnlySize:"36px"},lg:{fontSize:o.typography.scale.sm.size,lineHeight:o.typography.scale.sm.lineHeight,fontWeight:o.typography.fontWeight.medium,gap:o.spacing.lg,paddingX:o.spacing.lg,paddingY:o.spacing.sm,borderRadius:o.borderRadius.md,iconOnlySize:"44px"}})[i],P=E`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,x=g.span`
  width: ${({theme:o})=>o.icons.sm};
  height: ${({theme:o})=>o.icons.sm};
  border: ${({theme:o})=>o.spacing["2xs"]} solid ${({theme:o})=>o.colors.blue[200]};
  border-top-color: ${({theme:o})=>o.colors.blue[600]};
  border-radius: 50%;
  animation: ${P} 0.8s linear infinite;
`,C=g.span`
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;g.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: inherit;
  visibility: ${({$hidden:o})=>o?"hidden":"visible"};
`;const l=g.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({theme:o,$size:i})=>{const n={sm:o.icons.md,md:o.icons.lg,lg:o.icons.xl};return u`
      width: ${n[i]};
      height: ${n[i]};
      font-size: ${n[i]};

      & > svg {
        width: 100%;
        height: 100%;
      }
    `}}
`,z=g.button.withConfig({shouldForwardProp:o=>!o.startsWith("$")})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({$fullWidth:o})=>o?"100%":"auto"};
  border-style: solid;
  border-width: ${({theme:o})=>o.spacing["2xs"]};
  border-radius: ${({theme:o})=>o.spacing.sm};
  font-family: ${({theme:o})=>o.typography.fontFamily.sans};
  text-decoration: none;
  appearance: none;
  user-select: none;
  white-space: nowrap;
  transition:
    color 220ms ease-in-out,
    background 220ms ease-in-out,
    border-color 220ms ease-in-out;

  svg {
    transition: transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  ${({theme:o,$size:i,$iconOnly:n})=>{const r=A(o,i);return u`
      font-size: ${r.fontSize};
      line-height: ${r.lineHeight};
      font-weight: ${r.fontWeight};
      gap: ${r.gap};
      padding: ${r.paddingY} ${r.paddingX};
      ${n?u`
            padding: 0;
            width: ${r.iconOnlySize};
            height: ${r.iconOnlySize};
            min-width: ${r.iconOnlySize};
            min-height: ${r.iconOnlySize};
            max-width: ${r.iconOnlySize};
            max-height: ${r.iconOnlySize};
            flex: 0 0 ${r.iconOnlySize};
          `:""}
    `}}

  ${({theme:o,$variant:i,$appearance:n,$status:r})=>{const a=N(o,i,n,r);return u`
      color: ${a.color};
      border-color: ${a.border};
      background: ${a.background};

      &:disabled,
      &[aria-disabled='true'] {
        color: ${a.disabledColor};
        border-color: ${a.disabledBorder};
        background: ${a.disabledBackground};
      }

      &:hover:not(:disabled):not([aria-disabled='true']) {
        color: ${a.hoverColor};
        border-color: ${a.hoverBorder};
        background: ${a.hoverBackground};

        [data-icon-position='trailing'] svg.lucide-arrow-right {
          transform: translateX(${o.spacing.xs});
        }

        [data-icon-position='leading'] svg.lucide-arrow-left {
          transform: translateX(-${o.spacing.xs});
        }
      }

      &:active:not(:disabled):not([aria-disabled='true']) {
        color: ${a.activeColor};
        border-color: ${a.activeBorder};
        background: ${a.activeBackground};
      }
    `}}

  ${({$iconOnly:o})=>o&&u`
      border-radius: 50%;
      overflow: hidden;
    `}

  ${({$isLoading:o})=>o&&u`
      cursor: progress;
    `}

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: ${({theme:o})=>o.spacing["2xs"]} solid ${({theme:o})=>o.colors.blue[600]};
    outline-offset: ${({theme:o})=>o.spacing["2xs"]};
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,S=b.forwardRef((o,i)=>{const{variant:n="secondary",appearance:r="solid",size:a="md",leadingIcon:e,trailingIcon:d,iconOnly:s=!1,isLoading:c=!1,disabled:m=!1,context:B="default",status:f,fullWidth:k=!1,asChild:w=!1,children:y,...h}=o,j=h["aria-label"];if(s&&!j)throw new Error("ButtonV3: iconOnly buttons require an aria-label.");if(e&&d)throw new Error("ButtonV3: use either leadingIcon or trailingIcon, not both.");const T=!!(f&&B!=="notification");b.useEffect(()=>{},[T]);const $=B==="notification"?f:void 0,p=m||c;if(w){const{onClick:q,tabIndex:W,...I}=h,H=i,L=v=>{if(p){v.preventDefault(),v.stopPropagation();return}q?.(v)};return t.jsxs(z,{as:X,ref:H,onClick:L,"aria-busy":c,"aria-disabled":p,tabIndex:p?-1:W,"data-variant":n,"data-appearance":r,$variant:n,$appearance:r,$size:a,$status:$,$fullWidth:k,$iconOnly:s,$isLoading:c,...I,children:[c&&t.jsx(C,{"aria-hidden":"true",children:t.jsx(x,{"data-testid":"button-v3-spinner"})}),s&&e&&t.jsx(l,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:e}),s&&!e&&d&&t.jsx(l,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:d}),!s&&e&&t.jsx(l,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:e}),!s&&t.jsx(F,{children:y}),!s&&d&&t.jsx(l,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:d})]})}const{type:V="button",...O}=h,R=i;return t.jsxs(z,{ref:R,type:V,disabled:p,"aria-busy":c,"data-variant":n,"data-appearance":r,$variant:n,$appearance:r,$size:a,$status:$,$fullWidth:k,$iconOnly:s,$isLoading:c,...O,children:[c&&t.jsx(C,{"aria-hidden":"true",children:t.jsx(x,{"data-testid":"button-v3-spinner"})}),s?t.jsxs(b.Fragment,{children:[e&&t.jsx(l,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:e}),!e&&d&&t.jsx(l,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:d})]}):t.jsxs(b.Fragment,{children:[e&&t.jsx(l,{"aria-hidden":"true",$size:a,"data-icon-position":"leading",children:e}),y,d&&t.jsx(l,{"aria-hidden":"true",$size:a,"data-icon-position":"trailing",children:d})]})]})});S.displayName="ButtonV3";S.__docgenInfo={description:"",methods:[],displayName:"ButtonV3",props:{variant:{required:!1,tsType:{name:"ButtonV3Variant"},description:"Visual intent: primary, secondary, tertiary, quaternary."},appearance:{required:!1,tsType:{name:"ButtonV3Appearance"},description:"Visual appearance: solid, outline, ghost."},size:{required:!1,tsType:{name:"ButtonV3Size"},description:"Size scale for spacing/text/icons."},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Renders icon-only button; requires aria-label."},isLoading:{required:!1,tsType:{name:"boolean"},description:"Shows spinner and disables interactions."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the button."},context:{required:!1,tsType:{name:"ButtonV3Context"},description:"Context for behavior rules (e.g. notification status)."},status:{required:!1,tsType:{name:"ButtonV3Status"},description:"Status tone; applied when context='notification'."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Expands button to full container width."},asChild:{required:!1,tsType:{name:"boolean"},description:"Render styles onto a child element (for Link/NavLink/a) using Radix Slot."}}};export{S as B};
