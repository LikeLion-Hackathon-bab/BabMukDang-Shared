import { UserId } from "../profile/user";
import {
  LocationCandidate,
  LocationId,
  MenuCode,
  ChatMessage,
  Menu,
} from "./types";
import { RestaurantId } from "../common";

export interface ChatMessageResponseItem extends ChatMessage {}

export interface TimePicksUpdateResponseItem {
  userId: UserId;
  times: string[];
}

export interface DatePicksUpdateResponseItem {
  userId: UserId;
  dates: string[];
}

export interface LocationCandidateAddUpdateResponseItem
  extends LocationCandidate {
  author: UserId;
}
export interface LocationCandidateVoteUpdateResponseItem {
  locationId: LocationId;
  votes: UserId[];
}
export interface ExcludeMenuUpdateResponseItem {
  userId: UserId;
  exclusions: Menu[];
}

export interface MenuPickUpdateResponseItem {
  menuCode: MenuCode;
  selectedUsers: UserId[];
}

export interface RestaurantPickUpdateResponseItem {
  restaurantId: RestaurantId;
  selectedUsers: UserId[];
}

export interface ReadyStateChangedDto {
  readyCount: number;
  participantCount: number;
}

export type TimePicksUpdateResponseDto = TimePicksUpdateResponseItem[];
export type DatePicksUpdateResponseDto = DatePicksUpdateResponseItem[];
export type LocationCandidateAddUpdateResponseDto =
  LocationCandidateAddUpdateResponseItem[];
export type LocationCandidateVoteUpdateResponseDto =
  LocationCandidateVoteUpdateResponseItem[];

export type ExcludeMenuUpdateResponseDto = ExcludeMenuUpdateResponseItem[];
export type MenuPickUpdateResponseDto = MenuPickUpdateResponseItem[];
export type RestaurantPickUpdateResponseDto =
  RestaurantPickUpdateResponseItem[];
