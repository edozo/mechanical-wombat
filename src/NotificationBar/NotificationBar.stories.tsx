import { StoryFn, Meta } from '@storybook/react';
import { NotificationBar, NotificationBarAccordion } from './NotificationBar';
import type { NotificationBarProps } from './NotificationBar';
import { StyledWarningIcon } from './NotificationBar.styles';

export default {
  title: 'Components/NotificationBar',
  component: NotificationBar,
} as Meta;

const Template: StoryFn<NotificationBarProps> = args => (
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

export const Default = Template.bind({});

export const Accordion = () => (
  <NotificationBarAccordion
    variant="info"
    details={
      <span>
        This is the details content that is <strong>hidden by default</strong>. It will expand when you click the 'Show
        more' button. You can include any additional information here that users might need but don't need to see
        immediately.
      </span>
    }
  >
    <span>
      This is the <strong>summary</strong> content that is always visible.
    </span>
  </NotificationBarAccordion>
);
