import z from "zod";

export const UploadPresignImageResponseSchema = z.object({
  key: z.string(),
  putUrl: z.string().url(),
  cdnUrl: z.string().url(),
});

export const UploadPresignImageRequestSchema = z.object({
  contentType: z.string(),
});
