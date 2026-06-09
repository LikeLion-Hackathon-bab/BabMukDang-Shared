import { z } from "zod";
import {
  AuthPrincipalSchema,
  MemberResponseSchema,
  MemberRoleSchema,
  MemberSummaryResponseSchema,
  PreferenceMetaResponseSchema,
  ProfileDetailResponseSchema,
  ProfilePreferenceItemSchema,
} from "../schema/member.schema";

export type MemberRole = z.infer<typeof MemberRoleSchema>;
export type MemberResponse = z.infer<typeof MemberResponseSchema>;
export type MemberSummaryResponse = z.infer<typeof MemberSummaryResponseSchema>;
export type AuthPrincipal = z.infer<typeof AuthPrincipalSchema>;
export type ProfilePreferenceItem = z.infer<typeof ProfilePreferenceItemSchema>;
export type ProfileDetailResponse = z.infer<typeof ProfileDetailResponseSchema>;
export type PreferenceMetaResponse = z.infer<typeof PreferenceMetaResponseSchema>;

/** @deprecated Use MemberResponse. */
export type User = MemberResponse;
