import { z } from "zod";
import { InvitationPostRequestSchema } from "../schema/invitation.schema";

export type InvitationPostRequest = z.infer<typeof InvitationPostRequestSchema>;
