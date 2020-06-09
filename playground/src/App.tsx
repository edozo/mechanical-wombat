import React from 'react';
import { Tabs } from 'mechanical-wombat';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */

export const App = () => {
  return (
    <div >
      <Tabs initialTab="tab-2">
        <Tabs.Tab tab="tab-1">Tab A</Tabs.Tab>
        <Tabs.Tab tab="tab-2">Tab B</Tabs.Tab>
        <Tabs.Tab tab="tab-3">Tab c</Tabs.Tab>
        <Tabs.Panel whenActive="tab-1">a panel</Tabs.Panel>
        <Tabs.Panel whenActive="tab-2">b panel</Tabs.Panel>
        <Tabs.Panel whenActive="tab-3">c panel</Tabs.Panel>
      </Tabs>
  </div>
  );
};
