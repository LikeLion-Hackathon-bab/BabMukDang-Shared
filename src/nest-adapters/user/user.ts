// Deprecated Nest adapter. Prefer backend-local DTO classes that validate
// against Shared Zod schemas and mapper return values that satisfy Shared DTOs.
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { MemberResponse } from "src/types";

export class UserDto implements MemberResponse {
  @IsNumber()
  @IsNotEmpty()
  memberId: MemberResponse["memberId"];

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @IsString()
  profileImageUrl: string | null;
}
