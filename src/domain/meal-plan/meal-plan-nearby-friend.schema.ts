import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { MealPlanIdSchema, MealPlanJoinRequestIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";

export const MealPlanNearbyFriendExposureIdSchema = z.string().uuid().brand<"MealPlanNearbyFriendExposureId">();

export const MealPlanNearbyFriendExposureStatusSchema = z.enum([
  "OPEN",
  "CLOSED",
  "EXPIRED",
]);

export const ExposeMealPlanToNearbyFriendsRequestSchema = z.object({
  radiusMeters: z.number().int().min(100).max(5000).default(1000),
  expiresAt: ISODateTimeStringSchema.optional(),
});

export const MealPlanNearbyFriendExposureSummarySchema = z.object({
  exposureId: MealPlanNearbyFriendExposureIdSchema,
  mealPlanId: MealPlanIdSchema,
  status: MealPlanNearbyFriendExposureStatusSchema,
  radiusMeters: z.number().int().min(100),
  exposedFriendCount: z.number().int().min(0),
  openedAt: ISODateTimeStringSchema,
  expiresAt: ISODateTimeStringSchema.nullable(),
  closedAt: ISODateTimeStringSchema.nullable(),
});

export const MealPlanJoinRequestStatusSchema = z.enum([
  "PENDING",
  "ACCEPTED",
  "REJECTED",
  "CANCELLED",
]);

export const CreateMealPlanJoinRequestSchema = z.object({
  message: z.string().max(500).default(""),
});

export const MealPlanJoinRequestSummarySchema = z.object({
  joinRequestId: MealPlanJoinRequestIdSchema,
  mealPlanId: MealPlanIdSchema,
  requester: MemberCoreSchema,
  status: MealPlanJoinRequestStatusSchema,
  message: z.string().max(500),
  requestedAt: ISODateTimeStringSchema,
  respondedAt: ISODateTimeStringSchema.nullable(),
});

export const NearbyFriendMealPlanSummarySchema = z.object({
  mealPlanId: MealPlanIdSchema,
  owner: MemberCoreSchema,
  title: z.string(),
  participantCount: z.number().int().min(1),
  distanceMeters: z.number().int().min(0),
  exposedAt: ISODateTimeStringSchema,
  expiresAt: ISODateTimeStringSchema.nullable(),
});
