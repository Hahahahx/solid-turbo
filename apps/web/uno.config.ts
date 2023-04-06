import { defineConfig } from 'unocss'
import { extendUnocssOptions } from 'css-preset'

// for IDE support
export default defineConfig({
  ...extendUnocssOptions(),
})
