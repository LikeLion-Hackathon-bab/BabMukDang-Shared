import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { FriendRequestIdSchema, MemberIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";

export const FriendRequestStatusSchema = z.enum(["PENDING", "ACCEPTED", "REJECTED", "CANCELED"]);

export const FriendListItemResponseSchema = MemberCoreSchema.extend({
  friendSince: ISODateTimeStringSchema,
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
