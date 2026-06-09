import { z } from "zod";
import { ClaimChallengeRewardRequestSchema } from "../schema/challenge.schema";

export type ClaimChallengeRewardRequest = z.infer<typeof ClaimChallengeRewardRequestSchema>;
