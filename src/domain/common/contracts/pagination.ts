import { z } from "zod";
import {
  PageMetaSchema,
  PageQuerySchema,
  PageResponseSchema,
  SortDirectionSchema,
} from "../schema/pagination.schema";

export type PageRequest = z.infer<typeof PageQuerySchema>;
export type PageResponse<TItem> = z.infer<ReturnType<typeof PageResponseSchema<z.ZodType<TItem>>>>;
export type PageMeta = z.infer<typeof PageMetaSchema>;
export type SortDirection = z.infer<typeof SortDirectionSchema>;
