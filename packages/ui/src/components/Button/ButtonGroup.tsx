import type { JSX } from 'solid-js'
import {
  createContext, splitProps,
} from 'solid-js'
import type { DeepPartial } from '..'
import { mergeDeep } from '../../helpers/mergeDeep'
import type { ButtonProps } from '../Button'
import { useTheme } from '../Flowbite/ThemeContext'

export interface FlowbiteButtonGroupTheme {
  base: string
  position: PositionInButtonGroup
}

export interface PositionInButtonGroup {
  none: string
  start: string
  middle: string
  end: string
}

export type ButtonGroupProps
  = JSX.IntrinsicElements['div'] &
  Pick<ButtonProps, 'outline' | 'pill'> & {
    theme?: DeepPartial<FlowbiteButtonGroupTheme>
    children: JSX.Element
  }

export const ButtonGroupContext = createContext<{
  pill?: boolean
  outline?: boolean
  group?: boolean
}>({
  pill: false,
  outline: false,
  group: true,
})

export function ButtonGroup(props: ButtonGroupProps) {
  const [
    local, other,
  ] = splitProps(props, [
    'children',
    'outline',
    'pill',
    'class',
    'theme',
  ])

  const customTheme = local.theme ?? {}

  const theme = mergeDeep(useTheme().theme.buttonGroup, customTheme)

  return (
    <div class={[
      theme.base, local.class,
    ].join(' ')} role="group" {...other}>
      <ButtonGroupContext.Provider value={{
        ...local,
      }}>
        {local.children}
      </ButtonGroupContext.Provider>
    </div>
  )
}
