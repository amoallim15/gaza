import {
  LayoutStrategy,
  RenderStrategy,
  RepeatStrategy,
  SelectStrategy,
  ShadowStrategy,
} from './types'
import { StrategyRegistryImpl } from './types/StrategyRegistry'

export const StrategyRegistry = new StrategyRegistryImpl()

StrategyRegistry.define('repeat', RepeatStrategy)
StrategyRegistry.define('select', SelectStrategy)
StrategyRegistry.define('layout', LayoutStrategy)
StrategyRegistry.define('shadow', ShadowStrategy)
StrategyRegistry.define('render', RenderStrategy)
