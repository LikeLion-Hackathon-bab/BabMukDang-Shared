import { RestaurantId } from "../common/restaurant-shared";
import { LocationId, Menu, MenuCode } from "./types";

export interface TimePicksRequestDto {
  times: string[];
}
export interface DatePicksRequestDto {
  dates: string[];
}
export interface LocationCandidateAddRequestDto {
  id: LocationId;
  placeName: string;
  lat: number;
  lng: number;
  address?: string;
}
export interface LocationCandidateVoteRequestDto {
  locationId: LocationId;
}
export interface ExcludeMenuRequestDto {
  menu: Menu;
}
export interface MenuPickRequestDto {
  menuCode: MenuCode;
}
export interface RestaurantPickRequestDto {
  restaurantId: RestaurantId;
}
export interface ChatMessageRequestDto {
  text: string;
}

export interface ReadyStateRequestDto {
  isReady: boolean;
}
