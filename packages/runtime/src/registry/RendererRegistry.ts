import { Renderer, RendererRegistry as RendererRegistryType } from '../types'

const registry = new Map<string, Renderer>()
let current: string | null = null

export const RendererRegistry: RendererRegistryType = {
  define(name, renderer) {
    registry.set(name, renderer)
    if (!current) current = name
  },

  get(name) {
    return registry.get(name)
  },

  use(name) {
    if (!registry.has(name)) {
      throw new Error(`Renderer "${name}" not found.`)
    }
    current = name
  },

  current() {
    if (!current) {
      throw new Error(`No renderer in use.`)
    }

    const renderer = registry.get(current)
    if (!renderer) {
      throw new Error(`Current renderer "${current}" is not defined.`)
    }

    return renderer
  },

  has(name) {
    return registry.has(name)
  },

  clear() {
    registry.clear()
    current = null
  },
}
