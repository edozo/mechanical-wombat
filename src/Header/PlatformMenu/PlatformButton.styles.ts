import { motion } from 'framer-motion';
import styled from 'styled-components';

export interface PlatformMenuButtonProps {
  onClick: () => void;
}

export const StylePlatformButton = styled(motion.button)<PlatformMenuButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  background: ${p => p.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background: ${p => p.theme.colors.gray};
  }
`;
