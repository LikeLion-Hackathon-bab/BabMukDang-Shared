import { z } from "zod";
import { ISODateStringSchema, ISODateTimeStringSchema } from "@/common/schema/date.schema";
import {
  FoodCodeSchema,
  FoodLabelSchema,
  FoodSchema,
  MemberIdSchema,
  RestaurantIdSchema,
  RoomIdSchema,
} from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member";
import { RestaurantSchema } from "@/restaurant/restaurant.schema";

export const MenuCodeSchema = FoodCodeSchema;
export const MenuIdSchema = FoodCodeSchema;
export const MenuCandidateIdSchema = z.string().min(1).brand<"MenuCandidateId">();
export const LocationIdSchema = z.string().min(1).brand<"LocationId">();
export const LocationCandidateIdSchema = LocationIdSchema;
export const RestaurantCandidateIdSchema = RestaurantIdSchema;
export const DecisionSnapshotIdSchema = z.string().min(1).brand<"DecisionSnapshotId">();
export const RoomVersionSchema = z.number().int().nonnegative().brand<"RoomVersion">();
export const RoomKeySchema = z.string().min(1).brand<"RoomKey">();
export const SourceIdSchema = z.string().min(1).brand<"SourceId">();
export const DateStringSchema = ISODateStringSchema;
export const TimeStringSchema = z.string().min(1).brand<"TimeString">();
export const DateTimeStringSchema = ISODateTimeStringSchema;
export const LatitudeSchema = z.number().brand<"Latitude">();
export const LongitudeSchema = z.number().brand<"Longitude">();

export const MenuSchema = FoodSchema.extend({});

export const LocationCandidateSourceSchema = z.enum([
  "manual",
  "midpoint",
  "search",
  "recent-place",
  "fallback",
]);

export const LocationCandidateSchema = z.object({
  locationId: LocationCandidateIdSchema,
  placeName: z.string(),
  lat: LatitudeSchema,
  lng: LongitudeSchema,
  address: z.string().optional().default(""),
  source: LocationCandidateSourceSchema.default("manual"),
  createdBy: MemberIdSchema.optional(),
  createdAt: ISODateTimeStringSchema.optional(),
});

export const MenuCandidateSourceSchema = z.enum([
  "external-recommendation",
  "prefer-menu",
  "recent-menu",
  "fallback",
  "manual-search",
]);

export const MenuCandidateSchema = z.object({
  id: MenuCandidateIdSchema,
  menu: MenuSchema,
  source: MenuCandidateSourceSchema,
  score: z.number().default(0),
  createdAt: ISODateTimeStringSchema,
});

export const RestaurantCandidateSchema = RestaurantSchema.extend({
  candidateId: RestaurantCandidateIdSchema.optional(),
  source: z.enum(["search", "fallback", "manual"]).optional(),
  createdAt: ISODateTimeStringSchema.optional(),
});

export const ParticipantSchema = MemberCoreSchema.extend({
  ready: z.boolean(),
});

export const RoomTypeSchema = z.enum(["recruit", "invitation"]);

export const RoomPhaseSchema = z.enum(["waiting", "active", "finished"]);

export const RoomTaskKeySchema = z.enum([
  "schedule-date",
  "schedule-time",
  "location-candidate",
  "location-vote",
  "exclude-menu",
  "prefer-menu",
  "menu-pick",
  "restaurant-search",
  "restaurant-pick",
]);

export const RoomTaskStatusSchema = z.enum([
  "locked",
  "open",
  "ready",
  "resolved",
  "stale",
]);

export const DecisionStatusSchema = z.enum([
  "candidate",
  "provisional",
  "final",
  "stale",
]);

export const FinalFieldSchema = z.enum([
  "date",
  "time",
  "meetingAt",
  "location",
  "excludeMenu",
  "menu",
  "restaurant",
]);

export const DecisionReasonSchema = z.enum([
  "COMMON_SCHEDULE",
  "TOP_VOTED_LOCATION",
  "TOP_PICKED_MENU",
  "TOP_PICKED_RESTAURANT",
  "HOST_CONFIRMED",
  "ALL_READY",
  "FALLBACK",
]);

export const RecruitRoomStageSchema = z.enum([
  "waiting",
  "location",
  "location-vote",
  "exclude-menu",
  "menu",
  "restaurant",
  "finish",
]);

export const InvitationRoomStageSchema = z.enum([
  "waiting",
  "date",
  "time",
  "location",
  "location-vote",
  "exclude-menu",
  "menu",
  "restaurant",
  "finish",
]);

export const ReadyStateRequestSchema = z.object({
  taskKey: RoomTaskKeySchema,
  isReady: z.boolean(),
});

export const ChatMessageRequestSchema = z.object({
  message: z.string().min(1).max(500),
});

