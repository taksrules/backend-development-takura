import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {

  constructor(@InjectRepository(EmployeeRepository) private repository:EmployeeRepository){}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return this.repository.save(createEmployeeDto);
  }

  async findAll(page: number, perPage: number, status: string) {
    const limit = perPage | 10;
    let skip =0;
    if (page>1){
      skip= limit *page- limit;

    }
    const [result, total] = await this.repository.find()
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  async update(@Param('id') id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.repository.update(id,updateEmployeeDto)
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
