import type { ArticleSummaryResponseDto } from "@/article/article.contracts";
export type { ArticlePostRequest as ArticlePostRequestDto } from "@/article/contracts/article.request";
export type {
  ArticleDetailResponse as ArticleDetailResponseDto,
  ArticleSummaryResponse as ArticleSummaryResponseDto,
  FoodAnalysisResult as FoodAnalysisResultDto,
  PageArticleSummaryResponse,
} from "@/article/article.contracts";
export type { PageableObject, SortObject } from "@/common/contracts/pagination";

/** @deprecated Use ArticleSummaryResponseDto or ArticleDetailResponseDto. */
export type Article = ArticleSummaryResponseDto;
