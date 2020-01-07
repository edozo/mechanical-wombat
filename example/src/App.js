import React, { Component } from 'react';

import { ToggleGroup } from 'test-ui-lib';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */

export const items = [
  {
    label: 'Item A',
    value: 'itema',
  },
  {
    label: 'Item B',
    value: 'itemb',
  },
  {
    label: 'Item C',
    value: 'itemc',
  },
];

export default class App extends Component {
  onChange = item => console.log(`The item value is '${item.value}' and the label is '${item.label}'`);

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          paddingTop: '10vh',
        }}
      >
        <div style={{ width: '400px' }}>
          <ToggleGroup items={items} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}
