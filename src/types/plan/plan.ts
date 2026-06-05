export enum PlanStatus {
  PLANNING = "PLANNING",
  COMPLETED = "COMPLETED",
}

export enum PlanType {
  ANNOUNCEMENT = "ANNOUNCEMENT",
  INVITATION = "INVITATION",
}

export interface MeetingParticipant {
  userId: number;
  username: string;
  profileImageUrl: string;
}

export interface MeetingResponse {
  id: number;
  author: MeetingParticipant;
  participants: MeetingParticipant[];
  location: string;
  meetingAt: string;
  restaurant: string;
  isCompleted: boolean;
  restaurantType: string;
  status: PlanStatus;
  type: PlanType;
  createdAt: string;
  updatedAt: string;
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
