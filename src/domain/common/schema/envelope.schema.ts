import { z } from "zod";
import {
  ArticleIdSchema,
  CommentIdSchema,
  CouponIdSchema,
  InvitationIdSchema,
  PlanIdSchema,
  RecruitIdSchema,
  SubscriptionIdSchema,
} from "./id.schema";

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

export const CreatedEntityIdResponseSchema = z.discriminatedUnion("entity", [
  z.object({ entity: z.literal("article"), id: ArticleIdSchema }),
  z.object({ entity: z.literal("comment"), id: CommentIdSchema }),
  z.object({ entity: z.literal("recruit"), id: RecruitIdSchema }),
  z.object({ entity: z.literal("invitation"), id: InvitationIdSchema }),
  z.object({ entity: z.literal("subscription"), id: SubscriptionIdSchema }),
  z.object({ entity: z.literal("coupon"), id: CouponIdSchema }),
  z.object({ entity: z.literal("plan"), id: PlanIdSchema }),
]);
