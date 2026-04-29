import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import { Meta, StoryFn } from '@storybook/react';
import { BadgeV2, BadgeV2Props } from './BadgeV2';

const VARIANTS = ['neutral', 'info', 'success', 'warning', 'danger', 'primary'] as const;

export default {
  title: 'Components/BadgeV2',
  component: BadgeV2,
  argTypes: {
    variant: {
      description: 'Semantic colour variant.',
      control: { type: 'select' },
      options: VARIANTS,
    },
    size: {
      description: 'Size scale for text and padding.',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    appearance: {
      description: 'subtle = light tinted background; solid = dark filled background.',
      control: { type: 'select' },
      options: ['subtle', 'solid'],
    },
    children: {
      description: 'Badge label.',
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'neutral',
    size: 'md',
    appearance: 'subtle',
    children: 'Badge',
  },
} as Meta;

const Template: StoryFn<BadgeV2Props> = (args) => <BadgeV2 {...args} />;

export const Playground = Template.bind({});

export const SubtleVariants: StoryFn<BadgeV2Props> = (args) => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
    {VARIANTS.map((variant) => (
      <BadgeV2 key={variant} {...args} appearance="subtle" variant={variant}>
        {variant}
      </BadgeV2>
    ))}
  </div>
);

export const SolidVariants: StoryFn<BadgeV2Props> = (args) => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
    {VARIANTS.map((variant) => (
      <BadgeV2 key={variant} {...args} appearance="solid" variant={variant}>
        {variant}
      </BadgeV2>
    ))}
  </div>
);

export const AppearancesMatrix: StoryFn<BadgeV2Props> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {VARIANTS.map((variant) => (
        <BadgeV2 key={variant} appearance="subtle" variant={variant}>
          {variant}
        </BadgeV2>
      ))}
    </div>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {VARIANTS.map((variant) => (
        <BadgeV2 key={variant} appearance="solid" variant={variant}>
          {variant}
        </BadgeV2>
      ))}
    </div>
  </div>
);

export const WithIcons: StoryFn<BadgeV2Props> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <BadgeV2 {...args} variant="info">
        <Info />
        Info
      </BadgeV2>
      <BadgeV2 {...args} variant="success">
        <CheckCircle />
        Success
      </BadgeV2>
      <BadgeV2 {...args} variant="warning">
        <AlertCircle />
        Warning
      </BadgeV2>
      <BadgeV2 {...args} variant="danger">
        <XCircle />
        Danger
      </BadgeV2>
    </div>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <BadgeV2 {...args} variant="info" appearance="solid">
        <Info />
        Info
      </BadgeV2>
      <BadgeV2 {...args} variant="success" appearance="solid">
        <CheckCircle />
        Success
      </BadgeV2>
      <BadgeV2 {...args} variant="warning" appearance="solid">
        <AlertCircle />
        Warning
      </BadgeV2>
      <BadgeV2 {...args} variant="danger" appearance="solid">
        <XCircle />
        Danger
      </BadgeV2>
    </div>
  </div>
);

export const Sizes: StoryFn<BadgeV2Props> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    {(['subtle', 'solid'] as const).map((appearance) => (
      <div key={appearance} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <BadgeV2 key={size} {...args} appearance={appearance} variant="primary" size={size}>
            {size}
          </BadgeV2>
        ))}
      </div>
    ))}
  </div>
);
