import { ISODateTimeString } from "../common";

export interface ReferralCreateResponse {
  code: string;
  link: string;
  expiresAt: ISODateTimeString;
}

export interface ReferralItemResponse {
  code: string;
  createdAt: ISODateTimeString;
  expiresAt: ISODateTimeString;
  used: boolean;
  usedByMemberId: number | null;
  usedByUserName: string | null;
}

export interface RedeemReferralRequest {
  code: string;
}
