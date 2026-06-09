import { z } from "zod";
import { KakaoPlaceRawSchema, RestaurantSchema } from "../schema/restaurant.schema";

export type RestaurantResponse = z.infer<typeof RestaurantSchema>;
export type RestaurantDto = RestaurantResponse;

/** External Kakao adapter boundary only. Do not use inside app DTOs. */
export type KakaoPlaceRaw = z.infer<typeof KakaoPlaceRawSchema>;

/** @deprecated Use RestaurantResponse internally or KakaoPlaceRaw only at the adapter boundary. */
export type KakaoRestaurantResponseDto = KakaoPlaceRaw;
