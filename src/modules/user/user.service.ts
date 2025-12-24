import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prismaService';
import { UserDTO, UserUpdateDTO } from './user.dto';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {
        this.prisma = prisma;
    };

    async getAll(): Promise<UserDTO[]> {
        return await this.prisma.user.findMany();
    };

    async getUnique(id: number): Promise<UserDTO> {
        return await this.prisma.user.findUnique({ where: { id } });
    };

    async create(data: UserDTO): Promise<UserDTO> {
        return await this.prisma.user.create({ data });
    };

    async update(id: number, data: UserUpdateDTO): Promise<UserDTO> {
        return await this.prisma.user.update({ where: { id }, data });
    };

    async delete(id: number): Promise<void> {
        await this.prisma.user.delete({ where: { id } });
    };
}
