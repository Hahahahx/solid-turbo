import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import generouted from '@generouted/solid-router/plugin'

export default defineConfig({
  plugins: [
    UnoCSS(),
    solid(),
    generouted(),
  ],
  resolve: { alias: { '~': '/src' } },
})
