import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { UserRepository } from 'src/users/user.repository';
import { Body, Param, Patch } from '@nestjs/common/decorators';
import { UpdateUserDto } from 'src/users/dto/update-users.dto';
import { Query } from 'typeorm/driver/Query';
import { generate } from 'generate-password-ts';

// const randtoken = require("rand-token");
// const generator = require("generate-password");
// const bcrypt = require("bcrypt");




@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository) private repository:UserRepository
      ) {}
          
      async create(createUserDto: CreateUserDto) {
        // const newUser = this.repository.create(createUserDto);
        return this.repository.save(createUserDto);
      }
           
      async findOOne(id: number) {
        return this.repository.findOneBy({id});
      }
      
      getUsers(){
        return this.repository.find();
      }
     
      async genPassword() {
        const password = generate({
          length: 10,
          numbers: true,
        });
        return password;
      }
    
    async remove(id:number,  status:string){
      return this.repository.delete(id)
    }
      async findOne(id: number): Promise<User | undefined> {
        const newU=  this.repository.findOneBy({id});
        return ;
      }
      @Patch(':id')
      update(@Param('id') id: string , @Body() updateUserdto:UpdateUserDto){
        return this.repository.update(id,updateUserdto)
      }
}

      