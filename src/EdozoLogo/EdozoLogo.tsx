import React, { ReactNode } from 'react';
import { ReactComponent as EdozoLogoSvg } from './assets/edozo-logo.svg';
import { ReactComponent as InsightLogo } from './assets/insight-logo.svg';
import { ReactComponent as OccupiersLogo } from './assets/occupiers-logo.svg';
import { ReactComponent as MapsLogo } from './assets/maps-logo.svg';
import { ReactComponent as HelpCentreLogo } from './assets/help-centre-logo.svg';
import { ReactComponent as ReportsLogo } from './assets/reports-logo.svg';
import { BetaBadge, LogoWrapper, StyledLogo } from './EdozoLogo.styles';

export type LogoVariants = 'edozo' | 'maps' | 'insight' | 'occupiers' | 'helpCentre' | 'reports';

export interface EdozoLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: LogoVariants;
  size?: 'small' | 'standard';
  beta?: boolean;
}

const switchLogo = ({ variant }: EdozoLogoProps): ReactNode => {
  switch (variant) {
    case 'maps':
      return <MapsLogo />;
    case 'occupiers':
      return <OccupiersLogo />;
    case 'insight':
      return <InsightLogo />;
    case 'helpCentre':
      return <HelpCentreLogo />;
    case 'reports':
      return <ReportsLogo />;
    default:
      return <EdozoLogoSvg />;
  }
};

export const EdozoLogo: React.FC<EdozoLogoProps> = ({ variant = 'edozo', size = 'standard', beta = false }) => (
  <LogoWrapper>
    <StyledLogo size={size} variant={variant}>
      {switchLogo({ variant })}
    </StyledLogo>
    {beta && <BetaBadge>beta</BetaBadge>}
  </LogoWrapper>
);
