import { z } from "zod";

export const PageQuerySchema = z.object({
  page: z.number().int().min(0).optional().default(0),
  size: z.number().int().min(1).max(100).optional().default(20),
});

export const PageMetaSchema = z.object({
  page: z.number().int().min(0),
  size: z.number().int().min(1),
  totalItems: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrevious: z.boolean(),
});

export const PageResponseSchema = <TItem extends z.ZodTypeAny>(item: TItem) =>
  z.object({
    items: z.array(item),
    meta: PageMetaSchema,
  });

export const SortDirectionSchema = z.enum(["asc", "desc"]);
