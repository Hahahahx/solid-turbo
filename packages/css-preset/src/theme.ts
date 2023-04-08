import type { Theme } from 'unocss/preset-uno'
import unoPresetTheme from 'unocss-preset-theme'
import { colors } from '@unocss/preset-mini'

export const theme: Theme = {
  colors: {
    primary: colors.indigo,
  },
  height: {
    modal: 'calc(100% - 2rem)',
  },
  boxShadow: {
    'sm-light': '0 2px 5px 0px rgba(255, 255, 255, 0.08)',
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
