import styled, { css } from 'styled-components';
import { WarningIcon, UpgradeIcon } from '../Icons';

interface Props {
  $variant: 'alert' | 'info' | 'warning';
}

export const StyledNotificationBar = styled.div<Props>`
  width: 100%;
  border: 1px solid;
  display: flex;
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.font.size.text.small};
  line-height: ${({ theme }) => theme.font.lineHeight.text.small};
  ${({ theme, $variant }) =>
    $variant === 'info' &&
    css`
      border-color: ${theme.colors.system.blue};
      background: ${theme.colors.system.blueLighter};
      color: ${theme.colors.system.blue};
    `}
  ${({ theme, $variant }) =>
    $variant === 'alert' &&
    css`
      border-color: ${theme.colors.system.red};
      background: ${theme.colors.system.redLighter};
      color: ${theme.colors.system.red};
    `}
  ${({ theme, $variant }) =>
    $variant === 'warning' &&
    css`
      border-color: ${theme.colors.system.yellowDarker};
      background: ${theme.colors.system.yellowLighter};
      color: ${theme.colors.system.yellowDarker};
    `}
`;

export const StyledSummary = styled.div`
  flex: 1;
`;

export const StyledSummaryDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

export const StyledSummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledDetailsTrigger = styled.button<{ $variant: 'alert' | 'info' | 'warning' }>`
  background: transparent;
  border: none;
  padding: 0;
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.font.size.text.small};
  line-height: ${({ theme }) => theme.font.lineHeight.text.small};
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  flex-shrink: 0;
  ${({ theme, $variant }) =>
    $variant === 'info' &&
    css`
      color: ${theme.colors.system.blue};
    `}
  ${({ theme, $variant }) =>
    $variant === 'alert' &&
    css`
      color: ${theme.colors.system.red};
    `}
  ${({ theme, $variant }) =>
    $variant === 'warning' &&
    css`
      color: ${theme.colors.system.yellowDarker};
    `}

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

export const StyledDetailsPanel = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xsmall};
  padding-top: ${({ theme }) => theme.spacing.xsmall};
  width: 100%;
`;

export const StyledWarningIcon = styled(WarningIcon)`
  margin: 0 ${({ theme }) => theme.spacing.small};
  fill: ${({ theme }) => theme.colors.system.red};
`;

export const StyledUpgradeIcon = styled(UpgradeIcon)`
  fill: ${({ theme }) => theme.colors.white};
`;
