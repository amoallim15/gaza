import { ComposableNode } from '../composable/ComposableNode'

export interface Strategy {
  name: string
  initialize(node: ComposableNode): void
  finalize(): void
  hasNextStep(): boolean
  step(): void
}
