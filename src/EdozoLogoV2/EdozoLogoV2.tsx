import React, { forwardRef } from 'react';
import EdozoLogoSvg from 'EdozoLogo/assets/edozo-logo.svg';
import { AppNameText, LogoV2Wrapper, StyledLogoV2 } from 'EdozoLogoV2/EdozoLogoV2.styles';

export type AppName = 'edozo' | 'maps' | 'occupiers' | 'insight' | 'reports' | 'extract';

export interface EdozoLogoV2Props extends React.HTMLAttributes<HTMLDivElement> {
  /** App name displayed as text alongside the Edozo wordmark. */
  appName: AppName;
  /** Visual size of the logo. */
  size?: 'small' | 'standard';
}

export const EdozoLogoV2 = forwardRef<HTMLDivElement, EdozoLogoV2Props>(
  ({ appName, size = 'standard', ...rest }, ref) => {
    const isEdozo = appName === 'edozo';
    return (
      <LogoV2Wrapper ref={ref} {...rest}>
        <StyledLogoV2 $size={size}>
          <EdozoLogoSvg />
        </StyledLogoV2>
        {!isEdozo && <AppNameText $size={size}>{appName}</AppNameText>}
      </LogoV2Wrapper>
    );
  },
);

EdozoLogoV2.displayName = 'EdozoLogoV2';
