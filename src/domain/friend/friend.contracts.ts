import { z } from "zod";
import {
  FriendBlockItemResponseSchema,
  FriendListItemResponseSchema,
  FriendMealFilterSchema,
  FriendMealItemResponseSchema,
  FriendMealQuerySchema,
  FriendRequestItemResponseSchema,
  FriendRequestMemberSchema,
  FriendRequestStatusSchema,
  FriendSearchQuerySchema,
  FriendSerachResponseSchema,
} from "./friend.schema";

export type FriendSearchQuery = z.infer<typeof FriendSearchQuerySchema>;
export type FriendMealQuery = z.infer<typeof FriendMealQuerySchema>;

export type FriendMealItemResponse = z.infer<typeof FriendMealItemResponseSchema>;
export type FriendListItemResponse = z.infer<typeof FriendListItemResponseSchema>;
export type FriendBlockItemResponse = z.infer<typeof FriendBlockItemResponseSchema>;
export type FriendRequestItemResponse = z.infer<typeof FriendRequestItemResponseSchema>;
export type FriendSerachResponse = z.infer<typeof FriendSerachResponseSchema>;

export type FriendRequestMember = z.infer<typeof FriendRequestMemberSchema>;
export type FriendMealFilter = z.infer<typeof FriendMealFilterSchema>;
export type FriendRequestStatus = z.infer<typeof FriendRequestStatusSchema>;
