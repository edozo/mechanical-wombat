import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NotificationBar, NotificationBarProps } from './NotificationBar';
import { StyledWarningIcon } from './NotificationBar.styles';

export default {
  title: 'Components/NotificationBar',
  component: NotificationBar,
} as Meta;

const Template: Story<NotificationBarProps> = args => (
  <NotificationBar {...args}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledWarningIcon />
      <span>
        You are currently using an outdated browser, this may cause issues using our site. Upgrade to a modern browser
        for a better experience
      </span>
    </div>
  </NotificationBar>
);

export const Controlled = Template.bind({});
