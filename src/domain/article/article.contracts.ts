import { z } from "zod";
import {
  ArticleCommentSchema,
  ArticleCoreSchema,
  ArticleDetailResponseSchema,
  ArticleSummaryResponseSchema,
  FoodAnalysisResultSchema,
  PageArticleSummaryResponseSchema,
  ArticleListQuerySchema,
  ArticlePostRequestSchema,
  ArticleSortBySchema,
  CommentPostRequestSchema,
  PresignArticleResponseSchema,
} from "./article.schema";

export type ArticlePostRequest = z.infer<typeof ArticlePostRequestSchema>;
export type CommentPostRequest = z.infer<typeof CommentPostRequestSchema>;
export type ArticleSortBy = z.infer<typeof ArticleSortBySchema>;
export type ArticleListQueryRequest = z.infer<typeof ArticleListQuerySchema>;

export type FoodAnalysisResult = z.infer<typeof FoodAnalysisResultSchema>;
export type ArticleSummaryResponse = z.infer<typeof ArticleSummaryResponseSchema>;
export type ArticleDetailResponse = z.infer<typeof ArticleDetailResponseSchema>;
export type PageArticleSummaryResponse = z.infer<typeof PageArticleSummaryResponseSchema>;
export type PresignArticleResponse = z.infer<typeof PresignArticleResponseSchema>;

export type ArticleCore = z.infer<typeof ArticleCoreSchema>;
export type ArticleComment = z.infer<typeof ArticleCommentSchema>;
