import { z } from "zod";
import { ISODateStringSchema } from "../../common/schema/date.schema";
import { CouponIdSchema } from "../../common/schema/id.schema";

export const CouponTypeSchema = z.enum(["DISCOUNT", "SERVICE"]);
export const CouponStatusSchema = z.enum(["UNUSED", "USED"]);
export const CouponResponseSchema = z.object({
  couponId: CouponIdSchema,
  title: z.string(),
  shopName: z.string(),
  type: CouponTypeSchema,
  condition: z.string(),
  expiresAt: ISODateStringSchema,
  used: z.boolean(),
  thumbnailUrl: z.string().url(),
});
