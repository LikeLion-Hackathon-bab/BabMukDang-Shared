import { z } from "zod";

export const NoContentSchema = z.null();

export const ApiSuccessSchema = <TData extends z.ZodTypeAny>(data: TData) =>
  z.object({
    success: z.literal(true),
    code: z.number().int(),
    message: z.string(),
    data,
  });

export const ApiFailureSchema = z.object({
  success: z.literal(false),
  status: z.number().int(),
  code: z.string(),
  message: z.string(),
});

export const ApiResponseSchema = <TData extends z.ZodTypeAny>(data: TData) =>
  z.union([ApiSuccessSchema(data), ApiFailureSchema]);

export const CreatedIdResponseSchema = z.object({
  id: z.number().int().positive(),
});

export const CreatedEntityIdResponseSchema = z.object({
  entity: z.enum(["article", "comment", "recruit", "invitation", "subscription", "coupon", "plan"]),
  id: z.number().int().positive(),
});
