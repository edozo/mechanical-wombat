import React, { PropsWithChildren } from 'react';
import { CircleUserRound, LogOut } from 'lucide-react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ProductSwitchV2 } from 'HeaderV2/ProductSwitch';
import { MenuV2 } from 'HeaderV2/Menu';
import { HeaderV2 } from 'HeaderV2/HeaderV2';
import { LucideIcon } from 'LucideIcons';
import { StyledNavContent, StyledNavIconTrigger, StyledNavItem } from 'HeaderV2/Menu/MenuV2.styles';
import { StyledLogoutButton, StyledUserInfo } from 'HeaderV2/AppHeaderV2/AppHeaderV2.styles';
import { AppName } from 'EdozoLogoV2';

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

export interface ProductInfo {
  appName: AppName;
  description: string;
  url: string;
  disabled?: boolean;
}

export interface AppHeaderV2Props {
  logout: () => void;
  logoSection: React.ReactNode;
  isAuthenticated?: boolean;
  edozoProducts?: ProductInfo[];
  openOnClickOnly?: boolean;
  /** The logged-in user identifier shown in the account dropdown. May be a name or email address. */
  user?: string;
}

export const AppHeaderV2: React.FC<PropsWithChildren<AppHeaderV2Props>> = ({
  logoSection,
  logout,
  isAuthenticated,
  edozoProducts = defaultProducts,
  children,
  openOnClickOnly = true,
  user,
}) => (
  <HeaderV2>
    {logoSection}
    {isAuthenticated && (
      <MenuV2 openOnClickOnly={openOnClickOnly} closeOnOutsideClickOnly>
        {children}
        <ProductSwitchV2
          edozoProducts={edozoProducts}
          triggerProps={
            openOnClickOnly
              ? {
                  onPointerMove: event => event.preventDefault(),
                  onPointerLeave: event => event.preventDefault(),
                }
              : undefined
          }
        />
        <StyledNavItem>
          <StyledNavIconTrigger
            aria-label="Account menu"
            onPointerMove={openOnClickOnly ? event => event.preventDefault() : undefined}
            onPointerLeave={openOnClickOnly ? event => event.preventDefault() : undefined}
          >
            <LucideIcon icon={CircleUserRound} size="md" aria-hidden="true" />
          </StyledNavIconTrigger>
          <StyledNavContent>
            {user && <StyledUserInfo>{user}</StyledUserInfo>}
            <NavigationMenu.Link asChild>
              <StyledLogoutButton type="button" onClick={logout} data-testid="logoutButton">
                <LucideIcon icon={LogOut} size="sm" aria-hidden="true" />
                Logout
              </StyledLogoutButton>
            </NavigationMenu.Link>
          </StyledNavContent>
        </StyledNavItem>
      </MenuV2>
    )}
  </HeaderV2>
);
