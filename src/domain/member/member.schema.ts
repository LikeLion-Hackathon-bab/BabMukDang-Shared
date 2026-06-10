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

export const CreateProfileRequestSchema = UpdateProfileRequestSchema.merge(
  UpdatePreferenceRequestSchema,
);
