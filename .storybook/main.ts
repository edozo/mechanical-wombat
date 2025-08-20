import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-docs'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (viteConfig) => {
    const svgrPlugin = svgr({
      svgrOptions: { exportType: 'named' },
      include: '**/*.svg',
    });

    // run SVGR before other plugins so it intercepts SVG imports
    viteConfig.plugins = [svgrPlugin, ...(viteConfig.plugins || [])];
    return viteConfig;
  }
};

export default config;
