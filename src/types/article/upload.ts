import type { ArticlePostRequestDto } from "./article";

export type UploadAndPostVars = {
  currentMemberId: number;
  file: File;
  buildRequest: (cdnUrl: string) => ArticlePostRequestDto;
};

export type UploadAndRegisterVars = {
  currentMemberId: number;
  file: File;
  buildRequest: (cdnUrl: string) => {
    imageUrl: string;
    username: string;
    preferences: string[];
    cantEat: string[];
  };
};

export type { PresignArticleResponse } from "@/article/article.contracts";
export type { PresignProfileResponseSchema } from "@/member";
