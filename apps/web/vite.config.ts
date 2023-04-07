import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import generouted from '@generouted/solid-router/plugin'
import postcssPresetEnv from 'postcss-preset-env'

export default defineConfig({
  plugins: [
    UnoCSS(),
    solid(),
    generouted(),
  ],
  css: {
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
  resolve: { alias: { '~': '/src' } },
})
