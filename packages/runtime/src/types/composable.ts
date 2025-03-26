import { ComposeEvent } from './event'

export interface ComposableOptions {
  composeStrategy?: string
  composeSource?: string
  composeSelectors?: string[]
  composeTemplateSelector?: string
  payloadSchema?: unknown
}

export interface ComposableElement<T = unknown> {
  compose: string
  oncompose?: (event: ComposeEvent<T>) => void
  source?: string
  template?: string
}

export interface ComposableMetadata {
  depth?: number
  sourceIndex?: number
  parentEvent?: ComposeEvent
}
