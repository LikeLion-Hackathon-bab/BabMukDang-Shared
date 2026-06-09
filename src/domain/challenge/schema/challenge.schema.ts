import { z } from "zod";

export const RewardTypeSchema = z.enum(["WEEK", "MONTH"]);
export const WeekProgressSchema = z.object({
  days: z.array(z.boolean()),
  completed: z.number().int().min(0),
  goal: z.number().int().positive(),
});
export const MonthProgressSchema = z.object({
  count: z.number().int().min(0),
  goal: z.number().int().positive(),
});
export const ChallengeStatusResponseSchema = z.object({
  week: WeekProgressSchema,
  month: MonthProgressSchema,
  weekRewardAvailable: z.boolean(),
  monthRewardAvailable: z.boolean(),
});
export const ClaimChallengeRewardRequestSchema = z.object({
  type: RewardTypeSchema,
});
export const ClaimChallengeRewardResponseSchema = z.object({
  rewardType: RewardTypeSchema,
  claimed: z.boolean(),
});
