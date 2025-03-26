import { ComposableMetadata } from '../../types/composable'
import { ComposeEventMeta } from '../../types/event'
import { ReferenceFragment } from '../../types/fragment'
import { ComposeStrategy } from '../../types/strategy'

export class RenderStrategy implements ComposeStrategy {
  name: string = 'render'

  initialize(payload: any, metadata?: ComposableMetadata): void {
    throw new Error('Method not implemented.')
  }
  hasNext(): boolean {
    throw new Error('Method not implemented.')
  }
  next(): void {
    throw new Error('Method not implemented.')
  }
  finalize(): void {
    throw new Error('Method not implemented.')
  }
  getVirtualTarget(): ReferenceFragment {
    throw new Error('Method not implemented.')
  }
  getTargetFragment(): ReferenceFragment {
    throw new Error('Method not implemented.')
  }
  getStepMeta(): ComposeEventMeta {
    throw new Error('Method not implemented.')
  }
}
