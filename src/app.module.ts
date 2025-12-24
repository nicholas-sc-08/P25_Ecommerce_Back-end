import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prismaService';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env" }), UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
