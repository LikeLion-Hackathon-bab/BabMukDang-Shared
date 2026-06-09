import { z } from "zod";
import { ISODateTimeStringSchema } from "../../common/schema/date.schema";
import { MemberIdSchema } from "../../common/schema/id.schema";

export const FoodPreferenceTypeSchema = z.enum(["LIKE", "DISLIKE", "ALLERGY"]);
export const FoodPreferenceResponseSchema = z.object({
  id: z.number().int().positive(),
  memberId: MemberIdSchema,
  foodCode: z.string(),
  type: FoodPreferenceTypeSchema,
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema,
});
