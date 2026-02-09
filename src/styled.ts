import 'styled-components';

declare module 'styled-components' {
  interface SizeHelper {
    xsmall: string;
    small: string;
    standard: string;
    large: string;
    xlarge: string;
  }

  /* SPACING */
  interface Spacing {
    // ❌ legacy (avoid using these tokens)
    /**
     * @deprecated Use `xs` instead.
     *
     * @remarks
     * Reason: Because xs / sm / md / lg express clear relative hierarchy and scale cleanly over time, while base is ambiguous, becomes a default, and encourages inconsistency.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    xxsmall: string;

    /** @deprecated Use `sm` instead.
     *
     * @remarks
     * Reason: Because xs / sm / md / lg express clear relative hierarchy and scale cleanly over time, while base is ambiguous, becomes a default, and encourages inconsistency.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    xsmall: string;

    /** @deprecated Use `md` instead.
     *
     * @remarks
     * Reason: Because xs / sm / md / lg express clear relative hierarchy and scale cleanly over time, while base is ambiguous, becomes a default, and encourages inconsistency.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    small: string;

    /** @deprecated Use `lg` instead.
     *
     * @remarks
     * Reason: Because xs / sm / md / lg express clear relative hierarchy and scale cleanly over time, while base is ambiguous, becomes a default, and encourages inconsistency.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    base: string;

    /** @deprecated Use `xl` instead.
     *
     * @remarks
     * Reason: Because xs / sm / md / lg express clear relative hierarchy and scale cleanly over time, while base is ambiguous, becomes a default, and encourages inconsistency.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    large: string;

    /** @deprecated Use `2xl` instead.
     *
     * @remarks
     * Reason: Because xs / sm / md / lg express clear relative hierarchy and scale cleanly over time, while base is ambiguous, becomes a default, and encourages inconsistency.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    xlarge: string;

    /** @deprecated Use `3xl` instead.
     *
     * @remarks
     * Reason: Because xs / sm / md / lg express clear relative hierarchy and scale cleanly over time, while base is ambiguous, becomes a default, and encourages inconsistency.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
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
  interface Icons {
    // ❌ legacy (avoid using these tokens)
    /**
     * @deprecated
     *
     * @remarks
     * Reason: In favour of simplifying the icon sizing.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    xxsmall: string;
    /**
     * @deprecated
     *
     * @remarks
     * Reason: In favour of simplifying the icon sizing.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    xsmall: string;
    /**
     * @deprecated
     *
     * @remarks
     * Reason: In favour of simplifying the icon sizing.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    small: string;
    /**
     * @deprecated
     *
     * @remarks
     * Reason: In favour of simplifying the icon sizing.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    base: string;
    /**
     * @deprecated
     *
     * @remarks
     * Reason: In favour of simplifying the icon sizing.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    large: string;
    /**
     * @deprecated
     *
     * @remarks
     * Reason: In favour of simplifying the icon sizing.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    xlarge: string;
    /**
     * @deprecated
     *
     * @remarks
     * Reason: In favour of simplifying the icon sizing.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
    xxlarge: string;

    // ✅ preferred (new usage)
    sm: string;
    md: string;
    lg: string;
  }

  /* TYPOGRAPHY */

  interface TypographyScale {
    size: string;
    lineHeight: string;
  }
  interface Typography {
    fontFamily: {
      sans: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      semibold: number;
    };
    letterSpacing: {
      normal: string;
      tight: string;
    };
    scale: {
      '2xs': TypographyScale;
      xs: TypographyScale;
      sm: TypographyScale;
      md: TypographyScale;
      lg: TypographyScale;
      xl: TypographyScale;
      '2xl': TypographyScale;
      '3xl': TypographyScale;
      '4xl': TypographyScale;
    };
    role: {
      body: {
        scale: string;
        weight: string;
        letterSpacing: string;
      };
      caption: {
        scale: string;
        weight: string;
        letterSpacing: string;
      };
      label: {
        scale: string;
        weight: string;
        letterSpacing: string;
      };
      headingSm: {
        scale: string;
        weight: string;
        letterSpacing: string;
      };
      headingMd: {
        scale: string;
        weight: string;
        letterSpacing: string;
      };
      headingLg: {
        scale: string;
        weight: string;
        letterSpacing: string;
      };
      display: {
        scale: string;
        weight: string;
        letterSpacing: string;
      };
    };
  }

  export interface DefaultTheme {
    name: string;
    spacing: Spacing;
    icons: Icons;
    borderRadius: SizeHelper;
    boxShadow: SizeHelper;
    colors: {
      neutral: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      slate: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      blue: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      indigo: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      teal: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      status: {
        info: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
          950: string;
        };
        success: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
          950: string;
        };
        warning: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
          950: string;
        };
        danger: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
          950: string;
        };
      };
      /** @deprecated We may introduce new aliases later is required. */
      aliases: {
        primaryLight: string;
        primary: string;
        primaryDark: string;
        secondaryLight: string;
        secondary: string;
        secondaryDark: string;
      };
      // Sky blue
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      skyBlueLighter: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      skyBlueLight: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      skyBlue: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      skyBlueDark: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      skyBlueDarker: string;
      // Red
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      redLighter: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      redLight: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      red: string;
      // Orange
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      orangeLighter: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      orangeLight: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      orange: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      orangeDark: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      orangeDarker: string;
      // Purple
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      purpleLighter: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      purpleLight: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      purple: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      purpleDark: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      purpleDarker: string;
      // Misc
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      white: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      black: string;
      // Green
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      greenLighter: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      greenLight: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      green: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      greenDark: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      greenDarker: string;
      // Gray
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      grayLighter: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      grayLight: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      gray: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      grayDark: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      grayDarker: string;
      // Steel blue
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      steelBlueLighter: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      steelBlueLight: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      steelBlue: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      steelBlueDark: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
      steelBlueDarker: string;
      /** @deprecated `colors.blue`, `colors.indigo`, `colors.teal`, `colors.slate`, `colors.neutral` are replacing these colours. */
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
      /** @deprecated We are removing app specific colours in the updated branding. */
      appColors: {
        maps: string;
        occupiers: string;
        insight: string;
        reports: string;
        extract: string;
      };
    };
    /**
     * @deprecated Use `typography` tokens instead.
     *
     * @remarks
     * Reason: Because the font tokens are not consistent with the typography tokens.
     *
     * Removal: Will remain available until all apps are migrated (no planned removal date yet).
     */
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
    typography: Typography;
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

export {};
