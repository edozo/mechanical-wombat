import * as React from 'react';
import { Popover } from './Popover';

export default {
  title: 'Popover',
  component: Popover,
};

export const SingleFormatOption = (): JSX.Element => (
  // TODO: Build a reusable component for this so we can use in multiple places or a storybook addon to handle it.
  <div style={{ backgroundColor: 'red', height: '200px', width: '200px' }}>
    <Popover>{[{ label: 'PDF' }]}</Popover>
  </div>
);

export const MultiFormatOption = (): JSX.Element => (
  <div style={{ backgroundColor: 'red', height: '200px', width: '200px' }}>
    <Popover>{[{ label: 'PDF' }, { label: 'JPG' }, { label: 'DOCX' }]}</Popover>
  </div>
);

export const DisabledMultiFormatOption = (): JSX.Element => (
  <div style={{ backgroundColor: 'red', height: '200px', width: '200px' }}>
    <Popover disabled>{[{ label: 'PDF' }, { label: 'JPG' }, { label: 'DOCX' }]}</Popover>
  </div>
);
