import React, { Fragment, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../Badge';
// import { StyledPriceIndicator } from './PriceIndicator.styles';

export interface Props {
  total: number;
  addition?: number;
}

export const PriceIndicator: React.FC<Props> = ({ total = 0, addition = 0, ...props }) => {
  const [additionValue, setAdditionValue] = useState('0');
  const formattedTotal = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(total);
  const formattedAddition = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(addition);

  useLayoutEffect(() => {
    console.log(`Logging ${formattedAddition}`);
    setAdditionValue(formattedAddition);
  }, [formattedAddition]);

  return (
    <Fragment>
      <Badge {...props}>{formattedTotal}</Badge>
      {/* {formattedAddition} should be animated tooltip style */}
      {/* <motion.div>{formattedAddition}</motion.div> */}
      <motion.div
        style={{ display: 'inline-block' }}
        animate={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {additionValue}
      </motion.div>
      {/* <StyledPriceIndicator>123</StyledPriceIndicator> */}
    </Fragment>
  );
};
