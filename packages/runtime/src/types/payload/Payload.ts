import { Composition } from '../composition'

export interface Payload {
  composition?: Partial<Composition>
  [strategyKey: string]: unknown
}
