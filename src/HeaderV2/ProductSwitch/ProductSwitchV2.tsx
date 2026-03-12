import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ProductInfo } from 'HeaderV2/AppHeaderV2';
import { ItemWrapper, ProductsButtonLabel, StyledText } from 'HeaderV2/ProductSwitch/ProductSwitchV2.styles';
import { List } from 'List';
import { LucideIcon } from 'LucideIcons';
import { StyledNavContent, StyledNavItem, StyledNavTrigger } from 'HeaderV2/Menu/MenuV2.styles';
import { EdozoLogoV2 } from 'EdozoLogoV2';

interface Props {
  edozoProducts: ProductInfo[];
  triggerProps?: React.ComponentPropsWithoutRef<'button'>;
}

export const ProductSwitchV2: React.FC<Props> = ({ edozoProducts, triggerProps }) => {
  const linkHandler = (product: ProductInfo) => {
    window.open(product.url, '_blank');
  };

  return (
    <StyledNavItem>
      <StyledNavTrigger {...triggerProps}>
        <ProductsButtonLabel>Products</ProductsButtonLabel>
        <LucideIcon icon={ChevronDown} size="sm" aria-hidden="true" />
      </StyledNavTrigger>
      <StyledNavContent>
        <List variant="platform">
          {edozoProducts.map((product) => (
            <List.Item key={product.url} onClick={() => linkHandler(product)} disabled={product.disabled}>
              <ItemWrapper>
                <EdozoLogoV2 size="small" appName={product.appName} />
                <StyledText>{product.description}</StyledText>
              </ItemWrapper>
            </List.Item>
          ))}
        </List>
      </StyledNavContent>
    </StyledNavItem>
  );
};
