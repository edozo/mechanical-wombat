import styled, { css } from 'styled-components';

const sharedStyle = css`
  margin: 0;
  color: ${p => p.theme.colors.black};
`;

export const StyledH1 = styled.h1`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.h1};
  line-height: ${p => p.theme.font.lineHeight.h1};
  font-weight: ${p => p.theme.font.weight.bold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h1};
`;

export const StyledH2 = styled.h2`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.h2};
  line-height: ${p => p.theme.font.lineHeight.h2};
  font-weight: ${p => p.theme.font.weight.semibold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h2};
`;

export const StyledH3 = styled.h3`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.h3};
  line-height: ${p => p.theme.font.lineHeight.h3};
  font-weight: ${p => p.theme.font.weight.bold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h3};
`;

export const StyledH4 = styled.h4`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.h4};
  line-height: ${p => p.theme.font.lineHeight.h4};
  font-weight: ${p => p.theme.font.weight.semibold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h4};
`;

export const StyledH5 = styled.h5`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.h5};
  line-height: ${p => p.theme.font.lineHeight.h5};
  font-weight: ${p => p.theme.font.weight.semibold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h5};
`;

export const StyledH6 = styled.h6`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.h6};
  line-height: ${p => p.theme.font.lineHeight.h6};
  font-weight: ${p => p.theme.font.weight.semibold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h6};
`;

export const StyledBody = styled.p`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.body};
  line-height: ${p => p.theme.font.lineHeight.body};
  font-weight: ${p => p.theme.font.weight.regular};
`;

export const StyledBodySmall = styled.p`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.bodySmall};
  line-height: ${p => p.theme.font.lineHeight.bodySmall};
  font-weight: ${p => p.theme.font.weight.regular};
`;

export const StyledLabel = styled.p`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.label};
  line-height: ${p => p.theme.font.lineHeight.label};
  font-weight: ${p => p.theme.font.weight.regular};
`;

export const StyledSmall = styled.p`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.small};
  line-height: ${p => p.theme.font.lineHeight.small};
  font-weight: ${p => p.theme.font.weight.semibold};
`;

export const DisplayWrapper = styled.div`
  background: ${p => p.theme.colors.grayLighter};
  padding: ${p => p.theme.spacing.small};
  border-radius: ${p => p.theme.borderRadius.standard};
`;
