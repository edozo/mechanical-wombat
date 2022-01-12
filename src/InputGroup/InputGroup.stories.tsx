import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputGroup } from './InputGroup';
import { GlobalSearch } from './GlobalSearch';

export default {
  title: 'OccupierPlans/InputGroup',
  component: InputGroup,
  argTypes: { onChange: { action: 'changed' } },
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

const TemplateWithItem: Story = args => (
  <InputGroup {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <div style={{ paddingTop: '10px' }}>icon</div>
    </InputGroup.Item>
  </InputGroup>
);

const GlobalSearchTemplate: Story = () => {
  const [value, setValue] = React.useState<string>('');
  return <GlobalSearch disabled={false} value={value} onChange={event => setValue(event.target.value)} />;
};

export const WithItem = TemplateWithItem.bind({});
export const WithoutItem = Template.bind({});
export const RoundedItem = TemplateWithItem.bind({});
RoundedItem.args = {
  radius: 'round',
};
export const GlobalSearchExample = GlobalSearchTemplate.bind({});
