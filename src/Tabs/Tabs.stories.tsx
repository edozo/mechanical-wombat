import type { Meta, StoryFn } from '@storybook/react';
import { Tabs } from './Tabs';
import { Badge } from '../Badge';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};
export default meta;

export const DefaultTabsWithThreeOptions: StoryFn<typeof Tabs> = () => (
  <Tabs initialTab="tab-2">
    <Tabs.TabWrapper>
      <Tabs.Tab tabId="tab-1" style={{ background: 'rgba(255,102,0,0.1)' }}>Tab A</Tabs.Tab>
      <Tabs.Tab tabId="tab-2">Tab B</Tabs.Tab>
      <Tabs.Tab tabId="tab-3">Tab c</Tabs.Tab>
    </Tabs.TabWrapper>
    <Tabs.Panel tabId="tab-1" style={{ background: 'rgba(255,102,0,0.1)' }}>a panel</Tabs.Panel>
    <Tabs.Panel tabId="tab-2">b panel</Tabs.Panel>
    <Tabs.Panel tabId="tab-3">c panel</Tabs.Panel>
  </Tabs>
);
DefaultTabsWithThreeOptions.storyName = 'Default tabs with three options';

export const ThreeTabsStretched: StoryFn<typeof Tabs> = () => (
  <Tabs initialTab="tab-1">
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
  </Tabs>
);
ThreeTabsStretched.storyName = 'Three tabs streched';

export const NestedTabs: StoryFn<typeof Tabs> = () => (
  <Tabs initialTab="tab-1">
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
  </Tabs>
);
NestedTabs.storyName = 'Nested tabs';

export const FunWithTabsStretched: StoryFn<typeof Tabs> = () => (
  <div style={{ border: '3px solid yellow', padding: '8px' }}>
    <Tabs initialTab="tab-1">
      <div style={{ border: '3px solid green', minHeight: '600px', padding: '8px' }}>
        <div style={{ border: '3px solid blue', padding: '8px' }}>
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
        <div
          style={{
            border: '3px solid red',
            display: 'flex',
            flex: '1 1 0px',
            flexDirection: 'column',
            height: '300px',
            padding: '8px',
          }}
        >
          <Tabs.Panel tabId="tab-1">
            <div style={{ padding: '8px' }}>A Rocket</div>
          </Tabs.Panel>
          <Tabs.Panel tabId="tab-2">
            <div style={{ padding: '80px' }}>A Badge</div>
          </Tabs.Panel>
          <Tabs.Panel tabId="tab-3">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '3px dotted green',
                width: '100%',
              }}
            >
              A Boris
            </div>
          </Tabs.Panel>
        </div>
      </div>
    </Tabs>
  </div>
);
FunWithTabsStretched.storyName = 'Fun with Tabs strached';

export const TabsWithBeforeChangeHandler: StoryFn<typeof Tabs> = () => {
  const aClickHandler = (callback: () => void) => {
    const shouldChange = confirm('change?');
    shouldChange && callback();
  };
  const bClickHandler = (callback: () => void) => {
    // eslint-disable-next-line no-console
    console.log('onClick');
    callback();
  };
  return (
    <Tabs initialTab="tab-2">
      <Tabs.TabWrapper>
        <Tabs.Tab tabId="tab-1" beforeOnChange={aClickHandler} style={{ background: 'rgba(255,102,0,0.1)' }}>
          Tab A
        </Tabs.Tab>
        <Tabs.Tab tabId="tab-2" beforeOnChange={bClickHandler}>
          Tab B
        </Tabs.Tab>
      </Tabs.TabWrapper>
      <Tabs.Panel tabId="tab-1" style={{ background: 'rgba(255,102,0,0.1)' }}>
        a panel
      </Tabs.Panel>
      <Tabs.Panel tabId="tab-2">b panel</Tabs.Panel>
    </Tabs>
  );
};
TabsWithBeforeChangeHandler.storyName = 'tabs with before change handler';
