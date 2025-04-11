import { ComposableNode, ComposeMetadata, Payload, Renderer } from '../types'
import { PropagationMetadata } from '../types/execution/PropagationMetadata'

export function compose1<T = unknown>(
  node: ComposableNode<T>,
  payload: Payload,
  metadata?: PropagationMetadata,
  renderer?: Renderer
): void {
  const composer = new Composer(node, payload, metadata, renderer)
  while (composer.isDone()) {
    const ctx = composer.createStrategyContext()
    const strategy = composer.getStrategy()
    try {
      strategy.initialize?.(ctx)
      while (strategy.hasNextStep()) {
        const event = composer.createProjectionEvent(ctx)
        node.oncompose?.(event)
        if (!ctx.propagationStopped) {
          for (const child of composer.getComposableChildren(ctx)) {
            compose1(
              child,
              composer.getComposableChildPayload(),
              composer.getComposableChildMetadata(),
              composer.getRenderer()
            )
          }
        }
        if (ctx.iterationStopped) break
        strategy.step()
      }
      strategy.finalize?.()
    } catch (err) {
      composer.handleStrategyError(strategy, err)
    }
  }
}

export function compose<T = unknown>(
  node: ComposableNode<T>,
  payload: Payload,
  renderer: Renderer,
  metadata?: ComposeMetadata
): void {}
