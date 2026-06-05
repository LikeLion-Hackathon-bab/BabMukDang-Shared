import { ISODateString } from "../common";

export type CouponType = "DISCOUNT" | "SERVICE";

export type CouponStatus = "UNUSED" | "USED";

export interface CouponResponse {
  couponId: number;
  title: string;
  shopName: string;
  type: CouponType;
  condition: string;
  expiresAt: ISODateString;
  used: boolean;
  thumbnailUrl: string;
}
