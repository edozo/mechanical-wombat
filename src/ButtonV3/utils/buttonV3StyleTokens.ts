import { DefaultTheme } from 'styled-components';

export type ButtonV3Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
export type ButtonV3Appearance = 'solid' | 'outline' | 'ghost';
export type ButtonV3Context = 'default' | 'notification';
export type ButtonV3Status = 'info' | 'success' | 'warning' | 'danger';
export type ButtonV3Size = 'sm' | 'md' | 'lg';

export interface ButtonV3ResolvedTone {
  background: string;
  border: string;
  color: string;
  hoverBackground: string;
  hoverBorder: string;
  hoverColor: string;
  activeBackground: string;
  activeBorder: string;
  activeColor: string;
  disabledBackground: string;
  disabledBorder: string;
  disabledColor: string;
}

type ToneByAppearance = Record<ButtonV3Appearance, ButtonV3ResolvedTone>;
type ToneByVariant = Record<ButtonV3Variant, ToneByAppearance>;

const getIntentTone = (
  theme: DefaultTheme,
  variant: ButtonV3Variant,
  appearance: ButtonV3Appearance,
): ButtonV3ResolvedTone => {
  const { indigo } = theme.colors;
  const { teal } = theme.colors;
  const { neutral } = theme.colors;

  const tonesByVariant: ToneByVariant = {
    primary: {
      solid: {
        background: indigo[900],
        border: indigo[900],
        color: neutral[50],
        hoverBackground: indigo[50],
        hoverBorder: indigo[900],
        hoverColor: indigo[900],
        activeBackground: indigo[50],
        activeBorder: indigo[900],
        activeColor: indigo[900],
        disabledBackground: neutral[200],
        disabledBorder: neutral[200],
        disabledColor: neutral[500],
      },
      outline: {
        background: 'transparent',
        border: indigo[900],
        color: indigo[900],
        hoverBackground: indigo[100],
        hoverBorder: indigo[900],
        hoverColor: indigo[900],
        activeBackground: indigo[950],
        activeBorder: indigo[950],
        activeColor: neutral[50],
        disabledBackground: 'transparent',
        disabledBorder: neutral[300],
        disabledColor: neutral[500],
      },
      ghost: {
        background: 'transparent',
        border: 'transparent',
        color: indigo[900],
        hoverBackground: indigo[50],
        hoverBorder: 'transparent',
        hoverColor: indigo[900],
        activeBackground: indigo[100],
        activeBorder: 'transparent',
        activeColor: indigo[950],
        disabledBackground: 'transparent',
        disabledBorder: 'transparent',
        disabledColor: neutral[500],
      },
    },
    secondary: {
      solid: {
        background: indigo[600],
        border: indigo[600],
        color: indigo[50],
        hoverBackground: indigo[50],
        hoverBorder: indigo[600],
        hoverColor: indigo[600],
        activeBackground: indigo[200],
        activeBorder: indigo[600],
        activeColor: indigo[50],
        disabledBackground: neutral[200],
        disabledBorder: neutral[200],
        disabledColor: neutral[500],
      },
      outline: {
        background: 'transparent',
        border: indigo[500],
        color: indigo[700],
        hoverBackground: indigo[50],
        hoverBorder: indigo[600],
        hoverColor: indigo[800],
        activeBackground: indigo[100],
        activeBorder: indigo[700],
        activeColor: indigo[900],
        disabledBackground: 'transparent',
        disabledBorder: neutral[300],
        disabledColor: neutral[500],
      },
      ghost: {
        background: 'transparent',
        border: 'transparent',
        color: indigo[700],
        hoverBackground: indigo[50],
        hoverBorder: 'transparent',
        hoverColor: indigo[800],
        activeBackground: indigo[100],
        activeBorder: 'transparent',
        activeColor: indigo[900],
        disabledBackground: 'transparent',
        disabledBorder: 'transparent',
        disabledColor: neutral[500],
      },
    },
    tertiary: {
      solid: {
        background: neutral[700],
        border: neutral[700],
        color: neutral[50],
        hoverBackground: neutral[100],
        hoverBorder: neutral[700],
        hoverColor: neutral[700],
        activeBackground: neutral[50],
        activeBorder: neutral[700],
        activeColor: neutral[700],
        disabledBackground: neutral[200],
        disabledBorder: neutral[200],
        disabledColor: neutral[500],
      },
      outline: {
        background: 'transparent',
        border: neutral[700],
        color: neutral[700],
        hoverBackground: neutral[200],
        hoverBorder: neutral[700],
        hoverColor: neutral[700],
        activeBackground: neutral[800],
        activeBorder: neutral[800],
        activeColor: neutral[50],
        disabledBackground: 'transparent',
        disabledBorder: neutral[300],
        disabledColor: neutral[500],
      },
      ghost: {
        background: 'transparent',
        border: 'transparent',
        color: neutral[600],
        hoverBackground: neutral[200],
        hoverBorder: 'transparent',
        hoverColor: neutral[700],
        activeBackground: neutral[200],
        activeBorder: 'transparent',
        activeColor: neutral[800],
        disabledBackground: 'transparent',
        disabledBorder: 'transparent',
        disabledColor: neutral[500],
      },
    },
    quaternary: {
      solid: {
        background: teal[400],
        border: teal[400],
        color: neutral[50],
        hoverBackground: teal[50],
        hoverBorder: teal[500],
        hoverColor: teal[600],
        activeBackground: teal[200],
        activeBorder: teal[600],
        activeColor: teal[950],
        disabledBackground: neutral[200],
        disabledBorder: neutral[200],
        disabledColor: neutral[500],
      },
      outline: {
        background: 'transparent',
        border: teal[500],
        color: teal[700],
        hoverBackground: teal[50],
        hoverBorder: teal[600],
        hoverColor: teal[700],
        activeBackground: teal[100],
        activeBorder: teal[700],
        activeColor: teal[900],
        disabledBackground: 'transparent',
        disabledBorder: neutral[300],
        disabledColor: neutral[500],
      },
      ghost: {
        background: 'transparent',
        border: 'transparent',
        color: teal[700],
        hoverBackground: teal[50],
        hoverBorder: 'transparent',
        hoverColor: teal[800],
        activeBackground: teal[100],
        activeBorder: 'transparent',
        activeColor: teal[900],
        disabledBackground: 'transparent',
        disabledBorder: 'transparent',
        disabledColor: neutral[500],
      },
    },
  };

  return tonesByVariant[variant][appearance];
};

