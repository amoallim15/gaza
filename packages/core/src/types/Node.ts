import { ImprintEvent } from './ImprintEvent'
import { GazaPacket } from './Payload'

export interface Node<T = unknown> {
  readonly identifier: string
  readonly instance: T
  readonly imprintAttributes: ImprintAttributes

  imprint(payload: GazaPacket): void
  dispose(): void
  onImprint?(event: ImprintEvent<T>): void
  setImprintAttributes(next: Partial<ImprintAttributes>): void
}

export interface ImprintAttributes {
  identifier?: string
  schema?: Record<string, unknown>
  data?: unknown
  template?: unknown
  [key: string]: unknown
}

export interface ChildNodeDescriptor {
  index: number
  imprintAttributes?: ImprintAttributes
  [key: string]: unknown
}

export interface ReferenceFragment<T = unknown> {
  readonly parent?: T
  readonly children: T[]

  getCapabilities(): Record<string, boolean>
  supports(capability: string): boolean
}
