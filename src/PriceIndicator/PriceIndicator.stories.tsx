import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { PriceIndicator } from './PriceIndicator';
import { Tooltip } from '../Tooltip';

export default {
  title: 'Components/PriceIndicator',
  argTypes: { onChange: { action: 'changed' } },
  component: PriceIndicator,
  parameters: {
    backgrounds: {
      default: 'orange',
    },
  },
} as Meta;

export const Default: Story = () => {
  const [priceTotal, setPriceTotal] = useState(0);
  const [priceIncrease, setPriceIncrease] = useState(0);

  const updatePrice = ({ increase }: { increase: number }): void => {
    setPriceIncrease(increase);
    setPriceTotal(prevState => prevState + increase);
  };
  return (
    <div style={{ height: '100px' }}>
      <button type="button" onClick={() => updatePrice({ increase: Math.random() })}>
        Increase price by random penny`&apos;`s
      </button>
      <div style={{ position: 'absolute', bottom: '24px', right: '24px' }}>
        <PriceIndicator total={priceTotal} addition={priceIncrease}>
          hover content will be here and it can be super long
        </PriceIndicator>
      </div>
    </div>
  );
};

export const Active: Story = () => {
  const [priceTotal, setPriceTotal] = useState(0);
  const [priceIncrease, setPriceIncrease] = useState(0);
  const updatePrice = ({ increase }: { increase: number }): void => {
    setPriceIncrease(increase);
    setPriceTotal(prevState => prevState + increase);
  };
  return (
    <div style={{ height: '100px' }}>
      <button type="button" onClick={() => updatePrice({ increase: Math.random() })}>
        Increase price by random penny`&apos;`s
      </button>
      <div style={{ position: 'absolute', bottom: '24px', right: '24px' }}>
        <PriceIndicator additionTiming={3000} isActive total={priceTotal} addition={priceIncrease}>
          <Tooltip
            trigger="click"
            offset={[0, 16]}
            placement="top-start"
            interactive
            interactiveBorder={30}
            content={
              <div>
                <span>Tooltip</span>
              </div>
            }
          >
            <button type="button">the child</button>
          </Tooltip>
          hover content will be here and it can be super long
        </PriceIndicator>
      </div>
    </div>
  );
};
