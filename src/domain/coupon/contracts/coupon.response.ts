import { z } from "zod";
import {
  CouponResponseSchema,
  CouponStatusSchema,
  CouponTypeSchema,
} from "../schema/coupon.schema";

export type CouponType = z.infer<typeof CouponTypeSchema>;
export type CouponStatus = z.infer<typeof CouponStatusSchema>;
export type CouponResponse = z.infer<typeof CouponResponseSchema>;
