import z from "zod";
import type { ImageDTO } from "../image/image.dto";
import { CategoryDTO } from "../category/category.dto";
import { ProductVariantDTO } from "../product-variant/product-variant.dto";
import { categorySchema } from "../category/category.zod";
import { imageSchema } from "../image/image.zod";
import { productVariantSchema } from "../product-variant/product-variant.zod";

export const productSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    images: z.array(imageSchema).min(1),
    categories: z.array(categorySchema).min(1),
    variants: z.array(productVariantSchema).min(1)
});

export const productUpdateSchema = productSchema.partial();