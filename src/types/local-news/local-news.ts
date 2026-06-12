export interface LocalNewsNoti {
  id: number;
  type: "school" | "restaurant" | "area";
  title: string;
  time: string;
  message: string;
  period: string;
  imageUrl?: string;
}
export interface MatchingInviteNoti {
  id: number;
  type: "invitation" | "recruit";
  title: string;
  time: string;
  message: string;
  period: string;
  imageUrl: string;
}
