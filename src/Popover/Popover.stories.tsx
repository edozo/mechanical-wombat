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

export const SingleFormatOption = (): JSX.Element => <Popover>{[{ label: 'PDF' }]}</Popover>;

export const MultiFormatOption = (): JSX.Element => (
  <Popover>{[{ label: 'PDF' }, { label: 'JPG' }, { label: 'DOCX' }]}</Popover>
);

export const LongListOption = (): JSX.Element => (
  <Popover>{[{ label: 'THIS IS A LONG LIST OPTION' }, { label: 'JPG' }, { label: 'DOCX' }]}</Popover>
);

export const DisabledMultiFormatOption = (): JSX.Element => (
  <Popover disabled>{[{ label: 'PDF' }, { label: 'JPG' }, { label: 'DOCX' }]}</Popover>
);
