import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';

import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/service/users/users.service';



@Module({
  imports:[UsersModule,JwtModule.registerAsync({
    imports:[ConfigModule,UsersModule],
    useFactory:async () => ({
      secret:"theme",
    }),
    inject:[ConfigService]
  })
  ],
  providers: [AuthService ],
   controllers:[AuthController]
})
export class AuthModule {}
