interface BaseEventMeta {}

export type EventMeta<
  T extends Omit<Record<string, unknown>, keyof BaseEventMeta> = {},
> = BaseEventMeta & T
