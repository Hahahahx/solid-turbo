import { TextField } from '@kobalte/core'

export default function Input() {
  return (

    <TextField.Root class='relative'>
      <TextField.Input class="inline-flex outline-0 rounded items-center justify-between transition-color border-1 min-w-50 border-slate-300 max-w-[300px] focus:ring-primary/40 focus:border-primary focus:ring-2 placeholder:ph-text truncate" placeholder='testet' />
    </TextField.Root>

  )
}
