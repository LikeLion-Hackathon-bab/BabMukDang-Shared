import { z } from "zod";
import { MealPlanIdSchema } from "@/common/schema";
import {
  CreateMealPlanVoteRequestSchema,
  MealPlanDecisionStageIdSchema,
} from "./meal-plan-decision.schema";
import { MealPlanResponseSchema } from "./meal-plan.schema";

/** Socket.IO command name for creating a decision vote and materializing its candidate. */
export const MealPlanDecisionVoteSocketEvent = "mealPlan:decision:vote" as const;

/**
 * Canonical real-time write payload for a decision vote.
 * Candidate materialization and vote handling are owned by the decision service.
 */
export const MealPlanDecisionVoteSocketPayloadSchema =
  CreateMealPlanVoteRequestSchema.extend({
    mealPlanId: MealPlanIdSchema,
    stageId: MealPlanDecisionStageIdSchema,
    guestSessionToken: z.string().min(1).optional(),
  });

export const MealPlanDecisionVoteSocketErrorSchema = z.object({
  code: z.string().min(1),
  message: z.string().min(1),
});

export const MealPlanDecisionVoteSocketSuccessAckSchema = z.object({
  ok: z.literal(true),
  mealPlan: MealPlanResponseSchema,
});

export const MealPlanDecisionVoteSocketFailureAckSchema = z.object({
  ok: z.literal(false),
  error: MealPlanDecisionVoteSocketErrorSchema,
});

/** Socket.IO acknowledgement returned to the command originator. */
export const MealPlanDecisionVoteSocketAckSchema = z.discriminatedUnion("ok", [
  MealPlanDecisionVoteSocketSuccessAckSchema,
  MealPlanDecisionVoteSocketFailureAckSchema,
]);
