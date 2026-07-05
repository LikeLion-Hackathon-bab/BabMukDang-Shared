import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { MealPlanChatMessageIdSchema, MealPlanChatRoomIdSchema, MealPlanIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";

export const MealPlanChatMessageKindSchema = z.enum([
  "USER",
  "SYSTEM",
]);

export const MealPlanSystemMessageKindSchema = z.enum([
  "PARTICIPANT_JOINED",
  "PARTICIPANT_READY",
  "PARTICIPANT_REMOVED",
  "STATUS_CHANGED",
  "DECISION_UPDATED",
  "CONFIRMED",
  "RECORD_NEEDED",
]);

export const MealPlanChatSystemPayloadSchema = z.object({
  kind: MealPlanSystemMessageKindSchema,
}).catchall(z.unknown());

export const MealPlanChatMessageListResponseSchema = z.array(
  z.lazy(() => MealPlanChatMessageResponseSchema),
);

export const MealPlanChatRoomSummarySchema = z.object({
  chatRoomId: MealPlanChatRoomIdSchema,
  mealPlanId: MealPlanIdSchema,
  messageCount: z.number().int().min(0),
  lastMessageAt: ISODateTimeStringSchema.nullable(),
  createdAt: ISODateTimeStringSchema,
});

export const SendMealPlanChatMessageRequestSchema = z.object({
  message: z.string().min(1).max(500),
});

export const MealPlanChatMessageResponseSchema = z.object({
  messageId: MealPlanChatMessageIdSchema,
  chatRoomId: MealPlanChatRoomIdSchema,
  sender: MemberCoreSchema.nullable(),
  guestId: z.string().min(1).nullable(),
  guestNickname: z.string().min(1).nullable(),
  kind: MealPlanChatMessageKindSchema,
  message: z.string().min(1).max(1000),
  systemPayload: MealPlanChatSystemPayloadSchema.nullable(),
  createdAt: ISODateTimeStringSchema,
});

export const MealPlanSystemMessageSchema = z.object({
  kind: MealPlanSystemMessageKindSchema,
  message: z.string().min(1),
  createdAt: ISODateTimeStringSchema,
});
