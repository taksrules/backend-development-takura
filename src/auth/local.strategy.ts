import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStragety extends PassportStrategy(Strategy){
    constructor(private authService : AuthService){
        super();
    }
    // async validate(id: number , password: string ): Promise<any> {
    //     const user= await this.authService.validateUser(id, password);
    //     if(!user){
    //         throw new UnauthorizedException();
    //     }
    //     return user;
    }
// }