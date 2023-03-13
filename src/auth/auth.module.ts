import { Module } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport/dist';
import { LocalStragety } from './local.strategy';

@Module({
  imports:[User, PassportModule],
  providers: [AuthService, LocalStragety]
})
export class AuthModule {}
