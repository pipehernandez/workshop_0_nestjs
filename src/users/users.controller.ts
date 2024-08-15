import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: any) {
    return 'User created';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `User with id: ${id}`;
  }
}
