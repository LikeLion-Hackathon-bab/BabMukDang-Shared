import { z } from "zod";
import {
  ArticleDetailResponseSchema,
  ArticleSummaryResponseSchema,
  CreateArticleResponseSchema,
  CreateCommentResponseSchema,
  FoodAnalysisResultSchema,
  PageArticleSummaryResponseSchema,
  PresignUploadResponseSchema,
} from "../schema/article.schema";

export type FoodAnalysisResult = z.infer<typeof FoodAnalysisResultSchema>;
export type FoodAnalysisResultDto = FoodAnalysisResult;
export type CreateArticleResponse = z.infer<typeof CreateArticleResponseSchema>;
export type CreateCommentResponse = z.infer<typeof CreateCommentResponseSchema>;
export type ArticleSummaryResponse = z.infer<typeof ArticleSummaryResponseSchema>;
export type ArticleSummaryResponseDto = ArticleSummaryResponse;
export type ArticleDetailResponse = z.infer<typeof ArticleDetailResponseSchema>;
export type ArticleDetailResponseDto = ArticleDetailResponse;
export type PageArticleSummaryResponse = z.infer<typeof PageArticleSummaryResponseSchema>;
export type PresignArticleResponse = z.infer<typeof PresignUploadResponseSchema>;
export type PresignProfileResponse = z.infer<typeof PresignUploadResponseSchema>;
