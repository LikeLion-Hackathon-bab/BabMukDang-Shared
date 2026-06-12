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
export const LocationIdSchema = z.string().min(1).brand<"LocationId">();

export const MenuSchema = FoodSchema.extend({});

export const LocationCandidateSchema = z.object({
  locationId: LocationIdSchema,
  placeName: z.string(),
  lat: z.number(),
  lng: z.number(),
  address: z.string(),
});

export const ParticipantSchema = MemberCoreSchema.extend({
  ready: z.boolean(),
});

export const RecruitRoomStageSchema = z.enum([
  "waiting",
  "location",
  "location-vote",
  "exclude-menu",
  "menu",
  "restaurant",
  "finish",
]);

export const RoomTypeSchema = z.enum(["recruit", "invitation"]);

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
  isReady: z.boolean(),
});

export const ChatMessageRequestSchema = z.object({
  message: z.string().min(1).max(500),
});

export const AddLocationCandidateRequestSchema = LocationCandidateSchema;
export const VoteLocationRequestSchema = z.object({ locationId: LocationIdSchema });
export const ExcludeMenuRequestSchema = z.object({ menu: MenuSchema });
export const PickMenuRequestSchema = z.object({ menuCode: MenuCodeSchema });
export const PickRestaurantRequestSchema = z.object({ restaurantId: RestaurantIdSchema });
export const PickTimesRequestSchema = z.object({ times: z.array(z.string().min(1)).min(1) });
export const PickDateRequestSchema = z.object({ dates: z.array(ISODateStringSchema).min(1) });

export const RoomAssignedResponseSchema = z.object({
  roomId: RoomIdSchema,
});

export const RoomAccessResponseSchema = z.object({
  roomId: RoomIdSchema,
  roomType: RoomTypeSchema,
  stage: z.union([RecruitRoomStageSchema, InvitationRoomStageSchema]),
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
  readyCount: z.number().int().min(0),
  participantCount: z.number().int().min(0),
});

export const FinalStateSchema = z.object({
  location: LocationCandidateSchema.optional(),
  excludeMenu: z.array(MenuSchema).optional(),
  menu: MenuSchema.optional(),
  restaurant: RestaurantSchema.optional(),
  time: z.string().optional(),
  date: ISODateStringSchema.optional(),
});

export const RoomInitialStateSchema = z.object({
  participants: z.array(ParticipantSchema),
  chat: z.array(ChatMessageResponseSchema),
  final: FinalStateSchema,
});

export const TimePicksUpdateResponseSchema = z.array(
  z.object({ memberId: MemberIdSchema, times: z.array(z.string()) }),
);
export const DatePicksUpdateResponseSchema = z.array(
  z.object({ memberId: MemberIdSchema, dates: z.array(ISODateStringSchema) }),
);
export const LocationCandidateAddUpdateResponseSchema = z.array(
  LocationCandidateSchema.extend({ authorMemberId: MemberIdSchema }),
);
export const LocationCandidateVoteUpdateResponseSchema = z.array(
  z.object({ locationId: LocationIdSchema, votes: z.array(MemberIdSchema) }),
);
export const ExcludeMenuUpdateResponseSchema = z.array(
  z.object({ memberId: MemberIdSchema, exclusions: z.array(MenuSchema) }),
);
export const MenuPickUpdateResponseSchema = z.array(
  z.object({ menuCode: MenuCodeSchema, selectedMembers: z.array(MemberIdSchema) }),
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
  initialMenus: z.array(MenuSchema),
  menuPick: MenuPickUpdateResponseSchema,
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
  "pick-menu": PickMenuRequestSchema,
  "pick-restaurant": PickRestaurantRequestSchema,
  "pick-times": PickTimesRequestSchema,
  "pick-date": PickDateRequestSchema,
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
  "menu-pick-updated": MenuPickUpdateResponseSchema,
  "restaurant-pick-updated": RestaurantPickUpdateResponseSchema,
  "final-state-response": FinalStateSchema,
} as const;
