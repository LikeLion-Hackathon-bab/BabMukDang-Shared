import type {
  AnnouncementStage,
  InvitationRoomStage,
  LocationCandidate,
  Menu,
} from "../../domain/room/contracts/room-payloads";

export type {
  AnnouncementStage,
  FinalState,
  InvitationRoomStage as InvitationStage,
  LocationCandidate,
  LocationId,
  Menu,
  MenuCode,
  Participant,
  RecruitRoomStage,
} from "../../domain/room/contracts/room-payloads";

export const AnnouncementStageMap: Record<AnnouncementStage, number> = {
  waiting: 1,
  location: 2,
  "location-vote": 3,
  "exclude-menu": 4,
  menu: 5,
  restaurant: 6,
  finish: 7,
};

export const InvitationStageMap: Record<InvitationRoomStage, number> = {
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

export interface UserMenuCategory {
  memberId: number;
  menuList: Menu[];
}

/** @deprecated Use LocationCandidate.locationId. */
export type LegacyLocationCandidate = LocationCandidate & { id?: string };

/** @deprecated Use ChatMessageResponse. */
export type ChatMessage = import("../../domain/room/contracts/room-payloads").ChatMessageResponse;
