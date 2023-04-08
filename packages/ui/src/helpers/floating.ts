import type {
  Middleware, Placement,
} from '@floating-ui/dom'
import {
  arrow, autoPlacement, flip, offset, shift,
} from '@floating-ui/dom'

/**
 * @see https://floating-ui.com/docs/middleware
 */
export function getMiddleware({
  arrowRef,
  placement,
}: {
  arrowRef: HTMLDivElement
  placement: 'auto' | Placement
}): Middleware[] {
  const middleware = []

  middleware.push(offset(8))
  middleware.push(placement === 'auto' ? autoPlacement() : flip())
  middleware.push(shift({ padding: 8 }))

  if (arrowRef)
    middleware.push(arrow({ element: arrowRef }))

  return middleware
}

export function getPlacement({ placement }: { placement: 'auto' | Placement }): Placement | undefined {
  return placement === 'auto' ? undefined : placement
}

export function getArrowPlacement({ placement }: { placement: Placement }): Placement {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]] as Placement
}
