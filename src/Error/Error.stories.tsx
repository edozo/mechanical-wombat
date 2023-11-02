import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { Error } from './Error';
import { ErrorColumn } from './ErrorColumn';
import { Ring } from './Ring';
import { ErrorInfo } from './ErrorInfo';
import { NotFound as NotFoundUI } from './usage/NotFound';
import { GenericError as GenericErrorUI } from './usage/GenericError';
import { Button } from '../Button';

export default {
  title: 'OccupierPlans/Error',
  component: Error,
  argTypes: {},
} as Meta;

const Template: Story = args => (
  <div
    style={{
      display: 'flex',
      border: '1px dotted lightgray',
      minHeight: '1000px',
      maxWidth: '2000px',
      alignItems: 'stretch',
      justifyContent: 'stretch',
      flexDirection: 'column',
    }}
  >
    <Error {...args} />
  </div>
);

export const Teapot = Template.bind({});
Teapot.args = {
  children: (
    <Fragment>
      <ErrorColumn>
        <ErrorInfo foregroundMessage="I'm a teapot" backgroundMessage="418">
          <div style={{ marginBottom: '50px' }}>
            <p>The server refuses to brew coffee because it is, permanently, a teapot.</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418" target="_blank" rel="noreferrer">
              read more...
            </a>
          </div>
          <Button>Take me to the coffee maker</Button>
        </ErrorInfo>
      </ErrorColumn>
      <ErrorColumn>
        <Ring opacity={0.2} padding="56px">
          <Ring opacity={0.4} padding="44px">
            <Ring opacity={0.7} padding="18px">
              <div
                style={{
                  margin: '30px',
                  width: '175px',
                  height: '175px',
                  display: 'flex',
                }}
              >
                <img
                  src="https://www.cornishware.co.uk/tco-images/unsafe/fit-in/500x500/filters:upscale():fill(white)/https://www.cornishware.co.uk/static/media/catalog/product/8/6/860036cb_blue_betty_teapot_large_49oz-140cl.png"
                  alt="teapot"
                />
              </div>
            </Ring>
          </Ring>
        </Ring>
      </ErrorColumn>
    </Fragment>
  ),
};

export const Permissions = Template.bind({});
Permissions.args = {
  children: (
    <Fragment>
      <ErrorColumn>
        <ErrorInfo>
          <div>
            <p>You do not have access to edozo admin, please contact someone that can change your permissions.</p>
          </div>
          <Button>Logout</Button>
        </ErrorInfo>
      </ErrorColumn>
    </Fragment>
  ),
};

export const NotFound = Template.bind({});
NotFound.args = {
  children: <NotFoundUI />,
};

export const ErrorBoundary = Template.bind({});
ErrorBoundary.args = {
  children: <GenericErrorUI />,
};
