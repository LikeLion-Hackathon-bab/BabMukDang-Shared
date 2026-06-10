export type {
  RoomClientToServerEvents as ClientToServerEvents,
  RoomServerToClientEvents as ServerToClientEvents,
} from "@/room/contracts/room-events";

export {
  RoomSocketClientEventSchemas,
  RoomSocketServerEventSchemas,
} from "@/room/schema/room.schema";

export type SocketClientEventMap =
  import("../../domain/room/contracts/room-events").RoomServerToClientEvents;
export type SocketServerEventMap =
  import("../../domain/room/contracts/room-events").RoomClientToServerEvents;
export type InitialStateEventPayloadMap = Pick<SocketClientEventMap, "join-room">;
export type SocketRequestHandlers = Partial<SocketServerEventMap>;
export type SocketResponseHandlers = Partial<SocketClientEventMap>;
