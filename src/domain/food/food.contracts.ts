import { z } from "zod";
import {
  AiClassFoodCodeMappingSchema,
  AiClassToFoodCodeMapManifestSchema,
  CuisineTagSchema,
  FoodAiClassMappingStatusSchema,
  FoodCodeManifestImageSchema,
  FoodCodeManifestItemSchema,
  FoodCodeManifestSchema,
  FoodGranularitySchema,
  FoodImageIndexItemSchema,
  FoodImageIndexManifestSchema,
  FoodResolvedMatchSourceSchema,
  FoodResolveQuerySchema,
  FoodResolveResponseSchema,
  FoodSearchQuerySchema,
  FoodSearchResponseSchema,
  ResolvedFoodCodeSchema,
} from "./food.schema";

export type FoodGranularity = z.infer<typeof FoodGranularitySchema>;
export type CuisineTag = z.infer<typeof CuisineTagSchema>;
export type FoodResolvedMatchSource = z.infer<typeof FoodResolvedMatchSourceSchema>;
export type FoodCodeManifestImage = z.infer<typeof FoodCodeManifestImageSchema>;
export type FoodCodeManifestItem = z.infer<typeof FoodCodeManifestItemSchema>;
export type FoodCodeManifest = z.infer<typeof FoodCodeManifestSchema>;
export type FoodImageIndexItem = z.infer<typeof FoodImageIndexItemSchema>;
export type FoodImageIndexManifest = z.infer<typeof FoodImageIndexManifestSchema>;
export type FoodAiClassMappingStatus = z.infer<typeof FoodAiClassMappingStatusSchema>;
export type AiClassFoodCodeMapping = z.infer<typeof AiClassFoodCodeMappingSchema>;
export type AiClassToFoodCodeMapManifest = z.infer<
  typeof AiClassToFoodCodeMapManifestSchema
>;
export type ResolvedFoodCode = z.infer<typeof ResolvedFoodCodeSchema>;
export type FoodResolveQuery = z.infer<typeof FoodResolveQuerySchema>;
export type FoodSearchQuery = z.infer<typeof FoodSearchQuerySchema>;
export type FoodResolveResponse = z.infer<typeof FoodResolveResponseSchema>;
export type FoodSearchResponse = z.infer<typeof FoodSearchResponseSchema>;

export const FOOD_CODE_MANIFEST_PATH = "/manifests/food-code-manifest.json" as const;
export const AI_CLASS_TO_FOOD_CODE_MAP_PATH =
  "/manifests/ai-class-to-food-code-map.json" as const;
export const FOOD_IMAGE_INDEX_PATH = "/manifests/food-image-index.json" as const;
