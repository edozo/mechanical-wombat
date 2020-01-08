import React, { Component } from 'react';

import { DropDown } from 'test-ui-lib';

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */

export const items = [
  {
    label: 'Item 1',
    value: 'item1',
    thumbnail:
      'https://is2-ssl.mzstatic.com/image/thumb/Purple69/v4/6f/b1/4a/6fb14a9a-d356-0d33-69c9-2f39ed7f0ecd/source/256x256bb.jpg',
  },
  {
    label: 'Item 2',
    value: 'item2',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
  {
    label: 'Item 3',
    value: 'item3',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
  {
    label: 'Item 4',
    value: 'item4',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
  {
    label: 'Item 5',
    value: 'item5',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
  {
    label: 'Item 6',
    value: 'item6',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
  {
    label: 'Item 7',
    value: 'item7',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
  {
    label: 'Item 8',
    value: 'item8',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
  {
    label: 'Item 9',
    value: 'item9',
    thumbnail: 'https://i1.pngguru.com/preview/350/922/403/classic-car-icon-256-png-icon.jpg',
  },
];

export default class App extends Component {
  onChange = (selectedBook) =>console.log({ selectedBook });

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'center', width: '100vw', height: '100vh', paddingTop: '10vh'}}>
        <div style={{ width: '400px'}}>
          <DropDown onChange={this.onChange} items={items} />
        </div>
      </div>
    );
  }
}
