import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { MealPlanIdSchema } from "@/common/schema/id.schema";
import {
  MealPlanLiveActivityBehaviorSchema,
  MealPlanNotificationKindSchema,
} from "@/meal-plan";
import { PushPlatformSchema } from "@/push";

export const MealPlanLiveActivityPlatformSchema = z.enum([
  "IOS_LIVE_ACTIVITY",
  "ANDROID_LIVE_UPDATE",
]);

export const MealPlanLiveActivitySessionStatusSchema = z.enum([
  "ACTIVE",
  "ENDED",
  "EXPIRED",
  "DISABLED",
]);

export const MealPlanLiveActivityUpdateStatusSchema = z.enum([
  "PENDING",
  "SENT",
  "FAILED",
  "SKIPPED",
]);

export const RegisterMealPlanLiveActivitySessionRequestSchema = z.object({
  platform: MealPlanLiveActivityPlatformSchema,
  deviceId: z.string().min(1).max(128),
  activityId: z.string().min(1).max(128),
  pushToken: z.string().min(10).optional(),
  appVersion: z.string().min(1).max(64).optional(),
  buildNumber: z.string().min(1).max(64).optional(),
});

export const EndMealPlanLiveActivitySessionRequestSchema = z.object({
  platform: MealPlanLiveActivityPlatformSchema.optional(),
  deviceId: z.string().min(1).max(128).optional(),
  activityId: z.string().min(1).max(128).optional(),
});

export const MealPlanLiveActivityStateSchema = z.object({
  mealPlanId: MealPlanIdSchema,
  title: z.string().min(1),
  status: z.string().min(1),
  scheduledAt: ISODateTimeStringSchema.nullable(),
  restaurantName: z.string().nullable(),
  placeName: z.string().nullable(),
  deepLink: z.string().min(1),
  progressLabel: z.string().min(1),
  updatedAt: ISODateTimeStringSchema,
});

export const MealPlanLiveActivitySessionResponseSchema = z.object({
  sessionId: z.string().uuid(),
  mealPlanId: MealPlanIdSchema,
  memberId: z.number().int().positive(),
  platform: MealPlanLiveActivityPlatformSchema,
  devicePlatform: PushPlatformSchema,
  deviceId: z.string(),
  activityId: z.string(),
  status: MealPlanLiveActivitySessionStatusSchema,
  appVersion: z.string().nullable(),
  buildNumber: z.string().nullable(),
  lastEventKind: MealPlanNotificationKindSchema.nullable(),
  lastBehavior: MealPlanLiveActivityBehaviorSchema.nullable(),
  lastUpdateStatus: MealPlanLiveActivityUpdateStatusSchema.nullable(),
  lastError: z.string().nullable(),
  startedAt: ISODateTimeStringSchema,
  endedAt: ISODateTimeStringSchema.nullable(),
  updatedAt: ISODateTimeStringSchema,
});

export const MealPlanLiveActivitySessionListResponseSchema = z.object({
  mealPlanId: MealPlanIdSchema,
  state: MealPlanLiveActivityStateSchema,
  sessions: z.array(MealPlanLiveActivitySessionResponseSchema),
});
