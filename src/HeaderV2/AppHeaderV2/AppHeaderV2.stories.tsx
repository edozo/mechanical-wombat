import { Fragment } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AppHeaderV2, AppHeaderV2Props } from 'HeaderV2/AppHeaderV2';
import { EdozoLogo } from 'EdozoLogo';
import type { LogoVariants } from 'EdozoLogo';
import { EdozoLogoV2 } from 'EdozoLogoV2';
import { MenuV2 } from 'HeaderV2/Menu';

export default {
  title: 'Components/HeaderV2',
  component: AppHeaderV2,
  argTypes: {
    user: {
      description: 'Logged-in user identifier (name or email) shown in the account dropdown.',
      control: { type: 'text' },
    },
    isAuthenticated: {
      description: 'Whether to show the authenticated menu.',
      control: { type: 'boolean' },
    },
  },
} as Meta;

export const Default: StoryFn = () => (
  <AppHeaderV2 logoSection={<EdozoLogo variant={"edozo" as LogoVariants} size="small" />} logout={() => {}} />
);

export const ControlledAppHeader: StoryFn<AppHeaderV2Props> = args => (
  <AppHeaderV2
    logoSection={
      <a>
        <EdozoLogo variant={"edozo" as LogoVariants} />
      </a>
    }
    isAuthenticated={args.isAuthenticated}
    logout={args.logout}
    user={args.user}
  >
    <Fragment>
      <MenuV2.Item>
        <a className="active">Help</a>
      </MenuV2.Item>
      <MenuV2.Item>
        <a>Docs</a>
      </MenuV2.Item>
    </Fragment>
  </AppHeaderV2>
);

ControlledAppHeader.args = {
  isAuthenticated: true,
  logout: () => console.log('app specific logout method'),
};

export const MapsApp: StoryFn = () => (
  <AppHeaderV2
    logoSection={<EdozoLogoV2 appName="maps" />}
    isAuthenticated
    logout={() => {}}
  />
);

export const WithUser: StoryFn<AppHeaderV2Props> = args => (
  <AppHeaderV2
    logoSection={
      <a>
        <EdozoLogo variant={"edozo" as LogoVariants} />
      </a>
    }
    isAuthenticated
    logout={args.logout}
    user={args.user}
  />
);

WithUser.args = {
  logout: () => console.log('logout'),
  user: 'jane.smith@example.com',
};
