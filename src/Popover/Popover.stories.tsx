import * as React from 'react';
import { Popover } from './Popover';

export default {
  title: 'Popover',
  component: Popover,
  parameters: {
    backgrounds: [
      { name: 'orange', value: '#e67b17', default: true },
      { name: 'dark blue', value: '#3b5998' },
    ],
  },
};

export const SingleFormatOption = (): JSX.Element => (
  <Popover>
    {[
      {
        label: 'PDF',
        onClick: () => {
          // do nothing
        },
      },
    ]}
  </Popover>
);

export const MultiFormatOption = (): JSX.Element => (
  <Popover>
    {[
      {
        label: 'PDF',
        onClick: () => {
          // do nothing
        },
      },
      {
        label: 'JPG',
        onClick: () => {
          // do nothing
        },
      },
      {
        label: 'DOCX',
        onClick: () => {
          // do nothing
        },
      },
    ]}
  </Popover>
);

export const LongListOption = (): JSX.Element => (
  <Popover>
    {[
      {
        label: 'THIS IS A LONG LIST OPTION',
        onClick: () => {
          // do nothing
        },
      },
      {
        label: 'JPG with alert onClick',
        onClick: () => {
          alert('wakey wakey');
        },
      },
      {
        label: 'DOCX',
        onClick: () => {
          // do nothing
        },
      },
    ]}
  </Popover>
);

export const DisabledMultiFormatOption = (): JSX.Element => (
  <Popover disabled>{[{ label: 'PDF' }, { label: 'JPG' }, { label: 'DOCX' }]}</Popover>
);
