import { z } from "zod";
import { ArticlePostRequestSchema, CommentPostRequestSchema } from "../schema/article.schema";

export type ArticlePostRequest = z.infer<typeof ArticlePostRequestSchema>;
export type ArticlePostRequestDto = ArticlePostRequest;
export type CommentPostRequest = z.infer<typeof CommentPostRequestSchema>;
export type CommentPostRequestDto = CommentPostRequest;
