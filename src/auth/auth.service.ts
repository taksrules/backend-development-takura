import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { UsersService } from 'src/users/service/users/users.service';
import { UserRepository } from 'src/users/user.repository';
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { verify } from 'crypto';
const bcrypt= require('bcrypt')

@Injectable()
export class AuthService {
    constructor( private userService:UsersService
    ,private jwtService: JwtService,private configService: ConfigService,) {}

  
    async login(userId:AuthLoginDto) {
      const user = await this.userService.findByEmail(userId.email);
      await this.verifyPassword(userId.password, user.password);
      user.password= undefined;
      const payload= {
        userid:user.id,
        email:user.email,
        username:user.firstname+""+user.lastname,

      };
      return {accesstoken:this.jwtService.sign(payload)}
    }

    
      private async verifyPassword(plaine:string, hashedPassword:string){
        const isPasswordMatching= await bcrypt.compareSync(plaine,hashedPassword);

        if(!isPasswordMatching){
          throw new HttpException("Wrong credentials", HttpStatus.BAD_REQUEST)
        }
      }
}

