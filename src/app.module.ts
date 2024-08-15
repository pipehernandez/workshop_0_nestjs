import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'b3lhphwbrs2siwrb6jxf-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'umpfotu7ef67mdmj',
      password: 'VNio2J4fvdKLMzVox2Hk',
      database: 'b3lhphwbrs2siwrb6jxf',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
