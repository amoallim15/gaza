export interface ReferenceFragment<T = unknown> {
  readonly composeKey: string

  getParent(): T
  getChildren(): T[]

  getCapabilities(): Set<string>
  supports(capability: string): boolean

  replaceWith(fragment: ReferenceFragment<T>): void
  append(...nodes: T[]): void
  prepend(...nodes: T[]): void
  insertBefore(newNode: T, referenceNode: T | null): void

  clear(): void
  clone(): ReferenceFragment<T>
}
