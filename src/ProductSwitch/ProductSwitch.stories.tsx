/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { ProductSwitch } from './ProductSwitch';
import { Menu } from '../Menu';
import { Popover } from '../Popover';
import { List, ListItem } from '../List';
import { ReactComponent as SwitchAppIconColour } from '../Header/switch-app-icon-color.svg';
import { ItemWrapper, StyledButtonTitle, StyledText, SwitchAppWrapper } from './ProductSwitch.styles';
import { EdozoLogo2 } from '../EdozoLogo2';
import { ButtonWithBadge } from '../ButtonWithBadge';

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
                    <ListItem onClick={() => console.log('Do a thing')} variant="platform">
                      <ItemWrapper>
                        <EdozoLogo2 appName="maps" />
                        <StyledText>Text</StyledText>
                      </ItemWrapper>
                    </ListItem>
                    <ListItem onClick={() => console.log('Do a thing')} variant="platform">
                      <ItemWrapper>
                        <EdozoLogo2 appName="occupiers" />
                        <StyledText>Text</StyledText>
                      </ItemWrapper>
                    </ListItem>
                    <ListItem onClick={() => console.log('Do a thing')} variant="platform">
                      <ItemWrapper>
                        <EdozoLogo2 appName="insight" />
                        <StyledText>Text</StyledText>
                      </ItemWrapper>
                    </ListItem>
                  </List>
                </div>
              }
            >
              <div>
                <ButtonWithBadge onClick={() => console.log('click')} badge="NEW">
                  <SwitchAppWrapper>
                    <SwitchAppIconColour />
                    <StyledButtonTitle>Products</StyledButtonTitle>
                  </SwitchAppWrapper>
                </ButtonWithBadge>
              </div>
            </Popover>
          </div>
        </Menu.PlatformMenu>
      </Menu>
    </Fragment>
  ),
};
