import{r as T,s as c,c as p,j as a}from"./iframe-qSwtjqTo.js";import{B as v}from"./Badge-DqoMhxNO.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge.styles-CK1SIiU8.js";const h=T.createContext({}),k=h.Provider;h.Consumer;function x(){const t=T.useContext(h);if(!t)throw new Error("Tab compound components can't be rendered outside Tabs component");return t}const C=p.div`
  display: flex;
  ${({$stretch:t})=>t&&c`
      justify-content: stretch;
      * {
        flex: 1 1 0px;
      }
    `}
`,W=p.span`
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
`,m=({tabId:t,beforeOnChange:s,children:n,disabled:r,...y})=>{const{setActiveTab:j,activeTab:g}=x(),u=()=>{g!==t&&j(t)},P=()=>{r||(s?s(u):u())};return a.jsx(W,{$disabled:r,onClick:P,$isActive:g===t,...y,children:n})},f=({stretch:t=!1,children:s})=>a.jsx(C,{$stretch:t,children:s});m.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{tabId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},beforeOnChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(handleClick: () => void) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"handleClick"}],return:{name:"void"}}},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"TabWrapper",props:{stretch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N=p.div`
  display: flex;
  background: ${({theme:t})=>t.colors.grayLight};
  flex: 1 1 0px;
`,I=({tabId:t,children:s,...n})=>{const{activeTab:r}=x();return t===r?a.jsx(N,{...n,children:s}):null};I.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{tabId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const e=({initialTab:t,children:s})=>{const[n,r]=T.useState(t);return a.jsx(k,{value:{activeTab:n,setActiveTab:r},children:s})};e.Tab=m;e.TabWrapper=f;e.Panel=I;e.__docgenInfo={description:"",methods:[{name:"Tab",docblock:null,modifiers:["static"],params:[{name:"{ tabId, beforeOnChange, children, disabled, ...rest }",optional:!1,type:null}],returns:null},{name:"TabWrapper",docblock:null,modifiers:["static"],params:[{name:"{ stretch = false, children }",optional:!1,type:null}],returns:null},{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{ tabId, children, ...rest }",optional:!1,type:null}],returns:null}],displayName:"Tabs"};const _={title:"Components/Tabs",component:e},b=()=>a.jsxs(e,{initialTab:"tab-2",children:[a.jsxs(e.TabWrapper,{children:[a.jsx(e.Tab,{tabId:"tab-1",style:{background:"rgba(255,102,0,0.1)"},children:"Tab A"}),a.jsx(e.Tab,{tabId:"tab-2",children:"Tab B"}),a.jsx(e.Tab,{tabId:"tab-3",children:"Tab c"})]}),a.jsx(e.Panel,{tabId:"tab-1",style:{background:"rgba(255,102,0,0.1)"},children:"a panel"}),a.jsx(e.Panel,{tabId:"tab-2",children:"b panel"}),a.jsx(e.Panel,{tabId:"tab-3",children:"c panel"})]});b.storyName="Default tabs with three options";const d=()=>a.jsxs(e,{initialTab:"tab-1",children:[a.jsxs(e.TabWrapper,{stretch:!0,children:[a.jsx(e.Tab,{tabId:"tab-1",children:"Tab A"}),a.jsx(e.Tab,{tabId:"tab-2",disabled:!0,children:"Tab B"}),a.jsx(e.Tab,{tabId:"tab-3",children:"Tab c"})]}),a.jsx(e.Panel,{tabId:"tab-1",children:"a panel"}),a.jsx(e.Panel,{tabId:"tab-2",children:"b panel"}),a.jsx(e.Panel,{tabId:"tab-3",children:"c panel"})]});d.storyName="Three tabs streched";const i=()=>a.jsxs(e,{initialTab:"tab-1",children:[a.jsxs(e.TabWrapper,{stretch:!0,children:[a.jsx(e.Tab,{tabId:"tab-1",children:"Tab A"}),a.jsx(e.Tab,{tabId:"tab-2",children:"Tab B"})]}),a.jsx(e.Panel,{tabId:"tab-1",children:a.jsx("div",{children:a.jsxs(e,{initialTab:"nested-tab-1",children:[a.jsxs(e.TabWrapper,{children:[a.jsx(e.Tab,{tabId:"nested-tab-1",children:"Tab A"}),a.jsx(e.Tab,{tabId:"nested-tab-2",children:"Tab B"})]}),a.jsx(e.Panel,{tabId:"nested-tab-1",children:"a panel"}),a.jsx(e.Panel,{tabId:"nested-tab-2",children:"b panel"})]})})}),a.jsx(e.Panel,{tabId:"tab-2",children:"b panel"})]});i.storyName="Nested tabs";const l=()=>a.jsx("div",{style:{border:"3px solid yellow",padding:"8px"},children:a.jsx(e,{initialTab:"tab-1",children:a.jsxs("div",{style:{border:"3px solid green",minHeight:"600px",padding:"8px"},children:[a.jsx("div",{style:{border:"3px solid blue",padding:"8px"},children:a.jsxs(e.TabWrapper,{stretch:!0,children:[a.jsx(e.Tab,{tabId:"tab-1",children:"🚀"}),a.jsx(e.Tab,{tabId:"tab-2",children:a.jsx(v,{color:"#ff0",background:"#f60",children:"I'm a Badge"})}),a.jsx(e.Tab,{tabId:"tab-3",children:a.jsx("img",{src:"https://i2-prod.mirror.co.uk/incoming/article5657868.ece/ALTERNATES/s1200b/Boris-Johnson.jpg",alt:"",width:"100px"})})]})}),a.jsxs("div",{style:{border:"3px solid red",display:"flex",flex:"1 1 0px",flexDirection:"column",height:"300px",padding:"8px"},children:[a.jsx(e.Panel,{tabId:"tab-1",children:a.jsx("div",{style:{padding:"8px"},children:"A Rocket"})}),a.jsx(e.Panel,{tabId:"tab-2",children:a.jsx("div",{style:{padding:"80px"},children:"A Badge"})}),a.jsx(e.Panel,{tabId:"tab-3",children:a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",border:"3px dotted green",width:"100%"},children:"A Boris"})})]})]})})});l.storyName="Fun with Tabs strached";const o=()=>{const t=n=>{confirm("change?")&&n()},s=n=>{console.log("onClick"),n()};return a.jsxs(e,{initialTab:"tab-2",children:[a.jsxs(e.TabWrapper,{children:[a.jsx(e.Tab,{tabId:"tab-1",beforeOnChange:t,style:{background:"rgba(255,102,0,0.1)"},children:"Tab A"}),a.jsx(e.Tab,{tabId:"tab-2",beforeOnChange:s,children:"Tab B"})]}),a.jsx(e.Panel,{tabId:"tab-1",style:{background:"rgba(255,102,0,0.1)"},children:"a panel"}),a.jsx(e.Panel,{tabId:"tab-2",children:"b panel"})]})};o.storyName="tabs with before change handler";b.__docgenInfo={description:"",methods:[],displayName:"DefaultTabsWithThreeOptions"};d.__docgenInfo={description:"",methods:[],displayName:"ThreeTabsStretched"};i.__docgenInfo={description:"",methods:[],displayName:"NestedTabs"};l.__docgenInfo={description:"",methods:[],displayName:"FunWithTabsStretched"};o.__docgenInfo={description:"",methods:[],displayName:"TabsWithBeforeChangeHandler"};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <Tabs initialTab="tab-2">
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
  </Tabs>`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Tabs initialTab="tab-1">
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
  </Tabs>`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Tabs initialTab="tab-1">
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
  </Tabs>`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const R=["DefaultTabsWithThreeOptions","ThreeTabsStretched","NestedTabs","FunWithTabsStretched","TabsWithBeforeChangeHandler"];export{b as DefaultTabsWithThreeOptions,l as FunWithTabsStretched,i as NestedTabs,o as TabsWithBeforeChangeHandler,d as ThreeTabsStretched,R as __namedExportsOrder,_ as default};
