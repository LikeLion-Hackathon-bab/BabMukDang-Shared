import { z } from "zod";
import {
  PageRequestSchema,
  PageResponseSchema,
  PageableObjectSchema,
  SortObjectSchema,
} from "../schema/pagination.schema";

export type PageRequest = z.infer<typeof PageRequestSchema>;
export type SortObject = z.infer<typeof SortObjectSchema>;
export type PageableObject = z.infer<typeof PageableObjectSchema>;
export type PageResponse<T> = z.infer<ReturnType<typeof PageResponseSchema<z.ZodType<T>>>>;
