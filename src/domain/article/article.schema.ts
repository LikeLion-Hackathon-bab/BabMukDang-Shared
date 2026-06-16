import { z } from "zod";
import { ISODateStringSchema, ISODateTimeStringSchema } from "@/common/schema/date.schema";
import {
  ArticleIdSchema,
  CommentIdSchema,
  FoodCodeSchema,
  FoodLabelSchema,
  FoodSchema,
  MemberIdSchema,
  MealPlanIdSchema,
} from "@/common/schema/id.schema";
import {
  PageQuerySchema,
  PageResponseSchema,
  SortDirectionSchema,
} from "@/common/schema/pagination.schema";
import { MemberCoreSchema } from "@/member/member.schema";
import { RestaurantSchema } from "@/restaurant/restaurant.schema";
import {
  UploadPresignImageRequestSchema,
  UploadPresignImageResponseSchema,
} from "@/common/contracts/upload";

export const ArticleSortBySchema = z.enum(["createdAt", "likeCount", "commentCount"]);

export const ArticleListQuerySchema = PageQuerySchema.extend({
  sortBy: ArticleSortBySchema.optional().default("createdAt"),
  direction: SortDirectionSchema.optional().default("desc"),
});
export const UploadArticleImageResponseSchema = UploadPresignImageResponseSchema.extend({});
export const UploadArticleImageRequestSchema = UploadPresignImageRequestSchema.extend({});

export const FoodAnalysisResultSchema = FoodSchema.extend({
  confidence: z.number().min(0).max(1),
  tsUtc: ISODateTimeStringSchema.optional(),
});

export const CreateArticleRequestSchema = z.object({
  imageUrl: z.string().url(),
  mealDate: ISODateStringSchema,
  restaurant: RestaurantSchema,
  taggedMemberIds: z.array(MemberIdSchema).default([]),
  foodAnalysis: FoodAnalysisResultSchema.optional(),
  mealPlanId: MealPlanIdSchema.optional(),
});

export const CreateCommentRequestSchema = z.object({
  content: z.string().min(1).max(500),
  parentCommentId: CommentIdSchema.nullish(),
});

export const ArticleCommentSchema = z.object({
  commentId: CommentIdSchema,
  author: MemberCoreSchema,
  parentCommentId: CommentIdSchema.nullable(),
  content: z.string(),
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
});

export const ArticleCoreSchema = z.object({
  articleId: ArticleIdSchema,
  author: MemberCoreSchema,
  imageUrl: z.string().url(),
  mealDate: ISODateStringSchema,
  restaurant: RestaurantSchema,
  mealPlanId: MealPlanIdSchema.nullable(),
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
  expiresAt: ISODateTimeStringSchema,
  taggedMembers: z.array(MemberCoreSchema),
});

export const ArticleSummaryResponseSchema = ArticleCoreSchema.extend({
  likeCount: z.number().int().min(0),
  commentCount: z.number().int().min(0),
  likedByMe: z.boolean(),
});

export const ArticleLikeResponseSchema = z.object({
  liked: z.boolean(),
  likeCount: z.number().int().min(0),
});

export const ArticleDetailResponseSchema = ArticleSummaryResponseSchema.extend({
  comments: z.array(ArticleCommentSchema).optional(),
});

export const PageArticleSummaryResponseSchema = PageResponseSchema(ArticleSummaryResponseSchema);
