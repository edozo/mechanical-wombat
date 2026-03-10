import type { TestRunnerConfig } from '@storybook/test-runner';

/**
 * Only run tests on stories that have an explicit play function.
 * Storybook 9 automatically applies the "play-fn" tag to any story
 * with a play function, so no manual tagging is needed. Stories
 * without a play function are skipped entirely (no smoke tests).
 */
const config: TestRunnerConfig = {
  tags: {
    include: ['play-fn'],
  },
};

export default config;
