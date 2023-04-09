import type { JSX } from 'solid-js'
import {
  Show, splitProps,
} from 'solid-js'
import type { DeepPartial } from '..'
import { mergeDeep } from '../../helpers/mergeDeep'
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme'
import { useTheme } from '../Flowbite/ThemeContext'

export interface FlowbiteHelperTextTheme {
  root: FlowbiteHelperTextRootTheme
}

export interface FlowbiteHelperTextRootTheme {
  base: string
  colors: HelperColors
}

export interface HelperColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string
}

export interface HelperTextProps extends Omit<JSX.IntrinsicElements['p'], 'color'> {
  color?: keyof HelperColors
  theme?: DeepPartial<FlowbiteHelperTextTheme>
  value?: string
  children?: JSX.Element
}

export function HelperText(
  props: HelperTextProps,
) {
  const [
    local, other,
  ] = splitProps(props, [
    'children',
    'class',
    'color',
    'theme',
    'value',
  ])

  const theme = mergeDeep(useTheme().theme.helperText, local.theme ?? {})

  return (
    <p class={[
      theme.root.base,
      theme.root.colors[local.color ?? 'default'],
      local.class,
    ].join(' ')} {...other}>
      <Show when={local.value} fallback={
        <Show when={local.children} fallback="">{local.children}</Show>
      }>
        {local.value}
      </Show>
    </p>
  )
}
