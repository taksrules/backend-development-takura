import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist";
export class CreateEmployeeDto {
    
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty({type:"string" ,description:"Username"})
    firstname: string;
  
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty({type:"string" ,description:"lastname"})
    lastname: string;
  
    @IsNotEmpty()
    @ApiProperty({type:"string" ,description:"Email"})
    @IsEmail()
    email: string;

    dob?: Date;
    @ApiProperty({type:"number" ,description:"Number"})
    @IsNotEmpty()
    phone: number;

    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty({type:"string" ,description:"addresses"})
    addresses: string;

    @IsNotEmpty()
    @MinLength(2)
    @ApiProperty({type:"string" ,description:"position"})
    position: string;

    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty({type:"string" ,description:"NationalID"})
    NationalID: string;

    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty({type:"string" ,description:"lastname"})
    IDtype : string;



    createdOn?: Date;
    
}
