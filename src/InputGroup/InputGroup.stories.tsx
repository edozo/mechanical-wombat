import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextSmall } from '../Typography';
import { SearchIcon } from '../Icons';
import { InputGroup } from './InputGroup';
import { GlobalSearch } from './GlobalSearch';

export default {
  title: 'OccupierPlans/InputGroup',
  component: InputGroup,
  argTypes: {
    onChange: { action: 'changed' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    backgrounds: {
      default: 'orange',
    },
  },
} as Meta;

const Template: Story = args => (
  <InputGroup {...args}>
    <InputGroup.Input />
  </InputGroup>
);

const TemplateWithIconEnd: Story = args => (
  <InputGroup {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
  </InputGroup>
);

const TemplateWithIconStart: Story = args => (
  <InputGroup {...args}>
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
    <InputGroup.Input />
  </InputGroup>
);

const TemplateWithIconButton: Story = args => (
  <InputGroup {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <InputGroup.Button onClick={() => console.log('123')}>&times;</InputGroup.Button>
    </InputGroup.Item>
  </InputGroup>
);

const TemplateKitchenSink: Story = args => (
  <InputGroup {...args}>
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
    <InputGroup.Input placeholder="Placeholder from the input props" />
    <InputGroup.Item>
      <InputGroup.Button onClick={() => console.log('123')}>Submit</InputGroup.Button>
    </InputGroup.Item>
  </InputGroup>
);

const TemplateWithItemEnd: Story = args => (
  <InputGroup {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <TextSmall>item</TextSmall>
    </InputGroup.Item>
  </InputGroup>
);

const TemplateWithItemStart: Story = args => (
  <InputGroup {...args}>
    <InputGroup.Item backgroundColor="red">
      <strong style={{ border: '1px solid green', margin: '0 36px' }}>
        <em>item</em>
      </strong>
    </InputGroup.Item>
    <InputGroup.Input />
  </InputGroup>
);

const GlobalSearchTemplate: Story = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <GlobalSearch
      placeholder="Search by Plan name or Address"
      disabled={false}
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
};

export const WithIconEnd = TemplateWithIconEnd.bind({});
export const WithIconStart = TemplateWithIconStart.bind({});
export const WithIconButton = TemplateWithIconButton.bind({});
export const KitchenSink = TemplateKitchenSink.bind({});
export const WithItemEnd = TemplateWithItemEnd.bind({});
export const WithItemStart = TemplateWithItemStart.bind({});
export const WithoutItem = Template.bind({});
export const RoundedItem = TemplateWithItemEnd.bind({});
RoundedItem.args = {
  radius: 'round',
};
export const GlobalSearchExample = GlobalSearchTemplate.bind({});
