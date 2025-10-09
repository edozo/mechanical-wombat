import React from 'react';
import { ProductSwitch } from './ProductSwitch';
import { LogoutIcon } from '../Icons';
import { Menu } from './Menu';
import { AppName, Context, Header } from './Header';

export interface ProductInfo {
  appName: AppName;
  description: string;
  url: string;
  disabled?: boolean;
}

const defaultProducts: ProductInfo[] = [
  {
    appName: 'maps',
    description: 'Create best in class OS mapping with single click technology',
    url: 'https://maps.edozo.com/',
  },
  {
    appName: 'occupiers',
    description: 'Create plans and see occupiers for all use classes',
    url: 'https://occupiers.edozo.com/',
  },
  {
    appName: 'insight',
    description: 'Find thousands of commercial property transaction comps',
    url: 'https://insight.edozo.com/',
  },
  {
    appName: 'reports',
    description: 'Create automated valuation reports',
    url: 'https://reports.edozo.com/',
  },
];

export interface AppHeaderProps extends Context {
  logout: () => void;
  logoSection: React.ReactNode;
  isAuthenticated?: boolean;
  edozoProducts?: ProductInfo[];
  children?: React.ReactNode;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  appName = 'edozo',
  logoSection,
  logout,
  isAuthenticated,
  edozoProducts = defaultProducts,
  children,
}) => (
  <Header appName={appName}>
    {logoSection}
    {isAuthenticated && (
      <Menu>
        {children}
        <Menu.PlatformMenu>
          <ProductSwitch edozoProducts={edozoProducts} appName={appName} />
          <Menu.PlatformButton onClick={logout} data-testid="logoutButton">
            <LogoutIcon size="small" />
          </Menu.PlatformButton>
        </Menu.PlatformMenu>
      </Menu>
    )}
  </Header>
);
