import { render } from 'solid-js/web'
import { Routes } from '@generouted/solid-router'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

render(Routes, document.getElementById('app') as HTMLElement)
