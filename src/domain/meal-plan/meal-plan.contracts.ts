import { z } from "zod";
import {
  CreateMealPlanRequestSchema,
  CreateMealPlanResponseSchema,
  MealPlanChannelSchema,
  MealPlanNotificationKindSchema,
  MealPlanNotificationPriorityChannelSchema,
  MealPlanLiveActivityBehaviorSchema,
  MealPlanNotificationPriorityPolicyItemSchema,
  MealPlanNotificationSchema,
  MealPlanRecommendationContextSchema,
  MealPlanResponseSchema,
  MealPlanViewerPermissionsSchema,
  MealPlanViewerRoleSchema,
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
  ExposeMealPlanToNearbyFriendsResponseSchema,
  MealPlanNearbyFriendRejectionReasonSchema,
  MealPlanNearbyFriendRejectionSummarySchema,
  MealPlanNearbyFriendExposureBatchSummarySchema,
  MealPlanNearbyFriendExposureNotificationStatusSchema,
  MealPlanJoinRequestStatusSchema,
  MealPlanJoinRequestSummarySchema,
  MealPlanNearbyFriendExposureStatusSchema,
  MealPlanNearbyFriendExposureSummarySchema,
  NearbyFriendExposureEligibilitySchema,
  NearbyFriendMealPlanSummarySchema,
} from "./meal-plan-nearby-friend.schema";
import {
  HomeMealPlanActionCardSchema,
  HomeMealPlanActionKindSchema,
  HomeMealPlanDashboardResponseSchema,
  MealMapLayerSchema,
  MealMapMarkerSchema,
  MealMapResponseSchema,
  MealMapQuerySchema,
  MealMapMyMealPlanPlaceMetadataSchema,
  MealMapNearbyFriendMealPlanMetadataSchema,
  MealMapFriendRecordLocationMetadataSchema,
  MealMapRestaurantCandidateMetadataSchema,
  MealMapRestaurantCandidateCompletionBlockedReasonSchema,
} from "./meal-plan-home-map.schema";
import {
  CompleteMealPlanDecisionStageRequestSchema,
  CreateMealPlanChangeRequestSchema,
  CreateMealPlanVoteRequestSchema,
  MealPlanChangeRequestStatusSchema,
  MealPlanChangeRequestSummarySchema,
  MealPlanDecisionCandidateSchema,
  MealPlanDecisionProgressSchema,
  MealPlanDecisionStageResponseSchema,
  MealPlanDecisionStageMetadataSchema,
  MealPlanDecisionStageStatusSchema,
  MealPlanDecisionStageTypeSchema,
  MealPlanLocationCandidateSchema,
  MealPlanMenuCandidateSchema,
  MealPlanMenuCandidateSourceSchema,
  MealPlanRestaurantCandidateSchema,
  MealPlanRestaurantSearchStateSchema,
  MealPlanRestaurantSearchStatusSchema,
  MealPlanVoteSchema,
  MealPlanDecisionTaskKeySchema,
  MealPlanDecisionTaskStatusSchema,
  MealPlanDecisionTaskProgressSchema,
  MealPlanDecisionSnapshotSchema,
  MealPlanDecisionFinalFieldSchema,
  MealPlanDecisionSnapshotStatusSchema,
  MealPlanDecisionReasonSchema,
  MealPlanDecisionActorTypeSchema,
  MealPlanDecisionTaskReadyRequestSchema,
  ReopenMealPlanDecisionTaskRequestSchema,
  ConfirmMealPlanDecisionSnapshotRequestSchema,
  MealPlanVoteTypeSchema,
} from "./meal-plan-decision.schema";
import {
  MealPlanChatMessageKindSchema,
  MealPlanChatMessageResponseSchema,
  MealPlanChatRoomSummarySchema,
  MealPlanChatMessageListResponseSchema,
  MealPlanSystemMessageKindSchema,
  MealPlanChatSystemPayloadSchema,
  MealPlanSystemMessageSchema,
  SendMealPlanChatMessageRequestSchema,
} from "./meal-plan-chat.schema";
import {
  CreateMealGroupRequestSchema,
  MealGroupMemberRoleSchema,
  MealGroupMemberSchema,
  MealGroupResponseSchema,
  MealGroupHistoryItemSchema,
  MealGroupHistoryResponseSchema,
  MealGroupPreferenceSummarySchema,
  StartMealPlanFromGroupRequestSchema,
  AddMealGroupMemberRequestSchema,
  UpdateMealGroupMemberRoleRequestSchema,
} from "./meal-group.schema";

