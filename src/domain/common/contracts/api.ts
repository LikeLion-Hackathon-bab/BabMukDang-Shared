import { z } from "zod";
import {
  ArticlePostRequestSchema,
  CommentPostRequestSchema,
  CreateArticleResponseSchema,
  CreateCommentResponseSchema,
  ArticleDetailResponseSchema,
  PageArticleSummaryResponseSchema,
  PresignUploadResponseSchema,
} from "../../article/schema/article.schema";
import {
  LoginRequestSchema,
  SignupRequestSchema,
  SignupResponseSchema,
  TokenResponseSchema,
} from "../../auth/schema/auth.schema";
import {
  ChallengeStatusResponseSchema,
  ClaimChallengeRewardRequestSchema,
  ClaimChallengeRewardResponseSchema,
} from "../../challenge/schema/challenge.schema";
import { CouponResponseSchema } from "../../coupon/schema/coupon.schema";
import { NoContentSchema } from "../schema/envelope.schema";
import {
  ArticleIdSchema,
  CommentIdSchema,
  CouponIdSchema,
  FriendRequestIdSchema,
  InvitationIdSchema,
  MemberIdSchema,
  PlanIdSchema,
  RecruitIdSchema,
} from "../schema/id.schema";
import {
  FriendActionRequestSchema,
  FriendBlockItemResponseSchema,
  FriendListItemResponseSchema,
  FriendMealFilterSchema,
  FriendMealItemResponseSchema,
  FriendRequestItemResponseSchema,
} from "../../friend/schema/friend.schema";
import {
  InvitationListItemResponseSchema,
  InvitationPostRequestSchema,
  SendInvitationResponseSchema,
  AcceptInvitationResponseSchema,
  RejectInvitationResponseSchema,
} from "../../invitation/schema/invitation.schema";
import {
  MealStatusResponseSchema,
  UpdateMealStatusRequestSchema,
} from "../../meal/schema/meal.schema";
import {
  MemberResponseSchema,
  MemberSummaryResponseSchema,
  OnboardingPreferenceRequestSchema,
  OnboardingRequestSchema,
  PreferenceMetaResponseSchema,
  ProfileDetailResponseSchema,
  UpdateProfileRequestSchema,
} from "../../member/schema/member.schema";
import { CreatePlanRequestSchema, PlanResponseSchema } from "../../plan/schema/plan.schema";
import { FoodPreferenceResponseSchema } from "../../preference/schema/preference.schema";
import {
  RecruitRequestSchema,
  CreateRecruitResponseSchema,
  RecruitResponseSchema,
} from "../../recruit/schema/recruit.schema";
import {
  RedeemReferralRequestSchema,
  ReferralCreateResponseSchema,
  ReferralItemResponseSchema,
} from "../../referral/schema/referral.schema";
import { endpoint } from "./endpoint";

const memberIdParam = z.object({ memberId: MemberIdSchema });
const articleIdParam = z.object({ articleId: ArticleIdSchema });
const commentIdParam = z.object({ commentId: CommentIdSchema });
const recruitIdParam = z.object({ recruitId: RecruitIdSchema });
const invitationIdParam = z.object({ invitationId: InvitationIdSchema });
const planIdParam = z.object({ planId: PlanIdSchema });
const couponIdParam = z.object({ couponId: CouponIdSchema });
const friendRequestIdParam = z.object({ requestId: FriendRequestIdSchema });

