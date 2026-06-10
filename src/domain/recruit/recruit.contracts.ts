import z from "zod";
import {
  CreateRecruitRequestSchema,
  RecruitListQuerySchema,
  CreateRecruitResponseSchema,
  RecruitListResponseSchema,
  RecruitSortBySchema,
  RecruitStatusSchema,
} from "./recruit.schema";

// request
export type CreateRecruitRequest = z.infer<typeof CreateRecruitRequestSchema>;
export type RecruitListQuery = z.infer<typeof RecruitListQuerySchema>;

// response
export type RecruitListResponse = z.infer<typeof RecruitListResponseSchema>;
export type CreateRecruitResponse = z.infer<typeof CreateRecruitResponseSchema>;

// etc
export type RecruitSortBy = z.infer<typeof RecruitSortBySchema>;
export type RecruitStatus = z.infer<typeof RecruitStatusSchema>;
