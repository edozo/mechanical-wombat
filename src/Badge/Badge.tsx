import * as React from 'react';
import { StyledBadge } from './Badge.styles';

export interface Props {
  background?: string;
  color?: string;
  size?: 'standard'; // TODO: fill this out more one design system has caught-up
}

export const Badge: React.FC<Props> = ({
  background = 'grayLight',
  color = 'grayDarker',
  size = 'standard',
  ...props
}) => (
  <StyledBadge background={background} color={color} size={size} {...props}>
    {props.children}
  </StyledBadge>
);
