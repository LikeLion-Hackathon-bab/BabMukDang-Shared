import { z } from "zod";
import {
  EndMealPlanLiveActivitySessionRequestSchema,
  MealPlanLiveActivityPlatformSchema,
  MealPlanLiveActivitySessionListResponseSchema,
  MealPlanLiveActivitySessionResponseSchema,
  MealPlanLiveActivitySessionStatusSchema,
  MealPlanLiveActivityStateSchema,
  MealPlanLiveActivityUpdateStatusSchema,
  RegisterMealPlanLiveActivitySessionRequestSchema,
} from "./live-activity.schema";

export type MealPlanLiveActivityPlatform = z.infer<typeof MealPlanLiveActivityPlatformSchema>;
export type MealPlanLiveActivitySessionStatus = z.infer<typeof MealPlanLiveActivitySessionStatusSchema>;
export type MealPlanLiveActivityUpdateStatus = z.infer<typeof MealPlanLiveActivityUpdateStatusSchema>;
export type RegisterMealPlanLiveActivitySessionRequest = z.infer<typeof RegisterMealPlanLiveActivitySessionRequestSchema>;
export type EndMealPlanLiveActivitySessionRequest = z.infer<typeof EndMealPlanLiveActivitySessionRequestSchema>;
export type MealPlanLiveActivityState = z.infer<typeof MealPlanLiveActivityStateSchema>;
export type MealPlanLiveActivitySessionResponse = z.infer<typeof MealPlanLiveActivitySessionResponseSchema>;
export type MealPlanLiveActivitySessionListResponse = z.infer<typeof MealPlanLiveActivitySessionListResponseSchema>;
