import { z } from "zod";

const RewardTypeSchema = z.enum(["WEEK", "MONTH"]);
const WeekProgressSchema = z.object({
  days: z.array(z.boolean()),
  completed: z.number().int().min(0),
  goal: z.number().int().positive(),
});
const MonthProgressSchema = z.object({
  count: z.number().int().min(0),
  goal: z.number().int().positive(),
});
export const ChallengeStatusResponseSchema = z.object({
  count: z.number().int().min(0),
});
export const ClaimChallengeRewardRequestSchema = z.object({
  type: RewardTypeSchema,
});
export const ClaimChallengeRewardResponseSchema = z.object({
  rewardType: RewardTypeSchema,
  claimed: z.boolean(),
});