export type MealPlanStatus = z.infer<typeof MealPlanStatusSchema>;
export type MealPlanChannel = z.infer<typeof MealPlanChannelSchema>;
export type MealPlanRecommendationContext = z.infer<typeof MealPlanRecommendationContextSchema>;
export type MealPlanNotificationKind = z.infer<typeof MealPlanNotificationKindSchema>;
export type MealPlanNotificationPriorityChannel = z.infer<typeof MealPlanNotificationPriorityChannelSchema>;
export type MealPlanLiveActivityBehavior = z.infer<typeof MealPlanLiveActivityBehaviorSchema>;
export type MealPlanNotificationPriorityPolicyItem = z.infer<typeof MealPlanNotificationPriorityPolicyItemSchema>;
export type MealPlanNotification = z.infer<typeof MealPlanNotificationSchema>;
export type CreateMealPlanRequest = z.infer<typeof CreateMealPlanRequestSchema>;
export type CreateMealPlanResponse = z.infer<typeof CreateMealPlanResponseSchema>;
export type UpdateMealPlanContextRequest = z.infer<typeof UpdateMealPlanContextRequestSchema>;
export type MealPlanResponse = z.infer<typeof MealPlanResponseSchema>;
export type MealPlanViewerRole = z.infer<typeof MealPlanViewerRoleSchema>;
export type MealPlanViewerPermissions = z.infer<typeof MealPlanViewerPermissionsSchema>;
export type MyMealPlanGroup = z.infer<typeof MyMealPlanGroupSchema>;
export type MyMealPlanListItem = z.infer<typeof MyMealPlanListItemSchema>;
export type MyMealPlanListResponse = z.infer<typeof MyMealPlanListResponseSchema>;
export type HomeMealPlanActionKind = z.infer<typeof HomeMealPlanActionKindSchema>;
export type HomeMealPlanActionCard = z.infer<typeof HomeMealPlanActionCardSchema>;
export type HomeMealPlanDashboardResponse = z.infer<typeof HomeMealPlanDashboardResponseSchema>;
export type MealMapLayer = z.infer<typeof MealMapLayerSchema>;
export type MealMapMyMealPlanPlaceMetadata = z.infer<typeof MealMapMyMealPlanPlaceMetadataSchema>;
export type MealMapNearbyFriendMealPlanMetadata = z.infer<typeof MealMapNearbyFriendMealPlanMetadataSchema>;
export type MealMapFriendRecordLocationMetadata = z.infer<typeof MealMapFriendRecordLocationMetadataSchema>;
export type MealMapRestaurantCandidateMetadata = z.infer<typeof MealMapRestaurantCandidateMetadataSchema>;
export type MealMapRestaurantCandidateCompletionBlockedReason = z.infer<typeof MealMapRestaurantCandidateCompletionBlockedReasonSchema>;
export type MealMapMarker = z.infer<typeof MealMapMarkerSchema>;
export type MealMapResponse = z.infer<typeof MealMapResponseSchema>;
export type MealMapQuery = z.infer<typeof MealMapQuerySchema>;

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
export type ExposeMealPlanToNearbyFriendsResponse = z.infer<
  typeof ExposeMealPlanToNearbyFriendsResponseSchema
>;
export type MealPlanNearbyFriendRejectionReason = z.infer<
  typeof MealPlanNearbyFriendRejectionReasonSchema
>;
export type MealPlanNearbyFriendRejectionSummary = z.infer<
  typeof MealPlanNearbyFriendRejectionSummarySchema
>;
export type MealPlanNearbyFriendExposureNotificationStatus = z.infer<
  typeof MealPlanNearbyFriendExposureNotificationStatusSchema
>;
export type MealPlanNearbyFriendExposureBatchSummary = z.infer<
  typeof MealPlanNearbyFriendExposureBatchSummarySchema
