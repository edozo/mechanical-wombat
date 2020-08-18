import styled, { css } from 'styled-components';
import { TabWrapperProps } from './Tab';

interface TabStyleProps {
  isActive: boolean;
}

export const StyledTabWrapper = styled.div<TabWrapperProps>`
  display: flex;
  ${p =>
    p.stretch &&
    css`
      justify-content: stretch;
      * {
        flex: 1 1 0px;
      }
    `}
`;

export const StyledTab = styled.span<TabStyleProps>`
  background: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.grayDarker};
  padding: ${p => p.theme.spacing.xsmall} ${p => p.theme.spacing.small};
  border-radius: ${p => p.theme.borderRadius.large} ${p => p.theme.borderRadius.large} 0 0;
  font-size: ${p => p.theme.font.size.text.base};
  line-height: ${p => p.theme.font.lineHeight.text.base};
  font-weight: ${p => p.theme.font.weight.semibold};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${p =>
    p.isActive &&
    css`
      font-weight: ${p.theme.font.weight.bold};
      background: ${p.theme.colors.grayLight};
      color: ${p.theme.colors.black};
    `}
`;
