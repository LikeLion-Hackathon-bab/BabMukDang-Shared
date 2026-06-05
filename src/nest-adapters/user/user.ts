// 소켓 서버
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { User, UserId } from "src/types";
export class UserDto implements User {
  @IsString()
  @IsNotEmpty()
  userId: UserId;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  profileImageUrl: string;
}
