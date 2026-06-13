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

type MemberId = Participant["memberId"];
type Restaurant = z.infer<typeof RestaurantSchema>;
type RestaurantId = Restaurant["restaurantId"];

export type ReadyStateChanged = {
  readyCount: number;
  participantCount: number;
};
export type TimePicksUpdateResponse = { memberId: MemberId; times: string[] }[];
export type DatePicksUpdateResponse = { memberId: MemberId; dates: string[] }[];
export type LocationCandidateAddUpdateResponse = Array<LocationCandidate & { authorMemberId: MemberId }>;
export type LocationCandidateVoteUpdateResponse = { locationId: LocationCandidate["locationId"]; votes: MemberId[] }[];
export type ExcludeMenuUpdateResponse = { memberId: MemberId; exclusions: Menu[] }[];
export type MenuPickUpdateResponse = { menuCode: MenuCode; selectedMembers: MemberId[] }[];
export type RestaurantPickUpdateResponse = { restaurantId: RestaurantId; selectedMembers: MemberId[] }[];

export type RoomClientToServerEvents = {
  "ready-state": (payload: ReadyStateRequest) => void;
  "chat-message": (payload: ChatMessageRequest) => void;
  "add-location-candidate": (payload: LocationCandidate) => void;
  "vote-location": (payload: { locationId: LocationCandidate["locationId"] }) => void;
  "exclude-menu": (payload: { menu: Menu }) => void;
  "pick-menu": (payload: { menuCode: MenuCode }) => void;
  "pick-restaurant": (payload: { restaurantId: RestaurantId }) => void;
  "pick-times": (payload: { times: string[] }) => void;
  "pick-date": (payload: { dates: string[] }) => void;
  [event: string]: (...args: any[]) => void;
};

export type RoomServerToClientEvents = {
  "room-assigned": (payload: RoomAssignedResponse) => void;
  "stage-changed": (payload: PhaseDataBroadcast) => void;
  "chat-message": (payload: ChatMessageResponse) => void;
  "room-error": (payload: RoomSocketError) => void;
  "ready-state-changed": (payload: ReadyStateChanged) => void;
  "join-room": (payload: RoomInitialState) => void;
  "time-updated": (payload: TimePicksUpdateResponse) => void;
  "date-updated": (payload: DatePicksUpdateResponse) => void;
  "location-add-updated": (payload: LocationCandidateAddUpdateResponse) => void;
  "location-vote-updated": (payload: LocationCandidateVoteUpdateResponse) => void;
  "exclude-menu-updated": (payload: ExcludeMenuUpdateResponse) => void;
  "menu-pick-updated": (payload: MenuPickUpdateResponse) => void;
  "restaurant-pick-updated": (payload: RestaurantPickUpdateResponse) => void;
  "final-state-response": (payload: FinalState) => void;
  [event: string]: (...args: any[]) => void;
};

export type RoomServerToClientEvents = EventMapFromSchemas<typeof RoomSocketServerEventSchemas>;
