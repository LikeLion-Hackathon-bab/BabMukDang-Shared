import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { ArticleIdSchema, MealPlanIdSchema, MemberIdSchema } from "@/common/schema/id.schema";
import { RestaurantSchema } from "@/restaurant/restaurant.schema";
import { MealPlanJoinRequestSummarySchema } from "./meal-plan-nearby-friend.schema";
import { MealPlanNotificationSchema, MyMealPlanListItemSchema } from "./meal-plan.schema";
import { MealPlanDecisionStageIdSchema } from "./meal-plan-decision.schema";

export const HomeMealPlanActionKindSchema = z.enum([
  "CONTINUE_DECISION",
  "TODAY_UPCOMING",
  "RECORD_NEEDED",
  "RESPOND_JOIN_REQUEST",
  "NOTIFICATION_FOLLOW_UP",
]);

export const HomeMealPlanActionCardSchema = z.object({
  actionId: z.string().min(1),
  kind: HomeMealPlanActionKindSchema,
  priority: z.number().int().min(0),
  title: z.string().min(1),
  description: z.string().min(1),
  primaryAction: z.object({
    label: z.string().min(1),
    href: z.string().min(1),
  }),
  mealPlan: MyMealPlanListItemSchema.nullable(),
  joinRequest: MealPlanJoinRequestSummarySchema.nullable(),
  notification: MealPlanNotificationSchema.nullable().default(null),
});

export const HomeMealPlanDashboardResponseSchema = z.object({
  generatedAt: ISODateTimeStringSchema,
  inProgress: z.array(MyMealPlanListItemSchema),
  today: z.array(MyMealPlanListItemSchema),
  recordNeeded: z.array(MyMealPlanListItemSchema),
  pendingJoinRequests: z.array(MealPlanJoinRequestSummarySchema),
  unreadNotifications: z.array(MealPlanNotificationSchema).default([]),
  nextActions: z.array(HomeMealPlanActionCardSchema),
});

export const MealMapLayerSchema = z.enum([
  "MY_MEAL_PLAN_PLACE",
  "NEARBY_FRIEND_MEAL_PLAN",
  "FRIEND_RECORD_LOCATION",
  "RESTAURANT_CANDIDATE",
]);

const MealMapMarkerBaseSchema = z.object({
  markerId: z.string().min(1),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  title: z.string().min(1),
  subtitle: z.string().nullable(),
  href: z.string().min(1).nullable(),
  mealPlanId: MealPlanIdSchema.nullable(),
  articleId: ArticleIdSchema.nullable(),
  restaurant: RestaurantSchema.nullable(),
  distanceMeters: z.number().int().min(0).nullable(),
  updatedAt: ISODateTimeStringSchema,
});

export const MealMapMyMealPlanPlaceMetadataSchema = z.object({
  ownerId: MemberIdSchema.nullable().default(null),
  status: z.string().min(1),
  participantCount: z.number().int().min(1),
  source: z.string().min(1),
});

export const MealMapNearbyFriendMealPlanMetadataSchema = z.object({
  ownerId: MemberIdSchema.nullable().default(null),
  ownerName: z.string().min(1),
  participantCount: z.number().int().min(1),
  expiresAt: ISODateTimeStringSchema.nullable(),
  source: z.string().min(1),
});

export const MealMapFriendRecordLocationMetadataSchema = z.object({
  authorId: MemberIdSchema.nullable().default(null),
  authorName: z.string().min(1),
  imageUrl: z.string().nullable().default(null),
  mealDate: z.string().min(1),
});

export const MealMapRestaurantCandidateCompletionBlockedReasonSchema = z.enum([
  "OWNER_ONLY",
  "STAGE_ALREADY_COMPLETED",
  "MEAL_PLAN_NOT_MUTABLE",
]);

export const MealMapRestaurantCandidateMetadataSchema = z.object({
  stageId: MealPlanDecisionStageIdSchema,
  ownerId: MemberIdSchema.nullable().default(null),
  status: z.string().min(1),
  source: z.enum(["search", "fallback", "manual"]).default("search"),
  stageStatus: z.enum(["OPEN", "COMPLETED", "REOPENED"]).default("OPEN"),
  canVote: z.boolean().default(false),
  canCompleteStage: z.boolean().default(false),
  completionBlockedReason: MealMapRestaurantCandidateCompletionBlockedReasonSchema.nullable().default(null),
});

export const MealMapMarkerSchema = z.discriminatedUnion("layer", [
  MealMapMarkerBaseSchema.extend({
    layer: z.literal("MY_MEAL_PLAN_PLACE"),
    metadata: MealMapMyMealPlanPlaceMetadataSchema,
  }),
  MealMapMarkerBaseSchema.extend({
    layer: z.literal("NEARBY_FRIEND_MEAL_PLAN"),
    metadata: MealMapNearbyFriendMealPlanMetadataSchema,
  }),
  MealMapMarkerBaseSchema.extend({
    layer: z.literal("FRIEND_RECORD_LOCATION"),
    metadata: MealMapFriendRecordLocationMetadataSchema,
  }),
  MealMapMarkerBaseSchema.extend({
    layer: z.literal("RESTAURANT_CANDIDATE"),
    metadata: MealMapRestaurantCandidateMetadataSchema,
  }),
]);

export const MealMapQuerySchema = z.object({
  friendRecordDays: z.coerce.number().int().min(1).max(90).optional().default(7),
});

export const MealMapResponseSchema = z.object({
  generatedAt: ISODateTimeStringSchema,
  center: z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
    source: z.enum(["LAST_KNOWN_LOCATION", "MY_MEAL_PLAN", "DEFAULT"]),
  }),
  layers: z.object({
    myMealPlanPlaces: z.array(MealMapMarkerSchema),
    nearbyFriendMealPlans: z.array(MealMapMarkerSchema),
    friendRecordLocations: z.array(MealMapMarkerSchema),
    restaurantCandidates: z.array(MealMapMarkerSchema),
  }),
});
