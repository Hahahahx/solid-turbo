import type {
  Accessor, JSX, Setter,
} from 'solid-js'
import {
  createContext, createEffect, createSignal, useContext,
} from 'solid-js'
import windowExists from '../../helpers/window-exists'
import defaultTheme from '../../theme/default'
import type { FlowbiteTheme } from './FlowbiteTheme'

export enum Mode {
  light = 'light',
  dark = 'dark',
}

type ModeType = Mode | keyof typeof Mode

export interface ThemeContextProps {
  theme: FlowbiteTheme
  mode?: Accessor<ModeType>
  toggleMode?: () => void | null
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
})

interface ThemeProviderProps {
  children: JSX.Element
  value: ThemeContextProps
}

export function ThemeProvider(props: ThemeProviderProps) {
  return <ThemeContext.Provider value={props.value}>{props.children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext)
}

export function useThemeMode(): [Accessor<ModeType>, Setter<ModeType>, () => void] {
  const userPreferenceIsdark = () => windowExists() && window.matchMedia?.('(prefers-color-scheme: dark)').matches
  const getPrefersColorScheme = (): ModeType => (userPreferenceIsdark() ? Mode.dark : Mode.light)

  const {
    mode: contextMode, toggleMode,
  } = useContext(ThemeContext)

  const [
    mode, setModeState,
  ] = createSignal<ModeType>(contextMode?.() || getPrefersColorScheme())

  const setMode = (mode: ModeType) => {
    if (!windowExists())
      return

    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
      return
    }

    document.documentElement.classList.remove('dark')
  }

  const onToggleMode = () => {
    const newMode = mode() === Mode.dark ? Mode.light : Mode.dark
    setMode(newMode)
    setModeState(newMode)
  }

  const toggleModeFunc = toggleMode ?? onToggleMode

  createEffect(() => {
    if (contextMode) {
      setMode(contextMode())
      setModeState(contextMode())
    }
  })

  return [
    mode,
    setModeState,
    toggleModeFunc,
  ]
}
