import { ComposableNode } from '../composable/ComposableNode'
import { ReferenceFragment } from '../fragment/ReferenceFragment'
import { Payload } from '../Payload'
import { EventMeta } from './EventMeta'

export interface ComposeEvent<T = unknown> {
  readonly payload: Payload
  readonly meta: EventMeta

  readonly parent?: ComposableNode<T>
  readonly current: ComposableNode<T>

  readonly virtual: ReferenceFragment<T>
  readonly target: ReferenceFragment<T>

  setScopedPayloadFor(key: string, payload: Payload): void
  getScopedPayloadFor(key: string): Payload

  stopPropagation(): void
  stopIteration(): void
  stopProjection(): void
  preventDefault(): void

  abort(): void

  readonly propagationStopped: boolean
  readonly iterationStopped: boolean
  readonly projectionStopped: boolean
  readonly defaultPrevented: boolean
}
