import { z } from "zod";

const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const ISODateStringSchema = z
  .string()
  .regex(isoDateRegex, "Expected ISO date string in YYYY-MM-DD format");

export const ISODateTimeStringSchema = z
  .string()
  .datetime({ offset: true, message: "Expected ISO datetime string" });

export const TimeHHmmStringSchema = z
  .string()
  .regex(/^\d{2}:\d{2}$/, "Expected time string in HH:mm format");
