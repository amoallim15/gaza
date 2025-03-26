import { ComposableElement } from './composable'
import { ReferenceFragment } from './fragment'

export interface ComposeEventMeta {
  index?: number
  key?: string
  previousItem?: any
  group?: string
}

export interface ComposeEvent<T = unknown> {
  readonly type: string // always "compose"
  readonly detail: T
  readonly currentTarget: ComposableElement
  readonly virtualTarget: ReferenceFragment
  readonly target: ReferenceFragment

  readonly meta: ComposeEventMeta

  stopPropagation(): void
  preventDefault(): void
  readonly propagationStopped: boolean
  readonly defaultPrevented: boolean
}
