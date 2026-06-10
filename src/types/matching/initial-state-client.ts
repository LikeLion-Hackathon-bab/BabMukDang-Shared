import type { z } from "zod";
import type {
  FinalStateSchema,
  PhaseDataBroadcastSchema,
  RoomInitialStateSchema,
} from "@/room/schema/room.schema";

export type TimeInitialState = TimePicksUpdateResponseDto;
export type DateInitialState = DatePicksUpdateResponseDto;
export type LocationAddInitialState = LocationCandidateAddUpdateResponseDto;
export interface LocationVoteInitialState {
  locations: LocationCandidateAddUpdateResponseDto;
  votes?: LocationCandidateVoteUpdateResponseDto;
}
export interface ExcludeMenuInitialState {
  recentMenus: { memberId: number; menuList: unknown[] }[];
  excludedMenuList?: ExcludeMenuUpdateResponseDto;
}
export interface MenuInitialState {
  initialMenus: unknown[];
  menuPick?: MenuPickUpdateResponseDto;
}
export interface RestaurantInitialState {
  initialRestaurants: unknown[];
  restaurantUserList?: RestaurantPickUpdateResponseDto;
}
export interface WaitingInitialState {
  locationInitial?: string;
  meetingAt?: string;
}
export type FinalState = z.infer<typeof FinalStateSchema>;
export type RoomInitialState = z.infer<typeof RoomInitialStateSchema>;
export type PhaseDataBroadcastDto = z.infer<typeof PhaseDataBroadcastSchema>;
