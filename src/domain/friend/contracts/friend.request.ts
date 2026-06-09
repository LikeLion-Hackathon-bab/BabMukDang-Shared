import { z } from "zod";
import { FriendActionRequestSchema } from "../schema/friend.schema";

export type FriendActionRequest = z.infer<typeof FriendActionRequestSchema>;
