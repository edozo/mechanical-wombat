import React from 'react';
import { Badge } from 'mechanical-wombat';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */

export const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#ccc'}}>
      <Badge>£ 1.20</Badge>
    </div>
  );
}