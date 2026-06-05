export interface InvitationPostRequest {
  inviteeId: number;
  message: string;
}

export interface InvitationResponse {
  invitationId: number;
  inviterName: string;
  inviterProfileImageUrl?: string;
}
