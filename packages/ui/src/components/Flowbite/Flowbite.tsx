import {
  type JSX, createEffect,
} from 'solid-js'
import type { DeepPartial } from '..'
import { mergeDeep } from '../../helpers/mergeDeep'
import windowExists from '../../helpers/window-exists'
import defaultTheme from '../../theme/default'
import type { FlowbiteTheme } from './FlowbiteTheme'
import {
  ThemeContext, useTheme, useThemeMode,
} from './ThemeContext'

export interface ThemeProps {
  dark?: boolean
  theme?: DeepPartial<FlowbiteTheme>
}

type FlowbiteProps = JSX.IntrinsicElements['div'] & {
  children: JSX.Element
  theme?: ThemeProps
}

export function Flowbite(props: FlowbiteProps) {
  const {
    theme: customTheme = {}, dark,
  } = props.theme ?? {}
  const [
    mode,
    setMode,
    toggleMode,
  ] = useThemeMode()

  const mergedTheme = mergeDeep(defaultTheme, customTheme)

  createEffect(() => {
    if (dark) {
      if (setMode != null)
        setMode('dark')

      if (windowExists())
        document.documentElement.classList.add('dark')
    }
    else {
      if (setMode != null)
        setMode('light')

      if (windowExists())
        document.documentElement.classList.remove('dark')
    }
  })

  return <ThemeContext.Provider value={{
    theme: mergedTheme,
    mode,
    toggleMode,
  }}>{props.children}</ThemeContext.Provider>
}

export type { FlowbiteTheme } from './FlowbiteTheme'
export {
  useTheme, useThemeMode,
}
