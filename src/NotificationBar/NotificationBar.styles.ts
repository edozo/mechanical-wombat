import styled, { css } from 'styled-components';
import { NotificationIcon, UpgradeIcon } from '../Icons';
import { Props } from './NotificationBar';

export const StyledNotificationBar = styled.div<Props>`
  width: 100%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => `${parseInt(p.theme.spacing.xsmall, 10) - 1}px`} ${p => p.theme.spacing.small};
  font-size: ${p => p.theme.font.size.label};
  line-height: ${p => p.theme.font.lineHeight.labelSmall};
  ${p =>
    p.variant === 'info' &&
    css`
      border-color: ${p.theme.colors.system.blue};
      background: ${p.theme.colors.system.blueLighter};
      color: ${p.theme.colors.system.blue};
    `}

  ${p =>
    p.variant === 'alert' &&
    css`
      border-color: ${p.theme.colors.system.red};
      background: ${p.theme.colors.system.redLighter};
      color: ${p.theme.colors.system.red};
    `}
`;

export const StyledNotificationIcon = styled(NotificationIcon)`
  margin: 0 ${p => p.theme.spacing.small};
  fill: ${p => p.theme.colors.system.red};
`;

export const StyledUpgradeIcon = styled(UpgradeIcon)`
  fill: ${p => p.theme.colors.white};
`;