export const AddLocationCandidateRequestSchema = LocationCandidateSchema.omit({
  createdBy: true,
  createdAt: true,
}).extend({ source: LocationCandidateSourceSchema.optional() });
export const VoteLocationRequestSchema = z.object({ locationId: LocationCandidateIdSchema });
export const ExcludeMenuRequestSchema = z.object({ menu: MenuSchema });
export const PreferMenuRequestSchema = z.object({ menu: MenuSchema });
export const PickMenuRequestSchema = z.object({ menuCandidateId: MenuCandidateIdSchema });
export const PickRestaurantRequestSchema = z.object({ restaurantId: RestaurantIdSchema });
export const PickTimesRequestSchema = z.object({ times: z.array(TimeStringSchema).min(1) });
export const PickDateRequestSchema = z.object({ dates: z.array(DateStringSchema).min(1) });
export const ConfirmDecisionRequestSchema = z.object({
  field: FinalFieldSchema,
  snapshotId: DecisionSnapshotIdSchema,
});
export const ReopenTaskRequestSchema = z.object({
  taskKey: RoomTaskKeySchema,
  reason: z.string().max(500).optional(),
});

export const RoomAssignedResponseSchema = z.object({
  roomId: RoomIdSchema,
});

export const RoomAccessResponseSchema = z.object({
  roomId: RoomIdSchema,
  roomType: RoomTypeSchema,
  phase: RoomPhaseSchema,
  canJoin: z.boolean(),
});

export const MatchingNotificationKindSchema = z.enum(["recruit", "invitation"]);

export const MatchingNotificationSchema = z.object({
  notificationId: z.string().min(1),
  kind: MatchingNotificationKindSchema,
  roomId: RoomIdSchema,
  roomType: RoomTypeSchema,
  title: z.string().min(1),
  message: z.string().min(1),
  createdAt: ISODateTimeStringSchema,
  readAt: ISODateTimeStringSchema.nullable(),
});

export const RoomSocketErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
});

export const ChatMessageResponseSchema = z.object({
  messageId: z.string(),
  user: MemberCoreSchema,
  message: z.string(),
  createdAt: ISODateTimeStringSchema,
});

export const ReadyStateChangedSchema = z.object({
  taskKey: RoomTaskKeySchema,
  readyCount: z.number().int().min(0),
  participantCount: z.number().int().min(0),
});

export const FinalStateSchema = z.object({
  meetingAt: ISODateTimeStringSchema.optional(),
  location: LocationCandidateSchema.optional(),
  excludeMenu: z.array(MenuSchema).optional(),
  menu: MenuCandidateSchema.optional(),
  restaurant: RestaurantSchema.optional(),
  time: TimeStringSchema.optional(),
  date: DateStringSchema.optional(),
});

export const RoomDecisionSnapshotSchema = z.object({
  id: DecisionSnapshotIdSchema,
  field: FinalFieldSchema,
  value: z.unknown(),
  status: DecisionStatusSchema,
  reason: DecisionReasonSchema,
  score: z.number().optional(),
  sourceEvent: z.string().min(1),
  sourceUserId: MemberIdSchema.optional(),
  sourceVersion: RoomVersionSchema,
  dependencyHash: z.string().min(1),
  dependencyFields: z.array(FinalFieldSchema),
  createdAt: ISODateTimeStringSchema,
  staleAt: ISODateTimeStringSchema.optional(),
});

export const RoomTaskProgressSchema = z.object({
  key: RoomTaskKeySchema,
  status: RoomTaskStatusSchema,
  readyCount: z.number().int().min(0),
  participantCount: z.number().int().min(0),
  updatedAt: ISODateTimeStringSchema,
  resolvedAt: ISODateTimeStringSchema.optional(),
});

export const RoomProgressSchema = z.object({
  roomId: RoomIdSchema,
  sourceId: SourceIdSchema,
  roomType: RoomTypeSchema,
  phase: RoomPhaseSchema,
  tasks: z.array(RoomTaskProgressSchema),
  final: FinalStateSchema,
  provisional: FinalStateSchema.partial(),
  version: RoomVersionSchema,
  updatedAt: ISODateTimeStringSchema,
});

export const DecisionCandidateUpdateSchema = z.object({
  snapshots: z.array(RoomDecisionSnapshotSchema),
});

export const MenuCandidatesUpdateSchema = z.object({
  candidates: z.array(MenuCandidateSchema),
  generatedFromHash: z.string().optional(),
});

export const RestaurantCandidatesUpdateSchema = z.object({
  candidates: z.array(RestaurantSchema),
  generatedFromHash: z.string().optional(),
});

export const RoomInitialStateSchema = z.object({
  participants: z.array(ParticipantSchema),
  chat: z.array(ChatMessageResponseSchema),
  final: FinalStateSchema,
  progress: RoomProgressSchema.optional(),
});

