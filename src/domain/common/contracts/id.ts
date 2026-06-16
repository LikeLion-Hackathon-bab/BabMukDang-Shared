import { z } from "zod";
import {
  ArticleIdSchema,
  CommentIdSchema,
  CouponIdSchema,
  FoodCodeSchema,
  FoodLabelSchema,
  FoodSchema,
  FriendRequestIdSchema,
  MealGroupIdSchema,
  MealPlanChatMessageIdSchema,
  MealPlanChatRoomIdSchema,
  MealPlanIdSchema,
  MealPlanInviteIdSchema,
  MealPlanJoinRequestIdSchema,
  MealPlanChangeRequestIdSchema,
  MealPlanShareLinkIdSchema,
  MealPlanShareLinkTokenSchema,
  MemberIdSchema,
  ReferralCodeSchema,
  RestaurantIdSchema,
  SubscriptionIdSchema,
  UserIdSchema,
} from "../schema/id.schema";

export type Brand<T, TBrand extends string> = T & { readonly __brand: TBrand };

export type MemberId = z.infer<typeof MemberIdSchema>;
export type ArticleId = z.infer<typeof ArticleIdSchema>;
export type CommentId = z.infer<typeof CommentIdSchema>;
export type MealPlanId = z.infer<typeof MealPlanIdSchema>;
export type MealPlanInviteId = z.infer<typeof MealPlanInviteIdSchema>;
export type MealPlanJoinRequestId = z.infer<typeof MealPlanJoinRequestIdSchema>;
export type MealPlanChangeRequestId = z.infer<typeof MealPlanChangeRequestIdSchema>;
export type MealPlanShareLinkId = z.infer<typeof MealPlanShareLinkIdSchema>;
export type MealPlanShareLinkToken = z.infer<typeof MealPlanShareLinkTokenSchema>;
export type MealPlanChatRoomId = z.infer<typeof MealPlanChatRoomIdSchema>;
export type MealPlanChatMessageId = z.infer<typeof MealPlanChatMessageIdSchema>;
export type MealGroupId = z.infer<typeof MealGroupIdSchema>;
export type RestaurantId = z.infer<typeof RestaurantIdSchema>;
export type CouponId = z.infer<typeof CouponIdSchema>;
export type SubscriptionId = z.infer<typeof SubscriptionIdSchema>;
export type FriendRequestId = z.infer<typeof FriendRequestIdSchema>;
export type ReferralCode = z.infer<typeof ReferralCodeSchema>;

export type FoodCode = z.infer<typeof FoodCodeSchema>;
export type FoodLabel = z.infer<typeof FoodLabelSchema>;
export type Food = z.infer<typeof FoodSchema>;

export const toMemberId = (value: number): MemberId => MemberIdSchema.parse(value);
export const toArticleId = (value: number): ArticleId => ArticleIdSchema.parse(value);
export const toMealPlanId = (value: string): MealPlanId => MealPlanIdSchema.parse(value);
export const toMealPlanInviteId = (value: string): MealPlanInviteId => MealPlanInviteIdSchema.parse(value);
export const toMealPlanJoinRequestId = (value: string): MealPlanJoinRequestId => MealPlanJoinRequestIdSchema.parse(value);
export const toMealPlanChangeRequestId = (value: string): MealPlanChangeRequestId => MealPlanChangeRequestIdSchema.parse(value);
export const toMealPlanShareLinkId = (value: string): MealPlanShareLinkId => MealPlanShareLinkIdSchema.parse(value);
export const toMealPlanShareLinkToken = (value: string): MealPlanShareLinkToken => MealPlanShareLinkTokenSchema.parse(value);
export const toMealPlanChatRoomId = (value: string): MealPlanChatRoomId => MealPlanChatRoomIdSchema.parse(value);
export const toMealPlanChatMessageId = (value: string): MealPlanChatMessageId => MealPlanChatMessageIdSchema.parse(value);
export const toMealGroupId = (value: string): MealGroupId => MealGroupIdSchema.parse(value);
export const toRestaurantId = (value: string): RestaurantId => RestaurantIdSchema.parse(value);
export const toCommentId = (value: number): CommentId => CommentIdSchema.parse(value);
export const toCouponId = (value: number): CouponId => CouponIdSchema.parse(value);
export const toSubscriptionId = (value: number): SubscriptionId =>
  SubscriptionIdSchema.parse(value);
export const toFriendRequestId = (value: number): FriendRequestId =>
  FriendRequestIdSchema.parse(value);
export const toReferralCode = (value: string): ReferralCode => ReferralCodeSchema.parse(value);
