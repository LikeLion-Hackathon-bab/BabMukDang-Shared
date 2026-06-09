export type {
  ChatMessageRequest as ChatMessageRequestDto,
  ReadyStateRequest as ReadyStateRequestDto,
} from "../../domain/room/contracts/room-payloads";

export type TimePicksRequestDto = import("zod").infer<typeof import("../../domain/room/schema/room.schema").PickTimesRequestSchema>;
export type DatePicksRequestDto = import("zod").infer<typeof import("../../domain/room/schema/room.schema").PickDateRequestSchema>;
export type LocationCandidateAddRequestDto = import("zod").infer<typeof import("../../domain/room/schema/room.schema").AddLocationCandidateRequestSchema>;
export type LocationCandidateVoteRequestDto = import("zod").infer<typeof import("../../domain/room/schema/room.schema").VoteLocationRequestSchema>;
export type ExcludeMenuRequestDto = import("zod").infer<typeof import("../../domain/room/schema/room.schema").ExcludeMenuRequestSchema>;
export type MenuPickRequestDto = import("zod").infer<typeof import("../../domain/room/schema/room.schema").PickMenuRequestSchema>;
export type RestaurantPickRequestDto = import("zod").infer<typeof import("../../domain/room/schema/room.schema").PickRestaurantRequestSchema>;
