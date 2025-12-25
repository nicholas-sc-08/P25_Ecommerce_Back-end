import { CategoryDTO } from "../category/category.dto";
import { ImageDTO } from "../image/image.dto";
import { ProductVariantDTO } from "../product-variant/product-variant.dto";

export type ProductDTO = {
    id?: number;
    name: string;
    description: string;
    images: ImageDTO[],
    categories: CategoryDTO[],
    variants: ProductVariantDTO[]
};