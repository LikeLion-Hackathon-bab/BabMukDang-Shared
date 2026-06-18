import { z } from "zod";
import {
  ISODateStringSchema,
  ISODateTimeStringSchema,
  TimeHHmmStringSchema,
} from "@/common/schema/date.schema";
import { MealPlanIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";
import { RestaurantSchema } from "@/restaurant/restaurant.schema";
import { MealPlanLocationCandidateSchema } from "./meal-plan-decision.schema";
import { MealPlanParticipantResponseSchema, MealPlanParticipantStatusSchema } from "./meal-plan-participant.schema";
import { MealPlanInviteSummarySchema } from "./meal-plan-invite.schema";
import { MealPlanJoinRequestSummarySchema } from "./meal-plan-nearby-friend.schema";
import { MealPlanDecisionProgressSchema, MealPlanDecisionStageResponseSchema, MealPlanDecisionTaskKeySchema } from "./meal-plan-decision.schema";
import { MealPlanChatRoomSummarySchema } from "./meal-plan-chat.schema";

export const MealPlanStatusSchema = z.enum([
  "DRAFT",
  "RECOMMENDING",
  "GATHERING",
  "DECIDING",
  "READY",
  "CONFIRMED",
  "LOCKED",
  "COMPLETED",
  "RECORDED",
  "CANCELLED",
]);

export const MealPlanChannelSchema = z.enum([
  "OWNER_ONLY",
  "FRIEND_INVITE",
  "LINK_GUEST",
  "NEARBY_FRIENDS",
]);

export const MealPlanRecommendationContextSchema = z.object({
  mealDate: ISODateStringSchema.optional(),
  mealTime: TimeHHmmStringSchema.optional(),
  area: MealPlanLocationCandidateSchema.optional(),
  preferredMenuCategories: z.array(z.string().min(1)).default([]),
  excludedMenuCategories: z.array(z.string().min(1)).default([]),
  candidateMenuCategories: z.array(z.string().min(1)).default([]),
  budgetMin: z.number().int().min(0).optional(),
  budgetMax: z.number().int().min(0).optional(),
  memo: z.string().max(500).optional(),
});

export const CreateMealPlanRequestSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  channels: z.array(MealPlanChannelSchema).default(["OWNER_ONLY"]),
  recommendationContext: MealPlanRecommendationContextSchema.optional(),
});

export const CreateMealPlanResponseSchema = z.object({
  mealPlanId: MealPlanIdSchema,
});

export const UpdateMealPlanContextRequestSchema = MealPlanRecommendationContextSchema.partial();


export const MealPlanViewerRoleSchema = z.enum([
  "OWNER",
  "FRIEND",
  "GUEST",
  "NONE",
]);

export const MealPlanViewerPermissionsSchema = z.object({
  canView: z.boolean(),
  canInviteFriends: z.boolean(),
  canManageParticipants: z.boolean(),
  canCreateShareLink: z.boolean(),
  canExposeNearbyFriends: z.boolean(),
  canVote: z.boolean(),
  canChat: z.boolean(),
  canReadyMealPlan: z.boolean(),
  canReadyDecisionTask: z.boolean(),
  canRequestChange: z.boolean(),
  canReopenDecisionTask: z.boolean(),
  canConfirmDecisionSnapshot: z.boolean(),
  canConfirmMealPlan: z.boolean(),
  canCompleteMealPlan: z.boolean(),
  canRecordMealPlan: z.boolean(),
  canCancelMealPlan: z.boolean(),
});

