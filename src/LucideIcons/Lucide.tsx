import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import { LucideIconWrapper } from './Lucide.styles';

export type LucideIconSize = 'sm' | 'md' | 'lg';

export type LucideIconProps = Omit<React.SVGProps<SVGSVGElement>, 'color' | 'width' | 'height' | 'stroke'> & {
  size?: LucideIconSize;
  color?: string;
};

type LucideIconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const renderLucideIcon = (
  IconComponent: LucideIconComponent,
  { size = 'md', color, ...props }: LucideIconProps,
  theme?: DefaultTheme,
) => (
  <LucideIconWrapper size={size}>
    <IconComponent
      {...props}
      fill="none"
      stroke={color || theme?.colors?.grayDarker}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </LucideIconWrapper>
);

export const createLucideIcon = (IconComponent: LucideIconComponent) => {
  const WrappedIcon: React.FC<LucideIconProps> = props => {
    const theme = useTheme();
    return renderLucideIcon(IconComponent, props, theme);
  };
  return WrappedIcon;
};

export type LucideIconWrapperProps = LucideIconProps & {
  icon: LucideIconComponent;
};

export const LucideIcon: React.FC<LucideIconWrapperProps> = ({ icon, ...props }) => {
  const theme = useTheme();
  return renderLucideIcon(icon, props, theme);
};
