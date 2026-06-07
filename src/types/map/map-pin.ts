import { ISODateTimeString, RestaurantId } from "../common";
import { RecruitStatus } from "../recruit";

/**
 * 지도 핀 계약. 식당 핀(Article 파생)과 모임 핀(Recruit 파생)을 한 타입으로 표현한다.
 * 결정 문서: docs/roadmap/map-pin-feature-decision.md
 */

export type MapPinType = "ARTICLE" | "RECRUIT";

/** 핀 작성자. friend 도메인과 동일한 표현(memberId/userName)을 사용한다. */
export interface MapPinAuthor {
  memberId: number;
  userName: string;
  profileImageUrl: string;
}

export interface MapPinResponseDto {
  /** 'article:{id}' | 'recruit:{id}' 형식의 합성 식별자. */
  pinId: string;
  type: MapPinType;
  lat: number;
  lng: number;
  /** 식당명 또는 모임 장소명. */
  placeName: string;
  author: MapPinAuthor;
  /** 클라이언트 자체 만료 제거용. */
  expiresAt: ISODateTimeString;

  // type === 'ARTICLE'
  articleId?: number;
  imageUrl?: string;
  mealDate?: ISODateTimeString;

  // type === 'RECRUIT'
  recruitId?: number;
  meetingAt?: ISODateTimeString;
  recruitStatus?: RecruitStatus;
  targetCount?: number;
  participantCount?: number;
}

export interface FriendRestaurantVisitor {
  memberId: number;
  userName: string;
  profileImageUrl: string;
  lastVisitAt: ISODateTimeString;
}

/** 친구가 다녀간 음식점 집계. */
export interface FriendRestaurantResponseDto {
  restaurantId: RestaurantId;
  placeName: string;
  lat: number;
  lng: number;
  address: string;
  visitCount: number;
  /** 최근 방문 친구(최대 5명). */
  visitors: FriendRestaurantVisitor[];
}

/** 지도 핀 SSE 이벤트 이름. */
export type MapPinSseEvent =
  | "map-pin:created"
  | "map-pin:updated"
  | "map-pin:deleted";

export interface MapPinDeletedData {
  pinId: string;
  type: MapPinType;
}

export interface MapPinCreatedPayload {
  event: "map-pin:created";
  data: MapPinResponseDto;
}

export interface MapPinUpdatedPayload {
  event: "map-pin:updated";
  data: MapPinResponseDto;
}

export interface MapPinDeletedPayload {
  event: "map-pin:deleted";
  data: MapPinDeletedData;
}

export type MapPinSsePayload =
  | MapPinCreatedPayload
  | MapPinUpdatedPayload
  | MapPinDeletedPayload;

/** GET /map/pins, /map/pins/nearby 쿼리 파라미터. */
export interface MapPinQuery {
  type?: MapPinType | "ALL";
  days?: number;
  lat?: number;
  lng?: number;
  radiusKm?: number;
}
