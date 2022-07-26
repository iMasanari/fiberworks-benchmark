import path from 'path'
import babel, { RollupBabelInputPluginOptions } from '@rollup/plugin-babel'
import { defineConfig } from 'vite'

const babelOptions: RollupBabelInputPluginOptions = {
  extensions: ['.tsx'],
  babelHelpers: 'bundled',
  presets: [
    ['@babel/preset-react', {
      runtime: 'automatic',
      importSource: '@imasanari/fiberworks',
    }],
  ],
  sourceMaps: 'inline',
}

export default defineConfig({
  base: '/fiberworks-benchmark/',
  resolve: {
    alias: {
      '~/': path.join(__dirname, 'src/'),
    },
  },
  esbuild: {
    jsx: 'preserve',
  },
  plugins: [
    babel(babelOptions),
  ],
  worker: {
    plugins: [
      babel(babelOptions),
    ],
  },
})
