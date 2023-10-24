import React from 'react';
import { ProductSwitch } from './ProductSwitch';
import { LogoutIcon } from '../Icons';
import { Menu } from './Menu';
import { Context, Header } from './Header';

export interface ProductInfo {
  appName: string;
  description: string;
  productionUrl: string;
  stageUrl: string;
  disabled?: boolean;
}

const defaultProducts: ProductInfo[] = [
  {
    appName: 'maps',
    description: 'Create best in class OS mapping with single click technology',
    productionUrl: 'https://maps.edozo.com/',
    stageUrl: 'https://dev-maps.edozo.co/',
  },
  {
    appName: 'occupiers',
    description: 'Create plans and see occupiers for all use classes',
    productionUrl: 'https://occupiers.edozo.com/',
    stageUrl: 'https://occupiers.edozo.co/',
  },
  {
    appName: 'insight',
    description: 'Find thousands of commercial property transaction comps',
    productionUrl: 'https://app.edozo.com/',
    stageUrl: 'https://stage-rails.edozo.co/search',
  },
  {
    appName: 'reports',
    description: 'Create automated valuation reports',
    productionUrl: 'https://reports.edozo.com/',
    stageUrl: 'https://reports.edozo.co/',
  },
];

export interface AppHeaderProps extends Context {
  logout: () => void;
  logoSection: React.ReactNode;
  isAuthenticated?: boolean;
  edozoProducts?: ProductInfo[];
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
