import { z } from "zod";
import { SignupResponseSchema, TokenResponseSchema } from "../schema/auth.schema";

export type TokenResponse = z.infer<typeof TokenResponseSchema>;
export type SignupResponse = z.infer<typeof SignupResponseSchema>;
