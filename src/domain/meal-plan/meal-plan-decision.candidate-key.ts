import type { MealPlanDecisionCandidate } from "./meal-plan.contracts";

/**
 * Stable identity for a decision candidate.
 *
 * Candidate objects are persisted in JSON columns, so object-property order and
 * volatile display metadata such as `createdAt` must never participate in
 * equality checks. Client rendering, vote grouping, and server-side
 * materialization all use this semantic key.
 */
export function getMealPlanDecisionCandidateKey(
  candidate: MealPlanDecisionCandidate,
): string {
  switch (candidate.stageType) {
    case "DATE":
    case "TIME":
      return `${candidate.stageType}:${candidate.value}`;
    case "AREA":
      return `AREA:${candidate.value.locationId}`;
    case "MENU":
      return `MENU:${candidate.value.menuCandidateId}`;
    case "RESTAURANT":
      return `RESTAURANT:${candidate.value.candidateId ?? candidate.value.restaurantId}`;
    case "FINAL_CONFIRMATION":
      return "FINAL_CONFIRMATION:READY";
  }
}
