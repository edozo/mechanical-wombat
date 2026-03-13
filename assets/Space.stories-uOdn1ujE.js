import{j as s,r as c,c as t}from"./iframe-Bo766xwD.js";import{D as i,a as n}from"./DisplayBox.styles-BfWkUIK2.js";import{D as l,a as o}from"./DisplayBox-CFg9uS2l.js";import"./preload-helper-PPVm8Dsz.js";const z={title:"Theme/Space"},x=[{size:"4px",name:"xxsmall"},{size:"8px",name:"xsmall"},{size:"16px",name:"small"},{size:"24px",name:"base"},{size:"32px",name:"large"},{size:"48px",name:"xlarge"},{size:"64px",name:"xxlarge"}],m=[{size:"1px",name:"3xs"},{size:"2px",name:"2xs"},{size:"4px",name:"xs"},{size:"8px",name:"sm"},{size:"16px",name:"md"},{size:"24px",name:"lg"},{size:"32px",name:"xl"},{size:"48px",name:"2xl"},{size:"64px",name:"3xl"}],r=t.h3`
  margin: 0;
  padding: ${({theme:e})=>e.spacing.base} ${({theme:e})=>e.spacing.base} 0;
  color: ${({theme:e})=>e.colors.grayDark};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.md.size};
  line-height: ${({theme:e})=>e.typography.scale.md.lineHeight};
`,p=t.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing.xsmall} ${({theme:e})=>e.spacing.base} 0;
  color: ${({theme:e})=>e.colors.grayDark};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.scale.sm.size};
  line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
`,a=()=>s.jsxs(c.Fragment,{children:[s.jsx(r,{children:"Legacy spacing tokens (deprecated)"}),s.jsx(p,{children:"Use only while migrating older components."}),s.jsx(l,{showBorder:!1,children:x.map(e=>s.jsxs(o,{size:e.size,borderRadius:"xsmall",children:[s.jsx(i,{children:"Legacy"}),s.jsx(i,{children:e.name}),s.jsx(n,{children:e.size})]},`legacy-${e.name}`))}),s.jsx(r,{children:"New spacing tokens (preferred)"}),s.jsx(p,{children:"Use these tokens for all new work."}),s.jsx(l,{showBorder:!1,children:m.map(e=>s.jsxs(o,{size:e.size,borderRadius:"xsmall",children:[s.jsx(i,{children:"Preferred"}),s.jsx(i,{children:e.name}),s.jsx(n,{children:e.size})]},`new-${e.name}`))})]});a.__docgenInfo={description:"",methods:[],displayName:"Space"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Fragment>
    <SectionTitle>Legacy spacing tokens (deprecated)</SectionTitle>
    <SectionNote>Use only while migrating older components.</SectionNote>
    <DisplayBoxWrapper showBorder={false}>
      {legacySpaces.map(space => <DisplayBox key={\`legacy-\${space.name}\`} size={space.size} borderRadius="xsmall">
          <DisplayBoxSubTitle>Legacy</DisplayBoxSubTitle>
          <DisplayBoxSubTitle>{space.name}</DisplayBoxSubTitle>
          <DisplayBoxTitle>{space.size}</DisplayBoxTitle>
        </DisplayBox>)}
    </DisplayBoxWrapper>

    <SectionTitle>New spacing tokens (preferred)</SectionTitle>
    <SectionNote>Use these tokens for all new work.</SectionNote>
    <DisplayBoxWrapper showBorder={false}>
      {newSpaces.map(space => <DisplayBox key={\`new-\${space.name}\`} size={space.size} borderRadius="xsmall">
          <DisplayBoxSubTitle>Preferred</DisplayBoxSubTitle>
          <DisplayBoxSubTitle>{space.name}</DisplayBoxSubTitle>
          <DisplayBoxTitle>{space.size}</DisplayBoxTitle>
        </DisplayBox>)}
    </DisplayBoxWrapper>
  </Fragment>`,...a.parameters?.docs?.source}}};const S=["Space"];export{a as Space,S as __namedExportsOrder,z as default};
