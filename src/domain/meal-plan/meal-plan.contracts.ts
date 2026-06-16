import { z } from "zod";
import {
  CreateMealPlanRequestSchema,
  CreateMealPlanResponseSchema,
  MealPlanChannelSchema,
  MealPlanNotificationKindSchema,
  MealPlanNotificationSchema,
  MealPlanRecommendationContextSchema,
  MealPlanResponseSchema,
  MealPlanStatusSchema,
  MyMealPlanGroupSchema,
  MyMealPlanListItemSchema,
  MyMealPlanListResponseSchema,
  UpdateMealPlanContextRequestSchema,
} from "./meal-plan.schema";
import {
  CreateMealPlanParticipantRequestSchema,
  MealPlanGuestParticipantSchema,
  MealPlanJoinSourceSchema,
  MealPlanParticipantResponseSchema,
  MealPlanParticipantRoleSchema,
  MealPlanParticipantStatusSchema,
} from "./meal-plan-participant.schema";
import {
  CreateMealPlanInviteRequestSchema,
  MealPlanInviteListResponseSchema,
  MealPlanInviteStatusSchema,
  MealPlanInviteSummarySchema,
  SendMealPlanInviteResponseSchema,
} from "./meal-plan-invite.schema";
import {
  CreateMealPlanShareLinkRequestSchema,
  JoinMealPlanGuestRequestSchema,
  JoinMealPlanGuestResponseSchema,
  MealPlanGuestSessionQuerySchema,
  MealPlanGuestSessionResponseSchema,
  MealPlanShareLinkSummarySchema,
  MealPlanSharePreviewResponseSchema,
} from "./meal-plan-share-link.schema";
import {
  CreateMealPlanJoinRequestSchema,
  ExposeMealPlanToNearbyFriendsRequestSchema,
  MealPlanJoinRequestStatusSchema,
  MealPlanJoinRequestSummarySchema,
  MealPlanNearbyFriendExposureStatusSchema,
  MealPlanNearbyFriendExposureSummarySchema,
  NearbyFriendMealPlanSummarySchema,
} from "./meal-plan-nearby-friend.schema";
import {
  CompleteMealPlanDecisionStageRequestSchema,
  CreateMealPlanChangeRequestSchema,
  CreateMealPlanVoteRequestSchema,
  MealPlanChangeRequestStatusSchema,
  MealPlanChangeRequestSummarySchema,
  MealPlanDecisionCandidateSchema,
  MealPlanDecisionStageResponseSchema,
  MealPlanDecisionStageStatusSchema,
  MealPlanDecisionStageTypeSchema,
  MealPlanLocationCandidateSchema,
  MealPlanMenuCandidateSchema,
  MealPlanMenuCandidateSourceSchema,
  MealPlanRestaurantCandidateSchema,
  MealPlanVoteSchema,
  MealPlanVoteTypeSchema,
} from "./meal-plan-decision.schema";
import {
  MealPlanChatMessageKindSchema,
  MealPlanChatMessageResponseSchema,
  MealPlanChatRoomSummarySchema,
  MealPlanSystemMessageSchema,
  SendMealPlanChatMessageRequestSchema,
} from "./meal-plan-chat.schema";
import {
  CreateMealGroupRequestSchema,
  MealGroupMemberRoleSchema,
  MealGroupMemberSchema,
  MealGroupResponseSchema,
  StartMealPlanFromGroupRequestSchema,
} from "./meal-group.schema";

export type MealPlanStatus = z.infer<typeof MealPlanStatusSchema>;
export type MealPlanChannel = z.infer<typeof MealPlanChannelSchema>;
export type MealPlanRecommendationContext = z.infer<typeof MealPlanRecommendationContextSchema>;
export type MealPlanNotificationKind = z.infer<typeof MealPlanNotificationKindSchema>;
export type MealPlanNotification = z.infer<typeof MealPlanNotificationSchema>;
export type CreateMealPlanRequest = z.infer<typeof CreateMealPlanRequestSchema>;
export type CreateMealPlanResponse = z.infer<typeof CreateMealPlanResponseSchema>;
export type UpdateMealPlanContextRequest = z.infer<typeof UpdateMealPlanContextRequestSchema>;
export type MealPlanResponse = z.infer<typeof MealPlanResponseSchema>;
export type MyMealPlanGroup = z.infer<typeof MyMealPlanGroupSchema>;
export type MyMealPlanListItem = z.infer<typeof MyMealPlanListItemSchema>;
export type MyMealPlanListResponse = z.infer<typeof MyMealPlanListResponseSchema>;

export type MealPlanParticipantRole = z.infer<typeof MealPlanParticipantRoleSchema>;
export type MealPlanParticipantStatus = z.infer<typeof MealPlanParticipantStatusSchema>;
export type MealPlanJoinSource = z.infer<typeof MealPlanJoinSourceSchema>;
export type MealPlanGuestParticipant = z.infer<typeof MealPlanGuestParticipantSchema>;
export type MealPlanParticipantResponse = z.infer<typeof MealPlanParticipantResponseSchema>;
export type CreateMealPlanParticipantRequest = z.infer<
  typeof CreateMealPlanParticipantRequestSchema
