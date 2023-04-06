import {
  presetAttributify,
  presetIcons,
  presetTypography, presetUno, presetWebFonts, transformerCompileClass, transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetKobalte } from 'unocss-preset-primitives'
import type { UserConfig } from '@unocss/core'
import { rules } from './src/rules'
import {
  presetTheme, theme,
} from './src/theme'
import { shortcuts } from './src/shortcuts'

/**
 * Extends unocss/vite Plugin Options Config
 */
export function extendUnocssOptions({ ...options }: UserConfig = {}): UserConfig {
  return {
    ...options,
    rules,
    theme,
    shortcuts,
    presets: [
      presetUno({ attributifyPseudo: true }),
      // presetMini(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          'color': 'inherit',
          // Avoid crushing of icons in crowded situations
          'min-width': '1.2em',
        },
        scale: 1.2,
        cdn: 'https://esm.sh/',
      }),
      // presetWind(),
      presetTypography(),
      presetWebFonts({
        provider: 'none',
        fonts: { script: 'Homemade Apple' },
      }),
      presetKobalte(/* options */) as any,
      presetTheme,
      ...(options.presets || []),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
      transformerCompileClass(),
      ...(options.transformers || []),
    ],
    variants: [],
  }
}
