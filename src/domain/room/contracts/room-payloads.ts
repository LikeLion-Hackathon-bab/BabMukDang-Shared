import { z } from "zod";
import {
  ChatMessageRequestSchema,
  ChatMessageResponseSchema,
  FinalStateSchema,
  InvitationRoomStageSchema,
  LocationCandidateSchema,
  MenuSchema,
  ParticipantSchema,
  PhaseDataBroadcastSchema,
  ReadyStateRequestSchema,
  MatchingNotificationKindSchema,
  MatchingNotificationSchema,
  RoomAccessResponseSchema,
  RecruitRoomStageSchema,
  RoomAssignedResponseSchema,
  RoomInitialStateSchema,
  RoomSocketErrorSchema,
  RoomTypeSchema,
} from "../schema/room.schema";

export type Menu = z.infer<typeof MenuSchema>;
export type MenuCode = Menu["code"];
export type LocationCandidate = z.infer<typeof LocationCandidateSchema>;
export type LocationId = LocationCandidate["locationId"];
export type Participant = z.infer<typeof ParticipantSchema>;
export type RecruitRoomStage = z.infer<typeof RecruitRoomStageSchema>;
export type InvitationRoomStage = z.infer<typeof InvitationRoomStageSchema>;
export type RoomType = z.infer<typeof RoomTypeSchema>;
export type MatchingNotificationKind = z.infer<typeof MatchingNotificationKindSchema>;
export type MatchingNotification = z.infer<typeof MatchingNotificationSchema>;
export type ReadyStateRequest = z.infer<typeof ReadyStateRequestSchema>;
export type ChatMessageRequest = z.infer<typeof ChatMessageRequestSchema>;
export type ChatMessageResponse = z.infer<typeof ChatMessageResponseSchema>;
export type RoomAssignedResponse = z.infer<typeof RoomAssignedResponseSchema>;
export type RoomAccessResponse = z.infer<typeof RoomAccessResponseSchema>;
export type RoomSocketError = z.infer<typeof RoomSocketErrorSchema>;
export type FinalState = z.infer<typeof FinalStateSchema>;
export type RoomInitialState = z.infer<typeof RoomInitialStateSchema>;
export type PhaseDataBroadcast = z.infer<typeof PhaseDataBroadcastSchema>;
