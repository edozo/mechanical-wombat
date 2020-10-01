module.exports = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: [{
              name: '@storybook/addon-essentials',
              options: {
                actions: false,
                controls: false,
                toolbars: false,
              }
          }, 
          "storybook-addon-styled-component-theme/dist/register"]
};