import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Popover, PopoverProps } from './Popover';
import { PopoverContent } from '../PopoverContent';

export default {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: { PopoverContent },
} as Meta;

// TODO: needs to be improve
export const Default: Story<PopoverProps> = () => (
  <Popover isOpen setIsOpen={() => 'test'}>
    <PopoverContent radius="small">
      <div style={{ padding: '8px' }}>This is my popoverContent</div>
    </PopoverContent>
  </Popover>
);
