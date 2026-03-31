import{K as g,j as a,r as x,c as n}from"./iframe-A9Ej3IUX.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Theme/Box Shadow"},s=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.base};
`,l=n.div`
  border: 1px solid ${({theme:e})=>e.colors.neutral[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral[50]};
  padding: ${({theme:e})=>e.spacing.md};
`,t=n.div`
  height: 88px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.colors.neutral[200]};
  box-shadow: ${({$shadow:e})=>e};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,d=n.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.neutral[800]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,i=n.code`
  display: block;
  margin-top: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.neutral[700]};
  font-size: ${({theme:e})=>e.typography.scale.xs.size};
  line-height: ${({theme:e})=>e.typography.scale.xs.lineHeight};
  word-break: break-word;
`,m=n.h3`
  margin: 0;
  padding: ${({theme:e})=>e.spacing.base} ${({theme:e})=>e.spacing.base} 0;
  color: ${({theme:e})=>e.colors.grayDark};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.md.size};
  line-height: ${({theme:e})=>e.typography.scale.md.lineHeight};
`,h=n.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing.xsmall} ${({theme:e})=>e.spacing.base} 0;
  color: ${({theme:e})=>e.colors.grayDark};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
`,r=()=>{const e=g(),c=[{name:"sm",value:e.boxShadow.sm},{name:"md",value:e.boxShadow.md},{name:"lg",value:e.boxShadow.lg},{name:"xl",value:e.boxShadow.xl},{name:"2xl",value:e.boxShadow["2xl"]}],p=[{name:"xsmall",value:e.boxShadow.xsmall},{name:"small",value:e.boxShadow.small},{name:"standard",value:e.boxShadow.standard},{name:"large",value:e.boxShadow.large},{name:"xlarge",value:e.boxShadow.xlarge}];return a.jsxs(x.Fragment,{children:[a.jsx(m,{children:"New shadow tokens (preferred)"}),a.jsx(h,{children:"Use these tokens for all new work."}),a.jsx(s,{children:c.map(o=>a.jsxs(l,{children:[a.jsx(t,{$shadow:o.value}),a.jsx(d,{children:o.name}),a.jsx(i,{children:o.value})]},`preferred-${o.name}`))}),a.jsx(m,{children:"Legacy shadow tokens (deprecated)"}),a.jsx(h,{children:"Keep only while migrating older components."}),a.jsx(s,{children:p.map(o=>a.jsxs(l,{children:[a.jsx(t,{$shadow:o.value}),a.jsx(d,{children:o.name}),a.jsx(i,{children:o.value})]},`legacy-${o.name}`))})]})};r.__docgenInfo={description:"",methods:[],displayName:"BoxShadow"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const preferredShadowTokens = [{
    name: 'sm',
    value: theme.boxShadow.sm
  }, {
    name: 'md',
    value: theme.boxShadow.md
  }, {
    name: 'lg',
    value: theme.boxShadow.lg
  }, {
    name: 'xl',
    value: theme.boxShadow.xl
  }, {
    name: '2xl',
    value: theme.boxShadow['2xl']
  }];
  const legacyShadowTokens = [{
    name: 'xsmall',
    value: theme.boxShadow.xsmall
  }, {
    name: 'small',
    value: theme.boxShadow.small
  }, {
    name: 'standard',
    value: theme.boxShadow.standard
  }, {
    name: 'large',
    value: theme.boxShadow.large
  }, {
    name: 'xlarge',
    value: theme.boxShadow.xlarge
  }];
  return <Fragment>
      <SectionTitle>New shadow tokens (preferred)</SectionTitle>
      <SectionNote>Use these tokens for all new work.</SectionNote>
      <Grid>
        {preferredShadowTokens.map(token => <Card key={\`preferred-\${token.name}\`}>
            <ShadowPreview $shadow={token.value} />
            <Label>{token.name}</Label>
            <Value>{token.value}</Value>
          </Card>)}
      </Grid>

      <SectionTitle>Legacy shadow tokens (deprecated)</SectionTitle>
      <SectionNote>Keep only while migrating older components.</SectionNote>
      <Grid>
        {legacyShadowTokens.map(token => <Card key={\`legacy-\${token.name}\`}>
            <ShadowPreview $shadow={token.value} />
            <Label>{token.name}</Label>
            <Value>{token.value}</Value>
          </Card>)}
      </Grid>
    </Fragment>;
}`,...r.parameters?.docs?.source}}};const S=["BoxShadow"];export{r as BoxShadow,S as __namedExportsOrder,y as default};
