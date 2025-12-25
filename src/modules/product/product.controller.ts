import { Controller, Param, Body, Get, Post, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './product.dto';
import { productSchema } from './product.zod';

@Controller('product')
export class ProductController {
  
  constructor(private productService: ProductService) {
    this.productService = productService;
  };

  @Get()
  async getAll(): Promise<ProductDTO[]> {

    return await this.productService.getAll();
  };

  @Get("/:id")
  async getUnique(@Param("id", ParseIntPipe)id: number): Promise<ProductDTO> {

    const product = await this.productService.getProductDetails(id);

    if(!product){
      throw new Error("Product not found");
    };

    return product;
  };

  @Post()
  async create(@Body()data: ProductDTO){

    const productValidate = productSchema.parse(data);

    if(!productValidate){
      throw new Error("Object structure not valid");
    };

    return await this.productService.createFullProduct(data);
  };
};
