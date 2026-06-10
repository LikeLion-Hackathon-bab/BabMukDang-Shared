export * from "./article";
export * from "./common";
export * from "./profile";
export * from "./matching";
export * from "./local-news";
export * from "./ai";

export type {
  UpdateMealStatusRequest,
  MealStatus,
  MealStatusAction,
  MealStatusResponse,
} from "@/meal/meal.contracts";

export type {
  AcceptInvitationResponse,
  InvitationResponse,
  CreateInvitationRequest,
  SendInvitationResponse,
} from "@/invitation/invitation.contracts";

export type { MemberResponse, MemberResponse as User } from "@/member/member.contracts";

export type {
  MeetingResponse,
  PlanResponse as PlanResponseDto,
  PlanStatus,
  PlanType,
} from "@/plan";

/** @deprecated Use PlanResponseDto. */
export type MeetingParticipant = import("../domain/member/member.contracts").MemberResponse;

export type { MemberCore as RecruitParticipantDto } from "../domain";
export type {
  CreateRecruitResponse as CreateRecruitResponseDto,
  RecruitListResponse as RecruitResponseDto,
  RecruitStatus,
} from "@/recruit/recruit.contracts";
export type { CreateRecruitRequest as RecruitRequestDto } from "@/recruit/recruit.contracts";

/** @deprecated Use RecruitRequestDto. */
export type Recruit = import("../domain/recruit/recruit.contracts").CreateRecruitRequest;

export type { CouponResponse, CouponStatus, CouponType } from "@/promotion";

export type {
  ReferralCreateResponse,
  ReferralItemResponse,
  RedeemReferralRequest,
} from "@/promotion";
export type { ClaimChallengeRewardRequest } from "@/promotion";
