import { For } from 'solid-js'
import './style.css'
import {
  MultiSelect as KobSelect,
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
    value: 'primaryberry', label: 'primaryberry', disabled: false,
  },
  {
    value: 'grapes', label: 'Grapes', disabled: true,
  },
  {
    value: 'pineapple', label: 'Pineapple', disabled: false,
  },
]

export default function MultiSelect() {
  return (
    <KobSelect.Root
      options={options}
      optionValue="value"
      validationState='invalid'
      optionTextValue="label"
      optionDisabled="disabled"
      placeholder="Select a fruit…"
      valueComponent={(props) => (
        <div class='fb'>
          <div class='flex flex-wrap gap-1'>
            <For each={props.items}>
              {(item) => (
                <span id="badge-dismiss-default" class="inline-flex items-center rounded px-2 text-sm font-medium text-primary-800 bg-primary-100 dark:bg-primary-900 dark:text-primary-300 py-0.5">

                {item.textValue}
                  <button type="button" class="inline-flex items-center text-sm p-0.5 ml-2 bg-transparent rounded-sm text-primary-400 hover:bg-primary-200 hover:text-primary-900 dark:hover:bg-primary-800 dark:hover:text-primary-300"

                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => props.remove(item)}
                  >
                    <div i-ic-round-close/>
                      <span class="sr-only">Remove badge</span>
                  </button>
                </span>
              )}
            </For>
          </div>
          <button onPointerDown={(e) => e.stopPropagation()} onClick={props.clear}>
            <div i-ic-round-close />
          </button>
        </div>
      )}
      itemComponent={(props) => (
        <KobSelect.Item item={props.item} class="flex justify-between rounded [&[data-selected]]:bg-primary [&[data-selected]]:text-white [&[data-highlighted]]:bg-primary [&[data-highlighted]]:text-white my-1 p-1.5 [&[data-disabled]]:text-slate [&[data-highlighted]]:cursor-pointer">
          <KobSelect.ItemLabel>{props.item.rawValue.label}</KobSelect.ItemLabel>
          <KobSelect.ItemIndicator class="fic">
            <div i-line-md-confirm-circle-twotone />
          </KobSelect.ItemIndicator>
        </KobSelect.Item>
      )}
    >
      <KobSelect.Trigger class="inline-flex outline-0 rounded items-center justify-between transition-color border-1 min-w-50 border-slate-300 max-w-[300px] [&[data-expanded]]:ring-primary/40 [&[data-expanded]]:border-primary [&[data-expanded]]:ring-2" aria-label="Food">
        <KobSelect.Value class="w-full [&[data-placeholder-shown]]:ph-text text-left" />
        <KobSelect.Icon class="text-slate-500">
          <div i-ic-sharp-more-vert />
        </KobSelect.Icon>
      </KobSelect.Trigger>
      <KobSelect.ErrorMessage class='text-rose'>Hmm, I prefer apples.</KobSelect.ErrorMessage>
      <KobSelect.Portal>
        <KobSelect.Content class="rounded border-1 bg-white/50 backdrop-blur-sm shadow-lg animated animated-faster [&[data-closed]]:animated-zoom-out animated-zoom-in origin-top border-primary/50"
        >
          <KobSelect.Listbox class="max-h-[360px] p-1" />
        </KobSelect.Content>
      </KobSelect.Portal>
    </KobSelect.Root>
  )
}
