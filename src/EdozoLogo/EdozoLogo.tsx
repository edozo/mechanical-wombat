import React, { ReactNode } from 'react';
import EdozoLogoSvg from './assets/edozo-logo.svg';
import InsightLogo from './assets/insight-logo.svg';
import OccupiersLogo from './assets/occupiers-logo.svg';
import MapsLogo from './assets/maps-logo.svg';
import HelpCentreLogo from './assets/help-centre-logo.svg';
import ReportsLogo from './assets/reports-logo.svg';
import ExtractLogo from './assets/extract-logo.svg';
import { BetaBadge, LogoWrapper, StyledLogo } from './EdozoLogo.styles';

export type LogoVariants = 'edozo' | 'maps' | 'insight' | 'occupiers' | 'helpCentre' | 'reports' | 'extract';

export interface EdozoLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: LogoVariants;
  size?: 'small' | 'standard';
  beta?: boolean;
}

const logoMap: Record<LogoVariants, ReactNode> = {
  edozo: <EdozoLogoSvg />,
  maps: <MapsLogo />,
  occupiers: <OccupiersLogo />,
  insight: <InsightLogo />,
  helpCentre: <HelpCentreLogo />,
  reports: <ReportsLogo />,
  extract: <ExtractLogo />,
};

const switchLogo = ({ variant }: EdozoLogoProps): ReactNode => {
  return logoMap[variant] ?? <EdozoLogoSvg />;
};

export const EdozoLogo: React.FC<EdozoLogoProps> = ({ variant = 'edozo', size = 'standard', beta = false }) => (
  <LogoWrapper>
    <StyledLogo size={size} variant={variant}>
      {switchLogo({ variant })}
    </StyledLogo>
    {beta && <BetaBadge>beta</BetaBadge>}
  </LogoWrapper>
);
