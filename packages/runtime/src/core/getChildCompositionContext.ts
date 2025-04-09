import {
  ComposableNode,
  ComposeEvent,
  ComposeMetadata,
  Payload,
} from '../types'

export interface ChildCompositionContext {
  payload: Payload
  metadata: ComposeMetadata
}

export function getChildCompositionContext<T = unknown>(
  child: ComposableNode<T>,
  event: ComposeEvent<T>
): ChildCompositionContext {
  const payload = event.getScopedPayload(child.composeKey) ?? event.payload

  const metadata: ComposeMetadata = {
    parent: event.currentTarget,
    depth: (event.metadata.depth ?? 0) + 1,
  }

  return {
    payload,
    metadata,
  }
}
