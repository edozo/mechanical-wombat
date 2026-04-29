import { expect, userEvent, within } from 'storybook/test';
import { Meta, StoryFn } from '@storybook/react';
import { TabsV2, TabsV2Appearance, TabsV2RootProps } from './TabsV2';

const APPEARANCES: TabsV2Appearance[] = ['underline', 'pill', 'boxed', 'subtle'];

export default {
  title: 'Components/TabsV2',
  component: TabsV2,
  argTypes: {
    defaultValue: {
      description: 'Initially active tab value.',
      control: { type: 'text' },
    },
    appearance: {
      description: 'Visual style of the tab list and triggers.',
      control: { type: 'select' },
      options: APPEARANCES,
    },
  },
  args: {
    defaultValue: 'tab1',
    appearance: 'underline',
  },
} as Meta;

const Template: StoryFn<TabsV2RootProps> = (args) => (
  <TabsV2 {...args}>
    <TabsV2.List>
      <TabsV2.Trigger value="tab1">Overview</TabsV2.Trigger>
      <TabsV2.Trigger value="tab2">Details</TabsV2.Trigger>
      <TabsV2.Trigger value="tab3">Settings</TabsV2.Trigger>
    </TabsV2.List>
    <TabsV2.Content value="tab1">Overview content</TabsV2.Content>
    <TabsV2.Content value="tab2">Details content</TabsV2.Content>
    <TabsV2.Content value="tab3">Settings content</TabsV2.Content>
  </TabsV2>
);

export const Playground = Template.bind({});

export const AppearanceComparison: StoryFn = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
    {APPEARANCES.map((appearance) => (
      <div key={appearance}>
        <p style={{ margin: '0 0 8px', fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#6B7280' }}>
          {appearance}
        </p>
        <TabsV2 defaultValue="tab1" appearance={appearance}>
          <TabsV2.List>
            <TabsV2.Trigger value="tab1">Overview</TabsV2.Trigger>
            <TabsV2.Trigger value="tab2">Details</TabsV2.Trigger>
            <TabsV2.Trigger value="tab3">Settings</TabsV2.Trigger>
          </TabsV2.List>
          <TabsV2.Content value="tab1">Overview content</TabsV2.Content>
          <TabsV2.Content value="tab2">Details content</TabsV2.Content>
          <TabsV2.Content value="tab3">Settings content</TabsV2.Content>
        </TabsV2>
      </div>
    ))}
  </div>
);

export const WithDisabledTab: StoryFn<TabsV2RootProps> = (args) => (
  <TabsV2 {...args}>
    <TabsV2.List>
      <TabsV2.Trigger value="tab1">Active</TabsV2.Trigger>
      <TabsV2.Trigger value="tab2" disabled>
        Disabled
      </TabsV2.Trigger>
      <TabsV2.Trigger value="tab3">Another</TabsV2.Trigger>
    </TabsV2.List>
    <TabsV2.Content value="tab1">Active tab content</TabsV2.Content>
    <TabsV2.Content value="tab3">Another tab content</TabsV2.Content>
  </TabsV2>
);

export const Stretched: StoryFn<TabsV2RootProps> = (args) => (
  <TabsV2 {...args}>
    <TabsV2.List stretch>
      <TabsV2.Trigger value="tab1">Tab 1</TabsV2.Trigger>
      <TabsV2.Trigger value="tab2">Tab 2</TabsV2.Trigger>
      <TabsV2.Trigger value="tab3">Tab 3</TabsV2.Trigger>
    </TabsV2.List>
    <TabsV2.Content value="tab1">Tab 1 content</TabsV2.Content>
    <TabsV2.Content value="tab2">Tab 2 content</TabsV2.Content>
    <TabsV2.Content value="tab3">Tab 3 content</TabsV2.Content>
  </TabsV2>
);

export const Interactions: StoryFn<TabsV2RootProps> = (args) => (
  <TabsV2 {...args}>
    <TabsV2.List>
      <TabsV2.Trigger value="tab1">Tab 1</TabsV2.Trigger>
      <TabsV2.Trigger value="tab2">Tab 2</TabsV2.Trigger>
    </TabsV2.List>
    <TabsV2.Content value="tab1">
      <span data-testid="content-1">Content 1</span>
    </TabsV2.Content>
    <TabsV2.Content value="tab2">
      <span data-testid="content-2">Content 2</span>
    </TabsV2.Content>
  </TabsV2>
);

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  expect(canvas.getByTestId('content-1')).toBeInTheDocument();

  await userEvent.click(canvas.getByRole('tab', { name: 'Tab 2' }));
  expect(canvas.getByTestId('content-2')).toBeInTheDocument();

  await userEvent.click(canvas.getByRole('tab', { name: 'Tab 1' }));
  expect(canvas.getByTestId('content-1')).toBeInTheDocument();
};
