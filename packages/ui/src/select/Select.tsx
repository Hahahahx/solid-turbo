import './style.css'
import {
  Select as KobSelect,
} from '@kobalte/core'

interface Fruit {
  value: string
  label: string
  disabled: boolean
}
const options: Fruit[] = [
  {
    value: 'apple', label: 'Apple', disabled: false,
  },
  {
    value: 'banana', label: 'Banana', disabled: false,
  },
  {
    value: 'blueberry', label: 'Blueberry', disabled: false,
  },
  {
    value: 'grapes', label: 'Grapes', disabled: true,
  },
  {
    value: 'pineapple', label: 'Pineapple', disabled: false,
  },
]

export default function Select() {
  return (
    <KobSelect.Root
      options={options}
      optionValue="value"
      optionTextValue="label"
      optionDisabled="disabled"
      placeholder="Select a fruit…"
      valueComponent={(props) => props.item.rawValue.label}
      itemComponent={(props) => (
        <KobSelect.Item item={props.item} class="select__item">
          <KobSelect.ItemLabel>{props.item.rawValue.label}</KobSelect.ItemLabel>
          <KobSelect.ItemIndicator class="select__item-indicator">
            <div i-line-md-confirm-circle-twotone />
          </KobSelect.ItemIndicator>
        </KobSelect.Item>
      )}
    >
      <KobSelect.Trigger class="select__trigger" aria-label="Food">
        <KobSelect.Value class="select__value" />
        <KobSelect.Icon class="select__icon">
          <div i-ic-sharp-more-vert />
        </KobSelect.Icon>
      </KobSelect.Trigger>
      <KobSelect.Portal>
        <KobSelect.Content class="select__content">
          <KobSelect.Listbox class="select__listbox" />
        </KobSelect.Content>
      </KobSelect.Portal>
    </KobSelect.Root>
  )
}
