import { KakaoRestaurantResponseDto } from "../common";
import { CommentResponseDto } from "./comment";
import { User } from "../profile";
import { ISODateString } from "../common";

// for nestjs server
export interface Article {
  id: number;
  author: User;
  imageUrl: string;
  mealDate: Date;
  restaurant: KakaoRestaurantResponseDto;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
  taggedMembers: User[];
}

// for spring server
export interface ArticleSummaryResponseDto extends Article {
  likeCount: number;
  commentCount: number;
  likedByMe: boolean;
}
export interface PageArticleSummaryResponse {
  totalElements: number;
  totalPages: number;
  first: boolean;
  size: number;
  content: ArticleSummaryResponseDto[];
  number: number;
  sort: SortObject;
  numberOfElements: number;
  pageable: PageableObject;
  last: boolean;
  empty: boolean;
}

export interface SortObject {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface PageableObject {
  offset: number;
  sort: SortObject;
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
}

export interface ArticleDetailResponseDto {
  id: number;
  author: User;
  imageUrl: string;
  mealDate: Date;
  restaurant: KakaoRestaurantResponseDto;
  likeCount: number;
  commentCount: number;
  likedByMe: boolean;
  createdAt: Date;
  expiresAt: Date;
}

export interface ArticlePostRequestDto {
  imageUrl: string;
  mealDate: ISODateString;
  restaurant: KakaoRestaurantResponseDto;
  taggedMembersId: number[];
  foodAnalysis?: FoodAnalysisResultDto;
}

export interface FoodAnalysisResultDto {
  code: string;
  label: string;
  confidence: number;
  tsUtc?: string;
}
