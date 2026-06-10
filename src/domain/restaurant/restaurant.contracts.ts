import { z } from "zod";
import { KakaoPlaceRawSchema, RestaurantSchema } from "./restaurant.schema";

export type RestaurantResponse = z.infer<typeof RestaurantSchema>;

/** External Kakao adapter boundary only. Do not use inside app DTOs. */
export type KakaoPlaceRaw = z.infer<typeof KakaoPlaceRawSchema>;
