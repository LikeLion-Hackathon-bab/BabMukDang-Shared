import type { Menu } from "../matching";

export interface Onboarding {
  likedCodes: string[];
  dislikedCodes: string[];
  allergyCodes: string[];
}
export interface OnboardingPreferenceResponse extends Onboarding {}

export interface PreferenceSummaryResponse {
  likes: Menu[];
  dislikes: Menu[];
  allergies: Menu[];
}

export type { ProfileDetailResponse } from "@/member";
export type { UpdateProfileRequest } from "@/member";

/** @deprecated Use ProfileDetailResponse. */
export type ProfileResponse = import("../../domain/member").ProfileDetailResponse;
