/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { EdozoLogo2 } from '../EdozoLogo2';
import { Context, Header } from './Header';
import { Menu } from './Menu';
import { AppHeader, AppHeaderProps } from './AppHeader';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<Context> = args => <Header {...args} />;

export const LogoOnly = Template.bind({});
LogoOnly.args = {
  children: <EdozoLogo2 appName="Unicorns" />,
};

export const ControlledAppHeader: Story<AppHeaderProps> = args => (
  <AppHeader appName={args.appName} logout={args.logout}>
    <Fragment>
      <Menu.Item>
        <a className="active">Create a unicorn</a>
      </Menu.Item>
      <Menu.Item>
        <a>My unicorns</a>
      </Menu.Item>
      <Menu.Item>
        <a>Unicorn centre</a>
      </Menu.Item>
    </Fragment>
  </AppHeader>
);

ControlledAppHeader.args = {
  appName: 'maps',
  logout: () => console.log('app specific logout method'),
};
