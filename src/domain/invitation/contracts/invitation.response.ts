import { z } from "zod";
import {
  AcceptInvitationResponseSchema,
  InvitationListItemResponseSchema,
  RejectInvitationResponseSchema,
  SendInvitationResponseSchema,
} from "../schema/invitation.schema";

export type InvitationResponse = z.infer<typeof InvitationListItemResponseSchema>;
export type SendInvitationResponse = z.infer<typeof SendInvitationResponseSchema>;
export type AcceptInvitationResponse = z.infer<typeof AcceptInvitationResponseSchema>;
export type RejectInvitationResponse = z.infer<typeof RejectInvitationResponseSchema>;
