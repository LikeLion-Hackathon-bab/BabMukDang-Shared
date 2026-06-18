import { z } from "zod";
import { FoodSchema, MemberIdSchema } from "../common/schema/id.schema";
import {
  UploadPresignImageResponseSchema,
  UploadPresignImageRequestSchema,
} from "../common/contracts/upload";

export const MemberRoleSchema = z.enum(["USER", "ADMIN"]);

export const LocationConsentStatusSchema = z.enum(["UNKNOWN", "GRANTED", "DENIED"]);
export const OnboardingStatusSchema = z.enum(["REQUIRED", "COMPLETED"]);

export const PermissionKindSchema = z.enum(["LOCATION", "NOTIFICATION", "CAMERA"]);
export const PermissionStatusSchema = z.enum([
  "UNKNOWN",
  "PROMPT",
  "GRANTED",
  "DENIED",
  "LIMITED",
  "UNSUPPORTED",
]);
export const PermissionPlatformSchema = z.enum(["WEB", "IOS", "ANDROID", "UNKNOWN"]);

export const DevicePermissionSnapshotSchema = z.object({
  kind: PermissionKindSchema,
  status: PermissionStatusSchema,
  platform: PermissionPlatformSchema.default("UNKNOWN"),
  canAskAgain: z.boolean().optional(),
  checkedAt: z.string().datetime(),
});

export const MemberLocationSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  accuracyMeters: z.number().min(0).nullable().optional(),
  capturedAt: z.string().datetime(),
});

export const UpdateMemberLocationRequestSchema = MemberLocationSchema;

export const UpdateMemberLocationConsentRequestSchema = z.object({
  locationConsentStatus: LocationConsentStatusSchema,
  nearbyMealPlanExposureAllowed: z.boolean().default(false),
  mealSuggestionAllowed: z.boolean().optional(),
  permissionSnapshot: DevicePermissionSnapshotSchema.optional(),
});

export const MemberLocationSettingsResponseSchema = z.object({
  locationConsentStatus: LocationConsentStatusSchema,
  nearbyMealPlanExposureAllowed: z.boolean(),
  mealSuggestionAllowed: z.boolean(),
  lastKnownLocation: MemberLocationSchema.nullable(),
  permissionSnapshot: DevicePermissionSnapshotSchema.nullable().optional(),
  updatedAt: z.string().datetime().nullable(),
});

export const MemberCoreSchema = z.object({
  memberId: MemberIdSchema,
  username: z.string().min(1).max(50),
  profileImageUrl: z.string().url().nullable().optional(),
});

export const UploadProfileImageResponseSchema = UploadPresignImageResponseSchema.extend({});
export const UploadProfileImageRequestSchema = UploadPresignImageRequestSchema.extend({});

export const MemberResponseSchema = MemberCoreSchema.pick({
  memberId: true,
  username: true,
  profileImageUrl: true,
}).extend({
  onboardingStatus: OnboardingStatusSchema.default("REQUIRED"),
  onboardingCompletedAt: z.string().datetime().nullable().default(null),
  locationConsentStatus: LocationConsentStatusSchema.optional(),
  nearbyMealPlanExposureAllowed: z.boolean().optional(),
});

export const MemberSearchQuerySchema = z.object({
  email: z.string().email().optional(),
  username: z.string().optional(),
});

export const MemberSerachResponseSchema = z.array(MemberCoreSchema);

export const MemberDetailSchema = MemberCoreSchema.extend({
  bio: z.string().nullable(),
  friendConunt: z.number().int().min(0).default(0),
  completedPlans: z.number().int().min(0).default(0),
  uncompletedPlans: z.number().int().min(0).default(0),
  onboardingStatus: OnboardingStatusSchema.default("REQUIRED"),
  onboardingCompletedAt: z.string().datetime().nullable().default(null),
  locationConsentStatus: LocationConsentStatusSchema.default("UNKNOWN"),
  nearbyMealPlanExposureAllowed: z.boolean().default(false),
});

const FoodPreferenceItemSchema = FoodSchema.extend({});

export const MemberFoodPreferenceSchema = z.object({
  liked: z.array(FoodPreferenceItemSchema).optional(),
  disliked: z.array(FoodPreferenceItemSchema).optional(),
  allergy: z.array(FoodPreferenceItemSchema).optional(),
});

export const ProfileDetailResponseSchema = MemberDetailSchema;

export const UpdateProfileRequestSchema = z.object({
  username: z.string().min(1).max(50),
  profileImageUrl: z.string().url().nullable(),
  bio: z.string().max(500).nullable(),
});

export const UpdatePreferenceRequestSchema = MemberFoodPreferenceSchema;

export const CompleteOnboardingRequestSchema = UpdateProfileRequestSchema.merge(
  UpdatePreferenceRequestSchema,
);

export const OnboardingDraftSchema = z.object({
  username: z.string().min(1).max(50).optional(),
  profileImageUrl: z.string().url().nullable().optional(),
  bio: z.string().max(500).nullable().optional(),
  liked: z.array(FoodPreferenceItemSchema).optional(),
  disliked: z.array(FoodPreferenceItemSchema).optional(),
  allergy: z.array(FoodPreferenceItemSchema).optional(),
});

export const CreateProfileRequestSchema = CompleteOnboardingRequestSchema;
