import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return {
      message: 'Usuário criado com sucesso',
      data: this.usersService.create(createUserDto),
    };
  }

  @Get()
  findAll() {
    const users = this.usersService.findAll();
    return {
      message: 'Lista de usuários recuperada com sucesso',
      data: users,
      total: users.length,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      message: 'Usuário encontrado com sucesso',
      data: this.usersService.findOne(id),
    };
  }  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const result = this.usersService.update(id, updateUserDto);
    return {
      message: 'Usuário atualizado com sucesso',
      data: result,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    this.usersService.remove(id);
  }
}
