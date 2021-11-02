import React from 'react';
import { BackgroundMessage, ForegroundMessage, ErrorInfoWrapper } from './ErrorInfo.styles';

interface Props {
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
