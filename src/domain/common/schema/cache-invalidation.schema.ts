import { z } from "zod";

export const CacheInvalidationEntitySchema = z.enum([
  "article",
  "mealPlan",
  "mealPlanInvite",
  "mealPlanParticipant",
  "mealPlanDecision",
  "mealPlanChat",
  "mealGroup",
  "notification",
  "friend",
]);

export const CacheInvalidationActionSchema = z.enum([
  "created",
  "updated",
  "deleted",
  "accepted",
  "rejected",
  "cancelled",
  "closed",
  "joined",
  "ready",
  "confirmed",
  "locked",
  "completed",
  "recorded",
  "read",
]);

export const CacheInvalidationKeySchema = z.enum([
  "articles",
  "mealPlans",
  "mealPlanDetail",
  "mealPlanInvites",
  "mealPlanJoinRequests",
  "mealPlanNearbyFriends",
  "mealPlanMessages",
  "mealGroups",
  "notifications",
  "friends",
  "friendMeals",
]);

export const CacheInvalidationEventSchema = z.object({
  type: z.literal("cache.invalidate"),
  entity: CacheInvalidationEntitySchema,
  action: CacheInvalidationActionSchema,
  id: z.union([z.string(), z.number()]).optional(),
  keys: z.array(CacheInvalidationKeySchema).min(1),
  occurredAt: z.string().datetime(),
});
