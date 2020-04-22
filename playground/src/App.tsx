import React from 'react';
import { NotificationBar } from 'mechanical-wombat';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */

export const App = () => {
  return (
    <NotificationBar variant='alert'>
      <div>
        <span>
          You are currently using an outdated browser, this may cause issues using our site. Upgrade to a modern browser
          for a better experience
        </span>
      </div>
      <button type="button" style={{ backgroundColor: 'red' }}>
        upgrade
      </button>
    </NotificationBar>
  );
};