const getStatusTone = (
  theme: DefaultTheme,
  status: ButtonV3Status,
  appearance: ButtonV3Appearance,
): ButtonV3ResolvedTone => {
  const palette = theme.colors.status[status];
  const statusTones: ToneByAppearance = {
    solid: {
      background: palette[500],
      border: palette[500],
      color: theme.colors.neutral[50],
      hoverBackground: palette[600],
      hoverBorder: palette[600],
      hoverColor: theme.colors.neutral[50],
      activeBackground: palette[900],
      activeBorder: palette[900],
      activeColor: theme.colors.neutral[50],
      disabledBackground: theme.colors.neutral[200],
      disabledBorder: theme.colors.neutral[200],
      disabledColor: theme.colors.neutral[500],
    },
    outline: {
      background: 'transparent',
      border: palette[500],
      color: palette[500],
      hoverBackground: palette[50],
      hoverBorder: palette[600],
      hoverColor: palette[600],
      activeBackground: palette[100],
      activeBorder: palette[900],
      activeColor: palette[900],
      disabledBackground: 'transparent',
      disabledBorder: theme.colors.neutral[300],
      disabledColor: theme.colors.neutral[500],
    },
    ghost: {
      background: 'transparent',
      border: 'transparent',
      color: palette[700],
      hoverBackground: palette[50],
      hoverBorder: 'transparent',
      hoverColor: palette[800],
      activeBackground: palette[100],
      activeBorder: 'transparent',
      activeColor: palette[900],
      disabledBackground: 'transparent',
      disabledBorder: 'transparent',
      disabledColor: theme.colors.neutral[500],
    },
  };

  return statusTones[appearance];
};

export const getButtonV3Tone = (
  theme: DefaultTheme,
  variant: ButtonV3Variant,
  appearance: ButtonV3Appearance,
  status?: ButtonV3Status,
): ButtonV3ResolvedTone => {
  if (status) {
    return getStatusTone(theme, status, appearance);
  }

  return getIntentTone(theme, variant, appearance);
};

interface ButtonV3SizeTokens {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  gap: string;
  paddingX: string;
  paddingY: string;
  borderRadius: string;
  iconOnlySize: string;
}

export const getButtonV3SizeTokens = (theme: DefaultTheme, size: ButtonV3Size): ButtonV3SizeTokens => {
  const sizeTokensBySize: Record<ButtonV3Size, ButtonV3SizeTokens> = {
    sm: {
      fontSize: theme.typography.scale.xs.size,
      lineHeight: theme.typography.scale.xs.lineHeight,
      fontWeight: theme.typography.fontWeight.medium,
      gap: theme.spacing.xs,
      paddingX: theme.spacing.sm,
      paddingY: theme.spacing['2xs'],
      borderRadius: theme.borderRadius.sm,
      iconOnlySize: '28px',
    },
    md: {
      fontSize: theme.typography.scale.xs.size,
      lineHeight: theme.typography.scale.xs.lineHeight,
      fontWeight: theme.typography.fontWeight.medium,
      gap: theme.spacing.sm,
      paddingX: theme.spacing.md,
      paddingY: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
      iconOnlySize: '36px',
    },
    lg: {
      fontSize: theme.typography.scale.sm.size,
      lineHeight: theme.typography.scale.sm.lineHeight,
      fontWeight: theme.typography.fontWeight.medium,
      gap: theme.spacing.lg,
      paddingX: theme.spacing.lg,
      paddingY: theme.spacing.sm,
      borderRadius: theme.borderRadius.md,
      iconOnlySize: '44px',
    },
  };

  return sizeTokensBySize[size];
};
