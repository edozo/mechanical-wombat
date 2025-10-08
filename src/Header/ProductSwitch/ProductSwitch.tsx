import React, { useState } from 'react';
import { ProductInfo } from '../AppHeader';
import { SwitchAppIconColour } from '../../Icons';
import { ItemWrapper, StyledButtonTitle, StyledButtonV2, StyledText } from './ProductSwitch.styles';
import { List } from '../../List';
import { Popover } from '../../Popover';
import { EdozoLogo } from '../../EdozoLogo';
import { AppName } from 'Header/Header';

interface Props {
  edozoProducts: ProductInfo[];
  appName: AppName;
}

export const ProductSwitch: React.FC<Props> = ({ edozoProducts, appName }) => {
  const [platformAppPopover, setPlatformAppPopover] = useState(false);
  const showPopover = (): void => setPlatformAppPopover(true);
  const hidePopover = (): void => setPlatformAppPopover(false);

  const linkHandler = (product: ProductInfo): boolean | void => {
    const { url } = product;
    const { hostname } = window.location;
    if (hostname === 'localhost') {
      // eslint-disable-next-line no-restricted-globals, no-alert
      if (confirm('You are being taken away from your local environment')) {
        window.open(url, '_blank');
        return false;
      }
      return false;
    }

    window.open(url, '_blank');
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
              {edozoProducts.map(product => (
                <List.Item
                  key={product.url}
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
          </StyledButtonV2>
        </div>
      </Popover>
    </div>
  );
};
