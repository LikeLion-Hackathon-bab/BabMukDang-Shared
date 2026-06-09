import { z } from "zod";

export type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export const NoBodySchema = z.undefined();
export const NoQuerySchema = z.undefined();
export const NoParamsSchema = z.undefined();

export interface EndpointContract<
  TMethod extends HttpMethod,
  TPath extends string,
  TPathParams extends z.ZodTypeAny,
  TQuery extends z.ZodTypeAny,
  TBody extends z.ZodTypeAny,
  TResponse extends z.ZodTypeAny,
> {
  readonly method: TMethod;
  readonly path: TPath;
  readonly pathParams: TPathParams;
  readonly query: TQuery;
  readonly body: TBody;
  readonly response: TResponse;
}

export const endpoint = <
  TMethod extends HttpMethod,
  TPath extends string,
  TPathParams extends z.ZodTypeAny = typeof NoParamsSchema,
  TQuery extends z.ZodTypeAny = typeof NoQuerySchema,
  TBody extends z.ZodTypeAny = typeof NoBodySchema,
  TResponse extends z.ZodTypeAny = z.ZodNever,
>(contract: {
  method: TMethod;
  path: TPath;
  pathParams?: TPathParams;
  query?: TQuery;
  body?: TBody;
  response: TResponse;
}): EndpointContract<TMethod, TPath, TPathParams, TQuery, TBody, TResponse> => ({
  method: contract.method,
  path: contract.path,
  pathParams: contract.pathParams ?? (NoParamsSchema as TPathParams),
  query: contract.query ?? (NoQuerySchema as TQuery),
  body: contract.body ?? (NoBodySchema as TBody),
  response: contract.response,
});

export type BodyOf<E> =
  E extends EndpointContract<any, any, any, any, infer TBody, any> ? z.infer<TBody> : never;
export type QueryOf<E> =
  E extends EndpointContract<any, any, any, infer TQuery, any, any> ? z.infer<TQuery> : never;
export type PathParamsOf<E> =
  E extends EndpointContract<any, any, infer TPathParams, any, any, any>
    ? z.infer<TPathParams>
    : never;
export type ResponseOf<E> =
  E extends EndpointContract<any, any, any, any, any, infer TResponse> ? z.infer<TResponse> : never;
