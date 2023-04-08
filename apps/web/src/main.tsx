import { render } from 'solid-js/web'
import { Routes } from '@generouted/solid-router'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { Flowbite } from 'ui'

function App() {
  const theme = {
    // sidebar: {
    //   root: {
    //     base: 'h-full bg-inherit',
    //     inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-inherit py-4 px-3',
    //   },
    // },
  }

  return <Flowbite theme={{ theme }}><Routes/> </Flowbite>
}

render(App, document.getElementById('app') as HTMLElement)
