import { z } from "zod";
import { ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { RecruitIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";
import { PageQuerySchema, SortDirectionSchema } from "@/common";

export const RecruitStatusSchema = z.enum(["OPEN", "CLOSED", "EXPIRED"]);

const RecruitParticipantSchema = MemberCoreSchema.extend({});

export const RecruitSortBySchema = z.enum(["createdAt", "deadline", "participantCount"]);

export const RecruitListQuerySchema = PageQuerySchema.extend({
  sortBy: RecruitSortBySchema.default("createdAt"),
  direction: SortDirectionSchema.default("desc"),
});

const RecruitResponseSchema = z.object({
  targetCount: z.number().int().min(2),
  meetingAt: ISODateTimeStringSchema,
  location: z.string().min(1),
  message: z.string().max(500),
  recruitId: RecruitIdSchema,
  status: RecruitStatusSchema,
  createdAt: ISODateTimeStringSchema,
  expiredAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
  author: MemberCoreSchema,
  participants: z.array(RecruitParticipantSchema),
});

export const RecruitListResponseSchema = z.array(RecruitResponseSchema);

export const CreateRecruitRequestSchema = z.object({
  targetCount: z.number().int().min(2),
  meetingAt: ISODateTimeStringSchema,
  location: z.string().min(1),
  message: z.string().max(500),
});

export const CreateRecruitResponseSchema = z.object({
  recruitId: RecruitIdSchema,
});
