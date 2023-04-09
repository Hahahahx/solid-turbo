interface ButtonHook extends ButtonClickHandle {
  onClick: Click | ClickArray<Click>
  onClickAsync: ClickAsync | ClickArray<ClickAsync>
  loading?: boolean
  disable?: boolean
}

interface ButtonClickHandle {
  throttle?: boolean | number
  debounce?: boolean | number
}

type ClickArray<T> = T | [T, ButtonClickHandle]

type Click = () => void
type ClickAsync = () => Promise<void>

function useButton() {

}
