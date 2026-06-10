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

export type {
  PresignArticleResponse,
  PresignProfileResponse,
} from "../../domain/article/article.contracts";
