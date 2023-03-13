import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { UsersService } from 'src/users/service/users/users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/users/dto/update-users.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @ApiOperation({ summary: 'Get All Users ' })
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @ApiOperation({ summary: 'Get Users By id' })
  @Get('id/:id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOOne(id);
  }
  @Patch('status/:id')
  remove(@Param('id') id: number , @Query('status') status:string){
    return this.userService.remove(id, status)
  }
  @ApiOperation({ summary: 'Create Users' })
  @Post('create')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  update(id,updateUserdto: UpdateUserDto)
  {
    return this.userService.update(id,updateUserdto);
  }

}
