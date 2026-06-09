import { z } from "zod";
import { RedeemReferralRequestSchema } from "../schema/referral.schema";

export type RedeemReferralRequest = z.infer<typeof RedeemReferralRequestSchema>;
