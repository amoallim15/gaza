import {
  ComposableNode,
  ComposeEvent,
  ComposeMetadata,
  Payload,
  ReferenceFragment,
} from '../types'

export class ComposeEventImpl<T = unknown> implements ComposeEvent {
  readonly payload: Payload
  readonly metadata: ComposeMetadata

  readonly currentTarget: ComposableNode<T>
  readonly virtual: ReferenceFragment<T>
  readonly target: ReferenceFragment<T>

  private scoped = new Map<string, Payload>()
  private _stopPropagation = false
  private _stopIteration = false
  private _preventDefault = false

  constructor(
    currentTarget: ComposableNode<T>,
    payload: Payload = {},
    metadata: ComposeMetadata = {},
    target: ReferenceFragment<T>,
    virtual: ReferenceFragment<T>
  ) {
    this.currentTarget = currentTarget
    this.virtual = virtual
    this.target = target
    this.payload = Object.freeze({ ...payload })
    this.metadata = Object.freeze({ ...metadata })
  }

  getAllScopedPayloads(): Record<string, Payload> {
    return Object.fromEntries(this.scoped.entries())
  }

  getScopedPayload(key: string): Payload | undefined {
    return this.scoped.get(key)
  }

  setScopedPayload(key: string, payload: Payload): void {
    this.scoped.set(key, payload)
  }

  hasScopedPayload(key: string): boolean {
    return this.scoped.has(key)
  }

  stopPropagation(): void {
    this._stopPropagation = true
  }

  stopIteration(): void {
    this._stopIteration = true
  }

  preventDefault(): void {
    this._preventDefault = true
  }

  abort(): void {
    this._stopPropagation = true
    this._stopIteration = true
    this._preventDefault = true
  }

  get propagationStopped(): boolean {
    return this._stopPropagation
  }

  get iterationStopped(): boolean {
    return this._stopIteration
  }

  get defaultPrevented(): boolean {
    return this._preventDefault
  }
}
