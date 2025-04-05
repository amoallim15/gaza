interface BaseRendererInfo {
  name: string
  version: string
  key: string
}

export type RendererInfo<T extends Record<string, string> = {}> =
  BaseRendererInfo & T
