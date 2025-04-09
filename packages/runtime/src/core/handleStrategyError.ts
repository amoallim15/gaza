import { ComposableNode, Strategy } from '../types'

export function handleStrategyError(
  err: unknown,
  node: ComposableNode,
  strategy: Strategy
) {
  console.error(
    `[Gaza] Error in strategy "${strategy.name}" on node ${node.composeKey}:`,
    err
  )
}
