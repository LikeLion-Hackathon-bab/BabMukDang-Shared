import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";
import { RestaurantId } from "src/types/common";
import { LocationId, Menu, MenuCode } from "src/types/matching/types";
import {
  ChatMessageRequestDto,
  DatePicksRequestDto,
  ExcludeMenuRequestDto,
  LocationCandidateAddRequestDto,
  LocationCandidateVoteRequestDto,
  MenuPickRequestDto,
  ReadyStateRequestDto,
  RestaurantPickRequestDto,
  TimePicksRequestDto,
} from "src/types/matching/update-request";

export class RestaurantPickRequestDtoServer
  implements RestaurantPickRequestDto
{
  @IsString()
  @IsNotEmpty()
  restaurantId: RestaurantId;
}

export class DatePicksRequestDtoServer implements DatePicksRequestDto {
  @IsArray()
  @IsNotEmpty()
  dates: string[];
}
export class TimePicksRequestDtoServer implements TimePicksRequestDto {
  @IsArray()
  @IsNotEmpty()
  times: string[];
}

export class LocationCandidateAddRequestDtoServer
  implements LocationCandidateAddRequestDto
{
  @IsString()
  @IsNotEmpty()
  id: LocationId;

  @IsString()
  @IsNotEmpty()
  placeName: string;

  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  lng: number;

  @IsString()
  @IsNotEmpty()
  address: string;
}

export class LocationCandidateVoteRequestDtoServer
  implements LocationCandidateVoteRequestDto
{
  @IsString()
  @IsNotEmpty()
  locationId: LocationId;
}

export class ExcludeMenuRequestDtoServer implements ExcludeMenuRequestDto {
  @IsString()
  @IsNotEmpty()
  menu: Menu;
}

export class MenuPickRequestDtoServer implements MenuPickRequestDto {
  @IsString()
  @IsNotEmpty()
  menuCode: MenuCode;
}

export class ChatMessageRequestDtoServer implements ChatMessageRequestDto {
  @IsString()
  @IsNotEmpty()
  text: string;
}

export class ReadyStateRequestDtoServer implements ReadyStateRequestDto {
  @IsBoolean()
  @IsNotEmpty()
  isReady: boolean;
}
