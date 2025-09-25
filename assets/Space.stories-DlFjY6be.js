import{j as s}from"./iframe-BGMA8d48.js";import{D as o,a as l}from"./DisplayBox.styles-DsrIN9yU.js";import{D as x,a as m}from"./DisplayBox-C2QAeTKo.js";import"./preload-helper-C1FmrZbK.js";const y={title:"Theme/Space"},n=[{size:"4px",name:"xxsmall"},{size:"8px",name:"xsmall"},{size:"16px",name:"small"},{size:"24px",name:"base"},{size:"32px",name:"large"},{size:"48px",name:"xlarge"},{size:"64px",name:"xxlarge"}],e=()=>s.jsx(x,{children:n.map(a=>s.jsxs(m,{size:a.size,borderRadius:"xsmall",children:[s.jsx(o,{children:a.name}),s.jsx(l,{children:a.size})]}))});e.__docgenInfo={description:"",methods:[],displayName:"Space"};var i,p,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => <DisplayBoxWrapper>
    {spaces.map(space => <DisplayBox size={space.size} borderRadius="xsmall">
        <DisplayBoxSubTitle>{space.name}</DisplayBoxSubTitle>
        <DisplayBoxTitle>{space.size}</DisplayBoxTitle>
      </DisplayBox>)}
  </DisplayBoxWrapper>`,...(r=(p=e.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};const z=["Space"];export{e as Space,z as __namedExportsOrder,y as default};
