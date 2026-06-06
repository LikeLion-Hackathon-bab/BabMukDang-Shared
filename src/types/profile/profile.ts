import { ISODateTimeString } from "../common";
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
  onboardedAt: ISODateTimeString | null;
  lastUpdatedAt: ISODateTimeString | null;
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
    userId: number;
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

// 회원 요약. friends 수는 friends/referrals 도메인 구현 후 연결한다.
export interface MemberSummaryResponse {
  memberId: number;
  username: string;
  profileImageUrl: string;
  friends: number;
  completedMeetings: number;
  uncompletedMeetings: number;
}

// 온보딩: profile 갱신과 preference 저장을 한 흐름으로 묶는다.
export interface OnboardingRequest extends Onboarding, UpdateProfileRequest {}
