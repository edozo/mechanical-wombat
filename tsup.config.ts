import { defineConfig } from 'tsup';
import svgr from 'esbuild-plugin-svgr';
import path from 'path';
import { promises as fs } from 'fs';

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
  esbuildPlugins: [
    svgr({
      exportType: 'named',
    }),
    {
      name: 'svg-url-loader',
      setup(build) {
        build.onResolve({ filter: /\.svg\?url$/ }, args => ({
          path: path.join(args.resolveDir, args.path.replace(/\?url$/, '')),
          namespace: 'svg-url-ns',
        }));
        build.onLoad({ filter: /\.svg$/, namespace: 'svg-url-ns' }, async args => {
          const contents = await fs.readFile(args.path);
          return { contents, loader: 'file' };
        });
      },
    } as any,
  ],
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' };
  },
});
