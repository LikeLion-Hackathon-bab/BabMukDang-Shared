import { ISODateTimeString } from "../common";

export type FoodPreferenceType = "LIKE" | "DISLIKE";

export interface FoodPreferenceResponseDto {
  id: number;
  memberId: number;
  foodCode: string;
  type: FoodPreferenceType;
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}
