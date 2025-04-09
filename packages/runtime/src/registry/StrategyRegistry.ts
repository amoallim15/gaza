import {
  StrategyConstructor,
  StrategyRegistry as StrategyRegistryType,
} from '../types'

const registry = new Map<string, StrategyConstructor>()

export const StrategyRegistry: StrategyRegistryType = {
  define(name, ctor) {
    registry.set(name, ctor)
  },

  get(name) {
    return registry.get(name)
  },

  create(name) {
    const ctor = registry.get(name)
    if (!ctor) throw new Error(`[Gaza] Strategy "${name}" not found`)
    return new ctor()
  },

  list() {
    return Array.from(registry.keys())
  },

  has(name) {
    return registry.has(name)
  },
}
