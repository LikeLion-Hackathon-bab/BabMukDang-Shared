import { z } from "zod";
import {
  ReferralCreateResponseSchema,
  ReferralItemResponseSchema,
  RedeemReferralRequestSchema,
} from "./referral.schema";

export type RedeemReferralRequest = z.infer<typeof RedeemReferralRequestSchema>;

export type ReferralCreateResponse = z.infer<typeof ReferralCreateResponseSchema>;
export type ReferralItemResponse = z.infer<typeof ReferralItemResponseSchema>;
