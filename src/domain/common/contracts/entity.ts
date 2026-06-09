export type EntityContract<TEntityName extends string, TId, TShape extends object> = TShape & {
  readonly __entityName?: TEntityName;
  readonly id?: TId;
};
