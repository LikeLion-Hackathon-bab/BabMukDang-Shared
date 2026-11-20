import { z } from "zod";
import { MemberCoreSchema } from "@/member/member.schema";

export const TokenResponseSchema = z.object({
  accessToken: z.string().min(1),
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

// 웹은 refresh token을 httpOnly 쿠키로, 네이티브 앱은 body로 주고받는다. (ADR 0007)
export const RefreshRequestSchema = z
  .object({
    refreshToken: z.string().min(1).optional(),
  })
  .optional();

export const RefreshResponseSchema = TokenResponseSchema.extend({
  // 네이티브 세션에만 포함된다. 웹은 Set-Cookie로 받는다.
  refreshToken: z.string().min(1).optional(),
});

export const LogoutRequestSchema = z
  .object({
    refreshToken: z.string().min(1).optional(),
  })
  .optional();

// 카카오 웹 로그인 콜백 실패 시 프론트 `/login?error=<code>`로 전달되는 코드. (ADR 0008)
export const KakaoLoginErrorCodeSchema = z.enum(["kakao_denied", "invalid_state", "kakao_failed"]);

// 카카오 네이티브 SDK 로그인 결과의 OIDC id_token. (ADR 0008)
export const KakaoNativeLoginRequestSchema = z.object({
  idToken: z.string().min(1),
});

export const NativeTokenResponseSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1),
  signupRequired: z.boolean(),
});
