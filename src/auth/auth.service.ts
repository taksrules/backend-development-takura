import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { UsersService } from 'src/users/service/users/users.service';
import { UserRepository } from 'src/users/user.repository';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserRepository) private userRepo:UserRepository,) {}

  
  async create(createUserdto: CreateUserDto){
    const password = await this.genPassword();

  }
}
