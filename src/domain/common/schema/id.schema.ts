import { z } from "zod";

export const PositiveIntIdSchema = z.number().int().positive();
export const NonEmptyStringIdSchema = z.string().min(1);

export const MemberIdSchema = PositiveIntIdSchema.brand<"MemberId">();
export const UserIdSchema = MemberIdSchema;
export const ArticleIdSchema = PositiveIntIdSchema.brand<"ArticleId">();
export const CommentIdSchema = PositiveIntIdSchema.brand<"CommentId">();
export const RecruitIdSchema = PositiveIntIdSchema.brand<"RecruitId">();
export const PlanIdSchema = PositiveIntIdSchema.brand<"PlanId">();
export const InvitationIdSchema = PositiveIntIdSchema.brand<"InvitationId">();
export const RoomIdSchema = NonEmptyStringIdSchema.brand<"RoomId">();
export const RestaurantIdSchema = NonEmptyStringIdSchema.brand<"RestaurantId">();
export const CouponIdSchema = PositiveIntIdSchema.brand<"CouponId">();
export const SubscriptionIdSchema = PositiveIntIdSchema.brand<"SubscriptionId">();
export const FriendRequestIdSchema = PositiveIntIdSchema.brand<"FriendRequestId">();
export const ReferralCodeSchema = z.string().min(4).max(64).brand<"ReferralCode">();

export const FoodCodeSchema = NonEmptyStringIdSchema.brand<"FoodCode">();
export const FoodLabelSchema = NonEmptyStringIdSchema.brand<"FoodLabel">();

export const FoodSchema = z.object({
  code: FoodCodeSchema,
  label: FoodLabelSchema,
});
