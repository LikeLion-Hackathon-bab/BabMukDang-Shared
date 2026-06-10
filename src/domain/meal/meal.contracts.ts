import { z } from "zod";
import {
  FriendMealItemResponseSchema,
  FriendMealQuerySchema,
  MealStatusActionSchema,
  MealStatusResponseSchema,
  MealStatusSchema,
} from "./meal.schema";

import { UpdateMealStatusRequestSchema } from "./meal.schema";

export type UpdateMealStatusRequest = z.infer<typeof UpdateMealStatusRequestSchema>;

export type MealStatus = z.infer<typeof MealStatusSchema>;
export type MealStatusAction = z.infer<typeof MealStatusActionSchema>;
export type MealStatusResponse = z.infer<typeof MealStatusResponseSchema>;

export type FriendMealQuery = z.infer<typeof FriendMealQuerySchema>;
export type FriendMealItemResponse = z.infer<typeof FriendMealItemResponseSchema>;
