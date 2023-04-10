import type { JSX } from 'solid-js'
import { splitProps } from 'solid-js'
import type { DeepPartial } from '..'
import { mergeDeep } from '../../helpers/mergeDeep'
import type {
  FlowbiteBoolean, FlowbiteColors, FlowbiteSizes,
} from '../Flowbite/FlowbiteTheme'
import { useTheme } from '../Flowbite/ThemeContext'
import { HelperText } from '../HelperText'

export interface FlowbiteTextInputTheme {
  base: string
  addon: string
  field: {
    base: string
    icon: {
      base: string
      svg: string
    }
    rightIcon: {
      base: string
      svg: string
    }
    input: {
      base: string
      sizes: TextInputSizes
      colors: TextInputColors
      withIcon: FlowbiteBoolean
      withRightIcon: FlowbiteBoolean
      withAddon: FlowbiteBoolean
      withShadow: FlowbiteBoolean
    }
  }
}

export interface TextInputColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string
}

export interface TextInputSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export type TextInputProps = Omit<JSX.IntrinsicElements['input'], 'ref' | 'color'> & {
  sizing?: keyof TextInputSizes
  shadow?: boolean
  helperText?: JSX.Element
  addon?: JSX.Element
  icon?: JSX.Element
  rightIcon?: JSX.Element
  color?: keyof TextInputColors
  theme?: DeepPartial<FlowbiteTextInputTheme>
}

export function TextInput(props: TextInputProps) {
  const [
    local, other,
  ] = splitProps(props, [
    'addon',
    'class',
    'color',
    'helperText',
    'icon',
    'rightIcon',
    'shadow',
    'sizing',
    'theme',
  ])
  // const {
  //       addon,
  //       class,
  //       color = 'gray',
  //       helperText,
  //       icon: Icon,
  //       rightIcon: RightIcon,
  //       shadow,
  //       sizing = 'md',
  //       theme: customTheme = {},
  //     }=local
  const theme = mergeDeep(useTheme().theme.textInput, local.theme ?? {})

  return (
    <>
      <div class={([
        theme.base, local.class,
      ].join(' '))}>
        {local.addon && <span class={theme.addon}>{local.addon}</span>}
        <div class={theme.field.base}>
          {local.icon && (
            <div class={theme.field.icon.base}>
              {local.icon}
            </div>
          )}
          {local.rightIcon && (
            <div data-testid="right-icon" class={theme.field.rightIcon.base}>
              {local.rightIcon}
            </div>
          )}
          <input
            class={[
              theme.field.input.base,
              theme.field.input.colors[local.color ?? 'gray'],
              theme.field.input.withIcon[local.icon ? 'on' : 'off'],
              theme.field.input.withRightIcon[local.rightIcon ? 'on' : 'off'],
              theme.field.input.withAddon[local.addon ? 'on' : 'off'],
              theme.field.input.withShadow[local.shadow ? 'on' : 'off'],
              theme.field.input.sizes[local.sizing ?? 'md'],
            ].join(' ')}
            {...other}
          />
        </div>
      </div>
      {local.helperText && <HelperText color={local.color}>{local.helperText}</HelperText>}
    </>
  )
}
