import { User } from "../profile/user";
import { ISODateTimeString } from "../common";

export type RecruitStatus = "OPEN" | "CLOSED" | "EXPIRED";

export interface Recruit {
  targetCount: number;
  meetingAt: ISODateTimeString;
  location: string;
  message: string;
}

export interface RecruitRequestDto extends Recruit {}
export interface RecruitParticipantDto extends User {}
export interface RecruitResponseDto extends Recruit {
  id: number;
  postId: number;
  status: RecruitStatus;
  createdAt: ISODateTimeString;
  expiredAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
  author: User;
  participants: RecruitParticipantDto[];
}

export interface CreateRecruitResponseDto {
  recruitId: number;
  postId: number;
}