>;

export type MealPlanInviteStatus = z.infer<typeof MealPlanInviteStatusSchema>;
export type CreateMealPlanInviteRequest = z.infer<typeof CreateMealPlanInviteRequestSchema>;
export type MealPlanInviteSummary = z.infer<typeof MealPlanInviteSummarySchema>;
export type MealPlanInviteListResponse = z.infer<typeof MealPlanInviteListResponseSchema>;
export type SendMealPlanInviteResponse = z.infer<typeof SendMealPlanInviteResponseSchema>;

export type CreateMealPlanShareLinkRequest = z.infer<typeof CreateMealPlanShareLinkRequestSchema>;
export type MealPlanShareLinkSummary = z.infer<typeof MealPlanShareLinkSummarySchema>;
export type MealPlanSharePreviewResponse = z.infer<typeof MealPlanSharePreviewResponseSchema>;
export type JoinMealPlanGuestRequest = z.infer<typeof JoinMealPlanGuestRequestSchema>;
export type JoinMealPlanGuestResponse = z.infer<typeof JoinMealPlanGuestResponseSchema>;
export type MealPlanGuestSessionQuery = z.infer<typeof MealPlanGuestSessionQuerySchema>;
export type MealPlanGuestSessionResponse = z.infer<typeof MealPlanGuestSessionResponseSchema>;

export type MealPlanNearbyFriendExposureStatus = z.infer<
  typeof MealPlanNearbyFriendExposureStatusSchema
>;
export type ExposeMealPlanToNearbyFriendsRequest = z.infer<
  typeof ExposeMealPlanToNearbyFriendsRequestSchema
>;
export type MealPlanNearbyFriendExposureSummary = z.infer<
  typeof MealPlanNearbyFriendExposureSummarySchema
>;
export type MealPlanJoinRequestStatus = z.infer<typeof MealPlanJoinRequestStatusSchema>;
export type CreateMealPlanJoinRequest = z.infer<typeof CreateMealPlanJoinRequestSchema>;
export type MealPlanJoinRequestSummary = z.infer<typeof MealPlanJoinRequestSummarySchema>;
export type NearbyFriendMealPlanSummary = z.infer<typeof NearbyFriendMealPlanSummarySchema>;

export type MealPlanDecisionStageType = z.infer<typeof MealPlanDecisionStageTypeSchema>;
export type MealPlanDecisionStageStatus = z.infer<typeof MealPlanDecisionStageStatusSchema>;
export type MealPlanVoteType = z.infer<typeof MealPlanVoteTypeSchema>;
export type MealPlanLocationCandidate = z.infer<typeof MealPlanLocationCandidateSchema>;
export type MealPlanMenuCandidate = z.infer<typeof MealPlanMenuCandidateSchema>;
export type MealPlanMenuCandidateSource = z.infer<typeof MealPlanMenuCandidateSourceSchema>;
export type MealPlanRestaurantCandidate = z.infer<typeof MealPlanRestaurantCandidateSchema>;
export type MealPlanDecisionCandidate = z.infer<typeof MealPlanDecisionCandidateSchema>;
export type MealPlanVote = z.infer<typeof MealPlanVoteSchema>;
export type MealPlanDecisionStageResponse = z.infer<typeof MealPlanDecisionStageResponseSchema>;
export type CreateMealPlanVoteRequest = z.infer<typeof CreateMealPlanVoteRequestSchema>;
export type CompleteMealPlanDecisionStageRequest = z.infer<
  typeof CompleteMealPlanDecisionStageRequestSchema
>;
export type MealPlanChangeRequestStatus = z.infer<typeof MealPlanChangeRequestStatusSchema>;
export type CreateMealPlanChangeRequest = z.infer<typeof CreateMealPlanChangeRequestSchema>;
export type MealPlanChangeRequestSummary = z.infer<typeof MealPlanChangeRequestSummarySchema>;

export type MealPlanChatMessageKind = z.infer<typeof MealPlanChatMessageKindSchema>;
export type MealPlanChatRoomSummary = z.infer<typeof MealPlanChatRoomSummarySchema>;
export type SendMealPlanChatMessageRequest = z.infer<typeof SendMealPlanChatMessageRequestSchema>;
export type MealPlanChatMessageResponse = z.infer<typeof MealPlanChatMessageResponseSchema>;
export type MealPlanSystemMessage = z.infer<typeof MealPlanSystemMessageSchema>;

export type MealGroupMemberRole = z.infer<typeof MealGroupMemberRoleSchema>;
export type MealGroupMember = z.infer<typeof MealGroupMemberSchema>;
export type MealGroupResponse = z.infer<typeof MealGroupResponseSchema>;
export type CreateMealGroupRequest = z.infer<typeof CreateMealGroupRequestSchema>;
export type StartMealPlanFromGroupRequest = z.infer<typeof StartMealPlanFromGroupRequestSchema>;
