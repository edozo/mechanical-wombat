import React from 'react';
import { StyledNewBadge, StyledButton } from './ButtonWithBadge.styles';

export interface ButtonWithBadgeProps {
  disabled?: boolean;
  badge?: string;
  onClick?: () => void;
}

export const ButtonWithBadge: React.FC<ButtonWithBadgeProps> = ({ children, badge, onClick }) => (
  <StyledButton onClick={onClick} variant="white" size="standard" radius="round">
    {children}
    <StyledNewBadge color="#ffffff" background="#2818f9" size="small">
      {badge}
    </StyledNewBadge>
  </StyledButton>
);
