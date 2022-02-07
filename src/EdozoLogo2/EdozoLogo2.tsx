import React, { Fragment } from 'react';
import { ReactComponent as EdozoLogo } from './assets/edozo-logo.svg';
import { ReactComponent as InsightLogo } from './assets/insight-logo.svg';
import { ReactComponent as OccupiersLogo } from './assets/occupiers-logo.svg';
import { ReactComponent as MapsLogo } from './assets/maps-logo.svg';
import { ReactComponent as HelpCentreLogo } from './assets/help-centre-logo.svg';
import { BetaBadge } from './EdozoLogo2.styles'; // TODO: Replace me with Badge component once it has correct sizes

export interface Props {
  appName?: 'maps' | 'insight' | 'occupiers' | 'helpCentre' | '';
  beta?: boolean;
}

const switchLogo = ({ appName }: Props): React.ReactNode => {
  switch (appName) {
    case 'maps':
      return <MapsLogo />;
    case 'occupiers':
      return <OccupiersLogo />;
    case 'insight':
      return <InsightLogo />;
    case 'helpCentre':
      return <HelpCentreLogo />;
    default:
      return <EdozoLogo />;
  }
};

export const EdozoLogo2: React.FC<Props> = ({ appName, beta = false }) => (
  <Fragment>
    {switchLogo({ appName })}
    {beta && <BetaBadge>beta</BetaBadge>}
  </Fragment>
);
