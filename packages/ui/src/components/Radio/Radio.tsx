import {
  type JSX, splitProps,
} from 'solid-js'
import type { DeepPartial } from '..'
import { mergeDeep } from '../../helpers/mergeDeep'
import { useTheme } from '../Flowbite/ThemeContext'

export interface FlowbiteRadioTheme {
  root: FlowbiteRadioRootTheme
}

export interface FlowbiteRadioRootTheme {
  base: string
}

export interface RadioProps extends Omit<JSX.IntrinsicElements['input'], 'ref' | 'type'> {
  theme?: DeepPartial<FlowbiteRadioTheme>
}

export function Radio(props: RadioProps) {
  const [
    local, other,
  ] = splitProps(props, [
    'class', 'theme',
  ])

  const theme = mergeDeep(useTheme().theme.radio, local.theme ?? {})

  return <input type="radio" class={[
    theme.root.base, local.class,
  ].join(' ')} {...other} />
}

Radio.displayName = 'Radio'
