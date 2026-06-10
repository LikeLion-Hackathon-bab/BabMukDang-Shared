export type { CommentPostRequest as CommentPostRequestDto } from "@/article/contracts/article.request";
export type { CreateCommentResponse } from "@/article/article.contracts";
import type { CommentResponseSchema } from "@/article/article.schema";

export type CommentResponseDto = z.infer<typeof CommentResponseSchema>;
export interface Comment extends CommentResponseDto {
  replies?: CommentResponseDto[];
}
