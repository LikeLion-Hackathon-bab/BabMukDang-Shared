import { ISODateTimeString, KakaoRestaurantResponseDto } from "../common";
import { LocationCandidate } from "../matching";
import { User } from "../profile";

export enum PlanStatus {
  PLANNING = "PLANNING",
  COMPLETED = "COMPLETED",
}

export enum PlanType {
  ANNOUNCEMENT = "ANNOUNCEMENT",
  INVITATION = "INVITATION",
}

export interface MeetingParticipant {
  userId: string;
  username: string;
  profileImageUrl: string;
}

export interface MeetingResponse {
  id: number;
  author: MeetingParticipant;
  participants: MeetingParticipant[];
  location: string;
  meetingAt: ISODateTimeString;
  restaurant: string;
  isCompleted: boolean;
  restaurantType: string;
  status: PlanStatus;
  type: PlanType;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

// 직접 plan 생성 요청. meetingDate(YYYY-MM-DD)와 meetingTime(HH:mm)은
// 서버 내부에서 meetingAt 표현으로 합친다. author는 JWT 사용자로 고정한다.
export interface CreatePlanRequest {
  meetingDate: string;
  meetingTime: string;
}

export interface PlanResponseDto {
  id: number;
  meetingAt: ISODateTimeString;
  location: LocationCandidate | null;
  restaurant: KakaoRestaurantResponseDto | null;
  author: User | null;
  participants: User[];
  status: PlanStatus;
  type: PlanType;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

// 클라 서버
type Meeting = {
  id: number;
  participants: { name: string; userId: number }[];
  location: string;
  meetingAt: string;
  restaurant: string;
  isCompleted: boolean;
  restaurantType: string;
};
