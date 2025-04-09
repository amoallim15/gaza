import { ComposableNode } from '../node/ComposableNode'
import { ComposeMetadata } from '../event/ComposeMetadata'

export interface Strategy {
  name: string
  initialize(node: ComposableNode): void
  finalize(): void
  getMetadata(): ComposeMetadata
  hasNextStep(): boolean
  step(): void
}
