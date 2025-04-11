import {
  ImprintAttributes,
  Node,
  ChildNodeDescriptor,
  ReferenceFragment,
} from './Node'
import { GazaPacket, PatchOp } from './Payload'

export interface Renderer<T = unknown> {
  readonly context: RendererContext<T>

  getInfo(): RendererInfo
  initNode(nativeInstance: unknown, attributes: ImprintAttributes): Node
  imprintNode(identifier: string, payload: GazaPacket): void
  describeNodeChildren(identifier: string): ChildNodeDescriptor[]

  commitMount(fragment: ReferenceFragment<T>): void
  commitUnmount(fragment: ReferenceFragment<T>): void

  applyOps(fragment: ReferenceFragment<T>, ops: PatchOp[]): void
}

export interface NodeIdentity {
  identifier: string
  parent?: string
  children: string[]

  resolvePath(): string
}

export interface RendererContext<T = unknown> {
  identities: Map<string, NodeIdentity>
  nodes: Map<string, Node<T>>
  references: Map<string, unknown>
}

export interface RendererInfo {
  name: string
  version: string
  [key: string]: unknown
}

export interface RendererRegistry {
  define(name: string, renderer: Renderer): void
  get(name: string): Renderer | undefined
  use(name: string): void
  has(name: string): boolean
  current(): Renderer
  clear(): void
}
