import React, { Component } from 'react';

import { DropDown } from 'test-ui-lib';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */

export const items = [
  {
    label: 'Item A',
    value: 'itema',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
  {
    label: 'Item B',
    value: 'itemb',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
  {
    label: 'Item C',
    value: 'itemc',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
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
          <DropDown items={items} initialSelectedItem={items[0]} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}
