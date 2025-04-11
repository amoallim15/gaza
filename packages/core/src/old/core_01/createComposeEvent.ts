import {
  ComposableNode,
  ComposeEvent,
  ComposeMetadata,
  Payload,
} from '../types'
import { ComposeEventImpl } from './ComposeEventImpl'

export function createComposeEvent<T>(
  current: ComposableNode<T>,
  payload: Payload,
  metadata: ComposeMetadata | undefined
): ComposeEvent<T> {
  return new ComposeEventImpl(
    current,
    payload,
    metadata,
    current.getTargetFragment(),
    current.getVirtualFragment()
  )
}
