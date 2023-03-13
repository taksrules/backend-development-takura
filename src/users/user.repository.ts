import { Repository } from "typeorm";
import {InternalServerErrorException} from '@nestjs/common'
import { CreateUserDto } from "./dto/users.dtos";
import {  CustomRepository } from "src/database/typeorm-ex.decorator";
import { User } from "./entities/user.entity";
const bcrypt = require("bcrypt");
@CustomRepository(User)
export class UserRepository extends Repository<User>{
    async createUser(userDto :CreateUserDto, randompassword ): Promise<any>{
        const password=await bcrypt.hash(randompassword,10)
        const user= this.create({...userDto, password});
        try{
            await this.save(user);
            return user;
        }
        catch(error){
            throw new InternalServerErrorException("User Already Created")
        }
    }
}
