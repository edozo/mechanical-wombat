import { Fragment } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AppHeaderV2, AppHeaderV2Props } from 'HeaderV2/AppHeaderV2';
import { EdozoLogo } from 'EdozoLogo';
import type { LogoVariants } from 'EdozoLogo';
import { MenuV2 } from 'HeaderV2/Menu';

export default {
  title: 'Components/HeaderV2',
  component: AppHeaderV2,
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
