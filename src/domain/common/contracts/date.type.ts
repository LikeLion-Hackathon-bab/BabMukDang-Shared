import { z } from "zod";
import {
  ISODateStringSchema,
  ISODateTimeStringSchema,
  TimeHHmmStringSchema,
} from "../schema/date.schema";

export type ISODateString = z.infer<typeof ISODateStringSchema>;
export type ISODateTimeString = z.infer<typeof ISODateTimeStringSchema>;
export type TimeHHmmString = z.infer<typeof TimeHHmmStringSchema>;
