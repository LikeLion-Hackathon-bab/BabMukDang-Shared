import { z } from "zod";
import {
  OnboardingPreferenceRequestSchema,
  OnboardingRequestSchema,
  PresignProfileResponseSchema,
  UpdateProfileRequestSchema,
} from "../schema/member.schema";

export type UpdateProfileRequest = z.infer<typeof UpdateProfileRequestSchema>;
export type OnboardingPreferenceRequest = z.infer<typeof OnboardingPreferenceRequestSchema>;
export type OnboardingRequest = z.infer<typeof OnboardingRequestSchema>;
export type PresignProfileResponse = z.infer<typeof PresignProfileResponseSchema>;