import { Strategy } from './Strategy'

export type StrategyConstructor = new () => Strategy

export interface StrategyRegistry {
  define(name: string, ctor: StrategyConstructor): void
  get(name: string): StrategyConstructor | undefined
  create(name: string): Strategy
  list(): string[]
  has(name: string): boolean
}
