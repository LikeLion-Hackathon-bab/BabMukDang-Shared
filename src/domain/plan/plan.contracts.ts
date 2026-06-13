import { z } from "zod";
import {
  PlanListQuerySchema,
  PlanResponseSchema,
  PlanStatusSchema,
  PlanTypeSchema,
} from "./plan.schema";

export type PlanStatus = z.infer<typeof PlanStatusSchema>;
export type PlanType = z.infer<typeof PlanTypeSchema>;
export type PlanResponse = z.infer<typeof PlanResponseSchema>;
export type PlanListQuery = z.infer<typeof PlanListQuerySchema>;
