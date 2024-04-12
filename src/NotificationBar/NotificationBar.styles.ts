import styled, { css } from 'styled-components';
import { WarningIcon, UpgradeIcon } from '../Icons';

interface Props {
  $variant: 'alert' | 'info' | 'warning';
}

export const StyledNotificationBar = styled.div<Props>`
  width: 100%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => `${parseInt(p.theme.spacing.xsmall, 10) - 1}px`} ${p => p.theme.spacing.small};
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

export const StyledWarningIcon = styled(WarningIcon)`
  margin: 0 ${p => p.theme.spacing.small};
  fill: ${p => p.theme.colors.system.red};
`;

export const StyledUpgradeIcon = styled(UpgradeIcon)`
  fill: ${p => p.theme.colors.white};
`;
