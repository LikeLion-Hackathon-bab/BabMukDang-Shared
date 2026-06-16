import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { MealGroupIdSchema, MealPlanIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";
import { MyMealPlanListItemSchema } from "./meal-plan.schema";

export const MealGroupMemberRoleSchema = z.enum([
  "OWNER",
  "MEMBER",
]);

export const MealGroupMemberSchema = z.object({
  member: MemberCoreSchema,
  role: MealGroupMemberRoleSchema,
  joinedAt: ISODateTimeStringSchema,
});

export const MealGroupResponseSchema = z.object({
  mealGroupId: MealGroupIdSchema,
  name: z.string().min(1).max(50),
  owner: MemberCoreSchema,
  profileImageUrl: z.string().url().nullable(),
  members: z.array(MealGroupMemberSchema),
  recentMealPlanIds: z.array(MealPlanIdSchema),
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
});

export const CreateMealGroupRequestSchema = z.object({
  name: z.string().min(1).max(50),
  memberIds: z.array(z.number().int().positive()).min(1),
  profileImageUrl: z.string().url().nullable().optional(),
  sourceMealPlanId: MealPlanIdSchema.optional(),
});

export const StartMealPlanFromGroupRequestSchema = z.object({
  title: z.string().min(1).max(100).optional(),
});

export const AddMealGroupMemberRequestSchema = z.object({
  memberId: z.number().int().positive(),
  role: MealGroupMemberRoleSchema.default("MEMBER"),
});

export const UpdateMealGroupMemberRoleRequestSchema = z.object({
  role: MealGroupMemberRoleSchema,
});


export const MealGroupHistoryItemSchema = MyMealPlanListItemSchema.extend({});

export const MealGroupPreferenceSummarySchema = z.object({
  mealGroupId: MealGroupIdSchema,
  frequentMenuCategories: z.array(z.object({ label: z.string(), count: z.number().int().min(0) })),
  frequentRestaurants: z.array(z.object({ restaurantName: z.string(), count: z.number().int().min(0) })),
  recentMenuCategories: z.array(z.string()),
  recommendationContext: z.object({
    preferredMenuCategories: z.array(z.string()),
    excludedMenuCategories: z.array(z.string()),
    candidateMenuCategories: z.array(z.string()),
  }),
});

export const MealGroupHistoryResponseSchema = z.array(MealGroupHistoryItemSchema);
