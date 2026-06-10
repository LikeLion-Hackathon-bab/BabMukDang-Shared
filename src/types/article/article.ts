import { ArticleSummaryResponse } from "@/article";

export type { CreateArticleRequest as ArticlePostRequestDto } from "@/article";
export type {
  ArticleDetailResponse as ArticleDetailResponseDto,
  ArticleSummaryResponse as ArticleSummaryResponseDto,
  FoodAnalysisResult as FoodAnalysisResultDto,
  PageArticleSummaryResponse,
} from "@/article/article.contracts";

/** @deprecated Use ArticleSummaryResponseDto or ArticleDetailResponseDto. */
export type Article = ArticleSummaryResponse;
