import { z } from "zod";
import {
  LoginRequestSchema,
  SignupRequestSchema,
  SignupResponseSchema,
  TokenResponseSchema,
} from "./auth.schema";

// request
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type SignupRequest = z.infer<typeof SignupRequestSchema>;

// response
export type TokenResponse = z.infer<typeof TokenResponseSchema>;
export type SignupResponse = z.infer<typeof SignupResponseSchema>;
