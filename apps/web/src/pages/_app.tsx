import type { ParentProps } from 'solid-js'
import {
  Input,
  MultiSelect, Select,
} from 'ui'

import {
  A, useModals, useNavigate,
} from '~/router'

export default function App(props: ParentProps) {
  const navigate = useNavigate()
  const modals = useModals()

  const a = () => navigate('/about')
  const b = () => navigate('/posts/:id/:pid?', { params: { id: 'xyz' } })

  return (
    <section style={{ margin: '24px' }} bg-slate-100 p-2>
      <header style={{
        display: 'flex', gap: '24px',
      }}>
        <A href="/">Home</A>
        <A href="/about">About</A>
        <A href="/posts/:id" params={{ id: 'xyz' }}>
          Post by Id
        </A>
        <button onClick={() => modals.open('/modal', { at: '/posts' })}>Open global modal</button>
      </header>
      <Input/>

      <Select/>

      <MultiSelect/>
      <main>{props.children}</main>
    </section>
  )
}
