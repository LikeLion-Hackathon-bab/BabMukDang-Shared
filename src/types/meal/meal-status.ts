import type { ISODateTimeString } from "../common";

export type MealStatus = "FED" | "FASTING";

export type MealStatusAction = "ATE_NOW" | "SET_OFF";

export interface UpdateMealStatusRequest {
  action: MealStatusAction;
}

export interface MealStatusResponse {
  status: MealStatus;
  lastMealAt: ISODateTimeString | null;
  fastingMinutes: number;
  fastingHours: number;
  secondsToAutoOff: number;
}
