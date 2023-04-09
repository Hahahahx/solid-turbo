import type { Accessor } from 'solid-js'

export default function resolved<T>(v: Accessor<T> | T): T {
  if (typeof v === 'function')
    // @ts-expect-error
    return v()
  else
    return v
}
