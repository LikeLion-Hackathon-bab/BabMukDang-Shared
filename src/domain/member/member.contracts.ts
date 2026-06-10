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
export type MemberSummaryResponse = z.infer<typeof MemberSummaryResponseSchema>;
export type AuthPrincipal = z.infer<typeof AuthPrincipalSchema>;
export type FoodPreferenceItem = z.infer<typeof FoodPreferenceItemSchema>;
export type ProfileDetailResponse = z.infer<typeof ProfileDetailResponseSchema>;

export type MemberFoodPreference = z.infer<typeof MemberFoodPreferenceSchema>;
export type UpdatePreferenceRequest = z.infer<typeof UpdatePreferenceRequestSchema>;
/** @deprecated Use MemberResponse. */
export type User = MemberResponse;
