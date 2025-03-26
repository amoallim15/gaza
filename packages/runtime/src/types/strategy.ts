import { ComposableMetadata } from './composable'
import { ComposeEventMeta } from './event'
import { ReferenceFragment } from './fragment'

export interface ComposeStrategy {
  name: string
  initialize(payload: any, metadata?: ComposableMetadata): void
  hasNext(): boolean
  next(): void
  finalize(): void
  getVirtualTarget(): ReferenceFragment
  getTargetFragment(): ReferenceFragment
  getStepMeta(): ComposeEventMeta
}

export type StrategyConstructor = new () => ComposeStrategy

export interface StrategyRegistry {
  define(name: string, ctor: StrategyConstructor): void
  get(name: string): StrategyConstructor | undefined
  create(name: string): ComposeStrategy
  list(): string[]
}
