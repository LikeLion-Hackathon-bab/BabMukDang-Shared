import { User, UserId } from "../profile/user";
import { RestaurantInfo } from "../common/restaurant-shared";

export interface LocalTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}
// 소켓 서버
export type MenuCode = string;

export interface Menu {
  code: MenuCode;
  label: string;
}
export interface LocationCandidateView extends LocationCandidate {
  isSelected: boolean;
}

// 소켓 서버
export type LocationId = string;

export interface LocationCandidate {
  id: LocationId;
  placeName: string;
  lat: number;
  lng: number;
  address: string;
}
// 소켓 서버

export interface UserMenuCategory {
  userId: string;
  menuList: Menu[];
}

export interface ChatMessage {
  messageId: string;
  user: User;
  text?: string;
  createdAt: string;
}

export interface FinalState {
  location: LocationCandidate | undefined;
  excludeMenu: Menu[] | undefined;
  menu: Menu | undefined;
  restaurant: RestaurantInfo | undefined;
  time: string;
  date: string;
}
export interface Participant extends User {
  ready: boolean;
}

export type AnnouncementStage =
  | "waiting"
  | "location"
  | "location-vote"
  | "exclude-menu"
  | "menu"
  | "restaurant"
  | "finish";

export type InvitationStage =
  | "waiting"
  | "date"
  | "time"
  | "location"
  | "location-vote"
  | "exclude-menu"
  | "menu"
  | "restaurant"
  | "finish";

export const AnnouncementStageMap: Record<AnnouncementStage, number> = {
  waiting: 1,
  location: 2,
  "location-vote": 3,
  "exclude-menu": 4,
  menu: 5,
  restaurant: 6,
  finish: 7,
};

export const InvitationStageMap: Record<InvitationStage, number> = {
  waiting: 1,
  date: 2,
  time: 3,
  location: 4,
  "location-vote": 5,
  "exclude-menu": 6,
  menu: 7,
  restaurant: 8,
  finish: 9,
};

// 소켓 서버
// recommendations": [
//   {
//       "code": "05011001",
//       "label": "비빔밥",
//       "group_score": 0.5099,
//       "member_scores": {
//           "user_a": 0.5929,
//           "user_b": 0.4659,
//           "user_c": 0.6503,
//           "user_d": 0.3304
//       },
//       "reasons": [
//           "중간 취향",
//           "최근 3일 내 미섭취"
//       ]
//   },
//   {
//       "code": "02011027",
//       "label": "자장면",
//       "group_score": 0.5018,
//       "member_scores": {
//           "user_a": 0.4136,
//           "user_b": 0.6258,
//           "user_c": 0.546,
//           "user_d": 0.4218
//       },
//       "reasons": [
//           "중간 취향",
//           "최근 3일 내 미섭취"
//       ]
//   },
//   {
//       "code": "03021005",
//       "label": "불고기",
//       "group_score": 0.4147,
//       "member_scores": {
//           "user_a": 0.3724,
//           "user_b": 0.5468,
//           "user_c": 0.4242,
//           "user_d": 0.3153
//       },
//       "reasons": [
//           "중간 취향",
//           "최근 3일 내 미섭취"
//       ]
//   },
//   {
//       "code": "11015001",
//       "label": "잡채",
//       "group_score": 0.3725,
//       "member_scores": {
//           "user_a": 0.3518,
//           "user_b": 0.3133,
//           "user_c": 0.3949,
//           "user_d": 0.4299
//       },
//       "reasons": [
//           "중간 취향",
//           "최근 3일 내 미섭취"
//       ]
//   }
// ],
