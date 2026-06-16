import { z } from "zod";
import { ISODateStringSchema, ISODateTimeStringSchema, TimeHHmmStringSchema } from "@/common/schema/date.schema";
import { FoodSchema, MealPlanChangeRequestIdSchema, MemberIdSchema, RestaurantIdSchema } from "@/common/schema/id.schema";
import { RestaurantSchema } from "@/restaurant/restaurant.schema";

export const MealPlanLatitudeSchema = z.number().brand<"MealPlanLatitude">();
export const MealPlanLongitudeSchema = z.number().brand<"MealPlanLongitude">();
export const MealPlanLocationCandidateIdSchema = z.string().min(1).brand<"MealPlanLocationCandidateId">();
export const MealPlanMenuCandidateIdSchema = z.string().min(1).brand<"MealPlanMenuCandidateId">();
export const MealPlanDecisionStageIdSchema = z.string().uuid().brand<"MealPlanDecisionStageId">();
export const MealPlanVoteIdSchema = z.string().uuid().brand<"MealPlanVoteId">();
export const MealPlanLocationCandidateSourceSchema = z.enum([
  "manual",
  "midpoint",
  "search",
  "recent-place",
  "fallback",
]);

export const MealPlanLocationCandidateSchema = z.object({
  locationId: MealPlanLocationCandidateIdSchema,
  placeName: z.string().min(1),
  lat: MealPlanLatitudeSchema,
  lng: MealPlanLongitudeSchema,
  address: z.string().default(""),
  source: MealPlanLocationCandidateSourceSchema.default("manual"),
  createdBy: MemberIdSchema.optional(),
  createdAt: ISODateTimeStringSchema.optional(),
});

export const MealPlanMenuCandidateSourceSchema = z.enum([
  "external-recommendation",
  "prefer-menu",
  "recent-menu",
  "fallback",
  "manual-search",
]);

export const MealPlanMenuCandidateSchema = z.object({
  menuCandidateId: MealPlanMenuCandidateIdSchema,
  menu: FoodSchema,
  source: MealPlanMenuCandidateSourceSchema,
  score: z.number().default(0),
  createdAt: ISODateTimeStringSchema,
});

export const MealPlanRestaurantCandidateSchema = RestaurantSchema.extend({
  candidateId: RestaurantIdSchema.optional(),
  source: z.enum(["search", "fallback", "manual"]).optional(),
  createdAt: ISODateTimeStringSchema.optional(),
});

export const MealPlanDecisionStageTypeSchema = z.enum([
  "DATE",
  "TIME",
  "AREA",
  "MENU",
  "RESTAURANT",
  "FINAL_CONFIRMATION",
]);

export const MealPlanDecisionStageStatusSchema = z.enum([
  "OPEN",
  "COMPLETED",
  "REOPENED",
]);

export const MealPlanVoteTypeSchema = z.enum([
  "PICK",
  "EXCLUDE",
  "PREFER",
  "READY",
]);

export const MealPlanDecisionCandidateSchema = z.discriminatedUnion("stageType", [
  z.object({ stageType: z.literal("DATE"), value: ISODateStringSchema }),
  z.object({ stageType: z.literal("TIME"), value: TimeHHmmStringSchema }),
  z.object({ stageType: z.literal("AREA"), value: MealPlanLocationCandidateSchema }),
  z.object({ stageType: z.literal("MENU"), value: MealPlanMenuCandidateSchema }),
  z.object({ stageType: z.literal("RESTAURANT"), value: MealPlanRestaurantCandidateSchema }),
  z.object({ stageType: z.literal("FINAL_CONFIRMATION"), value: z.literal("READY") }),
]);

export const MealPlanVoteSchema = z.object({
  voteId: MealPlanVoteIdSchema,
  voterId: MemberIdSchema.nullable(),
  guestId: z.string().min(1).nullable(),
  voteType: MealPlanVoteTypeSchema,
  candidate: MealPlanDecisionCandidateSchema,
  createdAt: ISODateTimeStringSchema,
});

export const MealPlanDecisionStageResponseSchema = z.object({
  stageId: MealPlanDecisionStageIdSchema,
  stageType: MealPlanDecisionStageTypeSchema,
  status: MealPlanDecisionStageStatusSchema,
  candidates: z.array(MealPlanDecisionCandidateSchema),
  votes: z.array(MealPlanVoteSchema),
  selectedCandidate: MealPlanDecisionCandidateSchema.nullable(),
  openedAt: ISODateTimeStringSchema,
  completedAt: ISODateTimeStringSchema.nullable(),
  reopenedAt: ISODateTimeStringSchema.nullable(),
});

export const CreateMealPlanVoteRequestSchema = z.object({
  voteType: MealPlanVoteTypeSchema,
  candidate: MealPlanDecisionCandidateSchema,
});

export const CompleteMealPlanDecisionStageRequestSchema = z.object({
  selectedCandidate: MealPlanDecisionCandidateSchema,
});

export const MealPlanChangeRequestStatusSchema = z.enum([
  "PENDING",
  "ACCEPTED",
  "REJECTED",
  "CANCELLED",
]);

export const CreateMealPlanChangeRequestSchema = z.object({
  stageType: MealPlanDecisionStageTypeSchema,
  reason: z.string().min(1).max(500),
  proposedCandidate: MealPlanDecisionCandidateSchema.optional(),
});

export const MealPlanChangeRequestSummarySchema = z.object({
  changeRequestId: MealPlanChangeRequestIdSchema,
  stageType: MealPlanDecisionStageTypeSchema,
  status: MealPlanChangeRequestStatusSchema,
  reason: z.string(),
  requestedAt: ISODateTimeStringSchema,
});
