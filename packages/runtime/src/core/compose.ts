import { ComposableElement, ComposableMetadata } from '../types/composable'
import { createComposeEvent } from '../utils/createComposeEvent'
import { getComposableChildren } from '../utils/getComposableChildren'
import { getStrategy } from '../utils/getStrategy'

export function compose(
  element: ComposableElement,
  payload: any,
  metadata?: ComposableMetadata
): void {
  const strategy = getStrategy(element)
  strategy.initialize(payload, metadata)

  while (strategy.hasNext()) {
    const event = createComposeEvent(element, strategy, payload, metadata)

    element.oncompose?.(event)

    // TODO: we need to reflect on this!
    if (!event.defaultPrevented) {
      event.target.replaceWith(event.virtualTarget)
    }

    if (!event.propagationStopped) {
      const children = getComposableChildren(event.target)
      for (const child of children) {
        // TODO: a way of passing a custom payload to composable children set oncompose.
        compose(child, payload, {
          ...metadata,
          depth: (metadata?.depth ?? 0) + 1,
          sourceIndex: event.meta.index,
          parentEvent: event,
        })
      }
    }

    if (event.defaultPrevented) break

    strategy.next()
  }

  strategy.finalize?.()
}
