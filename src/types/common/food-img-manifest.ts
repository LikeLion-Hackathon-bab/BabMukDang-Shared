export interface Category {
  id: string;
  name: string;
  aspectRatio: number;
  placeholder: { blurhash: string; thumbhashDataURL: string };
  images: {
    src: string;
    avifSrcset: string;
  };
  priority?: boolean;
}
export interface Item {
  name: string;
  aspectRatio: number;
  placeholder: { blurhash: string; thumbhashDataURL: string };
  images: {
    src: string;
    avifSrcset: string;
    sizes?: string;
  };
  priority?: boolean;
}
