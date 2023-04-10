import {
  type JSX, createUniqueId, splitProps,
} from 'solid-js'
import type { DeepPartial } from '..'
import { mergeDeep } from '../../helpers/mergeDeep'
import type {
  FlowbiteBoolean, FlowbiteColors,
} from '../Flowbite/FlowbiteTheme'
import { useTheme } from '../Flowbite/ThemeContext'

export interface FlowbiteToggleSwitchTheme {
  root: FlowbiteToggleSwitchRootTheme
  toggle: FlowbiteToggleSwitchToggleTheme
}

export interface FlowbiteToggleSwitchRootTheme {
  base: string
  active: FlowbiteBoolean
  label: string
}

export interface FlowbiteToggleSwitchToggleTheme {
  base: string
  checked: FlowbiteBoolean & {
    color: FlowbiteColors
  }
}

export type ToggleSwitchProps = Omit<JSX.IntrinsicElements['button'], 'onChange'> & {
  checked: boolean
  color?: FlowbiteColors
  label: string
  onChange: (checked: boolean) => void
  theme?: DeepPartial<FlowbiteToggleSwitchTheme>
}

export function ToggleSwitch(props: ToggleSwitchProps) {
  const [
    local, other,
  ] = splitProps(props, [
    'checked',
    'class',
    'color',
    'disabled',
    'label',
    'name',
    'onChange',
    'theme',
  ])

  const id = createUniqueId()
  const theme = mergeDeep(useTheme().theme.toggleSwitch, local.theme ?? {})

  const toggle = (): void => local.onChange(!local.checked)

  const handleClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> = (event): void => {
    event.preventDefault()
    toggle()
  }

  const handleKeyPress: JSX.EventHandlerUnion<HTMLButtonElement, KeyboardEvent> = (event): void => {
    event.preventDefault()
  }

  return (
    <>
      {local.name && local.checked && <input checked={local.checked} hidden name={local.name} readOnly type="checkbox" class="sr-only" />}
      <button
        aria-checked={local.checked}
        aria-labelledby={`${id}-flowbite-toggleswitch-label`}
        disabled={local.disabled}
        id={`${id}-flowbite-toggleswitch`}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        role="switch"
        tabIndex={0}
        type="button"
        class={[
          theme.root.base,
          theme.root.active[local.disabled ? 'off' : 'on'],
          local.class,
        ].join(' ')}
        {...other}
      >
        <div
          data-testid="flowbite-toggleswitch-toggle"
          class={
            [
              theme.toggle.base, theme.toggle.checked[local.checked ? 'on' : 'off'],
            ].join(' ')}
          classList={{
            [theme.toggle.checked.color[local.color ?? 'blue']]: !local.disabled && local.checked,
          }}
        >
          {/* <div class='thumb'></div> */}
        </div>
        <span
          data-testid="flowbite-toggleswitch-label"
          id={`${id}-flowbite-toggleswitch-label`}
          class={theme.root.label}
        >
          {local.label}
        </span>
      </button>
    </>
  )
}
