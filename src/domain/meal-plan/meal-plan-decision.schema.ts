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

export const MealPlanRestaurantSearchStatusSchema = z.enum([
  "IDLE",
  "PENDING",
  "READY",
  "FAILED",
  "STALE",
]);

export const MealPlanRestaurantSearchStateSchema = z.object({
  searchKey: z.string().min(1).nullable(),
  status: MealPlanRestaurantSearchStatusSchema,
  startedAt: ISODateTimeStringSchema.nullable(),
  completedAt: ISODateTimeStringSchema.nullable(),
  version: z.number().int().min(0),
  candidateCount: z.number().int().min(0),
  errorMessage: z.string().nullable().default(null),
});

export const MealPlanDecisionStageMetadataSchema = z.object({
  restaurantSearch: MealPlanRestaurantSearchStateSchema.optional(),
}).catchall(z.unknown());

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
  metadata: MealPlanDecisionStageMetadataSchema.nullable().default(null),
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


export const MealPlanDecisionTaskKeySchema = z.enum([
  "SCHEDULE_DATE",
  "SCHEDULE_TIME",
  "LOCATION_CANDIDATE",
  "LOCATION_VOTE",
  "EXCLUDE_MENU",
  "PREFER_MENU",
  "MENU_PICK",
  "RESTAURANT_SEARCH",
  "RESTAURANT_PICK",
  "FINAL_CONFIRMATION",
]);

export const MealPlanDecisionTaskStatusSchema = z.enum([
  "LOCKED",
  "OPEN",
  "READY",
  "RESOLVED",
  "STALE",
]);

export const MealPlanDecisionFinalFieldSchema = z.enum([
  "date",
  "time",
  "meetingAt",
  "area",
  "menu",
  "restaurant",
]);

export const MealPlanDecisionSnapshotStatusSchema = z.enum([
  "CANDIDATE",
  "PROVISIONAL",
  "FINAL",
  "STALE",
]);

export const MealPlanDecisionReasonSchema = z.enum([
  "COMMON_SCHEDULE",
  "TOP_VOTED_LOCATION",
  "TOP_PICKED_MENU",
  "TOP_PICKED_RESTAURANT",
  "OWNER_CONFIRMED",
  "TASK_ALL_READY",
  "MANUAL_SELECTION",
]);

export const MealPlanDecisionActorTypeSchema = z.enum(["MEMBER", "GUEST", "SYSTEM"]);

export const MealPlanDecisionSnapshotSchema = z.object({
  snapshotId: z.string().uuid(),
  mealPlanId: z.string().uuid(),
  field: MealPlanDecisionFinalFieldSchema,
  value: z.unknown(),
  status: MealPlanDecisionSnapshotStatusSchema,
  reason: MealPlanDecisionReasonSchema,
  score: z.number().nullable().default(null),
  sourceEvent: z.string().min(1),
  sourceActorType: MealPlanDecisionActorTypeSchema,
  sourceMemberId: MemberIdSchema.nullable(),
  sourceGuestId: z.string().min(1).nullable(),
  sourceParticipantId: z.string().uuid().nullable(),
  sourceVersion: z.number().int().min(0),
  dependencyHash: z.string().min(1),
  dependencyFields: z.array(MealPlanDecisionFinalFieldSchema),
  createdAt: ISODateTimeStringSchema,
  staleAt: ISODateTimeStringSchema.nullable(),
});

export const MealPlanDecisionTaskProgressSchema = z.object({
  taskKey: MealPlanDecisionTaskKeySchema,
  status: MealPlanDecisionTaskStatusSchema,
  readyCount: z.number().int().min(0),
  participantCount: z.number().int().min(0),
  blockers: z.array(z.string()).default([]),
  updatedAt: ISODateTimeStringSchema,
});

export const MealPlanDecisionProgressSchema = z.object({
  mealPlanId: z.string().uuid(),
  status: z.string().min(1),
  tasks: z.array(MealPlanDecisionTaskProgressSchema),
  final: z.record(z.string(), z.unknown()),
  provisional: z.record(z.string(), z.unknown()),
  snapshots: z.array(MealPlanDecisionSnapshotSchema),
  version: z.number().int().min(0),
  updatedAt: ISODateTimeStringSchema,
});

export const MealPlanDecisionTaskReadyRequestSchema = z.object({
  isReady: z.boolean(),
});

export const ReopenMealPlanDecisionTaskRequestSchema = z.object({
  reason: z.string().max(500).optional(),
});

export const ConfirmMealPlanDecisionSnapshotRequestSchema = z.object({
  snapshotId: z.string().uuid(),
});

export type MealPlanRestaurantSearchStatus = z.infer<typeof MealPlanRestaurantSearchStatusSchema>;
export type MealPlanRestaurantSearchState = z.infer<typeof MealPlanRestaurantSearchStateSchema>;
export type MealPlanDecisionStageMetadata = z.infer<typeof MealPlanDecisionStageMetadataSchema>;
