import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { MealPlanIdSchema, MemberIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";

export const MealPlanParticipantIdSchema = z.string().uuid().brand<"MealPlanParticipantId">();

export const MealPlanParticipantRoleSchema = z.enum([
  "OWNER",
  "FRIEND",
  "GUEST",
]);

export const MealPlanParticipantStatusSchema = z.enum([
  "INVITED",
  "REQUESTED",
  "JOINED",
  "READY",
  "DECLINED",
  "LEFT",
  "REMOVED",
]);

export const MealPlanJoinSourceSchema = z.enum([
  "OWNER",
  "FRIEND_INVITE",
  "LINK_GUEST",
  "NEARBY_FRIENDS",
]);

export const MealPlanGuestParticipantSchema = z.object({
  guestId: z.string().min(1),
  nickname: z.string().min(1).max(50),
});

export const MealPlanParticipantResponseSchema = z.object({
  participantId: MealPlanParticipantIdSchema,
  mealPlanId: MealPlanIdSchema,
  member: MemberCoreSchema.nullable(),
  guest: MealPlanGuestParticipantSchema.nullable(),
  role: MealPlanParticipantRoleSchema,
  status: MealPlanParticipantStatusSchema,
  source: MealPlanJoinSourceSchema,
  joinedAt: ISODateTimeStringSchema.nullable(),
  readyAt: ISODateTimeStringSchema.nullable(),
});

export const CreateMealPlanParticipantRequestSchema = z.object({
  memberId: MemberIdSchema.optional(),
  guestNickname: z.string().min(1).max(50).optional(),
  source: MealPlanJoinSourceSchema,
});
