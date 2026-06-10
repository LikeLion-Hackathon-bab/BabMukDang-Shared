import { z } from "zod";
import {
  ArticleIdSchema,
  CommentIdSchema,
  CouponIdSchema,
  FoodCodeSchema,
  FoodLabelSchema,
  FoodSchema,
  FriendRequestIdSchema,
  InvitationIdSchema,
  MemberIdSchema,
  PlanIdSchema,
  RecruitIdSchema,
  ReferralCodeSchema,
  RestaurantIdSchema,
  RoomIdSchema,
  SubscriptionIdSchema,
  UserIdSchema,
} from "../schema/id.schema";

export type Brand<T, TBrand extends string> = T & { readonly __brand: TBrand };

export type MemberId = z.infer<typeof MemberIdSchema>;
/** @deprecated Use MemberId. */
export type UserId = z.infer<typeof UserIdSchema>;
export type ArticleId = z.infer<typeof ArticleIdSchema>;
export type CommentId = z.infer<typeof CommentIdSchema>;
export type RecruitId = z.infer<typeof RecruitIdSchema>;
export type PlanId = z.infer<typeof PlanIdSchema>;
export type InvitationId = z.infer<typeof InvitationIdSchema>;
export type RoomId = z.infer<typeof RoomIdSchema>;
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
export const toRecruitId = (value: number): RecruitId => RecruitIdSchema.parse(value);
export const toInvitationId = (value: number): InvitationId => InvitationIdSchema.parse(value);
export const toRoomId = (value: string): RoomId => RoomIdSchema.parse(value);
export const toRestaurantId = (value: string): RestaurantId => RestaurantIdSchema.parse(value);
