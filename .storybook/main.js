module.exports = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: [{
              name: '@storybook/addon-essentials',
              options: {
                toolbars: false,
              }
          }, 
          "storybook-addon-styled-component-theme/dist/register"]
};