import { z } from "zod";
import { CreatePlanRequestSchema } from "../schema/plan.schema";

export type CreatePlanRequest = z.infer<typeof CreatePlanRequestSchema>;
