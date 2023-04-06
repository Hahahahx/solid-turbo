import type { Rule } from '@unocss/core'

export const rules: Rule[] = [
  [
    /^io-size$/, (_, { theme }: any) => ({
      'height': theme.io.height,
      'padding': theme.io.padding,
      'font-size': theme.io.fontSize,
    }),
  ],
]
