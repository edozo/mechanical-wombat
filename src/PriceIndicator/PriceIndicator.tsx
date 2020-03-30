import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useEffectAfterMount } from '../hooks';
import { PriceUpdateIndicator, PriceTotalWrapper, HoverContainer, TotalPrice, Divider } from './PriceIndicator.styles';

const updaterVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: -12, transition: { ease: 'easeIn', duration: 0.1 } },
  exit: { opacity: 0, x: 20, transition: { ease: 'easeOut', duration: 0.1 } },
};

const hoverContentVariants = {
  rest: { x: 500 },
  hover: { x: 3, transition: { duration: 0.4, ease: 'easeIn' } },
};

const hoverDividerVariants = {
  rest: { y: 30 },
  hover: { y: 0, transition: { duration: 0.1, delay: 0.4, ease: 'easeIn' } },
};

export interface Props {
  total: number;
  addition: number;
  isActive?: boolean;
}

export const PriceIndicator: React.FC<Props> = ({ total, addition, isActive = false, children }) => {
  const [isAdditionVisible, setIsAdditionVisible] = useState(false);
  const [isPriceHover, setIsPriceHover] = useState(false);

  const formattedTotal = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(total);
  const formattedAddition = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(addition);

  useEffectAfterMount(() => {
    setIsAdditionVisible(true);
    const timer = setTimeout(() => setIsAdditionVisible(false), 400);

    return () => clearTimeout(timer);
  }, [formattedAddition]);

  return (
    <React.Fragment>
      {/* Tooltip UI */}
      <AnimatePresence>
        {isAdditionVisible && (
          <PriceUpdateIndicator variants={updaterVariants} initial="initial" animate="animate" exit="exit">
            + {formattedAddition}
          </PriceUpdateIndicator>
        )}
      </AnimatePresence>
      {/* Badge and hover UI */}
      <PriceTotalWrapper onHoverStart={() => setIsPriceHover(true)} onHoverEnd={() => setIsPriceHover(false)}>
        {isPriceHover && (
          <HoverContainer initial="rest" animate="hover" exit="rest" variants={hoverContentVariants}>
            {children}
          </HoverContainer>
        )}
        <TotalPrice isActive={isActive} style={{ zIndex: 2 }}>
          {isPriceHover && <Divider initial="rest" animate="hover" exit="rest" variants={hoverDividerVariants} />}
          {formattedTotal}
        </TotalPrice>
      </PriceTotalWrapper>
    </React.Fragment>
  );
};
