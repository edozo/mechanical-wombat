import React, { Fragment } from 'react';
import { ReactComponent as EdozoLogo } from './edozo-logo.svg';
import { ReactComponent as InsightLogo } from './insight-logo.svg';
import { ReactComponent as InsightLogoSmall } from './insight-logo-small.svg';
import { ReactComponent as OccupiersLogo } from './occupiers-logo.svg';
import { ReactComponent as OccupiersLogoSmall } from './occupiers-logo-small.svg';
import { ReactComponent as MapsLogo } from './maps-logo.svg';
import { ReactComponent as MapsLogoSmall } from './maps-logo-small.svg';
import { ReactComponent as HelpCentreLogo } from './help-centre-logo.svg';
import { ReactComponent as HelpCentreLogoSmall } from './help-centre-logo-small.svg';

export interface Props {
  appName?: 'maps' | 'insight' | 'occupiers' | 'helpCentre';
  size?: 'standard' | 'small';
}

const switchLogo = ({ appName, size }: Props): React.ReactNode => {
  switch (appName) {
    case 'maps':
      switch (size) {
        case 'small':
          return <MapsLogoSmall />;
        case 'standard':
          return <MapsLogo />;
        default:
          return <MapsLogo />;
      }
      break;
    case 'occupiers':
      switch (size) {
        case 'small':
          return <OccupiersLogoSmall />;
        case 'standard':
          return <OccupiersLogo />;
        default:
          return <OccupiersLogo />;
      }
      break;
    case 'insight':
      switch (size) {
        case 'small':
          return <InsightLogoSmall />;
        case 'standard':
          return <InsightLogo />;
        default:
          return <InsightLogo />;
      }
      break;
    case 'helpCentre':
      switch (size) {
        case 'small':
          return <HelpCentreLogoSmall />;
        case 'standard':
          return <HelpCentreLogo />;
        default:
          return <HelpCentreLogo />;
      }
      break;
    default:
      return <EdozoLogo />;
  }
};

export const EdozoLogo2: React.FC<Props> = ({ appName, size }) => <Fragment>{switchLogo({ appName, size })}</Fragment>;
