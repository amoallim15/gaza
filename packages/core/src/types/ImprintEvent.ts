import { ImprintMetadata } from './ImprintMetadata'
import { Node, ReferenceFragment } from './Node'
import { GazaPacket } from './Payload'

export interface ImprintEvent<T = unknown> {
  detail: {
    payload: GazaPacket
    metadata: ImprintMetadata
  }
  currentTarget: Node<T>
  target?: ReferenceFragment
  virtual?: ReferenceFragment

  stopPropagation(): void
  preventDefault(): void
}
