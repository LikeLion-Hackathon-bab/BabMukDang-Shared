import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { FriendRequestIdSchema, MemberIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";

export const FriendRequestStatusSchema = z.enum(["PENDING", "ACCEPTED", "REJECTED", "CANCELED"]);

export const FriendMealAvailabilitySchema = z.object({
  isHungry: z.boolean(),
  mealProposalAllowed: z.boolean(),
  mealStatusExpiresAt: ISODateTimeStringSchema.nullable(),
  nearbyMealPlanExposureAllowed: z.boolean(),
});

export const FriendListItemResponseSchema = MemberCoreSchema.extend({
  friendSince: ISODateTimeStringSchema,
  mealAvailability: FriendMealAvailabilitySchema.optional(),
});

export const FriendBlockItemResponseSchema = MemberCoreSchema.extend({
  blockedAt: ISODateTimeStringSchema,
});

export const FriendRequestMemberSchema = MemberCoreSchema;

export const FriendRequestItemResponseSchema = z.object({
  requestId: FriendRequestIdSchema,
  requester: FriendRequestMemberSchema,
  recipient: FriendRequestMemberSchema,
  status: FriendRequestStatusSchema,
  requestedAt: ISODateTimeStringSchema,
});

export const FriendSearchQuerySchema = z.string().min(1).max(50);
export const FriendSearchResponseSchema = z.array(MemberCoreSchema);
