import { expect, within } from 'storybook/test';
import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NotificationBarV2, NotificationBarV2Accordion, NotificationBarV2Props } from './NotificationBarV2';

export default {
  title: 'Components/NotificationBarV2',
  component: NotificationBarV2,
  argTypes: {
    variant: {
      description: 'Colour and intent.',
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'danger'],
    },
  },
  args: {
    variant: 'info',
  },
} as Meta;

const Template: StoryFn<NotificationBarV2Props> = (args) => (
  <NotificationBarV2 {...args}>Your changes have been saved.</NotificationBarV2>
);

export const Playground = Template.bind({});

export const Variants: StoryFn<NotificationBarV2Props> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 480 }}>
    <NotificationBarV2 {...args} variant="info">
      Information message
    </NotificationBarV2>
    <NotificationBarV2 {...args} variant="success">
      Success message
    </NotificationBarV2>
    <NotificationBarV2 {...args} variant="warning">
      Warning message
    </NotificationBarV2>
    <NotificationBarV2 {...args} variant="danger">
      Danger message
    </NotificationBarV2>
  </div>
);

export const Dismissible: StoryFn<NotificationBarV2Props> = () => {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <NotificationBarV2 variant="info" onDismiss={() => setVisible(false)}>
      This notification can be dismissed.
    </NotificationBarV2>
  ) : (
    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Dismissed</span>
  );
};

export const Accordion: StoryFn = () => (
  <div style={{ width: 480 }}>
    <NotificationBarV2Accordion
      variant="warning"
      details="Additional details about the warning appear here when the section is expanded."
    >
      Something needs your attention.
    </NotificationBarV2Accordion>
  </div>
);

export const AccordionWithDismiss: StoryFn = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Dismissed</span>;
  return (
    <div style={{ width: 480 }}>
      <NotificationBarV2Accordion
        variant="danger"
        details="Full error details are shown here."
        onDismiss={() => setVisible(false)}
      >
        An error occurred.
      </NotificationBarV2Accordion>
    </div>
  );
};

export const SquareBanner: StoryFn = () => (
  <NotificationBarV2 variant="warning" square>
    This bar is flush against the edges — no border radius.
  </NotificationBarV2>
);

export const SquareBannerAccordion: StoryFn = () => (
  <NotificationBarV2Accordion variant="info" square details="Full details visible when expanded.">
    Maintenance window tonight from 22:00–23:00 UTC.
  </NotificationBarV2Accordion>
);

export const Interactions: StoryFn<NotificationBarV2Props> = (args) => (
  <NotificationBarV2 {...args} variant="info">
    Info message
  </NotificationBarV2>
);

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  expect(canvas.getByRole('status')).toBeInTheDocument();
};
