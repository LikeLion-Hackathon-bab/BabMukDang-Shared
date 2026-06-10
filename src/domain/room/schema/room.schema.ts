import { z } from "zod";
import { ISODateStringSchema, ISODateTimeStringSchema } from "@/common/schema/date.schema";
import { MemberIdSchema, RestaurantIdSchema, RoomIdSchema } from "@/common/schema/id.schema";
import { MemberCoreSchema } from "@/member";
import { RestaurantSchema } from "@/restaurant/restaurant.schema";

export const MenuCodeSchema = z.string().min(1).brand<"MenuCode">();
export const LocationIdSchema = z.string().min(1).brand<"LocationId">();

export const MenuSchema = z.object({
  code: MenuCodeSchema,
  label: z.string(),
});

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

export const PhaseDataBroadcastSchema = z.object({
  phase: z.union([RecruitRoomStageSchema, InvitationRoomStageSchema]),
  data: z.unknown(),
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
