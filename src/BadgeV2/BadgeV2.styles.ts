import styled, { css } from 'styled-components';
import { BadgeV2Appearance, BadgeV2Size, BadgeV2Variant } from 'BadgeV2/BadgeV2';

const subtleVariantStyles: Record<BadgeV2Variant, ReturnType<typeof css>> = {
  neutral: css`
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    color: ${({ theme }) => theme.colors.neutral[700]};
  `,
  // TODO: revisit info and success system colours — current palette not finalised
  info: css`
    background-color: ${({ theme }) => theme.colors.status.info[100]};
    color: ${({ theme }) => theme.colors.status.info[700]};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.status.success[100]};
    color: ${({ theme }) => theme.colors.status.success[700]};
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.status.warning[100]};
    color: ${({ theme }) => theme.colors.status.warning[700]};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.status.danger[100]};
    color: ${({ theme }) => theme.colors.status.danger[700]};
  `,
  primary: css`
    background-color: ${({ theme }) => theme.colors.indigo[100]};
    color: ${({ theme }) => theme.colors.indigo[700]};
  `,
};

const solidVariantStyles: Record<BadgeV2Variant, ReturnType<typeof css>> = {
  neutral: css`
    background-color: ${({ theme }) => theme.colors.neutral[700]};
    color: ${({ theme }) => theme.colors.neutral[100]};
  `,
  // TODO: revisit info and success system colours — current palette not finalised
  info: css`
    background-color: ${({ theme }) => theme.colors.status.info[700]};
    color: ${({ theme }) => theme.colors.status.info[50]};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.status.success[700]};
    color: ${({ theme }) => theme.colors.status.success[50]};
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.status.warning[700]};
    color: ${({ theme }) => theme.colors.status.warning[50]};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.status.danger[700]};
    color: ${({ theme }) => theme.colors.status.danger[50]};
  `,
  primary: css`
    background-color: ${({ theme }) => theme.colors.indigo[700]};
    color: ${({ theme }) => theme.colors.indigo[50]};
  `,
};

const sizeStyles: Record<BadgeV2Size, ReturnType<typeof css>> = {
  sm: css`
    font-size: ${({ theme }) => theme.typography.scale.xs.size};
    line-height: ${({ theme }) => theme.typography.scale.xs.lineHeight};
    padding: ${({ theme }) => theme.spacing['2xs']} ${({ theme }) => theme.spacing.sm};
    gap: ${({ theme }) => theme.spacing['2xs']};

    > svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }
  `,
  md: css`
    font-size: ${({ theme }) => theme.typography.scale.sm.size};
    line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.xs};

    > svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
    }
  `,
  lg: css`
    font-size: ${({ theme }) => theme.typography.scale.md.size};
    line-height: ${({ theme }) => theme.typography.scale.md.lineHeight};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.xs};

    > svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
  `,
};

export const StyledBadgeV2 = styled.span<{
  $variant: BadgeV2Variant;
  $size: BadgeV2Size;
  $appearance: BadgeV2Appearance;
}>`
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  white-space: nowrap;

  ${({ $variant, $appearance }) =>
    $appearance === 'solid' ? solidVariantStyles[$variant] : subtleVariantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
`;
