import { UserId } from "../profile/user";
import {
  LocationCandidate,
  LocationId,
  Menu,
  MenuCode,
  Participant,
  ChatMessage,
  FinalState,
} from "./types";
import {
  KakaoRestaurantResponseDto,
  RestaurantId,
} from "../common/restaurant-shared";
import { AnnouncementStage, InvitationStage } from "./types";

// 소켓 서버
export interface TimeStore {
  // userId -> array of time ranges 'HH:mm–HH:mm'
  pickedByUser: Map<UserId, string[]>;
}

export interface DateStore {
  // userId -> array of date strings (e.g., '25. 08. 02')
  pickedByUser: Map<UserId, string[]>;
}
export interface LocationStore {
  candidates: Map<LocationId, LocationCandidate & { author: UserId }>; // candidateId -> raw
  votes: Map<LocationId, Set<UserId>>; // candidateId -> Set<userId>
  //   maxCandidates: number; // 최대 후보 수
}
export interface ExcludeMenuStore {
  userExclusions: Map<UserId, Map<MenuCode, Menu>>; // userId -> Map<menuCode, Menu>
  //   maxExclusionsPerUser: number; // 사용자당 최대 제외 가능한 카테고리 수
}

export interface MenuStore {
  availableMenus: Menu[];
  menuPerUserSelections: Map<MenuCode, Set<UserId>>; // menuCode -> Set<userId>
  //   maxMenusPerUser: number; // 사용자당 최대 선택 가능한 메뉴 수
  //   selectionDeadline?: number; // 선택 마감 시간 (timestamp)
}
export interface RestaurantStore {
  initialRestaurants: KakaoRestaurantResponseDto[];
  restaurantUserList: Map<UserId, RestaurantId>; // userId -> restaurantId
  // sortBy: 'DIST' | 'POPULAR' | 'RATING' | 'PRICE' | 'OPEN_NOW';
  // filters?: { categories?: string[]; priceLevels?: number[] };
  // votingDeadline?: number; // 투표 마감 시간 (timestamp)
}

export type RoomId = string;
export interface RoomStore {
  roomId: RoomId;
  version: number;
  updatedAt: number;
  stage: AnnouncementStage | InvitationStage;
  participants: Map<UserId, Participant>; // userId -> Participant
  recentMenu: Map<UserId, Menu[]>; // userId -> Menu[]
  timeout?: NodeJS.Timeout;
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
