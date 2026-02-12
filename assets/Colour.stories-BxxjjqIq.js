import{n,j as e}from"./iframe-EU7jn1Ok.js";import{D as a,a as l,b as c}from"./DisplayBox.styles-hImOeNEa.js";import{D as d,a as u}from"./DisplayBox-C0lDNiJu.js";import"./preload-helper-C1FmrZbK.js";const we={title:"Theme/Colours"},p=()=>{const s=n(),t=[{key:"skyBlueLighter",subtitle:"Lighter"},{key:"skyBlueLight",subtitle:"Light"},{key:"skyBlue",subtitle:"Base"},{key:"skyBlueDark",subtitle:"Dark"},{key:"skyBlueDarker",subtitle:"Darker"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"skyBlue (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},y=()=>{const s=n(),t=[{key:"greenLighter",subtitle:"Lighter"},{key:"greenLight",subtitle:"Light"},{key:"green",subtitle:"Base"},{key:"greenDark",subtitle:"Dark"},{key:"greenDarker",subtitle:"Darker"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"green (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},m=()=>{const s=n(),t=[{key:"steelBlueLighter",subtitle:"Lighter"},{key:"steelBlueLight",subtitle:"Light"},{key:"steelBlue",subtitle:"Base"},{key:"steelBlueDark",subtitle:"Dark"},{key:"steelBlueDarker",subtitle:"Darker"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"steelBlue (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},h=()=>{const s=n(),t=[{key:"orangeLighter",subtitle:"Lighter"},{key:"orangeLight",subtitle:"Light"},{key:"orange",subtitle:"Base"},{key:"orangeDark",subtitle:"Dark"},{key:"orangeDarker",subtitle:"Darker"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"orange (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},k=()=>{const s=n(),t=[{key:"grayLighter",subtitle:"Lighter"},{key:"grayLight",subtitle:"Light"},{key:"gray",subtitle:"Base"},{key:"grayDark",subtitle:"Dark"},{key:"grayDarker",subtitle:"Darker"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"gray (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},B=()=>{const s=n(),t=[{key:"black",name:"black"},{key:"white",name:"white"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,name:o})=>e.jsxs(u,{background:r,children:[e.jsxs(l,{children:[o," (deprecated)"]}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},g=()=>{const s=n(),t=[{key:"redLighter",subtitle:"Lighter"},{key:"redLight",subtitle:"Light"},{key:"red",subtitle:"Base"}];return e.jsx(d,{showBorder:!1,children:t.map(({key:r,subtitle:o})=>e.jsxs(u,{background:r,children:[e.jsx(a,{children:o}),e.jsx(l,{children:"red (deprecated)"}),e.jsx(a,{children:"Not used by the new brand"}),e.jsx(c,{children:s.colors[r]})]},r))})},Te=[50,100,200,300,400,500,600,700,800,900,950],i=(s,t)=>e.jsx(d,{showBorder:!1,children:Te.map(r=>e.jsxs(u,{background:t[r],children:[e.jsx(a,{children:r}),e.jsx(l,{children:s}),e.jsx(c,{children:t[r]})]},`${s}-${r}`))}),b=()=>{const s=n();return i("neutral",s.colors.neutral)},x=()=>{const s=n();return i("slate",s.colors.slate)},D=()=>{const s=n();return i("blue",s.colors.blue)},T=()=>{const s=n();return i("indigo",s.colors.indigo)},S=()=>{const s=n();return i("teal",s.colors.teal)},j=()=>{const s=n();return i("status.info",s.colors.status.info)},L=()=>{const s=n();return i("status.success",s.colors.status.success)},f=()=>{const s=n();return i("status.warning",s.colors.status.warning)},w=()=>{const s=n();return i("status.danger",s.colors.status.danger)};p.__docgenInfo={description:"",methods:[],displayName:"Primary"};y.__docgenInfo={description:"",methods:[],displayName:"Secondary"};m.__docgenInfo={description:"",methods:[],displayName:"Tertiary"};h.__docgenInfo={description:"",methods:[],displayName:"Orange"};k.__docgenInfo={description:"",methods:[],displayName:"Gray"};B.__docgenInfo={description:"",methods:[],displayName:"Simple"};g.__docgenInfo={description:"",methods:[],displayName:"Alert"};b.__docgenInfo={description:"",methods:[],displayName:"Neutral"};x.__docgenInfo={description:"",methods:[],displayName:"Slate"};D.__docgenInfo={description:"",methods:[],displayName:"Blue"};T.__docgenInfo={description:"",methods:[],displayName:"Indigo"};S.__docgenInfo={description:"",methods:[],displayName:"Teal"};j.__docgenInfo={description:"",methods:[],displayName:"StatusInfo"};L.__docgenInfo={description:"",methods:[],displayName:"StatusSuccess"};f.__docgenInfo={description:"",methods:[],displayName:"StatusWarning"};w.__docgenInfo={description:"",methods:[],displayName:"StatusDanger"};var _,N,I;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(I=(N=p.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var W,G,O;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(O=(G=y.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var A,P,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(C=(P=m.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var E,$,R;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(R=($=h.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var q,v,z;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(z=(v=k.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var F,H,J;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(J=(H=B.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...(Q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,V,X;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('neutral', theme.colors.neutral);
}`,...(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('slate', theme.colors.slate);
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,re,te;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('blue', theme.colors.blue);
}`,...(te=(re=D.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,ae,oe;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('indigo', theme.colors.indigo);
}`,...(oe=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ie,le,ce;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('teal', theme.colors.teal);
}`,...(ce=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,pe;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('status.info', theme.colors.status.info);
}`,...(pe=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ye,me,he;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('status.success', theme.colors.status.success);
}`,...(he=(me=L.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ke,Be,ge;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('status.warning', theme.colors.status.warning);
}`,...(ge=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:ge.source}}};var be,xe,De;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return renderTokenGrid('status.danger', theme.colors.status.danger);
}`,...(De=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};const _e=["Primary","Secondary","Tertiary","Orange","Gray","Simple","Alert","Neutral","Slate","Blue","Indigo","Teal","StatusInfo","StatusSuccess","StatusWarning","StatusDanger"];export{g as Alert,D as Blue,k as Gray,T as Indigo,b as Neutral,h as Orange,p as Primary,y as Secondary,B as Simple,x as Slate,w as StatusDanger,j as StatusInfo,L as StatusSuccess,f as StatusWarning,S as Teal,m as Tertiary,_e as __namedExportsOrder,we as default};
