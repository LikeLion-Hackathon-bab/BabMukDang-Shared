import { UserId } from "../profile";
import { KakaoRestaurantResponseDto } from "../common/restaurant-shared";
import { AnnouncementStage, InvitationStage, Menu, Participant } from "./types";
import {
  DatePicksUpdateResponseDto,
  TimePicksUpdateResponseDto,
  MenuPickUpdateResponseDto,
  RestaurantPickUpdateResponseDto,
  ExcludeMenuUpdateResponseDto,
  LocationCandidateAddUpdateResponseDto,
  LocationCandidateVoteUpdateResponseDto,
} from "./update-response";

export type TimeInitialState = TimePicksUpdateResponseDto;
export type DateInitialState = DatePicksUpdateResponseDto;

export type LocationAddInitialState = LocationCandidateAddUpdateResponseDto;

export type LocationVoteInitialState = {
  locations: LocationCandidateAddUpdateResponseDto;
  votes?: LocationCandidateVoteUpdateResponseDto;
};

export interface ExcludeMenuInitialState {
  recentMenus: { userId: UserId; menuList: Menu[] }[];
  excludedMenuList?: ExcludeMenuUpdateResponseDto;
}

export interface MenuInitialState {
  initialMenus: Menu[];
  menuPick?: MenuPickUpdateResponseDto;
}
export interface RestaurantInitialState {
  initialRestaurants: KakaoRestaurantResponseDto[];
  restaurantUserList?: RestaurantPickUpdateResponseDto;
}

export interface WaitingInitialState {
  participants: Participant[];
  locationInitial?: string;
  meetingAt?: string;
}

export interface PhaseDataBroadcastDto {
  phase: AnnouncementStage | InvitationStage;
  data:
    | WaitingInitialState
    | TimeInitialState
    | DateInitialState
    | LocationAddInitialState
    | LocationVoteInitialState
    | ExcludeMenuInitialState
    | MenuInitialState
    | RestaurantInitialState;
}
