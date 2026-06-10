import z from "zod";

export const PresignUploadResponseSchema = z.object({
  key: z.string(),
  putUrl: z.string().url(),
  cdnUrl: z.string().url(),
});
