import { defineConfig } from 'tsup';
import svgr from 'esbuild-plugin-svgr';
import { readFileSync } from 'fs';
import { resolve } from 'path';

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
    '.svg': 'file',
  },
  esbuildPlugins: [
    // Custom plugin to handle ?url imports
    {
      name: 'svg-url-loader',
      setup(build) {
        build.onResolve({ filter: /\.svg\?url$/ }, args => ({
          path: args.path.replace('?url', ''),
          namespace: 'svg-url',
        }));

        build.onLoad({ filter: /.*/, namespace: 'svg-url' }, args => {
          const sourceSvgPath = args.path.replace('./icons/', 'src/Icons/icons/');
          const fullSvgPath = resolve(process.cwd(), sourceSvgPath);

          try {
            const svgContent = readFileSync(fullSvgPath, 'utf8');
            const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svgContent).toString('base64')}`;
            return { contents: `export default "${dataUrl}";`, loader: 'js' };
          } catch {
            return { contents: `export default "";`, loader: 'js' };
          }
        });
      },
    },
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
