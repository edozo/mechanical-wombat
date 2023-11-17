/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { EdozoLogo, LogoVariants } from '../EdozoLogo';
import { Header } from './Header';
import { Menu } from './Menu';
import { AppHeader, AppHeaderProps } from './AppHeader';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

export const ControlledAppHeader: Story<AppHeaderProps> = args => (
  <AppHeader
    logoSection={
      <a>
        <EdozoLogo variant={args.appName as LogoVariants} />
      </a>
    }
    isAuthenticated={args.isAuthenticated}
    appName={args.appName}
    logout={args.logout}
  >
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
  appName: 'insight',
  isAuthenticated: true,
  logout: () => console.log('app specific logout method'),
};
