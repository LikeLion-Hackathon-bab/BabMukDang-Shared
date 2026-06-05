/**
 * 음식 카테고리 이미지 manifest 항목.
 *
 * `BabMukDang-Img/scripts/build-images.js`가 `public/categories.json`으로
 * 출력하는 shape를 그대로 표현한다. 실제 산출물에는 `blurhash`가 없고
 * `thumbhashDataURL`만 존재하므로 `blurhash`는 optional이다.
 *
 * - `id`: `assets/raw`의 `<8자리코드>_<이름>.jpg` 파일명에서 추출한 음식 코드.
 * - `images.src`, `images.avifSrcset`: `/img/<id>.<hash>.<width>.avif` 상대 경로.
 *   CDN base URL은 소비측(Client)에서 prepend 한다.
 */
export interface Category {
  id: string;
  name: string;
  aspectRatio: number;
  placeholder: { blurhash?: string; thumbhashDataURL: string };
  images: {
    src: string;
    avifSrcset: string;
  };
  priority?: boolean;
}

/** `id` 없이 단일 이미지 렌더링에 쓰는 manifest 항목. */
export interface Item {
  name: string;
  aspectRatio: number;
  placeholder: { blurhash?: string; thumbhashDataURL: string };
  images: {
    src: string;
    avifSrcset: string;
    sizes?: string;
  };
  priority?: boolean;
}
