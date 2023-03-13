import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class AuthLoginDto {
    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty({type:"string" ,description:"password"})
    password: string;
  
    @IsNotEmpty()
    @ApiProperty({type:"string" ,description:"Email"})
    @IsEmail()
    email: string;
}