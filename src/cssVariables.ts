import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from 'defaultTheme';

function toKebab(key: string): string {
  return key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function flattenToVars(obj: Record<string, unknown>, prefix: string): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const segment = `${prefix}-${toKebab(key)}`;
    if (typeof value === 'string' || typeof value === 'number') {
      return [`  --mw-${segment}: ${value};`];
    }
    if (typeof value === 'object' && value !== null) {
      return flattenToVars(value as Record<string, unknown>, segment);
    }
    return [];
  });
}

const { colors, spacing, icons, borderRadius, boxShadow, typography, breakpoints } = defaultTheme;

const lines: string[] = [
  // Color palettes and semantic groupings
  ...flattenToVars(colors.neutral as Record<string, unknown>, 'color-neutral'),
  ...flattenToVars(colors.slate as Record<string, unknown>, 'color-slate'),
  ...flattenToVars(colors.blue as Record<string, unknown>, 'color-blue'),
  ...flattenToVars(colors.indigo as Record<string, unknown>, 'color-indigo'),
  ...flattenToVars(colors.teal as Record<string, unknown>, 'color-teal'),
  ...flattenToVars(colors.status as Record<string, unknown>, 'color-status'),
  ...flattenToVars(colors.system as Record<string, unknown>, 'color-system'),
  ...flattenToVars(colors.aliases as Record<string, unknown>, 'color-alias'),
  ...flattenToVars(colors.appColors as Record<string, unknown>, 'color-app'),

  // Spacing — preferred tokens only
  ...flattenToVars(
    {
      '3xs': spacing['3xs'],
      '2xs': spacing['2xs'],
      xs: spacing.xs,
      sm: spacing.sm,
      md: spacing.md,
      lg: spacing.lg,
      xl: spacing.xl,
      '2xl': spacing['2xl'],
      '3xl': spacing['3xl'],
    },
    'spacing',
  ),

  // Icons — preferred tokens only
  ...flattenToVars({ sm: icons.sm, md: icons.md, lg: icons.lg, xl: icons.xl }, 'icon'),

  // Border radius — preferred tokens only
  ...flattenToVars(
    { sm: borderRadius.sm, md: borderRadius.md, lg: borderRadius.lg, round: borderRadius.round },
    'border-radius',
  ),

  // Box shadows — preferred tokens only
  ...flattenToVars(
    { sm: boxShadow.sm, md: boxShadow.md, lg: boxShadow.lg, xl: boxShadow.xl, '2xl': boxShadow['2xl'] },
    'shadow',
  ),

  // Typography
  ...flattenToVars(typography.fontFamily as Record<string, unknown>, 'font-family'),
  ...flattenToVars(typography.fontWeight as Record<string, unknown>, 'font-weight'),
  ...flattenToVars(typography.letterSpacing as Record<string, unknown>, 'letter-spacing'),
  ...flattenToVars(typography.scale as unknown as Record<string, unknown>, 'typography'),

  // Breakpoints
  ...flattenToVars(breakpoints as Record<string, unknown>, 'breakpoint'),
];

export const themeCssVariables: string = lines.join('\n');

export const ThemeCssVariables = createGlobalStyle`
  :root {
${themeCssVariables}
  }
`;

ThemeCssVariables.displayName = 'ThemeCssVariables';
