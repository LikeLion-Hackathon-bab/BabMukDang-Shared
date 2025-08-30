import { LocalTime, RestaurantInfo } from "../common";
import { User, UserId } from "../profile";

// for nestjs server
export interface Article {
  articleId: number;
  author: User;
  imageUrl: string;
  mealDate: string;
  mealTime: string;
  restaurant: RestaurantInfo;
  likeCount: number;
  commentCount: number;
  likedByMe: boolean;
  createdAt: string;
  expiresAt: string;
  taggedMemberIds: UserId[];
}
export type ArticleGetResponseDto = Article[];

// for spring server
export interface ArticleSummaryResponseDto {
  articleId: number;
  authorId: number;
  authorUsername: string;
  imageUrl: string;
  mealDate: string;
  mealTime: LocalTime;
  restaurantName: string;
  likeCount: number;
  commentCount: number;
  likedByMe: boolean;
  createdAt: string;
  expiresAt: string;
  taggedMemberIds: number[];
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
  articleId: number;
  authorId: number;
  authorUsername: string;
  imageUrl: string;
  mealDate: string;
  mealTime: LocalTime;
  restaurant: RestaurantInfo;
  likeCount: number;
  commentCount: number;
  likedByMe: boolean;
  createdAt: string;
  expiresAt: string;
}

export interface ArticlePostRequestDto {
  imageUrl: string;
  method: "ALBUM" | "CAMERA";
  mealDate: string;
  mealTime: string;
  restaurant: RestaurantInfo;
  taggedMemberIds: number[];
  camera: boolean;
  album: boolean;
}
