import { z } from "zod";
import {
  ArticleCommentSchema,
  ArticleCoreSchema,
  ArticleDetailResponseSchema,
  ArticleLikeResponseSchema,
  ArticleSummaryResponseSchema,
  FoodAnalysisResultSchema,
  PageArticleSummaryResponseSchema,
  ArticleListQuerySchema,
  CreateArticleRequestSchema,
  ArticleSortBySchema,
  CreateCommentRequestSchema,
  UploadArticleImageRequestSchema,
  UploadArticleImageResponseSchema,
} from "./article.schema";

export type CreateArticleRequest = z.infer<typeof CreateArticleRequestSchema>;
export type CreateCommentRequest = z.infer<typeof CreateCommentRequestSchema>;
export type ArticleSortBy = z.infer<typeof ArticleSortBySchema>;
export type ArticleListQueryRequest = z.infer<typeof ArticleListQuerySchema>;

export type FoodAnalysisResult = z.infer<typeof FoodAnalysisResultSchema>;
export type ArticleSummaryResponse = z.infer<typeof ArticleSummaryResponseSchema>;
export type ArticleLikeResponse = z.infer<typeof ArticleLikeResponseSchema>;
export type ArticleDetailResponse = z.infer<typeof ArticleDetailResponseSchema>;
export type PageArticleSummaryResponse = z.infer<typeof PageArticleSummaryResponseSchema>;
export type UploadArticleImageResponse = z.infer<typeof UploadArticleImageResponseSchema>;
export type UploadArticleImageeRquest = z.infer<typeof UploadArticleImageRequestSchema>;

export type ArticleCore = z.infer<typeof ArticleCoreSchema>;
export type ArticleComment = z.infer<typeof ArticleCommentSchema>;
