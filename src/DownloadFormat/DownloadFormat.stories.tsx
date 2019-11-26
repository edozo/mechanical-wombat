import * as React from 'react';
import { DownloadFormat } from './DownloadFormat';

export default {
  title: 'DownloadFormat',
  component: DownloadFormat,
};

export const SingleFormatOption = (): JSX.Element => (
  <div style={{ backgroundColor: 'red', height: '200px', width: '200px' }}>
    <DownloadFormat options={[{ format: 'PDF' }]} />
  </div>
);

export const MultiFormatOption = (): JSX.Element => (
  <div style={{ backgroundColor: 'red', height: '200px', width: '200px' }}>
    <DownloadFormat options={[{ format: 'PDF' }, { format: 'JPG' }, { format: 'DOCX' }]} />
  </div>
);

export const DisabledMultiFormatOption = (): JSX.Element => (
  <div style={{ backgroundColor: 'red', height: '200px', width: '200px' }}>
    <DownloadFormat options={[{ format: 'PDF' }, { format: 'JPG' }, { format: 'DOCX' }]} variant="disabled" />
  </div>
);
