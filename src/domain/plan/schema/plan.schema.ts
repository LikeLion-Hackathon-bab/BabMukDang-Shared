import { z } from "zod";
import { ISODateStringSchema, ISODateTimeStringSchema, TimeHHmmStringSchema } from "../../common/schema/date.schema";
import { PlanIdSchema } from "../../common/schema/id.schema";
import { MemberResponseSchema } from "../../member/schema/member.schema";
import { RestaurantSchema } from "../../restaurant/schema/restaurant.schema";
import { LocationCandidateSchema } from "../../room/schema/room.schema";

export const PlanStatusSchema = z.enum(["PLANNING", "COMPLETED"]);
export const PlanTypeSchema = z.enum(["RECRUIT", "INVITATION"]);

export const CreatePlanRequestSchema = z.object({
  meetingDate: ISODateStringSchema,
  meetingTime: TimeHHmmStringSchema,
});

export const PlanResponseSchema = z.object({
  planId: PlanIdSchema,
  meetingAt: ISODateTimeStringSchema,
  location: LocationCandidateSchema.nullable(),
  restaurant: RestaurantSchema.nullable(),
  author: MemberResponseSchema.nullable(),
  participants: z.array(MemberResponseSchema),
  status: PlanStatusSchema,
  type: PlanTypeSchema,
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
});
