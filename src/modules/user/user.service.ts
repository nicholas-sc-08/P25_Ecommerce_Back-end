import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prismaService';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {
        this.prisma = prisma;
    };

    async getAll() {
        return await this.prisma.user.findMany();
    };

    async getUnique(id: number) {
        return await this.prisma.user.findUnique({ where: { id } });
    };
}
