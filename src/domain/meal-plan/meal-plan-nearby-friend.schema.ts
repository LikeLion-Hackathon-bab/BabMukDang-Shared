import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import {
  MealPlanIdSchema,
  MealPlanJoinRequestIdSchema,
  MealPlanNearbyFriendExposureBatchIdSchema,
} from "@/common/schema/id.schema";
import { MemberCoreSchema, LocationConsentStatusSchema } from "@/member/member.schema";

export const MealPlanNearbyFriendExposureIdSchema = z.string().uuid().brand<"MealPlanNearbyFriendExposureId">();
export const MealPlanNearbyFriendExposureStatusSchema = z.enum([
  "OPEN",
  "CLOSED",
  "EXPIRED",
]);

export const MealPlanNearbyFriendExposureNotificationStatusSchema = z.enum([
  "PENDING",
  "SENT",
  "PARTIAL",
  "FAILED",
  "SKIPPED",
]);

export const ExposeMealPlanToNearbyFriendsRequestSchema = z.object({
  radiusMeters: z.number().int().min(100).max(5000).default(1000),
  expiresAt: ISODateTimeStringSchema.optional(),
});

export const NearbyFriendExposureEligibilitySchema = z.object({
  canExpose: z.boolean(),
  locationConsentStatus: LocationConsentStatusSchema,
  nearbyMealPlanExposureAllowed: z.boolean(),
  mealSuggestionAllowed: z.boolean(),
  hasLastKnownLocation: z.boolean(),
  missingRequirements: z.array(z.enum([
    "LOCATION_PERMISSION",
    "SERVICE_LOCATION_CONSENT",
    "NEARBY_EXPOSURE_TOGGLE",
    "MEAL_SUGGESTION_TOGGLE",
    "LAST_KNOWN_LOCATION",
  ])),
});


export const MealPlanNearbyFriendRejectionReasonSchema = z.enum([
  "NOT_FRIEND",
  "BLOCKED",
  "LOCATION_CONSENT_REQUIRED",
  "LOCATION_UNAVAILABLE",
  "OUT_OF_RADIUS",
  "MEAL_SUGGESTION_DISABLED",
  "NOT_HUNGRY",
]);

export const MealPlanNearbyFriendRejectionSummarySchema = z.object({
  reason: MealPlanNearbyFriendRejectionReasonSchema,
  count: z.number().int().min(0),
});

export const ExposeMealPlanToNearbyFriendsResponseSchema = z.object({
  mealPlanId: MealPlanIdSchema,
  exposureBatchId: MealPlanNearbyFriendExposureBatchIdSchema,
  exposedFriendCount: z.number().int().min(0),
  rejectedFriendCount: z.number().int().min(0),
  notificationStatus: MealPlanNearbyFriendExposureNotificationStatusSchema,
  rejectionSummary: z.array(MealPlanNearbyFriendRejectionSummarySchema),
});

export const MealPlanNearbyFriendExposureSummarySchema = z.object({
  exposureId: MealPlanNearbyFriendExposureIdSchema,
  exposureBatchId: MealPlanNearbyFriendExposureBatchIdSchema.nullable(),
  mealPlanId: MealPlanIdSchema,
  status: MealPlanNearbyFriendExposureStatusSchema,
  radiusMeters: z.number().int().min(100),
  exposedFriendCount: z.number().int().min(0),
  openedAt: ISODateTimeStringSchema,
  expiresAt: ISODateTimeStringSchema.nullable(),
  closedAt: ISODateTimeStringSchema.nullable(),
});

export const MealPlanNearbyFriendExposureBatchSummarySchema = z.object({
  exposureBatchId: MealPlanNearbyFriendExposureBatchIdSchema,
  mealPlanId: MealPlanIdSchema,
  status: MealPlanNearbyFriendExposureStatusSchema,
  radiusMeters: z.number().int().min(100),
  exposedFriendCount: z.number().int().min(0),
  rejectedFriendCount: z.number().int().min(0),
  rejectionSummary: z.array(MealPlanNearbyFriendRejectionSummarySchema),
  notificationStatus: MealPlanNearbyFriendExposureNotificationStatusSchema,
  notificationSentAt: ISODateTimeStringSchema.nullable(),
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
  joinRequestStatus: MealPlanJoinRequestStatusSchema.nullable().default(null),
});
