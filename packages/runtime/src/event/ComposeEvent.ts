import { ComposableElement } from '../types/composable'
import { ComposeEvent, ComposeEventMeta } from '../types/event'
import { ReferenceFragment } from '../types/fragment'

export class ComposeEventImpl<T> implements ComposeEvent<T> {
  readonly type = 'compose'
  readonly detail: T
  readonly currentTarget: ComposableElement
  readonly target: ReferenceFragment
  readonly virtualTarget: ReferenceFragment
  readonly meta: ComposeEventMeta
  readonly depth: number

  #defaultPrevented = false
  #propagationStopped = false

  constructor(args: {
    detail: T
    currentTarget: ComposableElement
    target: ReferenceFragment
    virtualTarget: ReferenceFragment
    meta?: ComposeEventMeta
    depth?: number
  }) {
    this.detail = args.detail
    this.currentTarget = args.currentTarget
    this.target = args.target
    this.virtualTarget = args.virtualTarget
    this.meta = args.meta ?? {}
    this.depth = args.depth ?? 0
  }

  stopPropagation(): void {
    this.#propagationStopped = true
  }

  preventDefault(): void {
    this.#defaultPrevented = true
  }

  get propagationStopped(): boolean {
    return this.#propagationStopped
  }

  get defaultPrevented(): boolean {
    return this.#defaultPrevented
  }
}
