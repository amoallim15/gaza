import { ComposableOptions } from './ComposableOptions'
import { ComposeEvent } from '../event/ComposeEvent'
import { ReferenceFragment } from '../fragment/ReferenceFragment'
import { Strategy } from '../strategy/Strategy'
import { Payload } from '../Payload'

export interface ComposableNode<T = unknown> {
  readonly composeKey: string
  readonly node: T
  readonly options: ComposableOptions

  compose(payload: Payload): void
  oncompose?(event: ComposeEvent): void

  getChildren(): ComposableNode<T>[]
  getStrategy(): Strategy
  getTargetFragment(): ReferenceFragment<T>
  getVirtualFragment(): ReferenceFragment<T>
}
