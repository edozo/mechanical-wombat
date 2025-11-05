import styled, { css } from 'styled-components';
import { WarningIcon, UpgradeIcon } from '../Icons';

interface Props {
  $variant: 'alert' | 'info' | 'warning';
}

export const StyledNotificationBar = styled.div<Props>`
  width: 100%;
  border: 1px solid;
  display: flex;
  padding: ${p => p.theme.spacing.xsmall} ${p => p.theme.spacing.small};
  font-size: ${p => p.theme.font.size.text.small};
  line-height: ${p => p.theme.font.lineHeight.text.small};
  ${p =>
    p.$variant === 'info' &&
    css`
      border-color: ${p.theme.colors.system.blue};
      background: ${p.theme.colors.system.blueLighter};
      color: ${p.theme.colors.system.blue};
    `}
  ${p =>
    p.$variant === 'alert' &&
    css`
      border-color: ${p.theme.colors.system.red};
      background: ${p.theme.colors.system.redLighter};
      color: ${p.theme.colors.system.red};
    `}
  ${p =>
    p.$variant === 'warning' &&
    css`
      border-color: ${p.theme.colors.system.yellowDarker};
      background: ${p.theme.colors.system.yellowLighter};
      color: ${p.theme.colors.system.yellowDarker};
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
  margin-left: ${p => p.theme.spacing.small};
  font-size: ${p => p.theme.font.size.text.small};
  line-height: ${p => p.theme.font.lineHeight.text.small};
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  flex-shrink: 0;
  ${p =>
    p.$variant === 'info' &&
    css`
      color: ${p.theme.colors.system.blue};
    `}
  ${p =>
    p.$variant === 'alert' &&
    css`
      color: ${p.theme.colors.system.red};
    `}
  ${p =>
    p.$variant === 'warning' &&
    css`
      color: ${p.theme.colors.system.yellowDarker};
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
  margin-top: ${p => p.theme.spacing.xsmall};
  padding-top: ${p => p.theme.spacing.xsmall};
  width: 100%;
`;

export const StyledWarningIcon = styled(WarningIcon)`
  margin: 0 ${p => p.theme.spacing.small};
  fill: ${p => p.theme.colors.system.red};
`;

export const StyledUpgradeIcon = styled(UpgradeIcon)`
  fill: ${p => p.theme.colors.white};
`;
