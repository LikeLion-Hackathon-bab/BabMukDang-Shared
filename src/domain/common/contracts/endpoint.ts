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

/** apiContract 맵의 모양 검사용. 개별 endpoint 타입을 넓히는 주석으로 쓰지 않는다. */
export type AnyEndpointContract = EndpointContract<
  HttpMethod,
  string,
  z.ZodTypeAny,
  z.ZodTypeAny,
  z.ZodTypeAny,
  z.ZodTypeAny
>;

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
  pathParams: contract.pathParams ?? (NoParamsSchema as unknown as TPathParams),
  query: contract.query ?? (NoQuerySchema as unknown as TQuery),
  body: contract.body ?? (NoBodySchema as unknown as TBody),
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
// 요청을 보내는 쪽(Client)은 스키마 기본값이 적용되기 전 값을 넣으므로 z.input 기준 타입을 쓴다.
export type BodyInputOf<E> =
  E extends EndpointContract<any, any, any, any, infer TBody, any> ? z.input<TBody> : never;
export type QueryInputOf<E> =
  E extends EndpointContract<any, any, any, infer TQuery, any, any> ? z.input<TQuery> : never;
export type PathParamsInputOf<E> =
  E extends EndpointContract<any, any, infer TPathParams, any, any, any>
    ? z.input<TPathParams>
    : never;
export type ResponseOf<E> =
  E extends EndpointContract<any, any, any, any, any, infer TResponse> ? z.infer<TResponse> : never;
