import { Renderer } from './Renderer'

export interface RendererRegistry {
  define(name: string, renderer: Renderer): void
  get(name: string): Renderer | undefined
  use(name: string): void
  current(): Renderer
  has(name: string): boolean
}
