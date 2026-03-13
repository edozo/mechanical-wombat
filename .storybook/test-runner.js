/**
 * @storybook/test-runner configuration.
 *
 * Only run tests on stories that have an explicit play function.
 * Storybook 9 automatically applies the "play-fn" tag to any story
 * with a play function, so no manual tagging is needed. Stories
 * without a play function are skipped entirely (no smoke tests).
 *
 * Uses CJS module.exports because the test-runner loads this file
 * via serverRequire (CJS require) — ESM export default will not work.
 */
module.exports = {
  tags: {
    include: ['play-fn'],
  },
};
