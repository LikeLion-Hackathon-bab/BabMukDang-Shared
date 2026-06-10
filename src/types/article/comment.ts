export type { CommentPostRequest as CommentPostRequestDto } from "@/article/contracts/article.request";
export type { CreateCommentResponse } from "@/article";
import type { CommentResponseSchema } from "@/article";

export type CommentResponseDto = z.infer<typeof CommentResponseSchema>;
export interface Comment extends CommentResponseDto {
  replies?: CommentResponseDto[];
}
