export type RewardType = "WEEK" | "MONTH";

export interface WeekProgress {
  days: boolean[];
  completed: number;
  goal: number;
}

export interface MonthProgress {
  count: number;
  goal: number;
}

export interface ChallengeStatusResponse {
  week: WeekProgress;
  month: MonthProgress;
  weekRewardAvailable: boolean;
  monthRewardAvailable: boolean;
}

export interface ClaimChallengeRewardRequest {
  type: RewardType;
}
