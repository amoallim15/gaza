export interface ReferenceFragment {
  readonly key?: string
  readonly group?: string

  readonly parentNode: Node

  getFirstNode(): Node
  getLastNode(): Node
  getNodes(): Node[]

  replaceWith(other: ReferenceFragment): void
  swapWith(other: ReferenceFragment): void
  purge(): void
  clone(): ReferenceFragment
  isEmpty(): boolean
}
