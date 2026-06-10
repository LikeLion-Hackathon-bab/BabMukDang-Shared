import { z } from "zod";
import { FoodPreferenceResponseSchema, FoodPreferenceTypeSchema } from "./preference.schema";

export type FoodPreferenceType = z.infer<typeof FoodPreferenceTypeSchema>;
export type FoodPreferenceResponse = z.infer<typeof FoodPreferenceResponseSchema>;
