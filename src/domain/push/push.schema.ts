import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { MealPlanIdSchema } from "@/common/schema/id.schema";
import {
  MealPlanLiveActivityBehaviorSchema,
  MealPlanNotificationKindSchema,
} from "@/meal-plan/meal-plan.schema";

export const PushProviderSchema = z.enum(["FCM", "APNS_LIVE_ACTIVITY"]);
export const PushPlatformSchema = z.enum(["WEB", "ANDROID", "IOS"]);
export const PushPermissionStatusSchema = z.enum([
  "UNKNOWN",
  "PROMPT",
  "GRANTED",
  "DENIED",
]);

export const PushTokenStatusSchema = z.enum(["ACTIVE", "REVOKED", "DISABLED"]);

export const RegisterPushTokenRequestSchema = z.object({
  provider: PushProviderSchema.default("FCM"),
  platform: PushPlatformSchema,
  token: z.string().min(10),
  deviceId: z.string().min(1).max(128),
  appVersion: z.string().min(1).max(64).optional(),
  buildNumber: z.string().min(1).max(64).optional(),
  permissionStatus: PushPermissionStatusSchema,
});

export const RevokePushTokenRequestSchema = z.object({
  provider: PushProviderSchema.default("FCM"),
  token: z.string().min(10).optional(),
  deviceId: z.string().min(1).max(128).optional(),
});

export const PushTokenResponseSchema = z.object({
  pushTokenId: z.string().uuid(),
  provider: PushProviderSchema,
  platform: PushPlatformSchema,
  deviceId: z.string(),
  status: PushTokenStatusSchema,
  permissionStatus: PushPermissionStatusSchema,
  appVersion: z.string().nullable(),
  buildNumber: z.string().nullable(),
  lastSeenAt: ISODateTimeStringSchema,
  revokedAt: ISODateTimeStringSchema.nullable(),
});

export const PushPayloadSchemaVersionSchema = z.literal("2026-06-17");

export const MealPlanPushPayloadDataSchema = z.object({
  schemaVersion: PushPayloadSchemaVersionSchema,
  notificationId: z.string().min(1),
  kind: MealPlanNotificationKindSchema,
  mealPlanId: MealPlanIdSchema,
  deepLink: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
  fcmPriority: z.coerce.number().int().min(0),
  liveActivityPriority: z.coerce.number().int().min(0),
  liveActivityBehavior: MealPlanLiveActivityBehaviorSchema,
});

export const PushDeliveryStatusSchema = z.enum([
  "PENDING",
  "SENT",
  "FAILED",
  "SKIPPED",
]);


export const PushDeliveryAttemptResultSchema = z.enum([
  "SENT",
  "FAILED",
  "SKIPPED",
]);

export const PushDeliveryAttemptSummarySchema = z.object({
  attemptId: z.string().uuid(),
  outboxId: z.string().uuid(),
  pushTokenId: z.string().uuid().nullable(),
  provider: PushProviderSchema,
  result: PushDeliveryAttemptResultSchema,
  providerMessageId: z.string().nullable(),
  errorCode: z.string().nullable(),
  errorMessage: z.string().nullable(),
  invalidToken: z.boolean(),
  createdAt: ISODateTimeStringSchema,
});

export const PushDeliveryOutboxSummarySchema = z.object({
  outboxId: z.string().uuid(),
  notificationId: z.string().min(1),
  memberId: z.number().int().positive(),
  status: PushDeliveryStatusSchema,
  attemptCount: z.number().int().min(0),
  lastError: z.string().nullable(),
  nextAttemptAt: ISODateTimeStringSchema.nullable(),
  sentAt: ISODateTimeStringSchema.nullable(),
  createdAt: ISODateTimeStringSchema,
});
