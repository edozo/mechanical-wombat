/**
 * jest-playwright configuration for @storybook/test-runner.
 *
 * The test-runner uses SERVER mode: globalSetup launches one shared Chromium
 * browser server and all test workers connect to it. This file configures
 * that server launch — testEnvironmentOptions in the Jest config only applies
 * to per-test LAUNCH mode and is not the right hook here.
 *
 * --no-sandbox          Required in Docker containers (CircleCI) where
 *                       Chrome's sandbox is unavailable.
 * --disable-dev-shm-usage  Docker limits /dev/shm to 64 MB; this flag tells
 *                       Chrome to use /tmp instead, preventing OOM crashes.
 *
 * @see https://github.com/storybookjs/test-runner
 */
module.exports = {
  launchOptions: {
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  },
};
