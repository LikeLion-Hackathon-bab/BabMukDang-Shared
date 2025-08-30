import { RestaurantId } from "../common/restaurant-shared";
import { LocationId, MenuCode } from "./types";

export type TimePicksRequestDto = string[];
export type DatePicksRequestDto = string[];
export interface LocationCandidateAddRequestDto {
  id: LocationId;
  placeName: string;
  lat: number;
  lng: number;
  address?: string;
}
export type LocationCandidateVoteRequestDto = LocationId[];
export type ExcludeMenuRequestDto = MenuCode[];
export type MenuPickRequestDto = MenuCode[];
export type RestaurantPickRequestDto = RestaurantId;
export type ChatMessageRequestDto = string;

export type ReadyStateRequestDto = boolean;
