import type { Accessor } from 'solid-js'
import { createSignal } from 'solid-js'

export interface UseToggleOptions<Truthy, Falsy> {
  truthyValue?: Truthy
  falsyValue?: Falsy
}

export function useToggle<Truthy, Falsy, T = Truthy | Falsy>(initialValue: T, options?: UseToggleOptions<Truthy, Falsy>): [Accessor<T>, (value?: T) => T]

export function useToggle<Truthy = true, Falsy = false, T = Truthy | Falsy>(initialValue?: T, options?: UseToggleOptions<Truthy, Falsy>): [Accessor<T>, (value?: T) => T]

/**
 * A boolean ref with a toggler
 *
 * @see https://vueuse.org/useToggle
 * @param [initialValue=false]
 */
export function useToggle<Truthy = true, Falsy = false>(
  initialValue = false,
  options: UseToggleOptions<Truthy, Falsy> = {},
) {
  type UseToggleValue = boolean | Truthy | Falsy

  const {
    truthyValue = true,
    falsyValue = false,
  } = options

  const [
    value, setValue,
  ] = createSignal<UseToggleValue>(initialValue)

  function toggle(_value?: UseToggleValue) {
    if (arguments.length)
      return setValue((v) => _value === truthyValue ? truthyValue : falsyValue)
    else
      return setValue((v) => v === truthyValue ? falsyValue : truthyValue)
  }

  return [
    value, toggle,
  ]
}
