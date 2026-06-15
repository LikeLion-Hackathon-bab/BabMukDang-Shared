import { z } from "zod";
import {
  AddLocationCandidateRequestSchema,
  ChatMessageRequestSchema,
  ChatMessageResponseSchema,
  ConfirmDecisionRequestSchema,
  DatePicksUpdateResponseSchema,
  DecisionCandidateUpdateSchema,
  DecisionReasonSchema,
  DecisionSnapshotIdSchema,
  DecisionStatusSchema,
  ExcludeMenuRequestSchema,
  ExcludeMenuUpdateResponseSchema,
  FinalFieldSchema,
  FinalStateSchema,
  InvitationRoomStageSchema,
  LocationCandidateAddUpdateResponseSchema,
  LocationCandidateSchema,
  LocationCandidateSourceSchema,
  LocationCandidateVoteUpdateResponseSchema,
  LocationIdSchema,
  MenuCandidateSchema,
  MenuCandidateSourceSchema,
  MenuCandidatesUpdateSchema,
  MenuCodeSchema,
  MenuIdSchema,
  MenuPickUpdateResponseSchema,
  MenuSchema,
  ParticipantSchema,
  PhaseDataBroadcastSchema,
  PickDateRequestSchema,
  PickMenuRequestSchema,
  PickRestaurantRequestSchema,
  PickTimesRequestSchema,
  PreferMenuRequestSchema,
  PreferMenuUpdateResponseSchema,
  ReadyStateChangedSchema,
  ReadyStateRequestSchema,
  RecruitRoomStageSchema,
  ReopenTaskRequestSchema,
  RestaurantCandidatesUpdateSchema,
  RestaurantPickUpdateResponseSchema,
  RoomAccessResponseSchema,
  RoomAssignedResponseSchema,
  RoomInitialStateSchema,
  RoomKeySchema,
  RoomPhaseSchema,
  RoomProgressSchema,
  RoomSocketErrorSchema,
  RoomTaskKeySchema,
  RoomTaskProgressSchema,
  RoomTaskStatusSchema,
  RoomTypeSchema,
  RoomVersionSchema,
  SourceIdSchema,
  TimePicksUpdateResponseSchema,
  VoteLocationRequestSchema,
  MatchingNotificationKindSchema,
  MatchingNotificationSchema,
  DateStringSchema,
  TimeStringSchema,
  DateTimeStringSchema,
  LatitudeSchema,
  LongitudeSchema,
} from "../schema/room.schema";

