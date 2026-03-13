import styled, { css } from 'styled-components';

interface TabStyleProps {
  $isActive: boolean;
  $disabled?: boolean;
}

interface TabWrapperProps {
  $stretch?: boolean;
}

export const StyledTabWrapper = styled.div<TabWrapperProps>`
  display: flex;
  ${({ $stretch }) =>
    $stretch &&
    css`
      justify-content: stretch;
      * {
        flex: 1 1 0px;
      }
    `}
`;

export const StyledTab = styled.span<TabStyleProps>`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grayDarker};
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.large} ${({ theme }) => theme.borderRadius.large} 0 0;
  font-size: ${({ theme }) => theme.font.size.text.base};
  line-height: ${({ theme }) => theme.font.lineHeight.text.base};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ theme, $isActive }) =>
    $isActive &&
    css`
      font-weight: ${theme.font.weight.bold};
      background: ${theme.colors.grayLight};
      color: ${theme.colors.black};
    `}

  ${({ theme, $disabled }) =>
    $disabled &&
    css`
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.size.text.small};
      background: ${theme.colors.grayLighter};
      color: ${theme.colors.grayDark};
      cursor: not-allowed;
    `}
`;
