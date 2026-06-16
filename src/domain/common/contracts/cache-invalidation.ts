import { z } from "zod";
import {
  CacheInvalidationActionSchema,
  CacheInvalidationEntitySchema,
  CacheInvalidationEventSchema,
  CacheInvalidationKeySchema,
} from "../schema/cache-invalidation.schema";

export const CACHE_INVALIDATION_SSE_EVENT = "cache-invalidate" as const;

export type CacheInvalidationEntity = z.infer<
  typeof CacheInvalidationEntitySchema
>;

export type CacheInvalidationAction = z.infer<
  typeof CacheInvalidationActionSchema
>;

export type CacheInvalidationKey = z.infer<typeof CacheInvalidationKeySchema>;

export type CacheInvalidationEvent = z.infer<
  typeof CacheInvalidationEventSchema
>;
