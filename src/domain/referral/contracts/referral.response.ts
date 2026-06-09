import { z } from "zod";
import {
  ReferralCreateResponseSchema,
  ReferralItemResponseSchema,
} from "../schema/referral.schema";

export type ReferralCreateResponse = z.infer<typeof ReferralCreateResponseSchema>;
export type ReferralItemResponse = z.infer<typeof ReferralItemResponseSchema>;
