import { z } from "zod";
import {
  MemberCoreSchema,
  MemberResponseSchema,
  MemberRoleSchema,
  ProfileDetailResponseSchema,
  MemberSerachResponseSchema,
  CreateProfileRequestSchema,
  MemberFoodPreferenceSchema,
  MemberSearchQuerySchema,
  MemberDetailSchema,
  UpdatePreferenceRequestSchema,
} from "./member.schema";
import { PresignProfileResponseSchema, UpdateProfileRequestSchema } from "./member.schema";

export type MemberRole = z.infer<typeof MemberRoleSchema>;
export type MemberResponse = z.infer<typeof MemberResponseSchema>;
export type MemberCore = z.infer<typeof MemberCoreSchema>;

export type UpdateProfileRequest = z.infer<typeof UpdateProfileRequestSchema>;
export type CreateProfileRequest = z.infer<typeof CreateProfileRequestSchema>;
export type PresignProfileResponse = z.infer<typeof PresignProfileResponseSchema>;
export type MemberDetail = z.infer<typeof MemberDetailSchema>;
export type ProfileDetailResponse = z.infer<typeof ProfileDetailResponseSchema>;

export type MemberFoodPreference = z.infer<typeof MemberFoodPreferenceSchema>;
export type UpdatePreferenceRequest = z.infer<typeof UpdatePreferenceRequestSchema>;

export type MemberSearchQuery = z.infer<typeof MemberSearchQuerySchema>;
export type MemberSerachResponse = z.infer<typeof MemberSerachResponseSchema>;
/** @deprecated Use MemberResponse. */
export type User = MemberResponse;
