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
