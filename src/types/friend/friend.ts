import { UserId } from "../profile/user";

// 클라 서버
export interface Friend {
  userId: UserId;
  name: string;
  lastActive: string;
  isHungry: boolean;
}
