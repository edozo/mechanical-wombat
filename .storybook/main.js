module.exports = {
  babel: async (options) => ({
    ...options,
    plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
  }),
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: [
    {
      name: '@storybook/addon-essentials',
        options: {
          toolbars: false,
        }
    },
    "themeprovider-storybook/register"
  ]
};
