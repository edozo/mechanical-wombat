/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { ProductSwitch } from './ProductSwitch';
import { Menu } from '../Menu';
import { Popover } from '../Popover';
import { List } from '../List';
import { ReactComponent as SwitchAppIconColour } from '../Header/switch-app-icon-color.svg';
import { ItemWrapper, StyledButtonTitle, StyledNewBadge, StyledText, SwitchAppWrapper } from './ProductSwitch.styles';
import { EdozoLogo2 } from '../EdozoLogo2';
import { ButtonV2 } from '../ButtonV2';

export default {
  title: 'Components/ProductSwitch',
  component: ProductSwitch,
} as Meta;

const Template: Story = args => <ProductSwitch {...args} />;

export const ProductSwitchWithPopover = Template.bind({});
ProductSwitchWithPopover.args = {
  children: (
    <Fragment>
      <Menu>
        <Menu.PlatformMenu>
          <div>
            <Popover
              placement="top-end"
              interactive
              interactiveBorder={10}
              visible
              content={
                <div style={{ margin: '10px 0' }}>
                  <List variant="platform">
                    <List.Item onClick={() => console.log('Do a thing')}>
                      <ItemWrapper>
                        <EdozoLogo2 appName="maps" />
                        <StyledText>Text</StyledText>
                      </ItemWrapper>
                    </List.Item>
                    <List.Item onClick={() => console.log('Do a thing')}>
                      <ItemWrapper>
                        <EdozoLogo2 appName="occupiers" />
                        <StyledText>Text</StyledText>
                      </ItemWrapper>
                    </List.Item>
                    <List.Item onClick={() => console.log('Do a thing')}>
                      <ItemWrapper>
                        <EdozoLogo2 appName="insight" />
                        <StyledText>Text</StyledText>
                      </ItemWrapper>
                    </List.Item>
                  </List>
                </div>
              }
            >
              <div>
                <ButtonV2 onClick={() => console.log('click')} radius="round" variant="white">
                  <SwitchAppWrapper>
                    <SwitchAppIconColour />
                    <StyledButtonTitle>Products</StyledButtonTitle>
                  </SwitchAppWrapper>
                  <StyledNewBadge color="#ffffff" background="#2818f9" size="small">
                    NEW
                  </StyledNewBadge>
                </ButtonV2>
              </div>
            </Popover>
          </div>
        </Menu.PlatformMenu>
      </Menu>
    </Fragment>
  ),
};
