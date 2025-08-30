export interface CommentResponseDto {
  commentId: number;
  authorId: number;
  authorUsername: string;
  parentCommentId: number | null;
  content: string;
  createdAt: string;
  profileImageUrl?: string;
}

export interface CommentPostRequestDto {
  content: string;
  parentCommentId?: number;
}

export interface Comment extends CommentResponseDto {
  replies?: CommentResponseDto[]; // 트리 변환 후에만 생김
}
