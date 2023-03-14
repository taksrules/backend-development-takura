import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './service/users/users.service';
import { TypeOrmModule } from 'src/database/typeorm-ex.module';
import { UserRepository } from './user.repository';



@Module({
  exports:[UsersService],
 
  imports: [TypeOrmModule.forCustomRepository([UserRepository])],

  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
