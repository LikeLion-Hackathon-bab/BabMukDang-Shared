import { z } from "zod";
import {
  ArticleDetailResponseSchema,
  ArticleLikeResponseSchema,
  ArticleListQuerySchema,
  CreateArticleRequestSchema,
  CreateCommentRequestSchema,
  PageArticleSummaryResponseSchema,
  UploadArticleImageRequestSchema,
  UploadArticleImageResponseSchema,
} from "@/article";
import {
  LoginRequestSchema,
  SignupRequestSchema,
  SignupResponseSchema,
  TokenResponseSchema,
} from "@/auth";
import {
  ArticleIdSchema,
  CommentIdSchema,
  CouponIdSchema,
  CreatedEntityIdResponseSchema,
  FriendRequestIdSchema,
  MealGroupIdSchema,
  MealPlanIdSchema,
  MealPlanInviteIdSchema,
  MealPlanJoinRequestIdSchema,
  MealPlanChangeRequestIdSchema,
  MealPlanShareLinkTokenSchema,
  MemberIdSchema,
  NoContentSchema,
} from "@/common/schema";
import {
  FriendBlockItemResponseSchema,
  FriendListItemResponseSchema,
  FriendRequestItemResponseSchema,
} from "@/friend";
import {
  FriendMealItemResponseSchema,
  FriendMealQuerySchema,
  MealStatusResponseSchema,
  UpdateMealStatusRequestSchema,
} from "@/meal";
import {
  CompleteMealPlanDecisionStageRequestSchema,
  ConfirmMealPlanDecisionSnapshotRequestSchema,
  CreateMealPlanChangeRequestSchema,
  MealPlanDecisionStageIdSchema,
  MealPlanDecisionTaskKeySchema,
  MealPlanDecisionProgressSchema,
  ReopenMealPlanDecisionTaskRequestSchema,
  CreateMealPlanInviteRequestSchema,
  CreateMealPlanJoinRequestSchema,
  CreateMealPlanRequestSchema,
  CreateMealPlanResponseSchema,
  CreateMealPlanShareLinkRequestSchema,
  ExposeMealPlanToNearbyFriendsRequestSchema,
  ExposeMealPlanToNearbyFriendsResponseSchema,
  JoinMealPlanGuestRequestSchema,
  JoinMealPlanGuestResponseSchema,
  MealPlanGuestSessionQuerySchema,
  MealPlanGuestSessionResponseSchema,
  MealGroupResponseSchema,
  CreateMealGroupRequestSchema,
  StartMealPlanFromGroupRequestSchema,
  AddMealGroupMemberRequestSchema,
  UpdateMealGroupMemberRoleRequestSchema,
  MealGroupHistoryResponseSchema,
  MealGroupPreferenceSummarySchema,
  MealPlanInviteListResponseSchema,
  HomeMealPlanDashboardResponseSchema,
  MealMapResponseSchema,
  MealMapQuerySchema,
  MealPlanChatMessageListResponseSchema,
  MealPlanNotificationSchema,
  MealPlanResponseSchema,
  MealPlanShareLinkSummarySchema,
  MealPlanSharePreviewResponseSchema,
  MyMealPlanListResponseSchema,
  NearbyFriendExposureEligibilitySchema,
  NearbyFriendMealPlanSummarySchema,
  SendMealPlanInviteResponseSchema,
  UpdateMealPlanContextRequestSchema,
} from "@/meal-plan";
import {
  CreateProfileRequestSchema,
  MemberFoodPreferenceSchema,
  MemberResponseSchema,
  MemberSearchQuerySchema,
  MemberSerachResponseSchema,
  ProfileDetailResponseSchema,
  UpdatePreferenceRequestSchema,
  UpdateMemberLocationConsentRequestSchema,
  UpdateMemberLocationRequestSchema,
  MemberLocationSettingsResponseSchema,
  UpdateProfileRequestSchema,
  UploadProfileImageRequestSchema,
  UploadProfileImageResponseSchema,
} from "@/member";
import {
  ChallengeStatusResponseSchema,
  ClaimChallengeRewardRequestSchema,
  CouponResponseSchema,
  RedeemReferralRequestSchema,
  ReferralCreateResponseSchema,
  ReferralItemResponseSchema,
} from "@/promotion";

import {
  PushTokenResponseSchema,
  RegisterPushTokenRequestSchema,
  RevokePushTokenRequestSchema,
} from "@/push";
import {
  EndMealPlanLiveActivitySessionRequestSchema,
  MealPlanLiveActivitySessionListResponseSchema,
  MealPlanLiveActivitySessionResponseSchema,
  RegisterMealPlanLiveActivitySessionRequestSchema,
} from "@/live-activity";
import { endpoint } from "./endpoint";
import type { AnyEndpointContract } from "./endpoint";

