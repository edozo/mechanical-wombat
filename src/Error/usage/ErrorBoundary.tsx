import React, { Fragment, PropsWithChildren } from 'react';
import { ErrorIcon } from '../../Icons';
import { Ring } from '../Ring';
import { ErrorColumn } from '../ErrorColumn';
import { ErrorInfo } from '../ErrorInfo';

export const ErrorBoundary: React.FC<PropsWithChildren<any>> = ({
  children = "This page doesn't exist or is no longer available, please go back home.",
}) => (
  <Fragment>
    <ErrorColumn>
      <ErrorInfo foregroundMessage="Sorry" backgroundMessage="Oops">
        {children}
      </ErrorInfo>
    </ErrorColumn>
    <ErrorColumn>
      <Ring opacity={0.2} padding="56px">
        <Ring opacity={0.4} padding="44px">
          <Ring opacity={0.7} padding="18px">
            <ErrorIcon fill="#00B8D7" />
          </Ring>
        </Ring>
      </Ring>
    </ErrorColumn>
  </Fragment>
);
