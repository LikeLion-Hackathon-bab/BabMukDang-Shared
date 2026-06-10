import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { FriendRequestIdSchema, MemberIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/schema/member.schema";

export const FriendMealFilterSchema = z.enum(["ALL", "HUNGRY", "NOT_HUNGRY"]);
export const FriendRequestStatusSchema = z.enum(["PENDING", "ACCEPTED", "REJECTED", "CANCELED"]);

export const FriendSearchQuerySchema = z.object({
  email: z.string().email().optional(),
  username: z.string().optional(),
});

export const FriendMealQuerySchema = z.object({
  status: FriendMealFilterSchema.optional().default("ALL"),
});
export const FriendMealItemResponseSchema = MemberCoreSchema.extend({
  hungry: z.boolean(),
  label: z.string(),
});

export const FriendListItemResponseSchema = MemberCoreSchema.extend({
  friendSince: ISODateTimeStringSchema,
});

export const FriendBlockItemResponseSchema = MemberCoreSchema.extend({
  blockedAt: ISODateTimeStringSchema,
});

export const FriendSerachResponseSchema = z.array(MemberCoreSchema);

export const FriendRequestMemberSchema = MemberCoreSchema;

export const FriendRequestItemResponseSchema = z.object({
  requestId: FriendRequestIdSchema,
  requester: FriendRequestMemberSchema,
  recipient: FriendRequestMemberSchema,
  status: FriendRequestStatusSchema,
  requestedAt: ISODateTimeStringSchema,
});
