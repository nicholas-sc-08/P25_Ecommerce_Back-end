import { ProductDTO } from "../product/product.dto";

export type CategoryDTO = {
    id?: number;
    icon: string;
    name: string;
    products?: ProductDTO[]
};