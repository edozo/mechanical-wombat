import React from 'react';
// import { Logo } from './EdozoLogo2.styles';
import { ReactComponent as EdozoLogo } from './edozo-logo.svg';
import { ReactComponent as InsightLogo } from './insight-logo.svg';
import { ReactComponent as OccupiersLogo } from './occupiers-logo.svg';
import { ReactComponent as MapsLogo } from './maps-logo.svg';
import { ReactComponent as HelpCentreLogo } from './help-centre-logo.svg';

export interface Props {
  appName?: 'maps' | 'insight' | 'occupiers' | 'helpCentre' | 'edozo';
}

const switchLogo = (appName: Props): any => {
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

export const EdozoLogo2: React.FC<Props> = ({ appName = 'edozo' }: Props) => (
  <div>
    {/* <Logo data-testid="edozoLogo" /> */}
    {switchLogo(appName)}
  </div>
);
