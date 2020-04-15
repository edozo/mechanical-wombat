import React from 'react';
import { Tooltip } from 'mechanical-wombat';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */

export const App = () => {
  return (
    <Tooltip tooltipContent={<div>
      <span>Tooltip</span>
      <button type="button">content</button>
    </div>}>
      <button type="button">the child</button>
    </Tooltip>
  );
};
