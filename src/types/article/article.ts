import type { ArticleSummaryResponseDto } from "../../domain/article/article.contracts";
export type { ArticlePostRequest as ArticlePostRequestDto } from "../../domain/article/contracts/article.request";
export type {
  ArticleDetailResponse as ArticleDetailResponseDto,
  ArticleSummaryResponse as ArticleSummaryResponseDto,
  FoodAnalysisResult as FoodAnalysisResultDto,
  PageArticleSummaryResponse,
} from "../../domain/article/article.contracts";
export type { PageableObject, SortObject } from "../../domain/common/contracts/pagination";

/** @deprecated Use ArticleSummaryResponseDto or ArticleDetailResponseDto. */
export type Article = ArticleSummaryResponseDto;
