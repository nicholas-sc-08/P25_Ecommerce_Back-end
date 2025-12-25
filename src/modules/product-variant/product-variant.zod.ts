import z from "zod";

export const productVariantSchema = z.object({
    size: z.string().min(1),
    price: z.number().positive().min(1),
    quantity: z.number().positive().min(1)
});

export const productVariantUpdateSchema = productVariantSchema.partial();