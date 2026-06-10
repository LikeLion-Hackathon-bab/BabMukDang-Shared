export * from "./article";
export * from "./common";
export * from "./profile";
export * from "./matching";
export * from "./local-news";
export * from "./ai";
export * from "./friend";

export type { UpdateMealStatusRequest } from "../domain/meal/contracts/meal.request";
export type {
  MealStatus,
  MealStatusAction,
  MealStatusResponse,
} from "../domain/meal/contracts/meal.response";

export type {
  AcceptInvitationResponse,
  InvitationResponse,InvitationPostRequest,
  SendInvitationResponse,
} from "../domain/invitation/invitation.contracts";


export type {
  FoodPreferenceResponse as FoodPreferenceResponseDto,
  FoodPreferenceType,
} from "../domain/preference/contracts/preference.response";


export type {
  MeetingResponse,
  PlanResponse as PlanResponseDto,
  PlanStatus,
  PlanType,
} from "../domain/plan/plan.contracts";

/** @deprecated Use PlanResponseDto. */
export type MeetingParticipant =
  import("../domain/member/contracts/member.response").MemberResponse;

export type { MemberCore as RecruitParticipantDto, } from "../domain";
export type {
  CreateRecruitResponse as CreateRecruitResponseDto,
  RecruitListResponse as RecruitResponseDto,
  RecruitStatus,
} from "../domain/recruit/recruit.contracts";
export type { CreateRecruitRequest as RecruitRequestDto } from "../domain/recruit/recruit.contracts";

/** @deprecated Use RecruitRequestDto. */
export type Recruit = import("../domain/recruit/recruit.contracts").CreateRecruitRequest;

export type {
  CouponResponse,
  CouponStatus,
  CouponType,
} from "../domain/promotion/coupon.contracts";

export type {
  ReferralCreateResponse,
  ReferralItemResponse,
  RedeemReferralRequest,
} from "../domain/promotion/referral.contracts";
export type { ClaimChallengeRewardRequest } from "../domain/promotion/challenge.contracts";
