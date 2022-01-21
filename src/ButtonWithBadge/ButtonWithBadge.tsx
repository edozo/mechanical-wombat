import React from 'react';
import { StyledButton, StyledNewBadge } from './ButtonWithBadge.styles';

export interface ButtonWithBadgeProps {
  disabled?: boolean;
  badge?: string;
  onClick?: () => void;
}

export const ButtonWithBadge: React.FC<ButtonWithBadgeProps> = ({ children, badge, onClick }) => (
  <div role="button" onClick={onClick}>
    <StyledButton variant="white" size="standard" radius="round">
      {children}
    </StyledButton>
    <StyledNewBadge color="#ffffff" background="#2818f9" size="small">
      {badge}
    </StyledNewBadge>
  </div>
);
