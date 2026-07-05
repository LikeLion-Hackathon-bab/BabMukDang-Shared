import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import {
  MealPlanIdSchema,
  MealPlanShareLinkIdSchema,
  MealPlanShareLinkTokenSchema,
} from "@/common/schema/id.schema";
import { MealPlanResponseSchema } from "./meal-plan.schema";

export const CreateMealPlanShareLinkRequestSchema = z.object({
  expiresAt: ISODateTimeStringSchema.optional(),
  guestJoinEnabled: z.boolean().default(true),
});

export const MealPlanShareLinkSummarySchema = z.object({
  shareLinkId: MealPlanShareLinkIdSchema,
  mealPlanId: MealPlanIdSchema,
  token: MealPlanShareLinkTokenSchema,
  url: z.string().url(),
  expiresAt: ISODateTimeStringSchema,
  guestJoinEnabled: z.boolean(),
  createdAt: ISODateTimeStringSchema,
});

export const MealPlanSharePreviewResponseSchema = z.object({
  mealPlanId: MealPlanIdSchema,
  token: MealPlanShareLinkTokenSchema,
  title: z.string(),
  ownerName: z.string(),
  participantCount: z.number().int().min(1),
  expiresAt: ISODateTimeStringSchema,
  guestJoinEnabled: z.boolean(),
});

export const JoinMealPlanGuestRequestSchema = z.object({
  nickname: z.string().min(1).max(50),
  password: z.string().min(1).max(100).optional(),
});

export const JoinMealPlanGuestResponseSchema = z.object({
  mealPlanId: MealPlanIdSchema,
  guestId: z.string().min(1),
  sessionToken: z.string().min(1),
});

export const MealPlanGuestSessionQuerySchema = z.object({
  sessionToken: z.string().min(1),
});

export const MealPlanGuestSessionResponseSchema = z.object({
  mealPlan: MealPlanResponseSchema,
  token: MealPlanShareLinkTokenSchema,
  guestId: z.string().min(1),
  nickname: z.string().min(1).max(50),
  sessionToken: z.string().min(1),
});
