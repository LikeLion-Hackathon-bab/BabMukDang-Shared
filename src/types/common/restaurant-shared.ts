export type RestaurantId = string;

export interface RestaurantInfo {
  placeId: RestaurantId;
  placeName: string;
  addressName: string;
  roadAddressName: string;
  phoneNumber: string;
  placeUrl: string;
  distance?: string;
  categoryGroupCode: string;
  categoryGroupName: string;
  categoryName: string;
  x: number;
  y: number;
}
export interface KakaoRestaurantResponseDto {
  id: RestaurantId;
  place_name: string;
  category_name: string;
  category_group_name: string;
  distance: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  place_url?: string;
  lat: number;
  lng: number;
}
