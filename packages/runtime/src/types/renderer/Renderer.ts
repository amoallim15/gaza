import { ComposableNode } from '../node'
import { Payload } from '../payload'
import { ReferenceFragment } from '../node'
import { RendererInfo } from './RendererInfo'
import { Composition } from '../composition'

export interface Renderer {
  getInfo(): RendererInfo

  initNode(node: unknown, attributes: Composition): ComposableNode
  composeNode(key: string, payload: Payload): void
  listNodeKeys(): string[]

  generateVirtualFragment(key: string): ReferenceFragment
}
