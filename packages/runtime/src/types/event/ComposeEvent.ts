import { ComposableNode } from '../node/ComposableNode'
import { ReferenceFragment } from '../node/ReferenceFragment'
import { Payload } from '../payload'
import { ComposeMetadata } from './ComposeMetadata'

export interface ComposeEvent<T = unknown> {
  readonly payload: Payload
  readonly metadata: ComposeMetadata

  readonly currentTarget: ComposableNode<T>
  readonly virtual: ReferenceFragment<T>
  readonly target: ReferenceFragment<T>

  getScopedPayload(key: string): Payload | undefined
  setScopedPayload(key: string, payload: Payload): void
  hasScopedPayload(key: string): boolean
  getAllScopedPayloads(): Record<string, Payload>

  stopPropagation(): void
  stopIteration(): void
  preventDefault(): void
  abort(): void

  readonly propagationStopped: boolean
  readonly iterationStopped: boolean
  readonly defaultPrevented: boolean
}
