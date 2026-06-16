import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { MealPlanIdSchema, MealPlanInviteIdSchema, MemberIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";

export const MealPlanInviteStatusSchema = z.enum([
  "PENDING",
  "ACCEPTED",
  "DECLINED",
  "CANCELLED",
  "EXPIRED",
]);

export const CreateMealPlanInviteRequestSchema = z.object({
  inviteeId: MemberIdSchema,
  message: z.string().max(500).default(""),
});

export const MealPlanInviteSummarySchema = z.object({
  inviteId: MealPlanInviteIdSchema,
  mealPlanId: MealPlanIdSchema,
  inviter: MemberCoreSchema,
  invitee: MemberCoreSchema,
  status: MealPlanInviteStatusSchema,
  message: z.string().max(500),
  createdAt: ISODateTimeStringSchema,
  respondedAt: ISODateTimeStringSchema.nullable(),
});

export const MealPlanInviteListResponseSchema = z.array(MealPlanInviteSummarySchema);

export const SendMealPlanInviteResponseSchema = z.object({
  inviteId: MealPlanInviteIdSchema,
});
