import {
  type JSX, Show, splitProps,
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
import type { PositionInButtonGroup } from './ButtonGroup'

export interface FlowbiteButtonTheme {
  base: string
  fullSized: string
  color: FlowbiteColors
  disabled: string
  gradient: ButtonGradientColors
  gradientDuoTone: ButtonGradientDuoToneColors
  inner: FlowbiteButtonInnerTheme
  label: string
  outline: FlowbiteButtonOutlineTheme
  pill: FlowbiteBoolean
  size: ButtonSizes
}

export interface FlowbiteButtonInnerTheme {
  base: string
  position: PositionInButtonGroup
  outline: string
}

export interface FlowbiteButtonOutlineTheme extends FlowbiteBoolean {
  color: ButtonOutlineColors
  pill: FlowbiteBoolean
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
  pill?: boolean
  positionInGroup?: keyof PositionInButtonGroup
  size?: keyof ButtonSizes
  theme?: DeepPartial<FlowbiteButtonTheme>
}

export function Button(props: ButtonProps) {
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
    'positionInGroup',
    'size',
    'theme',
  ])

  const customTheme = local.theme ?? {}
  const color = local.color ?? 'info'
  const size = local.size ?? 'md'
  const positionInGroup = local.positionInGroup ?? 'none'
  const pill = !!local.pill
  const outline = !!local.outline

  const {
    buttonGroup: groupTheme, button: theme,
  } = mergeDeep(useTheme().theme, customTheme)

  const isLink = typeof local.href !== 'undefined'
  const Component = () => isLink ? <a/> : <button/>

  return (
    <Dynamic
      component={isLink ? 'a' : 'button'}
      disabled={local.disabled}
      href={local.href}
      type={isLink ? undefined : 'button'}
      // class={[
      //   groupTheme.position[positionInGroup],
      //   theme.base,
      //   theme.pill[local.pill ? 'on' : 'off'],
      //   props.class,
      // ].join(' ')}
      // @ts-expect-error
      // classList={{
      //   [theme.disabled]: local.disabled,
      //   [theme.color[color]]: !local.gradientDuoTone && !local.gradientMonochrome,
      //   [theme.gradientDuoTone[local.gradientDuoTone!]]: local.gradientDuoTone && !local.gradientMonochrome,
      //   [theme.gradient[local.gradientMonochrome!]]: !local.gradientDuoTone && local.gradientMonochrome,
      //   [(theme.outline.color[color] ?? theme.outline.color.default)]: local.outline,
      //   [theme.fullSized]: local.fullSized,
      // }}
      {...other}
    >
      <span
        // class={[
        //   theme.inner.base,
        //   theme.inner.position[positionInGroup],
        //   theme.outline[outline ? 'on' : 'off'],
        //   theme.outline.pill[(outline && pill) ? 'on' : 'off'],
        //   theme.size[size],
        // ].join(' ')}
        // classList={{
        //   [theme.inner.outline]: local.outline && !theme.outline.color[color],
        // }}
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
