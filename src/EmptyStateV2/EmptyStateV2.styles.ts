import styled from 'styled-components';

export const StyledEmptyStateV2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 2px dashed ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const TitleWrapper = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.xl.size};
  line-height: ${({ theme }) => theme.typography.scale.xl.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const DescriptionWrapper = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  line-height: ${({ theme }) => theme.typography.scale.md.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

export const ActionWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
