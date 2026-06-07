import { User } from "../profile/user";
import { ISODateTimeString } from "../common";

export type RecruitStatus = "OPEN" | "CLOSED" | "EXPIRED";

export interface Recruit {
  targetCount: number;
  meetingAt: ISODateTimeString;
  location: string;
  message: string;
  // 지도 핀 렌더링용 모임 장소 좌표(선택). 좌표 없는 기존 클라이언트 호환을 위해 optional.
  // DB nullable 컬럼과 정합을 위해 null을 허용한다.
  locationLat?: number | null;
  locationLng?: number | null;
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
