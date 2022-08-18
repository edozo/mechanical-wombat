import React, { PropsWithChildren } from 'react';
import { BackgroundMessage, ForegroundMessage, ErrorInfoWrapper } from './ErrorInfo.styles';

interface Props extends PropsWithChildren<any> {
  foregroundMessage?: string;
  backgroundMessage?: string;
}

export const ErrorInfo: React.FC<Props> = ({ foregroundMessage, backgroundMessage, children }) => {
  return (
    <ErrorInfoWrapper>
      <BackgroundMessage>{backgroundMessage}</BackgroundMessage>
      <ForegroundMessage>{foregroundMessage}</ForegroundMessage>
      <div>{children}</div>
    </ErrorInfoWrapper>
  );
};
