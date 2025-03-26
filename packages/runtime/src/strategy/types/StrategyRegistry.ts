import {
  ComposeStrategy,
  StrategyConstructor,
  StrategyRegistry,
} from '../../types/strategy'

export class StrategyRegistryImpl implements StrategyRegistry {
  private strategies = new Map<string, StrategyConstructor>()

  define(name: string, ctor: StrategyConstructor): void {
    if (this.strategies.has(name)) {
      throw new Error(`Strategy "${name}" already defined.`)
    }
    this.strategies.set(name, ctor)
  }

  get(name: string): StrategyConstructor | undefined {
    return this.strategies.get(name) as StrategyConstructor | undefined
  }

  create(name: string): ComposeStrategy {
    const Ctor = this.get(name)
    if (!Ctor) throw new Error(`Strategy "${name}" not found`)
    return new Ctor()
  }

  list(): string[] {
    return Array.from(this.strategies.keys())
  }
}
