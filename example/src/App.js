import React, { useState } from 'react';
import { Button, PriceIndicator } from 'test-ui-lib';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */
export const App = () => {
  const [priceTotal, setPriceTotal] = useState(0);
  const [priceIncrease, setPriceIncrease] = useState(0);

  const updatePrice = ({ priceIncrease }) => {
    setPriceIncrease(priceIncrease)
    setPriceTotal(prevState => prevState + priceIncrease)
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#ccc' }}>
      <div style={{ position: 'absolute', bottom: '24px', right: '24px' }}>
        <PriceIndicator total={priceTotal} addition={priceIncrease}>hover content will be here and it can be super long</PriceIndicator>
      </div>
      <Button onClick={() => updatePrice({ priceIncrease: Math.random() })}>Increase price by random penny's</Button>
    </div>
  );
};
