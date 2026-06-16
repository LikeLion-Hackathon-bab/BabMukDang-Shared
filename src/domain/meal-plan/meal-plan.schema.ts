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
import { MealPlanParticipantResponseSchema } from "./meal-plan-participant.schema";
import { MealPlanInviteSummarySchema } from "./meal-plan-invite.schema";
import { MealPlanJoinRequestSummarySchema } from "./meal-plan-nearby-friend.schema";
import { MealPlanDecisionStageResponseSchema } from "./meal-plan-decision.schema";
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
  "MEAL_PLAN_PARTICIPANT_JOINED",
  "MEAL_PLAN_READY_COMPLETED",
  "MEAL_PLAN_CONFIRMED",
  "MEAL_PLAN_LOCKED",
  "MEAL_PLAN_RECORD_NEEDED",
]);

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
