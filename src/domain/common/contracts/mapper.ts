export type MapperContract<TSource, TTarget> = (source: TSource) => TTarget;

export type AsyncMapperContract<TSource, TTarget> = (
  source: TSource
) => Promise<TTarget>;

export type MapperInput<TMapper> = TMapper extends (source: infer TSource) => unknown
  ? TSource
  : never;

export type MapperOutput<TMapper> = TMapper extends (...args: never[]) => infer TTarget
  ? TTarget
  : never;