export type Menu = z.infer<typeof MenuSchema>;
export type MenuCode = z.infer<typeof MenuCodeSchema>;
export type MenuId = z.infer<typeof MenuIdSchema>;
export type MenuCandidateId = z.infer<typeof MenuCandidateSchema>["id"];
export type MenuCandidateSource = z.infer<typeof MenuCandidateSourceSchema>;
export type MenuCandidate = z.infer<typeof MenuCandidateSchema>;
export type LocationCandidate = z.infer<typeof LocationCandidateSchema>;
export type LocationId = z.infer<typeof LocationIdSchema>;
export type LocationCandidateId = LocationId;
export type LocationCandidateSource = z.infer<typeof LocationCandidateSourceSchema>;
export type Participant = z.infer<typeof ParticipantSchema>;
export type RecruitRoomStage = z.infer<typeof RecruitRoomStageSchema>;
export type InvitationRoomStage = z.infer<typeof InvitationRoomStageSchema>;
export type RoomType = z.infer<typeof RoomTypeSchema>;
export type RoomPhase = z.infer<typeof RoomPhaseSchema>;
export type RoomTaskKey = z.infer<typeof RoomTaskKeySchema>;
export type RoomTaskStatus = z.infer<typeof RoomTaskStatusSchema>;
export type RoomTaskProgress = z.infer<typeof RoomTaskProgressSchema>;
export type RoomProgress = z.infer<typeof RoomProgressSchema>;
export type RoomKey = z.infer<typeof RoomKeySchema>;
export type SourceId = z.infer<typeof SourceIdSchema>;
export type RoomVersion = z.infer<typeof RoomVersionSchema>;
export type DateString = z.infer<typeof DateStringSchema>;
export type TimeString = z.infer<typeof TimeStringSchema>;
export type DateTimeString = z.infer<typeof DateTimeStringSchema>;
export type Latitude = z.infer<typeof LatitudeSchema>;
export type Longitude = z.infer<typeof LongitudeSchema>;
export type DecisionSnapshotId = z.infer<typeof DecisionSnapshotIdSchema>;
export type DecisionStatus = z.infer<typeof DecisionStatusSchema>;
export type DecisionReason = z.infer<typeof DecisionReasonSchema>;
export type FinalField = z.infer<typeof FinalFieldSchema>;
export type MatchingNotificationKind = z.infer<typeof MatchingNotificationKindSchema>;
export type MatchingNotification = z.infer<typeof MatchingNotificationSchema>;
export type ReadyStateRequest = z.infer<typeof ReadyStateRequestSchema>;
export type ReadyStateChanged = z.infer<typeof ReadyStateChangedSchema>;
export type ChatMessageRequest = z.infer<typeof ChatMessageRequestSchema>;
export type ChatMessageResponse = z.infer<typeof ChatMessageResponseSchema>;
export type AddLocationCandidateRequest = z.infer<typeof AddLocationCandidateRequestSchema>;
export type VoteLocationRequest = z.infer<typeof VoteLocationRequestSchema>;
export type ExcludeMenuRequest = z.infer<typeof ExcludeMenuRequestSchema>;
export type PreferMenuRequest = z.infer<typeof PreferMenuRequestSchema>;
export type PickMenuRequest = z.infer<typeof PickMenuRequestSchema>;
export type PickRestaurantRequest = z.infer<typeof PickRestaurantRequestSchema>;
export type PickTimesRequest = z.infer<typeof PickTimesRequestSchema>;
export type PickDateRequest = z.infer<typeof PickDateRequestSchema>;
export type ConfirmDecisionRequest = z.infer<typeof ConfirmDecisionRequestSchema>;
export type ReopenTaskRequest = z.infer<typeof ReopenTaskRequestSchema>;
export type RoomAssignedResponse = z.infer<typeof RoomAssignedResponseSchema>;
export type RoomAccessResponse = z.infer<typeof RoomAccessResponseSchema>;
export type RoomSocketError = z.infer<typeof RoomSocketErrorSchema>;
export type FinalState = z.infer<typeof FinalStateSchema>;
export type RoomInitialState = z.infer<typeof RoomInitialStateSchema>;
export type PhaseDataBroadcast = z.infer<typeof PhaseDataBroadcastSchema>;
export type TimePicksUpdateResponse = z.infer<typeof TimePicksUpdateResponseSchema>;
export type DatePicksUpdateResponse = z.infer<typeof DatePicksUpdateResponseSchema>;
export type LocationCandidateAddUpdateResponse = z.infer<typeof LocationCandidateAddUpdateResponseSchema>;
export type LocationCandidateVoteUpdateResponse = z.infer<typeof LocationCandidateVoteUpdateResponseSchema>;
export type ExcludeMenuUpdateResponse = z.infer<typeof ExcludeMenuUpdateResponseSchema>;
export type PreferMenuUpdateResponse = z.infer<typeof PreferMenuUpdateResponseSchema>;
export type MenuPickUpdateResponse = z.infer<typeof MenuPickUpdateResponseSchema>;
export type RestaurantPickUpdateResponse = z.infer<typeof RestaurantPickUpdateResponseSchema>;
export type RoomDecisionSnapshot = z.infer<typeof DecisionCandidateUpdateSchema>["snapshots"][number];
export type DecisionCandidateUpdate = z.infer<typeof DecisionCandidateUpdateSchema>;
export type MenuCandidatesUpdate = z.infer<typeof MenuCandidatesUpdateSchema>;
export type RestaurantCandidatesUpdate = z.infer<typeof RestaurantCandidatesUpdateSchema>;
