import React from 'react';
import { ButtonV2 } from '../ButtonV2';
import { StyledNewBadge } from './ButtonWithBadge.styles';

export interface ButtonWithBadgeProps {
  disabled?: boolean;
  badge?: string;
  onClick?: () => void;
}

export const ButtonWithBadge: React.FC<ButtonWithBadgeProps> = ({ children, badge, onClick }) => (
  <ButtonV2 onClick={onClick} variant="white" size="standard" radius="round">
    {children}
    <StyledNewBadge color="#ffffff" background="#2818f9" size="small">
      {badge}
    </StyledNewBadge>
  </ButtonV2>
);
