import { z } from "zod";
import { MemberIdSchema, ISODateTimeStringSchema } from "@/common";

export const FoodPreferenceTypeSchema = z.enum(["LIKE", "DISLIKE", "ALLERGY"]);
export const FoodPreferenceResponseSchema = z.object({
  id: z.number().int().positive(),
  memberId: MemberIdSchema,
  foodCode: z.string(),
  type: FoodPreferenceTypeSchema,
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
});
