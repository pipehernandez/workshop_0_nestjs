import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //forFeature sirve para registrar entidades y proveer repositorios en el contexto de un modulo en especifico, lo que facilita la inyeccion de dependencias y uso de estas entidades dentro de los modulos
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
