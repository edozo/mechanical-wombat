import { Meta, StoryFn } from '@storybook/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LucideIcon } from 'LucideIcons';
import { ButtonV3, ButtonV3Props } from './ButtonV3';
import { defaultTheme } from '../defaultTheme';

export default {
  title: 'Components/ButtonV3',
  component: ButtonV3,
  argTypes: {
    variant: {
      description: 'Visual intent for emphasis and colour family.',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
    },
    appearance: {
      description: 'Visual appearance for the selected intent.',
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      description: 'Size scale for spacing, typography, and icon dimensions.',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    leadingIcon: {
      description: 'Icon rendered before the button label.',
      control: false,
    },
    trailingIcon: {
      description: 'Icon rendered after the button label.',
      control: false,
    },
    iconOnly: {
      description: 'Renders as icon-only content; requires an aria-label.',
      control: { type: 'boolean' },
    },
    isLoading: {
      description: 'Shows spinner and disables interactions.',
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'Disables interactions and applies disabled styles.',
      control: { type: 'boolean' },
    },
    context: {
      description: 'Usage context; status tones apply in notification context.',
      control: { type: 'select' },
      options: ['default', 'notification'],
    },
    status: {
      description: 'Optional status tone.',
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'danger'],
    },
    fullWidth: {
      description: 'Expands button width to fill parent container.',
      control: { type: 'boolean' },
    },
    asChild: {
      description: 'Render styles onto the passed child element via Radix Slot.',
      control: { type: 'boolean' },
    },
    type: {
      description: 'Native HTML button type.',
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    children: 'ButtonV3',
    variant: 'secondary',
    appearance: 'solid',
    size: 'md',
    disabled: false,
    isLoading: false,
    fullWidth: false,
    context: 'default',
  },
} as Meta;

const Template: StoryFn<ButtonV3Props> = (args) => <ButtonV3 {...args} />;

export const Playground = Template.bind({});

export const Variants: StoryFn<ButtonV3Props> = (args) => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <ButtonV3 {...args} asChild={false} variant="primary">
      Primary
    </ButtonV3>
    <ButtonV3 {...args} asChild={false} variant="secondary">
      Secondary
    </ButtonV3>
    <ButtonV3 {...args} asChild={false} variant="tertiary">
      Tertiary
    </ButtonV3>
    <ButtonV3 {...args} asChild={false} variant="quaternary">
      Quaternary
    </ButtonV3>
  </div>
);

export const Styles: StoryFn<ButtonV3Props> = (args) => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <ButtonV3 {...args} asChild={false} appearance="solid">
      Solid
    </ButtonV3>
    <ButtonV3 {...args} asChild={false} appearance="outline">
      Outline
    </ButtonV3>
    <ButtonV3 {...args} asChild={false} appearance="ghost">
      Ghost
    </ButtonV3>
  </div>
);

export const VariantStyleMatrix: StoryFn<ButtonV3Props> = (args) => {
  const variants: Array<ButtonV3Props['variant']> = ['primary', 'secondary', 'tertiary', 'quaternary'];
  const appearances: Array<ButtonV3Props['appearance']> = ['solid', 'outline', 'ghost'];

  return (
    <div
      style={{
        display: 'grid',
        gap: '8px',
        gridTemplateColumns: '120px repeat(3, minmax(0, 1fr))',
        justifyItems: 'stretch',
        alignItems: 'center',
      }}
    >
      <div />
      {appearances.map((appearance) => (
        <div
          key={`variant-header-${appearance}`}
          style={{
            fontWeight: defaultTheme.typography.fontWeight.semibold,
            fontFamily: defaultTheme.typography.fontFamily.sans,
            color: defaultTheme.colors.neutral[600],
            textTransform: 'capitalize',
          }}
        >
          {appearance}
        </div>
      ))}

      {variants.flatMap((variant) => [
        <div
          key={`variant-row-${variant}`}
          style={{
            fontWeight: defaultTheme.typography.fontWeight.semibold,
            fontFamily: defaultTheme.typography.fontFamily.sans,
            color: defaultTheme.colors.neutral[600],
            textTransform: 'capitalize',
          }}
        >
          {variant}
        </div>,
        ...appearances.map((appearance) => (
          <div
            key={`${variant}-${appearance}`}
            style={{
              border: `1px dashed ${defaultTheme.colors.neutral[400]}`,
              borderRadius: defaultTheme.borderRadius.sm,
              padding: defaultTheme.spacing.sm,
            }}
          >
            <ButtonV3 {...args} asChild={false} variant={variant} appearance={appearance}>
              {variant} {appearance}
            </ButtonV3>
          </div>
        )),
      ])}
    </div>
  );
};

export const NotificationContextMatrix: StoryFn<ButtonV3Props> = (args) => {
  const statuses: Array<NonNullable<ButtonV3Props['status']>> = ['info', 'success', 'warning', 'danger'];
  const appearances: Array<ButtonV3Props['appearance']> = ['solid', 'outline', 'ghost'];

  return (
    <div
      style={{
        display: 'grid',
        gap: '8px',
        gridTemplateColumns: '120px repeat(3, minmax(0, 1fr))',
        justifyItems: 'stretch',
        alignItems: 'center',
      }}
    >
      <div />
      {appearances.map((appearance) => (
        <div
          key={`header-${appearance}`}
          style={{
            fontWeight: defaultTheme.typography.fontWeight.semibold,
            fontFamily: defaultTheme.typography.fontFamily.sans,
            color: defaultTheme.colors.neutral[600],
            textTransform: 'capitalize',
          }}
        >
          {appearance}
        </div>
      ))}

      {statuses.flatMap((status) => [
        <div
          key={`row-${status}`}
          style={{
            fontWeight: defaultTheme.typography.fontWeight.semibold,
            fontFamily: defaultTheme.typography.fontFamily.sans,
            color: defaultTheme.colors.neutral[600],
            textTransform: 'capitalize',
          }}
        >
          {status}
        </div>,
        ...appearances.map((appearance) => (
          <div
            key={`${status}-${appearance}`}
            style={{
              border: `1px dashed ${defaultTheme.colors.neutral[400]}`,
              borderRadius: defaultTheme.borderRadius.small,
              padding: defaultTheme.spacing.sm,
            }}
          >
            <ButtonV3 {...args} asChild={false} context="notification" status={status} appearance={appearance}>
              {status} {appearance}
            </ButtonV3>
          </div>
        )),
      ])}
    </div>
  );
};

export const IconOnly: StoryFn<ButtonV3Props> = (args) => (
  <ButtonV3
    {...args}
    asChild={false}
    iconOnly
    aria-label="Search"
    leadingIcon={<span>⌕</span>}
    trailingIcon={undefined}
  />
);

export const ButtonWithTrailingArrowRight = Template.bind({});
ButtonWithTrailingArrowRight.args = {
  variant: 'primary',
  size: 'md',
  children: 'Next',
  trailingIcon: <LucideIcon icon={ArrowRight} color="currentColor" />,
};

export const ButtonWithLeadingArrowLeft = Template.bind({});
ButtonWithLeadingArrowLeft.args = {
  variant: 'primary',
  size: 'md',
  children: 'Back',
  leadingIcon: <LucideIcon icon={ArrowLeft} color="currentColor" />,
};

export const AsChildAnchorUsage = Template.bind({});
AsChildAnchorUsage.args = {
  asChild: true,
  variant: 'secondary',
  appearance: 'outline',
  size: 'md',
  children: (
    <a href="https://www.edozo.com" target="_blank" rel="noopener noreferrer">
      Open Edozo (asChild)
    </a>
  ),
};
