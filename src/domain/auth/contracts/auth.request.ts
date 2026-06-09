import { z } from "zod";
import { LoginRequestSchema, SignupRequestSchema } from "../schema/auth.schema";

export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type SignupRequest = z.infer<typeof SignupRequestSchema>;
