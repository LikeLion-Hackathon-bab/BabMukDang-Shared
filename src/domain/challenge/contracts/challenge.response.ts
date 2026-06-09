import { z } from "zod";
import {
  ChallengeStatusResponseSchema,
  ClaimChallengeRewardResponseSchema,
  MonthProgressSchema,
  RewardTypeSchema,
  WeekProgressSchema,
} from "../schema/challenge.schema";

export type RewardType = z.infer<typeof RewardTypeSchema>;
export type WeekProgress = z.infer<typeof WeekProgressSchema>;
export type MonthProgress = z.infer<typeof MonthProgressSchema>;
export type ChallengeStatusResponse = z.infer<typeof ChallengeStatusResponseSchema>;
export type ClaimChallengeRewardResponse = z.infer<typeof ClaimChallengeRewardResponseSchema>;
