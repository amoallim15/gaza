import { ComposableNode } from '../node/ComposableNode'

export interface ComposeMetadata {
  parent?: ComposableNode
  depth?: number
  step?: number
  timestamp?: number
  [key: string]: unknown
}