const memberIdParam = z.object({ memberId: MemberIdSchema });
const articleIdParam = z.object({ articleId: ArticleIdSchema });
const commentIdParam = z.object({ commentId: CommentIdSchema });
const mealPlanIdParam = z.object({ mealPlanId: MealPlanIdSchema });
const mealPlanInviteIdParam = z.object({ inviteId: MealPlanInviteIdSchema });
const mealPlanJoinRequestIdParam = z.object({ requestId: MealPlanJoinRequestIdSchema });
const mealPlanDecisionStageIdParam = mealPlanIdParam.extend({
  stageId: MealPlanDecisionStageIdSchema,
});
const mealPlanChangeRequestIdParam = mealPlanIdParam.extend({
  requestId: MealPlanChangeRequestIdSchema,
});
const mealPlanDecisionTaskKeyParam = mealPlanIdParam.extend({
  taskKey: MealPlanDecisionTaskKeySchema,
});
const mealPlanDecisionSnapshotIdParam = mealPlanIdParam.extend({
  snapshotId: z.string().uuid(),
});
const mealPlanParticipantIdParam = mealPlanIdParam.extend({
  participantId: z.string().uuid(),
});
const mealPlanShareTokenParam = z.object({ token: MealPlanShareLinkTokenSchema });
const notificationIdParam = z.object({ notificationId: z.string().min(1) });
const couponIdParam = z.object({ couponId: CouponIdSchema });
const mealGroupIdParam = z.object({ mealGroupId: MealGroupIdSchema });
const mealGroupMemberIdParam = mealGroupIdParam.extend({ memberId: MemberIdSchema });
const friendRequestIdParam = z.object({ requestId: FriendRequestIdSchema });
const sseTokenQuery = z.object({ token: z.string().min(1) });

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
    myProfile: endpoint({ method: "GET", path: "/members/me/profile", response: ProfileDetailResponseSchema }),
    search: endpoint({ method: "GET", path: "/members/search", query: MemberSearchQuerySchema, response: MemberSerachResponseSchema }),
    memberProfile: endpoint({ method: "GET", path: "/members/:memberId/profile", pathParams: memberIdParam, response: ProfileDetailResponseSchema }),
    presignProfileImage: endpoint({ method: "POST", path: "/uploads/presign-profile", body: UploadProfileImageRequestSchema, response: UploadProfileImageResponseSchema }),
    createProfile: endpoint({ method: "POST", path: "/members/onboarding", body: CreateProfileRequestSchema, response: NoContentSchema }),
    createProfileAlias: endpoint({ method: "POST", path: "/onboarding", body: CreateProfileRequestSchema, response: NoContentSchema }),
    updateProfile: endpoint({ method: "PATCH", path: "/members/me/profile", body: UpdateProfileRequestSchema, response: NoContentSchema }),
    locationSettings: endpoint({ method: "GET", path: "/members/me/location-settings", response: MemberLocationSettingsResponseSchema }),
    updateLocationConsent: endpoint({ method: "PATCH", path: "/members/me/location-consent", body: UpdateMemberLocationConsentRequestSchema, response: MemberLocationSettingsResponseSchema }),
    updateLocation: endpoint({ method: "PATCH", path: "/members/me/location", body: UpdateMemberLocationRequestSchema, response: MemberLocationSettingsResponseSchema }),
  },
  preferences: {
    my: endpoint({ method: "GET", path: "/preferences/me", response: MemberFoodPreferenceSchema }),
    update: endpoint({ method: "PATCH", path: "/preferences/me", body: UpdatePreferenceRequestSchema, response: NoContentSchema }),
  },
  mealStatus: {
    my: endpoint({ method: "GET", path: "/members/me/meal-status", response: MealStatusResponseSchema }),
    updateMealStatus: endpoint({ method: "PATCH", path: "/members/me/meal-status", body: UpdateMealStatusRequestSchema, response: NoContentSchema }),
    friendMealStatus: endpoint({ method: "GET", path: "/friends/me/meals", query: FriendMealQuerySchema, response: z.array(FriendMealItemResponseSchema) }),
  },
  articles: {
    list: endpoint({ method: "GET", path: "/articles/home", query: ArticleListQuerySchema, response: PageArticleSummaryResponseSchema }),
    byMember: endpoint({ method: "GET", path: "/articles/by-author/:memberId", pathParams: memberIdParam, query: ArticleListQuerySchema, response: PageArticleSummaryResponseSchema }),
    my: endpoint({ method: "GET", path: "/articles/my", response: PageArticleSummaryResponseSchema }),
    detail: endpoint({ method: "GET", path: "/articles/:articleId", pathParams: articleIdParam, response: ArticleDetailResponseSchema }),
    create: endpoint({ method: "POST", path: "/articles", body: CreateArticleRequestSchema, response: CreatedEntityIdResponseSchema }),
    like: endpoint({ method: "POST", path: "/articles/:articleId/like", pathParams: articleIdParam, response: ArticleLikeResponseSchema }),
    createComment: endpoint({ method: "POST", path: "/articles/:articleId/comments", pathParams: articleIdParam, body: CreateCommentRequestSchema, response: CreatedEntityIdResponseSchema }),
    presignArticleImage: endpoint({ method: "POST", path: "/uploads/presign-article", body: UploadArticleImageRequestSchema, response: UploadArticleImageResponseSchema }),
    delete: endpoint({ method: "DELETE", path: "/articles/:articleId", pathParams: articleIdParam, response: NoContentSchema }),
    deleteComment: endpoint({ method: "DELETE", path: "/articles/comments/:commentId", pathParams: commentIdParam, response: NoContentSchema }),
  },
  mealPlans: {
    create: endpoint({ method: "POST", path: "/meal-plans", body: CreateMealPlanRequestSchema, response: CreateMealPlanResponseSchema }),
    my: endpoint({ method: "GET", path: "/meal-plans/me", response: MyMealPlanListResponseSchema }),
    homeDashboard: endpoint({ method: "GET", path: "/meal-plans/home-dashboard", response: HomeMealPlanDashboardResponseSchema }),
    map: endpoint({ method: "GET", path: "/meal-plans/map", query: MealMapQuerySchema, response: MealMapResponseSchema }),
    detail: endpoint({ method: "GET", path: "/meal-plans/:mealPlanId", pathParams: mealPlanIdParam, response: MealPlanResponseSchema }),
    chatMessages: endpoint({ method: "GET", path: "/meal-plans/:mealPlanId/chat/messages", pathParams: mealPlanIdParam, response: MealPlanChatMessageListResponseSchema }),
    updateContext: endpoint({ method: "PATCH", path: "/meal-plans/:mealPlanId/context", pathParams: mealPlanIdParam, body: UpdateMealPlanContextRequestSchema, response: MealPlanResponseSchema }),
    complete: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/complete", pathParams: mealPlanIdParam, response: MealPlanResponseSchema }),
    cancel: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/cancel", pathParams: mealPlanIdParam, response: MealPlanResponseSchema }),
    removeParticipant: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/participants/:participantId/remove", pathParams: mealPlanParticipantIdParam, response: MealPlanResponseSchema }),
    recorded: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/recorded", pathParams: mealPlanIdParam, response: MealPlanResponseSchema }),
    invite: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/invites", pathParams: mealPlanIdParam, body: CreateMealPlanInviteRequestSchema, response: SendMealPlanInviteResponseSchema }),
    receivedInvites: endpoint({ method: "GET", path: "/meal-plans/invites/received", response: MealPlanInviteListResponseSchema }),
    sentInvites: endpoint({ method: "GET", path: "/meal-plans/invites/sent", response: MealPlanInviteListResponseSchema }),
    acceptInvite: endpoint({ method: "POST", path: "/meal-plans/invites/:inviteId/accept", pathParams: mealPlanInviteIdParam, response: MealPlanResponseSchema }),
    declineInvite: endpoint({ method: "POST", path: "/meal-plans/invites/:inviteId/decline", pathParams: mealPlanInviteIdParam, response: NoContentSchema }),
    createShareLink: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/share-links", pathParams: mealPlanIdParam, body: CreateMealPlanShareLinkRequestSchema, response: MealPlanShareLinkSummarySchema }),
    sharePreview: endpoint({ method: "GET", path: "/meal-plan-links/:token", pathParams: mealPlanShareTokenParam, response: MealPlanSharePreviewResponseSchema }),
    joinGuest: endpoint({ method: "POST", path: "/meal-plan-links/:token/join", pathParams: mealPlanShareTokenParam, body: JoinMealPlanGuestRequestSchema, response: JoinMealPlanGuestResponseSchema }),
    guestSession: endpoint({ method: "GET", path: "/meal-plan-links/:token/session", pathParams: mealPlanShareTokenParam, query: MealPlanGuestSessionQuerySchema, response: MealPlanGuestSessionResponseSchema }),
    guestChatMessages: endpoint({ method: "GET", path: "/meal-plan-links/:token/chat/messages", pathParams: mealPlanShareTokenParam, query: MealPlanGuestSessionQuerySchema, response: MealPlanChatMessageListResponseSchema }),
    exposeNearbyFriends: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/nearby-friends/expose", pathParams: mealPlanIdParam, body: ExposeMealPlanToNearbyFriendsRequestSchema, response: ExposeMealPlanToNearbyFriendsResponseSchema }),
    closeNearbyFriends: endpoint({ method: "DELETE", path: "/meal-plans/:mealPlanId/nearby-friends/expose", pathParams: mealPlanIdParam, response: NoContentSchema }),
    nearbyFriendExposureEligibility: endpoint({ method: "GET", path: "/meal-plans/nearby-friends/eligibility", response: NearbyFriendExposureEligibilitySchema }),
    nearbyFriends: endpoint({ method: "GET", path: "/meal-plans/nearby-friends", response: z.array(NearbyFriendMealPlanSummarySchema) }),
    requestJoin: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/join-requests", pathParams: mealPlanIdParam, body: CreateMealPlanJoinRequestSchema, response: CreatedEntityIdResponseSchema }),
    acceptJoinRequest: endpoint({ method: "POST", path: "/meal-plans/join-requests/:requestId/accept", pathParams: mealPlanJoinRequestIdParam, response: MealPlanResponseSchema }),
    rejectJoinRequest: endpoint({ method: "POST", path: "/meal-plans/join-requests/:requestId/reject", pathParams: mealPlanJoinRequestIdParam, response: NoContentSchema }),
    completeStage: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/stages/:stageId/complete", pathParams: mealPlanDecisionStageIdParam, body: CompleteMealPlanDecisionStageRequestSchema, response: MealPlanResponseSchema }),
    decisionProgress: endpoint({ method: "GET", path: "/meal-plans/:mealPlanId/decision-progress", pathParams: mealPlanIdParam, response: MealPlanDecisionProgressSchema }),
    reopenDecisionTask: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/decision-tasks/:taskKey/reopen", pathParams: mealPlanDecisionTaskKeyParam, body: ReopenMealPlanDecisionTaskRequestSchema, response: MealPlanResponseSchema }),
    confirmDecisionSnapshot: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/decision-snapshots/:snapshotId/confirm", pathParams: mealPlanDecisionSnapshotIdParam, body: ConfirmMealPlanDecisionSnapshotRequestSchema, response: MealPlanResponseSchema }),
    ready: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/ready", pathParams: mealPlanIdParam, response: MealPlanResponseSchema }),
    unready: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/unready", pathParams: mealPlanIdParam, response: MealPlanResponseSchema }),
    createChangeRequest: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/change-requests", pathParams: mealPlanIdParam, body: CreateMealPlanChangeRequestSchema, response: CreatedEntityIdResponseSchema }),
    acceptChangeRequest: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/change-requests/:requestId/accept", pathParams: mealPlanChangeRequestIdParam, response: MealPlanResponseSchema }),
    confirm: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/confirm", pathParams: mealPlanIdParam, response: MealPlanResponseSchema }),
  },
  mealGroups: {
    create: endpoint({ method: "POST", path: "/meal-groups", body: CreateMealGroupRequestSchema, response: MealGroupResponseSchema }),
    list: endpoint({ method: "GET", path: "/meal-groups", response: z.array(MealGroupResponseSchema) }),
    detail: endpoint({ method: "GET", path: "/meal-groups/:mealGroupId", pathParams: mealGroupIdParam, response: MealGroupResponseSchema }),
    startMealPlan: endpoint({ method: "POST", path: "/meal-groups/:mealGroupId/meal-plans", pathParams: mealGroupIdParam, body: StartMealPlanFromGroupRequestSchema, response: CreateMealPlanResponseSchema }),
    history: endpoint({ method: "GET", path: "/meal-groups/:mealGroupId/history", pathParams: mealGroupIdParam, response: MealGroupHistoryResponseSchema }),
    preferences: endpoint({ method: "GET", path: "/meal-groups/:mealGroupId/preferences", pathParams: mealGroupIdParam, response: MealGroupPreferenceSummarySchema }),
    addMember: endpoint({ method: "POST", path: "/meal-groups/:mealGroupId/members", pathParams: mealGroupIdParam, body: AddMealGroupMemberRequestSchema, response: MealGroupResponseSchema }),
    updateMemberRole: endpoint({ method: "PATCH", path: "/meal-groups/:mealGroupId/members/:memberId/role", pathParams: mealGroupMemberIdParam, body: UpdateMealGroupMemberRoleRequestSchema, response: MealGroupResponseSchema }),
    removeMember: endpoint({ method: "DELETE", path: "/meal-groups/:mealGroupId/members/:memberId", pathParams: mealGroupMemberIdParam, response: MealGroupResponseSchema }),
  },
  friends: {
    list: endpoint({ method: "GET", path: "/friends", response: z.array(FriendListItemResponseSchema) }),
    blockList: endpoint({ method: "GET", path: "/friends/blocks", response: z.array(FriendBlockItemResponseSchema) }),
    search: endpoint({ method: "GET", path: "/friends/search", query: MemberSearchQuerySchema, response: MemberSerachResponseSchema }),
    incomingRequest: endpoint({ method: "GET", path: "/friends/requests/incoming", response: z.array(FriendRequestItemResponseSchema) }),
    outgoingRequest: endpoint({ method: "GET", path: "/friends/requests/outgoing", response: z.array(FriendRequestItemResponseSchema) }),
    sendRequest: endpoint({ method: "POST", path: "/friends/requests/:memberId", pathParams: memberIdParam, response: NoContentSchema }),
    acceptRequest: endpoint({ method: "POST", path: "/friends/requests/:requestId/accept", pathParams: friendRequestIdParam, response: NoContentSchema }),
    rejectRequest: endpoint({ method: "POST", path: "/friends/requests/:requestId/reject", pathParams: friendRequestIdParam, response: NoContentSchema }),
    block: endpoint({ method: "POST", path: "/friends/blocks/:memberId", pathParams: memberIdParam, response: NoContentSchema }),
    cancelRequest: endpoint({ method: "DELETE", path: "/friends/requests/:requestId", pathParams: friendRequestIdParam, response: NoContentSchema }),
    unblock: endpoint({ method: "DELETE", path: "/friends/blocks/:memberId", pathParams: memberIdParam, response: NoContentSchema }),
    unfriend: endpoint({ method: "DELETE", path: "/friends/:memberId", pathParams: memberIdParam, response: NoContentSchema }),
  },
  coupons: {
    list: endpoint({ method: "GET", path: "/coupons", response: z.array(CouponResponseSchema) }),
    use: endpoint({ method: "POST", path: "/coupons/:couponId/use", pathParams: couponIdParam, response: NoContentSchema }),
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
  notifications: {
    list: endpoint({ method: "GET", path: "/notifications", response: z.array(MealPlanNotificationSchema) }),
    markRead: endpoint({ method: "PATCH", path: "/notifications/:notificationId/read", pathParams: notificationIdParam, response: MealPlanNotificationSchema }),
    delete: endpoint({ method: "DELETE", path: "/notifications/:notificationId", pathParams: notificationIdParam, response: NoContentSchema }),
  },
  pushTokens: {
    list: endpoint({ method: "GET", path: "/push-tokens", response: z.array(PushTokenResponseSchema) }),
    register: endpoint({ method: "POST", path: "/push-tokens", body: RegisterPushTokenRequestSchema, response: PushTokenResponseSchema }),
    revoke: endpoint({ method: "POST", path: "/push-tokens/revoke", body: RevokePushTokenRequestSchema, response: NoContentSchema }),
  },
  liveActivities: {
    listMealPlanSessions: endpoint({ method: "GET", path: "/meal-plans/:mealPlanId/live-activity", pathParams: mealPlanIdParam, response: MealPlanLiveActivitySessionListResponseSchema }),
    registerMealPlanSession: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/live-activity/sessions", pathParams: mealPlanIdParam, body: RegisterMealPlanLiveActivitySessionRequestSchema, response: MealPlanLiveActivitySessionResponseSchema }),
    endMealPlanSessions: endpoint({ method: "POST", path: "/meal-plans/:mealPlanId/live-activity/end", pathParams: mealPlanIdParam, body: EndMealPlanLiveActivitySessionRequestSchema, response: NoContentSchema }),
  },
  sse: {
    notifications: endpoint({ method: "GET", path: "/sse/notifications", query: sseTokenQuery, response: z.any() }),
  },
  health: {
    healthCheck: endpoint({ method: "GET", path: "/", response: z.string() }),
  },
} as const satisfies Record<string, Record<string, AnyEndpointContract>>;

export type ApiContract = typeof apiContract;
export type ApiDomain = keyof ApiContract;
