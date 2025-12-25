import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prismaService';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './modules/product/product.module';
import { ImageModule } from './modules/image/image.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductVariantModule } from './modules/product-variant/product-variant.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env" }), UserModule, ProductModule, ImageModule, CategoryModule, ProductVariantModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
