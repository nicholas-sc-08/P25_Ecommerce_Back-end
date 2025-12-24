import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO, UserUpdateDTO } from './user.dto';
import * as bcrypt from "bcrypt";
import { updateUserSchema, userSchema } from './user.zod';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    this.userService = userService;
  };

  @Get()
  async getAll(): Promise<UserDTO[]> {
    const users = await this.userService.getAll();

    if (!users) {
      throw new Error("Error on get all users!");
    };

    return users;
  };

  @Get("/:id")
  async getUnique(@Param() id: number): Promise<UserDTO> {
    const user = await this.userService.getUnique(id);

    if (!user) {
      throw new Error("User not found");
    };

    return user;
  };

  @Post()
  async post(@Body() data: UserDTO): Promise<UserDTO> {

    const validateUser = userSchema.parse(data);
    
    if (!validateUser) {
      throw new Error("Error on Zod valitation!");
    };
        
    const hashPassword = await bcrypt.hash(validateUser.password, 10);
    const safeUser = { ...validateUser, password: hashPassword };
    const user = await this.userService.create(safeUser);
    return user;
  };

  @Put("/:id")
  async put(@Param() id: number, @Body() data: UserUpdateDTO): Promise<UserDTO> {

    const validateUser = updateUserSchema.parse(data);

    if (!validateUser) {
      throw new Error("Error on zod validation!");
    };

    if (data.password) {

      const hashPassword = await bcrypt.hash(validateUser.password, 10);
      const safeUser = { ...validateUser, password: hashPassword };
      return await this.userService.update(id, safeUser);
    };

    return await this.userService.update(id, validateUser);
  };

  @Delete("/:id")
  async delete(@Param()id: number): Promise<void> {

    await this.userService.delete(id);
  };
}
