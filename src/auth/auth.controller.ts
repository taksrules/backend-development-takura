import { Body, Controller ,Post} from "@nestjs/common";

import { AuthService } from "./auth.service";
import { AuthLoginDto } from "./dto/auth-login.dto";

@Controller('auth')
export class AuthController{
    constructor (private readonly authService: AuthService){
    }
    @Post()
    async login(@Body() userId: AuthLoginDto){
        return this.authService.login(userId);
    }
}