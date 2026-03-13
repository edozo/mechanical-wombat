import styled, { css, keyframes } from 'styled-components';
import {
  ButtonV3Status,
  ButtonV3Appearance,
  ButtonV3Variant,
  getButtonV3SizeTokens,
  getButtonV3Tone,
  ButtonV3Size,
} from 'ButtonV3/utils/buttonV3StyleTokens';

interface StyledButtonV3Props {
  $variant: ButtonV3Variant;
  $appearance: ButtonV3Appearance;
  $size: ButtonV3Size;
  $status?: ButtonV3Status;
  $fullWidth: boolean;
  $iconOnly: boolean;
  $isLoading: boolean;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.span`
  width: ${({ theme }) => theme.icons.sm};
  height: ${({ theme }) => theme.icons.sm};
  border: ${({ theme }) => theme.spacing['2xs']} solid ${({ theme }) => theme.colors.blue[200]};
  border-top-color: ${({ theme }) => theme.colors.blue[600]};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const SpinnerWrapper = styled.span`
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.span<{ $hidden: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: inherit;
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
`;

export const IconSlot = styled.span<{ $size: ButtonV3Size }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ theme, $size }) => {
    const iconSizeByButtonSize: Record<ButtonV3Size, string> = {
      sm: theme.icons.md,
      md: theme.icons.lg,
      lg: theme.icons.xl,
    };

    return css`
      width: ${iconSizeByButtonSize[$size]};
      height: ${iconSizeByButtonSize[$size]};
      font-size: ${iconSizeByButtonSize[$size]};

      & > svg {
        width: 100%;
        height: 100%;
      }
    `;
  }}
`;

export const StyledButtonV3 = styled.button.withConfig({
  shouldForwardProp: (prop: string) => !prop.startsWith('$'),
})<StyledButtonV3Props>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  border-style: solid;
  border-width: ${({ theme }) => theme.spacing['2xs']};
  border-radius: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  text-decoration: none;
  appearance: none;
  user-select: none;
  white-space: nowrap;
  transition: color 220ms ease-in-out, background 220ms ease-in-out, border-color 220ms ease-in-out;

  svg {
    transition: transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  ${({ theme, $size, $iconOnly }) => {
    const sizeTokens = getButtonV3SizeTokens(theme, $size);

    return css`
      font-size: ${sizeTokens.fontSize};
      line-height: ${sizeTokens.lineHeight};
      font-weight: ${sizeTokens.fontWeight};
      gap: ${sizeTokens.gap};
      padding: ${sizeTokens.paddingY} ${sizeTokens.paddingX};
      ${$iconOnly
        ? css`
            padding: 0;
            width: ${sizeTokens.iconOnlySize};
            height: ${sizeTokens.iconOnlySize};
            min-width: ${sizeTokens.iconOnlySize};
            min-height: ${sizeTokens.iconOnlySize};
            max-width: ${sizeTokens.iconOnlySize};
            max-height: ${sizeTokens.iconOnlySize};
            flex: 0 0 ${sizeTokens.iconOnlySize};
          `
        : ''}
    `;
  }}

  ${({ theme, $variant, $appearance, $status }) => {
    const tone = getButtonV3Tone(theme, $variant, $appearance, $status);

    return css`
      color: ${tone.color};
      border-color: ${tone.border};
      background: ${tone.background};

      &:disabled,
      &[aria-disabled='true'] {
        color: ${tone.disabledColor};
        border-color: ${tone.disabledBorder};
        background: ${tone.disabledBackground};
      }

      &:hover:not(:disabled):not([aria-disabled='true']) {
        color: ${tone.hoverColor};
        border-color: ${tone.hoverBorder};
        background: ${tone.hoverBackground};

        [data-icon-position='trailing'] svg.lucide-arrow-right {
          transform: translateX(${theme.spacing.xs});
        }

        [data-icon-position='leading'] svg.lucide-arrow-left {
          transform: translateX(-${theme.spacing.xs});
        }
      }

      &:active:not(:disabled):not([aria-disabled='true']) {
        color: ${tone.activeColor};
        border-color: ${tone.activeBorder};
        background: ${tone.activeBackground};
      }
    `;
  }}

  ${({ $iconOnly }) =>
    $iconOnly &&
    css`
      border-radius: 50%;
      overflow: hidden;
    `}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      cursor: progress;
    `}

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.spacing['2xs']} solid ${({ theme }) => theme.colors.blue[600]};
    outline-offset: ${({ theme }) => theme.spacing['2xs']};
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`;
