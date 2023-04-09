import { defineConfig } from 'unocss'
import { extendUnocssOptions } from 'css-preset'

// for IDE support
export default defineConfig({
  // extraContent: { filesystem: ['../../packages/ui/theme/default.ts'] },
  ...extendUnocssOptions(),
})
