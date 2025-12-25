import z from "zod";

export const imageSchema = z.object({
    url: z.string().min(1),
    alt: z.string().min(1),
    isMain: z.boolean(),
});

export const imageUpdateSchema = imageSchema.partial();