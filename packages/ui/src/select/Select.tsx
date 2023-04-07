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
        <KobSelect.Item item={props.item} class="[&[data-selected]]:bg-primary [&[data-selected]]:text-white flex justify-between rounded [&[data-highlighted]]:bg-primary [&[data-highlighted]]:text-white my-1 p-1.5 [&[data-disabled]]:text-slate [&[data-highlighted]]:cursor-pointer">
          <KobSelect.ItemLabel>{props.item.rawValue.label}</KobSelect.ItemLabel>
          <KobSelect.ItemIndicator class="fic">
            <div i-line-md-confirm-circle-twotone />
          </KobSelect.ItemIndicator>
        </KobSelect.Item>
      )}
    >
      <KobSelect.Trigger class="inline-flex outline-0 rounded items-center justify-between px-2 transition-color border-1 min-w-50 [&[data-expanded]]:ring-primary/40 [&[data-expanded]]:border-primary [&[data-expanded]]:ring-2 border-slate-300" aria-label="Food">
        <KobSelect.Value class="p-2 [&[data-placeholder-shown]]:text-slate-400 [&[data-placeholder-shown]]:italic" />
        <KobSelect.Icon class="text-slate-500">
          <div i-ic-sharp-more-vert />
        </KobSelect.Icon>
      </KobSelect.Trigger>
      <KobSelect.Portal>
        <KobSelect.Content class="rounded border-1 bg-white/50 backdrop-blur-sm shadow-lg animated animated-faster [&[data-closed]]:animated-zoom-out animated-zoom-in origin-top border-primary"
        >
          <KobSelect.Listbox class="max-h-[360px] p-1" />
        </KobSelect.Content>
      </KobSelect.Portal>
    </KobSelect.Root>
  )
}
