import './strategy/registry'

export { compose } from './core/compose'
export { initComposable } from './core/initialize'
export { StrategyRegistry } from './strategy/registry'

// Optionally export types
export type { ComposeStrategy } from './types/strategy'
export type { ComposableOptions } from './types/composable'
export type { ComposeEvent } from './types/event'
export type { ReferenceFragment } from './types/fragment'
