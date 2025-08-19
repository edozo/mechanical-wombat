/* eslint-disable no-console */
import { StoryFn, Meta } from '@storybook/react';
import { useState } from 'react';
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
      default: 'light gray',
    },
  },
} as Meta;

const Template: StoryFn = args => (
  <InputGroup type={args.type} onChange={() => null} {...args}>
    <InputGroup.Input />
  </InputGroup>
);

const TemplateWithIconEnd: StoryFn = args => (
  <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
  </InputGroup>
);

const TemplateWithIconStart: StoryFn = args => (
  <InputGroup onChange={() => null} {...args}>
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
    <InputGroup.Input />
  </InputGroup>
);

const TemplateWithIconButton: StoryFn = args => (
  <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <InputGroup.Button onClick={() => console.log('123')}>&times;</InputGroup.Button>
    </InputGroup.Item>
  </InputGroup>
);

const TemplateKitchenSink: StoryFn = args => (
  <InputGroup placeholder="Placeholder from the input props" onChange={() => null} {...args}>
    <InputGroup.Item>
      <SearchIcon />
    </InputGroup.Item>
    <InputGroup.Input />
    <InputGroup.Item>
      <InputGroup.Button onClick={() => console.log('123')}>Submit</InputGroup.Button>
    </InputGroup.Item>
  </InputGroup>
);

const TemplateWithItemEnd: StoryFn = args => (
  <InputGroup onChange={() => null} {...args}>
    <InputGroup.Input />
    <InputGroup.Item>
      <TextSmall>item</TextSmall>
    </InputGroup.Item>
  </InputGroup>
);

const TemplateWithItemStart: StoryFn = args => (
  <InputGroup onChange={() => null} {...args}>
    <InputGroup.Item backgroundColor="red">
      <strong style={{ border: '1px solid green', margin: '0 36px' }}>
        <em>item</em>
      </strong>
    </InputGroup.Item>
    <InputGroup.Input />
  </InputGroup>
);

const GlobalSearchTemplate: StoryFn = () => {
  const [value, setValue] = useState<string>('');
  return (
    <GlobalSearch
      name="global-search"
      placeholder="Search by Plan name or Address"
      disabled={false}
      value={value}
      onChange={event => setValue(event.target.value)}
      reset={() => setValue('')}
    />
  );
};

const TextareaTemplate: StoryFn = args => (
  <InputGroup onChange={() => null} {...args}>
    <InputGroup.Textarea />
  </InputGroup>
);

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  min: -1,
  max: 3,
  step: 0.01,
};
export const WithIconEnd = TemplateWithIconEnd.bind({});
export const WithIconStart = TemplateWithIconStart.bind({});
export const WithIconButton = TemplateWithIconButton.bind({});
export const KitchenSink = TemplateKitchenSink.bind({});
export const WithItemEnd = TemplateWithItemEnd.bind({});
export const WithItemStart = TemplateWithItemStart.bind({});
export const WithoutItem = Template.bind({});
WithoutItem.args = {
  radius: 'standard',
  inputSize: 'standard',
  border: true,
};
export const Textarea = TextareaTemplate.bind({});
Textarea.args = {
  radius: 'standard',
  inputSize: 'standard',
  border: true,
};

export const RoundedItem = TemplateWithItemEnd.bind({});
RoundedItem.args = {
  radius: 'round',
};
export const GlobalSearchExample = GlobalSearchTemplate.bind({});
