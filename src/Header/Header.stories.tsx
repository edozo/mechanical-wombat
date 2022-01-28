/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { SwitchAppIcon, LogoutIcon } from '../Icons';
import { EdozoLogo2 } from '../EdozoLogo2';
import { Header } from './Header';
import { Menu } from '../Menu';
import { Popover } from '../Popover';
import { List } from '../List';
import { ReactComponent as SwitchAppIconColour } from './switch-app-icon-color.svg';
import {
  ItemWrapper,
  StyledButtonTitle,
  StyledNewBadge,
  StyledText,
  SwitchAppWrapper,
} from '../ProductSwitch/ProductSwitch.styles';
import { ButtonV2 } from '../ButtonV2';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story = args => <Header {...args} />;

export const LogoOnly = Template.bind({});
LogoOnly.args = {
  children: <EdozoLogo2 appName="Unicorns" />,
};

export const MapsWithMenu = Template.bind({});
MapsWithMenu.args = {
  children: (
    <Fragment>
      <EdozoLogo2 appName="maps" />
      <Menu>
        <Menu.ItemWrapper appName="maps">
          <a className="active" href="">
            Create a unicorn
          </a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper appName="maps">
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

export const MapsWithMenuPopover = Template.bind({});
MapsWithMenuPopover.args = {
  appName: 'maps',
  children: (
    <Fragment>
      <EdozoLogo2 appName="maps" />
      <Menu>
        <Menu.ItemWrapper appName="maps">
          <a className="active" href="">
            Create a unicorn
          </a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper appName="maps">
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
                  <List.Item onClick={() => console.log('Do a thing')}>Edozo Comps</List.Item>
                  <List.Item onClick={() => console.log('Do a thing')}>Help centre</List.Item>
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

export const OccupiersWithMenu = Template.bind({});
OccupiersWithMenu.args = {
  appName: 'occupiers',
  children: (
    <Fragment>
      <EdozoLogo2 appName="occupiers" />
      <Menu>
        <Menu.ItemWrapper appName="occupiers">
          <a className="active" href="">
            Create a unicorn
          </a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper appName="occupiers">
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

export const OccupiersWithMenuPopover = Template.bind({});
OccupiersWithMenuPopover.args = {
  appName: 'occupiers',
  children: (
    <Fragment>
      <EdozoLogo2 appName="occupiers" />
      <Menu>
        <Menu.ItemWrapper appName="occupiers">
          <a className="active" href="">
            Create a unicorn
          </a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper appName="occupiers">
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
                  <List.Item onClick={() => console.log('Do a thing')}>Edozo Comps</List.Item>
                  <List.Item onClick={() => console.log('Do a thing')}>Help centre</List.Item>
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

export const InsightWithMenu = Template.bind({});
InsightWithMenu.args = {
  appName: 'insight',
  children: (
    <Fragment>
      <EdozoLogo2 appName="insight" />
      <Menu>
        <Menu.ItemWrapper appName="insight">
          <a className="active" href="">
            Create a unicorn
          </a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper appName="insight">
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

export const InsightWithMenuPopover = Template.bind({});
InsightWithMenuPopover.args = {
  appName: 'insight',
  children: (
    <Fragment>
      <EdozoLogo2 appName="insight" />
      <Menu>
        <Menu.ItemWrapper appName="insight">
          <a className="active" href="">
            Create a unicorn
          </a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper appName="insight">
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
                  <List.Item onClick={() => console.log('Do a thing')}>Edozo Comps</List.Item>
                  <List.Item onClick={() => console.log('Do a thing')}>Help centre</List.Item>
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
      <EdozoLogo2 appName="maps" />
      <Menu>
        <Menu.ItemWrapper appName="maps">
          <a className="active" href="">
            Create a unicorn
          </a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper appName="maps">
          <a href="">My unicorns</a>
        </Menu.ItemWrapper>
        <Menu.ItemWrapper appName="maps">
          <a href="" onClick={() => console.log('Do a thing')}>
            Unicorn centre
          </a>
        </Menu.ItemWrapper>
        <Menu.PlatformMenu>
          <div>
            <Popover
              placement="top-end"
              interactive
              interactiveBorder={10}
              visible
              content={
                <div style={{ margin: '10px 0', borderRadius: 'inherit' }}>
                  <List variant="platform">
                    <List.Item onClick={() => console.log('Do a thing')} disabled>
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
          <Menu.PlatformButton onClick={() => console.log('click')}>
            <LogoutIcon size="small" />
          </Menu.PlatformButton>
        </Menu.PlatformMenu>
      </Menu>
    </Fragment>
  ),
};
