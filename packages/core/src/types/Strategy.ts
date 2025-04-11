import { Node, ChildNodeDescriptor, ReferenceFragment } from './Node'
import { PatchOp } from './Payload'

export interface Strategy<T = unknown> {
  readonly name: string
  setup(context: StrategyContext<T>): void
  next(): void
  done(): boolean
}

export interface StrategyContext<T = unknown> {
  readonly node: Node<T>

  getRef<R = unknown>(): R | undefined
  setRef<R = unknown>(ref: R): void

  getTargetFragmentById(identifier: string): ReferenceFragment<T> | undefined
  getTargetFragmentByIndex(index: number): ReferenceFragment<T> | undefined
  createVirtualFragment(data: unknown): ReferenceFragment<T>

  describeNodeChildren(): ChildNodeDescriptor[]
  scheduleProjection(step: Projection): void
}

export interface Projection<T = unknown> {
  nodeId: string
  virtual?: ReferenceFragment<T>
  target?: ReferenceFragment<T>
  ops?: PatchOp[]
  [key: string]: unknown
}

export type StrategyConstructor = new () => Strategy

export interface StrategyRegistry {
  define(name: string, ctor: StrategyConstructor): void
  get(name: string): StrategyConstructor | undefined
  create(name: string): Strategy
  has(name: string): boolean
  list(): string[]
}
