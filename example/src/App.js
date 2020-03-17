import React, { useState } from 'react';
import { Switch } from 'test-ui-lib';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */
export const App = () => {
  const [isOneChecked, setIsOneChecked] = useState(false);
  const [isTwoChecked, setIsTwoChecked] = useState(false);
  return (
    <React.Fragment>
      <div>
      <p>Switch One:</p>
      <Switch
      currentValue={isOneChecked}
      onChange={() => setIsOneChecked(!isOneChecked)}
      id={1}
      />
    </div>
    <div>
      <p>Switch Two:</p>
      <Switch
      currentValue={isTwoChecked}
      onChange={() => setIsTwoChecked(!isTwoChecked)}
      id={2}
      />
    </div>
    </React.Fragment>
  );
}