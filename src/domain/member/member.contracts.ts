import { z } from "zod";
import {
  MemberCoreSchema,
  MemberResponseSchema,
  LocationConsentStatusSchema,
  OnboardingStatusSchema,
  PermissionKindSchema,
  PermissionStatusSchema,
  PermissionPlatformSchema,
  DevicePermissionSnapshotSchema,
  MemberLocationSchema,
  UpdateMemberLocationRequestSchema,
  UpdateMemberLocationConsentRequestSchema,
  MemberLocationSettingsResponseSchema,
  CompleteOnboardingRequestSchema,
  OnboardingDraftSchema,
  MemberRoleSchema,
  ProfileDetailResponseSchema,
  MemberSerachResponseSchema,
  CreateProfileRequestSchema,
  MemberFoodPreferenceSchema,
  MemberSearchQuerySchema,
  MemberDetailSchema,
  UpdatePreferenceRequestSchema,
} from "./member.schema";
import {
  UploadProfileImageResponseSchema,
  UploadProfileImageRequestSchema,
  UpdateProfileRequestSchema,
} from "./member.schema";

export type MemberRole = z.infer<typeof MemberRoleSchema>;
export type LocationConsentStatus = z.infer<typeof LocationConsentStatusSchema>;
export type OnboardingStatus = z.infer<typeof OnboardingStatusSchema>;
export type PermissionKind = z.infer<typeof PermissionKindSchema>;
export type PermissionStatus = z.infer<typeof PermissionStatusSchema>;
export type PermissionPlatform = z.infer<typeof PermissionPlatformSchema>;
export type DevicePermissionSnapshot = z.infer<typeof DevicePermissionSnapshotSchema>;
export type MemberLocation = z.infer<typeof MemberLocationSchema>;
export type UpdateMemberLocationRequest = z.infer<typeof UpdateMemberLocationRequestSchema>;
export type UpdateMemberLocationConsentRequest = z.infer<typeof UpdateMemberLocationConsentRequestSchema>;
export type MemberLocationSettingsResponse = z.infer<typeof MemberLocationSettingsResponseSchema>;
export type MemberResponse = z.infer<typeof MemberResponseSchema>;
export type MemberCore = z.infer<typeof MemberCoreSchema>;

export type UpdateProfileRequest = z.infer<typeof UpdateProfileRequestSchema>;
export type CompleteOnboardingRequest = z.infer<typeof CompleteOnboardingRequestSchema>;
export type OnboardingDraft = z.infer<typeof OnboardingDraftSchema>;
export type CreateProfileRequest = z.infer<typeof CreateProfileRequestSchema>;
export type UploadProfileImageResponse = z.infer<typeof UploadProfileImageResponseSchema>;
export type UploadProfileImageRequest = z.infer<typeof UploadProfileImageRequestSchema>;
export type MemberDetail = z.infer<typeof MemberDetailSchema>;
export type ProfileDetailResponse = z.infer<typeof ProfileDetailResponseSchema>;

export type MemberFoodPreference = z.infer<typeof MemberFoodPreferenceSchema>;
export type UpdatePreferenceRequest = z.infer<typeof UpdatePreferenceRequestSchema>;

export type MemberSearchQuery = z.infer<typeof MemberSearchQuerySchema>;
export type MemberSerachResponse = z.infer<typeof MemberSerachResponseSchema>;
