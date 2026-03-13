import * as React from 'react';
import { StorybookGlobalStyle } from '../../src/globalStyle.storybook';

export const withGlobalStyles = cb => (
  <React.Fragment>
    <StorybookGlobalStyle />
    {cb()}
  </React.Fragment>
);
