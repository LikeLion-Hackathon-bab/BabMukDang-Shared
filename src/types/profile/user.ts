// 소켓 서버
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
export type UserId = string;
export interface UserInfo {
  userId: UserId;
  username: string;
  role: string;
}

export class UserDto {
  @IsString()
  @IsNotEmpty()
  userId: UserId;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  role?: string;
}

export interface User {
  userId: UserId;
  username: string;
  profileImageUrl: string;
}
