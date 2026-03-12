import styled from 'styled-components';

export const LogoV2Wrapper = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const StyledLogoV2 = styled.div<{ $size: 'small' | 'standard' }>`
  display: inline-flex;
  width: ${({ $size }) => ($size === 'small' ? '54px' : '84px')};
  height: ${({ $size }) => ($size === 'small' ? '19px' : '26px')};
`;

export const AppNameText = styled.span<{ $size: 'small' | 'standard' }>`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ $size, theme }) =>
    $size === 'small' ? theme.typography.scale.sm.size : theme.typography.scale['xl'].size};
  line-height: ${({ $size, theme }) =>
    $size === 'small' ? theme.typography.scale.sm.lineHeight : theme.typography.scale['xl'].lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral[800]};
  text-transform: capitalize;
`;
