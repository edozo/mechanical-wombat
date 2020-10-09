import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DisplayBox, DisplayBoxWrapper } from '../DisplayBox';
import { DisplayBoxTitle, DisplayBoxSubTitle } from '../DisplayBox/DisplayBox.styles.ts';

export default {
  title: 'Theme/Space',
} as Meta;

const spaces = [
  { size: '4px', name: 'xxsmall' },
  { size: '8px', name: 'xsmall' },
  { size: '16px', name: 'small' },
  { size: '24px', name: 'base' },
  { size: '32px', name: 'large' },
  { size: '48px', name: 'xlarge' },
  { size: '64px', name: 'xxlarge' },
];

export const Space: Story = () => (
  <DisplayBoxWrapper>
    {spaces.map(space => (
      <DisplayBox size={space.size} borderRadius="xsmall">
        <DisplayBoxSubTitle>{space.name}</DisplayBoxSubTitle>
        <DisplayBoxTitle>{space.size}</DisplayBoxTitle>
      </DisplayBox>
    ))}
  </DisplayBoxWrapper>
);
