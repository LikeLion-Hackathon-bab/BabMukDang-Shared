import {
  MEAL_PLAN_NOTIFICATION_PRIORITY_POLICIES,
  type MealPlanNotificationSchema,
} from "./meal-plan.schema";
import type { z } from "zod";

type MealPlanNotificationPriorityChannel =
  | "HOME"
  | "NOTIFICATION_INBOX"
  | "FCM_PUSH"
  | "LIVE_ACTIVITY";

type MealPlanNotificationKind = keyof typeof MEAL_PLAN_NOTIFICATION_PRIORITY_POLICIES;
type MealPlanNotification = z.infer<typeof MealPlanNotificationSchema>;
export type MealPlanNotificationPriorityPolicy =
  (typeof MEAL_PLAN_NOTIFICATION_PRIORITY_POLICIES)[MealPlanNotificationKind];

const DEFAULT_POLICY: MealPlanNotificationPriorityPolicy =
  MEAL_PLAN_NOTIFICATION_PRIORITY_POLICIES.MEAL_PLAN_PARTICIPANT_JOINED;

export function getMealPlanNotificationPriorityPolicy(
  kind: string,
): MealPlanNotificationPriorityPolicy {
  return (
    MEAL_PLAN_NOTIFICATION_PRIORITY_POLICIES[
      kind as MealPlanNotificationKind
    ] ?? DEFAULT_POLICY
  );
}

export function getMealPlanNotificationPriority(
  kind: string,
  channel: MealPlanNotificationPriorityChannel = "HOME",
): number {
  const policy = getMealPlanNotificationPriorityPolicy(kind);
  switch (channel) {
    case "HOME":
      return policy.homePriority;
    case "NOTIFICATION_INBOX":
      return policy.inboxPriority;
    case "FCM_PUSH":
      return policy.fcmPriority;
    case "LIVE_ACTIVITY":
      return policy.liveActivityPriority;
    default:
      return policy.priority;
  }
}

export function getMealPlanLiveActivityBehavior(kind: string) {
  return getMealPlanNotificationPriorityPolicy(kind).liveActivityBehavior;
}

export function shouldShowForegroundToast(kind: string): boolean {
  return getMealPlanNotificationPriorityPolicy(kind).foregroundToast;
}

export function compareMealPlanNotificationsByPriority(
  channel: MealPlanNotificationPriorityChannel,
): (a: Pick<MealPlanNotification, "kind" | "createdAt" | "readAt">, b: Pick<MealPlanNotification, "kind" | "createdAt" | "readAt">) => number {
  return (a, b) => {
    const unreadDelta = Number(Boolean(a.readAt)) - Number(Boolean(b.readAt));
    if (unreadDelta !== 0) return unreadDelta;

    const priorityDelta =
      getMealPlanNotificationPriority(a.kind, channel) -
      getMealPlanNotificationPriority(b.kind, channel);
    if (priorityDelta !== 0) return priorityDelta;

    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  };
}
