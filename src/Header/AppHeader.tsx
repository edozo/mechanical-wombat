import React, { useState } from 'react';
import { ButtonV2 } from '../ButtonV2';
import { LogoutIcon, SwitchAppIconColour } from '../Icons';
import {
  ItemWrapper,
  StyledButtonTitle,
  StyledNewBadge,
  StyledText,
  SwitchAppWrapper,
} from './ProductSwitch/ProductSwitch.styles'; // TODO: ProductSwitcher still needs some work, will do another PR
import { List } from '../List';
import { Popover } from '../Popover';
import { EdozoLogo } from '../EdozoLogo';
import { Menu } from './Menu';
import { Context, Header } from './Header';

export interface ProductInfo {
  appName: string;
  description: string;
  productionUrl: string;
  stageUrl: string;
}

const defaultProducts: ProductInfo[] = [
  {
    appName: '',
    description: '',
    productionUrl: 'https://dashboard.edozo.com/',
    stageUrl: 'https://dashboard.edozo.co/',
  },
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
];

export interface AppHeaderProps extends Context {
  logout: () => void;
  logoSection: React.ReactNode;
  isAuthenticated?: boolean;
  edozoProducts?: ProductInfo[];
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  appName = '',
  logoSection,
  logout,
  isAuthenticated,
  edozoProducts = defaultProducts,
  children,
}) => {
  const [platformAppPopover, setPlatformAppPopover] = useState(false);
  const showPopover = (): void => setPlatformAppPopover(true);
  const hidePopover = (): void => setPlatformAppPopover(false);

  const linkHandler = (product: ProductInfo): boolean | void => {
    const { stageUrl, productionUrl } = product;
    const { hostname } = window.location;
    // eslint-disable-next-line no-restricted-globals
    if (hostname === 'localhost' && confirm('You are being taken away from your local environment')) {
      window.open(stageUrl, '_blank');
      return false;
    }
    const [, , topLevelDomain] = hostname.split('.');
    topLevelDomain === 'co' ? window.open(stageUrl, '_blank') : window.open(productionUrl, '_blank');
    hidePopover();
  };

  return (
    <Header appName={appName}>
      {logoSection}
      {isAuthenticated && (
        <Menu>
          {children}
          <Menu.PlatformMenu>
            <div>
              <Popover
                placement="top-end"
                interactive
                interactiveBorder={10}
                visible={platformAppPopover}
                onClickOutside={hidePopover}
                content={
                  <div style={{ margin: '10px 0', borderRadius: 'inherit' }}>
                    <List variant="platform">
                      {edozoProducts.map(product => (
                        <List.Item
                          key={product.productionUrl}
                          onClick={() => linkHandler(product)}
                          disabled={appName === product.appName}
                        >
                          <ItemWrapper>
                            <EdozoLogo appName={product.appName} />
                            <StyledText>{product.description}</StyledText>
                          </ItemWrapper>
                        </List.Item>
                      ))}
                    </List>
                  </div>
                }
              >
                <div>
                  <ButtonV2 onClick={platformAppPopover ? hidePopover : showPopover} radius="round" variant="white">
                    <SwitchAppWrapper>
                      <SwitchAppIconColour size="small" />
                      <StyledButtonTitle>Products</StyledButtonTitle>
                    </SwitchAppWrapper>
                    <StyledNewBadge color="#ffffff" background="#2818f9" size="small">
                      NEW
                    </StyledNewBadge>
                  </ButtonV2>
                </div>
              </Popover>
            </div>
            <Menu.PlatformButton onClick={logout} data-testid="logoutButton">
              <LogoutIcon size="small" />
            </Menu.PlatformButton>
          </Menu.PlatformMenu>
        </Menu>
      )}
    </Header>
  );
};
