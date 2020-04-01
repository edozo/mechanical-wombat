import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PriceTotalWrapper = styled(motion.div)`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  overflow: hidden;
  border-radius: ${p => p.theme.borderRadius.standard};
`;

export const PriceUpdateIndicator = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  border-radius: ${p => p.theme.borderRadius.standard};
  background-color: ${p => p.theme.colors.grayDark};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.spacing.xsmall};
  font-size: ${p => p.theme.font.size.label};
  line-height: ${p => p.theme.font.lineHeight.small};
  position: relative;
  :after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent ${p => p.theme.colors.grayDark};
    right: -8px;
  }
`;

export const HoverContainer = styled(motion.div)`
  background: ${p => p.theme.colors.grayLight};
  z-index: 0;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 ${p => p.theme.spacing.xsmall};
  border-radius: ${p => p.theme.borderRadius.standard} 0 0 ${p => p.theme.borderRadius.standard};
`;

export const Divider = styled(motion.div)`
  z-index: 2;
  background: ${p => p.theme.colors.grayDark};
  width: 1px;
  height: 60%;
  position: absolute;
  left: 0;
`;

export const TotalPrice = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 ${p => p.theme.spacing.xsmall};
  border-radius: ${p => p.theme.borderRadius.standard};
  background: ${p => p.theme.colors.grayLight};
  color: ${p => (p.isActive ? p.theme.colors.aliases.primary : p.theme.colors.grayDarker)};
  font-family: ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.label};
  line-height: ${p => p.theme.font.lineHeight.small};
  font-weight: ${p => p.theme.font.weight.bold};
`;
