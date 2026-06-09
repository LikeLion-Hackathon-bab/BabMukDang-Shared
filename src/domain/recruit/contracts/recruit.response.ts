import { z } from "zod";
import {
  CreateRecruitResponseSchema,
  RecruitParticipantSchema,
  RecruitResponseSchema,
  RecruitStatusSchema,
} from "../schema/recruit.schema";

export type RecruitStatus = z.infer<typeof RecruitStatusSchema>;
export type RecruitParticipant = z.infer<typeof RecruitParticipantSchema>;
export type RecruitParticipantDto = RecruitParticipant;
export type RecruitResponse = z.infer<typeof RecruitResponseSchema>;
export type RecruitResponseDto = RecruitResponse;
export type CreateRecruitResponse = z.infer<typeof CreateRecruitResponseSchema>;
export type CreateRecruitResponseDto = CreateRecruitResponse;
