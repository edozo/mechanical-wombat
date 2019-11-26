import * as React from 'react';
import { FormatOption, FormatList } from './DownloadFormat.styles';

export interface Props {
  options: {
    format: string;
  }[];
  variant?: string;
}

export const DownloadFormat = (props: Props): JSX.Element => {
  const { options, variant } = props;
  return (
    <FormatList>
      {options.map(option => {
        return (
          <FormatOption key={option.format} variant={variant}>
            <span>{option.format}</span>
          </FormatOption>
        );
      })}
    </FormatList>
  );
};
