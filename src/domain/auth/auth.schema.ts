import { z } from "zod";
import { MemberCoreSchema } from "../member/schema/member.schema";

export const TokenResponseSchema = z.object({
  accessToken: z.string().min(1),
  accessTokenMaxAge: z.number().int().positive(),
});

export const LoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const SignupRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string().min(1).max(50),
  profileImageUrl: z.string().url().nullable().optional(),
});

export const SignupResponseSchema = z.object({
  member: MemberCoreSchema,
});
