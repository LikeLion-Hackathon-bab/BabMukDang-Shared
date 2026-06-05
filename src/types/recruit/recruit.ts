import { User } from "../profile/user";

export interface Recruit {
  targetCount: number;
  meetingAt: string; //2025-08-08T22:30
  location: string;
  message: string;
}

export interface RecruitRequestDto extends Recruit {}
export interface RecruitResponseDto extends Recruit {
  id: number;
  createdAt: string;
  expiredAt: string;
  updatedAt: string;
  author: User;
  participants: User[];
}
