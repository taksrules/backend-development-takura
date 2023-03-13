import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './service/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { UserRepository } from './user.repository';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
})
export class UsersModule {}