export const TimePicksUpdateResponseSchema = z.array(
  z.object({ memberId: MemberIdSchema, times: z.array(TimeStringSchema) }),
);
export const DatePicksUpdateResponseSchema = z.array(
  z.object({ memberId: MemberIdSchema, dates: z.array(DateStringSchema) }),
);
export const LocationCandidateAddUpdateResponseSchema = z.array(
  LocationCandidateSchema.extend({ authorMemberId: MemberIdSchema }),
);
export const LocationCandidateVoteUpdateResponseSchema = z.array(
  z.object({ locationId: LocationCandidateIdSchema, votes: z.array(MemberIdSchema) }),
);
export const ExcludeMenuUpdateResponseSchema = z.array(
  z.object({ memberId: MemberIdSchema, exclusions: z.array(MenuSchema) }),
);
export const PreferMenuUpdateResponseSchema = z.array(
  z.object({ memberId: MemberIdSchema, preferences: z.array(MenuSchema) }),
);
export const MenuPickUpdateResponseSchema = z.array(
  z.object({ menuCandidateId: MenuCandidateIdSchema, selectedMembers: z.array(MemberIdSchema) }),
);
export const RestaurantPickUpdateResponseSchema = z.array(
  z.object({ restaurantId: RestaurantIdSchema, selectedMembers: z.array(MemberIdSchema) }),
);

const WaitingPhaseDataSchema = z.object({
  locationInitial: z.string().optional(),
  meetingAt: ISODateTimeStringSchema.optional(),
});

const LocationVotePhaseDataSchema = z.object({
  locations: LocationCandidateAddUpdateResponseSchema,
  votes: LocationCandidateVoteUpdateResponseSchema,
});

const ExcludeMenuPhaseDataSchema = z.object({
  recentMenus: z.array(z.object({ userId: z.string(), menuList: z.array(MenuSchema) })),
  excludedMenuList: ExcludeMenuUpdateResponseSchema,
});

const MenuPhaseDataSchema = z.object({
  initialMenus: z.array(MenuCandidateSchema),
  menuPick: MenuPickUpdateResponseSchema.optional(),
});

const RestaurantPhaseDataSchema = z.object({
  initialRestaurants: z.array(RestaurantSchema),
  restaurantUserList: RestaurantPickUpdateResponseSchema,
});

export const PhaseDataBroadcastSchema = z.discriminatedUnion("phase", [
  z.object({ phase: z.literal("waiting"), data: WaitingPhaseDataSchema }),
  z.object({ phase: z.literal("date"), data: DatePicksUpdateResponseSchema }),
  z.object({ phase: z.literal("time"), data: TimePicksUpdateResponseSchema }),
  z.object({ phase: z.literal("location"), data: WaitingPhaseDataSchema }),
  z.object({ phase: z.literal("location-vote"), data: LocationVotePhaseDataSchema }),
  z.object({ phase: z.literal("exclude-menu"), data: ExcludeMenuPhaseDataSchema }),
  z.object({ phase: z.literal("menu"), data: MenuPhaseDataSchema }),
  z.object({ phase: z.literal("restaurant"), data: RestaurantPhaseDataSchema }),
  z.object({ phase: z.literal("finish"), data: WaitingPhaseDataSchema }),
]);

export const RoomSocketClientEventSchemas = {
  "ready-state": ReadyStateRequestSchema,
  "chat-message": ChatMessageRequestSchema,
  "add-location-candidate": AddLocationCandidateRequestSchema,
  "vote-location": VoteLocationRequestSchema,
  "exclude-menu": ExcludeMenuRequestSchema,
  "prefer-menu": PreferMenuRequestSchema,
  "pick-menu": PickMenuRequestSchema,
  "pick-restaurant": PickRestaurantRequestSchema,
  "pick-times": PickTimesRequestSchema,
  "pick-date": PickDateRequestSchema,
  "confirm-decision": ConfirmDecisionRequestSchema,
  "reopen-task": ReopenTaskRequestSchema,
} as const;

export const RoomSocketServerEventSchemas = {
  "room-assigned": RoomAssignedResponseSchema,
  "stage-changed": PhaseDataBroadcastSchema,
  "chat-message": ChatMessageResponseSchema,
  "room-error": RoomSocketErrorSchema,
  "ready-state-changed": ReadyStateChangedSchema,
  "join-room": RoomInitialStateSchema,
  "time-updated": TimePicksUpdateResponseSchema,
  "date-updated": DatePicksUpdateResponseSchema,
  "location-add-updated": LocationCandidateAddUpdateResponseSchema,
  "location-vote-updated": LocationCandidateVoteUpdateResponseSchema,
  "exclude-menu-updated": ExcludeMenuUpdateResponseSchema,
  "prefer-menu-updated": PreferMenuUpdateResponseSchema,
  "menu-pick-updated": MenuPickUpdateResponseSchema,
  "restaurant-pick-updated": RestaurantPickUpdateResponseSchema,
  "final-state-response": FinalStateSchema,
  "room-progress-updated": RoomProgressSchema,
  "decision-candidate-updated": DecisionCandidateUpdateSchema,
  "final-state-updated": FinalStateSchema,
  "menu-candidates-updated": MenuCandidatesUpdateSchema,
  "restaurant-candidates-updated": RestaurantCandidatesUpdateSchema,
} as const;
