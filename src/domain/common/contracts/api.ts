import { z } from "zod";
import {
  CreateArticleRequestSchema,
  CreateCommentRequestSchema,
  ArticleDetailResponseSchema,
  ArticleLikeResponseSchema,
  PageArticleSummaryResponseSchema,
  ArticleListQuerySchema,
  PresignArticleResponseSchema,
} from "@/article";
import {
  LoginRequestSchema,
  SignupRequestSchema,
  SignupResponseSchema,
  TokenResponseSchema,
} from "@/auth";
import {
  ChallengeStatusResponseSchema,
  ClaimChallengeRewardRequestSchema,
} from "@/promotion/challenge.schema";
import {
  NoContentSchema,
  ArticleIdSchema,
  CommentIdSchema,
  CouponIdSchema,
  CreatedEntityIdResponseSchema,
  FriendRequestIdSchema,
  InvitationIdSchema,
  MemberIdSchema,
  PlanIdSchema,
  RecruitIdSchema,
} from "@/common";
import {
  FriendBlockItemResponseSchema,
  FriendListItemResponseSchema,
  FriendRequestItemResponseSchema,
} from "@/friend";
import {
  InvitationListItemResponseSchema,
  CreateInvitationRequestSchema,
  SendInvitationResponseSchema,
  AcceptInvitationResponseSchema,
} from "@/invitation";
import {
  FriendMealItemResponseSchema,
  FriendMealQuerySchema,
  MealStatusResponseSchema,
  UpdateMealStatusRequestSchema,
} from "@/meal";
import {
  CreateProfileRequestSchema,
  MemberResponseSchema,
  PresignProfileResponseSchema,
  ProfileDetailResponseSchema,
  UpdatePreferenceRequestSchema,
  UpdateProfileRequestSchema,
  MemberSerachResponseSchema,
  MemberSearchQuerySchema,
  MemberFoodPreferenceSchema,
} from "@/member";
import { PlanListQuerySchema, PlanResponseSchema } from "@/plan";
import {
  CreateRecruitRequestSchema,
  CreateRecruitResponseSchema,
  RecruitListQuerySchema,
  RecruitListResponseSchema,
} from "@/recruit";
import {
  RedeemReferralRequestSchema,
  ReferralCreateResponseSchema,
  ReferralItemResponseSchema,
  CouponResponseSchema,
} from "@/promotion";
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
    // test: endpoint({method: "GET",  path: "/auth/test", response: TokenResponseSchema}) TODO: Dev에서만 작동하도록 백엔드에서 수정해야함 
  },
  members: {
    me: endpoint({ method: "GET", path: "/members/me", response: MemberResponseSchema }),
    myProfile: endpoint({ method: "GET", path: "/members/me/detail", response: ProfileDetailResponseSchema }),
    search: endpoint({ method: "GET", path: "/members/search", query: MemberSearchQuerySchema ,response: MemberSerachResponseSchema }),
    memberProfile: endpoint({ method: "GET", path: "/members/:memberId", pathParams: memberIdParam, response: ProfileDetailResponseSchema }),
    presignProfileImage: endpoint({ method: "POST", path: "/uploads/presign-profile", response: PresignProfileResponseSchema }),
    createProfile: endpoint({ method: "POST", path: "/members/onboarding", body: CreateProfileRequestSchema, response: NoContentSchema }),
    updateProfile: endpoint({ method: "PATCH", path: "/members/me/profile", body: UpdateProfileRequestSchema, response: NoContentSchema }),
  },
  preferences: {
    my: endpoint({ method: "GET", path: "/preferences/me", response: MemberFoodPreferenceSchema }),
    update: endpoint({ method: "PATCH", path: "/preferences/me", body: UpdatePreferenceRequestSchema, response: NoContentSchema }),
  },
  mealStatus: {
    my: endpoint({ method: "GET", path: "/meal-status", response: MealStatusResponseSchema }),
    updateMealStatus: endpoint({ method: "PATCH", path: "/meal-status", body: UpdateMealStatusRequestSchema, response: NoContentSchema }),
    friendMealStatus: endpoint({ method: "GET", path: "/meal-status/friend", query: FriendMealQuerySchema, response: z.array(FriendMealItemResponseSchema) }),
    
  },
  articles: {
    list: endpoint({ method: "GET", path: "/articles/home", query: ArticleListQuerySchema, response: PageArticleSummaryResponseSchema }),
    byMember: endpoint({ method: "GET", path: "/articles/by-author/:memberId", pathParams: memberIdParam, query: ArticleListQuerySchema, response: PageArticleSummaryResponseSchema }),
    my: endpoint({ method: "GET", path: "/articles/my", response: PageArticleSummaryResponseSchema }),
    detail: endpoint({ method: "GET", path: "/articles/:articleId", pathParams: articleIdParam, response: ArticleDetailResponseSchema }),
    create: endpoint({ method: "POST", path: "/articles", body: CreateArticleRequestSchema, response: CreatedEntityIdResponseSchema }),
    like: endpoint({ method: "POST", path: "/articles/:articleId/like", pathParams: articleIdParam, response: ArticleLikeResponseSchema }),
    createComment: endpoint({ method: "POST", path: "/articles/:articleId/comments", pathParams: articleIdParam, body: CreateCommentRequestSchema, response: CreatedEntityIdResponseSchema }),
    presignArticleImage: endpoint({ method: "POST", path: "/uploads/presign-article", response: PresignArticleResponseSchema }),
    delete: endpoint({ method: "DELETE", path: "/articles/:articleId", pathParams: articleIdParam, response: NoContentSchema }),
    deleteComment: endpoint({ method: "DELETE", path: "/articles/comments/:commentId", pathParams: commentIdParam, response: NoContentSchema }),
    // TODO: 게시물 수정 기능
  },
  recruits: {
    list: endpoint({ method: "GET", path: "/recruits", query: RecruitListQuerySchema, response: RecruitListResponseSchema }),
    create: endpoint({ method: "POST", path: "/recruits", body: CreateRecruitRequestSchema, response: CreateRecruitResponseSchema }),
    join: endpoint({ method: "POST", path: "/recruits/:recruitId/join", pathParams: recruitIdParam, response: NoContentSchema }),
    close: endpoint({ method: "PATCH", path: "/recruits/:recruitId/close", pathParams: recruitIdParam, response: NoContentSchema }),
  },
  invitations: {
    list: endpoint({ method: "GET", path: "/invitations", response: z.array(InvitationListItemResponseSchema) }),
    //  TODO: Invitation Response 정하기 detail: endpoint({ method: "GET", path: "/invitations/:invitationId", pathParams: invitationIdParam, response: InvitationItemDetailResponseSchema }),
    send: endpoint({ method: "POST", path: "/invitations", body: CreateInvitationRequestSchema, response: SendInvitationResponseSchema }),
    accept: endpoint({ method: "POST", path: "/invitations/:invitationId/accept", pathParams: invitationIdParam, response: AcceptInvitationResponseSchema }),
    reject: endpoint({ method: "POST", path: "/invitations/:invitationId/reject", pathParams: invitationIdParam, response: NoContentSchema }),
  },
  plans: {
    list: endpoint({ method: "GET", path: "/plans", query:PlanListQuerySchema, response: z.array(PlanResponseSchema) }),
    detail: endpoint({ method: "GET", path: "/plans/:planId", pathParams: planIdParam, response: PlanResponseSchema }),
    cancel: endpoint({ method: "PATCH", path: "/plans/:planId/cancel", pathParams: planIdParam, response: NoContentSchema }),
  },
  friends: {
    list: endpoint({ method: "GET", path: "/friends", response: z.array(FriendListItemResponseSchema) }),
    blockList: endpoint({ method: "GET", path: "/friends/blocks", response: z.array(FriendBlockItemResponseSchema) }),
    incomingRequest: endpoint({ method: "GET", path: "/friends/requests/incoming", response: z.array(FriendRequestItemResponseSchema) }),
    outgoingRequest: endpoint({ method: "GET", path: "/friends/requests/outgoing", response: z.array(FriendRequestItemResponseSchema) }),
    sendRequest: endpoint({ method: "POST", path: "/friends/requests/:memberId", pathParams: memberIdParam, response: NoContentSchema }),
    acceptRequest: endpoint({ method: "POST", path: "/friends/requests/:requestId/accept", pathParams: friendRequestIdParam, response: NoContentSchema }),
    rejectRequest: endpoint({ method: "POST", path: "/friends/requests/:requestId/reject", pathParams: friendRequestIdParam, response: NoContentSchema }),
    block: endpoint({ method: "POST", path: "/friends/blocks/:memberId",pathParams: memberIdParam,  response: NoContentSchema }),
    cancelRequest: endpoint({ method: "DELETE", path: "/friends/requests/:requestId", pathParams: friendRequestIdParam, response: NoContentSchema }),
    unblock: endpoint({ method: "DELETE", path: "/friends/blocks/:memberId", pathParams: memberIdParam, response: NoContentSchema }),
    unfriend: endpoint({ method: "DELETE", path: "/friends/:memberId", pathParams: memberIdParam, response: NoContentSchema }),
  },
  coupons: {
    list: endpoint({ method: "GET", path: "/coupons", response: z.array(CouponResponseSchema) }),
    use: endpoint({ method: "PATCH", path: "/coupons/:couponId/use", pathParams: couponIdParam, response: NoContentSchema }),
  },
  challenges: {
    status: endpoint({ method: "GET", path: "/challenges/status", response: ChallengeStatusResponseSchema }),
    claimReward: endpoint({ method: "POST", path: "/challenges/rewards", body: ClaimChallengeRewardRequestSchema, response: NoContentSchema }),
  },
  referrals: {
    list: endpoint({ method: "GET", path: "/referrals", response: z.array(ReferralItemResponseSchema) }),
    create: endpoint({ method: "POST", path: "/referrals", response: ReferralCreateResponseSchema }),
    redeem: endpoint({ method: "POST", path: "/referrals/redeem", body: RedeemReferralRequestSchema, response: NoContentSchema }),
  },
  room:{
    //TODO: 방 입장 기능
  },
  health:{
    healthCheck: endpoint({method:"GET", path:"/", response: z.string()})
  }
} as const;

export type ApiContract = typeof apiContract;
export type ApiDomain = keyof ApiContract;
