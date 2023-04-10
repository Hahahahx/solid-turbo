import {
  type JSX, splitProps,
} from 'solid-js'
import type { DeepPartial } from '..'
import { mergeDeep } from '../../helpers/mergeDeep'
import { useTheme } from '../Flowbite/ThemeContext'

export interface FlowbiteCheckboxTheme {
  root: FlowbiteCheckboxRootTheme
}
export interface FlowbiteCheckboxRootTheme {
  base: string
}

export interface CheckboxProps extends Omit<JSX.IntrinsicElements['input'], 'type' | 'ref'> {
  theme?: DeepPartial<FlowbiteCheckboxTheme>
}

export function Checkbox(props: CheckboxProps) {
  const [
    local, other,
  ] = splitProps(props, [
    'class', 'theme',
  ])

  const theme = mergeDeep(useTheme().theme.checkbox, local.theme ?? {})

  return <input type="checkbox" class={[
    theme.root.base, local.class,
  ].join(' ')} {...other} />
}
