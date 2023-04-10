import type { JSX } from 'solid-js'
import {
  Show, splitProps,
} from 'solid-js'
import type { DeepPartial } from '..'
import { mergeDeep } from '../../helpers/mergeDeep'
import type { FlowbiteStateColors } from '../Flowbite/FlowbiteTheme'
import { useTheme } from '../Flowbite/ThemeContext'

export interface FlowbiteLabelTheme {
  root: FlowbiteLabelRootTheme
}

export interface FlowbiteLabelRootTheme {
  base: string
  colors: LabelColors
  disabled: string
}

export interface LabelColors extends FlowbiteStateColors {
  [key: string]: string
  default: string
}

export interface LabelProps extends Omit<JSX.IntrinsicElements['label'], 'color'> {
  color?: keyof LabelColors
  children?: JSX.Element
  disabled?: boolean
  theme?: DeepPartial<FlowbiteLabelTheme>
  value?: string
}

export function Label(props: LabelProps,
) {
  const [
    local, other,
  ] = splitProps(props, [
    'children',
    'class',
    'color',
    'disabled',
    'theme',
    'value',
  ])

  const theme = mergeDeep(useTheme().theme.label, local.theme ?? {})

  return (
    <label
      class={[
        theme.root.base,
        theme.root.colors[local.color ?? 'default'],
        local.class,
      ].join(' ')}
      classList={{
        [theme.root.disabled]: local.disabled,
      }}
      {...other}
    >
      <Show when={local.value} fallback={<Show when={local.children} fallback="">{local.children}</Show>}>
        {local.value}
      </Show>
    </label>
  )
}
