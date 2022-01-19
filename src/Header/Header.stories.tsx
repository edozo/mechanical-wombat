/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { SwitchAppIcon, LogoutIcon } from '../Icons';
import { EdozoLogo } from '../EdozoLogo';
import { Header } from './Header';
import { Menu } from '../Menu';
import { Popover } from '../Popover';
import { List, ListItem } from '../List';
import { ButtonV2 } from '../ButtonV2';
import { ReactComponent as SwitchAppIconColour } from './switch-app-icon-color.svg';
import { ItemWrapper, ListItemWrapper, StyledButtonTitle, StyledText, SwitchAppWrapper } from './Header.styles';
import { EdozoLogo2 } from '../EdozoLogo2';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story = args => <Header {...args} />;

export const LogoOnly = Template.bind({});
LogoOnly.args = {
  children: <EdozoLogo appName="Unicorns" />,
};

export const WithMenu = Template.bind({});
WithMenu.args = {
  children: (
    <Fragment>
      <EdozoLogo appName="Unicorns" />
      <Menu>
        <Menu.ItemWrapper>
          <a className="active" href="">
            Create a unicorn
          </a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper>
          <a href="">My unicorns</a>
        </Menu.ItemWrapper>
        <Menu.PlatformMenu>
          <Menu.PlatformButton onClick={() => console.log('click')}>
            <SwitchAppIcon size="small" />
          </Menu.PlatformButton>

          <Menu.PlatformButton onClick={() => console.log('click')}>
            <LogoutIcon size="small" />
          </Menu.PlatformButton>
        </Menu.PlatformMenu>
      </Menu>
    </Fragment>
  ),
};

export const WithMenuPopover = Template.bind({});
WithMenuPopover.args = {
  children: (
    <Fragment>
      <EdozoLogo appName="Unicorns" />
      <Menu>
        <Menu.ItemWrapper>
          <a className="active" href="">
            Create a unicorn
          </a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper>
          <a href="">My unicorns</a>
        </Menu.ItemWrapper>
        <Menu.PlatformMenu>
          <div>
            <Popover
              placement="top-end"
              interactive
              interactiveBorder={10}
              visible
              content={
                <List>
                  <ListItem onClick={() => console.log('Do a thing')}>Edozo Comps</ListItem>
                  <ListItem onClick={() => console.log('Do a thing')}>Help centre</ListItem>
                </List>
              }
            >
              <div>
                <Menu.PlatformButton onClick={() => console.log('click')}>
                  <SwitchAppIcon size="small" />
                </Menu.PlatformButton>
              </div>
            </Popover>
          </div>
          <Menu.PlatformButton onClick={() => console.log('click')}>
            <LogoutIcon size="small" />
          </Menu.PlatformButton>
        </Menu.PlatformMenu>
      </Menu>
    </Fragment>
  ),
};

export const WithNewMenuPopover = Template.bind({});
WithNewMenuPopover.args = {
  children: (
    <Fragment>
      <EdozoLogo2 appName="maps" size="standard" />
      <Menu>
        <Menu.ItemWrapper>
          <a className="active" href="">
            Create a unicorn
          </a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper>
          <a href="">My unicorns</a>
        </Menu.ItemWrapper>
        <Menu.PlatformMenu>
          <div>
            <Popover
              placement="top-end"
              interactive
              interactiveBorder={10}
              visible
              content={
                <List>
                  <ListItemWrapper>
                    <ListItem onClick={() => console.log('Do a thing')}>
                      <ItemWrapper>
                        <EdozoLogo2 appName="maps" size="small" />
                        <StyledText>Text</StyledText>
                      </ItemWrapper>
                    </ListItem>
                  </ListItemWrapper>
                  <ListItemWrapper>
                    <ListItem onClick={() => console.log('Do a thing')}>
                      <ItemWrapper>
                        <EdozoLogo2 appName="occupiers" size="small" />
                        <StyledText>Text</StyledText>
                      </ItemWrapper>
                    </ListItem>
                  </ListItemWrapper>
                  <ListItemWrapper>
                    <ListItem onClick={() => console.log('Do a thing')}>
                      <ItemWrapper>
                        <EdozoLogo2 appName="insight" size="small" />
                        <StyledText>Text</StyledText>
                      </ItemWrapper>
                    </ListItem>
                  </ListItemWrapper>
                  <ListItem onClick={() => console.log('Do a thing')}>
                    <ItemWrapper>
                      <EdozoLogo2 appName="helpCentre" size="small" />
                      <StyledText>Text</StyledText>
                    </ItemWrapper>
                  </ListItem>
                </List>
              }
            >
              <div>
                <ButtonV2 onClick={() => console.log('click')} variant="white" size="small" radius="round">
                  <SwitchAppWrapper>
                    <SwitchAppIconColour />
                    <StyledButtonTitle>Products</StyledButtonTitle>
                  </SwitchAppWrapper>
                </ButtonV2>
              </div>
            </Popover>
          </div>
          <Menu.PlatformButton onClick={() => console.log('click')}>
            <LogoutIcon size="small" />
          </Menu.PlatformButton>
        </Menu.PlatformMenu>
      </Menu>
    </Fragment>
  ),
};
