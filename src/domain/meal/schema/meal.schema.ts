import { z } from "zod";
import { ISODateTimeStringSchema } from "../../common/schema/date.schema";

export const MealStatusSchema = z.enum(["FED", "FASTING"]);
export const MealStatusActionSchema = z.enum(["ATE_NOW", "SET_OFF"]);
export const UpdateMealStatusRequestSchema = z.object({
  action: MealStatusActionSchema,
});
export const MealStatusResponseSchema = z.object({
  status: MealStatusSchema,
  lastMealAt: ISODateTimeStringSchema.nullable(),
  fastingMinutes: z.number().int().min(0),
  fastingHours: z.number().min(0),
  secondsToAutoOff: z.number().int().min(0),
});
