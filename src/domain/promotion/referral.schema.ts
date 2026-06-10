import { z } from "zod";
import { ISODateTimeStringSchema } from "../common/schema/date.schema";
import { MemberIdSchema, ReferralCodeSchema } from "../common/schema/id.schema";

export const ReferralCreateResponseSchema = z.object({
  code: ReferralCodeSchema,
  link: z.string().url(),
  expiresAt: ISODateTimeStringSchema,
});
export const ReferralItemResponseSchema = z.object({
  code: ReferralCodeSchema,
  createdAt: ISODateTimeStringSchema,
  expiresAt: ISODateTimeStringSchema,
  used: z.boolean(),
  usedByMemberId: MemberIdSchema.nullable(),
  usedByUsername: z.string().nullable(),
});
export const RedeemReferralRequestSchema = z.object({
  code: ReferralCodeSchema,
});
