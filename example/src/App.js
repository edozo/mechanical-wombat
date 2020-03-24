import React, { useState } from 'react';
import { H1 } from 'test-ui-lib';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */
export const App = () => {
  const [isOneChecked, setIsOneChecked] = useState(false);
  const [isTwoChecked, setIsTwoChecked] = useState(false);
  return (
    <React.Fragment>
      <H1>...play here</H1>
    </React.Fragment>
  );
}