import { z } from "zod";
import { RestaurantIdSchema } from "../../common/schema/id.schema";

export const RestaurantSchema = z.object({
  restaurantId: RestaurantIdSchema,
  placeName: z.string(),
  categoryName: z.string(),
  categoryGroupName: z.string(),
  distance: z.string().optional(),
  roadAddressName: z.string(),
  addressName: z.string(),
  phone: z.string().nullable(),
  placeUrl: z.string().url().nullable(),
  lat: z.number(),
  lng: z.number(),
});

export const KakaoPlaceRawSchema = z.object({
  id: RestaurantIdSchema,
  place_name: z.string(),
  category_name: z.string(),
  category_group_name: z.string(),
  distance: z.string(),
  road_address_name: z.string(),
  address_name: z.string(),
  phone: z.string(),
  place_url: z.string().url().optional(),
  lat: z.number(),
  lng: z.number(),
});
