export interface ReferenceFragment<T = unknown> {
  readonly composeKey: string
  readonly parent: T
  readonly children: T[]

  getCapabilities(): Record<string, T>
  supports(capability: string): boolean

  replaceChildren(fragment: ReferenceFragment<T>): void
  insertAt(index: number, nodes: T[]): void
  replaceAt(index: number, node: T): void
  at(index: number): T | undefined
  length(): number
  clear(): void
  clone(): ReferenceFragment<T>
}
