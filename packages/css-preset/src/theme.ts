import type { Theme } from 'unocss/preset-uno'
import unoPresetTheme from 'unocss-preset-theme'
import { colors } from '@unocss/preset-mini'

export const theme: Theme = {
  colors: {
    primary: colors.indigo,
  },
}

export const presetTheme = unoPresetTheme<Theme>({
  theme: {
    // Configure dark themes
    dark: {
    },
    // Configure compact themes
    compact: {
    },
  },
})