>;
export type MealPlanNearbyFriendExposureSummary = z.infer<
  typeof MealPlanNearbyFriendExposureSummarySchema
>;
export type NearbyFriendExposureEligibility = z.infer<
  typeof NearbyFriendExposureEligibilitySchema
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
export type MealPlanDecisionProgress = z.infer<typeof MealPlanDecisionProgressSchema>;
export type MealPlanDecisionTaskKey = z.infer<typeof MealPlanDecisionTaskKeySchema>;
export type MealPlanDecisionTaskStatus = z.infer<typeof MealPlanDecisionTaskStatusSchema>;
export type MealPlanDecisionTaskProgress = z.infer<typeof MealPlanDecisionTaskProgressSchema>;
export type MealPlanDecisionSnapshot = z.infer<typeof MealPlanDecisionSnapshotSchema>;
export type MealPlanDecisionFinalField = z.infer<typeof MealPlanDecisionFinalFieldSchema>;
export type MealPlanDecisionSnapshotStatus = z.infer<typeof MealPlanDecisionSnapshotStatusSchema>;
export type MealPlanDecisionReason = z.infer<typeof MealPlanDecisionReasonSchema>;
export type MealPlanDecisionActorType = z.infer<typeof MealPlanDecisionActorTypeSchema>;
export type MealPlanDecisionTaskReadyRequest = z.infer<typeof MealPlanDecisionTaskReadyRequestSchema>;
export type ReopenMealPlanDecisionTaskRequest = z.infer<typeof ReopenMealPlanDecisionTaskRequestSchema>;
export type ConfirmMealPlanDecisionSnapshotRequest = z.infer<typeof ConfirmMealPlanDecisionSnapshotRequestSchema>;
export type CreateMealPlanVoteRequest = z.infer<typeof CreateMealPlanVoteRequestSchema>;
export type CompleteMealPlanDecisionStageRequest = z.infer<
  typeof CompleteMealPlanDecisionStageRequestSchema
>;
export type MealPlanChangeRequestStatus = z.infer<typeof MealPlanChangeRequestStatusSchema>;
export type CreateMealPlanChangeRequest = z.infer<typeof CreateMealPlanChangeRequestSchema>;
export type MealPlanChangeRequestSummary = z.infer<typeof MealPlanChangeRequestSummarySchema>;

export type MealPlanChatMessageKind = z.infer<typeof MealPlanChatMessageKindSchema>;
export type MealPlanSystemMessageKind = z.infer<typeof MealPlanSystemMessageKindSchema>;
export type MealPlanChatSystemPayload = z.infer<typeof MealPlanChatSystemPayloadSchema>;
export type MealPlanChatRoomSummary = z.infer<typeof MealPlanChatRoomSummarySchema>;
export type SendMealPlanChatMessageRequest = z.infer<typeof SendMealPlanChatMessageRequestSchema>;
export type MealPlanChatMessageResponse = z.infer<typeof MealPlanChatMessageResponseSchema>;
export type MealPlanChatMessageListResponse = z.infer<typeof MealPlanChatMessageListResponseSchema>;
export type MealPlanSystemMessage = z.infer<typeof MealPlanSystemMessageSchema>;

export type MealGroupMemberRole = z.infer<typeof MealGroupMemberRoleSchema>;
export type MealGroupMember = z.infer<typeof MealGroupMemberSchema>;
export type MealGroupResponse = z.infer<typeof MealGroupResponseSchema>;
export type CreateMealGroupRequest = z.infer<typeof CreateMealGroupRequestSchema>;
export type StartMealPlanFromGroupRequest = z.infer<typeof StartMealPlanFromGroupRequestSchema>;
export type AddMealGroupMemberRequest = z.infer<typeof AddMealGroupMemberRequestSchema>;
export type UpdateMealGroupMemberRoleRequest = z.infer<typeof UpdateMealGroupMemberRoleRequestSchema>;
export type MealGroupHistoryItem = z.infer<typeof MealGroupHistoryItemSchema>;
export type MealGroupHistoryResponse = z.infer<typeof MealGroupHistoryResponseSchema>;
export type MealGroupPreferenceSummary = z.infer<typeof MealGroupPreferenceSummarySchema>;
