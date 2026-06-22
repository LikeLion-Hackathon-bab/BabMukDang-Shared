import type { MealPlanDecisionCandidate } from "./meal-plan.contracts";

/**
 * Stable semantic identity for persisted decision candidates.
 *
 * Candidate payloads are stored in JSON columns and may change object-key order
 * or non-identity metadata (`createdAt`, score, image metadata) across API
 * reads. All vote toggles, candidate materialization, recommendation refreshes,
 * and search cache keys must use this value rather than JSON.stringify().
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
      // The same food can arrive from search, recent history, or AI with a
      // different menuCandidateId. Food code is the vote/candidate identity.
      return `MENU:${candidate.value.menu.code}`;
    case "RESTAURANT":
      return `RESTAURANT:${candidate.value.candidateId ?? candidate.value.restaurantId}`;
    case "FINAL_CONFIRMATION":
      return "FINAL_CONFIRMATION:READY";
  }

  // Keeps the helper total if the Shared union gains a new stage type before
  // this mapping is extended. Callers still get deterministic equality.
  return `UNKNOWN:${JSON.stringify(candidate)}`;
}

/**
 * Search cache identity intentionally contains only the provisional area/menu
 * candidate identities. It changes exactly when the winning provisional pair
 * changes, not when response display metadata changes.
 */
export function getMealPlanRestaurantProvisionCacheKey(
  area: Extract<MealPlanDecisionCandidate, { stageType: "AREA" }>,
  menu: Extract<MealPlanDecisionCandidate, { stageType: "MENU" }>,
): string {
  return `restaurant-search:${getMealPlanDecisionCandidateKey(area)}:${getMealPlanDecisionCandidateKey(menu)}`;
}
