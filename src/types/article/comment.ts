export type { CommentPostRequest as CommentPostRequestDto } from "../../domain/article/contracts/article.request";
export type { CreateCommentResponse } from "../../domain/article/article.contracts";
import type { z } from "zod";
import type { CommentResponseSchema } from "../../domain/article/article.schema";

export type CommentResponseDto = z.infer<typeof CommentResponseSchema>;
export interface Comment extends CommentResponseDto {
  replies?: CommentResponseDto[];
}
