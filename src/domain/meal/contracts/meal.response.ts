import { z } from "zod";
import {
  MealStatusActionSchema,
  MealStatusResponseSchema,
  MealStatusSchema,
} from "../schema/meal.schema";

export type MealStatus = z.infer<typeof MealStatusSchema>;
export type MealStatusAction = z.infer<typeof MealStatusActionSchema>;
export type MealStatusResponse = z.infer<typeof MealStatusResponseSchema>;
