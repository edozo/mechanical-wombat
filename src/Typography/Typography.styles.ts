import styled, { css } from 'styled-components/macro';

const sharedStyle = css`
  margin: 0;
  color: ${p => p.theme.colors.black};
`;

export const StyledH1 = styled.h1`
  ${sharedStyle}
  font-family:  ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.h1};
  line-height: ${p => p.theme.font.lineHeight.h1};
  font-weight: ${p => p.theme.font.weight.bold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h1};
`;

export const StyledH2 = styled.h2`
  ${sharedStyle}
  font-family:  ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.h2};
  line-height: ${p => p.theme.font.lineHeight.h2};
  font-weight: ${p => p.theme.font.weight.semibold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h2};
`;

export const StyledH3 = styled.h3`
  ${sharedStyle}
  font-family:  ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.h3};
  line-height: ${p => p.theme.font.lineHeight.h3};
  font-weight: ${p => p.theme.font.weight.bold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h3};
`;

export const StyledH4 = styled.h4`
  ${sharedStyle}
  font-family:  ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.h4};
  line-height: ${p => p.theme.font.lineHeight.h4};
  font-weight: ${p => p.theme.font.weight.semibold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h4};
`;

export const StyledH5 = styled.h5`
  ${sharedStyle}
  font-family:  ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.h5};
  line-height: ${p => p.theme.font.lineHeight.h5};
  font-weight: ${p => p.theme.font.weight.semibold};
  letter-spacing: ${p => p.theme.font.letterSpacing.h5};
`;

export const StyledH6 = styled.h6`
  ${sharedStyle}
  font-family:  ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.h6};
  line-height: ${p => p.theme.font.lineHeight.h6};
  font-weight: ${p => p.theme.font.weight.regular};
  letter-spacing: ${p => p.theme.font.letterSpacing.h6};
  text-transform: uppercase;
`;

const sharedTextStyles = css`
  ${sharedStyle}
  font-weight: ${p => p.theme.font.weight.regular};
  display: inline-block;
`;

export const StyledTextXLarge = styled.p`
  ${sharedTextStyles}
  font-size: ${p => p.theme.font.size.text.xlarge};
  line-height: ${p => p.theme.font.lineHeight.text.xlarge};
`;

export const StyledTextLarge = styled.p`
  ${sharedTextStyles}
  font-size: ${p => p.theme.font.size.text.large};
  line-height: ${p => p.theme.font.lineHeight.text.large};
`;

export const StyledTextBase = styled.p`
  ${sharedTextStyles}
  font-size: ${p => p.theme.font.size.text.base};
  line-height: ${p => p.theme.font.lineHeight.text.base};
`;

export const StyledTextSmall = styled.p`
  ${sharedTextStyles}
  font-size: ${p => p.theme.font.size.text.small};
  line-height: ${p => p.theme.font.lineHeight.text.small};
`;

export const StyledTextXSmall = styled.p`
  ${sharedTextStyles}
  font-size: ${p => p.theme.font.size.text.xsmall};
  line-height: ${p => p.theme.font.lineHeight.text.xsmall};
`;

export const StyledTextXXSmall = styled.p`
  ${sharedStyle}
  font-size: ${p => p.theme.font.size.text.xxsmall};
  line-height: ${p => p.theme.font.lineHeight.text.xxsmall};
`;

const sharedTitleStyles = css`
  ${sharedStyle}
  font-family:  ${p => p.theme.font.family.secondary};
  font-weight: ${p => p.theme.font.weight.semibold};
`;

export const StyledTitle = styled.p`
  ${sharedTitleStyles}
  font-size: ${p => p.theme.font.size.special.title};
  line-height: ${p => p.theme.font.lineHeight.special.title};
`;

export const StyledSubTitle = styled.p`
  ${sharedTitleStyles}
  font-size: ${p => p.theme.font.size.special.subTitle};
  line-height: ${p => p.theme.font.lineHeight.special.subTitle};
`;

export const DisplayWrapper = styled.div`
  background: ${p => p.theme.colors.grayLighter};
  padding: ${p => p.theme.spacing.small};
  border-radius: ${p => p.theme.borderRadius.standard};
`;
