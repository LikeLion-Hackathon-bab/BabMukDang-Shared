import { z } from "zod";
import {
  ChallengeStatusResponseSchema,
  ClaimChallengeRewardRequestSchema,
  ClaimChallengeRewardResponseSchema,
} from "./challenge.schema";

export type ClaimChallengeRewardRequest = z.infer<typeof ClaimChallengeRewardRequestSchema>;

export type ChallengeStatusResponse = z.infer<typeof ChallengeStatusResponseSchema>;
export type ClaimChallengeRewardResponse = z.infer<typeof ClaimChallengeRewardResponseSchema>;
