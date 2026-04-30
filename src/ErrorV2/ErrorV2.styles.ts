import styled from 'styled-components';

export const StyledErrorV2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing['2xl']};
`;

export const StyledErrorV2Code = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  /* No theme token above 4xl (40px); error code is intentionally oversized */
  font-size: 5rem;
  line-height: 1;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.indigo[900]};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
`;

export const StyledErrorV2Title = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale['2xl'].size};
  line-height: ${({ theme }) => theme.typography.scale['2xl'].lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.indigo[900]};
`;

export const StyledErrorV2Description = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  line-height: ${({ theme }) => theme.typography.scale.md.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

export const StyledErrorV2Actions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
`;
