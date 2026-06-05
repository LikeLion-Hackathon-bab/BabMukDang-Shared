import {
  WaitingInitialState,
  TimeInitialState,
  DateInitialState,
  LocationAddInitialState,
  LocationVoteInitialState,
  ExcludeMenuInitialState,
  MenuInitialState,
  RestaurantInitialState,
  PhaseDataBroadcastDto,
  RoomInitialState,
} from "./initial-state-client";
import {
  ChatMessageResponseItem,
  RestaurantPickUpdateResponseDto,
} from "./update-response";
import {
  TimePicksUpdateResponseDto,
  DatePicksUpdateResponseDto,
  LocationCandidateAddUpdateResponseDto,
  LocationCandidateVoteUpdateResponseDto,
  ExcludeMenuUpdateResponseDto,
  MenuPickUpdateResponseDto,
  ReadyStateChangedDto,
} from "./update-response";
import { FinalState, Participant } from "./types";
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
} from "./update-request";

export interface SocketClientEventMap {
  // generic debug (원하면 사용)
  any: [event: string, ...args: any[]];

  // 대기실/공통
  "ready-state-changed": ReadyStateChangedDto;
  "stage-changed": PhaseDataBroadcastDto;
  "join-room": RoomInitialState;
  "room-assigned": { roomId: string };

  // 초기 상태들
  "waiting-initial-state": WaitingInitialState;
  "time-initial-state": TimeInitialState;
  "date-initial-state": DateInitialState;
  "location-add-initial-state": LocationAddInitialState;
  "location-vote-initial-state": LocationVoteInitialState;
  "exclude-menu-initial-state": ExcludeMenuInitialState;
  "menu-initial-state": MenuInitialState;
  "restaurant-initial-state": RestaurantInitialState;

  // 업데이트 스트림
  "time-updated": TimePicksUpdateResponseDto;
  "date-updated": DatePicksUpdateResponseDto;
  "location-add-updated": LocationCandidateAddUpdateResponseDto;
  "location-vote-updated": LocationCandidateVoteUpdateResponseDto;
  "exclude-menu-updated": ExcludeMenuUpdateResponseDto;
  "menu-pick-updated": MenuPickUpdateResponseDto;
  "restaurant-pick-updated": RestaurantPickUpdateResponseDto;

  // 최종 상태
  "final-state-response": FinalState;

  // 채팅
  "chat-message": ChatMessageResponseItem;
}
export interface InitialStateEventPayloadMap {
  "waiting-initial-state": WaitingInitialState;
  "time-initial-state": TimeInitialState;
  "date-initial-state": DateInitialState;
  "location-add-initial-state": LocationAddInitialState;
  "location-vote-initial-state": LocationVoteInitialState;
  "exclude-menu-initial-state": ExcludeMenuInitialState;
  "menu-initial-state": MenuInitialState;
  "restaurant-initial-state": RestaurantInitialState;
}
export type SocketServerEventMap = {
  "ready-state": ReadyStateRequestDto;
  "chat-message": ChatMessageRequestDto;
  "add-location-candidate": LocationCandidateAddRequestDto;
  //   "remove-location": CandidateIdDto;
  "vote-location": LocationCandidateVoteRequestDto;
  "exclude-menu": ExcludeMenuRequestDto;
  "pick-menu": MenuPickRequestDto;
  "pick-restaurant": RestaurantPickRequestDto;
  "pick-times": TimePicksRequestDto;
  "pick-date": DatePicksRequestDto;
};

/**
 * socket.io `Socket<ListenEvents, EmitEvents>` 제네릭에 그대로 넣을 수 있는
 * 함수 시그니처 이벤트 맵. 클라이언트는 서버가 보내는 이벤트를 수신(listen)하므로
 * `SocketClientEventMap`을 ListenEvents로, 서버로 보내는 이벤트는
 * `SocketServerEventMap`을 EmitEvents로 사용한다.
 *
 * `any`(onAny 디버그용 튜플)는 실제 이벤트가 아니므로 제외한다.
 */
export type ServerToClientEvents = {
  [K in keyof Omit<SocketClientEventMap, "any">]: (
    data: SocketClientEventMap[K]
  ) => void;
};

export type ClientToServerEvents = {
  [K in keyof SocketServerEventMap]: (data: SocketServerEventMap[K]) => void;
};

type SocketRequestHandler<K extends keyof SocketServerEventMap> = (
  data: SocketServerEventMap[K]
) => void;

export type SocketRequestHandlers = {
  [K in keyof SocketServerEventMap]?: SocketRequestHandler<K>;
};

type SocketResponseHandler<K extends keyof SocketClientEventMap> = (
  data: SocketClientEventMap[K]
) => void;
export type SocketResponseHandlers = {
  [K in keyof SocketClientEventMap]?: SocketResponseHandler<K>;
};
