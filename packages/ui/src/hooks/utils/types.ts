import type { Accessor } from 'solid-js'

/**
 * Void function
 */
export type Fn = () => void

/**
 * Any function
 */
export type AnyFn = (...args: any[]) => any

export type Arrayable<T> = T[] | T

/**
 * Infers the element type of an array
 */
export type ElementOf<T> = T extends (infer E)[] ? E : never

export type Awaitable<T> = Promise<T> | T

export type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never

export type PromisifyFn<T extends AnyFn> = (...args: ArgumentsType<T>) => Promise<ReturnType<T>>

export interface Pausable {
  /**
   * A ref indicate whether a pausable instance is active
   */
  isActive: Accessor<boolean>

  /**
   * Temporary pause the effect from executing
   */
  pause: Fn

  /**
   * Resume the effects
   */
  resume: Fn
}

export interface Stoppable<StartFnArgs extends any[] = any[]> {
  /**
   * A ref indicate whether a stoppable instance is executing
   */
  isPending: Accessor<boolean>

  /**
   * Stop the effect from executing
   */
  stop: Fn

  /**
   * Start the effects
   */
  start: (...args: StartFnArgs) => void
}

// export interface ConfigurableFlush {
//   /**
//    * Timing for monitoring changes, refer to WatchOptions for more details
//    *
//    * @default 'pre'
//    */
//   flush?: WatchOptions['flush']
// }

// export interface ConfigurableFlushSync {
//   /**
//    * Timing for monitoring changes, refer to WatchOptions for more details.
//    * Unlike `watch()`, the default is set to `sync`
//    *
//    * @default 'sync'
//    */
//   flush?: WatchOptions['flush']
// }

// // Internal Types
// export type MapSources<T> = {
//   [K in keyof T]: T[K] extends WatchSource<infer V> ? V : never;
// }
// export type MapOldSources<T, Immediate> = {
//   [K in keyof T]: T[K] extends WatchSource<infer V> ? Immediate extends true ? V | undefined : V : never;
// }
