import { User } from "../profile";

export interface CommentResponseDto {
  commentId: number;
  author: User;
  parentCommentId: number | null;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentPostRequestDto {
  content: string;
  parentCommentId?: number;
}

export interface Comment extends CommentResponseDto {
  replies?: CommentResponseDto[]; // 트리 변환 후에만 생김
}
