import { z } from "zod";
import { InvitationIdSchema, MemberIdSchema, RoomIdSchema } from "../../common/schema/id.schema";
import { NoContentSchema } from "../../common/schema/envelope.schema";

export const InvitationPostRequestSchema = z.object({
  inviteeId: MemberIdSchema,
  message: z.string().min(1).max(500),
});

export const InvitationListItemResponseSchema = z.object({
  invitationId: InvitationIdSchema,
  inviterName: z.string(),
  inviterProfileImageUrl: z.string().url().nullable().optional(),
});

export const SendInvitationResponseSchema = z.object({
  invitationId: InvitationIdSchema,
});

export const AcceptInvitationResponseSchema = z.object({
  invitationId: InvitationIdSchema,
  room: z.object({
    type: z.literal("invitation"),
    roomId: RoomIdSchema,
  }),
});

export const RejectInvitationResponseSchema = NoContentSchema;
