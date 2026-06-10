import type { Menu } from "../matching";

export interface Onboarding {
  likedCodes: string[];
  dislikedCodes: string[];
  allergyCodes: string[];
}
export type { OnboardingPreferenceRequest } from "@/member/contracts/member.request";
export interface OnboardingPreferenceResponse extends Onboarding {}

export interface PreferenceSummaryResponse {
  likes: Menu[];
  dislikes: Menu[];
  allergies: Menu[];
}

export type {
  PreferenceMetaResponse,
  ProfileDetailResponse,
  ProfilePreferenceItem as PreferenceItem,
  MemberSummaryResponse,
} from "@/member/contracts/member.response";
export type {
  OnboardingRequest,
  UpdateProfileRequest,
} from "@/member/contracts/member.request";

/** @deprecated Use ProfileDetailResponse. */
export type ProfileResponse =
  import("../../domain/member/contracts/member.response").ProfileDetailResponse;
