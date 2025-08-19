/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AppHeader, AppHeaderProps } from './AppHeader';
import { EdozoLogo } from '../EdozoLogo';
import type { LogoVariants } from '../EdozoLogo';
import { Menu } from './Menu';

export default {
  title: 'Components/Header',
  component: AppHeader,
} as Meta;

export const Default: StoryFn = () => (
  <AppHeader appName="edozo" logoSection={<EdozoLogo variant={"edozo" as LogoVariants} size="small" />} logout={() => {}} />
);

export const ControlledAppHeader: StoryFn<AppHeaderProps> = args => (
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