import { z } from "zod";
import { ISODateTimeStringSchema } from "../../common/schema/date.schema";
import { FriendRequestIdSchema, MemberIdSchema } from "../../common/schema/id.schema";
import { MemberResponseSchema } from "../../member/schema/member.schema";

export const FriendMealFilterSchema = z.enum(["ALL", "HUNGRY", "NOT_HUNGRY"]);
export const FriendRequestStatusSchema = z.enum(["PENDING", "ACCEPTED", "REJECTED", "CANCELED"]);

export const FriendMealItemResponseSchema = MemberResponseSchema.extend({
  hungry: z.boolean(),
  label: z.string(),
});

export const FriendListItemResponseSchema = MemberResponseSchema.extend({
  friendSince: ISODateTimeStringSchema,
});

export const FriendBlockItemResponseSchema = MemberResponseSchema.extend({
  blockedAt: ISODateTimeStringSchema,
});

export const FriendRequestMemberSchema = MemberResponseSchema;

export const FriendRequestItemResponseSchema = z.object({
  requestId: FriendRequestIdSchema,
  requester: FriendRequestMemberSchema,
  recipient: FriendRequestMemberSchema,
  status: FriendRequestStatusSchema,
  requestedAt: ISODateTimeStringSchema,
});

export const FriendActionRequestSchema = z.object({
  memberId: MemberIdSchema,
});
