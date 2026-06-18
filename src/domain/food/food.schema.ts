import { z } from "zod";
import { FoodCodeSchema, FoodLabelSchema, ISODateTimeStringSchema } from "../common/schema";

export const FoodGranularitySchema = z.enum([
  "main_dish",
  "side_dish",
  "beverage",
  "sauce",
]);

export const CuisineTagSchema = z.enum([
  "korean",
  "western",
  "chinese",
  "japanese",
  "mexican",
  "indian",
  "asian",
  "snack",
  "dessert",
  "beverage",
  "unknown",
]);

export const FoodResolvedMatchSourceSchema = z.enum([
  "category",
  "alias",
  "lexical",
  "semantic",
]);

export const FoodCodeManifestImageSchema = z.object({
  src: z.string().min(1),
  avifSrcset: z.string().min(1).optional(),
  thumbhashDataURL: z.string().min(1).optional(),
  aspectRatio: z.number().positive().optional(),
});

export const FoodCodeManifestItemSchema = z.object({
  code: FoodCodeSchema,
  label: FoodLabelSchema,
  aliases: z.array(z.string().min(1)).default([]),
  parentCategory: z.string().min(1),
  cuisineTags: z.array(CuisineTagSchema).default([]),
  categoryTags: z.array(z.string().min(1)).default([]),
  semanticTags: z.array(z.string().min(1)).default([]),
  granularity: FoodGranularitySchema,
  searchable: z.boolean(),
  recommendable: z.boolean(),
  previewEnabled: z.boolean(),
  imageUrl: z.string().min(1).nullable().optional(),
  image: FoodCodeManifestImageSchema.nullable().optional(),
  popularity: z.number().nonnegative().optional(),
  source: z.enum(["foodname", "manual", "foodai", "legacy"]).optional(),
});

export const FoodCodeManifestSchema = z.object({
  version: z.string().min(1),
  updatedAt: ISODateTimeStringSchema,
  taxonomyVersion: z.string().min(1),
  etag: z.string().min(1).optional(),
  items: z.array(FoodCodeManifestItemSchema),
  categoryIndex: z.record(z.array(FoodCodeSchema)),
  aliasIndex: z.record(z.array(FoodCodeSchema)).optional(),
});

export const FoodImageIndexItemSchema = z.object({
  code: FoodCodeSchema,
  label: FoodLabelSchema,
  imageUrl: z.string().min(1).nullable(),
  image: FoodCodeManifestImageSchema.nullable(),
  source: z.enum(["foodname", "manual", "foodai", "legacy"]).optional(),
});

export const FoodImageIndexManifestSchema = z.object({
  version: z.string().min(1),
  updatedAt: ISODateTimeStringSchema,
  taxonomyVersion: z.string().min(1),
  items: z.array(FoodImageIndexItemSchema),
});

export const ResolvedFoodCodeSchema = z.object({
  code: FoodCodeSchema,
  label: FoodLabelSchema,
  matchedBy: FoodResolvedMatchSourceSchema,
  score: z.number(),
  granularity: FoodGranularitySchema,
  imageUrl: z.string().min(1).nullable().optional(),
});

const BooleanQuerySchema = z.preprocess((value) => {
  if (value === "true") return true;
  if (value === "false") return false;
  return value;
}, z.boolean());

export const FoodResolveQuerySchema = z.object({
  q: z.string().default(""),
  limit: z.coerce.number().int().min(1).max(100).optional().default(30),
  recommendableOnly: BooleanQuerySchema.optional().default(true),
});

export const FoodSearchQuerySchema = z.object({
  q: z.string().default(""),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
});

export const FoodResolveResponseSchema = z.object({
  query: z.string(),
  items: z.array(ResolvedFoodCodeSchema),
});

export const FoodSearchResponseSchema = FoodResolveResponseSchema;

export const FoodAiClassMappingStatusSchema = z.enum([
  "exact",
  "broad",
  "narrow",
  "merged",
  "ignored",
  "review_required",
]);

export const AiClassFoodCodeMappingSchema = z.object({
  classId: z.number().int().nonnegative(),
  aiLabel: z.string().min(1),
  aiAliases: z.array(z.string().min(1)).default([]),
  representativeCode: FoodCodeSchema.nullable(),
  candidateCodes: z.array(FoodCodeSchema).default([]),
  mappingStatus: FoodAiClassMappingStatusSchema,
  granularity: FoodGranularitySchema,
  searchable: z.boolean(),
  recommendable: z.boolean(),
  reason: z.string().min(1).optional(),
});

export const AiClassToFoodCodeMapManifestSchema = z.object({
  version: z.string().min(1),
  updatedAt: ISODateTimeStringSchema,
  modelTaxonomyVersion: z.string().min(1),
  serviceTaxonomyVersion: z.string().min(1),
  classes: z.array(AiClassFoodCodeMappingSchema),
});
