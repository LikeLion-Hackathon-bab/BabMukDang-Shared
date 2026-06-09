import { z } from "zod";
import { RecruitRequestSchema } from "../schema/recruit.schema";

export type RecruitRequest = z.infer<typeof RecruitRequestSchema>;
export type RecruitRequestDto = RecruitRequest;
