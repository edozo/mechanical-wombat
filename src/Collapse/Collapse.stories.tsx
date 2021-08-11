import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Collapse, CollapseProps } from './Collapse';

export default {
  title: 'OccupierPlans/Collapse',
  component: Collapse,
  argTypes: {
    trigger: { text: 'color' },
    //   background: { control: 'color' },
  },
} as Meta;

const Template: Story<CollapseProps> = args => <Collapse {...args} />;

export const Default = Template.bind({});
Default.args = {
  trigger: 'Trigger',
  children: (
    <div style={{ border: '3px dotted red' }}>
      sadasdas
      <br />
      dasdasdasd
    </div>
  ),
};

export const Opened = Template.bind({});
Opened.args = {
  isOpen: true,
  trigger: 'Trigger',
  children: (
    <div style={{ border: '3px dotted red' }}>
      sadasdas
      <br />
      dasdasdasd
    </div>
  ),
};
