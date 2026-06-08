import { ArticlePostRequestDto } from "./article";

export type UploadAndPostVars = {
  currentUserId: string;
  file: File;
  // cdnUrl을 받아서 최종 ArticlePostRequest를 만드는 빌더
  buildRequest: (cdnUrl: string) => ArticlePostRequestDto;
};

export type UploadAndRegisterVars = {
  currentUserId: string;
  file: File;
  // cdnUrl을 받아서 최종 RegisterRequest를 만드는 빌더
  buildRequest: (cdnUrl: string) => {
    imageUrl: string;
    username: string;
    preferences: string[];
    cantEat: string[];
  };
};

export interface PresingArticleResponse {
  key: string;
  putUrl: string;
  cdnUrl: string;
}

export interface PresingProfileResponse {
  key: string;
  putUrl: string;
  cdnUrl: string;
}
