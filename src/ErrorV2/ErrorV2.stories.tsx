import { Meta, StoryFn } from '@storybook/react';
import { ButtonV3 } from 'ButtonV3/ButtonV3';
import { ErrorV2, ErrorV2Props } from './ErrorV2';

export default {
  title: 'Components/ErrorV2',
  component: ErrorV2,
  argTypes: {
    code: {
      description: 'Large code or number displayed as the primary visual (e.g. "404", "500").',
      control: { type: 'text' },
    },
    title: {
      description: 'Short error title shown below the code.',
      control: { type: 'text' },
    },
    description: {
      description: 'Supplementary description providing context or guidance.',
      control: { type: 'text' },
    },
  },
  args: {
    code: '404',
    title: 'Page not found',
    description: "The page you're looking for doesn't exist or has moved.",
  },
} as Meta;

const Template: StoryFn<ErrorV2Props> = (args) => (
  <ErrorV2 {...args} action={<ButtonV3 variant="secondary">Take me home</ButtonV3>} />
);

export const Playground = Template.bind({});

export const NotFound: StoryFn = () => (
  <ErrorV2
    code="404"
    title="Page not found"
    description="The page you're looking for doesn't exist or has moved."
    action={<ButtonV3 variant="secondary">Take me home</ButtonV3>}
  />
);

export const ServerError: StoryFn = () => (
  <ErrorV2
    code="500"
    title="Something went wrong"
    description="We're having trouble on our end. Please try again in a moment."
    action={<ButtonV3 variant="secondary">Refresh the page</ButtonV3>}
  />
);

export const NoCode: StoryFn = () => (
  <ErrorV2
    title="Access denied"
    description="You don't have permission to view this page."
    action={<ButtonV3 variant="secondary">Go back</ButtonV3>}
  />
);

export const NoAction: StoryFn = () => (
  <ErrorV2 code="503" title="Under maintenance" description="We'll be back shortly. Thank you for your patience." />
);
