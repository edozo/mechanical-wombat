import{c as $,s as r,r as k,j as a}from"./iframe-DVQN8M8q.js";import{c as u}from"./createLucideIcon-VbWEJlGx.js";import"./preload-helper-PPVm8Dsz.js";const b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],m=u("circle-alert",b);const B=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],x=u("circle-check-big",B);const I=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],y=u("circle-x",I);const j=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],f=u("info",j),S={neutral:r`
    background-color: ${({theme:e})=>e.colors.neutral[200]};
    color: ${({theme:e})=>e.colors.neutral[700]};
  `,info:r`
    background-color: ${({theme:e})=>e.colors.status.info[100]};
    color: ${({theme:e})=>e.colors.status.info[700]};
  `,success:r`
    background-color: ${({theme:e})=>e.colors.status.success[100]};
    color: ${({theme:e})=>e.colors.status.success[700]};
  `,warning:r`
    background-color: ${({theme:e})=>e.colors.status.warning[100]};
    color: ${({theme:e})=>e.colors.status.warning[700]};
  `,danger:r`
    background-color: ${({theme:e})=>e.colors.status.danger[100]};
    color: ${({theme:e})=>e.colors.status.danger[700]};
  `,primary:r`
    background-color: ${({theme:e})=>e.colors.indigo[100]};
    color: ${({theme:e})=>e.colors.indigo[700]};
  `},w={neutral:r`
    background-color: ${({theme:e})=>e.colors.neutral[700]};
    color: ${({theme:e})=>e.colors.neutral[100]};
  `,info:r`
    background-color: ${({theme:e})=>e.colors.status.info[700]};
    color: ${({theme:e})=>e.colors.status.info[50]};
  `,success:r`
    background-color: ${({theme:e})=>e.colors.status.success[700]};
    color: ${({theme:e})=>e.colors.status.success[50]};
  `,warning:r`
    background-color: ${({theme:e})=>e.colors.status.warning[700]};
    color: ${({theme:e})=>e.colors.status.warning[50]};
  `,danger:r`
    background-color: ${({theme:e})=>e.colors.status.danger[700]};
    color: ${({theme:e})=>e.colors.status.danger[50]};
  `,primary:r`
    background-color: ${({theme:e})=>e.colors.indigo[700]};
    color: ${({theme:e})=>e.colors.indigo[50]};
  `},_={sm:r`
    font-size: ${({theme:e})=>e.typography.scale.xs.size};
    line-height: ${({theme:e})=>e.typography.scale.xs.lineHeight};
    padding: ${({theme:e})=>e.spacing["2xs"]} ${({theme:e})=>e.spacing.sm};
    gap: ${({theme:e})=>e.spacing["2xs"]};

    > svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }
  `,md:r`
    font-size: ${({theme:e})=>e.typography.scale.sm.size};
    line-height: ${({theme:e})=>e.typography.scale.sm.lineHeight};
    padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.md};
    gap: ${({theme:e})=>e.spacing.xs};

    > svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
    }
  `,lg:r`
    font-size: ${({theme:e})=>e.typography.scale.md.size};
    line-height: ${({theme:e})=>e.typography.scale.md.lineHeight};
    padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.lg};
    gap: ${({theme:e})=>e.spacing.xs};

    > svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
  `},z=$.span`
  display: inline-flex;
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius.round};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  white-space: nowrap;

  ${({$variant:e,$appearance:i})=>i==="solid"?w[e]:S[e]}
  ${({$size:e})=>_[e]}
`,s=k.forwardRef(({variant:e="neutral",size:i="md",appearance:n="subtle",children:h,...v},V)=>a.jsx(z,{ref:V,$variant:e,$size:i,$appearance:n,...v,children:h}));s.displayName="BadgeV2";s.__docgenInfo={description:"",methods:[],displayName:"BadgeV2",props:{variant:{required:!1,tsType:{name:"union",raw:"'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'primary'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'primary'"}]},description:"Semantic colour variant.",defaultValue:{value:"'neutral'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size scale for text and padding.",defaultValue:{value:"'md'",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:"'subtle' | 'solid'",elements:[{name:"literal",value:"'subtle'"},{name:"literal",value:"'solid'"}]},description:"Visual style: subtle uses a light tinted background; solid uses a dark filled background with light text.",defaultValue:{value:"'subtle'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Badge content."}}};const p=["neutral","info","success","warning","danger","primary"],W={title:"Components/BadgeV2",component:s,argTypes:{variant:{description:"Semantic colour variant.",control:{type:"select"},options:p},size:{description:"Size scale for text and padding.",control:{type:"select"},options:["sm","md","lg"]},appearance:{description:"subtle = light tinted background; solid = dark filled background.",control:{type:"select"},options:["subtle","solid"]},children:{description:"Badge label.",control:{type:"text"}}},args:{variant:"neutral",size:"md",appearance:"subtle",children:"Badge"}},N=e=>a.jsx(s,{...e}),g=N.bind({}),l=e=>a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:p.map(i=>a.jsx(s,{...e,appearance:"subtle",variant:i,children:i},i))}),t=e=>a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:p.map(i=>a.jsx(s,{...e,appearance:"solid",variant:i,children:i},i))}),o=()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:p.map(e=>a.jsx(s,{appearance:"subtle",variant:e,children:e},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:p.map(e=>a.jsx(s,{appearance:"solid",variant:e,children:e},e))})]}),c=e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsxs(s,{...e,variant:"info",children:[a.jsx(f,{}),"Info"]}),a.jsxs(s,{...e,variant:"success",children:[a.jsx(x,{}),"Success"]}),a.jsxs(s,{...e,variant:"warning",children:[a.jsx(m,{}),"Warning"]}),a.jsxs(s,{...e,variant:"danger",children:[a.jsx(y,{}),"Danger"]})]}),a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsxs(s,{...e,variant:"info",appearance:"solid",children:[a.jsx(f,{}),"Info"]}),a.jsxs(s,{...e,variant:"success",appearance:"solid",children:[a.jsx(x,{}),"Success"]}),a.jsxs(s,{...e,variant:"warning",appearance:"solid",children:[a.jsx(m,{}),"Warning"]}),a.jsxs(s,{...e,variant:"danger",appearance:"solid",children:[a.jsx(y,{}),"Danger"]})]})]}),d=e=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["subtle","solid"].map(i=>a.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:["sm","md","lg"].map(n=>a.jsx(s,{...e,appearance:i,variant:"primary",size:n,children:n},n))},i))});l.__docgenInfo={description:"",methods:[],displayName:"SubtleVariants"};t.__docgenInfo={description:"",methods:[],displayName:"SolidVariants"};o.__docgenInfo={description:"",methods:[],displayName:"AppearancesMatrix"};c.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};d.__docgenInfo={description:"",methods:[],displayName:"Sizes"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"args => <BadgeV2 {...args} />",...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  alignItems: 'center'
}}>
    {VARIANTS.map(variant => <BadgeV2 key={variant} {...args} appearance="subtle" variant={variant}>
        {variant}
      </BadgeV2>)}
  </div>`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  alignItems: 'center'
}}>
    {VARIANTS.map(variant => <BadgeV2 key={variant} {...args} appearance="solid" variant={variant}>
        {variant}
      </BadgeV2>)}
  </div>`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}}>
    <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {VARIANTS.map(variant => <BadgeV2 key={variant} appearance="subtle" variant={variant}>
          {variant}
        </BadgeV2>)}
    </div>
    <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {VARIANTS.map(variant => <BadgeV2 key={variant} appearance="solid" variant={variant}>
          {variant}
        </BadgeV2>)}
    </div>
  </div>`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}}>
    <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <BadgeV2 {...args} variant="info">
        <Info />
        Info
      </BadgeV2>
      <BadgeV2 {...args} variant="success">
        <CheckCircle />
        Success
      </BadgeV2>
      <BadgeV2 {...args} variant="warning">
        <AlertCircle />
        Warning
      </BadgeV2>
      <BadgeV2 {...args} variant="danger">
        <XCircle />
        Danger
      </BadgeV2>
    </div>
    <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <BadgeV2 {...args} variant="info" appearance="solid">
        <Info />
        Info
      </BadgeV2>
      <BadgeV2 {...args} variant="success" appearance="solid">
        <CheckCircle />
        Success
      </BadgeV2>
      <BadgeV2 {...args} variant="warning" appearance="solid">
        <AlertCircle />
        Warning
      </BadgeV2>
      <BadgeV2 {...args} variant="danger" appearance="solid">
        <XCircle />
        Danger
      </BadgeV2>
    </div>
  </div>`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}}>
    {(['subtle', 'solid'] as const).map(appearance => <div key={appearance} style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
        {(['sm', 'md', 'lg'] as const).map(size => <BadgeV2 key={size} {...args} appearance={appearance} variant="primary" size={size}>
            {size}
          </BadgeV2>)}
      </div>)}
  </div>`,...d.parameters?.docs?.source}}};const T=["Playground","SubtleVariants","SolidVariants","AppearancesMatrix","WithIcons","Sizes"];export{o as AppearancesMatrix,g as Playground,d as Sizes,t as SolidVariants,l as SubtleVariants,c as WithIcons,T as __namedExportsOrder,W as default};
