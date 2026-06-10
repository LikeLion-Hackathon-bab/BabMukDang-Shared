import { z } from "zod";
import { FoodSchema, MemberIdSchema } from "../common/schema/id.schema";
import { PresignUploadResponseSchema } from "../common/contracts/upload";

export const MemberRoleSchema = z.enum(["USER", "ADMIN"]);

export const MemberCoreSchema = z.object({
  memberId: MemberIdSchema,
  username: z.string().min(1).max(50),
  profileImageUrl: z.string().url().nullable().optional(),
});

export const PresignProfileResponseSchema = PresignUploadResponseSchema.extend({});

export const MemberResponseSchema = MemberCoreSchema.pick({
  memberId: true,
  username: true,
  profileImageUrl: true,
});

export const MemberSummaryResponseSchema = MemberCoreSchema.extend({
  friends: z.number().int().min(0).default(0),
  completedPlans: z.number().int().min(0).default(0),
  uncompletedPlans: z.number().int().min(0).default(0),
});

export const AuthPrincipalSchema = z.object({
  memberId: MemberIdSchema,
  role: MemberRoleSchema,
});

const FoodPreferenceItemSchema = FoodSchema.extend({});

export const MemberFoodPreferenceSchema = z.object({
  liked: z.array(FoodPreferenceItemSchema).optional(),
  disliked: z.array(FoodPreferenceItemSchema).optional(),
  allergy: z.array(FoodPreferenceItemSchema).optional(),
});

export const UpdateProfileRequestSchema = z.object({
  username: z.string().min(1).max(50),
  profileImageUrl: z.string().url().nullable(),
  bio: z.string().max(500).nullable(),
});

export const UpdatePreferenceRequestSchema = MemberFoodPreferenceSchema;

export const OnboardingRequestSchema = UpdateProfileRequestSchema.merge(
  OnboardingPreferenceRequestSchema,
);
