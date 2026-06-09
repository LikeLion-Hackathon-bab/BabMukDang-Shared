import { z } from "zod";
import { ISODateTimeStringSchema } from "../../common/schema/date.schema";
import { RecruitIdSchema } from "../../common/schema/id.schema";
import { MemberResponseSchema } from "../../member/schema/member.schema";

export const RecruitStatusSchema = z.enum(["OPEN", "CLOSED", "EXPIRED"]);

export const RecruitRequestSchema = z.object({
  targetCount: z.number().int().min(2),
  meetingAt: ISODateTimeStringSchema,
  location: z.string().min(1),
  message: z.string().max(500),
});

export const RecruitParticipantSchema = MemberResponseSchema.extend({});

export const RecruitResponseSchema = RecruitRequestSchema.extend({
  recruitId: RecruitIdSchema,
  status: RecruitStatusSchema,
  createdAt: ISODateTimeStringSchema,
  expiredAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
  author: MemberResponseSchema,
  participants: z.array(RecruitParticipantSchema),
});

export const CreateRecruitResponseSchema = z.object({
  recruitId: RecruitIdSchema,
});
