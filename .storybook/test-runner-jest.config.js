import { getJestConfig } from '@storybook/test-runner';

const defaultConfig = getJestConfig();

/**
 * Extend the default test-runner Jest config.
 *
 * --no-sandbox / --disable-dev-shm-usage are required in Docker-based CI
 * environments (e.g. CircleCI) where /dev/shm is limited to 64 MB and
 * Chrome's sandbox is unavailable. They are harmless in local development.
 *
 * @type {import('@jest/types').Config.InitialOptions}
 */
export default {
  ...defaultConfig,
  testEnvironmentOptions: {
    ...defaultConfig.testEnvironmentOptions,
    'jest-playwright': {
      ...defaultConfig.testEnvironmentOptions?.['jest-playwright'],
      launchOptions: {
        args: ['--no-sandbox', '--disable-dev-shm-usage'],
      },
    },
  },
};
