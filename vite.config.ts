import path from 'path'
import babel, { RollupBabelInputPluginOptions } from '@rollup/plugin-babel'
import { defineConfig, loadEnv } from 'vite'

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

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  const BASE_PATH = process.env.BASE_PATH

  return {
    base: BASE_PATH,
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
  }
})
