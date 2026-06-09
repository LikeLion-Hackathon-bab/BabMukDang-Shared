import { z } from "zod";
import { PlanResponseSchema, PlanStatusSchema, PlanTypeSchema } from "../schema/plan.schema";

export type PlanStatus = z.infer<typeof PlanStatusSchema>;
export type PlanType = z.infer<typeof PlanTypeSchema>;
export type PlanResponse = z.infer<typeof PlanResponseSchema>;
export type PlanResponseDto = PlanResponse;
/** @deprecated Use PlanResponse. */
export type MeetingResponse = PlanResponse;
