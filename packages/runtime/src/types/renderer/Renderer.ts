import { ComposableNode } from '../composable/ComposableNode'
import { ComposableOptions } from '../composable/ComposableOptions'
import { Payload } from '../Payload'
import { ReferenceFragment } from '../fragment/ReferenceFragment'
import { RendererInfo } from './RendererInfo'

export interface Renderer {
  getInfo(): RendererInfo

  initNode(node: unknown, options: ComposableOptions): ComposableNode
  composeNode(key: string, payload: Payload): void
  listNodeKeys(): string[]

  generateVirtualFragment(key: string): ReferenceFragment
}
