import styled, { css } from 'styled-components';
import { NotificationIcon, UpgradeIcon } from '../Icons';
import { Props } from './NotificationBar';

export const StyledNotificationBar = styled.div<Props>`
  width: 100%;
  padding: ${p => p.theme.spacing.xxsmall};
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  margin: ${p => p.theme.spacing.xxsmall} 0;
  & > * {
    font-size: ${p => p.theme.font.size.label};
    line-height: ${p => p.theme.font.lineHeight.labelSmall};
  }
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
  padding: 0 ${p => p.theme.spacing.base};
  fill: ${p => p.theme.colors.system.red};
`;

export const StyledUpgradeIcon = styled(UpgradeIcon)`
  fill: ${p => p.theme.colors.white};
`;
