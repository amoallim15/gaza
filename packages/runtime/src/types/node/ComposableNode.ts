import { Payload } from '../payload'
import { Strategy } from '../strategy'
import { Composition } from '../composition'
import { ReferenceFragment } from './ReferenceFragment'
import { ComposeEvent } from '../event'

export interface ComposableNode<T = unknown> {
  readonly composeKey: string
  readonly node: T
  composition: Composition

  compose(payload: Payload): void
  dispose(): void
  oncompose?(event: ComposeEvent): void

  getComposableParent(): ComposableNode<T> | undefined
  getComposableChildren(): ComposableNode<T>[]
  getStrategy(): Strategy
  getTargetFragment(): ReferenceFragment<T>
  getVirtualFragment(): ReferenceFragment<T>

  setComposition(next: Partial<Composition>): void
}
