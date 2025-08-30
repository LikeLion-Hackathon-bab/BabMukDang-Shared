export interface InvitationPostRequest {
  inviteeId: {
    id: number;
  };
  message: string;
}

export interface InvitationResponse {
  invitationId: number;
  inviterName: string;
  inviterProfileImageUrl?: string;
}
