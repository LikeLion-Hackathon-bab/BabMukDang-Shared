import { z } from "zod";
import { RoomSocketClientEventSchemas, RoomSocketServerEventSchemas } from "@/room/schema";

export type EventPayloadMapFromSchemas<T extends Record<string, z.ZodTypeAny>> = {
  [K in keyof T]: z.infer<T[K]>;
};

export type EventMapFromPayloadMap<T extends Record<string, unknown>> = {
  [K in keyof T]: (payload: T[K]) => void;
};

export type EventArgsFromPayloadMap<T extends Record<string, unknown>> = {
  [K in keyof T]: [payload: T[K]];
};

export type RoomClientPayloadMap = EventPayloadMapFromSchemas<
  typeof RoomSocketClientEventSchemas
>;
export type RoomServerPayloadMap = EventPayloadMapFromSchemas<
  typeof RoomSocketServerEventSchemas
>;

export type RoomClientToServerEvents = EventMapFromPayloadMap<RoomClientPayloadMap>;
export type RoomServerToClientEvents = EventMapFromPayloadMap<RoomServerPayloadMap>;

export type RoomClientEventName = keyof RoomClientPayloadMap & string;
export type RoomServerEventName = keyof RoomServerPayloadMap & string;

export type RoomClientPayload<E extends RoomClientEventName> = RoomClientPayloadMap[E];
export type RoomServerPayload<E extends RoomServerEventName> = RoomServerPayloadMap[E];

export type RoomClientEventArgs = EventArgsFromPayloadMap<RoomClientPayloadMap>;
export type RoomServerEventArgs = EventArgsFromPayloadMap<RoomServerPayloadMap>;
