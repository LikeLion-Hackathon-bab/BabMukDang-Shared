import { z } from "zod";

export const PageRequestSchema = z.object({
  page: z.number().int().min(0).default(0),
  size: z.number().int().min(1).max(100).default(20),
});

export const SortObjectSchema = z.object({
  empty: z.boolean(),
  sorted: z.boolean(),
  unsorted: z.boolean(),
});

export const PageableObjectSchema = z.object({
  offset: z.number().int().min(0),
  sort: SortObjectSchema,
  paged: z.boolean(),
  pageNumber: z.number().int().min(0),
  pageSize: z.number().int().min(1),
  unpaged: z.boolean(),
});

export const PageResponseSchema = <TItem extends z.ZodTypeAny>(item: TItem) =>
  z.object({
    totalElements: z.number().int().min(0),
    totalPages: z.number().int().min(0),
    first: z.boolean(),
    size: z.number().int().min(0),
    content: z.array(item),
    number: z.number().int().min(0),
    sort: SortObjectSchema,
    numberOfElements: z.number().int().min(0),
    pageable: PageableObjectSchema,
    last: z.boolean(),
    empty: z.boolean(),
  });
