import { z } from "zod";
import { ISODateStringSchema, ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { MemberCoreSchema } from "@/member";

export const MealStatusResponseSchema = z.object({
  hungry: z.boolean(),
  label: z.string(),
  updatedAt: ISODateStringSchema,
  secondsToAutoOff: z.number().int().min(0),
});

export const MealStatusActionSchema = z.enum(["ARTICLE_UPLOAD", "SET_MANNUALY"]);
export const UpdateMealStatusRequestSchema = z.object({
  action: MealStatusActionSchema.optional().default("SET_MANNUALY"),
});

export const MealStatusSchema = z.enum(["ALL", "HUNGRY", "NOT_HUNGRY"]);
export const FriendMealQuerySchema = z.object({
  status: MealStatusSchema.optional().default("ALL"),
});
export const FriendMealItemResponseSchema = MemberCoreSchema.extend({
  hungry: z.boolean(),
  label: z.string(),
  updatedAt: ISODateStringSchema,
});
