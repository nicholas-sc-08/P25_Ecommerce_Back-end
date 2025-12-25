import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prismaService';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService {

    constructor(private prisma: PrismaService) {
        this.prisma = prisma;
    };

    async getAll(): Promise<ProductDTO[]> {

        return await this.prisma.product.findMany({ include: { images: { where: { isMain: true } }, variants: { orderBy: { price: "asc" } }, categories: true }, });
    };

    async getProductDetails(id: number): Promise<ProductDTO> {

        const product = await this.prisma.product.findUnique({ where: { id: id }, include: { variants: { orderBy: { price: "asc" } }, images: { orderBy: { isMain: "desc" } }, categories: { select: { id: true, name: true, icon: true } } } });

        if (!product) {
            throw new Error("User not found by the ID");
        };

        return product;
    };

    async createFullProduct(data: ProductDTO) {
        return this.prisma.product.create({ data: { name: data.name, description: data.description, variants: { create: data.variants }, images: { create: data.images }, categories: { connectOrCreate: data.categories.map(c => ({ where: { name: c.name }, create: { name: c.name, icon: c.icon } })) } } })
    };
}
