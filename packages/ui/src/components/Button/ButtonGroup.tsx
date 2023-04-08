import type { JSX } from 'solid-js'
import {
  children, createEffect, splitProps,
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

function ButtonGroup(props: ButtonGroupProps) {
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
  const resolved = children(() => props.children)

  createEffect(() => {
    const list = resolved.toArray()
    list.forEach((child, index) => {
      // @ts-expect-error
      // child?.setAttribute?.('outline', local.outline)
      // @ts-expect-error
      // child?.setAttribute?.('pill', local.pill)
      // @ts-expect-error
      // child?.setAttribute?.('positionInGroup', index === 0 ? 'start' : index === (props.children as ButtonProps[]).length - 1 ? 'end' : 'middle')
    })
  })

  const theme = mergeDeep(useTheme().theme.buttonGroup, customTheme)

  return (
    <div class={[
      theme.base, local.class,
    ].join(' ')} role="group" {...other}>
      {resolved()}
    </div>
  )
}

ButtonGroup.displayName = 'Button.Group'
export default ButtonGroup
