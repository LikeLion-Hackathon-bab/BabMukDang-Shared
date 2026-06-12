import type { MemberId as UserId, RestaurantId, RoomId } from "@/common/contracts/id";
import type { RestaurantResponse } from "@/restaurant/restaurant.contracts";
import {
  FinalState,
  LocationCandidate,
  LocationId,
  Menu,
  MenuCode,
  Participant,
  RecruitRoomStage,
} from "@/room";
import { ChatMessage, InvitationStage } from "./types";
import { ISODateString } from "@/common";

export interface TimeStore {
  pickedByMember: Map<UserId, string[]>;
}

export interface DateStore {
  pickedByMember: Map<UserId, string[]>;
}

export interface LocationStore {
  candidates: Map<LocationId, LocationCandidate & { authorMemberId: UserId }>;
  votes: Map<LocationId, Set<UserId>>;
}

export interface ExcludeMenuStore {
  memberExclusions: Map<UserId, Map<MenuCode, Menu>>;
}

export interface MenuStore {
  availableMenus: Menu[];
  menuPerMemberSelections: Map<MenuCode, Set<UserId>>;
}

export interface RestaurantStore {
  initialRestaurants: RestaurantResponse[];
  restaurantMemberList: Map<UserId, RestaurantId>;
}

export interface RoomStore {
  roomId: RoomId;
  version: number;
  updatedAt: number;
  stage: RecruitRoomStage | InvitationStage;
  participants: Map<UserId, Participant>;
  recentMenu: Map<UserId, Menu[]>;
  timeout?: ISODateString;
  chat: ChatMessage[];
  meetingAt?: string;
  locationInitial?: string;
  date?: DateStore;
  time?: TimeStore;
  location?: LocationStore;
  restaurant?: RestaurantStore;
  menu?: MenuStore;
  excludeMenu?: ExcludeMenuStore;
  final: FinalState;
}
