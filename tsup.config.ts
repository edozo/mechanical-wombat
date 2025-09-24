import { defineConfig } from 'tsup';
import svgr from 'esbuild-plugin-svgr';

export default defineConfig({
  entry: ['src/index.tsx'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: false,
  sourcemap: false,
  clean: true,
  treeshake: true,
  splitting: false,
  minify: false,
  platform: 'browser',
  target: 'es2020',
  shims: false,
  loader: {
    '.svg': 'tsx',
  },
  esbuildPlugins: [
    svgr({
      exportType: 'default',
      typescript: true,
      runtimeConfig: true,
    }),
  ],
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' };
  },
});
