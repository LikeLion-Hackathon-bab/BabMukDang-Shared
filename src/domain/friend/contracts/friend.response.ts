import { z } from "zod";
import {
  FriendBlockItemResponseSchema,
  FriendListItemResponseSchema,
  FriendMealFilterSchema,
  FriendMealItemResponseSchema,
  FriendRequestItemResponseSchema,
  FriendRequestStatusSchema,
} from "../schema/friend.schema";

export type FriendMealFilter = z.infer<typeof FriendMealFilterSchema>;
export type FriendRequestStatus = z.infer<typeof FriendRequestStatusSchema>;
export type FriendMealItemResponse = z.infer<typeof FriendMealItemResponseSchema>;
export type FriendListItemResponse = z.infer<typeof FriendListItemResponseSchema>;
export type FriendBlockItemResponse = z.infer<typeof FriendBlockItemResponseSchema>;
export type FriendRequestItemResponse = z.infer<typeof FriendRequestItemResponseSchema>;
