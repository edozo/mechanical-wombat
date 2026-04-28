import styled from 'styled-components';

const sharedStyle = `
  margin: 0;
`;

export const StyledDisplay = styled.h1`
  ${sharedStyle}
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale['4xl'].size};
  line-height: ${({ theme }) => theme.typography.scale['4xl'].lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const StyledHeadingLg = styled.h2`
  ${sharedStyle}
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale['3xl'].size};
  line-height: ${({ theme }) => theme.typography.scale['3xl'].lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const StyledHeadingMd = styled.h3`
  ${sharedStyle}
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale['2xl'].size};
  line-height: ${({ theme }) => theme.typography.scale['2xl'].lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const StyledHeadingSm = styled.h4`
  ${sharedStyle}
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.xl.size};
  line-height: ${({ theme }) => theme.typography.scale.xl.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const StyledBody = styled.p`
  ${sharedStyle}
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  line-height: ${({ theme }) => theme.typography.scale.md.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const StyledLabel = styled.span`
  ${sharedStyle}
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

export const StyledCaption = styled.span`
  ${sharedStyle}
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.xs.size};
  line-height: ${({ theme }) => theme.typography.scale.xs.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;
