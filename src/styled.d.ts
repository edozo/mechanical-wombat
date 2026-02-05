import 'styled-components';

declare module 'styled-components' {
  interface SizeHelper {
    xsmall: string;
    small: string;
    standard: string;
    large: string;
    xlarge: string;
  }

  const removalDefaultText = 'Will remain available until all apps are migrated (no planned removal date yet).';

  /* SPACING */
  const spacingRemovalText = removalDefaultText;
  const spacingRemovalReason =
    'Because xs / sm / md / lg express clear relative hierarchy and scale cleanly over time, while base is ambiguous, becomes a default, and encourages inconsistency.';
  interface Spacing {
    // ❌ legacy (avoid using these tokens)
    /**
     * @deprecated Use `xs` instead.
     * Reason: ${spacingRemovalReason}
     * Removal: ${spacingRemovalText}
     */
    xxsmall: string;

    /**
     * @deprecated Use `sm` instead.
     * Reason: ${spacingRemovalReason}
     * Removal: ${spacingRemovalText}
     */
    xsmall: string;

    /** @deprecated Use `md` instead.
     * Reason: ${spacingRemovalReason}
     * Removal: ${spacingRemovalText}
     */
    small: string;

    /** @deprecated Use `lg` instead.
     * Reason: ${spacingRemovalReason}
     * Removal: ${spacingRemovalText}
     */
    base: string;

    /** @deprecated Use `xl` instead.
     * Reason: ${spacingRemovalReason}
     * Removal: ${spacingRemovalText}
     */
    large: string;

    /** @deprecated Use `2xl` instead.
     * Reason: ${spacingRemovalReason}
     * Removal: ${spacingRemovalText}
     */
    xlarge: string;

    /** @deprecated Use `3xl` instead.
     * Reason: ${spacingRemovalReason}
     * Removal: ${spacingRemovalText}
     */
    xxlarge: string;

    // ✅ preferred (new usage)
    '3xs': string;
    '2xs': string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  }

  /* ICONS */
  const iconsRemovalText = removalDefaultText;
  const iconsRemovalReason =
    'Because sm / md / lg express clear relative intent and expected usage for icon sizing, while xxsmall / base / xxlarge encode arbitrary scale steps that are harder to reason about and encourage inconsistent application.';
  interface Icons {
    // ❌ legacy (avoid using these tokens)
    /**
     * @deprecated Use `xsmall` instead.
     * Reason: ${iconsRemovalReason}
     * Removal: ${iconsRemovalText}
     */
    xxsmall: string;
    /**
     * @deprecated Use `small` instead.
     * Reason: ${iconsRemovalReason}
     * Removal: ${iconsRemovalText}
     */
    xsmall: string;
    /**
     * @deprecated Use `base` instead.
     * Reason: ${iconsRemovalReason}
     * Removal: ${iconsRemovalText}
     */
    small: string;
    /**
     * @deprecated Use `large` instead.
     * Reason: ${iconsRemovalReason}
     * Removal: ${iconsRemovalText}
     */
    base: string;
    /**
     * @deprecated Use `large` instead.
     * Reason: ${iconsRemovalReason}
     * Removal: ${iconsRemovalText}
     */
    large: string;
    /**
     * @deprecated Use `xlarge` instead.
     * Reason: ${iconsRemovalReason}
     * Removal: ${iconsRemovalText}
     */
    xlarge: string;
    /**
     * @deprecated Use `xxlarge` instead.
     * Reason: ${iconsRemovalReason}
     * Removal: ${iconsRemovalText}
     */
    xxlarge: string;

    // ✅ preferred (new usage)
    sm: string;
    md: string;
    lg: string;
  }

  export interface DefaultTheme {
    name: string;
    spacing: Spacing;
    icons: Icons;
    borderRadius: SizeHelper;
    boxShadow: SizeHelper;
    colors: {
      aliases: {
        primaryLight: string;
        primary: string;
        primaryDark: string;
        secondaryLight: string;
        secondary: string;
        secondaryDark: string;
      };
      // Sky blue
      skyBlueLighter: string;
      skyBlueLight: string;
      skyBlue: string;
      skyBlueDark: string;
      skyBlueDarker: string;
      // Red
      redLighter: string;
      redLight: string;
      red: string;
      // Orange
      orangeLighter: string;
      orangeLight: string;
      orange: string;
      orangeDark: string;
      orangeDarker: string;
      // Purple
      purpleLighter: string;
      purpleLight: string;
      purple: string;
      purpleDark: string;
      purpleDarker: string;
      // Misc
      white: string;
      black: string;
      // Green
      greenLighter: string;
      greenLight: string;
      green: string;
      greenDark: string;
      greenDarker: string;
      // Gray
      grayLighter: string;
      grayLight: string;
      gray: string;
      grayDark: string;
      grayDarker: string;
      // Steel blue
      steelBlueLighter: string;
      steelBlueLight: string;
      steelBlue: string;
      steelBlueDark: string;
      steelBlueDarker: string;
      system: {
        // Blue
        blueLighter: string;
        blueLight: string;
        blue: string;
        blueDark: string;
        blueDarker: string;
        // Green
        greenLighter: string;
        greenLight: string;
        green: string;
        greenDark: string;
        greenDarker: string;
        // Yellow
        yellowLighter: string;
        yellowLight: string;
        yellow: string;
        yellowDark: string;
        yellowDarker: string;
        // Red
        redLighter: string;
        redLight: string;
        red: string;
        redDark: string;
        redDarker: string;
      };
      appColors: {
        maps: string;
        occupiers: string;
        insight: string;
        reports: string;
        extract: string;
      };
    };
    font: {
      family: {
        main: string;
        secondary: string;
      };
      size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        text: {
          xlarge: string;
          large: string;
          base: string;
          small: string;
          xsmall: string;
          xxsmall: string;
        };
        special: {
          title: string;
          subTitle: string;
        };
      };
      lineHeight: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        text: {
          xlarge: string;
          large: string;
          base: string;
          small: string;
          xsmall: string;
          xxsmall: string;
        };
        special: {
          title: string;
          subTitle: string;
        };
      };
      letterSpacing: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
      weight: {
        bold: number;
        semibold: number;
        regular: number;
      };
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    minMedia: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }
}
