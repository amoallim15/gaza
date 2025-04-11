import { ComposableNode, ComposeMetadata, Gazaset, Renderer } from '../types'
import { createComposeEvent } from './createComposeEvent'
import { handleStrategyError } from './handleStrategyError'
import { getChildCompositionContext } from './getChildCompositionContext'

// export function compose<T = unknown>(
//   node: ComposableNode<T>,
//   payload: Payload,
//   metadata: ComposeMetadata = {}
// ): void {
//   if (payload.composition) {
//     node.setComposition(payload.composition)
//   }

//   const strategy = node.getStrategy()

//   try {
//     strategy.initialize(node)

//     while (strategy.hasNextStep()) {
//       const stepMetadata = strategy.getMetadata()
//       const event = createComposeEvent(node, payload, {
//         ...stepMetadata,
//         ...metadata,
//       })

//       node.oncompose?.(event)

//       if (!event.propagationStopped) {
//         const children = node.getComposableChildren()
//         for (const child of children) {
//           const ctx = getChildCompositionContext(child, event)
//           compose(child, ctx.payload, ctx.metadata)
//         }
//       }

//       strategy.step()

//       if (event.iterationStopped) break
//     }

//     strategy.finalize?.()
//   } catch (err) {
//     handleStrategyError(err, node, strategy)
//   }
// }

export function compose<T = unknown>(
  node: ComposableNode<T>,
  instruction: Gazaset,
  metadata: ComposeMetadata,
  renderer: Renderer
): void {}
