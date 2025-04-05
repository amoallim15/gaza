import { ComposableNode } from './ComposableNode'

interface BaseComposableOptions {
  composeKey?: string
  composeSchema?: Record<string, unknown>
  composeData?: Record<string, unknown> | unknown[]
  composeTemplate?: unknown

  composableChildren?: unknown
}

export type ComposableOptions<
  T extends Omit<Record<string, unknown>, keyof BaseComposableOptions> = {},
> = BaseComposableOptions & T
