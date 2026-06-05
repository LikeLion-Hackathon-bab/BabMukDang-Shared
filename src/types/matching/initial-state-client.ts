import { UserId } from "../profile";
import { KakaoRestaurantResponseDto } from "../common/restaurant-shared";
import {
  AnnouncementStage,
  ChatMessage,
  InvitationStage,
  Menu,
  Participant,
  FinalState,
} from "./types";
import {
  DatePicksUpdateResponseDto,
  TimePicksUpdateResponseDto,
  MenuPickUpdateResponseDto,
  RestaurantPickUpdateResponseDto,
  ExcludeMenuUpdateResponseDto,
  LocationCandidateAddUpdateResponseDto,
  LocationCandidateVoteUpdateResponseDto,
} from "./update-response";

export interface TimeInitialState extends TimePicksUpdateResponseDto {}
export interface DateInitialState extends DatePicksUpdateResponseDto {}

export interface LocationAddInitialState
  extends LocationCandidateAddUpdateResponseDto {}

export interface LocationVoteInitialState {
  locations: LocationCandidateAddUpdateResponseDto;
  votes?: LocationCandidateVoteUpdateResponseDto;
}

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
  locationInitial?: string;
  meetingAt?: string;
}

export interface RoomInitialState {
  participants: Participant[];
  chat: ChatMessage[];
  final: FinalState;
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