export const MealPlanResponseSchema = z.object({
  mealPlanId: MealPlanIdSchema,
  owner: MemberCoreSchema,
  title: z.string().nullable(),
  status: MealPlanStatusSchema,
  channels: z.array(MealPlanChannelSchema),
  participants: z.array(MealPlanParticipantResponseSchema),
  pendingInvites: z.array(MealPlanInviteSummarySchema),
  pendingJoinRequests: z.array(MealPlanJoinRequestSummarySchema),
  decisionStages: z.array(MealPlanDecisionStageResponseSchema),
  decisionProgress: MealPlanDecisionProgressSchema.nullable(),
  viewerRole: MealPlanViewerRoleSchema,
  viewerParticipantStatus: MealPlanParticipantStatusSchema.nullable(),
  viewerPermissions: MealPlanViewerPermissionsSchema,
  viewerTaskReadyMap: z.record(MealPlanDecisionTaskKeySchema, z.boolean()),
  selectedDate: ISODateStringSchema.nullable(),
  selectedTime: TimeHHmmStringSchema.nullable(),
  selectedArea: MealPlanLocationCandidateSchema.nullable(),
  selectedRestaurant: RestaurantSchema.nullable(),
  selectedMenuCategory: z.string().nullable(),
  chatRoom: MealPlanChatRoomSummarySchema.nullable(),
  confirmedAt: ISODateTimeStringSchema.nullable(),
  lockedAt: ISODateTimeStringSchema.nullable(),
  completedAt: ISODateTimeStringSchema.nullable(),
  recordedAt: ISODateTimeStringSchema.nullable(),
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
});

export const MyMealPlanGroupSchema = z.enum(["DECIDING", "UPCOMING", "RECORD_NEEDED", "PAST"]);

export const MyMealPlanListItemSchema = z.object({
  mealPlanId: MealPlanIdSchema,
  group: MyMealPlanGroupSchema,
  title: z.string(),
  status: MealPlanStatusSchema,
  channels: z.array(MealPlanChannelSchema),
  participantCount: z.number().int().min(1),
  selectedDate: ISODateStringSchema.nullable(),
  selectedTime: TimeHHmmStringSchema.nullable(),
  selectedAreaName: z.string().nullable(),
  selectedRestaurantName: z.string().nullable(),
  primaryAction: z.object({
    label: z.string(),
    href: z.string(),
  }),
  updatedAt: ISODateTimeStringSchema,
});

export const MyMealPlanListResponseSchema = z.object({
  deciding: z.array(MyMealPlanListItemSchema),
  upcoming: z.array(MyMealPlanListItemSchema),
  recordNeeded: z.array(MyMealPlanListItemSchema),
  past: z.array(MyMealPlanListItemSchema),
});

export const MealPlanNotificationKindSchema = z.enum([
  "MEAL_PLAN_INVITE_RECEIVED",
  "MEAL_PLAN_INVITE_ACCEPTED",
  "MEAL_PLAN_JOIN_REQUESTED",
  "MEAL_PLAN_JOIN_REQUEST_ACCEPTED",
  "MEAL_PLAN_NEARBY_FRIEND_EXPOSED",
  "MEAL_PLAN_PARTICIPANT_JOINED",
  "MEAL_PLAN_READY_COMPLETED",
  "MEAL_PLAN_CONFIRMED",
  "MEAL_PLAN_LOCKED",
  "MEAL_PLAN_RECORD_NEEDED",
]);

export const MealPlanNotificationPriorityChannelSchema = z.enum([
  "HOME",
  "NOTIFICATION_INBOX",
  "FCM_PUSH",
  "LIVE_ACTIVITY",
]);

export const MealPlanLiveActivityBehaviorSchema = z.enum([
  "NONE",
  "START_OR_UPDATE",
  "UPDATE",
  "END",
]);

export const MealPlanNotificationPriorityPolicyItemSchema = z.object({
  kind: MealPlanNotificationKindSchema,
  priority: z.number().int().min(0),
  homePriority: z.number().int().min(0),
  inboxPriority: z.number().int().min(0),
  fcmPriority: z.number().int().min(0),
  liveActivityPriority: z.number().int().min(0),
  liveActivityBehavior: MealPlanLiveActivityBehaviorSchema,
  foregroundToast: z.boolean(),
});

