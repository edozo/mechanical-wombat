import React, { useState } from 'react';
import { PriceIndicator, Button } from 'test-ui-lib';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */
export const App = () => {
  const [priceTotal, setPriceTotal] = useState(0);
  const [priceIncrease, setPriceIncrease] = useState(0);

  const updatePrice = ({ priceIncrease }) => {
    console.log('updatePrice -> priceIncrease', priceIncrease);
    setPriceIncrease(priceIncrease)
    setPriceTotal(prevState => prevState + priceIncrease)
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#ccc' }}>
      <PriceIndicator total={priceTotal} addition={priceIncrease} />
        {/* <PriceIndicator.Total/> */}
        {/* <PriceIndicator.Update/> */}
      {/* </PriceIndicator> */}

      {/* Helpers */}
      <br />
      <br />
      <br />
      <br />
      <Button onClick={() => updatePrice({ priceIncrease: 1 })}>Increase price by £1.00</Button>
      <Button onClick={() => updatePrice({ priceIncrease: 3 })}>Increase price by £3.00</Button>
    </div>
  );
};
