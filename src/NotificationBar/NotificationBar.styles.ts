import styled, { css } from 'styled-components';
import { NotificationIcon, UpgradeIcon } from '../Icons';
import { Props } from './NotificationBar';

export const StyledNotificationBar = styled.div<Props>`
  width: 100%;
  min-height: 40px;
  padding: 5px;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  ${p =>
    p.variant === 'info' &&
    css`
      border-color: ${p.theme.colors.system.blue};
      background: ${p.theme.colors.system.blueLighter};
    `}

  ${p =>
    p.variant === 'alert' &&
    css`
      border-color: ${p.theme.colors.system.red};
      background: ${p.theme.colors.system.redLighter};
    `}
`;

export const StyledNotificationIcon = styled(NotificationIcon)`
  padding-top: 10px;
  padding-left: ${p => p.theme.spacing.base};
  fill: ${p => p.theme.colors.system.red};
`;

export const StyledUpgradeIcon = styled(UpgradeIcon)`
  fill: ${p => p.theme.colors.white};
`;
