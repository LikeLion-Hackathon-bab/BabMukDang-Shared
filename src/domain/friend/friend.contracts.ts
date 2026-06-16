import { z } from "zod";
import {
  FriendBlockItemResponseSchema,
  FriendListItemResponseSchema,
  FriendMealAvailabilitySchema,
  FriendRequestItemResponseSchema,
  FriendRequestMemberSchema,
  FriendRequestStatusSchema,
} from "./friend.schema";

export type FriendMealAvailability = z.infer<typeof FriendMealAvailabilitySchema>;
export type FriendListItemResponse = z.infer<typeof FriendListItemResponseSchema>;

export type FriendBlockItemResponse = z.infer<typeof FriendBlockItemResponseSchema>;
export type FriendRequestItemResponse = z.infer<typeof FriendRequestItemResponseSchema>;

export type FriendRequestMember = z.infer<typeof FriendRequestMemberSchema>;
export type FriendRequestStatus = z.infer<typeof FriendRequestStatusSchema>;
