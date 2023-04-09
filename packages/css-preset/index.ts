import {
  presetAttributify,
  presetIcons, presetMini,
  presetTypography, presetUno, presetWebFonts,
  transformerCompileClass, transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetKobalte } from 'unocss-preset-primitives'
import type { UserConfig } from '@unocss/core'
import { presetExtra } from 'unocss-preset-extra'
import { theme as Animate } from '@unocss/preset-wind'
import { presetUseful } from 'unocss-preset-useful'
import { rules } from './src/rules'
import {
  presetTheme, theme,
} from './src/theme'
import { shortcuts } from './src/shortcuts'
import input from './src/flowbite/input'
import tooltip from './src/flowbite/tooltip'

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
      presetUno(),
      presetMini(),
      presetAttributify(),
      presetExtra(),
      presetIcons({
        extraProperties: {
          'color': 'inherit',
          // Avoid crushing of icons in crowded situations
          'min-width': '1.2em',
        },
        scale: 1.2,
        cdn: 'https://esm.sh/',
      }),
      presetUseful(),
      presetTypography(),
      presetWebFonts({
        provider: 'none',
        fonts: { script: 'Homemade Apple' },
      }),
      presetKobalte(/* options */) as any,
      presetTheme,
      ...(options.presets || []),
    ],
    safelist: Object.keys(Animate.animation?.keyframes ?? {}).map((k) => [
      `animate-${k}`, `group-hover-animate-${k}`,
    ]).flat(),
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
      transformerCompileClass(),
      // transformerAttributifyJsx(),
      ...(options.transformers || []),
    ],
    variants: [],
    preflights: [
      {
        getCSS: ({ theme }: { theme: any }) => {
          return [
            input(theme), tooltip(theme),
          ].join('\n')
        },
      },
    ],
  }
}
