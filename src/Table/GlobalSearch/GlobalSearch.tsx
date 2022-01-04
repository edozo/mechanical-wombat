import React from 'react';
import { SearchInput, SearchInputWrapper } from './GlobalSearch.styles';

export interface GlobalSearchProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  value,
  disabled,
  onChange,
  reset,
  placeholder,
  ...rest
}) => (
  <SearchInputWrapper>
    <SearchInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
    {value && (
      <button type="button" onClick={reset}>
        &times;
      </button>
    )}
  </SearchInputWrapper>
);
