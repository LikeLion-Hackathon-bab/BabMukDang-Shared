export * from "./article";
export * from "./common";
export * from "./profile";
export * from "./matching";
export * from "./local-news";
export * from "./ai";
export * from "./friend";

export type { UpdateMealStatusRequest } from "@/meal/contracts/meal.request";
export type {
  MealStatus,
  MealStatusAction,
  MealStatusResponse,
} from "@/meal/contracts/meal.response";

export type {
  AcceptInvitationResponse,
  InvitationResponse,InvitationPostRequest,
  SendInvitationResponse,
} from "@/invitation/invitation.contracts";


export type {
  FoodPreferenceResponse as FoodPreferenceResponseDto,
  FoodPreferenceType,
} from "@/preference/contracts/preference.response";


export type {
  MeetingResponse,
  PlanResponse as PlanResponseDto,
  PlanStatus,
  PlanType,
} from "@/plan/plan.contracts";

/** @deprecated Use PlanResponseDto. */
export type MeetingParticipant =
  import("../domain/member/contracts/member.response").MemberResponse;

export type { MemberCore as RecruitParticipantDto, } from "../domain";
export type {
  CreateRecruitResponse as CreateRecruitResponseDto,
  RecruitListResponse as RecruitResponseDto,
  RecruitStatus,
} from "@/recruit/recruit.contracts";
export type { CreateRecruitRequest as RecruitRequestDto } from "@/recruit/recruit.contracts";

/** @deprecated Use RecruitRequestDto. */
export type Recruit = import("../domain/recruit/recruit.contracts").CreateRecruitRequest;

export type {
  CouponResponse,
  CouponStatus,
  CouponType,
} from "@/promotion/coupon.contracts";

export type {
  ReferralCreateResponse,
  ReferralItemResponse,
  RedeemReferralRequest,
} from "@/promotion/referral.contracts";
export type { ClaimChallengeRewardRequest } from "@/promotion/challenge.contracts";