export const MEAL_PLAN_NOTIFICATION_PRIORITY_POLICIES = {
  MEAL_PLAN_JOIN_REQUESTED: {
    kind: "MEAL_PLAN_JOIN_REQUESTED",
    priority: 5,
    homePriority: 5,
    inboxPriority: 5,
    fcmPriority: 10,
    liveActivityPriority: 80,
    liveActivityBehavior: "NONE",
    foregroundToast: true,
  },
  MEAL_PLAN_INVITE_RECEIVED: {
    kind: "MEAL_PLAN_INVITE_RECEIVED",
    priority: 12,
    homePriority: 12,
    inboxPriority: 12,
    fcmPriority: 15,
    liveActivityPriority: 80,
    liveActivityBehavior: "NONE",
    foregroundToast: true,
  },
  MEAL_PLAN_RECORD_NEEDED: {
    kind: "MEAL_PLAN_RECORD_NEEDED",
    priority: 18,
    homePriority: 18,
    inboxPriority: 18,
    fcmPriority: 20,
    liveActivityPriority: 60,
    liveActivityBehavior: "END",
    foregroundToast: true,
  },
  MEAL_PLAN_LOCKED: {
    kind: "MEAL_PLAN_LOCKED",
    priority: 22,
    homePriority: 22,
    inboxPriority: 22,
    fcmPriority: 8,
    liveActivityPriority: 5,
    liveActivityBehavior: "START_OR_UPDATE",
    foregroundToast: true,
  },
  MEAL_PLAN_CONFIRMED: {
    kind: "MEAL_PLAN_CONFIRMED",
    priority: 24,
    homePriority: 24,
    inboxPriority: 24,
    fcmPriority: 12,
    liveActivityPriority: 12,
    liveActivityBehavior: "START_OR_UPDATE",
    foregroundToast: true,
  },
  MEAL_PLAN_NEARBY_FRIEND_EXPOSED: {
    kind: "MEAL_PLAN_NEARBY_FRIEND_EXPOSED",
    priority: 28,
    homePriority: 28,
    inboxPriority: 28,
    fcmPriority: 24,
    liveActivityPriority: 80,
    liveActivityBehavior: "NONE",
    foregroundToast: false,
  },
  MEAL_PLAN_READY_COMPLETED: {
    kind: "MEAL_PLAN_READY_COMPLETED",
    priority: 32,
    homePriority: 32,
    inboxPriority: 32,
    fcmPriority: 28,
    liveActivityPriority: 20,
    liveActivityBehavior: "UPDATE",
    foregroundToast: false,
  },
  MEAL_PLAN_JOIN_REQUEST_ACCEPTED: {
    kind: "MEAL_PLAN_JOIN_REQUEST_ACCEPTED",
    priority: 36,
    homePriority: 36,
    inboxPriority: 36,
    fcmPriority: 30,
    liveActivityPriority: 80,
    liveActivityBehavior: "NONE",
    foregroundToast: true,
  },
  MEAL_PLAN_INVITE_ACCEPTED: {
    kind: "MEAL_PLAN_INVITE_ACCEPTED",
    priority: 40,
    homePriority: 40,
    inboxPriority: 40,
    fcmPriority: 34,
    liveActivityPriority: 80,
    liveActivityBehavior: "NONE",
    foregroundToast: true,
  },
  MEAL_PLAN_PARTICIPANT_JOINED: {
    kind: "MEAL_PLAN_PARTICIPANT_JOINED",
    priority: 44,
    homePriority: 44,
    inboxPriority: 44,
    fcmPriority: 38,
    liveActivityPriority: 32,
    liveActivityBehavior: "UPDATE",
    foregroundToast: false,
  },
} as const;

export const MealPlanNotificationSchema = z.object({
  notificationId: z.string().min(1),
  kind: MealPlanNotificationKindSchema,
  mealPlanId: MealPlanIdSchema,
  deepLink: z.string().min(1),
  title: z.string().min(1),
  message: z.string().min(1),
  createdAt: ISODateTimeStringSchema,
  readAt: ISODateTimeStringSchema.nullable(),
});
