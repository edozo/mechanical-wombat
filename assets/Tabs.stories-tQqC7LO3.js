import{r as T,s as c,c as p,j as a}from"./iframe-CWZzjXvL.js";import{B as D}from"./Badge-BSt07TpU.js";import"./preload-helper-C1FmrZbK.js";import"./Badge.styles-CTPHgq22.js";const h=T.createContext({}),E=h.Provider;h.Consumer;function $(){const t=T.useContext(h);if(!t)throw new Error("Tab compound components can't be rendered outside Tabs component");return t}const L=p.div`
  display: flex;
  ${({$stretch:t})=>t&&c`
      justify-content: stretch;
      * {
        flex: 1 1 0px;
      }
    `}
`,z=p.span`
  background: ${({theme:t})=>t.colors.white};
  color: ${({theme:t})=>t.colors.grayDarker};
  padding: ${({theme:t})=>t.spacing.xsmall} ${({theme:t})=>t.spacing.small};
  border-radius: ${({theme:t})=>t.borderRadius.large} ${({theme:t})=>t.borderRadius.large} 0 0;
  font-size: ${({theme:t})=>t.font.size.text.base};
  line-height: ${({theme:t})=>t.font.lineHeight.text.base};
  font-weight: ${({theme:t})=>t.font.weight.semibold};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({theme:t,$isActive:s})=>s&&c`
      font-weight: ${t.font.weight.bold};
      background: ${t.colors.grayLight};
      color: ${t.colors.black};
    `}

  ${({theme:t,$disabled:s})=>s&&c`
      font-weight: ${t.font.weight.regular};
      font-size: ${t.font.size.text.small};
      background: ${t.colors.grayLighter};
      color: ${t.colors.grayDark};
      cursor: not-allowed;
    `}
`,_=({tabId:t,beforeOnChange:s,children:n,disabled:r,...H})=>{const{setActiveTab:O,activeTab:g}=$(),u=()=>{g!==t&&O(t)},q=()=>{r||(s?s(u):u())};return a.jsx(z,{$disabled:r,onClick:q,$isActive:g===t,...H,children:n})},R=({stretch:t=!1,children:s})=>a.jsx(L,{$stretch:t,children:s});_.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{tabId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},beforeOnChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(handleClick: () => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"handleClick"}],return:{name:"void"}}},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"TabWrapper",props:{stretch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const F=p.div`
  display: flex;
  background: ${({theme:t})=>t.colors.grayLight};
  flex: 1 1 0px;
`,S=({tabId:t,children:s,...n})=>{const{activeTab:r}=$();return t===r?a.jsx(F,{...n,children:s}):null};S.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{tabId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const e=({initialTab:t,children:s})=>{const[n,r]=T.useState(t);return a.jsx(E,{value:{activeTab:n,setActiveTab:r},children:s})};e.Tab=_;e.TabWrapper=R;e.Panel=S;e.__docgenInfo={description:"",methods:[{name:"Tab",docblock:null,modifiers:["static"],params:[{name:"{ tabId, beforeOnChange, children, disabled, ...rest }",optional:!1,type:null}],returns:null},{name:"TabWrapper",docblock:null,modifiers:["static"],params:[{name:"{ stretch = false, children }",optional:!1,type:null}],returns:null},{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{ tabId, children, ...rest }",optional:!1,type:null}],returns:null}],displayName:"Tabs"};const M={title:"Components/Tabs",component:e},b=()=>a.jsxs(e,{initialTab:"tab-2",children:[a.jsxs(e.TabWrapper,{children:[a.jsx(e.Tab,{tabId:"tab-1",style:{background:"rgba(255,102,0,0.1)"},children:"Tab A"}),a.jsx(e.Tab,{tabId:"tab-2",children:"Tab B"}),a.jsx(e.Tab,{tabId:"tab-3",children:"Tab c"})]}),a.jsx(e.Panel,{tabId:"tab-1",style:{background:"rgba(255,102,0,0.1)"},children:"a panel"}),a.jsx(e.Panel,{tabId:"tab-2",children:"b panel"}),a.jsx(e.Panel,{tabId:"tab-3",children:"c panel"})]});b.storyName="Default tabs with three options";const d=()=>a.jsxs(e,{initialTab:"tab-1",children:[a.jsxs(e.TabWrapper,{stretch:!0,children:[a.jsx(e.Tab,{tabId:"tab-1",children:"Tab A"}),a.jsx(e.Tab,{tabId:"tab-2",disabled:!0,children:"Tab B"}),a.jsx(e.Tab,{tabId:"tab-3",children:"Tab c"})]}),a.jsx(e.Panel,{tabId:"tab-1",children:"a panel"}),a.jsx(e.Panel,{tabId:"tab-2",children:"b panel"}),a.jsx(e.Panel,{tabId:"tab-3",children:"c panel"})]});d.storyName="Three tabs streched";const i=()=>a.jsxs(e,{initialTab:"tab-1",children:[a.jsxs(e.TabWrapper,{stretch:!0,children:[a.jsx(e.Tab,{tabId:"tab-1",children:"Tab A"}),a.jsx(e.Tab,{tabId:"tab-2",children:"Tab B"})]}),a.jsx(e.Panel,{tabId:"tab-1",children:a.jsx("div",{children:a.jsxs(e,{initialTab:"nested-tab-1",children:[a.jsxs(e.TabWrapper,{children:[a.jsx(e.Tab,{tabId:"nested-tab-1",children:"Tab A"}),a.jsx(e.Tab,{tabId:"nested-tab-2",children:"Tab B"})]}),a.jsx(e.Panel,{tabId:"nested-tab-1",children:"a panel"}),a.jsx(e.Panel,{tabId:"nested-tab-2",children:"b panel"})]})})}),a.jsx(e.Panel,{tabId:"tab-2",children:"b panel"})]});i.storyName="Nested tabs";const l=()=>a.jsx("div",{style:{border:"3px solid yellow",padding:"8px"},children:a.jsx(e,{initialTab:"tab-1",children:a.jsxs("div",{style:{border:"3px solid green",minHeight:"600px",padding:"8px"},children:[a.jsx("div",{style:{border:"3px solid blue",padding:"8px"},children:a.jsxs(e.TabWrapper,{stretch:!0,children:[a.jsx(e.Tab,{tabId:"tab-1",children:"🚀"}),a.jsx(e.Tab,{tabId:"tab-2",children:a.jsx(D,{color:"#ff0",background:"#f60",children:"I'm a Badge"})}),a.jsx(e.Tab,{tabId:"tab-3",children:a.jsx("img",{src:"https://i2-prod.mirror.co.uk/incoming/article5657868.ece/ALTERNATES/s1200b/Boris-Johnson.jpg",alt:"",width:"100px"})})]})}),a.jsxs("div",{style:{border:"3px solid red",display:"flex",flex:"1 1 0px",flexDirection:"column",height:"300px",padding:"8px"},children:[a.jsx(e.Panel,{tabId:"tab-1",children:a.jsx("div",{style:{padding:"8px"},children:"A Rocket"})}),a.jsx(e.Panel,{tabId:"tab-2",children:a.jsx("div",{style:{padding:"80px"},children:"A Badge"})}),a.jsx(e.Panel,{tabId:"tab-3",children:a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",border:"3px dotted green",width:"100%"},children:"A Boris"})})]})]})})});l.storyName="Fun with Tabs strached";const o=()=>{const t=n=>{confirm("change?")&&n()},s=n=>{console.log("onClick"),n()};return a.jsxs(e,{initialTab:"tab-2",children:[a.jsxs(e.TabWrapper,{children:[a.jsx(e.Tab,{tabId:"tab-1",beforeOnChange:t,style:{background:"rgba(255,102,0,0.1)"},children:"Tab A"}),a.jsx(e.Tab,{tabId:"tab-2",beforeOnChange:s,children:"Tab B"})]}),a.jsx(e.Panel,{tabId:"tab-1",style:{background:"rgba(255,102,0,0.1)"},children:"a panel"}),a.jsx(e.Panel,{tabId:"tab-2",children:"b panel"})]})};o.storyName="tabs with before change handler";b.__docgenInfo={description:"",methods:[],displayName:"DefaultTabsWithThreeOptions"};d.__docgenInfo={description:"",methods:[],displayName:"ThreeTabsStretched"};i.__docgenInfo={description:"",methods:[],displayName:"NestedTabs"};l.__docgenInfo={description:"",methods:[],displayName:"FunWithTabsStretched"};o.__docgenInfo={description:"",methods:[],displayName:"TabsWithBeforeChangeHandler"};var x,m,f;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Tabs initialTab="tab-2">
    <Tabs.TabWrapper>
      <Tabs.Tab tabId="tab-1" style={{
      background: 'rgba(255,102,0,0.1)'
    }}>
        Tab A
      </Tabs.Tab>
      <Tabs.Tab tabId="tab-2">Tab B</Tabs.Tab>
      <Tabs.Tab tabId="tab-3">Tab c</Tabs.Tab>
    </Tabs.TabWrapper>
    <Tabs.Panel tabId="tab-1" style={{
    background: 'rgba(255,102,0,0.1)'
  }}>
      a panel
    </Tabs.Panel>
    <Tabs.Panel tabId="tab-2">b panel</Tabs.Panel>
    <Tabs.Panel tabId="tab-3">c panel</Tabs.Panel>
  </Tabs>`,...(f=(m=b.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var I,y,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Tabs initialTab="tab-1">
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
                I&apos;m a Badge
              </Badge>
            </Tabs.Tab>
            <Tabs.Tab tabId="tab-3">
              <img src="https://i2-prod.mirror.co.uk/incoming/article5657868.ece/ALTERNATES/s1200b/Boris-Johnson.jpg" alt="" width="100px" />
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
  </div>`,...(N=(W=l.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var B,w,A;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const aClickHandler = (callback: () => void) => {
    // eslint-disable-next-line no-restricted-globals, no-alert
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
}`,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const Q=["DefaultTabsWithThreeOptions","ThreeTabsStretched","NestedTabs","FunWithTabsStretched","TabsWithBeforeChangeHandler"];export{b as DefaultTabsWithThreeOptions,l as FunWithTabsStretched,i as NestedTabs,o as TabsWithBeforeChangeHandler,d as ThreeTabsStretched,Q as __namedExportsOrder,M as default};
