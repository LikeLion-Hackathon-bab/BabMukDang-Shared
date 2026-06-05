import { User } from "../profile/user";
import { ISODateTimeString } from "../common";

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
  createdAt: ISODateTimeString;
  expiredAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
  author: User;
  participants: RecruitParticipantDto[];
}
