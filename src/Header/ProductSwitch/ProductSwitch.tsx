import React, { useState } from 'react';
import { ProductInfo } from '../AppHeader';
import { SwitchAppIconColour } from '../../Icons';
import { ItemWrapper, StyledButtonTitle, StyledButtonV2, StyledNewBadge, StyledText } from './ProductSwitch.styles';
import { List } from '../../List';
import { Popover } from '../../Popover';
import { EdozoLogo } from '../../EdozoLogo';

export const ProductSwitch: React.FC<any> = ({ edozoProducts, appName }) => {
  const [platformAppPopover, setPlatformAppPopover] = useState(false);
  const showPopover = (): void => setPlatformAppPopover(true);
  const hidePopover = (): void => setPlatformAppPopover(false);

  const linkHandler = (product: ProductInfo): boolean | void => {
    const { stageUrl, productionUrl } = product;
    const { hostname } = window.location;
    if (hostname === 'localhost') {
      // eslint-disable-next-line no-restricted-globals, no-alert
      if (confirm('You are being taken away from your local environment')) {
        window.open(stageUrl, '_blank');
        return false;
      }
      return false;
    }
    const [, , topLevelDomain] = hostname.split('.');
    topLevelDomain === 'co' ? window.open(stageUrl, '_blank') : window.open(productionUrl, '_blank');
    hidePopover();
  };

  return (
    <div>
      <Popover
        placement="top-end"
        interactive
        interactiveBorder={10}
        visible={platformAppPopover}
        maxWidth={394}
        onClickOutside={hidePopover}
        content={
          <div style={{ margin: '10px 0', borderRadius: 'inherit' }}>
            <List variant="platform">
              {edozoProducts.map((product: any) => (
                <List.Item
                  key={product.productionUrl}
                  onClick={() => linkHandler(product)}
                  disabled={product.disabled || appName === product.appName}
                >
                  <ItemWrapper>
                    <EdozoLogo size="small" variant={product.appName} />
                    <StyledText>{product.description}</StyledText>
                  </ItemWrapper>
                </List.Item>
              ))}
            </List>
          </div>
        }
      >
        <div>
          <StyledButtonV2 onClick={platformAppPopover ? hidePopover : showPopover} radius="round" variant="white">
            <SwitchAppIconColour size="small" />
            <StyledButtonTitle>Products</StyledButtonTitle>
            <StyledNewBadge color="#ffffff" background="#2818f9" size="small">
              NEW
            </StyledNewBadge>
          </StyledButtonV2>
        </div>
      </Popover>
    </div>
  );
};
