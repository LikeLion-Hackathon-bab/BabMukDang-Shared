import { z } from "zod";

export const PositiveIntIdSchema = z.number().int().positive();
export const NonEmptyStringIdSchema = z.string().min(1);

export const MemberIdSchema = PositiveIntIdSchema.brand<"MemberId">();
export const UserIdSchema = MemberIdSchema;
export const ArticleIdSchema = PositiveIntIdSchema.brand<"ArticleId">();
export const CommentIdSchema = PositiveIntIdSchema.brand<"CommentId">();
export const MealPlanIdSchema = z.string().uuid().brand<"MealPlanId">();
export const MealPlanInviteIdSchema = z.string().uuid().brand<"MealPlanInviteId">();
export const MealPlanJoinRequestIdSchema = z.string().uuid().brand<"MealPlanJoinRequestId">();
export const MealPlanNearbyFriendExposureBatchIdSchema = z.string().uuid().brand<"MealPlanNearbyFriendExposureBatchId">();
export const MealPlanChangeRequestIdSchema = z.string().uuid().brand<"MealPlanChangeRequestId">();
export const MealPlanShareLinkIdSchema = z.string().uuid().brand<"MealPlanShareLinkId">();
export const MealPlanShareLinkTokenSchema = z.string().min(8).max(128).brand<"MealPlanShareLinkToken">();
export const MealPlanChatRoomIdSchema = z.string().uuid().brand<"MealPlanChatRoomId">();
export const MealPlanChatMessageIdSchema = z.string().uuid().brand<"MealPlanChatMessageId">();
export const MealGroupIdSchema = z.string().uuid().brand<"MealGroupId">();
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
