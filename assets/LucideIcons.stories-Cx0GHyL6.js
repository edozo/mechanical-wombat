import{r as i,j as e}from"./iframe-B_s_zxyq.js";import{D as c}from"./DisplayBox.styles-BC6ZC--3.js";import{c as v,L as t}from"./Lucide-oxNvFhAf.js";import{D as a}from"./DisplayBox-CiFg4xiC.js";import{X as l}from"./x-CypLQ_2x.js";import{S as d}from"./search-CpsE0zCE.js";import{c as p}from"./createLucideIcon-C64gVH1X.js";import{a as m}from"./Typography-DV3cRq0H.js";import"./preload-helper-PPVm8Dsz.js";const y=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],x=p("check",y);const g=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],h=p("triangle",g),b=o=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},i.createElement("circle",{cx:12,cy:12,r:8,stroke:"currentColor",strokeWidth:2}),i.createElement("path",{d:"M8 12h8",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round"})),u=v(b),I={title:"Components/Lucide Icons",component:t,argTypes:{size:{control:{type:"inline-radio"},options:["sm","md","lg"]},color:{control:{type:"color"}},iconKey:{control:{type:"select"},options:["Triangle","Check","Search","X","CustomExample"]},icon:{table:{disable:!0}},children:{table:{disable:!0}},background:{table:{disable:!0}},borderRadius:{table:{disable:!0}}}},j={Triangle:h,Check:x,Search:d,X:l,CustomExample:u},k=[{name:"Triangle",component:e.jsx(t,{icon:h})},{name:"Check",component:e.jsx(t,{icon:x})},{name:"Custom example",component:e.jsx(u,{})},{name:"Search",component:e.jsx(t,{icon:d})},{name:"X",component:e.jsx(t,{icon:l})}],r=({size:o,color:f,iconKey:n})=>e.jsxs("div",{children:[e.jsx(a,{children:e.jsxs("div",{style:{padding:"8px",textAlign:"center"},children:[e.jsx(t,{icon:j[n],size:o,color:f}),e.jsx(c,{style:{width:"80px"},children:n})]})}),e.jsxs(m,{children:["For the full set of icons available visit -"," ",e.jsx("a",{href:"https://lucide.dev/icons/",target:"_blank",rel:"noopener noreferrer",children:"lucide.dev/icons"})]})]});r.args={size:"md",color:"#4c4c4c",iconKey:"Search"};const s=()=>e.jsxs("div",{children:[e.jsx(a,{children:k.map(o=>e.jsxs("div",{style:{padding:"8px",textAlign:"center"},children:[o.component,e.jsx(c,{style:{width:"80px"},children:o.name})]},o.name))}),e.jsxs(m,{children:["For the full set of icons available visit -"," ",e.jsx("a",{href:"https://lucide.dev/icons/",target:"_blank",rel:"noopener noreferrer",children:"lucide.dev/icons"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"Controls"};s.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
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
  </div>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <div>
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
  </div>`,...s.parameters?.docs?.source}}};const W=["Controls","Default"];export{r as Controls,s as Default,W as __namedExportsOrder,I as default};
