export type {
  CreateRecruitResponse as CreateRecruitResponseDto,
  RecruitParticipant as RecruitParticipantDto,
  RecruitResponse as RecruitResponseDto,
  RecruitStatus,
} from "../../domain/recruit/contracts/recruit.response";
export type { RecruitRequest as RecruitRequestDto } from "../../domain/recruit/contracts/recruit.request";

/** @deprecated Use RecruitRequestDto. */
export type Recruit = import("../../domain/recruit/contracts/recruit.request").RecruitRequest;
