import {
  type JSX, Show, splitProps, useContext,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'
import type { DeepPartial } from '..'
import { mergeDeep } from '../../helpers/mergeDeep'
import type {
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbiteGradientColors,
  FlowbiteGradientDuoToneColors,
  FlowbiteSizes,
} from '../Flowbite/FlowbiteTheme'
import { useTheme } from '../Flowbite/ThemeContext'
import {
  ButtonGroup,
  ButtonGroupContext,
} from './ButtonGroup'

export interface FlowbiteButtonTheme {
  base: string
  fullSized: string
  color: FlowbiteColors
  disabled: string
  loading: string
  gradient: ButtonGradientColors
  gradientDuoTone: ButtonGradientDuoToneColors
  inner: FlowbiteButtonInnerTheme
  label: string
  outline: FlowbiteButtonOutlineTheme
  pill: string
  size: ButtonSizes
}

export interface FlowbiteButtonInnerTheme {
  base: string
  outline: string
}

export interface FlowbiteButtonOutlineTheme extends FlowbiteBoolean {
  color: ButtonOutlineColors
}

export interface ButtonColors
  extends Pick<FlowbiteColors, 'dark' | 'failure' | 'gray' | 'info' | 'light' | 'purple' | 'success' | 'warning'> {
  [key: string]: string
}

export interface ButtonGradientColors extends FlowbiteGradientColors {
  [key: string]: string
}

export interface ButtonGradientDuoToneColors extends FlowbiteGradientDuoToneColors {
  [key: string]: string
}

export interface ButtonOutlineColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string
}

export interface ButtonSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'lg' | 'xl'> {
  [key: string]: string
}

export interface ButtonProps extends Omit<JSX.IntrinsicElements['button'], 'color' | 'ref'> {
  color?: keyof FlowbiteColors
  fullSized?: boolean
  gradientDuoTone?: keyof ButtonGradientDuoToneColors
  gradientMonochrome?: keyof ButtonGradientColors
  href?: string
  target?: string
  label?: JSX.Element
  outline?: boolean
  loading?: boolean
  pill?: boolean
  size?: keyof ButtonSizes
  theme?: DeepPartial<FlowbiteButtonTheme>
}

export function ButtonComponent(props: ButtonProps) {
  const [
    local, other,
  ] = splitProps(props, [
    'children',
    'class',
    'color',
    'disabled',
    'fullSized',
    'gradientDuoTone',
    'gradientMonochrome',
    'href',
    'label',
    'outline',
    'pill',
    'loading',
    'size',
    'theme',
  ])
  const {
    pill: groupPill, outline: groupOutline,
  } = useContext(ButtonGroupContext)

  const customTheme = local.theme ?? {}
  const color = local.color ?? 'info'
  const size = local.size ?? 'md'
  const pill = local.pill ?? groupPill
  const outline = local.outline ?? groupOutline

  console.log(outline)

  const { button: theme } = mergeDeep(useTheme().theme, customTheme)

  const isLink = typeof local.href !== 'undefined'

  return (
    <Dynamic
      component={isLink ? 'a' : 'button'}
      disabled={local.disabled || local.loading}
      href={local.href}
      type={isLink ? undefined : 'button'}
      class={[
        theme.base, props.class,
      ].join(' ')}
      // @ts-expect-error
      classList={{
        [theme.pill]: pill,
        [theme.disabled]: local.disabled,
        [theme.loading]: local.loading,
        [theme.color[color]]: !local.gradientDuoTone && !local.gradientMonochrome,
        [theme.gradientDuoTone[local.gradientDuoTone!]]: local.gradientDuoTone && !local.gradientMonochrome,
        [theme.gradient[local.gradientMonochrome!]]: !local.gradientDuoTone && local.gradientMonochrome,
        [(theme.outline.color[color] ?? theme.outline.color.default)]: outline,
        [theme.fullSized]: local.fullSized,
      }}
      {...other}
    >
      <span
        class={[
          theme.inner.base,
          // theme.inner.position[positionInGroup ?? 'none'],
          theme.outline[outline ? 'on' : 'off'],
          theme.size[size],
        ].join(' ')}
        classList={{
          [theme.inner.outline]: local.outline && !theme.outline.color[color],
        }}
      >
        {local.children}
        <Show when={typeof local.label !== 'undefined'}>
          <span data-testid="flowbite-button-label" class={theme.label}>
            {local.label}
          </span>
        </Show>
      </span>
    </Dynamic >
  )
}

export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
})
