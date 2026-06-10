import type { z } from "zod";
import type {
  ChatMessageResponseSchema,
  DatePicksUpdateResponseSchema,
  ExcludeMenuUpdateResponseSchema,
  LocationCandidateAddUpdateResponseSchema,
  LocationCandidateVoteUpdateResponseSchema,
  MenuPickUpdateResponseSchema,
  ReadyStateChangedSchema,
  RestaurantPickUpdateResponseSchema,
  TimePicksUpdateResponseSchema,
} from "@/room/schema/room.schema";

export type ChatMessageResponseItem = z.infer<typeof ChatMessageResponseSchema>;
export type TimePicksUpdateResponseDto = z.infer<typeof TimePicksUpdateResponseSchema>;
export type DatePicksUpdateResponseDto = z.infer<typeof DatePicksUpdateResponseSchema>;
export type LocationCandidateAddUpdateResponseDto = z.infer<
  typeof LocationCandidateAddUpdateResponseSchema
>;
export type LocationCandidateVoteUpdateResponseDto = z.infer<
  typeof LocationCandidateVoteUpdateResponseSchema
>;
export type ExcludeMenuUpdateResponseDto = z.infer<typeof ExcludeMenuUpdateResponseSchema>;
export type MenuPickUpdateResponseDto = z.infer<typeof MenuPickUpdateResponseSchema>;
export type RestaurantPickUpdateResponseDto = z.infer<typeof RestaurantPickUpdateResponseSchema>;
export type RestaurantPickUpdateResponseItem = RestaurantPickUpdateResponseDto[number];
export type ReadyStateChangedDto = z.infer<typeof ReadyStateChangedSchema>;
