import { z } from "zod";
import {
  ApiFailureSchema,
  ApiResponseSchema,
  ApiSuccessSchema,
  CreatedEntityIdResponseSchema,
  NoContentSchema,
} from "../schema/envelope.schema";

export type NoContent = z.infer<typeof NoContentSchema>;
export type ApiSuccess<T> = z.infer<ReturnType<typeof ApiSuccessSchema<z.ZodType<T>>>>;
export type ApiFailure = z.infer<typeof ApiFailureSchema>;
export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
export type CreatedEntityIdResponse = z.infer<typeof CreatedEntityIdResponseSchema>;

export const makeApiResponseSchema = ApiResponseSchema;
export const makeApiSuccessSchema = ApiSuccessSchema;
