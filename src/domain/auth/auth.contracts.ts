import { z } from "zod";
import {
  KakaoLoginErrorCodeSchema,
  KakaoNativeLoginRequestSchema,
  LoginRequestSchema,
  LogoutRequestSchema,
  NativeTokenResponseSchema,
  RefreshRequestSchema,
  RefreshResponseSchema,
  SignupRequestSchema,
  SignupResponseSchema,
  TokenResponseSchema,
} from "./auth.schema";

// request
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type SignupRequest = z.infer<typeof SignupRequestSchema>;
export type RefreshRequest = z.infer<typeof RefreshRequestSchema>;
export type LogoutRequest = z.infer<typeof LogoutRequestSchema>;
export type KakaoNativeLoginRequest = z.infer<typeof KakaoNativeLoginRequestSchema>;

// response
export type TokenResponse = z.infer<typeof TokenResponseSchema>;
export type SignupResponse = z.infer<typeof SignupResponseSchema>;
export type RefreshResponse = z.infer<typeof RefreshResponseSchema>;
export type NativeTokenResponse = z.infer<typeof NativeTokenResponseSchema>;
export type KakaoLoginErrorCode = z.infer<typeof KakaoLoginErrorCodeSchema>;
