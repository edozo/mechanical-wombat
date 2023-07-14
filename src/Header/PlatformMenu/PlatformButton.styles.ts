import styled from 'styled-components';

export interface PlatformMenuButtonProps {
  onClick: () => void;
}

export const StylePlatformButton = styled.button<PlatformMenuButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  background: ${p => p.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 100ms;
  animation-timing-function: cubic-bezier(0.2, -2, 0.8, 2);

  :hover {
    background: ${p => p.theme.colors.gray};
    transform: scale(1.1);
  }

  :active {
    transform: scale(0.9) rotate(-90deg);
  }
`;
