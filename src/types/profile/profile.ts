import { Menu } from "../matching";

export interface Onboarding {
  likedCodes: string[];
  dislikedCodes: string[];
  allergyCodes: string[];
}
export interface OnboardingPreferenceRequest extends Onboarding {}
export interface OnboardingPreferenceResponse extends Onboarding {}

export interface PreferenceSummaryResponse {
  likes: Menu[];
  dislikes: Menu[];
  allergies: Menu[];
}

export interface PreferenceMetaResponse {
  onboardedAt: string;
  lastUpdatedAt: string;
  revision: number;
}

type MyProfileData = {
  profileImgUrl: string;
  name: string;
  description: string;
  preferredMenus: string[];
  cantEat: string[];
  friends: number;
  completedMeetings: number;
  uncompletedMeetings: number;
  challengeCount: number;
};

// 클라이언트
export interface ProfileResponse {
  member: {
    id: number;
    username: string;
    profileImageUrl: string;
    bio: string;
    meetingCount: number;
    createdAt: string;
    updatedAt: string;
    email: string;
    age: number;
    role: string;
    preferredMenus: string[];
    dislikedMenus: string[];
  };
  mealStatus: boolean;
}

export interface ProfileDetailResponse {
  memberId: number;
  userName: string;
  profileImageUrl: string;
  bio: string;
  meetingCount: number;
  likes: PreferenceItem[];
  dislikes: PreferenceItem[];
  allergies: PreferenceItem[];
}

export interface PreferenceItem {
  code: string;
  label: string;
}

export interface UpdateProfileRequest {
  userName: string;
  profileImageUrl: string;
  bio: string;
}
