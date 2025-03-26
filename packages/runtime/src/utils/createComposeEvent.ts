import { ComposeEventImpl } from '../event/ComposeEvent'
import { ComposableElement, ComposableMetadata } from '../types/composable'
import { ComposeEvent } from '../types/event'
import { ComposeStrategy } from '../types/strategy'

export function createComposeEvent(
  element: ComposableElement,
  strategy: ComposeStrategy,
  payload: any,
  metadata?: ComposableMetadata
): ComposeEvent {
  return new ComposeEventImpl({
    detail: payload,
    currentTarget: element,
    virtualTarget: strategy.getVirtualTarget(),
    target: strategy.getTargetFragment(),
    meta: strategy.getStepMeta(),
    depth: metadata?.depth ?? 0,
  })
}
