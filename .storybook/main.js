module.exports = {
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