// prettier-ignore
export const apiContract = {
  auth: {
    signup: endpoint({ method: "POST", path: "/auth/signup", body: SignupRequestSchema, response: SignupResponseSchema }),
    login: endpoint({ method: "POST", path: "/auth/login", body: LoginRequestSchema, response: TokenResponseSchema }),
    refresh: endpoint({ method: "POST", path: "/auth/refresh", response: TokenResponseSchema }),
    logout: endpoint({ method: "POST", path: "/auth/logout", response: NoContentSchema }),
  },
  members: {
    me: endpoint({ method: "GET", path: "/members/me", response: MemberResponseSchema }),
    summary: endpoint({ method: "GET", path: "/members/me/summary", response: MemberSummaryResponseSchema }),
    detail: endpoint({ method: "GET", path: "/members/:memberId", pathParams: memberIdParam, response: ProfileDetailResponseSchema }),
    updateProfile: endpoint({ method: "PATCH", path: "/members/me/profile", body: UpdateProfileRequestSchema, response: ProfileDetailResponseSchema }),
    onboarding: endpoint({ method: "POST", path: "/members/me/onboarding", body: OnboardingRequestSchema, response: PreferenceMetaResponseSchema }),
    updateOnboardingPreferences: endpoint({ method: "PATCH", path: "/members/me/preferences", body: OnboardingPreferenceRequestSchema, response: PreferenceMetaResponseSchema }),
  },
  articles: {
    list: endpoint({ method: "GET", path: "/articles", response: PageArticleSummaryResponseSchema }),
    detail: endpoint({ method: "GET", path: "/articles/:articleId", pathParams: articleIdParam, response: ArticleDetailResponseSchema }),
    create: endpoint({ method: "POST", path: "/articles", body: ArticlePostRequestSchema, response: CreateArticleResponseSchema }),
    delete: endpoint({ method: "DELETE", path: "/articles/:articleId", pathParams: articleIdParam, response: NoContentSchema }),
    createComment: endpoint({ method: "POST", path: "/articles/:articleId/comments", pathParams: articleIdParam, body: CommentPostRequestSchema, response: CreateCommentResponseSchema }),
    deleteComment: endpoint({ method: "DELETE", path: "/articles/:articleId/comments/:commentId", pathParams: articleIdParam.merge(commentIdParam), response: NoContentSchema }),
    presignArticleImage: endpoint({ method: "POST", path: "/uploads/articles/presign", response: PresignUploadResponseSchema }),
    presignProfileImage: endpoint({ method: "POST", path: "/uploads/profiles/presign", response: PresignUploadResponseSchema }),
  },
  recruits: {
    list: endpoint({ method: "GET", path: "/recruits", response: z.array(RecruitResponseSchema) }),
    detail: endpoint({ method: "GET", path: "/recruits/:recruitId", pathParams: recruitIdParam, response: RecruitResponseSchema }),
    create: endpoint({ method: "POST", path: "/recruits", body: RecruitRequestSchema, response: CreateRecruitResponseSchema }),
    close: endpoint({ method: "PATCH", path: "/recruits/:recruitId/close", pathParams: recruitIdParam, response: NoContentSchema }),
    join: endpoint({ method: "POST", path: "/recruits/:recruitId/join", pathParams: recruitIdParam, response: NoContentSchema }),
  },
  invitations: {
    list: endpoint({ method: "GET", path: "/invitations", response: z.array(InvitationListItemResponseSchema) }),
    send: endpoint({ method: "POST", path: "/invitations", body: InvitationPostRequestSchema, response: SendInvitationResponseSchema }),
    accept: endpoint({ method: "POST", path: "/invitations/:invitationId/accept", pathParams: invitationIdParam, response: AcceptInvitationResponseSchema }),
    reject: endpoint({ method: "POST", path: "/invitations/:invitationId/reject", pathParams: invitationIdParam, response: RejectInvitationResponseSchema }),
  },
  plans: {
    list: endpoint({ method: "GET", path: "/plans", response: z.array(PlanResponseSchema) }),
    detail: endpoint({ method: "GET", path: "/plans/:planId", pathParams: planIdParam, response: PlanResponseSchema }),
    create: endpoint({ method: "POST", path: "/plans", body: CreatePlanRequestSchema, response: PlanResponseSchema }),
  },
  mealStatus: {
    get: endpoint({ method: "GET", path: "/members/me/meal-status", response: MealStatusResponseSchema }),
    update: endpoint({ method: "PATCH", path: "/members/me/meal-status", body: UpdateMealStatusRequestSchema, response: NoContentSchema }),
  },
  friends: {
    list: endpoint({ method: "GET", path: "/friends", response: z.array(FriendListItemResponseSchema) }),
    meals: endpoint({ method: "GET", path: "/friends/meals", query: z.object({ filter: FriendMealFilterSchema.optional() }), response: z.array(FriendMealItemResponseSchema) }),
    blocks: endpoint({ method: "GET", path: "/friends/blocks", response: z.array(FriendBlockItemResponseSchema) }),
    request: endpoint({ method: "POST", path: "/friends/requests", body: FriendActionRequestSchema, response: FriendRequestItemResponseSchema }),
    acceptRequest: endpoint({ method: "POST", path: "/friends/requests/:requestId/accept", pathParams: friendRequestIdParam, response: NoContentSchema }),
    rejectRequest: endpoint({ method: "POST", path: "/friends/requests/:requestId/reject", pathParams: friendRequestIdParam, response: NoContentSchema }),
    block: endpoint({ method: "POST", path: "/friends/blocks", body: FriendActionRequestSchema, response: NoContentSchema }),
    unblock: endpoint({ method: "DELETE", path: "/friends/blocks/:memberId", pathParams: memberIdParam, response: NoContentSchema }),
  },
  preferences: {
    list: endpoint({ method: "GET", path: "/preferences", response: z.array(FoodPreferenceResponseSchema) }),
  },
  coupons: {
    list: endpoint({ method: "GET", path: "/coupons", response: z.array(CouponResponseSchema) }),
    use: endpoint({ method: "PATCH", path: "/coupons/:couponId/use", pathParams: couponIdParam, response: NoContentSchema }),
  },
  challenges: {
    status: endpoint({ method: "GET", path: "/challenges/status", response: ChallengeStatusResponseSchema }),
    claimReward: endpoint({ method: "POST", path: "/challenges/rewards", body: ClaimChallengeRewardRequestSchema, response: ClaimChallengeRewardResponseSchema }),
  },
  referrals: {
    create: endpoint({ method: "POST", path: "/referrals", response: ReferralCreateResponseSchema }),
    list: endpoint({ method: "GET", path: "/referrals", response: z.array(ReferralItemResponseSchema) }),
    redeem: endpoint({ method: "POST", path: "/referrals/redeem", body: RedeemReferralRequestSchema, response: NoContentSchema }),
  },
} as const;

export type ApiContract = typeof apiContract;
export type ApiDomain = keyof ApiContract;
