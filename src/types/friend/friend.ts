import { UserId } from "../profile/user";

// 클라 서버
export interface Friend {
  userId: UserId;
  name: string;
  lastActive: string;
  isHungry: boolean;
}

export type FriendMealFilter = "ALL" | "HUNGRY" | "NOT_HUNGRY";

// 친구 식사 상태 목록 아이템. hungry=true는 공복(밥 안 먹음).
export interface FriendMealItemResponse {
  memberId: number;
  userName: string;
  profileImageUrl: string;
  hungry: boolean;
  label: string;
}

export interface FriendListItemResponse {
  memberId: number;
  userName: string;
  profileImageUrl: string;
  friendSince: string;
}

export interface FriendBlockItemResponse {
  memberId: number;
  userName: string;
  profileImageUrl: string;
  blockedAt: string;
}

export type FriendRequestStatus =
  | "PENDING"
  | "ACCEPTED"
  | "REJECTED"
  | "CANCELED";

export interface FriendRequestItemResponse {
  requestId: number;
  requester: {
    memberId: number;
    userName: string;
    profileImageUrl: string;
  };
  recipient: {
    memberId: number;
    userName: string;
    profileImageUrl: string;
  };
  status: FriendRequestStatus;
  requestedAt: string;
}
