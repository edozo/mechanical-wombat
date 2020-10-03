import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

export const Basic: Story = () => (
  <Tooltip
    content={
      <div>
        <span>Tooltip</span>
      </div>
    }
  >
    <button type="button">the child</button>
  </Tooltip>
);

export const Interactive: Story = () => (
  <div style={{ minHeight: '50vh' }}>
    <Tooltip
      interactive
      interactiveBorder={10}
      content={
        <div>
          <span>Tooltip</span>
          <button type="button">content</button>
        </div>
      }
    >
      <button type="button">the child</button>
    </Tooltip>
  </div>
);
