import { z } from "zod";
import {
  AcceptInvitationResponseSchema,
  InvitationListItemResponseSchema,
  SendInvitationResponseSchema,
  InvitationPostRequestSchema,
} from "./invitation.schema";

export type InvitationPostRequest = z.infer<typeof InvitationPostRequestSchema>;

export type InvitationResponse = z.infer<typeof InvitationListItemResponseSchema>;
export type SendInvitationResponse = z.infer<typeof SendInvitationResponseSchema>;
export type AcceptInvitationResponse = z.infer<typeof AcceptInvitationResponseSchema>;
