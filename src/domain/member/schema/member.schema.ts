import { z } from "zod";
import { ISODateTimeStringSchema } from "../../common/schema/date.schema";
import { MemberIdSchema } from "../../common/schema/id.schema";

export const MemberRoleSchema = z.enum(["USER", "ADMIN"]);

export const MemberCoreSchema = z.object({
  memberId: MemberIdSchema,
  username: z.string().min(1).max(50),
  profileImageUrl: z.string().url().nullable(),
});

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

export const ProfilePreferenceItemSchema = z.object({
  code: z.string(),
  label: z.string(),
});

export const ProfileDetailResponseSchema = MemberCoreSchema.extend({
  bio: z.string().nullable(),
  planCount: z.number().int().min(0),
  likes: z.array(ProfilePreferenceItemSchema),
  dislikes: z.array(ProfilePreferenceItemSchema),
  allergies: z.array(ProfilePreferenceItemSchema),
});

export const UpdateProfileRequestSchema = z.object({
  username: z.string().min(1).max(50),
  profileImageUrl: z.string().url().nullable(),
  bio: z.string().max(500).nullable(),
});

export const OnboardingPreferenceRequestSchema = z.object({
  likedCodes: z.array(z.string()),
  dislikedCodes: z.array(z.string()),
  allergyCodes: z.array(z.string()),
});

export const OnboardingRequestSchema = UpdateProfileRequestSchema.merge(
  OnboardingPreferenceRequestSchema
);

export const PreferenceMetaResponseSchema = z.object({
  onboardedAt: ISODateTimeStringSchema.nullable(),
  lastUpdatedAt: ISODateTimeStringSchema.nullable(),
  revision: z.number().int().min(0),
});
