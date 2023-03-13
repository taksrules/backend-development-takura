import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist";

export class UpdateUserDto {

  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({type:"string" ,description:"Username"})
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({type:"string" ,description:"password"})
  password: string;

  @IsNotEmpty()
  @ApiProperty({type:"string" ,description:"Email"})
  @IsEmail()
  email: string;
}