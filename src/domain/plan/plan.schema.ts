import { z } from "zod";
import {
  ISODateStringSchema,
  ISODateTimeStringSchema,
  TimeHHmmStringSchema,
} from "@/common/schema/date.schema";
import { PlanIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member/member.schema";
import { RestaurantSchema } from "@/restaurant/restaurant.schema";
import { LocationCandidateSchema } from "@/room/schema/room.schema";

export const PlanStatusSchema = z.enum(["PLANNING", "COMPLETED"]);
export const PlanTypeSchema = z.enum(["RECRUIT", "INVITATION"]);

export const PlanResponseSchema = z.object({
  planId: PlanIdSchema,
  meetingAt: ISODateTimeStringSchema,
  location: LocationCandidateSchema.nullable(),
  restaurant: RestaurantSchema.nullable(),
  author: MemberCoreSchema,
  participants: z.array(MemberCoreSchema),
  status: PlanStatusSchema,
  type: PlanTypeSchema,
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
});

export const PlanListQuerySchema = z.object({});
// TODO: List 쿼리 옵션 정하기
