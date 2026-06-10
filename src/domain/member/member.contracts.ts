import { z } from "zod";
import {
  AuthPrincipalSchema,
  MemberCoreSchema,
  MemberResponseSchema,
  MemberRoleSchema,
  MemberSummaryResponseSchema,
  PreferenceMetaResponseSchema,
  ProfileDetailResponseSchema,
  ProfilePreferenceItemSchema,
} from "./member.schema";
import {
  OnboardingPreferenceRequestSchema,
  OnboardingRequestSchema,
  PresignProfileResponseSchema,
  UpdateProfileRequestSchema,
} from "./member.schema";

export type UpdateProfileRequest = z.infer<typeof UpdateProfileRequestSchema>;
export type OnboardingPreferenceRequest = z.infer<typeof OnboardingPreferenceRequestSchema>;
export type OnboardingRequest = z.infer<typeof OnboardingRequestSchema>;
export type PresignProfileResponse = z.infer<typeof PresignProfileResponseSchema>;

export type MemberRole = z.infer<typeof MemberRoleSchema>;
export type MemberResponse = z.infer<typeof MemberResponseSchema>;
export type MemberCore = z.infer<typeof MemberCoreSchema>;
export type MemberSummaryResponse = z.infer<typeof MemberSummaryResponseSchema>;
export type AuthPrincipal = z.infer<typeof AuthPrincipalSchema>;
export type ProfilePreferenceItem = z.infer<typeof ProfilePreferenceItemSchema>;
export type ProfileDetailResponse = z.infer<typeof ProfileDetailResponseSchema>;
export type PreferenceMetaResponse = z.infer<typeof PreferenceMetaResponseSchema>;
/** @deprecated Use MemberResponse. */
export type User = MemberResponse;
