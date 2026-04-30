import{K as n,j as e}from"./iframe-Ym7xYKuD.js";import{D as a,c as l,d as c}from"./DisplayBox.styles-dULnYYfT.js";import{D as d,a as u}from"./DisplayBox-Chfu6yik.js";import"./preload-helper-PPVm8Dsz.js";const O={title:"Theme/Colours"},p=()=>{const s=n(),t=[{key:"skyBlueLighter",subtitle:"Lighter"},{key:"skyBlueLight",subtitle:"Light"},{key:"skyBlue",subtitle:"Base"},{key:"skyBlueDark",subtitle:"Dark"},{key:"skyBlueDarker",subtitle:"Darker"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"skyBlue (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},y=()=>{const s=n(),t=[{key:"greenLighter",subtitle:"Lighter"},{key:"greenLight",subtitle:"Light"},{key:"green",subtitle:"Base"},{key:"greenDark",subtitle:"Dark"},{key:"greenDarker",subtitle:"Darker"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"green (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},m=()=>{const s=n(),t=[{key:"steelBlueLighter",subtitle:"Lighter"},{key:"steelBlueLight",subtitle:"Light"},{key:"steelBlue",subtitle:"Base"},{key:"steelBlueDark",subtitle:"Dark"},{key:"steelBlueDarker",subtitle:"Darker"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"steelBlue (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},h=()=>{const s=n(),t=[{key:"orangeLighter",subtitle:"Lighter"},{key:"orangeLight",subtitle:"Light"},{key:"orange",subtitle:"Base"},{key:"orangeDark",subtitle:"Dark"},{key:"orangeDarker",subtitle:"Darker"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"orange (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},k=()=>{const s=n(),t=[{key:"grayLighter",subtitle:"Lighter"},{key:"grayLight",subtitle:"Light"},{key:"gray",subtitle:"Base"},{key:"grayDark",subtitle:"Dark"},{key:"grayDarker",subtitle:"Darker"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"gray (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},B=()=>{const s=n(),t=[{key:"black",name:"black"},{key:"white",name:"white"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,name:o})=>e.jsxs(u,{background:r,children:[e.jsxs(l,{children:[o," (deprecated)"]}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},g=()=>{const s=n(),t=[{key:"redLighter",subtitle:"Lighter"},{key:"redLight",subtitle:"Light"},{key:"red",subtitle:"Base"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"red (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},_=[50,100,200,300,400,500,600,700,800,900,950],i=(s,t)=>e.jsx(d,{showBorder:!1,children:_.map(r=>e.jsxs(u,{background:t[r],children:[e.jsx(a,{children:r}),e.jsx(l,{children:s}),e.jsx(c,{children:t[r]})]},`${s}-${r}`))}),b=()=>{const s=n();return i("neutral",s.colors.neutral)},x=()=>{const s=n();return i("slate",s.colors.slate)},D=()=>{const s=n();return i("blue",s.colors.blue)},T=()=>{const s=n();return i("indigo",s.colors.indigo)},S=()=>{const s=n();return i("teal",s.colors.teal)},j=()=>{const s=n();return i("status.info",s.colors.status.info)},L=()=>{const s=n();return i("status.success",s.colors.status.success)},f=()=>{const s=n();return i("status.warning",s.colors.status.warning)},w=()=>{const s=n();return i("status.danger",s.colors.status.danger)};p.__docgenInfo={description:"",methods:[],displayName:"Primary"};y.__docgenInfo={description:"",methods:[],displayName:"Secondary"};m.__docgenInfo={description:"",methods:[],displayName:"Tertiary"};h.__docgenInfo={description:"",methods:[],displayName:"Orange"};k.__docgenInfo={description:"",methods:[],displayName:"Gray"};B.__docgenInfo={description:"",methods:[],displayName:"Simple"};g.__docgenInfo={description:"",methods:[],displayName:"Alert"};b.__docgenInfo={description:"",methods:[],displayName:"Neutral"};x.__docgenInfo={description:"",methods:[],displayName:"Slate"};D.__docgenInfo={description:"",methods:[],displayName:"Blue"};T.__docgenInfo={description:"",methods:[],displayName:"Indigo"};S.__docgenInfo={description:"",methods:[],displayName:"Teal"};j.__docgenInfo={description:"",methods:[],displayName:"StatusInfo"};L.__docgenInfo={description:"",methods:[],displayName:"StatusSuccess"};f.__docgenInfo={description:"",methods:[],displayName:"StatusWarning"};w.__docgenInfo={description:"",methods:[],displayName:"StatusDanger"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const items = [{
    key: 'skyBlueLighter',
    subtitle: 'Lighter'
  }, {
    key: 'skyBlueLight',
    subtitle: 'Light'
  }, {
    key: 'skyBlue',
    subtitle: 'Base'
  }, {
    key: 'skyBlueDark',
    subtitle: 'Dark'
  }, {
    key: 'skyBlueDarker',
    subtitle: 'Darker'
  }] as const;
  return <DisplayBoxWrapper showBorder={false}>
      {items.map(({
      key,
      subtitle
    }) => <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>skyBlue (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>)}
    </DisplayBoxWrapper>;
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const items = [{
    key: 'greenLighter',
    subtitle: 'Lighter'
  }, {
    key: 'greenLight',
    subtitle: 'Light'
  }, {
    key: 'green',
    subtitle: 'Base'
  }, {
    key: 'greenDark',
    subtitle: 'Dark'
  }, {
    key: 'greenDarker',
    subtitle: 'Darker'
  }] as const;
  return <DisplayBoxWrapper showBorder={false}>
      {items.map(({
      key,
      subtitle
    }) => <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>green (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>)}
    </DisplayBoxWrapper>;
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const items = [{
    key: 'steelBlueLighter',
    subtitle: 'Lighter'
  }, {
    key: 'steelBlueLight',
    subtitle: 'Light'
  }, {
    key: 'steelBlue',
    subtitle: 'Base'
  }, {
    key: 'steelBlueDark',
    subtitle: 'Dark'
  }, {
    key: 'steelBlueDarker',
    subtitle: 'Darker'
  }] as const;
  return <DisplayBoxWrapper showBorder={false}>
      {items.map(({
      key,
      subtitle
    }) => <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>steelBlue (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>)}
    </DisplayBoxWrapper>;
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const items = [{
    key: 'orangeLighter',
    subtitle: 'Lighter'
  }, {
    key: 'orangeLight',
    subtitle: 'Light'
  }, {
    key: 'orange',
    subtitle: 'Base'
  }, {
    key: 'orangeDark',
    subtitle: 'Dark'
  }, {
    key: 'orangeDarker',
    subtitle: 'Darker'
  }] as const;
  return <DisplayBoxWrapper showBorder={false}>
      {items.map(({
      key,
      subtitle
    }) => <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>orange (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>)}
    </DisplayBoxWrapper>;
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const items = [{
    key: 'grayLighter',
    subtitle: 'Lighter'
  }, {
    key: 'grayLight',
    subtitle: 'Light'
  }, {
    key: 'gray',
    subtitle: 'Base'
  }, {
    key: 'grayDark',
    subtitle: 'Dark'
  }, {
    key: 'grayDarker',
    subtitle: 'Darker'
  }] as const;
  return <DisplayBoxWrapper showBorder={false}>
      {items.map(({
      key,
      subtitle
    }) => <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>gray (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>)}
    </DisplayBoxWrapper>;
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const items = [{
    key: 'black',
    name: 'black'
  }, {
    key: 'white',
    name: 'white'
  }] as const;
  return <DisplayBoxWrapper showBorder={false}>
      {items.map(({
      key,
      name
    }) => <DisplayBox background={key} key={key}>
          <DisplayBoxTitle>{name} (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>)}
    </DisplayBoxWrapper>;
}`,...B.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const items = [{
    key: 'redLighter',
    subtitle: 'Lighter'
  }, {
    key: 'redLight',
    subtitle: 'Light'
  }, {
    key: 'red',
    subtitle: 'Base'
  }] as const;
  return <DisplayBoxWrapper showBorder={false}>
      {items.map(({
      key,
      subtitle
    }) => <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>red (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>)}
    </DisplayBoxWrapper>;
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('neutral', theme.colors.neutral);
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('slate', theme.colors.slate);
}`,...x.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('blue', theme.colors.blue);
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('indigo', theme.colors.indigo);
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('teal', theme.colors.teal);
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('status.info', theme.colors.status.info);
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('status.success', theme.colors.status.success);
}`,...L.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('status.warning', theme.colors.status.warning);
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('status.danger', theme.colors.status.danger);
}`,...w.parameters?.docs?.source}}};const A=["Primary","Secondary","Tertiary","Orange","Gray","Simple","Alert","Neutral","Slate","Blue","Indigo","Teal","StatusInfo","StatusSuccess","StatusWarning","StatusDanger"];export{g as Alert,D as Blue,k as Gray,T as Indigo,b as Neutral,h as Orange,p as Primary,y as Secondary,B as Simple,x as Slate,w as StatusDanger,j as StatusInfo,L as StatusSuccess,f as StatusWarning,S as Teal,m as Tertiary,A as __namedExportsOrder,O as default};
