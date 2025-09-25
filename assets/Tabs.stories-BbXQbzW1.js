import{r as T,l as c,d as p,j as a}from"./iframe-Bp3xk_TS.js";import{B as D}from"./Badge-BlIP4mLz.js";import"./preload-helper-C1FmrZbK.js";import"./Badge.styles-D7S4UOEs.js";const h=T.createContext({}),E=h.Provider;h.Consumer;function A(){const e=T.useContext(h);if(!e)throw new Error("Tab compound components can't be rendered outside Tabs component");return e}const L=p.div`
  display: flex;
  ${e=>e.$stretch&&c`
      justify-content: stretch;
      * {
        flex: 1 1 0px;
      }
    `}
`,z=p.span`
  background: ${e=>e.theme.colors.white};
  color: ${e=>e.theme.colors.grayDarker};
  padding: ${e=>e.theme.spacing.xsmall} ${e=>e.theme.spacing.small};
  border-radius: ${e=>e.theme.borderRadius.large} ${e=>e.theme.borderRadius.large} 0 0;
  font-size: ${e=>e.theme.font.size.text.base};
  line-height: ${e=>e.theme.font.lineHeight.text.base};
  font-weight: ${e=>e.theme.font.weight.semibold};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${e=>e.$isActive&&c`
      font-weight: ${e.theme.font.weight.bold};
      background: ${e.theme.colors.grayLight};
      color: ${e.theme.colors.black};
    `}

  ${e=>e.$disabled&&c`
      font-weight: ${e.theme.font.weight.regular};
      font-size: ${e.theme.font.size.text.small};
      background: ${e.theme.colors.grayLighter};
      color: ${e.theme.colors.grayDark};
      cursor: not-allowed;
    `}
`,_=({tabId:e,beforeOnChange:s,children:n,disabled:r,...H})=>{const{setActiveTab:O,activeTab:m}=A(),g=()=>{m!==e&&O(e)},q=()=>{r||(s?s(g):g())};return a.jsx(z,{$disabled:r,onClick:q,$isActive:m===e,...H,children:n})},R=({stretch:e=!1,children:s})=>a.jsx(L,{$stretch:e,children:s});_.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{tabId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},beforeOnChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(handleClick: () => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"handleClick"}],return:{name:"void"}}},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"TabWrapper",props:{stretch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const F=p.div`
  display: flex;
  background: ${e=>e.theme.colors.grayLight};
  flex: 1 1 0px;
`,S=({tabId:e,children:s,...n})=>{const{activeTab:r}=A();return e===r?a.jsx(F,{...n,children:s}):null};S.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{tabId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const t=({initialTab:e,children:s})=>{const[n,r]=T.useState(e);return a.jsx(E,{value:{activeTab:n,setActiveTab:r},children:s})};t.Tab=_;t.TabWrapper=R;t.Panel=S;t.__docgenInfo={description:"",methods:[{name:"Tab",docblock:null,modifiers:["static"],params:[{name:"{ tabId, beforeOnChange, children, disabled, ...rest }",optional:!1,type:null}],returns:null},{name:"TabWrapper",docblock:null,modifiers:["static"],params:[{name:"{ stretch = false, children }",optional:!1,type:null}],returns:null},{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{ tabId, children, ...rest }",optional:!1,type:null}],returns:null}],displayName:"Tabs"};const M={title:"Components/Tabs",component:t},b=()=>a.jsxs(t,{initialTab:"tab-2",children:[a.jsxs(t.TabWrapper,{children:[a.jsx(t.Tab,{tabId:"tab-1",style:{background:"rgba(255,102,0,0.1)"},children:"Tab A"}),a.jsx(t.Tab,{tabId:"tab-2",children:"Tab B"}),a.jsx(t.Tab,{tabId:"tab-3",children:"Tab c"})]}),a.jsx(t.Panel,{tabId:"tab-1",style:{background:"rgba(255,102,0,0.1)"},children:"a panel"}),a.jsx(t.Panel,{tabId:"tab-2",children:"b panel"}),a.jsx(t.Panel,{tabId:"tab-3",children:"c panel"})]});b.storyName="Default tabs with three options";const d=()=>a.jsxs(t,{initialTab:"tab-1",children:[a.jsxs(t.TabWrapper,{stretch:!0,children:[a.jsx(t.Tab,{tabId:"tab-1",children:"Tab A"}),a.jsx(t.Tab,{tabId:"tab-2",disabled:!0,children:"Tab B"}),a.jsx(t.Tab,{tabId:"tab-3",children:"Tab c"})]}),a.jsx(t.Panel,{tabId:"tab-1",children:"a panel"}),a.jsx(t.Panel,{tabId:"tab-2",children:"b panel"}),a.jsx(t.Panel,{tabId:"tab-3",children:"c panel"})]});d.storyName="Three tabs streched";const i=()=>a.jsxs(t,{initialTab:"tab-1",children:[a.jsxs(t.TabWrapper,{stretch:!0,children:[a.jsx(t.Tab,{tabId:"tab-1",children:"Tab A"}),a.jsx(t.Tab,{tabId:"tab-2",children:"Tab B"})]}),a.jsx(t.Panel,{tabId:"tab-1",children:a.jsx("div",{children:a.jsxs(t,{initialTab:"nested-tab-1",children:[a.jsxs(t.TabWrapper,{children:[a.jsx(t.Tab,{tabId:"nested-tab-1",children:"Tab A"}),a.jsx(t.Tab,{tabId:"nested-tab-2",children:"Tab B"})]}),a.jsx(t.Panel,{tabId:"nested-tab-1",children:"a panel"}),a.jsx(t.Panel,{tabId:"nested-tab-2",children:"b panel"})]})})}),a.jsx(t.Panel,{tabId:"tab-2",children:"b panel"})]});i.storyName="Nested tabs";const l=()=>a.jsx("div",{style:{border:"3px solid yellow",padding:"8px"},children:a.jsx(t,{initialTab:"tab-1",children:a.jsxs("div",{style:{border:"3px solid green",minHeight:"600px",padding:"8px"},children:[a.jsx("div",{style:{border:"3px solid blue",padding:"8px"},children:a.jsxs(t.TabWrapper,{stretch:!0,children:[a.jsx(t.Tab,{tabId:"tab-1",children:"🚀"}),a.jsx(t.Tab,{tabId:"tab-2",children:a.jsx(D,{color:"#ff0",background:"#f60",children:"I'm a Badge"})}),a.jsx(t.Tab,{tabId:"tab-3",children:a.jsx("img",{src:"https://i2-prod.mirror.co.uk/incoming/article5657868.ece/ALTERNATES/s1200b/Boris-Johnson.jpg",width:"100px"})})]})}),a.jsxs("div",{style:{border:"3px solid red",display:"flex",flex:"1 1 0px",flexDirection:"column",height:"300px",padding:"8px"},children:[a.jsx(t.Panel,{tabId:"tab-1",children:a.jsx("div",{style:{padding:"8px"},children:"A Rocket"})}),a.jsx(t.Panel,{tabId:"tab-2",children:a.jsx("div",{style:{padding:"80px"},children:"A Badge"})}),a.jsx(t.Panel,{tabId:"tab-3",children:a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",border:"3px dotted green",width:"100%"},children:"A Boris"})})]})]})})});l.storyName="Fun with Tabs strached";const o=()=>{const e=n=>{confirm("change?")&&n()},s=n=>{console.log("onClick"),n()};return a.jsxs(t,{initialTab:"tab-2",children:[a.jsxs(t.TabWrapper,{children:[a.jsx(t.Tab,{tabId:"tab-1",beforeOnChange:e,style:{background:"rgba(255,102,0,0.1)"},children:"Tab A"}),a.jsx(t.Tab,{tabId:"tab-2",beforeOnChange:s,children:"Tab B"})]}),a.jsx(t.Panel,{tabId:"tab-1",style:{background:"rgba(255,102,0,0.1)"},children:"a panel"}),a.jsx(t.Panel,{tabId:"tab-2",children:"b panel"})]})};o.storyName="tabs with before change handler";b.__docgenInfo={description:"",methods:[],displayName:"DefaultTabsWithThreeOptions"};d.__docgenInfo={description:"",methods:[],displayName:"ThreeTabsStretched"};i.__docgenInfo={description:"",methods:[],displayName:"NestedTabs"};l.__docgenInfo={description:"",methods:[],displayName:"FunWithTabsStretched"};o.__docgenInfo={description:"",methods:[],displayName:"TabsWithBeforeChangeHandler"};var u,x,f;b.parameters={...b.parameters,docs:{...(u=b.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Tabs initialTab="tab-2">
    <Tabs.TabWrapper>
      <Tabs.Tab tabId="tab-1" style={{
      background: 'rgba(255,102,0,0.1)'
    }}>Tab A</Tabs.Tab>
      <Tabs.Tab tabId="tab-2">Tab B</Tabs.Tab>
      <Tabs.Tab tabId="tab-3">Tab c</Tabs.Tab>
    </Tabs.TabWrapper>
    <Tabs.Panel tabId="tab-1" style={{
    background: 'rgba(255,102,0,0.1)'
  }}>a panel</Tabs.Panel>
    <Tabs.Panel tabId="tab-2">b panel</Tabs.Panel>
    <Tabs.Panel tabId="tab-3">c panel</Tabs.Panel>
  </Tabs>`,...(f=(x=b.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var I,y,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Tabs initialTab="tab-1">
    <Tabs.TabWrapper stretch>
      <Tabs.Tab tabId="tab-1">Tab A</Tabs.Tab>
      <Tabs.Tab tabId="tab-2" disabled>
        Tab B
      </Tabs.Tab>
      <Tabs.Tab tabId="tab-3">Tab c</Tabs.Tab>
    </Tabs.TabWrapper>
    <Tabs.Panel tabId="tab-1">a panel</Tabs.Panel>
    <Tabs.Panel tabId="tab-2">b panel</Tabs.Panel>
    <Tabs.Panel tabId="tab-3">c panel</Tabs.Panel>
  </Tabs>`,...(j=(y=d.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var P,v,k;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Tabs initialTab="tab-1">
    <Tabs.TabWrapper stretch>
      <Tabs.Tab tabId="tab-1">Tab A</Tabs.Tab>
      <Tabs.Tab tabId="tab-2">Tab B</Tabs.Tab>
    </Tabs.TabWrapper>
    <Tabs.Panel tabId="tab-1">
      <div>
        <Tabs initialTab="nested-tab-1">
          <Tabs.TabWrapper>
            <Tabs.Tab tabId="nested-tab-1">Tab A</Tabs.Tab>
            <Tabs.Tab tabId="nested-tab-2">Tab B</Tabs.Tab>
          </Tabs.TabWrapper>
          <Tabs.Panel tabId="nested-tab-1">a panel</Tabs.Panel>
          <Tabs.Panel tabId="nested-tab-2">b panel</Tabs.Panel>
        </Tabs>
      </div>
    </Tabs.Panel>
    <Tabs.Panel tabId="tab-2">b panel</Tabs.Panel>
  </Tabs>`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var C,W,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div style={{
  border: '3px solid yellow',
  padding: '8px'
}}>
    <Tabs initialTab="tab-1">
      <div style={{
      border: '3px solid green',
      minHeight: '600px',
      padding: '8px'
    }}>
        <div style={{
        border: '3px solid blue',
        padding: '8px'
      }}>
          <Tabs.TabWrapper stretch>
            <Tabs.Tab tabId="tab-1">🚀</Tabs.Tab>
            <Tabs.Tab tabId="tab-2">
              <Badge color="#ff0" background="#f60">
                I'm a Badge
              </Badge>
            </Tabs.Tab>
            <Tabs.Tab tabId="tab-3">
              <img src="https://i2-prod.mirror.co.uk/incoming/article5657868.ece/ALTERNATES/s1200b/Boris-Johnson.jpg" width="100px" />
            </Tabs.Tab>
          </Tabs.TabWrapper>
        </div>
        <div style={{
        border: '3px solid red',
        display: 'flex',
        flex: '1 1 0px',
        flexDirection: 'column',
        height: '300px',
        padding: '8px'
      }}>
          <Tabs.Panel tabId="tab-1">
            <div style={{
            padding: '8px'
          }}>A Rocket</div>
          </Tabs.Panel>
          <Tabs.Panel tabId="tab-2">
            <div style={{
            padding: '80px'
          }}>A Badge</div>
          </Tabs.Panel>
          <Tabs.Panel tabId="tab-3">
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '3px dotted green',
            width: '100%'
          }}>
              A Boris
            </div>
          </Tabs.Panel>
        </div>
      </div>
    </Tabs>
  </div>`,...(N=(W=l.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var $,B,w;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const aClickHandler = (callback: () => void) => {
    const shouldChange = confirm('change?');
    shouldChange && callback();
  };
  const bClickHandler = (callback: () => void) => {
    // eslint-disable-next-line no-console
    console.log('onClick');
    callback();
  };
  return <Tabs initialTab="tab-2">
      <Tabs.TabWrapper>
        <Tabs.Tab tabId="tab-1" beforeOnChange={aClickHandler} style={{
        background: 'rgba(255,102,0,0.1)'
      }}>
          Tab A
        </Tabs.Tab>
        <Tabs.Tab tabId="tab-2" beforeOnChange={bClickHandler}>
          Tab B
        </Tabs.Tab>
      </Tabs.TabWrapper>
      <Tabs.Panel tabId="tab-1" style={{
      background: 'rgba(255,102,0,0.1)'
    }}>
        a panel
      </Tabs.Panel>
      <Tabs.Panel tabId="tab-2">b panel</Tabs.Panel>
    </Tabs>;
}`,...(w=(B=o.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const Q=["DefaultTabsWithThreeOptions","ThreeTabsStretched","NestedTabs","FunWithTabsStretched","TabsWithBeforeChangeHandler"];export{b as DefaultTabsWithThreeOptions,l as FunWithTabsStretched,i as NestedTabs,o as TabsWithBeforeChangeHandler,d as ThreeTabsStretched,Q as __namedExportsOrder,M as default};
