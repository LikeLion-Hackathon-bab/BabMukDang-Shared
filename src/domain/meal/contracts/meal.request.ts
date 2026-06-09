import { z } from "zod";
import { UpdateMealStatusRequestSchema } from "../schema/meal.schema";

export type UpdateMealStatusRequest = z.infer<typeof UpdateMealStatusRequestSchema>;
