import { z } from "zod";
import type {
  ChatMessageRequest,
  ChatMessageResponse,
  FinalState,
  LocationCandidate,
  Menu,
  MenuCode,
  PhaseDataBroadcast,
  Participant,
  ReadyStateRequest,
  RoomAssignedResponse,
  RoomInitialState,
  RoomSocketError,
} from "./room-payloads";
import { RestaurantSchema } from "@/restaurant/restaurant.schema";
import { RoomSocketClientEventSchemas, RoomSocketServerEventSchemas } from "@/room/schema";

type MemberId = Participant["memberId"];
type Restaurant = z.infer<typeof RestaurantSchema>;
type RestaurantId = Restaurant["restaurantId"];

export type ReadyStateChanged = {
  readyCount: number;
  participantCount: number;
};
export type TimePicksUpdateResponse = { memberId: MemberId; times: string[] }[];
export type DatePicksUpdateResponse = { memberId: MemberId; dates: string[] }[];
export type LocationCandidateAddUpdateResponse = Array<
  LocationCandidate & { authorMemberId: MemberId }
>;
export type LocationCandidateVoteUpdateResponse = {
  locationId: LocationCandidate["locationId"];
  votes: MemberId[];
}[];
export type ExcludeMenuUpdateResponse = { memberId: MemberId; exclusions: Menu[] }[];
export type MenuPickUpdateResponse = { menuCode: MenuCode; selectedMembers: MemberId[] }[];
export type RestaurantPickUpdateResponse = {
  restaurantId: RestaurantId;
  selectedMembers: MemberId[];
}[];

type EventMapFromSchemas<T extends Record<string, z.ZodTypeAny>> = {
  [K in keyof T]: (payload: z.infer<T[K]>) => void;
};

export type RoomClientToServerEvents = EventMapFromSchemas<typeof RoomSocketClientEventSchemas>;

export type RoomServerToClientEvents = EventMapFromSchemas<typeof RoomSocketServerEventSchemas>;
