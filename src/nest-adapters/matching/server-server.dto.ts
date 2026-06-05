// 스프링 서버, 소켓 서버 공통 DTO
import { IsArray, IsNotEmpty, IsObject, IsString } from "class-validator";
import { LocationCandidate, Menu, Participant } from "src/types/matching/types";
import { KakaoRestaurantResponseDto } from "../../types/common/restaurant-shared";

//스프링 서버에서 사용하는 DTO
export class AnnouncementRequestDto {
  @IsString()
  @IsNotEmpty()
  announcementId: string;
  @IsString()
  @IsNotEmpty()
  location: string;
  @IsString()
  @IsNotEmpty()
  meetingAt: string;
  @IsArray()
  @IsNotEmpty()
  participants: Participant[];
  @IsArray()
  @IsNotEmpty()
  recentMenu: { userId: string; menu: Menu[] }[];
}
export class InvitationRequestDto {
  @IsString()
  @IsNotEmpty()
  invitationId: string;
  @IsArray()
  @IsNotEmpty()
  participants: Participant[];
  @IsArray()
  @IsNotEmpty()
  recentMenu: { userId: string; menu: Menu[] }[];
}
export class AnnouncementResultRequestDto {
  @IsString()
  @IsNotEmpty()
  announcementId: string;
  @IsObject()
  @IsNotEmpty()
  location: LocationCandidate;
  @IsObject()
  @IsNotEmpty()
  menu: Menu;
  @IsObject()
  @IsNotEmpty()
  restaurant: KakaoRestaurantResponseDto;
}
export class InvitationResultRequestDto {
  @IsString()
  @IsNotEmpty()
  invitationId: string;
  @IsObject()
  @IsNotEmpty()
  location: LocationCandidate;
  @IsObject()
  @IsNotEmpty()
  menu: Menu;
  @IsString()
  @IsNotEmpty()
  meetingAt: string;
  @IsObject()
  @IsNotEmpty()
  restaurant: KakaoRestaurantResponseDto;
}
