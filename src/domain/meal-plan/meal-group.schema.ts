import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { MealGroupIdSchema, MealPlanIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";

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
});

export const StartMealPlanFromGroupRequestSchema = z.object({
  title: z.string().min(1).max(100).optional(),
});
