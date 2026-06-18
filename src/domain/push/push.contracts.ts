import { z } from "zod";
import {
  MealPlanPushPayloadDataSchema,
  PushDeliveryAttemptResultSchema,
  PushDeliveryAttemptSummarySchema,
  PushDeliveryOutboxSummarySchema,
  PushDeliveryStatusSchema,
  PushPermissionStatusSchema,
  PushPlatformSchema,
  PushProviderSchema,
  PushTokenResponseSchema,
  PushTokenStatusSchema,
  RegisterPushTokenRequestSchema,
  RevokePushTokenRequestSchema,
} from "./push.schema";

export type PushProvider = z.infer<typeof PushProviderSchema>;
export type PushPlatform = z.infer<typeof PushPlatformSchema>;
export type PushPermissionStatus = z.infer<typeof PushPermissionStatusSchema>;
export type PushTokenStatus = z.infer<typeof PushTokenStatusSchema>;
export type RegisterPushTokenRequest = z.infer<typeof RegisterPushTokenRequestSchema>;
export type RevokePushTokenRequest = z.infer<typeof RevokePushTokenRequestSchema>;
export type PushTokenResponse = z.infer<typeof PushTokenResponseSchema>;
export type MealPlanPushPayloadData = z.infer<typeof MealPlanPushPayloadDataSchema>;
export type PushDeliveryStatus = z.infer<typeof PushDeliveryStatusSchema>;
export type PushDeliveryAttemptResult = z.infer<typeof PushDeliveryAttemptResultSchema>;
export type PushDeliveryAttemptSummary = z.infer<typeof PushDeliveryAttemptSummarySchema>;
export type PushDeliveryOutboxSummary = z.infer<typeof PushDeliveryOutboxSummarySchema>;
