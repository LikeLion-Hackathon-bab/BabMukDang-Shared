import { z } from "zod";
import { RoomSocketClientEventSchemas, RoomSocketServerEventSchemas } from "../schema/room.schema";

export type ClientEventMapFromSchemas<T extends Record<string, z.ZodTypeAny>> = {
  [K in keyof T]: (payload: z.infer<T[K]>) => void;
};

export type RoomClientToServerEvents = ClientEventMapFromSchemas<
  typeof RoomSocketClientEventSchemas
>;

export type RoomServerToClientEvents = ClientEventMapFromSchemas<
  typeof RoomSocketServerEventSchemas
>;

/** @deprecated Use RoomServerToClientEvents. */
export type ServerToClientEvents = RoomServerToClientEvents;
/** @deprecated Use RoomClientToServerEvents. */
export type ClientToServerEvents = RoomClientToServerEvents;
