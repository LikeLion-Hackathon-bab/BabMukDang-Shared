import { z } from "zod";
import { ISODateStringSchema, ISODateTimeStringSchema } from "../../common/schema/date.schema";
import { ArticleIdSchema, CommentIdSchema, MemberIdSchema } from "../../common/schema/id.schema";
import { PageResponseSchema } from "../../common/schema/pagination.schema";
import { MemberResponseSchema } from "../../member/schema/member.schema";
import { RestaurantSchema } from "../../restaurant/schema/restaurant.schema";

export const FoodAnalysisResultSchema = z.object({
  code: z.string(),
  label: z.string(),
  confidence: z.number().min(0).max(1),
  tsUtc: ISODateTimeStringSchema.optional(),
});

export const ArticlePostRequestSchema = z.object({
  imageUrl: z.string().url(),
  mealDate: ISODateStringSchema,
  restaurant: RestaurantSchema,
  taggedMemberIds: z.array(MemberIdSchema).default([]),
  foodAnalysis: FoodAnalysisResultSchema.optional(),
});

export const CreateArticleResponseSchema = z.object({
  articleId: ArticleIdSchema,
});

export const CommentPostRequestSchema = z.object({
  content: z.string().min(1).max(500),
  parentCommentId: CommentIdSchema.nullish(),
});

export const CreateCommentResponseSchema = z.object({
  commentId: CommentIdSchema,
});

export const CommentResponseSchema = z.object({
  commentId: CommentIdSchema,
  author: MemberResponseSchema,
  parentCommentId: CommentIdSchema.nullable(),
  content: z.string(),
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
});

export const ArticleCoreSchema = z.object({
  articleId: ArticleIdSchema,
  author: MemberResponseSchema,
  imageUrl: z.string().url(),
  mealDate: ISODateStringSchema,
  restaurant: RestaurantSchema,
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
  expiresAt: ISODateTimeStringSchema,
  taggedMembers: z.array(MemberResponseSchema),
});

export const ArticleSummaryResponseSchema = ArticleCoreSchema.extend({
  likeCount: z.number().int().min(0),
  commentCount: z.number().int().min(0),
  likedByMe: z.boolean(),
});

export const ArticleDetailResponseSchema = ArticleSummaryResponseSchema.extend({
  comments: z.array(CommentResponseSchema).optional(),
});

export const PageArticleSummaryResponseSchema = PageResponseSchema(
  ArticleSummaryResponseSchema
);

export const PresignUploadResponseSchema = z.object({
  key: z.string(),
  putUrl: z.string().url(),
  cdnUrl: z.string().url(),
});
