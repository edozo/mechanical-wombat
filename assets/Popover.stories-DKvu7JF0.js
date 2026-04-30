import{j as e,r as c}from"./iframe-Ym7xYKuD.js";import{P as n}from"./Popover-DyVmuRYZ.js";import{L as u}from"./List-Bf4krC62.js";import{T as m}from"./Tooltip-DuTLFCiZ.js";import{ab as h}from"./Icons-BbK3AfhE.js";import"./preload-helper-PPVm8Dsz.js";import"./shift-away-CmFbxdtX.js";import"./index-B17tC9T8.js";import"./index-DBFNr24N.js";import"./Typography-DqZhp-zL.js";const B={title:"Components/Popover",component:n,parameters:{backgrounds:{default:"dark blue"}}},l=()=>{const[o,t]=c.useState(!1),r=()=>t(!0),i=()=>t(!1),[a,v]=c.useState("tool A");return e.jsx("div",{style:{minHeight:"200px"},children:e.jsx(n,{interactive:!0,interactiveBorder:10,visible:o,onClickOutside:i,content:e.jsxs("div",{style:{padding:"8px"},children:[e.jsx(n.Title,{children:"Tooltip"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsxs(n.Button,{style:{marginRight:"4px"},name:"a button",onClick:()=>{a!=="tool A"&&(confirm("Are you sure you want to change the tool")&&v("tool A"),i())},children:[e.jsx(h,{}),e.jsxs("div",{style:{marginTop:"4px"},children:["Freehold",e.jsx("br",{}),"Title"]})]}),e.jsx(n.Button,{onClick:()=>{a!=="tool B"&&(v("tool B"),i())},children:"text"})]})]}),children:e.jsxs("button",{type:"button",onClick:o?i:r,children:[a," (click)"]})})})},p=()=>{const[o,t]=c.useState(!1),r=()=>t(!0),i=()=>t(!1);return e.jsx("div",{style:{minHeight:"200px"},children:e.jsx(m,{content:"You're hovering me",disabled:o,children:e.jsx("span",{children:e.jsx(n,{interactive:!0,interactiveBorder:40,visible:o,onClickOutside:i,content:e.jsx("div",{style:{padding:"8px"},children:"You clicked me"}),children:e.jsx("button",{type:"button",onClick:o?i:r,children:"Trigger (hover + click)"})})})})})},d=()=>{const[o,t]=c.useState(!0),r=()=>t(!0),i=()=>t(!1);return e.jsx("div",{style:{minHeight:"200px"},children:e.jsx(n,{interactive:!0,interactiveBorder:10,visible:o,content:e.jsxs("div",{style:{padding:"8px"},children:[e.jsx("span",{children:"Open by default and does not close on click outside"}),e.jsx("img",{alt:"Himself",src:"https://i2-prod.mirror.co.uk/incoming/article5657868.ece/ALTERNATES/s1200b/Boris-Johnson.jpg",width:"100px"}),e.jsx("br",{}),e.jsx("button",{type:"button",onClick:i,children:"close"})]}),children:e.jsx("button",{type:"button",onClick:o?i:r,children:"trigger (click)"})})})},s=({...o})=>{const t=[{node:"Element 1"},{node:"Element 2",disabled:!0},{node:"Element 3"},{node:"Element 4"},{node:"Element 5"},{node:"Element 6"}];return e.jsx("div",{style:{minHeight:"200px"},children:e.jsx(n,{interactive:!0,interactiveBorder:10,visible:!0,...o,content:e.jsx(u,{...o,children:t.map(r=>e.jsx(u.Item,{disabled:r.disabled,children:r.node},r.node))}),children:e.jsx("span",{children:"some element"})})})};s.args={radius:"xlarge",variant:"standard"};l.__docgenInfo={description:"",methods:[],displayName:"PopoverWithTitle"};p.__docgenInfo={description:"",methods:[],displayName:"PopoverWithTooltip"};d.__docgenInfo={description:"",methods:[],displayName:"PopoverSimple"};s.__docgenInfo={description:"",methods:[],displayName:"PopoverList"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const showPopover = (): void => setPopoverVisible(true);
  const hidePopover = (): void => setPopoverVisible(false);
  const [currentTool, setCurrentTool] = useState('tool A');
  return <div style={{
    minHeight: '200px'
  }}>
      <Popover interactive interactiveBorder={10} visible={popoverVisible} onClickOutside={hidePopover} content={<div style={{
      padding: '8px'
    }}>
            <Popover.Title>Tooltip</Popover.Title>
            <div style={{
        display: 'flex'
      }}>
              <Popover.Button style={{
          marginRight: '4px'
        }} name="a button" onClick={() => {
          if (currentTool !== 'tool A') {
            // eslint-disable-next-line no-restricted-globals
            const result = confirm('Are you sure you want to change the tool');
            result && setCurrentTool('tool A');
            hidePopover();
          }
        }}>
                <WarningIcon />
                <div style={{
            marginTop: '4px'
          }}>
                  Freehold
                  <br />
                  Title
                </div>
              </Popover.Button>
              <Popover.Button onClick={() => {
          if (currentTool !== 'tool B') {
            setCurrentTool('tool B');
            hidePopover();
          }
        }}>
                text
              </Popover.Button>
            </div>
          </div>}>
        <button type="button" onClick={popoverVisible ? hidePopover : showPopover}>
          {currentTool} (click)
        </button>
      </Popover>
    </div>;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [popoverVisible, setTooltipVisible] = useState(false);
  const showPopover = (): void => setTooltipVisible(true);
  const hidePopover = (): void => setTooltipVisible(false);
  return <div style={{
    minHeight: '200px'
  }}>
      <Tooltip content="You're hovering me" disabled={popoverVisible}>
        <span>
          <Popover interactive interactiveBorder={40} visible={popoverVisible} onClickOutside={hidePopover} content={<div style={{
          padding: '8px'
        }}>You clicked me</div>}>
            <button type="button" onClick={popoverVisible ? hidePopover : showPopover}>
              Trigger (hover + click)
            </button>
          </Popover>
        </span>
      </Tooltip>
    </div>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [popoverVisible, setTooltipVisible] = useState(true);
  const showPopover = (): void => setTooltipVisible(true);
  const hidePopover = (): void => setTooltipVisible(false);
  return <div style={{
    minHeight: '200px'
  }}>
      <Popover interactive interactiveBorder={10} visible={popoverVisible} content={<div style={{
      padding: '8px'
    }}>
            <span>Open by default and does not close on click outside</span>
            <img alt="Himself" src="https://i2-prod.mirror.co.uk/incoming/article5657868.ece/ALTERNATES/s1200b/Boris-Johnson.jpg" width="100px" />
            <br />
            <button type="button" onClick={hidePopover}>
              close
            </button>
          </div>}>
        <button type="button" onClick={popoverVisible ? hidePopover : showPopover}>
          trigger (click)
        </button>
      </Popover>
    </div>;
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const elements = [{
    node: 'Element 1'
  }, {
    node: 'Element 2',
    disabled: true
  }, {
    node: 'Element 3'
  }, {
    node: 'Element 4'
  }, {
    node: 'Element 5'
  }, {
    node: 'Element 6'
  }];
  return <div style={{
    minHeight: '200px'
  }}>
      <Popover interactive interactiveBorder={10} visible
    // Tippy logs a warning here, we can find a fix later as it doesn't effect anything
    {...args} content={<List {...args}>
            {elements.map(element => <List.Item disabled={element.disabled} key={element.node}>
                {element.node}
              </List.Item>)}
          </List>}>
        <span>some element</span>
      </Popover>
    </div>;
}`,...s.parameters?.docs?.source}}};const E=["PopoverWithTitle","PopoverWithTooltip","PopoverSimple","PopoverList"];export{s as PopoverList,d as PopoverSimple,l as PopoverWithTitle,p as PopoverWithTooltip,E as __namedExportsOrder,B as default};
