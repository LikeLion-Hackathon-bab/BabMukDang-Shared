import { z } from "zod";

export const CacheInvalidationEntitySchema = z.enum([
  "article",
  "recruit",
  "invitation",
  "notification",
  "meeting",
  "friend",
]);

export const CacheInvalidationActionSchema = z.enum([
  "created",
  "updated",
  "deleted",
  "accepted",
  "rejected",
  "closed",
  "joined",
  "read",
]);

export const CacheInvalidationKeySchema = z.enum([
  "articles",
  "recruits",
  "invitations",
  "notifications",
  "meetings",
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
