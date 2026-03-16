import{r as n,j as e}from"./iframe-CAiq36rM.js";import{D as a}from"./DisplayBox.styles-hLItz7lM.js";import{c as i,a as v,L as t}from"./Lucide-mOOCw0eo.js";import{D as l}from"./DisplayBox-NabBPk2h.js";import{a as d}from"./Typography-BS8I2BLg.js";import"./preload-helper-PPVm8Dsz.js";const f=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],p=i("check",f);const g=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],m=i("search",g);const b=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],x=i("triangle",b);const j=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],h=i("x",j),k=o=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},n.createElement("circle",{cx:12,cy:12,r:8,stroke:"currentColor",strokeWidth:2}),n.createElement("path",{d:"M8 12h8",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round"})),u=v(k),L={title:"Components/Lucide Icons",component:t,argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]},color:{control:{type:"color"}},iconKey:{control:{type:"select"},options:["Triangle","Check","Search","X","CustomExample"]},icon:{table:{disable:!0}},children:{table:{disable:!0}},background:{table:{disable:!0}},borderRadius:{table:{disable:!0}}}},_={Triangle:x,Check:p,Search:m,X:h,CustomExample:u},B=[{name:"Triangle",component:e.jsx(t,{icon:x})},{name:"Check",component:e.jsx(t,{icon:p})},{name:"Custom example",component:e.jsx(u,{})},{name:"Search",component:e.jsx(t,{icon:m})},{name:"X",component:e.jsx(t,{icon:h})}],s=({size:o,color:y,iconKey:c})=>e.jsxs("div",{children:[e.jsx(l,{children:e.jsxs("div",{style:{padding:"8px",textAlign:"center"},children:[e.jsx(t,{icon:_[c],size:o,color:y}),e.jsx(a,{style:{width:"80px"},children:c})]})}),e.jsxs(d,{children:["For the full set of icons available visit -"," ",e.jsx("a",{href:"https://lucide.dev/icons/",target:"_blank",rel:"noopener noreferrer",children:"lucide.dev/icons"})]})]});s.args={size:"md",color:"#4c4c4c",iconKey:"Search"};const r=()=>e.jsxs("div",{children:[e.jsx(l,{children:B.map(o=>e.jsxs("div",{style:{padding:"8px",textAlign:"center"},children:[o.component,e.jsx(a,{style:{width:"80px"},children:o.name})]},o.name))}),e.jsxs(d,{children:["For the full set of icons available visit -"," ",e.jsx("a",{href:"https://lucide.dev/icons/",target:"_blank",rel:"noopener noreferrer",children:"lucide.dev/icons"})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Controls"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  size,
  color,
  iconKey
}) => <div>
    <DisplayBoxWrapper>
      <div style={{
      padding: '8px',
      textAlign: 'center'
    }}>
        <LucideIcon icon={iconMap[iconKey]} size={size} color={color} />
        <DisplayBoxSubTitle style={{
        width: '80px'
      }}>{iconKey}</DisplayBoxSubTitle>
      </div>
    </DisplayBoxWrapper>
    <TextBase>
      For the full set of icons available visit -{' '}
      <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer">
        lucide.dev/icons
      </a>
    </TextBase>
  </div>`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div>
    <DisplayBoxWrapper>
      {icons.map(icon => <div style={{
      padding: '8px',
      textAlign: 'center'
    }} key={icon.name}>
          {icon.component}
          <DisplayBoxSubTitle style={{
        width: '80px'
      }}>{icon.name}</DisplayBoxSubTitle>
        </div>)}
    </DisplayBoxWrapper>
    <TextBase>
      For the full set of icons available visit -{' '}
      <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer">
        lucide.dev/icons
      </a>
    </TextBase>
  </div>`,...r.parameters?.docs?.source}}};const I=["Controls","Default"];export{s as Controls,r as Default,I as __namedExportsOrder,L as default};
