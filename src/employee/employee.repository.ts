import { Repository } from "typeorm";
import { InternalServerErrorException } from "@nestjs/common";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import {  CustomRepository } from "src/database/typeorm-ex.decorator";
import { Employee } from "./entities/employee.entity";
@CustomRepository(Employee)
export class EmployeeRepository extends Repository<Employee>{
    
}