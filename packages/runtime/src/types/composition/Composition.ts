export interface Composition {
  composeKey?: string
  composeSchema?: Record<string, unknown>
  composeData?: unknown
  compsoeTemplate?: unknown
  composeChildren?: unknown

  [key: string]: unknown
}
