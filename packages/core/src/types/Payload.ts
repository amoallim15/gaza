import { ImprintAttributes } from './Node'

export interface GazaPacket {
  targets: string[]
  source: string
  method: 'imprint' | 'dispatch'
  timestamp: number
  body: {
    attributes?: ImprintAttributes
    propagation?: GazaPacket[]
    operations?: PatchOp[]
    event?: Record<string, unknown>
    metadata?: Record<string, unknown>
  } & {
    [key: string]: unknown
  }
  [key: string]: unknown
}

export interface PatchOp {
  type: string
  [key: string]: unknown
}
